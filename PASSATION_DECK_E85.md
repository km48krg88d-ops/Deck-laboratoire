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
