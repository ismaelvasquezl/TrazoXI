// Ñublense — decodificación de informes Hudl Wyscout «Informe del equipo» (4 partidos + agregado).
// Partidos: Ñublense 0-1 Concepción (30-08, L) · Limache 2-0 Ñublense (03-09, V) · La Serena 2-1 Ñublense (06-09, V) · Ñublense 1-3 Everton (12-09, L).
// Fuente: hudl_informes/nublense/*.pdf (texto en *.txt). Cifras por jugador/partido en wyscout_acumulado.js (generado por wyscout_acumulado.py).
// Goles en contra por minuto, rojas y XI vs U. de Chile: CFDB match_events / match_lineups.
// Etiquetas: [DATO] medido por Wyscout/CFDB · [INFERENCIA] lectura táctica razonada · [HIPÓTESIS] a confirmar con vídeo.
// NO editar a mano salvo al cargar nuevos informes. Se monta sobre WYSCOUT (wyscout.js debe cargarse antes).
(function(){
if (typeof WYSCOUT === 'undefined') return;
WYSCOUT.equipos["Ñublense"] = {
  dt: "s/d (no consta en el informe)",
  formacionBase: "3-4-3 / 3-5-2 (65% del tiempo)",
  nPartidos: 4,
  informe: "Informe del equipo (Hudl Wyscout) — formato por equipo: no trae tiros ni pases del rival; el xG en contra sale de la lámina «Formaciones» (por tramo táctico).",
  resumen: "Equipo en caída libre: 4 derrotas en los 4 informes (2 GF / 8 GC) y luego 0-6 ante U. de Chile (CFDB). Genera 1,02 xG por partido y concede 2,03. Con línea de 3 y carrileros altos (65% de los minutos) se parte al atacar: concede 1,93 xG/90 y crea solo 0,47. Pierde el 42% de sus balones en el último tercio y recupera arriba apenas el 17,6%, así que cada pérdida termina en una carrera hacia su arco.",
  hallazgoClave: "VALIDADO: Ñublense pierde el orden defensivo al atacar. Con línea de 3 + carrileros (3-4-3/3-5-2) concede 1,93 xG/90 y genera 0,47; cuando pasa a línea de 4 concede 1,69 y genera 1,80. Atacando pierde el balón arriba (42,3% de sus pérdidas en el último tercio) y no contrapresiona (17,6% de recuperaciones en campo rival): el rival sale contra una estructura ancha (≈49 m) y con los carrileros por delante del balón.",
  // Partidos (xG en contra = suma de tramos de la lámina Formaciones; Everton cubre el 94% del partido).
  partidos: [
    { j: 21, fecha: "2026-08-30", rival: "Concepción", loc: "L", gf: 0, ga: 1, xi: null, xg: 1.71, xgRival: 1.76, pos: 52.1, ppda: 10.4, duelos: 48, ancho: 50, largo: 39, golesContra: ["30' penal (J. Henríquez)"] },
    { j: 22, fecha: "2026-09-03", rival: "D. Limache", loc: "V", gf: 0, ga: 2, xi: null, xg: 0.52, xgRival: 2.08, pos: 49.4, ppda: 11.5, duelos: 51, ancho: 48, largo: 47, golesContra: ["49' D. Castro", "86' autogol Bosso"] },
    { j: 23, fecha: "2026-09-06", rival: "La Serena", loc: "V", gf: 1, ga: 2, xi: null, xg: 0.54, xgRival: 1.66, pos: 45.8, ppda: 10.6, duelos: 50, ancho: 47, largo: 38, golesContra: ["45' F. Chamorro", "88' M. Pinto"] },
    { j: 24, fecha: "2026-09-12", rival: "Everton", loc: "L", gf: 1, ga: 3, xi: null, xg: 1.31, xgRival: 2.62, pos: 57.1, ppda: 12.1, duelos: 48, ancho: 50, largo: 40, golesContra: ["23' penal (A. Medina)", "76' J. Ovalle", "90' A. Medina"] }
  ],
  // Rendimiento por estructura (lámina Formaciones, agregado de los 4 partidos + desglose por partido) [DATO]
  formaciones: {
    agregado: [
      { form: "3-4-3", pct: 37, gf: 1, ga: 3, xg: 0.78, xga: 3.08, pos: 48.6, ppda: 8.57, ppdaRiv: 6.92 },
      { form: "3-5-2", pct: 28, gf: 0, ga: 2, xg: 0.59, xga: 2.53, pos: 46.7, ppda: 13.38, ppdaRiv: 12.23 },
      { form: "4-1-4-1", pct: 15, gf: 0, ga: 0, xg: 1.62, xga: 0.45, pos: 53.8, ppda: 8.88, ppdaRiv: 19.0 },
      { form: "Otras (4-2-3-1 / 4-3-1-2 / 4-4-2 / 4-3-2)", pct: 20, gf: 1, ga: 3, xg: 1.10, xga: 2.06, pos: null, ppda: null, ppdaRiv: null }
    ],
    porLinea: {
      tres: { min: 261, xg90: 0.47, xga90: 1.93, gf: 1, ga: 5 },
      cuatro: { min: 134, xg90: 1.80, xga90: 1.69, gf: 1, ga: 2 }, sinCubrir: { nota: "El gol del 90' de Everton cayó en el tramo 4-3-2 (91'-97'), que la lámina no detalla." }
    },
    nota: "«Otras» = diferencia entre los totales del agregado y los tres tramos principales. Por línea = suma de tramos por partido × duración real. Ojo con el estado del partido: suelen pasar a línea de 4 cuando van perdiendo y el rival se repliega, lo que mejora su xG [INFERENCIA]."
  },
  // Cuadrículas reales de la lámina Transiciones (agregado 4 partidos). filas = carriles [izq, centro, der] de Ñublense; cols = tercios [propio, medio, ataque]. % del total. [DATO]
  grids: {
    perdidas:       { total: 597, porPartido: 149, tercios: [20.3, 37.4, 42.3], carriles: [38.3, 27.0, 34.7], celdas: [[9.4, 14.9, 13.9], [7.4, 8.2, 11.4], [3.5, 14.3, 16.9]] },
    recuperaciones: { total: 403, porPartido: 101, tercios: [38.7, 43.6, 17.6], carriles: [31.6, 33.6, 34.8], celdas: [[13.2, 13.9, 4.4], [14.8, 13.2, 5.6], [10.7, 16.5, 7.7]] },
    faltas:         { total: 51,  porPartido: 13,  tercios: [21.6, 47.1, 31.4], carriles: [39.2, 33.3, 27.5], celdas: [[5.9, 15.7, 17.6], [9.8, 15.7, 7.8], [5.9, 15.7, 5.9]] }
  },
  finalizacion: {
    tiros: 45, arco: 11, xg: 4.09, goles: 2, pie: "33 / 5 al arco · 2,49 xG", cabeza: "12 / 6 al arco · 1,60 xG (39% de su xG)",
    dentro: "22 tiros · 3,35 xG", fuera: "23 tiros (51%) · 2 al arco · 0,74 xG", trasCentro: "4 / 4 al arco · 1,08 xG", abp: "9 tiros · 0,86 xG · 0 goles",
    porTramo: [6, 6, 6, 7, 8, 12], tramos: ["1-15'", "16-30'", "31-45'", "46-60'", "61-75'", "76'+"]
  },
  redPases: {
    carriles: { izq: 38, centro: 27, der: 35 },
    carrilesNota: "% de pérdidas por carril (no hay % de juego por carril en este formato)",
    enlaceTop: "Bosso → Jeraldino (7) y Calderón → Jeraldino (5): balón directo de los centrales al 9 de referencia",
    centralidad: [
      { n: "O. Bosso", d: 4, c: 27 }, { n: "J. Campusano", d: 14, c: 23 }, { n: "I. Jeraldino", d: 20, c: 21 },
      { n: "L. Reyes", d: 21, c: 21 }, { n: "F. Ovelar", d: 7, c: 18 }, { n: "P. Calderón", d: 6, c: 17 },
      { n: "S. Valencia", d: 15, c: 12 }, { n: "M. Rivera", d: 28, c: 13 }, { n: "M. Plaza", d: 10, c: 9 }, { n: "I. Tapia", d: 19, c: 9 }
    ],
    centralidadNota: "Conexiones en la lámina «Construcción del juego» (pases del jugador a cada receptor + recibidos). Muestra parcial: solo los 6 iniciadores que analiza Wyscout."
  },
  jugadores: [
    { n: "Matías Plaza", d: 10, rol: "Interior/enganche creador · lanzador de ABP", metr: "9 jugadas clave en 195' (4,2/90, la mejor del plantel), 0,60 xA, 1 asistencia; lanza 6 córners y 3 tiros libres. 1º de la liga en jugadas clave/90 en la temporada (2,38, Wyscout liga). Pierde 17,5 balones/90." },
    { n: "Ignacio Jeraldino", d: 20, rol: "9 de referencia aérea", metr: "38 duelos aéreos (19 ganados, 50%), 7 toques en área. Destino del balón directo de los centrales. Pierde 21,5 balones/90 (el que más)." },
    { n: "Franco Rami", d: 9, rol: "9 de área (192 cm) desde el banco", metr: "0,80 xG en 126' (0,57/90), 4 tiros (2 al arco), 18 aéreos (50%). Entra en el 2º tiempo para el juego directo." },
    { n: "Fernando Ovelar", d: 7, rol: "Extremo regateador", metr: "21 regates (7,6/90, 43%), 9 centros, 3 jugadas clave, 1 gol. 20,5 pérdidas/90: atacando es el que más arriesga." },
    { n: "Lucas Molina", d: 11, rol: "Segundo punta / extremo", metr: "0,85 xG (7 tiros, 1 al arco) + 0,45 xA, 1 asistencia. 22% de duelos ofensivos ganados." },
    { n: "Lorenzo Reyes", d: 21, rol: "Pivote (35 años) · capitán", metr: "83% de pase, 23/24 progresivos precisos (96%), 65% de duelos. Si se le presiona, la salida se va al pelotazo de los centrales." },
    { n: "J. Campusano / D. Sanhueza", d: 14, rol: "Carrileros (LWB / RWB)", metr: "Campusano 52 pérdidas (14 en campo propio), 4 centros sin acierto; Sanhueza 11 centros (27%), 76% en duelo defensivo. Son los que dejan la espalda libre al atacar." },
    { n: "S. Valencia / O. Bosso", d: 15, rol: "Centrales de salida (LCB / CB)", metr: "Valencia: 20 pérdidas en campo propio en 201' y 37,5% en duelos aéreos en su tercio. Bosso: 22 pérdidas en campo propio, roja vs Everton y autogol vs Limache." }
  ],
  fortalezas: [
    "Juego aéreo ofensivo: 12 remates de cabeza (50% al arco, 1,60 xG = 39% de su xG). Jeraldino gana 19 de 38 aéreos y Rami (192 cm) aporta 0,80 xG en 126'.",
    "Creación de Plaza: 4,2 jugadas clave/90 y lanzador de balón parado (córners desde ambos lados).",
    "Duelo defensivo en su campo: 59% ganado; los carrileros son fuertes en el 1v1 defensivo (Sanhueza 76%, Campusano 66%).",
    "Presión agresiva cuando juega con línea de 3 (PPDA 8,6; 5,5 en el 3-4-3 vs Everton).",
    "Empuja al final: 12 de sus 45 tiros (27%) llegan después del 75'."
  ],
  vulnerabilidades: [
    "Se parte al atacar: con línea de 3 concede 1,93 xG/90 (5,61 xG en 261').",
    "Pierde arriba y no recupera: 42,3% de las pérdidas en el último tercio, solo 17,6% de recuperaciones en campo rival.",
    "Bloque ancho (47-50 m) y corto (38-47 m): espacios entre carrilero y central de fuera.",
    "Salida frágil por izquierda: 9,4% de sus pérdidas son en su propio tercio izquierdo (zona Valencia/Campusano); Valencia pierde 20 balones en campo propio en 2 partidos.",
    "Disciplina y área: 3 rojas en los últimos 5 (Bosso, Calderón, Mansilla) y 2 penales concedidos en 4 partidos.",
    "Se cae al final: 4 de los 8 goles en contra llegaron desde el 75'.",
    "Poca calidad de tiro: 51% de sus remates desde fuera del área (2 de 23 al arco); duelos ofensivos 34%; centros 28%."
  ],
  recomendaciones: [
    "Bloque medio-bajo compacto (≈42 m de ancho, como ante Colo-Colo) y salida vertical tras el robo hacia la espalda del carrilero que subió: ≤3 pases, Vadalá/Chandía conduciendo, Johansen fijando a Bosso.",
    "Presión orientada a su salida IZQUIERDA (Valencia/Campusano) en saques de arco y cesiones: el 9 tapa a Reyes, nuestro lateral derecho salta al carrilero y Vadalá cierra por dentro.",
    "Cortar el centro en origen y defender el área al hombre: Gazzolo sobre Jeraldino/Rami; Salinas cierra el segundo palo con ayuda de Galani. Cero faltas laterales cerca del área.",
    "Vigilancia de Plaza entre líneas (Galani) y orientarlo hacia fuera: es su único creador interior.",
    "ABP ofensivo: córners al primer palo y área chica sobre Valencia (37,5% aéreo en su tercio); centros desde nuestra derecha al segundo palo.",
    "Cambios en el 60-70' con piernas para la transición (Chandía, Pratto, Riveros): Ñublense se abre al final (4 de 8 goles en contra desde el 75').",
    "Gestión emocional y disciplinaria: llegan con 5 derrotas seguidas y 3 rojas en 5 partidos; no entrar en el juego de faltas y castigar su ansiedad."
  ],
  // ===== INSIGHTS PRIORIZADOS (por impacto competitivo) =====
  insights: [
    { t: "Pierde el orden al atacar: la línea de 3 con carrileros altos es su talón de Aquiles", nivel: "ALTA", capa: "desprotegidas",
      evidencia: "[DATO] Con 3-4-3/3-5-2 (65% de los minutos) concede 5,61 xG en 261' = 1,93 xG/90 y genera 0,47 xG/90. Con línea de 4: 1,69 xGA/90 y 1,80 xG/90. 5 de los 8 goles en contra llegaron con línea de 3. Ancho medio del bloque: 48,8 m.",
      interpretacion: "[INFERENCIA] Al atacar, los carrileros (Campusano/Sanhueza) se suman por delante del balón y los centrales de fuera (Valencia/Calderón) quedan expuestos: el bloque se estira a lo ancho y el espacio entre el carrilero y el central de fuera queda libre.",
      riesgo: "OPORTUNIDAD para Coquimbo: cada pérdida suya en ataque abre una transición contra 3 defensores con espacio a los costados.",
      respuesta: "Bloque medio-bajo compacto (≈42 m de ancho, como ante Colo-Colo) y salida vertical tras robo hacia la espalda del carrilero: primer pase a Vadalá/Chandía y ataque inmediato del canal entre el carrilero y el central de fuera." },
    { t: "Pérdidas en el último tercio + nula contrapresión = transiciones regaladas", nivel: "ALTA", capa: "perdidas",
      evidencia: "[DATO] 597 pérdidas en 4 partidos (149/partido): 42,3% en el último tercio (derecha 16,9%, izquierda 13,9%). Recuperaciones en campo rival: 17,6% (4,4 / 5,6 / 7,7% por carril). Duelos ofensivos ganados: 34%. Ovelar 20,5, Jeraldino 21,5, Tapia 18,9 y Rami 18,6 pérdidas/90.",
      interpretacion: "[INFERENCIA] Ataca con mucha gente y gana poco el duelo arriba; tras perder no presiona la segunda acción, retrocede (38,7% de sus recuperaciones son en su propio tercio).",
      riesgo: "OPORTUNIDAD: el primer pase tras el robo es la ventaja. RIESGO: si nuestra salida es lenta, se rearma en su campo, donde defiende bien el duelo (59%).",
      respuesta: "Robar en nuestro medio campo (Galani, Camargo, Gazzolo) y jugar en ≤3 pases hacia el carril del carrilero que subió. Fijar a Reyes (35 años) por dentro para que no cierre el pasillo." },
    { t: "Salida por su izquierda: zona de pérdida en campo propio", nivel: "MEDIA", capa: "perdidas",
      evidencia: "[DATO] 9,4% de sus pérdidas se producen en su propio tercio IZQUIERDO, frente a 3,5% en el derecho. Valencia (LCB, zurdo) pierde 20 balones en campo propio en 201' (15,2 pérdidas/90, cifra de atacante) y Campusano 14. Bosso 22 en campo propio. El 39,2% de sus faltas son por el carril izquierdo.",
      interpretacion: "[INFERENCIA] La construcción se carga por izquierda (Valencia → Reyes/Campusano) y ahí sufre cuando se le presiona. Si Valencia no está, la duda pasa a quien ocupe el LCB.",
      riesgo: "OPORTUNIDAD de robo alto en la zona Z4-Z7 de su izquierda (nuestra derecha).",
      respuesta: "Presión orientada a su salida izquierda: el 9 tapa el pase a Reyes, Salinas/Zavala saltan sobre Campusano y Vadalá cierra por dentro. Activar la presión en saques de arco y cesiones." },
    { t: "Su arma es el juego aéreo: centros y cabezazos (Jeraldino, Rami, Calderón)", nivel: "ALTA", capa: "ataque",
      evidencia: "[DATO] 12 cabezazos con 50% al arco y 1,60 xG (39% de su xG). Tiros tras centro: 4 de 4 al arco y 1,08 xG. Jeraldino 38 aéreos (50%), Rami 18 (50%). Centros: Sanhueza 11, Ovelar 9, Molina 8, Campos 7 (57% de acierto). En ABP rematan Calderón (0,21 + 0,19 xG) y Sanhueza (0,29 xG).",
      interpretacion: "[INFERENCIA] Sin juego interior fluido (pase 77%, duelos ofensivos 34%), su vía real de gol es el centro al área y el balón parado.",
      riesgo: "RIESGO para Coquimbo: nuestros puntos débiles por arriba son Cabrera (29% aéreo) y Salinas (48%, 3 de 7 vs Colo-Colo).",
      respuesta: "Cortar el centro en origen (no conceder el perfil a Sanhueza/Campos), marca al hombre sobre Jeraldino/Rami con Gazzolo (4 de 4 aéreos vs Colo-Colo) y vigilar el segundo palo del lado de Salinas. Evitar faltas laterales." },
    { t: "Plaza es el único creador: secarlo apaga su ataque organizado", nivel: "MEDIA", capa: "creacion",
      evidencia: "[DATO] Plaza 9 jugadas clave en 195' (4,2/90) y 0,60 xA; 1º de la liga en jugadas clave/90 en la temporada (2,38, Wyscout liga). Valencia 0,57 xA y Campos 0,48 xA desde atrás. Ningún otro supera 3 jugadas clave.",
      interpretacion: "[INFERENCIA] La creación interior depende de un solo jugador; el resto del ataque es centro y segunda pelota.",
      riesgo: "RIESGO: si Plaza recibe de frente entre líneas (Z11-Z14) encuentra a Ovelar/Molina en carrera.",
      respuesta: "Vigilancia del pivote más cercano (Galani) sobre Plaza en zona de recepción; orientarlo hacia la banda. En ABP en contra, preparar su córner cerrado y abierto (lanza desde ambos lados)." },
    { t: "Se cae en el tramo final y se descontrola", nivel: "MEDIA", capa: "faltas",
      evidencia: "[DATO] 4 de 8 goles en contra desde el 75' (76', 86', 88', 90'). 3 rojas en los últimos 5 partidos (Bosso 90' vs Everton, Mansilla 78' vs Limache, Calderón 45' vs U. de Chile) y 2 penales en contra (23' y 30'). A la vez es cuando más remata (27% de sus tiros después del 75').",
      interpretacion: "[INFERENCIA] Al ir perdiendo abre el partido (pasa a línea de 4 y suma delanteros; vs Everton usó 4 dibujos distintos) y deja aún más espacio atrás.",
      riesgo: "OPORTUNIDAD: un Coquimbo con piernas frescas en el 70-90' encuentra espacios. RIESGO: nosotros también encajamos tarde (U. de Chile, 3 goles en 8').",
      respuesta: "Plan de cambios para el 60-70' con jugadores de transición (Chandía, Pratto, Riveros) y gestión del área propia en los últimos 15': sin faltas laterales y con un central extra si vamos ganando." },
    { t: "Calderón (RCB) probablemente no esté", nivel: "BAJA", capa: "weakdef",
      evidencia: "[DATO CFDB] P. Calderón vio roja directa al 45' vs U. de Chile (12-10). Es su máximo recuperador (76 recuperaciones, 18,2/90) y rematador en ABP.",
      interpretacion: "[HIPÓTESIS] Sanción de al menos 1 fecha, pendiente del Tribunal. Si no juega, entra Salomón o Campos en el RCB.",
      riesgo: "OPORTUNIDAD: pierden su central más activo en el duelo y una amenaza aérea en ABP.",
      respuesta: "Confirmar la sanción antes del partido. Si no está, atacar el lado derecho de su línea de 3 (nuestra izquierda: Cornejo + Chandía)." }
  ],
  // ===== CRUCE Coquimbo ↔ Ñublense =====
  cruce: {
    nuestrasVirtudesVsSusDefectos: [
      { nuestra: "Transición desde bloque bajo: vs Colo-Colo 3,24 xG con 28,75% de posesión, 62,9% de recuperaciones en campo propio, 15 de 16 tiros dentro del área (Hudl 11-10).",
        suya: "Pierde el 42,3% en el último tercio y recupera arriba solo el 17,6%; con línea de 3 concede 1,93 xG/90.",
        palanca: "Repetir el plan Colo-Colo: bloque compacto, robo en nuestro medio y ataque a la espalda del carrilero en ≤3 pases.", fuerza: "ALTA" },
      { nuestra: "Creación por banda: Cornejo (3º de la liga en pases clave/90), Zavala (1,76 xA en 5 partidos), Vadalá (1,33 xG + 0,59 xA vs Colo-Colo).",
        suya: "Bloque ancho (≈49 m) con carrileros altos: espacio entre carrilero y central de fuera; duelos ofensivos 34%.",
        palanca: "Doblar por fuera (Cornejo + Chandía / Salinas + Zavala) cuando su carrilero quede arriba; centro atrás (cut-back) en vez de centro colgado.", fuerza: "ALTA" },
      { nuestra: "Juego aéreo y córners: 53% de aéreos (4º de la liga), 4º en córners generados; Gazzolo 4 de 4 aéreos vs Colo-Colo.",
        suya: "Valencia gana 37,5% de los aéreos en su tercio, Bosso 50%; 2 penales concedidos en 4 partidos; posible baja de Calderón.",
        palanca: "Córners al primer palo y al área chica sobre el lado de Valencia; centros desde nuestra derecha al segundo palo.", fuerza: "MEDIA" },
      { nuestra: "Johansen: 9 goles (7º de la liga), 5,16 toques en área/90; doblete vs Colo-Colo.",
        suya: "Defensa que se desordena y concede tiros dentro del área (8 goles en 8,12 xGA).",
        palanca: "Johansen fijando a Bosso por el centro para liberar la llegada de Vadalá/Chandía desde la segunda línea.", fuerza: "MEDIA" }
    ],
    nuestrosDefectosVsSusVirtudes: [
      { nuestro: "De visita encajamos 1,83 goles por partido (vs 1,00 de local) y nos cuesta el cierre (U. de Chile: 3 goles en 8').",
        suya: "Empuja al final: 27% de sus tiros después del 75'; juega de local en Chillán.",
        mitigacion: "Gestión del 70-90': cambios defensivos a tiempo, bloque más bajo y salida al contragolpe si vamos ganando.", riesgo: "ALTO" },
      { nuestro: "Debilidad aérea en el lateral: Cabrera 29% de aéreos, Salinas 48% (3 de 7 vs Colo-Colo).",
        suya: "Cabezazo como vía principal de gol (39% de su xG); Jeraldino y Rami de referencia; centros de Sanhueza/Campos.",
        mitigacion: "Marca al hombre en el área sobre sus 9; los laterales cierran el segundo palo con ayuda del pivote; cortar el centro en origen.", riesgo: "ALTO" },
      { nuestro: "Muchas pérdidas por banda (Cornejo 75 y Salinas 74 en 5 partidos; Salinas 14 vs Colo-Colo) e indisciplina (8 rojas en la temporada).",
        suya: "Presión agresiva con línea de 3 (PPDA 8,6) y 59% de duelos defensivos ganados en su campo; carrileros fuertes en el 1v1 defensivo.",
        mitigacion: "Salir por dentro con Galani/Gazzolo y buscar la espalda en largo cuando presione con 5; no forzar el 1v1 del lateral contra Sanhueza.", riesgo: "MEDIO" },
      { nuestro: "Conversión: somos el equipo que más rinde por debajo de su xG en la liga (xPoints 36,6 vs 29 reales).",
        suya: "Defiende bien el duelo en su área cuando está ordenada (59%); arquero N. Pérez sin datos de atajada en este formato.",
        mitigacion: "Priorizar tiros de alta calidad (dentro del área, tras pase atrás) y no rematar de lejos.", riesgo: "MEDIO" }
    ]
  },
  // Validación cruzada
  cross: {
    wyscout: { xgProm: 1.02, golProm: 0.5, posProm: 51.1, ppdaProm: 11.2, duelosProm: 49 },
    cfdb: { gfpg: 1.17, gapg: 1.54, pts: 32, pos: 10 },
    datalabs2025: { posesion: null, tiros: null, pases: null },
    ligaWy: { xg: 31.1, xga: 32.9, pj: 23 },
    veredicto: "Los informes muestran el peor tramo del año: en la temporada (Wyscout liga) concede 1,43 xGA por partido y en estos 4 concede 2,03 (+42%); CFDB confirma la caída (4 derrotas y luego 0-6). xG en los informes 4,08 ≈ suma por jugador 4,09 y goles a favor 2 = CFDB. La muestra es de 4 partidos, todos derrotas: confianza ALTA en el patrón, MEDIA en la magnitud."
  },
  zonas: {
    nota: "Ataque ↑ (Ñublense). Las capas «real 3×3» usan las cuadrículas de Wyscout (tercio × carril, % del total) [DATO]. Las capas 6×3 ubican el dato sobre el modelo de 18 zonas [INFERENCIA de ubicación].",
    capas: [
      { id: "desprotegidas", label: "Zonas que deja libres al atacar", tipo: "red",
        grid: [[0.25,0.15,0.25],[0.85,0.35,0.80],[0.90,0.45,0.85],[0.55,0.40,0.55],[0.20,0.15,0.20],[0.05,0.05,0.05]],
        interp: "Con línea de 3 y carrileros altos, al perder la pelota quedan libres los PASILLOS EXTERIORES de su campo (Z4-Z9, a la espalda de Campusano y Sanhueza) y los medios-espacios junto a los centrales de fuera. Ahí concede 1,93 xG/90. Plan Coquimbo: atacar ese canal en ≤3 pases tras el robo." },
      { id: "perdidas", label: "Pérdidas de balón (real 3×3)", tipo: "g3", color: "red", src: "perdidas",
        interp: "42,3% de las pérdidas en el último tercio (más por la derecha, 16,9%) y 14,9% en el medio-izquierdo. En su propio tercio pierde el triple por izquierda (9,4%) que por derecha (3,5%): la salida de Valencia/Campusano es el punto de robo." },
      { id: "recuperaciones", label: "Recuperaciones (real 3×3)", tipo: "g3", color: "gold", src: "recuperaciones",
        interp: "Recupera en su campo (38,7% en el propio tercio, 43,6% en el medio) y casi nada arriba (17,6%). No hay contrapresión tras pérdida: retrocede, y eso da tiempo y espacio al rival en la transición." },
      { id: "faltas", label: "Faltas cometidas (real 3×3)", tipo: "g3", color: "red", src: "faltas",
        interp: "Hace falta sobre todo en el medio y por izquierda (39,2% por ese carril; 17,6% en el último tercio izquierdo, cortando contras). Atraer el juego a su izquierda y acelerar provoca tarjetas: 3 rojas en sus últimos 5." },
      { id: "ataque", label: "Ataque y finalización", tipo: "heat", color: "gold",
        grid: [[0,0.05,0],[0.05,0.10,0.05],[0.15,0.20,0.20],[0.35,0.30,0.45],[0.45,0.55,0.60],[0.30,0.90,0.45]],
        interp: "Llega por fuera (centros de Sanhueza, Ovelar, Molina y Campos) y define de cabeza en el centro del área (12 cabezazos, 1,60 xG). La mitad de sus tiros son de fuera del área y casi no van al arco (2 de 23). Defender el centro y el segundo palo." },
      { id: "creacion", label: "Red de construcción (salida)", tipo: "net",
        interp: "Lámina «Construcción del juego»: los centrales buscan directo a Jeraldino (Bosso 7, Calderón 5); Valencia sale con Reyes/Campusano y Campusano con Ovelar. Reyes es el único pivote de pase seguro. Tapar a Reyes obliga al pelotazo a Jeraldino, y ahí está Gazzolo." },
      { id: "weakdef", label: "Duelos aéreos de sus defensores (su tercio)", tipo: "weakdef",
        interp: "[DATO] Duelos aéreos en su propio tercio: Valencia 37,5% (8), Bosso 50% (8), Campos 50% (4), Calderón 57% (7), Campusano 75% (4). El punto débil es su CENTRAL IZQUIERDO: cargar centros y córners a esa zona (nuestra derecha)." }
    ],
    defensores: [
      { d: 15, n: "Valencia", x: 95,  y: 375, aer: 38 },
      { d: 4,  n: "Bosso",    x: 150, y: 368, aer: 50 },
      { d: 6,  n: "Calderón", x: 205, y: 375, aer: 57 },
      { d: 14, n: "Campusano",x: 45,  y: 290, aer: 75 },
      { d: 5,  n: "Campos",   x: 255, y: 290, aer: 50 },
      { d: 1,  n: "N. Pérez", x: 150, y: 432, aer: null }
    ],
    nodos: [
      { d: 1,  n: "N. Pérez",  x: 150, y: 432, c: 8 },
      { d: 15, n: "Valencia",  x: 95,  y: 375, c: 12 },
      { d: 4,  n: "Bosso",     x: 150, y: 368, c: 27 },
      { d: 6,  n: "Calderón",  x: 205, y: 375, c: 17 },
      { d: 14, n: "Campusano", x: 42,  y: 265, c: 23 },
      { d: 28, n: "Rivera",    x: 120, y: 285, c: 13 },
      { d: 21, n: "Reyes",     x: 180, y: 285, c: 21 },
      { d: 16, n: "Sanhueza",  x: 258, y: 265, c: 8 },
      { d: 10, n: "Plaza",     x: 190, y: 200, c: 9 },
      { d: 19, n: "Tapia",     x: 75,  y: 160, c: 9 },
      { d: 7,  n: "Ovelar",    x: 228, y: 150, c: 18 },
      { d: 20, n: "Jeraldino", x: 150, y: 100, c: 21 }
    ],
    edges: [[4,20,3],[4,21,2],[4,14,2],[4,28,2],[4,6,2],[6,20,2],[6,21,2],[6,19,1],[15,21,2],[15,14,1],[15,28,1],[14,7,2],[14,19,1],[14,28,1],[14,10,1],[21,7,1],[21,10,1],[21,20,1],[28,14,1],[28,20,1],[16,10,1]]
  },
  balonParado: {
    porPartido: [],
    ofensivo: { cornersProm: 4.3, pctRemate: 29, lanzador: "Tapia (6, desde la izquierda) y Plaza (6, ambos lados); Valdés, Molina, Ovelar", rematadores: "Calderón (0,21 xG de córner + 0,19 de tiro libre), Sanhueza (0,29 xG de tiro libre), Rami (0,11)",
      veredicto: "17 córners en 4 partidos (4,3/partido) con 5 remates (29%) y 9 tiros de ABP con 0,86 xG y 0 goles: amenaza moderada que depende del cabezazo de Calderón/Rami." },
    defensivo: { cornersContraProm: null, pctRemateContra: null, aerialTeamProm: 52,
      veredicto: "El informe por equipo NO trae córners ni tiros en contra: sin dato de ABP defensiva. Proxy: gana 52% de los aéreos (Valencia 37,5% en su tercio) y concedió 2 penales en 4 partidos." },
    debilidadAerea: "El punto flaco aéreo es su central izquierdo (Valencia, 37,5% en su tercio). Calderón (57%) probablemente suspendido."
  },
  // ===== PREPARACIÓN DEL PARTIDO: inferencias, hipótesis y lecturas (lente /analista-futbol-pro) =====
  preparacion: {
    contexto: "[INFERENCIA] Choque de inercias opuestas: Coquimbo llega de GOLEAR 5-2 al líder Colo-Colo con su mejor versión (reactiva, letal en transición) y subió a 8º; Ñublense llega en caída libre (4 derrotas en los informes + 0-6 con U. de Chile, 3 rojas en 5). El estado anímico y el estado del partido juegan a nuestro favor, pero son precisamente los partidos que 'se deben ganar' los que más cuestan por ansiedad propia y por un rival sin nada que perder.",
    hipotesis: [
      { t: "Ñublense saldrá a proponer en casa (Chillán) — y eso nos conviene", nivel: "HIPÓTESIS", txt: "Local, necesitado y con un DT presionado, es probable que Ñublense tome la iniciativa con su línea de 3 y carrileros altos. Es justo el escenario que Coquimbo explota mejor (vs Colo-Colo: 28,75% de posesión, 3,24 xG). Cederles el balón no es renunciar: es tenderles la trampa. Si en cambio se encierran, habrá que tener plan B de ataque posicional (paciencia + Zavala/Cornejo por fuera)." },
      { t: "Si marcamos primero, el partido se rompe a nuestro favor", nivel: "HIPÓTESIS", txt: "Ñublense ya pierde el orden al atacar; yendo abajo en el marcador suma delanteros y abre aún más la espalda de los carrileros (vs Everton usó 4 dibujos). Un gol temprano nuestro multiplica los espacios para Johansen/Chandía/Vadalá en transición. Prioridad: eficacia en la primera ocasión clara." },
      { t: "Doble filo del tramo final (75'-90')", nivel: "INFERENCIA", txt: "Ellos encajan 4 de 8 goles tras el 75' y se descontrolan (rojas); nosotros encajamos tarde también (U. de Chile: 3 goles en 8'). El último cuarto de hora decide: con ventaja, cambios defensivos y bloque bajo; sin ventaja, piernas frescas (Chandía, Riveros, Pratto) para castigar su desorden." },
      { t: "Baja probable de Calderón (RCB) abre su costado derecho", nivel: "HIPÓTESIS", txt: "Roja directa vs U. de Chile → sanción probable. Es su central más activo (recuperador y rematador de ABP). Si no juega, su línea de 3 pierde solidez por la derecha: atacar ahí con Cornejo + Chandía (nuestra izquierda) y cargar córners sobre su zona izquierda (Valencia 37,5% aéreo). Confirmar XI 60' antes." },
      { t: "Nuestra ABP es palanca infrautilizada y hoy más fuerte", nivel: "INFERENCIA", txt: "Con Pratto (188) y Pons (186) sumados a Gazzolo, el peso aéreo ofensivo creció. Ñublense concede 2 penales en 4 partidos y es flojo por su central izquierdo. Ensayar córners al primer palo/área chica sobre Valencia y centros desde nuestra derecha al segundo palo es una vía de gol de alta probabilidad." },
      { t: "Riesgo de ansiedad y faltas: no entrar en su juego", nivel: "HIPÓTESIS", txt: "Un rival en crisis busca cortar el ritmo con faltas (39% por su izquierda) y provocar. Nuestra indisciplina (8 rojas en la temporada) es el mayor riesgo de autoboicot. Mensaje: jugar rápido las faltas a favor, no responder, y acelerar hacia su izquierda para provocar sus tarjetas (3 rojas en 5)." }
    ],
    guion: [
      "0-20': cederles el balón y defender en bloque medio-bajo compacto (≈42 m); robar en nuestro medio y salir a la espalda del carrilero en ≤3 pases. Primera ocasión = máxima eficacia.",
      "20-60': sostener el orden; buscar su costado derecho (posible baja de Calderón) y el cut-back por fuera. Vigilancia de Plaza entre líneas (Galani) y marca al hombre sobre Jeraldino/Rami en centros.",
      "60-75': ventana de cambios con piernas de transición (Chandía, Riveros, Pratto); ellos se abren y se cansan. Córners sobre la zona de Valencia.",
      "75-90': gestión del resultado. Con ventaja: central extra, bloque bajo, cero faltas laterales. Sin ventaja: presión final a su salida izquierda y balón al área con los grandes."
    ],
    mensajes: {
      ARQUERO: "Saque rápido para iniciar transición; ordena la última línea en los últimos 15'. Sal con decisión en el centro/segundo palo.",
      DEFENSAS: "Gazzolo al 9 (Jeraldino/Rami). Cerrar el segundo palo del lado de Salinas. Cero faltas cerca del área. Salida limpia para iniciar la transición.",
      MEDIO: "Robar y soltar rápido hacia el espacio; Galani vigila a Plaza y lo orienta afuera. Vadalá/Chandía conduciendo la transición. No forzar el 1v1 contra sus carrileros (fuertes en defensa).",
      DELANTEROS: "Johansen fija a Bosso por el centro y abre la llegada de la segunda línea. Atacar la espalda del carrilero que sube. Remate dentro del área, no de lejos. Castigar su desorden tras el 60'."
    }
  }
};
})();
