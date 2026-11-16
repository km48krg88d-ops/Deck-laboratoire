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

## 8. Journal

- **15 novembre 2026** — Répartition séjour/chambre, associations des neuf luminaires et langage graphique abstrait ; étoile et direction droite réservées.
- **16 novembre 2026 — E74** — Angle à deux lignes ; 29 tests logiques signalés ; essai visuel iPhone restant.
- **16 novembre 2026 — E75** — Angle pilote, intensité à la longueur, raccord 0–20 px, pas d'intensité par maintien ; 40 tests logiques signalés, essai iPhone restant.
- **16 novembre 2026 — Documentation** — Création de la source de vérité pour limiter les pertes entre conversations. **Code E75 inchangé.**

---
**Règle de conservation :** aucune ancienne décision validée n'est annulée par une nouvelle expérimentation, sauf modification explicite. En cas de contradiction entre ce document et une décision ultérieure de l'utilisateur, actualiser ce fichier en citant la décision et la date.
