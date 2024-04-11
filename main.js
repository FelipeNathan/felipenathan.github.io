(()=>{var e={443:function(e){e.exports=function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function n(n){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?t(Object(r),!0).forEach((function(t){e(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(){return new Promise((e=>{"loading"==document.readyState?document.addEventListener("DOMContentLoaded",e):e()}))}function r(e){return Array.from(new Set(e))}function o(){return navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")}function a(e,t){return e==t}function s(e,t){"template"!==e.tagName.toLowerCase()?console.warn(`Alpine: [${t}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${t}`):1!==e.content.childElementCount&&console.warn(`Alpine: <template> tag with [${t}] encountered with multiple element roots. Make sure <template> only has a single child element.`)}function l(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function c(e){return e.toLowerCase().replace(/-(\w)/g,((e,t)=>t.toUpperCase()))}function u(e,t){if(!1===t(e))return;let n=e.firstElementChild;for(;n;)u(n,t),n=n.nextElementSibling}function d(e,t){var n;return function(){var i=this,r=arguments,o=function(){n=null,e.apply(i,r)};clearTimeout(n),n=setTimeout(o,t)}}const p=(e,t,n)=>{if(console.warn(`Alpine Error: "${n}"\n\nExpression: "${t}"\nElement:`,e),!o())throw n};function f(e,{el:t,expression:n}){try{const i=e();return i instanceof Promise?i.catch((e=>p(t,n,e))):i}catch(e){p(t,n,e)}}function m(e,t,n,i={}){return f((()=>"function"==typeof t?t.call(n):new Function(["$data",...Object.keys(i)],`var __alpine_result; with($data) { __alpine_result = ${t} }; return __alpine_result`)(n,...Object.values(i))),{el:e,expression:t})}function h(e,t,n,i={}){return f((()=>{if("function"==typeof t)return Promise.resolve(t.call(n,i.$event));let e=Function;if(e=Object.getPrototypeOf((async function(){})).constructor,Object.keys(n).includes(t)){let e=new Function(["dataContext",...Object.keys(i)],`with(dataContext) { return ${t} }`)(n,...Object.values(i));return"function"==typeof e?Promise.resolve(e.call(n,i.$event)):Promise.resolve()}return Promise.resolve(new e(["dataContext",...Object.keys(i)],`with(dataContext) { ${t} }`)(n,...Object.values(i)))}),{el:e,expression:t})}const g=/^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;function v(e){const t=_(e.name);return g.test(t)}function b(e,t,n){let i=Array.from(e.attributes).filter(v).map(w),r=i.filter((e=>"spread"===e.type))[0];if(r){let n=m(e,r.expression,t.$data);i=i.concat(Object.entries(n).map((([e,t])=>w({name:e,value:t}))))}return n?i.filter((e=>e.type===n)):y(i)}function y(e){let t=["bind","model","show","catch-all"];return e.sort(((e,n)=>{let i=-1===t.indexOf(e.type)?"catch-all":e.type,r=-1===t.indexOf(n.type)?"catch-all":n.type;return t.indexOf(i)-t.indexOf(r)}))}function w({name:e,value:t}){const n=_(e),i=n.match(g),r=n.match(/:([a-zA-Z0-9\-:]+)/),o=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[];return{type:i?i[1]:null,value:r?r[1]:null,modifiers:o.map((e=>e.replace(".",""))),expression:t}}function x(e){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(e)}function _(e){return e.startsWith("@")?e.replace("@","x-on:"):e.startsWith(":")?e.replace(":","x-bind:"):e}function S(e,t=Boolean){return e.split(" ").filter(t)}const E="in",P="out",k="cancelled";function O(e,t,n,i,r=!1){if(r)return t();if(e.__x_transition&&e.__x_transition.type===E)return;const o=b(e,i,"transition"),a=b(e,i,"show")[0];if(a&&a.modifiers.includes("transition")){let i=a.modifiers;if(i.includes("out")&&!i.includes("in"))return t();const r=i.includes("in")&&i.includes("out");i=r?i.filter(((e,t)=>t<i.indexOf("out"))):i,j(e,i,t,n)}else o.some((e=>["enter","enter-start","enter-end"].includes(e.value)))?T(e,i,o,t,n):t()}function A(e,t,n,i,r=!1){if(r)return t();if(e.__x_transition&&e.__x_transition.type===P)return;const o=b(e,i,"transition"),a=b(e,i,"show")[0];if(a&&a.modifiers.includes("transition")){let i=a.modifiers;if(i.includes("in")&&!i.includes("out"))return t();const r=i.includes("in")&&i.includes("out");i=r?i.filter(((e,t)=>t>i.indexOf("out"))):i,C(e,i,r,t,n)}else o.some((e=>["leave","leave-start","leave-end"].includes(e.value)))?L(e,i,o,t,n):t()}function j(e,t,n,i){D(e,t,n,(()=>{}),i,{duration:M(t,"duration",150),origin:M(t,"origin","center"),first:{opacity:0,scale:M(t,"scale",95)},second:{opacity:1,scale:100}},E)}function C(e,t,n,i,r){D(e,t,(()=>{}),i,r,{duration:n?M(t,"duration",150):M(t,"duration",150)/2,origin:M(t,"origin","center"),first:{opacity:1,scale:100},second:{opacity:0,scale:M(t,"scale",95)}},P)}function M(e,t,n){if(-1===e.indexOf(t))return n;const i=e[e.indexOf(t)+1];if(!i)return n;if("scale"===t&&!F(i))return n;if("duration"===t){let e=i.match(/([0-9]+)ms/);if(e)return e[1]}return"origin"===t&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[i,e[e.indexOf(t)+2]].join(" "):i}function D(e,t,n,i,r,o,a){e.__x_transition&&e.__x_transition.cancel&&e.__x_transition.cancel();const s=e.style.opacity,l=e.style.transform,c=e.style.transformOrigin,u=!t.includes("opacity")&&!t.includes("scale"),d=u||t.includes("opacity"),p=u||t.includes("scale"),f={start(){d&&(e.style.opacity=o.first.opacity),p&&(e.style.transform=`scale(${o.first.scale/100})`)},during(){p&&(e.style.transformOrigin=o.origin),e.style.transitionProperty=[d?"opacity":"",p?"transform":""].join(" ").trim(),e.style.transitionDuration=o.duration/1e3+"s",e.style.transitionTimingFunction="cubic-bezier(0.4, 0.0, 0.2, 1)"},show(){n()},end(){d&&(e.style.opacity=o.second.opacity),p&&(e.style.transform=`scale(${o.second.scale/100})`)},hide(){i()},cleanup(){d&&(e.style.opacity=s),p&&(e.style.transform=l),p&&(e.style.transformOrigin=c),e.style.transitionProperty=null,e.style.transitionDuration=null,e.style.transitionTimingFunction=null}};I(e,f,a,r)}const $=(e,t,n)=>"function"==typeof e?n.evaluateReturnExpression(t,e):e;function T(e,t,n,i,r){R(e,S($((n.find((e=>"enter"===e.value))||{expression:""}).expression,e,t)),S($((n.find((e=>"enter-start"===e.value))||{expression:""}).expression,e,t)),S($((n.find((e=>"enter-end"===e.value))||{expression:""}).expression,e,t)),i,(()=>{}),E,r)}function L(e,t,n,i,r){R(e,S($((n.find((e=>"leave"===e.value))||{expression:""}).expression,e,t)),S($((n.find((e=>"leave-start"===e.value))||{expression:""}).expression,e,t)),S($((n.find((e=>"leave-end"===e.value))||{expression:""}).expression,e,t)),(()=>{}),i,P,r)}function R(e,t,n,i,r,o,a,s){e.__x_transition&&e.__x_transition.cancel&&e.__x_transition.cancel();const l=e.__x_original_classes||[],c={start(){e.classList.add(...n)},during(){e.classList.add(...t)},show(){r()},end(){e.classList.remove(...n.filter((e=>!l.includes(e)))),e.classList.add(...i)},hide(){o()},cleanup(){e.classList.remove(...t.filter((e=>!l.includes(e)))),e.classList.remove(...i.filter((e=>!l.includes(e))))}};I(e,c,a,s)}function I(e,t,n,i){const r=N((()=>{t.hide(),e.isConnected&&t.cleanup(),delete e.__x_transition}));e.__x_transition={type:n,cancel:N((()=>{i(k),r()})),finish:r,nextFrame:null},t.start(),t.during(),e.__x_transition.nextFrame=requestAnimationFrame((()=>{let n=1e3*Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""));0===n&&(n=1e3*Number(getComputedStyle(e).animationDuration.replace("s",""))),t.show(),e.__x_transition.nextFrame=requestAnimationFrame((()=>{t.end(),setTimeout(e.__x_transition.finish,n)}))}))}function F(e){return!Array.isArray(e)&&!isNaN(e)}function N(e){let t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function B(e,t,n,i,r){s(t,"x-for");let o=J("function"==typeof n?e.evaluateReturnExpression(t,n):n),a=Q(e,t,o,r),l=t;a.forEach(((n,s)=>{let c=z(o,n,s,a,r()),u=W(e,t,s,c),d=V(l.nextElementSibling,u);d?(delete d.__x_for_key,d.__x_for=c,e.updateElements(d,(()=>d.__x_for))):(d=K(t,l),O(d,(()=>{}),(()=>{}),e,i),d.__x_for=c,e.initializeElements(d,(()=>d.__x_for))),l=d,l.__x_for_key=u})),G(l,e)}function J(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\(|\)$/g,i=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,r=e.match(i);if(!r)return;let o={};o.items=r[2].trim();let a=r[1].trim().replace(n,""),s=a.match(t);return s?(o.item=a.replace(t,"").trim(),o.index=s[1].trim(),s[2]&&(o.collection=s[2].trim())):o.item=a,o}function z(e,t,i,r,o){let a=o?n({},o):{};return a[e.item]=t,e.index&&(a[e.index]=i),e.collection&&(a[e.collection]=r),a}function W(e,t,n,i){let r=b(t,e,"bind").filter((e=>"key"===e.value))[0];return r?e.evaluateReturnExpression(t,r.expression,(()=>i)):n}function Q(e,t,n,i){let r=b(t,e,"if")[0];if(r&&!e.evaluateReturnExpression(t,r.expression))return[];let o=e.evaluateReturnExpression(t,n.items,i);return F(o)&&o>0&&(o=Array.from(Array(o).keys(),(e=>e+1))),o}function K(e,t){let n=document.importNode(e.content,!0);return t.parentElement.insertBefore(n,t.nextElementSibling),t.nextElementSibling}function V(e,t){if(!e)return;if(void 0===e.__x_for_key)return;if(e.__x_for_key===t)return e;let n=e;for(;n;){if(n.__x_for_key===t)return n.parentElement.insertBefore(n,e);n=!(!n.nextElementSibling||void 0===n.nextElementSibling.__x_for_key)&&n.nextElementSibling}}function G(e,t){for(var n=!(!e.nextElementSibling||void 0===e.nextElementSibling.__x_for_key)&&e.nextElementSibling;n;){let e=n,i=n.nextElementSibling;A(n,(()=>{e.remove()}),(()=>{}),t),n=!(!i||void 0===i.__x_for_key)&&i}}function q(e,t,n,i,o,s,l){var u=e.evaluateReturnExpression(t,i,o);if("value"===n){if(Ve.ignoreFocusedForValueBinding&&document.activeElement.isSameNode(t))return;if(void 0===u&&i.match(/\./)&&(u=""),"radio"===t.type)void 0===t.attributes.value&&"bind"===s?t.value=u:"bind"!==s&&(t.checked=a(t.value,u));else if("checkbox"===t.type)"boolean"==typeof u||[null,void 0].includes(u)||"bind"!==s?"bind"!==s&&(Array.isArray(u)?t.checked=u.some((e=>a(e,t.value))):t.checked=!!u):t.value=String(u);else if("SELECT"===t.tagName)U(t,u);else{if(t.value===u)return;t.value=u}}else if("class"===n)if(Array.isArray(u)){const e=t.__x_original_classes||[];t.setAttribute("class",r(e.concat(u)).join(" "))}else if("object"==typeof u)Object.keys(u).sort(((e,t)=>u[e]-u[t])).forEach((e=>{u[e]?S(e).forEach((e=>t.classList.add(e))):S(e).forEach((e=>t.classList.remove(e)))}));else{const e=t.__x_original_classes||[],n=u?S(u):[];t.setAttribute("class",r(e.concat(n)).join(" "))}else n=l.includes("camel")?c(n):n,[null,void 0,!1].includes(u)?t.removeAttribute(n):x(n)?H(t,n,n):H(t,n,u)}function H(e,t,n){e.getAttribute(t)!=n&&e.setAttribute(t,n)}function U(e,t){const n=[].concat(t).map((e=>e+""));Array.from(e.options).forEach((e=>{e.selected=n.includes(e.value||e.text)}))}function Z(e,t,n){void 0===t&&n.match(/\./)&&(t=""),e.textContent=t}function X(e,t,n,i){t.innerHTML=e.evaluateReturnExpression(t,n,i)}function Y(e,t,n,i,r=!1){const o=()=>{t.style.display="none",t.__x_is_shown=!1},a=()=>{1===t.style.length&&"none"===t.style.display?t.removeAttribute("style"):t.style.removeProperty("display"),t.__x_is_shown=!0};if(!0===r)return void(n?a():o());const s=(i,r)=>{n?(("none"===t.style.display||t.__x_transition)&&O(t,(()=>{a()}),r,e),i((()=>{}))):"none"!==t.style.display?A(t,(()=>{i((()=>{o()}))}),r,e):i((()=>{}))};i.includes("immediate")?s((e=>e()),(()=>{})):(e.showDirectiveLastElement&&!e.showDirectiveLastElement.contains(t)&&e.executeAndClearRemainingShowDirectiveStack(),e.showDirectiveStack.push(s),e.showDirectiveLastElement=t)}function ee(e,t,n,i,r){s(t,"x-if");const o=t.nextElementSibling&&!0===t.nextElementSibling.__x_inserted_me;if(!n||o&&!t.__x_transition)!n&&o&&A(t.nextElementSibling,(()=>{t.nextElementSibling.remove()}),(()=>{}),e,i);else{const n=document.importNode(t.content,!0);t.parentElement.insertBefore(n,t.nextElementSibling),O(t.nextElementSibling,(()=>{}),(()=>{}),e,i),e.initializeElements(t.nextElementSibling,r),t.nextElementSibling.__x_inserted_me=!0}}function te(e,t,n,i,r,o={}){const a={passive:i.includes("passive")};if(i.includes("camel")&&(n=c(n)),i.includes("away")){let s=l=>{t.contains(l.target)||t.offsetWidth<1&&t.offsetHeight<1||(ne(e,r,l,o),i.includes("once")&&document.removeEventListener(n,s,a))};document.addEventListener(n,s,a)}else{let s=i.includes("window")?window:i.includes("document")?document:t,l=c=>{s!==window&&s!==document||document.body.contains(t)?ie(n)&&re(c,i)||(i.includes("prevent")&&c.preventDefault(),i.includes("stop")&&c.stopPropagation(),i.includes("self")&&c.target!==t)||ne(e,r,c,o).then((e=>{!1===e?c.preventDefault():i.includes("once")&&s.removeEventListener(n,l,a)})):s.removeEventListener(n,l,a)};if(i.includes("debounce")){let e=i[i.indexOf("debounce")+1]||"invalid-wait",t=F(e.split("ms")[0])?Number(e.split("ms")[0]):250;l=d(l,t)}s.addEventListener(n,l,a)}}function ne(e,t,i,r){return e.evaluateCommandExpression(i.target,t,(()=>n(n({},r()),{},{$event:i})))}function ie(e){return["keydown","keyup"].includes(e)}function re(e,t){let n=t.filter((e=>!["window","document","prevent","stop"].includes(e)));if(n.includes("debounce")){let e=n.indexOf("debounce");n.splice(e,F((n[e+1]||"invalid-wait").split("ms")[0])?2:1)}if(0===n.length)return!1;if(1===n.length&&n[0]===oe(e.key))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter((e=>n.includes(e)));return n=n.filter((e=>!i.includes(e))),!(i.length>0&&i.filter((t=>("cmd"!==t&&"super"!==t||(t="meta"),e[`${t}Key`]))).length===i.length&&n[0]===oe(e.key))}function oe(e){switch(e){case"/":return"slash";case" ":case"Spacebar":return"space";default:return e&&l(e)}}function ae(e,t,i,r,o){var a="select"===t.tagName.toLowerCase()||["checkbox","radio"].includes(t.type)||i.includes("lazy")?"change":"input";te(e,t,a,i,`${r} = rightSideOfExpression($event, ${r})`,(()=>n(n({},o()),{},{rightSideOfExpression:se(t,i,r)})))}function se(e,t,n){return"radio"===e.type&&(e.hasAttribute("name")||e.setAttribute("name",n)),(n,i)=>{if(n instanceof CustomEvent&&n.detail)return n.detail;if("checkbox"===e.type){if(Array.isArray(i)){const e=t.includes("number")?le(n.target.value):n.target.value;return n.target.checked?i.concat([e]):i.filter((t=>!a(t,e)))}return n.target.checked}if("select"===e.tagName.toLowerCase()&&e.multiple)return t.includes("number")?Array.from(n.target.selectedOptions).map((e=>le(e.value||e.text))):Array.from(n.target.selectedOptions).map((e=>e.value||e.text));{const e=n.target.value;return t.includes("number")?le(e):t.includes("trim")?e.trim():e}}}function le(e){const t=e?parseFloat(e):null;return F(t)?t:e}const{isArray:ce}=Array,{getPrototypeOf:ue,create:de,defineProperty:pe,defineProperties:fe,isExtensible:me,getOwnPropertyDescriptor:he,getOwnPropertyNames:ge,getOwnPropertySymbols:ve,preventExtensions:be,hasOwnProperty:ye}=Object,{push:we,concat:xe,map:_e}=Array.prototype;function Se(e){return void 0===e}function Ee(e){return"function"==typeof e}function Pe(e){return"object"==typeof e}const ke=new WeakMap;function Oe(e,t){ke.set(e,t)}const Ae=e=>ke.get(e)||e;function je(e,t){return e.valueIsObservable(t)?e.getProxy(t):t}function Ce(e){return ye.call(e,"value")&&(e.value=Ae(e.value)),e}function Me(e,t,n){xe.call(ge(n),ve(n)).forEach((i=>{let r=he(n,i);r.configurable||(r=Je(e,r,je)),pe(t,i,r)})),be(t)}class De{constructor(e,t){this.originalTarget=t,this.membrane=e}get(e,t){const{originalTarget:n,membrane:i}=this,r=n[t],{valueObserved:o}=i;return o(n,t),i.getProxy(r)}set(e,t,n){const{originalTarget:i,membrane:{valueMutated:r}}=this;return i[t]!==n?(i[t]=n,r(i,t)):"length"===t&&ce(i)&&r(i,t),!0}deleteProperty(e,t){const{originalTarget:n,membrane:{valueMutated:i}}=this;return delete n[t],i(n,t),!0}apply(e,t,n){}construct(e,t,n){}has(e,t){const{originalTarget:n,membrane:{valueObserved:i}}=this;return i(n,t),t in n}ownKeys(e){const{originalTarget:t}=this;return xe.call(ge(t),ve(t))}isExtensible(e){const t=me(e);if(!t)return t;const{originalTarget:n,membrane:i}=this,r=me(n);return r||Me(i,e,n),r}setPrototypeOf(e,t){}getPrototypeOf(e){const{originalTarget:t}=this;return ue(t)}getOwnPropertyDescriptor(e,t){const{originalTarget:n,membrane:i}=this,{valueObserved:r}=this.membrane;r(n,t);let o=he(n,t);if(Se(o))return o;const a=he(e,t);return Se(a)?(o=Je(i,o,je),o.configurable||pe(e,t,o),o):a}preventExtensions(e){const{originalTarget:t,membrane:n}=this;return Me(n,e,t),be(t),!0}defineProperty(e,t,n){const{originalTarget:i,membrane:r}=this,{valueMutated:o}=r,{configurable:a}=n;if(ye.call(n,"writable")&&!ye.call(n,"value")){const e=he(i,t);n.value=e.value}return pe(i,t,Ce(n)),!1===a&&pe(e,t,Je(r,n,je)),o(i,t),!0}}function $e(e,t){return e.valueIsObservable(t)?e.getReadOnlyProxy(t):t}class Te{constructor(e,t){this.originalTarget=t,this.membrane=e}get(e,t){const{membrane:n,originalTarget:i}=this,r=i[t],{valueObserved:o}=n;return o(i,t),n.getReadOnlyProxy(r)}set(e,t,n){return!1}deleteProperty(e,t){return!1}apply(e,t,n){}construct(e,t,n){}has(e,t){const{originalTarget:n,membrane:{valueObserved:i}}=this;return i(n,t),t in n}ownKeys(e){const{originalTarget:t}=this;return xe.call(ge(t),ve(t))}setPrototypeOf(e,t){}getOwnPropertyDescriptor(e,t){const{originalTarget:n,membrane:i}=this,{valueObserved:r}=i;r(n,t);let o=he(n,t);if(Se(o))return o;const a=he(e,t);return Se(a)?(o=Je(i,o,$e),ye.call(o,"set")&&(o.set=void 0),o.configurable||pe(e,t,o),o):a}preventExtensions(e){return!1}defineProperty(e,t,n){return!1}}function Le(e){let t;return ce(e)?t=[]:Pe(e)&&(t={}),t}const Re=Object.prototype;function Ie(e){if(null===e)return!1;if("object"!=typeof e)return!1;if(ce(e))return!0;const t=ue(e);return t===Re||null===t||null===ue(t)}const Fe=(e,t)=>{},Ne=(e,t)=>{},Be=e=>e;function Je(e,t,n){const{set:i,get:r}=t;return ye.call(t,"value")?t.value=n(e,t.value):(Se(r)||(t.get=function(){return n(e,r.call(Ae(this)))}),Se(i)||(t.set=function(t){i.call(Ae(this),e.unwrapProxy(t))})),t}class ze{constructor(e){if(this.valueDistortion=Be,this.valueMutated=Ne,this.valueObserved=Fe,this.valueIsObservable=Ie,this.objectGraph=new WeakMap,!Se(e)){const{valueDistortion:t,valueMutated:n,valueObserved:i,valueIsObservable:r}=e;this.valueDistortion=Ee(t)?t:Be,this.valueMutated=Ee(n)?n:Ne,this.valueObserved=Ee(i)?i:Fe,this.valueIsObservable=Ee(r)?r:Ie}}getProxy(e){const t=Ae(e),n=this.valueDistortion(t);if(this.valueIsObservable(n)){const i=this.getReactiveState(t,n);return i.readOnly===e?e:i.reactive}return n}getReadOnlyProxy(e){e=Ae(e);const t=this.valueDistortion(e);return this.valueIsObservable(t)?this.getReactiveState(e,t).readOnly:t}unwrapProxy(e){return Ae(e)}getReactiveState(e,t){const{objectGraph:n}=this;let i=n.get(t);if(i)return i;const r=this;return i={get reactive(){const n=new De(r,t),i=new Proxy(Le(t),n);return Oe(i,e),pe(this,"reactive",{value:i}),i},get readOnly(){const n=new Te(r,t),i=new Proxy(Le(t),n);return Oe(i,e),pe(this,"readOnly",{value:i}),i}},n.set(t,i),i}}function We(e,t){let n=new ze({valueMutated(e,n){t(e,n)}});return{data:n.getProxy(e),membrane:n}}function Qe(e,t){let n=e.unwrapProxy(t),i={};return Object.keys(n).forEach((e=>{["$el","$refs","$nextTick","$watch"].includes(e)||(i[e]=n[e])})),i}class Ke{constructor(e,t=null){this.$el=e;const n=this.$el.getAttribute("x-data"),i=""===n?"{}":n,r=this.$el.getAttribute("x-init");let o={$el:this.$el},a=t?t.$el:this.$el;Object.entries(Ve.magicProperties).forEach((([e,t])=>{Object.defineProperty(o,`$${e}`,{get:function(){return t(a)}})})),this.unobservedData=t?t.getUnobservedData():m(e,i,o);let{membrane:s,data:l}=this.wrapDataInObservable(this.unobservedData);var c;this.$data=l,this.membrane=s,this.unobservedData.$el=this.$el,this.unobservedData.$refs=this.getRefsProxy(),this.nextTickStack=[],this.unobservedData.$nextTick=e=>{this.nextTickStack.push(e)},this.watchers={},this.unobservedData.$watch=(e,t)=>{this.watchers[e]||(this.watchers[e]=[]),this.watchers[e].push(t)},Object.entries(Ve.magicProperties).forEach((([e,t])=>{Object.defineProperty(this.unobservedData,`$${e}`,{get:function(){return t(a,this.$el)}})})),this.showDirectiveStack=[],this.showDirectiveLastElement,t||Ve.onBeforeComponentInitializeds.forEach((e=>e(this))),r&&!t&&(this.pauseReactivity=!0,c=this.evaluateReturnExpression(this.$el,r),this.pauseReactivity=!1),this.initializeElements(this.$el),this.listenForNewElementsToInitialize(),"function"==typeof c&&c.call(this.$data),t||setTimeout((()=>{Ve.onComponentInitializeds.forEach((e=>e(this)))}),0)}getUnobservedData(){return Qe(this.membrane,this.$data)}wrapDataInObservable(e){var t=this;let n=d((function(){t.updateElements(t.$el)}),0);return We(e,((e,i)=>{t.watchers[i]?t.watchers[i].forEach((t=>t(e[i]))):Array.isArray(e)?Object.keys(t.watchers).forEach((n=>{let r=n.split(".");"length"!==i&&r.reduce(((i,r)=>(Object.is(e,i[r])&&t.watchers[n].forEach((t=>t(e))),i[r])),t.unobservedData)})):Object.keys(t.watchers).filter((e=>e.includes("."))).forEach((n=>{let r=n.split(".");i===r[r.length-1]&&r.reduce(((r,o)=>(Object.is(e,r)&&t.watchers[n].forEach((t=>t(e[i]))),r[o])),t.unobservedData)})),t.pauseReactivity||n()}))}walkAndSkipNestedComponents(e,t,n=(()=>{})){u(e,(e=>e.hasAttribute("x-data")&&!e.isSameNode(this.$el)?(e.__x||n(e),!1):t(e)))}initializeElements(e,t=(()=>{})){this.walkAndSkipNestedComponents(e,(e=>void 0===e.__x_for_key&&void 0===e.__x_inserted_me&&void this.initializeElement(e,t)),(e=>{e.__x=new Ke(e)})),this.executeAndClearRemainingShowDirectiveStack(),this.executeAndClearNextTickStack(e)}initializeElement(e,t){e.hasAttribute("class")&&b(e,this).length>0&&(e.__x_original_classes=S(e.getAttribute("class"))),this.registerListeners(e,t),this.resolveBoundAttributes(e,!0,t)}updateElements(e,t=(()=>{})){this.walkAndSkipNestedComponents(e,(e=>{if(void 0!==e.__x_for_key&&!e.isSameNode(this.$el))return!1;this.updateElement(e,t)}),(e=>{e.__x=new Ke(e)})),this.executeAndClearRemainingShowDirectiveStack(),this.executeAndClearNextTickStack(e)}executeAndClearNextTickStack(e){e===this.$el&&this.nextTickStack.length>0&&requestAnimationFrame((()=>{for(;this.nextTickStack.length>0;)this.nextTickStack.shift()()}))}executeAndClearRemainingShowDirectiveStack(){this.showDirectiveStack.reverse().map((e=>new Promise(((t,n)=>{e(t,n)})))).reduce(((e,t)=>e.then((()=>t.then((e=>{e()}))))),Promise.resolve((()=>{}))).catch((e=>{if(e!==k)throw e})),this.showDirectiveStack=[],this.showDirectiveLastElement=void 0}updateElement(e,t){this.resolveBoundAttributes(e,!1,t)}registerListeners(e,t){b(e,this).forEach((({type:n,value:i,modifiers:r,expression:o})=>{switch(n){case"on":te(this,e,i,r,o,t);break;case"model":ae(this,e,r,o,t)}}))}resolveBoundAttributes(e,t=!1,n){let i=b(e,this);i.forEach((({type:r,value:o,modifiers:a,expression:s})=>{switch(r){case"model":q(this,e,"value",s,n,r,a);break;case"bind":if("template"===e.tagName.toLowerCase()&&"key"===o)return;q(this,e,o,s,n,r,a);break;case"text":var l=this.evaluateReturnExpression(e,s,n);Z(e,l,s);break;case"html":X(this,e,s,n);break;case"show":l=this.evaluateReturnExpression(e,s,n),Y(this,e,l,a,t);break;case"if":if(i.some((e=>"for"===e.type)))return;l=this.evaluateReturnExpression(e,s,n),ee(this,e,l,t,n);break;case"for":B(this,e,s,t,n);break;case"cloak":e.removeAttribute("x-cloak")}}))}evaluateReturnExpression(e,t,i=(()=>{})){return m(e,t,this.$data,n(n({},i()),{},{$dispatch:this.getDispatchFunction(e)}))}evaluateCommandExpression(e,t,i=(()=>{})){return h(e,t,this.$data,n(n({},i()),{},{$dispatch:this.getDispatchFunction(e)}))}getDispatchFunction(e){return(t,n={})=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0}))}}listenForNewElementsToInitialize(){const e=this.$el,t={childList:!0,attributes:!0,subtree:!0};new MutationObserver((e=>{for(let t=0;t<e.length;t++){const n=e[t].target.closest("[x-data]");if(n&&n.isSameNode(this.$el)){if("attributes"===e[t].type&&"x-data"===e[t].attributeName){const n=e[t].target.getAttribute("x-data")||"{}",i=m(this.$el,n,{$el:this.$el});Object.keys(i).forEach((e=>{this.$data[e]!==i[e]&&(this.$data[e]=i[e])}))}e[t].addedNodes.length>0&&e[t].addedNodes.forEach((e=>{1!==e.nodeType||e.__x_inserted_me||(!e.matches("[x-data]")||e.__x?this.initializeElements(e):e.__x=new Ke(e))}))}}})).observe(e,t)}getRefsProxy(){var e=this;return new Proxy({},{get(t,n){return"$isAlpineProxy"===n||(e.walkAndSkipNestedComponents(e.$el,(e=>{e.hasAttribute("x-ref")&&e.getAttribute("x-ref")===n&&(i=e)})),i);var i}})}}const Ve={version:"2.8.0",pauseMutationObserver:!1,magicProperties:{},onComponentInitializeds:[],onBeforeComponentInitializeds:[],ignoreFocusedForValueBinding:!1,start:async function(){o()||await i(),this.discoverComponents((e=>{this.initializeComponent(e)})),document.addEventListener("turbolinks:load",(()=>{this.discoverUninitializedComponents((e=>{this.initializeComponent(e)}))})),this.listenForNewUninitializedComponentsAtRunTime()},discoverComponents:function(e){document.querySelectorAll("[x-data]").forEach((t=>{e(t)}))},discoverUninitializedComponents:function(e,t=null){const n=(t||document).querySelectorAll("[x-data]");Array.from(n).filter((e=>void 0===e.__x)).forEach((t=>{e(t)}))},listenForNewUninitializedComponentsAtRunTime:function(){const e=document.querySelector("body"),t={childList:!0,attributes:!0,subtree:!0};new MutationObserver((e=>{if(!this.pauseMutationObserver)for(let t=0;t<e.length;t++)e[t].addedNodes.length>0&&e[t].addedNodes.forEach((e=>{1===e.nodeType&&(e.parentElement&&e.parentElement.closest("[x-data]")||this.discoverUninitializedComponents((e=>{this.initializeComponent(e)}),e.parentElement))}))})).observe(e,t)},initializeComponent:function(e){if(!e.__x)try{e.__x=new Ke(e)}catch(e){setTimeout((()=>{throw e}),0)}},clone:function(e,t){t.__x||(t.__x=new Ke(t,e))},addMagicProperty:function(e,t){this.magicProperties[e]=t},onComponentInitialized:function(e){this.onComponentInitializeds.push(e)},onBeforeComponentInitialized:function(e){this.onBeforeComponentInitializeds.push(e)}};return o()||(window.Alpine=Ve,window.deferLoadingAlpine?window.deferLoadingAlpine((function(){window.Alpine.start()})):window.Alpine.start()),Ve}()}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(443);function e(e,t,n,i=!1){return{name:e,level:t,tools:n,showTools:i}}window.getJobs=function(){return{jobs:[{company:"Meli",period:"Set 2023 / Current",showMoreProjects:!1,showMoreProjectsButton:!1,projects:[{tab:"description",name:"Profile Management",description:"Responsible to manage the profile screens",participations:["Improving the performance of the apps making more resilience, implementing Circuit Breaker, changing to faster libraries, etc"]}],techs:["Kotlin","Golang","Fury","Datadog","NewRelic"],logo:"assets/meli.jpg",order:7},{company:"PicPay",period:"Jul 2021 / Current",showMoreProjects:!1,showMoreProjectsButton:!1,projects:[{tab:"description",name:"OpenFinance",description:"Responsible to manage data extraction between Finantial Institutions",participations:["Creating a service to manage the data extraction between Finatial Entities with user consent, this is a backend service where the PicPay app start the flow of collect data and then the platform can manage the user data to offer products"]}],techs:["Kotlin","DynamoDB","Docker","Kubernetes","Microservices","Datadog","Jenkins","Kafka","Localstack","S3"],logo:"assets/picpay.png",order:7},{company:"Guiabolso / PicPay",period:"Jun 2021 / Jul 2021",showMoreProjects:!1,showMoreProjectsButton:!1,projects:[{tab:"description",name:"CRM - Team",description:"CRM team work together with Salesforce to ensure the relationship of our customers",participations:["I work in CRM team, integration the user data to Sales Cloud and Marketing Cloud of Salesforce partner"]}],techs:["Kotlin","AWS SQS","AWS Lambda","AWS Kinesis","AWS Firehose","AWS CloudWatch","MySQL","Docker","Kubernetes","Microservices","Datadog","Kibana","Jenkins"],logo:"assets/guiabolso.jpg",order:6},{company:"TOTVS S.A.",period:"Aug 2020 / Jun 2021",showMoreProjects:!1,showMoreProjectsButton:!1,projects:[{tab:"description",name:"Fluig Platform",description:"Fluig is a platform that aggregates several TOTVS services such as BPM, ECM, LMS and others",participations:["I perform maintenance and create new resources according to customer demands"]},{tab:"description",name:"Fluig Storage",description:"A microservice integrated with AWS that aims to manage files imported within the Fluig Platform",participations:["In it I implemented the ability to generate a public JWT token for uploading files without the need to be logged in the system and also the query for using AWS S3 through AWS Athena and AWS Cloudl Trail"]}],techs:["Springboot","Hibernate","Java 11","AWS","Jboss","MySQL"],logo:"assets/totvs.jpg",order:5},{company:"Varejonline",period:"Jan 2016 / Jul 2020",showMoreProjects:!1,showMoreProjectsButton:!0,projects:[{tab:"description",name:"Varejonline ERP",description:"Business management software that controls sales, inventory, finance, accounting and tax, generating digital information related to SPED's demands and obligations",participations:["Implementation of Electronic Payment, exchange of files between the ERP and the company responsible for transacting bank payments","Migration of screens developed in Flex to HTML5 and Angular 9"]},{tab:"description",name:"Varejonline PDV",description:'Point of sale (POS) desktop software, operates "On Line" or "Off Line", when without internet and as a contingency option. Integrated with dedicated TEF',participations:["Migration from java 7 to java 8 from legacy POS","Implementation of the integration of the POS with the Mercado Pago through a microservice","Implementation of the sending of Electronic Tax Coupon through the MF-e (exchange of files with the integrating apparatus of the state of Ceará)","POS integration with TEF (credit card machine)"]},{tab:"description",name:"Routed Messaging",description:"Solution for mapping callback between microservice and third party service",participations:["Creation of a message routing due to the load balancer not returning the integration message to the server connected to the POS via websocket"]},{tab:"description",name:"VO Mobile",description:"Mobile application developed in angular with sales report by branches and ranking of products and sellers",participations:["Implementation of Vendor Ranking and Product Ranking report in an application made in Ionic"]},{tab:"description",name:"Check Windows Session",description:"Web application to show if there are any users logged on the shared server",participations:["Creation of a web application that executes commands via cmd on the server to validate if there is any user connected to the windows server (shared user) with Kotlin and Thymeleaf"]}],techs:["Springboot","Hibernate","Java 8","PostreSQL","Oracle","Tomcat","Angular 9","jQuery","Java SWT","ActiveMQ","Ionic","Typescript","Spring Stomp","Kotlin"],logo:"assets/varejonline.jpg",order:4},{company:"Neomind",period:"Jul 2015 / Jan 2016",showMoreProjects:!1,showMoreProjectsButton:!1,projects:[{tab:"description",name:"Fusion Platform",description:"Fusion for document management and process management created by Neomind",participations:["Dynamic report creation, transforming the Fusion dynamic form into a structure for printing on ireport","Creation and maintenance of customer workflows","Creation of the new logtime functionality, listing all projects in the user's name to inform the hours worked"]}],techs:["Java EE","Hibernate","Java 7","Tomcat","SQL Server","AngularJS","jQuery"],logo:"assets/neomind.jpg",order:3},{company:"Linx",period:"Jul 2012 / Jul 2015",showMoreProjects:!1,showMoreProjectsButton:!1,projects:[{tab:"description",name:"Microvix ERP",description:"Microvix ERP is a system for business management that meets all the routines of networks and franchises, supporting the franchisor-franchisee relationship and offering efficient solutions for other financial processes",participations:["Maintenance of ERP, bug fixes and business rules with ASP language","Implementation of ASP-ORM, mapping database tables into ASP objects respecting the concepts of object-oriented programming","Migration of pages with functional programming to pages with object orientation and MVC standard (ASP, JQuery)","Creation of the glasses and / or frames sales routine, validating product aggregation rules (C#)"]}],techs:["ASP3","C#","SQL Server","IIS","jQuery"],logo:"assets/linx.jpg",order:2},{company:"Staff Informática",period:"Jan 2012 / Jun 2012",showMoreProjects:!1,showMoreProjectsButton:!1,projects:[{tab:"description",name:"GECEX",description:"Foreign trade management system",participations:["Internship in programming with Powerbuilder, systems analysts spent few demands to be executed, the most common being the exchange of labels"]}],techs:["Power Builder"],logo:"assets/staff.jpg",order:1}].sort(((e,t)=>e.order>t.order?-1:1))}},window.reverse=e=>e%2==0,window.getInfo=function(){return{name:"Felipe Nathan Campigoto",position:"Software Developer",age:`${t()} years old`,contacts:["+55 47 99658-2561","ncampigoto@gmail.com"],location:"Joinville - Santa Catarina - Brazil",resume:'\n            <p class="text-center"> In a few words, I\'m a software developer that accepts challenges, I already worked with desktop, web and mobile applications. </p>\n            <p class="text-center"> One of my favorites hobbies is learn about programming languages drinking some tasty beer, sure, if don\'t have a drop of coffee ;) </p>\n            <p class="mt-2 text-center"> And to rest, I like to get stressed with online games or watch some series with my family </p>\n        '.trim()}},window.getSkills=function(){return{skills:[new e("JVM",95,["Java","Spring","Springboot","Spring Stomp","Hibernate","SWT","Kotlin","REST API","Java EE"],!0),new e("Javascript",85,["Vanilla","TypeScript","jQuery","Angular","AngularJS","React","REST API","NodeJS","JSON","HTML","CSS","Ionic"]),new e("CI/CD",83,["Git","Github","Github Actions","Git Stash","Bit Bucket","Jenkins","Bamboo"]),new e("SQL",80,["SQL Server","MySQL","Postgres","PL/SQL","MongoDB","SQLite","RDS"]),new e("AWS",75,["S3","SQS","RDS","CloudWatch","ClouldTrail","Athena","IAM","Kinesis","Firehose","Lambda","EventBridge"]),new e("Architecture",70,["Docker","ActiveMQ","RabbitMQ","Monolith","Microsservices"]),new e("Android",45,["Kotlin","MVP","Jetpack","Dagger 2","Material Design","Gradle"]),new e("Linux",30,["Shell","Bash","ZSH"]),new e("Ruby",28,["Bundle","Rails","Puma"])].sort(((e,t)=>e.level>=t.level?-1:1))}},window.getEducations=function(){return{items:[{name:"Universidade Sociedade Educacional de Santa Catarina",period:"2011 / 2015",course:"Bacharelor's Degree, Information System",local:"Joinville, Brazil"}]}};const t=function(){const e=new Date(1991,3,13).getTime(),t=((new Date).getTime()-e)/31536e6;return Math.floor(t)}})()})();
