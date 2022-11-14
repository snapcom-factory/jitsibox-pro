"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[7020],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,N=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(N,l(l({ref:t},s),{},{components:a})):n.createElement(N,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),i=a(6010),l=a(2389),o=a(7392),p=a(7094),u=a(2466);const s="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a;const{lazy:l,block:c,defaultValue:d,values:N,groupId:k,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=N?N:h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const C=null===d?d:null!=(t=null!=d?d:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==C&&!g.some((e=>e.value===C)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,p.U)(),[E,j]=(0,r.useState)(C),x=[],{blockElementScrollPositionUntilNextRender:y}=(0,u.o5)();if(null!=k){const e=v[k];null!=e&&e!==E&&g.some((t=>t.value===e))&&j(e)}const O=e=>{const t=e.currentTarget,a=x.indexOf(t),n=g[a].value;n!==E&&(y(t),j(n),null!=k&&w(k,String(n)))},P=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;a=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:P,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},5261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));a(5488),a(5162);const i={},l="Installation d\xe9taill\xe9e",o={unversionedId:"installation/windows/windows",id:"installation/windows/windows",title:"Installation d\xe9taill\xe9e",description:"",source:"@site/docs/installation/windows/windows.md",sourceDirName:"installation/windows",slug:"/installation/windows/",permalink:"/jitsibox-pro/en/docs/installation/windows/",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/tree/wiki/i18n/en/docusaurus-plugin-content-docs/current/installation/windows/windows.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation d\xe9taill\xe9e",permalink:"/jitsibox-pro/en/docs/installation/linux/"}},p={},u=[{value:"Etape 1: Creation du compte &quot;Jitsi-Box-Pro&quot;",id:"etape-1-creation-du-compte-jitsi-box-pro",level:3},{value:"Etape 2: Installation Chromium",id:"etape-2-installation-chromium",level:3},{value:"Etape 3: Installation Git",id:"etape-3-installation-git",level:3},{value:"Etape 4: Installation Node js",id:"etape-4-installation-node-js",level:3},{value:"Etape 5: Configuration &amp; Ajout \xe9cran touch",id:"etape-5-configuration--ajout-\xe9cran-touch",level:3},{value:"Etape 6: Recuperation du projet",id:"etape-6-recuperation-du-projet",level:3},{value:"Etape 7: Configuration &amp; Executrion du projet",id:"etape-7-configuration--executrion-du-projet",level:3},{value:"Etape 8: Create Chromium &quot;Jitsi-Box-Pro user&quot;",id:"etape-8-create-chromium-jitsi-box-pro-user",level:3},{value:"Etape 9: Creation du script au demarrage",id:"etape-9-creation-du-script-au-demarrage",level:3},{value:"Etape 10: Configurer la connexion automatique Windows 10",id:"etape-10-configurer-la-connexion-automatique-windows-10",level:3},{value:"Etape 11: Nettoyage Windows",id:"etape-11-nettoyage-windows",level:3},{value:"Optimisation performance Windows",id:"optimisation-performance-windows",level:4}],s={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-d\xe9taill\xe9e"},"Installation d\xe9taill\xe9e"),(0,r.kt)("h3",{id:"etape-1-creation-du-compte-jitsi-box-pro"},'Etape 1: Creation du compte "Jitsi-Box-Pro"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquer sur le bouton ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187230954-50f10bcb-51f4-481f-aa52-a3c23811d80a.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Windows")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Puis sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187231239-00a19a03-26ae-4139-9146-ca889c8af93c.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Admin")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquer ensuite sur  ",(0,r.kt)("inlineCode",{parentName:"p"},"Modifier les parametres de compte"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Puis sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187231993-53bd2928-395e-475a-bfa3-61a407a462a5.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Famille et autres utilisateurs")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquer sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187232447-7147abeb-5b62-46c9-8a9c-a8efed0be799.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Ajouter un autre utilisateur sur ce PC")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquer ensuite sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187233013-8e0eaee8-d541-45ae-b118-787b0dff11eb.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Je ne dispose pas des informations de connexion de cette personne.")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enfin cliquer sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187233114-a121fc68-ef03-4be9-a8ed-976d5cb37bd8.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Ajouter un utilisateur sans compte Microsoft")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remplir le ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187233352-64d6f299-32b3-4d09-87ba-f6f0f1cc5a58.png"},(0,r.kt)("inlineCode",{parentName:"a"},"formulaire"))," Jitsi-Box-Pro.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187233704-5e160e9c-eb34-4ef4-b4b0-f6b010d62785.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Suivant")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"R\xe9pondre ",(0,r.kt)("inlineCode",{parentName:"p"},"Non")," \xe0 toutes les questions Microsoft."))),(0,r.kt)("h3",{id:"etape-2-installation-chromium"},"Etape 2: Installation Chromium"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'Les prochaines etapes sont faites a partir du compte "Jitsi-Box-Pro".')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aller sur le site ",(0,r.kt)("a",{parentName:"li",href:"https://download-chromium.appspot.com"},(0,r.kt)("inlineCode",{parentName:"a"},"chromium"))," et t\xe9l\xe9charger le fichier .zip."),(0,r.kt)("li",{parentName:"ul"},"Extraire le fichier sur le disque ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),".")),(0,r.kt)("h3",{id:"etape-3-installation-git"},"Etape 3: Installation Git"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\xe9l\xe9charger ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/git-for-windows/git/releases/download/v2.37.2.windows.2/Git-2.37.2.2-64-bit.exe"},(0,r.kt)("inlineCode",{parentName:"a"},"GIT")),"."),(0,r.kt)("li",{parentName:"ul"},"Executer l'ex\xe9cutable et cliquer sur ",(0,r.kt)("inlineCode",{parentName:"li"},"Next")," \xe0 chaque \xe9tape."),(0,r.kt)("li",{parentName:"ul"},"Cliquer sur ",(0,r.kt)("inlineCode",{parentName:"li"},"Finish"),".")),(0,r.kt)("h3",{id:"etape-4-installation-node-js"},"Etape 4: Installation Node js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\xe9l\xe9charger ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi"},(0,r.kt)("inlineCode",{parentName:"a"},"Node JS")),"."),(0,r.kt)("li",{parentName:"ul"},"Executer l'ex\xe9cutable  et cliquer sur ",(0,r.kt)("inlineCode",{parentName:"li"},"Next")," \xe0 chaque \xe9tape.")),(0,r.kt)("h3",{id:"etape-5-configuration--ajout-\xe9cran-touch"},"Etape 5: Configuration & Ajout \xe9cran touch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Aller dans ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187390041-fe4662a9-e23a-47ff-9adf-302d263a45ce.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Panneau de configuration")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selectionnez l'option Afficher par ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187390452-604bfca3-6b10-43f4-997c-8200746e4ca8.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Grandes ic\xf4nes")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquer sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187391033-a4fe154a-e8e2-4331-93a4-03009915f6fe.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Param\xe8tres du Tablet PC")),". (ou le chercher dans la barre de recherche s'il n'appara\xeet pas)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Puis cliquer sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187391059-35ad9637-55ef-43e6-9e5a-8b553bca70e2.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Configurer")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un message ",(0,r.kt)("inlineCode",{parentName:"p"},"Appuyez sur cet \xe9cran...")," appara\xeet. Cliquer sur l'\xe9cran touch."))),(0,r.kt)("h3",{id:"etape-6-recuperation-du-projet"},"Etape 6: Recuperation du projet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ouvrir ",(0,r.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/110535664/187235305-a79347c1-d0b5-4e86-960b-97a4360ce885.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Git Bash"))),(0,r.kt)("li",{parentName:"ul"},"Ex\xe9cuter les commandes suivantes :",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"cd C:\\\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"git clone https://github.com/snapcom-factory/jitsibox-pro.git\n"))),(0,r.kt)("li",{parentName:"ul"},"Fermer ",(0,r.kt)("inlineCode",{parentName:"li"},"Git Bash"),".")),(0,r.kt)("h3",{id:"etape-7-configuration--executrion-du-projet"},"Etape 7: Configuration & Executrion du projet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dans ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\jitsibox-pro\\apps\\controller"),", cr\xe9er un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".env"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ins\xe9rer dans ce fichier : "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"VITE_DOMAIN=\nVITE_COMPANY_NAME=\nVITE_COMPANY_NAME2=\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dans ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\jitsibox-pro\\apps\\main-screen"),", cr\xe9er un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".env"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ins\xe9rer dans ce fichier : "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"VITE_WEBCONF_TOKEN=\nVITE_DOMAIN=\nVITE_COMPANY_NAME=\nVITE_COMPANY_NAME2= \nVITE_ROOM_NAME= \nVITE_API_KEY=\nVITE_API_URL=\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Aller dans ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\jitsibox-pro\\packages\\model\\src"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ouvrir le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"constants"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remplacer toutes les occurences de ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," par votre adresse IP ou laisser en ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," par d\xe9faut."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ouvrir ",(0,r.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/110535664/187236978-da226428-8c42-42be-a1c4-d6400d4b92ba.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Node.js")),"."),(0,r.kt)("li",{parentName:"ul"},"Ex\xe9cuter les commandes suivantes :",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"cd C:\\jitsibox-pro\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm i concurrently --save\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm run install-packages\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm run dev\n"))),(0,r.kt)("li",{parentName:"ul"},"Fermer ",(0,r.kt)("inlineCode",{parentName:"li"},"Node.js"),".")),(0,r.kt)("h3",{id:"etape-8-create-chromium-jitsi-box-pro-user"},'Etape 8: Create Chromium "Jitsi-Box-Pro user"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ouvrir ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome.exe")," depuis ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\chrome-win"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquer sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187238172-bc7776d8-1b06-4620-84fe-8f5b7f94f6a1.png"},(0,r.kt)("inlineCode",{parentName:"a"},"L\u2019ic\xf4ne")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquer sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187240623-632bcf59-1f02-400d-b6cf-ae351d0cb5a6.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Ajouter")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remplir en mettant ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187240773-897d9838-afab-4517-832f-eba3901476d4.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Jitsi Box Pro")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"V\xe9rifier que la case ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187240907-92a069a6-40aa-4d22-b5cf-1019cacf7777.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Cr\xe9er un raccourci sur le bureau")),"est bien coch\xe9e.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Puis cliquer sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187240988-869654eb-fb7f-4142-acde-ae4c614ccaaa.png"},(0,r.kt)("inlineCode",{parentName:"a"},"OK")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fermer la fen\xeatre Chrome.\n"))),(0,r.kt)("h3",{id:"etape-9-creation-du-script-au-demarrage"},"Etape 9: Creation du script au demarrage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ouvrir Notepad et ins\xe9rer dans ce fichier:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"@ECHO OFF\ntaskkill /f /im explorer.exe\ncd C:\\jitsibox-pro && npm run dev\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sauvegarder le fichier sous le nom ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN-Jitsi-Box-Pro"),"dans ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\")," en ",(0,r.kt)("inlineCode",{parentName:"p"},".bat"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ouvrir Notepad et ins\xe9rer dans ce fichier:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'@ECHO OFF\ntimeout -t 5\nC:\\chrome-win\\chrome.exe --profile-directory="Profile 1" --window-position=0,0 --kiosk http://localhost:3000 --user-data-dir=c:/monitor2 --unsafely-treat-insecure-origin-as-secure=http://localhost:3000\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sauvegarder le fichier sous le nom ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN-Jitsi-Box-Pro - Controller"),"dans ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\")," en ",(0,r.kt)("inlineCode",{parentName:"p"},".bat"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ouvrir Notepad et ins\xe9rer dans ce fichier:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'@ECHO OFF\ntimeout -t 5\nC:\\chrome-win\\chrome.exe --profile-directory="Profile 1" --window-position=1680,0 --kiosk http://localhost:3002 --user-data-dir=c:/monitor1 --unsafely-treat-insecure-origin-as-secure=http://localhost:3002\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sauvegarder le fichier sous le nom ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN-Jitsi-Box-Pro - Main Screen"),"dans ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\")," en ",(0,r.kt)("inlineCode",{parentName:"p"},".bat"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Creer un raccourci pour chaque ficher .bat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Aller dans les proprietes de chaque raccourci et changer l'execution de la fenetre. ",(0,r.kt)("inlineCode",{parentName:"p"},"Fenetre normale => Reduite"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bouger les raccourcis dans ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\Jitsi-Box-Pro\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup")))),(0,r.kt)("h3",{id:"etape-10-configurer-la-connexion-automatique-windows-10"},"Etape 10: Configurer la connexion automatique Windows 10"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Taper ",(0,r.kt)("inlineCode",{parentName:"li"},"Regedit")," dans la zone de commande Ex\xe9cuter ",(0,r.kt)("inlineCode",{parentName:"li"},"(Win + R)"),", puis appuyez sur la touche ",(0,r.kt)("inlineCode",{parentName:"li"},"Entr\xe9e"),". "),(0,r.kt)("li",{parentName:"ul"},"Dans l'\xc9diteur du Registre, acc\xe9der \xe0 la cl\xe9 suivante:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon\n"))),(0,r.kt)("li",{parentName:"ul"},"Faire un clic droit sur la cl\xe9 Winlogon > Nouveau > Valeur de cha\xeene et nommez-le ",(0,r.kt)("inlineCode",{parentName:"li"},"DefaultUserName"),"."),(0,r.kt)("li",{parentName:"ul"},"Faire un clic droit sur la cl\xe9 Winlogon > Nouveau > Valeur de cha\xeene et nommez-le ",(0,r.kt)("inlineCode",{parentName:"li"},"DefaultPassword"),"."),(0,r.kt)("li",{parentName:"ul"},"Faire un clic droit sur la cl\xe9 Winlogon > Nouveau > Valeur de cha\xeene et nommez-le ",(0,r.kt)("inlineCode",{parentName:"li"},"AutoAdminLogon "),"."),(0,r.kt)("li",{parentName:"ul"},"Dans ",(0,r.kt)("inlineCode",{parentName:"li"},"AutoAdminLogon")," entrer la valeur ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},"Fermer l'\xc9diteur du Registre."),(0,r.kt)("li",{parentName:"ul"},"Red\xe9marrer.")),(0,r.kt)("h3",{id:"etape-11-nettoyage-windows"},"Etape 11: Nettoyage Windows"),(0,r.kt)("h4",{id:"optimisation-performance-windows"},"Optimisation performance Windows"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Cette configuration force votre PC \xe0 utiliser tous les capacit\xe9s disponibles et peut r\xe9duire la dur\xe9e de vie de votre PC. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ouvrir l'invit\xe9 de commande ",(0,r.kt)("inlineCode",{parentName:"p"},"Windows"),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ex\xe9cuter la commande suivante :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fermer l'invite de commande Windows.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Faire un clic droit sur l'ic\xf4ne ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187230954-50f10bcb-51f4-481f-aa52-a3c23811d80a.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Windows"))," dans la barre des t\xe2ches.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquer sur ",(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/110535664/187386540-03214707-62f9-4ce4-9c49-5ad3ff3415e1.png"},(0,r.kt)("inlineCode",{parentName:"a"},"Options d'alimentation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquer sur ",(0,r.kt)("inlineCode",{parentName:"p"},"Param\xe8tres d'alimentation suppl\xe9mentaires"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\xc0 droite de ",(0,r.kt)("inlineCode",{parentName:"p"},"Masquer les modes suppl\xe9mentaires"),", cliquer sur ",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/110535664/187424109-7db9aa03-1ac2-45dd-96e7-f4732c9315f1.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionner ",(0,r.kt)("inlineCode",{parentName:"p"},"Performances optimales"),"."))))}m.isMDXComponent=!0}}]);