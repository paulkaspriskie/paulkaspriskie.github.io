!function(){var e,t,r,n,o,i={769:function(e,t,r){var n={"./babel-icon.svg":[479,479],"./contact-icon.svg":[945,945],"./css-icon.svg":[707,707],"./es6-icon.svg":[405,7],"./experience-icon.svg":[645,645],"./figma-icon.svg":[317,317],"./github-icon.svg":[336,336],"./html-icon.svg":[332,332],"./javascript-icon.svg":[665,665],"./linked-in-icon.svg":[394,394],"./nodejs-icon.svg":[912,912],"./npm-icon.svg":[605,605],"./pk-crane-icon.svg":[19,19],"./postcss-icon.svg":[302,302],"./projects-icon.svg":[516,516],"./reactjs-icon.svg":[184,184],"./redux-icon.svg":[477,477],"./sass-icon.svg":[921,921],"./skills-icon.svg":[190,190],"./stack-overflow-icon.svg":[594,594],"./vim-icon.svg":[582,582],"./webpack-icon.svg":[359,359]};function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((function(){return r(o)}))}o.keys=function(){return Object.keys(n)},o.id=769,e.exports=o},226:function(e,t,r){"use strict";var n=r(745),o=r(7),i=r(655),a=r(294),c=r(250),l=r(666),u=r(670),s=JSON.parse('{"g":[{"name":"github","fileName":"github-icon","fileType":"svg","url":"https://github.com/paulkaspriskie"},{"name":"linked-in","fileName":"linked-in-icon","fileType":"svg","url":"https://www.linkedin.com/in/paul-kaspriskie-08840095/"},{"name":"stack-overflow","fileName":"stack-overflow-icon","fileType":"svg","url":"https://stackoverflow.com/users/4530176/paul-kaspriskie"}]}');function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(){h=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof b?t:b,a=Object.create(i.prototype),c=new A(n||[]);return o(a,"_invoke",{value:_(e,r,c)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var m="suspendedStart",y="suspendedYield",v="executing",d="completed",g={};function b(){}function w(){}function E(){}var x={};u(x,a,(function(){return this}));var j=Object.getPrototypeOf,O=j&&j(j(C([])));O&&O!==r&&n.call(O,a)&&(x=O);var L=E.prototype=b.prototype=Object.create(x);function k(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,i,a,c){var l=p(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==f(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function _(t,r,n){var o=m;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=P(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=p(t,r,n);if("normal"===u.type){if(o=n.done?d:y,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function P(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(f(t)+" is not iterable")}return w.prototype=E,o(L,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=u(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,l,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},k(S.prototype),u(S.prototype,c,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(L),u(L,l,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function p(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(e){var t=e.name,n=m((0,a.useState)(""),2),o=n[0],i=n[1];return(0,a.useEffect)((function(){var e;(e=h().mark((function e(){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(769)("./".concat(t,".svg"));case 2:n=e.sent,i(n.default);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){p(i,n,o,a,c,"next",e)}function c(e){p(i,n,o,a,c,"throw",e)}a(void 0)}))})()}),[t]),a.createElement(a.Fragment,null,o)},d=r(294),g=function(e){var t=e.routes;return d.createElement(d.Fragment,null,d.createElement("nav",null,d.createElement("ul",null,t.map((function(e,t){return d.createElement("li",{key:e.path},d.createElement(i.OL,{to:e.path,className:function(e){return e.isActive?"active":void 0},end:!0},0===t?d.createElement(v,{name:"pk-crane-icon"}):d.createElement(v,{name:"".concat(e.name.toLowerCase(),"-icon")}),0===t?d.createElement("h3",null,e.name,d.createElement("span",null,"Frontend / UI Developer")):e.name))}))),d.createElement("ul",null,s.g.map((function(e,t){return d.createElement("li",{key:t},d.createElement("a",{href:e.url,target:"_blank"},d.createElement(v,{name:e.fileName})))})))))},b=r(294),w=function(){var e,t=(0,c.TH)(),r=(0,c.pC)(),n=(null!==(e=ee.find((function(e){return e.path===t.pathname})))&&void 0!==e?e:{}).nodeRef;return b.createElement("div",{className:"app-pk-portfolio__container"},b.createElement(g,{routes:ee}),b.createElement("main",null,b.createElement(l.Z,{component:null},b.createElement(u.Z,{key:t.pathname,nodeRef:n,timeout:{enter:1e3,exit:1e3},classNames:"page",unmountOnExit:!0},(function(e){return b.createElement("div",{ref:n,className:"page"},r)})))))};function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function x(){x=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof d?t:d,a=Object.create(i.prototype),c=new A(n||[]);return o(a,"_invoke",{value:_(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var h="suspendedStart",p="suspendedYield",m="executing",y="completed",v={};function d(){}function g(){}function b(){}var w={};u(w,a,(function(){return this}));var j=Object.getPrototypeOf,O=j&&j(j(C([])));O&&O!==r&&n.call(O,a)&&(w=O);var L=b.prototype=d.prototype=Object.create(w);function k(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,i,a,c){var l=f(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==E(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function _(t,r,n){var o=h;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=P(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?y:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function P(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(E(t)+" is not iterable")}return g.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,l,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},k(S.prototype),u(S.prototype,c,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(L),u(L,l,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}function j(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var O="FETCH_DATA_REQUEST",L="FETCH_DATA_SUCCESS",k="FETCH_DATA_FAILURE",S=function(e){return{type:L,payload:e}},_=function(){return function(){var e,t=(e=x().mark((function e(t){var r,n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:O}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/posts");case 4:return r=e.sent,e.next=7,r.json();case 7:n=e.sent,t(S(n)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t((o=e.t0.message,{type:k,payload:o}));case 14:case"end":return e.stop()}var o}),e,null,[[1,11]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){j(i,n,o,a,c,"next",e)}function c(e){j(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}()},P=r(373),T=r(161),N=r(294);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function C(){C=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof d?t:d,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:k(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var h="suspendedStart",p="suspendedYield",m="executing",y="completed",v={};function d(){}function g(){}function b(){}var w={};u(w,a,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(N([])));x&&x!==r&&n.call(x,a)&&(w=x);var j=b.prototype=d.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(o,i,a,c){var l=f(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==A(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function k(t,r,n){var o=h;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=S(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?y:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function S(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function N(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(A(t)+" is not iterable")}return g.prototype=b,o(j,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},O(L.prototype),u(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(j),u(j,l,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}function I(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var R=function(){var e=F((0,a.useState)(!1),2),t=e[0],r=e[1];(0,a.useEffect)((function(){(0,P.bP)(function(){var e,t=(e=C().mark((function e(t){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,T.S)(t);case 2:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){I(i,n,o,a,c,"next",e)}function c(e){I(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}()).then((function(){r(!0)}))}),[]);var n=(0,a.useMemo)((function(){return{fpsLimit:120,fullScreen:{enable:!1},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:1,straight:!1},number:{density:{enable:!0},value:120},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0}}),[]);return t?N.createElement(P.ZP,{id:"tsparticles",particlesLoaded:function(e){console.log(e)},options:n}):N.createElement(N.Fragment,null)},D=function(e){return a.createElement("div",{className:"component-hero__container"},a.createElement("section",null,e.children))},U=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.data})),r=t.data;t.loading,t.error;return(0,a.useEffect)((function(){e(_())}),[e]),a.createElement("div",{className:"layout-page__contact"},a.createElement(D,null,a.createElement("h1",null,"Contact"),a.createElement("p",null,"This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.")),a.createElement("ul",null,r.map((function(e,t){return a.createElement("li",{key:t},e.title)}))))},M=function(e){return a.createElement("div",{className:"component-verticle-timeline__container"},a.createElement("ul",null,e.children))},q=r(294),W=function(){return q.createElement("div",{className:"layout-page__experience"},q.createElement(D,null,q.createElement("h1",null,"Experience"),q.createElement("p",null,"This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.")),q.createElement(M,null,q.createElement("li",null,q.createElement("div",null),q.createElement("time",null,"September 2021 - Present"),q.createElement("h3",null,"UI Developer"),q.createElement("span",null,"Barclays"),q.createElement("span",null,"Wilmington, Delaware"),q.createElement("p",null,"Roquefort rubber cheese boursin. Cow caerphilly monterey jack cheese and biscuits cheesy feet stinking bishop gouda hard cheese. Cheesecake fromage camembert de normandie who moved my cheese cheesy grin stinking bishop cheesy grin smelly cheese")),q.createElement("li",null,q.createElement("div",null),q.createElement("time",null,"October 2015 - August 2021"),q.createElement("h3",null,"Web Developer"),q.createElement("span",null,"Temple University"),q.createElement("span",null,"Philadelphia, Pennsylvania"),q.createElement("p",null,"Roquefort rubber cheese boursin. Cow caerphilly monterey jack cheese and biscuits cheesy feet stinking bishop gouda hard cheese. Cheesecake fromage camembert de normandie who moved my cheese cheesy grin stinking bishop cheesy grin smelly cheese"))))},Y=function(){return a.createElement(a.Fragment,null,a.createElement(R,null),a.createElement("div",{className:"layout-page__home"},a.createElement("div",null,a.createElement("img",{src:r(372)})),a.createElement("h1",null,"Hello there, I'm Paul Kaspriskie."),a.createElement("p",null,"Roquefort fromage frais macaroni cheese. Taleggio swiss squirty cheese smelly cheese smelly cheese pecorino jarlsberg cheese triangles. Babybel pecorino cheesy grin bavarian bergkase babybel boursin cheese slices roquefort. Danish fontina cheese and wine rubber cheese.")))},$=r(294),B=function(e){return $.createElement("div",{className:"component-card__container"},e.children)},H=r(294),J=function(){return H.createElement("div",{className:"layout-page__projects"},H.createElement(D,null,H.createElement("h1",null,"Projects"),H.createElement("p",null,"This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.")),H.createElement("div",null,H.createElement(B,null,H.createElement("div",null,H.createElement(v,{name:"javascript-icon"})),H.createElement("div",null,H.createElement("h3",null,"Title"),H.createElement("p",null,"This is a brief brief description of the project and what it does."),H.createElement("a",{href:"#"},"Link"))),H.createElement(B,null,H.createElement("div",null,H.createElement(v,{name:"css-icon"})),H.createElement("div",null,H.createElement("h3",null,"Title"),H.createElement("p",null,"This is a brief brief description of the project and what it does."),H.createElement("a",{href:"#"},"Link")))))};function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var K=function(){var e=Z((0,a.useState)(0),2),t=e[0],r=e[1],n=[{id:"tab1",title:"Core Skills",content:a.createElement("p",null,"Core Skills")},{id:"tab2",title:"Javascript",content:a.createElement("p",null,"Javascript")},{id:"tab3",title:"CSS",content:a.createElement("p",null,"CSS")}];return a.createElement("div",{className:"component-tabs__container"},a.createElement("ul",null,n.map((function(e,n){return a.createElement("li",{key:n},a.createElement("a",{href:"#",onClick:function(){return r(n)},className:n===t?"active":""},e.title))}))),a.createElement("section",null,n[t].content))},Q=r(294),V=function(){return Q.createElement("div",{className:"layout-page__skills"},Q.createElement(D,null,Q.createElement("h1",null,"Skills"),Q.createElement("p",null,"This some paragraph text, not much to see here. Words are cool and I say them sometimes. Some more words for good measures.")),Q.createElement("div",null,Q.createElement(K,null)))},X=r(294),ee=[{path:"/",name:"Paul Kaspriskie",element:X.createElement(Y,null),nodeRef:(0,a.createRef)()},{path:"/experience",name:"Experience",element:X.createElement(W,null),nodeRef:(0,a.createRef)()},{path:"/skills",name:"Skills",element:X.createElement(V,null),nodeRef:(0,a.createRef)()},{path:"/projects",name:"Projects",element:X.createElement(J,null),nodeRef:(0,a.createRef)()},{path:"/contact",name:"Contact",element:X.createElement(U,null),nodeRef:(0,a.createRef)()}],te=(0,i.aj)([{path:"/",element:X.createElement(w,null),children:ee.map((function(e){return{index:"/"===e.path,path:"/"===e.path?void 0:e.path,element:e.element}}))}]),re=r(264);function ne(e){return ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(e)}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){ae(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ae(e,t,r){var n;return n=function(e,t){if("object"!=ne(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=ne(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==ne(n)?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ce={data:[],loading:!1,error:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return ie(ie({},e),{},{loading:!0,error:null});case L:return ie(ie({},e),{},{loading:!1,data:t.payload});case k:return ie(ie({},e),{},{loading:!1,error:t.payload});default:return e}},ue=(0,re.xC)({reducer:{data:le}}),se=r(294);(0,n.s)(document.getElementById("root")).render(se.createElement(o.zt,{store:ue},se.createElement(i.pG,{router:te})))},372:function(e,t,r){"use strict";e.exports=r.p+"d0bd48476660d2cf0255.png"}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return i[e](r,r.exports,c),r.exports}c.m=i,e=[],c.O=function(t,r,n,o){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],o=e[s][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(c.O).every((function(e){return c.O[e](r[l])}))?r.splice(l--,1):(a=!1,o<i&&(i=o));if(a){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var i={};t=t||[null,r({}),r([]),r(r)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},c.d(o,i),o},c.d=function(e,t){for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,r){return c.f[r](e,t),t}),[]))},c.u=function(e){return e+".bundle.js"},c.miniCssF=function(e){},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="front-end-sdk:",c.l=function(e,t,r,i){if(n[e])n[e].push(t);else{var a,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==o+r){a=f;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.setAttribute("data-webpack",o+r),a.src=e),n[e]=[t];var h=function(t,r){a.onerror=a.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e}(),function(){var e={179:0};c.f.j=function(t,r){var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var i=c.p+c.u(t),a=new Error;c.l(i,(function(r){if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+t,t)}},c.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],a=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in a)c.o(a,n)&&(c.m[n]=a[n]);if(l)var s=l(c)}for(t&&t(r);u<i.length;u++)o=i[u],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(s)},r=self.webpackChunkfront_end_sdk=self.webpackChunkfront_end_sdk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var l=c.O(void 0,[486],(function(){return c(226)}));l=c.O(l)}();