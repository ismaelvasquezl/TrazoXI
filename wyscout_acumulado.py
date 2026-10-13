#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ACUMULADO HUDL WYSCOUT — por EQUIPO y por JUGADOR (todos los informes entregados).
Fuentes que compila (se suman solas al dejar nuevos informes):
  1) hudl_informes/<club>/*.txt  -> informes «Informe del equipo» por partido (texto de pdftotext -layout).
     Se excluyen los agregados (nombre con 'agregado'). Parser: wyscout_parse_informe.py
  2) nosotros_partidos.js        -> Coquimbo, 5 informes previos por jugador (NOSOTROS_PM) + nombres de nosotros.js
  3) wyscout.js                  -> Colo-Colo, 5 informes «Informe Partido» (solo nivel equipo: xG, xG rival, posesión, PPDA, duelos)
Regla: no inventar. Un campo que el informe no trae queda null (no 0).
Salida: wyscout_acumulado.js (const WY_ACUM={...}).
USO: python3 wyscout_acumulado.py   (para un PDF nuevo: pdftotext -layout X.pdf X.txt dentro de hudl_informes/<club>/)
"""
import json, re, sys
from pathlib import Path
BASE = Path(__file__).resolve().parent
sys.path.insert(0, str(BASE))
from wyscout_parse_informe import parse_informe, parse_team

CLUB_DIR = {"coquimbo": "Coquimbo Unido", "nublense": "Ñublense", "colocolo": "Colo-Colo"}
NUM = ["min","g","xg","a","xa","tiros","arco","pases","pasesC","regInt","regOk","duInt","duOk","perd","rec","toq"]
EXT = ["centros","centrosC","perdPropia","recAdv","duDef","duDefOk","duOf","duOfOk","aer","aerOk","intc","despejes","faltas","faltasRec","prog","progC","ult3","ult3C","ta","tr"]

def js_obj(txt):
    """objeto literal JS simple -> JSON (claves sin comillas, sin comentarios)."""
    txt = re.sub(r'^\s*//.*$', '', txt, flags=re.M)
    txt = re.sub(r'([{,]\s*)([A-Za-z_]\w*)\s*:', r'\1"\2":', txt)
    txt = re.sub(r',(\s*[}\]])', r'\1', txt)
    return json.loads(txt)

def load_const(path, name):
    t = (BASE / path).read_text(encoding="utf-8")
    m = re.search(r'const\s+' + name + r'\s*=\s*(\{.*\});', t, re.S)
    return t, m.group(1)

def head_info(path):
    h = [l.strip() for l in path.read_text(encoding="utf-8").split('\f')[0].split('\n') if l.strip()]
    team = h[1]; m = re.match(r'(.+?)\s+(\d+)\s+–\s+(\d+)\s+(.+)', h[2]); d = h[3]
    home, gh, ga_, away = m.group(1), int(m.group(2)), int(m.group(3)), m.group(4)
    loc = "L" if home.lower().startswith(team.lower()[:6]) else "V"
    gf, ga = (gh, ga_) if loc == "L" else (ga_, gh)
    rival = away if loc == "L" else home
    fecha = f"{d[6:10]}-{d[3:5]}-{d[0:2]}"
    return team, fecha, rival, loc, gf, ga

equipos, jugadores = {}, {}
def team_entry(team):
    return equipos.setdefault(team, {"partidos": [], "informes": []})
def add_player(team, d, n, fecha, rival, row):
    key = f"{team}|{d}"
    p = jugadores.setdefault(key, {"team": team, "d": d, "n": n, "partidos": []})
    if len(n) > len(p["n"]): p["n"] = n
    p["partidos"].append(dict(fecha=fecha, rival=rival, **row))

