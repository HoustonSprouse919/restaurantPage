(()=>{"use strict";var e={};function t(){document.body.style.backgroundImage="url('pizza.jpg')",document.querySelector("#content").appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","hero"),e}()),document.querySelector("#hero").appendChild(function(){let e=document.createElement("h1");return e.append("Houston's"),e.appendChild(document.createElement("br")),e.append("Pizza"),e}()),document.querySelector("#hero").appendChild(function(){let e=document.createElement("p");return e.append("We serve the best Za in town!"),e}())}function n(){document.querySelector("#content").appendChild(function(){let e=document.createElement("h1");return e.append("Houston's Menu"),e}()),document.querySelector("#content").appendChild(function(){let e=document.createElement("IMG");return e.setAttribute("src","https://i.pinimg.com/736x/9d/25/6b/9d256bf90bf80e38d3a8be2efc7444a9.jpg"),e}()),document.querySelector("#content").appendChild(function(){let e=document.createElement("p");return e.append("Welcome to Houston's pizza. We serve the best Za in town!!"),e}())}function c(){document.querySelector("#tabs").style.backgroundColor="black",document.body.style.backgroundImage="none",document.querySelector("#content").appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","contactHero"),e}()),document.querySelector("#contactHero").appendChild(function(){let e=document.createElement("h1");return e.append("Contact Us"),e}()),document.querySelector("#content").appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","contactDiv"),e}()),document.querySelector("#contactDiv").appendChild(function(){let e=document.createElement("div");return e.setAttribute("id","address"),e}()),document.querySelector("#contactDiv").appendChild(function(){let e=document.createElement("div");return e.setAttribute("id","phone"),e}()),document.querySelector("#contactDiv").appendChild(function(){let e=document.createElement("div");return e.setAttribute("id","email"),e}()),document.querySelector("#address").appendChild(function(){let e=document.createElement("IMG");return e.setAttribute("class","contactImage"),e.setAttribute("src","address.jpg"),e}()),document.querySelector("#phone").appendChild(function(){let e=document.createElement("IMG");return e.setAttribute("class","contactImage"),e.setAttribute("src","phone.jpg"),e}()),document.querySelector("#email").appendChild(function(){let e=document.createElement("IMG");return e.setAttribute("class","contactImage"),e.setAttribute("src","email.jpg"),e}()),document.querySelector("#address").appendChild(function(){let e=document.createElement("h1");return e.append("Locations"),e}()),document.querySelector("#phone").appendChild(function(){let e=document.createElement("h1");return e.append("Give us a call!"),e}()),document.querySelector("#email").appendChild(function(){let e=document.createElement("h1");return e.append("Email us"),e}()),document.querySelector("#address").appendChild(function(){let e=document.createElement("p");return e.append("We currently have a single location at"),e.appendChild(document.createElement("br")),e.append("284 down town drive!!"),e}()),document.querySelector("#phone").appendChild(function(){let e=document.createElement("p");return e.append("Our phone number is"),e.appendChild(document.createElement("br")),e.append("999-999-9999"),e}()),document.querySelector("#email").appendChild(function(){let e=document.createElement("p");return e.append("Our business email is"),e.appendChild(document.createElement("br")),e.append("giveUsMoney@yahoo.com"),e}())}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const r=e.p+"048e21360e52bd8a31de.png";!function(){const e=document.createElement("div");e.setAttribute("id","navArea");const o=document.createElement("div");o.setAttribute("id","logoDiv");const d=new Image;d.src=r,d.setAttribute("id","logo"),o.appendChild(d);let u=document.createElement("FOOTER");var a=document.createElement("P"),i=document.createTextNode("Houston's Pizza - Copyright ©, 2022");a.appendChild(i),u.appendChild(a),function(){const r=document.createElement("div");r.setAttribute("id","buttonArea");let d=document.createElement("button");d.append("Home"),d.addEventListener("click",l),d.addEventListener("click",t);let a=document.createElement("button");a.append("Menu"),a.addEventListener("click",l),a.addEventListener("click",n);let i=document.createElement("button");function l(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.lastChild)}i.append("Contact"),i.addEventListener("click",l),i.addEventListener("click",c),document.querySelector("#tabs").appendChild(e),document.querySelector("#navArea").appendChild(o),document.querySelector("#navArea").appendChild(r),document.querySelector("#buttonArea").appendChild(d),document.querySelector("#buttonArea").appendChild(a),document.querySelector("#buttonArea").appendChild(i),document.querySelector("#tabs").appendChild(u)}()}(),t()})();