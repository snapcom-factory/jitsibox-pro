---
sidebar_position: 2
---
# Main-screen
# Arborescence du dossier Main-screen

```bash

jitsibox-pro/apps/main-screen/
├── src
│   ├── assets
│   │   ├── fonts
│   │   │   └── Marianne
│   │   │       ├── Marianne-Bold.woff2
│   │   │       ├── Marianne-Bold_Italic.woff2
│   │   │       ├── Marianne-Light.woff2
│   │   │       ├── Marianne-Light_Italic.woff2
│   │   │       ├── Marianne-Medium.woff2
│   │   │       ├── Marianne-Medium_Italic.woff2 
│   │   │       ├── Marianne-Regular.woff2 
│   │   │       └── Marianne-Regular_Italic.woff2  
│   │   ├── logo_eng.svg
│   │   └── logo_fr.svg 
│   ├── components
│   │   ├── Header.tsx
│   │   ├── ReconnectingBackdrop.tsx
│   │   ├── ViewContainer.tsx
│   │   └── index.ts
│   ├── services
│   │   ├── mediaDevices
│   │   │   ├── getCameraDevice.ts
│   │   │   ├── getInputMicDevice.ts
│   │   │   ├── getOutputSpeakerDevice.ts
│   │   │   ├── getShareDevice.ts 
│   │   │   ├── index.ts
│   │   │   └── utils.ts
│   │   ├── socket
│   │   │   ├── index.ts
│   │   │   ├── socketContext.ts
│   │   │   ├── socketProvider.tsx 
│   │   │   ├── useSocketContext.ts
│   │   │   └── useSocketListener.ts 
│   │   ├── config.ts 
│   │   ├── theme.ts
│   │   └── themeOverride.d.ts
│   ├── views
│   │   ├── CreatePage.tsx
│   │   ├── HomeMenu.tsx
│   │   ├── JoinPage.tsx
│   │   ├── MeetingPage.tsx 
│   │   ├── NotFound.tsx
│   │   ├── SharingPage.tsx 
│   │   └── index.ts
│   ├── App.tsx
│   ├── Routes.tsx
│   ├── index.tsx 
│   └── model.ts 
│
├── .env
├── index.html
├── package-lock.json 
├── package.json
├── tsconfig.json 
├── tsconfig.node.json
├── tsconfig.ref.json 
└── vite.config.ts

```
# Dossiers en detail:

### Dossier: Main-Screen

Le dossier `Main-Screen` contient l'application Main-Screen.

```bash

jitsibox-pro/apps/
└── main-screen 
    ├── src
    ├── index.html
    ├── package-lock.json 
    ├── .env
    ├── package.json
    ├── tsconfig.json 
    ├── tsconfig.node.json
    ├── tsconfig.ref.json 
    └── vite.config.ts

```

**index.html**: est le point d'entrée du site depuis le navigateur exemple: `https://localhost:3002`

**.env**: Il s'agit du fichier d'environnement qui doit être créé après l'installation de l'application. Pour l'application main-screen, l'environnement doit ressembler à ceci :

    VITE_WEBCONF_TOKEN =
    VITE_DOMAIN = meet.jit.si
    VITE_COMPANY_NAME = COMPANY
    VITE_COMPANY_NAME2 = NAME
    VITE_ROOM_NAME = MY_ROOM
    VITE_API_KEY =
    VITE_API_UR = 
### Dossier: Src

Le dossier `Scr` contient le code source du Main-Screen.
```bash

jitsibox-pro/apps/main-screen/
└── src
    ├── assets
    ├── components
    ├── services
    ├── views 
    ├── App.tsx 
    ├── Routes.tsx
    ├── index.tsx
    └── model.ts 

```
**App.tsx**: est le point d'entrée de l'application React.


**Routes.tsx**: composant principal dans App.tsx , permettant d’afficher pages contenues dans Views en fonction de l'URL:

- /share: rend la page de partage d'écran SharingPage.tsx
- /create: rend la page de création de réunion CreatePage.tsx

### Dossier: Assets

