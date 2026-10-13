import re,json,sys
def num(x):
    try: return float(x) if '.' in x else int(x)
    except: return None
def split_fields(rest):
    return [t.strip() for t in re.split(r'\s{2,}',rest.strip()) if t.strip()]
def pair(tok):
    """'187 / 159 85%' -> (187,159); '40 / 22' -> (40,22); '-' -> (0,0); '0 / 0.52' -> (0,0.52)"""
    if tok in ('-',''): return (0,0)
    m=re.match(r'^([\d.<]+)\s*/\s*([\d.<]+)',tok)
    if m:
        a,b=m.group(1).replace('<',''),m.group(2).replace('<','')
        return (num(a),num(b))
    return (num(tok),None)
ROW=re.compile(r'^\s*(\d{1,2})\s+([A-ZÁÉÍÓÚÑ][^\d]*?)\s+(\d{1,3})\s{2,}(.*)$')
def parse_page(txt,ncols):
    out={}
    for l in txt.split('\n'):
        m=ROW.match(l)
        if not m: continue
        d,n,mins,rest=m.groups()
        f=split_fields(rest)
        # fix compact tokens like '7/3' merged? keep
        if len(f)<ncols:
            # try splitting tokens like '8/2  ' already; pad
            f=f+['-']*(ncols-len(f))
        out[int(d)]=dict(n=n.strip(),min=int(mins),f=f[:ncols])
    return out
def parse_informe(path):
    pages=open(path,encoding='utf-8').read().split('\f')
    head=[l.strip() for l in pages[0].split('\n') if l.strip()]
    P={}
    # locate pages by title
    def find(title,start=0):
        for i,p in enumerate(pages):
            if title in p and i>=start: return i
    full='\f'.join(pages)
    a=full.index('Goles / xG'); b=full.index('Duelos defensivos/'); c=full.index('Pases hacia adelante/')
    end=full.index('FORMACIONES')
    s=parse_page(full[a:b],11); du=parse_page(full[b:c],12); org=parse_page(full[c:end],12)
    players=[]
    for d,r in s.items():
        f=r['f']
        g,xg=pair(f[0]); a,xa=pair(f[1]); sh,sot=pair(f[2]); pa,pac=pair(f[3]); cr,crc=pair(f[4]); rg,rgok=pair(f[5]); du_,duok=pair(f[6])
        perd,perdPM=pair(f[7]); rec,recMA=pair(f[8]); toq=num(f[9]) if f[9]!='-' else 0
        cy,cr_=pair(f[10])
        p=dict(d=d,n=r['n'],min=r['min'],g=g or 0,xg=xg or 0,a=a or 0,xa=xa or 0,tiros=sh or 0,arco=sot or 0,pases=pa or 0,pasesC=pac or 0,
               centros=cr or 0,centrosC=crc or 0,regInt=rg or 0,regOk=rgok or 0,duInt=du_ or 0,duOk=duok or 0,perd=perd or 0,perdPropia=perdPM or 0,
               rec=rec or 0,recAdv=recMA or 0,toq=toq or 0,ta=cy or 0,tr=cr_ or 0)
        if d in du:
            ff=du[d]['f']
            dd,ddok=pair(ff[0]); do,dook=pair(ff[1]); ae,aeok=pair(ff[2]); sb,sbok=pair(ff[3]); ti=num(ff[4]) if ff[4]!='-' else 0
            it,desp=pair(ff[5]); en,enok=pair(ff[6]); fa,fr=pair(ff[7])
            p.update(duDef=dd or 0,duDefOk=ddok or 0,duOf=do or 0,duOfOk=dook or 0,aer=ae or 0,aerOk=aeok or 0,intc=it or 0,despejes=desp or 0,faltas=fa or 0,faltasRec=fr or 0)
        if d in org:
            ff=org[d]['f']
            fw,fwc=pair(ff[0]); pr,prc=pair(ff[5]); u3,u3c=pair(ff[6]); lg,lgc=pair(ff[4])
            kp=num(ff[9]) if ff[9]!='-' else 0
            p.update(pAdel=fw or 0,pAdelC=fwc or 0,pLargos=lg or 0,pLargosC=lgc or 0,prog=pr or 0,progC=prc or 0,ult3=u3 or 0,ult3C=u3c or 0,pClave=kp or 0)
        players.append(p)
    return dict(head=head[:12],players=sorted(players,key=lambda x:-x['min']))
