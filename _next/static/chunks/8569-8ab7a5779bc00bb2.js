(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8569],{53063:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var r=n(85893),i=n(67294);let o=(0,i.forwardRef)((e,t)=>{let{color:n="currentColor",title:o,...a}=e,l=(0,i.useMemo)(()=>o?"title-"+Math.random().toString(36).substr(2,9):void 0,[o]);return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!o,ref:t,"aria-labelledby":l,...a,children:[o?(0,r.jsx)("title",{id:l,children:o}):null,(0,r.jsxs)("g",{fill:n,children:[(0,r.jsx)("path",{d:"M8 7a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 7zM8 4a1 1 0 000 2h.007a1 1 0 000-2H8z"}),(0,r.jsx)("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z",clipRule:"evenodd"})]})]})})},543:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(85893),i=n(94184),o=n.n(i),a=n(28093),l=n(67294),s=function(e){let t=l.Children.count(e),n=l.Children.toArray(e);if(1!==t||1!==n.length)throw Error("In ImageConfig, found ".concat(t," total children and ").concat(n.length," valid children. Please ensure that ImageConfig has exactly one child element, and ensure it is a valid image element."));let r=n[0];if(!(0,l.isValidElement)(r))throw Error("In ImageConfig, found child that does not seem to be a valid React element. Please ensure that ImageConfig contains a valid image element.");let i=r.props.mdxType||r.type;if("img"===i)return r;if("p"===i)return function(e){let t=l.Children.toArray(e.props.children);t.length>1&&console.warn("Warning: <ImageConfig /> was passed multiple children. We'll filter these children to find the image element being configured. All other children will be ignored. Please ensure that ImageConfig contains only a single image element.");let n=t.filter(e=>!!(0,l.isValidElement)(e)&&"img"==(e.props.mdxType||e.type));if(0==n.length||!(0,l.isValidElement)(n[0]))throw Error("In ImageConfig, could not find a valid image element. Please ensure that ImageConfig contains a valid image element. Child element details: ".concat(JSON.stringify(e,null,2)));return n[0]}(r);throw Error('In ImageConfig, found child with unexpected type: "'.concat(i,'". Please ensure that ImageConfig contains a single <img /> element. Child element details: ').concat(JSON.stringify(r,null,2)))},c=n(44225),u=n(82629),d=n.n(u),h=n(52539),g=n(15427),f=n.n(g);let m={a:h.nu,blockquote:h.N2,h1:h.NM,h2:h.e2,h3:h.Uw,h4:h.RC,h5:h.xh,h6:h.Je,inlineCode:h.yf,li:h.l2,ol:h.P8,p:h.im,pre:h.cb,table:h.pf,ul:h.u$,CodeBlockConfig:h.No,CodeTabs:h.kw,Highlight:h.FZ,ImageConfig:function(e){let{children:t,caption:n,hideBorder:i=!1,width:o,height:a,inline:l}=e,u=s(t),{src:h,alt:g,title:f}=u.props;if("string"!=typeof h||""==h)throw Error("Images in MDX must have an source defined. Use the format ![some alt text](path/to/img.jpg). Image details: ".concat(JSON.stringify({src:h,alt:g,title:f})," "));return n?(0,r.jsxs)("figure",{className:d().figure,children:[(0,r.jsx)(c.Z,{src:h,alt:g,title:f,noMargin:!0,noBorder:i,width:o,height:a,inline:l}),(0,r.jsx)("figcaption",{className:d().caption,children:n})]}):(0,r.jsx)(c.Z,{src:h,alt:g,title:f,noBorder:i,width:o,height:a,inline:l})},Note:h.z9,Tab:h.mn,Tabs:h.Nk,Tip:h.au,TryHcpCallout:h.BO,Warning:h.am},p=e=>{let t,{className:n,children:i,mdxRemoteProps:l}=e,s=Boolean(i);return t=s?i:(0,r.jsx)(a.R,{...l,components:{...m,...null==l?void 0:l.components}}),(0,r.jsx)("div",{className:o()(f().root,n),children:t})};var _=p},9701:function(e,t,n){"use strict";var r=n(85893),i=n(26991),o=n(88713);t.Z=function(e){let{productSlug:t,className:n,size:a="extra-large"}=e;return(0,r.jsx)(i.Z,{size:a,brandColor:"hcp"==t?"neutral-dark":t,className:n,children:(0,r.jsx)(o.Z,{productSlug:t})})}},44225:function(e,t,n){"use strict";var r=n(85893),i=n(25675),o=n.n(i),a=n(94184),l=n.n(a),s=n(61296),c=n.n(s);t.Z=function(e){let{src:t,alt:n,title:i,noMargin:a,noBorder:s,height:u,width:d,inline:h=!1}=e;"string"!=typeof n&&console.warn('Warning: Found MDX image with undefined alternate text. Even if an image is decorative, it\'s important for alt to be set to an empty string. Please define alt text the syntax "![Some alt text.](/some-image.jpg)". Image details: '.concat(JSON.stringify({src:t,alt:n,title:i})));let g=function(e,t){let n={};return e&&(n.width="".concat(e,"px")),t&&(n.height="".concat(t,"px")),n}(d,u),f=d&&u?{width:d,height:u}:null;f||(f=function(e){if(!e.startsWith("https://content.hashicorp.com"))return null;let t=new URL(e).searchParams,n=t.get("width"),r=t.get("height");return n&&r?{width:parseInt(n),height:parseInt(r)}:null}(t));let m=function(e){let t;let n=new URL(e,"https://developer.hashicorp.com"),r=RegExp(/#(dark|light)-theme-only/);if(r.test(n.hash)){let i=n.hash.match(r);t=i[1]}else n.hash&&console.warn("[Image]: A hash (#) was detected in src url but it does not match the theme pattern: #{dark|light}-theme-only");return t}(t);return(0,r.jsx)("span",{className:l()(c().root,{[c().noMargin]:a,[c().noBorder]:s,[c().inline]:h}),"data-show-on-theme":m||null,children:f?(0,r.jsx)(o(),{src:t,alt:n,title:i,width:f.width,height:f.height,style:g}):(0,r.jsx)("img",{src:t,alt:n,title:i,style:g})})}},23129:function(e,t,n){"use strict";n.d(t,{Vt:function(){return h},BC:function(){return a},ZA:function(){return g},Nc:function(){return j}});var r=n(85893),i=n(27237),o=n.n(i);function a(e){let{title:t,url:n,isActive:i,items:a,dataHeapTrack:l}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{title:t,url:n,isActive:i,dataHeapTrack:l}),(0,r.jsx)("ol",{className:o().nested,"aria-label":t,children:(0,r.jsx)(g,{items:a})})]})}var l=n(94184),s=n.n(l),c=n(93265),u=n(26808),d=n.n(u);function h(e){let{title:t,url:n,isActive:i,dataHeapTrack:o}=e;return(0,r.jsx)(c.Z,{className:s()(d().root,{[d().isActive]:i}),href:n,"data-heap-track":o,children:t})}function g(e){let{items:t}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e,t)=>(0,r.jsx)("li",{children:"items"in e?(0,r.jsx)(a,{...e}):(0,r.jsx)(h,{...e})},"".concat(t,"-").concat(e.url)))})}var f=n(67294),m=n(35765),p=n(83952),_=n(95568),x=n.n(_),v=function(e){let{items:t}=e,n=(0,p.Me)();return(0,r.jsxs)("nav",{"aria-labelledby":n,children:[(0,r.jsx)("p",{id:n,className:x().navLabel,children:"On this page:"}),(0,r.jsx)("ol",{className:x().listRoot,children:(0,r.jsx)(g,{items:t})})]})},w=n(86552);function j(e){let{items:t}=e,n=(0,f.useRef)(),i=(0,m.Y)(n),o=(0,f.useMemo)(()=>(function e(t){let n=[];for(let r of t){let i=(function(e){let t=new URL(e,"https://www.example.com");return t.hash})(r.url).replace("#","");""!==i&&n.push(i),"items"in r&&n.push(...e(r.items))}return n})(t),[t]),a=o.length>1,l=(0,w.L)(o,i&&a),s=(0,f.useMemo)(()=>(function e(t,n){return t.map(t=>{let r=t.url===n;if(!("items"in t))return{...t,isActive:r};{let i=e(t.items,n);return{...t,items:i,isActive:r}}})})(t,"#".concat(l)),[t,l]);return a?(0,r.jsx)("div",{ref:n,children:(0,r.jsx)(v,{items:s})}):null}},92480:function(e,t,n){"use strict";var r=n(85893),i=n(94184),o=n.n(i),a=n(33356),l=n(95045),s=n.n(l);let c=e=>{let t,{className:n,type:i="neutral",description:l,icon:c,title:u}=e,d=o()(s().root,s()[i],n);return u&&(t=(0,r.jsx)(a.Z,{asElement:"p",className:s().title,size:200,weight:"semibold",children:u})),(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)("div",{className:s().icon,children:c}),(0,r.jsxs)("div",{className:s().contentContainer,children:[t,(0,r.jsx)(a.Z,{asElement:"p",className:s().description,size:200,weight:"regular",children:l})]})]})};t.Z=c},38283:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893),i=n(53063),o=n(83628),a=n(92480),l=n(6152),s=n.n(l);function c(e){let{currentVersion:t,releaseStage:n,latestVersionUrl:l}=e,c="You are viewing documentation for version";return void 0!==n&&"stable"!==n&&(c="You are viewing documentation for pre-release version"),(0,r.jsx)(a.Z,{className:s().root,description:(0,r.jsxs)(r.Fragment,{children:[c," ",t,"."," ",(0,r.jsx)(o.Z,{className:s().versionAlertLink,href:l,textSize:200,textWeight:"medium",children:"View latest version"}),"."]}),icon:(0,r.jsx)(i.k,{}),type:"highlight"})}},86552:function(e,t,n){"use strict";n.d(t,{L:function(){return l}});var r=n(67294),i=n(38116),o=n(63248),a=n(99179);function l(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=(0,r.useRef)(new Set),[l,s]=(0,r.useState)(),c=(0,r.useRef)(),u=(0,o.Z)({excludeHash:!0,excludeSearch:!0}),d=(0,i.j2)(),h=d&&u==="/".concat(d.slug);return(0,r.useEffect)(()=>{if(n.current=new Set,!t)return;let r=t=>e.find(e=>e===t||"user-content-".concat(e)===t),i=t=>{let n=r(t);return e.findIndex(e=>e===n)},o=new IntersectionObserver(t=>{let o,a;t.forEach(e=>{o=window.scrollY,a=c.current<o?"down":"up";let t=e.target.id;e.isIntersecting?n.current.add(t):n.current.delete(t)});let l=1===t.length&&!t[0].isIntersecting,u=l?i(t[0].target.id):-1;if(n.current.size>0){let d,h;n.current.forEach(e=>{let t=document.getElementById(e),n=t.getBoundingClientRect().bottom;(!h||n<d)&&(h=e,d=n)});let g=r(h);s(g)}else c.current&&"up"===a&&s(t=>{let n=i(t);if(l&&u>n)return t;let r=n-1;return r<0?t:e[r]});o&&(c.current=o)},{rootMargin:"-".concat((0,a.Z)(),"px 0% -40% 0%"),threshold:h?0:1});return e.forEach(e=>{let t=document.getElementById(e)||document.getElementById("user-content-".concat(e));t&&o.observe(t)}),()=>{o.disconnect()}},[e,t,h]),l}},15427:function(e){e.exports={root:"dev-dot-content_root__PM7Rc hds-typography-body-300"}},82629:function(e){e.exports={figure:"image-config_figure__P_Yj3",caption:"image-config_caption__WJZcJ hds-typography-body-200"}},61296:function(e){e.exports={root:"image_root__MMhvi",noMargin:"image_noMargin__5Ktmo",noBorder:"image_noBorder__ztYXH",inline:"image_inline__iubZ8"}},27237:function(e){e.exports={nested:"outline-link-with-nesting_nested__YBjNk"}},26808:function(e){e.exports={root:"outline-link_root__K1_Dc hds-typography-body-200 g-focus-ring-from-box-shadow",isActive:"outline-link_isActive__i0NQL"}},95568:function(e){e.exports={navLabel:"outline-nav_navLabel__jk_MG hds-typography-body-100",listRoot:"outline-nav_listRoot__cbYFw"}},95045:function(e){e.exports={root:"page-alert_root__xP2Vw",icon:"page-alert_icon__RPKvK",contentContainer:"page-alert_contentContainer__iClXE",title:"page-alert_title__YWqUw",description:"page-alert_description__Xnjjm",neutral:"page-alert_neutral__H_l3n",highlight:"page-alert_highlight__ApLx9",success:"page-alert_success__9ZIpj",warning:"page-alert_warning__o_ueG",critical:"page-alert_critical__exbgt"}},6152:function(e){e.exports={root:"version-alert-banner_root__y8GC3",versionAlertLink:"version-alert-banner_versionAlertLink__TQt6H"}},35765:function(e,t,n){"use strict";n.d(t,{Y:function(){return l}});var r=n(67294),i=n(7032),o=n(56463);let a={any:0,all:1};function l(e,{root:t,margin:n,amount:l,once:s=!1}={}){let[c,u]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||s&&c)return;let r=()=>(u(!0),s?void 0:()=>u(!1)),d={root:t&&t.current||void 0,margin:n,amount:"some"===l?"any":l};return function(e,t,{root:n,margin:r,amount:l="any"}={}){if("undefined"==typeof IntersectionObserver)return()=>{};let s=(0,i.I)(e),c=new WeakMap,u=e=>{e.forEach(e=>{let n=c.get(e.target);if(e.isIntersecting!==Boolean(n)){if(e.isIntersecting){let r=t(e);(0,o.m)(r)?c.set(e.target,r):d.unobserve(e.target)}else n&&(n(e),c.delete(e.target))}})},d=new IntersectionObserver(u,{root:n,rootMargin:r,threshold:"number"==typeof l?l:a[l]});return s.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,r,d)},[t,e,n,s]),c}}}]);