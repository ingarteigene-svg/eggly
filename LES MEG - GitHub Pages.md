# Eggly på iPhone – hosting via GitHub Pages

Disse 5 filene utgjør appen:
`index.html` · `data.js` · `manifest.webmanifest` · `icon-180.png` · `icon-512.png`

## A. Publiser gratis på GitHub Pages (kan gjøres fra iPhone-nettleser)

1. Lag konto / logg inn på **github.com**.
2. Trykk **+** øverst til høyre → **New repository**.
   - Navn: f.eks. `eggly` · sett til **Public** · trykk **Create repository**.
3. På repo-siden: **Add file → Upload files**.
   - Last opp alle de 5 filene (dra inn eller velg fra Filer-appen på iPhone).
   - Trykk **Commit changes**.
4. Gå til **Settings → Pages**.
   - Under *Build and deployment* → Source: **Deploy from a branch**.
   - Branch: **main** / mappe: **/(root)** → **Save**.
5. Vent ~1 minutt. Adressen vises øverst på Pages-siden:
   `https://DITT-BRUKERNAVN.github.io/eggly/`

## B. Legg til på Hjem-skjerm (blir en app-ikon)

1. Åpne adressen i **Safari** på iPhone.
2. Trykk **Del**-knappen (firkant med pil opp).
3. Velg **Legg til på Hjem-skjerm** → **Legg til**.
4. Appen «Eggly» ligger nå med eget ikon og åpner i helskjerm.

## C. Oppdatere tallene ved ny avregning

Alle tall ligger i `data.js` – én blokk per avregning. `index.html` trenger du ikke røre.

1. Åpne `data.js` på GitHub (blyant-ikonet).
2. Kopier den siste blokken i `avregninger`, lim den inn nederst i lista, og bytt ut tallene
   med de fra Nortura-avregningen (eggklasser, tillegg, eks. MVA, MVA, brutto, datoer).
3. Oppdater `oppdatert` øverst, og trykk **Commit changes**. Pages oppdateres automatisk.

Appen regner selv ut snittvekt, snittpris, størrelsesmiks, brett, paller, totaler og
endring fra forrige uke, og avregningen dukker opp i grafene og under **Historikk**.

Du kan også be Claude legge inn avregningen – da holder det å lime inn tallene eller PDF-en.
