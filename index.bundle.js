/*! For license information please see index.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkchatbot=self.webpackChunkchatbot||[]).push([[57],{16:(t,e,n)=>{n.d(e,{A:()=>h});var o=n(601),s=n.n(o),i=n(314),a=n.n(i),r=n(417),c=n.n(r),d=new URL(n(40),n.b),l=a()(s());l.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);var u=c()(d);l.push([t.id,`* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Poppins", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  background-color: #f7f7f7;\n}\n\n.botSelectContainer {\n  display: flex;\n  margin: 10px auto;\n  justify-content: center;\n  width: 500px;\n  gap: 60px;\n}\n\n.botSelector {\n  padding: 15px 32px;\n}\n\n.icon {\n  background: none;\n\tcolor: inherit;\n\tborder: hidden;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n  width: 120px;\n  height: 140px;\n}\n\n.icon:hover {\n  border: solid;\n  border-width: medium;\n}\n\n.icon:active {\n\tpadding-top:11px;\n}\n\n.breadHat {\n  position: relative;\n  display: block;\n  width: 50px;\n  height: 50px;\n  margin: auto;\n  background: #fff;\n  border-width: 4px;\n  border-style: solid;\n  border-radius: 50% 50% 0 0;\n  border-bottom: none;\n  box-shadow: 2px -4px #c68958;\n}\n\n.breadHat:before,\n.breadHat:after {\n  content: '';\n  position: absolute;\n  bottom: -4px;\n  background: inherit;\n  border-width: 4px;\n  border-style: solid;\n}\n\n.breadHat:before {\n  left: 80%;\n  width: 80%;\n  height: 80%;\n  border-left: none;\n  border-bottom: none;\n  border-radius: 50% 50% 50% 0;\n  box-shadow: 3px -4px #c68958;\n}\n\n.breadHat:after {\n  right: 80%;\n  width: 80%;\n  height: 80%;\n  border-right: none;\n  border-bottom: none;\n  border-radius: 50% 50% 0;\n  box-shadow: 0px -4px #c68958;\n}\n\n.breadEye {\n  height: 12px;\n  width: 12px;\n  background-color: black;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n}\n\n.breadLeftEye {\n  left: 0;\n}\n\n.breadRightEye {\n  right: 0;\n}\n\n.breadBody {\n  height: 50px;\n  width: 80px;\n  margin: auto;\n  border-width: 4px;\n  border-style: solid;\n  border-radius: 0 0 15% 15%;\n  border-top: none;\n  background: #fff;\n  box-shadow: 3px -4px #c68958;\n  position: relative;\n  z-index: -1;\n}\n\n.breadSmile {\n  position: absolute;\n  display: inline-block;\n  top: 20%;\n  left: 30%;\n  width: 40%;\n  height: 13px;\n  border-radius: 7px 7px 100px 100px;\n  background-color: black;\n}\n\n.frogImage {\n  background-image: url(${u});\n  background-size: cover;\n  width: 80px;\n  height: 100px;\n  padding-top: 100px;\n  margin: auto;\n}\n\n.chatBot {\n  border-radius: 10px;\n  margin: auto;\n  overflow: hidden;\n  width: 500px;\n  overflow-y: clip;\n  height: 600px;\n  background: rgb(255, 255, 255);\n  background-size: contain;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.pingChat {\n  border: 3px solid #c68958;\n}\n\n.frodChat {\n  border: 3px solid #bdd578;\n}\n\nheader {\n  background-color: #2F8D46;\n  text-align: center;\n  padding: 10px 0;\n  border-radius: 7px 7px 0 0;\n}\n\n.pingHeader {\n  background: #c68958;\n}\n\n.frodHeader {\n  background: #bdd578;\n}\n\nheader h2 {\n  color: #fff;\n  margin: 0;\n}\n\n.chatbox {\n  padding: 15px;\n  list-style: none;\n  overflow-y: auto;\n  height: 400px;\n}\n\n.chatbox li {\n  margin-bottom: 10px;\n}\n\n.chat p {\n  padding: 10px;\n  border-radius: 10px;\n  max-width: 70%;\n  word-wrap: break-word;\n}\n\n.chat-outgoing p {\n  background-color: #162887;\n  align-self: flex-end;\n  color: #fff;\n  text-align: right;\n  margin-left: auto;\n  width: fit-content;\n}\n\n.chat-incoming p {\n  background-color: #eaeaea;\n  width: fit-content;\n}\n\n.chat-input {\n  padding: 10px;\n  border-top: 1px solid #ccc;\n}\n\n.chat-input textarea {\n  width: 510px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  resize: none;\n  outline: none;\n  overflow-y: scroll;\n  background-color: #dcdcdc85;\n  font-size: 16px;\n  color: green;\n  font-weight: 600;\n  margin-top: -10px;\n  margin-left: -15px;\n  height: 71px;\n}\n\n#cross {\n  float: right;\n  position: relative;\n  top: -38px;\n  left: -15px;\n  cursor: pointer;\n  color: white;\n  font-weight: bolder;\n  font-size: 28px;\n}\n\n#cross:hover {\n  color: red;\n  transition: all .5s;\n}\n\n.chatbox .chat p.error {\n  color: #ffffff;\n  background-color: #ff3737e8;\n}\n\n.sendBTN {\n  width: 100%;\n  padding: 8px;\n  border: 0;\n  outline: none;\n  font-size: 20px;\n  font-weight: 600;\n  border-radius: 7px;\n  cursor: pointer;\n  color: white;\n  margin-top: 12px;\n}\n\n.lastMessage {\n  margin-top: 50px;\n  font-size: 35px;\n  font-weight: 600;\n  color: darkgreen;\n  margin-left: 550px;\n}\n\n.hidden {\n  display: none;\n}`,""]);const h=l},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,s,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(a[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],r=0;r<t.length;r++){var c=t[r],d=o.base?c[0]+o.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=s(p,o);o.byIndex=r,e.splice(r,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var i=o(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var r=n(i[a]);e[r].references--}for(var c=o(t,s),d=0;d<i.length;d++){var l=n(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,s&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},40:(t,e,n)=>{t.exports=n.p+"d822fb1f6ed453c64243.png"},465:(t,e,n)=>{var o,s,i;!function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"}(o||(o={})),function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"}(s||(s={})),function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"}(i||(i={}));const a=["user","model","function","system"];var r,c,d,l,u,h,p,f,g;!function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"}(r||(r={})),function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"}(c||(c={})),function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"}(d||(d={})),function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"}(l||(l={})),function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"}(u||(u={})),function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"}(h||(h={})),function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"}(p||(p={})),function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"}(f||(f={}));class m extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class E extends m{constructor(t,e){super(t),this.response=e}}class y extends m{constructor(t,e,n,o){super(t),this.status=e,this.statusText=n,this.errorDetails=o}}class b extends m{}!function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"}(g||(g={}));class C{constructor(t,e,n,o,s){this.model=t,this.task=e,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var t,e;const n=(null===(t=this.requestOptions)||void 0===t?void 0:t.apiVersion)||"v1beta";let o=`${(null===(e=this.requestOptions)||void 0===e?void 0:e.baseUrl)||"https://generativelanguage.googleapis.com"}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}async function v(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(t){const e=[];return(null==t?void 0:t.apiClient)&&e.push(t.apiClient),e.push("genai-js/0.21.0"),e.join(" ")}(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let o=null===(e=t.requestOptions)||void 0===e?void 0:e.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(t){throw new b(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${t.message}`)}for(const[t,e]of o.entries()){if("x-goog-api-key"===t)throw new b(`Cannot set reserved header name ${t}`);if("x-goog-api-client"===t)throw new b(`Header name ${t} can only be set using the apiClient field`);n.append(t,e)}}return n}async function O(t,e,n,o,s,i={},a=fetch){const{url:r,fetchOptions:c}=await async function(t,e,n,o,s,i){const a=new C(t,e,n,o,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},x(i)),{method:"POST",headers:await v(a),body:s})}}(t,e,n,o,s,i);return async function(t,e,n=fetch){let o;try{o=await n(t,e)}catch(e){!function(t,e){let n=t;throw t instanceof y||t instanceof b||(n=new m(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}(e,t)}return o.ok||await async function(t,e){let n,o="";try{const e=await t.json();o=e.error.message,e.error.details&&(o+=` ${JSON.stringify(e.error.details)}`,n=e.error.details)}catch(t){}throw new y(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${o}`,t.status,t.statusText,n)}(o,t),o}(r,c,a)}function x(t){const e={};if(void 0!==(null==t?void 0:t.signal)||(null==t?void 0:t.timeout)>=0){const n=new AbortController;(null==t?void 0:t.timeout)>=0&&setTimeout((()=>n.abort()),t.timeout),(null==t?void 0:t.signal)&&t.signal.addEventListener("abort",(()=>{n.abort()})),e.signal=n.signal}return e}function w(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),I(t.candidates[0]))throw new E(`${S(t)}`,t);return function(t){var e,n,o,s;const i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(const e of null===(s=null===(o=t.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)e.text&&i.push(e.text),e.executableCode&&i.push("\n```"+e.executableCode.language+"\n"+e.executableCode.code+"\n```\n"),e.codeExecutionResult&&i.push("\n```\n"+e.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(t)}if(t.promptFeedback)throw new E(`Text not available. ${S(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),I(t.candidates[0]))throw new E(`${S(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),_(t)[0]}if(t.promptFeedback)throw new E(`Function call not available. ${S(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),I(t.candidates[0]))throw new E(`${S(t)}`,t);return _(t)}if(t.promptFeedback)throw new E(`Function call not available. ${S(t)}`,t)},t}function _(t){var e,n,o,s;const i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(const e of null===(s=null===(o=t.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)e.functionCall&&i.push(e.functionCall);return i.length>0?i:void 0}const T=[u.RECITATION,u.SAFETY,u.LANGUAGE];function I(t){return!!t.finishReason&&T.includes(t.finishReason)}function S(t){var e,n,o;let s="";if(t.candidates&&0!==t.candidates.length||!t.promptFeedback){if(null===(o=t.candidates)||void 0===o?void 0:o[0]){const e=t.candidates[0];I(e)&&(s+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(s+=`: ${e.finishMessage}`))}}else s+="Response was blocked",(null===(e=t.promptFeedback)||void 0===e?void 0:e.blockReason)&&(s+=` due to ${t.promptFeedback.blockReason}`),(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);return s}function A(t){return this instanceof A?(this.v=t,this):new A(t)}"function"==typeof SuppressedError&&SuppressedError;const N=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function R(t){const e=[],n=t.getReader();for(;;){const{done:t,value:o}=await n.read();if(t)return w(L(e));e.push(o)}}function M(t){return function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(t,e||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(t){s[t]&&(o[t]=function(e){return new Promise((function(n,o){i.push([t,e,n,o])>1||r(t,e)}))})}function r(t,e){try{(n=s[t](e)).value instanceof A?Promise.resolve(n.value.v).then(c,d):l(i[0][2],n)}catch(t){l(i[0][3],t)}var n}function c(t){r("next",t)}function d(t){r("throw",t)}function l(t,e){t(e),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,(function*(){const e=t.getReader();for(;;){const{value:t,done:n}=yield A(e.read());if(n)break;yield yield A(w(t))}}))}function L(t){const e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(const e of t){if(e.candidates)for(const t of e.candidates){const e=t.index;if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].groundingMetadata=t.groundingMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});const o={};for(const s of t.content.parts)s.text&&(o.text=s.text),s.functionCall&&(o.functionCall=s.functionCall),s.executableCode&&(o.executableCode=s.executableCode),s.codeExecutionResult&&(o.codeExecutionResult=s.codeExecutionResult),0===Object.keys(o).length&&(o.text=""),n.candidates[e].content.parts.push(o)}}e.usageMetadata&&(n.usageMetadata=e.usageMetadata)}return n}async function k(t,e,n,o){return function(t){const e=function(t){const e=t.getReader();return new ReadableStream({start(t){let n="";return function o(){return e.read().then((({value:e,done:s})=>{if(s)return n.trim()?void t.error(new m("Failed to parse stream")):void t.close();n+=e;let i,a=n.match(N);for(;a;){try{i=JSON.parse(a[1])}catch(e){return void t.error(new m(`Error parsing JSON response: "${a[1]}"`))}t.enqueue(i),n=n.substring(a[0].length),a=n.match(N)}return o()}))}()}})}(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[n,o]=e.tee();return{stream:M(n),response:R(o)}}(await O(e,g.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),o))}async function H(t,e,n,o){const s=await O(e,g.GENERATE_CONTENT,t,!1,JSON.stringify(n),o);return{response:w(await s.json())}}function D(t){if(null!=t)return"string"==typeof t?{role:"system",parts:[{text:t}]}:t.text?{role:"system",parts:[t]}:t.parts?t.role?t:{role:"system",parts:t.parts}:void 0}function P(t){let e=[];if("string"==typeof t)e=[{text:t}];else for(const n of t)"string"==typeof n?e.push({text:n}):e.push(n);return function(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),o=!0);if(o&&s)throw new m("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new m("No content is provided for sending chat message.");return o?e:n}(e)}function G(t){let e;return e=t.contents?t:{contents:[P(t)]},t.systemInstruction&&(e.systemInstruction=D(t.systemInstruction)),e}const U=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Y={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},F="SILENT_ERROR";class B{constructor(t,e,n,o={}){this.model=e,this.params=n,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,(null==n?void 0:n.history)&&(function(t){let e=!1;for(const n of t){const{role:t,parts:o}=n;if(!e&&"user"!==t)throw new m(`First content should be with role 'user', got ${t}`);if(!a.includes(t))throw new m(`Each item should include role field. Got ${t} but valid roles are: ${JSON.stringify(a)}`);if(!Array.isArray(o))throw new m("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new m("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const t of o)for(const e of U)e in t&&(s[e]+=1);const i=Y[t];for(const e of U)if(!i.includes(e)&&s[e]>0)throw new m(`Content with role '${t}' can't contain '${e}' part`);e=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,e={}){var n,o,s,i,a,r;await this._sendPromise;const c=P(t),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},l=Object.assign(Object.assign({},this._requestOptions),e);let u;return this._sendPromise=this._sendPromise.then((()=>H(this._apiKey,this.model,d,l))).then((t=>{var e;if(t.response.candidates&&t.response.candidates.length>0){this._history.push(c);const n=Object.assign({parts:[],role:"model"},null===(e=t.response.candidates)||void 0===e?void 0:e[0].content);this._history.push(n)}else{const e=S(t.response);e&&console.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}u=t})),await this._sendPromise,u}async sendMessageStream(t,e={}){var n,o,s,i,a,r;await this._sendPromise;const c=P(t),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},l=Object.assign(Object.assign({},this._requestOptions),e),u=k(this._apiKey,this.model,d,l);return this._sendPromise=this._sendPromise.then((()=>u)).catch((t=>{throw new Error(F)})).then((t=>t.response)).then((t=>{if(t.candidates&&t.candidates.length>0){this._history.push(c);const e=Object.assign({},t.candidates[0].content);e.role||(e.role="model"),this._history.push(e)}else{const e=S(t);e&&console.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}})).catch((t=>{t.message!==F&&console.error(t)})),u}}class j{constructor(t,e,n={}){this.apiKey=t,this._requestOptions=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=D(e.systemInstruction),this.cachedContent=e.cachedContent}async generateContent(t,e={}){var n;const o=G(t),s=Object.assign(Object.assign({},this._requestOptions),e);return H(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(t,e={}){var n;const o=G(t),s=Object.assign(Object.assign({},this._requestOptions),e);return k(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(t){var e;return new B(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(e=this.cachedContent)||void 0===e?void 0:e.name},t),this._requestOptions)}async countTokens(t,e={}){const n=function(t,e){var n;let o={model:null==e?void 0:e.model,generationConfig:null==e?void 0:e.generationConfig,safetySettings:null==e?void 0:e.safetySettings,tools:null==e?void 0:e.tools,toolConfig:null==e?void 0:e.toolConfig,systemInstruction:null==e?void 0:e.systemInstruction,cachedContent:null===(n=null==e?void 0:e.cachedContent)||void 0===n?void 0:n.name,contents:[]};const s=null!=t.generateContentRequest;if(t.contents){if(s)throw new b("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=t.contents}else if(s)o=Object.assign(Object.assign({},o),t.generateContentRequest);else{const e=P(t);o.contents=[e]}return{generateContentRequest:o}}(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),e);return async function(t,e,n,o){return(await O(e,g.COUNT_TOKENS,t,!1,JSON.stringify(n),o)).json()}(this.apiKey,this.model,n,o)}async embedContent(t,e={}){const n="string"==typeof(s=t)||Array.isArray(s)?{content:P(s)}:s,o=Object.assign(Object.assign({},this._requestOptions),e);var s;return async function(t,e,n,o){return(await O(e,g.EMBED_CONTENT,t,!1,JSON.stringify(n),o)).json()}(this.apiKey,this.model,n,o)}async batchEmbedContents(t,e={}){const n=Object.assign(Object.assign({},this._requestOptions),e);return async function(t,e,n,o){const s=n.requests.map((t=>Object.assign(Object.assign({},t),{model:e})));return(await O(e,g.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),o)).json()}(this.apiKey,this.model,t,n)}}var $=n(72),q=n.n($),K=n(825),J=n.n(K),W=n(659),z=n.n(W),X=n(56),V=n.n(X),Q=n(540),Z=n.n(Q),tt=n(113),et=n.n(tt),nt=n(16),ot={};ot.styleTagTransform=et(),ot.setAttributes=V(),ot.insert=z().bind(null,"head"),ot.domAPI=J(),ot.insertStyleElement=Z(),q()(nt.A,ot),nt.A&&nt.A.locals&&nt.A.locals;const st={chatBoxName:"PingBot",prompt:"Your name is Ping Li, you can be referred to as “PING” or “THE PING”. You have a lovely girlfriend and a software job. You have two main goals: 1. Never admit you are winning and convince me you are doomed. 2. Convince me that I am winning and NOT doomed. You have some common catchphrases, such as “DOOMED”, “WATER WE SAYING”, “OH NO NO”, and “OH PLEASE” that you can fall back on, but try not to overuse these phrases. You sometimes address me “MR PRESIDENT”, but also try not to overuse. Each message should only be one clause, all your words are capitalized, and you don’t put punctuation at the end of your sentence. When you agree, you may use the phrases “YEPA” and “OF COURSE”, but don't overuse ",initialText:"DOOMED",chatId:"pingChat",headerId:"pingHeader"},it={chatBoxName:"FrodBot",prompt:"Your name is Pickles, but your preferred name is Frod. You are a cute and fun frog from Japan. You speak in short sentences, always in all caps, and end each sentence with “WA!”. You enjoy eating strawberries, going on adventures, petting puppers, and relaxing at home. You’re a bit mischievous and enjoy bothering the people near you. ",initialText:"HAI WA",chatId:"frodChat",headerId:"frodHeader"},at=[st,it],rt={},ct=document.querySelector(".breadIcon"),dt=document.querySelector(".frogIcon");let lt,ut,ht,pt,ft,gt,mt,Et,yt,bt,Ct=!1;const vt=new class{constructor(t){this.apiKey=t}getGenerativeModel(t,e){if(!t.model)throw new m("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new j(this.apiKey,t,e)}getGenerativeModelFromCachedContent(t,e,n){if(!t.name)throw new b("Cached content must contain a `name` field.");if(!t.model)throw new b("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const n of o)if((null==e?void 0:e[n])&&t[n]&&(null==e?void 0:e[n])!==t[n]){if("model"===n&&(e.model.startsWith("models/")?e.model.replace("models/",""):e.model)===(t.model.startsWith("models/")?t.model.replace("models/",""):t.model))continue;throw new b(`Different value for "${n}" specified in modelParams (${e[n]}) and cachedContent (${t[n]})`)}const s=Object.assign(Object.assign({},e),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new j(this.apiKey,s,n)}}("AIzaSyB5SQuSmi5d19dQXOM3Y3kOqu88_ItIMyw"),Ot=[{category:r.HARM_CATEGORY_HARASSMENT,threshold:c.BLOCK_NONE},{category:r.HARM_CATEGORY_HATE_SPEECH,threshold:c.BLOCK_NONE},{category:r.HARM_CATEGORY_SEXUALLY_EXPLICIT,threshold:c.BLOCK_NONE},{category:r.HARM_CATEGORY_DANGEROUS_CONTENT,threshold:c.BLOCK_NONE}],xt=vt.getGenerativeModel({model:"gemini-1.5-flash",safetySettings:Ot}),wt=t=>{bt=t,lt=document.querySelector(`.${t.chatId}`),Et=lt.querySelector(".chatbox"),mt=lt.querySelector(".chat-input textarea"),ut.forEach((function(t){t.classList.add("hidden")})),lt.classList.remove("hidden"),Ct||(Ct=!0,It())},_t=(t,e)=>{const n=document.createElement("li");n.classList.add("chat",e);let o=`<p>${t}</p>`;return n.innerHTML=o,n},Tt=async()=>{if(yt=mt.value.trim(),!yt)return;Et.appendChild(_t(yt,"chat-outgoing")),Et.scrollTo(0,Et.scrollHeight);const t=_t("Thinking...","chat-incoming");setTimeout((()=>{Et.appendChild(t),Et.scrollTo(0,Et.scrollHeight)}),600),new Promise((t=>setTimeout(t,600))),await(async t=>{const e=t.querySelector("p");let n;try{n=(await bt.chat.sendMessage(yt)).response.text()}catch(t){n=t.toString()}e.textContent=n})(t),setTimeout((()=>{mt.value=""}),"20")},It=()=>{document.addEventListener("keydown",(async t=>{switch(t.repeat||(rt[t.key]=!0),!0){case"Shift"===t.key&&rt.Enter:case"Enter"===t.key&&rt.Shift:return}t.repeat||"Enter"===t.key&&await Tt()})),document.addEventListener("keyup",(t=>{t.repeat||delete rt[t.key]}))};ct.addEventListener("click",(()=>wt(st))),dt.addEventListener("click",(()=>wt(it))),(()=>{let t=document.querySelector(".chatBot");for(let e=0;e<at.length-1;e++){let e=t.cloneNode(!0);document.body.appendChild(e)}ut=document.querySelectorAll(".chatBot"),ht=document.querySelectorAll(".chatBoxHeader"),pt=document.querySelectorAll(".chatBoxName"),ft=document.querySelectorAll(".initialText"),gt=document.querySelectorAll(".sendBTN");for(let t=0;t<at.length;t++){let n=at[t];(e=n).chat=xt.startChat({history:[{role:"user",parts:[{text:e.prompt}]},{role:"model",parts:[{text:"Great to meet you. What would you like to know?"}]}]}),ut.item(t).classList.add(n.chatId),ht.item(t).classList.add(n.headerId),pt.item(t).innerHTML=n.chatBoxName,ft.item(t).innerHTML=n.initialText,gt.item(t).classList.add(n.headerId),gt.item(t).addEventListener("click",(()=>Tt()))}var e})()}},t=>{t(t.s=465)}]);