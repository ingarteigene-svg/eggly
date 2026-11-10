/* EGGLY – alle tall ligger her. Appen (index.html) regner ut snittvekt, snittpris,
   størrelsesmiks, brett, paller og totaler selv.

   NY AVREGNING: kopier den siste blokken i "avregninger", lim inn nederst i lista
   og bytt ut tallene med de fra Nortura-avregningen. Oppdater "oppdatert" øverst.

   Felter per avregning:
     dato      hentedato (ÅÅÅÅ-MM-DD) – brukes i grafer og historikk
     klasser   [antall, vekt kg, pris kr/kg, beløp kr] per eggklasse
     tillegg   [navn, kg, sats, beløp]
     kg        sum vekt egg fra avregningen (valgfri – ellers summeres klassene)
     eksMva / mva / brutto   oppgjørslinjene nederst på avregningen
     lokalEgg  egg solgt lokalt samme uke (0 hvis ingen)
     malBrett  målpris kr/brett (kostbasis × 30). Utelat for å videreføre forrige verdi.
*/
window.EGGLY_DATA = {
 oppdatert: "10.11.2026",
 place: "Teigene Egg · Hareid",
 egg: {
  // Sum levert til og med 29.07.2026 (før detaljerte avregninger ble lagt inn)
  basis: { egg: 734400, brutto: 1094657, brett: 14491 },
  avregninger: [
   // Eldre leveranser – bare nøkkeltall er registrert
   { dato: "2026-06-05", vekt: 43.15, pris: 0.7934, prisProd: 0.3195, lokalEgg: 16020, malBrett: null },
   { dato: "2026-06-10", vekt: 45.66, pris: 0.953,  prisProd: 0.8169, lokalEgg: 10790, malBrett: 46.31 },
   { dato: "2026-06-17", vekt: 49.66, pris: 1.2552, prisProd: 1.0754, lokalEgg: 16250, malBrett: 46.22 },
   { dato: "2026-06-24", vekt: 52.22, pris: 1.4171, prisProd: 1.1973, lokalEgg: 15860, malBrett: 46.08 },
   { dato: "2026-07-01", vekt: 53.67, pris: 1.4927, prisProd: 1.2864, lokalEgg: 13850, malBrett: 45.52 },
   { dato: "2026-07-08", vekt: 54.85, pris: 1.5611, prisProd: 1.3343, lokalEgg: 16520, malBrett: 45.99 },
   { dato: "2026-07-15", vekt: 56.5,  pris: 1.6741, prisProd: 1.4992, lokalEgg: 11340, malBrett: 46.66 },
   { dato: "2026-07-22", vekt: 57.61, pris: 1.7141, prisProd: 1.548,  lokalEgg: 11590, malBrett: 47.42 },
   { dato: "2026-07-29", vekt: 58.5,  pris: 1.7517, prisProd: 1.7517, lokalEgg: 0,     malBrett: 47.57 },

   // Fullstendige avregninger – legg nye til under her
   {
    nr: "5108241579", dato: "2026-08-05", avregnet: "2026-08-10", utbetalt: "2026-08-17",
    klasser: {
     XL:     [49,    3.72,    20.22, 75.26],
     L:      [6520,  424.44,  23.12, 9813.12],
     M:      [33858, 1983.05, 25.92, 51400.74],
     S:      [1569,  80.68,   19.60, 1581.33],
     SI:     [26,    1.09,    6.85,  7.47],
     SKITNE: [495,   29.51,   6.85,  202.16],
     KLINK:  [640,   37.88,   6.85,  259.51],
     BLOD:   [16,    0.96,    null,  0],
     KNEKK:  [27,    1.60,    null,  0]
    },
    tillegg: [
     ["Distriktstilskudd",          2560.38, 0.58, 1485.02],
     ["Kvantumstillegg",            2560.38, 0.25, 640.09],
     ["Merpris små industriegg",    1.09,    5.90, 6.43],
     ["Trivselstiltak verpehøns",   2560.38, 0.50, 1280.20]
    ],
    kg: 2562.95, eksMva: 66751.33, mva: 10012.68, brutto: 76764.01,
    lokalEgg: 0
   },
   {
    nr: "5108251452", dato: "2026-08-19", avregnet: "2026-08-24", utbetalt: "2026-08-31",
    klasser: {
     XL:     [88, 6.60, 20.22, 133.39],
     L:      [7819, 511.12, 23.12, 11817.14],
     M:      [22354, 1321.58, 25.92, 34255.33],
     S:      [850, 43.28, 19.60, 848.19],
     SI:     [25, 1.06, 6.85, 7.28],
     SKITNE: [556, 33.79, 6.85, 231.43],
     KLINK:  [648, 39.43, 6.85, 270.10],
     BLOD:   [19, 1.17, null, 0],
     KNEKK:  [41, 2.48, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 1956.85, 0.58, 1134.99],
     ["Kvantumstillegg", 1956.85, 0.25, 489.23],
     ["Merpris små industriegg", 1.06, 5.90, 6.27],
     ["Trivselstiltak verpehøns", 1956.85, 0.50, 978.43]
    ],
    kg: 1960.50, eksMva: 50171.78, mva: 7525.78, brutto: 57697.56,
    lokalEgg: 0
   },
   {
    nr: "5108255612", dato: "2026-08-26", avregnet: "2026-08-28", utbetalt: "2026-09-07",
    klasser: {
     XL:     [74, 5.59, 20.22, 113.03],
     L:      [8538, 558.94, 23.12, 12922.62],
     M:      [21338, 1263.87, 25.92, 32759.56],
     S:      [503, 25.91, 19.60, 507.74],
     SI:     [10, 0.42, 6.85, 2.87],
     SKITNE: [1096, 67.20, 6.85, 460.31],
     KLINK:  [794, 48.56, 6.85, 332.66],
     BLOD:   [14, 0.87, null, 0],
     KNEKK:  [33, 2.01, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 1970.49, 0.58, 1142.88],
     ["Kvantumstillegg", 1970.49, 0.25, 492.62],
     ["Merpris små industriegg", 0.42, 5.89, 2.47],
     ["Trivselstiltak verpehøns", 1970.49, 0.50, 985.25]
    ],
    kg: 1973.37, eksMva: 49722.01, mva: 7458.30, brutto: 57180.31,
    lokalEgg: 0
   },
   {
    nr: "5108284940", dato: "2026-09-23", avregnet: "2026-09-28", utbetalt: "2026-10-05",
    klasser: {
     XL:     [137, 10.27, 20.12, 206.55],
     L:      [7451, 490.37, 23.02, 11288.36],
     M:      [12124, 721.94, 25.82, 18640.39],
     S:      [442, 22.28, 19.50, 434.46],
     SI:     [46, 1.92, 6.75, 12.96],
     SKITNE: [675, 42.04, 6.75, 283.76],
     KLINK:  [668, 41.56, 6.75, 280.50],
     BLOD:   [15, 0.88, null, 0],
     KNEKK:  [42, 2.59, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 1330.37, 0.58, 771.60],
     ["Kvantumstillegg", 1330.37, 0.25, 332.59],
     ["Merpris små industriegg", 1.92, 5.90, 11.33],
     ["Trivselstiltak verpehøns", 1330.37, 0.50, 665.19]
    ],
    kg: 1333.85, eksMva: 32927.69, mva: 4939.15, brutto: 37866.84,
    lokalEgg: 0
   },
   {
    nr: "5108293798", dato: "2026-09-30", avregnet: "2026-10-05", utbetalt: "2026-10-12",
    klasser: {
     XL:     [301, 22.49, 20.12, 452.46],
     L:      [15192, 1000.03, 23.02, 23020.67],
     M:      [24959, 1485.41, 25.82, 38353.26],
     S:      [557, 28.54, 19.50, 556.57],
     SI:     [15, 0.64, 6.75, 4.34],
     SKITNE: [640, 39.73, 6.75, 268.14],
     KLINK:  [1440, 89.63, 6.75, 605.02],
     BLOD:   [12, 0.75, null, 0],
     KNEKK:  [84, 5.20, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 2666.47, 0.58, 1546.55],
     ["Kvantumstillegg", 2666.47, 0.25, 666.62],
     ["Merpris små industriegg", 0.64, 5.89, 3.79],
     ["Trivselstiltak verpehøns", 2666.47, 0.50, 1333.22]
    ],
    kg: 2672.41, eksMva: 66810.64, mva: 10021.61, brutto: 76832.25,
    lokalEgg: 0
   },
   {
    nr: "5108309862", dato: "2026-10-14", avregnet: "2026-10-19", utbetalt: "2026-10-26",
    klasser: {
     XL:     [235, 17.63, 20.02, 353.03],
     L:      [13200, 868.48, 22.92, 19905.63],
     M:      [27090, 1605.03, 25.72, 41281.23],
     S:      [736, 37.59, 19.40, 729.32],
     SI:     [17, 0.72, 6.65, 4.81],
     SKITNE: [634, 38.95, 6.65, 259.02],
     KLINK:  [1218, 74.90, 6.65, 498.11],
     BLOD:   [11, 0.68, null, 0],
     KNEKK:  [59, 3.61, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 2643.31, 0.58, 1533.11],
     ["Klimakalkulator tillegg", 2643.31, 0.20, 528.67],
     ["Kvantumstillegg", 2643.31, 0.25, 660.84],
     ["Merpris små industriegg", 0.72, 5.91, 4.27],
     ["Trivselstiltak verpehøns", 2643.31, 0.50, 1321.66]
    ],
    kg: 2647.60, eksMva: 67079.70, mva: 10061.96, brutto: 77141.66,
    lokalEgg: 0
   },
   {
    nr: "5108326992", dato: "2026-10-28", avregnet: "2026-11-02", utbetalt: "2026-11-09",
    klasser: {
     XL:     [525, 39.33, 20.02, 787.45],
     L:      [17195, 1135.88, 22.92, 26034.35],
     M:      [23023, 1372.76, 25.72, 35307.42],
     S:      [401, 20.48, 19.40, 397.25],
     SI:     [19, 0.82, 6.65, 5.43],
     SKITNE: [495, 30.94, 6.65, 205.74],
     KLINK:  [1447, 90.92, 6.65, 604.60],
     BLOD:   [16, 1.01, null, 0],
     KNEKK:  [79, 4.93, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 2691.12, 0.58, 1560.84],
     ["Klimakalkulator tillegg", 2691.12, 0.20, 538.23],
     ["Kvantumstillegg", 2691.12, 0.25, 672.77],
     ["Merpris små industriegg", 0.82, 5.89, 4.81],
     ["Trivselstiltak verpehøns", 2691.12, 0.50, 1345.57]
    ],
    kg: 2697.06, eksMva: 67464.46, mva: 10119.67, brutto: 77584.13,
    lokalEgg: 0
   }
  ]
 },
 for: {"sisteDatoLang":"15. jul 2026","dev":[{"dato":"15.05","krKg":5.644,"kvantum":11620},{"dato":"27.05","krKg":5.644,"kvantum":11860},{"dato":"01.06","krKg":5.644,"kvantum":11900},{"dato":"08.06","krKg":5.644,"kvantum":9820},{"dato":"17.06","krKg":5.7,"kvantum":12620},{"dato":"24.06","krKg":5.7,"kvantum":12340},{"dato":"01.07","krKg":5.7,"kvantum":12300},{"dato":"08.07","krKg":5.7,"kvantum":13120},{"dato":"15.07","krKg":5.719,"kvantum":12880}],"siste":{"kvantum":12880,"netto":73664,"krKg":5.719,"faktura":92080,"mva":18416,"grunnpris":5.85,"frakt":5951,"rabatter":-7635},"totalt":{"kvantum":108460,"netto":615959,"krKg":5.679,"leveranser":9}}
};
