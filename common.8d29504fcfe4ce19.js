"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{2093:(M,w,h)=>{h.d(w,{c:()=>l});var f=h(2361),m=h(2335),d=h(1363);const l=(a,n)=>{let t,e;const o=(r,u,g)=>{if("undefined"==typeof document)return;const _=document.elementFromPoint(r,u);_&&n(_)?_!==t&&(c(),s(_,g)):c()},s=(r,u)=>{t=r,e||(e=t);const g=t;(0,f.c)(()=>g.classList.add("ion-activated")),u()},c=(r=!1)=>{if(!t)return;const u=t;(0,f.c)(()=>u.classList.remove("ion-activated")),r&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>o(r.currentX,r.currentY,m.a),onMove:r=>o(r.currentX,r.currentY,m.b),onEnd:()=>{c(!0),(0,m.h)(),e=void 0}})}},7438:(M,w,h)=>{h.d(w,{g:()=>f});const f=(n,t,e,o,s)=>d(n[1],t[1],e[1],o[1],s).map(c=>m(n[0],t[0],e[0],o[0],c)),m=(n,t,e,o,s)=>s*(3*t*Math.pow(s-1,2)+s*(-3*e*s+3*e+o*s))-n*Math.pow(s-1,3),d=(n,t,e,o,s)=>a((o-=s)-3*(e-=s)+3*(t-=s)-(n-=s),3*e-6*t+3*n,3*t-3*n,n).filter(r=>r>=0&&r<=1),a=(n,t,e,o)=>{if(0===n)return((n,t,e)=>{const o=t*t-4*n*e;return o<0?[]:[(-t+Math.sqrt(o))/(2*n),(-t-Math.sqrt(o))/(2*n)]})(t,e,o);const s=(3*(e/=n)-(t/=n)*t)/3,c=(2*t*t*t-9*t*e+27*(o/=n))/27;if(0===s)return[Math.pow(-c,1/3)];if(0===c)return[Math.sqrt(-s),-Math.sqrt(-s)];const r=Math.pow(c/2,2)+Math.pow(s/3,3);if(0===r)return[Math.pow(c/2,.5)-t/3];if(r>0)return[Math.pow(-c/2+Math.sqrt(r),1/3)-Math.pow(c/2+Math.sqrt(r),1/3)-t/3];const u=Math.sqrt(Math.pow(-s/3,3)),g=Math.acos(-c/(2*Math.sqrt(Math.pow(-s/3,3)))),_=2*Math.pow(u,1/3);return[_*Math.cos(g/3)-t/3,_*Math.cos((g+2*Math.PI)/3)-t/3,_*Math.cos((g+4*Math.PI)/3)-t/3]}},5062:(M,w,h)=>{h.d(w,{i:()=>f});const f=m=>m&&""!==m.dir?"rtl"===m.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},4560:(M,w,h)=>{h.r(w),h.d(w,{startFocusVisible:()=>l});const f="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=a=>{let n=[],t=!0;const e=a?a.shadowRoot:document,o=a||document.body,s=v=>{n.forEach(p=>p.classList.remove(f)),v.forEach(p=>p.classList.add(f)),n=v},c=()=>{t=!1,s([])},r=v=>{t=d.includes(v.key),t||s([])},u=v=>{if(t&&v.composedPath){const p=v.composedPath().filter(y=>!!y.classList&&y.classList.contains("ion-focusable"));s(p)}},g=()=>{e.activeElement===o&&s([])};return e.addEventListener("keydown",r),e.addEventListener("focusin",u),e.addEventListener("focusout",g),e.addEventListener("touchstart",c),e.addEventListener("mousedown",c),{destroy:()=>{e.removeEventListener("keydown",r),e.removeEventListener("focusin",u),e.removeEventListener("focusout",g),e.removeEventListener("touchstart",c),e.removeEventListener("mousedown",c)},setFocus:s}}},2407:(M,w,h)=>{h.d(w,{C:()=>a,a:()=>d,d:()=>l});var f=h(5861),m=h(206);const d=function(){var n=(0,f.Z)(function*(t,e,o,s,c,r){if(t)return t.attachViewToDom(e,o,c,s);if(!(r||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const u="string"==typeof o?e.ownerDocument&&e.ownerDocument.createElement(o):o;return s&&s.forEach(g=>u.classList.add(g)),c&&Object.assign(u,c),e.appendChild(u),yield new Promise(g=>(0,m.c)(u,g)),u});return function(e,o,s,c,r,u){return n.apply(this,arguments)}}(),l=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},a=()=>{let n,t;return{attachViewToDom:function(){var s=(0,f.Z)(function*(c,r,u={},g=[]){if(n=c,r){const v="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r;g.forEach(p=>v.classList.add(p)),Object.assign(v,u),n.appendChild(v),yield new Promise(p=>(0,m.c)(v,p))}else if(n.children.length>0){const v=n.ownerDocument&&n.ownerDocument.createElement("div");g.forEach(p=>v.classList.add(p)),v.append(...n.children),n.appendChild(v)}const _=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),_.appendChild(n),n});return function(r,u){return s.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},2335:(M,w,h)=>{h.d(w,{a:()=>d,b:()=>l,c:()=>m,d:()=>n,h:()=>a});const f={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:o})},notification(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},m=()=>{f.selection()},d=()=>{f.selectionStart()},l=()=>{f.selectionChanged()},a=()=>{f.selectionEnd()},n=t=>{f.impact(t)}},6665:(M,w,h)=>{h.d(w,{s:()=>f});const f=e=>{try{if(e instanceof class t{constructor(o){this.value=o}})return e.value;if(!l()||"string"!=typeof e||""===e)return e;const o=document.createDocumentFragment(),s=document.createElement("div");o.appendChild(s),s.innerHTML=e,n.forEach(g=>{const _=o.querySelectorAll(g);for(let v=_.length-1;v>=0;v--){const p=_[v];p.parentNode?p.parentNode.removeChild(p):o.removeChild(p);const y=d(p);for(let i=0;i<y.length;i++)m(y[i])}});const c=d(o);for(let g=0;g<c.length;g++)m(c[g]);const r=document.createElement("div");r.appendChild(o);const u=r.querySelector("div");return null!==u?u.innerHTML:r.innerHTML}catch(o){return console.error(o),""}},m=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let s=e.attributes.length-1;s>=0;s--){const c=e.attributes.item(s),r=c.name;if(!a.includes(r.toLowerCase())){e.removeAttribute(r);continue}const u=c.value;null!=u&&u.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const o=d(e);for(let s=0;s<o.length;s++)m(o[s])},d=e=>null!=e.children?e.children:e.childNodes,l=()=>{const e=window,o=e&&e.Ionic&&e.Ionic.config;return!o||(o.get?o.get("sanitizerEnabled",!0):!0===o.sanitizerEnabled||void 0===o.sanitizerEnabled)},a=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},8117:(M,w,h)=>{h.d(w,{a:()=>f,b:()=>c,c:()=>n,d:()=>r,e:()=>i,f:()=>d,g:()=>m,h:()=>p,i:()=>t,j:()=>o,k:()=>u,l:()=>e,m:()=>a,n:()=>l,o:()=>s,p:()=>g,q:()=>_,r:()=>v,s:()=>y});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},410:(M,w,h)=>{h.r(w),h.d(w,{KEYBOARD_DID_CLOSE:()=>m,KEYBOARD_DID_OPEN:()=>f,copyVisualViewport:()=>y,keyboardDidClose:()=>g,keyboardDidOpen:()=>r,keyboardDidResize:()=>u,resetKeyboardAssist:()=>t,setKeyboardClose:()=>c,setKeyboardOpen:()=>s,startKeyboardAssist:()=>e,trackViewportChanges:()=>p});const f="ionKeyboardDidShow",m="ionKeyboardDidHide";let l={},a={},n=!1;const t=()=>{l={},a={},n=!1},e=i=>{o(i),i.visualViewport&&(a=y(i.visualViewport),i.visualViewport.onresize=()=>{p(i),r()||u(i)?s(i):g(i)&&c(i)})},o=i=>{i.addEventListener("keyboardDidShow",E=>s(i,E)),i.addEventListener("keyboardDidHide",()=>c(i))},s=(i,E)=>{_(i,E),n=!0},c=i=>{v(i),n=!1},r=()=>!n&&l.width===a.width&&(l.height-a.height)*a.scale>150,u=i=>n&&!g(i),g=i=>n&&a.height===i.innerHeight,_=(i,E)=>{const C=new CustomEvent(f,{detail:{keyboardHeight:E?E.keyboardHeight:i.innerHeight-a.height}});i.dispatchEvent(C)},v=i=>{const E=new CustomEvent(m);i.dispatchEvent(E)},p=i=>{l=Object.assign({},a),a=y(i.visualViewport)},y=i=>({width:Math.round(i.width),height:Math.round(i.height),offsetTop:i.offsetTop,offsetLeft:i.offsetLeft,pageTop:i.pageTop,pageLeft:i.pageLeft,scale:i.scale})},9955:(M,w,h)=>{h.d(w,{S:()=>m});const m={bubbles:{dur:1e3,circles:9,fn:(d,l,a)=>{const n=d*l/a-d+"ms",t=2*Math.PI*l/a;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(d,l,a)=>{const n=l/a,t=d*n-d+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,l)=>({r:6,style:{left:9-9*l+"px","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,l,a)=>({y1:14,y2:26,style:{transform:`rotate(${360/a*l+(l<a/2?180:-180)}deg)`,"animation-delay":d*l/a-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,l,a)=>({y1:12,y2:20,style:{transform:`rotate(${360/a*l+(l<a/2?180:-180)}deg)`,"animation-delay":d*l/a-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,l,a)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":d*l/a-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,l,a)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":d*l/a-d+"ms"}})}}},5732:(M,w,h)=>{h.r(w),h.d(w,{createSwipeBackGesture:()=>a});var f=h(206),m=h(5062),d=h(1363);h(2733);const a=(n,t,e,o,s)=>{const c=n.ownerDocument.defaultView,r=(0,m.i)(n),g=i=>r?-i.deltaX:i.deltaX;return(0,d.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i=>(i=>{const{startX:D}=i;return r?D>=c.innerWidth-50:D<=50})(i)&&t(),onStart:e,onMove:i=>{const D=g(i)/c.innerWidth;o(D)},onEnd:i=>{const E=g(i),D=c.innerWidth,C=E/D,x=(i=>r?-i.velocityX:i.velocityX)(i),k=x>=0&&(x>.2||E>D/2),L=(k?1-C:C)*D;let b=0;if(L>5){const O=L/Math.abs(x);b=Math.min(O,540)}s(k,C<=0?.01:(0,f.k)(0,C,.9999),b)}})}},7300:(M,w,h)=>{h.d(w,{c:()=>d,g:()=>a,h:()=>m,o:()=>t});var f=h(5861);const m=(e,o)=>null!==o.closest(e),d=(e,o)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},o):o,a=e=>{const o={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(e).forEach(s=>o[s]=!0),o},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,f.Z)(function*(o,s,c,r){if(null!=o&&"#"!==o[0]&&!n.test(o)){const u=document.querySelector("ion-router");if(u)return null!=s&&s.preventDefault(),u.push(o,c,r)}return!1});return function(s,c,r,u){return e.apply(this,arguments)}}()}}]);