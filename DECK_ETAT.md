# DECK — ÉTAT DE RÉFÉRENCE

> **Source de vérité pour reprendre DECK après un changement de conversation.**  
> Mise à jour : **16 novembre 2026** · Projet MOBILIER / DECK III  
> **Dernière version expérimentale : E85** · Statut : **prototype à tester sur iPhone**, non considéré comme validé en situation réelle.

## 1. Où reprendre

**Passation autonome pour la prochaine conversation : [PASSATION_DECK_E85.md](./PASSATION_DECK_E85.md).** Dernière version effectivement créée : **E85**, essai 3D créé et non validé sur iPhone.

- **Code expérimental à poursuivre : [e85-microrelief-3d.html](./e85-microrelief-3d.html)** — E85, micro-relief 3D. Retour : [E84](./e84-douceur-contour.html).
- Point de retour immédiat : [e83-masques-souples-chevron.html](./e83-masques-souples-chevron.html) — E83 inchangée.
- Autre point de retour : [e82-gestes-relief.html](./e82-gestes-relief.html) — E82 inchangée.
- Autre point de retour : [e81-apparence-restauree.html](./e81-apparence-restauree.html) — E81 inchangée.
- Autre point de retour : [e80-membrane-ralentie.html](./e80-membrane-ralentie.html) — E80 inchangée.
- Autre point de retour : [e79-membrane-lignes.html](./e79-membrane-lignes.html) — E79 inchangée.
- Autre point de retour : [e78-extinction-naturelle.html](./e78-extinction-naturelle.html) — E78 inchangée.
- Version antérieure : [e77-effacement-progressif.html](./e77-effacement-progressif.html) — E77 inchangée.
- Autre point de retour : [e76-raccord-orthogonal.html](./e76-raccord-orthogonal.html) — E76 inchangée.
- Version antérieure : [e75-angle-pilote.html](./e75-angle-pilote.html) — E75, inchangée.
- Autre référence graphique : [e74-angle-2-lignes.html](./e74-angle-2-lignes.html) (E74, deux branches indépendantes).
- Autres jalons disponibles dans le dépôt : E63, E65 à E73, puis E74, E75, E76, E77, E78, E79, E80, E81, E82, E83 et E84.
- **Application principale indépendante : [index.html](./index.html)**, qui porte encore le titre E63.6. **Ne pas la remplacer par une expérience sans décision explicite.**
- La série E est un laboratoire : les fichiers HTML sont conservés individuellement pour pouvoir revenir à une version antérieure.
- [README.md](./README.md) = porte d'entrée ; [DECK_VERSIONS.md](./DECK_VERSIONS.md) = index historique ; **ce fichier** = état courant et décisions.

## 2. Vision / matière / principe

DECK est une interface tactile et gestuelle, expérimentée sur iPhone via une interface web, destinée à commander des lampes, le ventilateur et la musique. Les symboles lumineux sont des **abstractions du comportement de chaque luminaire**, pas des pictogrammes littéraux. Direction esthétique : toile bleu nuit, formes comme des **poinçonnements ou retraits de matière**, léger relief inversé, lumière diffuse et non objets posés dessus.

Les autres expérimentations (sphère à particules, cube/ventilateur, fente lumineuse, variations temporelles, etc.) restent des branches fonctionnelles du laboratoire ; **ne pas confondre leur historique avec le chantier actuel E84**, centré sur les lampes dessinées et leurs gestes. N'ajouter aucune commande mécanique sans nouvelle décision.

## 3. Les 9 lampes et leur répartition — décisions de conception

| ID physique | Pièce | Lampe | Langage graphique visé |
| --- | --- | --- | --- |
| 0 | Séjour (haut) | Bandeau LED cuisine | Barre verticale |
| 1 | Chambre (bas) | Tête de lit | Barre horizontale |
| 2 | Chambre (bas) | Lampadaire | Cercle ouvert à droite |
| 3 | Séjour (haut) | Applique HAY | Angle droit horizontal |
| 4 | Séjour (haut) | Suspension salle à manger | Donut / anneau |
| 5 | Chambre (bas) | Applique supplémentaire | Angle orienté vers le bas |
| 6 | Chambre (bas) | Lampe fenêtre | Disque plein |
| 7 | Chambre (bas) | Philips Hue Iris | Arc de cercle |
| 8 | Séjour (haut) | Lampe étoile | **À définir ; ne pas inventer de solution provisoire** |

- Groupes validés : **séjour/haut = [0, 3, 4, 8] (4 lampes)** ; **chambre/bas = [1, 2, 5, 6, 7] (5 lampes)**.
- L'allumage d'un groupe **ne doit pas éteindre l'autre**.
- Ces associations représentent le **langage de conception cible**, et non une preuve que les neuf graphismes sont actuellement pris en charge par E75.

## 4. Grammaire gestuelle validée

**Sélection individuelle**
- Un simple tap sert à **sélectionner** la lampe touchée ; tap sur le fond = **désélection sans extinction**.
- Double tap sur une lampe allumée = **éteindre cette lampe, puis désélectionner**.
- Double tap dans le vide = **placer/allumer le donut s'il est éteint** ; si le donut est déjà allumé, ne pas en créer un autre et ne pas le déplacer.
- Sur lampe sélectionnée : **écarter deux doigts augmente l'intensité ; rapprocher les deux doigts la diminue**. Le pincement ne doit pas déformer la forme ou modifier sa longueur après création.
- Sans lampe sélectionnée : geste d'écartement **principalement vertical** pour le disque plein, distinct du double tap du donut.
- **L'appui prolongé ne règle plus l'intensité** dans E75. Le maintien pour déclencher le disque, présent dans le prototype, est une fonction distincte.

**Commandes de groupe et générales à deux doigts**
- **Un doigt sert d'ancre immobile**, l'autre bouge : ne pas confondre avec le pincement dans lequel les **deux doigts bougent**.
- Départ dans la **moitié haute** = séjour ; dans la **moitié basse** = chambre.
- Mobile vers **haut** = allumer le groupe concerné ; vers **bas** = éteindre le groupe.
- Mobile vers **gauche** = **tout allumer** ; mobile vers **droite** = **tout éteindre** (commande générale, indépendante du groupe).
- **La direction droite comme fonction propre à un groupe reste libre/non attribuée**. Ne pas y ajouter une commande différente.
- **Le geste individuel de la lampe étoile reste en suspens** ; aucune attribution automatique.

