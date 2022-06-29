# jitsi-box-pro
Projet en partenariat avec Snapcom pour créer une alternative aux Zoom/Microsoft Teams Rooms

## Installation
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