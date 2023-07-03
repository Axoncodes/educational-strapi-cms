(self.webpackChunkcms=self.webpackChunkcms||[]).push([[857],{94654:(d,m,n)=>{var o=n(21078),h=n(35161);function c(g,u){return o(h(g,u),1)}d.exports=c},35161:(d,m,n)=>{var o=n(29932),h=n(67206),c=n(69199),g=n(1469);function u(f,l){var p=g(f)?o:c;return p(f,h(l,3))}d.exports=u},17061:(d,m,n)=>{var o=n(18698).default;function h(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */d.exports=h=function(){return c},d.exports.__esModule=!0,d.exports.default=d.exports;var c={},g=Object.prototype,u=g.hasOwnProperty,f=Object.defineProperty||function(e,t,r){e[t]=r.value},l=typeof Symbol=="function"?Symbol:{},p=l.iterator||"@@iterator",_=l.asyncIterator||"@@asyncIterator",P=l.toStringTag||"@@toStringTag";function v(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{v({},"")}catch{v=function(r,i,s){return r[i]=s}}function w(e,t,r,i){var s=t&&t.prototype instanceof L?t:L,a=Object.create(s.prototype),E=new W(i||[]);return f(a,"_invoke",{value:G(e,r,E)}),a}function y(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(i){return{type:"throw",arg:i}}}c.wrap=w;var j={};function L(){}function C(){}function x(){}var O={};v(O,p,function(){return this});var T=Object.getPrototypeOf,R=T&&T(T(N([])));R&&R!==g&&u.call(R,p)&&(O=R);var D=x.prototype=L.prototype=Object.create(O);function I(e){["next","throw","return"].forEach(function(t){v(e,t,function(r){return this._invoke(t,r)})})}function B(e,t){function r(s,a,E,b){var M=y(e[s],e,a);if(M.type!=="throw"){var K=M.arg,S=K.value;return S&&o(S)=="object"&&u.call(S,"__await")?t.resolve(S.__await).then(function(U){r("next",U,E,b)},function(U){r("throw",U,E,b)}):t.resolve(S).then(function(U){K.value=U,E(K)},function(U){return r("throw",U,E,b)})}b(M.arg)}var i;f(this,"_invoke",{value:function(a,E){function b(){return new t(function(M,K){r(a,E,M,K)})}return i=i?i.then(b,b):b()}})}function G(e,t,r){var i="suspendedStart";return function(s,a){if(i==="executing")throw new Error("Generator is already running");if(i==="completed"){if(s==="throw")throw a;return Z()}for(r.method=s,r.arg=a;;){var E=r.delegate;if(E){var b=k(E,r);if(b){if(b===j)continue;return b}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(i==="suspendedStart")throw i="completed",r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);i="executing";var M=y(e,t,r);if(M.type==="normal"){if(i=r.done?"completed":"suspendedYield",M.arg===j)continue;return{value:M.arg,done:r.done}}M.type==="throw"&&(i="completed",r.method="throw",r.arg=M.arg)}}}function k(e,t){var r=t.method,i=e.iterator[r];if(i===void 0)return t.delegate=null,r==="throw"&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),t.method==="throw")||r!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),j;var s=y(i,e.iterator,t.arg);if(s.type==="throw")return t.method="throw",t.arg=s.arg,t.delegate=null,j;var a=s.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,t.method!=="return"&&(t.method="next",t.arg=void 0),t.delegate=null,j):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,j)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function W(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function N(e){if(e){var t=e[p];if(t)return t.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length)){var r=-1,i=function s(){for(;++r<e.length;)if(u.call(e,r))return s.value=e[r],s.done=!1,s;return s.value=void 0,s.done=!0,s};return i.next=i}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return C.prototype=x,f(D,"constructor",{value:x,configurable:!0}),f(x,"constructor",{value:C,configurable:!0}),C.displayName=v(x,P,"GeneratorFunction"),c.isGeneratorFunction=function(e){var t=typeof e=="function"&&e.constructor;return!!t&&(t===C||(t.displayName||t.name)==="GeneratorFunction")},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,v(e,P,"GeneratorFunction")),e.prototype=Object.create(D),e},c.awrap=function(e){return{__await:e}},I(B.prototype),v(B.prototype,_,function(){return this}),c.AsyncIterator=B,c.async=function(e,t,r,i,s){s===void 0&&(s=Promise);var a=new B(w(e,t,r,i),s);return c.isGeneratorFunction(t)?a:a.next().then(function(E){return E.done?E.value:a.next()})},I(D),v(D,P,"Generator"),v(D,p,function(){return this}),v(D,"toString",function(){return"[object Generator]"}),c.keys=function(e){var t=Object(e),r=[];for(var i in t)r.push(i);return r.reverse(),function s(){for(;r.length;){var a=r.pop();if(a in t)return s.value=a,s.done=!1,s}return s.done=!0,s}},c.values=N,W.prototype={constructor:W,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var r in this)r.charAt(0)==="t"&&u.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(K,S){return E.type="throw",E.arg=t,r.next=K,S&&(r.method="next",r.arg=void 0),!!S}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],E=a.completion;if(a.tryLoc==="root")return i("end");if(a.tryLoc<=this.prev){var b=u.call(a,"catchLoc"),M=u.call(a,"finallyLoc");if(b&&M){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(b){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!M)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,r){for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i];if(s.tryLoc<=this.prev&&u.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&(t==="break"||t==="continue")&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var E=a?a.completion:{};return E.type=t,E.arg=r,a?(this.method="next",this.next=a.finallyLoc,j):this.complete(E)},complete:function(t,r){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&r&&(this.next=r),j},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),$(i),j}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc===t){var s=i.completion;if(s.type==="throw"){var a=s.arg;$(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,i){return this.delegate={iterator:N(t),resultName:r,nextLoc:i},this.method==="next"&&(this.arg=void 0),j}},c}d.exports=h,d.exports.__esModule=!0,d.exports.default=d.exports},18698:d=>{function m(n){return d.exports=m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d.exports.__esModule=!0,d.exports.default=d.exports,m(n)}d.exports=m,d.exports.__esModule=!0,d.exports.default=d.exports},64687:(d,m,n)=>{var o=n(17061)();d.exports=o;try{regeneratorRuntime=o}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},15861:(d,m,n)=>{"use strict";n.d(m,{Z:()=>h});function o(c,g,u,f,l,p,_){try{var P=c[p](_),v=P.value}catch(w){u(w);return}P.done?g(v):Promise.resolve(v).then(f,l)}function h(c){return function(){var g=this,u=arguments;return new Promise(function(f,l){var p=c.apply(g,u);function _(v){o(p,f,l,_,P,"next",v)}function P(v){o(p,f,l,_,P,"throw",v)}_(void 0)})}}},17034:(d,m,n)=>{"use strict";n.d(m,{A:()=>f});var o=n(85893),h=n(88972),c=n(41580);const g=(0,h.ZP)(c.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,u=(0,h.ZP)(c.x)`
  overflow-x: hidden;
`,f=({sideNav:l,children:p})=>(0,o.jsxs)(g,{hasSideNav:!!l,children:[l,(0,o.jsx)(u,{paddingBottom:10,children:p})]})},53192:(d,m,n)=>{"use strict";n.d(m,{m:()=>f});var o=n(85893),h=n(88972),c=n(11276);const g=`${232/16}rem`,u=(0,h.ZP)(c.r)`
  width: ${g};
  background: ${({theme:l})=>l.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:l})=>l.colors.neutral200};
  z-index: 1;
`,f=({ariaLabel:l,...p})=>(0,o.jsx)(u,{"aria-label":l,as:"nav",...p})},60984:(d,m,n)=>{"use strict";n.d(m,{p:()=>C});var o=n(85893),h=n(67294),c=n(97184),g=n(88972),u=n(7801),f=n(2504);const l=x=>{const O=(0,h.useRef)();return(0,h.useEffect)(()=>{O.current=x}),O.current};var p=n(70004),_=n(41580),P=n(8509),v=n(49123),w=n(11047),y=n(75515),j=n(12028);const L=(0,g.ZP)(p.i)`
  width: ${24/16}rem;
  background-color: ${({theme:x})=>x.colors.neutral200};
`,C=({as:x="h2",label:O,searchLabel:T="",searchable:R=!1,onChange:D=()=>{},value:I="",onClear:B=()=>{},onSubmit:G=()=>{},id:k})=>{const[A,$]=(0,h.useState)(!1),W=l(A),N=(0,f.M)(k),Z=(0,h.useRef)(void 0),e=(0,h.useRef)(void 0);(0,h.useEffect)(()=>{A&&Z.current&&Z.current.focus(),W&&!A&&e.current&&e.current.focus()},[A,W]);const t=()=>{$(a=>!a)},r=a=>{B(a),Z.current.focus()},i=a=>{a.relatedTarget?.id!==N&&$(!1)},s=a=>{a.key===u.y.ESCAPE&&$(!1)};return A?(0,o.jsxs)(_.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,o.jsx)(P.U,{children:(0,o.jsx)(v.w,{name:"searchbar",value:I,onChange:D,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:s,ref:Z,onBlur:i,onClear:r,onSubmit:G,clearLabel:"Clear",size:"S",children:T})}),(0,o.jsx)(_.x,{paddingLeft:2,paddingTop:4,children:(0,o.jsx)(L,{})})]}):(0,o.jsxs)(_.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,o.jsxs)(w.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,o.jsx)(y.Z,{variant:"beta",as:x,children:O}),R&&(0,o.jsx)(j.h,{ref:e,onClick:t,label:T,icon:(0,o.jsx)(c.Z,{})})]}),(0,o.jsx)(_.x,{paddingTop:4,children:(0,o.jsx)(L,{})})]})}},52305:(d,m,n)=>{"use strict";n.d(m,{E:()=>w});var o=n(85893),h=n(67294),c=n(71818),g=n(88972),u=n(41580),f=n(75515),l=n(11047),p=n(63507);const _=(0,g.ZP)(u.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:y})=>y.colors.neutral800};
  svg > * {
    fill: ${({theme:y})=>y.colors.neutral600};
  }

  &.active {
    ${({theme:y})=>`
      background-color: ${y.colors.primary100};
      border-right: 2px solid ${y.colors.primary600};
      svg > * {
        fill: ${y.colors.primary700};
      }
      ${f.Z} {
        color: ${y.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,P=(0,g.ZP)(c.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:y,$active:j})=>j?y.colors.primary600:y.colors.neutral600};
  }
`,v=g.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,w=h.forwardRef(({children:y,icon:j=null,withBullet:L=!1,as:C=p.f,isSubSectionChild:x=!1,...O},T)=>(0,o.jsxs)(_,{as:C,icon:j,background:"neutral100",paddingLeft:x?9:7,paddingBottom:2,paddingTop:2,ref:T,...O,children:[(0,o.jsxs)(l.k,{children:[j?(0,o.jsx)(v,{children:j}):(0,o.jsx)(P,{}),(0,o.jsx)(u.x,{paddingLeft:2,children:(0,o.jsx)(f.Z,{as:"span",children:y})})]}),L&&(0,o.jsx)(u.x,{as:l.k,paddingRight:4,children:(0,o.jsx)(P,{$active:!0})})]}))},29489:(d,m,n)=>{"use strict";n.d(m,{D:()=>j});var o=n(85893),h=n(67294),c=n(88972),g=n(12645),u=n(11047),f=n(41580),l=n(75515);const p=(0,c.ZP)(u.k)`
  border: none;
  padding: 0;
  background: transparent;
`,_=c.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:L})=>L?"0deg":"180deg"});
`,P=({collapsable:L=!1,label:C,onClick:x=()=>{},ariaExpanded:O,ariaControls:T})=>L?(0,o.jsxs)(p,{as:"button",onClick:x,"aria-expanded":O,"aria-controls":T,textAlign:"left",children:[(0,o.jsx)(f.x,{paddingRight:1,children:(0,o.jsx)(l.Z,{variant:"sigma",textColor:"neutral600",children:C})}),L&&(0,o.jsx)(_,{rotated:O,children:(0,o.jsx)(g.Z,{"aria-hidden":!0})})]}):(0,o.jsx)(p,{children:(0,o.jsx)(f.x,{paddingRight:1,children:(0,o.jsx)(l.Z,{variant:"sigma",textColor:"neutral600",children:C})})});var v=n(2504),w=n(30190);const y=(0,c.ZP)(f.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:L})=>L.colors.neutral500};
    }
  }
`,j=({collapsable:L=!1,label:C,badgeLabel:x,children:O,id:T})=>{const[R,D]=(0,h.useState)(!0),I=(0,v.M)(T);return(0,o.jsxs)(u.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,o.jsx)(y,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,o.jsxs)(f.x,{position:"relative",paddingRight:x?6:0,children:[(0,o.jsx)(P,{onClick:()=>{D(B=>!B)},ariaExpanded:R,ariaControls:I,collapsable:L,label:C}),x&&(0,o.jsx)(w.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:x})]})}),(!L||R)&&(0,o.jsx)("ol",{id:I,children:h.Children.map(O,(B,G)=>(0,o.jsx)("li",{children:B},G))})]})}},34446:(d,m,n)=>{"use strict";n.d(m,{Z:()=>u});var o=n(85893),h=n(67294),c=n(41580),g=n(11047);const u=({children:f,spacing:l=2,horizontal:p=!1,..._})=>(0,o.jsx)(c.x,{paddingTop:2,paddingBottom:4,children:(0,o.jsx)(g.k,{as:"ol",gap:l,direction:p?"row":"column",alignItems:p?"center":"stretch",..._,children:h.Children.map(f,(P,v)=>(0,o.jsx)("li",{children:P},v))})})}}]);