## 5. Ce que contiennent effectivement E75 à E84 (à distinguer de la cible)

Version **E75 — « Angle droit pilote »**, dérivée de **E74 — « Angle à deux lignes »** :
- E74 : rendu de l'angle par **deux lignes indépendantes**, sans jonction forcée ; résultat graphique préféré lors du retour utilisateur, avant essai E75.
- E75 : ne tester **qu'un seul angle droit pilote**, sans bouleverser pincement, groupes ni autres formes.
- Réglage **« Longueur du tracé pour 100 % »** : facteur initial **0,55** du petit côté de l'écran, avec plancher de **110 px** dans le calcul ; curseur **0,35–0,85**. L'**intensité initiale de l'angle** dépend de la **longueur totale réellement tracée**, pas d'une taille de forme imposée. Cette option agit sur le **prochain angle dessiné**.
- Réglage **« Raccord de lumière »** : **0 à 20 px**, valeur initiale **8 px**. Ajustement visible **immédiatement**. On compare un raccord discret au rendu E74 à deux lignes séparées.
- **Appui prolongé supprimé comme moyen d'augmenter l'intensité** ; les commandes de groupe et le pincement sont conservés.
- Les réglages E75 sont conservés dans le navigateur via `deck-e75-angle-settings-v1`. Les formes dessinées sont aussi conservées localement (`deck-e75-lights-v1`) : **GitHub ne sauvegarde pas ces données locales**.
- **Limite d'implémentation actuelle** : les premiers emplacements de formes dans le code représentent verticale, horizontale, cercle, angle, anneau, chevron et disque ; les slots 7/8 sont encore hérités des anciens arcs de groupes, avec création automatique désactivée (`DRAWN_GROUP_ARCS=false`). **Ne pas considérer cela comme la réalisation fidèle des neuf symboles physiques**. En particulier, le cercle du lampadaire doit encore devenir ouvert à droite, l'arc Iris et la forme de l'étoile ne sont pas finalisés.
- Les commandes de groupe ciblent les **lampes présentes dans l'état dessiné** ; ne pas déduire de la présence des noms dans le code que toutes les neuf lampes sont déjà dessinées ou connectées à du matériel.
- Pour le système physique, un premier fonctionnement **ON/OFF** reste prévu ; la variation réelle des luminaires est une évolution distincte à étudier. L'intensité dans le prototype ne prouve pas la disponibilité d'un variateur sur la lampe réelle.

**E76 — « Raccord orthogonal pilote », dérivée de E75 (16/11/2026)**
- **But :** résoudre le défaut de raccord lumière/ombre des deux lignes à 90° **sans grande zone triangulaire**. Le trait visible conserve **deux branches rectilignes et un sommet strictement orthogonal** ; le raccord ne doit **jamais arrondir la géométrie**.
- Le curseur **« Raccord de lumière » 0–20 px** affecte **uniquement le masque de lumière**, dans un périmètre local (au plus le rayon choisi, limité à 30 % de chaque longueur de branche). À 0, on retrouve le masque des deux lignes indépendantes.
- La fusion locale est autorisée **seulement entre deux contributions de même signe** (lumière avec lumière ou ombre avec ombre), pas entre la lumière d'une branche et l'ombre de l'autre ; le masque ne les additionne pas. Cela vise à empêcher le triangle parasite.
- Le calcul JS de secours et le shader WebGL portent la même logique. Les réglages de raccord et les tracés E76 utilisent des clés locales **distinctes** de E75, avec **lecture initiale** des valeurs E75 en absence d'une valeur E76.
- Gestes, intensité à la longueur, affectations séjour/chambre et autres formes **non modifiés**. **Aucun code de production** touché.
- **Limite :** l'effet visuel réel, le shader WebGL sur iPhone et les FPS restent **à vérifier par l'utilisateur** ; la correction est encore une hypothèse graphique à valider.

**E77 — « Extinction progressive », dérivée de E76 (16/11/2026)**

- **Retour sur E76 :** l'utilisateur ne constate **aucune différence visible** sur le raccord orthogonal. Sujet mis de côté, **ne pas revenir dessus sans nouvelle demande**.
- **Tracés sans commande :** les gestes suffisamment longs (>18 px de trajet) qui ne sont pas reconnus, ou dont le pointeur est annulé, laissent une **trace lumineuse temporaire non enregistrée** qui s'efface progressivement pendant **0,95 s**. Les taps ne déclenchent pas cette trace ; les traits non reconnus sont aussi prévisualisés pendant le dessin.
- **Extinction des lampes :** ON/OFF individuel, double tap, commandes de groupes et extinction générale déclenchent maintenant une **onde douce de disparition depuis le centre géométrique vers les extrémités et l'extérieur de la lumière** (~**1,18 s**). L'onde est un masque radial adouci propre au calque de chaque lampe ; la ligne centrale et le contour s'effacent ensemble suivant le front spatial, sans masquer les autres lampes. La forme reste mémorisée pour pouvoir être rallumée.
- **Alternatives visuelles à envisager après retour iPhone :** effacement le long du tracé depuis son milieu vers ses deux extrémités (plus « cicatrisation » que rayon circulaire), ou rétraction de la lumière avant fermeture du relief ; **aucune alternative non demandée n'a été codée**.
- **Portée du rendu :** masque à bord progressif sur la toile bleu nuit (mode habituel) ; dans le mode de fond alternatif, une découpe radiale sans le même flou est utilisée comme secours. Validation visuelle et performances requises sur iPhone.
- **Stockage E77 indépendant** pour formes et curseurs, avec lecture initiale des clés E76 si E77 n'a encore rien enregistré. Ni E76 ni `index.html` modifiés.

