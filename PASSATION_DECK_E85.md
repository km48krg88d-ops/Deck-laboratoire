# PASSATION — DECK III / MOBILIER
## Reprise dans une nouvelle conversation — 16 novembre 2026

**Instruction de départ au prochain assistant :** reprendre le projet DECK depuis cette passation, le document DECK_ETAT.md et le code réel de la dernière expérience E84. Préparer ensuite, à la demande de l'utilisateur, une **nouvelle expérience web E85** consacrée au **relief réellement tridimensionnel** du disque et du donut, en conservant E84 et l'application principale intacts. Ne pas redemander ce qui est décrit ici.

### 1. Références et accès

- Dépôt GitHub connecté : https://github.com/km48krg88d-ops/Deck-laboratoire ; branche principale : main.
- **Source de vérité générale :** [DECK_ETAT.md](./DECK_ETAT.md) (décisions, objectifs, historique, règles obligatoires).
- **Dernière version de test : E84** — [e84-douceur-contour.html](./e84-douceur-contour.html). SHA GitHub du fichier vérifié à la rédaction : **2bf2b9b370f7bf600fca78e13619bc4b0938b20e**.
- URL web d'essai : https://km48krg88d-ops.github.io/Deck-laboratoire/e84-douceur-contour.html . **L'accès effectif sur iPhone doit être confirmé ; GitHub ne prouve pas la publication Pages.**
- Version de retour : [e83-masques-souples-chevron.html](./e83-masques-souples-chevron.html). Versions antérieures E82, E81… conservées.
- Index des versions : [DECK_VERSIONS.md](./DECK_VERSIONS.md). Entrée générale : [README.md](./README.md).
- **Application principale distincte :** [index.html](./index.html), titre E63.6, SHA vérifié : **15effdd0fb36a03b0883f247ce3239fd75eda297**. **Ne jamais écraser ou promouvoir E85 vers index.html sans validation explicite.**
- GitHub dispose dans cette conversation d'un connecteur opérationnel avec lecture et écriture. Vérifier l'accès dans la nouvelle conversation avant d'affirmer qu'il manque ; ne pas demander inutilement de nouvelles autorisations.

### 2. But et intention esthétique

DECK est une interface web tactile utilisée sur iPhone pour des lampes, puis ventilateur et musique. L'expérience active teste un langage de **formes lumineuses abstraites** sur une toile sombre : elles doivent sembler **faire partie d'une membrane**, et non être des pictogrammes ni des objets posés ou des images à opacité décroissante.

**Retour décisif le 16 novembre 2026 :** la seule modification du flou ou de la « douceur des contours » n'est **pas** la solution. L'utilisateur a fourni une **photo de panneaux blancs modulaires** avec cylindres circulaires de différentes hauteurs, des raccords arrondis à la surface, de vrais reflets et ombres de volume, ainsi qu'un renfoncement circulaire. Il veut **le même principe de relief 3D**, mais **moins haut** : pour la plaque aux boutons, **se référer uniquement aux trois plus petites hauteurs**, pas aux gros plots saillants. La référence visuelle a été envoyée dans la conversation précédente : **demander à l'utilisateur de joindre à nouveau cette image si elle n'est pas visible dans le nouveau chat**, mais cette description suffit pour commencer.

**Point important :** le but n'est pas d'ajouter un flou esthétique, une image 3D pré-rendue ou une lumière artificiellement collée. Il faut un **vrai profil de hauteur (height field)** et un éclairage calculé depuis sa **normale locale**. Garder les lumières et l'ombre subtiles et une géométrie fidèle au disque et au donut. Le fond bleu nuit existant ne doit pas être remplacé par du blanc de référence.

### 3. Prochaine étape : E85, prototype web de micro-relief 3D

**Créé le 16 novembre 2026 :** E85 a été ajoutée comme fichier autonome [e85-microrelief-3d.html](./e85-microrelief-3d.html), sans modification d’E84 ni de `index.html`. Les contrôles hauteur et raccord agissent sur le champ de hauteur et ses normales. La syntaxe JS a été vérifiée ; la fluidité et l’apparence sur iPhone restent à valider.

**Cahier des charges initial (gardé pour comparaison) :**

