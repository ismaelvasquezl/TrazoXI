// Audax Italiano — decodificación de 5 informes Hudl Wyscout «Informe Partido» (2026).
// Partidos: Concepción 0-1 Audax (04-09, V, W) · Audax 1-0 O'Higgins (13-09, L, W) · Audax 1-1 Huachipato (23-10, L, D) · U. Católica 1-1 Audax (28-10, V, D) · D. Limache 2-0 Audax (02-11, V, L).
// Fuente: uploads/*.pdf (texto en /tmp/aud/*.txt). Métricas de equipo medidas por el «Informe Partido» (xG, posesión, PPDA, duelos, pases, centros, pérdidas/recuperaciones por tercio). [DATO Wyscout]
// Goles/asistencias/rojas y XI: CFDB match_events. Contexto de tabla y DT: CFDB (Audax 13º, Gustavo Lema).
// La red de pases y la centralidad son [INFERENCIA] de roles + goles/asistencias (no se cargó la matriz pasador×receptor). El resto son [DATO Wyscout].
// NO editar a mano salvo al cargar nuevos informes. Se monta sobre WYSCOUT (wyscout.js debe cargarse antes).
(function(){
if (typeof WYSCOUT === 'undefined') return;

WYSCOUT.equipos["Audax Italiano"] = {
  dt: "Patricio Graf",
  formacionBase: "4-2-3-1 de base; muta a 4-4-2 / 4-4-1 reactivo e incluso 3-5-2 según el estado del partido",
  nPartidos: 5,
  informe: "5 «Informe Partido» completos (Concepción, O'Higgins, Huachipato, U. Católica, Limache). Traen xG, posesión, PPDA, duelos, pases, centros y pérdidas/recuperaciones por tercio de ambos equipos. [DATO Wyscout]",
  resumen: "Equipo REACTIVO y de eficacia, peleando la zona media-baja (13º, 30 pts, GF28-GC35, DG-7 en la temporada). En estos 5 informes: 2 victorias, 2 empates y 1 derrota (GF4-GC4), pero con un rasgo definitorio idéntico al de La Calera: sus RESULTADOS están desacoplados del xG. GANÓ sus dos partidos siendo claramente INFERIOR (a O'Higgins 1-0 con 0,33 xG vs 1,81; a Concepción 1-0 con 0,61 vs 2,10) y PERDIÓ el único que dominó (0-2 en Limache generando 1,86 vs 1,56). Es más peligroso SIN el balón: cuando propone se vuelve estéril. Defiende en bloque medio-bajo (PPDA 12-15 en sus triunfos), pierde el 45% de los balones en el último tercio y casi no contrapresiona (12,7% de recuperaciones en campo rival). Vive de la eficacia de César Pinares (2 goles, lanza penales) y de errores/expulsiones rivales (ganó a O'Higgins y a Concepción con el rival reducido a 10). Llega golpeado: acaba de caer 0-2 en Limache.",
  hallazgoClave: "VALIDADO: Audax es un equipo reactivo cuyos resultados NO siguen al xG. Gana con poca posesión y poco xG (0,33 y 0,61 en sus victorias) apoyado en eficacia y en rivales expulsados; pierde cuando se ve obligado a proponer (0-2 en Limache con 59% de balón y más xG). Con el balón circula pero no penetra; su vía real es Pinares (creación + penales) y el centro ocasional. Ceder la pelota y golpear en transición —nuestro plan Colo-Colo/La Calera— es el escenario que mejor explotamos; el riesgo no es su posesión, sino NUESTRA pérdida que les regala la transición, y la pelota parada/penal que convierte Pinares.",
  partidos: [
    { j: 19, fecha: "2026-09-04", rival: "D. Concepción", loc: "V", gf: 1, ga: 0, xi: null, xg: 0.61, xgRival: 2.10, pos: 32, ppda: 12.0, duelos: 47, golesContra: [] },
    { j: 20, fecha: "2026-09-13", rival: "O'Higgins",     loc: "L", gf: 1, ga: 0, xi: null, xg: 0.33, xgRival: 1.81, pos: 36, ppda: 15.2, duelos: 47, golesContra: [] },
    { j: 24, fecha: "2026-10-23", rival: "Huachipato",    loc: "L", gf: 1, ga: 1, xi: null, xg: 1.18, xgRival: 1.14, pos: 66, ppda: 8.3,  duelos: 51, golesContra: ["25' M. Rodríguez"] },
    { j: 25, fecha: "2026-10-28", rival: "U. Católica",   loc: "V", gf: 1, ga: 1, xi: null, xg: 1.53, xgRival: 1.72, pos: 39, ppda: 13.0, duelos: 47, golesContra: ["28' F. Zampedri"] },
    { j: 26, fecha: "2026-11-02", rival: "D. Limache",    loc: "V", gf: 0, ga: 2, xi: null, xg: 1.86, xgRival: 1.56, pos: 59, ppda: 8.5,  duelos: 47, golesContra: ["15' A. Aguirre", "90' M. Arturia (penal)"] }
  ],
  redPases: {
    carriles: { izq: 32, centro: 36, der: 32 },
    carrilesNota: "[INFERENCIA] Juego con eje central por Pinares; sin un lado dominante claro. No es % medido: estimado por roles y origen de sus goles",
    enlaceTop: "Coelho / Mateos → Pinares, y Pinares filtra al 9 (Chiaverano) o define él mismo [INFERENCIA de goles y asistencias]",
    centralidad: [
      { n: "C. Pinares", d: 10, c: 25 }, { n: "E. Ferrario", d: 5, c: 21 }, { n: "D. Coelho", d: 7, c: 20 },
      { n: "F. Salomoni", d: 3, c: 19 }, { n: "R. Rebolledo", d: 4, c: 18 }, { n: "F. Mateos", d: 8, c: 17 },
      { n: "G. Chiaverano", d: 9, c: 16 }, { n: "P. Guajardo", d: 11, c: 12 }, { n: "F. Troyansky", d: 19, c: 11 }, { n: "GK", d: 1, c: 7 }
    ],
    centralidadNota: "[INFERENCIA] Centralidad estimada por rol, minutos y participación en goles (los informes de Audax no se cargaron con la matriz pasador×receptor). Mapa de quién conecta, no dato de evento."
  },
  jugadores: [
    { n: "César Pinares", d: 10, rol: "Enganche/mediapunta · creador y lanzador de penales", metr: "[DATO] 2 goles en la muestra: penal vs U. Católica (55') y gol vs Concepción (17', asist. Coelho). Su principal fuente de peligro y el que ejecuta los penales. Secarlo entre líneas y no conceder penales apaga su ataque." },
    { n: "Giovani Chiaverano", d: 9, rol: "9 de referencia", metr: "[DATO] 1 gol (vs O'Higgins 27') + 1 asistencia (a Salomoni vs Huachipato). Punto de apoyo del ataque directo; destino del pase filtrado de Pinares." },
    { n: "Felipe Salomoni", d: 3, rol: "Lateral/defensa con llegada", metr: "[DATO] 1 gol vs Huachipato (34', asist. Chiaverano): aparece en segunda línea. Atención a su subida en pelota parada y centros." },
    { n: "Diego Coelho", d: 7, rol: "Extremo/mediapunta · desborde", metr: "[DATO] Asistencia a Pinares (Concepción). Da el pase de la última línea; vigilar su conducción hacia dentro." },
    { n: "Franco Troyansky", d: 19, rol: "Delantero de rotación/impacto", metr: "[INFERENCIA] Alterna con Chiaverano arriba; entra para dar profundidad en el tramo final." },
    { n: "Enzo Ferrario", d: 5, rol: "Mediocentro de corte", metr: "[DATO] Volumen de duelo y faltas (amarillas recurrentes): sostiene el bloque medio. Buscar recibir a su espalda entre líneas." }
  ],
  fortalezas: [
    "Eficiencia reactiva: gana con poco balón y poco xG (1-0 a O'Higgins con 0,33 xG; 1-0 a Concepción con 0,61). Sostiene resultados sin dominar.",
    "César Pinares: creación entre líneas + ejecución de penales; es el jugador que decide sus partidos.",
    "Bloque medio-bajo ordenado: en sus triunfos sube el PPDA (12-15), espera y golpea; recupera el 87% de los balones en su propio campo + mediocampo.",
    "Aprovecha la superioridad: sus dos victorias llegaron con el rival expulsado (O'Higgins y Concepción con uno menos).",
    "Empuja en pelota parada y segunda jugada (gol de Salomoni desde atrás)."
  ],
  vulnerabilidades: [
    "Estéril cuando propone: perdió 0-2 el único partido que dominó (Limache, 59% de posesión y 1,86 xG). Con el balón circula pero no penetra.",
    "Resultados por encima de su juego: en 5 partidos generó 5,5 xG y concedió 8,3; el saldo (4-4) se apoya en eficacia y expulsiones rivales. Tiende a corregir a la baja (viene de caer 0-2).",
    "Pierde el balón arriba y no contrapresiona: 45% de las pérdidas en el último tercio y solo 12,7% de recuperaciones en campo rival → transiciones regaladas.",
    "Pierde el duelo físico: 48% de duelos y 46% de aéreos ganados (bajo 50%); vulnerable al balón dividido y al juego aéreo.",
    "Dependencia de Pinares: sin su chispa (o sin penal), su ataque organizado casi desaparece (0,33–0,61 xG en varios partidos).",
    "Defensa que concede volumen: GC35 en la temporada (DG-7); concede ocasiones claras dentro del área."
  ],
  recomendaciones: [
    "Cederles el balón sin pánico: bloque medio-bajo compacto y dejar que propongan — proponer es su trampa (perdieron 0-2 el único que dominaron). El riesgo real es nuestra pérdida, no su posesión.",
    "Robar en nuestro medio y salir en ≤3 pases a la espalda de sus laterales/carrileros cuando suban: Audax pierde arriba y no recupera; la transición es la vía.",
    "Secar a Pinares entre líneas (vigilancia del pivote más cercano) y NO conceder penales ni faltas peligrosas: es su fuente de gol. Marca de referencia sobre Chiaverano.",
    "Ganar los duelos y atacar por aire: Audax está bajo el 50% en duelos y aéreos; disputar cada dividido y cargar el área (Pratto 188 cm, Gazzolo) y la pelota parada.",
    "Disciplina: sus dos victorias llegaron con rival expulsado. No regalarles superioridades (ojo con nuestra tendencia a la roja; venimos de ganar con 10 a La Calera, pero no conviene repetir).",
    "Marcar primero: a un equipo que vive de la eficacia y llega golpeado (0-2 en Limache), el 1-0 lo obliga a proponer —su peor escenario— y abre la transición.",
    "Eficacia en la primera clara: su defensa concede ocasiones dentro del área; priorizar el remate de calidad y no el disparo lejano."
  ],
  insights: [
    { t: "Reactivo puro: gana sin balón, se hunde cuando propone", nivel: "ALTA", capa: "desprotegidas",
      evidencia: "[DATO] Victorias con 36% (O'Higgins) y 32% (Concepción) de posesión y 0,33/0,61 xG. Derrota 0-2 con 59% de posesión y 1,86 xG (Limache). Posesión media 46%.",
      interpretacion: "[INFERENCIA] No es un equipo de construcción: cuando lleva la iniciativa, circula sin penetrar y se vuelve estéril. Rinde mejor esperando y saliendo.",
      riesgo: "OPORTUNIDAD para Coquimbo: cederles el balón los empuja a su peor versión. Es exactamente nuestro escenario (vs Colo-Colo y vs La Calera: ganar con poco balón).",
      respuesta: "Bloque medio-bajo compacto, dejar que propongan y golpear en transición. No pelear el balón: pelear el espacio a su espalda." },
    { t: "Pierde arriba y no contrapresiona: transiciones regaladas", nivel: "ALTA", capa: "desprotegidas",
      evidencia: "[DATO] 645 pérdidas en 5 partidos: 45,3% en el último tercio. Recuperaciones: solo 12,7% en campo rival (44,5% propio, 42,8% medio). Se vuelca y no recupera la segunda acción.",
      interpretacion: "[INFERENCIA] Cuando ataca mete gente y, al perder, retrocede en vez de presionar: deja la transición abierta.",
      riesgo: "OPORTUNIDAD: el primer pase tras el robo es la ventaja. RIESGO: si nuestra salida es lenta, se rearma en bloque medio-bajo, donde defiende mejor.",
      respuesta: "Robar en nuestro mediocampo y jugar vertical en ≤3 pases a la espalda del lateral que subió, antes de que se replieguen." },
    { t: "César Pinares decide: secarlo y no darle penales", nivel: "ALTA", capa: "creacion",
      evidencia: "[DATO] 2 de los 4 goles del equipo son suyos: penal vs U. Católica (55') y gol vs Concepción (17', asist. Coelho). Es el lanzador de penales y el enlace entre líneas hacia Chiaverano.",
      interpretacion: "[INFERENCIA] La creación organizada pasa por un jugador; el resto es centro y segunda pelota. Si Pinares no recibe de frente, su ataque se apaga.",
      riesgo: "RIESGO: si recibe entre líneas (Z11-Z14) habilita a Chiaverano/Coelho; cualquier falta cerca del área es gol probable (penal).",
      respuesta: "Vigilancia del pivote más cercano (Galani) sobre Pinares y orientarlo hacia fuera; disciplina absoluta en el área: cero faltas evitables." },
    { t: "Su vía alterna es el centro y la pelota parada", nivel: "MEDIA", capa: "ataque",
      evidencia: "[DATO] 15,6 centros por partido (37% de acierto) y gol de Salomoni (defensa) desde segunda jugada. Tiros 13,2/PJ, 38% al arco.",
      interpretacion: "[INFERENCIA] Sin juego interior fluido, llena el área con centros y busca la segunda pelota/pelota parada. Volumen medio, calidad media.",
      riesgo: "RIESGO para Coquimbo: nuestros flojos por arriba son Cabrera (29% aéreo) y Salinas (48%).",
      respuesta: "Cortar el centro en origen, marca al hombre sobre Chiaverano y cubrir el segundo palo; atención a Salomoni subiendo en ABP." },
    { t: "Resultados por encima del juego: la muestra tiende a corregir", nivel: "MEDIA", capa: "desprotegidas",
      evidencia: "[DATO] En 5 partidos generó 5,5 xG y concedió 8,3 (saldo xG muy negativo) pero terminó 4-4. Dos victorias con el rival expulsado. En la temporada es 13º con GC35 (DG-7). Viene de caer 0-2.",
      interpretacion: "[INFERENCIA] Vive de la eficacia y de errores rivales; su suelo real es el de un equipo de zona baja. No sostiene ese rendimiento ante un bloque ordenado.",
      riesgo: "OPORTUNIDAD: con solidez defensiva y ocasiones claras dentro del área, la balanza vuelve a su nivel real.",
      respuesta: "Paciencia y calidad de remate; no regalarles el gol tempranero ni la superioridad que les da vida." },
    { t: "Pierde el duelo físico y el aéreo", nivel: "MEDIA", capa: "ataque",
      evidencia: "[DATO] 48% de duelos totales y 46% de aéreos ganados en la muestra (bajo 50%).",
      interpretacion: "[INFERENCIA] Equipo que no domina el choque; sufre contra rivales intensos en el dividido y en el área.",
      riesgo: "OPORTUNIDAD: imponer físico y balón aéreo es una palanca directa (Pratto, Gazzolo).",
      respuesta: "Disputar cada segunda pelota, cargar centros y córners al área y ganar los duelos en campo rival." }
  ],
  cruce: {
    nuestrasVirtudesVsSusDefectos: [
      { nuestra: "Transición desde bloque bajo: vs Colo-Colo 3,24 xG con 29% de posesión; vs La Calera ganamos 1-0 incluso con 10 (roja temprana) sosteniendo el bloque.",
        suya: "Pierde el 45% de los balones arriba y recupera solo el 12,7%; es estéril con el balón.",
        palanca: "Repetir el plan: cederles la pelota, bloque compacto, robo en nuestro medio y ataque a la espalda del lateral en ≤3 pases.", fuerza: "ALTA" },
      { nuestra: "Juego aéreo y balón parado: 53% de aéreos (4º de la liga); Pratto (188) y Gazzolo como rematadores.",
        suya: "Pierde el duelo físico: 48% de duelos y 46% de aéreos; defensa que concede (GC35).",
        palanca: "Atacar su área por arriba y en ABP; disputar cada dividido. Es su punto flaco.", fuerza: "ALTA" },
      { nuestra: "Eficacia reactiva y gol del 9: Riveros fijó y marcó el 1-0 a La Calera; sabemos competir sin dominar.",
        suya: "Defensa que concede ocasiones claras dentro del área; depende de la eficacia para ganar.",
        palanca: "Buscar la primera clara dentro del área; un gol temprano lo obliga a proponer (su peor escenario).", fuerza: "MEDIA" },
      { nuestra: "Momento anímico: racha de 3 victorias, 8º con 35 pts; invictos en los últimos 5 cruces con Audax (incl. 3-0).",
        suya: "Llega golpeado (0-2 en Limache), 13º, en zona media-baja.",
        palanca: "Salir a ganar desde el inicio aprovechando su bajón; imponer ritmo pese a jugar de visita.", fuerza: "MEDIA" }
    ],
    nuestrosDefectosVsSusVirtudes: [
      { nuestro: "De visita encajamos más y jugamos en La Florida (su casa); hemos sido irregulares lejos de Rumoroso.",
        suya: "Bloque medio-bajo local ordenado que espera y golpea; aprovecha la superioridad.",
        mitigacion: "No desesperar si no llega el gol pronto: paciencia, amplitud y cut-back; evitar la pérdida que les da la transición.", riesgo: "MEDIO" },
      { nuestro: "Debilidad aérea en el lateral (Cabrera 29%, Salinas 48%) y faltas cerca del área; indisciplina (venimos de jugar con 10).",
        suya: "Pinares lanza penales y Audax busca el centro y la pelota parada.",
        mitigacion: "Disciplina absoluta en el área, marca al hombre en centros y cero faltas evitables; no conceder penales.", riesgo: "ALTO" },
      { nuestro: "Conversión: rendimos por debajo de nuestro xG ante bloques bajos; Audax se replegará.",
        suya: "Se repliega a un bloque medio-bajo que recupera el 87% en su propio campo + medio.",
        mitigacion: "Priorizar el remate dentro del área y la pelota parada; buscar la segunda jugada donde son débiles.", riesgo: "MEDIO" }
    ]
  },
  cross: {
    wyscout: { xgProm: 1.10, golProm: 0.8, posProm: 46, ppdaProm: 11.4, duelosProm: 48 },
    cfdb: { gfpg: 1.08, gapg: 1.35, pts: 30, pos: 13 },
    datalabs2025: { posesion: null, tiros: null, pases: null },
    ligaWy: null,
    veredicto: "La muestra (5 informes) retrata a un equipo reactivo con balance xG NEGATIVO (5,5 a favor vs 8,3 en contra) que aun así sacó 4-4, apoyado en eficacia y en dos rivales expulsados. CFDB confirma su nivel de temporada: 13º, GF28-GC35 (DG-7), 1,08 goles/PJ y 1,35 GC/PJ. Conclusión: rendimiento sostenido por la eficacia de Pinares y los errores rivales, no por el juego. Confianza ALTA en el patrón reactivo y en la vía Pinares/penal; MEDIA en la magnitud (muestra corta y no consecutiva)."
  },
  zonas: {
    nota: "Ataque ↑ (Audax Italiano). Las capas ubican datos de equipo del «Informe Partido» (pérdidas/recuperaciones por tercio, centros, perfil de ataque) sobre el modelo de 18 zonas [DATO de magnitud · INFERENCIA de ubicación lateral]. La red de construcción es [INFERENCIA] de roles y goles.",
    capas: [
      { id: "desprotegidas", label: "Espacio que deja al atacar (transición)", tipo: "red",
        grid: [[0.10,0.10,0.10],[0.55,0.28,0.58],[0.82,0.38,0.85],[0.60,0.42,0.65],[0.25,0.22,0.30],[0.08,0.08,0.08]],
        interp: "Al volcarse (laterales altos) y perder el 45% de los balones en el último tercio sin contrapresionar (12,7% de recuperaciones arriba), deja libres los pasillos exteriores de su campo y el medio-espacio ante sus centrales. Plan Coquimbo: robar en nuestro medio y atacar ese canal en ≤3 pases antes de que se repliegue." },
      { id: "ataque", label: "Ataque y finalización", tipo: "heat", color: "gold",
        grid: [[0,0,0],[0.05,0.05,0.05],[0.12,0.15,0.12],[0.30,0.35,0.32],[0.45,0.55,0.45],[0.40,0.72,0.42]],
        interp: "Ataca por el eje con Pinares (filtra al 9) y suma el centro ocasional (15,6/PJ, 37%). Finaliza en el centro del área; su calidad de tiro es media (38% al arco). Defender el eje y el segundo palo; marca sobre Chiaverano." },
      { id: "creacion", label: "Red de construcción (inferida)", tipo: "net",
        interp: "[INFERENCIA] Salida modesta: los centrales/pivotes (Ferrario, Rebolledo, Mateos) buscan a Pinares entre líneas, que filtra a Chiaverano o define. Tapar a Pinares reduce su ataque al centro y la segunda pelota, que es defendible. No es matriz de pases medida: mapa de roles." }
    ],
    nodos: [
      { d: 1,  n: "GK",        x: 150, y: 432, c: 7 },
      { d: 3,  n: "Salomoni",  x: 250, y: 300, c: 19 },
      { d: 4,  n: "Rebolledo", x: 120, y: 372, c: 18 },
      { d: 6,  n: "Ferrario2", x: 180, y: 372, c: 14 },
      { d: 5,  n: "Ferrario",  x: 130, y: 290, c: 21 },
      { d: 8,  n: "Mateos",    x: 195, y: 285, c: 17 },
      { d: 10, n: "Pinares",   x: 165, y: 210, c: 25 },
      { d: 7,  n: "Coelho",    x: 245, y: 185, c: 20 },
      { d: 11, n: "Guajardo",  x: 75,  y: 180, c: 12 },
      { d: 9,  n: "Chiaverano",x: 150, y: 105, c: 16 }
    ],
    edges: [[4,5,2],[4,6,1],[6,8,1],[5,10,2],[8,10,2],[5,3,1],[3,7,2],[10,7,2],[10,9,2],[10,11,1],[7,9,1],[8,3,1]]
  },
  reflexiones: {
    contexto: "[DATO+INFERENCIA] Coquimbo (8º, 35 pts, racha de 3 victorias) visita a Audax Italiano (13º, 30 pts) en el Bicentenario de La Florida (fecha 27 de liga, 08-11). Venimos de GANAR 1-0 a La Calera con un gol de Riveros (63') y, dato notable, jugando con 10 desde el minuto 22 (roja de Cabrera): el bloque reactivo aguantó y golpeó. Audax llega golpeado (0-2 en Limache). Es, otra vez, un choque de dos equipos reactivos: la clave es quién se ve obligado a proponer.",
    puntos: [
      { t: "Otro espejo reactivo: no proponer de más aunque juguemos de visita", nivel: "INFERENCIA", txt: "Audax rinde mejor sin el balón y es estéril cuando propone (perdió 0-2 el único que dominó). De visita, el reflejo puede ser tomar la iniciativa; pero nuestra mejor versión también es reactiva (vs Colo-Colo y La Calera ganamos con poca posesión). Reflexión: ceder tenencia estéril, bloque medio-bajo y transición. El que primero se obligue a proponer, pierde el guion — y a Audax eso le pesa más." },
      { t: "El 1-0 a La Calera con 10 valida el modelo: Riveros como 9", nivel: "DATO", txt: "Sin Johansen, Riveros fijó y marcó el gol (asist. Salinas) y el equipo sostuvo el resultado en inferioridad numérica. Reflexión: el mecanismo funciona; mantener a Riveros/Pratto como referencia que fija centrales y a la segunda línea (Zavala, Camargo, Vadalá) llegando. Elvis Hernández ya reaparece desde el banco: refuerza el recambio ofensivo." },
      { t: "Pinares y el penal: nuestra indisciplina es el mayor riesgo", nivel: "HIPÓTESIS", txt: "Audax decide por Pinares (2 goles, uno de penal) y por errores rivales. Nosotros venimos de jugar con 10 y arrastramos rojas en la temporada. Reflexión: disciplina absoluta en el área, marca al hombre sobre Chiaverano, vigilar a Pinares entre líneas y CERO faltas evitables cerca del área. No regalarles ni penal ni superioridad — es literalmente de lo que viven." },
      { t: "Ganar por aire y en el dividido: su grieta física", nivel: "DATO", txt: "Audax está bajo el 50% en duelos (48%) y aéreos (46%). Reflexión: imponer físico, disputar cada segunda pelota y cargar el área por arriba y en pelota parada (Pratto 188, Gazzolo). Es una palanca directa que además esquiva su bloque bajo." },
      { t: "Marcar primero rompe su libreto", nivel: "INFERENCIA", txt: "A un equipo que vive de la eficacia y llega de perder 0-2, el 1-0 lo obliga a proponer —su peor escenario— y nos abre la transición. Reflexión: máxima eficacia en la primera clara DENTRO del área; no el disparo lejano. Su defensa concede ocasiones claras (GC35)." },
      { t: "Contexto a favor, pero jugamos en su casa y golpeado muerde", nivel: "DATO", txt: "Invictos en los últimos 5 cruces con Audax (incl. 3-0) y en racha de 3 victorias; pero jugamos en La Florida y un rival dolido suele salir intenso. Reflexión: sostener el orden los primeros 15-20', no conceder el arreón inicial y, cuando baje, aparecen sus defectos estructurales. Gestionar el cierre: su gol puede venir de Pinares o pelota parada tardía." }
    ]
  }
};
})();
