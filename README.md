# Min Träning v9.6.4a

Version 9.6.4a fokuserar på full mobilanpassning och en smartare övningsbank med procentuell muskelpåverkan.

## Nytt i v9.6.4a

### Mobilanpassning

- Mobilvänlig, horisontellt rullningsbar navigation.
- Responsiva kort, formulär, knappar, statistik och träningsvy.
- Förbättrad kalender på små skärmar.
- Större tryckytor och formulärfält utan oönskad mobilzoom.
- Ingen avsiktlig horisontell sidscroll från 320 px skärmbredd.

### Övningsbank och muskelpåverkan

- Inbyggda övningar får procentprofiler för primära och sekundära muskelgrupper.
- Recovery Coach, Coach 2.0 och muskelstatistiken använder viktade set och viktad kg-volym.
- En muskel delas aldrig upp i mindre delar: all påverkan räknas på hela muskelgruppen.
- Egna övningar kan skapas med primär och sekundär muskel. Procentsumman måste vara 100 %.
- Äldre övningar och historik får automatiskt kompatibla standardprofiler.

## Muskelgrupper

Bröst, Rygg, Axlar, Biceps, Triceps, Framsida lår, Baksida lår, Säte, Vader och Mage/bål.

## Kompatibilitet

LocalStorage-nyckeln är oförändrad: `minTraningStateV95`. Befintlig historik, inställningar och egna upplägg behålls.

## Installation

Ersätt `index.html`, `style.css`, `app.js` och `README.md`, öppna sedan `index.html` och gör en hård omladdning.
