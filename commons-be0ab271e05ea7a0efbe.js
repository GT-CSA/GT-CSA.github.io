(self.webpackChunkgeorgia_tech_chinese_student_association_website=self.webpackChunkgeorgia_tech_chinese_student_association_website||[]).push([[351],{186:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},4756:function(e){"use strict";e.exports=Object.assign},523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6124:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(d,"canUseDOM",s),d}}},9230:function(e,t,n){"use strict";n.d(t,{G:function(){return j},L:function(){return m},M:function(){return T},P:function(){return w},S:function(){return R},_:function(){return s},a:function(){return o},b:function(){return l},g:function(){return u},h:function(){return c}});var r=n(7294),a=(n(186),n(5697)),i=n.n(a);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function l(e,t,n,r,a){return void 0===a&&(a={}),o({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function u(e,t,n,r,a,i,s,c){var l={};i&&(l.backgroundColor=i,"fixed"===n?(l.width=r,l.height=a,l.backgroundColor=i,l.position="relative"):("constrained"===n||"fullWidth"===n)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}var d,f=["children"],p=function(e){var t=e.layout,n=e.width,a=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,n=s(e,f);return r.createElement(r.Fragment,null,r.createElement(p,o({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,n=e.srcSet,a=e.loading,i=e.alt,c=void 0===i?"":i,l=e.shouldLoad,u=s(e,g);return r.createElement("img",o({},u,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:c}))},v=function(e){var t=e.fallback,n=e.sources,a=void 0===n?[]:n,i=e.shouldLoad,c=void 0===i||i,l=s(e,h),u=l.sizes||(null==t?void 0:t.sizes),d=r.createElement(y,o({},l,t,{sizes:u,shouldLoad:c}));return a.length?r.createElement("picture",null,a.map((function(e){var t=e.media,n=e.srcSet,a=e.type;return r.createElement("source",{key:t+"-"+a+"-"+n,type:a,media:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,sizes:u})})),d):d};y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,n=s(e,b);return t?r.createElement(v,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},n))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(d=v.propTypes)?void 0:d.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var T=function(e){return r.createElement(r.Fragment,null,r.createElement(v,o({},e)),r.createElement("noscript",null,r.createElement(v,o({},e,{shouldLoad:!0}))))};T.displayName="MainImage",T.propTypes=v.propTypes;var E,C,A=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:i().object.isRequired,alt:A},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],k=new Set,x=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,l=e.style,u=e.backgroundColor,d=e.className,f=e.class,p=e.onStartLoad,m=e.onLoad,g=e.onError,h=s(e,S),y=i.width,v=i.height,b=i.layout,w=function(e,t,n){var r={},a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(y,v,b),T=w.style,A=w.className,O=s(w,L),x=(0,r.useRef)(),j=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);f&&(d=f);var N=function(e,t,n){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((function(){E||(E=Promise.all([n.e(774),n.e(36)]).then(n.bind(n,9036)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,r=x.current.querySelector("[data-gatsby-image-ssr]");return r&&c()?(r.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void k.add(j)):C&&k.has(j)?void 0:(E.then((function(n){var r=n.renderImageToString,a=n.swapPlaceholderImage;x.current.innerHTML=r(o({isLoading:!0,isLoaded:k.has(j),image:i},h)),k.has(j)||(e=requestAnimationFrame((function(){x.current&&(t=a(x.current,j,k,l,p,m,g))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){k.has(j)&&C&&(x.current.innerHTML=C(o({isLoading:k.has(j),isLoaded:k.has(j),image:i},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,r.createElement)(a,o({},O,{style:o({},T,l,{backgroundColor:u}),className:A+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(x,e):null}));j.propTypes=O,j.displayName="GatsbyImage";var N,P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],I=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:A,width:I,height:I,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(N=j,function(e){var t=e.src,n=e.__imageData,a=e.__error,i=s(e,P);return a&&console.warn(a),n?r.createElement(N,o({image:n},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=M},8889:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(7294),a=n(9376),i=n(1597),o="navigation-module--container--Ez9L9",s="navigation-module--dropped--qix5-",c="navigation-module--navigation-item--IjKTY",l=n(6479),u=n.n(l),d=n(2238),f=n.n(d),p=function(){return r.createElement(i.rU,{to:"/",className:"navigation-module--logo-link--jylJT"},r.createElement("div",{className:"navigation-module--logo-wrapper--B47-V "},r.createElement(u(),{className:"navigation-module--logo--vgR7t"})),r.createElement("span",{className:c},r.createElement("span",{className:"navigation-module--title--U50lr"},"Georgia Tech"),r.createElement("span",{className:"navigation-module--subtitle--fCybX"},"Chinese",r.createElement("br",null),"Student",r.createElement("br",null),"Association")))},m=function(e){var t=e.name,n=e.slug;e.start,e.end;return r.createElement(i.rU,{to:"/"+n,activeClassName:"navigation-module--active--1g8O1 active",partiallyActive:""!==n,className:""+c},r.createElement("li",{className:"navigation-module--emboldened-item--EORor","data-text":t},t))},g=function(){var e=[{name:"Home",slug:""},{name:"CSA Events",slug:"events"},{name:"China Care",slug:"chinacare"},{name:"CCTV",slug:"cctv"},{name:"Get Involved",slug:"join"},{name:"Contact Us",slug:"contact"}],t=(0,r.useState)(!1),n=t[0],a=t[1];return(0,r.useEffect)((function(){var e=function(){document.getElementsByTagName("body")[0].style.overflow="auto",a(!1)};return document.getElementsByTagName("body")[0].style.overflow="auto",window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r.createElement("div",{className:"navigation-module--shadow--ysvKP"},r.createElement("nav",{role:"navigation",className:o+"  "+(n?s:""),"aria-label":"Main"},r.createElement("div",{className:"navigation-module--bar--o1EZm"},r.createElement(p,null),r.createElement("div",{className:"navigation-module--hamburger-container--LWE95"},r.createElement("button",{className:"navigation-module--hamburger--RPXZA "+(n?s:""),onClick:function(){var e,t;a(!n),e=!n,(t=document.getElementsByTagName("body")[0].style)&&(t.overflow=e?"hidden":"auto")},role:"menu"},r.createElement(f(),null)))),r.createElement("ul",{className:"navigation-module--navigation--kqix2 "+(n?s:"")},r.createElement("li",{className:o},r.createElement(p,null)),e.map((function(t,n){return r.createElement(m,{key:t.slug,name:t.name,slug:t.slug,start:0===n,end:n===e.length-1})})),r.createElement("div",{className:"navigation-module--gradient--wNx3v "+(n?s:"")}))))},h=function(){return r.createElement("footer",null,r.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-max-width)"}},r.createElement("div",{className:"footer-module--container--8eueV"},"social media icons here")))},y=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(a.Z,null),r.createElement(g,null),r.createElement("main",null,t),r.createElement(h,null))}},9376:function(e,t,n){"use strict";n.d(t,{Z:function(){return ye}});var r,a,i,o,s=n(7294),c=n(5697),l=n.n(c),u=n(6124),d=n.n(u),f=n(523),p=n.n(f),m=n(4756),g=n.n(m),h="bodyAttributes",y="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",E="href",C="http-equiv",A="innerHTML",O="itemprop",S="name",L="property",k="rel",x="src",j="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",_="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",q=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),H=[b.NOSCRIPT,b.SCRIPT,b.STYLE],z="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=X(e,b.TITLE),n=X(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,P);return t||r||void 0},K=function(e){return X(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||n===k&&"canonical"===e[n].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==A&&s!==T&&s!==O||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=g()({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;ce(b.BODY,r),ce(b.HTML,a),se(d,f);var p={baseTag:le(b.BASE,n),linkTags:le(b.LINK,i),metaTags:le(b.META,o),noscriptTags:le(b.NOSCRIPT,s),scriptTags:le(b.SCRIPT,l),styleTags:le(b.STYLE,u)},m={},g={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=p[e].oldTags)})),t&&t(),c(e,m,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(b.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(z),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);a.length===i.length?n.removeAttribute(z):n.getAttribute(z)!==o.join(",")&&n.setAttribute(z,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(z,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[z]=!0,a=de(n,r),[s.createElement(b.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[z]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(b.BASE,t,r),bodyAttributes:fe(h,n,r),htmlAttributes:fe(y,a,r),link:fe(b.LINK,i,r),meta:fe(b.META,o,r),noscript:fe(b.NOSCRIPT,s,r),script:fe(b.SCRIPT,c,r),style:fe(b.STYLE,l,r),title:fe(b.TITLE,{title:d,titleAttributes:f},r)}},me=d()((function(e){return{baseTag:$([E,j],e),bodyAttributes:G(h,e),defer:X(e,I),encode:X(e,_),htmlAttributes:G(y,e),linkTags:J(b.LINK,[k,E],e),metaTags:J(b.META,[S,w,C,L,O],e),noscriptTags:J(b.NOSCRIPT,[A],e),onChangeClientState:K(e),scriptTags:J(b.SCRIPT,[x,A],e),styleTags:J(b.STYLE,[T],e),title:Z(e),titleAttributes:G(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),ge=(a=me,o=i=function(e){function t(){return B(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case b.TITLE:return F({},a,((t={})[r.type]=o,t.titleAttributes=F({},i),t));case b.BODY:return F({},a,{bodyAttributes:F({},i)});case b.HTML:return F({},a,{htmlAttributes:F({},i)})}return F({},a,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(V(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ge.renderStatic=ge.rewind;var he=n(1597),ye=function(e){var t,n,r,a=e.description,i=void 0===a?"":a,o=e.lang,c=void 0===o?"en":o,l=e.meta,u=void 0===l?[]:l,d=e.title,f=e.image,p=(0,he.K2)("3000541721").site,m=i||p.siteMetadata.description,g=null===(t=p.siteMetadata)||void 0===t?void 0:t.title;return s.createElement(ge,{htmlAttributes:{lang:c},title:d,defaultTitle:g,titleTemplate:g?"%s | "+g:null,meta:[{name:"description",content:m},{name:"image",content:f},{property:"og:title",content:d},{property:"og:description",content:m},{property:"og:type",content:"website"},{property:"og:image",content:f},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:(null===(n=p.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:d},{name:"twitter:description",content:m}].concat(u)})}},2238:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M0 26H37V21.6667H0V26ZM0 15.1667H37V10.8333H0V15.1667ZM0 0V4.33333H37V0H0Z",fill:"currentColor"}))}a.defaultProps={width:"37",height:"26",viewBox:"0 0 37 26",fill:"none"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=commons-be0ab271e05ea7a0efbe.js.map