if __name__=='__main__':
    r=parse_informe(sys.argv[1]); print(json.dumps(r['head'],ensure_ascii=False))
    for p in r['players']: print(p)

# ---------------- nivel EQUIPO (Hudl "Informe del equipo") ----------------
LABS={'GOLES':'g','XG':'xg','POSESIÓN DEL BALÓN, %':'pos','PRECISIÓN PASES, &':'pase','INTENSIDAD DE JUEGO':'int','DISTRIBUCIÓN LANZAMIENTOS, %':'lanz','PPDA RC_PPDA_ABBR':'ppda'}
def parse_formaciones(page):
    segs=[]; cur=None
    for l in page.split('\n'):
        mf=re.search(r'(\d-\d(?:-\d){1,3})\s*$',l)
        if mf and not re.search(r'GOLES|XG|POSESI',l):
            cur=dict(form=mf.group(1),pct=None,us={},them={}); segs.append(cur); continue
        mp=re.search(r'(?<![\d.])(\d+)%\s*$',l)
        if mp and cur and cur['pct'] is None and l.count('%')==1 and 'GOLES' not in l: cur['pct']=int(mp.group(1)); continue
        for lab,k in LABS.items():
            m=re.search(r'([\d.]+)\s*'+re.escape(lab)+r'\s*([\d.]+)',l)
            if m and cur is not None:
                cur['us'][k]=float(m.group(1)); cur['them'][k]=float(m.group(2))
    segs=[s for s in segs if 'xg' in s['us']]
    known=sum(s['pct'] for s in segs if s['pct'] is not None); miss=[s for s in segs if s['pct'] is None]
    for s in miss: s['pct']=round((100-known)/len(miss)); s['pctInferido']=True
    return segs
def parse_grids(page):
    """3 cuadrículas (recuperaciones, pérdidas, faltas): totales por tercio [propio,medio,ataque], por carril [izq,centro,der] y celdas 3x3 en % (filas=carriles izq/centro/der, cols=tercios)."""
    out={}
    keys=[('recuperaciones','Recuperaciones de balón'),('perdidas','Pérdidas de balón'),('faltas','Faltas cometidas')]
    for i,(k,title) in enumerate(keys):
        a=page.index(title); b=page.index(keys[i+1][1]) if i<2 else len(page)
        triples=[];lanes=[]
        for l in page[a:b].split('\n'):
            t=[float(x) for x in re.findall(r'(\d+(?:\.\d+)?)%',l)]
            if len(t)==3: triples.append(t)
            elif len(t)==1: lanes.append(t[0])
            elif len(t)==4: lanes.append(t[0]); triples.append(t[1:])  # carril pegado a la fila
            elif len(t)==2:  # fila con celda partida (raro): ignorar
                pass
        if len(triples)>=4 and len(lanes)>=3:
            out[k]=dict(tercios=triples[0],carriles=lanes[:3],celdas=triples[1:4])
    return out
def parse_dims(full):
    i=full.index('PA R T I D O S'); seg=full[i:i+20000]
    m=re.findall(r'(\d+)\s*m\b',seg)
    return dict(ancho=int(m[0]),largo=int(m[1])) if len(m)>=2 else None
def parse_tiros(full):
    i=full.index('FINALIZACIÓN'); seg=full[i:i+6000]
    d={}
    for lab,k in [('Total','total'),('Tiros con pie','pie'),('Tiros de cabeza','cabeza'),('Dentro del área de penalti','dentro'),('Fuera del área de penalti','fuera'),('Después de centros','trasCentro'),('Desde jugadas a balón parado','abp')]:
        m=re.search(re.escape(lab)+r'\s+(\d+)\s*/\s*(\d+)\s+[\d.NaN]+%\s+([\d.]+)\s+(\d+)',seg)
        if m: d[k]=dict(tiros=int(m.group(1)),arco=int(m.group(2)),xg=float(m.group(3)),goles=int(m.group(4)))
    mt=re.search(r'\n\s*((?:\d+\s+){5}\d+)\s*\n\s*1-15',seg)
    if mt: d['porTramo']=[int(x) for x in mt.group(1).split()]
    return d
def parse_team(path):
    full=open(path,encoding='utf-8').read()
    pages=full.split('\f')
    fpage=[p for p in pages if 'FORMACIONES' in p][0]
    tpage=[p for p in pages if 'TRANSICIONES' in p and 'Recuperaciones de balón' in p][0]
    return dict(formaciones=parse_formaciones(fpage),grids=parse_grids(tpage),dims=parse_dims(full),tiros=parse_tiros(full))
