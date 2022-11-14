---
sidebar_position: 3
---

# Introduction

Trois applications essentielles rendent la vidéoconférence à la fois simple et facile avec Jitsi-Box-Pro. Ces applications sont :
- <b>Controller</b>
- <b>Service Bridge</b>
- <b>Main-Screen</b>


![image](https://user-images.githubusercontent.com/30130845/185072834-20d32885-8328-4d23-b55a-8b288108a385.png)


Ces applications sont basées sur technologies suivantes :
- <b>React</b> : une bibliothèque de front-end en JavaScript
- <b>Typescript</b> : un langage de programmation fortement typé qui est un sur-ensemble de JavaScript.
- <b>MUI</b> : une bibliothèque de composants React permettant un prototypage rapide.
- <b>Vite</b> : une bibliothèque d'outils frontaux qui configure notre environnement de développement.
- <b>Socket.io</b> : pour communiquer avec la passerelle à l'aide de WebSockets.




## Structure des dossiers

A la racine, le dossier `apps` est divisé en 2 parties:
- CONTROLLER : contient tout ce qui permet de gérer l'affichage et le paramétrage de la tablette 
- MAINSCREEN : contient tout ce qui permet de gérer l'affichage de l'écran qui contiendra l'iframe Jitsi

A la racine, le dossier `services` contient l'application Bridge:
- BRIDGE : La communication se fait via le Bridge. En envoyant et recevant des sockets entre le bridge et le controller d'une part et entre le bridge et le mainscreen d'une autre part.



Toutes les applications ont la même structure de dossiers de base :

- `index.html est le point d'entrée du site pour le navigateur
- `src/`
  - `index.tsx` ou `main.tsx` sont chargés à l'intérieur de `index.html` et rendent le composant `App.tsx`.
  - Le composant "App.tsx" est le point d'entrée de l'application React.
  - `Routes.tsx` est le composant principal rendu à l'intérieur de `App.tsx` et rend une page différente en fonction du chemin URL.
  - `views/` contient les différentes pages rendues par `Routes.tsx`.
  - `components/` contient les composants réutilisables qui se trouvent dans toute l'application.
  - `assets/` contient les images ou les polices utilisées dans l'application.
  - `services/` contient les différents éléments de logique utilisés par l'application.

## Caractéristiques à noter

- `services/theme.ts` définit le thème de l'application (couleur, typographie, ...). Il est utilisé par tous les composants MUI et est également compatible avec les librairies JS externes grâce au hook `useTheme` : vous pouvez en apprendre plus avec la [documentation MUI](https://mui.com/material-ui/customization/theming/)
- Nous utilisons un plugin Vite qui permet d'utiliser la bibliothèque SVGR : il transforme les fichiers `.svg` en composants React permettant une utilisation facile des SVGs dans React.