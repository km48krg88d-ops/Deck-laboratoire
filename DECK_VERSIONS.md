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

- **17/11/2026 — E87 v3 : animation de 0 à 100 %** (demande utilisateur, suite à l’amélioration Retina de la membrane). Dans `e87-membrane-3d.html`, animation automatique **0→100 % à l’ouverture** sur **2,8 secondes** avec interpolation cubique douce (smoothstep). Même animation relançable par bouton `Rejouer 0 → 100 %`, affichage du pourcentage pendant la montée, arrêt sur 100 %. La géométrie et les normales ne sont jamais modifiées ni réuploadées pendant l’animation : seule l’intensité `uLevel` des deux lumières 3D varie. Le curseur ou le bouton marche/arrêt interrompent l’animation pour reprendre le contrôle manuel ; les interrupteurs individuels des sources restent fonctionnels. Page source v2 archivée dans `e87-membrane-3d-v2.html`, le bouton de l’application générale pointe vers `?v=3`. Test JavaScript et simulation WebGL effectués (pourcentages 0, 16, 50, 84, 100 aux temps 0, .7, 1.4, 2.1, 2.8 s ; relance jusqu’à 100 ; interruption slider) ; rendu iPhone/FPS non mesurés. URL https://km48krg88d-ops.github.io/Deck-laboratoire/e87-membrane-3d.html?v=3.

- **17/11/2026 — E87 v4 : CORRECTION FONDAMENTALE de l’animation 0–100 %.** L’utilisateur précise : le pourcentage n’est **pas l’intensité des lumières**, mais **l’apparition/disparition de la commande à travers la membrane**. Nouvelle animation E87 : membrane totalement plate à 0 % ; le volume du centre se soulève progressivement puis son raccord se déploie radialement jusqu’à retrouver **exactement la géométrie source à 100 %**. Vraie transformation 3D WebGL en vertex shader `uShape` : `z = z0 * rise * radialReveal` (lobe de soulèvement + front spatial se propageant), avec recalcul analytique de la normale du champ de hauteur dans le shader à chaque image. **Les deux éclairages 3D bleu-gris/orange restent à puissance constante** ; leurs ombres varient naturellement avec la géométrie. Courbe d’interpolation douce sur 3 s pour apparition, disparition inverse sur 2,2 s, démarrage automatique 0→100, bouton « Rejouer l’émergence 3D », marche/arrêt anime dans les deux sens, curseur 0–100 manipule immédiatement la **forme géométrique**. Maillage unique de 62 001 sommets, toujours un seul dessin, tampon statique envoyé à la carte graphique une seule fois (3 transferts initiaux), rendu Retina ×3. Contrôle par simulation WebGL : 0, 16, 50, 84, 100 % de géométrie à des intervalles réguliers ; extinction réversible ; le réglage manuel à 35 % marche ; lumières immuables ; au pourcentage 0 toute la géométrie est plane, au pourcentage 100 le profil original est restitué à tous les rayons utiles. Copie intégrale avant modification `e87-membrane-3d-v3.html` ; `index.html` reste l’application originale avec un simple lien E87 pointant vers la version 4. URL https://km48krg88d-ops.github.io/Deck-laboratoire/e87-membrane-3d.html?v=4 . Le vrai rendu/performance iPhone reste à confirmer.

- **17/11/2026 — E87 v5, plateau central RIGIDE/PLAN dès les premières images** : l’utilisateur précise que la surface centrale de la commande doit rester plane, comme dans sa modélisation rouge/verte. Dans la version v4, le front radial partait du centre r=0,26 et soulevait les points du plateau successivement, créant un dôme temporaire contraire au modèle. Correction ciblée du vertex shader `e87-membrane-3d.html` : le plateau de rayon 0→0,629 se déplace **entièrement et uniformément en Z** dès le premier instant, toujours horizontal. Le raccord vert r=0,629→0,829 garde ses proportions et suit le plateau de façon cohérente ; le front de déploiement commence **au-delà du raccord** à r=1,23 (largeur 0,36), et n’affecte progressivement que la pente extérieure rouge. La hauteur du plateau croît régulièrement pendant les 100 % du mouvement (`rise=ease(p)`) au lieu d’atteindre sa hauteur avant la fin ; les normales calculées en vertex shader continuent de suivre le véritable champ de hauteur. Au pourcentage 0 : membrane strictement plane ; à 100 : géométrie GLB exacte et ombrages des deux lumières fixes. Pas de changement aux gestes, au matériau ni aux sources colorées. Sauvegarde complète d’E87 v4 : `e87-membrane-3d-v4.html`; le lien d’E87 dans l’application générale pointe désormais vers `?v=5`. Test numérique depuis le profil exact extrait d’E87 : 0, 10, 25, 50, 75, 100 %, **aucun écart de hauteur entre les points du plateau**, raccord vert uniforme, retour exact à tous les rayons à 100 %. JavaScript valide ; rendu Safari à confirmer. URL https://km48krg88d-ops.github.io/Deck-laboratoire/e87-membrane-3d.html?v=5 .

