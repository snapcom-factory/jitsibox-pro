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
│   │   │   ├── index.ts 
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
# Controller
- `Index.html` point d'entrée du site depuis le navigateur exemple: `https://localhost:3000`
- `src/Main.tsx` est exécuté dans index.html, rend une application react
- `src/App.tsx` est le point d'entrée de l'application React
- Le dossier `src/components` contient les composants React
- Le dossier `src/components/CustomKeyboard` contient les fichiers dédiés au clavier:




## Caractéristiques à noter

- `services/snackbar/` définit un composant d'alerte qui peut facilement être appelé n'importe où dans l'application. Vous pouvez lire la philosophie de notre snackbar [ici](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)
- `components/CustomKeyboard/` définit le clavier personnalisé utilisé dans les pages Create and Join Meeting. Il utilise une bibliothèque externe qui doit être remplacée : vous pouvez en savoir plus à ce sujet dans le fichier `CustomKeyboard.tsx`.