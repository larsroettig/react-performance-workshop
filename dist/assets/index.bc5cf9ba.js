import{R as e,D as t,X as r,M as n,L as a,B as l,r as s,u as c,a as m}from"./vendor.a6dd7304.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const o={},i=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in o)return;o[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};const u=[{name:"Home",href:"/",current:!1},{name:"Slow Journey",href:"/slow_journey",current:!1},{name:"Journey",href:"/journey",current:!1}];function d(){function l(...e){return e.filter(Boolean).join(" ")}return e.createElement(t,{as:"nav",className:"bg-gray-800 "},(({open:s})=>e.createElement(e.Fragment,null,e.createElement("div",{className:"container mx-auto px-2 sm:px-6 lg:px-8"},e.createElement("div",{className:"relative flex items-center justify-between h-16"},e.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden"},e.createElement(t.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},e.createElement("span",{className:"sr-only"},"Open main menu"),s?e.createElement(r,{className:"block h-6 w-6","aria-hidden":"true"}):e.createElement(n,{className:"block h-6 w-6","aria-hidden":"true"}))),e.createElement("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},e.createElement("div",{className:"hidden sm:block sm:ml-6"},e.createElement("div",{className:"flex space-x-4"},u.map((t=>e.createElement(a,{key:t.name,to:t.href,className:l(t.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"),"aria-current":t.current?"page":void 0},t.name)))))))),e.createElement(t.Panel,{className:"sm:hidden"},e.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1"},u.map((t=>e.createElement("a",{key:t.name,href:t.href,className:l(t.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":t.current?"page":void 0},t.name))))))))}const f=()=>e.createElement("div",{className:"bg-gray-50"},e.createElement("div",{className:"bg-white container mx-auto py-10"},e.createElement("article",{className:"prose lg:prose-xl max-w-none mx-10 "},e.createElement("p",{className:"leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-100"}),e.createElement("p",{className:"leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-100"}),e.createElement("p",{className:"leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-100"})))),p=e.lazy((()=>i((()=>import("./Home.9b07fae2.js")),["assets/Home.9b07fae2.js","assets/vendor.a6dd7304.js","assets/useFakeFetchData.24048044.js","assets/SlowSlider.0783fb0d.js"]))),g=e.lazy((()=>i((()=>import("./Slick.8d5d4bb0.js")),["assets/Slick.8d5d4bb0.js","assets/vendor.a6dd7304.js","assets/useFakeFetchData.24048044.js","assets/Grid.e3f365bc.js","assets/SlowSlider.0783fb0d.js"]))),h=e.lazy((()=>i((()=>import("./Journey.665bd44f.js")),["assets/Journey.665bd44f.js","assets/vendor.a6dd7304.js","assets/useFakeFetchData.24048044.js","assets/Grid.e3f365bc.js"]))),y=()=>c([{path:"/",element:e.createElement(p,null)},{path:"/slow_journey",element:e.createElement(g,null)},{path:"/journey",element:e.createElement(h,null)}]),E=()=>e.createElement(l,null,e.createElement(d,null),e.createElement(s.exports.Suspense,{fallback:e.createElement(f,null)},e.createElement(y,null)));var x;m.render(e.createElement(e.StrictMode,null,e.createElement(E,null)),document.getElementById("root")),(x=console.log)&&x instanceof Function&&i((()=>import("./web-vitals.0e8c1e4e.js")),[]).then((({getCLS:e,getFID:t,getFCP:r,getLCP:n,getTTFB:a})=>{e(x),t(x),r(x),n(x),a(x)}));