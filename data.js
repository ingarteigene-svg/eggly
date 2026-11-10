/* EGGLY – alle tall ligger her. Appen (index.html) regner ut snittvekt, snittpris,
   størrelsesmiks, brett, paller og totaler selv.

   NY FÔRFAKTURA: legg til én linje nederst i "leveranser" under "for".

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
  avregninger: [
   {
    nr: "5108202206", dato: "2026-06-05", avregnet: "2026-06-10", utbetalt: "2026-06-17",
    klasser: {
     XL:     [3, 0.18, 20.33, 3.72],
     L:      [40, 2.58, 23.23, 59.93],
     M:      [224, 12.54, 26.03, 326.36],
     S:      [2065, 95.01, 19.71, 1872.61],
     SI:     [8451, 354.94, 6.96, 2470.40],
     SKITNE: [6, 0.29, 6.96, 1.99],
     KLINK:  [6, 0.29, 6.96, 1.99],
     BLOD:   [1, 0.06, null, 0],
     KNEKK:  [4, 0.18, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 465.82, 0.58, 270.19],
     ["Kvantumstillegg", 465.82, 0.25, 116.46],
     ["Merpris små industriegg", 354.94, 5.90, 2094.16],
     ["Trivselstiltak verpehøns", 465.82, 0.50, 232.90]
    ],
    kg: 466.06, eksMva: 7450.71, mva: 1117.62, brutto: 8568.33,
    lokalEgg: 16020, malBrett: null
   },
   {
    nr: "5108208925", dato: "2026-06-10", avregnet: "2026-06-22", utbetalt: "2026-06-22",
    klasser: {
     XL:     [42, 3.14, 20.33, 63.75],
     L:      [478, 32.01, 23.23, 743.57],
     M:      [3901, 218.34, 26.03, 5683.39],
     S:      [26691, 1254.50, 19.71, 24726.16],
     SI:     [33404, 1436.39, 6.96, 9997.28],
     SKITNE: [108, 5.29, 6.96, 36.79],
     KLINK:  [119, 5.97, 6.96, 41.56],
     BLOD:   [15, 0.76, null, 0],
     KNEKK:  [42, 2.12, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 2955.63, 0.58, 1714.28],
     ["Kvantumstillegg", 2955.63, 0.25, 738.90],
     ["Merpris små industriegg", 1436.39, 5.90, 8474.70],
     ["Trivselstiltak verpehøns", 2955.63, 0.50, 1477.82]
    ],
    kg: 2958.50, eksMva: 53698.20, mva: 8054.74, brutto: 61752.94,
    lokalEgg: 10790, malBrett: 46.31
   },
   {
    nr: "5108210955", dato: "2026-06-17", avregnet: "2026-06-23", utbetalt: "2026-06-29",
    klasser: {
     XL:     [241, 18.06, 20.33, 367.14],
     L:      [1384, 94.14, 23.23, 2186.80],
     M:      [20927, 1171.87, 26.03, 30503.85],
     S:      [65066, 3123.16, 19.71, 61557.40],
     SI:     [8680, 373.24, 6.96, 2597.74],
     SKITNE: [311, 15.86, 6.96, 110.37],
     KLINK:  [441, 22.51, 6.96, 156.68],
     BLOD:   [50, 2.56, null, 0],
     KNEKK:  [100, 5.22, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 4818.83, 0.58, 2794.93],
     ["Kvantumstillegg", 4818.83, 0.25, 1204.70],
     ["Merpris små industriegg", 373.24, 5.90, 2202.11],
     ["Trivselstiltak verpehøns", 4818.83, 0.50, 2409.43]
    ],
    kg: 4826.61, eksMva: 106091.15, mva: 15913.67, brutto: 122004.82,
    lokalEgg: 16250, malBrett: 46.22
   },
   {
    nr: "5108215344", dato: "2026-06-24", avregnet: "2026-06-29", utbetalt: "2026-07-06",
    klasser: {
     XL:     [393, 29.88, 20.33, 607.46],
     L:      [1305, 87.43, 23.23, 2031.05],
     M:      [36455, 2041.44, 26.03, 53138.76],
     S:      [44142, 2162.95, 19.71, 42631.67],
     SI:     [3110, 136.86, 6.96, 952.53],
     SKITNE: [318, 16.85, 6.96, 117.26],
     KLINK:  [527, 27.93, 6.96, 194.40],
     BLOD:   [50, 2.66, null, 0],
     KNEKK:  [100, 5.62, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 4503.34, 0.58, 2611.94],
     ["Kvantumstillegg", 4503.34, 0.25, 1125.83],
     ["Merpris små industriegg", 136.86, 5.90, 807.46],
     ["Trivselstiltak verpehøns", 4503.34, 0.50, 2251.67]
    ],
    kg: 4511.62, eksMva: 106470.03, mva: 15970.50, brutto: 122440.53,
    lokalEgg: 15860, malBrett: 46.08
   },
   {
    nr: "5108223677", dato: "2026-07-01", avregnet: "2026-07-08", utbetalt: "2026-07-13",
    klasser: {
     XL:     [5, 0.38, 20.21, 7.74],
     L:      [250, 16.13, 23.12, 372.97],
     M:      [49117, 2734.15, 25.92, 70869.18],
     S:      [33620, 1708.33, 19.60, 33483.29],
     SI:     [405, 17.48, 6.85, 119.70],
     SKITNE: [1872, 100.55, 6.85, 688.78],
     KLINK:  [951, 50.39, 6.85, 345.20],
     BLOD:   [40, 2.15, null, 0],
     KNEKK:  [140, 7.51, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 4627.42, 0.58, 2683.91],
     ["Kvantumstillegg", 4627.42, 0.25, 1156.86],
     ["Merpris små industriegg", 17.48, 5.90, 103.10],
     ["Trivselstiltak verpehøns", 4627.42, 0.50, 2313.73]
    ],
    kg: 4637.08, eksMva: 112144.46, mva: 16821.67, brutto: 128966.13,
    lokalEgg: 13850, malBrett: 45.52
   },

   {
    nr: "5108226200", dato: "2026-07-08", avregnet: "2026-07-13", utbetalt: "2026-07-20",
    klasser: {
     XL:     [2, 0.16, 20.19, 3.13],
     L:      [798, 51.44, 23.12, 1189.39],
     M:      [66288, 3728.25, 25.92, 96636.19],
     S:      [25254, 1288.24, 19.60, 25249.56],
     SI:     [274, 11.82, 6.85, 80.94],
     SKITNE: [3296, 181.23, 6.85, 1241.43],
     KLINK:  [1079, 58.39, 6.85, 399.95],
     BLOD:   [36, 1.99, null, 0],
     KNEKK:  [173, 9.50, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 5319.52, 0.58, 3085.31],
     ["Kvantumstillegg", 5319.52, 0.25, 1329.88],
     ["Merpris små industriegg", 11.82, 5.90, 69.71],
     ["Trivselstiltak verpehøns", 5319.52, 0.50, 2659.76]
    ],
    kg: 5331.01, eksMva: 131945.25, mva: 19791.78, brutto: 151737.03,
    lokalEgg: 16520, malBrett: 45.99
   },
   {
    nr: "5108229623", dato: "2026-07-15", avregnet: "2026-07-20", utbetalt: "2026-07-27",
    klasser: {
     XL:     [5, 0.38, 20.21, 7.74],
     L:      [2763, 178.09, 23.12, 4117.49],
     M:      [78720, 4491.00, 25.92, 116406.61],
     S:      [12382, 635.75, 19.60, 12460.74],
     SI:     [88, 3.75, 6.85, 25.70],
     SKITNE: [1944, 110.14, 6.85, 754.47],
     KLINK:  [1075, 60.27, 6.85, 412.86],
     BLOD:   [50, 2.87, null, 0],
     KNEKK:  [173, 9.77, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 5479.39, 0.58, 3178.05],
     ["Kvantumstillegg", 5479.39, 0.25, 1369.86],
     ["Merpris små industriegg", 3.75, 5.90, 22.14],
     ["Trivselstiltak verpehøns", 5479.39, 0.50, 2739.71]
    ],
    kg: 5492.02, eksMva: 141495.37, mva: 21224.31, brutto: 162719.68,
    lokalEgg: 11340, malBrett: 46.66
   },
   {
    nr: "5108234068", dato: "2026-07-22", avregnet: "2026-07-29", utbetalt: "2026-08-03",
    klasser: {
     XL:     [509, 41.27, 20.22, 834.40],
     L:      [2635, 171.29, 23.12, 3960.20],
     M:      [90148, 5228.54, 25.92, 135523.72],
     S:      [10962, 559.06, 19.60, 10957.65],
     SI:     [74, 3.20, 6.85, 21.91],
     SKITNE: [2214, 130.63, 6.85, 894.79],
     KLINK:  [1231, 73.87, 6.85, 506.02],
     BLOD:   [65, 3.89, null, 0],
     KNEKK:  [162, 9.72, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 6207.86, 0.58, 3600.56],
     ["Kvantumstillegg", 6207.86, 0.25, 1551.97],
     ["Merpris små industriegg", 3.20, 5.90, 18.87],
     ["Trivselstiltak verpehøns", 6207.86, 0.50, 3103.92]
    ],
    kg: 6221.46, eksMva: 160974.01, mva: 24146.10, brutto: 185120.11,
    lokalEgg: 11590, malBrett: 47.42
   },

   {
    nr: "5108237616", dato: "2026-07-29", avregnet: "2026-08-04", utbetalt: "2026-08-10",
    klasser: {
     XL:     [59, 4.45, 20.22, 89.92],
     L:      [8193, 531.42, 23.12, 12286.50],
     M:      [71115, 4136.26, 25.92, 107211.85],
     S:      [4152, 213.91, 19.60, 4192.64],
     SI:     [30, 1.27, 6.85, 8.70],
     SKITNE: [1561, 91.31, 6.85, 625.48],
     KLINK:  [1177, 68.74, 6.85, 470.83],
     BLOD:   [41, 2.47, null, 0],
     KNEKK:  [72, 4.21, null, 0]
    },
    tillegg: [
     ["Distriktstilskudd", 5047.36, 0.58, 2927.48],
     ["Kvantumstillegg", 5047.36, 0.25, 1261.85],
     ["Merpris små industriegg", 1.27, 5.90, 7.49],
     ["Trivselstiltak verpehøns", 5047.36, 0.50, 2523.69]
    ],
    kg: 5054.04, eksMva: 131606.43, mva: 19740.96, brutto: 151347.39,
    lokalEgg: 0, malBrett: 47.57
   },

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
 for: {
  // Én linje per kraftfôr-faktura fra Felleskjøpet. Beløp eks. mva unntatt "belop" (å betale).
  //   frakt = frakt kraftfôr + stedsfrakt · rabatter = årskvantum-, lass- og kontantrabatt + stedsfrakttilskudd
  leveranser: [
   { dato: "2026-05-15", faktura: "10991605", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 11620, grunnpris: 5.77, frakt: 5368.44, rabatter: -6832.68, netto: 65583.16, mva: 16395.79, belop: 81978.95 },
   { dato: "2026-05-27", faktura: "11022896", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 11860, grunnpris: 5.77, frakt: 5479.32, rabatter: -6973.80, netto: 66937.72, mva: 16734.43, belop: 83672.15 },
   { dato: "2026-06-01", faktura: "11044880", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 11900, grunnpris: 5.77, frakt: 5497.80, rabatter: -6997.32, netto: 67163.48, mva: 16790.87, belop: 83954.35 },
   { dato: "2026-06-08", faktura: "11069542", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 9820, grunnpris: 5.77, frakt: 4536.84, rabatter: -5774.26, netto: 55423.98, mva: 13856.00, belop: 69279.98 },
   { dato: "2026-06-17", faktura: "11111609", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 12620, grunnpris: 5.83, frakt: 5830.44, rabatter: -7465.74, netto: 71939.30, mva: 17984.83, belop: 89924.13 },
   { dato: "2026-06-24", faktura: "11138674", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 12340, grunnpris: 5.83, frakt: 5701.08, rabatter: -7300.10, netto: 70343.18, mva: 17585.80, belop: 87928.98 },
   { dato: "2026-07-01", faktura: "11165040", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 12300, grunnpris: 5.83, frakt: 5682.60, rabatter: -7276.43, netto: 70115.17, mva: 17528.79, belop: 87643.96 },
   { dato: "2026-07-08", faktura: "11182944", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 13120, grunnpris: 5.83, frakt: 6061.44, rabatter: -7761.53, netto: 74789.51, mva: 18697.38, belop: 93486.89 },
   { dato: "2026-07-15", faktura: "11208568", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 12880, grunnpris: 5.85, frakt: 5950.56, rabatter: -7634.88, netto: 73663.68, mva: 18415.92, belop: 92079.60 },
   { dato: "2026-07-22", faktura: "11227266", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 12640, grunnpris: 5.85, frakt: 5839.68, rabatter: -7492.61, netto: 72291.07, mva: 18072.77, belop: 90363.84 },
   { dato: "2026-07-29", faktura: "11241227", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 12800, grunnpris: 5.85, frakt: 5913.60, rabatter: -7587.46, netto: 73206.14, mva: 18301.54, belop: 91507.68 },
   { dato: "2026-08-05", faktura: "11264586", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 12540, grunnpris: 5.85, frakt: 5793.48, rabatter: -7433.34, netto: 71719.14, mva: 17929.79, belop: 89648.93 },
   { dato: "2026-08-12", faktura: "11282290", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 12880, grunnpris: 5.85, frakt: 5950.56, rabatter: -7634.88, netto: 73663.68, mva: 18415.92, belop: 92079.60 },
   { dato: "2026-08-19", faktura: "11300099", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 12540, grunnpris: 5.87, frakt: 5793.48, rabatter: -7448.26, netto: 71955.02, mva: 17988.76, belop: 89943.78 },
   { dato: "2026-08-26", faktura: "11319899", vare: "KROMAT VERP SUPERGUL 1 B", kvantum: 13080, grunnpris: 5.87, frakt: 6042.96, rabatter: -7769.00, netto: 75053.56, mva: 18763.39, belop: 93816.95 },
   { dato: "2026-09-02", faktura: "11348482", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 13020, grunnpris: 5.74, frakt: 6015.24, rabatter: -7632.65, netto: 73117.39, mva: 18279.35, belop: 91396.74 },
   { dato: "2026-09-09", faktura: "11369752", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 13740, grunnpris: 5.74, frakt: 6347.88, rabatter: -8054.73, netto: 77160.75, mva: 19290.19, belop: 96450.94 },
   { dato: "2026-09-16", faktura: "11394839", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 14000, grunnpris: 5.64, frakt: 6468.00, rabatter: -8123.85, netto: 77304.15, mva: 19326.04, belop: 96630.19 },
   { dato: "2026-09-21", faktura: "11409951", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 9860, grunnpris: 5.64, frakt: 4555.32, rabatter: -5721.51, netto: 54444.21, mva: 13611.05, belop: 68055.26 },
   { dato: "2026-09-28", faktura: "11432604", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 13020, grunnpris: 5.64, frakt: 6015.24, rabatter: -7555.18, netto: 71892.86, mva: 17973.22, belop: 89866.08 },
   { dato: "2026-10-05", faktura: "11456769", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 12420, grunnpris: 5.64, frakt: 5738.04, rabatter: -7207.02, netto: 68579.82, mva: 17144.96, belop: 85724.78 },
   { dato: "2026-10-12", faktura: "11476005", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 12760, grunnpris: 5.64, frakt: 5895.12, rabatter: -7404.31, netto: 70457.21, mva: 17614.30, belop: 88071.51 },
   { dato: "2026-10-19", faktura: "11499549", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 12480, grunnpris: 5.78, frakt: 5765.76, rabatter: -7345.79, netto: 70554.37, mva: 17638.59, belop: 88192.96 },
   { dato: "2026-10-26", faktura: "11519219", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 12920, grunnpris: 5.78, frakt: 5969.04, rabatter: -7604.78, netto: 73041.86, mva: 18260.47, belop: 91302.33 },
   { dato: "2026-11-02", faktura: "11542398", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 12980, grunnpris: 5.78, frakt: 5996.76, rabatter: -7640.09, netto: 73381.07, mva: 18345.27, belop: 91726.34 },
   { dato: "2026-11-09", faktura: "11562064", vare: "KROMAT VERP SUPERGUL 2 B", kvantum: 12420, grunnpris: 5.78, frakt: 5738.04, rabatter: -7310.47, netto: 70215.17, mva: 17553.79, belop: 87768.96 }
  ]
 }
};
