# DECK — Suivi des versions

**Suivi vivant, décisions validées et procédure de reprise : [DECK_ETAT.md](./DECK_ETAT.md).**

## Historique initial

- V10 : laboratoire sphère et cube interactifs.
- V11A : expérimentation Retina et douceur des points.
- V11B : réduction d’un tiers de la plage maximale du Grain, à vérifier sur iPhone.
- V17 : Opale (voir [README.md](./README.md), historique).

Ce fichier avait initialement servi à vérifier que les modifications directes depuis ChatGPT étaient autorisées.

## Laboratoire expérimental E — fichiers conservés

| Version | Fichier | Repère |
| --- | --- | --- |
| E63 | [e63-preview.html](./e63-preview.html) | Prévisualisation |
| E65 | [e65-reference.html](./e65-reference.html) | Référence |
| E66 | [e66-state-test.html](./e66-state-test.html) | État |
| E67 | [e67-groups.html](./e67-groups.html) | Groupes |
| E68 | [e68-gestures.html](./e68-gestures.html) | Gestes |
| E69 | [e69-pinch-circle.html](./e69-pinch-circle.html) | Pincement / cercle |
| E70 | [e70-angles.html](./e70-angles.html) | Angles |
| E71 | [e71-controle-angles.html](./e71-controle-angles.html) | Contrôles d'angles |
| E72 | [e72-angles-gestes.html](./e72-angles-gestes.html) | Angles / gestes |
| E73 | [e73-relief-angle.html](./e73-relief-angle.html) | Relief d'angle |
| E74 | [e74-angle-2-lignes.html](./e74-angle-2-lignes.html) | Angle en deux lignes indépendantes ; 29 tests logiques annoncés |
| E75 | [e75-angle-pilote.html](./e75-angle-pilote.html) | Angle pilote ; raccord et longueur réglables ; 40 tests logiques annoncés ; essai iPhone en attente |
| E76 | [e76-raccord-orthogonal.html](./e76-raccord-orthogonal.html) | Raccord orthogonal, différence visuelle non constatée sur iPhone ; sujet mis de côté |
| E77 | [e77-effacement-progressif.html](./e77-effacement-progressif.html) | Tracés invalides dissipés ; onde d'extinction radiale, abandonnée au profit d'un fondu discret |
| E78 | [e78-extinction-naturelle.html](./e78-extinction-naturelle.html) | Fondu sans onde ; rendu encore perçu comme une transition numérique |
| E79 | [e79-membrane-lignes.html](./e79-membrane-lignes.html) | Première membrane physique sur les deux barres, convaincante mais trop rapide selon le retour utilisateur |
| E80 | [e80-membrane-ralentie.html](./e80-membrane-ralentie.html) | Membrane 2,6 s ; capture iPhone montrant des barres striées et des triangles lumineux gênants |
| E81 | [e81-apparence-restauree.html](./e81-apparence-restauree.html) | Apparence allumée restaurée depuis E78 ; relâchement de membrane sur les lignes |
| E82 | [e82-gestes-relief.html](./e82-gestes-relief.html) | Gestes stricts, contour du donut suréchantillonné ; captures iPhone : relief circulaire encore trop franc, premier côté du chevron non prévisualisé |
| E83 | [e83-masques-souples-chevron.html](./e83-masques-souples-chevron.html) | Disque et donut fortement adoucis ; retour utilisateur : adoucissement trop important, souhaite un réglage continu |
| E84 | [e84-douceur-contour.html](./e84-douceur-contour.html) | Douceur du contour réglable, jugée comme un flou ; version de retour |

| **E85** | **[e85-microrelief-3d.html](./e85-microrelief-3d.html)** | **Champ de hauteur 3D disque/donut, normales et éclairage de pente ; hauteur et largeur du raccord réglables ; syntaxe JS vérifiée, test iPhone en attente** |

Les repères E63–E73 suivent les noms des fichiers conservés ; leurs autres caractéristiques ne sont pas récapitulées ici.

## Publication versus expérimentations

- `index.html` : application principale distincte (titre actuel E63.6) ; ne pas écraser sans instruction.
- Les fichiers `eXX-*.html` : expérimentations autonomes et points de retour.
- **Dernière version de travail au 16/11/2026 : E85**, mais cela ne signifie pas qu'elle soit validée sur iPhone ni qu'elle ait remplacé l'application principale.

Chaque nouvelle version importante doit être ajoutée ici **et** documentée dans [DECK_ETAT.md](./DECK_ETAT.md).

**Correctif E85 du 16/11 :** restauration de la prévisualisation et du rendu animé E84 pour disque et donut, masque diurne E84 récupéré, micro-relief indépendant plafonné à 320² pixels, sans modification des gestes. La vérification visuelle en Safari reste en attente.

**E86 — 17/11/2026 · Commande 001 réelle** — Première surface WebGL interactive reconstruite à partir des deux maillages rouge/vert du fichier `COMMANDE-001.glb`. Hauteur du bouton + résistance/rayon du raccord vert, vue 3D orientable et matériau blanc/codage source. Essai autonome : `e86-commande-modelee.html`. E84/E85 et index préservés.

