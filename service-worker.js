if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,n,f)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const s={uri:location.origin+c.slice(1)};return Promise.all(n.map(c=>{switch(c){case"exports":return i;case"module":return s;default:return e(c)}})).then(e=>{const c=f(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"space-clicker"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/2.21b72f22.css",revision:"d7a3a71d3d2e98f81788304729ce40d3"},{url:"css/app.135e0ecf.css",revision:"595f49df48e4c7f8e3f2b813493ee56e"},{url:"css/vendor.03eea8a9.css",revision:"15ff24de70769b53328519161ce91640"},{url:"favicon.ico",revision:"9b2f5c513c7bbe2a98fc8324e940b25f"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.f9e3a827.woff",revision:"1a05986ec7181461674cfdacf4502b8a"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.a563f825.woff2",revision:"47abd1b169a850b18ede9c9590cdb35d"},{url:"fonts/ionicons.175f391f.woff2",revision:"96f1c901c087fb64019f7665f7f8aca6"},{url:"fonts/ionicons.bf69b013.woff",revision:"99b863497156d4478ec3489fefb3815c"},{url:"icons/apple-icon-120x120.png",revision:"6ac2067e059be1fb9e277cd687c4866d"},{url:"icons/apple-icon-152x152.png",revision:"08b27217b91a93172c9808758e1194e9"},{url:"icons/apple-icon-167x167.png",revision:"e4da000cb8a695a528f86c63f1316181"},{url:"icons/apple-icon-180x180.png",revision:"3737466c88324cc05b47ddf3070809d2"},{url:"icons/favicon-128x128.png",revision:"0bde66d03f5c3c40aa381b817f98c007"},{url:"icons/favicon-16x16.png",revision:"97158dbd7b1ea1492662c0783f35f90f"},{url:"icons/favicon-32x32.png",revision:"5a4a6955e94c1bf22a21192abb89030c"},{url:"icons/favicon-96x96.png",revision:"9f79bd1b91666320dc5053cd8a2698cc"},{url:"icons/icon-128x128.png",revision:"0bde66d03f5c3c40aa381b817f98c007"},{url:"icons/icon-192x192.png",revision:"4168a40bfc18ea44a92654a0d24c3c35"},{url:"icons/icon-256x256.png",revision:"434e1e354863e1c220fcfb840aad4728"},{url:"icons/icon-384x384.png",revision:"9ccb1d288555d951ca9abbb4fd37c378"},{url:"icons/icon-512x512.png",revision:"50484d25b84917be30c8bd474d77f06f"},{url:"icons/ms-icon-144x144.png",revision:"0d6b716702e321df051d44181eda25f2"},{url:"icons/safari-pinned-tab.svg",revision:"f85c9d927b7e6a17a381d9b1d26c8898"},{url:"img/cosmic.b4f775d9.png",revision:"50484d25b84917be30c8bd474d77f06f"},{url:"index.html",revision:"c029ff81b70a8a67a603a691d257ee2d"},{url:"js/2.80a6dcf7.js",revision:"938b618acb8b1052311d359e65c4d83f"},{url:"js/3.8e4f77e1.js",revision:"aa00b1638e2b036cdca19a49c314a2c8"},{url:"js/4.f0e7802c.js",revision:"26a66b7c99b1f1216a1762a93be2d2fc"},{url:"js/app.364a4fd5.js",revision:"a89063c6a2ec6a94becc0ff6567cda21"},{url:"js/vendor.7eabe8ef.js",revision:"85143e584dc035c13a8a8eaecc9477e4"},{url:"manifest.json",revision:"9440b3b99f32b5372300d3490a6a1b3e"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));