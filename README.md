# jitsi-box-pro
Projet en partenariat avec Snapcom pour créer une alternative aux Zoom/Microsoft Teams Rooms

# Installation
## Permettre à la tablette d'avoir un écran tactile séparé
- S'assurer que la tablette est branché et que l'écran est bien étendu (cliquer sur Windows+P, puis sur `Étendre l'affichage` pour s'en assurer).
- Ouvrir le `Panneau de configuration`, et sélectionner `Affichage par grandes icônes`.
- Cliquer sur `Paramètres du Tablet PC` (ou le chercher dans la barre de recherche s'il n'apparaît pas), puis sur `Configurer`.
- Un message `Touchez cet écran si vous voulez l’identifier comme l’écran tactile` apparaît sur l'écran principal. Appuyez sur `Entrée` pour le faire passer sur le deuxième écran, et cliquer sur ce deuxième écran avec la souris pour valider.

## Installation avec Chrome
...
### Empêcher de revenir en arrière sur la tablette
Ouvrir Google Chrome, taper `chrome://flags/#overscroll-history-navigation` et sélectionner `Disabled` dans le menu déroulant.

### Empêcher de sortir du mode plein écran (Kiosk Mode)
- Créer un nouvel utilisateur `JitsiBox` en cliquant sur l'icône 👤 en haut à droite, puis sur `Ajouter` en bas de la pop-up.
- Cliquer sur `Continuer sans compte`, puis entrer `JitsiBox` en tant que nom et choisir une couleur de profil.
- S'assurer que la case `Créer un raccourci sur le bureau` est bien cochée, et cliquer sur `OK`.
- Faire un clic droit sur l'icône nouvellement créée sur le bureau, puis sélectionner `Propriétés`.
- Au bout de la ligne `Cible`, écrire `--kiosk` sans aucun guillemet, et cliquer sur `OK`.

### Empêcher l'ouverture du centre de notifications et de l'affichage des tâches
- Ouvrir l'éditeur de registres avec `Windows Key + R`, taper `regedit` et valider.
- Dans l'éditeur de registre, naviguer jusqu'à `HKEY_LOCAL_MACHINE > SOFTWARE > Policies > Microsoft > Windows > EdgeUI`
- Si le dossier `EdgeUI` existe, le sélectionner et double-cliquer sur la clé `AllowEdgeSwipe` pour remplacer la valeur `0` par `1`. Redémarrer ensuite l'ordinateur.
- Sinon, faire un clic droit sur le dossier `Windows`, et sélectionner `Nouveau > Clé`. Nommer cette clé `EdgeUI`.
- Faire ensuite un clic droit sur la nouvelle clé `EdgeUI`, puis sélectionner `Nouveau > Valeur DWORD 32 bits`. Nommer cette valeur `AllowEdgeSwipe`, et valider.
- Double-cliquer sur cette nouvelle valeur, et remplacer la valeur `0` par `1`. Redémarrer ensuite l'ordinateur.

## Installation avec le Kiosk Mode Windows (avec Edge)
...
### Activer le Kiosk Mode
...

### Désactiver la traduction sur Edge
- Ouvrir Microsoft Edge, cliquer sur le bouton avec les trois points horizontaux en haut à droite de la fenêtre.
- Sélectionner `Paramètres`, puis `Langues` dans le menu de gauche.
- Désactiver la ligne `Me proposer de traduire les pages qui sont écrites dans une langue que je ne connais pas`.