Le dossier `Assets` contient les logos et les polices.
```bash

jitsibox-pro/apps/main-screen/
└── src
    └── assets
        ├── fonts
        │   └── Marianne
        │       ├── Marianne-Bold.woff2
        │       ├── Marianne-Bold_Italic.woff2
        │       ├── Marianne-Light.woff2
        │       ├── Marianne-Light_Italic.woff2
        │       ├── Marianne-Medium.woff2
        │       ├── Marianne-Medium_Italic.woff2 
        │       ├── Marianne-Regular.woff2 
        │       └── Marianne-Regular_Italic.woff2 
        ├── logo_eng.svg
        └── logo_fr.svg 
         

```

**fonts**: est un dossier qui contient les fonts qui seront utilisés pour l'affichage des textes etc… (.woff2).

**logo_eng.svg** & **logo_eng.svg**  : sont des logos génériques.
### Dossier: Components

Le dossier `Components`  contient les composants réutilisables qui se trouvent dans l'ensemble de l'application. (reconnexion, en-têtes, etc...)
```bash

jitsibox-pro/apps/main-screen/
└── src
   └── components
        ├── Header.tsx
        ├── ReconnectingBackdrop.tsx
        ├── ViewContainer.tsx
        └── index.ts
     

```

**Header.tsx**: pour les hauts de page.

**ReconnectingBackDrop.tsx**: le composant qui affiche le `Reconnecting` tant que le bridge n'est pas accessible ou la connexion est perdue.

**ViewContainer.tsx**: pour les conteneurs qui contiendront l'ensemble des boutons et éléments HTML de chaque page affichée.


**Index.tsx**: export de tous les composants utilisés.



### Dossier: Services

Le dossier `Services` contient divers éléments de logique que l'application utilise.

```bash

jitsibox-pro/apps/main-screen/
└── src
   └── services
        ├── mediaDevices
        │   ├── getCameraDevice.ts
        │   ├── getInputMicDevice.ts
        │   ├── getOutputSpeakerDevice.ts 
        │   ├── getShareDevice.ts
        │   ├── index.ts 
        │   └── utils.ts 
        ├── socket
        │   ├── index.ts
        │   ├── socketContext.ts
        │   ├── socketProvider.tsx 
        │   ├── useSocketContext.ts
        │   └── useSocketListener.ts 
        ├── config.ts
        ├── theme.ts        
        └── themeOverride.d.ts
     
```

**MediaDevices**: définit les fonctions qui nous permettent d'utiliser facilement les MediaDevices dans l'application. La façon dont ils sont choisis est faite par le fichier `services/config.ts`.

**Socket**: est un dossier permettant de gérer la partie socket entre les applications.

### Dossier: Views


Le dossier `Views` contient les différentes pages rendues par Routes.tsx.


```bash

jitsibox-pro/apps/main-screen/
└── src
    └── views
        ├── CreatePage.tsx
        ├── HomeMenu.tsx
        ├── JoinPage.tsx
        ├── MeetingPage.tsx 
        ├── NotFound.tsx
        ├── SharingPage.tsx 
        └── index.ts
     

```

**CreatePage.tsx**: affichage de la page de création de la réunion.

**HomeMenu.tsx**: Affiche la page se contenant le menu principal pour choisir entre `créer` ou `rejoindre une réunion`.

**JoinPage.tsx**: Affiche la page de rejoindre une réunion.

**MeetingPage.tsx**: Affiche la page de lors d'une réunion composée.

**NotFound.tsx**: Affiche la page  en cas d'url invalide.

**SharingPage.tsx**: Affiche la page de lors d'un partage d'écran.





## Caractéristiques à noter


- La SharePage essaie d'obtenir un périphérique de partage qu'elle affiche à l'écran : pour l'instant, le périphérique de partage est le flux vidéo provenant de ce qui est branché sur le port d'entrée HDMI de la tablette de contrôle.
- Le MeetingPage utilise le Jitsi React SDK, qui est sous le capot l'API Jitsi IFrame. Ainsi, nous sommes pour l'instant limités par ce que l'API IFrame propose. Cela limite la fonctionnalité de partage à l'intérieur d'une réunion : il n'y a actuellement aucun moyen de sélectionner un dispositif de partage lorsque l'on active le partage d'écran.