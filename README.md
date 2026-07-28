# Min Träning v9.6.3

Version 9.6.3 lägger till träningskalender, lokal CSV-/Excel-export och valbar återhämtningstid i Recovery Coach.

## Nytt i v9.6.3

### Träningskalender

- Ny kalenderflik i sidomenyn.
- Månadsvy med markerade träningsdagar.
- Visar antal pass och set direkt i kalendern.
- Klick på en träningsdag visar pass, övningar, set och total kg-volym.
- Bläddring mellan månader.

### Export

Under **Inställningar → Export och backup** finns nu:

- CSV-export av träningshistoriken.
- Excel-export i `.xlsx` med bladen **Historik** och **Statistik**.
- Befintlig JSON-export och JSON-import.

Excel-exporten skapas helt lokalt i webbläsaren och kräver ingen internetanslutning eller extern tjänst.

### Recovery Coach

Under **Inställningar → Recovery Coach** kan användaren välja när en muskel ska anses fullt återhämtad:

- 3 dagar
- 4 dagar (standard)
- 5 dagar
- 6 dagar
- 7 dagar

Recovery-kurvan anpassas efter valet. Belastning, setvolym och passfrekvens påverkar fortfarande den slutliga återhämtningspoängen.

## Kompatibilitet

Lagringsnyckeln är oförändrad (`minTraningStateV95`). Befintlig träningshistorik, egna upplägg och inställningar behålls. Den nya inställningen för återhämtningstid får standardvärdet fyra dagar för äldre sparad data.

## Installation

1. Packa upp ZIP-filen.
2. Ersätt tidigare `index.html`, `style.css`, `app.js` och `README.md`.
3. Öppna `index.html`.
4. Kontrollera att sidomenyn visar **Version 9.6.3**.
5. Gör en hård omladdning om en äldre version visas.

## Tidigare ändring i v9.6.2a

- Veckostatistik togs bort helt från statistikvyn.
