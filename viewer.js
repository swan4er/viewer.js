parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V64K":[function(require,module,exports) {
"use strict";function e(e){for(var t=e.split(/([#.])/),i="",n="",o=[],r=0;r<t.length;r++){var s=t[r];"#"===s?n=t[++r]:"."===s?o.push(t[++r]):s.length&&(i=s)}return{tag:i||"div",id:n,className:o.join(" ")}}function t(t,i){var n=e(t),o=n.tag,r=n.id,s=n.className,l=i?document.createElementNS(i,o):document.createElement(o);return r&&(l.id=r),s&&(i?l.setAttribute("class",s):l.className=s),l}function i(e,t){var i=y(e),o=y(t);return t===o&&o.__redom_view&&(t=o.__redom_view),o.parentNode&&(n(t,o,i),i.removeChild(o)),t}function n(e,t,i){var n=t.__redom_lifecycle;if(o(n))t.__redom_lifecycle={};else{var r=i;for(t.__redom_mounted&&u(t,"onunmount");r;){var s=r.__redom_lifecycle||{};for(var l in n)s[l]&&(s[l]-=n[l]);o(s)&&(r.__redom_lifecycle=null),r=r.parentNode}}}function o(e){if(null==e)return!0;for(var t in e)if(e[t])return!1;return!0}Object.defineProperty(exports,"__esModule",{value:!0}),exports.html=N,exports.list=L,exports.listPool=j,exports.mount=l,exports.place=T,exports.router=O,exports.setAttr=v,exports.setChildren=D,exports.setData=p,exports.setStyle=f,exports.setXlink=_,exports.svg=B,exports.text=w,exports.unmount=i,exports.s=exports.h=exports.el=exports.Router=exports.Place=exports.ListPool=exports.List=void 0;var r=["onmount","onremount","onunmount"],s="undefined"!=typeof window&&"ShadowRoot"in window;function l(e,t,i,o){var r=y(e),s=y(t);t===s&&s.__redom_view&&(t=s.__redom_view),t!==s&&(s.__redom_view=t);var l=s.__redom_mounted,u=s.parentNode;return l&&u!==r&&n(t,s,u),null!=i?o?r.replaceChild(s,y(i)):r.insertBefore(s,y(i)):r.appendChild(s),a(t,s,r,u),t}function u(e,t){"onmount"===t||"onremount"===t?e.__redom_mounted=!0:"onunmount"===t&&(e.__redom_mounted=!1);var i=e.__redom_lifecycle;if(i){var n=e.__redom_view,o=0;for(var r in n&&n[t]&&n[t](),i)r&&o++;if(o)for(var s=e.firstChild;s;){var l=s.nextSibling;u(s,t),s=l}}}function a(e,t,i,n){for(var o=t.__redom_lifecycle||(t.__redom_lifecycle={}),l=i===n,a=!1,f=0,d=r;f<d.length;f+=1){var h=d[f];l||e!==t&&h in e&&(o[h]=(o[h]||0)+1),o[h]&&(a=!0)}if(a){var v=i,c=!1;for((l||v&&v.__redom_mounted)&&(u(t,l?"onremount":"onmount"),c=!0);v;){var _=v.parentNode,p=v.__redom_lifecycle||(v.__redom_lifecycle={});for(var w in o)p[w]=(p[w]||0)+o[w];if(c)break;(v.nodeType===Node.DOCUMENT_NODE||s&&v instanceof ShadowRoot||_&&_.__redom_mounted)&&(u(v,l?"onremount":"onmount"),c=!0),v=_}}else t.__redom_lifecycle={}}function f(e,t,i){var n=y(e);if("object"==typeof t)for(var o in t)d(n,o,t[o]);else d(n,t,i)}function d(e,t,i){e.style[t]=null==i?"":i}var h="http://www.w3.org/1999/xlink";function v(e,t,i){c(e,t,i)}function c(e,t,i,n){var o=y(e);if("object"==typeof t)for(var r in t)c(o,r,t[r],n);else{var s=o instanceof SVGElement,l="function"==typeof i;if("style"===t&&"object"==typeof i)f(o,i);else if(s&&l)o[t]=i;else if("dataset"===t)p(o,i);else if(!s&&(t in o||l)&&"list"!==t)o[t]=i;else{if(s&&"xlink"===t)return void _(o,i);n&&"class"===t&&(i=o.className+" "+i),null==i?o.removeAttribute(t):o.setAttribute(t,i)}}}function _(e,t,i){if("object"==typeof t)for(var n in t)_(e,n,t[n]);else null!=i?e.setAttributeNS(h,t,i):e.removeAttributeNS(h,t,i)}function p(e,t,i){if("object"==typeof t)for(var n in t)p(e,n,t[n]);else null!=i?e.dataset[t]=i:delete e.dataset[t]}function w(e){return document.createTextNode(null!=e?e:"")}function m(e,t,i){for(var n=0,o=t;n<o.length;n+=1){var r=o[n];if(0===r||r){var s=typeof r;"function"===s?r(e):"string"===s||"number"===s?e.appendChild(w(r)):g(y(r))?l(e,r):r.length?m(e,r,i):"object"===s&&c(e,r,null,i)}}}function x(e){return"string"==typeof e?N(e):y(e)}function y(e){return e.nodeType&&e||!e.el&&e||y(e.el)}function g(e){return e&&e.nodeType}var b={};function N(e){for(var t,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var o=typeof e;if("string"===o)t=A(e).cloneNode(!1);else if(g(e))t=e.cloneNode(!1);else{if("function"!==o)throw new Error("At least one argument required");var r=e;t=new(Function.prototype.bind.apply(r,[null].concat(i)))}return m(y(t),i,!0),t}var k=N;exports.el=k;var S=N;function A(e){return b[e]||(b[e]=t(e))}function D(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];for(var o=V(e,t,y(e).firstChild);o;){var r=o.nextSibling;i(e,o),o=r}}function V(e,t,i){for(var n=i,o=new Array(t.length),r=0;r<t.length;r++)o[r]=t[r]&&y(t[r]);for(var s=0;s<t.length;s++){var u=t[s];if(u){var a=o[s];if(a!==n)if(g(a)){var f=n&&n.nextSibling,d=null!=u.__redom_index&&f===o[s+1];l(e,u,n,d),d&&(n=f)}else null!=u.length&&(n=V(e,u,n));else n=n.nextSibling}}return n}function j(e,t,i){return new C(e,t,i)}exports.h=S,N.extend=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var n=A(e);return N.bind.apply(N,[this,n].concat(t))};var C=function(e,t,i){this.View=e,this.initData=i,this.oldLookup={},this.lookup={},this.oldViews=[],this.views=[],null!=t&&(this.key="function"==typeof t?t:E(t))};function E(e){return function(t){return t[e]}}function L(e,t,i,n){return new P(e,t,i,n)}exports.ListPool=C,C.prototype.update=function(e,t){for(var i=this.View,n=this.key,o=this.initData,r=null!=n,s=this.lookup,l={},u=new Array(e.length),a=this.views,f=0;f<e.length;f++){var d=e[f],h=void 0;if(r){var v=n(d);h=s[v]||new i(o,d,f,e),l[v]=h,h.__redom_id=v}else h=a[f]||new i(o,d,f,e);h.update&&h.update(d,f,e,t),y(h.el).__redom_view=h,u[f]=h}this.oldViews=a,this.views=u,this.oldLookup=s,this.lookup=l};var P=function(e,t,i,n){this.__redom_list=!0,this.View=t,this.initData=n,this.views=[],this.pool=new C(t,i,n),this.el=x(e),this.keySet=null!=i};function T(e,t){return new R(e,t)}exports.List=P,P.prototype.update=function(e,t){void 0===e&&(e=[]);var n=this.keySet,o=this.views;this.pool.update(e,t);var r=this.pool,s=r.views,l=r.lookup;if(n)for(var u=0;u<o.length;u++){var a=o[u];null==l[a.__redom_id]&&(a.__redom_index=null,i(this,a))}for(var f=0;f<s.length;f++){s[f].__redom_index=f}D(this,s),n&&(this.lookup=l),this.views=s},P.extend=function(e,t,i,n){return P.bind(P,e,t,i,n)},L.extend=P.extend;var R=function(e,t){this.el=w(""),this.visible=!1,this.view=null,this._placeholder=this.el,e instanceof Node?this._el=e:e.el instanceof Node?(this._el=e,this.view=e):this._View=e,this._initData=t};function O(e,t,i){return new q(e,t,i)}exports.Place=R,R.prototype.update=function(e,t){var n=this._placeholder,o=this.el.parentNode;if(e){if(!this.visible)if(this._el)l(o,this._el,n),i(o,n),this.el=y(this._el),this.visible=e;else{var r=new(0,this._View)(this._initData);this.el=y(r),this.view=r,l(o,r,n),i(o,n)}this.view&&this.view.update&&this.view.update(t)}else if(this.visible){if(this._el)return l(o,n,this._el),i(o,this._el),this.el=n,void(this.visible=e);l(o,n,this.view),i(o,this.view),this.el=n,this.view=null}this.visible=e};var q=function(e,t,i){this.el=x(e),this.Views=t,this.initData=i};exports.Router=q,q.prototype.update=function(e,t){if(e!==this.route){var i=this.Views[e];this.route=e,i&&(i instanceof Node||i.el instanceof Node)?this.view=i:this.view=i&&new i(this.initData,t),D(this.el,[this.view])}this.view&&this.view.update&&this.view.update(t,e)};var F="http://www.w3.org/2000/svg",M={};function B(e){for(var t,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var o=typeof e;if("string"===o)t=U(e).cloneNode(!1);else if(g(e))t=e.cloneNode(!1);else{if("function"!==o)throw new Error("At least one argument required");var r=e;t=new(Function.prototype.bind.apply(r,[null].concat(i)))}return m(y(t),i,!0),t}var G=B;function U(e){return M[e]||(M[e]=t(e,F))}exports.s=G,B.extend=function(e){var t=U(e);return B.bind(this,t)},B.ns=F;
},{}],"+i3X":[function(require,module,exports) {
module.exports = '<svg viewBox="0 0 800 800"><path fill="#7cfcf0" d="M214.1 141.7l-11.7-87.3L45.2 229.1z"/><path fill="#7ce8f0" d="M383 19.4L214.1 141.7l-11.7-87.3z"/><path fill="#767ee0" d="M487.8 141.7L383 19.4l215.5 52.5z"/><path fill="#7dbeef" d="M214.1 141.7h273.7L383 19.4z"/><path fill="#7df8f0" d="M97.6 339.7L45.2 229.1l168.9-87.4z"/><path fill="#7bf0ee" d="M21.9 479.5l75.7-139.8-52.4-110.6z"/><path fill="#78c8e7" d="M167.5 572.7l-69.9-233-75.7 139.8z"/><path fill="#7ec4ef" d="M487.8 141.7L307.3 357.2l-93.2-215.5z"/><path fill="#6d65d0" d="M709.1 269.9L487.8 141.7l110.7-69.8z"/><path fill="#593ca7" d="M738.2 217.4l-29.1 52.5-110.6-198z"/><path fill="#7c75ec" d="M563.5 374.7l145.6-104.8-221.3-128.2z"/><path fill="#7a8ee8" d="M307.3 357.2l256.2 17.5-75.7-233z"/><path fill="#7ccdee" d="M167.5 572.7l139.8-215.5-209.7-17.5z"/><path fill="#656bc1" d="M447 601.8L307.3 357.2 167.5 572.7z"/><path fill="#6856c4" d="M563.5 374.7L447 601.8 307.3 357.2z"/><path fill="#540c9e" d="M779 427.1l-69.9-157.2 29.1-52.5z"/><path fill="#550ca0" d="M685.8 537.8L779 427.1l-69.9-157.2z"/><path fill="#44168e" d="M563.5 374.7l122.3 163.1 23.3-267.9z"/><path fill="#441389" d="M447 601.8l238.8-64-122.3-163.1z"/><path fill="#6a0fc7" d="M703.3 630.9l-17.5-93.1L779 427.1z"/><path fill="#5c0dad" d="M540.2 735.8l145.6-198 17.5 93.1z"/><path fill="#440a80" d="M447 601.8l93.2 134 145.6-198z"/><path fill="#450e8c" d="M313.1 735.8l133.9-134 93.2 134z"/><path fill="#4e0b93" d="M359.7 782.4l180.5-46.6H313.1z"/><path fill="#530c9c" d="M144.2 695l168.9 40.8 46.6 46.6z"/><path fill="#440b7f" d="M167.5 572.7l145.6 163.1 133.9-134z"/><path fill="#6469c0" d="M21.9 479.5L144.2 695l23.3-122.3z"/><path fill="#4d1090" d="M313.1 735.8L144.2 695l23.3-122.3z"/><path fill="#7df0f0" d="M307.3 357.2L97.6 339.7l116.5-198z"/></svg>'
},{}],"PIIY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkScript=exports.getCurrentScript=exports.currentScript=exports.NakerViewer=exports.addQuote=exports.removeQuote=exports.quotereplacement=void 0;var t=require("redom"),e=i(require("../Asset/icosphere.svg"));function i(t){return t&&t.__esModule?t:{default:t}}var o="|";exports.quotereplacement=o;var r=function(t){return t.split('"').join(o)};exports.removeQuote=r;var n=function(t){return t.split(o).join('"')};exports.addQuote=n;var s,a=function(){function i(e){this.iconStyle={position:"relative",display:"inline-block",float:"right",padding:"3px",cursor:"pointer",height:"24px",width:"24px","border-radius":"5px","box-sizing":"unset","webkit-box-sizing":"unset"},this.divStyle={position:"absolute",padding:"5px",left:"5px",cursor:"pointer",height:"20px",width:"0px",color:"#6633ff",opacity:"0",transition:"all ease 100ms","line-height":"20px","font-size":"15px","vertical-align":"middle","box-sizing":"unset","webkit-box-sizing":"unset","font-family":"Roboto, sans-serif","z-index":"10000000000000000000","text-overflow":"ellipsis",overflow:"hidden"},this.containerStyle={position:"absolute",bottom:"5px",right:"5px",height:"30px",width:"30px",cursor:"pointer",background:"rgba(255, 255, 255, 0.7)",transition:"all ease 100ms","border-radius":"5px"},this.container=e.container,(0,t.setStyle)(this.container,{"-webkit-tap-highlight-color":"transparent"});for(var i=0;i<this.container.childNodes.length;i++){var o=this.container.childNodes[i];if(this.checkElWithStyle(o))try{(0,t.setStyle)(o,{"z-index":"1"})}catch(n){}}this.canvas=(0,t.el)("canvas",{style:{top:"0px",left:"0px",width:"100%",height:"100%","overflow-y":"hidden","overflow-x":"hidden",outline:"none","touch-action":"none"},oncontextmenu:"javascript:return false;"});var r="absolute";this.container==document.body&&(r="fixed"),(0,t.setStyle)(this.canvas,{position:r}),(0,t.setAttr)(this.canvas,{"data-who":"Made with naker.io"}),(0,t.mount)(this.container,this.canvas),this.checkContainerPosition(),this._checkViewport(),this.addWaterMark(),e&&!1===e.waterMark&&this.removeWaterMark(),e&&!1===e.listenEvent&&this.setNoEvent()}return i.prototype.checkElWithStyle=function(t){return t.style&&!t.style.zIndex&&t.tagName&&"SCRIPT"!=t.tagName},i.prototype._checkViewport=function(){if(!document.querySelector("meta[name=viewport]")){var e=(0,t.el)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"});(0,t.mount)(document.getElementsByTagName("head")[0],e)}},i.prototype.checkContainerPosition=function(){"static"==window.getComputedStyle(this.container).position&&(0,t.setStyle)(this.container,{position:"relative"})},i.prototype.setNoEvent=function(){(0,t.setStyle)(this.canvas,{"pointer-events":"none"})},i.prototype.addWaterMark=function(){var i=this;if(this.waterMark)return(0,t.mount)(this.container,this.waterMark);this.waterMark=(0,t.el)("div",{style:this.containerStyle,onclick:function(){window.open("https://naker.io?href=watermark","_blank")},onmouseleave:function(){i.iconNotHovered()},onmouseenter:function(){i.iconHovered()}},[this.icosphere=(0,t.el)("div",{style:this.iconStyle}),this.div=(0,t.el)("div","Made with Naker",{style:this.divStyle})]),this.addImportantCss(),(0,t.mount)(this.container,this.waterMark),this.icosphere.innerHTML=e.default;var o=this.icosphere.childNodes[0];(0,t.setAttr)(o,{width:"24px",height:"24px"}),(0,t.setStyle)(this.icosphere,{"margin-left":"5px"})},i.prototype.addImportantCss=function(){if(this.icosphere.style&&this.icosphere.style.setProperty){for(var t in this.iconStyle)this.icosphere.style.setProperty(t,this.iconStyle[t],"important");for(var t in this.divStyle)this.div.style.setProperty(t,this.divStyle[t],"important");for(var t in this.containerStyle)this.waterMark.style.setProperty(t,this.containerStyle[t],"important")}},i.prototype.removeWaterMark=function(){this.waterMark&&(0,t.unmount)(this.container,this.waterMark)},i.prototype.iconHovered=function(){var e=this;(0,t.setStyle)(this.waterMark,{width:"170px"}),(0,t.setStyle)(this.div,{width:"170px"}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){(0,t.setStyle)(e.div,{opacity:"1"})},100)},i.prototype.iconNotHovered=function(){var e=this;(0,t.setStyle)(this.div,{opacity:"0"}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){(0,t.setStyle)(e.div,{width:"0px"}),(0,t.setStyle)(e.waterMark,{width:"30px"})},100)},i}();exports.NakerViewer=a,exports.currentScript=s;var c=function(){var t;exports.currentScript=s=document.currentScript,s||(t=document.getElementsByTagName("script"),exports.currentScript=s=t[t.length-1])};exports.getCurrentScript=c,c();var h=function(t){if(c(),s){var e=s.dataset.option;if(e){var i,o=n(e);try{i=JSON.parse(o)}catch(r){return console.error("Naker: Bad Json")}s.dataset.container?window.addEventListener("load",function(){i.container=document.getElementById(s.dataset.container),i.container||(i.container=document.querySelector(s.dataset.container)),i.container?t(i):console.error("Naker: Bad id, not able to find your container")}):(i.container=s.parentNode,t(i))}}};exports.checkScript=h;
},{"redom":"V64K","../Asset/icosphere.svg":"+i3X"}],"JKuB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NakerScreen=void 0;var e=require("./viewer"),t=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),n=function(n){function o(){var e=null!==n&&n.apply(this,arguments)||this;return e.mouseEventFields=["altKey","bubbles","button","buttons","cancelBubble","cancelable","clientX","clientY","composed","ctrlKey","defaultPrevented","detail","eventPhase","fromElement","isTrusted","layerX","layerY","metaKey","movementX","movementY","offsetX","offsetY","pageX","pageY","relatedTarget","returnValue","screenX","screenY","shiftKey","timeStamp","type","which","x","y","deltaX","deltaY","deltaZ","deltaMode","changedTouches"],e}return t(o,n),o.prototype.offScreen=function(e){var t=this,n='https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/';if(this.worker=this.createWorker(n+"worker.js"),!this.worker)return this.inScreen(e);this.worker.onmessage=function(e){t.workerToMain(e)};var o=this.canvas.transferControlToOffscreen();window.addEventListener("resize",function(){t.onResize()},!1),window.addEventListener("scroll",function(){t.onScroll()},!1),this.worker.postMessage({type:"init",canvas:o},[o]),this.onResize(),e()},var sitelink = 'https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/';o.prototype.sitelink=function(){var t=e.currentScript.src.split("/");return t.pop(),t.join("/")+"/"},o.prototype.createWorker=function(e){var t=null;try{t=new Worker(e)}catch(i){try{var n;try{n=new Blob(["importScripts('"+e+"');"],{type:"application/javascript"})}catch(a){var o=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder);o.append("importScripts('"+e+"');"),n=o.getBlob("application/javascript")}var r=(window.URL||window.webkitURL).createObjectURL(n);t=new Worker(r)}catch(c){return!1}}return t},o.prototype.inScreen=function(e){var t='https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/',n=document.createElement("script");n.src=t+"engine.js",n.async=!0,document.body.appendChild(n),n.addEventListener("load",function(){e()})},o.prototype.workerToMain=function(e){var t;switch(e.data.type){case"event":this.bindEvent(e.data);break;case"canvasMethod":(t=this.canvas)[e.data.method].apply(t,e.data.args);break;case"canvasStyle":this.canvas.style[e.data.name]=e.data.value}},o.prototype.bindEvent=function(e){var t,n=this;switch(e.targetName){case"window":t=window;break;case"canvas":t=this.canvas;break;case"document":t=document}t?t.addEventListener(e.eventName,function(t){var o=n.cloneMouseEvent(t),r={targetName:e.targetName,eventName:e.eventName,eventClone:o};n.sendToWorker("event",r)},e.option):console.error("Unknown target: "+e.targetName)},o.prototype.cloneMouseEvent=function(e){try{e.preventDefault(), { passive: false }}catch(t){}return this.cloneMouseEventProperties(e)},o.prototype.cloneMouseEventProperties=function(e){for(var t={},n=0,o=this.mouseEventFields;n<o.length;n++){var r=o[n];"changedTouches"==r&&e.changedTouches?(t.changedTouches=[],t.changedTouches[0]=this.cloneMouseEventProperties(e.changedTouches[0])):t[r]=e[r]}return t},o.prototype.onResize=function(){var e=void 0!==window.orientation?+window.orientation:window.screen.orientation&&window.screen.orientation.angle?window.screen.orientation.angle:0,t={canvas:this.canvas.getBoundingClientRect(),window:{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,orientation:e},document:{documentElement:{clientHeight:document.documentElement.clientHeight}}};this.sendToWorker("resize",t)},o.prototype.onScroll=function(){var e={canvas:this.canvas.getBoundingClientRect()};this.sendToWorker("scroll",e)},o.prototype.sendToWorker=function(e,t){var n=this;t.type=e;t=JSON.parse(JSON.stringify(t,function(e,t){return n.isElement(t)?null:t})),this.worker&&this.worker.postMessage(t)},o.prototype.isElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},o}(e.NakerViewer);exports.NakerScreen=n;
},{"./viewer":"PIIY"}],"NVGU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NakerOffscreenViewer=void 0;var e=require("./screen"),n=function(){var e=function(n,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])})(n,r)};return function(n,r){function o(){this.constructor=n}e(n,r),n.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),r=function(e){function r(n){var r=e.call(this,n)||this;return r.offscreen=!0,n&&void 0!==n.offscreen&&(r.offscreen=n.offscreen),r}return n(r,e),r.prototype.load=function(e,n){var r=this;this.isOffsreenAvailable()&&this.offscreen?this.offScreen(function(){console.log("Naker - offscreen"),r.sendToWorker("build",e),n("offscreen mode")}):this.inScreen(function(){e.container=r.container,e.canvas=r.canvas;var o=r.buildProject(e);r.system=o.system,n(o)}),this.onResize()},r.prototype.isOffsreenAvailable=function(){return"transferControlToOffscreen"in this.canvas&&"OffscreenCanvas"in window},r.prototype.buildProject=function(e){},r}(e.NakerScreen);exports.NakerOffscreenViewer=r;
},{"./screen":"JKuB"}],"x/ax":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(r,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])})(r,n)};return function(r,n){function t(){this.constructor=r}e(r,n),r.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}}();exports.__esModule=!0;var r=require("@naker/services/Viewer/offscreenViewer"),n=require("@naker/services/Viewer/viewer"),t=function(r){function n(e,n){var t=r.call(this,e)||this;return t.setNoEvent(),t.load(e,function(e){n&&n(e)}),t}return e(n,r),n.prototype.buildProject=function(e){return e.canvas=this.canvas,BackEngine.start(e)},n}(r.NakerOffscreenViewer);exports.render=function(e,r){return e.particle?e.environment?e.container?"HEAD"!=e.container.tagName?new t(e,r):void 0:console.error("Naker.Back: Missing container"):console.error("Naker.Back: Missing environment data"):console.error("Naker.Back: Missing particle data")},n.checkScript(function(e){exports.render(e)});
},{"@naker/services/Viewer/offscreenViewer":"NVGU","@naker/services/Viewer/viewer":"PIIY"}]},{},["x/ax"], "nakerback")
//# sourceMappingURL=/viewer.js.map