**E78 — « Extinction naturelle », dérivée de E77 (16/11/2026)**
- **Décision utilisateur :** aucune onde ou effet de transition perceptible. La disparition doit être **la plus naturelle possible** ; abandonner l'idée d'une cicatrisation ou d'un effet graphique ajouté.
- Les lampes perdent simplement leur lumière **par atténuation continue et douce**. Le centre commence à diminuer **très légèrement avant la périphérie**, avec des courbes de fondu fortement superposées. **Aucun front mobile, disque qui grandit, contraction de la forme ni changement de silhouette.**
- Durée de disparition : **environ 1,08 s**, écart maximal de **0,11 s** entre centre et périphérie ; pour le mode nuit habituel, un dégradé radial d'opacité très large est appliqué sur le calque individuel qui porte **à la fois lumière et contour**.
- Les traits non reconnus conservent leur disparition douce (~0,95 s) mais **sans couches lumineuses supplémentaires ou animation de halo** : seule l'opacité d'une empreinte discrète diminue. Les taps simples ne créent aucune trace.
- Pour le **fond alternatif non nocturne**, l'effet antérieur à découpe circulaire est supprimé ; le relief suit un simple fondu doux uniforme (différence admise pour le prototype, à juger sur iPhone).
- Les commandes et affectations de groupe, l'angle E76, les masques GPU et l'application principale restent inchangés. Sauvegardes expérimentales **E78 distinctes** (avec lecture initiale de E77).
- **Statut :** vérification syntaxique et numérique réussie ; aucun rendu iPhone ni contrôle WebGL/performances en conditions réelles confirmé.



**E79 — « Membrane des lignes », dérivée de E78 (16/11/2026)**

- **Demande :** un test concret sur **la barre verticale (id 0) et la barre horizontale (id 1)**, pour obtenir l'impression d'un élément sous une membrane qui est retiré, **pas une disparition PowerPoint**.
- Les deux barres reçoivent un **rendu de membrane dédié** qui remplace pour elles la fente lumineuse et son ancien contour ; les autres formes et leur extinction restent celles de E78.
- Modèle expérimental : profil transversal **gaussien de hauteur**, pente calculée en fonction de la profondeur, avec **reflet clair d'un côté et ombre sombre de l'autre**. En se relâchant, la **profondeur diminue**, le **profil s'élargit légèrement** et les reflets se déplacent selon la pente. Le centre se relâche **un peu plus tôt** que les extrémités ; durée de référence **1,32 seconde**.
- **Pas de masque d'effacement ni de fondu global indépendant** sur les deux barres ; le trait, son reflet et son ombre proviennent du même profil de relief. Les lampes peuvent être rallumées et leur géométrie demeure mémorisée.
- Dessin par bandes et dégradés Canvas 2D (réglés à une densité limitée en vue de l'iPhone). En mode nuit, les bandes de membrane sont compositées de façon à rendre visible **l'ombre**, impossible avec l'ancien assemblage par écran seul. Le mode clair emploie le même profil simplifié.
- Le rendu des **autres** lampes, la grammaire gestuelle, le calcul GPU des autres reliefs et l'application principale **n'ont pas été modifiés**.
- Stockage local E79 distinct, récupérant initialement l'état E78 si aucun état E79 n'existe.
- **Statut : essai non validé visuellement sur iPhone.** Ne pas affirmer que la sensation de membrane est atteinte ; les performances et l'absence d'artefacts doivent être testées sur appareil.

**E80 — « Membrane ralentie », dérivée de E79 (16/11/2026)**

- **Retour utilisateur E79 :** l'effet de membrane paraît intéressant mais son retrait est **trop rapide**.
- Changement **uniquement temporel** pour les deux lignes verticale et horizontale : passage de **1,32 s à 2,6 s par défaut**, avec un réglage **« Durée du relâchement » de 1,2 à 4,0 s, pas de 0,1 s**. Le réglage est disponible directement dans le panneau des commandes dessinées et enregistré sous `deck-e80-line-release-duration-v1`.
- Profil de relief, gradients de pente, lumière et ombre, retard centre/extrémités, géométrie, reconnaissance des symboles et commandes gestuelles **identiques à E79**. Aucune modification des autres lampes ni du code définitif.
- Les tracés et réglages E80 sont isolés de E79, avec reprise initiale des valeurs précédentes lorsque E80 ne contient pas encore de sauvegarde.
- Vérifications : **12 assertions de structure, syntaxe JavaScript valide**, test numérique sur **7 instants** : disparition monotone, centre légèrement en avance, profondeur nulle à 2,6 s ; la membrane est encore à environ **49 %** au centre à 1,32 s. **Rendu et FPS sur iPhone toujours à valider.**

**E81 — « Apparence restaurée », issue de E78 pour corriger le rendu des E79/E80 (16/11/2026)**

- **Retour utilisateur sur E80 (capture iPhone fournie) :** nouvelle apparence inacceptable : **barre métallique striée**, au lieu d'une forme souple ; chevron accompagné de grands triangles lumineux. Cette observation **valide le problème visuel**, pas une correction. Les stries proviennent des bandes de gradients introduites pour la membrane dans E79/E80. Les grandes ombres triangulaires du chevron peuvent aussi provenir du rendu de relief ancien ; **cause exacte non encore confirmée**.
- **Correction expérimentale E81 :** dérivée du **code E78**, elle **restaure intégralement le dessin initial des lignes quand elles sont allumées**, leurs autres symboles, le shader WebGL d'origine, ainsi que le mode de composition `screen`. **Aucune bande de gradient en régime allumé.**
- Pendant l'extinction des **deux barres uniquement** (IDs 0 et 1), ralentissement et évolution du relief : côté clair/ombre du mode non nocturne s'adoucissent progressivement, tandis que le rendu nuit est élargi et légèrement flouté avec un décalage temporel continu du centre vers les extrémités. Le rendu n'est **plus entièrement recalculé physiquement par le shader** comme dans l'expérimentation E79 : E81 est **une correction de régression esthétique avec une approximation douce de relâchement**, à réévaluer avant de l'étendre.
- Durée réglable **1,2–4,0 s**, **2,6 s par défaut**, reprise possible du réglage E80 ; sauvegardes des lampes et réglages E81 isolées avec repli vers E80 puis E78.
- Les commandes, groupes, angles, formes et application principale ne changent pas. E80 et versions précédentes restent disponibles.
- **Contrôles :** fichier E81 relu sur GitHub, JavaScript syntaxiquement valide, fonctions de dessin des lignes et des angles et shader GPU identiques à E78 pour l'état allumé, 5 points temporels de relâchement vérifiés, application principale inchangée. **Rendu de la capture E80, performance iPhone, et nouveaux essais E81 non encore validés.**

**E82 — « Gestes et relief affiné », dérivée de E81 (16/11/2026)**

- **But :** corriger les gestes invalides et les défauts d'aliasing du donut et de l'extinction, sans toucher à l'application principale ni aux décisions gestuelles déjà validées. Capture utilisateur montrant une forme libre apparue pendant un dessin non reconnu : **plus aucune empreinte d'un tracé invalide**, ni en cours de geste ni après relâchement. Les prévisualisations de **formes réellement reconnues** restent possibles.
- **Seuils des angles :** chaque branche d'angle (id 3) doit mesurer **au moins 34 px** à la validation finale (**28 px** pendant la prévisualisation), et la somme des branches **au moins 78 px** (**65 px** pendant l'aperçu). L'angle autorisé est désormais **de 65° à 115°**. Les deux branches sont ajustées aux points du geste, plutôt que forcées à 90° : **angles légèrement non perpendiculaires préservés**, mais courbes ou formes trop irrégulières rejetées. Un petit crochet sur une barre ne doit plus être interprété comme un angle. Tolérance finale de déviation : max(13 px, 16 % de la branche courte).
- **Chevrons (id 5) :** branches finales d'au moins **36 px**, plage angulaire resserrée (environ **57°–125°**) et tolérance de tracé réduite ; petites formes involontaires rejetées. Pour les lignes simples, minimum de trajet net de **36 px** à la validation, **24 px** en aperçu.
- **Donut :** calcul cohérent du rayon pour lumière, contour et masque GPU ; contour vectoriel (cercle natif Canvas) et 128 segments pour les calculs dépendant du contour. Dégradé extérieur annulaire plus progressif et **léger renforcement du relief extérieur**, identique côté CPU et shader WebGL. Le centre ne reçoit plus le petit disque opaque de l'ancien `drawSpotLamp`.
- **Qualité d'image ciblée :** calque natif jusqu'à **3×** pour le donut, **2,5×** pendant l'extinction des autres lampes, **2×** dans l'état standard (selon DPR). Masque de relief calculé à **2,35×** pour le donut, **2,15×** lors d'une extinction, **1,5×** autrement. Ne pas augmenter inutilement tous les calques permanents : préserver les performances iPhone autant que possible.
- **Lignes très légèrement épaissies :** largeur de contour des barres augmentée de **10 %** dans le rendu (y compris avec les anciens réglages sauvegardés). Ajustement discret des épaisseurs initiales des autres symboles ; ne pas modifier le dessin ni la vitesse de relaxation E81.
- **Code et navigation :** E81 reste disponible, sauvegarde locale isolée sous les clés E82 avec reprise initiale des données E81 ; groupes, pincement, commandes générales et durée réglable des lignes hérités de E81.
- **Validation technique uniquement :** syntaxe JavaScript, contrôles statiques, **12 cas de reconnaissance isolés réussis** (barres, crochet, angles courts, angles non droits, chevron, gribouillage), dégradé du donut testé sur des diffusions de **8 à 180 px** sans stops inversés. **Le rendu Safari réel, la compilation du shader WebGL sur iPhone, les FPS et l'aspect esthétique restent à valider sur téléphone.** Ne pas déclarer les halos définitivement corrigés avant cet essai.

