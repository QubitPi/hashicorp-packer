(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1597],{18911:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[productSlug]/tutorials/[...tutorialSlug]",function(){return n(48279)}])},13394:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/interactive-callout-visual.1f527299.svg",height:100,width:133,blurWidth:0,blurHeight:0}},44504:function(e,t,n){"use strict";var r=n(85893);n(67294);var i=n(93967),o=n.n(i),a=n(91121),s=n(12712),l=n(62522),c=n(2150),u=n(60348),d=n(83147),p=n.n(d);let h={next:a.k,previous:s.n,final:l.H};t.Z=function(e){let{id:t,href:n,label:i,name:a,ariaLabel:s,direction:l}=e,d=h[l];return(0,r.jsxs)(c.Z,{id:t,className:o()(p().linkbox,p()["direction-".concat(l)]),href:n,"aria-label":s,children:[(0,r.jsxs)("span",{className:p().directionLabel,children:[" ",(0,r.jsx)(d,{className:o()(p().icon,p()["direction-".concat(l)])}),(0,r.jsx)(u.Z,{className:p().labelText,asElement:"span",size:200,weight:"medium",children:i})]}),(0,r.jsx)(u.Z,{className:p().name,children:a})]},t)}},31354:function(e,t,n){"use strict";n.d(t,{Vt:function(){return p},BC:function(){return a},ZA:function(){return h},Nc:function(){return j}});var r=n(85893),i=n(71499),o=n.n(i);function a(e){let{title:t,url:n,isActive:i,items:a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{title:t,url:n,isActive:i}),(0,r.jsx)("ol",{className:o().nested,"aria-label":t,children:(0,r.jsx)(h,{items:a})})]})}var s=n(93967),l=n.n(s),c=n(2150),u=n(41997),d=n.n(u);function p(e){let{title:t,url:n,isActive:i}=e;return(0,r.jsx)(c.Z,{className:l()(d().root,{[d().isActive]:i}),href:n,children:t})}function h(e){let{items:t}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e,t)=>(0,r.jsx)("li",{children:"items"in e?(0,r.jsx)(a,{...e}):(0,r.jsx)(p,{...e})},"".concat(t,"-").concat(e.url)))})}var m=n(67294),f=n(20041),x=n(83952),_=n(70609),v=n.n(_),g=function(e){let{items:t}=e,n=(0,x.Me)();return(0,r.jsxs)("nav",{"aria-labelledby":n,children:[(0,r.jsx)("p",{id:n,className:v().navLabel,children:"On this page:"}),(0,r.jsx)("ol",{className:v().listRoot,children:(0,r.jsx)(h,{items:t})})]})},b=n(80147);function j(e){let{items:t}=e,n=(0,m.useRef)(),i=(0,f.Y)(n),o=(0,m.useMemo)(()=>(function e(t){let n=[];for(let r of t){let t=new URL(r.url,"https://www.example.com").hash.replace("#","");""!==t&&n.push(t),"items"in r&&n.push(...e(r.items))}return n})(t),[t]),a=o.length>1,s=(0,b.L)(o,i&&a),l=(0,m.useMemo)(()=>(function e(t,n){return t.map(t=>{let r=t.url===n;if(!("items"in t))return{...t,isActive:r};{let i=e(t.items,n);return{...t,items:i,isActive:r}}})})(t,"#".concat(s)),[t,s]);return a?(0,r.jsx)("div",{ref:n,children:(0,r.jsx)(g,{items:l})}):(0,r.jsx)("div",{ref:n})}},77630:function(e,t,n){"use strict";n.d(t,{EZ:function(){return p},Y$:function(){return m},ZP:function(){return f}});var r=n(85893),i=n(45962),o=n(10177),a=n(63919),s=n(16231),l=n(9911),c=n(17590),u=n.n(c);let d={[a.ZN.openSource]:"Open Source",[a.ZN.enterprise]:"Enterprise",[a.ZN.hcp]:"HCP",[a.ZN.tfcFree]:"HCP Terraform",[a.ZN.tfcStandard]:"Standard",[a.ZN.tfcPlus]:"Plus"};function p(e){return e.some(e=>{let{isBeta:t}=e;return t})}function h(e){return(0,r.jsx)(s.Z,{...e,type:"base",className:u().badge,size:"small"})}let m=e=>{let{edition:t,hasVideo:n,isBeta:a,isInteractive:s,products:c}=e,u=[];return a&&u.push((0,r.jsx)(h,{color:"highlight",text:"Beta"})),"open_source"!==t&&u.push((0,r.jsx)(h,{text:d[t]})),Array.isArray(c)&&c.length>0&&c.forEach(e=>{u.push((0,r.jsx)(h,{icon:(0,r.jsx)(l.Z,{productSlug:e.slug}),text:e.name},e.slug))}),n&&u.push((0,r.jsx)(h,{icon:(0,r.jsx)(i.C,{}),text:"Video"})),s&&u.push((0,r.jsx)(h,{icon:(0,r.jsx)(o.j,{}),text:"Interactive"})),u};function f(e){let t=Math.floor(e/60),n=e%60;return t&&n>0?"".concat(t,"hr ").concat(n,"min"):t?"".concat(t,"hr"):"".concat(e,"min")}},57777:function(e,t,n){"use strict";n.d(t,{Zp:function(){return v},Xn:function(){return b},Xk:function(){return f},ZP:function(){return N}});var r=n(85893),i=n(67294),o=n(11163),a=n(9682),s=n(43821),l=n(30233),c=n(64749),u=n(14597),d=n(57001),p=n.n(d);function h(e){let{collection:t}=e,{id:n,slug:o,tutorials:a}=t,{data:s}=(0,l.N2)({collectionId:n}),{completedTutorialCount:u,tutorialCount:d,isInProgress:h}=(0,i.useMemo)(()=>(0,c.s)(s,a.length,{id:n,slug:o}),[s,a,n,o]);return(0,r.jsx)("div",{className:p().collectionProgressContainer,children:(0,r.jsx)(c.Nq,{completedTutorialCount:u,tutorialCount:d,isInProgress:h})})}function m(e){let{href:t,isActive:n,text:i,tutorialId:o,collectionId:s}=e,{tutorialProgressStatus:c}=(0,l.Xm)({tutorialId:o,collectionId:s}),d=(0,r.jsx)(u.Z,{status:c,isActive:n});return(0,r.jsx)(a.Rd,{item:{isActive:n,title:i,href:t,trailingIcon:d}})}var f=function(e){let{collection:t,items:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{collection:t}),(0,r.jsx)(b,{children:n.map(e=>(0,r.jsx)(m,{text:e.text,href:e.href,isActive:e.isActive,tutorialId:e.tutorialId,collectionId:e.collectionId},"".concat(e.collectionId).concat(e.tutorialId)))})]})},x=n(20248),_=n.n(x);function v(e){let{sections:t,productSlug:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{productSlug:n}),null==t?void 0:t.map(e=>{let{title:t,items:n}=e;return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(w,{}),t?(0,r.jsx)(y,{text:t}):null,(0,r.jsx)(b,{children:n.map(e=>{let{text:t,href:n,isActive:i,badge:o}=e;return(0,r.jsx)(j,{text:t,href:n,isActive:i,badge:o},"".concat(t).concat(n))})})]},t)})]})}function g(e){let{productSlug:t}=e,n=(0,o.useRouter)(),i="/".concat(t,"/tutorials");return(0,r.jsx)(a.TM,{text:"Tutorials",href:i,theme:t,isActive:n.asPath===i})}function b(e){let{children:t}=e;return(0,r.jsx)("ul",{className:_().listRoot,children:t})}function j(e){let{href:t,isActive:n,text:i,badge:o}=e;return(0,r.jsx)(a.Rd,{item:{isActive:n,title:i,href:t,badge:o}})}function y(e){let{text:t}=e;return(0,r.jsx)(a.Y,{text:t})}function w(){return(0,r.jsx)(a.ny,{})}var N=function(e){let{backToLinkProps:t,children:n,levelButtonProps:i,overviewItemHref:o,title:a,visuallyHideTitle:l}=e;return(0,r.jsx)(s.Z,{backToLinkProps:t,levelButtonProps:i,overviewItemHref:o,showFilterInput:!1,title:a,visuallyHideTitle:l,children:n})}},90651:function(e,t,n){"use strict";n.d(t,{Jr:function(){return i},vD:function(){return a}});var r=n(38938);function i(e){let{id:t,slug:n,name:i,short_name:a,description:s,icon:l,theme:c,ordered:u,level:d,category:p,tutorials:h,next_collection:m}=e;return{id:t,slug:n,name:i,shortName:a,description:s,icon:l,theme:c,ordered:u,level:d,category:p||void 0,tutorials:h.map(o),nextCollection:m?(0,r.je)(m):void 0}}function o(e){var t;let{id:n,name:i,short_name:o,slug:s,description:l,read_time:c,edition:u,products_used:d,default_collection:p}=e.tutorial,h=d.map(a),m=(0,r.Oz)(e.tutorial),f=(0,r.Lf)(e.tutorial),x=(null===(t=e.tutorial.variants)||void 0===t?void 0:t.length)>0?(0,r.yf)(e.tutorial.variants[0]):void 0;return{id:n,name:i,shortName:o||i,slug:s,description:l,readTime:c,edition:u,productsUsed:h,video:m,handsOnLab:f,defaultContext:(0,r.je)(p),variant:x}}function a(e){let{product:t,tutorial_id:n,is_primary:r,is_beta:i,min_version:o,max_version:a}=e,{id:s,slug:l,name:c,docs_url:u,description:d}=t;return{product:{id:s,slug:l,name:c,docsUrl:u,description:d},tutorial:n,isPrimary:r,isBeta:i,minVersion:o||void 0,maxVersion:a||void 0}}},57302:function(e,t,n){"use strict";n.d(t,{Lg:function(){return u},Jz:function(){return d}}),n(1864);var r=n(65398),i=n(63919),o=n(87158);let a=e=>"/products/".concat(e,"/collections");async function s(e){let t=a(e.slug),n=t;if(e.sidebarSort){let r=new URLSearchParams([["topLevelCategorySort","true"],["theme",e.slug]]);n=t+"?".concat(r.toString())}let r=await (0,o.U2)(n);if(r.ok)return(await r.json()).result;throw(0,o.KC)(r)}var l=n(90651);let c="/collections";async function u(e){let t=[];if((null==e?void 0:e.product)&&(0,i.ig)(e.product.slug))t=[...await s(e.product)];else{var n;let i=null==e?void 0:null===(n=e.limit)||void 0===n?void 0:n.toString();t=[...await (0,r.Qd)({baseUrl:c,recurse:!i,limit:i})]}return t.map(l.Jr)}async function d(e){let t=await (0,o.U2)(c+"?section=".concat(e));if(t.ok){let n=await t.json();return 0===n.result.length&&console.warn("No collections found for section query: ".concat(e)),n.result.map(l.Jr)}throw(0,o.KC)(t)}},38938:function(e,t,n){"use strict";n.d(t,{Lf:function(){return s},Oz:function(){return a},je:function(){return o},ri:function(){return i},yf:function(){return l}});var r=n(90651);function i(e){let{id:t,slug:n,name:i,short_name:c,description:u,content:d,default_collection_id:p,featured_collections:h,read_time:m,edition:f,products_used:x,variants:_}=e,v=x.map(r.vD),g=a(e),b=s(e);return{id:t,slug:n,name:i,shortName:c||i,description:u,content:d,collectionCtx:function(e,t){let n;let i=e.find(e=>{let{id:n}=e;return n===t});return n="tutorials"in e[0]?e.map(r.Jr):e.map(o),{default:o(i),featuredIn:n}}(h,p),productsUsed:v,readTime:m,video:g,handsOnLab:b,edition:f,variant:(null==_?void 0:_.length)>0?l(_[0]):void 0}}function o(e){let{id:t,name:n,slug:r,short_name:i,level:o,theme:a}=e;return{id:t,name:n,slug:r,shortName:i,level:o,theme:a}}function a(e){let t,{video_id:n,video_host:r,video_inline:i}=e;return n&&(t={id:n,videoHost:r,videoInline:i}),t}function s(e){let t,{hands_on_lab_id:n,hands_on_lab_provider:r}=e;return n&&(t={id:n,provider:r}),t}function l(e){let{options:t,...n}=e;return{...n,options:t.map(e=>{let{display_order:t,...n}=e;return{displayOrder:t,...n}})}}},65398:function(e,t,n){"use strict";n.d(t,{Qd:function(){return a}});var r=n(1864),i=n.n(r),o=n(87158);async function a(e){let{baseUrl:t,recurse:n=!0,limit:r="100",fullContent:i=!1,after:o,fetchedTutorials:l}=e;void 0===l&&(l=[]);let c=await s(t,r,o,i);if(c.ok){let e=await c.json(),o=[...l,...e.result];return!n||e.result.length<Number("100")?o:a({baseUrl:t,recurse:!0,limit:r,after:e.result[e.result.length-1].id,fetchedTutorials:o,fullContent:i})}}async function s(e,t,n,r){let a=new URLSearchParams({limit:t});n&&a.append("after",n),r&&a.append("full","1");let s="?".concat(a.toString()),l=i().join(e,s),c=await (0,o.U2)(l);if(c.ok)return c;throw await (0,o.KC)(c)}},48279:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return tf},default:function(){return tx}});var r,i,o=n(85893),a=n(67294),s=n(9008),l=n.n(s),c=n(98986),u=n(30233),d=n(23934),p=n(72249),h=n(93967),m=n.n(h),f=n(80141),x=n.n(f);function _(){let e=(0,a.useRef)();(0,a.useEffect)(()=>{e.current&&e.current.focus()},[]);let{active:t,labId:n}=C();return(0,o.jsx)("iframe",{ref:e,title:"Instruqt",width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",src:"https://play.instruqt.com/embed/".concat(n),style:{height:"inherit",minHeight:"640px"},className:m()(x().baseEmbedElement,{[x().hide]:!t})})}var v=n(99600),g=n(86570),b=n(87078),j=n.n(b);function y(e){let{onMouseDown:t,onMouseUp:n,onClosePanel:r,style:i={}}=e;return(0,o.jsxs)("div",{className:j().resizeWrapper,style:i,children:[(0,o.jsx)("div",{className:j().resizer,onMouseDown:t,onMouseUp:n,children:(0,o.jsx)(g.Z,{className:j().resizeBar,src:'<svg xmlns="http://www.w3.org/2000/svg" width="120" height="14" fill="none"><rect width="120" height="4" fill="var(--token-color-palette-neutral-300), #c2c5cb" rx="2"/><rect width="120" height="4" y="10" fill="var(--token-color-palette-neutral-300), #c2c5cb" rx="2"/></svg>'})}),(0,o.jsx)("button",{className:j().closeIcon,onClick:r,children:(0,o.jsx)(v.v,{})})]})}var w=n(47065),N=n.n(w);function k(e){let{panelActive:t,setPanelActive:n,children:r,style:i,initialHeight:s=400}=e,[l,c]=(0,a.useState)(0),[u,d]=(0,a.useState)(0),[p,h]=(0,a.useState)(s),[f,x]=(0,a.useState)(s),[_,v]=(0,a.useState)(!1),g=(0,a.useRef)();function b(e){x(p),d(e.screenY)}function j(){v(!1),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",j)}return(0,a.useEffect)(()=>{if(g.current){let e=f-(u-l);910>e&&e>300&&h(e)}},[u,l,f]),(0,o.jsxs)("div",{className:m()(N().resizable,{[N().resizing]:_},{[N().hide]:!t}),ref:g,style:{height:"".concat(p,"px")},"data-resizing":String(_),children:[(0,o.jsx)(y,{onClosePanel:()=>n(!t),onMouseDown:function(e){e.preventDefault(),c(e.screenY),v(!0),window.addEventListener("mousemove",b),window.addEventListener("mouseup",j)},style:i}),r]})}let S=(0,a.createContext)({});S.displayName="InstruqtContext";let C=()=>(0,a.useContext)(S);function I(e){let{labId:t,children:n}=e,[r,i]=(0,a.useState)(!1);return(0,o.jsxs)(S.Provider,{value:{labId:t,active:r,setActive:i},children:[n,r&&(0,o.jsx)("div",{id:"instruqt-panel-target",children:(0,o.jsx)(k,{initialHeight:640,panelActive:r,setPanelActive:i,style:{top:"-28px"},children:(0,o.jsx)(_,{})})})]})}var P=n(52291),Z=n(81082),T=n(67373),E=n(12726),L=n.n(E),z=n(57302),A=n(32729);n(16658);let R=L()(z.Lg,{isPromise:!0,maxSize:1/0,isDeepEqual:!0});async function W(e,t){let n;if("hcp"==e){let e=await (0,z.Jz)("cloud");n=(0,Z.Fi)(e,t.slug)}else{let r=(await R({product:{slug:e,sidebarSort:!0}})).filter(t=>t.theme===e&&!t.slug.includes("onboarding"));n=(0,Z.Jd)(r,t.slug)}return n}var V=n(18602),B=n(31354),F=n(35625),q=n(57777),H=n(48305),O=n(89168),D=n(17267),G=n(60348),M=n(69193),U=n(77630),J=n(17590),Q=n.n(J);function X(e){let{options:t}=e,{readTime:n,products:r,edition:i,isBeta:a,hasVideo:s,isInteractive:l}=t,c=(0,U.Y$)({edition:i,hasVideo:s,isBeta:a,isInteractive:l,products:r});return(0,o.jsxs)("ul",{className:Q().list,children:[(0,o.jsx)("li",{className:Q().listItem,children:(0,U.ZP)(n)}),c.length>0?(0,o.jsx)("li",{className:m()(Q().listItem,Q().seperator),children:"|"}):null,c.map((e,t)=>(0,o.jsx)("li",{className:Q().listItem,children:e},t))]})}var Y=n(98585),K=n(23691),$=n.n(K),ee=n(77587);function et(e){let{className:t,collections:n}=e;return 0===n.length?null:(0,o.jsxs)("div",{className:t,children:[(0,o.jsx)("h2",{className:$().heading,children:"This tutorial also appears in:"}),(0,o.jsx)("div",{className:$().cards,children:(0,o.jsx)(ee.Z,{fixedColumns:1==n.length?2:null,children:n.map(e=>(0,o.jsx)(Y.FG,{...e},e.id))})})]})}var en=n(44504),er=n(62263),ei=n.n(er);function eo(e){let{tutorial:t,collection:n,finalLink:r}=e;return(0,o.jsxs)("div",{className:ei().linkBoxWrapper,children:[t.previous?(0,o.jsx)(en.Z,{label:"Previous",name:t.previous.name,href:t.previous.path,direction:"previous",ariaLabel:"Go to previous tutorial: ".concat(t.previous.name)}):(0,o.jsx)(en.Z,{href:n.current.path,label:"Collection Overview",name:n.current.name,direction:"previous",ariaLabel:"Go back to collection overview: ".concat(n.current.name)}),t.next&&!t.isLast?(0,o.jsx)(en.Z,{label:"Next",name:t.next.name,href:t.next.path,direction:"next",ariaLabel:"Go to next tutorial: ".concat(t.next.name)}):n.isLast?(0,o.jsx)(en.Z,{href:r,label:"Next",name:"Explore tutorial library",direction:"final",ariaLabel:"Browse Tutorials"}):(0,o.jsx)(en.Z,{href:n.next.path,label:"Next Collection",name:n.next.name,direction:"next",ariaLabel:"Go to next collection: ".concat(n.next.name)})]})}var ea=n(68159),es=n(3032),el=n(14670),ec=n.n(el);(r=i||(i={}))[r.inProgress=0]="inProgress",r[r.finished=1]="finished";var eu=n(75942),ed=n(27552),ep=n(14336),eh=n.n(ep);let em=e=>{let t,{question:n,animate:r}=e,{id:i,type:s,label:l,labelSecondary:c,labelIcon:u}=n,[d,p]=(0,a.useState)(""),h=(0,a.useContext)(ex);if(h.activeQuestion!==i)return null;switch(s){case"choice":{let{answers:e}=n;t=(0,o.jsx)("div",{className:eh().buttonWrapper,children:e.map(e=>{let{icon:t,display:n,value:r,nextQuestion:a}=e;return(0,o.jsx)(ed.Z,{type:a?"button":"submit","data-testid":a?null:"submit-button",disabled:h.isTransitioning,"aria-label":n,text:n,color:"secondary",onClick:e=>h.submitQuestion(e,{id:i,value:r,nextQuestion:a}),icon:t},n)})});break}case"text":{let{optional:e,buttonText:r,nextQuestion:a,placeholder:s="Your feedback..."}=n,l=!e&&(""===d||h.isTransitioning),c=d.length;t=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:eh().textAreaContainer,children:[(0,o.jsx)("textarea",{id:i,value:d,onChange:e=>p(e.currentTarget.value),className:m()(eh().textArea,c?eh().visited:null),placeholder:s}),e&&!c?(0,o.jsx)("span",{className:eh().optionalText,children:"(optional)"}):null]}),(0,o.jsx)(ed.Z,{className:eh().submitButton,type:a?"button":"submit","data-testid":a?null:"submit-button","aria-label":r,text:r,disabled:l,onClick:e=>h.submitQuestion(e,{id:i,value:d})})]})}}return(0,o.jsxs)("div",{className:m()(eh().question,eh()[s],r&&eh().animate),children:[(0,o.jsxs)("label",{htmlFor:i,className:eh().labelWrapper,children:[u&&(0,o.jsx)("div",{className:eh().labelIcon,children:u}),(0,o.jsxs)("span",{className:eh().label,children:[(0,o.jsx)("strong",{children:l}),c?" ".concat(c):""]})]}),t]})},ef=e=>new Promise(t=>setTimeout(t,e)),ex=(0,a.createContext)({});function e_(e){let{questions:t,finishedText:n,onQuestionSubmit:r=()=>void 0}=e,[s,l]=(0,a.useState)(i.inProgress),[c,u]=(0,a.useState)(!1),[d,p]=(0,a.useState)([]),[h,m]=(0,a.useState)(t[0].id),f=(0,a.useRef)(),x=()=>(f.current||(f.current=ec().generate()),f.current),_=(0,a.useMemo)(()=>({isTransitioning:c,activeQuestion:h,submitQuestion(e,t){e.preventDefault();let n=[...d,{id:t.id,value:t.value}];p(n),u(!0),Promise.race([r(n,x()),ef(200)]).finally(()=>{u(!1),t.nextQuestion?m(t.nextQuestion):l(i.finished)})}}),[h,d]);return(0,o.jsxs)(ex.Provider,{value:_,children:[(0,o.jsx)("form",{id:"feedback-panel",children:s===i.inProgress?t.map((e,t)=>(0,o.jsx)(em,{question:e,animate:0!==t},e.id)):null}),s===i.finished?(0,o.jsx)(eu.q,{text:n}):null]})}ex.displayName="FeedbackFormContext";var ev=n(81661),eg=n.n(ev);async function eb(e,t){let n={responses:e.reduce((e,t)=>{let{id:n,value:r}=t;return Object.assign(e,{[n]:r})},{}),sessionId:t,timestamp:new Date};try{let e={...n,page:document.location.pathname},t=async()=>{await fetch("/api/tutorial-feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};await t()}catch(e){console.warn(e)}}let ej=[{id:"helpful",type:"choice",label:"Was this tutorial helpful?",answers:[{icon:(0,o.jsx)(es.k,{color:"var(--token-color-foreground-faint)"}),value:"yes",display:"Yes",nextQuestion:"reasonForVisit"},{icon:(0,o.jsx)(ea.Z,{color:"var(--token-color-foreground-faint)"}),value:"no",display:"No",nextQuestion:"suggestedImprovements"}]},{id:"reasonForVisit",type:"text",labelIcon:(0,o.jsx)(es.k,{color:"var(--token-color-foreground-faint)"}),label:"We want to hear from you.",labelSecondary:"Why did you visit this tutorial?",buttonText:"Submit",optional:!0},{id:"suggestedImprovements",type:"text",labelIcon:(0,o.jsx)(ea.Z,{color:"var(--token-color-foreground-faint)"}),label:"We want to hear from you.",labelSecondary:"How could this tutorial be more helpful?",buttonText:"Submit",optional:!0}];function ey(){return(0,o.jsx)("div",{className:eg().root,children:(0,o.jsx)(e_,{questions:ej,onQuestionSubmit:eb,finishedText:(0,o.jsx)(o.Fragment,{children:"Thank you! Your feedback will help us improve our websites."})})})}var ew=n(83952),eN=n(11163),ek=n(52406),eS=n(72898),eC=n(36808),eI=n.n(eC);function eP(e,t){let n=new URL(e,"https://developer.hashicorp.com");return t&&n.searchParams.get("variants")!==t?(n.searchParams.set("variants",t),n.pathname.toString()+n.search.toString()):e}function eZ(e,t){return"".concat(e,":").concat(t)}function eT(e,t){return e.displayOrder-t.displayOrder}function eE(e,t){let n="variants",r={};try{let e=eI().get(n);e&&(r=JSON.parse(e))}catch(e){console.error("[handleVariantCookie]: Error parsing variants cookie ",e)}r[e]&&r[e]===t||(r[e]=t,eI().set(n,JSON.stringify(r)))}var eL=n(51493),ez=n.n(eL);function eA(e){let{variant:t,isFullWidth:n}=e,r=(0,ew.Me)(),{asPath:i}=(0,eN.useRouter)();return(0,o.jsxs)("div",{className:ez().root,children:[(0,o.jsx)(G.Z,{weight:"semibold",size:100,className:ez().label,id:r,children:t.name}),(0,o.jsx)(eS.ZP,{"aria-describedby":r,color:"secondary",text:t.activeOption.name,isFullWidth:n,children:t.options.sort(eT).map(e=>e.slug===t.activeOption.slug?null:(0,o.jsx)(eS.zQ,{href:eP(i,eZ(t.slug,e.slug)),onClick:()=>{eE(t.slug,e.slug),(0,ek.iH)("Variant Selected",{variant:t.slug,option:e.slug,path:i})},children:e.name},e.slug))})]})}function eR(){return(0,a.useContext)(eW)}let eW=(0,a.createContext)({currentVariant:null});function eV(e){let{children:t,variant:n}=e,[r,i]=(0,a.useState)(n),s=(0,a.useMemo)(()=>({currentVariant:r,setCurrentVariant:i}),[r]);return(0,a.useEffect)(()=>{n&&n.activeOption.id!==(null==r?void 0:r.activeOption.id)&&i(n)},[n,r]),(0,o.jsx)(eW.Provider,{value:s,children:t})}eW.displayName="VariantContext";var eB=n(2150),eF=n(20395),eq=n.n(eF);function eH(e){let{variant:t}=e,n="variant-list-label",{asPath:r}=(0,eN.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",{id:n,className:eq().label,children:t.name}),(0,o.jsx)("nav",{children:(0,o.jsx)("ul",{"aria-labelledby":n,className:eq().list,children:t.options.sort(eT).map(e=>{let n=eZ(t.slug,e.slug),i=t.activeOption.slug===e.slug;return(0,o.jsx)("li",{children:(0,o.jsx)(eB.Z,{className:m()(eq().link),href:eP(r,n),"aria-current":i?"page":void 0,onClick:()=>{eE(t.slug,e.slug),(0,ek.iH)("Variant Selected",{variant:t.slug,option:e.slug,path:r})},children:e.name})},e.slug)})})})]})}var eO=n(3911),eD=n.n(eO);function eG(){let{currentVariant:e}=eR();return e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:eD().desktopVariantList,children:(0,o.jsx)(eH,{variant:e})}),(0,o.jsx)("div",{className:eD().mobileVariantDropdownDisclosure,children:(0,o.jsx)(eA,{isFullWidth:!0,variant:e})})]}):null}var eM=n(10177);function eU(){let e=C();if(!e.labId)return null;let t="".concat(e.active?"Hide":"Show"," Terminal");return(0,o.jsx)(ed.Z,{text:t,onClick:()=>e.setActive(!e.active),icon:(0,o.jsx)(eM.j,{}),color:"secondary",size:"small"})}var eJ=n(88079),eQ=n.n(eJ);function eX(e){let{heading:t,meta:n,tutorialId:r}=e,{isInteractive:i,hasVideo:a,edition:s,productsUsed:l,readTime:c}=n,{isAuthenticated:u,isLoading:d}=(0,H.Z)();return(0,o.jsxs)("header",{className:eQ().header,children:[(0,o.jsx)(O.Z,{level:1,size:600,weight:"bold",id:t.slug,className:eQ().heading,children:t.text}),(0,o.jsxs)("div",{className:eQ().meta,children:[(0,o.jsx)(X,{options:{readTime:c,isBeta:(0,U.EZ)(l),products:l.map(e=>({name:e.product.name,slug:e.product.slug})),edition:s,hasVideo:a,isInteractive:i}}),(0,o.jsxs)("span",{className:eQ().buttonGroup,children:[(0,o.jsx)(eU,{}),(0,o.jsx)(M.Xt,{tutorial:{id:r,name:t.text}})]})]}),d||u?null:(0,o.jsxs)(G.Z,{className:eQ().createAccountCta,size:100,children:["Reference this often?"," ",(0,o.jsx)(D.Z,{href:"/sign-up",textSize:100,children:"Create an account"})," ","to bookmark tutorials."]}),(0,o.jsx)(eG,{})]})}var eY=n(56310),eK=n(58750),e$=n.n(eK);let e0="64px";function e1(e){let{imageUrl:t}=e,n={display:"flex",alignItems:"center",justifyContent:"center"},r={preview:{position:"absolute",top:"0",width:"100%",height:"100%",...t&&{backgroundImage:"url(".concat(t,")")},backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...n},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:e0,width:e0,height:e0,position:void 0,...n},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},i=(0,o.jsx)("div",{style:r.shadow,className:"react-player__shadow",children:(0,o.jsx)("div",{style:r.playIcon,className:"react-player__play-icon"})});return(0,o.jsx)("div",{style:r.preview,className:"react-player__preview",children:i})}function e2(e){var t;let{className:n,percentPlayedCallback:r=()=>null,percentPlayedMilestones:i,start:s,url:l,...c}=e,[u,{setEnded:d,setDuration:p,setPosition:h,setPlaying:f,setStopped:x}]=function(){let[e,t]=(0,a.useState)({position:0,isPlaying:!1});return[e,{setEnded:function(){t(e=>({...e,position:e.duration,isPlaying:!1}))},setDuration:function(e){t(t=>({...t,duration:e}))},setPosition:function(e){t(t=>({...t,position:e}))},setPlaying:function(){t(e=>({...e,isPlaying:!0}))},setStopped:function(){t(e=>({...e,isPlaying:!1}))}}]}(),_=(t=function(e,t,n){let[r,i]=(0,a.useState)([]),o=(0,a.useCallback)(e=>{i(t=>(function(e,t,n,r){let i=Math.round(100*e)/100,o=Math.max(0,i-2.1);if(0==t.length)return[{start:o,end:i}];let a=!1,s=t.map(e=>(a||(i>=e.start&&i<=e.end?a=!0:e.end<i&&e.end+2.1>=i&&(e.end=i,a=!0)),e));return a||s.push({start:o,end:i}),s.sort((e,t)=>e[0]-t[0]).reduce((e,t)=>{if(0==e.length)return e.push(t),e;let n=e[e.length-1];if(t.start<=n.end){let r={start:n.start,end:Math.max(n.end,t.end)};e[e.length-1]=r}else e.push(t);return e},[])})(e,t,0,0))},[2,1e3]);(0,a.useEffect)(()=>{let t=e.isPlaying,n=e.position==e.duration;(t||n)&&o(e.position)},[e,o]);let s=r.reduce((e,t)=>e+(t.end-t.start),0);return{list:r,percent:e.duration?Math.round(s/e.duration*1e3)/10:0}}(u,0,0).percent,(0,a.useMemo)(()=>i.reduce((e,n)=>t>=n?n:e,null),[t,i]));(0,a.useEffect)(()=>{null!==_&&r(_)},[_,r]);let[v,g]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{v||g(!0)},[v]),(0,o.jsx)("div",{className:m()(e$().playerWrapper,n),children:v?(0,o.jsx)(eY.Z,{...c,config:s?{youtube:{playerVars:{start:s}},wistia:{options:{time:s}}}:{},url:l,onDuration:p,progressInterval:1e3,onProgress:e=>{let{playedSeconds:t}=e;h(t)},onEnded:d,onPlay:f,onPause:x,className:e$().reactPlayer,width:"100%",height:"100%",controls:!0}):(0,o.jsx)(e1,{imageUrl:c.light})})}let e3=[1,25,50,75,90];var e9=function(e){let{url:t,...n}=e;if("string"!=typeof t)throw Error('VideoEmbed URL must be a string. Found type "'.concat(typeof t,'". While other formats for this prop may be supported by react-player, they are not supported by our VideoEmbed component. Please ensure the "url" prop is a string.'));return(0,o.jsx)(e2,{...n,url:t,percentPlayedMilestones:e3,percentPlayedCallback:e=>{!function(e){let{video_url:t,video_progress:n}=e;(0,ek.iH)("Video Played",{video_url:t,video_progress:n})}({video_url:t,video_progress:e})}})},e7=n(53676),e5=n(49423),e8=n(29163),e6=n(89755),e4=n.n(e6),te=n(46509),tt=n(22273),tn=n.n(tt);let tr={Accordion:e5.EZ,InteractiveLabCallout:function(){let e=C();return e.labId?(0,o.jsxs)(te.Z,{className:tn().interactiveCallout,elevation:"base",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:tn().title,children:"Launch Terminal"}),(0,o.jsx)("p",{className:tn().description,children:"This tutorial includes a free interactive command-line lab that lets you follow along on actual cloud infrastructure."}),(0,o.jsx)("div",{className:tn().ctaButton,children:(0,o.jsx)(ed.Z,{color:"secondary",text:"Start interactive lab",onClick:()=>e.setActive(!0),size:"small"})})]}),(0,o.jsx)("div",{className:tn().image,children:(0,o.jsx)(e4(),{src:n(13394),width:133,height:100,alt:"",layout:"responsive"})})]}):null},img:e8.Z,Variant:function(e){let{slug:t,option:n,children:r}=e,{currentVariant:i}=eR();if(!i)return null;let o=i.slug===t&&i.activeOption.slug===n;if(!i.options.find(e=>e.slug===n))throw Error("[mdx-variant]: Option not valid for variant: '".concat(t,"'. Please pass one of the available options — ").concat(i.options.map(e=>e.slug).join(", ")));return o?r:null},VideoEmbed:e9};var ti=n(63919);let to={[ti.Bw.youtube]:"https://www.youtube.com/watch?v=",[ti.Bw.wistia]:"https://hashicorp.wistia.com/medias/"};var ta=n(64092),ts=n(25153),tl=n(20247),tc=n(92150),tu=n(16354),td=n.n(tu),tp=n(70553),th=n.n(tp);let tm=e=>{let{children:t,collectionCtx:n,product:r,setCollectionViewSidebarSections:i}=e,{mobileMenuIsOpen:s}=(0,p.Sn)(),l=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{!1===l.current&&s&&W(r.slug,n.current).then(e=>{l.current=!0,i(e)})},[n,s,r,i]),(0,o.jsx)(o.Fragment,{children:t})};var tf=!0,tx=function(e){var t;let{layoutProps:n,product:r,tutorial:i,outlineItems:s,pageHeading:p,metadata:h}=e,m=(0,d.Z)({excludeHash:!0,excludeSearch:!0}),[f,x]=(0,a.useState)(null),{id:_,slug:v,content:g,readTime:b,productsUsed:j,edition:y,handsOnLab:w,video:N,collectionCtx:k}=i,S=null===(t=k.featuredIn)||void 0===t?void 0:t.filter(e=>e.id!==k.current.id),C=!!N,E=!!w,L=E?I:a.Fragment,z=function(e){let t,n,r,{currentTutorialSlug:i,currentCollection:o,nextCollectionInSidebar:a,formatting:s}=e,l=o.tutorials.findIndex(e=>e.slug===i),c=l===o.tutorials.length-1;if(0!==l){let{slug:e,shortName:n}=o.tutorials[l-1];t={path:s.getTutorialSlug(e,o.slug),name:n}}if(!c){let{slug:e,shortName:t}=o.tutorials[l+1];n={path:s.getTutorialSlug(e,o.slug),name:t}}a&&(r={path:s.getCollectionSlug(a.slug),name:a.shortName});let u=function(e){let t="/tutorials/library",n=new URLSearchParams;return"hashicorp"===e?t:("cloud"===e?n.set("edition","hcp"):n.set("product",e),"".concat(t,"?").concat(n.toString()))}(o.theme);return"well-architected-framework"===o.slug.split("/")[0]&&(u="/well-architected-framework"),{tutorial:{previous:t,next:n,isLast:c},collection:{current:{path:s.getCollectionSlug(o.slug),name:o.shortName},next:r,isLast:c&&!r},finalLink:u}}({currentCollection:k.current,currentTutorialSlug:v,nextCollectionInSidebar:i.nextCollectionInSidebar,formatting:{getTutorialSlug:Z.Jc,getCollectionSlug:Z.I_}}),R=i.collectionCtx.default.slug,W=(0,A.M4)(R,v),H=[(0,F.Vz)(r.name),(0,F._G)(r),(0,T.E)(r,n.sidebarSections),{levelButtonProps:{levelUpButtonText:k.current.shortName},backToLinkProps:{text:k.current.shortName,href:(0,Z.I_)(k.current.slug)},visuallyHideTitle:!0,children:(0,o.jsx)(q.Xk,{collection:k.current,items:k.current.tutorials.map(e=>(0,A.Bz)(e,k.current,m))})}],O=k.current.id,D=k.current.tutorials.map(e=>e.id);(0,c._)({tutorials:D.map(e=>({tutorialId:e,collectionId:O})),collections:[O]});let G="".concat(_,"_").concat(k.current.id),M=(0,u.Q0)({tutorialId:_,collectionId:O});return!function(e){let{tutorialId:t,collectionId:n,collectionTutorialIds:r}=e,{tutorialProgressStatus:i}=(0,u.Xm)({tutorialId:t,collectionId:n}),s=function(e){let t=(0,a.useRef)();return(0,a.useEffect)(()=>{t.current=e},[e]),t.current}(i),{data:l}=(0,u.N2)({collectionId:n});(0,a.useEffect)(()=>{var e;if(void 0===s||void 0===l||!("complete"!==s&&"complete"===i))return;let n=r.filter(e=>e!==t),a=l.filter(e=>"100"==e.complete_percent).map(e=>e.tutorial_id);e=n.filter(e=>!a.includes(e)).length,(0,tc.Am)({...0==e?{title:"Collection complete!",description:"Great job, keep up the momentum!",icon:(0,o.jsx)(tl.t,{className:td().collectionCompleteIcon}),color:ta.P.success}:{title:"Tutorial complete!",description:"You have ".concat(e," tutorial").concat(1==e?"":"s"," left in this collection."),icon:(0,o.jsx)(ts.C,{className:td().tutorialCompleteIcon})},autoDismiss:5e3})},[l,s,r,t,i])}({tutorialId:_,collectionId:O,collectionTutorialIds:D}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l(),{children:[(0,o.jsx)("link",{rel:"canonical",href:W.toString()},"canonical"),W.pathname!==m?(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"},"robots"):null]}),(0,o.jsx)(L,{...E&&{labId:w.id},children:(0,o.jsx)(eV,{variant:h.variant,children:(0,o.jsx)(P.Z,{breadcrumbLinks:n.breadcrumbLinks,sidebarNavDataLevels:H,showScrollProgress:!0,AlternateSidebar:q.ZP,sidecarTopSlot:h.variant?(0,o.jsx)(eA,{variant:h.variant,isFullWidth:!0}):null,sidecarSlot:(0,o.jsx)(B.Nc,{items:s}),mainWidth:n.mainWidth,children:(0,o.jsxs)(tm,{collectionCtx:k,product:r,setCollectionViewSidebarSections:x,children:[(0,o.jsx)(eX,{heading:p,meta:{readTime:b,edition:y,productsUsed:j,isInteractive:E,hasVideo:C},tutorialId:_}),(0,o.jsx)("span",{"data-ref-id":G,ref:M.startRef}),C&&N.id&&!N.videoInline&&(0,o.jsx)(e9,{url:function(e){let{videoHost:t,videoId:n}=e;return"".concat(to[t]).concat(n)}({videoId:N.id,videoHost:N.videoHost})}),(0,o.jsx)(V.Z,{mdxRemoteProps:{...g,components:tr}}),(0,o.jsx)("span",{"data-ref-id":G,ref:M.endRef}),(0,o.jsx)(ey,{}),(0,o.jsx)(eo,{...z}),(0,o.jsx)(et,{className:th().featuredInCollections,collections:S}),n.isCertificationPrep&&(0,o.jsx)(e7.yv,{className:th().newsletterSignupArea})]})})})},v)]})}},67373:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(85893),i=n(57777);function o(e,t){return{levelButtonProps:{levelUpButtonText:"".concat(e.name," Home"),levelDownButtonText:"Previous"},backToLinkProps:{text:"".concat(e.name," Home"),href:"/".concat(e.slug)},title:"Tutorials",visuallyHideTitle:!0,children:(0,r.jsx)(i.Zp,{productSlug:e.slug,sections:t})}}},83147:function(e){e.exports={linkbox:"directional-link-box_linkbox__JkyCe","direction-previous":"directional-link-box_direction-previous__GRBSm","direction-next":"directional-link-box_direction-next__hJws_","direction-final":"directional-link-box_direction-final__TitRh",icon:"directional-link-box_icon__O9thX",directionLabel:"directional-link-box_directionLabel__IVbM7",labelText:"directional-link-box_labelText__LT7Iq",name:"directional-link-box_name__HiDHR --token-typography-body-200"}},14336:function(e){e.exports={buttonWrapper:"question_buttonWrapper__54iZw",submitButton:"question_submitButton__S9SW7",question:"question_question__LTMCk",choice:"question_choice__12_p_",text:"question_text__FXrjB",textAreaContainer:"question_textAreaContainer__kcZ__",optionalText:"question_optionalText__XdWAm hds-typography-body-100",textArea:"question_textArea__1W_8u hds-typography-body-200",visited:"question_visited__kuvJN",labelWrapper:"question_labelWrapper__nIKDI",labelIcon:"question_labelIcon__cEUBo",label:"question_label___dtyM",animate:"question_animate__wwAwh",nextFrame:"question_nextFrame__rlWPX"}},22273:function(e){e.exports={interactiveCallout:"interactive-lab-callout_interactiveCallout__VxFv8",title:"interactive-lab-callout_title__qRwWP hds-typography-body-200",description:"interactive-lab-callout_description__z49tH hds-typography-body-100",ctaButton:"interactive-lab-callout_ctaButton__e85vm",image:"interactive-lab-callout_image__5E8W0"}},80141:function(e){e.exports={baseEmbedElement:"embed-element_baseEmbedElement__TtXCG",hide:"embed-element_hide__v8_tl"}},87078:function(e){e.exports={resizeWrapper:"resizer_resizeWrapper__uHZnH",resizer:"resizer_resizer__LU1Oz",resizeBar:"resizer_resizeBar__zK5I_",closeIcon:"resizer_closeIcon__JKSGI"}},47065:function(e){e.exports={resizable:"resizable_resizable__ha6BC",hide:"resizable_hide__m_1mB",resizing:"resizable_resizing__8pZE_"}},71499:function(e){e.exports={nested:"outline-link-with-nesting_nested__A2Dq2"}},41997:function(e){e.exports={root:"outline-link_root__S7fQg hds-typography-body-200 g-focus-ring-from-box-shadow",isActive:"outline-link_isActive__VNGIh"}},70609:function(e){e.exports={navLabel:"outline-nav_navLabel__HrjQb hds-typography-body-100",listRoot:"outline-nav_listRoot__Sm1fr"}},17590:function(e){e.exports={list:"badges_list__SRNdD",listItem:"badges_listItem__U5Grt hds-font-weight-medium hds-typography-display-100",seperator:"badges_seperator__83Ve8",badge:"badges_badge__md5Sb"}},20395:function(e){e.exports={label:"desktop-variant-list_label__C7Y5U hds-typography-body-200 hds-font-weight-semibold",list:"desktop-variant-list_list__cY7FA",link:"desktop-variant-list_link__xnBXr hds-typography-body-100 hds-font-weight-medium g-focus-ring-from-box-shadow"}},3911:function(e){e.exports={desktopVariantList:"variant-list_desktopVariantList__WAm3_ g-hide-on-mobile",mobileVariantDropdownDisclosure:"variant-list_mobileVariantDropdownDisclosure__n4_9_ g-hide-on-tablet-up"}},88079:function(e){e.exports={header:"tutorial-meta_header__95LnY",heading:"tutorial-meta_heading__GwRAk g-offset-scroll-margin-top",meta:"tutorial-meta_meta__32nDc",createAccountCta:"tutorial-meta_createAccountCta__hYEZP",buttonGroup:"tutorial-meta_buttonGroup__WYzA4"}},57001:function(e){e.exports={collectionProgressContainer:"tutorial-view-sidebar-content_collectionProgressContainer__QgsA7"}},20248:function(e){e.exports={hr:"tutorials-sidebar_hr__dOQnd",listRoot:"tutorials-sidebar_listRoot__1yGVg"}},58750:function(e){e.exports={playerWrapper:"video-embed_playerWrapper__oEmV0",reactPlayer:"video-embed_reactPlayer__cZlJ_",playedTimes:"video-embed_playedTimes__OUGX5"}},23691:function(e){e.exports={heading:"featured-in-collections_heading__lxFWF hds-typography-display-200",cards:"featured-in-collections_cards__8Ojuh"}},81661:function(e){e.exports={root:"feedback-panel_root__2VVEJ"}},62263:function(e){e.exports={linkBoxWrapper:"next-previous_linkBoxWrapper__cDPPR"}},51493:function(e){e.exports={root:"variant-dropdown-disclosure_root__RoscI",label:"variant-dropdown-disclosure_label__thcjj"}},70553:function(e){e.exports={featuredInCollections:"tutorial-view_featuredInCollections__wm6Hf",newsletterSignupArea:"tutorial-view_newsletterSignupArea__aL2RW"}},16354:function(e){e.exports={progressToastIcon:"progress-toast_progressToastIcon__uo2Gb",collectionCompleteIcon:"progress-toast_collectionCompleteIcon__rMnGw progress-toast_progressToastIcon__uo2Gb",tutorialCompleteIcon:"progress-toast_tutorialCompleteIcon__OmSE3 progress-toast_progressToastIcon__uo2Gb"}}},function(e){e.O(0,[4819,3713,1965,1306,7059,9344,3652,4762,9325,7138,2291,1825,2460,697,8585,7077,2888,9774,179],function(){return e(e.s=18911)}),_N_E=e.O()}]);