## 17 novembre 2026 — E88 : quatre commandes du GLB, atelier individuel

Source fournie par l’utilisateur : **`COMMANDES-001.glb`**, 966 Ko, **16 maillages** répartis en quatre groupes distincts sur l’axe Z du modèle SketchUp. Le plan des commandes est X/Z et le relief selon Y. Les matériaux source sont `Matière` vert (#119B00), `Matière17` rouge (#FA0004), `Matière2` bleu (#0000F8). Groupes classés par leur centre Z croissant :

1. **01 · Trois reliefs concentriques** (centre Z ≈ 0,1198 m ; sept maillages ; max 7,66 mm au-dessus de la membrane)
2. **02 · Plateau + raccord court et pente extérieure** (centre Z ≈ 0,2206 m ; trois maillages, pièces verte+rouge+bleue ; plateau 14,57 mm) — **meilleure correspondance géométrique avec la première commande E87**, utilisée à titre de remplacement initial sans présumer l’identification définitive des lampes
3. **03 · Couronne bombée et centre plus bas** (centre Z ≈ 0,3269 m ; trois maillages ; centre 2,42 mm, sommet de la couronne 13,24 mm)
4. **04 · Large plateau central et raccord extérieur** (centre Z ≈ 0,4546 m ; deux maillages ; plateau 13,25 mm)

**Extraction réelle de la géométrie** : intersection barycentrique de rayons radiaux avec les triangles des 16 maillages (8 angles, pas d’origine 0,25 mm, réduction en profils de 0,5 mm, 74 échantillons par commande). Chaque famille est ensuite reconstruite en **surface 3D continue** au moyen d’un maillage WebGL de 62 001 sommets (123 008 triangles), interpolée en PCHIP pour conserver les courbes. Ce n’est **pas un import littéral du maillage GLB** dans le navigateur : les formes axisymétriques sont représentées par leurs profils radiaux mesurés. Cette distinction compte pour préserver les détails et pour affiner les modèles dans de futures itérations.

Page créée **`e88-atelier-commandes-3d.html`** : les quatre profils sélectionnables, caméra en plan, deux sources lumineuses spatiales fixes issues de la palette du matin, animation géométrique 0→100 %, curseur forme, bouton apparition/disparition, paramètres **hauteur du modèle** et **durée de montée** mémorisés indépendamment pour chacun (`deck-e88-model-configs-v1`). La commande 02 est active au démarrage. URL https://km48krg88d-ops.github.io/Deck-laboratoire/e88-atelier-commandes-3d.html?v=1 .

La **première commande E87** est également remplacée par le **modèle 02 du nouveau GLB** dans `e87-membrane-3d.html` v6 (proportions et profil sources) ; sa version v5 a été archivée `e87-membrane-3d-v5.html`. L’application principale `index.html` n’a reçu que deux liens, vers E87 v6 et E88 v1 ; aucun geste ni autre éclairage de la version générale n’a été touché. Liens E87 https://km48krg88d-ops.github.io/Deck-laboratoire/e87-membrane-3d.html?v=6 et E88 ci-dessus. Test : les deux sources JS sont syntaxiquement valides, E88 a été simulé sur WebGL (quatre formes différentes, changement, animation et mémorisation distincte), et le profil 02 est **identique point par point** dans E87 v6 et E88. Affichage et FPS sur iPhone non encore validés par l’utilisateur. La correspondance définitive des quatre modèles aux lampes reste **à décider ensemble**.
