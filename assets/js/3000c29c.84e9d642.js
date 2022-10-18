"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[4367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="Gestion du volume",l={unversionedId:"Roadmap/fonctionnel/pendant-appel/gestion-volume",id:"Roadmap/fonctionnel/pendant-appel/gestion-volume",title:"Gestion du volume",description:"Afficher une barre permettant de g\xe9rer le volume du meeting.",source:"@site/docs/Roadmap/fonctionnel/pendant-appel/gestion-volume.md",sourceDirName:"Roadmap/fonctionnel/pendant-appel",slug:"/Roadmap/fonctionnel/pendant-appel/gestion-volume",permalink:"/jitsibox-pro/docs/Roadmap/fonctionnel/pendant-appel/gestion-volume",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/blob/wiki/docs/Roadmap/fonctionnel/pendant-appel/gestion-volume.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Gestion camera",permalink:"/jitsibox-pro/docs/Roadmap/fonctionnel/pendant-appel/gestion-camera"},next:{title:"Param\xe8tres avanc\xe9s (Lobby, Pin de conf\xe9rence)",permalink:"/jitsibox-pro/docs/Roadmap/fonctionnel/pendant-appel/parametres-avances"}},c={},p=[{value:"API &amp; Commands",id:"api--commands",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gestion-du-volume"},"Gestion du volume"),(0,r.kt)("p",null,"Afficher une barre permettant de g\xe9rer le volume du meeting.\nVoici un exemple de la barre:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(5167).Z,title:"Gestion du volume",width:"288",height:"70"})),(0,r.kt)("p",null,"Le gestion du volume durant un appel:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(2395).Z,title:"Gestion du volume",width:"1304",height:"736"})),(0,r.kt)("h2",{id:"api--commands"},"API & Commands"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Iframe API Commands")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"setParticipantVolume")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.setParticipantVolume()\nconst api = new JitsiMeetExternalAPI(domain, options); ... api.\nexecuteCommand('setParticipantVolume', participantId, volume);\n\n")))}u.isMDXComponent=!0},5167:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAABGCAIAAADjO94kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAp9SURBVHhe7Z0LUFTXGcdhBVZkH4CAT6DxMUYjqE2NzIjOWI1G1ExJNOIjTdtpfRTbmaSJUei001Y0tXnMNKCg05k4RsQYtZNYGjXWDllbiO1ofMaxaYNoVFRwYRWXhU3/63c83K6Ad3fvhe3u99PB//m492MG+e93znfOXSLv3HZHMAyjDwbxL8MwOsAGYxgdYYMxjI6wwRhGR9hgDKMjbDCG0RE2GMPoCBuMYXSEDcYwOsIGYxgdYYMxjI6wwRhGR3rZYMUlx7fvOCsGDBNy9KbBitbXrF5rs99yijHDhBy9YzC73bl85eGi1z4VY4YJUXrBYLW1TQsXVfLMkAkHevqBy5Onri/I+1NdXbMYR0Rs3JC9Kn+CGDC6UXe58Yjt83Pnr1673lR/o7n+elNKsiUlyTwg2TJ61MBp2aNShySKSxnt6FGDFZccX7fhWFPT/yy62GB68/4H/zx45OyJU3Vi3AXjM1JnThsz/+nHxZjRgp4zWNH6GrnosphjIg2RWIlBqzcY/Jk5Lnlq9lAxZh7GsRNfbnmn6rPTl8RYBePGDl32vakTx39DjJnA6Ik1mFdLw2Ixbi2bMXWKbz6Bu1avtT2XV4lJpggx3fJW6cf5L5cr3RVjjDdZ0639RyWkPNZ/4AR8hEYEcXFFRASux124V4yZwNDdYF4tjcyM5JqjefPmDqehSpCk6LVjEJhezsrZR6WP6YZfb9y/8/2OJm0/0+DElExzwiPG2MSo6H4GQwyC+AiNCOL4LK6hiwHuRQYxYAJAX4Oh2szM2VtlEy+imN0dqMxNT7fQUD24ZdfOHNJwFzxGmumUl36+e//Bk6RjYhMTkh+LNQ2INPShSKfgs7gmIXkMrqcIMiAPacZvdDQYJnUzZ++TDUMstGASq9VIQ1+BOXeVC4/BtwsXV5JmvPhd8UFb9QXSsXEpZmu6oY+nXqnB0MeI62PjBtAQeV4vOUSa8Q+9DEanNKhhaDHHlG2evnFDtq/u8jpIhYnl80vGkP5w/xe8GHuQDw98tvuP/yAdZx7SzzyEtE/0Mw/GvaTf23dMFkPGD7Q3WKctDWkM9VBXA6ngJRGKiIBRsYojvWzFYRIMceWqfcNbfyZtjO3fNy6FtB/gXmNsEmnkRGbSjK9obDBNWhoALi0pFS+cP1rxsbJYbSmdTgJBpfeY8j2ftrV5Nl2iomJN1lQK+o3JOhR5IFyu9vK9fKjNT9Tug6GSCNUtf62qk4suz6qp60UXFlFkj672weDV0RnbSKenW86deoE0kPci+ZW6ZRQMc67WNz29uJi0JWFYtNFKOhBcd+1Nt/5N+oPyVQNTfO5OMWoN1s/ytlDqgGcK10zsZtH1UIOBKtulp+43DAvXPFFYMIk06tug1C2kYTw/2pKhx5ubDlXs9exkRMeYLYkjKBg4TQ3/crV6XjHznpn40o+fpCCjHu3XYH63NIBXVwM1EL4i/famEyQAMktT8SyRqPq76Bz2jRNrVE2Q2WR+xid8rmD4ibdau2v7qjzN9GAFo64GxEeVuTIDitWkyRUXLzZBK4uYvNhr9hieXPji2pLlf4AwGPokpGRSUCsa60+63e0Q5Vt+OGKY/42T8MRng2k1JfMyGG0fUzMDBerz0y/IAii9hIhccfEsUcm7u6t/X/YXCGPfBFO8xscIHbe+dN5thPjp8m8vXZBFQUYlOm40+wTMI/eRYZ6Fizr2kZ9fKlr8iNfWekoZUM4Sa+tEMGw5dfYyiWij9i80Mqf8Kox6gqWCUVDZ1VB+odEZ28hayotxJR3CUgYDZ/ZSsZX0f0RTwwVXqwPCkjgyOsZEQa1AZuSHSEtN+cF3n6JgqNI/vu+kCWIDUBOCpYIRWHpJUym7F3InzW5vJQGw2COhDIYn7nYXCUOfaBIaInM6HC0kGPUEl8GA9NKp0w0kgNUs/o8v1nlep4lOg+GJ291GwmDQwWD3czocd0kw6gk6g6UNjSNxS/FMiuxbPjQY5kTiDxNMBJ3BZOGKV2yjyUlgp8EwbyECgyGKhNst5ooaInOaTH1JMOoJOoPJPmFaasdiXU4CrfEdBuOZoUQuk9rbtV+OygWeyeQ5msj4RHB1ERFBnHT10Tx5cF52Ecs2T5cH82UGZTA8efVXe458ch7CZE033n9iUiucLQ0Oey3EtCmjfvvLZynIqCSIKpjd7vxNkTi1PW/ucOku5fbXuMyOc0DyiL1y3hieZIwRj2+5nNpvCcqc8qsw6gkig2VlV5w+cwPCYonZslk8kwKKS8QpRFhOug7ukq6TwbAl6/FhJFytOhjsfs5J33yEBKMenw327o5z23ec7eav/Ln3lYI1E0lsLZ0hz0mhfG0vP0d63pyO/+CqKvE+H3AXNzlGDEsZPMjzzlBud3urU8uHI5GNDiIi/8jh4q0EGPXo8rjKrvKchz5k2ekabPnKw2mpJnmiF8iDiBZzTM3fFkkvyduVJ4DDGX5cJTjRZYqIn/6i9TVi4Atlm6cr3VJlu7RuvViV/SR/vHSX8lnmKVN5YeBh8XzxfYMfXBoVMeQhdwGZn/EJtRVMNve6p+qTS5jUkZ6aPfSjylzSD9JpBVOCqeasOfvoQZW0NEvN0Tw5b0Shw1wUAvPD6qN5FGTe2HRo170iFhUVa00a5dl2Doiv7TfOt7V5jkctzJ34s3wuX/6g1mAqgSvgHNnfgwEOVOZKYyjp3mBwaVZ2BS3nMDncWjZDzjmRPGtyBWlu0Cu5ctU+//ulLpdnyWSMTQrwbTkc9ovOlpsQUVGGPe+sHDRQg/cgCEM0niJiFgdHycclYYZHx26TflMPPJm/Qjw4qHQXjFe0wfMiDfBV2F1K4IG1L84m7Wy5cfd2PWk/wL3kLoCc7C6/0X4NBm9gZiiLkqcWTa6QSyb1IEPhmidQo5T9kuKSEzJVQYHoOjKSuTMzn8sV35bbzZfvNH9F2ifuNF/GvaQXfOdb82aNI834gV77YJj44a8Y+Nv2KCyYpKxRWHfJt1uE62SdZJS8nP9kdtZI0i23rzXba93tag9Du9tbcX3L/dKHPK+smkma8Q+9DAZQgqoVnQl4Qz5M6QeYZ77yqqdfDzLGJil3ohkv3ly3AKWMdGtLQ+P1sy2Oa1/f287qCnwW1zReP4PrKYIMyEOa8RsdDQY8XT5bx5HCKtslTBdlm1E9uGVWzj7xRtyWmPd2zum0ccJIfrF67qL54g25wB3HVw31J5sb/+NsaWhz3XG7PWeC8REaEcTxWVxDFwPciwxiwASAvgYDmrQ9YKfCe+c8PB3F0hl8dEMNL66YsemNJePGdkykW523HPZa+83zjfVnbl49jo/QiCAurrj3C/hKXl+Me8WYCQyN2/TdsHqtrbjkuBjcK25ks672wR4Eq7jMzKSHnhFhvOBfIduL9JzBgDz3pES9wZhAqLvccMR2vutfgv5o6pAEcSmjHT1qMICq5fUrKtlgTAij+xrMC6+2B8OENj1tMODV9mCYEKYXDAa8TnswTKjS02swL6ivyE5jQpVeNhjDhDa9M0VkmDCBDcYwOsIGYxgdYYMxjI6wwRhGR9hgDKMjbDCG0RE2GMPoCBuMYXQjIuK/e3DZPa9TAQoAAAAASUVORK5CYII="},2395:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gestion-volume-2-a956ae8bdd2cc6b917f87b4fe6813f07.png"}}]);