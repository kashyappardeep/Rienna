var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.5`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<C)}function ne(){if(g=!1,ee){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():ee=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.5`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),w=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case w:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Ud(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),$f._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=D.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function pt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[ht])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(le(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&nn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&nn(e,a,t[a])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[gt]||null;if(!i)throw Error(s(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(xu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Dd(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){bd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Dd(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<fu)throw fu=0,pu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)vi(e)&&(o=1);else if(typeof e==`string`)o=Wf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=_i(31,n,t,i),e.elementType=re,e.lanes=a,e;case y:return Si(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=_i(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case w:return e=_i(13,n,t,i),e.elementType=w,e.lanes=a,e;case te:return e=_i(19,n,t,i),e.elementType=te,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case ne:o=14;break a;case T:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=_i(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Ke(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(s(519));function Ki(e){throw Qi(Di(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=df(e)}else t===27?(t=A,Qd(e.type)?(e=uf,uf=null,A=e):A=t):A=Hi?lf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&($l===null?$l=e:$l.push.apply($l,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=pe(null),ea=null,ta=null;function na(e,t,n){k($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,O($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ia(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ia(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;jr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===_e.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}i=i.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(s(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=fd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=E.S;E.S=function(e,t){nu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=pe(null);function Ea(){var e=Ta.current;return e===null?W.pooledCache:e}function Da(e,t){t===null?k(Ta,Ta.current):k(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=W,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===T&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Si(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case T:return t=Fa(t),f(e,t,n)}if(le(t)||oe(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Fa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Fa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&Li(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&Li(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=Si(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=xi(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(a,e.mode,c),c.return=e,e=c}return o(e);case T:return a=Fa(a),b(e,r,a,c)}if(le(a))return h(e,r,a,c);if(oe(a)){if(l=oe(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===S)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Ci(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(K&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ql|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=pe(null),oo=pe(0);function so(e,t){e=Kl,k(oo,e),k(ao,t),Kl=e|t.baseLanes}function co(){k(oo,Kl),k(ao,ao.current)}function lo(){Kl=oo.current,O(ao),O(oo)}var uo=pe(null),fo=null;function po(e){var t=e.alternate;k(N,N.current&1),k(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){k(N,N.current),k(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(k(N,N.current),k(uo,e),fo===null&&(fo=e)):go(e)}function go(){k(N,N.current),k(uo,uo.current)}function _o(e){O(uo),fo===e&&(fo=null),O(N)}var N=pe(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(s(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){E.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}E.H=Ks,a=t(n,r)}while(xo);return a}function jo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return la(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(K&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,ql|=p;f=u.action,So&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,ql|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!jr(a,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);jr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wo(e,t,n){var r=P,i=R(),a=j;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!jr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),W===null)throw Error(s(349));a||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&gu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};E.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,$o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=W.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=lf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(U&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(K&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),P.lanes|=e,ql|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(K&261930)?(z=!0,e.memoizedState=n):(e=hu(),P.lanes|=e,ql|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,zs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),mu(e)):Rs(e,t,r,mu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=As(e).queue;Ds(e,i,t,ue,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},mu())}function Ms(){return la($f)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Xa(n);var r=Za(t,e,n);r!==null&&(gu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(gu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,mu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),W===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return gu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(s(479))}else t=di(e,n,r,2),t!==null&&gu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(j){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),W===null)throw Error(s(349));K&127||Go(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ms(qo.bind(null,r,a,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),n},useId:function(){var e=Fo(),t=W.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(gu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(gu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(gu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(au===null?au=new Set([this]):au.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Ou():n.alternate===null&&J===0&&(J=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,i)),!1}throw Error(s(435,n.tag))}return Ku(e,r,i),Ou(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(s(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Di(r,n),i=rc(e.stateNode,r,i),$a(e,i),J!==4&&(J=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gi&&(e=Error(s(422),{cause:r}),Qi(Di(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Di(a,n),Ql===null?Ql=[a]:Ql.push(a),J!==4&&(J=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(au===null||!au.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(s(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=af(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(z||oa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=W,r!==null&&(o=lt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,fi(e,o),gu(r,e,o),sc;Ou(),t=gc(e,t,n)}else e=a.treeContext,A=lf(o.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Xl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(i?po(t):go(t),(e=A)?(e=af(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Si(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Si(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),sf(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),o=(n&e.childLanes)!==0,z||o){if(o=W,o!==null&&(r=lt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),gu(o,e,r),sc;of(c)||Ou(),t=kc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=lf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,i,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ql|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=lc(null,t,e,r,n);break a}else if(i===ne){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(s(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0),to(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Di(Error(s(424)),t),Qi(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=lf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Vd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Fd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&j&&(r=t.stateNode=pf(t.type,t.pendingProps,ge.current),Hi=t,Wi=!0,i=A,Qd(t.type)?(uf=i,A=lf(r.firstChild)):A=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=nf(r,t.type,t.pendingProps,Wi),r===null?i=!1:(t.stateNode=r,Hi=t,A=lf(r.firstChild),Wi=!1,i=!0)),i||Ki(t)),be(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Wd(i,a)?r=null:o!==null&&Wd(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),$f._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=rf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ca(t),i=la(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(i=Ea(),i===null&&(i=W,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),na(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,na(t,M,r),r!==i.cache&&aa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(Tu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Zl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Lc(t),a===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,a))):a?a===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,a)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(xe(t),n=ge.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}e=me.current,Yi(t)?qi(t,e):(e=pf(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(xe(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}if(a=me.current,Yi(t))qi(t,a);else{var o=Vd(ge.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[ht]=t,a[gt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Fd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ge.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Hi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Ki(t,!0)}else e=Vd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(s(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return ye(),e===null&&Cd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(O(N),r=t.memoizedState,r===null)return B(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Vc(r,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,Vc(r,!1),e=a.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return k(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>ru&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!j)return B(t),null}else 2*Pe()-r.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=N.current,k(N,i?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(N),null;case 4:return ye(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&O(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:O(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&O(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){X(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[gt]=t}catch(t){X(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[ht]=e,t[gt]=n}catch(t){X(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,sl=null;function cl(e,t){if(e=e.containerInfo,zd=cp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,sl=t;sl!==null;)if(t=sl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,sl=e;else for(;sl!==null;){switch(t=sl,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,sl=e;break}sl=t.return}}function ll(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Cl(e,n),r&4&&Gc(5,n);break;case 1:if(Cl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Cl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Cl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Cl(e,n);break;case 31:Cl(e,n),r&4&&ml(e,n);break;case 13:Cl(e,n),r&4&&hl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?Tl(e,n,(n.subtreeFlags&8772)!=0):Cl(e,n),il=i,V=a}break;case 30:break;default:Cl(e,n)}}function ul(e){var t=e.alternate;t!==null&&(e.alternate=null,ul(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var H=null,dl=!1;function fl(e,t,n){for(n=n.child;n!==null;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),fl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=H,i=dl;Qd(n.type)&&(H=n.stateNode,dl=!1),fl(e,t,n),mf(n.stateNode),H=r,dl=i;break;case 5:V||Xc(n,t);case 6:if(r=H,i=dl,H=null,fl(e,t,n),H=r,dl=i,H!==null)if(dl)try{(H.nodeType===9?H.body:H.nodeName===`HTML`?H.ownerDocument.body:H).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{H.removeChild(n.stateNode)}catch(e){X(n,t,e)}break;case 18:H!==null&&(dl?(e=H,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(H,n.stateNode));break;case 4:r=H,i=dl,H=n.stateNode.containerInfo,dl=!0,fl(e,t,n),H=r,dl=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),fl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,fl(e,t,n),V=r;break;default:fl(e,t,n)}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){X(t,t.return,e)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){X(t,t.return,e)}}function gl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(s(435,e.tag))}}function _l(e,t){var n=gl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function vl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){H=c.stateNode,dl=!1;break a}break;case 5:H=c.stateNode,dl=!1;break a;case 3:case 4:H=c.stateNode.containerInfo,dl=!0;break a}c=c.return}if(H===null)throw Error(s(160));pl(a,o,i),H=null,dl=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bl(t,e),t=t.sibling}var yl=null;function bl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vl(t,e),xl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:vl(t,e),xl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=yl;if(vl(t,e),xl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[St]||a[ht]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Fd(a,r,n),a[ht]=e,Ot(a),r=a;break a;case`link`:var o=Hf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Fd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Hf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Fd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[ht]=e,Ot(a),r=a}e.stateNode=r}else Uf(i,e.type,e.stateNode);else e.stateNode=Lf(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Uf(i,e.type,e.stateNode):Lf(i,r,e.memoizedProps))}break;case 27:vl(t,e),xl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vl(t,e),xl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{en(i,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(vl(t,e),xl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Vf=null,i=yl,yl=_f(t.containerInfo),vl(t,e),yl=i,xl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){X(e,e.return,t)}al&&(al=!1,Sl(e));break;case 4:r=yl,yl=_f(e.stateNode.containerInfo),vl(t,e),xl(e),yl=r;break;case 12:vl(t,e),xl(e);break;case 31:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 13:vl(t,e),xl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(tu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,vl(t,e),V=d,il=u,xl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?ef(m,!0):ef(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,_l(e,n))));break;case 19:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 30:break;case 21:break;default:vl(t,e),xl(e)}}function xl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(en(a,``),n.flags&=-33),nl(e,el(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;tl(e,el(e),o);break;default:throw Error(s(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ll(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),wl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),wl(t);break;case 27:mf(t.stateNode);case 26:case 5:Xc(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function Tl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Tl(i,a,n),Gc(4,a);break;case 1:if(Tl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:Tl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:Tl(i,a,n);break;case 31:Tl(i,a,n),n&&o&4&&ml(i,a);break;case 13:Tl(i,a,n),n&&o&4&&hl(i,a);break;case 22:a.memoizedState===null&&Tl(i,a,n),Yc(a,a.return);break;case 30:break;default:Tl(i,a,n)}t=t.sibling}}function El(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function Dl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Ol(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ol(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Ol(e,t,n,r);break;case 3:Ol(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Ol(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else Ol(e,t,n,r);break;case 31:Ol(e,t,n,r);break;case 13:Ol(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ol(e,t,n,r):(a._visibility|=2,Al(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Ol(e,t,n,r):jl(e,t),i&2048&&El(o,t);break;case 24:Ol(e,t,n,r),i&2048&&Dl(t.alternate,t);break;default:Ol(e,t,n,r)}}function Al(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Al(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Al(a,o,s,c,i)):u._visibility&2?Al(a,o,s,c,i):jl(a,o),i&&l&2048&&El(o.alternate,o);break;case 24:Al(a,o,s,c,i),i&&l&2048&&Dl(o.alternate,o);break;default:Al(a,o,s,c,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:jl(n,r),i&2048&&El(r.alternate,r);break;case 24:jl(n,r),i&2048&&Dl(r.alternate,r);break;default:jl(n,r)}t=t.sibling}}var Ml=8192;function Nl(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Pl(e,t,n),e=e.sibling}function Pl(e,t,n){switch(e.tag){case 26:Nl(e,t,n),e.flags&Ml&&e.memoizedState!==null&&Kf(n,yl,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,n);break;case 3:case 4:var r=yl;yl=_f(e.stateNode.containerInfo),Nl(e,t,n),yl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Nl(e,t,n),Ml=r):Nl(e,t,n));break;default:Nl(e,t,n)}}function Fl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];sl=r,zl(r,e)}Fl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ll(e),e=e.sibling}function Ll(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rl(e)):Il(e);break;default:Il(e)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];sl=r,zl(r,e)}Fl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rl(t));break;default:Rl(t)}e=e.sibling}}function zl(e,t){for(;sl!==null;){var n=sl;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,sl=r;else a:for(n=e;sl!==null;){r=sl;var i=r.sibling,a=r.return;if(ul(r),r===n){sl=null;break a}if(i!==null){i.return=a,sl=i;break a}sl=a}}}var Bl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Vl=typeof WeakMap==`function`?WeakMap:Map,U=0,W=null,G=null,K=0,q=0,Hl=null,Ul=!1,Wl=!1,Gl=!1,Kl=0,J=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=null,$l=null,eu=!1,tu=0,nu=0,ru=1/0,iu=null,au=null,Y=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return U&2&&K!==0?K&-K:E.T===null?ft():fd()}function hu(){if(Xl===0)if(!(K&536870912)||j){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Xl=e}else Xl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Xl}function gu(e,t,n){(e===W&&(q===2||q===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,K,Xl,!1)),at(e,n),(!(U&2)||e!==W)&&(e===W&&(!(U&2)&&(Jl|=n),J===4&&bu(e,K,Xl,!1)),id(e))}function _u(e,t,n){if(U&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),i=r?ju(e,t):ku(e,t,!0),a=r;do{if(i===0){Wl&&!r&&bu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!yu(n)){i=ku(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Ql;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,o).flags|=256),o=ku(c,o,!1),o!==2){if(Gl&&!l){c.errorRecoveryDisabledLanes|=a,Jl|=a,i=4;break a}a=$l,$l=i,a!==null&&($l===null?$l=a:$l.push.apply($l,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Xl,!Ul);break a;case 2:$l=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=tu+300-Pe(),10<i)){if(bu(r,t,Xl,!Ul),et(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=qd(vu.bind(null,r,n,$l,iu,eu,t,Xl,Jl,Zl,Ul,a,`Throttled`,-0,0),i);break a}vu(r,n,$l,iu,eu,t,Xl,Jl,Zl,Ul,a,null,-0,0)}}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Pl(t,a,d);var m=(a&62914560)===a?tu-Pe():(a&4194048)===a?nu-Pe():0;if(m=Jf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Yl,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function xu(){return U&6?!0:(ad(0,!1),!1)}function Su(){if(G!==null){if(q===0)var e=G.return;else e=G,ta=ea=null,Po(e),za=null,Ba=0,e=G;for(;e!==null;)Wc(e.alternate,e),e=e.return;G=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),W=e,G=n=yi(e.current,null),K=t,q=0,Hl=null,Ul=!1,Wl=tt(e,t),Gl=!1,Zl=Xl=Yl=Jl=ql=J=0,$l=Ql=null,eu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Kl=t,li(),n}function wu(e,t){P=null,E.H=Us,t===ka||t===ja?(t=La(),q=3):t===Aa?(t=La(),q=4):q=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Hl=t,G===null&&(J=1,tc(e,Di(t,e.current)))}function Tu(){var e=uo.current;return e===null?!0:(K&4194048)===K?fo===null:(K&62914560)===K||K&536870912?e===fo:!1}function Eu(){var e=E.H;return E.H=Us,e===null?Us:e}function Du(){var e=E.A;return E.A=Bl,e}function Ou(){J=4,Ul||(K&4194048)!==K&&uo.current!==null||(Wl=!0),!(ql&134217727)&&!(Jl&134217727)||W===null||bu(W,K,Xl,!1)}function ku(e,t,n){var r=U;U|=2;var i=Eu(),a=Du();(W!==e||K!==t)&&(iu=null,Cu(e,t)),t=!1;var o=J;a:do try{if(q!==0&&G!==null){var s=G,c=Hl;switch(q){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=q;if(q=0,Hl=null,Fu(e,s,c,l),n&&Wl){o=0;break a}break;default:l=q,q=0,Hl=null,Fu(e,s,c,l)}}Au(),o=J;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,U=r,E.H=i,E.A=a,G===null&&(W=null,K=0,li()),o}function Au(){for(;G!==null;)Nu(G)}function ju(e,t){var n=U;U|=2;var r=Eu(),i=Du();W!==e||K!==t?(iu=null,ru=Pe()+500,Cu(e,t)):Wl=tt(e,t);a:do try{if(q!==0&&G!==null){t=G;var a=Hl;b:switch(q){case 1:q=0,Hl=null,Fu(e,t,a,1);break;case 2:case 9:if(Na(a)){q=0,Hl=null,Pu(t);break}t=function(){q!==2&&q!==9||W!==e||(q=7),id(e)},a.then(t,t);break a;case 3:q=7;break a;case 4:q=5;break a;case 7:Na(a)?(q=0,Hl=null,Pu(t)):(q=0,Hl=null,Fu(e,t,a,7));break;case 5:var o=null;switch(G.tag){case 26:o=G.memoizedState;case 5:case 27:var c=G;if(o?Gf(o):c.stateNode.complete){q=0,Hl=null;var l=c.sibling;if(l!==null)G=l;else{var u=c.return;u===null?G=null:(G=u,Iu(u))}break b}}q=0,Hl=null,Fu(e,t,a,5);break;case 6:q=0,Hl=null,Fu(e,t,a,6);break;case 8:Su(),J=6;break a;default:throw Error(s(462))}}Mu();break}catch(t){wu(e,t)}while(1);return ta=ea=null,E.H=r,E.A=i,U=n,G===null?(W=null,K=0,li(),J):0}function Mu(){for(;G!==null&&!Me();)Nu(G)}function Nu(e){var t=Ic(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,t===null?Iu(e):G=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,K);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:Po(t);default:Wc(n,t),t=G=bi(t,Kl),t=Ic(n,t,Kl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):G=t}function Fu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,K)){J=1,tc(e,Di(n,e.current)),G=null;return}}catch(t){if(i!==null)throw G=i,t;J=1,tc(e,Di(n,e.current)),G=null;return}t.flags&32768?(j||r===1?e=!0:Wl||K&536870912?e=!1:(Ul=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Ul);return}e=t.return;var n=Hc(t.alternate,t,Kl);if(n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function Lu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,G=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=n}while(e!==null);J=6,G=null}function Ru(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Uu();while(Y!==0);if(U&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=ci,ot(e,n,a,o,c,l),e===W&&(G=W=null,K=0),su=t,ou=e,cu=n,lu=a,uu=i,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(Re,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,o=U,U|=4;try{cl(e,t,n)}finally{U=o,D.p=i,E.T=r}}Y=1,zu(),Bu(),Vu()}}function zu(){if(Y===1){Y=0;var e=ou,t=su,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=U;U|=4;try{bl(t,e);var a=Bd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{U=i,D.p=r,E.T=n}}e.current=t,Y=2}}function Bu(){if(Y===2){Y=0;var e=ou,t=su,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=U;U|=4;try{ll(e,t.alternate,t)}finally{U=i,D.p=r,E.T=n}}Y=3}}function Vu(){if(Y===4||Y===3){Y=0,Ne();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?Y=5:(Y=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(au=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(Y!==5)return!1;var e=ou,t=lu;lu=0;var n=dt(cu),r=E.T,i=D.p;try{D.p=32>n?32:n,E.T=null,n=uu,uu=null;var a=ou,o=cu;if(Y=0,su=ou=null,cu=0,U&6)throw Error(s(331));var c=U;if(U|=4,Ll(a.current),kl(a,a.current,o,n),U=c,ad(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,a)}catch{}return!0}finally{D.p=i,E.T=r,Hu(e,t)}}function Gu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(at(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(au===null||!au.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),at(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Gl=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,W===e&&(K&n)===n&&(J===4||J===3&&(K&62914560)===K&&300>Pe()-tu?!(U&2)&&Cu(e,0):Yl|=n,Zl===K&&(Zl=0)),id(e)}function Ju(e,t){t===0&&(t=rt()),e=fi(e,t),e!==null&&(at(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Ae(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=K,a=et(r,r===W?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ud(r,a));r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=Pe(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}Y!==0&&Y!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=W,n=K,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(q===2||q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=ld.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(Y!==0&&Y!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=K;return r=et(e,e===W?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){U&6?Ae(Ie,od):sd()})}function fd(){if(rd===0){var e=ya;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<ri.length;gd++){var _d=ri[gd];ii(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=wt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:u=`focus`,c=zn;break;case`focusout`:u=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case Yr:case Xr:case Zr:c=Bn;break;case ti:c=Zn;break;case`scroll`:case`scrollend`:c=Mn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn;break;case`toggle`:case`beforetoggle`:c=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?wt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Et(c),h=u==null?s:Et(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Od,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&kd(o,s,c,d,!1),u!==null&&f!==null&&kd(o,f,u,d,!0)}}a:{if(s=r?Et(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=yr;else if(pr(s))if(br)v=kr;else{v=Dr;var y=Er}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Xt(s,`number`,s.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(o,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(o,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Dd(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),hd(o,e,r,n,i)}bd(o,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=_n(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,a);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,i.name,i,null),Q(e,t,`formEncType`,i.formEncType,i,null),Q(e,t,`formMethod`,i.formMethod,i,null),Q(e,t,`formTarget`,i.formTarget,i,null)):(Q(e,t,`encType`,i.encType,i,null),Q(e,t,`method`,i.method,i,null),Q(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Pd(e,t,n,r,i,a){switch(n){case`style`:rn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[gt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:Q(e,t,a,o,n,null)}}i&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:Q(e,t,r,d,n,null)}}Yt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Z(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:Q(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(o in Z(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:Q(e,t,o,c,n,null)}$t(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:Q(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}Jt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||Q(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&Q(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&Q(e,t,o,i,r,a)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=D.d;D.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=xu();return e||t}function bf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=Dt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);Ot(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=Dt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),Ot(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=Dt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),Ot(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var i=(i=ge.current)?_f(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=Dt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var a=Dt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(Mf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),a||Pf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=Dt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function jf(e){return`href="`+qt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Ff(e){return`[src="`+qt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Fd(r,`style`,i),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=jf(n.href);var a=e.querySelector(Mf(i));if(a)return t.state.loading|=4,t.instance=a,Ot(a),a;r=Nf(n),(i=hf.get(i))&&zf(r,i),a=(e.ownerDocument||e).createElement(`link`),Ot(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),t.state.loading|=4,Rf(a,n.precedence,e),t.instance=a;case`script`:return a=Ff(n.src),(i=e.querySelector(If(a)))?(t.instance=i,Ot(i),i):(r=n,(i=hf.get(a))&&(r=h({},n),Bf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Ot(i),Fd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function np(e){return e?(e=hi,e):hi}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(gu(n,e,t),Qa(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&gu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=mu();t=ut(t);var n=fi(e,t);n!==null&&gu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,dp(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,dp(e,t,n,r)}finally{D.p=a,E.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)Td(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}id(a),!(U&6)&&(ru=Pe()+500,ad(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&gu(s,a,2),xu(),ap(a,2)}if(a=fp(r),a===null&&Td(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function fp(e){return e=dn(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=wt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=wt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,pt(e.priority,function(){sp(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,pt(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;rp(n,mu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),xu(),t[_t]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=r.version;if(Rp!==`19.2.5`)throw Error(s(527,Rp,`19.2.5`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Ue=Bp.inject(zp),We=Bp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Qs,a=$s,o=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,i,a,o,Fp),e[_t]=t.current,Cd(e),new Ip(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),f=e(((e,t)=>{t.exports=d()}))(),p={"index.html":`/`,"/index.html":`/`,"contact.html":`/?page=contact`,"/contact.html":`/?page=contact`,"checkout.html":`/?page=checkout`,"/checkout.html":`/?page=checkout`,"product-details-default.html":`/?page=product-details&product=day-cream`,"/product-details-default.html":`/?page=product-details&product=day-cream`,"product-default.html":`/#rienna-products`,"/product-default.html":`/#rienna-products`,"product-all-categories.html":`/#rienna-products`,"/product-all-categories.html":`/#rienna-products`,"categories.html":`/#rienna-products`,"/categories.html":`/#rienna-products`,"wishlist.html":`/#rienna-products`,"/wishlist.html":`/#rienna-products`,"product-offer-page.html":`/#rienna-products`,"/product-offer-page.html":`/#rienna-products`},m=e=>e?e.replace(/href=(['"])(.*?)\1/g,(e,t,n)=>{let r=String(n).trim();if(!r||r.startsWith(`#`)||r.startsWith(`mailto:`)||r.startsWith(`tel:`)||r.startsWith(`http`)||r.startsWith(`javascript:`))return e;let i=p[r];return i?`href=${t}${i}${t}`:e}):``,h=(0,l.memo)(({html:e})=>e?(0,f.jsx)(`div`,{dangerouslySetInnerHTML:{__html:(0,l.useMemo)(()=>m(e),[e])}}):null,(e,t)=>e.html===t.html),g=(`<!DOCTYPE html><html class="no-js" lang="zxx"><head>

   <meta charset="utf-8">
   <meta http-equiv="x-ua-compatible" content="ie=edge">
   <title>Bazaro - Fashion eCommerce HTML, Bootstrap Template</title>
   <meta name="description" content="">
   <meta name="viewport" content="width=device-width, initial-scale=1">

   <!-- Place favicon.ico in the root directory -->
   <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">

   <!-- CSS here -->
   <link rel="stylesheet" href="css/bootstrap.css">
   <link rel="stylesheet" href="css/animate.css">
   <link rel="stylesheet" href="css/nice-select.css">
   <link rel="stylesheet" href="css/custom-animation.css">
   <link rel="stylesheet" href="css/swiper-bundle.css">
   <link rel="stylesheet" href="css/magnific-popup.css">
   <link rel="stylesheet" href="css/font-awesome-pro.css">
   <link rel="stylesheet" href="css/spacing.css">
   <link rel="stylesheet" href="css/main.css">

</head>

 
<body>

   <!-- pre loader area start -->
   <div id="loading">
      <div id="loading-center">
         <div id="loading-center-absolute">
            <div class="aq-preloader-content">
               <div class="aq-preloader-logo">
                  <div class="aq-preloader-circle">
                     <svg width="190" height="190" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle stroke="#D9D9D9" cx="190" cy="190" r="180" stroke-width="6" stroke-linecap="round"></circle> 
                        <circle stroke="red" cx="190" cy="190" r="180" stroke-width="6" stroke-linecap="round"></circle> 
                     </svg>
                  </div>
                  <img src="images/favicon.png" alt="">
               </div>
               <h3 class="aq-preloader-title">Bazaro</h3>
               <p class="aq-preloader-subtitle">Loading..</p>
            </div>
         </div>
      </div>  
   </div>
   <!-- pre loader area end -->

   <!-- back to top start -->
   <div class="progress-wrap">
      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
         <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
      </svg>
   </div>
   <!-- back to top end -->

   <!-- search area -->
   <div class="aq-search-wrap aq-search-area">
      <div class="aq-search-close">
         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12.75 0.75L0.75 12.75M0.75 0.75L12.75 12.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
         </svg>
      </div>
      <div class="aq-search-inner-wrap">
         <div class="container">
            <div class="row">
               <div class="col-xl-12">
                  <div class="aq-search-input p-relative mb-60">
                     <input type="text" placeholder="What are you looking for?">
                     <button type="submit" class="aq-search-input-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                           <path d="M13.6792 12.6197C13.3863 12.3268 12.9114 12.3268 12.6185 12.6197C12.3256 12.9126 12.3256 13.3875 12.6185 13.6804L13.1489 13.15L13.6792 12.6197ZM13.1489 13.15L12.6185 13.6804L16.2185 17.2803L16.7489 16.75L17.2792 16.2197L13.6792 12.6197L13.1489 13.15ZM15.1499 7.94997H15.8999C15.8999 3.55932 12.3406 0 7.94997 0V0.75V1.5C11.5122 1.5 14.3999 4.38775 14.3999 7.94997H15.1499ZM7.94997 0.75V0C3.55932 0 0 3.55932 0 7.94997H0.75H1.5C1.5 4.38775 4.38775 1.5 7.94997 1.5V0.75ZM0.75 7.94997H0C0 12.3406 3.55932 15.8999 7.94997 15.8999V15.1499V14.3999C4.38775 14.3999 1.5 11.5122 1.5 7.94997H0.75ZM7.94997 15.1499V15.8999C12.3406 15.8999 15.8999 12.3406 15.8999 7.94997H15.1499H14.3999C14.3999 11.5122 11.5122 14.3999 7.94997 14.3999V15.1499Z" fill="currentcolor"></path>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-3">
                  <div class="aq-search-cat-wrap mb-30">
                     <h4 class="aq-search-cat-title mb-35">Popular Searches</h4>
                     <div class="aq-search-cat">
                        <a href="categories.html">Top</a>
                        <a href="categories.html">Dresses</a>
                        <a href="categories.html">Shoes</a>
                        <a href="categories.html">Accessories</a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-9">
                  <div class="aq-search-product mb-30">
                     <h4 class="aq-search-cat-title mb-35">Recently Viewed Products</h4>
                     <div class="row row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1">
                        <div class="col">
                           <div class="aq-product-item aq-product-main mb-40" data-lazy="true">
                              <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-10">
                                 <a href="product-details-default.html">
                                    <img class="lazyload aq-product-img" src="images/product-1_3.jpg" alt="">
                                    <img class="aq-img-hover lazyload" src="images/product-hover.jpg" alt="">
                                 </a>
                              </div>
                              <div class="aq-product-content">
                                 <span class="aqf-product-3-category">Jackets</span>
                                 <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Katrina - Chic Comfy Pair</a></h4>
                                 <div class="aq-product-price">
                                    <ins><span class="aq-product-new-price">$24.00</span></ins>
                                 </div>
                                 <div class="aq-product-color">
                                    <ul>
                                       <li class="aq-product-color-item aq-tooltip-top aq-color-swatch active">
                                          <span class="aq-tooltip-item">Orange</span>
                                          <span class="aq-product-color-value" data-bg-color="#FD8B4E"></span>
                                          <img class="lazyload" data-src="assets/img/fashion-3/product/product-1/product-1.jpg" src="images/product-1_3.jpg" alt="image-product">
                                       </li>
                                       <li class="aq-product-color-item aq-tooltip-top aq-color-swatch">
                                          <span class="aq-tooltip-item">Sky Blue</span>
                                          <span class="aq-product-color-value" data-bg-color="#B0C0D8"></span>
                                          <img class="lazyload" data-src="assets/img/fashion-3/product/product-1/product-2.jpg" src="images/product-2_1.jpg" alt="image-product">
                                       </li>
                                       <li class="aq-product-color-item aq-tooltip-top aq-color-swatch">
                                          <span class="aq-tooltip-item">Olive</span>
                                          <span class="aq-product-color-value" data-bg-color="#8F9673"></span>
                                          <img class="lazyload" data-src="assets/img/fashion-3/product/product-1/product-3.jpg" src="images/product-3.jpg" alt="image-product">
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col">
                           <div class="aq-product-item aq-product-main mb-40" data-lazy="true">
                              <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-10">
                                 <div class="aq-product-badge">
                                    <span class="clr-sale">-5%</span>
                                 </div>
                                 <a href="product-details-default.html">
                                    <img class="lazyload aq-product-img" src="images/product-1_1.jpg" alt="">
                                    <img class="aq-img-hover lazyload" src="images/product-hover_1.jpg" alt="">
                                 </a>
                              </div>
                              <div class="aq-product-content">
                                 <span class="aqf-product-3-category">Sunglasses</span>
                                 <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Ray-Ban Round Fleck</a></h4>
                                 <div class="aq-product-price">
                                    <ins><span class="aq-product-new-price">$42.00</span></ins>
                                 </div>
                                 <div class="aq-product-color">
                                    <ul>
                                       <li class="aq-product-color-item aq-tooltip-top aq-color-swatch active">
                                          <span class="aq-tooltip-item">Martini</span>
                                          <span class="aq-product-color-value" data-bg-color="#B7A696"></span>
                                          <img class="lazyload" data-src="assets/img/fashion-3/product/product-2/product-1.jpg" src="images/product-1_1.jpg" alt="image-product">
                                       </li>
                                       <li class="aq-product-color-item aq-tooltip-top aq-color-swatch">
                                          <span class="aq-tooltip-item">Rifle Green</span>
                                          <span class="aq-product-color-value" data-bg-color="#494532"></span>
                                          <img class="lazyload" data-src="assets/img/fashion-3/product/product-2/product-2.jpg" src="images/product-2_2.jpg" alt="image-product">
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col">
                           <div class="aq-product-item aq-product-main mb-40" data-lazy="true">
                              <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-10">
                                 <a href="product-details-default.html">
                                    <img class="lazyload aq-product-img" src="images/product-1.jpg" alt="">
                                    <img class="aq-img-hover lazyload" src="images/product-hover_3.jpg" alt="">
                                 </a>
                              </div>
                              <div class="aq-product-content">
                                 <span class="aqf-product-3-category">T-Shirt</span>
                                 <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Rib Knit Polo Shirt</a></h4>
                                 <div class="aq-product-price">
                                    <ins><span class="aq-product-new-price">$30.00</span></ins>
                                 </div>
                                 <div class="aq-product-color">
                                    <ul>
                                       <li class="aq-product-color-item aq-tooltip-top aq-color-swatch active">
                                          <span class="aq-tooltip-item">Wheat</span>
                                          <span class="aq-product-color-value half-circle" data-bg-color="#F2E9DA"></span>
                                          <img class="lazyload" data-src="assets/img/fashion-3/product/product-3/product-1.jpg" src="images/product-1.jpg" alt="image-product">
                                       </li>
                                       <li class="aq-product-color-item aq-tooltip-top aq-color-swatch">
                                          <span class="aq-tooltip-item">Cream</span>
                                          <span class="aq-product-color-value half-circle" data-bg-color="#F2E7C1"></span>
                                          <img class="lazyload" data-src="assets/img/fashion-3/product/product-3/product-2.jpg" src="images/product-2_3.jpg" alt="image-product">
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col">
                           <div class="aq-product-item aq-product-main mb-40" data-lazy="true">
                              <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-10">
                                 <div class="aq-product-badge">
                                    <span class="clr-new">New</span>
                                 </div>
                                 <a href="product-details-default.html">
                                    <img class="lazyload aq-product-img" src="images/product-1_2.jpg" alt="">
                                    <img class="aq-img-hover lazyload" src="images/product-hover_2.jpg" alt="">
                                 </a>
                              </div>
                              <div class="aq-product-content">
                                 <span class="aqf-product-3-category">Shoes</span>
                                 <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Old Money Suede Loafers</a></h4>
                                 <div class="aq-product-price">
                                    <ins><span class="aq-product-new-price">$44.00</span></ins>
                                 </div>
                                 <div class="aq-product-color">
                                    <ul>
                                       <li class="aq-product-color-item aq-tooltip-top aq-color-swatch active">
                                          <span class="aq-tooltip-item">Beige</span>
                                          <span class="aq-product-color-value" data-bg-color="#A99283"></span>
                                          <img class="lazyload" data-src="assets/img/fashion-3/product/product-4/product-1.jpg" src="images/product-1_2.jpg" alt="image-product">
                                       </li>
                                       <li class="aq-product-color-item aq-tooltip-top aq-color-swatch">
                                          <span class="aq-tooltip-item">Echo Blue</span>
                                          <span class="aq-product-color-value" data-bg-color="#B19169"></span>
                                          <img class="lazyload" data-src="assets/img/fashion-3/product/product-4/product-2.jpg" src="images/product-2.jpg" alt="image-product">
                                       </li>
                                       <li class="aq-product-color-item aq-tooltip-top aq-color-swatch">
                                          <span class="aq-tooltip-item">Summer Gray</span>
                                          <span class="aq-product-color-value" data-bg-color="#B1A8A4"></span>
                                          <img class="lazyload" data-src="assets/img/fashion-3/product/product-4/product-3.jpg" src="images/product-3_1.jpg" alt="image-product">
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- search area -->
   
   <!-- Cartmini area -->
   <div class="aq-cartmini-area aq-cartmini-active d-flex flex-column justify-content-between">
      <div class="aq-cartmini-header">
         <i class="aq-cartmini-close aq-cartmini-close-icon fa-regular fa-xmark"></i>
         <h4 class="aq-cartmini-title">Shopping Cart</h4>
         <div class="aq-cartmini-shiping">
            <div class="aq-cartmini-shiping-message">
               <p>Buy <b>$99.00</b> more to enjoy <b>Free Shipping</b></p>
            </div>
            <div class="aq-progress-bar">
               <div style="width: 50%;">
                  <div class="progress-car">
                     <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                        <path d="M18.1509 6.77558H18.8009C18.8009 6.668 18.7742 6.5621 18.7232 6.46738L18.1509 6.77558ZM9.77434 0.778871L9.9752 0.160685L9.9752 0.160684L9.77434 0.778871ZM11.4597 2.46428L10.8416 2.66514L10.8416 2.66514L11.4597 2.46428ZM11.6739 5.56632L11.0557 5.76718L11.0557 5.76718L11.6739 5.56632ZM12.7975 6.68992L12.5966 7.30811L12.5966 7.30811L12.7975 6.68992ZM3.24311 13.5259C3.60165 13.5437 3.90679 13.2676 3.92466 12.909C3.94254 12.5505 3.66637 12.2453 3.30783 12.2275L3.27547 12.8767L3.24311 13.5259ZM1.29111 12.26L0.831495 12.7197L0.831495 12.7197L1.29111 12.26ZM6.77553 12.2508C6.41654 12.2508 6.12555 12.5418 6.12558 12.9008C6.12561 13.2598 6.41664 13.5508 6.77563 13.5508L6.77558 12.9008L6.77553 12.2508ZM15.4935 12.2275C15.1349 12.2453 14.8588 12.5505 14.8767 12.909C14.8945 13.2676 15.1997 13.5437 15.5582 13.5259L15.5258 12.8767L15.4935 12.2275ZM0.650391 0.000390649C0.291406 0.000390649 0.000390649 0.291406 0.000390649 0.650391C0.000390649 1.00938 0.291406 1.30039 0.650391 1.30039V0.650391V0.000390649ZM1.32369 10.2433C1.30582 9.88478 1.00068 9.60862 0.642138 9.62649C0.283598 9.64436 0.00743206 9.9495 0.0253041 10.308L0.674498 10.2757L1.32369 10.2433ZM0.650569 3.5004C0.291584 3.5004 0.000568669 3.79142 0.000568669 4.1504C0.000568669 4.50939 0.291584 4.8004 0.650569 4.8004V4.1504V3.5004ZM5.90073 4.8004C6.25971 4.8004 6.55073 4.50939 6.55073 4.1504C6.55073 3.79142 6.25971 3.5004 5.90073 3.5004V4.1504V4.8004ZM0.650569 6.12516C0.291584 6.12516 0.000568669 6.41618 0.000568669 6.77516C0.000568669 7.13415 0.291584 7.42516 0.650569 7.42516V6.77516V6.12516ZM4.15068 7.42516C4.50966 7.42516 4.80068 7.13415 4.80068 6.77516C4.80068 6.41618 4.50966 6.12516 4.15068 6.12516V6.77516V7.42516ZM11.5881 1.7504C11.2291 1.7504 10.9381 2.04142 10.9381 2.4004C10.9381 2.75939 11.2291 3.0504 11.5881 3.0504V2.4004V1.7504ZM17.0339 4.70128L16.4616 5.00945L16.4616 5.00948L17.0339 4.70128ZM15.6101 2.70991L15.9434 2.15187L15.9434 2.15187L15.6101 2.70991ZM15.5265 12.9003H14.8765C14.8765 13.5079 14.3839 14.0004 13.7764 14.0004V14.6504V15.3004C15.1019 15.3004 16.1765 14.2259 16.1765 12.9003H15.5265ZM13.7764 14.6504V14.0004C13.1689 14.0004 12.6763 13.5079 12.6763 12.9003H12.0263H11.3763C11.3763 14.2259 12.4509 15.3004 13.7764 15.3004V14.6504ZM12.0263 12.9003H12.6763C12.6763 12.2928 13.1689 11.8003 13.7764 11.8003V11.1503V10.5003C12.4509 10.5003 11.3763 11.5748 11.3763 12.9003H12.0263ZM13.7764 11.1503V11.8003C14.3839 11.8003 14.8765 12.2928 14.8765 12.9003H15.5265H16.1765C16.1765 11.5748 15.1019 10.5003 13.7764 10.5003V11.1503ZM6.77665 12.9005H6.12665C6.12665 13.508 5.63414 14.0005 5.0266 14.0005V14.6505V15.3005C6.35211 15.3005 7.42665 14.226 7.42665 12.9005H6.77665ZM5.0266 14.6505V14.0005C4.41906 14.0005 3.92655 13.508 3.92655 12.9005H3.27655H2.62655C2.62655 14.226 3.70109 15.3005 5.0266 15.3005V14.6505ZM3.27655 12.9005H3.92655C3.92655 12.2929 4.41906 11.8004 5.0266 11.8004V11.1504V10.5004C3.70109 10.5004 2.62655 11.5749 2.62655 12.9005H3.27655ZM5.0266 11.1504V11.8004C5.63414 11.8004 6.12665 12.2929 6.12665 12.9005H6.77665H7.42665C7.42665 11.5749 6.35211 10.5004 5.0266 10.5004V11.1504ZM18.1509 6.77558H17.5009V8.52563H18.1509H18.8009V6.77558H18.1509ZM14.0383 6.77558V7.42558H18.1509V6.77558V6.12558H14.0383V6.77558ZM18.1509 8.52563H17.5009C17.5009 9.57523 17.4995 10.297 17.4266 10.8394C17.3562 11.363 17.23 11.621 17.0506 11.8004L17.5102 12.26L17.9698 12.7197C18.4311 12.2584 18.6253 11.6804 18.715 11.0126C18.8023 10.3635 18.8009 9.53848 18.8009 8.52563H18.1509ZM7.91311 0.650391V1.30039C8.94091 1.30039 9.30065 1.30841 9.57348 1.39706L9.77434 0.778871L9.9752 0.160684C9.45718 -0.00762862 8.83972 0.000390649 7.91311 0.000390649V0.650391ZM11.5882 4.3255H12.2382C12.2382 3.39889 12.2462 2.78143 12.0779 2.26341L11.4597 2.46428L10.8416 2.66514C10.9302 2.93797 10.9382 3.29771 10.9382 4.3255H11.5882ZM9.77434 0.778871L9.57348 1.39706C10.1748 1.59243 10.6462 2.06385 10.8416 2.66514L11.4597 2.46428L12.0779 2.26342C11.754 1.26636 10.9723 0.484649 9.9752 0.160685L9.77434 0.778871ZM11.5882 4.3255H10.9382C10.9382 4.92638 10.9302 5.38097 11.0557 5.76718L11.6739 5.56632L12.2921 5.36546C12.2462 5.22444 12.2382 5.02756 12.2382 4.3255H11.5882ZM14.0383 6.77558V6.12558C13.3362 6.12558 13.1394 6.11756 12.9983 6.07174L12.7975 6.68992L12.5966 7.30811C12.9828 7.4336 13.4374 7.42558 14.0383 7.42558V6.77558ZM11.6739 5.56632L11.0557 5.76718C11.2931 6.49785 11.866 7.0707 12.5966 7.30811L12.7975 6.68992L12.9983 6.07174C12.6634 5.96292 12.4009 5.70036 12.2921 5.36546L11.6739 5.56632ZM3.27547 12.8767L3.30783 12.2275C2.36654 12.1805 1.9913 12.041 1.75073 11.8004L1.29111 12.26L0.831495 12.7197C1.44298 13.3311 2.26508 13.4771 3.24311 13.5259L3.27547 12.8767ZM12.0263 12.9003L12.0263 12.2503L6.77553 12.2508L6.77558 12.9008L6.77563 13.5508L12.0264 13.5503L12.0263 12.9003ZM15.5258 12.8767L15.5582 13.5259C16.5362 13.4771 17.3583 13.3311 17.9698 12.7197L17.5102 12.26L17.0506 11.8004C16.81 12.041 16.4348 12.1805 15.4935 12.2275L15.5258 12.8767ZM0.650391 0.650391V1.30039H7.91311V0.650391V0.000390649H0.650391V0.650391ZM0.674498 10.2757L0.0253041 10.308C0.0740557 11.2861 0.220013 12.1082 0.831495 12.7197L1.29111 12.26L1.75073 11.8004C1.51017 11.5599 1.37061 11.1846 1.32369 10.2433L0.674498 10.2757ZM0.650569 4.1504V4.8004H5.90073V4.1504V3.5004H0.650569V4.1504ZM0.650569 6.77516V7.42516H4.15068V6.77516V6.12516H0.650569V6.77516ZM11.5881 2.4004V3.0504H13.1817V2.4004V1.7504H11.5881V2.4004ZM17.0339 4.70128L16.4616 5.00948L17.5786 7.08377L18.1509 6.77558L18.7232 6.46738L17.6062 4.39309L17.0339 4.70128ZM13.1817 2.4004V3.0504C13.8314 3.0504 14.2708 3.05116 14.6138 3.0858C14.9422 3.11896 15.1281 3.17913 15.2768 3.26794L15.6101 2.70991L15.9434 2.15187C15.5739 1.93117 15.1823 1.83659 14.7444 1.79238C14.3211 1.74964 13.8054 1.7504 13.1817 1.7504V2.4004ZM17.0339 4.70128L17.6062 4.39312C17.3105 3.84393 17.0666 3.3895 16.8283 3.03709C16.5818 2.67251 16.3129 2.37257 15.9434 2.15187L15.6101 2.70991L15.2768 3.26794C15.4254 3.35675 15.5665 3.49187 15.7514 3.7653C15.9445 4.05088 16.1535 4.43739 16.4616 5.00945L17.0339 4.70128Z" fill="currentcolor" fill-opacity="0.8"></path>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="aq-cartmini-body">
         <div class="aq-cartmini-product-item mb-15 item-delete d-flex align-items-center">
            <div class="aq-cartmini-product-thumbnail">
               <a href="product-details-default.html">
                  <img src="images/front-img-1.jpg" alt="">
               </a>
            </div>
            <div class="aq-cartmini-product-summary">
               <h4 class="aq-product-title"><a href="product-details-default.html">Ribbed Tank Top - Orange</a></h4>
               <span class="aq-cartmini-product-size"><label>Size:</label> M</span>
               <span class="aq-cartmini-product-price">$18.00</span>
               <div class="aq-product-details-quantity d-flex align-items-center">
                  <div class="aq-product-quantity">
                     <span class="aq-cart-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>                                                            
                     </span>
                     <input class="aq-cart-input" type="text" value="1">
                     <span class="aq-cart-plus">
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 6H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           <path d="M5.5 10.5V1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                  </div>
                  <button class="aq-line-anim aq-cartmini-remove aq-remove">Remove</button>
               </div>
            </div>
         </div>
         <div class="aq-cartmini-product-item mb-15 item-delete d-flex align-items-center">
            <div class="aq-cartmini-product-thumbnail">
               <a href="product-details-default.html">
                  <img src="images/front-img-2.jpg" alt="">
               </a>
            </div>
            <div class="aq-cartmini-product-summary">
               <h4 class="aq-product-title"><a href="product-details-default.html">Slim-Fit Crew in Cozy Waffle</a></h4>
               <span class="aq-cartmini-product-size"><label>Size:</label> XL</span>
               <span class="aq-cartmini-product-price">$24.00</span>
               <div class="aq-product-details-quantity d-flex align-items-center">
                  <div class="aq-product-quantity">
                     <span class="aq-cart-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>                                                            
                     </span>
                     <input class="aq-cart-input" type="text" value="1">
                     <span class="aq-cart-plus">
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 6H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           <path d="M5.5 10.5V1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                  </div>
                  <button class="aq-line-anim aq-cartmini-remove aq-remove">Remove</button>
               </div>
            </div>
         </div>
         <div class="aq-cartmini-product-item mb-15 item-delete d-flex align-items-center">
            <div class="aq-cartmini-product-thumbnail">
               <a href="product-details-default.html">
                  <img src="images/front-img-3.jpg" alt="">
               </a>
            </div>
            <div class="aq-cartmini-product-summary">
               <h4 class="aq-product-title"><a href="product-details-default.html">The Essential Organic Crew</a></h4>
               <span class="aq-cartmini-product-size"><label>Size:</label> L</span>
               <span class="aq-cartmini-product-price">$17.00</span>
               <div class="aq-product-details-quantity d-flex align-items-center">
                  <div class="aq-product-quantity">
                     <span class="aq-cart-minus">
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>                                                            
                     </span>
                     <input class="aq-cart-input" type="text" value="1">
                     <span class="aq-cart-plus">
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 6H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           <path d="M5.5 10.5V1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                  </div>
                  <button class="aq-line-anim aq-cartmini-remove aq-remove">Remove</button>
               </div>
            </div>
         </div>
         <div class="cartmini-empty text-center d-none">
            <img src="images/empty-cart.png" alt="">
            <p>Your Cart is empty</p>
            <a href="product-default.html" class="aq-btn-black border-btn">Go to Shop</a>
         </div>
      </div>
      <div class="aq-cartmini-footer">
         <div class="aq-cartmini-btn-wrap">
            <button class="aq-cartmini-btn aq-note-btn aq-tooltip-top">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                    <path d="M4.24818 0.75V2.85M9.85182 0.75V2.85M4.24818 7.05H9.84818M4.24818 10.5482H7.04818M13.35 5.3V11.25C13.35 13.35 12.3 14.75 9.85 14.75H4.25C1.8 14.75 0.75 13.35 0.75 11.25V5.3C0.75 3.2 1.8 1.8 4.25 1.8H9.85C12.3 1.8 13.35 3.2 13.35 5.3Z" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
               </span>
               <span>Note</span>
               <span class="aq-tooltip-item">Add note for seller</span>
            </button>
            <button class="aq-cartmini-btn aq-coupon-btn aq-tooltip-top">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                    <path d="M6.25 9.0625L10.75 4.5625M10.7446 9.0625H10.7536M6.24588 4.9375H6.25262M14.125 7.375C14.125 6.34 14.965 5.5 16 5.5V4.75C16 1.75 15.25 1 12.25 1H4.75C1.75 1 1 1.75 1 4.75V5.125C2.035 5.125 2.875 5.965 2.875 7C2.875 8.035 2.035 8.875 1 8.875V9.25C1 12.25 1.75 13 4.75 13H12.25C15.25 13 16 12.25 16 9.25C14.965 9.25 14.125 8.41 14.125 7.375Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
               </span>
               <span>Coupon</span>
               <span class="aq-tooltip-item">Add a discount code</span>
            </button>
            <button class="aq-cartmini-btn aq-shipping-btn aq-tooltip-top">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                    <path d="M15.6508 5.90014H16.3008C16.3008 5.79256 16.2741 5.68666 16.2231 5.59195L15.6508 5.90014ZM15.1017 10.6011L14.642 10.1414L14.642 10.1414L15.1017 10.6011ZM8.47092 0.76015L8.67178 0.141963L8.67178 0.141962L8.47092 0.76015ZM9.91555 2.20477L9.29736 2.40563L9.29736 2.40563L9.91555 2.20477ZM10.0991 4.86364L9.48091 5.0645L9.48091 5.06451L10.0991 4.86364ZM11.0622 5.82672L10.8613 6.44491L10.8613 6.44491L11.0622 5.82672ZM2.8681 11.7788C3.22664 11.7967 3.53178 11.5205 3.54965 11.162C3.56752 10.8034 3.29136 10.4983 2.93282 10.4804L2.90046 11.1296L2.8681 11.7788ZM1.19958 10.6011L0.739965 11.0607L0.739965 11.0607L1.19958 10.6011ZM13.3684 10.4804C13.0099 10.4983 12.7337 10.8034 12.7516 11.162C12.7695 11.5205 13.0746 11.7967 13.4331 11.7788L13.4008 11.1296L13.3684 10.4804ZM0.650391 2.44379e-05C0.291406 2.44379e-05 0.000390649 0.291039 0.000390649 0.650024C0.000390649 1.00901 0.291406 1.30002 0.650391 1.30002V0.650024V2.44379e-05ZM1.32025 8.86785C1.30238 8.50931 0.997234 8.23314 0.638694 8.25101C0.280154 8.26888 0.00398801 8.57403 0.0218602 8.93257L0.671054 8.90021L1.32025 8.86785ZM0.650543 3.00001C0.291558 3.00001 0.000543237 3.29102 0.000543237 3.65001C0.000543237 4.00899 0.291558 4.30001 0.650543 4.30001V3.65001V3.00001ZM5.15068 4.30001C5.50967 4.30001 5.80068 4.00899 5.80068 3.65001C5.80068 3.29102 5.50967 3.00001 5.15068 3.00001V3.65001V4.30001ZM0.650543 5.24978C0.291558 5.24978 0.000543237 5.5408 0.000543237 5.89978C0.000543237 6.25877 0.291558 6.54978 0.650543 6.54978V5.89978V5.24978ZM3.65063 6.54978C4.00962 6.54978 4.30063 6.25877 4.30063 5.89978C4.30063 5.5408 4.00962 5.24978 3.65063 5.24978V5.89978V6.54978ZM10.0255 1.50002C9.66656 1.50002 9.37554 1.79104 9.37554 2.15002C9.37554 2.50901 9.66656 2.80002 10.0255 2.80002V2.15002V1.50002ZM14.6934 4.12219L14.1211 4.43036L14.1211 4.43038L14.6934 4.12219ZM13.473 2.41531L13.8063 1.85727L13.8063 1.85727L13.473 2.41531ZM13.4013 11.1499H12.7513C12.7513 11.6194 12.3707 11.9999 11.9013 11.9999V12.6499V13.2999C13.0887 13.2999 14.0513 12.3373 14.0513 11.1499H13.4013ZM11.9013 12.6499V11.9999C11.4318 11.9999 11.0512 11.6194 11.0512 11.1499H10.4012H9.75121C9.75121 12.3373 10.7138 13.2999 11.9013 13.2999V12.6499ZM10.4012 11.1499H11.0512C11.0512 10.6804 11.4318 10.2999 11.9013 10.2999V9.64987V8.99987C10.7138 8.99987 9.75121 9.96246 9.75121 11.1499H10.4012ZM11.9013 9.64987V10.2999C12.3707 10.2999 12.7513 10.6804 12.7513 11.1499H13.4013H14.0513C14.0513 9.96246 13.0887 8.99987 11.9013 8.99987V9.64987ZM5.90147 11.15H5.25147C5.25147 11.6194 4.8709 12 4.40143 12V12.65V13.3C5.58886 13.3 6.55147 12.3374 6.55147 11.15H5.90147ZM4.40143 12.65V12C3.93195 12 3.55138 11.6194 3.55138 11.15H2.90138H2.25138C2.25138 12.3374 3.21399 13.3 4.40143 13.3V12.65ZM2.90138 11.15H3.55138C3.55138 10.6805 3.93195 10.3 4.40143 10.3V9.64996V8.99996C3.21399 8.99996 2.25138 9.96255 2.25138 11.15H2.90138ZM4.40143 9.64996V10.3C4.8709 10.3 5.25147 10.6805 5.25147 11.15H5.90147H6.55147C6.55147 9.96255 5.58886 8.99996 4.40143 8.99996V9.64996ZM15.6508 5.90014H15.0008V7.40017H15.6508H16.3008V5.90014H15.6508ZM12.1257 5.90014V6.55014H15.6508V5.90014V5.25014H12.1257V5.90014ZM15.6508 7.40017H15.0008C15.0008 8.30245 14.9995 8.91377 14.938 9.37099C14.879 9.80951 14.7757 10.0078 14.642 10.1414L15.1017 10.6011L15.5613 11.0607C15.9768 10.6452 16.1481 10.1269 16.2264 9.54421C16.3022 8.98024 16.3008 8.2657 16.3008 7.40017H15.6508ZM6.87558 0.650024V1.30002C7.76377 1.30002 8.05372 1.30804 8.27006 1.37834L8.47092 0.76015L8.67178 0.141962C8.21025 -0.00799471 7.66259 2.44379e-05 6.87558 2.44379e-05V0.650024ZM10.0257 3.80009H10.6757C10.6757 3.01309 10.6837 2.46543 10.5337 2.00391L9.91555 2.20477L9.29736 2.40563C9.36766 2.62197 9.37568 2.91191 9.37568 3.80009H10.0257ZM8.47092 0.76015L8.27006 1.37834C8.75718 1.53661 9.13909 1.91852 9.29736 2.40563L9.91555 2.20477L10.5337 2.00391C10.2469 1.12102 9.55467 0.428828 8.67178 0.141963L8.47092 0.76015ZM10.0257 3.80009H9.37568C9.37568 4.3079 9.36766 4.71596 9.48091 5.0645L10.0991 4.86364L10.7173 4.66278C10.6837 4.55942 10.6757 4.40908 10.6757 3.80009H10.0257ZM12.1257 5.90014V5.25014C11.5167 5.25014 11.3664 5.24212 11.263 5.20854L11.0622 5.82672L10.8613 6.44491C11.2099 6.55816 11.6179 6.55014 12.1257 6.55014V5.90014ZM10.0991 4.86364L9.48091 5.06451C9.69359 5.71906 10.2068 6.23223 10.8613 6.44491L11.0622 5.82672L11.263 5.20854C11.0043 5.12445 10.8014 4.92156 10.7173 4.66278L10.0991 4.86364ZM2.90046 11.1296L2.93282 10.4804C2.12862 10.4403 1.83891 10.3212 1.6592 10.1414L1.19958 10.6011L0.739965 11.0607C1.29059 11.6113 2.02716 11.7369 2.8681 11.7788L2.90046 11.1296ZM10.4012 11.1499L10.4012 10.4999L5.90146 10.5L5.90147 11.15L5.90148 11.8L10.4012 11.7999L10.4012 11.1499ZM13.4008 11.1296L13.4331 11.7788C14.2741 11.7369 15.0107 11.6113 15.5613 11.0607L15.1017 10.6011L14.642 10.1414C14.4623 10.3212 14.1726 10.4403 13.3684 10.4804L13.4008 11.1296ZM0.650391 0.650024V1.30002H6.87558V0.650024V2.44379e-05H0.650391V0.650024ZM0.671054 8.90021L0.0218602 8.93257C0.0637781 9.7735 0.189342 10.5101 0.739965 11.0607L1.19958 10.6011L1.6592 10.1414C1.4795 9.96175 1.36033 9.67204 1.32025 8.86785L0.671054 8.90021ZM0.650543 3.65001V4.30001H5.15068V3.65001V3.00001H0.650543V3.65001ZM0.650543 5.89978V6.54978H3.65063V5.89978V5.24978H0.650543V5.89978ZM10.0255 2.15002V2.80002H11.3915V2.15002V1.50002H10.0255V2.15002ZM14.6934 4.12219L14.1211 4.43038L15.0786 6.20834L15.6508 5.90014L16.2231 5.59195L15.2657 3.81399L14.6934 4.12219ZM11.3915 2.15002V2.80002C11.9503 2.80002 12.3214 2.80078 12.6097 2.82989C12.8834 2.85753 13.028 2.90664 13.1397 2.97335L13.473 2.41531L13.8063 1.85727C13.4738 1.65869 13.1234 1.57516 12.7403 1.53647C12.3718 1.49926 11.9243 1.50002 11.3915 1.50002V2.15002ZM14.6934 4.12219L15.2657 3.81402C15.0131 3.34493 14.8016 2.95057 14.5941 2.64373C14.3784 2.32473 14.1388 2.05586 13.8063 1.85727L13.473 2.41531L13.1397 2.97335C13.2513 3.04005 13.3631 3.14409 13.5172 3.37194C13.6795 3.61195 13.8562 3.93839 14.1211 4.43036L14.6934 4.12219Z" fill="currentcolor"></path>
                  </svg>
               </span>
               <span>Shipping</span>
               <span class="aq-tooltip-item">Add a discount code</span>
            </button>
         </div>
         <div class="aq-cartmini-total d-flex justify-content-between align-items-center">
            <span class="aq-cartmini-total-title">Subtotal</span>
            <span class="aq-cartmini-total-value">$49.99 USD</span>
         </div>
         <div class="aq-cartmini-main-btn d-flex justify-content-between">
            <a href="#" class="aq-btn-black btn-red-bg text-center  w-100">View Cart</a>
            <a href="#" class="aq-btn-black text-center border-btn  w-100">Checkout</a>
         </div>
         <div class="aq-cartmini-tools-box note-active">
            <h4 class="aq-cartmini-tools-text mb-10">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                     <path d="M4.24818 0.75V2.85M9.85182 0.75V2.85M4.24818 7.05H9.84818M4.24818 10.5482H7.04818M13.35 5.3V11.25C13.35 13.35 12.3 14.75 9.85 14.75H4.25C1.8 14.75 0.75 13.35 0.75 11.25V5.3C0.75 3.2 1.8 1.8 4.25 1.8H9.85C12.3 1.8 13.35 3.2 13.35 5.3Z" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
               </span>
               <span>Note</span>
            </h4>
            <div class="aq-cartmini-tools-field mb-10">
               <form action="#">
                  <textarea placeholder="Add special instructions for your order..."></textarea>
               </form>
            </div>
            <div class="aq-cartmini-tools-btn d-flex">
               <button class="aq-btn-black btn-cancel border-btn w-100 text-center ">Cancel</button>
               <button class="aq-btn-black btn-red-bg w-100 text-center ">Save</button>
            </div>
         </div>
         <div class="aq-cartmini-tools-box coupon-active">
            <h4 class="aq-cartmini-tools-text mb-10">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                    <path d="M6.25 9.0625L10.75 4.5625M10.7446 9.0625H10.7536M6.24588 4.9375H6.25262M14.125 7.375C14.125 6.34 14.965 5.5 16 5.5V4.75C16 1.75 15.25 1 12.25 1H4.75C1.75 1 1 1.75 1 4.75V5.125C2.035 5.125 2.875 5.965 2.875 7C2.875 8.035 2.035 8.875 1 8.875V9.25C1 12.25 1.75 13 4.75 13H12.25C15.25 13 16 12.25 16 9.25C14.965 9.25 14.125 8.41 14.125 7.375Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
               </span>
               <span>Add A Coupon Code</span>
            </h4>
            <div class="aq-cartmini-tools-field mb-10">
               <form action="#">
                  <label>Enter Code</label>
                  <input type="text" placeholder="Discount code">
               </form>
            </div>
            <div class="aq-cartmini-tools-btn d-flex">
               <button class="aq-btn-black btn-cancel border-btn w-100 text-center ">Cancel</button>
               <button class="aq-btn-black btn-red-bg w-100 text-center ">Save</button>
            </div>
         </div>
         <div class="aq-cartmini-tools-box shipping-active">
            <h4 class="aq-cartmini-tools-text mb-10">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                    <path d="M15.6508 5.90014H16.3008C16.3008 5.79256 16.2741 5.68666 16.2231 5.59195L15.6508 5.90014ZM15.1017 10.6011L14.642 10.1414L14.642 10.1414L15.1017 10.6011ZM8.47092 0.76015L8.67178 0.141963L8.67178 0.141962L8.47092 0.76015ZM9.91555 2.20477L9.29736 2.40563L9.29736 2.40563L9.91555 2.20477ZM10.0991 4.86364L9.48091 5.0645L9.48091 5.06451L10.0991 4.86364ZM11.0622 5.82672L10.8613 6.44491L10.8613 6.44491L11.0622 5.82672ZM2.8681 11.7788C3.22664 11.7967 3.53178 11.5205 3.54965 11.162C3.56752 10.8034 3.29136 10.4983 2.93282 10.4804L2.90046 11.1296L2.8681 11.7788ZM1.19958 10.6011L0.739965 11.0607L0.739965 11.0607L1.19958 10.6011ZM13.3684 10.4804C13.0099 10.4983 12.7337 10.8034 12.7516 11.162C12.7695 11.5205 13.0746 11.7967 13.4331 11.7788L13.4008 11.1296L13.3684 10.4804ZM0.650391 2.44379e-05C0.291406 2.44379e-05 0.000390649 0.291039 0.000390649 0.650024C0.000390649 1.00901 0.291406 1.30002 0.650391 1.30002V0.650024V2.44379e-05ZM1.32025 8.86785C1.30238 8.50931 0.997234 8.23314 0.638694 8.25101C0.280154 8.26888 0.00398801 8.57403 0.0218602 8.93257L0.671054 8.90021L1.32025 8.86785ZM0.650543 3.00001C0.291558 3.00001 0.000543237 3.29102 0.000543237 3.65001C0.000543237 4.00899 0.291558 4.30001 0.650543 4.30001V3.65001V3.00001ZM5.15068 4.30001C5.50967 4.30001 5.80068 4.00899 5.80068 3.65001C5.80068 3.29102 5.50967 3.00001 5.15068 3.00001V3.65001V4.30001ZM0.650543 5.24978C0.291558 5.24978 0.000543237 5.5408 0.000543237 5.89978C0.000543237 6.25877 0.291558 6.54978 0.650543 6.54978V5.89978V5.24978ZM3.65063 6.54978C4.00962 6.54978 4.30063 6.25877 4.30063 5.89978C4.30063 5.5408 4.00962 5.24978 3.65063 5.24978V5.89978V6.54978ZM10.0255 1.50002C9.66656 1.50002 9.37554 1.79104 9.37554 2.15002C9.37554 2.50901 9.66656 2.80002 10.0255 2.80002V2.15002V1.50002ZM14.6934 4.12219L14.1211 4.43036L14.1211 4.43038L14.6934 4.12219ZM13.473 2.41531L13.8063 1.85727L13.8063 1.85727L13.473 2.41531ZM13.4013 11.1499H12.7513C12.7513 11.6194 12.3707 11.9999 11.9013 11.9999V12.6499V13.2999C13.0887 13.2999 14.0513 12.3373 14.0513 11.1499H13.4013ZM11.9013 12.6499V11.9999C11.4318 11.9999 11.0512 11.6194 11.0512 11.1499H10.4012H9.75121C9.75121 12.3373 10.7138 13.2999 11.9013 13.2999V12.6499ZM10.4012 11.1499H11.0512C11.0512 10.6804 11.4318 10.2999 11.9013 10.2999V9.64987V8.99987C10.7138 8.99987 9.75121 9.96246 9.75121 11.1499H10.4012ZM11.9013 9.64987V10.2999C12.3707 10.2999 12.7513 10.6804 12.7513 11.1499H13.4013H14.0513C14.0513 9.96246 13.0887 8.99987 11.9013 8.99987V9.64987ZM5.90147 11.15H5.25147C5.25147 11.6194 4.8709 12 4.40143 12V12.65V13.3C5.58886 13.3 6.55147 12.3374 6.55147 11.15H5.90147ZM4.40143 12.65V12C3.93195 12 3.55138 11.6194 3.55138 11.15H2.90138H2.25138C2.25138 12.3374 3.21399 13.3 4.40143 13.3V12.65ZM2.90138 11.15H3.55138C3.55138 10.6805 3.93195 10.3 4.40143 10.3V9.64996V8.99996C3.21399 8.99996 2.25138 9.96255 2.25138 11.15H2.90138ZM4.40143 9.64996V10.3C4.8709 10.3 5.25147 10.6805 5.25147 11.15H5.90147H6.55147C6.55147 9.96255 5.58886 8.99996 4.40143 8.99996V9.64996ZM15.6508 5.90014H15.0008V7.40017H15.6508H16.3008V5.90014H15.6508ZM12.1257 5.90014V6.55014H15.6508V5.90014V5.25014H12.1257V5.90014ZM15.6508 7.40017H15.0008C15.0008 8.30245 14.9995 8.91377 14.938 9.37099C14.879 9.80951 14.7757 10.0078 14.642 10.1414L15.1017 10.6011L15.5613 11.0607C15.9768 10.6452 16.1481 10.1269 16.2264 9.54421C16.3022 8.98024 16.3008 8.2657 16.3008 7.40017H15.6508ZM6.87558 0.650024V1.30002C7.76377 1.30002 8.05372 1.30804 8.27006 1.37834L8.47092 0.76015L8.67178 0.141962C8.21025 -0.00799471 7.66259 2.44379e-05 6.87558 2.44379e-05V0.650024ZM10.0257 3.80009H10.6757C10.6757 3.01309 10.6837 2.46543 10.5337 2.00391L9.91555 2.20477L9.29736 2.40563C9.36766 2.62197 9.37568 2.91191 9.37568 3.80009H10.0257ZM8.47092 0.76015L8.27006 1.37834C8.75718 1.53661 9.13909 1.91852 9.29736 2.40563L9.91555 2.20477L10.5337 2.00391C10.2469 1.12102 9.55467 0.428828 8.67178 0.141963L8.47092 0.76015ZM10.0257 3.80009H9.37568C9.37568 4.3079 9.36766 4.71596 9.48091 5.0645L10.0991 4.86364L10.7173 4.66278C10.6837 4.55942 10.6757 4.40908 10.6757 3.80009H10.0257ZM12.1257 5.90014V5.25014C11.5167 5.25014 11.3664 5.24212 11.263 5.20854L11.0622 5.82672L10.8613 6.44491C11.2099 6.55816 11.6179 6.55014 12.1257 6.55014V5.90014ZM10.0991 4.86364L9.48091 5.06451C9.69359 5.71906 10.2068 6.23223 10.8613 6.44491L11.0622 5.82672L11.263 5.20854C11.0043 5.12445 10.8014 4.92156 10.7173 4.66278L10.0991 4.86364ZM2.90046 11.1296L2.93282 10.4804C2.12862 10.4403 1.83891 10.3212 1.6592 10.1414L1.19958 10.6011L0.739965 11.0607C1.29059 11.6113 2.02716 11.7369 2.8681 11.7788L2.90046 11.1296ZM10.4012 11.1499L10.4012 10.4999L5.90146 10.5L5.90147 11.15L5.90148 11.8L10.4012 11.7999L10.4012 11.1499ZM13.4008 11.1296L13.4331 11.7788C14.2741 11.7369 15.0107 11.6113 15.5613 11.0607L15.1017 10.6011L14.642 10.1414C14.4623 10.3212 14.1726 10.4403 13.3684 10.4804L13.4008 11.1296ZM0.650391 0.650024V1.30002H6.87558V0.650024V2.44379e-05H0.650391V0.650024ZM0.671054 8.90021L0.0218602 8.93257C0.0637781 9.7735 0.189342 10.5101 0.739965 11.0607L1.19958 10.6011L1.6592 10.1414C1.4795 9.96175 1.36033 9.67204 1.32025 8.86785L0.671054 8.90021ZM0.650543 3.65001V4.30001H5.15068V3.65001V3.00001H0.650543V3.65001ZM0.650543 5.89978V6.54978H3.65063V5.89978V5.24978H0.650543V5.89978ZM10.0255 2.15002V2.80002H11.3915V2.15002V1.50002H10.0255V2.15002ZM14.6934 4.12219L14.1211 4.43038L15.0786 6.20834L15.6508 5.90014L16.2231 5.59195L15.2657 3.81399L14.6934 4.12219ZM11.3915 2.15002V2.80002C11.9503 2.80002 12.3214 2.80078 12.6097 2.82989C12.8834 2.85753 13.028 2.90664 13.1397 2.97335L13.473 2.41531L13.8063 1.85727C13.4738 1.65869 13.1234 1.57516 12.7403 1.53647C12.3718 1.49926 11.9243 1.50002 11.3915 1.50002V2.15002ZM14.6934 4.12219L15.2657 3.81402C15.0131 3.34493 14.8016 2.95057 14.5941 2.64373C14.3784 2.32473 14.1388 2.05586 13.8063 1.85727L13.473 2.41531L13.1397 2.97335C13.2513 3.04005 13.3631 3.14409 13.5172 3.37194C13.6795 3.61195 13.8562 3.93839 14.1211 4.43036L14.6934 4.12219Z" fill="currentcolor"></path>
                  </svg>
               </span>
               <span>Estimate shipping rates</span>
            </h4>
            <div class="aq-cartmini-tools-field mb-10">
               <div class="aq-cartmini-select aq-select mb-10">
                  <label>State / County</label>
                  <select>
                     <option>New York US</option>
                     <option>Berlin Germany</option>
                     <option>Paris France</option>
                     <option>Tokiyo Japan</option>
                  </select>
               </div>
               <form action="#">
                  <div class="aq-cartmini-tools-input">
                     <label>Postal/Zip Code</label>
                     <input type="text" placeholder="17080">
                  </div>
               </form>
            </div>
            <div class="aq-cartmini-tools-btn d-flex">
               <button class="aq-btn-black btn-cancel border-btn w-100 text-center ">Cancel</button>
               <button class="aq-btn-black btn-red-bg w-100 text-center ">Save</button>
            </div>
         </div>
      </div>
   </div>
   <!-- Cartmini area -->

   <!-- wishlist popup -->
   <div class="aq-wishlist-popup-wrap aq-wishlist-popup aq-wishlist-active">
      <div class="aq-wishlist-popup-top d-flex justify-content-between align-items-center">
         <div>
            <span class="aq-wishlist-popup-name">Wishlist</span>
            <span class="aq-wishlist-popup-count">(2)</span>
         </div>
         <span class="aq-wishlist-popup-close aq-wishlist-close"><i class="fa-regular fa-xmark"></i></span>
      </div>
      <div class="aq-wishlist-popup-middle">
         <div class="aq-wishlist-popup-item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div class="aq-wishlist-popup-thumb-wrap d-flex align-items-center">
               <span class="aq-wishlist-popup-remove"><i class="fa-regular fa-xmark"></i></span>
               <div class="aq-wishlist-popup-thumb  d-flex align-items-center">
                  <a href="product-details-default.html">
                     <img src="images/bag-1.jpg" alt="">
                  </a>
                  <div class="aq-wishlist-popup-thumb-info">
                     <h4 class="aq-wishlist-popup-title"><a href="product-details-default.html">Mosaic Vanity Bag</a></h4>
                     <span class="aq-wishlist-popup-price">578.00</span>
                  </div>
               </div>
            </div>
            <div class="aq-wishlist-popup-btn">
               <button class="aq-btn-black btn-red-bg  btn-h-40">Add to bag</button>
            </div>
         </div>
         <div class="aq-wishlist-popup-item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div class="aq-wishlist-popup-thumb-wrap d-flex align-items-center">
               <span class="aq-wishlist-popup-remove"><i class="fa-regular fa-xmark"></i></span>
               <div class="aq-wishlist-popup-thumb  d-flex align-items-center">
                  <a href="product-details-default.html">
                     <img src="images/bag-2.jpg" alt="">
                  </a>
                  <div class="aq-wishlist-popup-thumb-info">
                     <h4 class="aq-wishlist-popup-title"><a href="product-details-default.html">Georgia Mini Bag</a></h4>
                     <span class="aq-wishlist-popup-price">578.00</span>
                  </div>
               </div>
            </div>
            <div class="aq-wishlist-popup-btn">
               <button class="aq-btn-black btn-red-bg  btn-h-40">Add to bag</button>
            </div>
         </div>
         <div class="aq-wishlist-popup-item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div class="aq-wishlist-popup-thumb-wrap d-flex align-items-center">
               <span class="aq-wishlist-popup-remove"><i class="fa-regular fa-xmark"></i></span>
               <div class="aq-wishlist-popup-thumb  d-flex align-items-center">
                  <a href="product-details-default.html">
                     <img src="images/bag-3.jpg" alt="">
                  </a>
                  <div class="aq-wishlist-popup-thumb-info">
                     <h4 class="aq-wishlist-popup-title"><a href="product-details-default.html">Osette Backpack Bag</a></h4>
                     <span class="aq-wishlist-popup-price">578.00</span>
                  </div>
               </div>
            </div>
            <div class="aq-wishlist-popup-btn">
               <button class="aq-btn-black btn-red-bg  btn-h-40">Add to bag</button>
            </div>
         </div>
      </div>
      <div class="aq-wishlist-popup-bottom d-flex justify-content-between align-items-center">
         <a class="aq-line-anim" href="wishlist.html">Open wishlist page</a>
         <a class="aq-line-anim" href="product-default.html">Continue shopping</a>
      </div>
      <div class="aq-wishlist-popup-text">
         <p><b>Georgia Mini Bag</b> has been added to Wishlist.</p>
      </div>
   </div>
   <!-- wishlist popup -->

   <!-- compare canvas -->
   <div class="aq-compare-area aq-compare-canvas aq-compare-active" data-bg-color="#fff">
      <span class="aq-compare-canvas-close aq-compare-close">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 1L1 13M1 1L13 13" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
         </svg>
      </span>
      <div class="container container-1550">
         <div class="row">
            <div class="col-xl-12">
               <div class="aq-compare-wrap all-file-delete d-flex align-items-center">
                  <div class="aq-compare-content">
                     <h3 class="aq-compare-title mb-0">Compare Products</h3>
                  </div>
                  <div class="aq-compare-item-wrap d-flex align-items-center">
                     <div class="aq-compare-item item-delete d-flex align-items-center">
                        <div class="aq-compare-thumb p-relative">
                           <img class="aq-product-img" src="images/front-img-1.jpg" alt="">
                           <span class="aq-compare-remove aq-remove">
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 14 14" fill="none">
                                 <path d="M13 1L1 13M1 1L13 13" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </span>
                        </div>
                        <div class="aq-compare-inner-content">
                           <h4 class="aq-product-title mb-10"><a href="product-details-default.html">The Cocoon Crew in Alpaca</a></h4>
                           <div class="aq-product-price mb-0">
                              <span class="aq-product-new-price">$24.00</span>
                           </div>
                        </div>
                     </div>
                     <div class="aq-compare-item item-delete d-flex align-items-center">
                        <div class="aq-compare-thumb p-relative">
                           <img class="aq-product-img" src="images/front-img-2.jpg" alt="">
                           <span class="aq-compare-remove aq-remove">
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 14 14" fill="none">
                                 <path d="M13 1L1 13M1 1L13 13" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </span>
                        </div>
                        <div class="aq-compare-inner-content">
                           <h4 class="aq-product-title mb-10"><a href="product-details-default.html">Cozy Waffle Slim Crew Top</a></h4>
                           <div class="aq-product-price mb-0">
                              <span class="aq-product-new-price">$24.00</span>
                           </div>
                        </div>
                     </div>
                     <div class="aq-compare-item item-delete d-flex align-items-center">
                        <div class="aq-compare-thumb p-relative">
                           <img class="aq-product-img" src="images/front-img-3.jpg" alt="">
                           <span class="aq-compare-remove aq-remove">
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 14 14" fill="none">
                                 <path d="M13 1L1 13M1 1L13 13" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </span>
                        </div>
                        <div class="aq-compare-inner-content">
                           <h4 class="aq-product-title mb-10"><a href="product-details-default.html">Polo Sweater in Cotton Merino</a></h4>
                           <div class="aq-product-price mb-0">
                              <span class="aq-product-new-price">$24.00</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="aq-compare-btn-box">
                     <a class="aq-btn-black btn-red-bg w-100 text-center mb-5" href="#">Compare Products</a>
                     <button class="aq-btn-black border-btn clear-all-file w-100 text-center">Clear ALL</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   <!-- login modal -->
   <div class="aq-login-modal-style">
      <div class="modal fade" id="exampleModalToggle" role="dialog" aria-hidden="true" aria-labelledby="exampleModalToggle" tabindex="-1">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               <div class="aq-login-wrapper">
                  <div class="aq-login-top text-center mb-30">
                     <h3 class="aq-login-title">Sign in to bazaro.</h3>
                     <p>Please enter your details below to sign in.</p>
                  </div>
                  <div class="aq-login-option">
                     <div class="aq-login-input-wrapper">
                        <div class="aq-login-input-box">
                           <label class="aq-form-label">Your Email <span>*</span></label>
                           <input class="aq-form-control" type="email" placeholder="email@address.com">
                        </div>
                        <div class="aq-login-input-box">
                           <label class="aq-form-label">Password <span>*</span></label>
                           <div class="aq-login-input p-relative">
                              <input class="aq_password aq-form-control" type="password" placeholder="6+ characters required">
                              <div class="aq-login-input-eye password-show-toggle">
                                 <span class="open-eye">
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1 6.77778C1 6.77778 3.90909 1 9 1C14.0909 1 17 6.77778 17 6.77778C17 6.77778 14.0909 12.5556 9 12.5556C3.90909 12.5556 1 6.77778 1 6.77778Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.00018 8.94466C10.2052 8.94466 11.182 7.97461 11.182 6.77799C11.182 5.58138 10.2052 4.61133 9.00018 4.61133C7.79519 4.61133 6.81836 5.58138 6.81836 6.77799C6.81836 7.97461 7.79519 8.94466 9.00018 8.94466Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                 </span>
                                 <span class="close-eye">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M6.8822 11.7457C6.72311 11.7457 6.56402 11.6871 6.43842 11.5615C5.7518 10.8749 5.375 9.9622 5.375 8.99926C5.375 6.99803 6.99943 5.3736 9.00066 5.3736C9.9636 5.3736 10.8763 5.7504 11.5629 6.43701C11.6801 6.55424 11.7471 6.71333 11.7471 6.8808C11.7471 7.04827 11.6801 7.20736 11.5629 7.32459L7.32599 11.5615C7.20039 11.6871 7.0413 11.7457 6.8822 11.7457ZM9.00066 6.6296C7.69442 6.6296 6.631 7.69302 6.631 8.99926C6.631 9.41793 6.73986 9.81985 6.94082 10.1715L10.1729 6.93941C9.82125 6.73845 9.41933 6.6296 9.00066 6.6296Z" fill="currentcolor"></path>
                                       <path opacity="0.5" d="M3.63816 14.4503C3.49582 14.4503 3.3451 14.4001 3.22787 14.2996C2.33192 13.5376 1.52808 12.5998 0.841463 11.5112C-0.0461127 10.1296 -0.0461127 7.87721 0.841463 6.48723C2.88456 3.28861 5.8571 1.44647 8.99711 1.44647C10.8393 1.44647 12.6563 2.08285 14.2472 3.28024C14.5235 3.48957 14.5821 3.88312 14.3728 4.15944C14.1635 4.43576 13.7699 4.49437 13.4936 4.28504C12.1204 3.24674 10.5629 2.70248 8.99711 2.70248C6.29252 2.70248 3.70515 4.32691 1.89651 7.16547C1.2685 8.14516 1.2685 9.85332 1.89651 10.833C2.52451 11.8127 3.24462 12.6584 4.04009 13.345C4.29966 13.5711 4.33315 13.9646 4.10707 14.2326C3.98984 14.3749 3.814 14.4503 3.63816 14.4503Z" fill="currentcolor"></path>
                                       <path opacity="0.5" d="M9.00382 16.552C7.89017 16.552 6.80163 16.3259 5.75496 15.8821C5.43678 15.7482 5.28606 15.3797 5.42003 15.0616C5.554 14.7434 5.92243 14.5927 6.24062 14.7266C7.12819 15.1034 8.05764 15.296 8.99545 15.296C11.7 15.296 14.2874 13.6716 16.0961 10.833C16.7241 9.85333 16.7241 8.14517 16.0961 7.16548C15.8365 6.75519 15.5518 6.36164 15.2503 5.99321C15.0326 5.72527 15.0745 5.33172 15.3425 5.10564C15.6104 4.88793 16.0039 4.92142 16.23 5.19775C16.5566 5.59967 16.8748 6.03508 17.1595 6.48724C18.047 7.86885 18.047 10.1213 17.1595 11.5113C15.1164 14.7099 12.1438 16.552 9.00382 16.552Z" fill="currentcolor"></path>
                                       <path d="M9.58061 12.5747C9.28754 12.5747 9.01959 12.3654 8.96098 12.0639C8.89399 11.7206 9.12007 11.3941 9.46338 11.3355C10.3845 11.168 11.1548 10.3976 11.3223 9.47657C11.3893 9.13327 11.7158 8.91556 12.0591 8.97417C12.4024 9.04116 12.6285 9.36772 12.5615 9.71103C12.2936 11.1596 11.1381 12.3068 9.69783 12.5747C9.65597 12.5663 9.62247 12.5747 9.58061 12.5747Z" fill="currentcolor"></path>
                                       <path d="M0.625908 18.0007C0.466815 18.0007 0.307721 17.9421 0.18212 17.8165C-0.0607068 17.5736 -0.0607068 17.1717 0.18212 16.9289L6.43702 10.674C6.67984 10.4312 7.08177 10.4312 7.32459 10.674C7.56742 10.9168 7.56742 11.3188 7.32459 11.5616L1.0697 17.8165C0.944096 17.9421 0.785002 18.0007 0.625908 18.0007Z" fill="currentcolor"></path>
                                       <path d="M11.122 7.50881C10.9629 7.50881 10.8038 7.45019 10.6782 7.32459C10.4354 7.08177 10.4354 6.67984 10.6782 6.43702L16.9331 0.182121C17.1759 -0.0607068 17.5779 -0.0607068 17.8207 0.182121C18.0635 0.424948 18.0635 0.826869 17.8207 1.0697L11.5658 7.32459C11.4402 7.45019 11.2811 7.50881 11.122 7.50881Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aq-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                        <div class="aq-login-remeber">
                           <input class="aq-form-checkbox" id="remeber" type="checkbox">
                           <label class="aq-form-checkbox-label" for="remeber">Remember me</label>
                        </div>
                        <div class="aq-login-forgot">
                           <a data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" href="javascript:void(0);">Forgot Password?</a>
                        </div>
                     </div>
                     <div class="aq-login-bottom-wrap mb-30">
                        <button class="aq-login-btn w-100 mb-10">Login</button>
                        <button data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" class="aq-login-btn btn-transparent w-100">Create Account</button>
                     </div>
                     <div class="aq-login-mail text-center mb-20">
                        <p>Or continue with</p>
                     </div>
                     <div class="aq-login-social d-flex flex-wrap align-items-center justify-content-center">
                        <div class="aq-login-option-item">
                           <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                 <path d="M19.25 9.83876C19.25 9.04738 19.1845 8.46988 19.0427 7.871H9.82144V11.4429H15.2341C15.125 12.3306 14.5357 13.6674 13.2262 14.5657L13.2078 14.6852L16.1234 16.8987L16.3254 16.9185C18.1805 15.2395 19.25 12.769 19.25 9.83876Z" fill="#4285F4"></path>
                                 <path d="M9.82083 19.25C12.4726 19.25 14.6994 18.3943 16.3254 16.9185L13.2262 14.5657C12.3968 15.1325 11.2831 15.5282 9.82083 15.5282C7.22363 15.5282 5.01929 13.8493 4.23351 11.5285L4.11833 11.5381L1.08667 13.8375L1.04703 13.9455C2.66208 17.0896 5.97954 19.25 9.82083 19.25Z" fill="#34A853"></path>
                                 <path d="M4.23351 11.5285C4.02617 10.9297 3.90675 10.288 3.90675 9.62497C3.90675 8.96188 4.02674 8.32023 4.22317 7.72135L4.21768 7.59381L1.14803 5.25756L1.04759 5.30438C0.381948 6.60912 0 8.07428 0 9.62497C0 11.1757 0.381383 12.6407 1.04703 13.9455L4.23351 11.5285Z" fill="#FBBC05"></path>
                                 <path d="M9.82088 3.72164C11.6651 3.72164 12.9091 4.50233 13.6185 5.15474L16.3903 2.5025C14.688 0.951809 12.4726 0 9.82088 0C5.97957 0 2.66266 2.16024 1.04759 5.30438L4.22317 7.72135C5.01987 5.40066 7.22367 3.72164 9.82088 3.72164Z" fill="#EB4335"></path>
                              </svg>
                           </a>
                        </div>
                        <div class="aq-login-option-item">
                           <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4121 17.1597C15.9996 16.2597 16.2186 15.7997 16.6667 14.7897C13.361 13.5298 12.8333 8.79989 16.0991 6.98994C15.1034 5.72997 13.6995 5 12.3753 5C11.4194 5 10.7623 5.25 10.1748 5.48C9.67699 5.66999 9.22894 5.83997 8.67135 5.83997C8.07395 5.83997 7.54623 5.65 6.98865 5.45C6.38129 5.23001 5.74405 5 4.9475 5C3.46394 5 1.88081 5.90998 0.875176 7.46994C-0.53869 9.66988 -0.289768 13.7898 1.99034 17.3097C2.8068 18.5696 3.90205 19.9796 5.32587 19.9996C5.92328 20.0096 6.31159 19.8296 6.73973 19.6396C7.22762 19.4196 7.75532 19.1796 8.68131 19.1796C9.60729 19.1696 10.125 19.4196 10.6129 19.6396C11.0311 19.8296 11.4095 20.0096 11.9969 19.9996C13.4407 19.9796 14.5956 18.4196 15.4121 17.1597Z" fill="#010F1C"></path>
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1721 0C12.3314 1.09997 11.8833 2.18995 11.2959 2.94993C10.6686 3.76991 9.57333 4.40988 8.51791 4.36988C8.32873 3.30991 8.81661 2.21993 9.41402 1.48995C10.0811 0.689972 11.2062 0.0699982 12.1721 0Z" fill="#010F1C"></path>
                              </svg>
                           </a>
                        </div>
                        <div class="aq-login-option-item">
                           <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                 <path d="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z" fill="#2151F9"></path>
                              </svg>
                           </a>
                        </div>
                        <div class="aq-login-option-item">
                           <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M5.04202 0H0L5.97809 8.15716L0.38242 15H2.96778L7.19998 9.82455L10.958 14.9525H16L9.84822 6.55824L9.85911 6.57272L15.1559 0.0952909H12.5705L8.63704 4.90552L5.04202 0ZM2.78311 1.42858H4.35275L13.2169 13.5238H11.6472L2.78311 1.42858Z" fill="#141414"></path>
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="exampleModalToggle2" role="dialog" aria-hidden="true" aria-labelledby="exampleModalToggle2" tabindex="-1">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               <div class="aq-login-wrapper">
                  <div class="aq-login-top text-center mb-30">
                     <h3 class="aq-login-title">Create Account</h3>
                     <p>Please register below to create an account.</p>
                  </div>
                  <div class="aq-login-option">
                     <div class="aq-login-input-wrapper">
                        <div class="aq-login-input-box">
                           <label class="aq-form-label">Full Name <span>*</span></label>
                           <input class="aq-form-control" type="text" name="register_name" placeholder="your name">
                        </div>
                        <div class="aq-login-input-box">
                           <label class="aq-form-label">Your Email <span>*</span></label>
                           <input class="aq-form-control" type="email" name="register_email" placeholder="email@address.com">
                        </div>
                        <div class="aq-login-input-box">
                           <label class="aq-form-label">Phone Number <span>*</span></label>
                           <input class="aq-form-control" type="tel" name="register_phone" placeholder="10 digit phone number">
                        </div>
                        <div class="aq-login-input-box">
                           <label class="aq-form-label">Referral Code (Optional)</label>
                           <input class="aq-form-control" type="text" name="register_referral_code" placeholder="e.g. ED15DFF3">
                        </div>
                        <div class="aq-login-input-box">
                           <label class="aq-form-label">Password <span>*</span></label>
                           <div class="aq-login-input p-relative">
                              <input class="aq_password" type="password" placeholder="6+ characters required">
                              <div class="aq-login-input-eye password-show-toggle">
                                 <span class="open-eye">
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1 6.77778C1 6.77778 3.90909 1 9 1C14.0909 1 17 6.77778 17 6.77778C17 6.77778 14.0909 12.5556 9 12.5556C3.90909 12.5556 1 6.77778 1 6.77778Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.00018 8.94466C10.2052 8.94466 11.182 7.97461 11.182 6.77799C11.182 5.58138 10.2052 4.61133 9.00018 4.61133C7.79519 4.61133 6.81836 5.58138 6.81836 6.77799C6.81836 7.97461 7.79519 8.94466 9.00018 8.94466Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                 </span>
                                 <span class="close-eye">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M6.8822 11.7457C6.72311 11.7457 6.56402 11.6871 6.43842 11.5615C5.7518 10.8749 5.375 9.9622 5.375 8.99926C5.375 6.99803 6.99943 5.3736 9.00066 5.3736C9.9636 5.3736 10.8763 5.7504 11.5629 6.43701C11.6801 6.55424 11.7471 6.71333 11.7471 6.8808C11.7471 7.04827 11.6801 7.20736 11.5629 7.32459L7.32599 11.5615C7.20039 11.6871 7.0413 11.7457 6.8822 11.7457ZM9.00066 6.6296C7.69442 6.6296 6.631 7.69302 6.631 8.99926C6.631 9.41793 6.73986 9.81985 6.94082 10.1715L10.1729 6.93941C9.82125 6.73845 9.41933 6.6296 9.00066 6.6296Z" fill="currentcolor"></path>
                                       <path opacity="0.5" d="M3.63816 14.4503C3.49582 14.4503 3.3451 14.4001 3.22787 14.2996C2.33192 13.5376 1.52808 12.5998 0.841463 11.5112C-0.0461127 10.1296 -0.0461127 7.87721 0.841463 6.48723C2.88456 3.28861 5.8571 1.44647 8.99711 1.44647C10.8393 1.44647 12.6563 2.08285 14.2472 3.28024C14.5235 3.48957 14.5821 3.88312 14.3728 4.15944C14.1635 4.43576 13.7699 4.49437 13.4936 4.28504C12.1204 3.24674 10.5629 2.70248 8.99711 2.70248C6.29252 2.70248 3.70515 4.32691 1.89651 7.16547C1.2685 8.14516 1.2685 9.85332 1.89651 10.833C2.52451 11.8127 3.24462 12.6584 4.04009 13.345C4.29966 13.5711 4.33315 13.9646 4.10707 14.2326C3.98984 14.3749 3.814 14.4503 3.63816 14.4503Z" fill="currentcolor"></path>
                                       <path opacity="0.5" d="M9.00382 16.552C7.89017 16.552 6.80163 16.3259 5.75496 15.8821C5.43678 15.7482 5.28606 15.3797 5.42003 15.0616C5.554 14.7434 5.92243 14.5927 6.24062 14.7266C7.12819 15.1034 8.05764 15.296 8.99545 15.296C11.7 15.296 14.2874 13.6716 16.0961 10.833C16.7241 9.85333 16.7241 8.14517 16.0961 7.16548C15.8365 6.75519 15.5518 6.36164 15.2503 5.99321C15.0326 5.72527 15.0745 5.33172 15.3425 5.10564C15.6104 4.88793 16.0039 4.92142 16.23 5.19775C16.5566 5.59967 16.8748 6.03508 17.1595 6.48724C18.047 7.86885 18.047 10.1213 17.1595 11.5113C15.1164 14.7099 12.1438 16.552 9.00382 16.552Z" fill="currentcolor"></path>
                                       <path d="M9.58061 12.5747C9.28754 12.5747 9.01959 12.3654 8.96098 12.0639C8.89399 11.7206 9.12007 11.3941 9.46338 11.3355C10.3845 11.168 11.1548 10.3976 11.3223 9.47657C11.3893 9.13327 11.7158 8.91556 12.0591 8.97417C12.4024 9.04116 12.6285 9.36772 12.5615 9.71103C12.2936 11.1596 11.1381 12.3068 9.69783 12.5747C9.65597 12.5663 9.62247 12.5747 9.58061 12.5747Z" fill="currentcolor"></path>
                                       <path d="M0.625908 18.0007C0.466815 18.0007 0.307721 17.9421 0.18212 17.8165C-0.0607068 17.5736 -0.0607068 17.1717 0.18212 16.9289L6.43702 10.674C6.67984 10.4312 7.08177 10.4312 7.32459 10.674C7.56742 10.9168 7.56742 11.3188 7.32459 11.5616L1.0697 17.8165C0.944096 17.9421 0.785002 18.0007 0.625908 18.0007Z" fill="currentcolor"></path>
                                       <path d="M11.122 7.50881C10.9629 7.50881 10.8038 7.45019 10.6782 7.32459C10.4354 7.08177 10.4354 6.67984 10.6782 6.43702L16.9331 0.182121C17.1759 -0.0607068 17.5779 -0.0607068 17.8207 0.182121C18.0635 0.424948 18.0635 0.826869 17.8207 1.0697L11.5658 7.32459C11.4402 7.45019 11.2811 7.50881 11.122 7.50881Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div class="aq-login-input-box">
                           <label class="aq-form-label">Password confirmation <span>*</span></label>
                           <div class="aq-login-input p-relative">
                              <input class="aq_password" type="password" placeholder="Password confirmation">
                              <div class="aq-login-input-eye password-show-toggle">
                                 <span class="open-eye">
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1 6.77778C1 6.77778 3.90909 1 9 1C14.0909 1 17 6.77778 17 6.77778C17 6.77778 14.0909 12.5556 9 12.5556C3.90909 12.5556 1 6.77778 1 6.77778Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.00018 8.94466C10.2052 8.94466 11.182 7.97461 11.182 6.77799C11.182 5.58138 10.2052 4.61133 9.00018 4.61133C7.79519 4.61133 6.81836 5.58138 6.81836 6.77799C6.81836 7.97461 7.79519 8.94466 9.00018 8.94466Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                 </span>
                                 <span class="close-eye">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M6.8822 11.7457C6.72311 11.7457 6.56402 11.6871 6.43842 11.5615C5.7518 10.8749 5.375 9.9622 5.375 8.99926C5.375 6.99803 6.99943 5.3736 9.00066 5.3736C9.9636 5.3736 10.8763 5.7504 11.5629 6.43701C11.6801 6.55424 11.7471 6.71333 11.7471 6.8808C11.7471 7.04827 11.6801 7.20736 11.5629 7.32459L7.32599 11.5615C7.20039 11.6871 7.0413 11.7457 6.8822 11.7457ZM9.00066 6.6296C7.69442 6.6296 6.631 7.69302 6.631 8.99926C6.631 9.41793 6.73986 9.81985 6.94082 10.1715L10.1729 6.93941C9.82125 6.73845 9.41933 6.6296 9.00066 6.6296Z" fill="currentcolor"></path>
                                       <path opacity="0.5" d="M3.63816 14.4503C3.49582 14.4503 3.3451 14.4001 3.22787 14.2996C2.33192 13.5376 1.52808 12.5998 0.841463 11.5112C-0.0461127 10.1296 -0.0461127 7.87721 0.841463 6.48723C2.88456 3.28861 5.8571 1.44647 8.99711 1.44647C10.8393 1.44647 12.6563 2.08285 14.2472 3.28024C14.5235 3.48957 14.5821 3.88312 14.3728 4.15944C14.1635 4.43576 13.7699 4.49437 13.4936 4.28504C12.1204 3.24674 10.5629 2.70248 8.99711 2.70248C6.29252 2.70248 3.70515 4.32691 1.89651 7.16547C1.2685 8.14516 1.2685 9.85332 1.89651 10.833C2.52451 11.8127 3.24462 12.6584 4.04009 13.345C4.29966 13.5711 4.33315 13.9646 4.10707 14.2326C3.98984 14.3749 3.814 14.4503 3.63816 14.4503Z" fill="currentcolor"></path>
                                       <path opacity="0.5" d="M9.00382 16.552C7.89017 16.552 6.80163 16.3259 5.75496 15.8821C5.43678 15.7482 5.28606 15.3797 5.42003 15.0616C5.554 14.7434 5.92243 14.5927 6.24062 14.7266C7.12819 15.1034 8.05764 15.296 8.99545 15.296C11.7 15.296 14.2874 13.6716 16.0961 10.833C16.7241 9.85333 16.7241 8.14517 16.0961 7.16548C15.8365 6.75519 15.5518 6.36164 15.2503 5.99321C15.0326 5.72527 15.0745 5.33172 15.3425 5.10564C15.6104 4.88793 16.0039 4.92142 16.23 5.19775C16.5566 5.59967 16.8748 6.03508 17.1595 6.48724C18.047 7.86885 18.047 10.1213 17.1595 11.5113C15.1164 14.7099 12.1438 16.552 9.00382 16.552Z" fill="currentcolor"></path>
                                       <path d="M9.58061 12.5747C9.28754 12.5747 9.01959 12.3654 8.96098 12.0639C8.89399 11.7206 9.12007 11.3941 9.46338 11.3355C10.3845 11.168 11.1548 10.3976 11.3223 9.47657C11.3893 9.13327 11.7158 8.91556 12.0591 8.97417C12.4024 9.04116 12.6285 9.36772 12.5615 9.71103C12.2936 11.1596 11.1381 12.3068 9.69783 12.5747C9.65597 12.5663 9.62247 12.5747 9.58061 12.5747Z" fill="currentcolor"></path>
                                       <path d="M0.625908 18.0007C0.466815 18.0007 0.307721 17.9421 0.18212 17.8165C-0.0607068 17.5736 -0.0607068 17.1717 0.18212 16.9289L6.43702 10.674C6.67984 10.4312 7.08177 10.4312 7.32459 10.674C7.56742 10.9168 7.56742 11.3188 7.32459 11.5616L1.0697 17.8165C0.944096 17.9421 0.785002 18.0007 0.625908 18.0007Z" fill="currentcolor"></path>
                                       <path d="M11.122 7.50881C10.9629 7.50881 10.8038 7.45019 10.6782 7.32459C10.4354 7.08177 10.4354 6.67984 10.6782 6.43702L16.9331 0.182121C17.1759 -0.0607068 17.5779 -0.0607068 17.8207 0.182121C18.0635 0.424948 18.0635 0.826869 17.8207 1.0697L11.5658 7.32459C11.4402 7.45019 11.2811 7.50881 11.122 7.50881Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aq-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                        <div class="aq-login-remeber">
                           <input class="aq-form-checkbox" id="remeber1" type="checkbox">
                           <label class="aq-form-checkbox-label" for="remeber1">Remember me</label>
                        </div>
                     </div>
                     <div class="aq-login-bottom-wrap mb-30 text-center">
                        <button class="aq-login-btn w-100 mb-15">Login</button>
                        <span class="aq-login-account">Already have an account? <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login here</button></span>
                     </div>
                     <div class="aq-login-mail text-center mb-20">
                        <p>Or continue with</p>
                     </div>
                     <div class="aq-login-social d-flex flex-wrap align-items-center justify-content-center">
                        <div class="aq-login-option-item">
                           <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                 <path d="M19.25 9.83876C19.25 9.04738 19.1845 8.46988 19.0427 7.871H9.82144V11.4429H15.2341C15.125 12.3306 14.5357 13.6674 13.2262 14.5657L13.2078 14.6852L16.1234 16.8987L16.3254 16.9185C18.1805 15.2395 19.25 12.769 19.25 9.83876Z" fill="#4285F4"></path>
                                 <path d="M9.82083 19.25C12.4726 19.25 14.6994 18.3943 16.3254 16.9185L13.2262 14.5657C12.3968 15.1325 11.2831 15.5282 9.82083 15.5282C7.22363 15.5282 5.01929 13.8493 4.23351 11.5285L4.11833 11.5381L1.08667 13.8375L1.04703 13.9455C2.66208 17.0896 5.97954 19.25 9.82083 19.25Z" fill="#34A853"></path>
                                 <path d="M4.23351 11.5285C4.02617 10.9297 3.90675 10.288 3.90675 9.62497C3.90675 8.96188 4.02674 8.32023 4.22317 7.72135L4.21768 7.59381L1.14803 5.25756L1.04759 5.30438C0.381948 6.60912 0 8.07428 0 9.62497C0 11.1757 0.381383 12.6407 1.04703 13.9455L4.23351 11.5285Z" fill="#FBBC05"></path>
                                 <path d="M9.82088 3.72164C11.6651 3.72164 12.9091 4.50233 13.6185 5.15474L16.3903 2.5025C14.688 0.951809 12.4726 0 9.82088 0C5.97957 0 2.66266 2.16024 1.04759 5.30438L4.22317 7.72135C5.01987 5.40066 7.22367 3.72164 9.82088 3.72164Z" fill="#EB4335"></path>
                              </svg>
                           </a>
                        </div>
                        <div class="aq-login-option-item">
                           <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4121 17.1597C15.9996 16.2597 16.2186 15.7997 16.6667 14.7897C13.361 13.5298 12.8333 8.79989 16.0991 6.98994C15.1034 5.72997 13.6995 5 12.3753 5C11.4194 5 10.7623 5.25 10.1748 5.48C9.67699 5.66999 9.22894 5.83997 8.67135 5.83997C8.07395 5.83997 7.54623 5.65 6.98865 5.45C6.38129 5.23001 5.74405 5 4.9475 5C3.46394 5 1.88081 5.90998 0.875176 7.46994C-0.53869 9.66988 -0.289768 13.7898 1.99034 17.3097C2.8068 18.5696 3.90205 19.9796 5.32587 19.9996C5.92328 20.0096 6.31159 19.8296 6.73973 19.6396C7.22762 19.4196 7.75532 19.1796 8.68131 19.1796C9.60729 19.1696 10.125 19.4196 10.6129 19.6396C11.0311 19.8296 11.4095 20.0096 11.9969 19.9996C13.4407 19.9796 14.5956 18.4196 15.4121 17.1597Z" fill="#010F1C"></path>
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1721 0C12.3314 1.09997 11.8833 2.18995 11.2959 2.94993C10.6686 3.76991 9.57333 4.40988 8.51791 4.36988C8.32873 3.30991 8.81661 2.21993 9.41402 1.48995C10.0811 0.689972 11.2062 0.0699982 12.1721 0Z" fill="#010F1C"></path>
                              </svg>
                           </a>
                        </div>
                        <div class="aq-login-option-item">
                           <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                 <path d="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z" fill="#2151F9"></path>
                              </svg>
                           </a>
                        </div>
                        <div class="aq-login-option-item">
                           <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M5.04202 0H0L5.97809 8.15716L0.38242 15H2.96778L7.19998 9.82455L10.958 14.9525H16L9.84822 6.55824L9.85911 6.57272L15.1559 0.0952909H12.5705L8.63704 4.90552L5.04202 0ZM2.78311 1.42858H4.35275L13.2169 13.5238H11.6472L2.78311 1.42858Z" fill="#141414"></path>
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="exampleModalToggle3" role="dialog" aria-hidden="true" aria-labelledby="exampleModalToggle3" tabindex="-1">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               <div class="aq-login-wrapper">
                  <div class="aq-login-top text-center mb-30">
                     <h3 class="aq-login-title">Forgot password</h3>
                     <p>No worries, we’ll send you reset instructions.</p>
                  </div>
                  <div class="aq-login-option">
                     <div class="aq-login-input-wrapper">
                        <div class="aq-login-input-box">
                           <label class="aq-form-label">Your Email <span>*</span></label>
                           <input class="aq-form-control" type="email" placeholder="email@address.com">
                        </div>
                     </div>
                     <div class="aq-login-bottom-wrap text-center mb-20">
                        <button class="aq-login-btn w-100 mb-10">Reset Password</button>
                        <button class="aq-login-account color" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                           <path d="M10.75 5.75H0.75M0.75 5.75L5.75 10.75M0.75 5.75L5.75 0.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </span> Back to Log in</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- login modal -->

   <!-- Modal -->
   <div class="modal fade aq-product-modal" id="producQuickViewModal" role="dialog" tabindex="-1" aria-labelledby="producQuickViewModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content">
            <div class="aq-product-modal-content">
               <button type="button" class="aq-product-modal-close-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal"><i class="fa-regular fa-xmark"></i></button>
            </div>
            <div class="row justify-content-center">
               <div class="col-lg-6 col-md-10">
                  <div class="aq-modal-slider-wrap">
                     <div class="swiper aq-modal-slider-active p-relative">
                        <div class="swiper-wrapper">
                           <div class="swiper-slide">
                              <div class="aq-modal-slider">
                                 <img class="w-100" src="images/front-img-1.jpg" alt="">
                              </div>
                           </div>
                           <div class="swiper-slide">
                              <div class="aq-modal-slider">
                                 <img class="w-100" src="images/front-img-1_3.jpg" alt="">
                              </div>
                           </div>
                           <div class="swiper-slide">
                              <div class="aq-modal-slider">
                                 <img class="w-100" src="images/front-img-1_1.jpg" alt="">
                              </div>
                           </div>
                           <div class="swiper-slide">
                              <div class="aq-modal-slider">
                                 <img class="w-100" src="images/front-img-1_2.jpg" alt="">
                              </div>
                           </div>
                        </div>
                        <div class="aq-modal-slider-arrow">
                           <button class="aq-modal-prev">
                              <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M10.75 5.75H0.75M0.75 5.75L5.75 10.75M0.75 5.75L5.75 0.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>
                              </span>
                           </button>
                           <button class="aq-modal-next">
                              <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M0.75 5.75H10.75M10.75 5.75L5.75 0.75M10.75 5.75L5.75 10.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>
                              </span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="aq-product-details-wrap pt-20">

                     <!-- product info  -->
                     <div class="aq-product-details-category"><span>Girls Clothes</span></div>
                     <h3 class="aq-product-details-title mb-10">Osette backpack Bags</h3>

                     <!-- inventory details  -->
                     <div class="tp-product-details-inventory">
                        <div class="aq-product-details-rating-wrapper d-flex align-items-center">
                           <div class="aq-product-details-rating-box d-flex align-items-center mb-10">
                              <div class="aq-product-details-rating">
                                 <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                       <path d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                       <path d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                       <path d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                       <path d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                       <path d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                              <div class="aq-product-details-reviews">
                                 <span>( 1 review )</span>
                              </div>
                           </div>
                           <div class="aq-product-details-fomo-mesg mb-10">
                              <span><i>🔥</i> 41 sold in last 16 hours</span>
                           </div>
                        </div>
                     </div>

                     <!-- price info  -->
                     <div class="aq-product-details-price-wrap mb-30">
                        <ins><span class="aq-product-details-price new-price">$160.00</span></ins>
                     </div>

                     <!-- product-variation -->
                     <div class="aq-product-details-size mb-20">
                        <h4 class="aq-product-details-title-sm mb-15"><label>Size:</label> M</h4>
                        <div class="aq-product-details-size-list">
                           <button>XS</button>
                           <button>S</button>
                           <button>L</button>
                           <button>M</button>
                        </div>
                     </div>

                     <!-- product-variation -->
                     <div class="aq-product-details-variation mb-30">
                        <h4 class="aq-product-details-title-sm mb-15">
                           <label>Color:</label> Chestnut
                        </h4>
                        <div class="aq-product-details-variation-wrap d-flex align-items-center">
                           <div class="aq-product-details-variation-item active">
                              <img src="images/front-img-1.jpg" alt="">
                           </div>
                           <div class="aq-product-details-variation-item">
                              <img src="images/front-img-2.jpg" alt="">
                           </div>
                           <div class="aq-product-details-variation-item">
                              <img src="images/front-img-3.jpg" alt="">
                           </div>
                        </div>
                     </div>

                     <!-- product-action -->
                     <div class="aq-product-details-action-wrapper mb-20">
                        <div class="aq-product-details-action-item-wrapper d-sm-flex align-items-center">
                           <div class="aq-product-details-quantity">
                              <div class="aq-product-quantity mb-10 mr-10">
                                 <span class="aq-cart-minus">
                                    <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                            
                                 </span>
                                 <input class="aq-cart-input" type="text" value="1">
                                 <span class="aq-cart-plus">
                                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M1 6H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M5.5 10.5V1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                           <div class="aq-product-details-add-to-cart product-btn-style-2 d-flex align-items-center mb-10 w-100">
                              <button class="aq-product-details-add-to-cart-btn aq-btn-black radius-30 w-100">Add To Cart</button>
                              <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip-top">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                 </svg>                                                                               
                                 <span class="aq-tooltip-item">Wishlist</span>
                              </button>
                              <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip-top">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                    <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>                                                                          
                                 <span class="aq-tooltip-item">Compare</span>
                              </button>
                           </div>
                        </div>
                        <button class="aq-product-details-buy-now-btn aq-btn-black btn-red-bg  radius-30 w-100">Buy Now</button>
                     </div>

                     <!-- product view details btn -->
                     <a class="product-view-details-btn aq-line-anim" href="#">
                        View Full Details
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M0.75 5.75H10.75M10.75 5.75L5.75 0.75M10.75 5.75L5.75 10.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- Modal -->

   <!-- offcanvas area start -->
   <div class="aq-offcanvas-wrap">
      <div class="aq-offcanvas-top d-flex align-items-center justify-content-between">
         <div class="aq-offcanvas-logo">
            <a href="#"><img width="115" src="images/logo.png" alt=""></a>
         </div>
         <div class="aq-offcanvas-close">
            <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10.75 0.75L0.75 10.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M0.75 0.75L10.75 10.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               </svg>
            </span>
         </div>
      </div>
      <div class="aq-offcanvas-menu-wrap">
         <div class="aq-offcanvas-menu">
            <nav></nav>
         </div>
      </div>
      <div class="aq-offcanvas-bottom">
         <div class="aq-offcanvas-btn-wrap d-flex justify-content-between align-items-center">
            <a class="aq-offcanvas-btn" href="#">Login</a>
            <a class="aq-offcanvas-btn btn-black-bg" href="#">Wishlist</a>
         </div>
         <div class="d-flex align-items-center justify-content-between">
            <div class="aq-header-top-menu-item aq-header-lang p-relative">
               <span class="aq-header-lang-toggle">English</span>
               <ul>
                  <li>
                     <a href="#">Spanish</a>
                  </li>
                  <li>
                     <a href="#">Russian</a>
                  </li>
                  <li>
                     <a href="#">Portuguese</a>
                  </li>
               </ul>
            </div>
            <div class="aq-header-top-menu-item aq-header-currency p-relative">
               <span class="aq-header-currency-toggle">USD</span>
               <ul>
                  <li>
                     <a href="#">EUR</a>
                  </li>
                  <li>
                     <a href="#">CHF</a>
                  </li>
                  <li>
                     <a href="#">GBP</a>
                  </li>
                  <li>
                     <a href="#">KWD</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <!-- offcanvas area end -->

   <!-- Body Overlay -->
   <div class="body-overlay"></div>
   <!-- Body Overlay -->
    
   <!-- bottom-sticky header -->
   <div class="aq-bottom-menu d-md-none">
      <div class="container">
         <div class="row row-cols-5">
            <div class="col">
               <a href="#">
                  <div class="aq-bottom-menu-item">
                     <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                           <path d="M14.6336 6.77452L8.38359 0.374602C8.1492 0.13474 7.83138 0 7.5 0C7.16862 0 6.8508 0.13474 6.61641 0.374602L0.366414 6.77452C0.249777 6.89307 0.157319 7.03418 0.0944167 7.18964C0.0315145 7.34511 -0.000577075 7.51183 7.85428e-06 7.68011V15.36C7.85428e-06 15.5297 0.0658559 15.6925 0.183066 15.8126C0.300276 15.9326 0.459247 16 0.625007 16H5.625C5.79076 16 5.94973 15.9326 6.06694 15.8126C6.18415 15.6925 6.25 15.5297 6.25 15.36V10.8801H8.75V15.36C8.75 15.5297 8.81585 15.6925 8.93306 15.8126C9.05027 15.9326 9.20924 16 9.375 16H14.375C14.5408 16 14.6997 15.9326 14.8169 15.8126C14.9341 15.6925 15 15.5297 15 15.36V7.68011C15.0006 7.51183 14.9685 7.34511 14.9056 7.18964C14.8427 7.03418 14.7502 6.89307 14.6336 6.77452ZM13.75 14.72H10V10.2401C10 10.0703 9.93415 9.90755 9.81694 9.78753C9.69973 9.66751 9.54076 9.60008 9.375 9.60008H5.625C5.45924 9.60008 5.30027 9.66751 5.18306 9.78753C5.06585 9.90755 5 10.0703 5 10.2401V14.72H1.25001V7.68011L7.5 1.28019L13.75 7.68011V14.72Z" fill="#343330"></path>
                        </svg>
                     </i>
                     <span>Home</span>
                  </div>
               </a>
            </div>
            <div class="col">
               <a href="#">
                  <div class="aq-bottom-menu-item">
                     <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                           <path d="M15.9093 14.0873C14.7389 12.1146 12.9352 10.7001 10.8303 10.0295C11.8715 9.42526 12.6804 8.50449 13.1329 7.40862C13.5854 6.31276 13.6563 5.10239 13.3349 3.9634C13.0135 2.82441 12.3174 1.81978 11.3537 1.10378C10.3899 0.387776 9.2117 0 8 0C6.7883 0 5.6101 0.387776 4.64633 1.10378C3.68257 1.81978 2.98653 2.82441 2.6651 3.9634C2.34368 5.10239 2.41464 6.31276 2.8671 7.40862C3.31955 8.50449 4.12848 9.42526 5.16965 10.0295C3.06476 10.6993 1.26112 12.1138 0.0907097 14.0873C0.0477887 14.1555 0.0193195 14.2314 0.00698187 14.3106C-0.00535579 14.3897 -0.00131202 14.4704 0.0188746 14.548C0.0390612 14.6256 0.0749818 14.6984 0.124517 14.7623C0.174052 14.8261 0.236198 14.8796 0.307289 14.9196C0.37838 14.9597 0.456975 14.9854 0.538437 14.9954C0.6199 15.0053 0.702579 14.9992 0.781598 14.9775C0.860616 14.9558 0.934373 14.9189 0.998516 14.8689C1.06266 14.819 1.11589 14.757 1.15507 14.6866C2.6029 12.2472 5.16197 10.7907 8 10.7907C10.838 10.7907 13.3971 12.2472 14.8449 14.6866C14.8841 14.757 14.9373 14.819 15.0015 14.8689C15.0656 14.9189 15.1394 14.9558 15.2184 14.9775C15.2974 14.9992 15.3801 15.0053 15.4616 14.9954C15.543 14.9854 15.6216 14.9597 15.6927 14.9196C15.7638 14.8796 15.8259 14.8261 15.8755 14.7623C15.925 14.6984 15.9609 14.6256 15.9811 14.548C16.0013 14.4704 16.0054 14.3897 15.993 14.3106C15.9807 14.2314 15.9522 14.1555 15.9093 14.0873ZM3.69646 5.39639C3.69646 4.56657 3.94886 3.7554 4.42174 3.06543C4.89462 2.37547 5.56674 1.83771 6.35311 1.52015C7.13948 1.2026 8.00478 1.11951 8.83958 1.2814C9.67438 1.44329 10.4412 1.84288 11.0431 2.42965C11.6449 3.01641 12.0548 3.764 12.2208 4.57786C12.3869 5.39173 12.3017 6.23533 11.976 7.00197C11.6502 7.76862 11.0986 8.42388 10.3909 8.8849C9.6832 9.34592 8.85116 9.59199 8 9.59199C6.85901 9.5908 5.76509 9.14838 4.95829 8.36181C4.15148 7.57524 3.69768 6.50876 3.69646 5.39639Z" fill="#343330"></path>
                        </svg>
                     </i>
                     <span>Account</span>
                  </div>
               </a>
            </div>
            <div class="col">
               <a href="#">
                  <div class="aq-bottom-menu-item">
                     <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                           <path d="M16 5C16.0003 4.94189 15.9925 4.88403 15.9769 4.82812L14.8731 0.90625C14.7989 0.646027 14.6438 0.417159 14.431 0.253823C14.2182 0.0904875 13.959 0.00144761 13.6923 0H2.30769C2.04095 0.00144761 1.78182 0.0904875 1.56901 0.253823C1.3562 0.417159 1.20112 0.646027 1.12692 0.90625L0.0238466 4.82812C0.00795568 4.88399 -7.25706e-05 4.94185 4.94245e-07 5V6.25C4.94245e-07 6.73514 0.111216 7.21362 0.32484 7.64754C0.538463 8.08147 0.848627 8.45892 1.23077 8.75V14.375C1.23077 14.5408 1.2956 14.6997 1.41101 14.8169C1.52642 14.9342 1.68294 15 1.84615 15H14.1538C14.317 15 14.4736 14.9342 14.589 14.8169C14.7044 14.6997 14.7692 14.5408 14.7692 14.375V8.75C15.1514 8.45892 15.4615 8.08147 15.6751 7.64754C15.8888 7.21362 16 6.73514 16 6.25V5ZM2.30769 1.25H13.6923L14.5708 4.375H1.43154L2.30769 1.25ZM6.15384 5.625H9.84615V6.25C9.84615 6.74728 9.65164 7.22419 9.30542 7.57583C8.9592 7.92746 8.48963 8.125 8 8.125C7.51037 8.125 7.04079 7.92746 6.69457 7.57583C6.34835 7.22419 6.15384 6.74728 6.15384 6.25V5.625ZM4.92307 5.625V6.25C4.92296 6.57243 4.84099 6.88938 4.68507 7.17023C4.52915 7.45109 4.30455 7.68637 4.03297 7.85334C3.76139 8.02031 3.452 8.11333 3.13469 8.12342C2.81738 8.13351 2.50287 8.06033 2.22154 7.91094C2.17873 7.87709 2.13164 7.84924 2.08154 7.82812C1.82083 7.65861 1.60627 7.42524 1.4576 7.14947C1.30894 6.8737 1.23093 6.5644 1.23077 6.25V5.625H4.92307ZM13.5385 13.75H2.46154V9.3125C2.66412 9.35398 2.87026 9.37491 3.07692 9.375C3.5546 9.375 4.02572 9.26205 4.45296 9.04508C4.88021 8.82812 5.25185 8.51311 5.53846 8.125C5.82506 8.51311 6.19671 8.82812 6.62395 9.04508C7.0512 9.26205 7.52232 9.375 8 9.375C8.47767 9.375 8.94879 9.26205 9.37604 9.04508C9.80328 8.82812 10.1749 8.51311 10.4615 8.125C10.7481 8.51311 11.1198 8.82812 11.547 9.04508C11.9743 9.26205 12.4454 9.375 12.9231 9.375C13.1297 9.37491 13.3359 9.35398 13.5385 9.3125V13.75ZM13.9177 7.82812C13.8682 7.84928 13.8217 7.87686 13.7792 7.91016C13.4979 8.0597 13.1834 8.13304 12.866 8.12307C12.5487 8.11311 12.2392 8.0202 11.9675 7.85329C11.6959 7.68639 11.4712 7.45115 11.3152 7.1703C11.1591 6.88944 11.0771 6.57247 11.0769 6.25V5.625H14.7692V6.25C14.769 6.56447 14.6909 6.87382 14.542 7.1496C14.3932 7.42537 14.1785 7.6587 13.9177 7.82812Z" fill="#343330"></path>
                        </svg>
                     </i>
                     <span>Shop</span>
                  </div>
               </a>
            </div>
            <div class="col">
               <div class="aq-bottom-menu-item">
                  <button class="p-relative">
                     <span class="count-box">3</span>
                     <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                           <path d="M13.0179 0C11.3585 0 9.90563 0.693914 9 1.86685C8.09437 0.693914 6.64152 0 4.98214 0C3.66125 0.00144779 2.39489 0.512355 1.46088 1.42064C0.52687 2.32892 0.00148881 3.56039 0 4.84489C0 10.3149 8.34027 14.7425 8.69545 14.9254C8.78906 14.9744 8.8937 15 9 15C9.1063 15 9.21094 14.9744 9.30455 14.9254C9.65973 14.7425 18 10.3149 18 4.84489C17.9985 3.56039 17.4731 2.32892 16.5391 1.42064C15.6051 0.512355 14.3387 0.00144779 13.0179 0ZM9 13.6595C7.53268 12.828 1.28571 9.04041 1.28571 4.84489C1.28699 3.89193 1.67684 2.97835 2.36978 2.3045C3.06272 1.63065 4.00218 1.25154 4.98214 1.25029C6.54509 1.25029 7.85732 2.05986 8.40536 3.36017C8.45379 3.47483 8.53618 3.57289 8.64206 3.64191C8.74794 3.71093 8.87253 3.74778 9 3.74778C9.12747 3.74778 9.25206 3.71093 9.35794 3.64191C9.46382 3.57289 9.54621 3.47483 9.59464 3.36017C10.1427 2.05752 11.4549 1.25029 13.0179 1.25029C13.9978 1.25154 14.9373 1.63065 15.6302 2.3045C16.3232 2.97835 16.713 3.89193 16.7143 4.84489C16.7143 9.03416 10.4657 12.8272 9 13.6595Z" fill="#343330"></path>
                        </svg>
                     </i>
                  </button>
                  <span>Wishlist</span>
               </div>
            </div>
            <div class="col">
               <div class="aq-bottom-menu-item aq-cart-btn">
                  <button class="p-relative">
                     <span class="count-box">3</span>
                     <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                           <path d="M15.6923 0H1.30769C0.960871 0 0.628254 0.13409 0.383014 0.372773C0.137774 0.611456 0 0.935179 0 1.27273V12.7273C0 13.0648 0.137774 13.3885 0.383014 13.6272C0.628254 13.8659 0.960871 14 1.30769 14H15.6923C16.0391 14 16.3717 13.8659 16.617 13.6272C16.8622 13.3885 17 13.0648 17 12.7273V1.27273C17 0.935179 16.8622 0.611456 16.617 0.372773C16.3717 0.13409 16.0391 0 15.6923 0ZM15.6923 12.7273H1.30769V1.27273H15.6923V12.7273ZM12.4231 3.81818C12.4231 4.83083 12.0098 5.802 11.274 6.51804C10.5383 7.23409 9.54046 7.63636 8.5 7.63636C7.45954 7.63636 6.46169 7.23409 5.72597 6.51804C4.99025 5.802 4.57692 4.83083 4.57692 3.81818C4.57692 3.64941 4.64581 3.48755 4.76843 3.3682C4.89105 3.24886 5.05736 3.18182 5.23077 3.18182C5.40418 3.18182 5.57049 3.24886 5.69311 3.3682C5.81573 3.48755 5.88462 3.64941 5.88462 3.81818C5.88462 4.49328 6.16016 5.14072 6.65064 5.61809C7.14112 6.09546 7.80636 6.36364 8.5 6.36364C9.19364 6.36364 9.85888 6.09546 10.3494 5.61809C10.8398 5.14072 11.1154 4.49328 11.1154 3.81818C11.1154 3.64941 11.1843 3.48755 11.3069 3.3682C11.4295 3.24886 11.5958 3.18182 11.7692 3.18182C11.9426 3.18182 12.109 3.24886 12.2316 3.3682C12.3542 3.48755 12.4231 3.64941 12.4231 3.81818Z" fill="#343330"></path>
                        </svg>
                     </i>
                  </button>
                  <span>Cart</span>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- bottom-sticky header -->

   <!-- live sales -->
   <div class="product-details-live-sales-box">
      <button class="product-details-live-sales-close">
         <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
         <path d="M8.75 0.75L0.75 8.75M0.75 0.75L8.75 8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
         </svg>
      </button>
      <div class="product-details-live-sales-wrapper">
         <div class="product-details-live-sales-img">
            <img src="images/front-img-2.jpg" alt="">
         </div>

         <div class="product-details-live-sales-content">
            <p class="product-details-live-sales-user">
               <strong>Cocoon Crew in Alpaca</strong> <span>purchased</span>
            </p>
            <h4 class="product-details-live-sales-title">Short-Sleeve Tight Crop</h4>

            <div class="product-details-live-sales-meta">
               <span class="product-details-live-sales-time">27 minutes ago</span>
               <span class="product-details-live-sales-verified">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <g clip-path="url(#clip0_1919_2)">
                     <path d="M12.8327 7C12.8327 3.77834 10.221 1.16667 6.99935 1.16667C3.77769 1.16667 1.16602 3.77834 1.16602 7C1.16602 10.2217 3.77769 12.8333 6.99935 12.8333C10.221 12.8333 12.8327 10.2217 12.8327 7Z" stroke="currentColor"></path>
                     <path d="M4.66602 7.43751C4.66602 7.43751 5.59935 7.96981 6.06602 8.75001C6.06602 8.75001 7.46602 5.68751 9.33268 4.66667" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                     <clipPath id="clip0_1919_2">
                        <rect width="14" height="14" fill="currentColor"></rect>
                     </clipPath>
                  </defs>
                  </svg> Verified
               </span>
            </div>
         </div>
      </div>
      <div class="product-details-live-sales-progress"></div>
   </div>
   <!-- live sales -->


   <header>

      <!-- header area start -->
      <div class="aq-header-area aq-header-style-4 header-transparent">
         <div class="container container-1850">
            <div class="row align-items-center">
               <div class="col-4 d-xl-none">
                  <div class="aq-header-bar-wrap">
                     <button class="aq-header-bar aq-offcanvas-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                     </button>
                  </div>
               </div>
               <div class="col-xl-2 col-4">
                  <div class="aq-header-logo text-center text-xl-start">
                     <a href="index.html"><img data-width="120" src="images/logo.png" alt=""></a>
                  </div>
               </div>
               <div class="col-xl-7 d-none d-xl-block">
                  <div class="aq-header-menu menu-height-62 aq-header-dropdown menu-black text-center">
                     <nav class="aq-mobile-menu-active">
                        <ul>
                           <li class="has-dropdown">
                              <a href="index.html">Home</a>
                              <div class="aq-megamenu-wrap mega-menu">
                                 <div class="aq-megamenu-img-wrap">
                                    <div class="container">
                                       <div class="row row-cols-xl-5 row-cols-1">
                                          <div class="col">
                                             <div class="aq-megamenu-img-item mb-25">
                                                <a href="index.html">
                                                   <div class="aq-megamenu-img">
                                                      <img src="images/menu-1.jpg" alt="">
                                                   </div>
                                                   <span class="aq-megamenu-img-title">Fashion v1</span>
                                                </a>
                                             </div>
                                          </div>
                                          <div class="col">
                                             <div class="aq-megamenu-img-item mb-25">
                                                <a href="index-fashion-v2.html">
                                                   <div class="aq-megamenu-img">
                                                      <img src="images/menu-2.jpg" alt="">
                                                   </div>
                                                   <span class="aq-megamenu-img-title">Fashion v2</span>
                                                </a>
                                             </div>
                                          </div>
                                          <div class="col">
                                             <div class="aq-megamenu-img-item mb-25">
                                                <a href="index-fashion-v3.html">
                                                   <div class="aq-megamenu-img">
                                                      <img src="images/menu-3.jpg" alt="">
                                                   </div>
                                                   <span class="aq-megamenu-img-title">Fashion v3</span>
                                                </a>
                                             </div>
                                          </div>
                                          <div class="col">
                                             <div class="aq-megamenu-img-item mb-25">
                                                <a href="index-electronics.html">
                                                   <div class="aq-megamenu-img">
                                                      <img src="images/menu-4.jpg" alt="">
                                                   </div>
                                                   <span class="aq-megamenu-img-title">Electronics</span>
                                                </a>
                                             </div>
                                          </div>
                                          <div class="col">
                                             <div class="aq-megamenu-img-item mb-25">
                                                <a href="index-cosmetics.html">
                                                   <div class="aq-megamenu-img">
                                                      <img src="images/menu-5.jpg" alt="">
                                                   </div>
                                                   <span class="aq-megamenu-img-title">Cosmetics</span>
                                                </a>
                                             </div>
                                          </div>
                                          <div class="col">
                                             <div class="aq-megamenu-img-item mb-25">
                                                <a href="index-furniture.html">
                                                   <div class="aq-megamenu-img">
                                                      <img src="images/menu-6.jpg" alt="">
                                                   </div>
                                                   <span class="aq-megamenu-img-title">Furniture</span>
                                                </a>
                                             </div>
                                          </div>
                                          <div class="col">
                                             <div class="aq-megamenu-img-item mb-25">
                                                <a href="index-medical.html">
                                                   <div class="aq-megamenu-img">
                                                      <img src="images/menu-7.jpg" alt="">
                                                   </div>
                                                   <span class="aq-megamenu-img-title">Medical</span>
                                                </a>
                                             </div>
                                          </div>
                                          <div class="col">
                                             <div class="aq-megamenu-img-item mb-25">
                                                <a href="index-cycle.html">
                                                   <div class="aq-megamenu-img">
                                                      <img src="images/menu-8.jpg" alt="">
                                                   </div>
                                                   <span class="aq-megamenu-img-title">Cycle</span>
                                                </a>
                                             </div>
                                          </div>
                                          <div class="col">
                                             <div class="aq-megamenu-img-item mb-25">
                                                <a href="index-grocery.html">
                                                   <div class="aq-megamenu-img">
                                                      <img src="images/menu-9.jpg" alt="">
                                                   </div>
                                                   <span class="aq-megamenu-img-title">Grocery</span>
                                                </a>
                                             </div>
                                          </div>
                                          <div class="col">
                                             <div class="aq-megamenu-img-item mb-25">
                                                <a href="index-hand-bags.html">
                                                   <div class="aq-megamenu-img">
                                                      <img src="images/menu-10.jpg" alt="">
                                                   </div>
                                                   <span class="aq-megamenu-img-title">Hand Bag</span>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li class="has-dropdown">
                              <a href="product-default.html">Shop</a>
                              <div class="aq-megamenu-wrap mega-menu">
                                 <div class="aq-megamenu-shop-wrap">
                                    <div class="container">
                                       <div class="row">
                                          <div class="col-xxl-2 col-xl-2">
                                             <div class="aq-megamenu-shop-menu aq-megamenu-space-1">
                                                <h4 class="aq-megamenu-title">Shop layouts</h4>
                                                <ul>
                                                   <li><a href="product-default.html">Default</a></li>
                                                   <li><a href="product-full-width.html">Full Width</a></li>
                                                   <li><a href="product-left-sidebar.html">Left Sidebar</a></li>
                                                   <li><a href="product-right-sidebar.html">Right Sidebar</a></li>
                                                   <li><a href="product-filter-top.html">Filter Top</a></li>
                                                   <li><a href="product-filter-canvas.html">Filter Canvas</a></li>
                                                   <li><a href="product-filter-subcollection.html">Sub collection</a></li>
                                                   <li><a href="categories.html">All Categories</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                          <div class="col-xxl-2 col-xl-2">
                                             <div class="aq-megamenu-shop-menu aq-megamenu-space-2">
                                                <h4 class="aq-megamenu-title">Shop Pages</h4>
                                                <ul>
                                                   <li><a href="product-all-categories.html">Categories List v1</a></li>
                                                   <li><a href="product-pagination.html">Pagination links</a></li>
                                                   <li><a href="product-loadmore.html">Pagination loadmore</a></li>
                                                   <li><a href="product-infinite-scrolling.html">Infinite scrolling</a></li>
                                                   <li><a href="product-sidebar.html">Filter sidebar</a></li>
                                                   <li><a href="product-filter-hidden.html">Filter hidden</a></li>
                                                   <li><a href="product-filter-brandcollection.html">Brands collection</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                          <div class="col-xxl-2 col-xl-2">
                                             <div class="aq-megamenu-shop-menu aq-megamenu-space-3">
                                                <h4 class="aq-megamenu-title">Product Cards</h4>
                                                <ul>
                                                   <li><a href="product-card-v1.html">Product Card v1</a></li>
                                                   <li><a href="product-card-v2.html">Product Card v2</a></li>
                                                   <li><a href="product-card-v3.html">Product Card v3</a></li>
                                                   <li><a href="product-card-v4.html">Product Card v4</a></li>
                                                   <li><a href="product-card-v5.html">Product Card v5</a></li>
                                                   <li><a href="product-card-v6.html">Product Card v6</a></li>
                                                   <li><a href="product-card-v7.html">Product Card v7</a></li>
                                                   <li><a href="product-card-v8.html">Product Card v8</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                          <div class="col-xxl-3 col-xl-2">
                                             <div class="aq-megamenu-shop-menu aq-megamenu-space-4">
                                                <h4 class="aq-megamenu-title">Woo Pages</h4>
                                                <ul>
                                                   <li><a href="dashboard.html">My Account</a></li>
                                                   <li><a href="cart.html">Shopping Cart</a></li>
                                                   <li><a href="wishlist.html">WishList</a></li>
                                                   <li><a href="login.html">Login/Register</a></li>
                                                   <li><a href="forget-password.html">Forget Password</a></li>
                                                   <li><a href="order.html">Order Tracking</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                          <div class="col-xxl-3 col-xl-4">
                                             <div class="aq-megamenu-shop-thumb-wrap aq-megamenu-space-5">
                                                <div class="row gx-10 row-cols-xl-2 row-cols-2">
                                                   <div class="col">
                                                      <div class="aq-megamenu-shop-thumb mb-10">
                                                         <img src="images/img-1.jpg" alt="">
                                                         <a class="aq-megamenu-shop-cat" href="categories.html">Woman</a>
                                                      </div>
                                                   </div>
                                                   <div class="col">
                                                      <div class="aq-megamenu-shop-thumb mb-10">
                                                         <img src="images/img-2.jpg" alt="">
                                                         <a class="aq-megamenu-shop-cat" href="categories.html">Man</a>
                                                      </div>
                                                   </div>
                                                   <div class="col">
                                                      <div class="aq-megamenu-shop-thumb mb-10">
                                                         <img src="images/img-3.jpg" alt="">
                                                         <a class="aq-megamenu-shop-cat" href="categories.html">Trending</a>
                                                      </div>
                                                   </div>
                                                   <div class="col">
                                                      <div class="aq-megamenu-shop-thumb mb-10">
                                                         <img src="images/img-4.jpg" alt="">
                                                         <a class="aq-megamenu-shop-cat" href="categories.html">Accessories</a>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li class="has-dropdown">
                              <a href="product-details-default.html">Products</a>
                              <div class="aq-megamenu-wrap mega-menu">
                                 <div class="aq-megamenu-product-wrap">
                                    <div class="container container-1550 p-0">
                                       <div class="row">
                                          <div class="col-xxl-3 col-xl-3">
                                             <div class="aq-megamenu-shop-menu aq-megamenu-space-2-1">
                                                <h4 class="aq-megamenu-title">Product Layouts</h4>
                                                <ul>
                                                   <li><a href="product-details-default.html">Product default</a></li>
                                                   <li><a href="product-details-grid-v1.html">Product grid v1</a></li>
                                                   <li><a href="product-details-grid-v2.html">Product grid v2</a></li>
                                                   <li><a href="product-details-grid-full.html">Full with grid v3</a></li>
                                                   <li><a href="product-details-stacked.html">Product stacked</a></li>
                                                   <li><a href="product-details-right-thumbnails.html">Product right thumbnails</a></li>
                                                   <li><a href="product-details-bottom-thumbnails.html">Product bottom thumbnails</a></li>
                                                   <li><a href="product-details-accordion.html">Product description accordion</a></li>
                                                   <li><a href="product-details-list.html">Product description list</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                          <div class="col-xxl-3 col-xl-3">
                                             <div class="aq-megamenu-shop-menu aq-megamenu-space-2-2">
                                                <h4 class="aq-megamenu-title">Product Type</h4>
                                                <ul>
                                                   <li><a href="product-details-simple.html">Product simple</a></li>
                                                   <li><a href="product-details-on-sale.html">Product on sale</a></li>
                                                   <li><a href="product-details-deals.html">Product countdown</a></li>
                                                   <li><a href="product-details-affiliate.html">Product affiliate</a></li>
                                                   <li><a href="product-details-group.html">Product group</a></li>
                                                   <li><a href="product-details-default.html">Product variable</a></li>
                                                   <li><a href="product-details-swatch-color.html">Product color swatch</a></li>
                                                   <li><a href="product-details-image-swatch-color.html">Product image swatch</a></li>
                                                   <li><a href="product-details-dropdown.html">Product variable Dropdown</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                          <div class="col-xxl-4 col-xl-4">
                                             <div class="aq-megamenu-shop-menu aq-megamenu-space-2-3">
                                                <h4 class="aq-megamenu-title">Product Cards</h4>
                                                <div class="row">
                                                   <div class="col-xxl-5 col-xl-5">
                                                      <ul>
                                                         <li><a href="product-details-video.html">Products Video</a></li>
                                                         <li><a href="product-details-radio.html">Products Radio</a></li>
                                                         <li><a href="product-details-bought-1.html">Bought Together 1</a></li>
                                                         <li><a href="product-details-bought-2.html">Bought Together 2</a></li>
                                                         <li><a href="product-details-up-sale.html">Up Sell</a></li>
                                                         <li><a href="product-details-pre-order.html">Pre-orders</a></li>
                                                         <li><a href="product-details-customer-note.html">Customer Note</a></li>
                                                         <li><a href="product-details-out-of-stock.html">Out Of Stock</a></li>
                                                         <li><a href="product-details-pickup-product.html">Product Pickup</a></li>
                                                      </ul>
                                                   </div>
                                                   <div class="col-xxl-5 col-xl-6">
                                                      <ul>
                                                         <li><a href="product-details-zoom.html">Product zoom window</a></li>
                                                         <li><a href="product-details-inner-zoom.html">Product inner zoom</a></li>
                                                         <li><a href="product-details-size-guide.html">Product size guide</a></li>
                                                         <li><a href="product-details-live-sales-notification.html">Live Sales Notification</a></li>
                                                         <li><a href="product-details-live-visitor.html">Counter live visitors</a></li>
                                                         <li><a href="product-details-linked-variation.html">Linked Variations</a></li>
                                                         <li><a href="product-details-sales-count.html">Recent Sales Count</a></li>
                                                         <li><a href="product-details-grid-full.html">Product info Offcanvas</a></li>
                                                      </ul>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="col-xxl-2 col-xl-2">
                                             <div class="aq-megamenu-shop-menu aq-megamenu-space-2-4">
                                                <h4 class="aq-megamenu-title pl-0 mb-30">Recent Products</h4>
                                                <div class="col">
                                                   <div class="aq-megamenu-shop-thumb overlay p-relative">
                                                      <img src="images/img-5.jpg" alt="">
                                                      <div class="aq-megamenu-shop-thumb-content">
                                                         <span class="aq-megamenu-shop-thumb-subtitle mb-10">Back In Stock</span>
                                                         <h4 class="aq-megamenu-shop-thumb-title mb-15"><a href="product-details-default.html">High-Top Design</a></h4>
                                                         <a class="aq-megamenu-shop-btn w-100" href="product-details-default.html">Shop Save</a>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="aq-megamenu-product-slider text-start pt-40">
                                          <h4 class="aq-megamenu-title pb-10">Pre-Made Product Pages</h4>
                                          <div class="row row-cols-xl-5 row-cols-1">
                                             <div class="col">
                                                <div class="aq-megamenu-img-item text-center">
                                                   <a href="product-details-radio.html">
                                                      <div class="aq-megamenu-img">
                                                         <img src="images/product-1_4.jpg" alt="">
                                                      </div>
                                                      <span class="aq-megamenu-img-title">Drawer Sidebar</span>
                                                   </a>
                                                </div>
                                             </div>
                                             <div class="col">
                                                <div class="aq-megamenu-img-item text-center">
                                                   <a href="product-default.html">
                                                      <div class="aq-megamenu-img">
                                                         <img src="images/product-2_4.jpg" alt="">
                                                      </div>
                                                      <span class="aq-megamenu-img-title">Classic</span>
                                                   </a>
                                                </div>
                                             </div>
                                             <div class="col">
                                                <div class="aq-megamenu-img-item text-center">
                                                   <a href="product-details-grid-full.html">
                                                      <div class="aq-megamenu-img">
                                                         <img src="images/product-3_2.jpg" alt="">
                                                      </div>
                                                      <span class="aq-megamenu-img-title">Full with grid</span>
                                                   </a>
                                                </div>
                                             </div>
                                             <div class="col">
                                                <div class="aq-megamenu-img-item text-center">
                                                   <a href="product-details-right-thumbnails.html">
                                                      <div class="aq-megamenu-img">
                                                         <img src="images/product-4.jpg" alt="">
                                                      </div>
                                                      <span class="aq-megamenu-img-title">Right Thumbnails</span>
                                                   </a>
                                                </div>
                                             </div>
                                             <div class="col">
                                                <div class="aq-megamenu-img-item text-center">
                                                   <a href="product-details-wide-slider.html">
                                                      <div class="aq-megamenu-img">
                                                         <img src="images/product-5.jpg" alt="">
                                                      </div>
                                                      <span class="aq-megamenu-img-title">Wide Slider</span>
                                                   </a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li class="has-dropdown">
                              <a href="#">Pages</a>
                              <ul class="aq-submenu submenu">
                                 <li><a href="about.html">About Us</a></li>
                                 <li class="has-dropdown">
                                    <a href="dashboard.html">Dashboard</a>
                                    <ul class="aq-submenu submenu">
                                       <li><a href="dashboard.html">Dashboard</a></li>
                                       <li><a href="dashboard-order.html">Order</a></li>
                                       <li><a href="dashboard-order-details.html">Order Details</a></li>
                                       <li><a href="dashboard-downloads.html">Downloads</a></li>
                                       <li><a href="dashboard-invoice.html">Invoice</a></li>
                                       <li><a href="dashboard-invoice-details.html">Invoice Details</a></li>
                                       <li><a href="dashboard-return.html">Return</a></li>
                                       <li><a href="dashboard-return-request.html">Return Request</a></li>
                                       <li><a href="dashboard-return-product.html">Return Product</a></li>
                                       <li><a href="dashboard-review.html">Review</a></li>
                                       <li><a href="dashboard-wishlist.html">Dashboard Wishlist</a></li>
                                       <li><a href="dashboard-offers.html">Offers</a></li>
                                       <li><a href="dashboard-profile.html">Profile</a></li>
                                       <li><a href="dashboard-security.html">Security</a></li>
                                       <li><a href="dashboard-address.html">Address</a></li>
                                       <li><a href="login.html">Logout</a></li>
                                    </ul>
                                 </li>
                                 <li><a href="product-brands.html">Brands</a></li>
                                 <li><a href="faq.html">FAQ</a></li>
                                 <li><a href="store.html">Our Store</a></li>
                                 <li><a href="vendor-stores.html">Vendor</a></li>
                                 <li><a href="vendor-details.html">Vendor Details</a></li>
                                 <li><a href="privacy-policy.html">Terms of use</a></li>
                                 <li><a href="error.html">404 Page</a></li>
                                 <li><a href="comming-soon.html">Coming Soon</a></li>
                              </ul>
                           </li>
                           <li class="has-dropdown">
                              <a href="blog-list.html">Blog</a>
                              <ul class="aq-submenu submenu">
                                 <li><a href="blog-list.html">Blog List</a></li>
                                 <li><a href="blog-grid.html">Blog Grid</a></li>
                                 <li><a href="blog-standard.html">Blog Standard</a></li>
                                 <li><a href="blog-details.html">Blog Details v1</a></li>
                                 <li><a href="blog-details-no-sidebar.html">Blog Details v2</a></li>
                              </ul>
                           </li>
                           <li>
                              <a href="contact.html">Contact</a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div class="col-xl-3 col-4">
                  <div class="aq-header-right-options text-end">
                     <ul>
                        <li class="aq-header-top-search">
                           <button class="aq-search-toggle">
                              <i>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.7504 18.7499L14.4004 14.3999M16.75 8.75C16.75 13.1683 13.1683 16.75 8.75 16.75C4.33172 16.75 0.75 13.1683 0.75 8.75C0.75 4.33172 4.33172 0.75 8.75 0.75C13.1683 0.75 16.75 4.33172 16.75 8.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>
                              </i>
                           </button>
                        </li>
                        <li class="aq-header-top-account d-none d-md-inline-block">
                           <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                              <i>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                    <path d="M16.212 18.75C16.212 15.267 12.747 12.45 8.481 12.45C4.215 12.45 0.75 15.267 0.75 18.75M12.9805 5.25C12.9805 7.73528 10.9657 9.75 8.48047 9.75C5.99519 9.75 3.98047 7.73528 3.98047 5.25C3.98047 2.76472 5.99519 0.75 8.48047 0.75C10.9657 0.75 12.9805 2.76472 12.9805 5.25Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>
                              </i>
                           </button>
                        </li>
                        <li class="aq-header-top-wishlist d-none d-md-inline-block">
                           <button class="aq-wishlist-btn">
                              <span class="count-box">2</span>
                              <i>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M6.50726 4.80303C5.44195 5.14334 4.68503 6.09974 4.59044 7.22502M10.4856 18.6038C12.6562 17.2679 14.6755 15.6957 16.5073 13.9152C17.7951 12.633 18.7756 11.0698 19.3735 9.3454C20.4494 6.00032 19.1927 2.17084 15.6755 1.03753C13.827 0.442448 11.8081 0.782566 10.2505 1.95149C8.69225 0.783989 6.67412 0.443991 4.82552 1.03753C1.30833 2.17084 0.0425004 6.00032 1.11845 9.3454C1.71636 11.0698 2.69679 12.633 3.98465 13.9152C5.81647 15.6957 7.83575 17.2679 10.0064 18.6038L10.2414 18.75L10.4856 18.6038Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>
                              </i>
                           </button>
                        </li>
                        <li class="aq-header-top-cart aq-cart-btn">
                           <button>
                              <span class="count-box">3</span>
                              <i>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M5.48681 5.07041C5.48681 2.68433 7.4211 0.750039 9.80717 0.750039C10.9562 0.74517 12.0598 1.1982 12.874 2.00895C13.6882 2.81971 14.1459 3.92139 14.1458 5.07041M6.84107 9.57384H6.88684M12.6721 9.57388H12.7179M5.62368 19.972H13.9715C17.0379 19.972 19.3903 18.8645 18.7221 14.4068L17.944 8.3656C17.5321 6.14134 16.1134 5.29008 14.8685 5.29008H4.69004C3.42688 5.29008 2.0905 6.20542 1.61453 8.3656L0.836493 14.4068C0.268988 18.361 2.55732 19.972 5.62368 19.972Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>
                              </i>
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- header area end -->

   </header>
      
   <main>

      <!-- slider area start -->
      <div class="aqf-slider-area csm-slider-style">
         <div class="swiper aqf-slider-active p-relative">
            <div class="swiper-wrapper">
               <div class="swiper-slide">
                  <div class="aqf-slider-item p-relative" data-bg-color="#F5D9D7">
                     <div class="container">
                        <div class="row align-items-center">
                           <div class="col-xl-6 col-lg-5 col-md-6">
                              <div class="aqf-slider-content csm-slider-content z-index-1">
                                 <span class="aq-section-subtitle ff-satoshi-med mb-15">New Collection</span>
                                 <h3 class="aq-section-title ff-satoshi-bold fs-84 mb-30">Reveal the <br> beauty of Skin.</h3>
                                 <a class="aq-btn-link aq-btn-underline line-h-2" href="product-card-v5.html">
                                    Discover Now
                                    <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                          <path d="M0.75 5.75H10.75M10.75 5.75L5.75 0.75M10.75 5.75L5.75 10.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aqf-slider-thumb">
                        <img class="w-100" src="images/slider-2.png" alt="">
                     </div>
                  </div>
               </div>
               <div class="swiper-slide">
                  <div class="aqf-slider-item p-relative" data-bg-color="#F5D9D7">
                     <div class="container">
                        <div class="row align-items-center">
                           <div class="col-xl-6 col-lg-5 col-md-6">
                              <div class="aqf-slider-content csm-slider-content z-index-1">
                                 <span class="aq-section-subtitle ff-satoshi-med mb-15">Fresh Collection</span>
                                 <h3 class="aq-section-title ff-satoshi-bold fs-84 mb-30">Discover the <br> glow of Skin.</h3>
                                 <a class="aq-btn-link aq-btn-underline line-h-2" href="product-card-v5.html">
                                    Discover Now
                                    <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                          <path d="M0.75 5.75H10.75M10.75 5.75L5.75 0.75M10.75 5.75L5.75 10.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aqf-slider-thumb">
                        <img src="images/slider-1.png" alt="">
                     </div>
                  </div>
               </div>
               <div class="swiper-slide">
                  <div class="aqf-slider-item p-relative" data-bg-color="#F5D9D7">
                     <div class="container">
                        <div class="row align-items-center">
                           <div class="col-xl-6 col-lg-5 col-md-6">
                              <div class="aqf-slider-content csm-slider-content z-index-1">
                                 <span class="aq-section-subtitle ff-satoshi-med mb-15">Latest Edition</span>
                                 <h3 class="aq-section-title ff-satoshi-bold fs-84 mb-30">Unveil the <br> secret to Skin.</h3>
                                 <a class="aq-btn-link aq-btn-underline line-h-2" href="product-card-v5.html">
                                    Discover Now
                                    <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                          <path d="M0.75 5.75H10.75M10.75 5.75L5.75 0.75M10.75 5.75L5.75 10.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aqf-slider-thumb">
                        <img src="images/slider-3.png" alt="">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- slider area end -->

      <!-- categories area start -->
      <div class="aqf-categories-area csm-categories-style pt-80">
         <div class="container">
            <div class="aqf-categories-wrap mb-60 p-relative">
               <div class="aqf-categories-arrow">
                  <button class="aqf-categories-prev">
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                           <path d="M5.75 10.75L0.75 5.75L5.75 0.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                  </button>
                  <button class="aqf-categories-next">
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                           <path d="M0.75 10.75L5.75 5.75L0.75 0.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                  </button>
               </div>
               <div class="swiper aqf-categories-4-active">
                  <div class="swiper-wrapper">
                     <div class="swiper-slide">
                        <div class="aqf-categories-item text-center">
                           <a href="product-card-v5.html">
                              <div class="aqf-categories-img">
                                 <img src="images/category-1.jpg" alt="">
                              </div>
                              <span class="p-relative">Moisturizers<i>12</i></span>
                           </a>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="aqf-categories-item text-center">
                           <a href="product-card-v5.html">
                              <div class="aqf-categories-img">
                                 <img src="images/category-2.jpg" alt="">
                              </div>
                              <span class="p-relative">Essential Oils<i>8</i></span>
                           </a>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="aqf-categories-item text-center">
                           <a href="product-card-v5.html">
                              <div class="aqf-categories-img">
                                 <img src="images/category-3.jpg" alt="">
                              </div>
                              <span class="p-relative">Bodycare<i>5</i></span>
                           </a>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="aqf-categories-item text-center">
                           <a href="product-card-v5.html">
                              <div class="aqf-categories-img">
                                 <img src="images/category-4.jpg" alt="">
                              </div>
                              <span class="p-relative">Skincare<i>6</i></span>
                           </a>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="aqf-categories-item text-center">
                           <a href="product-card-v5.html">
                              <div class="aqf-categories-img">
                                 <img src="images/category-5.jpg" alt="">
                              </div>
                              <span class="p-relative">Makeup<i>9</i></span>
                           </a>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="aqf-categories-item text-center">
                           <a href="product-card-v5.html">
                              <div class="aqf-categories-img">
                                 <img src="images/category-6.jpg" alt="">
                              </div>
                              <span class="p-relative">Haircare<i>12</i></span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="elt-categories-cupon-text text-center">
               <p>Super discount for your first purchase <a href="product-details-deals.html">COUPON96</a> Use discount code in the checkout!</p>
            </div>
         </div>
      </div>
      <!-- categories area end -->

      <!-- stories area start -->
      <div class="csm-stories-area pt-95 pb-90">
         <div class="container">
            <div class="row">
               <div class="col-xl-12">
                  <div class="csm-stories-title-box aq-section-paragraph text-center mb-45">
                     <h4 class="aq-section-title ff-onest-bold fs-36 mb-15">Community Stories</h4>
                     <p>Express your style with our standout collection—fashion meets sophistication.</p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-3 col-md-6">
                  <div class="csm-stories-item p-relative fix mb-25">
                     <div class="csm-stories-video">
                        <video loop="" muted="" autoplay="" playsinline="">
                           <source src="media/cosmetic-1.mp4" type="video/mp4">
                        </video>
                     </div>
                     <div class="csm-stories-content-wrap d-inline-flex align-items-center">
                        <div class="csm-stories-thumb-sm">
                           <img src="images/img-1-sm.jpg" alt="">
                        </div>
                        <div class="csm-stories-content">
                           <h4 class="csm-stories-title"><a href="#">Colorstay Suede Lip...</a></h4>
                           <span>$164.00</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-md-6">
                  <div class="csm-stories-item p-relative fix mb-25">
                     <div class="csm-stories-video">
                        <video loop="" muted="" autoplay="" playsinline="">
                           <source src="media/cosmetic-2.mp4" type="video/mp4">
                        </video>
                     </div>
                     <div class="csm-stories-content-wrap d-inline-flex align-items-center">
                        <div class="csm-stories-thumb-sm">
                           <img src="images/img-2-sm.jpg" alt="">
                        </div>
                        <div class="csm-stories-content">
                           <h4 class="csm-stories-title"><a href="#">Revlon ColorStay Suede</a></h4>
                           <span>$99.00</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-md-6">
                  <div class="csm-stories-item p-relative fix mb-25">
                     <div class="csm-stories-video">
                        <video loop="" muted="" autoplay="" playsinline="">
                           <source src="media/cosmetic-3.mp4" type="video/mp4">
                        </video>
                     </div>
                     <div class="csm-stories-content-wrap d-inline-flex align-items-center">
                        <div class="csm-stories-thumb-sm">
                           <img src="images/img-2-sm.jpg" alt="">
                        </div>
                        <div class="csm-stories-content">
                           <h4 class="csm-stories-title"><a href="#">Ink Liquid Lipstick</a></h4>
                           <span>$159.00</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-md-6">
                  <div class="csm-stories-item p-relative fix mb-25">
                     <div class="csm-stories-video">
                        <video loop="" muted="" autoplay="" playsinline="">
                           <source src="media/cosmetic-4.mov" type="video/mp4">
                        </video>
                     </div>
                     <div class="csm-stories-content-wrap d-inline-flex align-items-center">
                        <div class="csm-stories-thumb-sm">
                           <img src="images/img-1-sm.jpg" alt="">
                        </div>
                        <div class="csm-stories-content">
                           <h4 class="csm-stories-title"><a href="#">Soft Matte Lip Cream</a></h4>
                           <span>$149.00</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- stories area end -->

      <!-- product area start -->
      <div class="aq-product-area csm-product-style">
         <div class="container">
            <div class="aq-product-top mb-50">
               <div class="row align-items-end">
                  <div class="col-md-8">
                     <div class="csm-product-title-box aq-section-paragraph text-center text-md-start">
                        <h4 class="aq-section-title ff-onest-bold fs-36 mb-15">Our Flash Deals</h4>
                        <p class="mb-0">Superior performance and customer satisfaction in one.</p>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="csm-product-btn text-center text-md-end">
                        <a class="aq-btn-white btn-square-bg btn-border-gray" href="product-card-v5.html">
                           See all Products
                           <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                 <path d="M10.7093 4.74984H0.75M10.7093 4.74984L6.69271 0.75M10.7093 4.74984L6.69271 8.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="aq-product-slide-wrap p-relative">
               <div class="aq-product-arrow">
                  <button class="aq-product-prev">
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                           <path d="M5.75 10.75L0.75 5.75L5.75 0.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                  </button>
                  <button class="aq-product-next">
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                           <path d="M0.75 10.75L5.75 5.75L0.75 0.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                  </button>
               </div>
               <div class="swiper aq-product-active">
                  <div class="swiper-wrapper">
                     <div class="swiper-slide">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-8%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-1.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-1-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$164.00</span></ins>
                                 <del><span class="aq-product-old-price">$900.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Blush Bold Blurring Powde</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#919191">Sold Out</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-2.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-2-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Luxe Length Nail Gloss</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#3C6951">Pre-Order</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-3.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-3-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Enriched Hand Wash</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-18%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-4.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-4-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$133.00</span></ins>
                                 <del><span class="aq-product-old-price">$299.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">LANEIGE Lip Sleeping Mask</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- product area end -->

      <!-- banner area start -->
      <div class="aqf-banner-2-area csm-banner-style pt-15 pb-70">
         <div class="container container-1850">
            <div class="row gx-15">
               <div class="col-xl-6">
                  <div class="aqf-banner-2-box p-relative mb-30">
                     <div class="aqf-banner-2-thumb">
                        <img class="w-100" src="images/banner-1.jpg" alt="">
                     </div>
                     <div class="aqf-banner-2-content">
                        <span class="aq-section-subtitle aq-uppercase mb-15">Cosmetics Collection</span>
                        <h4 class="aq-section-title ff-satoshi-bold fs-40 mb-20">Nourish with <br> Propolis skincare.</h4>
                        <a class="aq-btn-white btn-square-bg" href="product-card-v5.html">
                           Discover Now
                           <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                 <path d="M10.7093 4.74984H0.75M10.7093 4.74984L6.69271 0.75M10.7093 4.74984L6.69271 8.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6">
                  <div class="aqf-banner-2-box p-relative mb-30">
                     <div class="aqf-banner-2-thumb">
                        <img class="w-100" src="images/banner-2.jpg" alt="">
                     </div>
                     <div class="aqf-banner-2-content">
                        <span class="aq-section-subtitle aq-uppercase mb-15">Cosmetics Collection</span>
                        <h4 class="aq-section-title ff-satoshi-bold fs-40 mb-20">Foundation <br> & powder brush</h4>
                        <a class="aq-btn-white btn-square-bg" href="product-card-v5.html">
                           Discover Now
                           <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                 <path d="M10.7093 4.74984H0.75M10.7093 4.74984L6.69271 0.75M10.7093 4.74984L6.69271 8.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- banner area end -->

      <!-- product area start -->
      <div class="aq-product-area csm-product-style">
         <div class="container">
            <div class="aq-product-top">
               <div class="row align-items-end">
                  <div class="col-lg-6">
                     <div class="csm-product-title-box aq-section-paragraph text-center text-lg-start mb-50">
                        <h4 class="aq-section-title ff-onest-bold fs-36 mb-15">Our Flash Deals</h4>
                        <p class="mb-0">Superior performance and customer satisfaction in one.</p>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="csm-product-tab-btn text-center text-lg-end mb-50">
                        <ul class="nav nav-tab d-inline-flex" id="myTab" role="tablist">
                           <li class="nav-item" role="presentation">
                              <button class="nav-links active aq-tooltip-top" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                 All Collection
                                 <span class="aq-tooltip-item">26</span>
                              </button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-links aq-tooltip-top" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                 Trending
                                 <span class="aq-tooltip-item">28</span>
                              </button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-links aq-tooltip-top" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                 Beauty
                                 <span class="aq-tooltip-item">33</span>
                              </button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-links aq-tooltip-top" id="cosmetics-tab" data-bs-toggle="tab" data-bs-target="#cosmetics-tab-pane" type="button" role="tab" aria-controls="cosmetics-tab-pane" aria-selected="false">
                                 Cosmetics
                                 <span class="aq-tooltip-item">49</span>
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="tab-content" id="myTabContent">
               <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                  <div class="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-1">
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-8%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-5.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-5-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$164.00</span></ins>
                                 <del><span class="aq-product-old-price">$300.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Enriched Hand Wash</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#919191">Sold Out</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-6.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-6-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Lip Sleeping Mask</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#3C6951">Pre-Order</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-7.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-7-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Ultralip High Shine Lipstick</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-15%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-8.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-8-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$133.00</span></ins>
                                 <del><span class="aq-product-old-price">$900.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Pantherine Pro 20-Piece Brush Set</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                  <div class="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-1">
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-8%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-1.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-1-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$164.00</span></ins>
                                 <del><span class="aq-product-old-price">$600.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Blush Bold Blurring Powde</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#919191">Sold Out</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-2.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-2-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Luxe Length Nail Gloss</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#3C6951">Pre-Order</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-3.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-3-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Enriched Hand Wash</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-18%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-4.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-4-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$133.00</span></ins>
                                 <del><span class="aq-product-old-price">$300.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="#">LANEIGE Lip Sleeping Mask</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                  <div class="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-1">
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#3C6951">Pre-Order</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-7.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-7-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Ultralip High Shine Lipstick</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-18%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-8.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-8-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$133.00</span></ins>
                                 <del><span class="aq-product-old-price">$400.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Pantherine Pro 20-Piece Brush Set</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-17%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-5.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-5-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$164.00</span></ins>
                                 <del><span class="aq-product-old-price">$400.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="#">Enriched Hand Wash</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#919191">Sold Out</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-6.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-6-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Lip Sleeping Mask</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane fade" id="cosmetics-tab-pane" role="tabpanel" aria-labelledby="cosmetics-tab" tabindex="0">
                  <div class="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-1">
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-11%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-5.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-5-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$299.00</span></ins>
                                 <del><span class="aq-product-old-price">$900.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Enriched Hand Wash</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#919191">Sold Out</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-6.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-6-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="#">Lip Sleeping Mask</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#3C6951">Pre-Order</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-7.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-7-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Ultralip High Shine Lipstick</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-21%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="images/cosmetics-8.jpg" alt="">
                                 <img class="aq-img-hover lazyload" src="images/cosmetics-8-hover.jpg" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$169.00</span></ins>
                                 <del><span class="aq-product-old-price">$599.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Pantherine Pro 20-Piece Brush Set</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- product area end -->

      <!-- outfit area start -->
      <div class="aqf-bundle-area csm-bundle-style pt-60 pb-120">
         <div class="container">
            <div class="row gx-0">
               <div class="col-lg-6">
                  <div class="aqf-bundle-thumb">
                     <img class="w-100" src="images/img-1_1.jpg" alt="">
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="aqf-bundle-wrap">
                     <div class="aqf-bundle-title-box mb-30">
                        <span class="aq-section-subtitle ff-satoshi-med mb-10">Bundle and Save</span>
                        <h4 class="aq-section-title ff-satoshi-med fs-38 mb-0">Shop this look</h4>
                     </div>
                     <div class="aqf-bundle-details-wrap">
                        <div class="aq-cartmini-product-item d-flex align-items-center mb-25 pb-25">
                           <div class="aq-cartmini-product-thumbnail">
                              <img src="images/img-2_1.jpg" alt="">
                           </div>
                           <div class="aq-cartmini-product-summary-wrap">
                              <div class="aq-cartmini-product-summary d-flex justify-content-between align-items-end">
                                 <div class="aq-cartmini-product-summary-inner">
                                    <div class="aq-cartmini-product-ratting mb-5">
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#DCDCDC"></path>
                                          </svg>
                                       </span>
                                    </div>
                                    <h4 class="aq-product-title mb-15"><a href="product-details-group.html">Ribbed Tank Top - Orange</a></h4>
                                 </div>
                                 <div class="aq-cartmini-product-price-wrap">
                                    <span class="aq-cartmini-product-price">$99.00</span>
                                 </div>
                              </div>
                              <div class="aqf-bundle-select aq-select">
                                 <select>
                                    <option>Select an option</option>
                                    <option>Red</option>
                                    <option>Black</option>
                                    <option>Green</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="aq-cartmini-product-item d-flex align-items-center mb-25 pb-25">
                           <div class="aq-cartmini-product-thumbnail">
                              <img src="images/img-3_1.jpg" alt="">
                           </div>
                           <div class="aq-cartmini-product-summary-wrap">
                              <div class="aq-cartmini-product-summary d-flex justify-content-between align-items-end">
                                 <div class="aq-cartmini-product-summary-inner">
                                    <div class="aq-cartmini-product-ratting mb-5">
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#DCDCDC"></path>
                                          </svg>
                                       </span>
                                    </div>
                                    <h4 class="aq-product-title mb-15"><a href="product-details-group.html">Ribbed Tank Top - Orange</a></h4>
                                 </div>
                                  <div class="aq-cartmini-product-price-wrap">
                                    <span class="aq-cartmini-product-price">$44.00</span>
                                 </div>
                              </div>
                              <div class="aqf-bundle-select aq-select">
                                 <select>
                                    <option>Select an option</option>
                                    <option>Red</option>
                                    <option>Black</option>
                                    <option>Green</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="aq-cartmini-product-item d-flex align-items-center mb-25 pb-25">
                           <div class="aq-cartmini-product-thumbnail">
                              <img src="images/img-1_1.jpg" alt="">
                           </div>
                           <div class="aq-cartmini-product-summary-wrap">
                              <div class="aq-cartmini-product-summary d-flex justify-content-between align-items-end">
                                 <div class="aq-cartmini-product-summary-inner">
                                    <div class="aq-cartmini-product-ratting mb-5">
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#DCDCDC"></path>
                                          </svg>
                                       </span>
                                    </div>
                                    <h4 class="aq-product-title mb-15"><a href="product-details-group.html">Ribbed Tank Top - Orange</a></h4>
                                 </div>
                                 <div class="aq-cartmini-product-price-wrap">
                                    <span class="aq-cartmini-product-price">$59.00</span>
                                 </div>
                              </div>
                              <div class="aqf-bundle-select aq-select">
                                 <select>
                                    <option>Select an option</option>
                                    <option>Red</option>
                                    <option>Black</option>
                                    <option>Green</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aqf-bundle-box">
                        <a class="aq-btn-black btn-coffee-bg w-100 text-center" href="product-details-group.html">
                           Add Selected To Cart-$34.00
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- outfit area end -->

      <!-- blog area start -->
      <div class="aq-blog-area csm-blog-style pb-80">
         <div class="container">
            <div class="row">
               <div class="col-xl-12">
                  <div class="aq-blog-title-box text-center mb-40">
                     <span class="aq-section-subtitle ff-satoshi-reg mb-15">Our Blog & News</span>
                     <h4 class="aq-section-title ff-onest-bold fs-36">Latest News & Articles</h4>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-4 col-md-6">
                  <div class="aq-blog-item">
                     <div class="aq-blog-thumb p-relative">
                        <a href="blog-details.html"><img src="images/blog-1.jpg" alt=""></a>
                        <span class="aq-blog-meta-date">06 July, 2025</span>
                     </div>
                     <div class="aq-blog-content text-center">
                        <div class="aq-blog-meta-cat mb-15">
                           <i>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                 <path d="M4.12891 4.12988H4.13621M12.636 8.14182L8.14808 12.6297C8.03182 12.7461 7.89375 12.8384 7.74178 12.9014C7.58981 12.9644 7.42691 12.9969 7.26239 12.9969C7.09788 12.9969 6.93498 12.9644 6.78301 12.9014C6.63104 12.8384 6.49297 12.7461 6.37671 12.6297L1 7.25926V1H7.25926L12.636 6.37671C12.8691 6.61126 13 6.92854 13 7.25926C13 7.58998 12.8691 7.90727 12.636 8.14182Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </i>
                           <span>Fashion,</span>
                           <span>Lift Style,</span>
                           <span>News</span>
                        </div>
                        <h4 class="aq-blog-title">
                           <a href="blog-details.html">The 'Boomerang' Employees Returning After Quitting</a>
                        </h4>
                     </div>
                  </div>
               </div>
               <div class="col-xl-4 col-md-6">
                  <div class="aq-blog-item">
                     <div class="aq-blog-thumb p-relative">
                        <a href="blog-details.html"><img src="images/blog-2.jpg" alt=""></a>
                        <span class="aq-blog-meta-date">04 April, 2024</span>
                     </div>
                     <div class="aq-blog-content text-center">
                        <div class="aq-blog-meta-cat mb-15">
                           <i>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                 <path d="M4.12891 4.12988H4.13621M12.636 8.14182L8.14808 12.6297C8.03182 12.7461 7.89375 12.8384 7.74178 12.9014C7.58981 12.9644 7.42691 12.9969 7.26239 12.9969C7.09788 12.9969 6.93498 12.9644 6.78301 12.9014C6.63104 12.8384 6.49297 12.7461 6.37671 12.6297L1 7.25926V1H7.25926L12.636 6.37671C12.8691 6.61126 13 6.92854 13 7.25926C13 7.58998 12.8691 7.90727 12.636 8.14182Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </i>
                           <span>Fashion,</span>
                           <span>Lift Style,</span>
                           <span>News</span>
                        </div>
                        <h4 class="aq-blog-title">
                           <a href="blog-details.html">Fast fashion: How clothes are linked to climate change</a>
                        </h4>
                     </div>
                  </div>
               </div>
               <div class="col-xl-4 col-md-6">
                  <div class="aq-blog-item">
                     <div class="aq-blog-thumb p-relative">
                        <a href="blog-details.html"><img src="images/blog-3.jpg" alt=""></a>
                        <span class="aq-blog-meta-date">18 July, 2023</span>
                     </div>
                     <div class="aq-blog-content text-center">
                        <div class="aq-blog-meta-cat mb-15">
                           <i>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                 <path d="M4.12891 4.12988H4.13621M12.636 8.14182L8.14808 12.6297C8.03182 12.7461 7.89375 12.8384 7.74178 12.9014C7.58981 12.9644 7.42691 12.9969 7.26239 12.9969C7.09788 12.9969 6.93498 12.9644 6.78301 12.9014C6.63104 12.8384 6.49297 12.7461 6.37671 12.6297L1 7.25926V1H7.25926L12.636 6.37671C12.8691 6.61126 13 6.92854 13 7.25926C13 7.58998 12.8691 7.90727 12.636 8.14182Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </i>
                           <span>Fashion,</span>
                           <span>Lift Style,</span>
                           <span>News</span>
                        </div>
                        <h4 class="aq-blog-title">
                           <a href="blog-details.html">The Sound Of Fashion: Malcolm In His Own Words</a>
                        </h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- blog area end -->

      <!-- feature area start -->
      <div class="aqf-shop-feature-ptb csm-feature-style pt-75 pb-25 ml-50 mr-50" data-bg-color="#F9F9F9">
         <div class="container">
            <div class="aqf-shop-feature-wrap">
               <div class="row">
                  <div class="col-xl-3 col-md-6">
                     <div class="aqf-shop-feature-item mb-30 text-center">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                              <path d="M2.07422 9.99707L17.0833 18.6829L31.9904 10.048M17.083 34.0831V18.666M25.5831 19.8554V13.6342L9.45215 4.31934M13.5663 1.5659L4.48949 6.61431C2.43275 7.75316 0.75 10.6088 0.75 12.9545V22.5583C0.75 24.904 2.43275 27.7596 4.48949 28.8984L13.5663 33.9469C15.5041 35.0177 18.6827 35.0177 20.6204 33.9469L29.6973 28.8984C31.754 27.7596 33.4368 24.904 33.4368 22.5583V12.9545C33.4368 10.6088 31.754 7.75316 29.6973 6.61431L20.6204 1.5659C18.6657 0.478035 15.5041 0.478035 13.5663 1.5659Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </span>
                        <h4>Free Shipping</h4>
                        <p>Free Shipping for orders over $130</p>
                     </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                     <div class="aqf-shop-feature-item mb-30 text-center">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" viewBox="0 0 30 36" fill="none">
                              <path d="M14.5026 0.75V34.75M14.5025 29.5818L27.5926 23.2238M14.5025 21.0811L27.0315 14.9951M14.5025 12.5811L23.0536 8.41613M15.5402 1.107C14.9282 0.631 14.0783 0.631 13.4663 1.107C10.2363 3.572 0.699204 11.613 0.750204 20.98C0.750204 28.562 6.92127 34.75 14.5203 34.75C22.1193 34.75 28.2902 28.579 28.2902 20.997C28.3072 11.766 18.7532 3.589 15.5402 1.107Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                           </svg>
                        </span>
                        <h4>Free Returns</h4>
                        <p>Within 30 days for an exchange.</p>
                     </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                     <div class="aqf-shop-feature-item mb-30 text-center">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                              <path d="M3.88037 24.1954L24.1983 3.87744M16.0757 28.2761L18.116 26.2358M20.6509 23.7037L24.7145 19.6401M0.600098 34.6001H34.6051M3.32265 14.606L14.6123 3.31631C18.2168 -0.288222 20.0191 -0.305224 23.5896 3.2653L31.9378 11.6135C35.5084 15.184 35.4914 16.9863 31.8868 20.5908L20.5972 31.8805C16.9927 35.485 15.1904 35.502 11.6199 31.9315L3.27165 23.5833C-0.298875 20.0128 -0.298875 18.2275 3.32265 14.606Z" stroke="currentcolor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </span>
                        <h4>Flexible Payment</h4>
                        <p>Pay with Multiple Credit Cards</p>
                     </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                     <div class="aqf-shop-feature-item mb-30 text-center">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                              <path d="M28.7484 25.9603L29.4113 31.3321C29.5813 32.7431 28.0684 33.729 26.8614 32.998L19.7388 28.7652C18.9568 28.7652 18.1919 28.7142 17.4439 28.6122C18.7019 27.1333 19.4498 25.2633 19.4498 23.2403C19.4498 18.4125 15.268 14.5027 10.1003 14.5027C8.12836 14.5027 6.30945 15.0636 4.79653 16.0496C4.74553 15.6246 4.72852 15.1996 4.72852 14.7576C4.72852 7.0228 11.4432 0.75 19.7388 0.75C28.0344 0.75 34.7491 7.0228 34.7491 14.7576C34.7491 19.3475 32.3862 23.4104 28.7484 25.9603Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M19.4491 23.2396C19.4491 25.2626 18.7011 27.1326 17.4432 28.6115C15.7603 30.6515 13.0914 31.9604 10.0995 31.9604L5.66276 34.5953C4.9148 35.0543 3.96284 34.4253 4.06483 33.5583L4.48981 30.2095C2.21192 28.6285 0.75 26.0955 0.75 23.2396C0.75 20.2477 2.34793 17.6128 4.79581 16.0489C6.30874 15.0629 8.12764 14.502 10.0995 14.502C15.2673 14.502 19.4491 18.4118 19.4491 23.2396Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </span>
                        <h4>Support Online</h4>
                        <p>24 hours a day, 7 days a week</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- feature area end -->

   </main>

   <footer>

      <!-- footer area start -->
      <div class="aq-footer-area csm-footer-style pt-100">
         <div class="container">
            <div class="aq-footer-widget-wrap">
               <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                     <div class="aq-footer-widget footer-col-6-1 mb-90">
                        <div class="aq-footer-logo mb-25">
                           <a href="index.html">
                              <img data-width="120" src="images/logo.png" alt="">
                           </a>
                        </div>
                        <div class="aq-footer-contact-wrap">
                           <div class="aq-footer-contact-item d-flex align-items-start">
                              <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M0.75 4.75C0.75 1.95 2.35 0.75 4.75 0.75H12.75C15.15 0.75 16.75 1.95 16.75 4.75V10.35C16.75 13.15 15.15 14.35 12.75 14.35H4.75M12.75 5.15028L10.246 7.15003C9.422 7.80596 8.07 7.80596 7.246 7.15003L4.75 5.15028M0.75 11.1503H5.55M0.75 7.94945H3.15" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>
                              </span>
                              <a href="mailto:liko@gmail.com">Bazaro@gmail.com</a>
                           </div>
                           <div class="aq-footer-contact-item d-flex align-items-start">
                              <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                                    <path d="M8.25099 10.6922C9.74975 10.6922 10.9647 9.47717 10.9647 7.9784C10.9647 6.47964 9.74975 5.26465 8.25099 5.26465C6.75222 5.26465 5.53723 6.47964 5.53723 7.9784C5.53723 9.47717 6.75222 10.6922 8.25099 10.6922Z" stroke="currentcolor" stroke-width="1.5"></path>
                                    <path d="M0.962124 6.39496C2.67562 -1.13745 13.8351 -1.12875 15.5399 6.40366C16.5401 10.8222 13.7916 14.5623 11.3822 16.876C9.63396 18.5634 6.86802 18.5634 5.11104 16.876C2.71041 14.5623 -0.0381381 10.8135 0.962124 6.39496Z" stroke="currentcolor" stroke-width="1.5"></path>
                                 </svg>
                              </span>
                              <a href="https://www.google.com/maps" target="_blank">
                                 29 SE 2nd Ave, Miami Florida <br> 44041, United States
                              </a>
                           </div>
                           <div class="aq-footer-contact-item d-flex align-items-start">
                              <a class="fs-bold" href="tel:9241390762" target="_blank">(+92) 413 90 762</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-2 col-lg-4 col-md-3 col-sm-6">
                     <div class="aq-footer-widget mb-90">
                        <h4 class="aq-footer-widget-title">Shopping</h4>
                        <div class="aq-footer-widget-menu">
                           <ul>
                              <li><a href="#">Wishlist</a></li>
                              <li><a href="#">Shop by Brand</a></li>
                              <li><a href="#">Offers</a></li>
                              <li><a href="#">Track order</a></li>
                              <li><a href="#">Size Guide</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                     <div class="aq-footer-widget mb-90">
                        <h4 class="aq-footer-widget-title">Infomation</h4>
                        <div class="aq-footer-widget-menu">
                           <ul>
                              <li><a href="#">Track Order</a></li>
                              <li><a href="#">Shipping & Returns</a></li>
                              <li><a href="#">About us</a></li>
                              <li><a href="#">Help</a></li>
                              <li><a href="#">Gift Cards</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                     <div class="aq-footer-widget mb-90">
                        <h4 class="aq-footer-widget-title">Account</h4>
                        <div class="aq-footer-widget-menu">
                           <ul>
                              <li><a href="#">Cart</a></li>
                              <li><a href="#">My account</a></li>
                              <li><a href="#">My orders</a></li>
                              <li><a href="#">Wishlist</a></li>
                              <li><a href="#">Affiliate Program</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-7 col-sm-10">
                     <div class="aq-footer-widget mb-90">
                        <h4 class="aq-footer-widget-title">Subcribe.</h4>
                        <div class="aq-footer-widget-input-box mb-25">
                           <form action="#">
                              <p class="mb-10">Our conversation is just getting started</p>
                              <div class="aq-footer-widget-input p-relative">
                                 <input class="aq-form-control h-56 brr-0" type="email" placeholder="Enter Your Email">
                                 <button class="aq-btn-subscribe" type="submit">Subscribe</button>
                              </div>
                           </form>
                        </div>
                        <div class="aq-footer-widget-social-box">
                           <h4 class="aq-footer-widget-social-title mb-10">Follow Us On</h4>
                           <div class="aq-footer-widget-social">
                              <a href="#">
                                 <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                      <path d="M1.88265 13.9168H4.70664V6.95842H7.26587L7.53062 4.56646H4.70664V3.37048C4.70664 3.00807 4.76547 2.75437 4.88313 2.60941C5.0008 2.46444 5.28516 2.39196 5.73621 2.39196H7.53062V0H4.94197C3.76531 0 2.96126 0.262753 2.52982 0.788258C2.09838 1.29564 1.88265 2.0839 1.88265 3.15303V4.56646H0V6.95842H1.88265V13.9168Z" fill="currentcolor"></path>
                                    </svg>
                                 </i>
                              </a>
                              <a href="#">
                                 <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                       <path d="M13.603 0.21745C13.0385 0.543626 12.4285 0.770137 11.7729 0.896983C11.2084 0.298994 10.5073 0 9.66961 0C8.88658 0 8.2128 0.280874 7.64828 0.842621C7.08377 1.40437 6.80151 2.07484 6.80151 2.85404C6.80151 3.07149 6.82882 3.28894 6.88345 3.50639C5.718 3.45203 4.61629 3.16209 3.5783 2.63659C2.55853 2.11108 1.69355 1.40437 0.983351 0.516445C0.710198 0.951346 0.573621 1.43155 0.573621 1.95705C0.573621 2.97182 1.00156 3.76008 1.85744 4.32183C1.40219 4.32183 0.974246 4.20404 0.573621 3.96847V4.02283C0.573621 4.69331 0.783038 5.2913 1.20187 5.8168C1.63892 6.34231 2.19433 6.67754 2.86811 6.82251C2.61316 6.87687 2.35822 6.90405 2.10328 6.90405C1.92118 6.90405 1.73907 6.88593 1.55697 6.84969C1.75728 7.42956 2.09417 7.90976 2.56764 8.2903C3.05931 8.65272 3.61472 8.83393 4.23387 8.83393C3.19589 9.64937 2.01223 10.0571 0.682882 10.0571C0.46436 10.0571 0.236733 10.048 0 10.0299C1.34755 10.8816 2.81348 11.3074 4.39776 11.3074C5.67248 11.3074 6.83793 11.0628 7.89412 10.5735C8.95031 10.0843 9.80619 9.45004 10.4618 8.67084C11.1355 7.87352 11.6545 7.00372 12.0187 6.06143C12.3829 5.10103 12.565 4.14062 12.565 3.18021C12.565 3.05337 12.565 2.93558 12.565 2.82686C13.1296 2.41008 13.603 1.91175 13.9854 1.33188C13.4573 1.56746 12.911 1.72148 12.3465 1.79397C12.9657 1.41343 13.3845 0.887923 13.603 0.21745Z" fill="currentcolor"></path>
                                    </svg>
                                 </i>
                              </a>
                              <a href="#">
                                 <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                       <path d="M0.0292664 3.2H2.80957V12H0.0292664V3.2ZM8.51652 3.2C8.37994 3.2 8.24337 3.20833 8.10679 3.225C7.98972 3.24167 7.87266 3.26667 7.75559 3.3C7.63853 3.33333 7.54097 3.36667 7.46293 3.4C7.38489 3.41667 7.28733 3.45833 7.17027 3.525C7.0532 3.575 6.97516 3.60833 6.93613 3.625C6.91662 3.64167 6.84834 3.69167 6.73127 3.775C6.6142 3.85833 6.55567 3.9 6.55567 3.9V3.2H3.77536V12H6.55567V6.45C6.55567 6.43333 6.55567 6.4 6.55567 6.35C6.55567 6.3 6.57518 6.20833 6.6142 6.075C6.67274 5.94167 6.74102 5.83333 6.81907 5.75C6.91662 5.65 7.06296 5.55833 7.25806 5.475C7.47268 5.39167 7.71657 5.35 7.98972 5.35C8.45799 5.35 8.79943 5.45 9.01405 5.65C9.24818 5.85 9.36524 6.11667 9.36524 6.45V12H12.3211V6.55C12.3211 5.96667 12.2138 5.46667 11.9992 5.05C11.7846 4.61667 11.531 4.29167 11.2383 4.075C10.9651 3.84167 10.6335 3.65833 10.2432 3.525C9.87253 3.375 9.5506 3.28333 9.27745 3.25C9.0238 3.21667 8.77016 3.2 8.51652 3.2ZM0.409729 0.35C0.136576 0.583333 0 0.866667 0 1.2C0 1.53333 0.136576 1.81667 0.409729 2.05C0.682882 2.28333 1.01457 2.4 1.40479 2.4C1.79501 2.4 2.12669 2.28333 2.39984 2.05C2.673 1.81667 2.80957 1.53333 2.80957 1.2C2.80957 0.866667 2.673 0.583333 2.39984 0.35C2.12669 0.116667 1.79501 0 1.40479 0C1.01457 0 0.682882 0.116667 0.409729 0.35Z" fill="currentcolor"></path>
                                    </svg>
                                 </i>
                              </a>
                              <a href="#">
                                 <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                       <path d="M7.46586 3.0643C7.93982 2.77825 8.34607 2.69411 8.68461 2.8119C9.02315 2.92969 9.20935 3.17367 9.2432 3.54385C9.29398 3.91404 9.20089 4.34311 8.96391 4.83108C8.13448 6.37912 7.53357 7.15314 7.16117 7.15314C6.9919 7.15314 6.83109 6.95964 6.67875 6.57263C6.52641 6.16879 6.33174 5.50414 6.09477 4.57868C6.04398 4.32629 5.97628 3.94769 5.89164 3.44289C5.80701 2.9381 5.72237 2.50902 5.63773 2.15566C5.57003 1.80231 5.46846 1.44054 5.33305 1.07035C5.19763 0.70017 5.00297 0.439359 4.74906 0.287921C4.51208 0.119655 4.22432 0.0691757 3.88578 0.136482C3.3949 0.237441 2.82784 0.540318 2.18461 1.04511C1.54138 1.53308 1.00818 1.99581 0.585 2.4333C0.17875 2.85397 -0.0159115 3.07271 0.00101563 3.08954L0.534219 3.77101C0.568073 3.75418 0.601927 3.72895 0.635781 3.69529C0.686562 3.66164 0.779661 3.60275 0.915078 3.51861C1.06742 3.43448 1.20284 3.36717 1.32133 3.3167C1.43982 3.26622 1.55831 3.24098 1.6768 3.24098C1.81221 3.24098 1.91378 3.28304 1.98148 3.36717C2.1169 3.51861 2.48083 4.57027 3.07328 6.52215C3.68266 8.47403 4.05505 9.59299 4.19047 9.87904C4.34281 10.1987 4.54594 10.4848 4.79984 10.7372C5.07068 10.9728 5.39229 11.1494 5.76469 11.2672C6.13708 11.385 6.52641 11.3093 6.93266 11.0401C7.30505 10.7877 7.76208 10.4259 8.30375 9.95476C8.84542 9.46679 9.44633 8.86104 10.1065 8.1375C10.7666 7.41395 11.3591 6.57263 11.8838 5.61352C12.4086 4.63758 12.7556 3.67847 12.9248 2.73618C13.1618 1.40688 12.8148 0.557145 11.8838 0.186961C11.0713 -0.149569 10.1827 -0.0317834 9.21781 0.540318C8.21911 1.12925 7.63513 1.97057 7.46586 3.0643Z" fill="currentcolor"></path>
                                    </svg>
                                 </i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="aq-copyright-area">
            <div class="container">
               <div class="aq-copyright-border pt-15 pb-35">
                  <div class="row align-items-center">
                     <div class="col-xl-4 col-lg-5 col-md-6">
                        <div class="aq-copyright-text text-center text-md-start pb-20">
                           <p class="mb-0">All rights reserved — 2026 © <a href="#">Themepure</a></p>
                        </div>
                     </div>
                     <div class="col-xl-8 col-lg-7 col-md-6">
                        <div class="aq-copyright-payment text-center text-md-end pb-20">
                           <a href="#"><img src="images/payment.png" alt=""></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- footer area end -->

   </footer>
      

   <!-- JS here -->
   <script src="js/jquery.js"><\/script>
   <script src="js/bootstrap-bundle.js"><\/script>
   <script src="js/swiper-bundle.js"><\/script>
   <script src="js/magnific-popup.js"><\/script>
   <script src="js/nice-select.js"><\/script>
   <script src="js/purecounter.js"><\/script>
   <script src="js/isotope-pkgd.js"><\/script>
   <script src="js/lazysize.min.js"><\/script>
   <script src="js/slider-active.js"><\/script>
   <script src="js/imagesloaded-pkgd.js"><\/script>
   <script src="js/ajax-form.js"><\/script>
   <script src="js/main.js"><\/script>



</body></html>`.split(/<body[^>]*>/i)[1]||``).split(/<\/body>/i)[0]||``,_={preloader:[`<!-- pre loader area start -->`,`<!-- offcanvas area start -->`],offcanvas:[`<!-- offcanvas area start -->`,`<!-- header area start -->`],header:[`<!-- header area start -->`,`<!-- slider area start -->`],slider:[`<!-- slider area start -->`,`<!-- categories area start -->`],categories:[`<!-- categories area start -->`,`<!-- stories area start -->`],stories:[`<!-- stories area start -->`,`<!-- stories area end -->`],productArea1:[`<!-- product area start -->`,`<!-- product area end -->`],banner:[`<!-- banner area start -->`,`<!-- banner area end -->`],productArea2:[`<!-- product area start -->`,`<!-- product area end -->`],bundle:[`<!-- outfit area start -->`,`<!-- outfit area end -->`],blog:[`<!-- blog area start -->`,`<!-- blog area end -->`],feature:[`<!-- feature area start -->`,`<!-- feature area end -->`],footer:[`<!-- footer area start -->`,`<!-- footer area end -->`]},v=e=>{let t=_[e];if(!t)return``;let n=g.indexOf(t[0]);if(e===`productArea2`){let e=g.indexOf(t[0]);n=g.indexOf(t[0],e+t[0].length)}let r;if(e===`productArea1`)r=g.indexOf(t[1]);else if(e===`productArea2`){let e=g.indexOf(t[1]);r=g.indexOf(t[1],e+t[1].length)}else r=g.indexOf(t[1],n+t[0].length);return n===-1||r===-1?``:g.slice(n,r)},y=()=>(0,f.jsx)(h,{html:v(`backToTop`)}),b=()=>(0,f.jsx)(h,{html:v(`search`)}),x=()=>(0,f.jsx)(h,{html:(v(`preloader`)||``).replaceAll(`Bazaro`,`RIENNA`).replaceAll(`images/favicon.png`,`images/loading1.png`).replaceAll(`images/logo.png`,`images/loading1.png`).replaceAll(`images/logo.svg`,`images/loading1.png`).replaceAll(`images/logo.jpg`,`images/loading1.png`).replaceAll(`images/logo.jpeg`,`images/loading1.png`).replaceAll(`<img src="images/loading1.png" alt="">`,`<img class="aq-preloader-center-logo" src="images/loading1.png" alt="RIENNA logo">`).replace(/<h3 class="aq-preloader-title">[\s\S]*?<\/h3>/,``).replace(/<p class="aq-preloader-subtitle">[\s\S]*?<\/p>/,``)}),ee=()=>{let e=(v(`header`)||``).replaceAll(`href="contact.html"`,`href="/?page=contact"`).replaceAll(`href='contact.html'`,`href='/?page=contact'`).replaceAll(`href="dashboard.html"`,`href="/?page=dashboard"`).replaceAll(`href='dashboard.html'`,`href='/?page=dashboard'`).replaceAll(`href="login.html"`,`href="#"`).replaceAll(`href='login.html'`,`href='#'`).replaceAll(`images/logo.png`,`images/logo1.png`).replaceAll(`images/logo.svg`,`images/logo1.png`).replaceAll(`images/logo.jpg`,`images/logo1.png`).replaceAll(`images/logo.jpeg`,`images/logo1.png`).replace(`class="aq-header-logo text-center text-xl-start"`,`class="aq-header-logo text-start"`);return e=e.replace(/(<nav class="aq-mobile-menu-active">\s*<ul>)[\s\S]*?(<\/ul>\s*<\/nav>)/,`$1
      <li><a href="/">Home</a></li>
      <li><a href="product-details-default.html">Products</a></li>
      <li><a href="/?page=contact">Contact</a></li>
    $2`),e=e.replace(/(<li class="aq-header-top-account d-none d-md-inline-block">[\s\S]*?<\/li>)(\s*<li class="aq-header-top-wishlist)/,`$1<li class="aq-header-top-dashboard d-none d-md-inline-block">
                           <a href="/?page=dashboard">
                              <i>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="14" width="7" height="7"></rect>
                                    <rect x="3" y="14" width="7" height="7"></rect>
                                 </svg>
                              </i>
                           </a>
                        </li>$2`),(0,f.jsx)(h,{html:e})},S=()=>(0,f.jsx)(h,{html:(v(`offcanvas`)||``).replaceAll(`images/logo.png`,`images/logo1.png`).replaceAll(`images/logo.svg`,`images/logo1.png`).replaceAll(`images/logo.jpg`,`images/logo1.png`).replaceAll(`images/logo.jpeg`,`images/logo1.png`).replace(/<li>\s*<a href="store\.html">Our Store<\/a>\s*<\/li>/g,``).replace(/<li>\s*<a href="vendor-stores\.html">Vendor<\/a>\s*<\/li>/g,``).replace(/<li>\s*<a href="vendor-details\.html">Vendor Details<\/a>\s*<\/li>/g,``).replace(/<li>\s*<a href="privacy-policy\.html">Terms of use<\/a>\s*<\/li>/g,``).replace(/<li>\s*<a href="error\.html">404 Page<\/a>\s*<\/li>/g,``).replace(/<li>\s*<a href="comming-soon\.html">Coming Soon<\/a>\s*<\/li>/g,``)}),C=()=>(0,f.jsx)(h,{html:v(`loginModal`)}),w=()=>(0,f.jsx)(h,{html:v(`slider`)}),te=()=>(0,f.jsx)(h,{html:v(`categories`)}),ne=()=>(0,f.jsx)(h,{html:v(`stories`)}),T=()=>(0,f.jsx)(h,{html:v(`productArea1`)}),re=()=>(0,f.jsx)(h,{html:v(`banner`)}),ie=()=>(0,f.jsx)(h,{html:v(`productArea2`)}),ae=()=>(0,f.jsx)(h,{html:v(`bundle`)}),oe=()=>(0,f.jsx)(h,{html:v(`blog`)}),se=()=>(0,f.jsx)(h,{html:v(`feature`)}),ce=()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(w,{}),(0,f.jsx)(te,{}),(0,f.jsx)(ne,{}),(0,f.jsx)(T,{}),(0,f.jsx)(re,{}),(0,f.jsx)(ie,{}),(0,f.jsx)(ae,{}),(0,f.jsx)(oe,{}),(0,f.jsx)(se,{})]}),le=[{id:`day-cream`,name:`Day Cream SPF 30`,category:`Day Cream`,price:`$24.00`,image:`/images/p1.webp`,description:`A lightweight day cream with SPF protection, designed to hydrate and protect your skin while keeping it soft and glowing.`,highlights:[`SPF 30 protection`,`Lightweight formula`,`Suitable for daily use`]},{id:`under-eye-roll-on`,name:`Under Eye Roll On Gel`,category:`Eye Care`,price:`$18.00`,image:`/images/p2.webp`,description:`A cooling under-eye gel that helps reduce puffiness and refresh tired eyes for a brighter, more awake look.`,highlights:[`Cooling roller applicator`,`Reduces puffiness`,`Hydrating gel texture`]},{id:`vitamin-c-serum`,name:`Vitamin C Glutathione Serum`,category:`Serum`,price:`$32.00`,image:`/images/p3.webp`,description:`A brightening serum powered by Vitamin C and Glutathione to improve skin tone, radiance, and daily glow.`,highlights:[`Brightens dull skin`,`Targets uneven tone`,`Fast-absorbing formula`]}],E=e=>le.find(t=>t.id===e)||le[0],D=`rienna_dashboard_v1`,ue=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,de=e=>{let t=Number.parseFloat(String(e).replace(/[^0-9.]/g,``));return Number.isFinite(t)?t:0},fe=({productId:e,onRequireAuth:t,onAddToCart:n,onAddToWishlist:r})=>{let i=E(e),[a,o]=(0,l.useState)(1),[s,c]=(0,l.useState)(!1),[u,d]=(0,l.useState)(19),p=(0,l.useMemo)(()=>[{name:`Brown`,label:`Chestnut`,color:`rgb(141, 105, 74)`},{name:`Iridium`,label:`Iridium`,color:`rgb(58, 63, 50)`},{name:`Darb`,label:`Darb`,color:`rgb(123, 124, 76)`}],[]),[m,h]=(0,l.useState)(`M`),[g,_]=(0,l.useState)(p[0]),[v,y]=(0,l.useState)(0),b=i.description.length>140?`${i.description.slice(0,140)}...`:i.description,x=s?i.description:b;return(0,l.useEffect)(()=>{let e=window.setInterval(()=>{d(e=>{let t=e+(Math.random()>.5?1:-1);return Math.min(35,Math.max(10,t))})},2500);return()=>window.clearInterval(e)},[]),(0,l.useEffect)(()=>{o(1),c(!1),h(`M`),_(p[0])},[i.id,p]),(0,l.useEffect)(()=>{try{let e=window.localStorage.getItem(D);if(!e){y(0);return}let t=JSON.parse(e);y(typeof t.earningsBalance==`number`?t.earningsBalance:0)}catch{y(0)}},[]),(0,f.jsx)(`div`,{className:`aq-product-area pb-60 pt-100`,children:(0,f.jsxs)(`div`,{className:`container`,children:[(0,f.jsxs)(`div`,{className:`row`,children:[(0,f.jsx)(`div`,{className:`col-lg-6`,children:(0,f.jsx)(`div`,{className:`aq-product-thumb mb-30`,children:(0,f.jsx)(`img`,{src:i.image,alt:i.name,className:`w-100`})})}),(0,f.jsx)(`div`,{className:`col-lg-6`,children:(0,f.jsxs)(`div`,{className:`aq-product-details-wrap pt-25`,children:[(0,f.jsx)(`div`,{className:`aq-product-details-radius-style`,children:(0,f.jsx)(`div`,{className:`aq-product-badge`,children:(0,f.jsx)(`span`,{className:`clr-sale`,"data-bg-color":`#12947B`,style:{backgroundColor:`rgb(18, 148, 123)`},children:`In Stock`})})}),(0,f.jsx)(`div`,{className:`aq-product-details-category`,children:(0,f.jsx)(`span`,{children:i.category})}),(0,f.jsx)(`h3`,{className:`aq-product-details-title mb-10`,children:i.name}),(0,f.jsx)(`div`,{className:`tp-product-details-inventory`,children:(0,f.jsxs)(`div`,{className:`aq-product-details-rating-wrapper d-flex align-items-center`,children:[(0,f.jsxs)(`div`,{className:`aq-product-details-rating-box d-flex align-items-center mb-15`,children:[(0,f.jsxs)(`div`,{className:`aq-product-details-rating`,children:[[1,2,3,4,5].map(e=>(0,f.jsx)(`span`,{children:(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`13`,viewBox:`0 0 14 13`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z`,fill:`currentColor`})})},e)),(0,f.jsx)(`span`,{className:`avarage`,children:`4.75`})]}),(0,f.jsx)(`div`,{className:`aq-product-details-reviews`,children:(0,f.jsx)(`span`,{children:`( 1 review )`})})]}),(0,f.jsx)(`div`,{className:`aq-product-details-fomo-mesg mb-15`,children:(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`i`,{children:`🔥`}),` 41 sold in last 16 hours`]})})]})}),(0,f.jsx)(`div`,{className:`aq-product-details-price-wrap mb-20`,children:(0,f.jsx)(`ins`,{children:(0,f.jsx)(`span`,{className:`aq-product-details-price new-price`,children:i.price})})}),(0,f.jsxs)(`div`,{className:`aq-product-details-mesg-wrap mb-25`,children:[(0,f.jsx)(`p`,{className:`slide-text`,children:x}),(0,f.jsx)(`button`,{className:`toggle-btn`,onClick:()=>c(e=>!e),children:s?`Read Less..`:`Read More..`})]}),(0,f.jsxs)(`div`,{className:`product-details-people-view d-inline-flex align-items-center mb-30`,children:[(0,f.jsx)(`span`,{className:`product-details-people-viewicon`,children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`15`,height:`12`,viewBox:`0 0 15 12`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M0.599609 5.59961C0.599609 5.59961 3.09961 0.599609 7.47461 0.599609C11.8496 0.599609 14.3496 5.59961 14.3496 5.59961C14.3496 5.59961 11.8496 10.5996 7.47461 10.5996C3.09961 10.5996 0.599609 5.59961 0.599609 5.59961Z`,stroke:`#141414`,strokeWidth:`1.2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M7.47461 7.47461C8.51014 7.47461 9.34961 6.63514 9.34961 5.59961C9.34961 4.56408 8.51014 3.72461 7.47461 3.72461C6.43908 3.72461 5.59961 4.56408 5.59961 5.59961C5.59961 6.63514 6.43908 7.47461 7.47461 7.47461Z`,stroke:`#141414`,strokeWidth:`1.2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),(0,f.jsxs)(`p`,{children:[(0,f.jsx)(`span`,{id:`viewerCount`,children:u}),` people are viewing this right now`]})]}),(0,f.jsxs)(`div`,{className:`aq-product-details-action-wrapper mb-25`,children:[(0,f.jsxs)(`div`,{className:`aq-product-details-action-item-wrapper d-sm-flex align-items-center`,children:[(0,f.jsx)(`div`,{className:`aq-product-details-quantity`,children:(0,f.jsxs)(`div`,{className:`aq-product-quantity mb-10 mr-10`,children:[(0,f.jsx)(`span`,{className:`aq-cart-minus`,onClick:()=>o(e=>Math.max(1,e-1)),children:(0,f.jsx)(`svg`,{width:`11`,height:`2`,viewBox:`0 0 11 2`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,f.jsx)(`path`,{d:`M1 1H10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,f.jsx)(`input`,{className:`aq-cart-input`,type:`text`,value:a,onChange:e=>{let t=Number.parseInt(e.target.value,10);if(Number.isNaN(t)){o(1);return}o(Math.min(99,Math.max(1,t)))}}),(0,f.jsx)(`span`,{className:`aq-cart-plus`,onClick:()=>o(e=>Math.min(99,e+1)),children:(0,f.jsxs)(`svg`,{width:`11`,height:`12`,viewBox:`0 0 11 12`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,f.jsx)(`path`,{d:`M1 6H10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M5.5 10.5V1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})}),(0,f.jsxs)(`div`,{className:`aq-product-details-add-to-cart d-flex align-items-center mb-10 w-100`,children:[(0,f.jsx)(`div`,{className:`aq-product-details-add-to-cart-btn w-100`,children:(0,f.jsx)(`button`,{className:`aq-btn-black btn-square w-100`,onClick:()=>{t?.(`Add to cart`)&&n?.({id:`${i.id}-${m}-${g.name}`,productId:i.id,name:i.name,price:i.price,image:i.image,size:m,color:g.label,quantity:a,url:`/?page=product-details&product=${i.id}`})},children:`Add To Cart`})}),(0,f.jsxs)(`button`,{type:`button`,className:`aq-product-action-btn action-btn-2 aq-wishlist-btn aq-tooltip-top`,onClick:()=>{t?.(`Wishlist`)&&r?.({id:i.id,productId:i.id,name:i.name,price:i.price,image:i.image,url:`/?page=product-details&product=${i.id}`})},children:[(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`16`,viewBox:`0 0 18 16`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),(0,f.jsx)(`span`,{className:`aq-tooltip-item`,children:`Wishlist`})]}),(0,f.jsxs)(`button`,{type:`button`,className:`aq-product-action-btn action-btn-2 aq-compare-btn aq-tooltip-top`,children:[(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`14`,viewBox:`0 0 16 14`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,f.jsx)(`span`,{className:`aq-tooltip-item`,children:`Compare`})]})]})]}),(0,f.jsx)(`div`,{className:`aq-product-details-buy-now-btn`,children:(0,f.jsx)(`a`,{href:`/?page=checkout`,className:`aq-btn-black btn-red-bg btn-square w-100 d-inline-block text-center`,onClick:e=>{e.preventDefault(),t?.(`Buy now`)&&(window.location.href=`/?page=checkout`)},children:`Buy Now`})}),(0,f.jsx)(`div`,{className:`aq-product-details-buy-now-btn mt-10`,children:(0,f.jsxs)(`button`,{type:`button`,className:`aq-btn-black btn-square w-100`,onClick:()=>{if(!t?.(`Buy with earnings`))return;let e=de(i.price)*a;if(!(e<=0)){if(v<e){alert(`Insufficient earnings balance for this purchase.`);return}try{let t=window.localStorage.getItem(D),n=t?JSON.parse(t):{},r=Array.isArray(n.orders)?n.orders:[],i=typeof n.spentFromEarnings==`number`?n.spentFromEarnings:0,o=typeof n.earningsBalance==`number`?n.earningsBalance:0,s=Math.max(0,o-e),c={id:`#RIN-${Math.floor(1e3+Math.random()*9e3)}`,date:ue(new Date),items:a,amount:e,status:`Paid (Earnings)`};window.localStorage.setItem(D,JSON.stringify({...n,orders:[c,...r],earningsBalance:s,spentFromEarnings:i+e})),y(s),alert(`Order placed successfully using earnings.`)}catch{alert(`Unable to complete earnings purchase right now. Please try again.`)}}},title:`Earnings balance: $${v.toFixed(2)}`,children:[`Buy With Earnings ($`,v.toFixed(2),` available)`]})})]}),(0,f.jsx)(`div`,{className:`aq-product-details-mesg-wrap`,children:(0,f.jsx)(`ul`,{children:i.highlights.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`div`,{className:`aq-product-details-mesg d-flex align-items-center`,children:(0,f.jsx)(`span`,{children:e})})},e))})}),(0,f.jsxs)(`div`,{className:`aq-product-details-payment d-flex align-items-center justify-content-between`,children:[(0,f.jsxs)(`p`,{children:[`Guaranteed safe `,(0,f.jsx)(`br`,{}),` and secure checkout`]}),(0,f.jsx)(`img`,{src:`/images/payment.png`,alt:`payment`})]})]})})]}),(0,f.jsxs)(`div`,{className:`product-details-nav nav nav-tab justify-content-center p-relative`,id:`navPresentationTab`,role:`tablist`,children:[(0,f.jsx)(`button`,{className:`nav-links active`,id:`nav-description-tab`,"data-bs-toggle":`tab`,"data-bs-target":`#nav-description`,type:`button`,role:`tab`,"aria-controls":`nav-description`,"aria-selected":`true`,children:`Description`}),(0,f.jsx)(`button`,{className:`nav-links`,id:`nav-addInfo-tab`,"data-bs-toggle":`tab`,"data-bs-target":`#nav-addInfo`,type:`button`,role:`tab`,"aria-controls":`nav-addInfo`,"aria-selected":`false`,children:`Additional information`}),(0,f.jsx)(`button`,{className:`nav-links`,id:`nav-review-tab`,"data-bs-toggle":`tab`,"data-bs-target":`#nav-review`,type:`button`,role:`tab`,"aria-controls":`nav-review`,"aria-selected":`false`,children:`Reviews (4)`}),(0,f.jsx)(`button`,{className:`nav-links`,id:`nav-question-tab`,"data-bs-toggle":`tab`,"data-bs-target":`#nav-question`,type:`button`,role:`tab`,"aria-controls":`nav-question`,"aria-selected":`false`,children:`Ask & Question`}),(0,f.jsx)(`button`,{className:`nav-links`,id:`nav-faq-tab`,"data-bs-toggle":`tab`,"data-bs-target":`#nav-faq`,type:`button`,role:`tab`,"aria-controls":`nav-faq`,"aria-selected":`false`,children:`Faq`})]}),(0,f.jsxs)(`div`,{className:`tab-content mt-40 pt-40`,id:`navPresentationTabContent`,children:[(0,f.jsx)(`div`,{className:`tab-pane fade show active`,id:`nav-description`,role:`tabpanel`,"aria-labelledby":`nav-description-tab`,children:(0,f.jsxs)(`div`,{className:`product-description`,children:[(0,f.jsx)(`h4`,{className:`mb-20`,children:`Description`}),(0,f.jsx)(`p`,{children:i.description}),(0,f.jsx)(`ul`,{className:`mt-20`,children:i.highlights.map(e=>(0,f.jsxs)(`li`,{className:`mb-10`,children:[`✓ `,e]},e))})]})}),(0,f.jsx)(`div`,{className:`tab-pane fade`,id:`nav-addInfo`,role:`tabpanel`,"aria-labelledby":`nav-addInfo-tab`,children:(0,f.jsxs)(`div`,{className:`product-additional-info`,children:[(0,f.jsx)(`h4`,{className:`mb-20`,children:`Additional Information`}),(0,f.jsx)(`table`,{className:`table`,children:(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:`Product Type:`})}),(0,f.jsx)(`td`,{children:i.category})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:`Price:`})}),(0,f.jsx)(`td`,{children:i.price})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:`Availability:`})}),(0,f.jsx)(`td`,{children:`In Stock`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:`Suitable For:`})}),(0,f.jsx)(`td`,{children:`All Skin Types`})]})]})})]})}),(0,f.jsx)(`div`,{className:`tab-pane fade`,id:`nav-review`,role:`tabpanel`,"aria-labelledby":`nav-review-tab`,children:(0,f.jsxs)(`div`,{className:`product-reviews`,children:[(0,f.jsx)(`h4`,{className:`mb-20`,children:`Customer Reviews (4)`}),(0,f.jsxs)(`div`,{className:`review-item mb-20 pb-20`,style:{borderBottom:`1px solid #eee`},children:[(0,f.jsxs)(`div`,{className:`d-flex justify-content-between mb-10`,children:[(0,f.jsx)(`strong`,{children:`Sarah Johnson`}),(0,f.jsx)(`span`,{style:{color:`#12947B`},children:`★★★★★`})]}),(0,f.jsx)(`p`,{children:`Excellent product! Works wonders for my skin. Highly recommended!`})]}),(0,f.jsxs)(`div`,{className:`review-item mb-20 pb-20`,style:{borderBottom:`1px solid #eee`},children:[(0,f.jsxs)(`div`,{className:`d-flex justify-content-between mb-10`,children:[(0,f.jsx)(`strong`,{children:`Emma Wilson`}),(0,f.jsx)(`span`,{style:{color:`#12947B`},children:`★★★★★`})]}),(0,f.jsx)(`p`,{children:`Love the lightweight formula. Perfect for daily use without feeling heavy.`})]}),(0,f.jsxs)(`div`,{className:`review-item mb-20 pb-20`,style:{borderBottom:`1px solid #eee`},children:[(0,f.jsxs)(`div`,{className:`d-flex justify-content-between mb-10`,children:[(0,f.jsx)(`strong`,{children:`Michael Brown`}),(0,f.jsx)(`span`,{style:{color:`#12947B`},children:`★★★★☆`})]}),(0,f.jsx)(`p`,{children:`Great product, though a bit pricey. Results are noticeable within 2 weeks.`})]}),(0,f.jsxs)(`div`,{className:`review-item mb-20`,children:[(0,f.jsxs)(`div`,{className:`d-flex justify-content-between mb-10`,children:[(0,f.jsx)(`strong`,{children:`Jessica Lee`}),(0,f.jsx)(`span`,{style:{color:`#12947B`},children:`★★★★★`})]}),(0,f.jsx)(`p`,{children:`Amazing! My skin feels refreshed and glowing. Definitely buying again!`})]})]})}),(0,f.jsx)(`div`,{className:`tab-pane fade`,id:`nav-question`,role:`tabpanel`,"aria-labelledby":`nav-question-tab`,children:(0,f.jsxs)(`div`,{className:`product-questions`,children:[(0,f.jsx)(`h4`,{className:`mb-20`,children:`Ask a Question`}),(0,f.jsxs)(`form`,{children:[(0,f.jsxs)(`div`,{className:`mb-20`,children:[(0,f.jsx)(`label`,{className:`form-label`,children:`Your Name`}),(0,f.jsx)(`input`,{type:`text`,className:`form-control`,placeholder:`Enter your name`})]}),(0,f.jsxs)(`div`,{className:`mb-20`,children:[(0,f.jsx)(`label`,{className:`form-label`,children:`Your Email`}),(0,f.jsx)(`input`,{type:`email`,className:`form-control`,placeholder:`Enter your email`})]}),(0,f.jsxs)(`div`,{className:`mb-20`,children:[(0,f.jsx)(`label`,{className:`form-label`,children:`Your Question`}),(0,f.jsx)(`textarea`,{className:`form-control`,rows:`4`,placeholder:`Type your question here...`})]}),(0,f.jsx)(`button`,{type:`submit`,className:`aq-btn-black btn-square`,children:`Submit Question`})]})]})}),(0,f.jsx)(`div`,{className:`tab-pane fade`,id:`nav-faq`,role:`tabpanel`,"aria-labelledby":`nav-faq-tab`,children:(0,f.jsxs)(`div`,{className:`product-faq`,children:[(0,f.jsx)(`h4`,{className:`mb-20`,children:`Frequently Asked Questions`}),(0,f.jsxs)(`div`,{className:`faq-item mb-20 pb-20`,style:{borderBottom:`1px solid #eee`},children:[(0,f.jsx)(`strong`,{className:`d-block mb-10`,children:`Q: Is this product suitable for sensitive skin?`}),(0,f.jsx)(`p`,{children:`A: Yes, this product is formulated to be gentle on all skin types including sensitive skin. However, if you have specific concerns, please do a patch test first.`})]}),(0,f.jsxs)(`div`,{className:`faq-item mb-20 pb-20`,style:{borderBottom:`1px solid #eee`},children:[(0,f.jsx)(`strong`,{className:`d-block mb-10`,children:`Q: How often should I use this product?`}),(0,f.jsx)(`p`,{children:`A: We recommend using this product daily for best results. Apply once in the morning and once in the evening.`})]}),(0,f.jsxs)(`div`,{className:`faq-item mb-20 pb-20`,style:{borderBottom:`1px solid #eee`},children:[(0,f.jsx)(`strong`,{className:`d-block mb-10`,children:`Q: What is the shelf life?`}),(0,f.jsx)(`p`,{children:`A: The product has a shelf life of 24 months from the date of manufacture. Once opened, use within 6 months.`})]}),(0,f.jsxs)(`div`,{className:`faq-item mb-20`,children:[(0,f.jsx)(`strong`,{className:`d-block mb-10`,children:`Q: Is there any warranty or return policy?`}),(0,f.jsx)(`p`,{children:`A: Yes, we offer a 30-day money-back guarantee if you're not satisfied with the product. Please contact our customer service for details.`})]})]})})]})]})})},pe=`rienna_dashboard_v1`,O={dashboard:`dashboard`,orders:`orders`,downloads:`downloads`,invoices:`invoices`,profile:`profile`},k=({userName:e=`Rienna Member`,userEmail:t=``})=>{let n=`/images/p1.webp`,r={name:e,email:t||`member@rienna.com`,referralCode:`RIENNA20`},i=[{id:`#RIN-1001`,date:`2026-03-04`,items:2,amount:42,status:`Delivered`},{id:`#RIN-1002`,date:`2026-03-17`,items:1,amount:32,status:`Delivered`},{id:`#RIN-1003`,date:`2026-04-02`,items:3,amount:74,status:`Delivered`},{id:`#RIN-1004`,date:`2026-04-12`,items:2,amount:56,status:`Shipped`}],a=[{level:`Level 1`,users:6},{level:`Level 2`,users:14},{level:`Level 3`,users:23}],[o,s]=(0,l.useState)(!1),[c,u]=(0,l.useState)(i),[d,p]=(0,l.useState)(a),[m,h]=(0,l.useState)(0),[g,_]=(0,l.useState)(0),[v,y]=(0,l.useState)(0);(0,l.useEffect)(()=>{try{let e=window.localStorage.getItem(pe);if(!e)return;let t=JSON.parse(e);Array.isArray(t.orders)&&u(t.orders),Array.isArray(t.levelReferrals)&&p(t.levelReferrals),typeof t.earningsBalance==`number`&&h(t.earningsBalance),typeof t.totalEarned==`number`&&_(t.totalEarned),typeof t.spentFromEarnings==`number`&&y(t.spentFromEarnings)}catch{}},[]),(0,l.useEffect)(()=>{try{window.localStorage.setItem(pe,JSON.stringify({orders:c,levelReferrals:d,earningsBalance:m,totalEarned:g,spentFromEarnings:v}))}catch{}},[c,d,m,g,v]);let b=c.length,x=(0,l.useMemo)(()=>d.reduce((e,t)=>e+t.users,0),[d]),ee=`https://rienna.com/ref/${r.referralCode}`,S=(0,l.useMemo)(()=>x*2,[x]);(0,l.useEffect)(()=>{_(e=>{let t=Math.max(e,S),n=t-e;return n>0&&h(e=>e+n),t})},[S]);let[C,w]=(0,l.useState)(O.dashboard),te=e=>{let t=document.getElementById(`dash-${e}`);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})};return(0,l.useEffect)(()=>{let e=()=>{let e=String(window.location.hash||``).replace(`#`,``).trim(),t=e===O.orders||e===O.downloads||e===O.invoices||e===O.profile||e===O.dashboard?e:O.dashboard;w(t),window.setTimeout(()=>te(t),0)};return e(),window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]),(0,f.jsx)(`main`,{"data-bg-color":`#F9F9F9`,style:{backgroundColor:`rgb(249, 249, 249)`},children:(0,f.jsx)(`div`,{className:`aq-dashboard-ptb pt-80 pb-120`,children:(0,f.jsx)(`div`,{className:`container`,children:(0,f.jsxs)(`div`,{className:`row`,children:[(0,f.jsx)(`div`,{className:`col-lg-3`,children:(0,f.jsx)(`div`,{className:`aq-dashboard-sidebar-wrap`,children:(0,f.jsxs)(`aside`,{className:`aq-dashboard-sidebar`,children:[(0,f.jsxs)(`div`,{className:`aq-dashboard-profile-info`,children:[(0,f.jsx)(`div`,{className:`aq-dashboard-profile-thumb mb-15`,children:(0,f.jsx)(`img`,{src:n,alt:`Profile`,className:`avatar`})}),(0,f.jsx)(`h3`,{children:r.name}),(0,f.jsx)(`p`,{children:r.email})]}),(0,f.jsxs)(`nav`,{className:`aq-dashboard-sidebar-menu`,children:[(0,f.jsxs)(`a`,{href:`#${O.dashboard}`,className:C===O.dashboard?`active`:``,onClick:()=>w(O.dashboard),children:[(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M0.863852 2.3703C1.03919 1.62288 1.6229 1.03926 2.37033 0.863953C3.01812 0.712015 3.69243 0.712014 4.34022 0.863953C5.08765 1.03926 5.67136 1.62288 5.8467 2.37031C5.99866 3.0181 5.99866 3.69226 5.8467 4.34005C5.67136 5.08748 5.08765 5.6711 4.34022 5.84641C3.69243 5.99834 3.01812 5.99834 2.37033 5.84641C1.6229 5.6711 1.03919 5.08748 0.863852 4.34006C0.711888 3.69227 0.711888 3.01809 0.863852 2.3703Z`,fill:`currentColor`,fillOpacity:`0.15`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,f.jsx)(`path`,{d:`M0.863852 10.9258C1.03919 10.1784 1.6229 9.59477 2.37033 9.41946C3.01812 9.26753 3.69243 9.26753 4.34022 9.41946C5.08765 9.59477 5.67136 10.1784 5.8467 10.9258C5.99866 11.5736 5.99866 12.2478 5.8467 12.8956C5.67136 13.643 5.08765 14.2266 4.34022 14.4019C3.69243 14.5539 3.01812 14.5539 2.37033 14.4019C1.6229 14.2266 1.03919 13.643 0.863852 12.8956C0.711888 12.2478 0.711888 11.5736 0.863852 10.9258Z`,fill:`currentColor`,fillOpacity:`0.15`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,f.jsx)(`path`,{d:`M9.41854 2.3703C9.59388 1.62288 10.1776 1.03926 10.925 0.863953C11.5728 0.712015 12.2471 0.712014 12.8949 0.863953C13.6423 1.03926 14.226 1.62288 14.4014 2.37031C14.5533 3.0181 14.5533 3.69226 14.4014 4.34005C14.226 5.08748 13.6423 5.6711 12.8949 5.84641C12.2471 5.99834 11.5728 5.99834 10.925 5.84641C10.1776 5.6711 9.59388 5.08748 9.41854 4.34006C9.26658 3.69227 9.26658 3.01809 9.41854 2.3703Z`,fill:`currentColor`,fillOpacity:`0.15`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,f.jsx)(`path`,{d:`M9.41854 10.926C9.59388 10.1785 10.1776 9.59493 10.925 9.41962C11.5728 9.26768 12.2471 9.26768 12.8949 9.41962C13.6423 9.59493 14.226 10.1785 14.4014 10.926C14.5533 11.5738 14.5533 12.2479 14.4014 12.8957C14.226 13.6431 13.6423 14.2268 12.8949 14.4021C12.2471 14.554 11.5728 14.554 10.925 14.4021C10.1776 14.2268 9.59388 13.6431 9.41854 12.8957C9.26658 12.2479 9.26658 11.5738 9.41854 10.926Z`,fill:`currentColor`,fillOpacity:`0.15`,stroke:`currentColor`,strokeWidth:`1.5`})]})}),`Dashboard`]}),(0,f.jsxs)(`a`,{href:`#${O.orders}`,className:C===O.orders?`active`:``,onClick:()=>w(O.orders),children:[(0,f.jsx)(`span`,{children:(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`16`,viewBox:`0 0 18 16`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M15.8484 4.25001V3.50001H15.2474L15.1164 4.08653L15.8484 4.25001ZM1.65162 4.25001V3.50001H0.715644L0.919653 4.41348L1.65162 4.25001ZM0.75 3.50001C0.335786 3.50001 0 3.83579 0 4.25001C0 4.66422 0.335786 5.00001 0.75 5.00001V3.50001ZM16.75 5.00001C17.1642 5.00001 17.5 4.66422 17.5 4.25001C17.5 3.83579 17.1642 3.50001 16.75 3.50001V5.00001ZM15.0473 7.35255L14.3234 7.15622L13.5374 10.0543L14.9851 10.447L15.7711 7.54887L15.0473 7.35255ZM3.23875 10.2506L3.9626 10.0543L3.17657 7.15621L1.72888 7.54886L2.51491 10.4469L3.23875 10.2506ZM8.75 14.75V14C7.45224 14 6.96913 13.9916 6.56343 13.8639L6.11291 15.2946C6.7918 15.5084 7.55504 15.5 8.75 15.5V14.75ZM4.07435 12.7311L3.4268 13.1095C4.03868 14.1566 4.98893 14.9407 6.11291 15.2946L6.56343 13.8639C5.8174 13.629 5.15798 13.099 4.7219 12.3527L4.07435 12.7311ZM13.4256 12.7311L14.0732 13.1095C14.4397 12.4823 14.6426 11.7097 14.9851 10.447L13.5374 10.0543C13.171 11.4054 13.0194 11.9397 12.7781 12.3527L13.4256 12.7311ZM11.1618 14.5792L10.9366 13.8639C10.5309 13.9916 10.0478 14 8.75 14V15.5C9.94496 15.5 10.7082 15.5084 11.3871 15.2946L11.1618 14.5792ZM15.8484 4.25001V5.00001H16.75V3.50001H15.8484ZM0.75 5.00001H3.34412V3.50001H0.75V5.00001ZM3.34412 5.00001H14.35V3.50001H3.34412V5.00001ZM14.35 5.00001H15.95V3.50001H14.35V5.00001ZM15.95 5.00001H16.75V3.50001H15.95V5.00001ZM2.38359 4.08653C2.56737 4.90945 2.83618 5.90118 3.17657 7.15622L4.62395 6.76357C4.31211 5.61219 4.06329 4.7006 3.91965 4.41348L2.38359 4.08653ZM14.3234 7.15622C14.6638 5.90118 14.9326 4.90945 15.1164 4.08653L13.5803 4.41348C13.4367 4.7006 13.1879 5.61219 12.876 6.76357L14.3234 7.15622ZM6.4 7.75V11.25H7.9V7.75H6.4ZM9.6 7.75V11.25H11.1V7.75H9.6ZM11.15 0.75L10.5965 1.25608L13.7965 4.75608L14.9036 3.74393L11.7035 0.243923L11.15 0.75ZM7.09763 1.25609L6.54411 0.750013L5.99059 0.243936L2.79059 3.74393L3.89764 4.75608L7.09763 1.25609Z`,fill:`currentColor`})})}),`Orders`]}),(0,f.jsxs)(`a`,{href:`#${O.downloads}`,className:C===O.downloads?`active`:``,onClick:()=>w(O.downloads),children:[(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`15`,viewBox:`0 0 16 15`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M14.75 7.03223C14.75 10.8997 12.125 14.0322 7.75 14.0322C3.375 14.0322 0.75 10.8997 0.75 7.03223`,stroke:`currentColor`,strokeWidth:`1.5`,strokeMiterlimit:`10`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M5.125 6L7.75 8.625L10.375 6`,fill:`#E1E1E5`}),(0,f.jsx)(`path`,{d:`M5.125 6L7.75 8.625L10.375 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeMiterlimit:`10`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M7.75 0.75L7.64575 7.89875`,stroke:`currentColor`,strokeWidth:`1.5`,strokeMiterlimit:`10`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),`Downloads`]}),(0,f.jsxs)(`a`,{href:`#${O.invoices}`,className:C===O.invoices?`active`:``,onClick:()=>w(O.invoices),children:[(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`18`,viewBox:`0 0 16 18`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M3.33368 14.9082C3.98959 14.2043 4.98947 14.2603 5.5654 15.0282L6.3733 16.1081C7.02122 16.964 8.06908 16.964 8.717 16.1081L9.5249 15.0282C10.1008 14.2603 11.1007 14.2043 11.7566 14.9082C13.1804 16.428 14.3403 15.9241 14.3403 13.7964V4.7815C14.3483 1.5579 13.5964 0.75 10.5728 0.75H4.52553C1.50191 0.75 0.75 1.5579 0.75 4.7815V13.7884C0.75 15.9241 1.91785 16.42 3.33368 14.9082Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{opacity:`0.4`,d:`M4.42681 7.94975H4.43399`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{opacity:`0.4`,d:`M6.66406 7.94824H11.0635`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{opacity:`0.4`,d:`M4.42681 4.75054H4.43399`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{opacity:`0.4`,d:`M6.66406 4.74902H11.0635`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),`Invoices`]}),(0,f.jsxs)(`a`,{href:`#`,onClick:e=>e.preventDefault(),children:[(0,f.jsx)(`span`,{children:(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`19`,height:`19`,viewBox:`0 0 19 19`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M0.75 0.75H2.229C3.147 0.75 3.8695 1.54051 3.793 2.45002L3.0875 10.9161C2.9685 12.3016 4.06499 13.4916 5.45899 13.4916H14.5115C15.7355 13.4916 16.8065 12.4886 16.9 11.2731L17.359 4.89805C17.461 3.48704 16.39 2.33951 14.9705 2.33951H3.99701`,stroke:`currentColor`,strokeWidth:`1.5`,strokeMiterlimit:`10`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),`Order Return Request`]}),(0,f.jsxs)(`a`,{href:`#`,onClick:e=>e.preventDefault(),children:[(0,f.jsx)(`span`,{children:(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M8.95935 1.76092L10.1912 4.24501C10.3592 4.59081 10.8071 4.92249 11.1851 4.986L13.4179 5.36003C14.8457 5.59997 15.1817 6.64442 14.1528 7.67475L12.417 9.4249C12.123 9.7213 11.962 10.2929 12.053 10.7022L12.5499 12.8687C12.9419 14.5836 12.039 15.247 10.5342 14.3507L8.4414 13.1016C8.06344 12.8758 7.44051 12.8758 7.05556 13.1016L4.96279 14.3507C3.46495 15.247 2.55505 14.5766 2.94701 12.8687L3.44395 10.7022C3.53494 10.2929 3.37396 9.7213 3.08 9.4249L1.34419 7.67475C0.3223 6.64442 0.651264 5.59997 2.07911 5.36003L4.31186 4.986C4.68282 4.92249 5.13077 4.59081 5.29875 4.24501L6.53061 1.76092C7.20254 0.413025 8.29442 0.413025 8.95935 1.76092Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),`Reviews`]}),(0,f.jsxs)(`a`,{href:`#`,onClick:e=>e.preventDefault(),children:[(0,f.jsx)(`span`,{children:(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`17`,height:`17`,viewBox:`0 0 17 17`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M14.6091 10.9333L10.9302 14.6159C9.41958 16.128 6.96692 16.128 5.44822 14.6159L1.88293 11.0471C0.372356 9.53501 0.372356 7.07991 1.88293 5.5597L5.57004 1.88517C6.34157 1.11287 7.40548 0.69827 8.49374 0.755176L12.5544 0.950284C14.1787 1.02345 15.47 2.31604 15.5512 3.9338L15.7461 7.99854C15.7949 9.09602 15.3807 10.161 14.6091 10.9333Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),`Special Offers`]}),(0,f.jsxs)(`a`,{href:`#${O.profile}`,className:C===O.profile?`active`:``,onClick:()=>w(O.profile),children:[(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`16`,viewBox:`0 0 14 16`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M6.76172 7.74993C8.69472 7.74993 10.2617 6.18294 10.2617 4.24996C10.2617 2.31699 8.69472 0.75 6.76172 0.75C4.82872 0.75 3.26172 2.31699 3.26172 4.24996C3.26172 6.18294 4.82872 7.74993 6.76172 7.74993Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{opacity:`0.4`,d:`M12.776 14.7496C12.776 12.0406 10.081 9.84961 6.763 9.84961C3.445 9.84961 0.75 12.0406 0.75 14.7496`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),`Profile`]}),(0,f.jsxs)(`a`,{href:`#`,onClick:e=>e.preventDefault(),children:[(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`17`,height:`17`,viewBox:`0 0 17 17`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M3.75391 6.7502V5.25015C3.75391 2.76757 4.50391 0.75 8.25391 0.75C12.0039 0.75 12.7539 2.76757 12.7539 5.25015V6.7502`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M12 15.7503H4.5C1.5 15.7503 0.75 15.0003 0.75 12.0002V10.5001C0.75 7.50003 1.5 6.75 4.5 6.75H12C15 6.75 15.75 7.50003 15.75 10.5001V12.0002C15.75 15.0003 15 15.7503 12 15.7503Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),`Security`]}),(0,f.jsxs)(`a`,{href:`#`,onClick:e=>e.preventDefault(),children:[(0,f.jsx)(`span`,{children:(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`16`,viewBox:`0 0 14 16`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M3.77711 1.50571C5.64984 0.481583 7.95174 0.499483 9.8069 1.5526C11.6438 2.62717 12.7603 4.54497 12.7499 6.60797C12.7071 8.65744 11.51 10.5839 10.0135 12.0732C9.14986 12.9367 8.18367 13.7002 7.13472 14.3481C7.02669 14.4069 6.90836 14.4463 6.78556 14.4643C6.66737 14.4595 6.55227 14.4267 6.45065 14.3686C4.84922 13.395 3.44429 12.1522 2.30343 10.7001C1.34879 9.48791 0.80643 8.02342 0.75 6.5055L0.754274 6.28468C0.832219 4.30333 1.97125 2.49327 3.77711 1.50571Z`,stroke:`currentColor`,strokeWidth:`1.5`})})}),`Address`]}),(0,f.jsxs)(`a`,{href:`#`,"data-auth-trigger":`logout`,onClick:e=>e.preventDefault(),children:[(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M7.82813 0.749987C11.6526 0.749987 14.7503 3.34578 14.7503 7.67211C14.7503 11.9984 11.6526 14.5942 7.82812 14.5942`,stroke:`currentColor`,strokeWidth:`1.5`,strokeMiterlimit:`10`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M7.39453 9.99078L9.60961 7.7757L7.39453 5.56062`,stroke:`currentColor`,strokeWidth:`1.5`,strokeMiterlimit:`10`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M0.75 7.77496L9.54975 7.77496`,stroke:`currentColor`,strokeWidth:`1.5`,strokeMiterlimit:`10`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),`Logout`]})]})]})})}),(0,f.jsx)(`div`,{className:`col-lg-9`,children:(0,f.jsxs)(`div`,{className:`aq-dashboard-wrapper pt-30`,children:[(0,f.jsx)(`h3`,{className:`aq-dashboard-title`,id:`dash-${O.dashboard}`,children:`Dashboard`}),(0,f.jsxs)(`div`,{className:`aq-dashboard-content-layout`,children:[(0,f.jsxs)(`div`,{className:`aq-dashboard-box aq-dashboard-welcome-card`,children:[(0,f.jsx)(`img`,{src:n,alt:`Profile`,className:`avatar avatar-lg`}),(0,f.jsxs)(`div`,{className:`welcome-text`,children:[(0,f.jsxs)(`h2`,{children:[`Welcome back `,r.name]}),(0,f.jsx)(`p`,{children:`Manage your account, view orders, and update your preferences from your personal dashboard.`})]})]}),(0,f.jsxs)(`div`,{className:`aq-dashboard-grid`,children:[(0,f.jsxs)(`div`,{className:`aq-dashboard-grid-card aq-dashboard-box`,children:[(0,f.jsx)(`span`,{className:`aq-dashboard-grid-card-badge`,children:b}),(0,f.jsx)(`span`,{className:`aq-dashboard-grid-card-icon`,children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`33`,height:`28`,viewBox:`0 0 33 28`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M26.928 18.394L28.451 13.0119C29.1074 10.692 29.6383 8.81581 30.0031 7.25001H27.1001H5.7761H2.49689C2.86171 8.8158 3.3926 10.692 4.04903 13.0119L5.57196 18.394C6.25873 20.8211 6.60213 22.0347 7.19093 23.0006C8.20614 24.6658 9.76551 25.8861 11.5771 26.4329C12.6278 26.75 13.8352 26.75 16.25 26.75C18.6648 26.75 19.8722 26.75 20.9229 26.4329C22.7345 25.8861 24.2939 24.6658 25.3091 23.0006C25.8979 22.0347 26.2413 20.8211 26.928 18.394Z`,fill:`#F9F9F9`}),(0,f.jsx)(`path`,{d:`M28.451 13.0119L27.7293 12.8077L26.2064 18.1898L27.6497 18.5982L29.1726 13.2161L28.451 13.0119ZM5.57196 18.394L6.29363 18.1898L4.77069 12.8077L3.32736 13.2161L4.85029 18.5982L5.57196 18.394Z`,fill:`#37383A`})]})}),(0,f.jsx)(`h3`,{className:`aq-dashboard-grid-card-title`,children:`View Orders`}),(0,f.jsxs)(`p`,{children:[`Track your recent orders and `,(0,f.jsx)(`br`,{}),` order history`]}),(0,f.jsxs)(`button`,{type:`button`,className:`aq-dashboard-grid-card-btn`,onClick:()=>{w(O.orders),window.location.hash=O.orders},children:[`View Orders`,(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M0.648438 8.65002L8.64844 0.650024`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M0.648438 0.650024H8.64844V8.65002`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})]}),(0,f.jsxs)(`div`,{className:`aq-dashboard-grid-card aq-dashboard-box`,children:[(0,f.jsx)(`span`,{className:`aq-dashboard-grid-card-icon`,children:(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`28`,height:`32`,viewBox:`0 0 28 32`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M7.37179 2.40313C11.4684 0.162837 16.5038 0.201994 20.562 2.5057C24.5802 4.85632 27.0224 9.05149 26.9998 13.5643C26.9062 18.0475 24.2874 22.2618 21.014 25.5196C19.1247 27.4084 17.0112 29.0785 14.7166 30.496C14.4803 30.6246 14.2214 30.7107 13.9528 30.75C13.6942 30.7396 13.4425 30.6677 13.2202 30.5408C9.71705 28.411 6.64375 25.6924 4.14812 22.5158C2.05985 19.8642 0.87344 16.6606 0.75 13.3402L0.759349 12.8571C0.929854 8.5229 3.42149 4.5634 7.37179 2.40313ZM15.5761 9.6349C13.9108 8.96865 11.9907 9.33062 10.7125 10.5518C9.43423 11.773 9.04995 13.6125 9.73906 15.2114C10.4282 16.8103 12.0547 17.8533 13.8593 17.8533C15.0414 17.8613 16.1779 17.4156 17.0153 16.6155C17.8527 15.8155 18.3215 14.7276 18.3174 13.5942C18.3236 11.8642 17.2415 10.3011 15.5761 9.6349Z`,stroke:`#37383A`,strokeWidth:`1.5`})})}),(0,f.jsx)(`h3`,{className:`aq-dashboard-grid-card-title`,children:`Manage Address`}),(0,f.jsxs)(`p`,{children:[`Update your shipping and `,(0,f.jsx)(`br`,{}),` billing addresses`]}),(0,f.jsxs)(`button`,{type:`button`,className:`aq-dashboard-grid-card-btn`,children:[`Manage Address`,(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M0.648438 8.65002L8.64844 0.650024`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M0.648438 0.650024H8.64844V8.65002`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})]}),(0,f.jsxs)(`div`,{className:`aq-dashboard-grid-card aq-dashboard-box`,children:[(0,f.jsx)(`span`,{className:`aq-dashboard-grid-card-icon`,children:(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`28`,viewBox:`0 0 24 28`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M23.084 26.7496C23.084 21.7185 18.079 17.6494 11.917 17.6494C5.755 17.6494 0.75 21.7185 0.75 26.7496M18.4141 7.25014C18.4141 10.8401 15.5039 13.7503 11.9141 13.7503C8.32421 13.7503 5.41406 10.8401 5.41406 7.25014C5.41406 3.66021 8.32421 0.75 11.9141 0.75C15.5039 0.75 18.4141 3.66021 18.4141 7.25014Z`,stroke:`#37383A`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,f.jsx)(`h3`,{className:`aq-dashboard-grid-card-title`,children:`Profile Settings`}),(0,f.jsxs)(`p`,{children:[`Edit your profile and account `,(0,f.jsx)(`br`,{}),` details`]}),(0,f.jsxs)(`button`,{type:`button`,className:`aq-dashboard-grid-card-btn`,onClick:()=>document.querySelector(`.referral-level-list`)?.scrollIntoView({behavior:`smooth`}),children:[`Edit Profile`,(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M0.648438 8.65002L8.64844 0.650024`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M0.648438 0.650024H8.64844V8.65002`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})]})]}),(0,f.jsxs)(`div`,{className:`aq-dashboard-box aq-dashboard-cta-bar`,children:[(0,f.jsxs)(`div`,{className:`cta-left`,children:[(0,f.jsx)(`div`,{className:`icon-circle`,children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`60`,height:`60`,viewBox:`0 0 60 60`,fill:`none`,children:[(0,f.jsx)(`rect`,{width:`60`,height:`60`,rx:`30`,fill:`#F9F9F9`}),(0,f.jsx)(`path`,{d:`M38.3835 33.483L39.5257 29.4464C40.018 27.7065 40.4162 26.2994 40.6898 25.125H38.5126H22.5196H20.0602C20.3338 26.2993 20.732 27.7065 21.2243 29.4464L22.3665 33.483C22.8815 35.3033 23.1391 36.2135 23.5807 36.9379C24.3421 38.1869 25.5116 39.1021 26.8703 39.5122C27.6583 39.75 28.5639 39.75 30.375 39.75C32.1861 39.75 33.0917 39.75 33.8797 39.5122C35.2384 39.1021 36.4079 38.1869 37.1693 36.9379C37.6109 36.2135 37.8684 35.3034 38.3835 33.483Z`,fill:`#F9F9F9`})]})}),(0,f.jsxs)(`div`,{className:`cta-text`,children:[(0,f.jsx)(`h3`,{children:`Ready to start shopping?`}),(0,f.jsx)(`p`,{children:`No orders yet. Explore our products and find something you love.`})]})]}),(0,f.jsxs)(`button`,{type:`button`,className:`aq-dashboard-cta-bar-btn`,onClick:()=>window.location.href=`/?page=product-details&product=day-cream`,children:[`Browse Products`,(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M0.648438 8.65002L8.64844 0.650024`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M0.648438 0.650024H8.64844V8.65002`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})]}),(0,f.jsxs)(`div`,{className:`aq-dashboard-box`,style:{padding:25,marginBottom:20},id:`dash-${O.profile}`,children:[(0,f.jsx)(`h5`,{className:`mb-15`,children:`Profile`}),(0,f.jsxs)(`div`,{className:`row g-3`,children:[(0,f.jsx)(`div`,{className:`col-md-6`,children:(0,f.jsxs)(`div`,{style:{marginBottom:0},children:[(0,f.jsx)(`h5`,{className:`mb-10`,children:`Name`}),(0,f.jsx)(`div`,{className:`aq-form-control`,style:{background:`#fff`},children:r.name})]})}),(0,f.jsx)(`div`,{className:`col-md-6`,children:(0,f.jsxs)(`div`,{style:{marginBottom:0},children:[(0,f.jsx)(`h5`,{className:`mb-10`,children:`Email`}),(0,f.jsx)(`div`,{className:`aq-form-control`,style:{background:`#fff`},children:r.email})]})})]})]}),(0,f.jsxs)(`div`,{className:`aq-dashboard-box`,style:{padding:25,marginBottom:20},children:[(0,f.jsx)(`h5`,{className:`mb-15`,children:`Earnings Wallet`}),(0,f.jsxs)(`div`,{className:`dashboard-wallet-row`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`mb-0`,style:{color:`#6f6a67`,fontSize:14},children:`Balance`}),(0,f.jsxs)(`h4`,{className:`mb-0`,children:[`$`,m.toFixed(2)]})]}),(0,f.jsxs)(`div`,{className:`text-end`,children:[(0,f.jsx)(`p`,{className:`mb-0`,style:{color:`#6f6a67`,fontSize:14},children:`Total earned`}),(0,f.jsxs)(`strong`,{children:[`$`,g.toFixed(2)]})]})]}),(0,f.jsxs)(`div`,{className:`dashboard-wallet-row mt-10`,children:[(0,f.jsx)(`span`,{style:{color:`#6f6a67`,fontSize:14},children:`Spent from earnings`}),(0,f.jsxs)(`strong`,{children:[`$`,v.toFixed(2)]})]})]}),(0,f.jsxs)(`div`,{className:`aq-dashboard-box`,style:{padding:25,marginBottom:20},children:[(0,f.jsx)(`h5`,{className:`mb-15`,children:`Referral Link`}),(0,f.jsxs)(`div`,{className:`referral-row`,children:[(0,f.jsx)(`input`,{type:`text`,readOnly:!0,value:ee,className:`aq-form-control referral-input`}),(0,f.jsx)(`button`,{type:`button`,className:`aq-btn-black radius-30`,onClick:async()=>{try{await navigator.clipboard.writeText(ee),s(!0),window.setTimeout(()=>s(!1),1500)}catch{s(!1)}},children:o?`Copied`:`Copy Link`})]})]}),(0,f.jsxs)(`div`,{className:`aq-dashboard-box`,style:{padding:25,marginBottom:20},id:`dash-${O.downloads}`,children:[(0,f.jsx)(`h5`,{className:`mb-15`,children:`Downloads`}),(0,f.jsx)(`p`,{className:`mb-0`,style:{color:`#6f6a67`},children:`No downloads available right now.`})]}),(0,f.jsxs)(`div`,{className:`aq-dashboard-box`,style:{padding:25,marginBottom:20},id:`dash-${O.invoices}`,children:[(0,f.jsx)(`h5`,{className:`mb-15`,children:`Invoices`}),(0,f.jsx)(`p`,{className:`mb-0`,style:{color:`#6f6a67`},children:`No invoices generated yet.`})]}),(0,f.jsxs)(`div`,{className:`row g-3`,children:[(0,f.jsx)(`div`,{className:`col-lg-7`,children:(0,f.jsxs)(`div`,{className:`aq-dashboard-box`,style:{padding:25},id:`dash-${O.orders}`,children:[(0,f.jsx)(`h5`,{className:`mb-15`,children:`Shopping Records`}),(0,f.jsx)(`div`,{className:`dashboard-table-wrap`,children:(0,f.jsxs)(`table`,{className:`dashboard-table`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`Order ID`}),(0,f.jsx)(`th`,{children:`Date`}),(0,f.jsx)(`th`,{children:`Items`}),(0,f.jsx)(`th`,{children:`Amount`}),(0,f.jsx)(`th`,{children:`Status`})]})}),(0,f.jsx)(`tbody`,{children:c.map(e=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:e.id}),(0,f.jsx)(`td`,{children:e.date}),(0,f.jsx)(`td`,{children:e.items}),(0,f.jsxs)(`td`,{children:[`$`,e.amount.toFixed(2)]}),(0,f.jsx)(`td`,{children:e.status})]},e.id))})]})})]})}),(0,f.jsx)(`div`,{className:`col-lg-5`,children:(0,f.jsxs)(`div`,{className:`aq-dashboard-box`,style:{padding:25},children:[(0,f.jsx)(`h5`,{className:`mb-15`,children:`Referral Level Stats`}),(0,f.jsx)(`ul`,{className:`referral-level-list`,children:d.map(e=>(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`span`,{children:e.level}),(0,f.jsxs)(`strong`,{children:[e.users,` users`]})]},e.level))})]})})]})]})]})})]})})})})},me=`http://127.0.0.1:8000/api`.replace(/\/+$/,``),he=e=>`${me}${String(e||``).startsWith(`/`)?e:`/${e}`}`,ge=()=>!!me,_e=async(e,t={})=>{if(!ge())throw Error(`API_BASE_URL_NOT_CONFIGURED`);let{method:n=`GET`,body:r,headers:i={},signal:a}=t,o=await fetch(he(e),{method:n,headers:{"Content-Type":`application/json`,...i},body:r?JSON.stringify(r):void 0,signal:a}),s=(o.headers.get(`content-type`)||``).includes(`application/json`)?await o.json():await o.text();if(!o.ok){let e=s&&typeof s==`object`&&(s.message||s.error)||`Request failed with status ${o.status}`;throw Error(String(e))}return s},ve=async e=>_e(`/contact`,{method:`POST`,body:e}),ye=()=>{let[e,t]=(0,l.useState)(``);return(0,f.jsxs)(`main`,{children:[(0,f.jsx)(`div`,{className:`aq-breadcrumb-ptb pt-100`,children:(0,f.jsx)(`div`,{className:`container`,children:(0,f.jsx)(`div`,{className:`row`,children:(0,f.jsx)(`div`,{className:`col-lg-12`,children:(0,f.jsxs)(`div`,{className:`aq-breadcrumb-top-heading text-center pb-60`,children:[(0,f.jsx)(`span`,{className:`aq-blog-inner-top-subtitle`,children:`Get in Touch`}),(0,f.jsxs)(`h2`,{className:`aq-blog-inner-top-title`,children:[`Contact our experts `,(0,f.jsx)(`br`,{}),` to start working together`]})]})})})})}),(0,f.jsx)(`div`,{className:`aq-contact-info-area pb-60`,children:(0,f.jsx)(`div`,{className:`container container-1330`,children:(0,f.jsxs)(`div`,{className:`row gx-2`,children:[(0,f.jsx)(`div`,{className:`col-lg-3 col-md-6`,children:(0,f.jsxs)(`div`,{className:`aq-contact-info-wrap text-center mb-30`,"data-bg-color":`#F9F9F9`,children:[(0,f.jsx)(`span`,{className:`aq-contact-info-icon d-inline-block mb-50`,children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`30`,height:`40`,viewBox:`0 0 30 40`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M17.0243 13.2745L19.5785 18.383C19.9268 19.0796 20.8556 19.7762 21.6296 19.8923L26.2543 20.6663C29.2149 21.1694 29.9115 23.2979 27.783 25.4264L24.1839 29.0256C23.584 29.6254 23.2357 30.8058 23.4292 31.6572L24.4548 36.1271C25.2675 39.6488 23.3905 41.0227 20.2752 39.1844L15.9407 36.6109C15.1473 36.1465 13.8702 36.1465 13.0769 36.6109L8.74241 39.1844C5.62703 41.0227 3.75006 39.6488 4.56277 36.1271L5.58838 31.6572C5.78188 30.8252 5.43355 29.6448 4.8337 29.0256L1.23459 25.4264C-0.893924 23.2979 -0.197361 21.15 2.76322 20.6663L7.38793 19.8923C8.16194 19.7568 9.09074 19.0796 9.43905 18.383L11.9933 13.2745C13.3671 10.5074 15.6504 10.5074 17.0243 13.2745Z`,fill:`currentcolor`}),(0,f.jsx)(`path`,{opacity:`0.4`,d:`M2.90439 16.4477C2.11103 16.4477 1.45312 15.7898 1.45312 14.9964V1.45126C1.45312 0.657907 2.11103 0 2.90439 0C3.69774 0 4.35565 0.657907 4.35565 1.45126V14.9964C4.35565 15.7898 3.69774 16.4477 2.90439 16.4477Z`,fill:`currentcolor`}),(0,f.jsx)(`path`,{opacity:`0.4`,d:`M26.1231 16.4477C25.3298 16.4477 24.6719 15.7898 24.6719 14.9964V1.45126C24.6719 0.657907 25.3298 0 26.1231 0C26.9165 0 27.5744 0.657907 27.5744 1.45126V14.9964C27.5744 15.7898 26.9165 16.4477 26.1231 16.4477Z`,fill:`currentcolor`}),(0,f.jsx)(`path`,{opacity:`0.4`,d:`M14.5138 6.77257C13.7204 6.77257 13.0625 6.11466 13.0625 5.3213V1.45126C13.0625 0.657907 13.7204 0 14.5138 0C15.3071 0 15.965 0.657907 15.965 1.45126V5.3213C15.965 6.11466 15.3071 6.77257 14.5138 6.77257Z`,fill:`currentcolor`})]})}),(0,f.jsx)(`h3`,{className:`aq-contact-info-title`,children:`Feedbacks`}),(0,f.jsx)(`p`,{children:`Speak to our Friendly team.`}),(0,f.jsx)(`a`,{href:`mailto:Support@gmail.com`,children:`Support@gmail.com`})]})}),(0,f.jsx)(`div`,{className:`col-lg-3 col-md-6`,children:(0,f.jsxs)(`div`,{className:`aq-contact-info-wrap text-center mb-30`,"data-bg-color":`#F9F9F9`,children:[(0,f.jsx)(`span`,{className:`aq-contact-info-icon d-inline-block mb-50`,children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`36`,height:`36`,viewBox:`0 0 36 36`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M26.4339 16.1254C25.7889 16.1254 25.2789 15.6004 25.2789 14.9704C25.2789 14.4154 24.7239 13.2604 23.7939 12.2554C22.8789 11.2804 21.8739 10.7104 21.0339 10.7104C20.3889 10.7104 19.8789 10.1854 19.8789 9.55539C19.8789 8.92539 20.4039 8.40039 21.0339 8.40039C22.5339 8.40039 24.1089 9.21039 25.4889 10.6654C26.7789 12.0304 27.6039 13.7254 27.6039 14.9554C27.6039 15.6004 27.0789 16.1254 26.4339 16.1254Z`,fill:`currentcolor`}),(0,f.jsx)(`path`,{d:`M31.8534 16.125C31.2084 16.125 30.6984 15.6 30.6984 14.97C30.6984 9.645 26.3634 5.325 21.0534 5.325C20.4084 5.325 19.8984 4.8 19.8984 4.17C19.8984 3.54 20.4084 3 21.0384 3C27.6384 3 33.0084 8.37 33.0084 14.97C33.0084 15.6 32.4834 16.125 31.8534 16.125Z`,fill:`currentcolor`}),(0,f.jsx)(`path`,{d:`M17.6889 21.315L12.7839 26.22C12.2439 25.74 11.7189 25.245 11.2089 24.735C9.66391 23.175 8.26891 21.54 7.02391 19.83C5.79391 18.12 4.80391 16.41 4.08391 14.715C3.36391 13.005 3.00391 11.37 3.00391 9.81C3.00391 8.79 3.18391 7.815 3.54391 6.915C3.90391 6 4.47391 5.16 5.26891 4.41C6.22891 3.465 7.27891 3 8.38891 3C8.80891 3 9.22891 3.09 9.60391 3.27C9.99391 3.45 10.3389 3.72 10.6089 4.11L14.0889 9.015C14.3589 9.39 14.5539 9.735 14.6889 10.065C14.8239 10.38 14.8989 10.695 14.8989 10.98C14.8989 11.34 14.7939 11.7 14.5839 12.045C14.3889 12.39 14.1039 12.75 13.7439 13.11L12.6039 14.295C12.4389 14.46 12.3639 14.655 12.3639 14.895C12.3639 15.015 12.3789 15.12 12.4089 15.24C12.4539 15.36 12.4989 15.45 12.5289 15.54C12.7989 16.035 13.2639 16.68 13.9239 17.46C14.5989 18.24 15.3189 19.035 16.0989 19.83C16.6389 20.355 17.1639 20.865 17.6889 21.315Z`,fill:`currentcolor`}),(0,f.jsx)(`path`,{d:`M32.9652 27.4955C32.9652 27.9155 32.8902 28.3505 32.7402 28.7705C32.6952 28.8905 32.6502 29.0105 32.5902 29.1305C32.3352 29.6705 32.0052 30.1805 31.5702 30.6605C30.8352 31.4705 30.0252 32.0555 29.1102 32.4305C29.0952 32.4305 29.0802 32.4455 29.0652 32.4455C28.1802 32.8055 27.2202 33.0005 26.1852 33.0005C24.6552 33.0005 23.0202 32.6405 21.2952 31.9055C19.5702 31.1705 17.8452 30.1805 16.1352 28.9355C15.5502 28.5005 14.9652 28.0655 14.4102 27.6005L19.3152 22.6955C19.7352 23.0105 20.1102 23.2505 20.4252 23.4155C20.5002 23.4455 20.5902 23.4905 20.6952 23.5355C20.8152 23.5805 20.9352 23.5955 21.0702 23.5955C21.3252 23.5955 21.5202 23.5055 21.6852 23.3405L22.8252 22.2155C23.2002 21.8405 23.5602 21.5555 23.9052 21.3755C24.2502 21.1655 24.5952 21.0605 24.9702 21.0605C25.2552 21.0605 25.5552 21.1205 25.8852 21.2555C26.2152 21.3905 26.5602 21.5855 26.9352 21.8405L31.9002 25.3655C32.2902 25.6355 32.5602 25.9505 32.7252 26.3255C32.8752 26.7005 32.9652 27.0755 32.9652 27.4955Z`,fill:`currentcolor`})]})}),(0,f.jsx)(`h3`,{className:`aq-contact-info-title`,children:`Call Us`}),(0,f.jsx)(`p`,{children:`Mon-Fri from 8am to 5pm`}),(0,f.jsx)(`a`,{href:`tel:+15550000000`,children:`+1(555) 000-0000`})]})}),(0,f.jsx)(`div`,{className:`col-lg-3 col-md-6`,children:(0,f.jsxs)(`div`,{className:`aq-contact-info-wrap text-center mb-30`,"data-bg-color":`#F9F9F9`,children:[(0,f.jsx)(`span`,{className:`aq-contact-info-icon d-inline-block mb-50`,children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`26`,height:`30`,viewBox:`0 0 26 30`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M25.6097 9.80488C24.0731 3.0439 18.1756 0 12.9951 0C12.9951 0 12.9951 0 12.9805 0C7.8146 0 1.90241 3.02927 0.365822 9.79024C-1.34637 17.3415 3.27802 23.7366 7.46338 27.761C9.0146 29.2537 11.0048 30 12.9951 30C14.9853 30 16.9756 29.2537 18.5122 27.761C22.6975 23.7366 27.3219 17.3561 25.6097 9.80488Z`,fill:`currentcolor`}),(0,f.jsx)(`path`,{d:`M12.9965 17.1365C15.5424 17.1365 17.6062 15.0726 17.6062 12.5267C17.6062 9.98085 15.5424 7.91699 12.9965 7.91699C10.4506 7.91699 8.38672 9.98085 8.38672 12.5267C8.38672 15.0726 10.4506 17.1365 12.9965 17.1365Z`,fill:`white`})]})}),(0,f.jsx)(`h3`,{className:`aq-contact-info-title`,children:`Visit Us`}),(0,f.jsx)(`p`,{children:`Visit our office HQ.`}),(0,f.jsx)(`a`,{href:`https://maps.google.com/?q=77+Robinson+Road`,children:`77 Robinson Road #33-01`})]})}),(0,f.jsx)(`div`,{className:`col-lg-3 col-md-6`,children:(0,f.jsxs)(`div`,{className:`aq-contact-info-wrap text-center mb-30`,"data-bg-color":`#F9F9F9`,children:[(0,f.jsx)(`span`,{className:`aq-contact-info-icon d-inline-block mb-50`,children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`30`,height:`30`,viewBox:`0 0 30 30`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z`,fill:`currentcolor`}),(0,f.jsx)(`path`,{d:`M20.5737 20.8976C20.3787 20.8976 20.1837 20.8526 20.0037 20.7326L15.3537 17.9576C14.1987 17.2676 13.3438 15.7526 13.3438 14.4176V8.26758C13.3438 7.65258 13.8537 7.14258 14.4687 7.14258C15.0837 7.14258 15.5937 7.65258 15.5937 8.26758V14.4176C15.5937 14.9576 16.0437 15.7526 16.5087 16.0226L21.1587 18.7976C21.6987 19.1126 21.8637 19.8026 21.5487 20.3426C21.3237 20.7026 20.9487 20.8976 20.5737 20.8976Z`,fill:`white`})]})}),(0,f.jsx)(`h3`,{className:`aq-contact-info-title`,children:`Open Time:`}),(0,f.jsx)(`p`,{children:`Office opening hours`}),(0,f.jsx)(`a`,{href:`tel:+15550000000`,children:`Mon-Fri from 8am to 5pm`})]})})]})})}),(0,f.jsxs)(`div`,{className:`aq-contact-ptb p-relative`,"data-bg-color":`#F2F2F2`,children:[(0,f.jsx)(`div`,{className:`aq-contact-map`,children:(0,f.jsx)(`iframe`,{src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002818075!2d-74.1443121872927!3d40.69728463485858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1745055504744!5m2!1sen!2sbd`,allowFullScreen:!0,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,title:`Location map`})}),(0,f.jsx)(`div`,{className:`container`,children:(0,f.jsx)(`div`,{className:`row justify-content-lg-end`,children:(0,f.jsx)(`div`,{className:`col-lg-6`,children:(0,f.jsxs)(`div`,{className:`aq-contact-us-wrap pt-120 pb-120`,children:[(0,f.jsx)(`h4`,{className:`aq-contact-us-title mb-30`,children:`Send a Message 👍🏻`}),(0,f.jsx)(`form`,{id:`contact-form`,action:`#`,method:`POST`,onSubmit:async e=>{e.preventDefault();let n=new FormData(e.currentTarget),r=String(n.get(`name`)||``).trim(),i=String(n.get(`email`)||``).trim(),a=String(n.get(`subject`)||``).trim(),o=String(n.get(`message`)||``).trim();if(!r||!i||!a||!o){t(`Please fill all required fields.`);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){t(`Please enter a valid email address.`);return}if(ge())try{await ve({name:r,email:i,subject:a,message:o})}catch(e){t(e?.message||`Failed to send message. Please try again.`);return}t(`Message sent successfully. We will contact you soon.`),e.currentTarget.reset()},children:(0,f.jsxs)(`div`,{className:`row`,children:[(0,f.jsx)(`div`,{className:`col-lg-6`,children:(0,f.jsxs)(`div`,{className:`aq-contact-form-input mb-20`,children:[(0,f.jsx)(`label`,{className:`aq-form-label`,children:`Your Name *`}),(0,f.jsx)(`input`,{className:`aq-form-control h-56 brr-0`,placeholder:`your name`,name:`name`,type:`text`})]})}),(0,f.jsx)(`div`,{className:`col-lg-6`,children:(0,f.jsxs)(`div`,{className:`aq-contact-form-input mb-20`,children:[(0,f.jsx)(`label`,{className:`aq-form-label`,children:`Email Address *`}),(0,f.jsx)(`input`,{className:`aq-form-control h-56 brr-0`,placeholder:`your email`,name:`email`,type:`email`})]})}),(0,f.jsx)(`div`,{className:`col-lg-12`,children:(0,f.jsxs)(`div`,{className:`aq-contact-form-input mb-20`,children:[(0,f.jsx)(`label`,{className:`aq-form-label`,children:`Subject *`}),(0,f.jsx)(`input`,{className:`aq-form-control h-56 brr-0`,placeholder:`subject`,name:`subject`,type:`text`})]})}),(0,f.jsxs)(`div`,{className:`col-lg-12`,children:[(0,f.jsxs)(`div`,{className:`aq-contact-form-input mb-20`,children:[(0,f.jsx)(`label`,{className:`aq-form-label`,children:`Your message *`}),(0,f.jsx)(`textarea`,{className:`aq-form-control brr-0`,placeholder:`message`,name:`message`})]}),(0,f.jsxs)(`div`,{className:`aq-contact-remeber mb-20`,children:[(0,f.jsx)(`input`,{className:`aq-form-checkbox`,id:`remeberinput`,type:`checkbox`}),(0,f.jsx)(`label`,{className:`aq-form-checkbox-label`,htmlFor:`remeberinput`,children:`Save my name, email, and website in this browser for the next time I comment.`})]}),(0,f.jsxs)(`div`,{className:`aq-contact-form-btn`,children:[(0,f.jsxs)(`button`,{className:`aq-btn-subscribe w-100`,type:`submit`,children:[`Send message`,` `,(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M0.898438 6.90039H12.8984`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M6.89844 0.900391L12.8984 6.90039L6.89844 12.9004`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),(0,f.jsx)(`p`,{className:`ajax-response mt-5`,children:e})]})]})]})})]})})})})]}),(0,f.jsx)(`div`,{className:`aq-contact-faq-area pt-120 pb-100`,children:(0,f.jsx)(`div`,{className:`container container-1330`,children:(0,f.jsxs)(`div`,{className:`row`,children:[(0,f.jsx)(`div`,{className:`col-lg-5`,children:(0,f.jsxs)(`div`,{className:`aq-contact-faq-title-box mb-40`,children:[(0,f.jsx)(`span`,{className:`aq-section-subtitle mb-10`,children:`Faq’s section`}),(0,f.jsxs)(`h4`,{className:`aq-section-title fs-54 ff-onest-med mb-20`,children:[`Frequently `,(0,f.jsx)(`br`,{}),` Asked Questions`]}),(0,f.jsx)(`div`,{className:`aq-contact-faq-btn`,children:(0,f.jsxs)(`a`,{className:`aq-btn-black`,href:`mailto:Support@gmail.com`,children:[`Contact us`,(0,f.jsx)(`span`,{children:(0,f.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M0.898438 6.90039H12.8984`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M6.89844 0.900391L12.8984 6.90039L6.89844 12.9004`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})})]})}),(0,f.jsx)(`div`,{className:`col-lg-7`,children:(0,f.jsx)(`div`,{className:`aq-faq-wrap`,children:(0,f.jsxs)(`div`,{className:`accordion`,id:`accordionExample`,children:[(0,f.jsxs)(`div`,{className:`accordion-items`,children:[(0,f.jsx)(`div`,{className:`accordion-header`,children:(0,f.jsxs)(`button`,{className:`accordion-buttons`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#collapseOne`,"aria-expanded":`true`,"aria-controls":`collapseOne`,children:[`What is the return process?`,(0,f.jsx)(`span`,{className:`aq-faq-icon`})]})}),(0,f.jsx)(`div`,{id:`collapseOne`,className:`accordion-collapse collapse show`,"data-bs-parent":`#accordionExample`,children:(0,f.jsx)(`div`,{className:`accordion-body`,children:(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})})]}),(0,f.jsxs)(`div`,{className:`accordion-items`,children:[(0,f.jsx)(`div`,{className:`accordion-header`,children:(0,f.jsxs)(`button`,{className:`accordion-buttons collapsed`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#collapseTwo`,"aria-expanded":`false`,"aria-controls":`collapseTwo`,children:[`Can I cancel my order after placing it?`,(0,f.jsx)(`span`,{className:`aq-faq-icon`})]})}),(0,f.jsx)(`div`,{id:`collapseTwo`,className:`accordion-collapse collapse`,"data-bs-parent":`#accordionExample`,children:(0,f.jsx)(`div`,{className:`accordion-body`,children:(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})})]}),(0,f.jsxs)(`div`,{className:`accordion-items`,children:[(0,f.jsx)(`div`,{className:`accordion-header`,children:(0,f.jsxs)(`button`,{className:`accordion-buttons collapsed`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#collapseThree`,"aria-expanded":`false`,"aria-controls":`collapseThree`,children:[`How can I check the status of my order?`,(0,f.jsx)(`span`,{className:`aq-faq-icon`})]})}),(0,f.jsx)(`div`,{id:`collapseThree`,className:`accordion-collapse collapse`,"data-bs-parent":`#accordionExample`,children:(0,f.jsx)(`div`,{className:`accordion-body`,children:(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})})]}),(0,f.jsxs)(`div`,{className:`accordion-items`,children:[(0,f.jsx)(`div`,{className:`accordion-header`,children:(0,f.jsxs)(`button`,{className:`accordion-buttons collapsed`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#collapseFour`,"aria-expanded":`false`,"aria-controls":`collapseFour`,children:[`Which items are not eligible for return?`,(0,f.jsx)(`span`,{className:`aq-faq-icon`})]})}),(0,f.jsx)(`div`,{id:`collapseFour`,className:`accordion-collapse collapse`,"data-bs-parent":`#accordionExample`,children:(0,f.jsx)(`div`,{className:`accordion-body`,children:(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})})]}),(0,f.jsxs)(`div`,{className:`accordion-items`,children:[(0,f.jsx)(`div`,{className:`accordion-header`,children:(0,f.jsxs)(`button`,{className:`accordion-buttons collapsed`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#collapseFive`,"aria-expanded":`false`,"aria-controls":`collapseFive`,children:[`How long does it take to receive a refund after a return?`,(0,f.jsx)(`span`,{className:`aq-faq-icon`})]})}),(0,f.jsx)(`div`,{id:`collapseFive`,className:`accordion-collapse collapse`,"data-bs-parent":`#accordionExample`,children:(0,f.jsx)(`div`,{className:`accordion-body`,children:(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})})]}),(0,f.jsxs)(`div`,{className:`accordion-items`,children:[(0,f.jsx)(`div`,{className:`accordion-header`,children:(0,f.jsxs)(`button`,{className:`accordion-buttons collapsed`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#collapseSix`,"aria-expanded":`false`,"aria-controls":`collapseSix`,children:[`What should I do if I receive a damaged or incorrect product?`,(0,f.jsx)(`span`,{className:`aq-faq-icon`})]})}),(0,f.jsx)(`div`,{id:`collapseSix`,className:`accordion-collapse collapse`,"data-bs-parent":`#accordionExample`,children:(0,f.jsx)(`div`,{className:`accordion-body`,children:(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})})]})]})})})]})})})]})},be=async e=>_e(`/orders`,{method:`POST`,body:e}),xe=async({amount:e,currency:t=`INR`,receipt:n})=>_e(`/payments/inr/create-order`,{method:`POST`,body:{amount:e,currency:t,receipt:n}}),Se=async e=>_e(`/payments/inr/verify`,{method:`POST`,body:e}),Ce=async({usd_amount:e,network:t=`TRON-NILE`})=>_e(`/payments/usdt/create-intent`,{method:`POST`,body:{usd_amount:e,network:t}}),we=async e=>_e(`/payments/usdt/check-intent`,{method:`POST`,body:e}),Te=`rienna_dashboard_v1`,Ee=()=>{try{let e=window.localStorage.getItem(Te);return e?JSON.parse(e):null}catch{return null}},De=e=>{try{window.localStorage.setItem(Te,JSON.stringify(e))}catch{}},Oe=e=>{let t=Ee()||{};t.orders=Array.isArray(t.orders)?t.orders:[],t.orders.unshift(e),De(t)},ke=e=>{let t=Ee()||{};typeof t.earningsBalance!=`number`&&(t.earningsBalance=0),typeof t.spentFromEarnings!=`number`&&(t.spentFromEarnings=0),t.earningsBalance-=e,t.spentFromEarnings+=e,De(t)},Ae=()=>{let e=Ee();return e&&typeof e.earningsBalance==`number`?e.earningsBalance:0},je=e=>{let t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`},Me=()=>{let e=`rienna@upi`,[t,n]=(0,l.useState)(!1),[r,i]=(0,l.useState)(null),[a,o]=(0,l.useState)(!1),[s,c]=(0,l.useState)(!1),[u,d]=(0,l.useState)(null),[p,m]=(0,l.useState)(null),[h,g]=(0,l.useState)(!1),[_,v]=(0,l.useState)(!1),[y,b]=(0,l.useState)(``),[x,ee]=(0,l.useState)(!1),[S,C]=(0,l.useState)(`05:00`),w=(0,l.useRef)(null),te=(0,l.useRef)(null),ne=(0,l.useRef)(null),T=()=>({fullName:String(document.getElementById(`checkoutFullName`)?.value||``).trim(),mobile:String(document.getElementById(`checkoutMobile`)?.value||``).trim(),pincode:String(document.getElementById(`checkoutPincode`)?.value||``).trim(),address:String(document.getElementById(`checkoutAddress`)?.value||``).trim(),email:String(document.getElementById(`checkoutEmail`)?.value||``).trim()}),re=e=>{e.preventDefault();let t=String(e.currentTarget.querySelector(`input[type="text"]`)?.value||``).trim(),n=String(e.currentTarget.querySelector(`input[type="password"]`)?.value||``).trim();if(!t||!n){alert(`Please enter email and password.`);return}alert(`Login details captured. You can continue checkout.`)},ie=e=>{e.preventDefault();let t=String(e.currentTarget.querySelector(`input[type="text"]`)?.value||``).trim();if(!t){alert(`Please enter a coupon code.`);return}if(t.toUpperCase()===`RIENNA10`){alert(`Coupon accepted (demo). Discount will be applied from backend pricing.`);return}alert(`Invalid coupon code.`)},ae=()=>{te.current&&window.clearInterval(te.current),te.current=null,w.current=null},oe=e=>{ae(),w.current=Date.now()+e*1e3;let t=()=>{let e=Math.max(0,Math.ceil((w.current-Date.now())/1e3));C(je(e)),e<=0&&(te.current&&window.clearInterval(te.current),te.current=null)};t(),te.current=window.setInterval(t,250)};(0,l.useEffect)(()=>{let e=document.createElement(`script`);return e.src=`https://checkout.razorpay.com/v1/checkout.js`,e.async=!0,document.body.appendChild(e),()=>{ae(),document.body.removeChild(e)}},[]);let se=(0,l.useMemo)(()=>Ae(),[t,r]),ce=(0,l.useMemo)(()=>6142,[74,83]),le=`BSC-TESTNET`,E=`0x8Ab26D13D4cf4eb14Ec2abCc0af46BADBF93BF32`,D=(0,l.useMemo)(()=>p?.address||E,[p,E]),ue=(0,l.useMemo)(()=>p?.amount_usdt||74,[p,74]),de=(0,l.useMemo)(()=>`USDT (${le})\nAddress: ${D}\nAmount: ${ue} USDT\nNote: Pay before timer ends.`,[le,D,ue]),fe=(0,l.useMemo)(()=>`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(de)}`,[de]),pe=(0,l.useMemo)(()=>`upi://pay?pa=rienna%40upi&pn=Rienna&am=`+encodeURIComponent(String(ce))+`&cu=INR`,[e,ce]),O=(0,l.useMemo)(()=>w.current?Date.now()>w.current:!1,[S]),k=se>=74,me=(0,l.useMemo)(()=>r?r===`EARNINGS`?!k:r===`USDT`||r===`ANB`?O||!h||!_:!1:!0,[r,k,O,h,_]),he=()=>{let{fullName:e,mobile:t,pincode:r,address:i}=T();if(!e||!t||!r||!i){alert(`Please fill Full Name, Mobile Number, Pincode and Full Address before placing the order.`);return}n(!0),window.setTimeout(()=>ne.current?.scrollIntoView({behavior:`smooth`,block:`start`}),50)},_e=async()=>{if(!ge()){m({intent_id:`local_usdt_${Date.now()}`,network:le,address:E,amount_usdt:74});return}m(await Ce({usd_amount:74,network:le}))},ve=async e=>{if(i(e),ae(),C(`05:00`),d(null),g(!1),v(!1),b(``),e===`USDT`||e===`ANB`){oe(300);try{await _e()}catch(e){alert(e?.message||`Unable to initialize USDT payment. Please try again.`)}}},ye=async()=>{if(p?.intent_id){if(!ge()){v(!0),b(`Payment marked in local mode.`);return}try{let e=await we({intent_id:p.intent_id});if(e?.verified){v(!0),b(`Payment detected${e?.tx_hash?` (${e.tx_hash.slice(0,10)}...)`:``}.`);return}v(!1),b(`Payment not detected yet. Try again after network confirmation.`)}catch(e){if(Me(e)){b(`Unable to reach payment checker. Please retry.`);return}b(e?.message||`Unable to verify payment right now.`)}}};(0,l.useEffect)(()=>{if(!(r===`USDT`||r===`ANB`)||!h||_||O)return;let e=window.setInterval(()=>{ye()},8e3);return()=>window.clearInterval(e)},[r,h,_,O,p]);let Te=(e,t)=>new Promise((n,r)=>{if(!window.Razorpay){r(Error(`Razorpay SDK not loaded. Please refresh and try again.`));return}let i={key:e.key,amount:e.order.amount,currency:e.order.currency,name:`Rienna`,description:`Checkout payment`,order_id:e.order.id,prefill:{name:t.fullName,contact:t.mobile,email:t.email||``},notes:{source:`bazaro-react-checkout`},handler:e=>n(e),modal:{ondismiss:()=>r(Error(`Payment popup closed before completion.`))}};new window.Razorpay(i).open()}),Ee=async()=>{try{await navigator.clipboard.writeText(D),alert(`Address copied.`)}catch{alert(`Copy failed. Please copy manually.`)}},De=()=>{(r===`USDT`||r===`ANB`)&&oe(300)},Me=e=>{let t=String(e?.message||``).toLowerCase();return t.includes(`failed to fetch`)||t.includes(`networkerror`)};return(0,f.jsxs)(`main`,{ref:ne,children:[(0,f.jsx)(`div`,{className:`aq-breadcrumb-area pt-80 pb-30`,"data-bg-color":`#F9F9F9`,children:(0,f.jsx)(`div`,{className:`container`,children:(0,f.jsx)(`div`,{className:`row align-items-center`,children:(0,f.jsx)(`div`,{className:`col-xl-12`,children:(0,f.jsxs)(`div`,{className:`aq-breadcrumb-wrap text-center`,children:[(0,f.jsxs)(`div`,{className:`pd-breadcrumb-list mb-15`,children:[(0,f.jsx)(`span`,{children:(0,f.jsx)(`a`,{href:`/`,children:`home`})}),(0,f.jsx)(`span`,{children:`/`}),(0,f.jsx)(`span`,{children:(0,f.jsx)(`a`,{href:`/?page=checkout`,children:`checkout`})})]}),(0,f.jsx)(`div`,{className:`aq-breadcrumb-content`,children:(0,f.jsx)(`h2`,{className:`aq-breadcrumb-title`,children:`Checkout Page`})})]})})})})}),(0,f.jsx)(`section`,{className:`aq-checkout-area pb-120 pt-100`,children:(0,f.jsx)(`div`,{className:`container`,children:(0,f.jsxs)(`div`,{className:`row`,children:[(0,f.jsxs)(`div`,{className:`col-xl-7 col-lg-7`,children:[(0,f.jsxs)(`div`,{className:`aq-checkout-verify`,children:[(0,f.jsxs)(`div`,{className:`aq-checkout-verify-item`,children:[(0,f.jsxs)(`p`,{className:`aq-checkout-verify-reveal`,children:[`Returning customer?`,` `,(0,f.jsx)(`button`,{type:`button`,className:`aq-checkout-login-form-reveal-btn`,onClick:()=>o(e=>!e),children:a?`Hide login form`:`Click here to login`})]}),(0,f.jsx)(`div`,{id:`aqReturnCustomerLoginForm`,className:`aq-return-customer`,style:{display:a?``:`none`},children:(0,f.jsxs)(`form`,{action:`#`,onSubmit:re,children:[(0,f.jsxs)(`div`,{className:`aq-return-customer-input`,children:[(0,f.jsx)(`label`,{children:`Email`}),(0,f.jsx)(`input`,{type:`text`,placeholder:`Your Email`})]}),(0,f.jsxs)(`div`,{className:`aq-return-customer-input`,children:[(0,f.jsx)(`label`,{children:`Password`}),(0,f.jsx)(`input`,{type:`password`,placeholder:`Password`})]}),(0,f.jsxs)(`div`,{className:`aq-return-customer-suggetions d-sm-flex align-items-center justify-content-between mb-20`,children:[(0,f.jsxs)(`div`,{className:`aq-return-customer-remeber`,children:[(0,f.jsx)(`input`,{id:`remebers`,type:`checkbox`}),(0,f.jsx)(`label`,{htmlFor:`remebers`,children:`Remember me`})]}),(0,f.jsx)(`div`,{className:`aq-return-customer-forgot`,children:(0,f.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),children:`Forgot Password?`})})]}),(0,f.jsx)(`button`,{type:`submit`,className:`aq-return-customer-btn aq-checkout-btn`,children:`Login`})]})})]}),(0,f.jsxs)(`div`,{className:`aq-checkout-verify-item`,children:[(0,f.jsxs)(`p`,{className:`aq-checkout-verify-reveal`,children:[`Have a coupon?`,` `,(0,f.jsx)(`button`,{type:`button`,className:`aq-checkout-coupon-form-reveal-btn`,onClick:()=>c(e=>!e),children:s?`Hide coupon box`:`Click here to enter your code`})]}),(0,f.jsx)(`div`,{id:`aqCheckoutCouponForm`,className:`aq-return-customer`,style:{display:s?``:`none`},children:(0,f.jsxs)(`form`,{action:`#`,onSubmit:ie,children:[(0,f.jsxs)(`div`,{className:`aq-return-customer-input`,children:[(0,f.jsx)(`label`,{children:`Coupon Code :`}),(0,f.jsx)(`input`,{type:`text`,placeholder:`Coupon`})]}),(0,f.jsx)(`button`,{type:`submit`,className:`aq-return-customer-btn aq-checkout-btn`,children:`Apply`})]})})]})]}),(0,f.jsxs)(`div`,{className:`aq-checkout-bill-area`,children:[(0,f.jsx)(`h3`,{className:`aq-checkout-bill-title`,children:`Billing Details`}),(0,f.jsx)(`div`,{className:`aq-checkout-bill-form`,children:(0,f.jsx)(`form`,{action:`#`,onSubmit:e=>e.preventDefault(),children:(0,f.jsx)(`div`,{className:`aq-checkout-bill-inner`,children:(0,f.jsxs)(`div`,{className:`row`,children:[(0,f.jsx)(`div`,{className:`col-md-12`,children:(0,f.jsxs)(`div`,{className:`aq-checkout-input`,children:[(0,f.jsxs)(`label`,{children:[`Full Name `,(0,f.jsx)(`span`,{children:`*`})]}),(0,f.jsx)(`input`,{id:`checkoutFullName`,type:`text`,placeholder:`Your name`,required:!0})]})}),(0,f.jsx)(`div`,{className:`col-md-12`,children:(0,f.jsxs)(`div`,{className:`aq-checkout-input`,children:[(0,f.jsxs)(`label`,{children:[`Phone `,(0,f.jsx)(`span`,{children:`*`})]}),(0,f.jsx)(`input`,{id:`checkoutMobile`,type:`tel`,placeholder:`+91 98765 43210`,required:!0})]})}),(0,f.jsx)(`div`,{className:`col-md-12`,children:(0,f.jsxs)(`div`,{className:`aq-checkout-input`,children:[(0,f.jsx)(`label`,{children:`Email address`}),(0,f.jsx)(`input`,{id:`checkoutEmail`,type:`email`,placeholder:`email@address.com`})]})}),(0,f.jsx)(`div`,{className:`col-md-12`,children:(0,f.jsxs)(`div`,{className:`aq-checkout-input`,children:[(0,f.jsxs)(`label`,{children:[`Postcode ZIP / Pincode `,(0,f.jsx)(`span`,{children:`*`})]}),(0,f.jsx)(`input`,{id:`checkoutPincode`,type:`text`,placeholder:`e.g. 110001`,required:!0})]})}),(0,f.jsx)(`div`,{className:`col-md-12`,children:(0,f.jsxs)(`div`,{className:`aq-checkout-input`,children:[(0,f.jsxs)(`label`,{children:[`Full Address `,(0,f.jsx)(`span`,{children:`*`})]}),(0,f.jsx)(`textarea`,{id:`checkoutAddress`,placeholder:`House No, Street, Area, City, State`,required:!0})]})})]})})})})]})]}),(0,f.jsx)(`div`,{className:`col-lg-5`,children:(0,f.jsxs)(`div`,{className:`aq-checkout-place white-bg`,children:[(0,f.jsx)(`h3`,{className:`aq-checkout-place-title`,children:`Your Order`}),(0,f.jsx)(`div`,{className:`aq-order-info-list`,children:(0,f.jsxs)(`ul`,{children:[(0,f.jsxs)(`li`,{className:`aq-order-info-list-header`,children:[(0,f.jsx)(`h4`,{children:`Product`}),(0,f.jsx)(`h4`,{children:`Total`})]}),(0,f.jsxs)(`li`,{className:`aq-order-info-list-desc`,children:[(0,f.jsxs)(`p`,{children:[`Day Cream SPF 30 `,(0,f.jsx)(`span`,{children:` x 1`})]}),(0,f.jsx)(`span`,{children:`$24.00`})]}),(0,f.jsxs)(`li`,{className:`aq-order-info-list-desc`,children:[(0,f.jsxs)(`p`,{children:[`Under Eye Roll On Gel `,(0,f.jsx)(`span`,{children:` x 1`})]}),(0,f.jsx)(`span`,{children:`$18.00`})]}),(0,f.jsxs)(`li`,{className:`aq-order-info-list-desc`,children:[(0,f.jsxs)(`p`,{children:[`Vitamin C Glutathione Serum `,(0,f.jsx)(`span`,{children:` x 1`})]}),(0,f.jsx)(`span`,{children:`$32.00`})]}),(0,f.jsxs)(`li`,{className:`aq-order-info-list-subtotal`,children:[(0,f.jsx)(`span`,{children:`Subtotal`}),(0,f.jsx)(`span`,{children:`$74.00`})]}),(0,f.jsxs)(`li`,{className:`aq-order-info-list-total`,children:[(0,f.jsx)(`span`,{children:`Total`}),(0,f.jsx)(`span`,{children:`$74.00`})]})]})}),(0,f.jsx)(`div`,{className:`aq-checkout-btn-wrapper`,children:(0,f.jsx)(`button`,{id:`placeOrderBtn`,type:`button`,className:`aq-checkout-btn w-100`,onClick:he,children:`Continue to Payment`})}),(0,f.jsxs)(`div`,{id:`paymentSection`,ref:ne,style:{display:t?``:`none`,marginTop:20},children:[(0,f.jsxs)(`div`,{className:`aq-checkout-payment`,children:[(0,f.jsxs)(`div`,{className:`aq-checkout-payment-item`,children:[(0,f.jsx)(`label`,{style:{display:`block`,marginBottom:10,fontWeight:600},children:`Payment Mode`}),(0,f.jsx)(`p`,{className:`mb-0`,style:{color:`rgba(15,15,15,0.8)`},children:`Choose how you want to pay. For USDT/ANB, please complete payment within 5 minutes.`})]}),(0,f.jsx)(`div`,{className:`aq-checkout-payment-item`,children:(0,f.jsx)(`div`,{className:`d-flex flex-wrap`,style:{gap:14},children:[`INR`,`USDT`,`ANB`,`EARNINGS`].map(e=>(0,f.jsxs)(`label`,{className:`d-inline-flex align-items-center`,style:{gap:8,cursor:`pointer`},children:[(0,f.jsx)(`input`,{type:`radio`,name:`payMode`,value:e,checked:r===e,onChange:()=>ve(e)}),(0,f.jsx)(`span`,{children:e===`EARNINGS`?`Earnings Wallet`:e})]},e))})})]}),(0,f.jsx)(`div`,{id:`earningsBox`,style:{display:r===`EARNINGS`?``:`none`},children:(0,f.jsxs)(`div`,{style:{border:`1px solid #eee`,borderRadius:12,padding:16},children:[(0,f.jsx)(`h5`,{className:`mb-10`,children:`Pay with Earnings Wallet`}),(0,f.jsxs)(`p`,{className:`mb-10`,children:[`Wallet Balance: `,(0,f.jsxs)(`b`,{id:`earningsBalanceText`,children:[`$`,se.toFixed(2)]})]}),(0,f.jsxs)(`p`,{className:`mb-0`,children:[`Amount to pay: `,(0,f.jsxs)(`b`,{id:`earningsPayAmount`,children:[`$`,74 .toFixed(2)]})]}),(0,f.jsx)(`p`,{id:`earningsNote`,className:`mt-10 mb-0`,style:{color:k?`rgba(15,15,15,0.75)`:`#DA3F3F`,fontSize:13},children:k?`Your earnings balance is sufficient. Confirm to place the order.`:`Insufficient earnings balance. Please choose INR/USDT/ANB.`})]})}),(0,f.jsx)(`div`,{id:`inrBox`,style:{display:r===`INR`?``:`none`,marginTop:15},children:(0,f.jsxs)(`div`,{style:{border:`1px solid #eee`,borderRadius:12,padding:16},children:[(0,f.jsx)(`h5`,{className:`mb-10`,children:`Pay in INR (UPI)`}),(0,f.jsxs)(`p`,{className:`mb-10`,children:[`UPI ID: `,(0,f.jsx)(`b`,{id:`upiIdText`,children:e})]}),(0,f.jsxs)(`p`,{className:`mb-15`,children:[`Amount: `,(0,f.jsxs)(`b`,{id:`inrAmountText`,children:[`₹`,ce]})]}),(0,f.jsx)(`a`,{id:`upiPayLink`,href:pe,className:`aq-btn-black btn-red-bg radius-30`,children:`Pay via UPI`})]})}),(0,f.jsx)(`div`,{id:`cryptoBox`,style:{display:r===`USDT`||r===`ANB`?``:`none`,marginTop:15},children:(0,f.jsxs)(`div`,{style:{border:`1px solid #eee`,borderRadius:12,padding:16},children:[(0,f.jsxs)(`div`,{className:`d-flex flex-wrap justify-content-between align-items-center`,style:{gap:10},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h5`,{className:`mb-5`,children:`Scan & Pay`}),(0,f.jsxs)(`p`,{className:`mb-0`,style:{color:`rgba(15,15,15,0.8)`},children:[`Network: `,(0,f.jsx)(`b`,{id:`cryptoNetworkText`,children:p?.network||r||`USDT`})]})]}),(0,f.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,f.jsx)(`div`,{style:{fontSize:12,color:`rgba(15,15,15,0.8)`},children:`Time left`}),(0,f.jsx)(`div`,{id:`payTimer`,style:{fontSize:18,fontWeight:700},children:S})]})]}),(0,f.jsxs)(`div`,{className:`row mt-15`,children:[(0,f.jsx)(`div`,{className:`col-md-4 mb-15`,children:(0,f.jsx)(`div`,{style:{width:`100%`,aspectRatio:`1 / 1`,border:`1px dashed #ddd`,borderRadius:12,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#faf9f8`},children:(0,f.jsx)(`img`,{src:fe,alt:`USDT payment QR`,style:{width:`100%`,height:`100%`,borderRadius:12}})})}),(0,f.jsxs)(`div`,{className:`col-md-8 mb-15`,children:[(0,f.jsx)(`p`,{className:`mb-10`,children:`Testnet Wallet Address`}),(0,f.jsx)(`input`,{id:`cryptoAddress`,className:`aq-form-control`,type:`text`,readOnly:!0,value:D}),(0,f.jsxs)(`p`,{className:`mt-10 mb-10`,children:[`Amount to send: `,(0,f.jsxs)(`b`,{children:[ue,` USDT`]})]}),(0,f.jsxs)(`label`,{className:`d-flex align-items-center mb-10`,style:{gap:8,cursor:`pointer`},children:[(0,f.jsx)(`input`,{type:`checkbox`,checked:h,onChange:e=>{g(e.target.checked),e.target.checked?(b(`Checking payment status...`),ye()):(v(!1),b(``))}}),(0,f.jsx)(`span`,{children:`I have paid`})]}),(0,f.jsx)(`button`,{type:`button`,className:`aq-btn-black border-btn radius-30 mb-10`,onClick:ye,children:`Check Payment Status`}),y?(0,f.jsx)(`p`,{className:`mb-10`,style:{fontSize:13,color:_?`#1D7F3E`:`#9B6A00`},children:y}):null,(0,f.jsxs)(`div`,{className:`d-flex flex-wrap gap-2 mt-10`,children:[(0,f.jsx)(`button`,{id:`copyCryptoAddress`,type:`button`,className:`aq-btn-black border-btn radius-30`,onClick:Ee,children:`Copy Address`}),(0,f.jsx)(`button`,{id:`restartTimerBtn`,type:`button`,className:`aq-btn-black radius-30`,onClick:De,children:`Restart 5:00`})]}),(0,f.jsx)(`p`,{id:`timerNote`,className:`mt-10 mb-0`,style:{color:O?`#DA3F3F`:`rgba(15,15,15,0.75)`,fontSize:13},children:O?`Timer expired. Restart the timer and complete payment again.`:`Please complete payment before timer ends.`})]})]})]})}),(0,f.jsx)(`div`,{className:`aq-checkout-btn-wrapper`,style:{marginTop:15},children:(0,f.jsx)(`button`,{id:`confirmOrderBtn`,type:`button`,className:`aq-checkout-btn w-100`,disabled:me||x,onClick:async()=>{if(!r){alert(`Please select a payment mode.`);return}if((r===`USDT`||r===`ANB`)&&w.current&&Date.now()>w.current){alert(`Payment timer expired. Please restart the timer and complete payment.`);return}if((r===`USDT`||r===`ANB`)&&!_){alert(`Payment not verified yet. Please click "Check Payment Status" and try again.`);return}if(r===`EARNINGS`){if(Ae()<74){alert(`Insufficient earnings balance. Please choose INR/USDT/ANB.`);return}ke(74)}let e={id:`#RIN-${Math.floor(1e3+Math.random()*9e3)}`,date:new Date().toISOString().slice(0,10),items:3,amount:74,status:r===`EARNINGS`?`Paid (Earnings)`:`Paid (${r})`},t=T();if(!t.fullName||!t.mobile||!t.pincode||!t.address){alert(`Please complete billing details before confirming order.`);return}ee(!0);try{let n=u;if(r===`INR`){if(!ge())throw Error(`INR gateway requires API backend configuration.`);let r=await Te(await xe({amount:ce,currency:`INR`,receipt:e.id}),t);await Se({razorpay_order_id:r.razorpay_order_id,razorpay_payment_id:r.razorpay_payment_id,razorpay_signature:r.razorpay_signature}),n=r.razorpay_payment_id,d(n)}if(r===`USDT`||r===`ANB`){if(!p?.intent_id)throw Error(`USDT intent missing. Please re-select payment mode.`);n=p.intent_id,d(n)}if(ge())try{await be({billingDetails:t,paymentMode:r,totals:{subtotal:74,total:74,currency:`USD`},items:[{name:`Day Cream SPF 30`,quantity:1,price:24},{name:`Under Eye Roll On Gel`,quantity:1,price:18},{name:`Vitamin C Glutathione Serum`,quantity:1,price:32}],orderRef:e.id,paymentReference:n})}catch(e){if(!((r===`USDT`||r===`ANB`)&&Me(e)))throw e}}catch(e){alert(e?.message||`Unable to place order on server. Please try again.`),ee(!1);return}ee(!1),Oe(e),alert(`Order placed successfully!`),window.location.href=`/`},children:x?`Processing...`:`Confirm Order`})})]})]})})]})})})]})},Ne=()=>(0,f.jsx)(h,{html:(v(`footer`)||``).replaceAll(`images/logo.png`,`images/logo1.png`).replaceAll(`images/logo.svg`,`images/logo1.png`).replaceAll(`images/logo.jpg`,`images/logo1.png`).replaceAll(`images/logo.jpeg`,`images/logo1.png`)}),Pe=[`js/jquery.js`,`js/bootstrap-bundle.js`,`js/swiper-bundle.js`,`js/magnific-popup.js`,`js/nice-select.js`,`js/purecounter.js`,`js/isotope-pkgd.js`,`js/lazysize.min.js`,`js/slider-active.js`,`js/imagesloaded-pkgd.js`,`js/ajax-form.js`,`js/main.js`],Fe=()=>((0,l.useEffect)(()=>{let e=[];return Pe.forEach(t=>{if(document.querySelector(`script[src="/${t}"]`))return;let n=document.createElement(`script`);n.src=`/${t}`,n.async=!1,document.body.appendChild(n),e.push(n)}),()=>{e.forEach(e=>{e.parentElement&&e.parentElement.removeChild(e)})}},[]),null),Ie=()=>((0,l.useEffect)(()=>{typeof window<`u`&&typeof $<`u`&&($(`[data-bg-color]`).each(function(){$(this).css(`background-color`,$(this).attr(`data-bg-color`))}),$(`[data-text-color]`).each(function(){$(this).css(`color`,$(this).attr(`data-text-color`))}),$(`.aq-header-dropdown nav ul li`).each(function(){$(this).find(`.mega-menu`).length>0&&$(this).addClass(`p-static`)}),$(`.aq-header-dropdown nav ul li.has-dropdown > a`).on(`click`,function(e){e.preventDefault();let t=$(this).closest(`li`),n=t.hasClass(`active`);$(`.aq-header-dropdown nav ul li.has-dropdown`).removeClass(`active`),$(`.aq-header-dropdown nav ul li.has-dropdown .mega-menu, .aq-header-dropdown nav ul li.has-dropdown .submenu`).css({opacity:`0`,visibility:`hidden`}),n||(t.addClass(`active`),t.find(`.mega-menu, .submenu`).css({opacity:`1`,visibility:`visible`}))}),$(document).on(`click`,function(e){$(e.target).closest(`.aq-header-dropdown nav ul li.has-dropdown`).length||($(`.aq-header-dropdown nav ul li.has-dropdown`).removeClass(`active`),$(`.aq-header-dropdown nav ul li.has-dropdown .mega-menu, .aq-header-dropdown nav ul li.has-dropdown .submenu`).css({opacity:`0`,visibility:`hidden`}))}),typeof Swiper<`u`&&(document.querySelectorAll(`.aqf-slider-active`).forEach(e=>{e.swiper||new Swiper(e,{slidesPerView:1,loop:!0,spaceBetween:0,effect:`fade`,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{prevEl:`.aqf-slider-prev`,nextEl:`.aqf-slider-next`},pagination:{el:`.aqf-slider-dot`,clickable:!0}})}),document.querySelectorAll(`.aq-product-active`).forEach(e=>{e.swiper||new Swiper(e,{slidesPerView:4,loop:!0,spaceBetween:30,navigation:{prevEl:`.aq-product-prev`,nextEl:`.aq-product-next`},breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:2},0:{slidesPerView:1}}})})))},[]),null),Le=async({email:e,password:t})=>_e(`/login`,{method:`POST`,body:{email:e,password:t}}),Re=async({name:e,email:t,phone:n,password:r,referralCode:i})=>_e(`/register`,{method:`POST`,body:{name:e,email:t,phone:n,password:r,...i?{referral_code:i}:{}}}),ze=async()=>_e(`/logout`,{method:`POST`}),Be=`rienna_auth_v1`,Ve=`rienna_cart_v1`,He=`rienna_wishlist_v1`,Ue=()=>{try{let e=window.localStorage.getItem(Be);if(!e)return{isRegistered:!1,isLoggedIn:!1,userName:`Rienna Member`,userEmail:``};let t=JSON.parse(e);return{isRegistered:!!t?.isRegistered,isLoggedIn:!!t?.isLoggedIn,userName:t?.userName||`Rienna Member`,userEmail:t?.userEmail||``}}catch{return{isRegistered:!1,isLoggedIn:!1,userName:`Rienna Member`,userEmail:``}}},We=e=>{try{let t=window.localStorage.getItem(e);if(!t)return[];let n=JSON.parse(t);return Array.isArray(n)?n:[]}catch{return[]}},Ge=()=>{document.body.classList.remove(`modal-open`),document.body.style.removeProperty(`padding-right`),document.body.style.removeProperty(`overflow`),document.querySelectorAll(`.modal-backdrop`).forEach(e=>e.remove())},Ke=e=>{e&&(e.classList.remove(`show`),e.style.display=`none`,e.setAttribute(`aria-hidden`,`true`),e.removeAttribute(`aria-modal`))},qe=e=>{if(!e)return;Ge(),e.style.display=`block`,e.classList.add(`show`),e.setAttribute(`aria-modal`,`true`),e.removeAttribute(`aria-hidden`),document.body.classList.add(`modal-open`),document.body.style.overflow=`hidden`;let t=document.createElement(`div`);t.className=`modal-backdrop fade show`,document.body.appendChild(t)},Je=()=>{[`exampleModalToggle`,`exampleModalToggle2`,`exampleModalToggle3`,`logoutConfirmModal`].forEach(e=>{let t=document.getElementById(e);if(!t)return;let n=window.bootstrap?.Modal;n&&n.getOrCreateInstance(t).hide(),Ke(t)}),Ge(),[50,120,250,400].forEach(e=>{window.setTimeout(Ge,e)})},Ye=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),Xe=e=>{let t=Number.parseFloat(String(e).replace(/[^0-9.]/g,``));return Number.isFinite(t)?t:0};function Ze(){let[e,t]=(0,l.useState)(Ue),n=(0,l.useRef)(!1),[r,i]=(0,l.useState)(()=>We(Ve)),[a,o]=(0,l.useState)(()=>We(He)),s=new URLSearchParams(window.location.search),c=s.get(`page`),u=s.get(`product`)||`day-cream`,d=c===`product-details`,p=c===`dashboard`,m=c===`contact`,h=c===`checkout`;(0,l.useEffect)(()=>{try{window.localStorage.setItem(Be,JSON.stringify(e))}catch{}},[e]),(0,l.useEffect)(()=>{try{window.localStorage.setItem(Ve,JSON.stringify(r))}catch{}},[r]),(0,l.useEffect)(()=>{try{window.localStorage.setItem(He,JSON.stringify(a))}catch{}},[a]),(0,l.useEffect)(()=>{let e=document.querySelector(`.aq-header-top-cart .count-box`);if(e){let t=r.reduce((e,t)=>e+(Number(t.quantity)||0),0);e.textContent=String(t)}let t=document.querySelector(`.aq-cartmini-body`),n=document.querySelector(`.cartmini-empty`),i=document.querySelector(`.aq-cartmini-total-value`);i&&(i.textContent=`$${r.reduce((e,t)=>e+Xe(t.price)*(Number(t.quantity)||0),0).toFixed(2)} USD`),t&&(t.innerHTML=r.map(e=>`
            <div class="aq-cartmini-product-item mb-15 item-delete d-flex align-items-center">
              <div class="aq-cartmini-product-thumbnail">
                <a href="${e.url||`#`}">
                  <img src="${e.image}" alt="${e.name}">
                </a>
              </div>
              <div class="aq-cartmini-product-summary">
                <h4 class="aq-product-title"><a href="${e.url||`#`}">${e.name}</a></h4>
                <span class="aq-cartmini-product-size"><label>Size:</label> ${e.size||`M`}</span>
                <span class="aq-cartmini-product-price">${e.price}</span>
                <div class="aq-product-details-quantity d-flex align-items-center">
                  <div class="aq-product-quantity">
                    <input class="aq-cart-input" type="text" value="${e.quantity||1}" readonly>
                  </div>
                </div>
              </div>
            </div>
          `).join(``),n&&n.classList.toggle(`d-none`,r.length>0));let o=document.querySelector(`.aq-header-top-wishlist .count-box`);o&&(o.textContent=String(a.length));let s=document.querySelector(`.aq-wishlist-popup-count`);s&&(s.textContent=`(${a.length})`);let c=document.querySelector(`.aq-wishlist-popup-middle`);c&&(c.innerHTML=a.map(e=>`
            <div class="aq-wishlist-popup-item d-flex justify-content-center justify-content-sm-between align-items-center">
              <div class="aq-wishlist-popup-thumb-wrap d-flex align-items-center">
                <div class="aq-wishlist-popup-thumb d-flex align-items-center">
                  <a href="${e.url||`#`}">
                    <img src="${e.image}" alt="${e.name}">
                  </a>
                  <div class="aq-wishlist-popup-thumb-info">
                    <h4 class="aq-wishlist-popup-title"><a href="${e.url||`#`}">${e.name}</a></h4>
                    <span class="aq-wishlist-popup-price">${e.price}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join(``));let l=document.querySelector(`.aq-wishlist-popup-text p`);if(l){let e=a[0];l.textContent=e?`${e.name} has been added to Wishlist.`:`No items in wishlist yet.`}},[r,a]),(0,l.useEffect)(()=>{e.isLoggedIn&&Je()},[e.isLoggedIn]),(0,l.useEffect)(()=>{let e=document.querySelector(`#exampleModalToggle .aq-login-btn.w-100.mb-10`),r=document.querySelector(`#exampleModalToggle2 .aq-login-btn.w-100.mb-15`),i=document.getElementById(`exampleModalToggle`),a=document.getElementById(`exampleModalToggle`),o=document.getElementById(`exampleModalToggle2`),s=async()=>{let e=a?.querySelector(`input[type="email"]`)?.value?.trim()||``,r=a?.querySelector(`input[type="password"]`)?.value?.trim()||``;if(!e||!r)return window.alert(`Please fill email and password before login.`),!1;if(!Ye(e))return window.alert(`Please enter a valid email address.`),!1;if(n.current)return!1;n.current=!0;try{if(ge()){let n=(await Le({email:e,password:r}))?.user||{},i=e?e.split(`@`)[0]:``;t(t=>({...t,isRegistered:!0,isLoggedIn:!0,userEmail:n.email||e||t.userEmail||``,userName:n.name||t.userName||i||`Rienna Member`}))}else{let n=e?e.split(`@`)[0]:``;t(t=>({...t,isRegistered:!0,isLoggedIn:!0,userEmail:e||t.userEmail||``,userName:t.userName||n||`Rienna Member`}))}}catch(e){return window.alert(e?.message||`Login failed. Please try again.`),!1}finally{n.current=!1}Je();let o=window.bootstrap?.Modal;return o&&i&&o.getOrCreateInstance(i).hide(),!0},c=async()=>{let e=o?.querySelector(`input[name="register_name"]`)?.value?.trim()||``,r=o?.querySelector(`input[name="register_email"]`)?.value?.trim()||``,i=o?.querySelector(`input[name="register_phone"]`)?.value?.trim()||``,a=o?.querySelector(`input[name="register_referral_code"]`)?.value?.trim()||``,s=Array.from(o?.querySelectorAll(`input[type="password"]`)||[]),c=s[0]?.value?.trim()||``,l=s[1]?.value?.trim()||``;if(!e||!r||!i||!c||!l)return window.alert(`Please fill all required registration fields.`),!1;if(!Ye(r))return window.alert(`Please enter a valid email address.`),!1;if(c.length<6)return window.alert(`Password should be at least 6 characters.`),!1;if(c!==l)return window.alert(`Password and confirmation password must match.`),!1;if(n.current)return!1;n.current=!0;try{if(ge()){let n=(await Re({name:e,email:r,phone:i,password:c,referralCode:a}))?.user||{},o=r?r.split(`@`)[0]:``;t(t=>({...t,isRegistered:!0,isLoggedIn:!0,userName:n.name||e||o||t.userName||`Rienna Member`,userEmail:n.email||r||t.userEmail||``}))}else{let n=r?r.split(`@`)[0]:``;t(t=>({...t,isRegistered:!0,isLoggedIn:!0,userName:e||n||t.userName||`Rienna Member`,userEmail:r||t.userEmail||``}))}}catch(e){return window.alert(e?.message||`Registration failed. Please try again.`),!1}finally{n.current=!1}return Je(),!0};e&&(e.type=`button`),r&&(r.type=`button`);let l=e=>{let t=e.target.closest(`#exampleModalToggle .aq-login-btn.w-100.mb-10`),n=e.target.closest(`#exampleModalToggle2 .aq-login-btn.w-100.mb-15`);!t&&!n||(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation?.(),t&&s(),n&&c())},u=e=>{if(e.key!==`Enter`)return;let t=a?.contains(e.target),n=o?.contains(e.target);!t&&!n||(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation?.(),t&&s(),n&&c())};return document.addEventListener(`click`,l,!0),document.addEventListener(`keydown`,u,!0),()=>{document.removeEventListener(`click`,l,!0),document.removeEventListener(`keydown`,u,!0),Ge()}},[]);let g=(0,l.useMemo)(()=>e.isRegistered?`Please login first to continue.`:`Please register first. New users must create an account before continuing.`,[e.isRegistered]),_=async()=>{try{ge()&&await ze()}catch{}t(e=>({...e,isLoggedIn:!1})),Je(),window.location.assign(`${window.location.pathname}`)},v=()=>{let t=e.isRegistered?`exampleModalToggle`:`exampleModalToggle2`,n=document.getElementById(t);if(!n)return;let r=window.bootstrap?.Modal;if(r){r.getOrCreateInstance(n).show();return}qe(n)},w=()=>{let e=document.getElementById(`logoutConfirmModal`);if(!e)return;let t=window.bootstrap?.Modal;if(t){t.getOrCreateInstance(e).show();return}qe(e)},te=e=>{if(e===`wishlist`){document.querySelector(`.aq-wishlist-active`)?.classList.add(`opened`),document.querySelector(`.body-overlay`)?.classList.add(`opened`);return}e===`cart`&&(document.querySelector(`.aq-cartmini-active`)?.classList.add(`opened`),document.querySelector(`.body-overlay`)?.classList.add(`opened`))};(0,l.useEffect)(()=>{let t=document.querySelector(`.aq-offcanvas-bottom .aq-offcanvas-btn`),n=document.querySelector(`.aq-offcanvas-bottom .aq-offcanvas-btn.btn-black-bg`),r=document.querySelector(`.aq-header-top-account button`),i=Array.from(document.querySelectorAll(`.aq-bottom-menu .aq-bottom-menu-item`));t&&(t.textContent=e.isLoggedIn?`Logout`:`Login`,t.setAttribute(`data-auth-trigger`,e.isLoggedIn?`logout`:`login`)),n&&n.setAttribute(`data-mobile-action`,`wishlist`),i.forEach(e=>{let t=String(e.querySelector(`span`)?.textContent||``).trim().toLowerCase(),n=e.closest(`a`);t===`home`&&(e.setAttribute(`data-mobile-action`,`home`),n&&n.setAttribute(`href`,`/`)),t===`shop`&&(e.setAttribute(`data-mobile-action`,`shop`),n&&n.setAttribute(`href`,`/#rienna-products`)),t===`account`&&(e.setAttribute(`data-mobile-action`,`account`),n&&n.setAttribute(`href`,`/?page=dashboard`)),t===`wishlist`&&e.setAttribute(`data-mobile-action`,`wishlist`),t===`cart`&&e.setAttribute(`data-mobile-action`,`cart`)}),r&&(r.setAttribute(`data-auth-trigger`,e.isLoggedIn?`logout`:`login`),r.setAttribute(`aria-label`,e.isLoggedIn?`Logout`:`Login`),r.setAttribute(`title`,e.isLoggedIn?`Logout`:`Login`),e.isLoggedIn?(r.removeAttribute(`data-bs-target`),r.removeAttribute(`data-bs-toggle`)):(r.setAttribute(`data-bs-target`,`#exampleModalToggle`),r.setAttribute(`data-bs-toggle`,`modal`)));let a=e=>{let t=e.target.closest(`[data-auth-trigger]`);if(!t)return;let n=t.getAttribute(`data-auth-trigger`);if(n===`logout`){e.preventDefault(),w();return}n===`login`&&(e.preventDefault(),v())},o=t=>{let n=t.target.closest(`[data-mobile-action]`);if(!n)return;let r=String(n.getAttribute(`data-mobile-action`)||``).trim();if(r){if(r===`account`&&!e.isLoggedIn){t.preventDefault(),v();return}(r===`wishlist`||r===`cart`)&&(t.preventDefault(),te(r))}};return document.addEventListener(`click`,a,!0),document.addEventListener(`click`,o,!0),()=>{document.removeEventListener(`click`,a,!0),document.removeEventListener(`click`,o,!0)}},[e.isLoggedIn,e.isRegistered]);let ne=()=>e.isLoggedIn?!0:(v(),!1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Ie,{}),(0,f.jsx)(x,{}),(0,f.jsx)(y,{}),(0,f.jsx)(b,{}),(0,f.jsx)(ee,{}),(0,f.jsx)(S,{}),(0,f.jsx)(C,{}),(0,f.jsx)(`div`,{className:`aq-login-modal-style`,children:(0,f.jsx)(`div`,{className:`modal fade`,id:`logoutConfirmModal`,role:`dialog`,"aria-hidden":`true`,tabIndex:`-1`,children:(0,f.jsx)(`div`,{className:`modal-dialog modal-dialog-centered`,children:(0,f.jsx)(`div`,{className:`modal-content`,children:(0,f.jsxs)(`div`,{className:`aq-login-wrapper`,children:[(0,f.jsxs)(`div`,{className:`aq-login-top text-center mb-20`,children:[(0,f.jsx)(`h3`,{className:`aq-login-title`,children:`Logout Confirmation`}),(0,f.jsx)(`p`,{className:`mb-0`,children:`Are you sure you want to logout?`})]}),(0,f.jsxs)(`div`,{className:`aq-login-bottom-wrap mb-0`,children:[(0,f.jsx)(`button`,{type:`button`,className:`aq-login-btn btn-transparent w-100 mb-10`,"data-bs-dismiss":`modal`,children:`Cancel`}),(0,f.jsx)(`button`,{type:`button`,className:`aq-login-btn w-100`,onClick:_,children:`Logout`})]})]})})})})}),p?e.isLoggedIn?(0,f.jsx)(k,{userName:e.userName,userEmail:e.userEmail}):(0,f.jsx)(`section`,{className:`aq-product-area pb-60 pt-40`,children:(0,f.jsxs)(`div`,{className:`container text-center`,children:[(0,f.jsx)(`h3`,{className:`aq-section-title ff-satoshi-med mb-10`,children:`Login Required`}),(0,f.jsx)(`p`,{className:`mb-20`,children:g}),(0,f.jsx)(`button`,{type:`button`,className:`aq-btn-black btn-red-bg radius-30`,onClick:v,children:`Continue to Login / Register`})]})}):m?(0,f.jsx)(ye,{}):h?(0,f.jsx)(Me,{}):d?(0,f.jsx)(fe,{productId:u,onRequireAuth:ne,onAddToCart:e=>{ne()&&i(t=>{let n=t.findIndex(t=>t.id===e.id&&t.size===e.size&&t.color===e.color);if(n===-1)return[e,...t];let r=[...t];return r[n]={...r[n],quantity:(Number(r[n].quantity)||0)+(Number(e.quantity)||1)},r})},onAddToWishlist:e=>{ne()&&o(t=>t.some(t=>t.id===e.id)?t:[e,...t])}}):null,!p&&!d&&!m&&!h&&(0,f.jsx)(ce,{}),(0,f.jsx)(Ne,{}),(0,f.jsx)(Fe,{})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,f.jsx)(l.StrictMode,{children:(0,f.jsx)(Ze,{})}));