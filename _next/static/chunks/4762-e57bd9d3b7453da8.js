(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4762],{7289:function(e,t,n){"use strict";n.d(t,{v:function(){return S},Z:function(){return z}});var i=n(85893),a=n(67294),s=n(93967),r=n.n(s),l=n(23302),o=n(89019),c=n(11163),h=n(46601),d=n(9301),u=n(72249),m=n(48305),_=n(27552),g=n(75917),b=n(85688),x=n(32150),v=n(21508),f=n(59441),p=n(2150),j=n(60348),N=n(9851),I=n(63114),w=n.n(I);let y=(e,t)=>{let n,{icon:a,label:s,href:r,onClick:l}=e;if(!r&&!l)return null;let o=(0,v.Z)(r),c=(0,i.jsx)(j.Z,{asElement:"span",size:200,weight:"medium",children:s});return r?n=(0,i.jsxs)(p.Z,{href:r,className:w().link,opensInNewTab:o,rel:o?"noreferrer noopener":void 0,children:[c,a]}):l&&(n=(0,i.jsxs)("button",{className:w().button,onClick:l,children:[c,a]})),(0,i.jsx)("li",{children:n},t)};var C=e=>{let{items:t,user:n,initialOpen:a}=e,{icon:s,label:r,description:l}=(0,h.U)(n),{pathname:o}=(0,c.useRouter)();return(0,i.jsxs)(f.ZP,{containerClassName:w().root,initialOpen:a,children:[(0,i.jsxs)(f.e8,{className:w().activator,children:[(0,i.jsxs)("span",{className:w().iconAndTextWrapper,children:[(0,i.jsx)("span",{className:w().icon,children:s}),(0,i.jsx)(j.Z,{asElement:"span",className:w().text,size:300,weight:"medium",children:l})]}),(0,i.jsx)("span",{className:w().chevron,children:(0,i.jsx)(x.g,{})})]}),(0,i.jsxs)(f.k_,{className:w().content,children:[(0,i.jsx)(j.Z,{asElement:"span",className:w().label,size:100,weight:"semibold",children:r}),(0,i.jsxs)("ul",{className:w().list,children:[t.map(y),(0,d.Z)(o)?(0,i.jsx)(N.Z,{}):null]})]})]})},Z=n(18197),k=n.n(Z);let M={visible:{left:0,display:"flex"},hidden:{left:"-150vw",transitionEnd:{display:"none"}}},S=()=>{let e;let{asPath:t}=(0,c.useRouter)(),{isAuthenticated:n,isLoading:a,signIn:s,signOut:l,user:o}=(0,m.Z)(),u=!a&&!n,{pathname:x}=(0,c.useRouter)(),v=(0,d.Z)(x);return n||u?(u?e=(0,i.jsxs)("div",{className:k().unauthenticatedControls,children:[(0,i.jsxs)("div",{className:k().unauthenticatedControlButtons,children:[(0,i.jsx)(_.Z,{onClick:()=>s(),size:"medium",text:"Sign In"}),(0,i.jsx)(g.Z,{color:"secondary",href:"/sign-up",size:"medium",text:"Sign Up"})]}),v?(0,i.jsx)("div",{className:k().themeSwitcher,children:(0,i.jsx)(b.g,{})}):null]}):n&&(e=(0,i.jsx)(C,{items:(0,h.H)({signOut:l}),user:o,initialOpen:t.startsWith("/profile")})),(0,i.jsx)("div",{className:r()("g-show-with-mobile-menu",k().mobileAuthenticationControlsWrap),children:e})):null};var z=(0,a.forwardRef)((e,t)=>{let{children:n,className:a}=e,{mobileMenuIsOpen:s}=(0,u.Sn)(),c=(0,l.J)();return(0,i.jsx)(o.m.div,{animate:s?"visible":"hidden",className:r()(k().root,a),ref:t,transition:{duration:c?0:.6},variants:M,children:n})})},9682:function(e,t,n){"use strict";n.d(t,{ny:function(){return r},TM:function(){return b},sd:function(){return l.sd},Rd:function(){return l.ZP},yq:function(){return j},Y:function(){return p},HS:function(){return f}});var i=n(85893),a=n(23591),s=n.n(a),r=()=>(0,i.jsx)("hr",{className:s().root}),l=n(54063),o=n(2150),c=n(93967),h=n.n(c),d=n(68172),u=n(9911),m=n(60348),_=n(89189),g=n.n(_);function b(e){let{theme:t,text:n,href:a,isActive:s}=e,r=(0,d.lF)(t)?(0,i.jsx)(u.Z,{className:g().icon,productSlug:t}):null,l=(0,i.jsx)("span",{className:g().text,children:n});return(null==a?void 0:a.length)?(0,i.jsxs)(o.Z,{"aria-current":s?"page":void 0,className:h()(g().root,g()["theme-".concat(t)]),href:a,children:[r,l]}):(0,i.jsxs)(m.Z,{asElement:"p","aria-current":s?"page":void 0,className:h()(g().root,g()["theme-".concat(t)]),children:[r,l]})}var x=n(94586),v=n.n(x);let f=e=>{let{id:t,text:n}=e;return(0,i.jsx)("h2",{className:v().root,id:t,children:n})},p=e=>{let{text:t}=e;return(0,i.jsx)("h3",{className:v().root,children:t})},j=e=>{let{text:t,theme:n}=e;return(0,i.jsxs)("h3",{className:h()(v().brandedRoot,v()["theme-".concat(n)]),children:[(0,d.lF)(n)?(0,i.jsx)(u.Z,{className:v().icon,productSlug:n}):null,(0,i.jsx)("span",{className:v().text,children:t})]})}},54063:function(e,t,n){"use strict";n.d(t,{sd:function(){return p},wK:function(){return j}});var i=n(85893),a=n(67294),s=n(47036),r=n(88833),l=n(28222),o=n(81943),c=n(21508),h=n(16231),d=n(2150),u=n(9911),m=n(9682),_=n(60348),g=n(88813),b=n.n(g);let x={home:(0,i.jsx)(s._,{name:"home"}),guide:(0,i.jsx)(o.z,{})},v=e=>{let{badge:t,icon:n}=e;return t||n?(0,i.jsxs)("div",{className:b().rightIconsContainer,children:[t,n]}):null},f=e=>{let{color:t,text:n,type:a}=e;if("highlight"!==t&&"neutral"!==t)throw Error('[SidebarNavMenuItemBadge] Only the "highlight" and "neutral" colors are supported for Badges, but was given '.concat(t,"."));return(0,i.jsx)(h.Z,{color:t,size:"small",text:n,type:a})},p=e=>{let t,{item:n}=e,s=n.fullPath||n.href,r=(0,c.Z)(s),o=!!n.badge;if(n.leadingIconName){let e=x[n.leadingIconName]||(0,i.jsx)(u.Z,{productSlug:n.leadingIconName});t=(0,i.jsx)("div",{className:b().leadingIcon,children:e})}let h=r?(0,i.jsx)(l.g,{}):n.trailingIcon,m=!r&&n.isActive?"page":void 0,[g,p]=(0,a.useState)(!1);(0,a.useEffect)(()=>{p(!0)},[]);let j=r?"".concat(n.title,". Opens in a new tab."):void 0,N=b().sidebarNavMenuItem,I=(0,i.jsxs)(i.Fragment,{children:[t,(0,i.jsx)(_.Z,{asElement:"span",className:b().navMenuItemLabel,dangerouslySetInnerHTML:{__html:n.title},size:200,weight:"regular"}),(0,i.jsx)(v,{badge:o?(0,i.jsx)(f,{...n.badge}):void 0,icon:h})]});return s?(0,i.jsx)(d.Z,{"aria-current":m,"aria-label":j,className:N,href:s,opensInNewTab:r,rel:r?"noreferrer noopener":void 0,children:I},String(g)):(0,i.jsx)("a",{"aria-disabled":!0,"aria-label":n.ariaLabel,className:N,tabIndex:0,children:I})};function j(e){let{item:t}=e;return(0,i.jsxs)("button",{className:b().sidebarNavMenuItem,onClick:t.onClick,children:[(0,i.jsx)(_.Z,{size:200,weight:"regular",asElement:"span",className:b().navMenuItemLabel,children:t.title}),(0,i.jsx)(v,{icon:t.icon})]})}let N=e=>{let{item:t}=e,n=(0,a.useRef)(),[s,l]=(0,a.useState)(t.isOpen||t.hasActiveChild||t.hasChildrenMatchingFilter||t.matchesFilter),o=!!t.badge;(0,a.useEffect)(()=>{l(t.isOpen||t.hasActiveChild||t.hasChildrenMatchingFilter||t.matchesFilter)},[t.isOpen,t.hasActiveChild,t.hasChildrenMatchingFilter,t.matchesFilter]);let c="".concat(t.id,"-button"),h="".concat(t.id,"-list");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("button",{"aria-controls":s?h:null,"aria-expanded":s,className:b().sidebarNavMenuItem,id:c,onClick:()=>l(e=>!e),ref:n,children:[(0,i.jsx)(_.Z,{asElement:"span",className:b().navMenuItemLabel,dangerouslySetInnerHTML:{__html:t.title},size:200,weight:"regular"}),(0,i.jsx)(v,{badge:o?(0,i.jsx)(f,{...t.badge}):void 0,icon:(0,i.jsx)(r.b,{})})]}),s&&(0,i.jsx)("ul",{id:h,onKeyDown:e=>{"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),l(!1),n.current.focus())},children:t.routes.map((e,t)=>{let n="".concat(e.id||e.fullPath||e.title,"-").concat(t);return(0,i.jsx)(I,{item:e},n)})})]})},I=e=>{let t,{item:n}=e;if(n.divider)t=(0,i.jsx)(m.ny,{});else if(n.routes)t=(0,i.jsx)(N,{item:n});else if(n.theme){var a;t=(0,i.jsx)(m.TM,{theme:n.theme,text:null!==(a=n.title)&&void 0!==a?a:n.heading,href:n.fullPath,isActive:n.isActive})}else t=n.heading?(0,i.jsx)(m.Y,{text:n.heading}):(0,i.jsx)(p,{item:n});return(0,i.jsx)("li",{id:n.id,children:t})};t.ZP=I},33878:function(e,t,n){"use strict";n.d(t,{A:function(){return a}});var i=n(68172);let a=()=>{let e=[];return Object.keys(i.tC).forEach(t=>{if("sentinel"===t)return;let n=i.tC[t];e.push({leadingIconName:t,title:n,href:"/".concat(t)})}),[{leadingIconName:"home",title:"HashiCorp Developer",href:"/"},{leadingIconName:"guide",title:"Tutorials",href:"/tutorials"},{divider:!0},{heading:"Products"},...e]}},63114:function(e){e.exports={root:"mobile-user-disclosure_root__yiKLu hds-surface-base",activator:"mobile-user-disclosure_activator__W50W3 g-focus-ring-from-box-shadow",chevron:"mobile-user-disclosure_chevron__epnHn",iconAndTextWrapper:"mobile-user-disclosure_iconAndTextWrapper__O2MzZ",icon:"mobile-user-disclosure_icon__S_ZfM",text:"mobile-user-disclosure_text__G3kk_",content:"mobile-user-disclosure_content__r1M5L",label:"mobile-user-disclosure_label__tq27z",list:"mobile-user-disclosure_list__lh4ku",button:"mobile-user-disclosure_button__pP21z g-focus-ring-from-box-shadow",link:"mobile-user-disclosure_link__1kYHE g-focus-ring-from-box-shadow"}},18197:function(e){e.exports={root:"mobile-menu-container_root__fPUFu",mobileAuthenticationControlsWrap:"mobile-menu-container_mobileAuthenticationControlsWrap__8lAp2",unauthenticatedControls:"mobile-menu-container_unauthenticatedControls__CJQpx",unauthenticatedControlButtons:"mobile-menu-container_unauthenticatedControlButtons__jLKuK",themeSwitcher:"mobile-menu-container_themeSwitcher__xqlMF hds-font-weight-medium"}},94586:function(e){e.exports={root:"sidebar-headings_root__tGfxC",brandedRoot:"sidebar-headings_brandedRoot__4hayr",text:"sidebar-headings_text__I99L9 hds-typography-body-200",icon:"sidebar-headings_icon__mtvUP","theme-terraform":"sidebar-headings_theme-terraform__LMdXN","theme-packer":"sidebar-headings_theme-packer__n41_E","theme-consul":"sidebar-headings_theme-consul___I_j6","theme-vault":"sidebar-headings_theme-vault__F9Ze_","theme-boundary":"sidebar-headings_theme-boundary__qXz2N","theme-nomad":"sidebar-headings_theme-nomad__h7uU_","theme-waypoint":"sidebar-headings_theme-waypoint__coZyL","theme-vagrant":"sidebar-headings_theme-vagrant__K1G6v"}},23591:function(e){e.exports={root:"sidebar-horizontal-rule_root__UY7oh"}},89189:function(e){e.exports={root:"sidebar-nav-highlight-item_root___pPhp g-focus-ring-from-box-shadow",text:"sidebar-nav-highlight-item_text__VORFJ hds-typography-body-200",icon:"sidebar-nav-highlight-item_icon__G8JxG","theme-terraform":"sidebar-nav-highlight-item_theme-terraform__LHqSi","theme-packer":"sidebar-nav-highlight-item_theme-packer__I5KHY","theme-consul":"sidebar-nav-highlight-item_theme-consul__NA90N","theme-vault":"sidebar-nav-highlight-item_theme-vault__GzzUx","theme-boundary":"sidebar-nav-highlight-item_theme-boundary___dLY2","theme-nomad":"sidebar-nav-highlight-item_theme-nomad__FvXsA","theme-waypoint":"sidebar-nav-highlight-item_theme-waypoint__BUsDn","theme-vagrant":"sidebar-nav-highlight-item_theme-vagrant___khWy"}},88813:function(e){e.exports={sidebarNavMenuItem:"sidebar-nav-menu-item_sidebarNavMenuItem__PiyI8 g-focus-ring-from-box-shadow",navMenuItemLabel:"sidebar-nav-menu-item_navMenuItemLabel__tJHwX",leadingIcon:"sidebar-nav-menu-item_leadingIcon__Pa_ev",rightIconsContainer:"sidebar-nav-menu-item_rightIconsContainer__hynke"}}}]);