1. Créer un **nouveau fichier autonome E85** à partir du contenu réel de E84, avec un nom explicite, par exemple e85-microrelief-3d.html. Ne modifier ni E84, ni E83, ni index.html.
2. Limiter d'abord les changements au **disque plein (lampe logique 6)** et au **donut/anneau (lampe logique 4)**. Conserver la barre verticale, l'horizontale, le chevron, les angles et tous les gestes de E84.
3. Construire un **champ de hauteur signé h(x,y)** :
   - disque : plateau circulaire de **très faible élévation** par rapport à la toile, avec une **rampe de raccord arrondie** ;
   - donut : **couronne de faible élévation**, avec deux transitions arrondies (vers le centre et l'extérieur), sans inventer de disque plein au centre ;
   - viser la famille **des trois plus faibles hauteurs** observées sur l'image, et non de grands cylindres. Ne pas traiter les dimensions physiques comme des pixels obligatoires : les hauteurs visuelles exactes sont à calibrer dans l'interface.
4. **Calculer les normales** à partir des gradients de hauteur (dérivées analytiques ou différences finies). Utiliser une **direction d'éclairage stable**, des reflets/ombres découlant des pentes et une pénombre ambiante modérée. La lumière doit se déplacer quand le relief ou le raccord changent, plutôt que de modifier seulement la transparence d'un calque.
5. Exposer **deux contrôles indépendants, immédiatement visibles sur iPhone** :
   - **Hauteur du relief :** de presque plat à bas-relief discret, idéalement avec repères des **trois petites hauteurs** à comparer ;
   - **Largeur du raccord / du pli :** bord relativement serré à rampe arrondie plus étalée.
   Ces contrôles doivent changer la vraie géométrie du relief et les normales. Préserver une option de retour au réglage initial ; ne pas ajouter un troisième réglage sans nécessité.
6. Au cours de cette expérimentation, **ne pas changer la grammaire gestuelle, les affectations de groupe, la sauvegarde E84 ni l'animation des lignes**. Toute nouvelle clé locale doit être propre à E85 et peut relire E84 une seule fois si nécessaire.
7. Optimiser le rendu pour Safari/iPhone : champ limité à la zone utile de la forme, gestion de DPR, caches invalidés seulement sur les réglages concernés, effets CPU/GPU cohérents. Ne pas confondre forte résolution avec correction d'une mauvaise pente de relief.
8. Vérifier avant livraison la géométrie, la syntaxe JavaScript, les shaders si testables, les dégradés sans cassures, la superposition des lampes, l'absence de régression des gestes et les performances possibles ; indiquer explicitement les tests **non exécutés sur iPhone**.
9. Publier **un lien GitHub Pages vers E85**, puis mettre à jour DECK_ETAT.md, DECK_VERSIONS.md et README.md. Attendre le retour esthétique avant toute intégration définitive.

**Critère de réussite visuel :** lorsque la hauteur augmente à largeur de raccord identique, le volume devient perceptible **par les ombres et les reflets**. Lorsque la largeur du raccord augmente à hauteur identique, le **pli se répartit sur une surface plus large**, pas seulement un contour qui se floute. Une hauteur quasi nulle doit revenir à la toile plane.

### 4. Historique des essais récents et pièges à éviter

- **E76 :** correction du raccord de l'angle orthogonal jugée imperceptible par l'utilisateur ; sujet mis de côté.
- **E77 :** traces fantômes des gestes invalides et onde de disparition ; ces effets ont été rejetés.
- **E78 :** fondu progressif perçu comme une « disparition PowerPoint ».
- **E79 :** essai d'un retrait sous membrane sur les deux lignes, piste jugée intéressante mais trop rapide.
- **E80 :** ralentissement à **2,6 s**, curseur **1,2 à 4 s** ; défaut visuel spectaculaire : ligne métallique striée et grands triangles lumineux d'un chevron. **Ne pas revenir au dessin par petites bandes de dégradés.**
- **E81 :** retour à l'apparence E78 pour les lampes allumées, tout en conservant le relâchement des lignes à l'extinction.
- **E82 :** suppression du tracé fantôme des gestes non reconnus, reconnaissance des angles plus stricte, contour du donut et suréchantillonnage retravaillés.
- **E83 :** masques du disque et du donut adoucis et **prévisualisation du premier côté du chevron restaurée**.
- **E84 :** curseur de **« Douceur du contour » de 0 à 100 %**, 35 % initial, agissant en direct sur la largeur du raccord lumineux du disque/donut (calcul CPU et GPU) et sur leurs contours. **Retour utilisateur : cela ressemble encore à un simple flou, et le besoin est désormais un vrai modelé 3D.**
- **E85 :** créée depuis E84 ; expérimentation 3D non encore validée sur iPhone.

### 5. Neuf luminaires : décisions à ne pas réinventer

| ID | Pièce | Luminaire | Langage graphique visé |
| --- | --- | --- | --- |
| 0 | Séjour/haut | Bandeau LED cuisine | Ligne verticale |
| 1 | Chambre/bas | Tête de lit | Ligne horizontale |
| 2 | Chambre/bas | Lampadaire | Cercle ouvert à droite |
| 3 | Séjour/haut | Applique HAY | Angle horizontal |
| 4 | Séjour/haut | Suspension salle à manger | Donut / anneau |
| 5 | Chambre/bas | Applique supplémentaire | Angle vers le bas / chevron |
| 6 | Chambre/bas | Lampe fenêtre | Disque plein |
| 7 | Chambre/bas | Philips Hue Iris | Arc de cercle |
| 8 | Séjour/haut | Lampe étoile | **Symbole et geste volontairement non définis : ne pas inventer** |

Groupes : **haut/séjour [0,3,4,8]**, **bas/chambre [1,2,5,6,7]**. Attention : ce tableau décrit la **cible physique/conceptuelle** ; les 9 formes ne sont **pas** toutes pleinement dessinables dans E84. Dans les versions récentes, les emplacements 7 et 8 sont encore associés à d'anciens arcs de groupes désactivés au dessin ; ne pas les interpréter comme une implémentation achevée de l'Iris et de l'étoile.

### 6. Gestes validés à préserver

- Tap sur une lampe : **sélection**. Tap sur le fond : **désélection**, sans extinction.
- Double tap sur une lampe allumée : **extinction individuelle** puis désélection.
- Double tap dans le vide : **création du donut uniquement s'il est éteint**.
- Pincement de deux doigts sur une lampe sélectionnée : **régler son intensité**, sans changer sa géométrie.
- Écartement principalement vertical sans sélection : **disque plein**.
- Deux doigts, **un doigt ancre immobile**, l'autre mobile : moitié haute ou basse pour choisir le groupe ; vers **haut = ON** du groupe, vers **bas = OFF**. Vers **gauche = tout ON** ; vers **droite = tout OFF** dans le code actuel. La direction droite **non attribuée** évoquée dans les décisions anciennes concerne une autre famille de commandes, **pas une autorisation de réassigner la commande générale droite**.
- Un **tracé non reconnu ne laisse aucune trace ni empreinte**.
- **Premier côté du chevron visible pendant le dessin**, sans résidu si le tracé échoue.
- Angle libre mais proche de l'orthogonale : environ **65° à 115°**, avec branches finales d'au moins **34 px** (somme d'au moins 78 px) ; petit crochet sur une ligne ≠ angle.
- Activation d'un groupe **indépendante** de celle de l'autre.
- Le maintien d'une lampe ne modifie plus son intensité.

### 7. Repères techniques actuels dans E84

- Fichier HTML/CSS/JavaScript autonome volumineux ; code à **lire réellement depuis GitHub**, ne pas déduire sa structure de mémoire.
- Masque radial CPU : fonction **raisedDiscSample** ; masque GPU WebGL : shader **disc** dans **makeRaisedMaskGPU**, rendu par **gpuRaisedMask** ; calcul/masque dans **drawRaisedBackground**. E84 possède l'uniforme **discSoftness** et la variable **drawnLook.circularSoftnessPct** ; ils règlent actuellement la *largeur de lissage*, pas une vraie hauteur 3D.
- Tracé en couches et composition : **renderDrawnLights** ; dessin du donut **drawSpotLamp**, du disque **drawOrbLamp**, bord **drawUnifiedEdge**. Il peut exister un chemin CPU de secours et un travailleur ; conserver leur cohérence avec le shader.
- Animation des lignes : **deckLineRemaining**, **deckLineReleaseLayer** ; durée par défaut 2,6 s ; ne pas modifier dans E85 sans demande.
- Sauvegardes locales : propres aux essais successifs, et **distinctes du contenu du dépôt**. Des réglages de l'iPhone peuvent rester dans localStorage mais ne sont **pas** récupérables en lisant GitHub. Le prototype dispose d'une fonction d'export de réglages « Copier tous les réglages ».
- **Performance :** le rendu récent utilise un suréchantillonnage ciblé du donut et des calques en extinction ; surveiller les FPS et la consommation mémoire lors du nouveau calcul des normales. Ne pas déclarer un résultat fluide sans mesure sur iPhone.

### 8. Protocole obligatoire de travail pour la nouvelle conversation

1. **Lire DECK_ETAT.md, ce fichier et le code E84 avant de modifier quoi que ce soit.**
2. **Développer E85 comme nouveau fichier web indépendant** ; ne pas écraser E84 ni index.html.
3. **Vérifier avant envoi** : source GitHub enregistrée, syntaxe JS/HTML, uniformes/shader, cohérence des caches, régressions des formes/gestes, tests numériques ciblés, absence de modification de production.
4. **Distinguer** tests de logique sur ordinateur et **validation réelle Safari/iPhone** (rendu, tactile, FPS).
5. Livrer **l'URL de test**, l'explication concise des modifications et les contrôles **réellement exécutés**.
6. À chaque version substantielle, **mettre à jour DECK_ETAT.md, DECK_VERSIONS.md, README.md et cette passation** pour permettre le relais suivant.
7. **Ne promouvoir vers l'application principale qu'après accord explicite de l'utilisateur** et sauvegarde du point de retour.
8. Travailler **par itération du même système**, sans réintroduire des commandes ou esthétiques abandonnées.

### 9. Phrase de reprise à copier dans un nouveau chat

> Reprends DECK III depuis le dépôt GitHub km48krg88d-ops/Deck-laboratoire. Lis d'abord PASSATION_DECK_E85.md, DECK_ETAT.md et le code e84-douceur-contour.html. Nous devons créer E85 comme une nouvelle version web expérimentale : un véritable micro-relief 3D du disque et du donut, inspiré de la photo de panneaux blancs avec les trois plus petits plots. Deux paramètres de test : hauteur et largeur du raccord. Normales et ombres issues du volume, sans effet de flou. Préserve les gestes, E84 et index.html ; vérifie avant de publier et actualise les documents de suivi.

---
**Statut actuel :** E85 créée, syntaxe JavaScript vérifiée, aucune validation iPhone de ce nouveau relief. Essai : https://km48krg88d-ops.github.io/Deck-laboratoire/e85-microrelief-3d.html Les décisions antérieures qui ne sont pas reprises ici restent détaillées dans DECK_ETAT.md.

### Correctif après retour iPhone du 16/11/2026

E85 a d’abord présenté trois régressions : objets invisibles pendant le geste, animations absentes, donut apparemment inopérant. Les fonctions E84 `drawOrbLamp` et `drawSpotLamp`, supprimées du chemin de rendu E85, ont été restaurées ; le rendu d’origine pour le fond alternatif a lui aussi été restauré. Le micro-relief devient une couche complémentaire protégée contre les exceptions, ignorée pour les brouillons en cours de tracé afin de ne pas dégrader leur prévisualisation ; image raster 3D bornée à 320×320. Les fonctions de gestes et de dessin disque/donut ont été comparées à E84 : identiques ; syntaxe JS valide. Il reste à confirmer visuellement et tactilement sur iPhone la correction et les FPS. Lien : https://km48krg88d-ops.github.io/Deck-laboratoire/e85-microrelief-3d.html?v=4 .

### Correctif volet 3D du 16/11/2026

Après rétablissement des animations, l’utilisateur constate que « 3D · Réglages » ne s’ouvre pas. Le bouton piloté par JavaScript est remplacé dans E85 par un élément natif HTML `<details>`/`<summary>`, fermé initialement et ouvrable sans écouteur de clic. Le panneau ne couvre que l'entête quand il est fermé ; les deux curseurs restent opérationnels. Le JavaScript a été vérifié syntaxiquement, test tactile réel non encore confirmé. URL d'essai : https://km48krg88d-ops.github.io/Deck-laboratoire/e85-microrelief-3d.html?v=5 .

### Correctif visibilité relief — 17 novembre 2026

Retour utilisateur : « Rien ne se passe quand je modifie les paramètres ». Le rendu était dessiné sous la lumière vive d’E84 : sur fond sombre, le relief pouvait être imperceptible ; l’amplitude du curseur de raccord du donut était limitée artificiellement à ~10 px par `radius*.19`. Correctifs E85 : couche du champ normal dessinée **après** le rendu lumineux, pour préserver le modelé clair/obscur ; intensité du relief augmentée sans changer sa formule de profil ; raccord utilisable de 2 à 22 px à rayon nominal (52 px). À 0 en hauteur, aucune ombre 3D ; à 3.2, pente plus marquée ; raccord 2 = bord abrupt, 22 = pli large. Cela ne change pas les autres formes, seulement disque ID6 et donut ID4. Le comportement réel sur Safari/iPhone doit être vérifié. Lien : https://km48krg88d-ops.github.io/Deck-laboratoire/e85-microrelief-3d.html?v=6 .

### Mode d’isolation du rendu 2D — 17 novembre 2026

L’utilisateur ne percevait toujours aucun changement aux curseurs de hauteur/raccord. Il a demandé un réglage désactivant le rendu 2D. E85 possède désormais le **checkbox « Rendu 2D »**, coché par défaut et sauvegardé dans `deck-e85-relief-v1`. Décoché : fond bleu nuit uni, aucune lumière, contour, masque, sphère, ou animation visuelle E84 ; on ne rend que les normales de relief générées par E85, pour le disque ID6 et donut ID4, y compris leurs brouillons pendant les gestes. Les autres formes ne s’affichent plus mais restent mémorisées ; leur reconnaissance continue. Le retour en mode 2D affiche de nouveau tous les éléments d’E84. Réinitialiser réactive 2D et remet hauteur 1.6 / raccord 9. Limitation importante : ce relief est un **champ de hauteur avec normales et éclairage, rasterisé en Canvas2D**, pas une géométrie 3D WebGL vue en perspective. On isole le matériau volumétrique de l’ancienne interface pour diagnostiquer sa visibilité. Vérification syntaxique réussie ; rendu Safari à confirmer. Lien : https://km48krg88d-ops.github.io/Deck-laboratoire/e85-microrelief-3d.html?v=7 .

### Éclairage directionnel coloré — 17 novembre 2026

- **E85, 17/11/2026 — diagnostic éclairage coloré directionnel :** l’utilisateur ne percevait qu’un rendu blanc. Le champ de hauteur ID6 (disque) et ID4 (donut) reçoit maintenant une source ambrée dirigée (azimut 225° par défaut) et une contre-ombre bleue opposée. Calcul du signe d’éclairement à partir des vraies normales locales (différences finies du champ de hauteur) ; l’intérieur/extérieur du donut réagissent en sens inverse, test numérique confirmé. Curseurs « Direction de la lumière » (0–360°) et « Puissance lumineuse » (0–2,5) sauvegardés dans les préférences E85. Bouton « Afficher deux reliefs test » : bascule en isolation 2D et affiche temporairement un disque + un donut sans enregistrer ni déplacer les lampes. Les fonctions de geste tap/double tap, disque, donut, pincement et dessin comparées à E84 sont identiques. Syntaxe JS contrôlée ; validation Safari/iPhone à effectuer. Version E84 et `index.html` préservés.

Test conseillé : E85 avec `?v=8`, menu 3D → bouton « Afficher deux reliefs test » → hauteur 3.2 et raccord 5 → tourner l’azimut 0–360° ; le liseré ambré doit changer de côté tandis que le versant opposé devient bleu. Hauteur 0 doit faire disparaître la variation géométrique. La source est un éclairage calculé sur des normales 3D mais rastérisé en Canvas2D, pas une scène WebGL avec perspective.

### Calque 3D séparé — 17 novembre 2026

L'utilisateur signale à nouveau que disque et donut sont invisibles même en éclairage coloré. Correctif : E85 utilise désormais un **second canvas transparent indépendant**, au-dessus du canvas existant et totalement transparent aux événements tactiles. La couche 3D n’est donc plus affectée par les effacements, masques ou compositions `screen` d’E84. Elle est rafraîchie immédiatement au mouvement des curseurs, en plus de la boucle de dessin. La taille haute définition est synchronisée avec `resize()`. Dans « 3D · Réglages », ligne de diagnostic lisible : résolution du calque, nombre de reliefs dessinés par image ou message d’erreur JS ; tout échec du rendu testé doit ainsi être observable. Test numérique exécuté dans V8 avec pseudo-canvas : disque = 17 343 pixels non transparents, donut = 15 293 pixels, composante chaude + froide présente pour les deux, deux appels à `drawImage`, aucune exception. Vérifier en Safari iPhone : https://km48krg88d-ops.github.io/Deck-laboratoire/e85-microrelief-3d.html?v=9 ; ouvrir menu, afficher deux reliefs test, hauteur 3.2, raccord 5, observer le message « 2 relief(s) dessinés ». Si 0 ou erreur, rapporter exactement le texte de diagnostic. E84 et l’index ne doivent pas être modifiés.

### Test isolé « premier plan » — 17 novembre 2026

À la question « la 3D n’est-elle pas au premier plan ? », inspection CSS d’E85 : `#stage` est au niveau normal, `#e85ReliefLayer` à `z-index:40`, panneaux E84 à 30/31, panneau E85 à 100001. Donc le calque 3D se trouve déjà au-dessus du dessin original ; cette hypothèse seule n’explique pas l’absence de formes. Un test minimal indépendant a été ajouté : `e85-test-premier-plan.html` (commit d59d137a0d85a9b0efeebe56e8a57645f0c8b336), sans E84, avec un canvas 2D transparent au z-index 2147483000, deux reliefs prédessinés disque/donut (normales du champ de hauteur), lumière ambrée et bleue, curseurs hauteur/raccord/direction, compteur de pixels, messages d’erreur visibles et un **témoin HTML jaune** indépendant du canvas. URL : https://km48krg88d-ops.github.io/Deck-laboratoire/e85-test-premier-plan.html . Interprétation : témoin jaune visible et reliefs invisibles = canvas/calcul ou rendu navigateur ; rien de visible = problème d’URL ou chargement ; deux reliefs visibles = problème propre à l’intégration E85/état des lampes. La création GitHub et la syntaxe JS ont été vérifiées, pas le chargement public Pages ni Safari réel. Ce fichier est un **test diagnostique**, pas une variante fonctionnelle du DECK, et ne modifie ni E84, ni E85, ni `index.html`.

### Prolongement E86 : géométrie depuis le GLB du 17/11/2026

L’utilisateur fournit `COMMANDE-001.glb` (37 Mo, 436 maillages provenant d’un export SketchUp) : la **surface rouge** est la pente principale commandée par la hauteur horizontale, la **verte** le raccord qui traduit la résistance de la membrane (souple = arrondi petit ; rigide = plus large). Inspection de l’export : maillage **433** = matière verte / 2 856 sommets (profil radial r=.768→.829 et z=.6728→.5961) ; maillage **434** = matière rouge / 2 876 sommets (r=.829→1.425 et z=.5961→0). E86 reconstruit ces 26 points de coupe et génère à chaque mouvement un maillage WebGL réel (28 336 sommets, 56 000 triangles) : hauteur échelle tout le profil z ; résistance redimensionne la largeur radiale du raccord vert .022→.20 ; couleur affichable/masquable ; caméra rotative au toucher et éclairage directionnel. Il s’agit d’une **première approximation géométrique** de la déformation : la continuité de position est conservée, mais la tangence/physique à raffiner selon le retour visuel. Source : `e86-commande-modelee.html`, test https://km48krg88d-ops.github.io/Deck-laboratoire/e86-commande-modelee.html . L’application DECK ni E85 n’ont été modifiées. Vérification syntaxique JS et bornes géométriques (sommet .6728, jonction .5961, pied 0) ; Safari réel non testé. Les commandes suivantes pourront chacune avoir un profil source particulier tout en réutilisant le même moteur de membrane.

### E86 — Test en plan 150/50 (17/11/2026)

Après un essai d’image de rendu perspective non pertinent, demande explicite : **voir dans l’application web une vue en plan**, réglages **150 % de hauteur** et **50 % de résistance**. Mise à jour d’E86 sur GitHub, sans toucher à E84/E85/index : projection orthographique WebGL et caméra verticale (pitch π/2) par défaut, affichage matière gris perle, éclairage directionnel chaud/froid réagissant aux normales, sans repères rouge/vert sauf activation volontaire. Deux réglages sont initialisés à 150/50 et restent éditables. Boutons « Vue en plan / Vue 3/4 », « Repères rouge/vert », « 150/50 ». URL : https://km48krg88d-ops.github.io/Deck-laboratoire/e86-commande-modelee.html?v=2 . Syntaxe JavaScript contrôlée ; rendu sur iPhone à confirmer.