**E83 — « Masques souples · Chevron », dérivée de E82 (16/11/2026)**

- **Retour utilisateur, captures iPhone E82 :** le disque plein et le donut présentent encore des **bordures de relief trop franches et des plages très uniformes** malgré le suréchantillonnage ; l'hypothèse pertinente est que **le masque de relief lui-même**, non sa seule résolution, doit être adouci. Le chevron reconnaît mieux la forme complète, mais **l'aperçu du premier côté** a disparu avec la suppression des traces libres.
- **Correction des masques circulaires :** pour disque (id 6) et anneau (id 4), CPU et shader WebGL utilisent désormais des **raccords progressifs par smoothstep de part et d'autre du rayon**. Largeur de lissage cible `max(5 px,min(15 px, rayon × 0,24))` ; le donut possède deux raccords souples (extérieur et intérieur) et un dégradé discret sur la matière entre eux. Le disque reçoit une faible pente de lumière intérieure afin de ne plus sembler plaqué. Cela concerne **la continuité du relief**, pas une nouvelle animation.
- Les contours vectoriels de l'anneau deviennent moins lumineux et légèrement adoucis. Le suréchantillonnage sélectif mis en place en E82 est conservé.
- **Premier côté du chevron :** prévisualisation provisoire uniquement tant que le doigt est en mouvement, et **seulement pour une première branche oblique ascendante, suffisamment longue (30 px) et presque rectiligne**. Cette branche reste visible avant le retour du deuxième côté. À la validation, le **chevron complet reste soumis aux contraintes strictes de E82** ; si le dessin ne donne aucune commande, aucune empreinte résiduelle.
- Maintien des seuils d'angles et de chevrons E82, groupes, gestes, rendu des barres et extinction membrane réglable. Sauvegardes expérimentales E83 distinctes, avec lecture initiale de E82.
- **Tests techniques :** fichier enregistré et JavaScript compilable, cohérence du lissage CPU/GPU vérifiée par lecture du code ; trois balayages numériques de profils traversant les deux bordures d'anneau et le disque, variation sur 2 px inférieure à 0,2 dans les scénarios testés (≈0,143 à 0,145). Six tests de première branche (valide, courte, horizontale, descendante, ondulée, puis avec seconde branche amorcée) conformes. **Rendu Safari/iPhone et FPS non vérifiés** ; ne pas déclarer l'aliasing visuellement résolu avant retour utilisateur.

**E84 — « Douceur de contour réglable », dérivée de E83 (16/11/2026)**