# ---------- 1) informes «Informe del equipo» por partido ----------
for f in sorted((BASE / "hudl_informes").glob("*/*.txt")):
    if "agregado" in f.name: continue
    team, fecha, rival, loc, gf, ga = head_info(f)
    rival = {"Colo Colo": "Colo-Colo"}.get(rival, rival)
    P = parse_informe(str(f))["players"]; T = parse_team(str(f))
    segs = T["formaciones"]; cov = sum(s["pct"] for s in segs) or 1
    S = lambda k: sum(p.get(k, 0) for p in P)
    e = team_entry(team); e["informes"].append(f"{f.parent.name}/{f.name}")
    e["partidos"].append(dict(fecha=fecha, rival=rival, loc=loc, gf=gf, ga=ga,
        xg=round(S("xg"), 2), xga=round(sum(s["them"]["xg"] for s in segs), 2), xgaCobertura=cov,
        pos=round(sum(s["us"]["pos"] * s["pct"] for s in segs) / cov, 1),
        ppda=round(sum(s["us"]["ppda"] * s["pct"] for s in segs) / cov, 1),
        duelos=round(100 * S("duOk") / S("duInt")) if S("duInt") else None,
        pasePct=round(100 * S("pasesC") / S("pases")) if S("pases") else None,
        tiros=S("tiros"), arco=S("arco"), perd=S("perd"), rec=S("rec"),
        recAdv=S("recAdv"), aerPct=round(100 * S("aerOk") / S("aer")) if S("aer") else None,
        formaciones=[f"{s['form']} {s['pct']}%" for s in segs],
        ancho=(T["dims"] or {}).get("ancho"), largo=(T["dims"] or {}).get("largo"),
        fuente="Hudl «Informe del equipo»"))
    for p in P:
        add_player(team, p["d"], p["n"], fecha, rival, {k: p.get(k) for k in NUM + EXT})

# ---------- 2) Coquimbo: 5 informes previos (NOSOTROS_PM) ----------
try:
    _, raw = load_const("nosotros_partidos.js", "NOSOTROS_PM"); PM = js_obj(raw)
    _, rawN = load_const("nosotros.js", "NOSOTROS")
    names = {int(m.group(1)): m.group(2) for m in re.finditer(r'\{d:(\d+),n:"([^"]+)"', rawN)}
    e = team_entry("Coquimbo Unido"); e["informes"].append("nosotros_partidos.js (5 informes Hudl previos)")
    for i, pt in enumerate(PM["partidos"]):
        f = pt["fecha"]; fecha = f"{f[6:10]}-{f[3:5]}-{f[0:2]}"
        m = re.search(r'(\d+)–(\d+)', pt["vs"]); a, b = int(m.group(1)), int(m.group(2))
        gf, ga = (a, b) if pt["vs"].startswith("Coquimbo") else (b, a)
        rows = [v[i] for v in PM["jug"].values() if v[i]]
        sm = lambda k: sum((r.get(k) or 0) for r in rows)
        e["partidos"].append(dict(fecha=fecha, rival=pt["rival"], loc=pt["loc"], gf=gf, ga=ga,
            xg=round(sm("xg"), 2), xga=None, xgaCobertura=None, pos=None, ppda=None,
            duelos=round(100 * sm("duOk") / sm("duInt")) if sm("duInt") else None,
            pasePct=round(100 * sm("pasesC") / sm("pases")) if sm("pases") else None,
            tiros=sm("tiros"), arco=sm("arco"), perd=sm("perd"), rec=sm("rec"), recAdv=None, aerPct=None,
            formaciones=[], ancho=None, largo=None, fuente="Hudl «Informe Partido» (nosotros_partidos.js)"))
        for d, arr in PM["jug"].items():
            r = arr[i]
            if not r: continue
            row = {k: r.get(k) for k in NUM}
            if int(d) == 13:  # arquero: solo minutos y pases
                row = {k: (r.get(k) if k in ("min", "pases", "pasesC") else 0) for k in NUM}
            add_player("Coquimbo Unido", int(d), names.get(int(d), f"#{d}"), fecha, pt["rival"], row)
except Exception as ex:
    print("AVISO nosotros_partidos.js:", ex)

