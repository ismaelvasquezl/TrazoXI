/* TrazoXI FX — motor de técnicas visuales, compartido por todas las páginas.
   Autónomo, sin dependencias, tolerante a fallos. Se auto-inicializa al cargar. */
(function(){
  'use strict';
  if(window.__TRAZO_FX) return; window.__TRAZO_FX=true;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var REVEAL = '.card,.pc,.kpi,.term,.pmc,.lamina,.vcard,.rcard';

  /* --- 1) BLUR-UP + CROSSFADE al revelar --- */
  var io = (!reduce && 'IntersectionObserver' in window) ? new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('fx-in'); io.unobserve(e.target); } });
  }, {threshold:0.06, rootMargin:'0px 0px -4% 0px'}) : null;

  function mark(root){
    var els=(root||document).querySelectorAll(REVEAL), i, stagger=0, last=null;
    for(i=0;i<els.length;i++){ var el=els[i];
      if(el.__fx) continue; el.__fx=1; el.classList.add('fx-reveal');
      // escalonado suave entre hermanos cercanos
      if(el.parentNode===last) stagger=Math.min(stagger+40,200); else stagger=0;
      last=el.parentNode; el.style.setProperty('--fx-d', stagger+'ms');
    }
  }
  function observe(){
    var els=document.querySelectorAll('.fx-reveal:not(.fx-in)'), i;
    for(i=0;i<els.length;i++){ if(io) io.observe(els[i]); else els[i].classList.add('fx-in'); }
  }

  /* --- 2) CROSSFADE entre vistas al cambiar de pestaña --- */
  function watchViews(){
    var views=document.querySelectorAll('.view'), i;
    for(i=0;i<views.length;i++){ (function(v){
      try{
        var mo=new MutationObserver(function(){
          if(v.classList.contains('active')){
            if(!reduce){ v.classList.remove('fx-cf'); void v.offsetWidth; v.classList.add('fx-cf'); }
            mark(v); observe();
          }
        });
        mo.observe(v,{attributes:true,attributeFilter:['class']});
      }catch(e){}
    })(views[i]); }
  }

  /* --- 3) MAGNIFICACIÓN en gráficos y mapas --- */
  function markMagnify(){
    var sel=document.querySelectorAll('.chart-wrap, .pitchwrap, svg.pitch, [data-fx-magnify]'), i;
    for(i=0;i<sel.length;i++){ if(!sel[i].__mg){ sel[i].__mg=1; sel[i].classList.add('fx-magnify'); } }
  }

  /* --- 4) SHARED ELEMENT: expone helper para animar modal desde una tarjeta --- */
  // Uso: TrazoFX.growFrom(sourceEl, modalEl, backdropEl)
  window.TrazoFX = {
    growFrom:function(src, modal, backdrop){
      try{
        if(backdrop) backdrop.classList.add('fx-backdrop');
        if(reduce || !src || !modal) return;
        // calcular origen y escala relativos para la ilusión de "elemento compartido"
        var mr = modal.getBoundingClientRect(), sr = src.getBoundingClientRect();
        var ox = ((sr.left+sr.width/2) - mr.left), oy = ((sr.top+sr.height/2) - mr.top);
        modal.style.setProperty('--fx-ox', ox+'px');
        modal.style.setProperty('--fx-oy', oy+'px');
        modal.style.setProperty('--fx-s', Math.max(0.2, Math.min(0.6, sr.width/Math.max(1,mr.width))).toFixed(3));
        modal.classList.remove('fx-grow'); void modal.offsetWidth; modal.classList.add('fx-grow');
      }catch(e){}
    },
    // crossfade de navegación entre páginas con View Transitions (si el navegador soporta)
    nav:function(url){
      if(document.startViewTransition){ document.startViewTransition(function(){ location.href=url; }); }
      else location.href=url;
    },
    refresh:function(){ mark(); observe(); markMagnify(); }
  };

  /* --- 5) VISOR AMPLIADO de canchas (click para abrir, táctil/desktop) --- */
  function buildLightbox(){
    if(document.getElementById('fxLightbox')) return document.getElementById('fxLightbox');
    var ov=document.createElement('div'); ov.id='fxLightbox'; ov.className='fx-lightbox';
    ov.innerHTML='<div class="fx-lb-inner"><button class="fx-lb-close" aria-label="Cerrar">✕</button><div class="fx-lb-body"></div><div class="fx-lb-hint">Toca fuera o ✕ para cerrar</div></div>';
    document.body.appendChild(ov);
    ov.addEventListener('click',function(e){ if(e.target===ov || e.target.className==='fx-lb-close') closeLightbox(); });
    return ov;
  }
  function openLightbox(svg){
    var ov=buildLightbox(), body=ov.querySelector('.fx-lb-body');
    var clone=svg.cloneNode(true);
    clone.removeAttribute('width'); clone.removeAttribute('height');
    clone.style.maxWidth='100%'; clone.style.width='100%'; clone.style.height='auto';
    clone.classList.remove('fx-magnify');
    body.innerHTML=''; body.appendChild(clone);
    ov.classList.add('show');
  }
  function closeLightbox(){ var ov=document.getElementById('fxLightbox'); if(ov) ov.classList.remove('show'); }
  function wireLightbox(){
    document.addEventListener('click',function(e){
      if(!e.target.closest) return;
      var hit=e.target.closest('svg.pitch, .fx-lens');
      if(!hit) return;
      var svg=(hit.tagName && hit.tagName.toLowerCase()==='svg') ? hit : hit.querySelector('svg');
      if(svg){ e.preventDefault(); openLightbox(svg); }
    });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeLightbox(); });
  }

  function init(){
    mark(); observe(); watchViews(); markMagnify(); wireLightbox();
    // re-escanear contenido renderizado dinámicamente
    var n=0, iv=setInterval(function(){ mark(); observe(); markMagnify(); if(++n>25) clearInterval(iv); }, 350);
  }
  if(document.readyState!=='loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
