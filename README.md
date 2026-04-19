# Min Träning – full version

Statisk träningssida byggd för GitHub Pages.

## Ingår
- Startsida
- Dagens pass
- Automatisk viktberäkning från failure-set till rekommenderad startvikt för 12 reps
- Övningsbank
- Historik
- Inställningar
- Lokal sparning i webbläsaren

## Publicera på GitHub Pages

1. Skapa ett nytt repository på GitHub.
2. Ladda upp alla filer från den här mappen.
3. Öppna repositoryt och gå till **Settings**.
4. Gå till **Pages**.
5. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
6. Spara.

Efter en kort stund får du en publik länk.

## Filer
- `index.html`
- `style.css`
- `script.js`
- `README.md`

## Viktigt
All data sparas lokalt i webbläsaren via localStorage. Om du byter enhet eller rensar webbläsardata försvinner sparad historik.
