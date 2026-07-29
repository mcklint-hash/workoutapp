# Min Träning v9.6.5a

Version 9.6.5a gör Recovery Coach tydligare, förbättrar passrekommendationerna och rättar viktavrundningen.

## Nytt i v9.6.5a

### Recovery Coach

- **Säte** visas inte längre i Recovery Coach och påverkar inte coachens rekommendationer.
- **Dagens muskelgrupp** visas med en tydlig motivering baserad på återhämtning, senaste träning och belastning.
- De tre mest återhämtade muskelgrupperna visas som **Topp 3**.
- När ett upplägg är valt rekommenderas det pass som bäst matchar dagens muskelgrupp.
- Knappen **Välj passet** aktiverar rätt träningsdag, avslutar ett eventuellt aktivt pass och går direkt till startsidan.
- När inget upplägg är valt visas i stället förslag på lämpliga övningar.

### Coach 2.0

- Säte har tagits bort ur prioriterings- och passrekommendationerna.
- Passmatchningen fortsätter att prioritera återhämtning, träningsvolym, balans och frekvens.

### Viktavrundning

- Progressionsförslagen använder nu viktsteget som valts under Inställningar.
- Den tidigare hårdkodade gränsen på 2,5 kg är borttagen.

### Statistik

- Den tidigare veckostatistiken är borttagen.
- En tydlig plats är förberedd för framtida **Veckomål**.

## Muskelgrupper

Övningsbanken kan fortfarande innehålla Bröst, Rygg, Axlar, Biceps, Triceps, Framsida lår, Baksida lår, Säte, Vader och Mage/bål. Säte räknas dock inte i Recovery Coach eller coachens passprioritering.

## Kompatibilitet

LocalStorage-nyckeln är oförändrad: `minTraningStateV95`. Befintlig historik, inställningar, egna övningar och egna upplägg behålls.

## Installation

Ersätt `index.html`, `style.css`, `app.js` och `README.md`, öppna sedan `index.html` och gör en hård omladdning.
