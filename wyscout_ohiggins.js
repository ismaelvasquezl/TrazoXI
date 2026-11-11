// O'Higgins — decodificación de 5 informes Hudl Wyscout «Informe Partido» (2026). RIVAL de la FINAL de Copa de la Liga (14-11, Santa Laura).
// Partidos: Audax 1-0 O'Higgins (13-09, V, L) · Huachipato 2-0 O'Higgins (10-10, V, L) · O'Higgins 1-1 Cobresal (24-10, L, D) · O'Higgins 1-0 Ñublense (31-10, L, W) · U. Concepción 3-2 O'Higgins (08-11, V, L).
// Fuente: uploads/*.pdf (texto en /tmp/oh/*.txt). Métricas de equipo + splits 1T/2T del «Informe Partido». Timing de goles: CFDB match_events. DT/tabla: CFDB (O'Higgins 12º, Lucas Bovaglio).
// Etiquetas: [DATO] medido · [INFERENCIA] lectura táctica · [HIPÓTESIS] a confirmar. Mantener: en el futuro los enfrentamos también por liga.
// NO editar a mano salvo al cargar nuevos informes. Se monta sobre WYSCOUT (wyscout.js debe cargarse antes).
(function(){
if (typeof WYSCOUT === 'undefined') return;

WYSCOUT.equipos["O'Higgins"] = {
  dt: "Lucas Bovaglio",
  formacionBase: "4-2-3-1 / 4-3-3 de posesión (domina el balón y presiona); con 10 (vs Ñublense) cerró en 4-4-1",
  nPartidos: 5,
  informe: "5 «Informe Partido» completos (Audax, Huachipato, Cobresal, Ñublense, U. Concepción). Traen xG, posesión, PPDA, duelos, pases y los splits 1er/2º tiempo. Timing de goles: CFDB. [DATO Wyscout]",
  resumen: "Equipo PROPONENTE y de posesión (60% de media, presiona con PPDA 9,5) — el perfil OPUESTO al nuestro y al de nuestros últimos rivales reactivos. Pero su gran problema es que NO convierte su dominio: en estos 5 informes generó 1,38 xG por partido y concedió 1,20, y aun así perdió 3 y sacó 4-7 en goles. OUTCREÓ y PERDIÓ (a Audax le generó 1,81 xG contra 0,33 y cayó 0-1; a U. de Concepción 1,69 y perdió 2-3). Mala definición + defensa frágil (DG-10 en la temporada, GC42). PATRÓN DE DESARROLLO claro: arranca dominando (62% de posesión en el 1T), marca justo antes del descanso (3 de sus 4 goles entre el 31' y el 45') y SE DESINFLA en el 2º tiempo (la posesión cae, el bloque se estira 5-7 m y concede en el 61-75' y en el cierre). Llega 12º, golpeado (perdió 2-3) y con BAJAS de peso (Faúndez, Garrido, B. Rojas, Novillo y seleccionados).",
  hallazgoClave: "O'Higgins domina el balón pero no lo transforma: outcrea en xG y pierde por mala definición y fragilidad defensiva. Su desarrollo es de ARRANQUE FUERTE → DESINFLE en el 2º tiempo (posesión 62%→57%, bloque +5-7 m, concede 61-90'). Es el escenario ideal para nuestra identidad reactiva: cederles el balón, bloque compacto y golpear en transición el espacio que dejan al estirarse — sobre todo del minuto 55 en adelante. En cancha grande (105×68, Santa Laura) hay espacio de sobra para correr a su espalda.",
  partidos: [
    { j: 20, fecha: "2026-09-13", rival: "Audax Italiano",  loc: "V", gf: 0, ga: 1, xi: null, xg: 1.81, xgRival: 0.33, pos: 64, ppda: 13.6, duelos: 51, golesContra: ["27' G. Chiaverano"] },
    { j: 24, fecha: "2026-10-10", rival: "Huachipato",      loc: "V", gf: 0, ga: 2, xi: null, xg: 0.81, xgRival: 1.86, pos: 56, ppda: 13.1, duelos: 49, golesContra: ["45' M. Rodríguez", "65' C. Sepúlveda"] },
    { j: 25, fecha: "2026-10-24", rival: "Cobresal",        loc: "L", gf: 1, ga: 1, xi: null, xg: 1.84, xgRival: 1.63, pos: 70, ppda: 6.4,  duelos: 50, golesContra: ["65' S. Pino"] },
    { j: 26, fecha: "2026-10-31", rival: "Ñublense",        loc: "L", gf: 1, ga: 0, xi: null, xg: 0.74, xgRival: 0.44, pos: 49, ppda: 7.7,  duelos: 49, golesContra: [] },
    { j: 27, fecha: "2026-11-08", rival: "U. Concepción",   loc: "V", gf: 2, ga: 3, xi: null, xg: 1.69, xgRival: 1.72, pos: 60, ppda: 6.6,  duelos: 49, golesContra: ["39' C. Mesías", "41' H. Salgado", "90' M. González"] }
  ],
  // ===== DESARROLLO DEL PARTIDO · tendencia por tiempo y timing de goles (lo pedido) =====
  desarrollo: {
    nota: "Cómo desarrollan sus partidos minuto a minuto. Splits 1er/2º tiempo del «Informe Partido» [DATO Wyscout] + timing de goles de los 5 partidos [DATO CFDB]. Dirección: arrancan fuerte y se diluyen.",
    // posesión y xG por mitad (O'Higgins), por partido
    porTiempo: [
      { rival: "Audax (V)",      posT:64, pos1:62, pos2:66, xg1:0.63, xg2:1.18, largo1:49.8, largo2:55.7 },
      { rival: "Huachipato (V)", posT:56, pos1:51, pos2:61, xg1:0.04, xg2:0.77, largo1:46.3, largo2:53.4 },
      { rival: "Cobresal (L)",   posT:70, pos1:78, pos2:61, xg1:1.36, xg2:0.48, largo1:null, largo2:null },
      { rival: "Ñublense (L)",   posT:49, pos1:58, pos2:38, xg1:0.38, xg2:0.36, largo1:null, largo2:null },
      { rival: "U.Concep (V)",   posT:60, pos1:62, pos2:57, xg1:0.99, xg2:0.70, largo1:50.1, largo2:53.6 }
    ],
    resumenTiempo: "Posesión media 62% en el 1T → 57% en el 2T (en casa cae en picado: 58→38 vs Ñublense, 78→61 vs Cobresal). El bloque se ESTIRA 5-7 m en el 2T (de ~48 a ~54 m) en los partidos de visita: más espacio a su espalda. Crean parejo por mitades pero el rendimiento (resultado) se les cae tras el descanso.",
    // goles por tramo de 15' (los 5 partidos)
    golesFavor:   { "0-15":0, "16-30":0, "31-45":3, "46-60":0, "61-75":1, "76-90":0 },
    golesContra:  { "0-15":0, "16-30":1, "31-45":3, "46-60":0, "61-75":2, "76-90":1 },
    golesNota: "MARCAN antes del descanso: 3 de sus 4 goles entre el 31' y el 45' (culminan su dominio del 1T). CONCEDEN en dos ventanas: 31-45' (3) y 61-75' (2), más un gol al 90'. El tramo 55'-90' es donde se los caza: bloque estirado + cambios (Bovaglio suele mover el banco en masa hacia el 68').",
    insightDesarrollo: "[INFERENCIA] Guion esperable: O'Higgins saldrá a proponer y tener el balón; su pico de peligro es el cierre del 1T (ABP y llegadas). Si aguantamos 0-0 o vamos por delante al descanso, el 2º tiempo es NUESTRO: se estiran, se cansan y conceden. La ventana 55'-80' es la de mayor probabilidad de gol en transición."
  },
  redPases: {
    carriles: { izq: 34, centro: 34, der: 32 },
    carrilesNota: "[INFERENCIA] Construcción equilibrada con salida limpia (pase ~80%); Yáñez conecta el último tercio. No es % medido.",
    enlaceTop: "B. Yáñez asiste a todo: a Castillo, a Garrido y a Moreira en la muestra. Es el cerebro del ataque [DATO de asistencias]",
    centralidad: [
      { n: "B. Yáñez", d: 10, c: 25 }, { n: "C. Pérez", d: 5, c: 20 }, { n: "M. Plaza", d: 8, c: 19 },
      { n: "G. Graciani", d: 20, c: 19 }, { n: "A. Castillo", d: 9, c: 17 }, { n: "W. Bou", d: 7, c: 16 },
      { n: "T. Avilés", d: 23, c: 15 }, { n: "E. Moreira", d: 11, c: 14 }, { n: "I. Schor", d: 6, c: 12 }, { n: "GK", d: 1, c: 8 }
    ],
    centralidadNota: "[INFERENCIA] Estimada por rol, minutos y participación en goles (sin matriz de pases cargada). Mapa de quién conecta."
  },
  jugadores: [
    { n: "Bastián Yáñez", d: 10, rol: "Creador · mediapunta/extremo", metr: "[DATO] 3 asistencias en la muestra (a Castillo, Garrido y Moreira): su principal fuente de juego. Si se le niega el balón entre líneas, su ataque pierde dirección." },
    { n: "Arnaldo Castillo", d: 9, rol: "9 de referencia · goleador", metr: "[DATO] Gol vs Ñublense (43'), pero VIO ROJA al 45' ese partido: amenaza + indisciplina. Marca de referencia y provocar su ansiedad." },
    { n: "Esteban Moreira", d: 11, rol: "Extremo · llegada", metr: "[DATO] Gol vs U. Concepción (45'). Aparece desde el carril; vigilar su diagonal hacia dentro." },
    { n: "Walter Bou", d: 7, rol: "Delantero argentino · área", metr: "[INFERENCIA] Referencia de área y peso en el remate; entra en el juego directo y la segunda pelota." },
    { n: "Tomás Avilés", d: 23, rol: "Interior de llegada", metr: "[DATO] Gol vs U. Concepción (71'): llega desde segunda línea en el tramo final." },
    { n: "M. Plaza / G. Graciani", d: 8, rol: "Interiores creativos", metr: "[INFERENCIA] Sostienen la posesión y filtran; con las bajas, cargan aún más el peso creativo." }
  ],
  bajas: [
    "Felipe Faúndez — FUERA (sí o sí). [DATO del cuerpo técnico]",
    "Nicolás Garrido — FUERA (sí o sí): central y goleador de ABP (marcó vs Cobresal). Se debilita su zaga y una vía de gol de pelota parada.",
    "Benjamín Rojas — FUERA (sí o sí).",
    "Novillo y los convocados a la selección — tampoco estarían.",
    "[INFERENCIA] Con Garrido y Faúndez fuera, la columna vertebral (defensa + medio) queda tocada: menos solidez atrás y menos salida; Bovaglio deberá rearmar el XI."
  ],
  fortalezas: [
    "Dominio del balón y salida limpia: 60% de posesión media, ~80% de pase; cómodos construyendo.",
    "Crean ocasiones: 1,38 xG por partido (outcrearon a Audax 1,81-0,33 y a U. Concepción 1,69).",
    "Presión alta cuando quieren (PPDA 6-7 en casa): incomodan la salida rival.",
    "Pico de peligro al cierre del 1T: 3 de 4 goles entre el 31' y el 45' (ABP y llegadas).",
    "Yáñez: un creador que marca diferencias cuando recibe entre líneas."
  ],
  vulnerabilidades: [
    "No convierte su dominio: 1,38 xG pero solo 0,8 goles/partido; definición pobre (perdió partidos que mereció ganar).",
    "Defensa frágil: DG-10 y GC42 en la temporada; concede ocasiones claras y goles en transición.",
    "SE DESINFLA en el 2º tiempo: posesión cae (62%→57%, en casa hasta 58→38), bloque se estira 5-7 m → espacio a su espalda.",
    "Concede en ventanas fijas: 31-45' y 61-75' (y gol al 90'): el tramo 55-90' es su talón.",
    "Fragilidad de visita/en cancha neutra: perdió los 3 partidos fuera de casa de la muestra. La final es en Santa Laura (neutral) = no juega en su Teniente.",
    "Indisciplina puntual (roja de Castillo) y ahora BAJAS sensibles (Garrido, Faúndez, B. Rojas, Novillo, selección).",
    "Pierde el duelo parejo (49%): no domina el choque ni el balón dividido."
  ],
  recomendaciones: [
    "Cederles el balón y defender compactos: proponer es lo que mejor hacen y peor resuelven. Bloque medio-bajo, líneas juntas, y que la tengan ellos.",
    "Golpear en TRANSICIÓN, sobre todo del 55' en adelante: cuando se estiren y cambien el banco (~68'), atacar el espacio a su espalda en ≤3 pases. Cancha grande (105×68) = espacio para correr.",
    "Aguantar el cierre del 1T (31-45'): es su ventana de gol (ABP y llegadas). Máxima concentración en pelota parada y en el último cuarto de hora antes del descanso.",
    "Secar a Yáñez entre líneas (vigilancia del pivote) y marca de referencia sobre Castillo; orientarlos hacia fuera.",
    "Ser clínicos: ellos conceden y nosotros venimos finos (2,31 xG a Audax). La primera clara dentro del área puede definir una final de partido único.",
    "Atacar sus bajas: sin Garrido (central/ABP) y Faúndez, cargar el área por aire y en balón parado; su zaga rearmada es más débil.",
    "Gestión de la final: partido único en cancha neutra. No desesperar si tienen el balón; paciencia, orden y eficacia. Marcar primero los obliga a perseguir — y perseguir los desarma más rápido."
  ],
  insights: [
    { t: "Domina el balón pero no lo convierte: outcrea y pierde", nivel: "ALTA", capa: "desprotegidas",
      evidencia: "[DATO] 60% de posesión media y 1,38 xG/partido, pero 4-7 en goles y 3 derrotas. A Audax le generó 1,81 xG (vs 0,33) y perdió 0-1; a U. Concepción 1,69 y cayó 2-3.",
      interpretacion: "[INFERENCIA] Equipo proponente con mala definición y defensa frágil: su dominio no se traduce en resultado. El riesgo para ellos es ceder el partido al rival reactivo que sí convierte.",
      riesgo: "OPORTUNIDAD para Coquimbo: es nuestro escenario ideal (cederles el balón y golpear). No temer su posesión; temer NO ser eficaces.",
      respuesta: "Bloque compacto, cederles la pelota y máxima eficacia en nuestras ocasiones. Defender bien el área: crean, pero si no les regalamos, no definen." },
    { t: "Se desinfla en el 2º tiempo: la ventana 55-90' es suya en contra", nivel: "ALTA", capa: "desprotegidas",
      evidencia: "[DATO] Posesión 62% (1T) → 57% (2T); en casa 58→38 (Ñublense) y 78→61 (Cobresal). Bloque se estira de ~48 a ~54 m en el 2T. Concede en 61-75' (2 goles) y al 90' (1).",
      interpretacion: "[INFERENCIA] Pierden intensidad y se estiran tras el descanso y tras los cambios (~68'): aparece el espacio a su espalda.",
      riesgo: "OPORTUNIDAD: nuestro gol más probable llega en transición del 55' en adelante. RIESGO: su pico es el cierre del 1T, hay que llegar vivos al descanso.",
      respuesta: "Aguantar el 1T (sobre todo 31-45'), y en el 2T atacar el espacio con piernas frescas (Chandía, Riveros): castigar su desinfle." },
    { t: "Marcan antes del descanso: cuidar el 31-45'", nivel: "MEDIA", capa: "ataque",
      evidencia: "[DATO] 3 de sus 4 goles de la muestra entre el 31' y el 45' (culminan el dominio del 1T, con ABP y llegadas de Yáñez).",
      interpretacion: "[INFERENCIA] Su gol llega cuando acumulan dominio en el primer tiempo; el balón parado y la llegada de segunda línea son la vía.",
      riesgo: "RIESGO: concentración en el último cuarto de hora del 1T y en la pelota parada.",
      respuesta: "Cero faltas evitables cerca del área en el 30-45'; marca al hombre en córners; no desconectar antes del descanso." },
    { t: "Defensa frágil + bajas: zaga tocada", nivel: "MEDIA", capa: "ataque",
      evidencia: "[DATO] DG-10 y GC42 en la temporada; concede en transición. BAJAS confirmadas: Garrido (central/goleador ABP) y Faúndez fuera; también B. Rojas, Novillo y seleccionados.",
      interpretacion: "[INFERENCIA] Sin Garrido pierden solidez y una amenaza aérea; la zaga rearmada será más vulnerable, sobre todo por arriba y en balón parado.",
      riesgo: "OPORTUNIDAD: atacar su área por aire y ABP (Pratto, Gazzolo) y la transición a la espalda de una defensa improvisada.",
      respuesta: "Cargar centros y córners; buscar la segunda pelota; atacar el lado del central suplente." },
    { t: "No juegan en casa: la final es en cancha neutra", nivel: "MEDIA", capa: "desprotegidas",
      evidencia: "[DATO] Perdió los 3 partidos de visita de la muestra (Audax, Huachipato, U. Concepción). La final es en el Estadio Santa Laura (Independencia), neutral.",
      interpretacion: "[INFERENCIA] Fuera del Teniente rinden peor; el factor cancha/hinchada no los acompaña.",
      riesgo: "OPORTUNIDAD: ambos juegan 'fuera'; nuestra identidad reactiva no depende de la localía (ganamos 5-2 a Colo-Colo y 1-0 a Audax de visita).",
      respuesta: "Jugar nuestro plan sin condicionamientos de localía; imponer el ritmo reactivo que domina sin balón." }
  ],
  cruce: {
    nuestrasVirtudesVsSusDefectos: [
      { nuestra: "Identidad reactiva y eficaz: 2,31 xG con 38% de balón a Audax (1-0); 3,24 xG con 29% a Colo-Colo (5-2). Ganamos sin la pelota.",
        suya: "Proponen y no convierten (1,38 xG, 0,8 goles/PJ); su dominio nos conviene.",
        palanca: "Cederles el balón y golpear en transición: es literalmente nuestro mejor escenario.", fuerza: "ALTA" },
      { nuestra: "Transición letal del 55' en adelante (piernas frescas: Chandía, Riveros, Pratto).",
        suya: "Se desinfla en el 2º tiempo: posesión cae y bloque se estira 5-7 m; concede 61-90'.",
        palanca: "Atacar el espacio a su espalda en el 2T; cambios ofensivos para castigar su desinfle.", fuerza: "ALTA" },
      { nuestra: "Juego aéreo y balón parado (Pratto 188, Gazzolo); 53% de aéreos en la liga.",
        suya: "Defensa frágil (GC42) y BAJA de Garrido (central y amenaza aérea de ABP).",
        palanca: "Cargar el área por arriba y en córners: su zaga rearmada es más débil.", fuerza: "ALTA" },
      { nuestra: "Eficacia en la definición y un arquero (Sánchez) que sostiene.",
        suya: "Mala definición (outcrean y pierden).",
        palanca: "Ser clínicos en la primera clara: en una final a partido único, un gol pesa doble.", fuerza: "MEDIA" }
    ],
    nuestrosDefectosVsSusVirtudes: [
      { nuestro: "Si nos obligan a proponer, rendimos menos (ante bloque bajo creamos y no concretamos).",
        suya: "Dominan el balón y la posesión: querrán tenerla.",
        mitigacion: "No pelear la posesión: cedérsela y defender compactos; que su dominio sea estéril.", riesgo: "BAJO" },
      { nuestro: "Nuestra defensa concede (GA36) y su ataque SÍ crea (1,38 xG): hay que defender bien.",
        suya: "Crean ocasiones y tienen a Yáñez entre líneas; pico de gol en el cierre del 1T.",
        mitigacion: "Bloque medio-bajo, secar a Yáñez, marca a Castillo y máxima concentración 31-45' y en ABP.", riesgo: "MEDIO" },
      { nuestro: "Indisciplina puntual nuestra (rojas en la temporada).",
        suya: "Buscan el balón parado y la llegada; una expulsión nuestra les regalaría el partido.",
        mitigacion: "Disciplina absoluta en una final; no entrar en roces ni conceder faltas peligrosas.", riesgo: "MEDIO" }
    ]
  },
  cross: {
    wyscout: { xgProm: 1.38, golProm: 0.8, posProm: 60, ppdaProm: 9.5, duelosProm: 49 },
    cfdb: { gfpg: 1.19, gapg: 1.56, pts: 31, pos: 12 },
    datalabs2025: { posesion: null, tiros: null, pases: null },
    ligaWy: null,
    veredicto: "La muestra (5 informes) retrata a un equipo PROPONENTE con balance de ocasiones a su favor (xGF 1,38 > xGA 1,20) pero resultados en contra (4-7, 3 derrotas): outcrea y pierde por definición y defensa. CFDB confirma el nivel de temporada: 12º, GF32-GC42 (DG-10), 1,19 goles/PJ y 1,56 GC/PJ. Confianza ALTA en el patrón (proponen, se desinflan en el 2T, conceden); clave de la final: cederles el balón, aguantar el 1T y golpear en transición en el 2T."
  },
  zonas: {
    nota: "Ataque ↑ (O'Higgins). Capas sobre el modelo de 18 zonas [DATO de magnitud · INFERENCIA de ubicación]. La red de construcción es [INFERENCIA] de roles y asistencias.",
    capas: [
      { id: "desprotegidas", label: "Espacio que deja al estirarse (2º tiempo)", tipo: "red",
        grid: [[0.10,0.10,0.10],[0.45,0.30,0.45],[0.70,0.45,0.72],[0.78,0.55,0.80],[0.40,0.35,0.42],[0.12,0.12,0.12]],
        interp: "Como proponen y en el 2º tiempo su bloque se ESTIRA 5-7 m, dejan espacio entre líneas y a la espalda de sus laterales/centrales adelantados. Plan Coquimbo: ceder el balón, robar y atacar ese espacio en transición, sobre todo del 55' en adelante." },
      { id: "ataque", label: "Ataque y finalización (dominio del 1T)", tipo: "heat", color: "gold",
        grid: [[0,0,0],[0.08,0.10,0.08],[0.18,0.22,0.18],[0.40,0.45,0.40],[0.55,0.62,0.55],[0.48,0.70,0.50]],
        interp: "Acumulan juego por el centro con Yáñez y culminan antes del descanso (3 goles 31-45'). Definición pobre pese al volumen. Defender el cierre del 1T, el balón parado y la llegada de segunda línea." },
      { id: "creacion", label: "Red de construcción (inferida)", tipo: "net",
        interp: "[INFERENCIA] Salida limpia (pase ~80%): centrales y pivotes (Pérez, Plaza) conectan con Yáñez entre líneas, que filtra a Castillo/Moreira. Tapar a Yáñez reduce su ataque a la posesión estéril." }
    ],
    nodos: [
      { d: 1,  n: "GK",       x: 150, y: 432, c: 8 },
      { d: 3,  n: "Salomoni?",x: 250, y: 300, c: 14 },
      { d: 5,  n: "C. Pérez", x: 120, y: 372, c: 20 },
      { d: 6,  n: "Schor",    x: 180, y: 372, c: 12 },
      { d: 8,  n: "Plaza",    x: 130, y: 288, c: 19 },
      { d: 20, n: "Graciani", x: 195, y: 285, c: 19 },
      { d: 10, n: "Yáñez",    x: 165, y: 205, c: 25 },
      { d: 11, n: "Moreira",  x: 250, y: 185, c: 14 },
      { d: 23, n: "Avilés",   x: 75,  y: 180, c: 15 },
      { d: 9,  n: "Castillo", x: 150, y: 105, c: 17 }
    ],
    edges: [[5,8,2],[5,6,1],[6,20,1],[8,10,2],[20,10,2],[5,3,1],[3,11,1],[10,11,2],[10,9,2],[10,23,2],[23,9,1],[20,9,1]]
  },
  copaChile: {
    titulo: "FINAL · Copa de la Liga 2026 · Coquimbo Unido vs O'Higgins",
    sede: "Sábado 14 de noviembre 2026, 18:30 · Estadio Santa Laura–SEK (Independencia, Santiago) · CANCHA NEUTRAL (105×68 m) · partido ÚNICO.",
    contexto: "No se juega en Rumoroso: es cancha neutra, así que ninguno tiene localía. O'Higgins es un equipo de POSESIÓN que llega golpeado (12º, perdió 2-3) y con bajas de peso (Faúndez, Garrido, B. Rojas, Novillo, seleccionados). Nosotros llegamos en racha (W2, ganamos 1-0 a Audax) y con una identidad reactiva que explota exactamente lo que O'Higgins ofrece: el balón. La final se gana cediendo tenencia, aguantando su pico del 1er tiempo y golpeando en transición cuando se desinflen.",
    claves: [
      "Cederles el balón sin complejos: proponer es lo que mejor hacen y peor resuelven (outcrean y pierden). Bloque compacto y que la tengan ellos.",
      "Aguantar el cierre del 1T (31-45'): es su ventana de gol (ABP y llegadas de Yáñez). Cero faltas cerca del área y marca al hombre en córners.",
      "Golpear en transición del 55' en adelante: se estiran y cambian el banco (~68'); atacar su espalda en ≤3 pases con piernas frescas. Cancha grande = espacio para correr.",
      "Atacar sus bajas por aire y balón parado: sin Garrido (central/ABP) su zaga es más débil; cargar el área (Pratto, Gazzolo).",
      "Ser clínicos y disciplinados: es partido único en cancha neutra; un gol pesa doble y una expulsión lo regala. Marcar primero los obliga a perseguir — y perseguir los desarma."
    ],
    cierre: "Favoritos por forma, por eficacia y por estilo: su posesión es nuestra trampa. El riesgo real no es su dominio, sino que seamos imprecisos en nuestras ocasiones o que concedamos en su pico del 1er tiempo o en pelota parada."
  },
  reflexiones: {
    contexto: "[DATO+INFERENCIA] FINAL de Copa de la Liga, sábado 14-11 18:30, Estadio Santa Laura (Independencia) — cancha NEUTRAL de 105×68 m, partido único. Coquimbo (6º, 38 pts, racha W2 tras ganar 1-0 a Audax) vs O'Higgins (12º, DG-10, viene de perder 2-3 y con bajas: Faúndez, Garrido, B. Rojas, Novillo, selección). Choque de estilos opuestos: su posesión vs nuestra reactividad. En cancha neutra, sin localía para nadie, nuestra identidad —que no depende del público— es una ventaja.",
    puntos: [
      { t: "Su balón es nuestra trampa: no pelear la posesión", nivel: "INFERENCIA", txt: "O'Higgins domina (60%) pero no convierte (outcrea y pierde). Reflexión: cederles la tenencia con bloque medio-bajo y defender el área; que su dominio sea estéril. Nuestra mejor versión es reactiva (1-0 a Audax con 38% de balón; 5-2 a Colo-Colo con 29%). No caer en proponer por ser favoritos." },
      { t: "La final se decide en el 2º tiempo: su desinfle es nuestra ventana", nivel: "DATO", txt: "Su posesión cae 62%→57% y el bloque se estira 5-7 m tras el descanso; conceden en 61-75' y al 90'. Reflexión: aguantar el 1T (sobre todo 31-45', su pico), y golpear en transición del 55' en adelante con piernas frescas (Chandía, Riveros, Pratto). La cancha grande (105×68) da espacio para correr a su espalda." },
      { t: "Atacar sus bajas: zaga tocada sin Garrido ni Faúndez", nivel: "DATO", txt: "Con Garrido (central y amenaza aérea de ABP) y Faúndez fuera, más B. Rojas, Novillo y seleccionados, su columna vertebral queda rearmada y más débil. Reflexión: cargar el área por aire y balón parado (Pratto 188, Gazzolo), atacar el lado del central suplente y buscar la segunda pelota." },
      { t: "Cuidar su pico del 1er tiempo y la pelota parada", nivel: "HIPÓTESIS", txt: "Marcan antes del descanso (3 de 4 goles 31-45') con ABP y llegadas de Yáñez. Reflexión: máxima concentración en el último cuarto de hora del 1T, cero faltas evitables cerca del área, marca al hombre en córners y secar a Yáñez entre líneas. Llegar al descanso sin conceder es media final ganada." },
      { t: "Eficacia y disciplina: es partido único", nivel: "INFERENCIA", txt: "Ellos crean y no definen; nosotros venimos finos (2,31 xG a Audax). Reflexión: ser clínicos en la primera clara —en una final un gol pesa doble— y disciplina absoluta: una expulsión nuestra les regalaría el balón parado y la superioridad que necesitan. Marcar primero rompe su libreto y los obliga a perseguir en cancha grande." },
      { t: "Cancha neutra: nuestra identidad no depende de la localía", nivel: "DATO", txt: "O'Higgins perdió los 3 partidos de visita de la muestra; fuera del Teniente rinden peor. Santa Laura es neutral para ambos. Reflexión: jugamos nuestro plan sin condicionamientos — ganamos de visita a Audax y a Colo-Colo; el escenario neutral nos favorece más a nosotros que a un equipo que vive de proponer en casa." }
    ]
  }
};
})();
