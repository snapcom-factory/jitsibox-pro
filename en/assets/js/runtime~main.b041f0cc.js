(()=>{"use strict";var e,t,r,o,a,n={},f={};function c(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=n,c.c=f,e=[],c.O=(t,r,o,a)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var f=!0,i=0;i<r.length;i++)(!1&a||n>=a)&&Object.keys(c.O).every((e=>c.O[e](r[i])))?r.splice(i--,1):(f=!1,a<n&&(n=a));if(f){e.splice(d--,1);var b=o();void 0!==b&&(t=b)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);c.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var f=2&o&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,c.d(a,n),a},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({20:"24930526",45:"69100919",53:"935f2afb",85:"1f391b9e",195:"c4f5d8e4",267:"7862c03c",322:"ec03cb40",342:"bb9b86f5",374:"1e0439bc",414:"393be207",442:"566eb727",448:"e5a18cc3",465:"f7126153",514:"1be78505",556:"e1db0ea6",655:"a3a7c815",740:"6f6810a9",809:"89644689",864:"e1d1ebd6",912:"e2448e7b",918:"17896441",937:"c3b33eed",940:"09b25b94"}[e]||e)+"."+{20:"b11859ad",45:"9ed43f18",53:"69199e0c",85:"d66df817",195:"f2fd439b",210:"df4c4acb",267:"2ab3b2de",322:"c95b033d",342:"157aa31f",374:"5941eb85",414:"49abeb73",442:"7ec82739",448:"ca38a8bd",465:"49b963ed",514:"f5409b93",556:"0d66ece6",655:"e1a09618",740:"f1c19710",809:"8c45147b",864:"3ee3fc4e",912:"a51d3b4c",918:"3eaaf077",937:"4b185531",940:"36464b70",972:"0a39d19e"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="new-project:",c.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var f,i;if(void 0!==r)for(var b=document.getElementsByTagName("script"),d=0;d<b.length;d++){var u=b[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){f=u;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",a+r),f.src=e),o[e]=[t];var l=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),i&&document.head.appendChild(f)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/jitsibox-pro/en/",c.gca=function(e){return e={17896441:"918",24930526:"20",69100919:"45",89644689:"809","935f2afb":"53","1f391b9e":"85",c4f5d8e4:"195","7862c03c":"267",ec03cb40:"322",bb9b86f5:"342","1e0439bc":"374","393be207":"414","566eb727":"442",e5a18cc3:"448",f7126153:"465","1be78505":"514",e1db0ea6:"556",a3a7c815:"655","6f6810a9":"740",e1d1ebd6:"864",e2448e7b:"912",c3b33eed:"937","09b25b94":"940"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var o=c.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=c.p+c.u(t),f=new Error;c.l(n,(r=>{if(c.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,o[1](f)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],f=r[1],i=r[2],b=0;if(n.some((t=>0!==e[t]))){for(o in f)c.o(f,o)&&(c.m[o]=f[o]);if(i)var d=i(c)}for(t&&t(r);b<n.length;b++)a=n[b],c.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return c.O(d)},r=self.webpackChunknew_project=self.webpackChunknew_project||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();