# ---------- 3) Colo-Colo: nivel equipo desde wyscout.js ----------
try:
    t = (BASE / "wyscout.js").read_text(encoding="utf-8")
    blk = re.search(r'"Colo-Colo":\s*\{.*?partidos:\s*(\[.*?\n\s*\]),', t, re.S).group(1)
    CC = js_obj(blk)
    e = team_entry("Colo-Colo"); e["informes"].append("wyscout.js (5 «Informe Partido»; sin tabla por jugador)")
    for p in CC:
        e["partidos"].append(dict(fecha=p["fecha"], rival=p["rival"], loc=p["loc"], gf=p["gf"], ga=p["ga"],
            xg=p["xg"], xga=p["xgRival"], xgaCobertura=100, pos=p["pos"], ppda=p["ppda"], duelos=p["duelos"],
            pasePct=None, tiros=None, arco=None, perd=None, rec=None, recAdv=None, aerPct=None,
            formaciones=[], ancho=None, largo=None, xi=p.get("xi"), fuente="Hudl «Informe Partido» (wyscout.js)"))
except Exception as ex:
    print("AVISO wyscout.js Colo-Colo:", ex)

# ---------- totales ----------
def tot(ps):
    def s(k):
        v = [p[k] for p in ps if p.get(k) is not None]
        return (round(sum(v), 2), len(v)) if v else (None, 0)
    def avg(k):
        v = [p[k] for p in ps if p.get(k) is not None]
        return round(sum(v) / len(v), 1) if v else None
    gf = sum(p["gf"] for p in ps); ga = sum(p["ga"] for p in ps)
    xg, nxg = s("xg"); xga, nxga = s("xga")
    return dict(pj=len(ps), w=sum(p["gf"] > p["ga"] for p in ps), d=sum(p["gf"] == p["ga"] for p in ps),
                l=sum(p["gf"] < p["ga"] for p in ps), gf=gf, ga=ga, xg=xg, xgPJ=round(xg / nxg, 2) if nxg else None,
                xga=xga, xgaPJ=round(xga / nxga, 2) if nxga else None, nXga=nxga,
                pos=avg("pos"), ppda=avg("ppda"), duelos=avg("duelos"), pasePct=avg("pasePct"),
                perdPJ=avg("perd"), recPJ=avg("rec"), ancho=avg("ancho"), largo=avg("largo"))
for team, e in equipos.items():
    e["partidos"].sort(key=lambda p: p["fecha"])
    e["totales"] = tot(e["partidos"])

players = []
for p in jugadores.values():
    p["partidos"].sort(key=lambda x: x["fecha"])
    agg = {"pj": len(p["partidos"])}
    for k in NUM + EXT:
        v = [x.get(k) for x in p["partidos"] if x.get(k) is not None]
        agg[k] = round(sum(v), 2) if v else None
    agg["nExt"] = sum(1 for x in p["partidos"] if x.get("aer") is not None)
    p.update(agg); players.append(p)
players.sort(key=lambda p: (p["team"], -(p["min"] or 0)))

OUT = dict(
    actualizado=__import__("datetime").date.today().isoformat(),
    nota=("Acumulado de TODOS los informes Hudl Wyscout entregados. Coquimbo: 5 «Informe Partido» + «Informe del equipo» vs Colo-Colo. "
          "Ñublense: 4 «Informe del equipo». Colo-Colo: 5 «Informe Partido» solo a nivel equipo (no hay tabla por jugador cargada). "
          "Campos extendidos (aéreos, duelos defensivos, intercepciones, progresivos) solo existen en el formato «Informe del equipo»: "
          "nExt = partidos con esos campos. xGA de Coquimbo en los 5 informes previos no estaba tabulado (null)."),
    equipos=equipos, jugadores=players)
(BASE / "wyscout_acumulado.js").write_text(
    "// Acumulado Hudl Wyscout por equipo y jugador — generado por wyscout_acumulado.py. NO editar a mano.\nconst WY_ACUM=" +
    json.dumps(OUT, ensure_ascii=False) + ";\n", encoding="utf-8")
for t, e in equipos.items():
    T = e["totales"]; print(f"{t:16s} PJ {T['pj']}  {T['w']}-{T['d']}-{T['l']}  GF {T['gf']} GC {T['ga']}  xG {T['xg']}  xGA {T['xga']} (n={T['nXga']})")
print("jugadores:", len(players), "-> wyscout_acumulado.js")
