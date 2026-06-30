# Eggly på iPhone – hosting via GitHub Pages

Disse 4 filene utgjør appen:
`index.html` · `manifest.webmanifest` · `icon-180.png` · `icon-512.png`

## A. Publiser gratis på GitHub Pages (kan gjøres fra iPhone-nettleser)

1. Lag konto / logg inn på **github.com**.
2. Trykk **+** øverst til høyre → **New repository**.
   - Navn: f.eks. `eggly` · sett til **Public** · trykk **Create repository**.
3. På repo-siden: **Add file → Upload files**.
   - Last opp alle de 4 filene (dra inn eller velg fra Filer-appen på iPhone).
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

Alle tall ligger i ett **DATA**-objekt øverst i `<script>` i `index.html`.
To måter:
- **Manuelt:** rediger `index.html` på GitHub (blyant-ikonet), endre tallene i `DATA`, Commit. Pages oppdateres automatisk.
- **Automatisk:** be Cowork regenerere `index.html` fra `Eggeleveranser Nortura.xlsx` neste gang du legger inn en avregning – så laster du bare opp den nye `index.html`.

> Tips: Vil du slippe opplasting hver gang, kan dataene flyttes til en egen `data.json` som appen henter – si fra, så setter jeg det opp.
