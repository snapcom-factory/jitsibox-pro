---
sidebar_position: 2
---
# Controller
# Arborescence du dossier Controller


```bash

jitsibox-pro/apps/controller/
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
│   │   ├── DisplayChat.tsx
│   │   ├── HideChat.tsx
│   │   ├── WaveHand.tsx
│   │   ├── WavingHand.tsx 
│   │   ├── logo_eng.svg
│   │   └── logo_fr.svg 
│   ├── components
│   │   ├── CustomKeyboard
│   │   │   ├── CustomKeyboard.css
│   │   │   ├── CustomKeyboard.tsx
│   │   │   ├── CustomKeyboardJoinPage.tsx 
│   │   │   ├── CustomLayouts.ts
│   │   │   └── index.ts 
│   │   ├── ActionButton.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── MenuButton.tsx
│   │   ├── ReconnectingBackdrop.tsx
│   │   ├── ReturnToMenuButton.tsx
│   │   ├── TextInput.tsx
│   │   ├── TextInputJoinPage.tsx 
│   │   ├── ViewContainer.tsx
│   │   └── index.ts
│   ├── services
│   │   ├── navigate
│   │   │   ├── index.ts
│   │   │   ├── state.types.d.ts
│   │   │   └── useCustomNavigate.tsx
│   │   ├── snackbar
│   │   │   ├── index.ts
│   │   │   ├── snackbarContext.ts 
│   │   │   ├── snackbarProvider.tsx
│   │   │   └── useSnackbarContext.ts 
│   │   ├── socket
│   │   │   ├── index.ts
│   │   │   ├── socketContext.ts
│   │   │   ├── socketProvider.tsx 
│   │   │   ├── useSocketContext.ts
│   │   │   └── useSocketListener.ts 
│   │   ├── theme.ts
│   │   └── themeOverride.d.ts
│   ├── views
│   │   ├── MeetingPage
│   │   │   ├── MeetingMainControls.tsx
│   │   │   ├── MeetingPage.tsx
│   │   │   ├── NumberOfParticipantsIndicator.tsx 
│   │   │   ├── QRCodeButton.tsx 
│   │   │   └── index.ts
│   │   ├── CreatePage.tsx
│   │   ├── HomeMenu.tsx
│   │   ├── JoinPage.tsx
│   │   ├── NotFound.tsx
│   │   ├── SharingPage.tsx 
│   │   └── index.ts
│   ├── App.tsx
│   ├── Routes.tsx
│   ├── main.tsx
│   ├── model.ts
│   └── vite-env.d.ts
│
├── .env
├── index.css
├── index.html
├── package-lock.json 
├── package.json
├── tsconfig.json 
├── tsconfig.node.json
└── vite.config.ts

```

# Dossiers en detail:

### Dossier: Controller

Le dossier `Controller` contient l'application Controller.

```bash

jitsibox-pro/apps/
└── controller
    ├── src
    ├── index.css 
    ├── index.html
    ├── package-lock.json 
    ├── .env
    ├── package.json
    ├── tsconfig.json 
    ├── tsconfig.node.json
    └── vite.config.ts

```
**index.html**: est le point d'entrée du site depuis le navigateur exemple: `https://localhost:3000`

**.env**: Il s'agit du fichier d'environnement qui doit être créé après l'installation de l'application. Pour l'application contrôleur, l'environnement doit ressembler à ceci :


    VITE_DOMAIN = meet.jit.si
    VITE_COMPANY_NAME = COMPANY
    VITE_COMPANY_NAME2 = NAME


### Dossier: Scr

Le dossier `Scr` contient le code source du Controller.
```bash

jitsibox-pro/apps/controller/
└── src
    ├── assets
    ├── components
    ├── services
    ├── views 
    ├── App.tsx 
    ├── Routes.tsx
    ├── main.tsx
    ├── model.ts 
    └── vite-env.d.ts

```
**App.tsx**: est le point d'entrée de l'application React.

