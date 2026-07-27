# Min Träning v9.6.0 – Coach 2.0

Version 9.6.0 introducerar den första delen av Coach 2.0: **Prioriteringscoachen**.

## Nytt i v9.6.0

- rekommenderat nästa träningspass utifrån det valda upplägget
- rangordning av de tre muskelgrupper som bör prioriteras
- prioritetspoäng baserad på:
  - antal dagar sedan muskelgruppen senast tränades
  - setvolym under den valda statistikperioden
  - träningsfrekvens under perioden
  - balans mellan muskelgrupper
- balansanalys med statusen Bra balans, Viss obalans eller Tydlig obalans
- knapp för att välja det rekommenderade passet direkt
- tomt läge som ger en generell muskelrekommendation när inget upplägg är valt

## Coach Edition från v9.5.2

- träningsstreak samt pass denna vecka och månad
- mest tränade muskelgrupp och mest utförda övning
- coachinsikter, veckostatistik, muskelkort och övningskort
- statusfärger för hur nyligen varje muskelgrupp tränats

## Kompatibilitet

Befintlig sparad data från v9.5-serien bevaras. Lagringsnyckeln är oförändrad för att undvika att historik, upplägg och inställningar försvinner.

## Installation

Ersätt alla fyra filer på webbservern:

- `index.html`
- `style.css`
- `app.js`
- `README.md`

Kontrollera att sidomenyn visar **Version 9.6.0**. Gör en hård omladdning om webbläsaren visar en äldre version.
