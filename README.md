# Min Träning v9.5.2 – Final

Den slutliga versionen i 9.5-serien färdigställer Statistik 2.0 och Coach Edition.

## Statistik och coach
- dashboard med träningsstreak, pass denna vecka och månad
- korrekt visning av **mest tränade muskelgrupp**
- separat statistik för **mest utförda övning**
- coachinsikter som tydligt skiljer mellan muskelgrupper och övningar
- veckostatistik med pass, set och mest tränade muskelgrupp
- muskelkort med muskelgrupp, antal pass, antal set, senaste träning och status
- övningskort med högsta vikt, senast loggade resultat, senaste träning och viktutveckling
- tydliga tomma vyer när träningshistorik saknas för vald period

## Statusfärger för muskelgrupper
- grön: tränad de senaste 3 dagarna
- gul: tränad för 4–7 dagar sedan
- röd: mer än 7 dagar sedan

## Oförändrat
Träningsloggen, vilotimern, ljudet, uppläggen, historiken och befintlig sparad data är bevarade.

## Installation
Ersätt alla fyra filer på webbservern:
- `index.html`
- `style.css`
- `app.js`
- `README.md`

Kontrollera att sidomenyn visar **Version 9.5.2**. Gör en hård omladdning om webbläsaren visar en äldre version.

Panelen **Nästa pass** ligger kvar i backloggen och ingår inte i v9.5.2.