- **Décision esthétique utilisateur :** la **largeur du pli du relief autour du contour**, plutôt qu'un flou global, détermine la sensation de membrane. Le rendu E83 est jugé trop adouci à son extrémité ; conserver une exploration **continue du très net au très doux**.
- **Un seul réglage « Douceur du contour » de 0 à 100 %, réglable en direct**, pour **le disque plein (id 6) et le donut (id 4)**. Valeur par défaut **35 %** ; repères « Très net » à 0 %, « Très doux » à 100 %. L'effet porte sur la **largeur du raccord lumineux du masque de relief**, pas sur la position ou le diamètre du disque et des anneaux : `0,5 + 17,5 × pourcentage/100` pixels, soit **0,5–18 px** de demi-largeur physique.
- La formule est **identique dans le code JavaScript (CPU et travailleur) et dans le shader WebGL**, via un **uniforme `discSoftness`** ; la valeur E84 participe à la clé de cache du masque, et le calque lumineux inclut déjà les réglages dans sa signature, donc **rafraîchissement immédiat** sans redessiner la géométrie.
- Les **traits lumineux de contour du donut** diminuent en présence et s'adoucissent avec ce curseur pour ne pas contrarier la déformation du relief. Les autres symboles, les seuils de reconnaissance du chevron et des angles, l'extinction de membrane des lignes et la durée réglable **restent inchangés**.
- Sauvegarde indépendante **`deck-e84-contour-softness-v1`** ; formes et réglages E84 sous clés dédiées, relisant initialement E83. Le slider est dans le panneau **Réglages** de la version web.
- **Contrôles techniques :** JavaScript compilable ; cohérence des paramètres CPU/GPU et des clés de cache vérifiée ; profils numériques vérifiés pour **0, 10, 35, 55, 75 et 100 %** sur **disque et donut**, sans valeur non finie. À rayon identique, la variation maximale par pixel mesurée sur le profil extérieur passe d'environ **0,56 à 0,045** sur le disque entre 0 et 100 % : l'effet de réglage est donc effectivement prononcé.
- **Statut :** test iPhone, fluidité lors du déplacement continu du curseur, rendu du shader WebGL sur Safari et esthétique à **valider avec l'utilisateur**. Ne pas affirmer que la sensation de membrane souhaitée est atteinte avant ce retour.


**E85 — « Micro-relief 3D » (16/11/2026), dérivée d’E84**
- **Correctif E85 (16/11/2026) :** retour utilisateur : le panneau fixe empêchait de dessiner. Le panneau est désormais fermé au chargement, accessible par un petit bouton « 3D · Réglages », avec fermeture ×. Les événements pointer du panneau ne remontent pas à la toile. Syntaxe JS vérifiée ; interaction Safari/iPhone toujours à confirmer.


