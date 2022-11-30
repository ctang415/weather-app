(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),c=n(667),s=n.n(c),d=new URL(n(50),n.b),p=i()(a()),l=s()(d);p.push([e.id,".buttonstyle {\n    background: url("+l+");\n    background-size: contain;\n    border: none;\n    cursor: pointer;\n    width: 20px;\n}\n\n.formstyle {\n    display: flex;\n}\n\n.daytime {\n    background-color: rgba(254, 234, 165, 0.6)\n}\n\n.nighttime {\n    background-color: rgba(0, 109, 178, 0.5)\n}",""]);const u=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var p=n(o[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},50:(e,t,n)=>{e.exports=n.p+"9af906ce3b12167b5a03.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),s=n.n(c),d=n(216),p=n.n(d),l=n(589),u=n.n(l),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"d8adc9add2a8f00332d3.png",g=n.p+"9042ba98d8162388c837.png";document.getElementById("box").appendChild(function(){const e=document.createElement("div"),t=document.createElement("header"),n=document.createElement("form"),r=document.createElement("input"),a=document.createElement("button"),o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),d=document.createElement("span"),p=document.createElement("span"),l=document.createElement("img"),u=document.createElement("span"),m=document.createElement("div"),h=document.createElement("img"),v=document.createElement("span"),y=document.createElement("div"),C=document.createElement("span"),b=document.createElement("div"),w=document.createElement("span"),x=new Image,E=new Image;x.src=f,E.src=g,a.classList.add("buttonstyle"),n.classList.add("formstyle"),t.textContent="Weather Report",r.type="search",r.id="search",r.placeholder="California";const M=new class{constructor(){this.name="imperial",this.unit="°F",this.speed="mph",this.temperature}changeToFahrenheit(){return this.temperature=1.8*T.temperature+32}},T=new class{constructor(){this.name="metric",this.unit="°C",this.speed="m/s",this.temperature}changeToCelsius(){return this.temperature=(M.temperature-32)*(5/9)}};let L=M,I="California";async function S(){try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${I}&appid=78c5b0d1c5ebe06e9744589142cf4344&units=${L.name}`,{mode:"cors"}),n=await t.json(),r=`http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png`;let a=n.weather[0].icon.includes("d");return console.log(a),!0===a?e.classList.add("daytime"):e.classList.add("nighttime"),d.textContent=n.name+", "+n.sys.country,l.src=r,h.src=r,p.textContent=Math.round(n.main.temp)+L.unit,u.textContent="Feels like "+Math.round(n.main.feels_like)+L.unit,v.textContent="Condition: "+n.weather[0].main,C.textContent="Wind: "+Math.round(n.wind.speed)+" "+L.speed,w.textContent="Humidity: "+Math.round(n.main.humidity)+"%",console.log(n)}catch(e){console.error("error",e)}}return async function(){try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${I}&appid=78c5b0d1c5ebe06e9744589142cf4344&units=${L.name}`,{mode:"cors"}),n=await t.json();console.log(n);const r=`http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png`;let a=n.weather[0].icon.includes("d");!0===a?e.classList.add("daytime"):e.classList.add("nighttime"),console.log(a),d.textContent=n.name+", "+n.sys.country,l.src=r,h.src=r,p.textContent=Math.round(n.main.temp)+L.unit,u.textContent="Feels like "+Math.round(n.main.feels_like)+L.unit,v.textContent="Condition: "+n.weather[0].main,C.textContent="Wind: "+Math.round(n.wind.speed)+" "+L.speed,w.textContent="Humidity: "+Math.round(n.main.humidity)+"%",console.log(n)}catch(e){console.error("error",e)}}(),n.addEventListener("submit",(function(e){const t=document.getElementById("search");I=t.value,S(),e.preventDefault(),n.reset()})),p.addEventListener("click",(function(){L===M?(L=T,console.log(L),S()):L===T&&(L=M,S(),console.log(L))})),o.appendChild(d),c.appendChild(l),c.appendChild(p),i.appendChild(c),i.appendChild(u),m.appendChild(h),m.appendChild(v),y.appendChild(E),y.appendChild(C),b.appendChild(x),b.appendChild(w),s.appendChild(m),s.appendChild(y),s.appendChild(b),o.appendChild(i),o.appendChild(s),n.appendChild(r),n.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(o),e}())})()})();