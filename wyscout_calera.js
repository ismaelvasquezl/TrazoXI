// Unión La Calera — decodificación de 5 informes Hudl Wyscout «Informe Partido» (J21–J25, 2026).
// Partidos: O'Higgins 2-1 ULC (06-09, V) · ULC 0-1 La Serena (31-08, L) · ULC 3-1 U. Católica (25-10, L) · ULC 1-0 D. Limache (14-09, L) · D. Concepción 1-1 ULC (11-10, V).
// Fuente: hudl_informes/calera/*.pdf (texto en *.txt). Métricas de equipo medidas por el «Informe Partido» (xG, posesión, PPDA, duelos, pases, centros, pérdidas/recuperaciones por tercio). [DATO Wyscout]
// Goles/asistencias/rojas por minuto y XI: CFDB match_events. Contexto de tabla y DT: CFDB team_profile/standing (La Calera 16º, John Sebastián Armijo).
// Etiquetas: [DATO] medido por Wyscout/CFDB · [INFERENCIA] lectura táctica razonada · [HIPÓTESIS] a confirmar con vídeo.
// La red de pases y la centralidad son [INFERENCIA] de roles + asistencias + perfil de centros (no se cargó la matriz pasador×receptor de los informes). El resto son [DATO Wyscout].
// NO editar a mano salvo al cargar nuevos informes. Se monta sobre WYSCOUT (wyscout.js debe cargarse antes).
(function(){
if (typeof WYSCOUT === 'undefined') return;

WYSCOUT.equipos["Unión La Calera"] = {
  dt: "John Sebastián Armijo",
  formacionBase: "4-2-3-1 (dibujo base en los 5 informes); varía a 4-4-2 / 4-3-1-2 según el estado del partido",
  nPartidos: 5,
  informe: "5 «Informe Partido» completos (O'Higgins, La Serena, U. Católica, Limache, Concepción). Traen xG, posesión, PPDA, duelos, pases, centros y pérdidas/recuperaciones por tercio de AMBOS equipos. [DATO Wyscout]",
  resumen: "Equipo REACTIVO que pelea el descenso (16º y último, 21 pts, GF23-GC42 en la temporada), pero que en estos 5 informes mostró su mejor versión: 2 victorias, 1 empate y 2 derrotas (GF6-GC5). Su rasgo definitorio es que sus RESULTADOS están DESACOPLADOS del xG: perdió los dos partidos que dominó por xG (O'Higgins 1,39 vs 0,82; La Serena 1,17 vs 0,35) y sumó en los que fue inferior (gana 3-1 a la UC con 0,94 vs 2,48; empata a Concepción con 0,88 vs 2,04). Es más peligrosa SIN el balón: cuando propone (La Serena 59% en casa, perdió 0-1) se vuelve estéril. Ataca por fuera con MUCHO centro (21,4/partido, 31% de acierto), pierde el 53% de los balones en el último tercio y casi no contrapresiona (16% de recuperaciones en campo rival): se vuelca al ataque y luego se repliega a un bloque medio-bajo. Sus goles llegan tarde y desde el banco (Ferreyra, Oyarzo). Llega en racha de 1 victoria (3-1 a la UC) y urgido de puntos.",
  hallazgoClave: "VALIDADO: La Calera es un equipo reactivo cuyos resultados NO siguen al xG. En la muestra GANA/EMPATA con ≤46% de posesión (U. Católica, Limache, O'Higgins) y PIERDE cuando propone con ≥56% (La Serena 0-1 con 59%, Concepción). Con el balón circula pero no penetra (estéril); su vía real es el centro lateral (21,4/PJ) y el gol de pizarra/segunda jugada, muchas veces de un suplente (Ferreyra 2 goles, Oyarzo 1 gol + 2 asist entrando). Ceder la pelota y golpear en transición —nuestro plan Colo-Colo— es el escenario que mejor explotamos; el riesgo no es su posesión, es NUESTRA pérdida que le regala la transición y, sobre todo, el CENTRO al área.",
  // xG, posesión, PPDA, duelos = DATO del «Informe Partido». Goles: CFDB match_events.
  partidos: [
    { j: 21, fecha: "2026-08-31", rival: "La Serena",    loc: "L", gf: 0, ga: 1, xi: null, xg: 1.17, xgRival: 0.35, pos: 59, ppda: 8.3,  duelos: 45, golesContra: ["43' J. Vargas (asist. M. Pinto)"] },
    { j: 22, fecha: "2026-09-06", rival: "O'Higgins",    loc: "V", gf: 1, ga: 2, xi: null, xg: 1.39, xgRival: 0.82, pos: 46, ppda: 12.1, duelos: 45, golesContra: ["33' A. Castillo", "39' L. Pavez"] },
    { j: 23, fecha: "2026-09-14", rival: "D. Limache",   loc: "L", gf: 1, ga: 0, xi: null, xg: 1.60, xgRival: 1.15, pos: 40, ppda: 11.8, duelos: 49, golesContra: [] },
    { j: 24, fecha: "2026-10-11", rival: "D. Concepción",loc: "V", gf: 1, ga: 1, xi: null, xg: 0.88, xgRival: 2.04, pos: 56, ppda: 7.6,  duelos: 58, golesContra: ["50' E. Espinoza (asist. C. Riquelme)"] },
    { j: 25, fecha: "2026-10-25", rival: "U. Católica",  loc: "L", gf: 3, ga: 1, xi: null, xg: 0.94, xgRival: 2.48, pos: 43, ppda: 11.3, duelos: 43, golesContra: ["40' F. Zampedri (penal). La UC remató 2,48 xG y terminó con 10 (doble amarilla de J. Martínez 84'/88'): la goleada se apoyó en el desorden rival. [DATO]"] }
  ],
  redPases: {
    carriles: { izq: 30, centro: 28, der: 42 },
    carrilesNota: "[INFERENCIA] Sesgo de construcción/centro hacia la DERECHA (C. Díaz, RB muy ofensivo, asiste y centra). No es % de pase medido: se estima por el volumen de centros (21,4/PJ) y el lado de sus asistencias",
    enlaceTop: "K. Méndez → Sáez y C. Díaz → centro al área: el juego termina en pase lateral al 9 o centro desde la derecha [INFERENCIA de asistencias]",
    centralidad: [
      { n: "A. K. Méndez", d: 10, c: 24 }, { n: "R. Pérez", d: 23, c: 22 }, { n: "C. Díaz", d: 25, c: 21 },
      { n: "J. Salomoni", d: 15, c: 20 }, { n: "D. Gutiérrez", d: 27, c: 19 }, { n: "C. Gutiérrez", d: 4, c: 17 },
      { n: "J. Sáez", d: 11, c: 16 }, { n: "J. Soto", d: 29, c: 12 }, { n: "B. Oyarzo", d: 7, c: 11 }, { n: "N. Espinoza", d: 12, c: 7 }
    ],
    centralidadNota: "[INFERENCIA] Centralidad estimada por rol, minutos y participación en goles (los informes de La Calera no se cargaron con la matriz pasador×receptor). Útil como mapa de quién conecta, no como dato de evento."
  },
  jugadores: [
    { n: "Jorge Sáez", d: 11, rol: "9 de referencia · fijo en el XI", metr: "[DATO] 2 goles en la muestra (45' vs UC, 59' vs O'Higgins). Punto de apoyo del ataque directo y destino del pase lateral/centro. Si se le niega el apoyo de espaldas, el ataque pierde el eje." },
    { n: "Brian Ferreyra", d: null, rol: "Delantero SUPER-SUB · desequilibrio", metr: "[DATO] 2 goles entrando desde el banco (58' vs UC, 16' vs Limache de titular puntual). El cambio que más les cambia el partido: frescura y gol en el tramo final." },
    { n: "Bayron Oyarzo", d: 7, rol: "Enganche/interior de impacto desde el banco", metr: "[DATO] 1 gol (90' vs UC) + 2 asistencias (a Ferreyra y a C. Díaz). Entra y conecta el último tercio: su ingreso es señal de que van a volcarse." },
    { n: "Alán Kevin Méndez", d: 10, rol: "Creador · mediapunta/interior derecho", metr: "[DATO] 2 asistencias en la muestra (a Sáez y a Ferreyra). Principal fuente de pase clave; orientarlo hacia afuera le quita el pase filtrado al 9." },
    { n: "Christopher Díaz", d: 25, rol: "Lateral derecho ofensivo · centrador", metr: "[DATO] 1 gol (90' vs Concepción) + 1 asistencia; sube la banda y centra. Es el carril por donde más atacan: su subida deja espacio a su espalda (nuestra izquierda)." },
    { n: "N. Espinoza", d: 12, rol: "Arquero", metr: "[DATO] titular en la muestra. Sin datos de atajada cargados en este resumen." }
  ],
  fortalezas: [
    "Eficiencia reactiva: gana/empata con poco balón (≤46%) y convierte sus pocas ocasiones; sostiene resultados sin dominar (U. Católica 3-1 con 0,94 xG, Limache 1-0 con 40% de posesión).",
    "Juego de centros de alto volumen: 21,4 centros por partido. Si encuentra el perfil del centrador (C. Díaz por derecha), llena el área con regularidad.",
    "Gol tardío y desde el banco: Ferreyra y Oyarzo cambian partidos en el tramo final; empuja en los últimos minutos.",
    "Bloque medio-bajo ordenado tras la pérdida: recupera el 84% de los balones en su propio campo + mediocampo; no se deja correr pese a volcarse al ataque.",
    "Energía de equipo urgido: pelea el descenso y llega con una victoria que le devolvió la fe (3-1 a la UC)."
  ],
  vulnerabilidades: [
    "Estéril cuando propone: con ≥56% de posesión no ganó ninguno (La Serena 0-1 en casa con 59%, Concepción); circula pero no penetra.",
    "Resultados por encima de su juego: en 5 partidos generó 5,98 xG y concedió 6,84; el saldo real (+1 gol) se apoya en la eficacia y en errores rivales (la UC con 10 y solo gol de penal). Tiende a corregir a la baja.",
    "Pierde el balón arriba y no contrapresiona: 53% de sus pérdidas en el último tercio y solo 16% de recuperaciones en campo rival → cada pérdida alta es una transición regalada.",
    "Centro de baja calidad: 21,4 centros/PJ pero solo 31% de acierto; mucho volumen, poca precisión → defendible con marca al hombre en el área.",
    "Pierde el duelo físico en el agregado: 48% de duelos totales y 47% de aéreos ganados (bajo 50%); el balón dividido y el juego aéreo le cuestan.",
    "Defensa frágil en la temporada: 42 goles en contra en 25 fechas (1,68/PJ), la peor zona del plantel; concede dentro del área.",
    "A la espalda del lateral derecho (C. Díaz) cuando sube: su banda más ofensiva deja el carril libre para nuestra transición por izquierda."
  ],
  recomendaciones: [
    "Cederles el balón sin pánico: bloque medio-bajo compacto (≈42 m, plan Colo-Colo) y dejar que propongan — proponer es su trampa. El riesgo real no es su posesión, sino nuestras pérdidas.",
    "Robar en nuestro medio y salir en ≤3 pases a la espalda del lateral derecho (C. Díaz) que sube a centrar: Chandía/Vadalá conduciendo, atacar el canal que deja libre.",
    "Defender el CENTRO como amenaza nº1: marca al hombre sobre Sáez y el segundo palo; cortar el perfil del centrador por derecha (que C. Díaz no quede de cara). Cero faltas laterales cerca del área.",
    "Ganar los duelos y el balón aéreo: La Calera está bajo el 50% en duelos y aéreos; disputar cada dividido y atacar su área por arriba (Pratto 188 cm, Gazzolo) y en balón parado.",
    "Vigilancia de K. Méndez entre líneas (Galani) y orientarlo hacia fuera: es su principal creador; secarlo apaga el pase al 9.",
    "Atención al tramo final y a sus cambios (Ferreyra, Oyarzo): cuando entran, La Calera se vuelca. Con ventaja, bloque bajo y gestión; sin ventaja, piernas frescas para castigar su desorden tras el 60'.",
    "Marcar primero: un equipo que vive de la eficacia y pelea el descenso se desarma si va por detrás y debe proponer (su peor escenario). Priorizar la primera ocasión clara dentro del área."
  ],
  // ===== INSIGHTS PRIORIZADOS (por impacto competitivo) =====
  insights: [
    { t: "Reactiva pura: pierde cuando propone, suma cuando cede el balón", nivel: "ALTA", capa: "desprotegidas",
      evidencia: "[DATO] Con ≥56% de posesión: La Serena (59%, 0-1 L) y Concepción (56%, 1-1 D) = 0 victorias pese a generar 1,17 y 0,88 xG. Con ≤46%: U. Católica (43%, 3-1 W), Limache (40%, 1-0 W), O'Higgins (46%, 1-2 L) = las 2 victorias. Posesión media 49%.",
      interpretacion: "[INFERENCIA] No es un equipo de construcción: cuando tiene que llevar la iniciativa, circula sin penetrar y se vuelve estéril. Rinde mejor esperando y saliendo.",
      riesgo: "OPORTUNIDAD para Coquimbo: cederles el balón los empuja a su peor versión. Es exactamente nuestro escenario (vs Colo-Colo: 28,75% de posesión y 3,24 xG).",
      respuesta: "Bloque medio-bajo compacto (≈42 m), dejar que propongan y golpear en transición. No pelear el balón: pelear el espacio a su espalda." },
    { t: "Pierde arriba y no contrapresiona: transiciones regaladas", nivel: "ALTA", capa: "desprotegidas",
      evidencia: "[DATO] 668 pérdidas en 5 partidos: 53% en el último tercio (14,7% bajo / 32,3% medio / 53% alto). Recuperaciones: solo 16,1% en campo rival (40,6% propio, 43,3% medio). Se vuelca al ataque con centros y no recupera la segunda acción.",
      interpretacion: "[INFERENCIA] Cuando ataca mete gente (laterales arriba a centrar) y, al perder, retrocede en vez de presionar: deja la transición abierta.",
      riesgo: "OPORTUNIDAD: el primer pase tras el robo es la ventaja. RIESGO: si nuestra salida es lenta, se rearma en bloque medio-bajo, donde defiende mejor.",
      respuesta: "Robar en nuestro mediocampo (Galani, Camargo, Gazzolo) y jugar vertical en ≤3 pases hacia la espalda del lateral que subió, antes de que se replieguen." },
    { t: "Su vía de gol es el CENTRO al área (volumen alto, calidad baja)", nivel: "ALTA", capa: "ataque",
      evidencia: "[DATO] 107 centros en 5 partidos (21,4/PJ) con 31% de acierto. Ataca por fuera, sobre todo por la derecha de C. Díaz. Aéreos del equipo 47% (bajo 50%). Tiros 13/PJ, 37% al arco, distancia media ~18,5 m.",
      interpretacion: "[INFERENCIA] Sin juego interior fluido, llena el área con centros y busca la segunda pelota/remate de cabeza. Mucho volumen, poca precisión.",
      riesgo: "RIESGO para Coquimbo: nuestros flojos por arriba son Cabrera (29% aéreo) y Salinas (48%). El centro repetido puede encontrarles.",
      respuesta: "Cortar el centro en origen (negar el perfil a C. Díaz), marca al hombre sobre Sáez y cubrir el segundo palo del lado de Salinas con ayuda del pivote. Evitar faltas laterales." },
    { t: "Sus goles llegan tarde y desde el banco (Ferreyra, Oyarzo)", nivel: "MEDIA", capa: "ataque",
      evidencia: "[DATO] 4 de sus 6 goles en la muestra llegaron desde el minuto 58 (58', 90', 59', 90'; solo el de Ferreyra vs Limache fue al 16'). Ferreyra 2 goles de suplente, Oyarzo 1 gol + 2 asistencias entrando.",
      interpretacion: "[INFERENCIA] El XI titular produce poco; los cambios ofensivos (Ferreyra, Oyarzo) son el detonante real de su ataque en el tramo final.",
      riesgo: "OPORTUNIDAD: sabemos cuándo se vuelcan. RIESGO: nosotros también encajamos tarde (U. de Chile: 3 goles en 8'; de visita 1,83 GC/PJ).",
      respuesta: "Leer sus cambios: cuando entren Ferreyra/Oyarzo, reforzar el área y el segundo palo. Con ventaja, cambios defensivos a tiempo y bloque bajo en los últimos 15'." },
    { t: "K. Méndez es el creador: secarlo apaga el pase al 9", nivel: "MEDIA", capa: "creacion",
      evidencia: "[DATO] 2 asistencias en la muestra (a Sáez y a Ferreyra), principal fuente de pase clave. El resto del ataque es centro lateral y segunda pelota.",
      interpretacion: "[INFERENCIA] La creación interior pasa por un jugador; si no encuentra a Méndez de frente, el ataque se reduce al centro.",
      riesgo: "RIESGO: si Méndez recibe entre líneas (Z11-Z14) habilita a Sáez de espaldas o el pase a la banda.",
      respuesta: "Vigilancia del pivote más cercano (Galani) sobre Méndez en zona de recepción; orientarlo hacia fuera y tapar el pase interior al 9." },
    { t: "Resultados por encima del juego: la muestra tiende a corregir", nivel: "MEDIA", capa: "desprotegidas",
      evidencia: "[DATO] En 5 partidos generó 5,98 xG y concedió 6,84 (saldo xG negativo) pero terminó +1 en goles (6-5). La victoria clave (3-1 UC) fue con 0,94 xG vs 2,48 y rival con 10 y gol solo de penal. En la temporada es 16º con GC42.",
      interpretacion: "[INFERENCIA] Vive de la eficacia y de errores rivales; su suelo real es el de un equipo de descenso. No sostiene ese rendimiento ante un bloque ordenado.",
      riesgo: "OPORTUNIDAD: con solidez defensiva y ocasiones claras dentro del área, la balanza vuelve a su nivel real.",
      respuesta: "Paciencia y calidad de remate: priorizar el tiro DENTRO del área (como el 15/16 vs Colo-Colo), no el disparo lejano. No regalarles el gol tempranero que les da vida." }
  ],
  // ===== CRUCE Coquimbo ↔ Unión La Calera =====
  cruce: {
    nuestrasVirtudesVsSusDefectos: [
      { nuestra: "Transición desde bloque bajo: vs Colo-Colo 3,24 xG con 28,75% de posesión, 62,9% de recuperaciones en campo propio, 15 de 16 tiros dentro del área (Hudl 11-10).",
        suya: "Pierde el 53% de los balones en el último tercio y recupera arriba solo el 16%; es estéril cuando tiene el balón.",
        palanca: "Repetir el plan Colo-Colo: cederles la pelota, bloque compacto, robo en nuestro medio y ataque a la espalda del lateral que subió a centrar en ≤3 pases.", fuerza: "ALTA" },
      { nuestra: "Juego aéreo y balón parado: 53% de aéreos (4º de la liga), 4º en córners generados; Pratto (188 cm) y Gazzolo como rematadores.",
        suya: "Pierde el duelo físico: 48% de duelos y 47% de aéreos ganados (bajo 50%); defensa que concede 1,68 GC/PJ en la temporada.",
        palanca: "Atacar su área por arriba y en ABP; disputar cada dividido. Es su punto flaco en la muestra.", fuerza: "ALTA" },
      { nuestra: "Creación por banda: Cornejo (3º de la liga en pases clave/90), Zavala (1,76 xA), Vadalá (1,33 xG + 0,59 xA vs Colo-Colo).",
        suya: "Lateral derecho (C. Díaz) muy ofensivo que deja el carril a su espalda; bloque reactivo que no presiona alto.",
        palanca: "Atacar el espacio tras C. Díaz con Cornejo + Chandía por nuestra izquierda; cut-back en vez de centro colgado.", fuerza: "MEDIA" },
      { nuestra: "Marcar primero y jugar con ventaja: nuestra identidad reactiva brilla cuando el rival debe proponer.",
        suya: "Estéril cuando propone (0 victorias con ≥56% de posesión); pelea el descenso y la ansiedad le pesa.",
        palanca: "Buscar el 1-0 temprano para obligarlos a tomar la iniciativa —su peor escenario— y abrir la transición.", fuerza: "ALTA" }
    ],
    nuestrosDefectosVsSusVirtudes: [
      { nuestro: "De visita encajamos 1,83 GC/PJ y nos cuesta el cierre (U. de Chile: 3 goles en 8'); venimos de caer 2-1 ante Ñublense.",
        suya: "Gol tardío y desde el banco (Ferreyra, Oyarzo); empuja en el tramo final.",
        mitigacion: "Jugamos de LOCAL (Rumoroso): gestionar el 70-90' con cambios defensivos a tiempo y reforzar el área cuando entren sus suplentes.", riesgo: "MEDIO" },
      { nuestro: "Debilidad aérea en el lateral: Cabrera 29% de aéreos, Salinas 48%; muchas pérdidas por banda (Cornejo 75, Salinas 74 en 5 partidos).",
        suya: "Centro de alto volumen (21,4/PJ) por la derecha; busca llenar el área.",
        mitigacion: "Marca al hombre en el área, laterales cerrando el segundo palo con ayuda del pivote y cortar el centro en origen; no perder balones fáciles por nuestra banda.", riesgo: "MEDIO" },
      { nuestro: "Conversión: somos el equipo que más rinde por debajo de su xG (xPoints 36,6 vs 29 reales); ante bloque bajo creamos y no concretamos.",
        suya: "Se repliega a un bloque medio-bajo ordenado tras la pérdida (84% de recuperaciones en su campo + medio).",
        mitigacion: "Si se encierran (Plan B): paciencia, amplitud con Cornejo/Zavala, cut-back y remate dentro del área; no forzar el disparo lejano.", riesgo: "MEDIO" },
      { nuestro: "Veníamos de una derrota (Ñublense 2-1) y con bajas de ataque recientes; el estado anímico importa.",
        suya: "Llega en racha de 1 victoria (3-1 a la UC) y urgida: puede salir enchufada los primeros minutos.",
        mitigacion: "Arranque serio y sin regalar transiciones; sostener el orden en los primeros 15' y aprovechar que su nivel real es de descenso.", riesgo: "BAJO" }
    ]
  },
  // Validación cruzada
  cross: {
    wyscout: { xgProm: 1.20, golProm: 1.2, posProm: 49, ppdaProm: 10.2, duelosProm: 48 },
    cfdb: { gfpg: 0.92, gapg: 1.68, pts: 21, pos: 16 },
    datalabs2025: { posesion: null, tiros: null, pases: null },
    ligaWy: null,
    veredicto: "La muestra (5 informes, J21-J25) es el mejor tramo de La Calera en el año: 6 goles a favor y 5 en contra (saldo real +1), pero con un balance xG NEGATIVO (5,98 a favor vs 6,84 en contra). CFDB confirma que su nivel de temporada es de descenso: 16º, GF23-GC42 (-19), 0,92 goles/PJ y 1,68 GC/PJ. Conclusión: rendimiento reciente por encima de su juego, apoyado en eficacia y errores rivales. Confianza ALTA en el patrón reactivo y en la vía del centro; MEDIA en la magnitud de su solidez (muestra corta y con un rival expulsado)."
  },
  zonas: {
    nota: "Ataque ↑ (Unión La Calera). Las capas ubican datos de equipo del «Informe Partido» (pérdidas/recuperaciones por tercio, centros, perfil de ataque) sobre el modelo de 18 zonas [DATO de magnitud · INFERENCIA de ubicación lateral]. La red de construcción es [INFERENCIA] de roles y asistencias.",
    capas: [
      { id: "desprotegidas", label: "Espacio que deja al atacar (transición)", tipo: "red",
        grid: [[0.10,0.10,0.10],[0.55,0.25,0.65],[0.80,0.35,0.88],[0.60,0.40,0.70],[0.25,0.20,0.35],[0.08,0.08,0.08]],
        interp: "Al volcarse a centrar (laterales altos, sobre todo C. Díaz por su derecha = nuestra izquierda) y perder el 53% de los balones en el último tercio sin contrapresionar (16% de recuperaciones arriba), deja libres los PASILLOS EXTERIORES de su campo y el medio-espacio ante sus centrales. Plan Coquimbo: robar en nuestro medio y atacar ese canal en ≤3 pases antes de que se repliegue." },
      { id: "ataque", label: "Ataque y finalización (centros)", tipo: "heat", color: "gold",
        grid: [[0,0,0],[0.05,0.05,0.05],[0.10,0.10,0.15],[0.35,0.20,0.42],[0.55,0.35,0.62],[0.42,0.70,0.48]],
        interp: "Ataca por fuera y CENTRA mucho (21,4/PJ, 31% de acierto), con sesgo a la derecha de C. Díaz; busca la segunda pelota y el remate en el centro del área. Tiros de calidad media (37% al arco, ~18,5 m). Defender el centro en origen y el segundo palo; marca al hombre sobre Sáez." },
      { id: "creacion", label: "Red de construcción (inferida)", tipo: "net",
        interp: "[INFERENCIA] Salida modesta (77% de pase): los centrales (D. Gutiérrez, Salomoni) y el pivote Pérez buscan a los laterales para centrar; K. Méndez es el enlace interior hacia Sáez. Tapar a Méndez entre líneas reduce su ataque al centro lateral, que es defendible. No es matriz de pases medida: es mapa de roles." }
    ],
    nodos: [
      { d: 12, n: "Espinoza",   x: 150, y: 432, c: 7 },
      { d: 4,  n: "C. Gutiérrez",x: 70, y: 360, c: 17 },
      { d: 27, n: "D. Gutiérrez",x: 120, y: 375, c: 19 },
      { d: 15, n: "Salomoni",   x: 180, y: 375, c: 20 },
      { d: 25, n: "C. Díaz",    x: 250, y: 300, c: 21 },
      { d: 23, n: "R. Pérez",   x: 130, y: 290, c: 22 },
      { d: 10, n: "K. Méndez",  x: 195, y: 230, c: 24 },
      { d: 29, n: "J. Soto",    x: 95,  y: 195, c: 12 },
      { d: 7,  n: "Oyarzo",     x: 230, y: 170, c: 11 },
      { d: 11, n: "Sáez",       x: 150, y: 110, c: 16 }
    ],
    edges: [[27,15,2],[27,4,1],[15,25,2],[15,23,1],[4,23,1],[23,10,2],[23,25,1],[25,10,2],[25,11,2],[10,11,2],[10,29,1],[10,7,1],[29,11,1],[7,11,1]]
  },
  // ===== REFLEXIONES: inferencias desde NUESTRO contexto para el planteamiento (lente /analista-futbol-pro) =====
  reflexiones: {
    contexto: "[DATO+INFERENCIA] Coquimbo (10º, 32 pts) recibe a Unión La Calera (16º/último, 21 pts) el 30-10 en el Estadio Francisco Sánchez Rumoroso. Llegamos de CAER 2-1 de visita ante Ñublense (fecha 25), con el ataque desplomado a 0,63 xG sin Johansen ni E. Hernández. Ellos llegan urgidos por el descenso pero envalentonados: vienen de ganar 3-1 a la UC. Dos equipos REACTIVOS enfrentados en nuestra casa: la lectura central es quién se ve obligado a proponer.",
    puntos: [
      { t: "Choque de identidades reactivas: no proponer de más", nivel: "INFERENCIA", txt: "Ambos rinden mejor SIN el balón. La Calera es estéril cuando propone (0 victorias con ≥56% de posesión). Como somos locales, el reflejo será tomar la iniciativa; pero nuestra mejor versión también es reactiva (vs Colo-Colo 3,24 xG con 29% de balón). Reflexión: no caer en la 'trampa del dominio' por ser locales — paciencia, ceder tenencia estéril y golpear en transición. El que primero se obligue a proponer, pierde el guion." },
      { t: "La ausencia del 9 redefine CÓMO atacamos, no el plan", nivel: "HIPÓTESIS", txt: "Si Johansen no llega, el ataque pierde el punto de apoyo que fija centrales (lo vimos ante Ñublense: 0,63 xG). Reflexión: con Pratto (188 cm) de referencia, inclinar el ataque al JUEGO AÉREO y al balón parado — justo donde La Calera es débil (47% de aéreos, 48% de duelos, pierde el 53% de balones arriba). Convertimos nuestra carencia (sin un 9 asociativo) en ventaja contra su flojera física." },
      { t: "Su arma (el centro) ataca nuestra grieta (aéreo del lateral)", nivel: "DATO", txt: "La Calera centra 21,4 veces por partido; nuestros puntos débiles por arriba son Cabrera (29% aéreo) y Salinas (48%). Reflexión: la prioridad defensiva nº1 es cortar el centro en origen (negar el perfil a C. Díaz) y blindar el segundo palo con ayuda del pivote. Es el cruce exacto entre su fortaleza y nuestra debilidad." },
      { t: "Marcar primero rompe su libreto", nivel: "INFERENCIA", txt: "A un rival que pelea el descenso y vive de la eficacia (resultados por encima de su xG), el 1-0 lo obliga a proponer — su peor escenario — y nos abre la transición que mejor ejecutamos. Reflexión: máxima eficacia en la primera ocasión clara DENTRO del área (como el 15/16 vs Colo-Colo), no el disparo lejano." },
      { t: "El cierre es doble riesgo: gestionarlo distinto según el marcador", nivel: "HIPÓTESIS", txt: "Nosotros encajamos tarde (U. de Chile: 3 goles en 8') y ellos marcan tarde y DESDE EL BANCO (Ferreyra, Oyarzo). Reflexión: leer sus cambios ofensivos como señal de que se vuelcan; con ventaja, bloque bajo y cambios defensivos a tiempo; sin ventaja, piernas frescas (Chandía, Riveros) para castigar su desorden en los últimos 20'." },
      { t: "El contexto favorece, pero la urgencia del rival es real", nivel: "DATO", txt: "Hemos ganado 4 de los últimos 5 cruces (incluido el 2-1 de visita esta temporada) y competimos mejor en Rumoroso. Reflexión: el favoritismo es nuestro, pero un rival en descenso y recién reanimado saldrá intenso los primeros minutos; sostener el orden en los primeros 15' y no entrar en su ansiedad (ni en faltas que corten nuestro ritmo)." }
    ]
  }
};
})();
