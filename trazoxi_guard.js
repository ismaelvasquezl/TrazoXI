/* ===================================================================
   TrazoXI · Guardián universal anti-cuelgue
   Cárgalo como PRIMER <script> de cada página. No depende de nada.
   Si cualquier error no previsto escapa (incluido asíncrono: Chart.js
   con datos raros, un dato en null, etc.), esta red de seguridad:
     1) registra el error en consola (para diagnóstico),
     2) cierra cualquier overlay/modal que haya quedado abierto,
        de modo que la página NUNCA quede "pegada" detrás de una capa,
     3) deja la navegación por pestañas/menús intacta.
   No cambia nada si no hay errores: es solo un seguro.
   =================================================================== */
(function(){
  if (window.__trazoxiGuard) return; window.__trazoxiGuard = true;
  // Selectores de capas que podrían tapar la página en los distintos tableros.
  var OVERLAY_SEL = '#ov, #ovl, #overlay, .overlay, .modal-overlay, #modal, .modal';
  var SHOW_CLASSES = ['show','open','visible','active'];
  function clearOverlays(){
    try{
      var nodes = document.querySelectorAll(OVERLAY_SEL);
      for (var i=0;i<nodes.length;i++){
        var n = nodes[i];
        for (var j=0;j<SHOW_CLASSES.length;j++) n.classList && n.classList.remove(SHOW_CLASSES[j]);
      }
      // restablece el scroll por si algún modal lo bloqueó
      if (document.body) document.body.style.overflow = '';
    }catch(e){}
  }
  window.addEventListener('error', function(ev){
    try{ console.error('[TrazoXI guard] error contenido:', ev && (ev.error || ev.message)); }catch(e){}
    clearOverlays();
  });
  window.addEventListener('unhandledrejection', function(ev){
    try{ console.error('[TrazoXI guard] promesa rechazada:', ev && ev.reason); }catch(e){}
    clearOverlays();
  });
  // Tecla Escape: cierra cualquier overlay siempre, como salida de emergencia.
  window.addEventListener('keydown', function(ev){ if (ev.key === 'Escape') clearOverlays(); });
})();