- Nouvelle expérience indépendante : [e85-microrelief-3d.html](./e85-microrelief-3d.html) ; [lien de test GitHub Pages](https://km48krg88d-ops.github.io/Deck-laboratoire/e85-microrelief-3d.html), publication effective non vérifiée sur iPhone.
- Disque (ID 6) : champ de hauteur avec plateau circulaire et raccord cubique lisse. Donut (ID 4) : couronne à deux pentes arrondies, intérieur dégagé. Normales issues des dérivées numériques du champ et lumière fixe en haut à gauche. Le réglage ne change pas le simple flou d’un contour.
- Deux contrôles toujours visibles : hauteur 0–3,2 (initial 1,6, repères 1/2/3) et largeur du raccord 2–22 (initial 9), plus réinitialisation. Champ recalculé seulement si paramètres, rayon ou résolution changent ; rendu sur une petite zone dédiée à la forme, jusqu’à DPR 2.
- Rendu de relief sur Canvas2D local par normales et ombres ; il remplace l’ancien masque circulaire E84 et désactive ses halos lumineux directs, mais ne touche pas aux autres formes, aux gestes ou aux shaders utilisés ailleurs. En mode jour, le rendu est expérimental et doit être vérifié séparément.
- Les sauvegardes des formes et angles portent désormais les clés E85, avec lecture initiale d’E84. E84 et l’application principale restent intactes.
- **Contrôle statique :** syntaxe JavaScript vérifiée dans un moteur JS. **Non vérifié sur iPhone :** comportement tactile, netteté, composition visuelle, vitesse, RAM, publication Pages, fidélité perceptuelle à la photo.

## 6. Validation, sujets ouverts et prochaine étape

**Nouvelle décision du 16 novembre 2026 :** le curseur E84 de « douceur du contour » est perçu comme un simple flou. L'utilisateur souhaite désormais un **véritable micro-relief 3D du disque et du donut** : carte de hauteur, normales et éclairage provenant du volume, **pas d'un masque flouté**. Référence : photo transmise de panneaux blancs à plots cylindriques, en ne retenant **que les trois plus petites hauteurs** ; voir [PASSATION_DECK_E85.md](./PASSATION_DECK_E85.md) pour la description et les étapes. **E85 non encore créée.**

**Tests annoncés lors de la création des versions (historique conversationnel ; non relancés pour la rédaction de cette note) :**
- E74 : **29 tests logiques réussis** ; rendu à valider sur iPhone.
- E75 : **40 tests logiques réussis** ; **validation iPhone non encore confirmée**.
- E76 : **10 assertions de structure/régression vérifiées** au moment de la création ; relecture du fichier publié GitHub, compilation syntaxique JS, vérification des chemins CPU/GPU, conservation des gestes et de la séparation E75/E76. **Test numérique CPU sur 441 positions** : raccord visible dans un rayon de 8 et 20 px, aucun changement au-delà du rayon de 8 px, aucune inversion de signe, aucune valeur non finie. **Sur iPhone, l'utilisateur ne voit pas de différence esthétique** ; sujet suspendu.
- E77 : **11 assertions de structure et de non-régression réussies** avant enregistrement ; fichier relu sur GitHub, JavaScript compilable ; **tests fonctionnels isolés réussis** : déclenchement et interruption de l'extinction, progression monotone du rayon sur 7 instants, rejet des micro-tracés et enregistrement temporaire des tracés invalides. Affectations des groupes et moteur shader E76 comparés, inchangés. **Rendu iPhone, FPS, gestes tactiles et publication Pages non encore validés.**
- E78 : **11 vérifications de structure et de non-régression réussies** ; compilation syntaxique du JavaScript et tests numériques de l'opacité à 7 instants : opacité monotone, centre toujours légèrement plus atténué que la périphérie entre les extrêmes, extinction complète au terme. **Essai iPhone, performance et rendu visuel non encore vérifiés.**
- E79 : **12 vérifications de structure et 14 vérifications fonctionnelles isolées réussies** avant optimisation des bandes (syntaxe recontrôlée après). Tests de progression du relief sur 8 instants : décroissance monotone, centre avant extrémités, profondeur nulle à 1,32 s. Calcul des reflets/ombres à deux profondeurs, rendu simulé des deux barres par Canvas factice ; affectations de groupes, gestes, source E78 et application principale contrôlés. **Pas de rendu matériel iPhone, de mesure réelle des FPS ni d'essai complet navigateur effectué.**
- E80 : **12 vérifications de structure et tests numériques isolés réussis**. Le contrôle de durée affecte le relâchement et la fin de son nettoyage ; E79 et l'application principale sont inchangées. La fluidité et le résultat esthétique sur iPhone restent à vérifier.
- E81 : **12 vérifications de code et d'état réussies** : tracé des lignes et des angles et shader statique identiques à E78, 5 instants de relâchement testés, centre avant extrémités, durée 2,6 s, E78 et application principale intacts. **Aucun rendu ou FPS E81 validé sur iPhone**.
- E82 : **14 vérifications structurelles**, **12 simulations de reconnaissance** avec résultat attendu, **7 contrôles de dégradé** à différentes intensités de diffusion, vérification du script et conservation des affectations. **Aucune validation de rendu réel ni garantie FPS sur iPhone**.
- E83 : **6 scénarios de prévisualisation du premier côté du chevron réussis**, **3 balayages numériques des bords circulaires** sous le seuil de variation retenu, compilation syntaxique JS réussie, groupes/gestes et absence de tracés invalides conservés. Shader WebGL non testé dans Safari ; visuel et FPS non validés.
- E84 : **14 contrôles de structure et de conservation** et profils numériques pour les deux formes sur 6 positions du curseur ; JavaScript valide, paramètre WebGL et cache reliés, pas de donnée non finie. **Visuel et FPS non contrôlés en situation réelle sur iPhone**.

**À faire pour valider E84 (avant toute E85 ou promotion) :**
1. Tester E84 **sur iPhone** avec le disque et le donut allumés : déplacer le curseur **0 %, 20 %, 35 %, 60 %, 100 %** et relever la douceur du pli jugée la plus naturelle. Vérifier que l'effet est **immédiat** sans modification du rayon du symbole. Confirmer que la première branche du chevron reste visible pendant le geste sans laisser de trace en cas d'échec.
2. Contrôler les **FPS pendant le déplacement du curseur**, la continuité des masques circulaires, l'éclairage et la qualité du relief sur les deux fonds, la préservation des lampes voisines et les conflits de gestes : sélection/tap, double tap, pincement, ancre + doigt mobile, limites entre moitiés d'écran.
3. Consigner les résultats concrets : ce qui marche, ce qui est à modifier, les réglages de curseur retenus.
4. Ne décider **ni du geste de l'étoile ni d'une fonction de groupe à droite** sans demande nouvelle.

**Attention aux libellés historiques du HTML** : certains textes et identifiants proviennent d'expériences anciennes (E62, E66, etc.). Se fier à l'implémentation vérifiée et aux décisions ci-dessus plutôt qu'à un libellé isolé.

## 7. Protocole anti-perte pour les prochaines conversations

1. **Au début d'une nouvelle conversation :** lire **ce fichier**, puis le fichier expérimental indiqué en section 1. Annoncer **la version exacte** et **les sujets en suspens** ; ne pas réinventer les décisions.
2. **À chaque itération de code :** créer un **nouveau fichier E85, E86…** plutôt que remplacer E84 ; ne toucher à `index.html` qu'avec autorisation. Garder un lien vers la version précédente.
3. **Avec chaque version importante :** mettre à jour **dans le même travail** les sections 1, 5, 6 et le journal ci-dessous ; actualiser si nécessaire le tableau et les gestes, et mettre à jour `DECK_VERSIONS.md`.
4. **Toujours distinguer** : (a) décidé par l'utilisateur, (b) implémenté, (c) testé par logique, (d) validé sur iPhone, (e) idée à confirmer. Ne jamais transformer une hypothèse en décision acquise.
5. **Avant une modification sensible :** demander ou utiliser l'export **« Copier tous les réglages »** si des réglages du navigateur importent ; GitHub ne contient ni `localStorage` ni les observations de test non consignées.
6. **Changer de chat avant saturation** (repère pratique : après ~30 à 50 échanges substantiels) ; pour reprendre : « Reprends DECK depuis `DECK_ETAT.md` et la dernière version E indiquée. »
7. Ne jamais prétendre qu'un commit, un test ou une publication fonctionne sans l'avoir constaté.

## 8. Protocole obligatoire pour l'assistant — développement, vérifications et publication

**Ces étapes sont des obligations de travail de l'assistant, pas des tâches à déléguer à l'utilisateur.** Elles s'appliquent dans toute nouvelle conversation DECK, même si l'utilisateur demande simplement « corrige ceci ». Ne pas sauter une étape en raison d'une reprise de chat. Ne pas déclarer « testé » un point qui n'a pas réellement été vérifié.

### A. Avant toute modification

1. **Relire** `DECK_ETAT.md`, le fichier source de la dernière version expérimentale et les parties du code concernées. Contrôler le numéro de version exact dans GitHub.
2. **Identifier** ce qui doit changer, les décisions déjà validées à préserver et les fonctions susceptibles d'être affectées. Ne pas interpréter un texte ancien du code comme une nouvelle décision.
3. **Préserver le point de retour** : conserver la version précédente sans modification et repérer le SHA du fichier GitHub source. Les réglages `localStorage` sur iPhone sont distincts et, si nécessaires à l'essai, réclament un export dédié.
4. **Limiter le changement** à la demande. Ni refonte collatérale, ni nouveaux gestes, ni réglages modifiés sans demande.

### B. Toujours développer d'abord dans une version test

1. Créer un **nouveau fichier expérimental** avec numéro incrémenté (`e85-…html`, puis E86, etc.) et URL indépendante. Ne pas écraser le fichier de référence E75, une expérience précédente ou `index.html`.
2. Les changements d'interface, d'animations, de gestes, de moteur graphique, de sauvegarde ou de performances restent d'abord dans cette version test.
3. **Interdiction de promouvoir automatiquement en application définitive**, y compris vers `index.html`, `sw.js`, `manifest.webmanifest` ou les ressources de production. Seul un accord explicite de l'utilisateur, **après test**, autorise cette étape.
4. Si une nouvelle version test ne fonctionne pas, revenir à la précédente sans affecter l'application principale.

### C. Vérifier avant de remettre une version test

**Checklist de l'assistant :**
- [ ] Relire ou récupérer le fichier **réellement enregistré** sur GitHub et contrôler son titre, son numéro de version, son intégrité et son contenu attendu.
- [ ] Comparer avec la version source (diff) : les changements correspondent à la demande ; aucune suppression ou régression involontaire détectable.
- [ ] Vérifier la syntaxe HTML / CSS / JavaScript par les moyens disponibles, le chargement des scripts, les références de fonctions/éléments et les erreurs évidentes de logique.
- [ ] Exécuter les tests automatisés disponibles ; ajouter des tests ciblés lorsque c'est pertinent, sans confondre assertions logiques avec essai tactile réel.
- [ ] Vérifier les interactions concernées : tracé et apparition, tap sélection/désélection, double tap extinction/donut, pincement/intensité, geste disque, ancre fixe + doigt mobile, séparation séjour/chambre, commandes générales et extinction sans effacement.
- [ ] Vérifier l'absence de conflit manifeste entre gestes et la conservation des réglages / états locaux ; surveiller les régressions des fonctions non modifiées (sphère, ventilateur, musique, graphiques) lorsqu'elles partagent du code.
- [ ] Vérifier l'URL de test GitHub Pages et son accessibilité **si cela est techniquement possible** ; sinon annoncer clairement que cette vérification manque.
- [ ] Vérifier que les **fichiers de production sont inchangés** (sauf autorisation de promotion explicite).
- [ ] Consigner précisément les contrôles **réellement réussis, échoués et non exécutés**. Ne jamais écrire « tous les tests passent » sans compte rendu vérifiable.

**Limite impérative :** une vérification de syntaxe, une simulation de gestes ou des tests de logique sur ordinateur **ne valident pas** le tactile, le rendu, les performances (FPS) ou la sauvegarde sur l'iPhone réel. Ces aspects doivent être notés **« en attente de validation iPhone »** tant que l'utilisateur ne les a pas confirmés.

### D. Livraison de la version test à l'utilisateur

Remettre **un lien vers la nouvelle version expérimentale** et, en texte court :
- la version de départ et la nouvelle version ;
- les modifications exactes apportées ;
- les vérifications réellement effectuées et leur résultat ;
- les tests à faire sur iPhone, et les points incertains ;
- confirmation que **la version définitive n'a pas été modifiée**.

**Ne pas annoncer que la version est validée simplement parce qu'elle est publiée sur GitHub.** Attendre le retour de l'utilisateur et conserver les corrections dans de nouvelles versions de test si nécessaire.

### E. Intégration dans la version définitive, uniquement après validation

1. Attendre une demande explicite du type **« cette version est validée, intègre-la »** ; l'absence d'objection ne vaut pas accord.
2. Avant la modification, relever le commit/SHA et conserver un retour possible à l'ancien `index.html` ; vérifier quelles ressources de production doivent réellement changer.
3. Intégrer **uniquement la version validée** et contrôler la version enregistrée et, dans la mesure du possible, la publication chargée via GitHub Pages ; tenir compte de l'éventuel cache Safari / service worker.
4. Effectuer les contrôles de non-régression de la version définitive. En cas d'échec, privilégier le retour immédiat à la version de production précédente.
5. Signaler explicitement ce qui a été intégré et ce qui reste à vérifier sur l'appareil.

### F. Mise à jour et traçabilité obligatoires

À chaque livraison importante, mettre à jour **dans la même séquence de travail** : `DECK_ETAT.md` (version courante, changements, état des validations, prochain essai), `DECK_VERSIONS.md` (nouvelle entrée) et, si nécessaire, `README.md`. Conserver un journal daté des décisions, sans écraser les versions antérieures. **Si une étape est inaccessible ou échoue, le signaler : ne pas prétendre qu'elle est faite.**

## 9. Journal

- **15 novembre 2026** — Répartition séjour/chambre, associations des neuf luminaires et langage graphique abstrait ; étoile et direction droite réservées.
- **16 novembre 2026 — E74** — Angle à deux lignes ; 29 tests logiques signalés ; essai visuel iPhone restant.
- **16 novembre 2026 — E75** — Angle pilote, intensité à la longueur, raccord 0–20 px, pas d'intensité par maintien ; 40 tests logiques signalés, essai iPhone restant.
- **16 novembre 2026 — Documentation** — Création de la source de vérité pour limiter les pertes entre conversations. **Code E75 inchangé.**
- **16 novembre 2026 — Protocole qualité** — Ajout d'une procédure obligatoire de contrôle avant livraison, de développement en version test indépendante et d'intégration en production **uniquement après validation explicite**. Aucun code applicatif modifié.
- **16 novembre 2026 — E76** — Raccord lumineux local sur un trait strictement orthogonal, sans mélange lumière/ombre ; E75 et application principale préservées ; contrôles statiques et test numérique CPU réussis, WebGL/iPhone à valider. L'utilisateur ne voit pas de différence ; sujet suspendu.
- **16 novembre 2026 — E77** — Tracés non reconnus dissipés en 0,95 s, extinction radiale par calque en 1,18 s, contours et lumière retirés du centre vers la périphérie ; 11 contrôles statiques + essais fonctionnels isolés réussis ; iPhone à valider.
- **16 novembre 2026 — E78** — Retrait de l'onde visible : extinction purement progressive, quasi uniforme, centre à peine prioritaire. Les tracés non reconnus perdent naturellement leur opacité. Code syntaxiquement valide ; tests numériques réussis ; iPhone à valider.
- **16 novembre 2026 — E79** — Test physique limité aux deux barres : profil de membrane dont la profondeur diminue et la pente se détend ; disparition du masque d'opacité pour ces barres. Calculs et contrôles isolés réussis, validation iPhone en attente. Retour : effet prometteur mais trop rapide.
- **16 novembre 2026 — E80** — Ralentissement de l'essai de membrane à 2,6 s par défaut, curseur 1,2–4,0 s ; matériau et gestes inchangés. Capture utilisateur : la nouvelle apparence est striée et les grands triangles du chevron restent problématiques.
- **16 novembre 2026 — E81** — Correction de la régression de E79/E80 : retour au dessin E78 lorsque les lampes sont allumées ; relâchement approximé seulement pendant l'extinction des deux barres ; durée E80 conservée. Essai visuel sur iPhone à valider.
- **16 novembre 2026 — E82** — Aucun tracé pour les gestes invalides, critères d'angle et chevron plus stricts, rendu du donut harmonisé et suréchantillonné, contour des barres +10 %. 12 essais de reconnaissance et validations des dégradés réussis ; captures iPhone : contours circulaires encore trop francs et aperçu du premier côté du chevron absent.
- **16 novembre 2026 — E83** — Lissage des masques de relief intérieur et extérieur du donut/disque, continuité de la matière, et retour du premier côté du chevron pendant le geste uniquement. Tests numériques et de reconnaissance ciblés réussis ; retour utilisateur : degré d'adoucissement trop élevé.
- **16 novembre 2026 — E84** — Curseur direct 0–100 % pour la largeur du pli de la membrane sur disque et donut, valeurs indépendantes de la géométrie. CPU/GPU, cache et contours du donut adaptés. Contrôles numériques et de code réussis ; iPhone à valider.

---
**Règle de conservation :** aucune ancienne décision validée n'est annulée par une nouvelle expérimentation, sauf modification explicite. En cas de contradiction entre ce document et une décision ultérieure de l'utilisateur, actualiser ce fichier en citant la décision et la date.

- **Correctif de régression E85 (16/11/2026, retour iPhone) :** les formes n’apparaissaient qu’après rafraîchissement, leurs animations étaient absentes, le double-tap semblait ne plus former le donut. Cause confirmée dans le code : les appels à `drawOrbLamp` et `drawSpotLamp` avaient été neutralisés, et le masque du mode non nocturne remplacé. Ils sont restaurés à l’identique d’E84 ; le micro-relief 3D devient une couche complémentaire, protégée des erreurs pour ne pas interrompre la boucle de rendu. Le rendu 3D n’est pas calculé pendant un geste encore provisoire, pour laisser les prévisualisations E84 intactes, et sa texture est plafonnée à 320×320 pour limiter le coût Safari. Contrôles statiques : syntaxe JS valide, fonctions de reconnaissance du double-tap, du pincement et de dessin disque/donut identiques à E84. Résultat iPhone à confirmer.

- **Correctif E85 (16/11/2026, menu 3D inopérant sur iPhone) :** suppression du couple bouton + gestion JavaScript du volet de réglages, remplacé par un `<details>`/`<summary>` natif Safari ; panneau fermé au départ, titre « 3D · Réglages » cliquable pour ouvrir/fermer, z-index explicite, seule l’entête reçoit les gestes lorsque le volet est replié. Les deux curseurs, le profil de hauteur et la sauvegarde E85 ne changent pas. Syntaxe JavaScript vérifiée ; clic tactile iPhone à confirmer.

- **Correctif E85 du 17/11/2026 (réglages relief sans effet visible) :** hauteur du relief désormais visible au-dessus des couches lumineuses du disque/donut (auparavant sous leur lumière, donc largement masquée), contraste de pente accru, plateau dépendant de la vraie hauteur ; levée du plafond de largeur du raccord du donut auparavant limité à ~10 px malgré curseur 2–22. Le micro-relief reste limité aux IDs 4 et 6 et les gestes E84 ne changent pas. Syntaxe JS valide ; résultat visuel Safari à confirmer.

- **E85, 17/11/2026 — interrupteur diagnostique « Rendu 2D » :** nouveau checkbox natif dans « 3D · Réglages », actif par défaut, sauvegardé indépendamment dans `deck-e85-relief-v1`. Quand décoché, fond uni #101827, coupe le moteur graphique E84 (masques, lumières 2D, contours, sphère) pour ne garder que la synthèse du champ de relief (disque ID6 + donut ID4). Les autres lampes restent enregistrées mais sont invisibles tant que le mode 2D est désactivé. Gestes/identification restent actifs ; les brouillons disque/donut sont visibles via leur relief 3D. Le rendu E84 est inchangé lorsque la case est cochée, la version E84 indépendante et index principal restent intacts. Test de syntaxe et de présence des branches effectué ; résultats sur iPhone à valider.

- **E85, 17/11/2026 — diagnostic éclairage coloré directionnel :** l’utilisateur ne percevait qu’un rendu blanc. Le champ de hauteur ID6 (disque) et ID4 (donut) reçoit maintenant une source ambrée dirigée (azimut 225° par défaut) et une contre-ombre bleue opposée. Calcul du signe d’éclairement à partir des vraies normales locales (différences finies du champ de hauteur) ; l’intérieur/extérieur du donut réagissent en sens inverse, test numérique confirmé. Curseurs « Direction de la lumière » (0–360°) et « Puissance lumineuse » (0–2,5) sauvegardés dans les préférences E85. Bouton « Afficher deux reliefs test » : bascule en isolation 2D et affiche temporairement un disque + un donut sans enregistrer ni déplacer les lampes. Les fonctions de geste tap/double tap, disque, donut, pincement et dessin comparées à E84 sont identiques. Syntaxe JS contrôlée ; validation Safari/iPhone à effectuer. Version E84 et `index.html` préservés.

- **E85, 17/11/2026 — correctif majeur « reliefs invisibles » :** le moteur E85 ne dessine plus sur le même canvas que les formes E84. Ajout de `<canvas id="e85ReliefLayer">`, transparent, positionné au-dessus du canvas principal, `pointer-events:none`, même définition CSS/pixels que le canvas principal. `e85Relief` compose ses masques et éclairages directement sur ce calque, qui est vidé puis redessiné à chaque image. Les curseurs déclenchent en outre un rendu immédiat de cette couche. Le menu affiche maintenant « Calque 3D : ... · N relief(s) dessinés » ou l’erreur JS précise. Le témoin « deux reliefs test » est indépendant des lampes sauvegardées. Vérification numérique JS exécutée : disque 17 343 pixels non transparents (14 188 ambrés, 3 155 bleus), donut 15 293 (10 085 ambrés, 5 208 bleus), 2 `drawImage` effectifs, sans exception. Cette vérification couvre raster/calculs hors navigateur, pas Safari/iPhone. Lien : https://km48krg88d-ops.github.io/Deck-laboratoire/e85-microrelief-3d.html?v=9. E84 et `index.html` intacts.
