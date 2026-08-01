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

## Fas 2 – Recovery Coach och passval

- Coach 2.0 använder nu samma återhämtningsdata som Recovery Coach.
- Passens matchningsprocent baseras på aktuell recovery för musklerna som passet tränar.
- Det bäst matchande passet markeras som rekommenderat idag.
- Topp 3 i Coach 2.0 visar recovery-prioritet.
- Settal i Coach-insikter formateras utan flyttalsrester.

## Fas 3 – Gemensam coachlogik och tydligare motivering

- Recovery Coach och Coach 2.0 använder nu exakt samma funktion för att poängsätta passen.
- Bäst matchande pass kan därför inte längre skilja sig mellan de två coachvyerna.
- Recovery Coach visar matchningsprocent direkt vid dagens rekommenderade pass.
- Varje pass i Coach 2.0 visar en kort motivering till matchningen.
- Fokusmusklerna visar även aktuell recovery-procent.
- Äldre CSS för den borttagna Topp 3-vyn har rensats bort.


## Fas 4 – Dagens Coach på startsidan

- Recovery Coach är nu kopplad direkt till startsidan.
- Startsidan visar planerat pass och dess aktuella matchningsprocent.
- Bäst matchande pass visas bredvid med en kort motivering.
- Om ett annat pass passar bättre kan det väljas direkt från startsidan.
- Om det planerade passet redan är bäst visas en tydlig grön bekräftelse.
- Samma `calculateRecovery()` och `scoreProgramDays()` används, så startsidan, Recovery Coach och Coach 2.0 ger samma rekommendation.
