"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[864],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:2},o="Main-screen",c={unversionedId:"structure/main-screen/main-screen",id:"structure/main-screen/main-screen",title:"Main-screen",description:"Caract\xe9ristiques \xe0 noter",source:"@site/docs/structure/main-screen/main-screen.md",sourceDirName:"structure/main-screen",slug:"/structure/main-screen/",permalink:"/jitsibox-pro/docs/structure/main-screen/",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/docs/structure/main-screen/main-screen.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Contr\xf4leur",permalink:"/jitsibox-pro/docs/structure/controller/"},next:{title:"Fonctionnement de l'application",permalink:"/jitsibox-pro/docs/structure/fonctionnement/"}},s={},l=[{value:"Caract\xe9ristiques \xe0 noter",id:"caract\xe9ristiques-\xe0-noter",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"main-screen"},"Main-screen"),(0,i.kt)("h2",{id:"caract\xe9ristiques-\xe0-noter"},"Caract\xe9ristiques \xe0 noter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"services/mediaDevices")," d\xe9finit les fonctions qui nous permettent d'utiliser facilement les MediaDevices dans l'application. La fa\xe7on dont ils sont choisis est faite par le fichier ",(0,i.kt)("inlineCode",{parentName:"li"},"services/config.ts"),"."),(0,i.kt)("li",{parentName:"ul"},"La SharePage essaie d'obtenir un p\xe9riph\xe9rique de partage qu'elle affiche \xe0 l'\xe9cran : pour l'instant, le p\xe9riph\xe9rique de partage est le flux vid\xe9o provenant de ce qui est branch\xe9 sur le port d'entr\xe9e HDMI du Poly GC8."),(0,i.kt)("li",{parentName:"ul"},"Le MeetingPage utilise le Jitsi React SDK, qui est sous le capot l'API Jitsi IFrame. Ainsi, nous sommes pour l'instant limit\xe9s par ce que l'API IFrame propose. Cela limite la fonctionnalit\xe9 de partage \xe0 l'int\xe9rieur d'une r\xe9union : il n'y a actuellement aucun moyen de s\xe9lectionner un dispositif de partage lorsque l'on active le partage d'\xe9cran.")))}p.isMDXComponent=!0}}]);