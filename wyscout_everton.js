// Everton de Viña del Mar — lectura del PRÓXIMO RIVAL (liga, fecha 28 · sáb 21-11, Estadio Sánchez Rumoroso, LOCAL).
// Doble fuente: 5 informes Hudl Wyscout «Informe Partido» (dato de evento, 5 partidos) + «Claves del rival» SmrtStats/StatsConnect (agregado de los 27 partidos de liga 2026).
// Partidos Wyscout (óptica Everton): Ñublense 1-3 Everton (12-09, V, W) · Cobresal 2-2 Everton (01-11, V, D) · Everton 0-2 D.Concepción (07-11, L, L) · Everton 3-2 La Serena (11-10, L, W) · U. de Chile 4-1 Everton (26-10, V, L).
// Etiquetas: [DATO Wyscout] evento 5 partidos · [DATO SmrtStats] agregado 27 partidos · [DATO CFDB] oficial · [INFERENCIA] lectura táctica · [HIPÓTESIS] a confirmar.
// NO editar a mano salvo al cargar nuevos informes. Se monta sobre WYSCOUT (wyscout.js debe cargarse antes).
(function(){
if (typeof WYSCOUT === 'undefined') return;

WYSCOUT.equipos["Everton"] = {
  dt: "—",
  formacionBase: "4-2-3-1 propositivo con Alan Medina de enganche/volante por izquierda; ataca casi todo por el centro",
  nPartidos: 5,
  informe: "5 «Informe Partido» Wyscout (Ñublense, Cobresal, D.Concepción, La Serena, U. de Chile) con xG, posesión, PPDA, duelos, centros [DATO Wyscout] + «Claves del rival» SmrtStats sobre los 27 partidos de liga 2026 (agregado, al 16-11) [DATO SmrtStats]. Dos fuentes reconciliadas.",
  resumen: "PRIMER RIVAL PROPOSITIVO DE PESO tras una racha de rivales reactivos. Everton GENERA MUCHO y CONCEDE MUCHO: es un equipo de partido abierto. En los 5 informes Wyscout promedia 1,93 xG a favor y 1,98 en contra; en la temporada (SmrtStats, 27 PJ) acumula 50,6 xG a favor (1,87/PJ, 4º ataque de la liga) pero marca solo 40 goles (−10,6: DEFINE MAL). Ataca casi todo POR EL CENTRO (303 de 385 ataques con dirección, 79%) y VIVE DE DOS COSAS: Alan Medina (12 g, 3 a, patea los penales) y los PENALES (7/7, el 17,5% de sus goles). Atrás es frágil: concede el 66% de sus goles en el 2º tiempo (8 entre 46-60', 10 desde el 76') y le hacen goles por el CENTRO (30 de 35) y desde FUERA del área (5). Su arquero (I. González, índice internacional bajo 21,13) es vulnerable de media distancia. OJO: es mejor de VISITA (6-3-4) que de local; no hay que confiarse por jugar en casa. ANTECEDENTE: la 1ª rueda fue 1-1 en Sausalito — Johansen nos puso 1-0 (60') y Montiel empató al 94'; Everton nos generó 3,81 xG contra 0,83. De visita nos superaron: ahora en el Rumoroso, con nuestra identidad reactiva y en racha de campeones, toca darle vuelta el guion.",
  hallazgoClave: "Everton es un equipo de xG alto a los dos lados: crea 1,9 y concede 2,0. No es un rival a correr detrás del balón — es un rival a quien hay que CERRARLE EL CENTRO (por donde ataca el 79% y por donde concede el 86%) y CASTIGARLE la fragilidad del 2º tiempo y de fuera del área. La ecuación nos favorece si combinamos tres cosas: (1) bloque compacto central para que su volumen no se transforme (ya definen mal: −10,6 vs xG); (2) CERO penales (su gran fábrica de goles) y disciplina en el área; (3) golpear en transición por el centro, rematar de media distancia (arquero flojo) y reservar piernas para el tramo 76-90', donde se abren del todo y Montiel entra a definir.",
  partidos: [
    { j: 21, fecha: "2026-09-12", rival: "Ñublense",      loc: "V", gf: 3, ga: 1, xi: null, xg: 2.89, xgRival: 1.30, pos: 44, ppda: 14.4, duelos: 51, golesContra: [] },
    { j: 24, fecha: "2026-10-26", rival: "U. de Chile",   loc: "V", gf: 1, ga: 4, xi: null, xg: 1.53, xgRival: 3.41, pos: 50, ppda: 11.7, duelos: 46, golesContra: [] },
    { j: 25, fecha: "2026-10-11", rival: "La Serena",     loc: "L", gf: 3, ga: 2, xi: null, xg: 2.80, xgRival: 1.52, pos: 62, ppda: 7.4,  duelos: 48, golesContra: [] },
    { j: 26, fecha: "2026-11-01", rival: "Cobresal",      loc: "V", gf: 2, ga: 2, xi: null, xg: 1.43, xgRival: 2.44, pos: 49, ppda: 28.3, duelos: 55, golesContra: [] },
    { j: 27, fecha: "2026-11-07", rival: "D. Concepción", loc: "L", gf: 0, ga: 2, xi: null, xg: 1.01, xgRival: 1.25, pos: 59, ppda: 9.5,  duelos: 50, golesContra: ["76' (fuera del área)", "88' (fuera del área)"] }
  ],
  desarrollo: {
    nota: "Cómo se desarrollan sus partidos. Splits 1er/2º tiempo del «Informe Partido» [DATO Wyscout] + goles por tramo de 15' de la temporada (27 PJ) [DATO SmrtStats]. Dirección: partidos ABIERTOS que se rompen en el 2º tiempo — a los dos lados.",
    porTiempo: [
      { rival: "La Serena (L)",   posT:62, pos1:61, pos2:63, xg1:0.52, xg2:2.27, largo1:null, largo2:null },
      { rival: "D.Concep (L)",    posT:59, pos1:58, pos2:61, xg1:0.10, xg2:0.91, largo1:null, largo2:null }
    ],
    resumenTiempo: "Donde hay split medido (Wyscout), Everton es MUCHO más ofensivo en el 2º tiempo: vs La Serena pasó de 0,52 a 2,27 xG; vs D.Concepción de 0,10 a 0,91. Pero su DEFENSA se abre a la par: en la temporada concede el 66% de sus goles tras el descanso. Resultado: segundos tiempos de ida y vuelta. Mantiene o sube levemente la posesión en el 2T (no se repliega), lo que deja su espalda expuesta en la transición.",
    golesFavor:   { "0-15":4, "16-30":5, "31-45":6, "46-60":6, "61-75":7, "76-90":12 },
    golesContra:  { "0-15":2, "16-30":4, "31-45":6, "46-60":8, "61-75":5, "76-90":10 },
    golesNota: "[DATO SmrtStats · tramos post-descanso exactos; reparto pre-descanso aproximado del gráfico] A FAVOR: 12 de sus 40 goles llegan desde el 76' — los finales de partido son su mejor momento ofensivo (y el de Montiel desde el banco). EN CONTRA: 23 de 35 (66%) tras el descanso: 8 entre 46-60', 5 entre 61-75' y 10 desde el 76'. El tramo final es, a la vez, su arma y su talón: partido abierto hasta el pitazo.",
    insightDesarrollo: "[INFERENCIA] Guion esperable: Everton propondrá por el centro y buscará el penal o la llegada de Medina; su pico ofensivo es el 2º tiempo y el cierre (76-90'). PERO es también cuando más concede. Plan: aguantar compactos, no regalar penales, y en el tramo 55-90' convertir sus pérdidas y su bloque abierto en transición — con piernas frescas para igualar su empuje final y castigar su espalda. Cuidado especial con Montiel desde el 70' (nos marcó al 94' en la 1ª rueda)."
  },
  redPases: {
    carriles: { izq: 36, centro: 46, der: 18 },
    carrilesNota: "[DATO SmrtStats] Ataques con dirección: 303 centro / 50 derecha / 32 izquierda = 79% POR EL CENTRO. Carril convertido a % relativo: el juego pasa por dentro, con Medina arrancando desde la izquierda hacia el eje. Por las bandas aparece poco.",
    enlaceTop: "Alan Medina es el eje absoluto: 12 goles, 3 asistencias, 77 remates y 43 pases clave en 2.548'. Volante ofensivo por izquierda que se mete al centro para rematar o filtrar; además patea los penales (6 de los 7). [DATO SmrtStats]",
    centralidad: [
      { n: "A. Medina", d: 10, c: 28 }, { n: "N. Montiel", d: 19, c: 16 }, { n: "C. Palacios", d: 9, c: 17 },
      { n: "J. Alfaro", d: 11, c: 15 }, { n: "L. Soto", d: 8, c: 15 }, { n: "B. Martínez", d: 7, c: 14 },
      { n: "N. Baeza", d: 3, c: 16 }, { n: "D. Oyarzún", d: 2, c: 18 }, { n: "H. Magallanes", d: 4, c: 16 }, { n: "GK I. González", d: 1, c: 9 }
    ],
    centralidadNota: "[INFERENCIA] Estimada por rol, minutos y participación en goles/asistencias (SmrtStats). Medina es el nodo dominante; Baeza (lateral izq.) aporta salida por su lado para alimentar el eje."
  },
  jugadores: [
    { n: "Alan Medina", d: 10, rol: "Enganche/volante izq. · goleador y penales", metr: "[DATO] 12 g, 3 a, 77 remates, 43 pases clave en 2.548'. Patea los penales (6/7). Arranca por izquierda y busca el centro. SECARLO entre líneas y que reciba de espaldas con ayuda es la prioridad defensiva nº1." },
    { n: "Nicolás Montiel", d: 19, rol: "Goleador alternativo · super-sub", metr: "[DATO] 7 goles en solo 1.102' (21 años): entra desde el banco y define. NOS MARCÓ EL 1-1 AL 94' en la 1ª rueda. Vigilancia máxima en el tramo 70-90' cuando ingrese." },
    { n: "Cristian Palacios", d: 9, rol: "9 de referencia · área", metr: "[DATO] 4 goles, 51 remates. Referencia de área para el centro y la segunda pelota; peso en el remate." },
    { n: "Julián Alfaro", d: 11, rol: "Ofensivo · llegada", metr: "[DATO] 4 goles, 2 asistencias. Llega al área desde segunda línea. OJO disciplina: 8 amarillas (provocable)." },
    { n: "Lucas Soto", d: 8, rol: "Interior/medio", metr: "[DATO] 3 goles, 2 asistencias. Conecta el juego. INDISCIPLINA: 8 amarillas y 1 roja — buscarle la falta y el roce en zonas cercanas al área." },
    { n: "Braian Martínez / N. Baeza", d: 7, rol: "Creación · lateral izq.", metr: "[DATO] 2 g y 3 a cada uno; Baeza es lateral izquierdo con llegada (aporta por izquierda). Vías secundarias de gol." },
    { n: "Diego Oyarzún · Hugo Magallanes", d: 2, rol: "Centrales · fuertes por arriba", metr: "[DATO] Oyarzún 63,6% y Magallanes 67,1% de aéreos ganados: NO conviene centrar frontal. Buscar su espalda y el cut-back." },
    { n: "Ignacio González (GK)", d: 1, rol: "Arquero · 37 años", metr: "[DATO] 23 partidos, Smrt Index Intl. 21,13 (bajo para un titular). VÍA: probarlo de media distancia y con remates incómodos." }
  ],
  bajas: [
    "[HIPÓTESIS] Sin parte médico confirmado al cierre de esta lectura. Actualizar con la convocatoria de Everton de la fecha 28.",
    "[DATO] Acumulación de amarillas (riesgo de suspensión y de expulsión por reincidencia): Lucas Soto (8A+1R), Julián Alfaro (8A) y Joaquín Moya (7A) — son a la vez una ventaja (provocarles la falta) y jugadores que podrían no estar por sanción."
  ],
  fortalezas: [
    "Ataque de volumen: 1,87 xG y 14,3 remates/PJ (4º de la liga); 1,93 xG en los 5 informes Wyscout.",
    "Alan Medina, diferencial: 12 g, 3 a, 77 remates, 43 pases clave; eje del ataque y ejecutor de penales (6/7).",
    "Fábrica de penales: 7/7 convertidos = 17,5% de sus goles. Muy peligroso si se le concede el área.",
    "Peligro en el tramo final: 12 de sus 40 goles desde el 76'; Montiel entra y define (7 g en 1.102').",
    "Centrales fuertes por arriba (Oyarzún 64%, Magallanes 67%): ganan el duelo aéreo defensivo.",
    "Rinde de visita (6-3-4, 24-17 fuera): no depende de su cancha, no hay que confiarse."
  ],
  vulnerabilidades: [
    "Define MAL: 40 goles para 50,6 xG (−10,6); Medina 12 sobre 20,8 xG. Crea mucho más de lo que concreta.",
    "Concede en el 2º tiempo: 23 de 35 goles (66%) tras el descanso — 8 en 46-60', 10 desde el 76'.",
    "Se lo rompen por el CENTRO: 30 de 35 goles en contra fueron por el eje (sufre cuando le atacan el espacio entre centrales).",
    "Encaja de FUERA del área: 5 goles desde lejos (2 en el último partido, min 76' y 88'). Arquero flojo (índice 21,13).",
    "Previsible: ataca el 79% por el centro y apenas por las bandas (50 der / 32 izq) — se le puede cerrar el eje.",
    "Laterales débiles por arriba (Baeza 45%, V. Fernández 41%): su lado es atacable con diagonales al segundo palo.",
    "Sin goles de ABP en juego: todos sus goles de pelota parada fueron de penal (no marca de córner ni tiro libre)."
  ],
  recomendaciones: [
    "CERRAR EL CENTRO: doble contención (Camargo + Galani/Cordero) y líneas juntas por dentro. Everton ataca el 79% por el eje; obligarlo a jugar por fuera, donde casi no produce.",
    "MARCA ESPECIAL a Alan Medina: arranca por izquierda y busca el centro para rematar o asistir. Que reciba siempre de espaldas y con un segundo jugador cerca; negarle el balón entre líneas apaga su ataque.",
    "CERO penales: convirtió los 7 que tuvo. Defender el área con los brazos atrás, sin barrerse: su 17,5% de goles sale de ahí.",
    "QUE REMATE INCÓMODO: crea mucho y define mal (−10,6 vs xG). Bloquear el remate y cerrar al rematador más que salir a quitar; confiar en Sánchez y en no regalar la clara.",
    "GOLPEAR EN TRANSICIÓN POR EL CENTRO y DE MEDIA DISTANCIA: le entran por el eje (30/35) y de fuera del área (arquero flojo); Camargo y Salinas tienen el disparo. Riveros y Chandía a atacar su espalda.",
    "ATACAR A LOS LATERALES, NO A LOS CENTRALES: Oyarzún y Magallanes ganan por arriba; Baeza y V. Fernández no. Cut-back y diagonales al segundo palo mejor que el centro frontal.",
    "GUARDAR PIERNAS PARA EL 76-90': es su mejor tramo ofensivo (12 goles y Montiel desde el banco) y el que más conceden (10 goles). Cambios ofensivos frescos para igualar su empuje y castigar su apertura.",
    "DISCIPLINA Y PROVOCACIÓN: Soto, Alfaro y Moya acumulan amarillas — buscarles la falta cerca de su área; a la vez, nuestra disciplina absoluta para no regalarles el penal/ABP."
  ],
  insights: [
    { t: "Crea y concede a la par: partido abierto, no un rival a perseguir", nivel: "ALTA", capa: "ataque",
      evidencia: "[DATO] 1,93 xG a favor y 1,98 en contra en los 5 informes Wyscout; 50,6 xG a favor pero 40 goles (−10,6) y 35 en contra en la temporada. Define mal y defiende mal.",
      interpretacion: "[INFERENCIA] Everton es un equipo de ida y vuelta: su volumen es real pero su conversión y su defensa, no. No hay que correr detrás de su balón; hay que cerrar su centro y aprovechar que concede.",
      riesgo: "OPORTUNIDAD con control: si somos compactos y clínicos, la ecuación nos favorece. RIESGO: su ataque SÍ crea (nos generó 3,81 xG en la 1ª rueda) — defender bien el área es innegociable.",
      respuesta: "Bloque compacto central, máxima eficacia y defensa seria del área. No pelear su posesión; castigar su desorden." },
    { t: "Ataca el 79% por el centro y por el centro se lo rompen", nivel: "ALTA", capa: "desprotegidas",
      evidencia: "[DATO SmrtStats] 303 de 385 ataques con dirección por el centro; y 30 de sus 35 goles en contra también por el centro (entre centrales).",
      interpretacion: "[INFERENCIA] Es un equipo de eje: carga el centro al atacar y deja ese mismo corredor expuesto al defender/transicionar. Cerrarle el eje lo vuelve previsible; atacarle el eje en transición es la vía directa al arco.",
      riesgo: "OPORTUNIDAD: nuestra transición central (Vadalá/Riveros) ataca justo su punto débil. RIESGO: Medina vive en ese corredor — secarlo es la condición.",
      respuesta: "Doble pivote tapando el centro; en ataque, verticalidad por el eje con Medina ya superado en la transición." },
    { t: "Vive de Medina y de los penales: cortar las dos fuentes", nivel: "ALTA", capa: "ataque",
      evidencia: "[DATO] Medina 12 g + los penales (7/7 = 17,5% de los goles, él patea 6). Sin esas dos vías, su ataque pierde gran parte de su producción real.",
      interpretacion: "[INFERENCIA] Su gol depende en exceso de un jugador y de una jugada (el penal). Neutralizar a Medina y no conceder penales ataca la raíz de su producción.",
      riesgo: "OPORTUNIDAD: es un ataque concentrado, por tanto neutralizable. RIESGO: una falta tonta en el área o perder a Medina de vista devuelve el partido.",
      respuesta: "Marca de referencia y ayuda sobre Medina; disciplina absoluta en el área (brazos atrás, sin barridas)." },
    { t: "Segundos tiempos abiertos: su arma y su talón", nivel: "ALTA", capa: "desprotegidas",
      evidencia: "[DATO] 12 de 40 goles a favor y 23 de 35 en contra llegan tras el descanso (10 a favor y 10 en contra desde el 76'). Donde hay split Wyscout, su xG ofensivo se dispara en el 2T (0,52→2,27 vs La Serena).",
      interpretacion: "[INFERENCIA] No se repliega a cuidar: sigue proponiendo y se abre. El tramo 55-90' es de alto gol para ambos.",
      riesgo: "OPORTUNIDAD: nuestro gol en transición es más probable en el 2T; con piernas frescas castigamos su espalda. RIESGO: su empuje final y Montiel — hay que aguantar con concentración y cambios.",
      respuesta: "Reservar cambios ofensivos (Chandía/Pratto) para la última media hora; vigilancia de Montiel desde el 70'; atacar su apertura y defender el balón parado y la última pelota." },
    { t: "Previsible por fuera y por arriba atacable en los laterales", nivel: "MEDIA", capa: "ataque",
      evidencia: "[DATO] Apenas 50 ataques por derecha y 32 por izquierda; centrales fuertes por arriba (64-67%) pero laterales flojos (Baeza 45%, V. Fernández 41%).",
      interpretacion: "[INFERENCIA] No genera por banda y su aéreo defensivo depende de los centrales; el punto débil aéreo es el carril del lateral.",
      riesgo: "OPORTUNIDAD: cut-back y diagonal al segundo palo (lado del lateral) en vez de centro frontal; Cornejo (0,90 xA) y Salinas pueden explotarlo.",
      respuesta: "Centros atrás y diagonales al lado del lateral; evitar el centro colgado al corazón del área donde mandan Oyarzún/Magallanes." }
  ],
  cruce: {
    nuestrasVirtudesVsSusDefectos: [
      { nuestra: "Identidad reactiva y eficaz, campeones en racha: 2,21 xG con 38% de balón en la final (3-0 a O'Higgins); 2,31 a Audax (1-0); 3,24 a Colo-Colo (5-2). Convertimos lo que generamos.",
        suya: "Everton crea mucho y define mal (−10,6 vs xG): su volumen no se transforma.",
        palanca: "Cederle la iniciativa sin complejos, cerrar el centro y ser clínicos: nuestra eficacia contra su ineficacia.", fuerza: "ALTA" },
      { nuestra: "Transición letal por el centro (Vadalá, Riveros, Chandía) y disparo de media distancia (Camargo, Salinas).",
        suya: "Se lo rompen por el eje (30/35 goles) y de fuera del área (5), con un arquero flojo (índice 21,13).",
        palanca: "Atacar su corredor central en transición y probar al arquero de lejos: sus dos agujeros defensivos.", fuerza: "ALTA" },
      { nuestra: "Juego aéreo y balón parado (Pratto 188, Pons 186, Gazzolo); 4º de la liga en córners generados.",
        suya: "Laterales débiles por arriba (Baeza 45%, V. Fernández 41%); no marca de ABP en juego pero sí la sufre por el carril del lateral.",
        palanca: "Cut-back y diagonal al segundo palo por el lado del lateral; cargar el área en córners.", fuerza: "MEDIA" },
      { nuestra: "Piernas y cambios para el tramo final (Chandía, Pratto, Pons).",
        suya: "Concede 10 goles desde el 76' y se abre en el 2º tiempo.",
        palanca: "Guardar el revulsivo para los últimos 30' y castigar su apertura.", fuerza: "ALTA" }
    ],
    nuestrosDefectosVsSusVirtudes: [
      { nuestro: "Nuestra defensa concede (GA36) y Everton SÍ crea (1,87 xG, nos hizo 3,81 en la 1ª rueda): no es un rival a subestimar.",
        suya: "Ataque de volumen con Medina y llegada por el centro; pico en el tramo final.",
        mitigacion: "Bloque compacto central, secar a Medina, defender seriamente el área y no regalar la transición propia.", riesgo: "MEDIO-ALTO" },
      { nuestro: "Si nos obligan a proponer ante bloque colocado, creamos menos; pero Everton no suele cerrarse.",
        suya: "Mantiene posesión y sigue atacando en el 2T (no se repliega).",
        mitigacion: "Su falta de repliegue nos da el espacio de transición que necesitamos; no forzar la posesión, esperar y golpear.", riesgo: "BAJO" },
      { nuestro: "Una falta en el área o una expulsión nos costaría: Everton convierte el 100% de sus penales.",
        suya: "7/7 penales; Medina ejecutor fiable.",
        mitigacion: "Disciplina absoluta en el área (sin barridas, brazos atrás) y evitar el roce que nos deje con diez.", riesgo: "MEDIO" }
    ]
  },
  cross: {
    wyscout: { xgProm: 1.93, golProm: 1.8, posProm: 52.8, ppdaProm: 14.3, duelosProm: 50 },
    cfdb: { gfpg: 1.67, gapg: 1.12, pts: 39, pos: 4 },
    smrtstats: { xgTemp: 50.6, xgPJ: 1.87, golesTemp: 40, remPJ: 14.3, posTemp: 48.4, penales: "7/7", ataqueCentroPct: 79, gcSegundoTiempoPct: 66, gcCentro: "30/35", gcFueraArea: 5 },
    datalabs2025: { posesion: null, tiros: null, pases: null },
    ligaWy: null,
    veredicto: "Dos fuentes coinciden en el retrato: Everton CREA y CONCEDE mucho. Wyscout (5 informes): xGF 1,93 ≈ xGA 1,98, partidos abiertos. SmrtStats (27 PJ): 50,6 xG a favor (1,87/PJ) pero 40 goles (−10,6), 35 en contra, 79% de ataque por el centro, 7/7 penales, 66% de goles encajados en el 2T. CFDB confirma el nivel de temporada: 4º, 39 pts, 1,67 GF/PJ y 1,12 GC/PJ (DG+13). Hay una TENSIÓN entre fuentes útil de marcar: CFDB lo ve más sólido atrás (1,12 GC/PJ en toda la liga) que la muestra Wyscout reciente (1,98 xGA en 5 partidos) y que SmrtStats por tramos — señal de que su fragilidad defensiva es sobre todo RECIENTE y de 2º tiempo. Confianza ALTA en los patrones (ataca por el centro, define mal, concede tarde y por el eje). Clave del partido: cerrar el centro, cero penales, y castigar su 2º tiempo en transición."
  },
  zonas: {
    nota: "Ataque ↑ (Everton). Capas sobre el modelo de 18 zonas [DATO de magnitud SmrtStats/Wyscout · INFERENCIA de ubicación]. La red es [INFERENCIA] de roles, minutos y goles/asistencias.",
    capas: [
      { id: "desprotegidas", label: "Espacio que deja (2º tiempo · centro)", tipo: "red",
        grid: [[0.10,0.12,0.10],[0.30,0.55,0.30],[0.40,0.78,0.42],[0.45,0.82,0.46],[0.35,0.60,0.36],[0.12,0.30,0.12]],
        interp: "Como ataca por el centro y no se repliega en el 2T, deja su CORREDOR CENTRAL expuesto: 30 de 35 goles en contra fueron por el eje y 66% tras el descanso. Plan Coquimbo: robar y atacar ese centro en transición del 55' en adelante, y rematar de media distancia (arquero flojo)." },
      { id: "ataque", label: "Ataque y finalización (79% por el centro)", tipo: "heat", color: "gold",
        grid: [[0,0,0],[0.06,0.12,0.05],[0.12,0.30,0.10],[0.25,0.55,0.22],[0.30,0.72,0.28],[0.26,0.80,0.24]],
        interp: "Everton concentra el ataque en el EJE (303 de 385 ataques, 79%), con Medina llegando desde la izquierda hacia el centro para rematar o filtrar. Por fuera casi no produce (50 der / 32 izq). Vive del remate central, de Medina y del penal; define por debajo de su xG. Cerrar el eje lo apaga." },
      { id: "creacion", label: "Red de construcción (inferida)", tipo: "net",
        interp: "[INFERENCIA] Baeza (lateral izq.) y los centrales dan salida; el juego converge en Medina entre líneas, que conecta con Palacios (9) y Alfaro/Soto de segunda línea. Montiel entra en el tramo final. Tapar a Medina reduce su ataque a remates incómodos por fuera." }
    ],
    nodos: [
      { d: 1,  n: "González (GK)", x: 150, y: 432, c: 9 },
      { d: 3,  n: "Baeza (LI)",    x: 70,  y: 355, c: 16 },
      { d: 2,  n: "Oyarzún",       x: 120, y: 372, c: 18 },
      { d: 4,  n: "Magallanes",    x: 180, y: 372, c: 16 },
      { d: 8,  n: "Soto",          x: 165, y: 288, c: 15 },
      { d: 7,  n: "B. Martínez",   x: 110, y: 270, c: 14 },
      { d: 10, n: "Medina",        x: 120, y: 195, c: 28 },
      { d: 11, n: "Alfaro",        x: 215, y: 215, c: 15 },
      { d: 9,  n: "Palacios",      x: 160, y: 110, c: 17 },
      { d: 19, n: "Montiel",       x: 205, y: 130, c: 16 }
    ],
    edges: [[2,4,2],[2,3,1],[3,7,1],[4,8,1],[7,10,2],[8,10,2],[10,9,2],[10,11,2],[11,9,1],[10,19,1],[19,9,1]]
  },
  reflexiones: {
    contexto: "[DATO+INFERENCIA] Liga, fecha 28 · sábado 21-11, Estadio Bicentenario Francisco Sánchez Rumoroso — LOCAL. Coquimbo llega CAMPEÓN de la Copa de la Liga (final 3-0 a O'Higgins) y en racha de 3 victorias (6º en liga, 38 pts). Everton es 4º (39 pts, DG+13): primer rival PROPOSITIVO de peso tras varios reactivos. Antecedente de la 1ª rueda: 1-1 en Sausalito, Johansen nos adelantó (60') y Montiel empató al 94'; Everton nos generó 3,81 xG contra 0,83 — de visita nos superaron. El reto: en casa y con nuestra identidad, darle vuelta el guion.",
    puntos: [
      { t: "No es un rival a perseguir: es un rival a quien cerrarle el centro", nivel: "DATO", txt: "Everton ataca el 79% por el eje y por el eje se lo rompen (30/35 goles en contra). Reflexión: doble pivote compacto por dentro (Camargo + Galani/Cordero), líneas juntas y obligarlo a jugar por fuera, donde casi no produce (50 der / 32 izq). Secar a Medina entre líneas es la condición nº1." },
      { t: "Cero penales y defensa seria del área: su gran fábrica de goles", nivel: "DATO", txt: "7/7 penales convertidos (17,5% de sus goles), Medina ejecutor. Reflexión: disciplina absoluta en el área, brazos atrás, sin barridas ni roces que nos dejen con diez. Everton crea mucho pero define mal (−10,6 vs xG): si no le regalamos el penal ni la clara, su volumen no se transforma." },
      { t: "La ventana es el 2º tiempo: su arma y su talón", nivel: "DATO", txt: "Concede el 66% de sus goles tras el descanso (10 desde el 76') pero también marca 12 desde el 76' y mete a Montiel (nos marcó al 94' en la ida). Reflexión: aguantar compactos, guardar piernas y cambios ofensivos (Chandía, Pratto) para la última media hora, vigilar a Montiel desde el 70', y castigar en transición su bloque abierto. Partido de piernas hasta el pitazo." },
      { t: "Atacar su centro en transición y probar al arquero de lejos", nivel: "INFERENCIA", txt: "Le entran por el eje y de fuera del área (5 goles, arquero de índice bajo 21,13). Reflexión: verticalidad central con Vadalá/Riveros una vez superado Medina, y disparo de media distancia de Camargo y Salinas. La transición rápida por dentro es la vía más directa a su arco." },
      { t: "Por arriba, a los laterales — no a los centrales", nivel: "DATO", txt: "Oyarzún (64%) y Magallanes (67%) mandan por arriba; los laterales Baeza (45%) y V. Fernández (41%) no. Reflexión: nada de centro frontal al corazón del área; cut-back y diagonal al segundo palo por el lado del lateral, donde Cornejo (0,90 xA) y Salinas pueden hacer daño. El córner, al segundo palo lejos de los centrales." },
      { t: "Respeto, no miedo: en casa y campeones podemos imponer el guion", nivel: "INFERENCIA", txt: "Everton nos superó de visita en la ida (3,81 xG), es mejor fuera que en casa y llega 4º: no hay que confiarse. Pero su patrón (crea y concede, define mal, se abre en el 2T) es exactamente el que nuestra identidad reactiva y eficaz explota. Reflexión: jugar nuestro partido con la confianza del título reciente — compactos, clínicos y pacientes — y convertir su ida y vuelta en nuestros goles de transición." }
    ]
  }
};
})();
