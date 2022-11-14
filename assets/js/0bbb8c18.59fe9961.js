"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[2354],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?s.createElement(g,i(i({ref:n},p),{},{components:t})):s.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(7462),r=(t(7294),t(3905));const a={sidebar_position:2},i="Main-screen",o={unversionedId:"structure/composants/main-screen",id:"structure/composants/main-screen",title:"Main-screen",description:"Dossier: Main-Screen",source:"@site/docs/structure/composants/main-screen.md",sourceDirName:"structure/composants",slug:"/structure/composants/main-screen",permalink:"/jitsibox-pro/docs/structure/composants/main-screen",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/docs/structure/composants/main-screen.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Controller",permalink:"/jitsibox-pro/docs/structure/composants/controller"},next:{title:"Bridge",permalink:"/jitsibox-pro/docs/structure/composants/bridge"}},l={},c=[{value:"Dossier: Main-Screen",id:"dossier-main-screen",level:3},{value:"Dossier: Src",id:"dossier-src",level:3},{value:"Dossier: Assets",id:"dossier-assets",level:3},{value:"Dossier: Components",id:"dossier-components",level:3},{value:"Dossier: Services",id:"dossier-services",level:3},{value:"Dossier: Views",id:"dossier-views",level:3},{value:"Caract\xe9ristiques \xe0 noter",id:"caract\xe9ristiques-\xe0-noter",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"main-screen"},"Main-screen"),(0,r.kt)("h1",{id:"arborescence-du-dossier-main-screen"},"Arborescence du dossier Main-screen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/main-screen/\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u2502   \u251c\u2500\u2500 fonts\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Marianne\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Bold.woff2\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Bold_Italic.woff2\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Light.woff2\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Light_Italic.woff2\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Medium.woff2\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Medium_Italic.woff2 \n\u2502   \u2502   \u2502       \u251c\u2500\u2500 Marianne-Regular.woff2 \n\u2502   \u2502   \u2502       \u2514\u2500\u2500 Marianne-Regular_Italic.woff2  \n\u2502   \u2502   \u251c\u2500\u2500 logo_eng.svg\n\u2502   \u2502   \u2514\u2500\u2500 logo_fr.svg \n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 Header.tsx\n\u2502   \u2502   \u251c\u2500\u2500 ReconnectingBackdrop.tsx\n\u2502   \u2502   \u251c\u2500\u2500 ViewContainer.tsx\n\u2502   \u2502   \u2514\u2500\u2500 index.ts\n\u2502   \u251c\u2500\u2500 services\n\u2502   \u2502   \u251c\u2500\u2500 mediaDevices\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 getCameraDevice.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 getInputMicDevice.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 getOutputSpeakerDevice.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 getShareDevice.ts \n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 utils.ts\n\u2502   \u2502   \u251c\u2500\u2500 socket\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 socketContext.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 socketProvider.tsx \n\u2502   \u2502   \u2502   \u251c\u2500\u2500 useSocketContext.ts\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 useSocketListener.ts \n\u2502   \u2502   \u251c\u2500\u2500 config.ts \n\u2502   \u2502   \u251c\u2500\u2500 theme.ts\n\u2502   \u2502   \u2514\u2500\u2500 themeOverride.d.ts\n\u2502   \u251c\u2500\u2500 views\n\u2502   \u2502   \u251c\u2500\u2500 CreatePage.tsx\n\u2502   \u2502   \u251c\u2500\u2500 HomeMenu.tsx\n\u2502   \u2502   \u251c\u2500\u2500 JoinPage.tsx\n\u2502   \u2502   \u251c\u2500\u2500 MeetingPage.tsx \n\u2502   \u2502   \u251c\u2500\u2500 NotFound.tsx\n\u2502   \u2502   \u251c\u2500\u2500 SharingPage.tsx \n\u2502   \u2502   \u2514\u2500\u2500 index.ts\n\u2502   \u251c\u2500\u2500 App.tsx\n\u2502   \u251c\u2500\u2500 Routes.tsx\n\u2502   \u251c\u2500\u2500 index.tsx \n\u2502   \u2514\u2500\u2500 model.ts \n\u2502\n\u251c\u2500\u2500 .env\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 package-lock.json \n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 tsconfig.json \n\u251c\u2500\u2500 tsconfig.node.json\n\u251c\u2500\u2500 tsconfig.ref.json \n\u2514\u2500\u2500 vite.config.ts\n\n")),(0,r.kt)("h1",{id:"dossiers-en-detail"},"Dossiers en detail:"),(0,r.kt)("h3",{id:"dossier-main-screen"},"Dossier: Main-Screen"),(0,r.kt)("p",null,"Le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"Main-Screen")," contient l'application Main-Screen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/\n\u2514\u2500\u2500 main-screen \n    \u251c\u2500\u2500 src\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 package-lock.json \n    \u251c\u2500\u2500 .env\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 tsconfig.json \n    \u251c\u2500\u2500 tsconfig.node.json\n    \u251c\u2500\u2500 tsconfig.ref.json \n    \u2514\u2500\u2500 vite.config.ts\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"index.html"),": est le point d'entr\xe9e du site depuis le navigateur exemple: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".env"),": Il s'agit du fichier d'environnement qui doit \xeatre cr\xe9\xe9 apr\xe8s l'installation de l'application. Pour l'application main-screen, l'environnement doit ressembler \xe0 ceci :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"VITE_WEBCONF_TOKEN =\nVITE_DOMAIN = meet.jit.si\nVITE_COMPANY_NAME = COMPANY\nVITE_COMPANY_NAME2 = NAME\nVITE_ROOM_NAME = MY_ROOM\nVITE_API_KEY =\nVITE_API_UR = \n")),(0,r.kt)("h3",{id:"dossier-src"},"Dossier: Src"),(0,r.kt)("p",null,"Le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"Scr")," contient le code source du Main-Screen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/main-screen/\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 assets\n    \u251c\u2500\u2500 components\n    \u251c\u2500\u2500 services\n    \u251c\u2500\u2500 views \n    \u251c\u2500\u2500 App.tsx \n    \u251c\u2500\u2500 Routes.tsx\n    \u251c\u2500\u2500 index.tsx\n    \u2514\u2500\u2500 model.ts \n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"App.tsx"),": est le point d'entr\xe9e de l'application React."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Routes.tsx"),": composant principal dans App.tsx , permettant d\u2019afficher pages contenues dans Views en fonction de l'URL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/share: rend la page de partage d'\xe9cran SharingPage.tsx"),(0,r.kt)("li",{parentName:"ul"},"/create: rend la page de cr\xe9ation de r\xe9union CreatePage.tsx")),(0,r.kt)("h3",{id:"dossier-assets"},"Dossier: Assets"),(0,r.kt)("p",null,"Le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets")," contient les logos et les polices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/main-screen/\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 assets\n        \u251c\u2500\u2500 fonts\n        \u2502   \u2514\u2500\u2500 Marianne\n        \u2502       \u251c\u2500\u2500 Marianne-Bold.woff2\n        \u2502       \u251c\u2500\u2500 Marianne-Bold_Italic.woff2\n        \u2502       \u251c\u2500\u2500 Marianne-Light.woff2\n        \u2502       \u251c\u2500\u2500 Marianne-Light_Italic.woff2\n        \u2502       \u251c\u2500\u2500 Marianne-Medium.woff2\n        \u2502       \u251c\u2500\u2500 Marianne-Medium_Italic.woff2 \n        \u2502       \u251c\u2500\u2500 Marianne-Regular.woff2 \n        \u2502       \u2514\u2500\u2500 Marianne-Regular_Italic.woff2 \n        \u251c\u2500\u2500 logo_eng.svg\n        \u2514\u2500\u2500 logo_fr.svg \n         \n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fonts"),": est un dossier qui contient les fonts qui seront utilis\xe9s pour l'affichage des textes etc\u2026 (.woff2)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"logo_eng.svg")," & ",(0,r.kt)("strong",{parentName:"p"},"logo_eng.svg"),"  : sont des logos g\xe9n\xe9riques."),(0,r.kt)("h3",{id:"dossier-components"},"Dossier: Components"),(0,r.kt)("p",null,"Le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"Components"),"  contient les composants r\xe9utilisables qui se trouvent dans l'ensemble de l'application. (reconnexion, en-t\xeates, etc...)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/main-screen/\n\u2514\u2500\u2500 src\n   \u2514\u2500\u2500 components\n        \u251c\u2500\u2500 Header.tsx\n        \u251c\u2500\u2500 ReconnectingBackdrop.tsx\n        \u251c\u2500\u2500 ViewContainer.tsx\n        \u2514\u2500\u2500 index.ts\n     \n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Header.tsx"),": pour les hauts de page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ReconnectingBackDrop.tsx"),": le composant qui affiche le ",(0,r.kt)("inlineCode",{parentName:"p"},"Reconnecting")," tant que le bridge n'est pas accessible ou la connexion est perdue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ViewContainer.tsx"),": pour les conteneurs qui contiendront l'ensemble des boutons et \xe9l\xe9ments HTML de chaque page affich\xe9e."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Index.tsx"),": export de tous les composants utilis\xe9s."),(0,r.kt)("h3",{id:"dossier-services"},"Dossier: Services"),(0,r.kt)("p",null,"Le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"Services")," contient divers \xe9l\xe9ments de logique que l'application utilise."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/main-screen/\n\u2514\u2500\u2500 src\n   \u2514\u2500\u2500 services\n        \u251c\u2500\u2500 mediaDevices\n        \u2502   \u251c\u2500\u2500 getCameraDevice.ts\n        \u2502   \u251c\u2500\u2500 getInputMicDevice.ts\n        \u2502   \u251c\u2500\u2500 getOutputSpeakerDevice.ts \n        \u2502   \u251c\u2500\u2500 getShareDevice.ts\n        \u2502   \u251c\u2500\u2500 index.ts \n        \u2502   \u2514\u2500\u2500 utils.ts \n        \u251c\u2500\u2500 socket\n        \u2502   \u251c\u2500\u2500 index.ts\n        \u2502   \u251c\u2500\u2500 socketContext.ts\n        \u2502   \u251c\u2500\u2500 socketProvider.tsx \n        \u2502   \u251c\u2500\u2500 useSocketContext.ts\n        \u2502   \u2514\u2500\u2500 useSocketListener.ts \n        \u251c\u2500\u2500 config.ts\n        \u251c\u2500\u2500 theme.ts        \n        \u2514\u2500\u2500 themeOverride.d.ts\n     \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MediaDevices"),": d\xe9finit les fonctions qui nous permettent d'utiliser facilement les MediaDevices dans l'application. La fa\xe7on dont ils sont choisis est faite par le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"services/config.ts"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Socket"),": est un dossier permettant de g\xe9rer la partie socket entre les applications."),(0,r.kt)("h3",{id:"dossier-views"},"Dossier: Views"),(0,r.kt)("p",null,"Le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"Views")," contient les diff\xe9rentes pages rendues par Routes.tsx."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\njitsibox-pro/apps/main-screen/\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 views\n        \u251c\u2500\u2500 CreatePage.tsx\n        \u251c\u2500\u2500 HomeMenu.tsx\n        \u251c\u2500\u2500 JoinPage.tsx\n        \u251c\u2500\u2500 MeetingPage.tsx \n        \u251c\u2500\u2500 NotFound.tsx\n        \u251c\u2500\u2500 SharingPage.tsx \n        \u2514\u2500\u2500 index.ts\n     \n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CreatePage.tsx"),": affichage de la page de cr\xe9ation de la r\xe9union."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HomeMenu.tsx"),": Affiche la page se contenant le menu principal pour choisir entre ",(0,r.kt)("inlineCode",{parentName:"p"},"cr\xe9er")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"rejoindre une r\xe9union"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JoinPage.tsx"),": Affiche la page de rejoindre une r\xe9union."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MeetingPage.tsx"),": Affiche la page de lors d'une r\xe9union compos\xe9e."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NotFound.tsx"),": Affiche la page  en cas d'url invalide."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SharingPage.tsx"),": Affiche la page de lors d'un partage d'\xe9cran."),(0,r.kt)("h2",{id:"caract\xe9ristiques-\xe0-noter"},"Caract\xe9ristiques \xe0 noter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"La SharePage essaie d'obtenir un p\xe9riph\xe9rique de partage qu'elle affiche \xe0 l'\xe9cran : pour l'instant, le p\xe9riph\xe9rique de partage est le flux vid\xe9o provenant de ce qui est branch\xe9 sur le port d'entr\xe9e HDMI de la tablette de contr\xf4le."),(0,r.kt)("li",{parentName:"ul"},"Le MeetingPage utilise le Jitsi React SDK, qui est sous le capot l'API Jitsi IFrame. Ainsi, nous sommes pour l'instant limit\xe9s par ce que l'API IFrame propose. Cela limite la fonctionnalit\xe9 de partage \xe0 l'int\xe9rieur d'une r\xe9union : il n'y a actuellement aucun moyen de s\xe9lectionner un dispositif de partage lorsque l'on active le partage d'\xe9cran.")))}u.isMDXComponent=!0}}]);