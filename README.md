# Min Träning v9.6.6

Version 9.6.6 introducerar en komplett Recovery Dashboard med samtliga relevanta muskelgrupper.

## Nytt i v9.6.6

### Recovery Dashboard

- Den tidigare listan **Topp 3 återhämtade** är ersatt.
- Alla muskelgrupper som används av Recovery Coach visas i en sammanhängande dashboard.
- Säte och Övrigt är fortsatt undantagna från coachens beräkningar.
- Muskelgrupperna sorteras efter högst återhämtningspoäng.
- Varje muskelgrupp visar:
  - recovery i procent,
  - grön, gul eller röd status,
  - tydlig progressbar,
  - när muskeln senast tränades,
  - viktade set under de senaste 7 dagarna,
  - antal pass under de senaste 30 dagarna,
  - aktuell belastningsnivå.
- **Dagens muskelgrupp** och knappen **Välj passet** finns kvar.
- När inget upplägg är valt visas fortfarande förslag på lämpliga övningar.

### Design och mobil

- Recovery-vyn har fått en kompakt tabelliknande layout för dator.
- Dashboarden anpassas till två kolumner på mindre skärmar och en kolumn på mobil.
- Trafikljus, progressbar och belastningsstatus är tydligare separerade.

### Coach 2.0

- Befintlig passmatchning, matchningsprocent, trafikljus och **Välj passet** är oförändrade.

## Kompatibilitet

LocalStorage-nyckeln är oförändrad: `minTraningStateV95`. Befintlig historik, inställningar, egna övningar och egna upplägg behålls automatiskt.

## Installation

Ersätt `index.html`, `style.css`, `app.js` och `README.md`. Öppna därefter `index.html` och gör en hård omladdning i webbläsaren.