**E86 — Vue en plan ombrée (17/11)** : projection orthographique par défaut avec hauteur 150 %, résistance 50 % et matière unifiée ombrée ; boutons Plan/3-4 et repères rouge/vert, sans modifier la géométrie source. [Tester E86](https://km48krg88d-ops.github.io/Deck-laboratoire/e86-commande-modelee.html?v=2).

**E86 — Lissage & intégration Bis 3D (17/11/2026).** Le profil rouge et le raccord vert de `e86-commande-modelee.html` ont été convertis à une courbe cubique monotone C1 et des normales à gradient filtré pour atténuer les anneaux concentriques. **Application générale `index.html` explicitement modifiée à la demande de l’utilisateur** : variante optionnelle **Lampe ID6 · Bis 3D** en vue de dessus avec vraie surface WebGL, paramètres hauteur 150 % / résistance 50 %, bouton d’affichage, stockage indépendant ; version originale activée par défaut. Moteur : `deck-lamp-bis.js`. Sauvegarde : `index-e63-6-avant-lampe-bis.html`. La fonction de dessin et les autres lampes n’ont pas été modifiées. Essai iPhone à confirmer.

**Bis 3D dans l’application générale — 17/11/2026, ombres intégrées :** ID6, hauteur 180 %, résistance 100 %, fondu des ombres 70 % réglable ; ombrages translucides au lieu d’un disque opaque, préservation des fonds DECK par composition alpha. Migration des anciens 150/50, conservation des gestes et de la variante originale. Lien : https://km48krg88d-ops.github.io/Deck-laboratoire/?v=bis2 .

- **17/11/2026 — correction optique Bis 3D, jonction nette / pente en dégradé** : retour utilisateur après `bis2` : la totalité du relief semblait floue, alors que `bis1` était plus nette à la jonction **courbe verte / courbe rouge** et que la zone extérieure devait être simplement un dégradé. Correction appliquée à l’application générale : suppression du `filter:blur(1.5px)` sur `#deckBisLayer`. Dans le shader du module `deck-lamp-bis.js`, calcul hybride : rendu directionnel **d’origine bis1** restauré dans une bande radiale resserrée centrée sur la vraie jonction r=0,829 (transition douce de ±0,018 à ±0,065 unité), lumière extérieure seulement en dégradé translucide déclinant de r=0,88 à r=1,54, pour laisser passer les couleurs de la toile. Le curseur « Fondu des ombres » continue d’ajuster la pente extérieure mais pas la netteté de la jonction. Source externe mise en cache-bust `deck-lamp-bis.js?v=3`, URL d’essai https://km48krg88d-ops.github.io/Deck-laboratoire/?v=bis3 ; hauteur 180 %, résistance 100 % préservées ; aucune modification des gestes, de la géométrie source ou des autres lampes. Contrôles : scripts JS valides, GLSL capturé lors de la simulation WebGL, drawElements exécuté, r=0,829 conserve 100 % d’ombrage net, r≥0,95 ne porte plus cet ombrage local, dégradé extérieur décroissant jusqu’à ~8 % au rayon r=1,425. Rendu Safari/iPhone à confirmer.

**Bis 3D v5 (17/11/2026) :** supprime le faux anneau artificiel constaté sur IMG_4528 ; l'éclairage suit la pente continue avec alpha et couleurs adaptées au fond de l'application, sans flou et sans remplissage des zones plates. Hauteur 180 %, résistance 100 %, fondu 70 % ; module `deck-lamp-bis.js?v=5`. [Tester](https://km48krg88d-ops.github.io/Deck-laboratoire/?v=bis5).

**E87 — 17/11/2026 · Membrane 3D, véritable lumière spatiale.** Première page web indépendante `e87-membrane-3d.html` : surface 3D triangulée continue du fond et de la commande 001, en plan ; source géométrique GLB rouge/vert (hauteur 180 %, résistance 100 %), intensité de commande 100 % ; deux lumières 3D couleurs du matin `#9CAEB1` et `#F2AA76`, animation d’intensité seulement, pas de masques. Accès depuis `index.html` via « E87 · Membrane 3D ». [Tester E87](https://km48krg88d-ops.github.io/Deck-laboratoire/e87-membrane-3d.html?v=1). Rendu iPhone en attente de validation.

- **17/11/2026 — E87 v2, anti-pixellisation à partir de la capture iPhone IMG_4529.jpeg.** Retour utilisateur : résultat de membrane/lumières validé visuellement, mais les raccords de la commande sont légèrement facettés/pixelisés. Correctif ciblé dans `e87-membrane-3d.html` : le maillage rectangulaire **unique** est maintenant densifié à 249×249 sommets (= 62 001 sommets, 123 008 triangles, indices 16 bits max 62 000), avec redistribution non uniforme de ses lignes/colonnes autour du bouton : pas local ≈1,54 pixel CSS (au lieu d’environ 2,65×3,38), les zones planes du fond restent moins densément tessellées. Canvas WebGL dessiné au DPR réel jusqu’à ×3 (ancien plafond ×2). La dérivée des normales est plus finement échantillonnée ±0,006 unité (contre ±0,008), pas de filtre de flou. **Couleurs du matin, deux sources lumineuses spatiales, interpolation du GLB, géométrie fixe, intensité 100 % et gestes de l’app sont inchangés.** L’entrée E87 de `index.html` pointe vers `?v=2` pour contourner le cache, URL directe https://km48krg88d-ops.github.io/Deck-laboratoire/e87-membrane-3d.html?v=2 . Test simulé WebGL pour 390×844 DPR×3 : canvas 1170×2532, 62 001 sommets, 123 008 triangles, maximum d’indice 62 000 (WebGL 1 OK), un rendu exécuté sans erreur ; **résultat réel sur Safari à confirmer**, performance non mesurée.
