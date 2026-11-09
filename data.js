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
 oppdatert: "12.08.2026",
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
   }
  ]
 },
 for: {"sisteDatoLang":"15. jul 2026","dev":[{"dato":"15.05","krKg":5.644,"kvantum":11620},{"dato":"27.05","krKg":5.644,"kvantum":11860},{"dato":"01.06","krKg":5.644,"kvantum":11900},{"dato":"08.06","krKg":5.644,"kvantum":9820},{"dato":"17.06","krKg":5.7,"kvantum":12620},{"dato":"24.06","krKg":5.7,"kvantum":12340},{"dato":"01.07","krKg":5.7,"kvantum":12300},{"dato":"08.07","krKg":5.7,"kvantum":13120},{"dato":"15.07","krKg":5.719,"kvantum":12880}],"siste":{"kvantum":12880,"netto":73664,"krKg":5.719,"faktura":92080,"mva":18416,"grunnpris":5.85,"frakt":5951,"rabatter":-7635},"totalt":{"kvantum":108460,"netto":615959,"krKg":5.679,"leveranser":9}}
};
