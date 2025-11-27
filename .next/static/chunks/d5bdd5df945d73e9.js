(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,301230,928717,e=>{"use strict";var t=e.i(667588),r=e.i(463741),o=e.i(643469),n=e.i(923683);function a(e,a){let s,i;return(0,t.keccak256)((s="string"==typeof e?(0,n.stringToHex)(e):"string"==typeof e.raw?e.raw:(0,n.bytesToHex)(e.raw),i=(0,n.stringToHex)(`\x19Ethereum Signed Message:
${(0,o.size)(s)}`),(0,r.concat)([i,s])),a)}e.s(["hashMessage",()=>a],301230),e.s(["hashDomain",()=>f,"hashTypedData",()=>w],928717);var s=e.i(794945),i=e.i(742461),c=e.i(837467),l=e.i(645011),p=e.i(463015);class u extends p.BaseError{constructor({domain:e}){super(`Invalid domain "${(0,l.stringify)(e)}".`,{metaMessages:["Must be a valid EIP-712 domain."]})}}class d extends p.BaseError{constructor({primaryType:e,types:t}){super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`,{docsPath:"/api/glossary/Errors#typeddatainvalidprimarytypeerror",metaMessages:["Check that the primary type is a key in `types`."]})}}class h extends p.BaseError{constructor({type:e}){super(`Struct type "${e}" is invalid.`,{metaMessages:["Struct type must not be a Solidity type."],name:"InvalidStructTypeError"})}}var m=e.i(608677),y=e.i(871845);function w(e){let{domain:a={},message:s,primaryType:l}=e,p={EIP712Domain:function({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},("number"==typeof e?.chainId||"bigint"==typeof e?.chainId)&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}({domain:a}),...e.types};!function(e){let{domain:t,message:r,primaryType:a,types:s}=e,l=(e,t)=>{for(let r of e){let{name:e,type:a}=r,p=t[e],u=a.match(y.integerRegex);if(u&&("number"==typeof p||"bigint"==typeof p)){let[e,t,r]=u;(0,n.numberToHex)(p,{signed:"int"===t,size:Number.parseInt(r,10)/8})}if("address"===a&&"string"==typeof p&&!(0,m.isAddress)(p))throw new c.InvalidAddressError({address:p});let d=a.match(y.bytesRegex);if(d){let[e,t]=d;if(t&&(0,o.size)(p)!==Number.parseInt(t,10))throw new i.BytesSizeMismatchError({expectedSize:Number.parseInt(t,10),givenSize:(0,o.size)(p)})}let w=s[a];w&&(function(e){if("address"===e||"bool"===e||"string"===e||e.startsWith("bytes")||e.startsWith("uint")||e.startsWith("int"))throw new h({type:e})}(a),l(w,p))}};if(s.EIP712Domain&&t){if("object"!=typeof t)throw new u({domain:t});l(s.EIP712Domain,t)}if("EIP712Domain"!==a)if(s[a])l(s[a],r);else throw new d({primaryType:a,types:s})}({domain:a,message:s,primaryType:l,types:p});let w=["0x1901"];return a&&w.push(f({domain:a,types:p})),"EIP712Domain"!==l&&w.push(b({data:s,primaryType:l,types:p})),(0,t.keccak256)((0,r.concat)(w))}function f({domain:e,types:t}){return b({data:e,primaryType:"EIP712Domain",types:t})}function b({data:e,primaryType:r,types:o}){let a=function e({data:r,primaryType:o,types:a}){let i=[{type:"bytes32"}],c=[function({primaryType:e,types:r}){let o=(0,n.toHex)(function({primaryType:e,types:t}){let r="",o=function e({primaryType:t,types:r},o=new Set){let n=t.match(/^\w*/u),a=n?.[0];if(o.has(a)||void 0===r[a])return o;for(let t of(o.add(a),r[a]))e({primaryType:t.type,types:r},o);return o}({primaryType:e,types:t});for(let n of(o.delete(e),[e,...Array.from(o).sort()]))r+=`${n}(${t[n].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return r}({primaryType:e,types:r}));return(0,t.keccak256)(o)}({primaryType:o,types:a})];for(let l of a[o]){let[o,p]=function r({types:o,name:a,type:i,value:c}){if(void 0!==o[i])return[{type:"bytes32"},(0,t.keccak256)(e({data:c,primaryType:i,types:o}))];if("bytes"===i)return[{type:"bytes32"},(0,t.keccak256)(c)];if("string"===i)return[{type:"bytes32"},(0,t.keccak256)((0,n.toHex)(c))];if(i.lastIndexOf("]")===i.length-1){let e=i.slice(0,i.lastIndexOf("[")),n=c.map(t=>r({name:a,type:e,types:o,value:t}));return[{type:"bytes32"},(0,t.keccak256)((0,s.encodeAbiParameters)(n.map(([e])=>e),n.map(([,e])=>e)))]}return[{type:i},c]}({types:a,name:l.name,type:l.type,value:r[l.name]});i.push(o),c.push(p)}return(0,s.encodeAbiParameters)(i,c)}({data:e,primaryType:r,types:o});return(0,t.keccak256)(a)}},926192,e=>{"use strict";async function t(e){return new Promise(t=>setTimeout(t,e))}e.s(["wait",()=>t])},592536,e=>{"use strict";var t=e.i(926192);function r(e,{delay:o=100,retryCount:n=2,shouldRetry:a=()=>!0}={}){return new Promise((r,s)=>{let i=async({count:c=0}={})=>{let l=async({error:e})=>{let r="function"==typeof o?o({count:c,error:e}):o;r&&await (0,t.wait)(r),i({count:c+1})};try{let t=await e();r(t)}catch(e){if(c<n&&await a({count:c,error:e}))return l({error:e});s(e)}};i()})}e.s(["withRetry",()=>r])},21637,e=>{"use strict";let t,r=256;function o(e=11){if(!t||r+e>512){t="",r=0;for(let e=0;e<256;e++)t+=(256+256*Math.random()|0).toString(16).substring(1)}return t.substring(r,r+++e)}e.s(["uid",()=>o])},24716,e=>{"use strict";let t=new(e.i(905401)).LruMap(8192);function r(e,{enabled:r=!0,id:o}){if(!r||!o)return e();if(t.get(o))return t.get(o);let n=e().finally(()=>t.delete(o));return t.set(o,n),n}e.s(["withDedupe",()=>r])},150346,e=>{"use strict";var t=e.i(463015),r=e.i(176388),o=e.i(542122),n=e.i(923683),a=e.i(24716),s=e.i(592536),i=e.i(645011);function c(e,l={}){return async(c,p={})=>{let{dedupe:u=!1,methods:d,retryDelay:h=150,retryCount:m=3,uid:y}={...l,...p},{method:w}=c;if(d?.exclude?.includes(w)||d?.include&&!d.include.includes(w))throw new o.MethodNotSupportedRpcError(Error("method not supported"),{method:w});let f=u?(0,n.stringToHex)(`${y}.${(0,i.stringify)(c)}`):void 0;return(0,a.withDedupe)(()=>(0,s.withRetry)(async()=>{try{return await e(c)}catch(e){switch(e.code){case o.ParseRpcError.code:throw new o.ParseRpcError(e);case o.InvalidRequestRpcError.code:throw new o.InvalidRequestRpcError(e);case o.MethodNotFoundRpcError.code:throw new o.MethodNotFoundRpcError(e,{method:c.method});case o.InvalidParamsRpcError.code:throw new o.InvalidParamsRpcError(e);case o.InternalRpcError.code:throw new o.InternalRpcError(e);case o.InvalidInputRpcError.code:throw new o.InvalidInputRpcError(e);case o.ResourceNotFoundRpcError.code:throw new o.ResourceNotFoundRpcError(e);case o.ResourceUnavailableRpcError.code:throw new o.ResourceUnavailableRpcError(e);case o.TransactionRejectedRpcError.code:throw new o.TransactionRejectedRpcError(e);case o.MethodNotSupportedRpcError.code:throw new o.MethodNotSupportedRpcError(e,{method:c.method});case o.LimitExceededRpcError.code:throw new o.LimitExceededRpcError(e);case o.JsonRpcVersionUnsupportedError.code:throw new o.JsonRpcVersionUnsupportedError(e);case o.UserRejectedRequestError.code:throw new o.UserRejectedRequestError(e);case o.UnauthorizedProviderError.code:throw new o.UnauthorizedProviderError(e);case o.UnsupportedProviderMethodError.code:throw new o.UnsupportedProviderMethodError(e);case o.ProviderDisconnectedError.code:throw new o.ProviderDisconnectedError(e);case o.ChainDisconnectedError.code:throw new o.ChainDisconnectedError(e);case o.SwitchChainError.code:throw new o.SwitchChainError(e);case o.UnsupportedNonOptionalCapabilityError.code:throw new o.UnsupportedNonOptionalCapabilityError(e);case o.UnsupportedChainIdError.code:throw new o.UnsupportedChainIdError(e);case o.DuplicateIdError.code:throw new o.DuplicateIdError(e);case o.UnknownBundleIdError.code:throw new o.UnknownBundleIdError(e);case o.BundleTooLargeError.code:throw new o.BundleTooLargeError(e);case o.AtomicReadyWalletRejectedUpgradeError.code:throw new o.AtomicReadyWalletRejectedUpgradeError(e);case o.AtomicityNotSupportedError.code:throw new o.AtomicityNotSupportedError(e);case 5e3:throw new o.UserRejectedRequestError(e);default:if(e instanceof t.BaseError)throw e;throw new o.UnknownRpcError(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof r.HttpRequestError){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*Number.parseInt(e,10)}return~~(1<<e)*h},retryCount:m,shouldRetry:({error:e})=>{var t;return"code"in(t=e)&&"number"==typeof t.code?-1===t.code||t.code===o.LimitExceededRpcError.code||t.code===o.InternalRpcError.code:!(t instanceof r.HttpRequestError)||!t.status||403===t.status||408===t.status||413===t.status||429===t.status||500===t.status||502===t.status||503===t.status||504===t.status||!1}}),{enabled:u,id:f})}}e.s(["buildRequest",()=>c])},86376,e=>{"use strict";var t=e.i(150346),r=e.i(21637);function o({key:e,methods:o,name:n,request:a,retryCount:s=3,retryDelay:i=150,timeout:c,type:l},p){let u=(0,r.uid)();return{config:{key:e,methods:o,name:n,request:a,retryCount:s,retryDelay:i,timeout:c,type:l},request:(0,t.buildRequest)(a,{methods:o,retryCount:s,retryDelay:i,uid:u}),value:p}}e.s(["createTransport",()=>o])},571087,290928,211784,e=>{"use strict";var t=e.i(463015);class r extends t.BaseError{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}e.s(["UrlRequiredError",()=>r],571087);var o=e.i(176388);function n(e,{errorInstance:t=Error("timed out"),timeout:r,signal:o}){return new Promise((n,a)=>{(async()=>{let s;try{let i=new AbortController;r>0&&(s=setTimeout(()=>{o?i.abort():a(t)},r)),n(await e({signal:i?.signal||null}))}catch(e){e?.name==="AbortError"&&a(t),a(e)}finally{clearTimeout(s)}})()})}e.s(["withTimeout",()=>n],290928);var a=e.i(645011);let s={current:0,take(){return this.current++},reset(){this.current=0}};function i(e,t={}){return{async request(r){let{body:i,fetchFn:c=t.fetchFn??fetch,onRequest:l=t.onRequest,onResponse:p=t.onResponse,timeout:u=t.timeout??1e4}=r,d={...t.fetchOptions??{},...r.fetchOptions??{}},{headers:h,method:m,signal:y}=d;try{let t,r=await n(async({signal:t})=>{let r={...d,body:Array.isArray(i)?(0,a.stringify)(i.map(e=>({jsonrpc:"2.0",id:e.id??s.take(),...e}))):(0,a.stringify)({jsonrpc:"2.0",id:i.id??s.take(),...i}),headers:{"Content-Type":"application/json",...h},method:m||"POST",signal:y||(u>0?t:null)},o=new Request(e,r),n=await l?.(o,r)??{...r,url:e};return await c(n.url??e,n)},{errorInstance:new o.TimeoutError({body:i,url:e}),timeout:u,signal:!0});if(p&&await p(r),r.headers.get("Content-Type")?.startsWith("application/json"))t=await r.json();else{t=await r.text();try{t=JSON.parse(t||"{}")}catch(e){if(r.ok)throw e;t={error:t}}}if(!r.ok)throw new o.HttpRequestError({body:i,details:(0,a.stringify)(t.error)||r.statusText,headers:r.headers,status:r.status,url:e});return t}catch(t){if(t instanceof o.HttpRequestError||t instanceof o.TimeoutError)throw t;throw new o.HttpRequestError({body:i,cause:t,url:e})}}}}e.s(["getHttpRpcClient",()=>i],211784)},56469,e=>{"use strict";var t=e.i(176388),r=e.i(571087),o=e.i(103023),n=e.i(211784),a=e.i(86376);function s(e,i={}){let{batch:c,fetchFn:l,fetchOptions:p,key:u="http",methods:d,name:h="HTTP JSON-RPC",onFetchRequest:m,onFetchResponse:y,retryDelay:w,raw:f}=i;return({chain:s,retryCount:b,timeout:g})=>{let{batchSize:k=1e3,wait:v=0}="object"==typeof c?c:{},x=i.retryCount??b,W=g??i.timeout??1e4,E=e||s?.rpcUrls.default.http[0];if(!E)throw new r.UrlRequiredError;let R=(0,n.getHttpRpcClient)(E,{fetchFn:l,fetchOptions:p,onRequest:m,onResponse:y,timeout:W});return(0,a.createTransport)({key:u,methods:d,name:h,async request({method:e,params:r}){let n={method:e,params:r},{schedule:a}=(0,o.createBatchScheduler)({id:E,wait:v,shouldSplitBatch:e=>e.length>k,fn:e=>R.request({body:e}),sort:(e,t)=>e.id-t.id}),s=async e=>c?a(e):[await R.request({body:e})],[{error:i,result:l}]=await s(n);if(f)return{error:i,result:l};if(i)throw new t.RpcRequestError({body:n,error:i,url:E});return l},retryCount:x,retryDelay:w,timeout:W,type:"http"},{fetchOptions:p,url:E})}}e.s(["http",()=>s])},145551,e=>{"use strict";let t=BigInt(0),r=BigInt(1);function o(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&"Uint8Array"===e.constructor.name}function n(e){if(!o(e))throw Error("Uint8Array expected")}function a(e,t){if("boolean"!=typeof t)throw Error(e+" boolean expected, got "+t)}function s(e){let t=e.toString(16);return 1&t.length?"0"+t:t}function i(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);return""===e?t:BigInt("0x"+e)}let c="function"==typeof Uint8Array.from([]).toHex&&"function"==typeof Uint8Array.fromHex,l=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function p(e){if(n(e),c)return e.toHex();let t="";for(let r=0;r<e.length;r++)t+=l[e[r]];return t}function u(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function d(e){if("string"!=typeof e)throw Error("hex string expected, got "+typeof e);if(c)return Uint8Array.fromHex(e);let t=e.length,r=t/2;if(t%2)throw Error("hex string expected, got unpadded hex of length "+t);let o=new Uint8Array(r);for(let t=0,n=0;t<r;t++,n+=2){let r=u(e.charCodeAt(n)),a=u(e.charCodeAt(n+1));if(void 0===r||void 0===a)throw Error('hex string expected, got non-hex character "'+(e[n]+e[n+1])+'" at index '+n);o[t]=16*r+a}return o}function h(e){return i(p(e))}function m(e){return n(e),i(p(Uint8Array.from(e).reverse()))}function y(e,t){return d(e.toString(16).padStart(2*t,"0"))}function w(e,t){return y(e,t).reverse()}function f(e,t,r){let n;if("string"==typeof t)try{n=d(t)}catch(t){throw Error(e+" must be hex string or Uint8Array, cause: "+t)}else if(o(t))n=Uint8Array.from(t);else throw Error(e+" must be hex string or Uint8Array");let a=n.length;if("number"==typeof r&&a!==r)throw Error(e+" of length "+r+" expected, got "+a);return n}function b(...e){let t=0;for(let r=0;r<e.length;r++){let o=e[r];n(o),t+=o.length}let r=new Uint8Array(t);for(let t=0,o=0;t<e.length;t++){let n=e[t];r.set(n,o),o+=n.length}return r}function g(e,t){if(e.length!==t.length)return!1;let r=0;for(let o=0;o<e.length;o++)r|=e[o]^t[o];return 0===r}function k(e){if("string"!=typeof e)throw Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}let v=e=>"bigint"==typeof e&&t<=e;function x(e,t,r){return v(e)&&v(t)&&v(r)&&t<=e&&e<r}function W(e,t,r,o){if(!x(t,r,o))throw Error("expected valid "+e+": "+r+" <= n < "+o+", got "+t)}function E(e){let o;for(o=0;e>t;e>>=r,o+=1);return o}let R=e=>new Uint8Array(e);function C(e,t,r){if("number"!=typeof e||e<2)throw Error("hashLen must be a number");if("number"!=typeof t||t<2)throw Error("qByteLen must be a number");if("function"!=typeof r)throw Error("hmacFn must be a function");let o=R(e),n=R(e),a=0,s=()=>{o.fill(1),n.fill(0),a=0},i=(...e)=>r(n,o,...e),c=(e=R(0))=>{let t;if(n=i((t=[0],Uint8Array.from(t)),e),o=i(),0!==e.length){let t;n=i((t=[1],Uint8Array.from(t)),e),o=i()}},l=()=>{if(a++>=1e3)throw Error("drbg: tried 1000 values");let e=0,r=[];for(;e<t;){let t=(o=i()).slice();r.push(t),e+=o.length}return b(...r)};return(e,t)=>{let r;for(s(),c(e);!(r=t(l()));)c();return s(),r}}let P={bigint:e=>"bigint"==typeof e,function:e=>"function"==typeof e,boolean:e=>"boolean"==typeof e,string:e=>"string"==typeof e,stringOrUint8Array:e=>"string"==typeof e||o(e),isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>"function"==typeof e&&Number.isSafeInteger(e.outputLen)};function I(e,t,r={}){let o=(t,r,o)=>{let n=P[r];if("function"!=typeof n)throw Error("invalid validator function");let a=e[t];if((!o||void 0!==a)&&!n(a,e))throw Error("param "+String(t)+" is invalid. Expected "+r+", got "+a)};for(let[e,r]of Object.entries(t))o(e,r,!1);for(let[e,t]of Object.entries(r))o(e,t,!0);return e}function T(e){let t=new WeakMap;return(r,...o)=>{let n=t.get(r);if(void 0!==n)return n;let a=e(r,...o);return t.set(r,a),a}}e.s(["aInRange",()=>W,"abool",()=>a,"abytes",()=>n,"bitLen",()=>E,"bitMask",0,e=>(r<<BigInt(e))-r,"bytesToHex",()=>p,"bytesToNumberBE",()=>h,"bytesToNumberLE",()=>m,"concatBytes",()=>b,"createHmacDrbg",()=>C,"ensureBytes",()=>f,"equalBytes",()=>g,"hexToBytes",()=>d,"inRange",()=>x,"isBytes",()=>o,"memoized",()=>T,"numberToBytesBE",()=>y,"numberToBytesLE",()=>w,"numberToHexUnpadded",()=>s,"utf8ToBytes",()=>k,"validateObject",()=>I])},228116,e=>{"use strict";function t(e,t){let r=e.toString(),o=r.startsWith("-");o&&(r=r.slice(1));let[n,a]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return a=a.replace(/(0+)$/,""),`${o?"-":""}${n||"0"}${a?`.${a}`:""}`}e.s(["formatUnits",()=>t])},532327,36282,e=>{"use strict";let t={ether:-9,wei:9};e.s(["etherUnits",0,{gwei:9,wei:18},"gweiUnits",0,t,"weiUnits",0,{ether:-18,gwei:-9}],36282);var r=e.i(228116);function o(e,n="wei"){return(0,r.formatUnits)(e,t[n])}e.s(["formatGwei",()=>o],532327)},180053,e=>{"use strict";e.s(["getContractAddress",0,e=>e,"getUrl",0,e=>e])},542122,176388,e=>{"use strict";var t=e.i(463015),r=e.i(645011),o=t,n=e.i(180053);class a extends o.BaseError{constructor({body:e,cause:t,details:o,headers:a,status:s,url:i}){super("HTTP request failed.",{cause:t,details:o,metaMessages:[s&&`Status: ${s}`,`URL: ${(0,n.getUrl)(i)}`,e&&`Request body: ${(0,r.stringify)(e)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=a,this.status=s,this.url=i}}o.BaseError;class s extends o.BaseError{constructor({body:e,error:t,url:o}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,n.getUrl)(o)}`,`Request body: ${(0,r.stringify)(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code,this.data=t.data,this.url=o}}o.BaseError;class i extends o.BaseError{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,n.getUrl)(t)}`,`Request body: ${(0,r.stringify)(e)}`],name:"TimeoutError"}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.url=t}}e.s(["HttpRequestError",()=>a,"RpcRequestError",()=>s,"TimeoutError",()=>i],176388);class c extends t.BaseError{constructor(e,{code:t,docsPath:r,metaMessages:o,name:n,shortMessage:a}){super(a,{cause:e,docsPath:r,metaMessages:o||e?.metaMessages,name:n||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=n||e.name,this.code=e instanceof s?e.code:t??-1}}class l extends c{constructor(e,t){super(e,t),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class p extends c{constructor(e){super(e,{code:p.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class u extends c{constructor(e){super(e,{code:u.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class d extends c{constructor(e,{method:t}={}){super(e,{code:d.code,name:"MethodNotFoundRpcError",shortMessage:`The method${t?` "${t}"`:""} does not exist / is not available.`})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class h extends c{constructor(e){super(e,{code:h.code,name:"InvalidParamsRpcError",shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class m extends c{constructor(e){super(e,{code:m.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class y extends c{constructor(e){super(e,{code:y.code,name:"InvalidInputRpcError",shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class w extends c{constructor(e){super(e,{code:w.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class f extends c{constructor(e){super(e,{code:f.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class b extends c{constructor(e){super(e,{code:b.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class g extends c{constructor(e,{method:t}={}){super(e,{code:g.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${t?` "${t}"`:""} is not supported.`})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class k extends c{constructor(e){super(e,{code:k.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class v extends c{constructor(e){super(e,{code:v.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class x extends l{constructor(e){super(e,{code:x.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class W extends l{constructor(e){super(e,{code:W.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(W,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class E extends l{constructor(e,{method:t}={}){super(e,{code:E.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${t?` " ${t}"`:""}.`})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class R extends l{constructor(e){super(e,{code:R.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class C extends l{constructor(e){super(e,{code:C.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class P extends l{constructor(e){super(e,{code:P.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class I extends l{constructor(e){super(e,{code:I.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class T extends l{constructor(e){super(e,{code:T.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class O extends l{constructor(e){super(e,{code:O.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(O,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class j extends l{constructor(e){super(e,{code:j.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(j,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class q extends l{constructor(e){super(e,{code:q.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(q,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class B extends l{constructor(e){super(e,{code:B.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(B,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class N extends l{constructor(e){super(e,{code:N.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(N,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class A extends c{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}e.s(["AtomicReadyWalletRejectedUpgradeError",()=>B,"AtomicityNotSupportedError",()=>N,"BundleTooLargeError",()=>q,"ChainDisconnectedError",()=>C,"DuplicateIdError",()=>O,"InternalRpcError",()=>m,"InvalidInputRpcError",()=>y,"InvalidParamsRpcError",()=>h,"InvalidRequestRpcError",()=>u,"JsonRpcVersionUnsupportedError",()=>v,"LimitExceededRpcError",()=>k,"MethodNotFoundRpcError",()=>d,"MethodNotSupportedRpcError",()=>g,"ParseRpcError",()=>p,"ProviderDisconnectedError",()=>R,"ResourceNotFoundRpcError",()=>w,"ResourceUnavailableRpcError",()=>f,"SwitchChainError",()=>P,"TransactionRejectedRpcError",()=>b,"UnauthorizedProviderError",()=>W,"UnknownBundleIdError",()=>j,"UnknownRpcError",()=>A,"UnsupportedChainIdError",()=>T,"UnsupportedNonOptionalCapabilityError",()=>I,"UnsupportedProviderMethodError",()=>E,"UserRejectedRequestError",()=>x],542122)},370855,e=>{"use strict";var t=e.i(532327),r=e.i(463015);class o extends r.BaseError{constructor({cause:e,message:t}={}){const r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e,name:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class n extends r.BaseError{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${(0,t.formatGwei)(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e,name:"FeeCapTooHighError"})}}Object.defineProperty(n,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class a extends r.BaseError{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${(0,t.formatGwei)(r)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e,name:"FeeCapTooLowError"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class s extends r.BaseError{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e,name:"NonceTooHighError"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class i extends r.BaseError{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e,name:"NonceTooLowError"})}}Object.defineProperty(i,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class c extends r.BaseError{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e,name:"NonceMaxValueError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class l extends r.BaseError{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."],name:"InsufficientFundsError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds|exceeds transaction sender account balance/});class p extends r.BaseError{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e,name:"IntrinsicGasTooHighError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class u extends r.BaseError{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e,name:"IntrinsicGasTooLowError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class d extends r.BaseError{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e,name:"TransactionTypeNotSupportedError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class h extends r.BaseError{constructor({cause:e,maxPriorityFeePerGas:r,maxFeePerGas:o}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${(0,t.formatGwei)(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${o?` = ${(0,t.formatGwei)(o)} gwei`:""}).`,{cause:e,name:"TipAboveFeeCapError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class m extends r.BaseError{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e,name:"UnknownNodeError"})}}e.s(["ExecutionRevertedError",()=>o,"FeeCapTooHighError",()=>n,"FeeCapTooLowError",()=>a,"InsufficientFundsError",()=>l,"IntrinsicGasTooHighError",()=>p,"IntrinsicGasTooLowError",()=>u,"NonceMaxValueError",()=>c,"NonceTooHighError",()=>s,"NonceTooLowError",()=>i,"TipAboveFeeCapError",()=>h,"TransactionTypeNotSupportedError",()=>d,"UnknownNodeError",()=>m])},103023,22354,e=>{"use strict";function t(){let e=()=>void 0,t=()=>void 0;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}e.s(["withResolvers",()=>t],22354);let r=new Map;function o({fn:e,id:o,shouldSplitBatch:n,wait:a=0,sort:s}){let i=async()=>{let t=l();c();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{s&&Array.isArray(e)&&e.sort(s);for(let r=0;r<t.length;r++){let{resolve:o}=t[r];o?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{reject:o}=t[r];o?.(e)}})},c=()=>r.delete(o),l=()=>r.get(o)||[],p=e=>r.set(o,[...l(),e]);return{flush:c,async schedule(e){let{promise:r,resolve:o,reject:s}=t();return(n?.([...l().map(({args:e})=>e),e])&&i(),l().length>0)?p({args:e,resolve:o,reject:s}):(p({args:e,resolve:o,reject:s}),setTimeout(i,a)),r}}}e.s(["createBatchScheduler",()=>o],103023)},196706,e=>{"use strict";var t=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Binance Wallet extension",
          "description": "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "gate": {
      "qr_code": {
        "step1": {
          "title": "Open the Gate app",
          "description": "We recommend putting Gate on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Gate extension",
          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "gemini": {
      "qr_code": {
        "step1": {
          "title": "Open keys.gemini.com",
          "description": "Visit keys.gemini.com on your mobile browser - no app download required."
        },
        "step2": {
          "title": "Create Your Wallet Instantly",
          "description": "Set up your smart wallet in seconds using your device's built-in authentication."
        },
        "step3": {
          "title": "Scan to Connect",
          "description": "Scan the QR code to instantly connect your wallet - it just works."
        }
      },
      "extension": {
        "step1": {
          "title": "Go to keys.gemini.com",
          "description": "No extensions or downloads needed - your wallet lives securely in the browser."
        },
        "step2": {
          "title": "One-Click Setup",
          "description": "Create your smart wallet instantly with passkey authentication - easier than any wallet out there."
        },
        "step3": {
          "title": "Connect and Go",
          "description": "Approve the connection and you're ready - the unopinionated wallet that just works."
        }
      }
    },

    "xportal": {
      "qr_code": {
        "step1": {
          "description": "Put xPortal on your home screen for faster access to your wallet.",
          "title": "Open the xPortal app"
        },
        "step2": {
          "description": "Create a wallet or import an existing one.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "mew": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",
          "title": "Open the MEW Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "zilpay": {
      "qr_code": {
        "step1": {
          "title": "Open the ZilPay app",
          "description": "Add ZilPay to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "nova": {
      "qr_code": {
        "step1": {
          "title": "Open the Nova Wallet app",
          "description": "Add Nova Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`;e.s(["en_US_default",()=>t])},398420,e=>{e.v(t=>Promise.all(["static/chunks/69e38867654891c9.js"].map(t=>e.l(t))).then(()=>t(995495)))},637479,e=>{e.v(e=>Promise.resolve().then(()=>e(386874)))},893936,e=>{e.v(t=>Promise.all(["static/chunks/610915807e947472.js","static/chunks/9a380637e7b4214b.js","static/chunks/f9379c93ff722c9d.js"].map(t=>e.l(t))).then(()=>t(886029)))},22622,e=>{e.v(t=>Promise.all(["static/chunks/21ce14cb6f168850.js","static/chunks/0d6f586df1e71ccf.js"].map(t=>e.l(t))).then(()=>t(918062)))},182438,e=>{e.v(t=>Promise.all(["static/chunks/7d21fe97f93c211c.js"].map(t=>e.l(t))).then(()=>t(135534)))},661371,e=>{e.v(t=>Promise.all(["static/chunks/c4b5605c6bd6cf73.js"].map(t=>e.l(t))).then(()=>t(373666)))},450263,e=>{e.v(t=>Promise.all(["static/chunks/7cb12eedf83a5943.js","static/chunks/6e15eda587b56bfd.js"].map(t=>e.l(t))).then(()=>t(737447)))},269411,e=>{e.v(t=>Promise.all(["static/chunks/b30abbeea20ecdd8.js"].map(t=>e.l(t))).then(()=>t(321537)))},681538,e=>{e.v(t=>Promise.all(["static/chunks/6a80aa509f146347.js"].map(t=>e.l(t))).then(()=>t(562730)))},668149,e=>{e.v(t=>Promise.all(["static/chunks/c5e086b9a2279ea8.js"].map(t=>e.l(t))).then(()=>t(458998)))},967290,e=>{e.v(t=>Promise.all(["static/chunks/845b602fb3ad810c.js"].map(t=>e.l(t))).then(()=>t(341172)))},362797,e=>{e.v(t=>Promise.all(["static/chunks/d8c08e6d4e1bc107.js"].map(t=>e.l(t))).then(()=>t(337719)))},564507,e=>{e.v(t=>Promise.all(["static/chunks/3c58a30c70e0bbea.js"].map(t=>e.l(t))).then(()=>t(673104)))},215570,e=>{e.v(t=>Promise.all(["static/chunks/75e4b62718c3ab43.js"].map(t=>e.l(t))).then(()=>t(594653)))},443994,e=>{e.v(t=>Promise.all(["static/chunks/7495a30476efd2e3.js"].map(t=>e.l(t))).then(()=>t(401479)))},101604,e=>{e.v(t=>Promise.all(["static/chunks/20b5b49476eaf399.js"].map(t=>e.l(t))).then(()=>t(178542)))},764491,e=>{e.v(t=>Promise.all(["static/chunks/46cf14222fd0e482.js"].map(t=>e.l(t))).then(()=>t(173706)))},65375,e=>{e.v(t=>Promise.all(["static/chunks/5dbf9529217cd49e.js"].map(t=>e.l(t))).then(()=>t(900250)))},47134,e=>{e.v(t=>Promise.all(["static/chunks/38e50a622ea4d82b.js"].map(t=>e.l(t))).then(()=>t(638326)))},398432,e=>{e.v(t=>Promise.all(["static/chunks/48bbf65658588a40.js"].map(t=>e.l(t))).then(()=>t(907286)))},970475,e=>{e.v(t=>Promise.all(["static/chunks/ea4924a45a72beea.js"].map(t=>e.l(t))).then(()=>t(875968)))},952293,e=>{e.v(t=>Promise.all(["static/chunks/39ad84d55b3b897d.js"].map(t=>e.l(t))).then(()=>t(536570)))},269036,e=>{e.v(t=>Promise.all(["static/chunks/86349206134087d8.js"].map(t=>e.l(t))).then(()=>t(549406)))},507619,e=>{e.v(t=>Promise.all(["static/chunks/6ff30f5da274a125.js"].map(t=>e.l(t))).then(()=>t(362179)))},818806,e=>{e.v(t=>Promise.all(["static/chunks/2e8bdad1fa839d29.js"].map(t=>e.l(t))).then(()=>t(939061)))},410969,e=>{e.v(t=>Promise.all(["static/chunks/7690abf28d974f7e.js"].map(t=>e.l(t))).then(()=>t(776588)))},557812,e=>{e.v(t=>Promise.all(["static/chunks/170f1951338ace85.js"].map(t=>e.l(t))).then(()=>t(463259)))},491498,e=>{e.v(t=>Promise.all(["static/chunks/33712af888eb3cb1.js"].map(t=>e.l(t))).then(()=>t(579247)))},410427,e=>{e.v(t=>Promise.all(["static/chunks/2a5809c519c70fd8.js"].map(t=>e.l(t))).then(()=>t(446765)))},299561,e=>{e.v(t=>Promise.all(["static/chunks/19a90e4476017750.js"].map(t=>e.l(t))).then(()=>t(975180)))},946967,e=>{e.v(t=>Promise.all(["static/chunks/3d9e0ae9df33b7b1.js"].map(t=>e.l(t))).then(()=>t(137663)))},964940,e=>{e.v(t=>Promise.all(["static/chunks/6551505979111e59.js"].map(t=>e.l(t))).then(()=>t(879955)))},597573,e=>{e.v(t=>Promise.all(["static/chunks/ed67b06a9bb714e5.js"].map(t=>e.l(t))).then(()=>t(401048)))},472600,e=>{e.v(t=>Promise.all(["static/chunks/bd18ce0f7b625776.js"].map(t=>e.l(t))).then(()=>t(481400)))},493093,e=>{e.v(t=>Promise.all(["static/chunks/52facf24b78430d5.js"].map(t=>e.l(t))).then(()=>t(945464)))},80715,e=>{e.v(t=>Promise.all(["static/chunks/dbe4cbf8ae5ad24e.js"].map(t=>e.l(t))).then(()=>t(491182)))},490145,e=>{e.v(t=>Promise.all(["static/chunks/69844038bb76c32e.js"].map(t=>e.l(t))).then(()=>t(299600)))},564665,e=>{e.v(t=>Promise.all(["static/chunks/b7d373cc247ca595.js"].map(t=>e.l(t))).then(()=>t(639159)))},247458,e=>{e.v(t=>Promise.all(["static/chunks/d0400fa44e21af52.js"].map(t=>e.l(t))).then(()=>t(546319)))},328464,e=>{e.v(t=>Promise.all(["static/chunks/72a973e6376a9372.js"].map(t=>e.l(t))).then(()=>t(151553)))},219750,e=>{e.v(t=>Promise.all(["static/chunks/63a14d99e3791de9.js"].map(t=>e.l(t))).then(()=>t(338777)))},883345,e=>{e.v(t=>Promise.all(["static/chunks/3714f9ade3d255e0.js"].map(t=>e.l(t))).then(()=>t(842075)))},138083,e=>{e.v(t=>Promise.all(["static/chunks/4daa571f06edc165.js"].map(t=>e.l(t))).then(()=>t(150485)))},487917,e=>{e.v(t=>Promise.all(["static/chunks/246854dea34f8bc9.js"].map(t=>e.l(t))).then(()=>t(428172)))},442605,e=>{e.v(t=>Promise.all(["static/chunks/aedddf6cc4d41eda.js"].map(t=>e.l(t))).then(()=>t(766773)))},952426,e=>{e.v(t=>Promise.all(["static/chunks/8644cc0824d97f05.js"].map(t=>e.l(t))).then(()=>t(436128)))},899800,e=>{e.v(t=>Promise.all(["static/chunks/40dbffcd13447f67.js"].map(t=>e.l(t))).then(()=>t(581476)))},355055,e=>{e.v(t=>Promise.all(["static/chunks/fa3adc60a3b70c28.js"].map(t=>e.l(t))).then(()=>t(646772)))},747008,e=>{e.v(t=>Promise.all(["static/chunks/d8465a4ce56bf79b.js"].map(t=>e.l(t))).then(()=>t(496922)))},91095,e=>{e.v(t=>Promise.all(["static/chunks/3526af3bdbfddec5.js"].map(t=>e.l(t))).then(()=>t(437390)))},359796,e=>{e.v(t=>Promise.all(["static/chunks/4237dfee19d0fc74.js"].map(t=>e.l(t))).then(()=>t(678772)))},315621,e=>{e.v(t=>Promise.all(["static/chunks/a0ea16db24faed42.js"].map(t=>e.l(t))).then(()=>t(861712)))},868680,e=>{e.v(t=>Promise.all(["static/chunks/32fdfe93a4690ca5.js"].map(t=>e.l(t))).then(()=>t(769618)))},184425,e=>{e.v(t=>Promise.all(["static/chunks/c132a7f9f7887a35.js"].map(t=>e.l(t))).then(()=>t(947898)))},192930,e=>{e.v(t=>Promise.all(["static/chunks/175ae388f5b7074d.js"].map(t=>e.l(t))).then(()=>t(993977)))},769958,e=>{e.v(t=>Promise.all(["static/chunks/39b8434d36af3fa5.js"].map(t=>e.l(t))).then(()=>t(287115)))},135990,e=>{e.v(t=>Promise.all(["static/chunks/179deb9d992d211e.js"].map(t=>e.l(t))).then(()=>t(193507)))},507653,e=>{e.v(t=>Promise.all(["static/chunks/44e0fd8da5c8461c.js"].map(t=>e.l(t))).then(()=>t(940688)))},382246,e=>{e.v(t=>Promise.all(["static/chunks/a8cf94a0c8a868e8.js"].map(t=>e.l(t))).then(()=>t(587928)))},403842,e=>{e.v(t=>Promise.all(["static/chunks/68fc097cda413a54.js"].map(t=>e.l(t))).then(()=>t(865161)))},158966,e=>{e.v(t=>Promise.all(["static/chunks/a04f79f60679b15f.js"].map(t=>e.l(t))).then(()=>t(674307)))},484605,e=>{e.v(t=>Promise.all(["static/chunks/23367a34799740b9.js"].map(t=>e.l(t))).then(()=>t(751760)))},735645,e=>{e.v(t=>Promise.all(["static/chunks/83aa25439bfa453d.js"].map(t=>e.l(t))).then(()=>t(512701)))},225504,e=>{e.v(t=>Promise.all(["static/chunks/6342078d3258b606.js"].map(t=>e.l(t))).then(()=>t(57015)))},462731,e=>{e.v(t=>Promise.all(["static/chunks/75b341eba7e81175.js"].map(t=>e.l(t))).then(()=>t(171484)))},88022,e=>{e.v(t=>Promise.all(["static/chunks/7d903eee709a0649.js"].map(t=>e.l(t))).then(()=>t(237343)))},983435,e=>{e.v(t=>Promise.all(["static/chunks/6b5fa239c5f1417b.js"].map(t=>e.l(t))).then(()=>t(34885)))},359258,e=>{e.v(t=>Promise.all(["static/chunks/07c013acbbe474e5.js"].map(t=>e.l(t))).then(()=>t(38601)))},572398,e=>{e.v(t=>Promise.all(["static/chunks/7578808447244fb0.js"].map(t=>e.l(t))).then(()=>t(649815)))},920589,e=>{e.v(t=>Promise.all(["static/chunks/9c9eab778e501786.js"].map(t=>e.l(t))).then(()=>t(901905)))},683915,e=>{e.v(t=>Promise.all(["static/chunks/4d3f4d599ab14d70.js"].map(t=>e.l(t))).then(()=>t(169259)))},79947,e=>{e.v(t=>Promise.all(["static/chunks/7dc9f3cd85de5a32.js"].map(t=>e.l(t))).then(()=>t(991696)))},136367,e=>{e.v(t=>Promise.all(["static/chunks/2ca930911fbb4a0e.js"].map(t=>e.l(t))).then(()=>t(801760)))},516239,e=>{e.v(t=>Promise.all(["static/chunks/187478d15cf4e16f.js"].map(t=>e.l(t))).then(()=>t(774416)))},240725,e=>{e.v(t=>Promise.all(["static/chunks/b1ea5060abe95ce3.js"].map(t=>e.l(t))).then(()=>t(140275)))},67721,e=>{e.v(t=>Promise.all(["static/chunks/f305ba8322999187.js"].map(t=>e.l(t))).then(()=>t(843055)))},348671,e=>{e.v(t=>Promise.all(["static/chunks/3934fa69baf27501.js"].map(t=>e.l(t))).then(()=>t(995099)))},879857,e=>{e.v(t=>Promise.all(["static/chunks/00adc73682f91a61.js"].map(t=>e.l(t))).then(()=>t(859996)))},285935,e=>{e.v(t=>Promise.all(["static/chunks/ac155d368bcdb6ce.js"].map(t=>e.l(t))).then(()=>t(47049)))},768253,e=>{e.v(t=>Promise.all(["static/chunks/2a37951c17c00a4e.js"].map(t=>e.l(t))).then(()=>t(364782)))},769179,e=>{e.v(t=>Promise.all(["static/chunks/8ce690cac467a250.js"].map(t=>e.l(t))).then(()=>t(409015)))},343689,e=>{e.v(t=>Promise.all(["static/chunks/d0e065cd576fd532.js"].map(t=>e.l(t))).then(()=>t(939893)))},465953,e=>{e.v(t=>Promise.all(["static/chunks/9390b17f5015d865.js"].map(t=>e.l(t))).then(()=>t(158525)))}]);