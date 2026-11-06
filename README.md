# DECK — Laboratoire (V10)

Interface de laboratoire pour iPhone / iPad.

## Publication GitHub Pages

Créer un dépôt GitHub public (par ex. `deck-laboratoire`) et déposer à sa racine les fichiers de ce dossier (et non le dossier lui-même).

Dans le dépôt : **Settings → Pages → Build and deployment → Deploy from a branch** puis choisir **main / (root)** et **Save**.

Adresse obtenue : `https://<utilisateur>.github.io/deck-laboratoire/` (remplacer `<utilisateur>` par votre identifiant GitHub).

Les changements futurs peuvent être envoyés directement au dépôt sans Netlify.

Ne jamais intégrer d'identifiants, mots de passe, jetons ni secrets au code : un dépôt GitHub Pages public et son JavaScript sont lisibles.

## Contenu

- `index.html` : DECK Laboratoire V10
- `manifest.webmanifest` : configuration PWA
- `sw.js` : service worker
- `icon-*.png` : icônes PWA
