var n,t,l,u,i,r,o,e={},f=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,t){for(var l in t)n[l]=t[l];return n}function a(n){var t=n.parentNode;t&&t.removeChild(n)}function h(t,l,u){var i,r,o,e={};for(o in l)"key"==o?i=l[o]:"ref"==o?r=l[o]:e[o]=l[o];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):u),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===e[o]&&(e[o]=t.defaultProps[o]);return v(t,e,i,r,null)}function v(n,u,i,r,o){var e={type:n,props:u,key:i,ref:r,t:null,u:null,i:0,o:null,h:void 0,v:null,p:null,constructor:void 0,m:null==o?++l:o};return null==o&&null!=t.vnode&&t.vnode(e),e}function d(n){return n.children}function p(n,t){this.props=n,this.context=t}function y(n,t){if(null==t)return n.u?y(n.u,n.u.t.indexOf(n)+1):null;for(var l;t<n.t.length;t++)if(null!=(l=n.t[t])&&null!=l.o)return l.o;return"function"==typeof n.type?y(n):null}function b(n){var t,l;if(null!=(n=n.u)&&null!=n.v){for(n.o=n.v.base=null,t=0;t<n.t.length;t++)if(null!=(l=n.t[t])&&null!=l.o){n.o=n.v.base=l.o;break}return b(n)}}function m(n){(!n.h&&(n.h=!0)&&u.push(n)&&!_._++||i!==t.debounceRendering)&&((i=t.debounceRendering)||r)(_)}function _(){var n,t,l,i,r,e,f,c;for(u.sort(o);n=u.shift();)n.h&&(t=u.length,i=void 0,r=void 0,f=(e=(l=n).m).o,(c=l.k)&&(i=[],(r=s({},e)).m=e.m+1,E(c,e,r,l.g,void 0!==c.ownerSVGElement,null!=e.p?[f]:null,i,null==f?y(e):f,e.p),H(i,e),e.o!=f&&b(e)),u.length>t&&u.sort(o));_._=0}function k(n,t,l,u,i,r,o,c,s,a){var h,p,b,m,_,k,j,O=u&&u.t||f,C=O.length;for(l.t=[],h=0;h<t.length;h++)if(null!=(m=l.t[h]=null==(m=t[h])||"boolean"==typeof m||"function"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?v(null,m,null,null,m):Array.isArray(m)?v(d,{children:m},null,null,null):m.i>0?v(m.type,m.props,m.key,m.ref?m.ref:null,m.m):m)){if(m.u=l,m.i=l.i+1,null===(b=O[h])||b&&m.key==b.key&&m.type===b.type)O[h]=void 0;else for(p=0;p<C;p++){if((b=O[p])&&m.key==b.key&&m.type===b.type){O[p]=void 0;break}b=null}E(n,m,b=b||e,i,r,o,c,s,a),_=m.o,(p=m.ref)&&b.ref!=p&&(j||(j=[]),b.ref&&j.push(b.ref,null,m),j.push(p,m.v||_,m)),null!=_?(null==k&&(k=_),"function"==typeof m.type&&m.t===b.t?m.h=s=g(m,s,n):s=w(n,m,b,O,_,s),"function"==typeof l.type&&(l.h=s)):s&&b.o==s&&s.parentNode!=n&&(s=y(b))}for(l.o=k,h=C;h--;)null!=O[h]&&("function"==typeof l.type&&null!=O[h].o&&O[h].o==l.h&&(l.h=x(u).nextSibling),M(O[h],O[h]));if(j)for(h=0;h<j.length;h++)L(j[h],j[++h],j[++h])}function g(n,t,l){for(var u,i=n.t,r=0;i&&r<i.length;r++)(u=i[r])&&(u.u=n,t="function"==typeof u.type?g(u,t,l):w(l,u,u,i,u.o,t));return t}function w(n,t,l,u,i,r){var o,e,f;if(void 0!==t.h)o=t.h,t.h=void 0;else if(null==l||i!=r||null==i.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(i),o=null;else{for(e=r,f=0;(e=e.nextSibling)&&f<u.length;f+=1)if(e==i)break n;n.insertBefore(i,r),o=r}return void 0!==o?o:i.nextSibling}function x(n){var t,l,u;if(null==n.type||"string"==typeof n.type)return n.o;if(n.t)for(t=n.t.length-1;t>=0;t--)if((l=n.t[t])&&(u=x(l)))return u;return null}function j(n,t,l){"-"===t[0]?n.setProperty(t,null==l?"":l):n[t]=null==l?"":"number"!=typeof l||c.test(t)?l:l+"px"}function O(n,t,l,u,i){var r;n:if("style"===t)if("string"==typeof l)n.style.cssText=l;else{if("string"==typeof u&&(n.style.cssText=u=""),u)for(t in u)l&&t in l||j(n.style,t,"");if(l)for(t in l)u&&l[t]===u[t]||j(n.style,t,l[t])}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in n?t.toLowerCase().slice(2):t.slice(2),n.l||(n.l={}),n.l[t+r]=l,l?u||n.addEventListener(t,r?A:C,r):n.removeEventListener(t,r?A:C,r);else if("dangerouslySetInnerHTML"!==t){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in n)try{n[t]=null==l?"":l;break n}catch(n){}"function"==typeof l||(null==l||!1===l&&-1==t.indexOf("-")?n.removeAttribute(t):n.setAttribute(t,l))}}function C(n){return this.l[n.type+!1](t.event?t.event(n):n)}function A(n){return this.l[n.type+!0](t.event?t.event(n):n)}function E(n,l,u,i,r,o,e,f,c){var a,h,v,y,b,m,_,g,w,x,j,O,C,A,E,H=l.type;if(void 0!==l.constructor)return null;null!=u.p&&(c=u.p,f=l.o=u.o,l.p=null,o=[f]),(a=t.i)&&a(l);try{n:if("function"==typeof H){if(g=l.props,w=(a=H.contextType)&&i[a.v],x=a?w?w.props.value:a.u:i,u.v?_=(h=l.v=u.v).u=h.j:("prototype"in H&&H.prototype.render?l.v=h=new H(g,x):(l.v=h=new p(g,x),h.constructor=H,h.render=P),w&&w.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.g=i,v=h.h=!0,h.p=[],h._sb=[]),null==h.O&&(h.O=h.state),null!=H.getDerivedStateFromProps&&(h.O==h.state&&(h.O=s({},h.O)),s(h.O,H.getDerivedStateFromProps(g,h.O))),y=h.props,b=h.state,h.m=l,v)null==H.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.p.push(h.componentDidMount);else{if(null==H.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.o&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.O,x)||l.m===u.m){for(l.m!==u.m&&(h.props=g,h.state=h.O,h.h=!1),h.o=!1,l.o=u.o,l.t=u.t,l.t.forEach((function(n){n&&(n.u=l)})),j=0;j<h._sb.length;j++)h.p.push(h._sb[j]);h._sb=[],h.p.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.O,x),null!=h.componentDidUpdate&&h.p.push((function(){h.componentDidUpdate(y,b,m)}))}if(h.context=x,h.props=g,h.k=n,O=t._,C=0,"prototype"in H&&H.prototype.render){for(h.state=h.O,h.h=!1,O&&O(l),a=h.render(h.props,h.state,h.context),A=0;A<h._sb.length;A++)h.p.push(h._sb[A]);h._sb=[]}else do{h.h=!1,O&&O(l),a=h.render(h.props,h.state,h.context),h.state=h.O}while(h.h&&++C<25);h.state=h.O,null!=h.getChildContext&&(i=s(s({},i),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(m=h.getSnapshotBeforeUpdate(y,b)),E=null!=a&&a.type===d&&null==a.key?a.props.children:a,k(n,Array.isArray(E)?E:[E],l,u,i,r,o,e,f,c),h.base=l.o,l.p=null,h.p.length&&e.push(h),_&&(h.j=h.u=null),h.o=!1}else null==o&&l.m===u.m?(l.t=u.t,l.o=u.o):l.o=T(u.o,l,u,i,r,o,e,c);(a=t.diffed)&&a(l)}catch(n){l.m=null,(c||null!=o)&&(l.o=f,l.p=!!c,o[o.indexOf(f)]=null),t.o(n,l,u)}}function H(n,l){t.v&&t.v(l,n),n.some((function(l){try{n=l.p,l.p=[],n.some((function(n){n.call(l)}))}catch(n){t.o(n,l.m)}}))}function T(t,l,u,i,r,o,f,c){var s,h,v,d=u.props,p=l.props,b=l.type,m=0;if("svg"===b&&(r=!0),null!=o)for(;m<o.length;m++)if((s=o[m])&&"setAttribute"in s==!!b&&(b?s.localName===b:3===s.nodeType)){t=s,o[m]=null;break}if(null==t){if(null===b)return document.createTextNode(p);t=r?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,p.is&&p),o=null,c=!1}if(null===b)d===p||c&&t.data===p||(t.data=p);else{if(o=o&&n.call(t.childNodes),h=(d=u.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(d={},m=0;m<t.attributes.length;m++)d[t.attributes[m].name]=t.attributes[m].value;(v||h)&&(v&&(h&&v.C==h.C||v.C===t.innerHTML)||(t.innerHTML=v&&v.C||""))}if(function(n,t,l,u,i){var r;for(r in l)"children"===r||"key"===r||r in t||O(n,r,null,l[r],u);for(r in t)i&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||l[r]===t[r]||O(n,r,t[r],l[r],u)}(t,p,d,r,c),v)l.t=[];else if(m=l.props.children,k(t,Array.isArray(m)?m:[m],l,u,i,r&&"foreignObject"!==b,o,f,o?o[0]:u.t&&y(u,0),c),null!=o)for(m=o.length;m--;)null!=o[m]&&a(o[m]);c||("value"in p&&void 0!==(m=p.value)&&(m!==t.value||"progress"===b&&!m||"option"===b&&m!==d.value)&&O(t,"value",m,d.value,!1),"checked"in p&&void 0!==(m=p.checked)&&m!==t.checked&&O(t,"checked",m,d.checked,!1))}return t}function L(n,l,u){try{"function"==typeof n?n(l):n.current=l}catch(n){t.o(n,u)}}function M(n,l,u){var i,r;if(t.unmount&&t.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.o||L(i,null,l)),null!=(i=n.v)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){t.o(n,l)}i.base=i.k=null,n.v=void 0}if(i=n.t)for(r=0;r<i.length;r++)i[r]&&M(i[r],l,u||"function"!=typeof n.type);u||null==n.o||a(n.o),n.u=n.o=n.h=void 0}function P(n,t,l){return this.constructor(n,l)}function $(l,u,i){var r,o,f;t.u&&t.u(l,u),o=(r="function"==typeof i)?null:i&&i.t||u.t,f=[],E(u,l=(!r&&i||u).t=h(d,null,[l]),o||e,e,void 0!==u.ownerSVGElement,!r&&i?[i]:o?null:u.firstChild?n.call(u.childNodes):null,f,!r&&i?i:o?o.o:u.firstChild,r),H(f,l)}function I(n,t){$(n,t,I)}function N(t,l,u){var i,r,o,e=s({},t.props);for(o in l)"key"==o?i=l[o]:"ref"==o?r=l[o]:e[o]=l[o];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):u),v(t.type,e,i||t.key,r||t.ref,null)}function R(){return(R=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(n[u]=l[u])}return n}).apply(this,arguments)}function z(n){this.getChildContext=function(){return n.context};var t=n.children,l=function(n,t){if(null==n)return{};var l,u,i={},r=Object.keys(n);for(u=0;u<r.length;u++)t.indexOf(l=r[u])>=0||(i[l]=n[l]);return i}(n,["context","children"]);return N(t,l)}function S(){var n=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(n),this._vdom=h(z,R({},this._props,{context:n.detail.context}),function n(t,l){if(3===t.nodeType)return t.data;if(1!==t.nodeType)return null;var u=[],i={},r=0,o=t.attributes,e=t.childNodes;for(r=o.length;r--;)"slot"!==o[r].name&&(i[o[r].name]=o[r].value,i[q(o[r].name)]=o[r].value);for(r=e.length;r--;){var f=n(e[r],null),c=e[r].slot;c?i[c]=h(F,{name:c},f):u[r]=f}var s=l?h(F,null,u):u;return h(l||t.nodeName.toLowerCase(),i,s)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?I:$)(this._vdom,this._root)}function q(n){return n.replace(/-(\w)/g,(function(n,t){return t?t.toUpperCase():""}))}function B(n,t,l){if(this._vdom){var u={};u[n]=l=null==l?void 0:l,u[q(n)]=l,this._vdom=N(this._vdom,u),$(this._vdom,this._root)}}function D(){$(this._vdom=null,this._root)}function F(n,t){var l=this;return h("slot",R({},n,{ref:function(n){n?(l.ref=n,l._listener||(l._listener=function(n){n.stopPropagation(),n.detail.context=t},n.addEventListener("_preact",l._listener))):l.ref.removeEventListener("_preact",l._listener)}}))}n=f.slice,t={o:function(n,t,l,u){for(var i,r,o;t=t.u;)if((i=t.v)&&!i.u)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.h),null!=i.componentDidCatch&&(i.componentDidCatch(n,u||{}),o=i.h),o)return i.j=i}catch(t){n=t}throw n}},l=0,p.prototype.setState=function(n,t){var l;l=null!=this.O&&this.O!==this.state?this.O:this.O=s({},this.state),"function"==typeof n&&(n=n(s({},l),this.props)),n&&s(l,n),null!=n&&this.m&&(t&&this._sb.push(t),m(this))},p.prototype.forceUpdate=function(n){this.m&&(this.o=!0,n&&this.p.push(n),m(this))},p.prototype.render=d,u=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=function(n,t){return n.m.i-t.m.i},_._=0;class G extends p{constructor(){super(),this.state={count:0}}render(){return h("div",null,h("h1",null,"Counter React"),h("div",{className:"card"},h("button",{onClick:()=>this.setState((n=>({count:n.count+1})))},"+"),h("button",{onClick:()=>this.setState((n=>({count:n.count-1})))},"-"),h("div",null,h("h2",null,this.state.count))))}}!function(n,t,l,u){function i(){var t=Reflect.construct(HTMLElement,[],i);return t._vdomComponent=n,t._root=u&&u.shadow?t.attachShadow({mode:"open"}):t,t}(i.prototype=Object.create(HTMLElement.prototype)).constructor=i,i.prototype.connectedCallback=S,i.prototype.attributeChangedCallback=B,i.prototype.disconnectedCallback=D,l=l||n.observedAttributes||Object.keys(n.propTypes||{}),i.observedAttributes=l,l.forEach((function(n){Object.defineProperty(i.prototype,n,{get:function(){return this._vdom.props[n]},set:function(t){this._vdom?this.attributeChangedCallback(n,null,t):(this._props||(this._props={}),this._props[n]=t,this.connectedCallback());var l=typeof t;null!=t&&"string"!==l&&"boolean"!==l&&"number"!==l||this.setAttribute(n,t)}})})),customElements.define(t||n.tagName||n.displayName||n.name,i)}(G,"preact-counter");export{G as default};
