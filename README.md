# Min Träning v9.6.1a – Recovery Coach

Version 9.6.1 bygger vidare på Coach 2.0 med en ny lokal återhämtningsanalys.

## Nytt i v9.6.1

### Recovery Dashboard

Varje muskelgrupp får:

- Recovery-poäng mellan 0 och 100
- tydlig status: Redo, Återhämtar sig, Behöver vila eller Ingen historik
- senaste träningsdatum
- antal set och pass under de senaste sju dagarna
- registrerad kg-volym
- belastningsnivå: låg, normal eller hög

### Dagens rekommendation

Recovery Coach väljer den muskelgrupp som för tillfället bedöms vara mest redo. När ett upplägg är valt föreslås även det pass som bäst matchar återhämtningsläget. Passet kan väljas direkt från statistikvyn.

### Beräkningsmodell

Poängen bygger på appens lokalt sparade träningshistorik:

- dagar sedan senaste träning
- antal set senaste sju dagarna
- passfrekvens senaste sju dagarna
- kg-volym, beräknad från vikt × repetitioner

Beräkningen är en träningsindikator och inte en medicinsk bedömning. Användaren bör alltid väga in smärta, sömn, sjukdom och kroppens egna signaler.

## Befintliga funktioner

- Coach 2.0 och Prioriteringscoach
- Statistik 2.0
- träningsupplägg och egna upplägg
- träningslogg och historik
- setrekommendationer
- vilotimer
- import och export av lokal data

## Kompatibilitet

Lagringsnyckeln är oförändrad (`minTraningStateV95`). Befintlig träningshistorik, upplägg och inställningar ska därför finnas kvar vid uppdatering.

## Installation

1. Packa upp ZIP-filen.
2. Ersätt de tidigare filerna med `index.html`, `style.css`, `app.js` och `README.md`.
3. Öppna `index.html`.
4. Kontrollera att sidomenyn visar **Version 9.6.1**.
5. Gör en hård omladdning om webbläsaren visar en äldre version.

## Roadmap

- v9.6.2 – Veckomål och träningsmål

Personliga rekord och AI Coach ingår inte längre i roadmapen.


## Korrigeringar i v9.6.1a

- Coach och insikter visar nu korrekt muskelgrupp, exempelvis **Bröst**, istället för övningsnamnet **Bänkpress**.
- Recovery-kurvan är ändrad till:
  - ingen historik: 100 %
  - samma dag: 20 %
  - 24 timmar: 45 %
  - 48 timmar: 70 %
  - 72 timmar: 90 %
  - 96 timmar eller mer: 100 %
