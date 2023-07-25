/*! For license information please see 795.cbcfb7c7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[795],{795:function(t,e,r){r.r(e),r.d(e,{default:function(){return L}});var n,o=r(861),i=r(439),a=r(791),c=r(689),u=r(87),s=["title","titleId"];function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function h(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function f(t,e){var r=t.title,o=t.titleId,i=h(t,s);return a.createElement("svg",l({id:"glyphicons-basic",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":o},i),r?a.createElement("title",{id:o},r):null,n||(n=a.createElement("path",{fill:"#b5b5b5",id:"picture",d:"M27.5,5H4.5A1.50008,1.50008,0,0,0,3,6.5v19A1.50008,1.50008,0,0,0,4.5,27h23A1.50008,1.50008,0,0,0,29,25.5V6.5A1.50008,1.50008,0,0,0,27.5,5ZM26,18.5l-4.79425-5.2301a.99383.99383,0,0,0-1.44428-.03137l-5.34741,5.34741L19.82812,24H17l-4.79291-4.793a1.00022,1.00022,0,0,0-1.41418,0L6,24V8H26Zm-17.9-6a2.4,2.4,0,1,1,2.4,2.4A2.40005,2.40005,0,0,1,8.1,12.5Z"})))}var p=a.forwardRef(f),v=(r.p,{main_info:"MovieMainInfo_main_info__oDBnz",list:"MovieMainInfo_list__ViIWA",poster:"MovieMainInfo_poster__gq-0t",no_data:"MovieMainInfo_no_data__FidHi"}),d=r(184),y=function(t){var e=t.movieDetails,r=e.poster,n=e.title,o=e.year,i=e.score,a=e.genres,c=e.descr;return(0,d.jsxs)("div",{className:v.main_info,children:[r?(0,d.jsx)("img",{className:v.poster,width:200,height:300,src:"https://image.tmdb.org/t/p/original".concat(r),alt:"poster of ".concat(n)}):(0,d.jsx)(p,{className:v.poster,width:200,height:300}),(0,d.jsxs)("div",{className:v.container_info,children:[(0,d.jsxs)("h1",{children:[n," (",o,")"]}),(0,d.jsxs)("p",{children:["User score: ",i,"%"]}),(0,d.jsx)("h2",{children:"Overview"}),c?(0,d.jsx)("p",{children:c}):(0,d.jsx)("span",{className:v.no_data,children:"We don't have overview for that movie"}),(0,d.jsx)("h3",{children:"Genres"}),a&&(0,d.jsx)("ul",{className:v.list,children:a.map((function(t){return(0,d.jsx)("li",{children:t.name},t.id)}))})]})]})},m=r(390),g=r(810),w="MovieDetails_btn__7L5IF",x="MovieDetails_no_data__syVeL",b="MovieDetails_add_text__ukGk+",j="MovieDetails_additional_info_links__AJ-WL";function _(){_=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(I){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var h={};function f(){}function p(){}function v(){}var d={};u(d,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(k([])));m&&m!==e&&r.call(m,i)&&(d=m);var g=v.prototype=f.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var L=function(){var t,e,r=(0,c.UO)().movieId,n=(0,a.useState)([]),s=(0,i.Z)(n,2),l=s[0],h=s[1],f=(0,a.useState)(!1),p=(0,i.Z)(f,2),v=p[0],L=p[1],E=(0,a.useState)(""),O=(0,i.Z)(E,2),k=O[0],N=O[1],I=(0,c.TH)(),G=(0,a.useRef)(null!==(t=null===(e=I.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/");return(0,a.useEffect)((function(){function t(){return(t=(0,o.Z)(_().mark((function t(){var e,n;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(!0),t.prev=1,t.next=4,m.Y5(r);case 4:e=t.sent,n={poster:e.poster_path,title:e.title,year:Number.parseInt(e.release_date),score:e.vote_average?Math.round(10*e.vote_average):0,genres:e.genres?e.genres:[],descr:e.overview},h(n),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),N("Something goes bad... Please, try later");case 13:return t.prev=13,L(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,9,13,16]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.rU,{to:G.current,className:w,onClick:function(){return L(!0)},children:"\u2190 Go back"}),v&&(0,d.jsx)(g.Z,{}),(0,d.jsxs)(d.Fragment,{children:[k?(0,d.jsx)("p",{className:x,children:k}):(0,d.jsx)(y,{movieDetails:l}),(0,d.jsxs)("div",{className:j,children:[(0,d.jsx)("p",{className:b,children:" Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(g.Z,{}),children:(0,d.jsx)(c.j3,{})})]})]})}},390:function(t,e,r){r.d(e,{Bt:function(){return s},Fn:function(){return h},Y5:function(){return u},vw:function(){return c},y:function(){return l}});var n=r(861),o=r(243);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(I){s=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:j(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=l;var f={};function p(){}function v(){}function d(){}var y={};s(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==e&&r.call(g,a)&&(y=g);var w=d.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}o.Z.defaults.baseURL="https://api.themoviedb.org/3";var a="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjYyNzc1YTVhOGEzYzdmZGRkYjc2MzIzZDNmMTlkOCIsInN1YiI6IjY0YjlhMjIzNGQyM2RkMDBjODE0MWI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eLdnARHkjKTyBV9FyUdNG6ci8vaQ-ehHoCsUiaX2PKk",c=function(){var t=(0,n.Z)(i().mark((function t(){var e,r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",url:"/trending/all/day",headers:{accept:"application/json",Authorization:a}},t.next=3,o.Z.request(e).catch((function(t){console.error(t)}));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"GET",url:"/movie/".concat(e),headers:{accept:"application/json",Authorization:a}},t.next=3,o.Z.request(r).catch((function(t){console.error(t)}));case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"GET",url:"/movie/".concat(e,"/reviews"),headers:{accept:"application/json",Authorization:a}},t.next=3,o.Z.request(r).catch((function(t){console.error(t)}));case 3:return n=t.sent,c=n.data,t.abrupt("return",c.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"GET",url:"/movie/".concat(e,"/credits"),headers:{accept:"application/json",Authorization:a}},t.next=3,o.Z.request(r).catch((function(t){console.error(t)}));case 3:return n=t.sent,c=n.data,t.abrupt("return",c.cast);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:e},headers:{accept:"application/json",Authorization:a}},t.next=3,o.Z.request(r).catch((function(t){console.error(t)}));case 3:return n=t.sent,c=n.data,t.abrupt("return",c.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=795.cbcfb7c7.chunk.js.map