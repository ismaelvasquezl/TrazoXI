// Autoanálisis Coquimbo Unido — Hudl Wyscout "Informe de Equipo · últimos 5 partidos" + liga 2026.
// Dato de evento real agregado de los 5: U.Chile 2-4 (V,L), U.Concepción 1-0 (L,W), U.Católica 1-2 (L,L),
// Concepción 1-1 (V,D), La Serena 1-1 (L,D). NO editar a mano salvo al cargar nuevos informes.
const NOSOTROS = {
  fuente: "Hudl Wyscout — Informe de Equipo (últimos 5) + Resumen de liga 2026",
  actualizado: "2026-10-08",
  ult5: { pj:6, w:2, d:2, l:2, gf:11, ga:10, nota:"2-2-2 en los últimos 6, con la GOLEADA 5-2 a Colo-Colo (11.10): 11 goles a favor, 10 en contra. El salto lo da un partido de transición pura." },
  temporada: { pos:11, pts:29, xg:35.8, xga:27.4, xgdif:8.4, xpts:36.6, xptsD:7.6,
    titular:"4-4-2 / 4-2-3-1",
    headline:"IDENTIDAD CONFIRMADA Y VINDICADA: Coquimbo es REACTIVO y letal en transición. Ante Colo-Colo (5-2) generó 3,24 xG con solo 28,75% de posesión y 15 de 16 remates dentro del área: cuando el rival propone y hay espacio, su infrarrendimiento histórico (xPoints 36,6 vs 29) se convierte en goleada. El déficit persistente es defensivo: sigue encajando (10 GC en 6, 1,67/pp) y depende del estado del partido. [DATO Wyscout · nota: posición/puntos de liga pendientes de refresco CFDB tras la fecha 11.10]." },
  // jugadores: dato agregado de los 5 partidos. pases=intentados, pasesPct=% completados.
  players: [
    {d:13,n:"Diego Sánchez",pos:"GK",grupo:"GK",edad:39,alt:184,pj:6,min:607,g:0,xg:0,a:0,xa:0,tiros:0,tirosArco:0,pases:159,pasesPct:81,nota:"Arquero titular los 5 partidos. Perfil de experiencia (39) y mando de área; su lectura fina de atajada/salida requiere su página de arquero (fase 2)."},
    {d:2,n:"Benjamín Gazzolo",pos:"RCB",grupo:"DEF",edad:29,alt:182,pj:6,min:556,g:0,xg:0,a:0,xa:0,tiros:0,tirosArco:0,pases:169,pasesPct:86,nota:"Central de SALIDA LIMPIA: 152 pases al 87%, el más fiable en la primera fase. Eje de la construcción desde atrás."},
    {d:26,n:"Lukas Soza",pos:"LCB",grupo:"DEF",edad:28,alt:177,pj:4,min:317,g:0,xg:0.19,a:0,xa:0,tiros:2,tirosArco:1,pases:105,pasesPct:80,nota:"Central izquierdo solvente con balón (81%); aporta llegada ocasional (0.18 xG)."},
    {d:4,n:"Elvis Hernández",pos:"RCB",grupo:"DEF",edad:27,alt:182,pj:3,min:204,g:0,xg:0,a:0,xa:0,tiros:0,tirosArco:0,pases:61,pasesPct:89,nota:"El central más preciso en el pase (89%) en su muestra; opción fiable para iniciar."},
    {d:3,n:"Manuel Fernández",pos:"LCB",grupo:"DEF",edad:37,alt:180,pj:2,min:170,g:0,xg:0,a:0,xa:0,tiros:0,tirosArco:0,pases:47,pasesPct:74,nota:"Veteranía y jerarquía; muestra corta (1 partido)."},
    {d:19,n:"Joshua Arancibia",pos:"RCB",grupo:"DEF",edad:21,alt:183,pj:1,min:52,g:0,xg:0,a:0,xa:0,tiros:0,tirosArco:0,pases:19,pasesPct:68,nota:"Central juvenil (21, 183cm): proyección; muestra mínima."},
    {d:16,n:"Juan Cornejo",pos:"LB",grupo:"LAT",edad:36,alt:177,pj:6,min:511,g:0,xg:0,a:0,xa:0.99,tiros:1,tirosArco:0,pases:193,pasesPct:67,nota:"El CARRILERO CREADOR: 3º de la LIGA en pases clave (2,14/90) y 0,90 de xA generado. Su proyección y último pase son vía principal de ataque."},
    {d:17,n:"Francisco Salinas",pos:"RB",grupo:"LAT",edad:26,alt:179,pj:5,min:508,g:0,xg:0.3,a:0,xa:0.87,tiros:4,tirosArco:3,pases:266,pasesPct:73,nota:"Mayor VOLUMEN de pase del equipo (243): lateral muy involucrado en la circulación, con 0,80 de xA. Amplitud y salida por su banda."},
    {d:28,n:"Sebastián Cabrera",pos:"LB",grupo:"LAT",edad:28,alt:175,pj:4,min:258,g:0,xg:0.14,a:0,xa:0.35,tiros:4,tirosArco:1,pases:103,pasesPct:80,nota:"Lateral alternativo fiable con balón (81%) y con llegada (3 remates, 0,34 xA)."},
    {d:8,n:"Alejandro Camargo",pos:"RDMF",grupo:"VOL",edad:37,alt:175,pj:6,min:501,g:1,xg:0.84,a:0,xa:0,tiros:6,tirosArco:3,pases:233,pasesPct:83,nota:"PIVOTE eje: 218 pases al 84% (equilibrio + jerarquía), y encima aporta gol (1, 0.85 xG, 6 remates). Ordenador del juego."},
    {d:7,n:"Sebastián Galani",pos:"LDMF",grupo:"VOL",edad:29,alt:177,pj:5,min:508,g:0,xg:0.01,a:0,xa:0,tiros:1,tirosArco:0,pases:234,pasesPct:82,nota:"METRÓNOMO en el doble pivote: 209 pases al 82%. Capitán habitual; da el tempo y el equilibrio defensivo."},
    {d:15,n:"Cristián Zavala",pos:"RAMF",grupo:"VOL",edad:27,alt:175,pj:5,min:437,g:0,xg:0.51,a:2,xa:1.85,tiros:7,tirosArco:3,pases:164,pasesPct:60,nota:"EL DESEQUILIBRANTE: 34 regates (15 exitosos) y 1,76 de xA — el MÁXIMO creador real del equipo. Su 60% de pase refleja que asume riesgo; es la chispa en el último tercio."},
    {d:18,n:"Pablo Rodríguez",pos:"AMF",grupo:"VOL",edad:19,alt:null,pj:5,min:343,g:1,xg:1.22,a:1,xa:0.16,tiros:4,tirosArco:1,pases:127,pasesPct:74,nota:"JUVENIL (19) que ya pesa: 1 gol (1.23 xG) + 1 asistencia en 5 partidos como enganche. Llegada al área y criterio; pieza de futuro y presente."},
    {d:14,n:"Salvador Cordero",pos:"LDMF",grupo:"VOL",edad:30,alt:177,pj:5,min:214,g:0,xg:0.36,a:0,xa:0.07,tiros:4,tirosArco:1,pases:81,pasesPct:81,nota:"EL RECUPERADOR: 3º de la LIGA en duelos defensivos (8,01/90, 58%). Músculo y corte en el medio; sostiene la fase defensiva."},
    {d:30,n:"Benjamín Chandía",pos:"LAMF",grupo:"VOL",edad:23,alt:166,pj:6,min:246,g:2,xg:1.16,a:1,xa:0.39,tiros:5,tirosArco:3,pases:76,pasesPct:66,nota:"Extremo regateador (166cm, desborde): ya 2 goles y 0,39 xA en pocos minutos (1,16 xG). Revulsivo de profundidad y 1v1, ideal para castigar en transición."},
    {d:10,n:"Guido Vadalá",pos:"AMF",grupo:"VOL",edad:29,alt:169,pj:4,min:227,g:1,xg:1.6,a:1,xa:0.59,tiros:5,tirosArco:3,pases:40,pasesPct:80,nota:"ARMA EN ESPACIO: ante Colo-Colo fue determinante (1,33 xG + 0,59 xA en un partido) — 1,60 xG y 0,59 xA acumulados en pocos minutos. Enganche de pausa que rinde cuando hay espacio para atacar; merece más minutos en partidos de transición."},
    {d:11,n:"Alejandro Azócar",pos:"LAMF",grupo:"VOL",edad:25,alt:180,pj:2,min:102,g:0,xg:0.05,a:0,xa:0.11,tiros:1,tirosArco:1,pases:20,pasesPct:75,nota:"Extremo alternativo; pocos minutos."},
    {d:9,n:"Nicolás Johansen",pos:"CF",grupo:"DEL",edad:27,alt:182,pj:6,min:421,g:3,xg:1.41,a:0,xa:0.25,tiros:11,tirosArco:5,pases:95,pasesPct:62,nota:"EL 9 REFERENCIA, YA DESBLOQUEADO: 3 goles (doblete a Colo-Colo) con 1,41 xG y 11 remates en 6 partidos; 3º de la LIGA en toques de área (5,16/90). Fija centrales, ataca el área y ahora convierte. Motor ofensivo del equipo."},
    {d:27,n:"Luis Riveros",pos:"CF",grupo:"DEL",edad:28,alt:178,pj:4,min:307,g:1,xg:1.49,a:0,xa:0.36,tiros:8,tirosArco:2,pases:99,pasesPct:61,nota:"Delantero de área: 1 gol con 1,25 xG y 7 remates. Buena generación de ocasión; afinar puntería (solo 1 de 7 al arco)."},
    {d:29,n:"F. Pons",pos:"CF",grupo:"DEL",edad:30,alt:186,pj:4,min:136,g:0,xg:0.6,a:0,xa:0,tiros:4,tirosArco:1,pases:31,pasesPct:48,nota:"CF de relevo con peso aéreo (186cm): referencia para balón largo y balón parado; 4 remates y 0,60 xG en pocos minutos, pero 0 goles — afinar definición."},
    {d:31,n:"D. Pereira",pos:"LWF",grupo:"VOL",edad:null,alt:null,pj:1,min:12,g:0,xg:0,a:0,xa:0,tiros:0,tirosArco:0,pases:8,pasesPct:88,nota:"Debut con 12' ante U. Católica como extremo (LWF). Muestra mínima: 8 pases al 88% y 2/2 regates — primer contacto prometedor, sin datos suficientes para concluir."},
    {d:12,n:"Lucas Pratto",pos:"CF",grupo:"DEL",edad:37,alt:188,pj:1,min:29,g:1,xg:0.31,a:0,xa:0,tiros:1,tirosArco:1,pases:7,pasesPct:71,nota:"Refuerzo de jerarquía (37, 188cm): debutó con GOL ante Colo-Colo en 29' (0,31 xG). Referencia de área y peso específico para cerrar partidos y balón parado."}
  ],
  // lecturas por fase (equipo), con dato Wyscout
  fases: {
    ofensiva: "DOS CARAS. Ante bloque colocado, ataque de zona alta por volumen (xG 35,8, 4º liga) que crea más de lo que concreta. Pero su mejor versión es REACTIVA: ante Colo-Colo, con 28,75% de posesión, 3,24 xG y 15/16 remates DENTRO del área — ataca el espacio en transición y define cerca del arco. Vías: Cornejo (0,99 xA), Salinas (volumen + 0,87 xA), desequilibrio de Zavala (1,85 xA) y Vadalá letal en espacio (1,60 xG + 0,59 xA solo vs Colo-Colo). Johansen fija y ya convierte (3 goles, doblete a Colo-Colo).",
    defensiva: "El déficit persistente. Buen xGA de liga (27,4, top-5) pero encaja por encima de lo esperado (10 GC en los últimos 6, 2 incluso ganando 5-2). Problema de MOMENTOS: tramos finales y balón parado. Sostén en Cordero (duelos) y la salida limpia de los centrales (Gazzolo 86%). Vulnerabilidad aérea en el lateral (Cabrera 29%, Salinas 48%).",
    balonParado: "4º de la liga en córners generados (volumen alto) aún infrautilizado. Peso aéreo reforzado: ahora Pratto (188) y Pons (186) + Gazzolo (182). Palanca clara: convertir el volumen de córner en gol y usar a Pratto/Pons como amenaza fija al segundo palo."
  },
  // INSIGHTS por sección (muestra 6 partidos Hudl). f=fortalezas, d=debilidades, m=mejoras/propuestas.
  insights: {
    resumen: {
      f: ["Identidad reactiva VINDICADA: vs Colo-Colo 3,24 xG con 28,75% de posesión y 15/16 remates dentro del área = goleada 5-2.","Gol repartido: 5 goleadores distintos en 6 partidos (Johansen 3, Chandía 2, Vadalá, Pratto, Camargo).","4º ataque de la liga por xG; la conversión mejora cuando ataca el espacio en transición."],
      d: ["Sigue encajando: 10 GC en 6 (1,67/pp), 2 incluso en la goleada.","Depende del estado del partido: su mejor versión exige que el rival proponga y deje espacio.","Infrarrendimiento histórico (xPoints 36,6 vs 29): ante bloque bajo rival, crea y no concreta."],
      m: ["Buscar/provocar partidos de transición: bloque medio-bajo + salida vertical en ≤3 pases (plan Colo-Colo repetible).","Priorizar remates dentro del área sobre el disparo lejano.","Blindar los últimos 15' y el balón parado defensivo para sostener resultados."]
    },
    GK: {
      f: ["Diego Sánchez titular los 6 partidos (607'): jerarquía (39) y mando de área.","Distribución fiable: 159 pases al 81% en la muestra con detalle."],
      d: ["Encaja en tramos finales y balón parado (patrón de equipo).","Falta su página de arquero en varios informes: no hay medición fina de atajadas/salidas en todos los partidos (p. ej. Colo-Colo)."],
      m: ["Extraer la página de arquero cuando el informe la traiga, para medir Save%, salidas y juego aéreo.","Trabajo específico de salidas y organización de la barrera/marcas en ABP defensivo."]
    },
    DEF: {
      f: ["Salida limpia: Gazzolo 86% y E.Hernández 89% de pase — primera fase fiable.","Gazzolo fuerte por arriba (4/4 aéreos vs Colo-Colo): central para marcar al 9 rival."],
      d: ["Aéreo irregular según el perfil; se concede en el segundo palo y en córners.","Pérdidas puntuales en campo propio bajo presión."],
      m: ["Asignar a Gazzolo el duelo aéreo del 9 rival; cubrir el segundo palo con ayuda del pivote.","Minimizar faltas laterales cerca del área; central aéreo extra en los últimos minutos si se gana."]
    },
    LAT: {
      f: ["Cornejo CREADOR (0,99 xA, 3º liga en pases clave/90) y Salinas VOLUMEN (266 pases, 0,87 xA): el ataque sale por los carriles.","Doblan bien por fuera para el centro atrás."],
      d: ["Pérdidas altas por banda (Cornejo y Salinas de los que más pierden).","Flojos por arriba: Salinas 48% y Cabrera 29% de aéreos — riesgo ante centros rivales."],
      m: ["Centro atrás (cut-back) en vez de centro colgado; atacar la espalda del carrilero rival cuando sube.","En defensa, cerrar el segundo palo y no quedar en duelo aéreo aislado; ayuda del central."]
    },
    VOL: {
      f: ["Creación de élite: Zavala 1,85 xA y Vadalá 1,60 xG + 0,59 xA (letal en espacio).","Equilibrio y volumen: Camargo (233 pases 83% + gol) y Galani (metrónomo).","Cordero recuperador (3º liga en duelos def/90) y P. Rodríguez (19, ya decide)."],
      d: ["Zavala asume riesgo (60% de pase): pérdidas que abren transición en contra.","Recuperación alta de equipo baja: tras pérdida cuesta contrapresionar."],
      m: ["Dar más minutos a Vadalá en partidos de transición (rinde en espacio).","Orientar a Zavala hacia zona de remate/último pase y preparar la cobertura de su pérdida.","Trabajar la contrapresión inmediata tras pérdida en campo rival."]
    },
    DEL: {
      f: ["Johansen desbloqueado: 3 goles (doblete a Colo-Colo), 11 remates, 5,16 toques de área/90.","Generación de Riveros (1,49 xG) y profundidad de Chandía (2 goles, desborde).","Peso aéreo y jerarquía desde el banco: Pratto (188, gol en el debut) y Pons (186)."],
      d: ["Conversión aún por debajo del xG en varios (Riveros 1/8 al arco; Pons 0 goles con 0,60 xG).","Dependencia de ocasión de alta calidad: rinden mejor atacando el espacio que ante bloque bajo."],
      m: ["Insistir en el remate dentro del área (como el 15/16 vs Colo-Colo).","Usar a Pratto/Pons como amenaza fija en balón parado y para cerrar partidos.","Plan de definición con Riveros (elección de remate) y rotación fresca en el 60-70'."]
    }
  },
  // confianza / muestra
  confianza: "Dato de evento Hudl (agregado de 6 partidos: 5 del informe de equipo + Coquimbo 5-2 Colo-Colo del 11.10, todos por jugador/partido). Alta confianza en volúmenes (minutos, pases, remates, xG/xA, duelos). Los MAPAS usan nuestras métricas reales por jugador/línea (DATO) ubicadas sobre el modelo de 18 zonas (INFERENCIA de posición): el informe no trae coordenadas (x,y) por evento. Posición/puntos de liga: pendientes de refresco CFDB tras la fecha del 11.10.",
  // Mapas por zona (ataque hacia arriba). Grids 6 bandas × 3 columnas [izq,centro,der], intensidad 0..1.
  zonas: {
    nota: "DATO Wyscout (volúmenes reales por jugador/línea) + INFERENCIA de ubicación por posición (sin x,y).",
    capas: [
      { id:"calor", label:"Mapa de calor (actividad)", tipo:"heat", color:"gold",
        grid:[[0.08,0.35,0.10],[0.30,0.55,0.35],[0.50,0.70,0.55],[0.45,0.60,0.55],[0.35,0.50,0.48],[0.20,0.55,0.30]],
        interp:"Actividad concentrada en el CENTRO del mediocampo (dobles pivotes Camargo 218 y Galani 209 pases) y por la banda DERECHA (Salinas, 243 pases, el mayor volumen). Johansen fija arriba por el centro. Perfil de circulación central con salida por los carrileros." },
      { id:"pasesClave", label:"Pases clave / creación (dónde se generan)", tipo:"heat", color:"gold",
        grid:[[0,0.05,0],[0.05,0.10,0.05],[0.20,0.30,0.20],[0.45,0.55,0.50],[0.55,0.75,0.60],[0.30,0.45,0.35]],
        interp:"La creación nace de los CARRILEROS y de la Z14: Cornejo (0,90 xA, banda izq, 3º de la liga en pases clave 2,14/90), Salinas (0,80 xA, banda der) y Zavala en el frontal del área (1,76 xA, el máximo creador). Asistencias convertidas: Zavala y P. Rodríguez. Vía principal: centro de carrilero + último pase de Zavala." },
      { id:"perdidas", label:"Mapa de pérdidas de balón", tipo:"red",
        grid:[[0.05,0.10,0.05],[0.15,0.20,0.15],[0.30,0.35,0.30],[0.50,0.45,0.50],[0.65,0.55,0.65],[0.50,0.60,0.55]],
        interp:"Perdemos sobre todo en CAMPO RIVAL y por las BANDAS: Cornejo 75, Salinas 74, Zavala 70, Johansen 73 balones perdidos (jugadores de riesgo/ataque). Ahí nacen las transiciones en contra — foco: cobertura y repliegue tras pérdida por el carril del carrilero." },
      { id:"aereos", label:"Duelos aéreos por jugador", tipo:"weakdef",
        interp:"Aéreo del equipo 53% (4º de la liga). FUERTES: Cornejo (68%) y Gazzolo (60%). FLOJOS: Salinas y Soza (48%) y sobre todo Cabrera (29%) → cuidar su lado al defender centros. Arriba, Pons (186 cm) es la referencia aérea ofensiva para balón parado y balón largo." },
      { id:"transiciones", label:"Transiciones / recuperaciones", tipo:"heat", color:"gold",
        grid:[[0.10,0.20,0.10],[0.25,0.40,0.30],[0.50,0.70,0.55],[0.45,0.55,0.50],[0.20,0.30,0.25],[0.05,0.10,0.05]],
        interp:"Recuperamos en el MEDIO: Camargo 86 recuperaciones, Galani 50, Cornejo 59 — bloque medio que roba en zonas 7-9. Cordero (3º de la liga en duelos defensivos) refuerza. Desde ahí, la salida a transición busca a los carrileros. Palanca: acelerar la 1ª decisión tras robo." }
    ],
    defensores: [
      { d:2,  n:"Gazzolo",  x:150, y:365, aer:60 },
      { d:26, n:"Soza",     x:110, y:372, aer:48 },
      { d:16, n:"Cornejo",  x:48,  y:250, aer:68 },
      { d:17, n:"Salinas",  x:252, y:250, aer:48 },
      { d:28, n:"Cabrera",  x:56,  y:308, aer:29 },
      { d:29, n:"Pons",     x:150, y:110, aer:null }
    ]
  }
};
