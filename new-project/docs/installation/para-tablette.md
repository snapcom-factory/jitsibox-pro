---
sidebar_position: 1
---

# Paramètres tablette

## Permettre à la tablette d'avoir un écran tactile séparé

- S'assurer que la tablette est branché et que l'écran est bien étendu (cliquer sur Windows+P, puis sur `Étendre l'affichage` pour s'en assurer).
- Ouvrir le `Panneau de configuration`, et sélectionner `Affichage par grandes icônes`.
- Cliquer sur `Paramètres du Tablet PC` (ou le chercher dans la barre de recherche s'il n'apparaît pas), puis sur `Configurer`.
- Un message `Touchez cet écran si vous voulez l’identifier comme l’écran tactile` apparaît sur l'écran principal. Appuyez sur `Entrée` pour le faire passer sur le deuxième écran, et cliquer sur ce deuxième écran avec la souris pour valider.

## Empêcher l'ouverture du centre de notifications et de l'affichage des tâches

- Ouvrir l'éditeur de registres avec `Windows Key + R`, taper `regedit` et valider.
- Dans l'éditeur de registre, naviguer jusqu'à `HKEY_LOCAL_MACHINE > SOFTWARE > Policies > Microsoft > Windows > EdgeUI`
- Si le dossier `EdgeUI` existe, le sélectionner et double-cliquer sur la clé `AllowEdgeSwipe` pour remplacer la valeur `0` par `1`. Redémarrer ensuite l'ordinateur.
- Sinon, faire un clic droit sur le dossier `Windows`, et sélectionner `Nouveau > Clé`. Nommer cette clé `EdgeUI`.
- Faire ensuite un clic droit sur la nouvelle clé `EdgeUI`, puis sélectionner `Nouveau > Valeur DWORD 32 bits`. Nommer cette valeur `AllowEdgeSwipe`, et valider.
- Double-cliquer sur cette nouvelle valeur, et remplacer la valeur `0` par `1`. Redémarrer ensuite l'ordinateur.

## Installation avec Chrome

### Empêcher de sortir du mode plein écran (Kiosk Mode)

- Créer un nouvel utilisateur `JitsiBox` en cliquant sur l'icône 👤 en haut à droite, puis sur `Ajouter` en bas de la pop-up.
- Cliquer sur `Continuer sans compte`, puis entrer `JitsiBox` en tant que nom et choisir une couleur de profil.
- S'assurer que la case `Créer un raccourci sur le bureau` est bien cochée, et cliquer sur `OK`.
- Faire un clic droit sur l'icône nouvellement créée sur le bureau, puis sélectionner `Propriétés`.
- Au bout de la ligne `Cible`, écrire `--kiosk` sans aucun guillemet, et cliquer sur `OK`.

### Permettre l'affichage d'une fenêtre en Kiosk Mode sur chaque écran

- Copier-coller l'icône permettant d'ouvrir Chrome en Kiosk Mode (pour avoir une icône pour le controller et pour le main screen)
- Faire un clic droit sur l'icône destinée au main screen, puis sélectionner `Propriétés`.
- Dans la ligne `Cible`, juste avant `--kiosk`, ajouter `--window-position=0,0`.
- Juste après `--kiosk`, ajouter `localhost:3002` (ou l'adresse du main screen s'il n'est pas hébergé en local).
- Ajouter ensuite `--user-data-dir=c:/monitor1` (l'ordre des paramètres est important).
- Cliquer sur `OK`.
- Faire la même chose sur l'icône destinée au controller, en remplaçant `0,0` par `1680,0` dans `--window-position`, `localhost:3002` par `localhost:3000` et `monitor1` par `monitor2` dans `--user-data-dir`.

## Installation avec le Kiosk Mode Windows (avec Edge)

### Activer le Kiosk Mode Windows

- Accéder aux paramètres utilisateurs en ouvrant le menu `Démarrer` de Windows, puis en sélectionnant `Paramètres` puis `Comptes`.
- Cliquer sur l'onglet `Famille et autres utilisateurs`, puis sur `Accès attribué`.
- Créer un utilisateur appelé `Kiosk`, et sélectionner comme application de lancement `Microsoft Edge`.
- Dans l'URL du site Web, entrer `localhost:3000` et cliquer sur `Enregistrer`.
- Redémarrer l'ordinateur : il démarrera automatiquement sur le profil `Kiosk`.
