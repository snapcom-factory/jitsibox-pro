(()=>{"use strict";var e,t,r,o,a,n={},c={};function d(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=n,d.c=c,e=[],d.O=(t,r,o,a)=>{if(!r){var n=1/0;for(b=0;b<e.length;b++){r=e[b][0],o=e[b][1],a=e[b][2];for(var c=!0,f=0;f<r.length;f++)(!1&a||n>=a)&&Object.keys(d.O).every((e=>d.O[e](r[f])))?r.splice(f--,1):(c=!1,a<n&&(n=a));if(c){e.splice(b--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var b=e.length;b>0&&e[b-1][2]>a;b--)e[b]=e[b-1];e[b]=[r,o,a]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);d.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,d.d(a,n),a},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"assets/js/"+({1:"7dcd72b4",53:"935f2afb",85:"1f391b9e",117:"85c276c8",195:"c4f5d8e4",242:"4d60968e",377:"6ccf5c4b",414:"393be207",469:"b1b4681f",514:"1be78505",522:"dc8813fa",623:"030e0b07",655:"1d4ca424",696:"df8d3be1",706:"a04580a2",751:"33db5127",783:"8be7ddec",794:"c9187c85",832:"7db77c75",918:"17896441",983:"6514e156"}[e]||e)+"."+{1:"85dacb61",53:"ad4c1200",85:"d66df817",117:"946b94bc",195:"d1fc07e6",210:"df4c4acb",242:"fdd95c22",377:"1dc953f9",414:"fa40e42e",469:"1171c24c",514:"f5409b93",522:"04398527",623:"828557d7",655:"c050c66c",696:"26f18b56",706:"a6d2a39c",751:"a7f46768",783:"e718ef06",794:"891afb76",832:"17a32351",918:"3eaaf077",972:"0a39d19e",983:"cf2fdd5f"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="new-project:",d.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var c,f;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){c=u;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",a+r),c.src=e),o[e]=[t];var l=(t,r)=>{c.onerror=c.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),f&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/jitsibox-pro/fr/",d.gca=function(e){return e={17896441:"918","7dcd72b4":"1","935f2afb":"53","1f391b9e":"85","85c276c8":"117",c4f5d8e4:"195","4d60968e":"242","6ccf5c4b":"377","393be207":"414",b1b4681f:"469","1be78505":"514",dc8813fa:"522","030e0b07":"623","1d4ca424":"655",df8d3be1:"696",a04580a2:"706","33db5127":"751","8be7ddec":"783",c9187c85:"794","7db77c75":"832","6514e156":"983"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(t,r)=>{var o=d.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=d.p+d.u(t),c=new Error;d.l(n,(r=>{if(d.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,o[1](c)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],c=r[1],f=r[2],i=0;if(n.some((t=>0!==e[t]))){for(o in c)d.o(c,o)&&(d.m[o]=c[o]);if(f)var b=f(d)}for(t&&t(r);i<n.length;i++)a=n[i],d.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return d.O(b)},r=self.webpackChunknew_project=self.webpackChunknew_project||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();