!function(){var e,t={5281:function(e,t,o){o(3948);for(const e of document.querySelectorAll(".btn-copy"))e.addEventListener("click",(()=>{try{const t=e.parentNode;n(t.innerText),e.title="copied!",e.classList.add("btn-copy-ok"),setTimeout((()=>{e.classList.remove("btn-copy-ok")}),3e3)}catch(t){console.error(t),e.classList.add("btn-copy-error"),setTimeout((()=>{e.classList.remove("btn-copy-error")}),3e3)}}));const n=e=>{const t=document.createElement("textarea");try{if(t.value=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),!document.execCommand("copy"))throw new Error("copy command was unsuccessful")}finally{t.parentNode.removeChild(t)}}},7706:function(e,t,o){o(3493),o(5281),o(1852),o(4832)},1852:function(e,t,o){o(3948),document.getElementById("sidebarCollapse").addEventListener("click",(()=>{document.getElementById("sidebar").classList.toggle("active")}));const n=e=>!e.classList.contains("show");for(const e of document.getElementsByClassName("dropdown-toggle"))e.addEventListener("click",(()=>{let t,o=e;for(;o=o.nextSibling;)if("ul"===o.nodeName.toLowerCase()){t=o;break}void 0!==t&&(n(t)?(t.classList.add("show"),e.classList.remove("collapsed"),e.setAttribute("aria-expanded",!0)):(t.classList.remove("show"),e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1)))}))},4832:function(e,t,o){"use strict";o.r(t)}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var c=o[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.m=t,e=[],n.O=function(t,o,r,c){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],c=e[u][2];for(var s=!0,a=0;a<o.length;a++)(!1&c||i>=c)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(s=!1,c<i&&(i=c));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[o,r,c]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,c,i=o[0],s=o[1],a=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(a)var u=a(n)}for(t&&t(o);l<i.length;l++)c=i[l],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(u)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var r=n.O(void 0,[431],(function(){return n(7706)}));r=n.O(r)}();