**Main.tsx**: est exécuté dans [index.html](#dossier-controller), rend une application react.

**Routes.tsx**: composant principal dans App.tsx , rend les pages contenues dans Views en fonction de l'URL:

- / share: rend la page de partage d'écran SharingPage.tsx
- /create: rend la page de création de réunion CreatePage.tsx


### Dossier: Assets

Le dossier `Assets` contient les images, les logos & les polices.
```bash

jitsibox-pro/apps/controller/
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
        ├── DisplayChat.tsx
        ├── HideChat.tsx
        ├── WaveHand.tsx
        ├── WavingHand.tsx 
        ├── logo_eng.svg
        └── logo_fr.svg 
         

```
**fonts**: est un dossier qui contient les fonts qui seront utilisés pour l'affichage des textes etc… (.woff2)

**logo_eng.svg** & **logo_eng.svg**  : sont des logos génériques.

**.tsx**: sont des fichiers qui implémenteront les icônes des boutons affichés sur le Controller.

Le code dans les fichiers `.tsx` est formé à l'aide du module **CreateSvgIcon de Mui/Materials** en utilisant le path d pour créer les icônes:
- WaveHand pour la levée de main
- WavingHand pour baisse de main
- DisplayChat pour affichage du chat
- HideChat pour masquer le chat


### Dossier: Components

Le dossier `Components`  contient les composants réutilisables qui se trouvent dans l'ensemble de l'application. (reconnexion, en-têtes, etc...)

```bash

jitsibox-pro/apps/controller/
└── src
   └── components
        ├── CustomKeyboard
        │   ├── CustomKeyboard.css
        │   ├── CustomKeyboard.tsx
        │   ├── CustomKeyboardJoinPage.tsx 
        │   ├── CustomLayouts.ts
        │   └── index.ts 
        ├── ActionButton.tsx
        ├── Footer.tsx
        ├── Header.tsx
        ├── MenuButton.tsx
        ├── ReconnectingBackdrop.tsx
        ├── ReturnToMenuButton.tsx
        ├── TextInput.tsx
        ├── TextInputJoinPage.tsx 
        ├── ViewContainer.tsx
        └── index.ts
     

```

**CustomKeyboard**: est un dossier qui définit le clavier personnalisé utilisé dans les pages Create and Join Meeting. 

**CustomKeyboard/Index.ts**: le point d'entrée à la page affichant le clavier.

**CustomKeyboard/CustomLayouts.ts** & **CustomKeyboard/CustomKeyboard.ts**: contiennent le code permettant le layout du contenu à afficher tels que les lettres de l'alphabet et les chiffres en majuscules et minuscules.

**CustomKeyboard.css**: contient la forme et le design du clavier.


**Footer.tsx**: composant réact pour les bas de page.

**Header.tsx**: pour les hauts de page.

**ActionButton**: pour les boutons des fonctionnalités durant la réunion `Activer / Désactiver Micro` etc…

**Index.tsx**: export tous les composants utilisés.

**MenuButton.tsx**: pour les boutons qui s'affichent au menu ex: `Créer une réunion` ou `Rejoindre une Réunion`

**ReconnectingBackDrop.tsx**: le composant qui affiche le "Reconnecting" tant que le bridge n'est pas accessible ou la connexion est perdue.

**ReturnToMenuButton.tsx**: pour le bouton de retour à la page de menu.

**TextInput.tsx**: pour les espaces de saisie de texte d'entrée.

**ViewContainer.tsx**: pour les conteneurs qui contiendront l'ensemble des boutons et éléments HTML de chaque page affichée.


### Dossier: Services 


Le dossier `Services` contient divers éléments de logique que l'application utilise.

```bash

jitsibox-pro/apps/controller/
└── src
   └── services
        ├── navigate
        │   ├── index.ts
        │   ├── state.types.d.ts
        │   └── useCustomNavigate.tsx
        ├── snackbar
        │   ├── index.ts
        │   ├── snackbarContext.ts 
        │   ├── snackbarProvider.tsx
        │   └── useSnackbarContext.ts 
        ├── socket
        │   ├── index.ts
        │   ├── socketContext.ts
        │   ├── socketProvider.tsx 
        │   ├── useSocketContext.ts
        │   └── useSocketListener.ts 
        ├── theme.ts
        └── themeOverride.d.ts
     
```

**Snackbar** est un dossier dans lequel on définit un composant d'alerte qui peut facilement être appelé n'importe où dans l'application. Vous pouvez lire la philosophie de notre snackbar [ici](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)

**Socket**: est un dossier permettant de gérer la partie socket entre les applications.

### Dossier: Views

Le dossier `Views` contient les différentes pages rendues par Routes.tsx.
```bash

jitsibox-pro/apps/controller/
└── src
    └── views
        ├── MeetingPage
        │   ├── MeetingMainControls.tsx
        │   ├── MeetingPage.tsx
        │   ├── NumberOfParticipantsIndicator.tsx 
        │   ├── QRCodeButton.tsx 
        │   └── index.ts
        ├── CreatePage.tsx
        ├── HomeMenu.tsx
        ├── JoinPage.tsx
        ├── NotFound.tsx
        ├── SharingPage.tsx 
        └── index.ts
     

```
**CreatePage.tsx**: rends la page de création de la réunion.

**JoinPage.tsx**: rends la page de rejoindre une réunion.

**NotFound.tsx**: rends la page  en cas d'url invalide.

**HomeMenu.tsx**: rends la page se contenant le menu principal pour choisir entre `créer` ou `rejoindre une réunion`.

**SharingPage.tsx**: rends la page de lors d'un partage d'écran.

**MeetingPage.tsx**: rends la page de lors d'une réunion composée.

**MeetingPage/MeetingMainControls.tsx**: Les boutons représentant des fonctionnalités lors de la réunion telle que l'activation et la désactivation de l'audio et de la vidéo, la levée ou baisse de main, affichage ou masque du chat etc… Ces boutons étant créés à l'aide du composant `React ActionButton`.

**MeetingPage/NumberofParticipantsIndicator.tsx**: La partie de la page affichant le nombre de participants connectés à la réunion.

**MeetingPage/QRCodeButton.tsx**: La partie générant un QR code pour rejoindre la réunion.

