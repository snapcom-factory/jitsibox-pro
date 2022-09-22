"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},l="Introduction",o={unversionedId:"structure/structure",id:"structure/structure",title:"Introduction",description:"Jitsi-Box-Pro se compose de trois applications essentielles qui rendent la vid\xe9oconf\xe9rence simple et facile. Ces applications sont :",source:"@site/docs/structure/structure.md",sourceDirName:"structure",slug:"/structure/",permalink:"/jitsibox-pro/docs/structure/",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/docs/structure/structure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Pr\xe9sentation de l'interface",permalink:"/jitsibox-pro/docs/presentation-interface/"},next:{title:"Service Bridge",permalink:"/jitsibox-pro/docs/structure/bridge/"}},s={},u=[{value:"Structure des dossiers",id:"structure-des-dossiers",level:2},{value:"Caract\xe9ristiques \xe0 noter",id:"caract\xe9ristiques-\xe0-noter",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Jitsi-Box-Pro se compose de trois applications essentielles qui rendent la vid\xe9oconf\xe9rence simple et facile. Ces applications sont :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Contr\xf4leur")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Service Bridge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Main-Screen"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30130845/185072834-20d32885-8328-4d23-b55a-8b288108a385.png",alt:"image"})),(0,i.kt)("p",null,"Ces applications sont bas\xe9es sur technologies suivantes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"React")," : une biblioth\xe8que de front-end en JavaScript"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Typescript")," : un langage de programmation fortement typ\xe9 qui est un sur-ensemble de JavaScript."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"MUI")," : une biblioth\xe8que de composants React permettant un prototypage rapide."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Vite")," : une biblioth\xe8que d'outils frontaux qui configure notre environnement de d\xe9veloppement."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Socket.io")," : pour communiquer avec la passerelle \xe0 l'aide de WebSockets.")),(0,i.kt)("h2",{id:"structure-des-dossiers"},"Structure des dossiers"),(0,i.kt)("p",null,"Toutes les applications ont la m\xeame structure de dossiers de base :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"`index.html est le point d'entr\xe9e du site pour le navigateur"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.tsx")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},"main.tsx")," sont charg\xe9s \xe0 l'int\xe9rieur de ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," et rendent le composant ",(0,i.kt)("inlineCode",{parentName:"li"},"App.tsx"),"."),(0,i.kt)("li",{parentName:"ul"},"Le composant \"App.tsx\" est le point d'entr\xe9e de l'application React."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Routes.tsx")," est le composant principal rendu \xe0 l'int\xe9rieur de ",(0,i.kt)("inlineCode",{parentName:"li"},"App.tsx")," et rend une page diff\xe9rente en fonction du chemin URL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"views/")," contient les diff\xe9rentes pages rendues par ",(0,i.kt)("inlineCode",{parentName:"li"},"Routes.tsx"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"components/")," contient les composants r\xe9utilisables qui se trouvent dans toute l'application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assets/")," contient les images ou les polices utilis\xe9es dans l'application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"services/")," contient les diff\xe9rents \xe9l\xe9ments de logique utilis\xe9s par l'application.")))),(0,i.kt)("h2",{id:"caract\xe9ristiques-\xe0-noter"},"Caract\xe9ristiques \xe0 noter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"services/theme.ts")," d\xe9finit le th\xe8me de l'application (couleur, typographie, ...). Il est utilis\xe9 par tous les composants MUI et est \xe9galement compatible avec les librairies JS externes gr\xe2ce au hook ",(0,i.kt)("inlineCode",{parentName:"li"},"useTheme")," : vous pouvez en apprendre plus avec la ",(0,i.kt)("a",{parentName:"li",href:"https://mui.com/material-ui/customization/theming/"},"documentation MUI")),(0,i.kt)("li",{parentName:"ul"},"Nous utilisons un plugin \xe0 Vite qui permet d'utiliser la biblioth\xe8que SVGR : il transforme les fichiers ",(0,i.kt)("inlineCode",{parentName:"li"},".svg")," en composants React permettant une utilisation facile des SVGs dans React.")))}c.isMDXComponent=!0}}]);