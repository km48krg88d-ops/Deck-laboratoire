# DECK — ÉTAT DE RÉFÉRENCE

> **Source de vérité pour reprendre DECK après un changement de conversation.**  
> Mise à jour : **16 novembre 2026** · Projet MOBILIER / DECK III  
> **Dernière version expérimentale : E77** · Statut : **prototype à tester sur iPhone**, non considéré comme validé en situation réelle.

## 1. Où reprendre

- **Code expérimental à poursuivre : [e77-effacement-progressif.html](./e77-effacement-progressif.html)** — « DECK E77 · Extinction progressive ».
- Point de retour immédiat : [e76-raccord-orthogonal.html](./e76-raccord-orthogonal.html) — E76 inchangée.
- Version antérieure : [e75-angle-pilote.html](./e75-angle-pilote.html) — E75, inchangée.
- Autre référence graphique : [e74-angle-2-lignes.html](./e74-angle-2-lignes.html) (E74, deux branches indépendantes).
- Autres jalons disponibles dans le dépôt : E63, E65 à E73, puis E74, E75, E76 et E77.
- **Application principale indépendante : [index.html](./index.html)**, qui porte encore le titre E63.6. **Ne pas la remplacer par une expérience sans décision explicite.**
- La série E est un laboratoire : les fichiers HTML sont conservés individuellement pour pouvoir revenir à une version antérieure.
- [README.md](./README.md) = porte d'entrée ; [DECK_VERSIONS.md](./DECK_VERSIONS.md) = index historique ; **ce fichier** = état courant et décisions.

## 2. Vision / matière / principe

DECK est une interface tactile et gestuelle, expérimentée sur iPhone via une interface web, destinée à commander des lampes, le ventilateur et la musique. Les symboles lumineux sont des **abstractions du comportement de chaque luminaire**, pas des pictogrammes littéraux. Direction esthétique : toile bleu nuit, formes comme des **poinçonnements ou retraits de matière**, léger relief inversé, lumière diffuse et non objets posés dessus.

Les autres expérimentations (sphère à particules, cube/ventilateur, fente lumineuse, variations temporelles, etc.) restent des branches fonctionnelles du laboratoire ; **ne pas confondre leur historique avec le chantier actuel E77**, centré sur les lampes dessinées et leurs gestes. N'ajouter aucune commande mécanique sans nouvelle décision.

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

## 5. Ce que contiennent effectivement E75 à E77 (à distinguer de la cible)

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


## 6. Validation, sujets ouverts et prochaine étape

**Tests annoncés lors de la création des versions (historique conversationnel ; non relancés pour la rédaction de cette note) :**
- E74 : **29 tests logiques réussis** ; rendu à valider sur iPhone.
- E75 : **40 tests logiques réussis** ; **validation iPhone non encore confirmée**.
- E76 : **10 assertions de structure/régression vérifiées** au moment de la création ; relecture du fichier publié GitHub, compilation syntaxique JS, vérification des chemins CPU/GPU, conservation des gestes et de la séparation E75/E76. **Test numérique CPU sur 441 positions** : raccord visible dans un rayon de 8 et 20 px, aucun changement au-delà du rayon de 8 px, aucune inversion de signe, aucune valeur non finie. **Sur iPhone, l'utilisateur ne voit pas de différence esthétique** ; sujet suspendu.
- E77 : **11 assertions de structure et de non-régression réussies** avant enregistrement ; fichier relu sur GitHub, JavaScript compilable ; **tests fonctionnels isolés réussis** : déclenchement et interruption de l'extinction, progression monotone du rayon sur 7 instants, rejet des micro-tracés et enregistrement temporaire des tracés invalides. Affectations des groupes et moteur shader E76 comparés, inchangés. **Rendu iPhone, FPS, gestes tactiles et publication Pages non encore validés.**

**À faire pour valider E77 (avant toute E78 ou promotion) :**
1. Tester E77 **sur iPhone** : dessiner une forme non reconnue et observer son effacement sur ~0,95 s ; éteindre une barre, un angle, le cercle, le donut et le disque, en vérifiant que la disparition progresse effectivement **du centre vers l'extérieur**.
2. Vérifier les performances (FPS), que l'extinction n'efface pas les lampes voisines, que le rallumage interrompt correctement l'animation et les conflits de gestes : sélection/tap, double tap, pincement, ancre + doigt mobile, limites entre moitiés d'écran.
3. Consigner les résultats concrets : ce qui marche, ce qui est à modifier, les réglages de curseur retenus.
4. Ne décider **ni du geste de l'étoile ni d'une fonction de groupe à droite** sans demande nouvelle.

**Attention aux libellés historiques du HTML** : certains textes et identifiants proviennent d'expériences anciennes (E62, E66, etc.). Se fier à l'implémentation vérifiée et aux décisions ci-dessus plutôt qu'à un libellé isolé.

## 7. Protocole anti-perte pour les prochaines conversations

1. **Au début d'une nouvelle conversation :** lire **ce fichier**, puis le fichier expérimental indiqué en section 1. Annoncer **la version exacte** et **les sujets en suspens** ; ne pas réinventer les décisions.
2. **À chaque itération de code :** créer un **nouveau fichier E78, E79…** plutôt que remplacer E77 ; ne toucher à `index.html` qu'avec autorisation. Garder un lien vers la version précédente.
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

1. Créer un **nouveau fichier expérimental** avec numéro incrémenté (`e78-…html`, puis E79, etc.) et URL indépendante. Ne pas écraser le fichier de référence E75, une expérience précédente ou `index.html`.
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

---
**Règle de conservation :** aucune ancienne décision validée n'est annulée par une nouvelle expérimentation, sauf modification explicite. En cas de contradiction entre ce document et une décision ultérieure de l'utilisateur, actualiser ce fichier en citant la décision et la date.
