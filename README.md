# DECK — Laboratoire interactif

**État de référence : [DECK_ETAT.md](./DECK_ETAT.md)**  
**Passation de référence : [PASSATION_DECK_E85.md](./PASSATION_DECK_E85.md)** — contexte de la reprise E84 → E85.  
**Dernière expérience : [E85 — Micro-relief 3D](./e85-microrelief-3d.html)** (16 novembre 2026 ; hauteur et raccord réglables ; validation Safari/iPhone en attente). [Essayer E85](https://km48krg88d-ops.github.io/Deck-laboratoire/e85-microrelief-3d.html). [Retour E84](./e84-douceur-contour.html).

## Reprendre le développement

1. Lire [DECK_ETAT.md](./DECK_ETAT.md) : décisions validées, neuf luminaires, gestes, état du prototype et sujets ouverts.
2. Ouvrir la dernière expérience E indiquée dans ce document, actuellement `e85-microrelief-3d.html`.
3. Créer une nouvelle expérience pour chaque modification majeure sans écraser la précédente ; mettre à jour le document d'état dans le même travail.

**Attention :** `index.html` est l'application principale distincte (titre actuel E63.6). Ne pas la remplacer automatiquement par E84. Le code et les réglages conservés sur le navigateur iPhone ne sont pas la même chose : les données `localStorage` ne sont pas enregistrées par GitHub.

Voir [DECK_VERSIONS.md](./DECK_VERSIONS.md) pour l'index historique.

## Historique de recherche

Le laboratoire explore une sphère de particules, des interfaces lumineuses en creux, les commandes gestuelles des lampes, du ventilateur et de la musique. Les versions antérieures comprennent notamment l'expérience **V17 « Opale »** : volume blanc laiteux, lumière rose-corail organique et moteurs d'affichage distincts.

**Correctif E85 après essai tactile :** restitution des animations du disque et du donut issues d’E84 ; relief 3D superposé et coût borné. [Ouvrir E85 actualisée](https://km48krg88d-ops.github.io/Deck-laboratoire/e85-microrelief-3d.html?v=4). Test iPhone à reconfirmer.

**Nouveau test E86, commande 3D selon SketchUp :** [ouvrir le prototype « Commande 001 »](https://km48krg88d-ops.github.io/Deck-laboratoire/e86-commande-modelee.html). Géométrie réellement reconstruite depuis les deux profils rouge/vert de `COMMANDE-001.glb` ; réglages hauteur et résistance, rotation tactile, sans modifier l’interface DECK principale.

## Application principale — Lampe « Bis 3D » (17/11/2026)

La [page générale DECK](https://km48krg88d-ops.github.io/Deck-laboratoire/?v=bis1) (`index.html`, ancien socle E63.6) comprend désormais une **variante 3D facultative du disque / lampe ID6**, construite d’après la volumétrie de `COMMANDE-001.glb` et le lissage d’E86. Le bouton « Lampe · originale / Bis 3D » et « Afficher » sont accessibles dans l’application ; « 3D » donne les curseurs hauteur (150 % par défaut) et résistance (50 %). Les autres lampes et gestes sont intacts ; la variante originale reste sélectionnée par défaut. Module indépendant : [`deck-lamp-bis.js`](./deck-lamp-bis.js). Sauvegarde intégrale de l’application précédente : [`index-e63-6-avant-lampe-bis.html`](./index-e63-6-avant-lampe-bis.html). Le test E86 possède désormais une interpolation cubique monotone pour supprimer les anneaux dus au profil linéaire. Vérification de syntaxe et simulation d’initialisation WebGL réussies ; Safari réel non confirmé.

**Lampe Bis 3D · rendu fondu (17/11/2026)** : [ouvrir l’application principale mise à jour](https://km48krg88d-ops.github.io/Deck-laboratoire/?v=bis2). Hauteur 180 % et résistance 100 % (maxima), « Fondu des ombres » 70 % ajustable ; les ombres et lumières de relief laissent transparaître les couleurs du fond. La variante originale reste disponible, ainsi que la sauvegarde précédente de l’app.

## E87 — Une membrane 3D unique

[**Tester E87 sur le web**](https://km48krg88d-ops.github.io/Deck-laboratoire/e87-membrane-3d.html?v=1) : membrane et commande réunies dans le même maillage, vue en plan, commande allumée à 100 % ; deux sources réellement placées dans l’espace 3D, bleu-gris `#9CAEB1` et orange doux `#F2AA76`, d’après la palette « Matinée orange » de DECK. Intensité et lumières ajustables ; géométrie immobile. Un lien E87 a aussi été ajouté à l’application générale. E85, E86 et le moteur original restent disponibles et ne sont pas remplacés.
