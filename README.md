# Min Träning 9.4

Buggfix för 9.3.1 där JavaScript kunde stanna vid uppstart och göra alla knappar inaktiva.

Ändringar:
- Alla HTML-element kopplas nu explicit med `getElementById`.
- Redigering av upplägg skapar inte en extra kopia.
- Versionsnumret har uppdaterats till 9.4.

Ladda upp och ersätt samtliga filer: `index.html`, `style.css` och `app.js`.


## Nytt i 9.4
- Automatisk vilotimer efter sparat set.
- Valbar standardvila: 60, 90, 120 eller 180 sekunder.
- Pausa, återuppta, starta om och hoppa över.
- Valbar ljudsignal när vilan är klar.
- Timern fortsätter korrekt i bakgrunden genom en sparad sluttid.
- Tydlig Set 1 av 3-indikator och särskild markering för failure-set.
- Rekommendationspanelen markeras tydligare.
