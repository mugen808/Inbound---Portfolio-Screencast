!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){let n=document.createElement(e);return n.classList.add(t),n}function o(e,t,n){const i=document.createElement(e);i.classList.add(t);const o=document.createTextNode(n);return i.appendChild(o),i}function c(){document.querySelector("#content").innerHTML=""}n.r(t);document.querySelector("#clubBtn").addEventListener("click",()=>{c(),function(){if(document.querySelector(".club"))return;const e=document.querySelector("#content"),t=i("div","club");e.appendChild(t);const n=i("div","text"),c=document.createElement("img");c.src="https://images.unsplash.com/photo-1560035285-64808ba47bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",c.id="club-img",t.append(n,c);const a=o("h1","club-head","The CLUB"),r=o("h2","club-subhead","Learn to Cook"),s=o("p","club-text","Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, a."),u=o("h2","club-subhead","Create a community"),l=o("p","club-text","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, harum voluptas ea neque iure explicabo."),p=o("h2","club-subhead","Take your Lasagnas home"),d=o("p","club-text","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur itaque illum id maxime voluptate.");n.append(a,r,s,u,l,p,d)}()});document.querySelector("#platesBtn").addEventListener("click",()=>{c(),function(){const e=document.querySelector("#content"),t=i("div","plates");e.appendChild(t);const n=document.createElement("h1");n.innerHTML="Our Menu";const o=i("div","plates-flex");o.innerHTML='\n    <div class="startes-plates">\n        <h2>STARTERS</h2>\n        <h3>Garlic Bread</h3>\n        <p>Lorem ipsum dolor consectetur adipisicing.</p><span>$9.75</span>\n        <h3>Parmeggiana</h3>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p><span>$9.75</span>\n        <h3>Arancini</h3>\n        <p>Lorem ipsum dolor sit amet consectetur.</p><span>$9.75</span>\n    </div>\n    <div class="main-plates">\n        <h2>LASAGNAS</h2>\n        <h3>Classic Lasagna</h3>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p><span>$9.75</span>\n        <h3>Eggplant Las</h3>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p><span>$9.75</span>\n        <h3>The Vegan One</h3>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p><span>$9.75</span>\n    </div>',t.append(n,o)}()});document.querySelector("#cooksBtn").addEventListener("click",()=>{c(),function(){const e=document.querySelector("#content"),t=i("div","cooks");e.appendChild(t);const n=document.createElement("h1");n.innerHTML="Meet our Kitchen Team";const o=i("div","cook-container");t.append(n,o),o.innerHTML='\n    <div class="cooks-flex">\n        <img class="cook" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=325&q=80" alt="">\n        <div class="cook-text">\n            <h2>Mathias JK</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptas dicta!</p>\n        </div>\n    </div>\n    <div class="cooks-flex">\n        <img class="cook" src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" alt="">\n        <div class="cook-text">\n            <h2>Akira Arusaki</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptas dicta!</p>\n        </div>\n    </div>\n    <div class="cooks-flex">\n        <img class="cook" src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="">\n        <div class="cook-text">\n            <h2>Anita Npembe</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptas dicta!</p>\n        </div>\n    </div>'}()})}]);