"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[1065],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var s=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=s.createContext({}),p=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return s.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return t?s.createElement(g,a(a({ref:n},u),{},{components:t})):s.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<r;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2},a="Controller",i={unversionedId:"structure/composants/controller",id:"structure/composants/controller",title:"Controller",description:"Dossier: Controller",source:"@site/docs/structure/composants/controller.md",sourceDirName:"structure/composants",slug:"/structure/composants/controller",permalink:"/jitsibox-pro/docs/structure/composants/controller",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/docs/structure/composants/controller.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/jitsibox-pro/docs/structure/"},next:{title:"Main-screen",permalink:"/jitsibox-pro/docs/structure/composants/main-screen"}},l={},p=[{value:"Dossier: Controller",id:"dossier-controller",level:3},{value:"Dossier: Scr",id:"dossier-scr",level:3},{value:"Dossier: Assets",id:"dossier-assets",level:3},{value:"Dossier: Components",id:"dossier-components",level:3},{value:"Dossier: Services",id:"dossier-services",level:3},{value:"Dossier: Views",id:"dossier-views",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"controller"},"Controller"),(0,o.kt)("h1",{id:"arborescence-du-dossier-controller"},"Arborescence du dossier Controller"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/controller/\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u2502   \u251c\u2500\u2500 fonts\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Marianne\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Bold.woff2\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Bold_Italic.woff2\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Light.woff2\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Light_Italic.woff2\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Medium.woff2\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Medium_Italic.woff2 \n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Regular.woff2 \n\u2502   \u2502   \u2502       \u2514\u2500\u2500 Marianne-Regular_Italic.woff2 \n\u2502   \u2502   \u251c\u2500\u2500 DisplayChat.tsx\n\u2502   \u2502   \u251c\u2500\u2500 HideChat.tsx\n\u2502   \u2502   \u251c\u2500\u2500 WaveHand.tsx\n\u2502   \u2502   \u251c\u2500\u2500 WavingHand.tsx \n\u2502   \u2502   \u251c\u2500\u2500 logo_eng.svg\n\u2502   \u2502   \u2514\u2500\u2500 logo_fr.svg \n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 CustomKeyboard\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 CustomKeyboard.css\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 CustomKeyboard.tsx\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 CustomKeyboardJoinPage.tsx \n\u2502   \u2502   \u2502   \u251c\u2500\u2500 CustomLayouts.ts\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.ts \n\u2502   \u2502   \u251c\u2500\u2500 ActionButton.tsx\n\u2502   \u2502   \u251c\u2500\u2500 Footer.tsx\n\u2502   \u2502   \u251c\u2500\u2500 Header.tsx\n\u2502   \u2502   \u251c\u2500\u2500 MenuButton.tsx\n\u2502   \u2502   \u251c\u2500\u2500 ReconnectingBackdrop.tsx\n\u2502   \u2502   \u251c\u2500\u2500 ReturnToMenuButton.tsx\n\u2502   \u2502   \u251c\u2500\u2500 TextInput.tsx\n\u2502   \u2502   \u251c\u2500\u2500 TextInputJoinPage.tsx \n\u2502   \u2502   \u251c\u2500\u2500 ViewContainer.tsx\n\u2502   \u2502   \u2514\u2500\u2500 index.ts\n\u2502   \u251c\u2500\u2500 services\n\u2502   \u2502   \u251c\u2500\u2500 navigate\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 state.types.d.ts\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 useCustomNavigate.tsx\n\u2502   \u2502   \u251c\u2500\u2500 snackbar\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 snackbarContext.ts \n\u2502   \u2502   \u2502   \u251c\u2500\u2500 snackbarProvider.tsx\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 useSnackbarContext.ts \n\u2502   \u2502   \u251c\u2500\u2500 socket\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 socketContext.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 socketProvider.tsx \n\u2502   \u2502   \u2502   \u251c\u2500\u2500 useSocketContext.ts\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 useSocketListener.ts \n\u2502   \u2502   \u251c\u2500\u2500 theme.ts\n\u2502   \u2502   \u2514\u2500\u2500 themeOverride.d.ts\n\u2502   \u251c\u2500\u2500 views\n\u2502   \u2502   \u251c\u2500\u2500 MeetingPage\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 MeetingMainControls.tsx\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 MeetingPage.tsx\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 NumberOfParticipantsIndicator.tsx \n\u2502   \u2502   \u2502   \u251c\u2500\u2500 QRCodeButton.tsx \n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.ts\n\u2502   \u2502   \u251c\u2500\u2500 CreatePage.tsx\n\u2502   \u2502   \u251c\u2500\u2500 HomeMenu.tsx\n\u2502   \u2502   \u251c\u2500\u2500 JoinPage.tsx\n\u2502   \u2502   \u251c\u2500\u2500 NotFound.tsx\n\u2502   \u2502   \u251c\u2500\u2500 SharingPage.tsx \n\u2502   \u2502   \u2514\u2500\u2500 index.ts\n\u2502   \u251c\u2500\u2500 App.tsx\n\u2502   \u251c\u2500\u2500 Routes.tsx\n\u2502   \u251c\u2500\u2500 main.tsx\n\u2502   \u251c\u2500\u2500 model.ts\n\u2502   \u2514\u2500\u2500 vite-env.d.ts\n\u2502\n\u251c\u2500\u2500 .env\n\u251c\u2500\u2500 index.css\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 package-lock.json \n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 tsconfig.json \n\u251c\u2500\u2500 tsconfig.node.json\n\u2514\u2500\u2500 vite.config.ts\n\n")),(0,o.kt)("h1",{id:"dossiers-en-detail"},"Dossiers en detail:"),(0,o.kt)("h3",{id:"dossier-controller"},"Dossier: Controller"),(0,o.kt)("p",null,"Le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," contient l'application Controller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/\n\u2514\u2500\u2500 controller\n    \u251c\u2500\u2500 src\n    \u251c\u2500\u2500 index.css \n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 package-lock.json \n    \u251c\u2500\u2500 .env\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 tsconfig.json \n    \u251c\u2500\u2500 tsconfig.node.json\n    \u2514\u2500\u2500 vite.config.ts\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"index.html"),": est le point d'entr\xe9e du site depuis le navigateur exemple: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:3000")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".env"),": Il s'agit du fichier d'environnement qui doit \xeatre cr\xe9\xe9 apr\xe8s l'installation de l'application. Pour l'application contr\xf4leur, l'environnement doit ressembler \xe0 ceci :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"VITE_DOMAIN = meet.jit.si\nVITE_COMPANY_NAME = COMPANY\nVITE_COMPANY_NAME2 = NAME\n")),(0,o.kt)("h3",{id:"dossier-scr"},"Dossier: Scr"),(0,o.kt)("p",null,"Le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"Scr")," contient le code source du Controller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/controller/\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 assets\n    \u251c\u2500\u2500 components\n    \u251c\u2500\u2500 services\n    \u251c\u2500\u2500 views \n    \u251c\u2500\u2500 App.tsx \n    \u251c\u2500\u2500 Routes.tsx\n    \u251c\u2500\u2500 main.tsx\n    \u251c\u2500\u2500 model.ts \n    \u2514\u2500\u2500 vite-env.d.ts\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"App.tsx"),": est le point d'entr\xe9e de l'application React."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Main.tsx"),": est ex\xe9cut\xe9 dans ",(0,o.kt)("a",{parentName:"p",href:"#dossier-controller"},"index.html"),", rend une application react."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Routes.tsx"),": composant principal dans App.tsx , rend les pages contenues dans Views en fonction de l'URL:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/ share: rend la page de partage d'\xe9cran SharingPage.tsx"),(0,o.kt)("li",{parentName:"ul"},"/create: rend la page de cr\xe9ation de r\xe9union CreatePage.tsx")),(0,o.kt)("h3",{id:"dossier-assets"},"Dossier: Assets"),(0,o.kt)("p",null,"Le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets")," contient les images, les logos & les polices."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/controller/\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 assets\n        \u251c\u2500\u2500 fonts\n        \u2502   \u2514\u2500\u2500 Marianne\n        \u2502       \u251c\u2500\u2500 Marianne-Bold.woff2\n        \u2502       \u251c\u2500\u2500 Marianne-Bold_Italic.woff2\n        \u2502       \u251c\u2500\u2500 Marianne-Light.woff2\n        \u2502       \u251c\u2500\u2500 Marianne-Light_Italic.woff2\n        \u2502       \u251c\u2500\u2500 Marianne-Medium.woff2\n        \u2502       \u251c\u2500\u2500 Marianne-Medium_Italic.woff2 \n        \u2502       \u251c\u2500\u2500 Marianne-Regular.woff2 \n        \u2502       \u2514\u2500\u2500 Marianne-Regular_Italic.woff2 \n        \u251c\u2500\u2500 DisplayChat.tsx\n        \u251c\u2500\u2500 HideChat.tsx\n        \u251c\u2500\u2500 WaveHand.tsx\n        \u251c\u2500\u2500 WavingHand.tsx \n        \u251c\u2500\u2500 logo_eng.svg\n        \u2514\u2500\u2500 logo_fr.svg \n         \n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"fonts"),": est un dossier qui contient les fonts qui seront utilis\xe9s pour l'affichage des textes etc\u2026 (.woff2)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"logo_eng.svg")," & ",(0,o.kt)("strong",{parentName:"p"},"logo_eng.svg"),"  : sont des logos g\xe9n\xe9riques."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".tsx"),": sont des fichiers qui impl\xe9menteront les ic\xf4nes des boutons affich\xe9s sur le Controller."),(0,o.kt)("p",null,"Le code dans les fichiers ",(0,o.kt)("inlineCode",{parentName:"p"},".tsx")," est form\xe9 \xe0 l'aide du module ",(0,o.kt)("strong",{parentName:"p"},"CreateSvgIcon de Mui/Materials")," en utilisant le path d pour cr\xe9er les ic\xf4nes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WaveHand pour la lev\xe9e de main"),(0,o.kt)("li",{parentName:"ul"},"WavingHand pour baisse de main"),(0,o.kt)("li",{parentName:"ul"},"DisplayChat pour affichage du chat"),(0,o.kt)("li",{parentName:"ul"},"HideChat pour masquer le chat")),(0,o.kt)("h3",{id:"dossier-components"},"Dossier: Components"),(0,o.kt)("p",null,"Le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"Components"),"  contient les composants r\xe9utilisables qui se trouvent dans l'ensemble de l'application. (reconnexion, en-t\xeates, etc...)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/controller/\n\u2514\u2500\u2500 src\n   \u2514\u2500\u2500 components\n        \u251c\u2500\u2500 CustomKeyboard\n        \u2502   \u251c\u2500\u2500 CustomKeyboard.css\n        \u2502   \u251c\u2500\u2500 CustomKeyboard.tsx\n        \u2502   \u251c\u2500\u2500 CustomKeyboardJoinPage.tsx \n        \u2502   \u251c\u2500\u2500 CustomLayouts.ts\n        \u2502   \u2514\u2500\u2500 index.ts \n        \u251c\u2500\u2500 ActionButton.tsx\n        \u251c\u2500\u2500 Footer.tsx\n        \u251c\u2500\u2500 Header.tsx\n        \u251c\u2500\u2500 MenuButton.tsx\n        \u251c\u2500\u2500 ReconnectingBackdrop.tsx\n        \u251c\u2500\u2500 ReturnToMenuButton.tsx\n        \u251c\u2500\u2500 TextInput.tsx\n        \u251c\u2500\u2500 TextInputJoinPage.tsx \n        \u251c\u2500\u2500 ViewContainer.tsx\n        \u2514\u2500\u2500 index.ts\n     \n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CustomKeyboard"),": est un dossier qui d\xe9finit le clavier personnalis\xe9 utilis\xe9 dans les pages Create and Join Meeting. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CustomKeyboard/Index.ts"),": le point d'entr\xe9e \xe0 la page affichant le clavier."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CustomKeyboard/CustomLayouts.ts")," & ",(0,o.kt)("strong",{parentName:"p"},"CustomKeyboard/CustomKeyboard.ts"),": contiennent le code permettant le layout du contenu \xe0 afficher tels que les lettres de l'alphabet et les chiffres en majuscules et minuscules."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CustomKeyboard.css"),": contient la forme et le design du clavier."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Footer.tsx"),": composant r\xe9act pour les bas de page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Header.tsx"),": pour les hauts de page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ActionButton"),": pour les boutons des fonctionnalit\xe9s durant la r\xe9union ",(0,o.kt)("inlineCode",{parentName:"p"},"Activer / D\xe9sactiver Micro")," etc\u2026"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Index.tsx"),": export tous les composants utilis\xe9s."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MenuButton.tsx"),": pour les boutons qui s'affichent au menu ex: ",(0,o.kt)("inlineCode",{parentName:"p"},"Cr\xe9er une r\xe9union")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"Rejoindre une R\xe9union")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ReconnectingBackDrop.tsx"),': le composant qui affiche le "Reconnecting" tant que le bridge n\'est pas accessible ou la connexion est perdue.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ReturnToMenuButton.tsx"),": pour le bouton de retour \xe0 la page de menu."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TextInput.tsx"),": pour les espaces de saisie de texte d'entr\xe9e."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ViewContainer.tsx"),": pour les conteneurs qui contiendront l'ensemble des boutons et \xe9l\xe9ments HTML de chaque page affich\xe9e."),(0,o.kt)("h3",{id:"dossier-services"},"Dossier: Services"),(0,o.kt)("p",null,"Le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"Services")," contient divers \xe9l\xe9ments de logique que l'application utilise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/controller/\n\u2514\u2500\u2500 src\n   \u2514\u2500\u2500 services\n        \u251c\u2500\u2500 navigate\n        \u2502   \u251c\u2500\u2500 index.ts\n        \u2502   \u251c\u2500\u2500 state.types.d.ts\n        \u2502   \u2514\u2500\u2500 useCustomNavigate.tsx\n        \u251c\u2500\u2500 snackbar\n        \u2502   \u251c\u2500\u2500 index.ts\n        \u2502   \u251c\u2500\u2500 snackbarContext.ts \n        \u2502   \u251c\u2500\u2500 snackbarProvider.tsx\n        \u2502   \u2514\u2500\u2500 useSnackbarContext.ts \n        \u251c\u2500\u2500 socket\n        \u2502   \u251c\u2500\u2500 index.ts\n        \u2502   \u251c\u2500\u2500 socketContext.ts\n        \u2502   \u251c\u2500\u2500 socketProvider.tsx \n        \u2502   \u251c\u2500\u2500 useSocketContext.ts\n        \u2502   \u2514\u2500\u2500 useSocketListener.ts \n        \u251c\u2500\u2500 theme.ts\n        \u2514\u2500\u2500 themeOverride.d.ts\n     \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Snackbar")," est un dossier dans lequel on d\xe9finit un composant d'alerte qui peut facilement \xeatre appel\xe9 n'importe o\xf9 dans l'application. Vous pouvez lire la philosophie de notre snackbar ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b"},"ici")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Socket"),": est un dossier permettant de g\xe9rer la partie socket entre les applications."),(0,o.kt)("h3",{id:"dossier-views"},"Dossier: Views"),(0,o.kt)("p",null,"Le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"Views")," contient les diff\xe9rentes pages rendues par Routes.tsx."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/controller/\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 views\n        \u251c\u2500\u2500 MeetingPage\n        \u2502   \u251c\u2500\u2500 MeetingMainControls.tsx\n        \u2502   \u251c\u2500\u2500 MeetingPage.tsx\n        \u2502   \u251c\u2500\u2500 NumberOfParticipantsIndicator.tsx \n        \u2502   \u251c\u2500\u2500 QRCodeButton.tsx \n        \u2502   \u2514\u2500\u2500 index.ts\n        \u251c\u2500\u2500 CreatePage.tsx\n        \u251c\u2500\u2500 HomeMenu.tsx\n        \u251c\u2500\u2500 JoinPage.tsx\n        \u251c\u2500\u2500 NotFound.tsx\n        \u251c\u2500\u2500 SharingPage.tsx \n        \u2514\u2500\u2500 index.ts\n     \n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CreatePage.tsx"),": rends la page de cr\xe9ation de la r\xe9union."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JoinPage.tsx"),": rends la page de rejoindre une r\xe9union."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NotFound.tsx"),": rends la page  en cas d'url invalide."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HomeMenu.tsx"),": rends la page se contenant le menu principal pour choisir entre ",(0,o.kt)("inlineCode",{parentName:"p"},"cr\xe9er")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"rejoindre une r\xe9union"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SharingPage.tsx"),": rends la page de lors d'un partage d'\xe9cran."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MeetingPage.tsx"),": rends la page de lors d'une r\xe9union compos\xe9e."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MeetingPage/MeetingMainControls.tsx"),": Les boutons repr\xe9sentant des fonctionnalit\xe9s lors de la r\xe9union telle que l'activation et la d\xe9sactivation de l'audio et de la vid\xe9o, la lev\xe9e ou baisse de main, affichage ou masque du chat etc\u2026 Ces boutons \xe9tant cr\xe9\xe9s \xe0 l'aide du composant ",(0,o.kt)("inlineCode",{parentName:"p"},"React ActionButton"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MeetingPage/NumberofParticipantsIndicator.tsx"),": La partie de la page affichant le nombre de participants connect\xe9s \xe0 la r\xe9union."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MeetingPage/QRCodeButton.tsx"),": La partie g\xe9n\xe9rant un QR code pour rejoindre la r\xe9union."))}c.isMDXComponent=!0}}]);