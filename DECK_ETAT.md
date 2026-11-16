# DECK — ÉTAT DE RÉFÉRENCE

> **Source de vérité pour reprendre DECK après un changement de conversation.**  
> Mise à jour : **16 novembre 2026** · Projet MOBILIER / DECK III  
> **Dernière version expérimentale : E75** · Statut : **prototype à tester sur iPhone**, non considéré comme validé en situation réelle.

## 1. Où reprendre

- **Code expérimental à poursuivre : [e75-angle-pilote.html](./e75-angle-pilote.html)** — « DECK E75 · Angle droit pilote ».
- Référence graphique précédente : [e74-angle-2-lignes.html](./e74-angle-2-lignes.html) (E74).
- Autres jalons disponibles dans le dépôt : E63, E65 à E73, puis E74 et E75.
- **Application principale indépendante : [index.html](./index.html)**, qui porte encore le titre E63.6. **Ne pas la remplacer par une expérience sans décision explicite.**
- La série E est un laboratoire : les fichiers HTML sont conservés individuellement pour pouvoir revenir à une version antérieure.
- [README.md](./README.md) = porte d'entrée ; [DECK_VERSIONS.md](./DECK_VERSIONS.md) = index historique ; **ce fichier** = état courant et décisions.

## 2. Vision / matière / principe

DECK est une interface tactile et gestuelle, expérimentée sur iPhone via une interface web, destinée à commander des lampes, le ventilateur et la musique. Les symboles lumineux sont des **abstractions du comportement de chaque luminaire**, pas des pictogrammes littéraux. Direction esthétique : toile bleu nuit, formes comme des **poinçonnements ou retraits de matière**, léger relief inversé, lumière diffuse et non objets posés dessus.

Les autres expérimentations (sphère à particules, cube/ventilateur, fente lumineuse, variations temporelles, etc.) restent des branches fonctionnelles du laboratoire ; **ne pas confondre leur historique avec le chantier actuel E75**, centré sur les lampes dessinées et leurs gestes. N'ajouter aucune commande mécanique sans nouvelle décision.

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

## 5. Ce que contient effectivement E75 (à distinguer de la cible)

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

## 6. Validation, sujets ouverts et prochaine étape

**Tests annoncés lors de la création des versions (historique conversationnel ; non relancés pour la rédaction de cette note) :**
- E74 : **29 tests logiques réussis** ; rendu à valider sur iPhone.
- E75 : **40 tests logiques réussis** ; **validation iPhone non encore confirmée**.

**À faire avant E76 :**
1. Tester E75 **sur iPhone** et comparer l'angle E75 (curseurs de longueur et raccord) à l'aspect préféré d'E74.
2. Vérifier à la main les conflits de gestes : sélection/tap, double tap, pincement, ancre + doigt mobile, limites entre moitiés d'écran.
3. Consigner les résultats concrets : ce qui marche, ce qui est à modifier, les réglages de curseur retenus.
4. Ne décider **ni du geste de l'étoile ni d'une fonction de groupe à droite** sans demande nouvelle.

**Attention aux libellés historiques du HTML** : certains textes et identifiants proviennent d'expériences anciennes (E62, E66, etc.). Se fier à l'implémentation vérifiée et aux décisions ci-dessus plutôt qu'à un libellé isolé.

## 7. Protocole anti-perte pour les prochaines conversations

1. **Au début d'une nouvelle conversation :** lire **ce fichier**, puis le fichier expérimental indiqué en section 1. Annoncer **la version exacte** et **les sujets en suspens** ; ne pas réinventer les décisions.
2. **À chaque itération de code :** créer un **nouveau fichier E76, E77…** plutôt que remplacer E75 ; ne toucher à `index.html` qu'avec autorisation. Garder un lien vers la version précédente.
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

1. Créer un **nouveau fichier expérimental** avec numéro incrémenté (`e76-…html`, puis E77, etc.) et URL indépendante. Ne pas écraser le fichier de référence E75, une expérience précédente ou `index.html`.
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

---
**Règle de conservation :** aucune ancienne décision validée n'est annulée par une nouvelle expérimentation, sauf modification explicite. En cas de contradiction entre ce document et une décision ultérieure de l'utilisateur, actualiser ce fichier en citant la décision et la date.
