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

## 17 novembre 2026 — E88 : quatre commandes du GLB, atelier individuel

Source fournie par l’utilisateur : **`COMMANDES-001.glb`**, 966 Ko, **16 maillages** répartis en quatre groupes distincts sur l’axe Z du modèle SketchUp. Le plan des commandes est X/Z et le relief selon Y. Les matériaux source sont `Matière` vert (#119B00), `Matière17` rouge (#FA0004), `Matière2` bleu (#0000F8). Groupes classés par leur centre Z croissant :

1. **01 · Trois reliefs concentriques** (centre Z ≈ 0,1198 m ; sept maillages ; max 7,66 mm au-dessus de la membrane)
2. **02 · Plateau + raccord court et pente extérieure** (centre Z ≈ 0,2206 m ; trois maillages, pièces verte+rouge+bleue ; plateau 14,57 mm) — **meilleure correspondance géométrique avec la première commande E87**, utilisée à titre de remplacement initial sans présumer l’identification définitive des lampes
3. **03 · Couronne bombée et centre plus bas** (centre Z ≈ 0,3269 m ; trois maillages ; centre 2,42 mm, sommet de la couronne 13,24 mm)
4. **04 · Large plateau central et raccord extérieur** (centre Z ≈ 0,4546 m ; deux maillages ; plateau 13,25 mm)

**Extraction réelle de la géométrie** : intersection barycentrique de rayons radiaux avec les triangles des 16 maillages (8 angles, pas d’origine 0,25 mm, réduction en profils de 0,5 mm, 74 échantillons par commande). Chaque famille est ensuite reconstruite en **surface 3D continue** au moyen d’un maillage WebGL de 62 001 sommets (123 008 triangles), interpolée en PCHIP pour conserver les courbes. Ce n’est **pas un import littéral du maillage GLB** dans le navigateur : les formes axisymétriques sont représentées par leurs profils radiaux mesurés. Cette distinction compte pour préserver les détails et pour affiner les modèles dans de futures itérations.

Page créée **`e88-atelier-commandes-3d.html`** : les quatre profils sélectionnables, caméra en plan, deux sources lumineuses spatiales fixes issues de la palette du matin, animation géométrique 0→100 %, curseur forme, bouton apparition/disparition, paramètres **hauteur du modèle** et **durée de montée** mémorisés indépendamment pour chacun (`deck-e88-model-configs-v1`). La commande 02 est active au démarrage. URL https://km48krg88d-ops.github.io/Deck-laboratoire/e88-atelier-commandes-3d.html?v=1 .

La **première commande E87** est également remplacée par le **modèle 02 du nouveau GLB** dans `e87-membrane-3d.html` v6 (proportions et profil sources) ; sa version v5 a été archivée `e87-membrane-3d-v5.html`. L’application principale `index.html` n’a reçu que deux liens, vers E87 v6 et E88 v1 ; aucun geste ni autre éclairage de la version générale n’a été touché. Liens E87 https://km48krg88d-ops.github.io/Deck-laboratoire/e87-membrane-3d.html?v=6 et E88 ci-dessus. Test : les deux sources JS sont syntaxiquement valides, E88 a été simulé sur WebGL (quatre formes différentes, changement, animation et mémorisation distincte), et le profil 02 est **identique point par point** dans E87 v6 et E88. Affichage et FPS sur iPhone non encore validés par l’utilisateur. La correspondance définitive des quatre modèles aux lampes reste **à décider ensemble**.


### 17/11/2026 — E89 : test général des 4 commandes, membrane 3D commune

**Demande** : après validation visuelle de quatre captures iPhone dans l’atelier E88, conserver les réglages et réunir **uniquement ces quatre commandes sur la même membrane** (sans sphère ni autres lampes). Paramètres validés d’après les captures : **01 Trois reliefs : hauteur 160 %, apparition 2,0 s ; 02 Plateau + raccord : 142 %, 1,4 s ; 03 Couronne bombée : 120 %, 2,0 s ; 04 Grand plateau : 132 %, 2,0 s.** Les pourcentages 94 % / 100 % / 95 % / 38 % affichés sur les captures correspondent à des **états momentanés de l’animation** et ne sont pas des consignes d’intensité initiale ; les commandes atteignent donc 100 % de déploiement.

**E89 créée** : `e89-quatre-commandes-membrane.html` — https://km48krg88d-ops.github.io/Deck-laboratoire/e89-quatre-commandes-membrane.html?v=1 . Les quatre profils extraits de `COMMANDES-001.glb` (représentés sous forme de 74 mesures radiales chacun comme dans E88) sont intégrés dans **une seule surface WebGL 3D continue**, en disposition 2×2 et caméra orthographique en plan. Maillage de 62 001 sommets et 123 008 triangles avec attributs par sommet `aXY`, `aHeights` (vec4), `aSlopes` (vec4) ; le vertex shader somme les déplacements Z et les gradients des quatre commandes, chacun piloté par son uniforme de progression, avec un front d’émergence propre à sa forme. **Pas quatre canvases, ni quatre masques 2D.** Les deux éclairages spatiaux matin (bleu-gris `#9CAEB1`, orange `#F2AA76`) restent fixes et partagés. Les commandes démarrent à 0 % et s’animent vers 100 % avec un léger décalage ; un toucher sur une commande dans la scène ou son bouton individuel fait l’animation inverse et réciproquement ; boutons « Tout allumer », « Tout éteindre », « Rejouer les quatre apparitions » ; interrupteurs de chaque source. Les proportions et durées issues des captures sont codées en presets dans E89. Le rendu est Retina ×3, sans modification d’E87 et des gestes de `index.html`.

**E88 conservée et actualisée** : `e88-atelier-commandes-3d.html` utilise désormais ces quatre valeurs comme **valeurs par défaut** (mais respecte les préférences `localStorage` du navigateur déjà réglées par l’utilisateur). L’application principale `index.html` possède des accès E87 v6, E88 v2, E89 v1. Vérification : syntaxe JavaScript ; WebGL simulé sur 390×844 DPR3 : 2 shaders, 1 seul maillage, 123 008 triangles, indices max 62 000 (WebGL1 sûr), 4 animations atteignent 100 %, extinction individuelle du 03 sans changer les autres, extinction/allumage global à 0/100 %, relecture à 0 %, colorimétrie et éclairage inchangés ; **vrai rendu Safari/iPhone et performance restent à confirmer par l’utilisateur.**
