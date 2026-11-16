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
| **E80** | **[e80-membrane-ralentie.html](./e80-membrane-ralentie.html)** | **Dernier essai : même membrane, 2,6 s par défaut, durée réglable de 1,2 à 4 s ; syntaxe et tests de durée vérifiés ; essai iPhone à valider** |

Les repères E63–E73 suivent les noms des fichiers conservés ; leurs autres caractéristiques ne sont pas récapitulées ici.

## Publication versus expérimentations

- `index.html` : application principale distincte (titre actuel E63.6) ; ne pas écraser sans instruction.
- Les fichiers `eXX-*.html` : expérimentations autonomes et points de retour.
- **Dernière version de travail au 16/11/2026 : E80**, mais cela ne signifie pas qu'elle soit validée sur iPhone ni qu'elle ait remplacé l'application principale.

Chaque nouvelle version importante doit être ajoutée ici **et** documentée dans [DECK_ETAT.md](./DECK_ETAT.md).
