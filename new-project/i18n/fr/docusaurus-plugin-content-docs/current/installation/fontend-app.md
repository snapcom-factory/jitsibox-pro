---
sidebar_position: 1
---

# Application Frontend

## Introduction

Ces applications sont ce que les utilisateurs voient sur le contrôleur et les écrans principaux. Elles communiquent entre elles grâce au bridge.

Ces applications utilisent les mêmes technologies :

- [React](https://beta.reactjs.org) une librairie frontend Javascript
- [Typescript](https://www.typescriptlang.org) un langage de programmation qui est un surensemble de JavaScript
- [MUI](https://mui.com/material-ui/getting-started/overview/) une bibliothèque de composants React permettant un prototypage rapide
- [Vite](https://vitejs.dev) une bibliothèque d'outils frontend qui configure notre environnement de développement
- [Socket.io](https://socket.io) pour communiquer avec le bridgr via les WebSockets

## Installation et mise en route

Avant l'installation, vous devez ajouter les éléments suivants aux fichiers `.env` :

- dans l'application `controller`, ajoutez le fichier `.env` suivant au même niveau que les fichiers `index.html` et `package.json` :

```
VITE_DOMAIN = meet.jit.si
```

- dans l'application `main-screen`, ajoutez le fichier `.env` suivant au même niveau que les fichiers `index.html` et `package.json` :

```
VITE_WEBCONF_TOKEN = #add the Webconf JWT
VITE_DOMAIN = meet.jit.si
```

En exécutant `npm i` dans chaque dossier d'application, vous devriez pouvoir installer toutes les dépendances nécessaires au fonctionnement du projet. Ensuite, vous pouvez utiliser les différents scripts `npm` pour lancer l'application (`npm run dev` pour le développement par exemple).

## Structure des dossiers

Toutes les applications ont la même structure de dossiers de base :

- `index.html est le point d'entrée du site web pour le navigateur.
- `src/`
  - `index.tsx` ou `main.tsx` sont chargés à l'intérieur de `index.html` et rendent le composant `App.tsx`.
  - Le composant "App.tsx" est le point d'entrée de l'application React.
  - `Routes.tsx` est le composant principal rendu à l'intérieur de `App.tsx` et rend une page différente en fonction du chemin URL.
  - `views/` contient les différentes pages rendues par `Routes.tsx`.
  - `components/` contient les composants réutilisables qui se trouvent dans toute l'application.
  - `assets/` contient les images ou les polices utilisées dans l'application.
  - `services/` contient les différents éléments de logique utilisés par l'application.

## Caractéristiques notables

### Commune

- `services/theme.ts` définit le thème de l'application (couleur, typographie, ...). Il est utilisé par tous les composants MUI et est également compatible avec les librairies JS externes grâce au hook `useTheme` : vous pouvez en savoir plus avec la [documentation MUI](https://mui.com/material-ui/customization/theming/)
- Nous utilisons un plugin à Vite qui permet d'utiliser la bibliothèque SVGR : il transforme les fichiers `.svg` en composants React permettant une utilisation facile des SVGs dans React.

### Controlleur

- `services/snackbar/` définit un composant d'alerte qui peut facilement être appelé n'importe où dans l'application. Vous pouvez lire la philosophie de notre snackbar [ici](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)
- `components/CustomKeyboard/` définit le clavier personnalisé utilisé dans les pages Create and Join Meeting. Il utilise une bibliothèque externe qui doit être remplacée : vous pouvez en savoir plus à ce sujet dans le fichier `CustomKeyboard.tsx`.

### Écran principal

- `services/mediaDevices` définit les fonctions qui nous permettent d'utiliser facilement les MediaDevices dans l'application. La façon dont ils sont choisis est faite par le fichier `services/config.ts`.
- La SharePage essaie d'obtenir un périphérique de partage qu'elle affiche à l'écran : pour l'instant, le périphérique de partage est le flux vidéo provenant de ce qui est branché sur le port d'entrée HDMI du Poly GC8.
- Le MeetingPage utilise le Jitsi React SDK, qui est sous le capot l'API Jitsi IFrame. Ainsi, nous sommes pour l'instant limités par ce que l'API IFrame propose. Cela limite la fonctionnalité de partage à l'intérieur d'une réunion : il n'y a actuellement aucun moyen de sélectionner un dispositif de partage lorsque l'on active le partage d'écran.

## À faire

- Comme mentionné ci-dessus, le CustomKeyboard devrait être remplacé : définir notre propre clavier, grâce aux composants MUI et aux éléments grid/flex, devrait nous permettre d'obtenir un clavier réactif, qui interagit bien avec la façon dont nous thématisons l'application.
- Ajouter la fonction de partage d'écran à l'intérieur d'une réunion Jitsi : pour ce faire, nous pensons que vous devriez soit utiliser la bibliothèque de bas niveau, soit essayer de demander à l'équipe Jitsi Meet d'ajouter la fonction manquante `setScreenShareDevice` à l'API IFrame (ou faire vous-même une Pull Request).
- Pour des gains de performance, vous pourriez vérifier si notre utilisation des crochets `useEffect` était nécessaire selon ce morceau de [documentation React](https://beta.reactjs.org/learn/you-might-not-need-an-effect)
