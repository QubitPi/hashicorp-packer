(()=>{var e={};e.id=2327,e.ids=[2327,2888],e.modules={7212:e=>{e.exports={heroBackground:"landing-hero_heroBackground__mErGz",heroImage:"landing-hero_heroImage__Gl_05"}},90755:e=>{e.exports={splitSection:"certification-program-summary-card_splitSection__2b3Ed",heading:"certification-program-summary-card_heading__zQPpa hds-typography-display-500",description:"certification-program-summary-card_description__W6F2R hds-typography-body-300",buttonGroup:"certification-program-summary-card_buttonGroup__U2MG0",examCards:"certification-program-summary-card_examCards__chmcO"}},57514:e=>{e.exports={root:"exam-badge-and-title_root__w5_1W",text:"exam-badge-and-title_text__3tEB7",eyebrow:"exam-badge-and-title_eyebrow__8HhNc hds-typography-body-100",title:"exam-badge-and-title_title__S9d0B hds-typography-display-300"}},36594:e=>{e.exports={cardBase:"exam-card_cardBase__hiwdi",examCard:"exam-card_examCard__ZGCJy exam-card_cardBase__hiwdi",contents:"exam-card_contents__NaSyk",comingSoonCard:"exam-card_comingSoonCard__q7qOS exam-card_cardBase__hiwdi"}},3387:e=>{e.exports={root:"landing_root__wuU1t",programsSection:"landing_programsSection__1XUR9",faqSignupSection:"landing_faqSignupSection__XF67m",faqHeading:"landing_faqHeading__Hcst0 hds-typography-display-400",signupForm:"landing_signupForm__Z__gd"}},84566:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>l,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>h,routeModule:()=>j,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>_});var i=r(87093),a=r(35244),c=r(1323),o=r(11070),n=r(33893),u=r(4689),d=e([n,u]);[n,u]=d.then?(await d)():d;let l=(0,c.l)(u,"default"),p=(0,c.l)(u,"getStaticProps"),m=(0,c.l)(u,"getStaticPaths"),x=(0,c.l)(u,"getServerSideProps"),g=(0,c.l)(u,"config"),h=(0,c.l)(u,"reportWebVitals"),_=(0,c.l)(u,"unstable_getStaticProps"),y=(0,c.l)(u,"unstable_getStaticPaths"),f=(0,c.l)(u,"unstable_getStaticParams"),S=(0,c.l)(u,"unstable_getServerProps"),q=(0,c.l)(u,"unstable_getServerSideProps"),j=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/certifications",pathname:"/certifications",bundlePath:"",filename:""},components:{App:n.default,Document:o.default},userland:u});s()}catch(e){s(e)}})},85192:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(20997),i=r(25675),a=r.n(i);let c={src:"/_next/static/media/certification-hero-image.649d6952.svg",height:594,width:453,blurWidth:0,blurHeight:0};var o=r(7212),n=r.n(o),u=r(63205);let d=function({heading:e,description:t,isHvd:r=!1,className:i}){return s.jsx(u.V,{backgroundClassName:n().heroBackground,className:i,startSlot:s.jsx(u.l,{className:i,heading:e,description:t??"",foreground:"light"}),endSlot:r?null:s.jsx("div",{className:n().heroImage,children:s.jsx(a(),{alt:"",src:c,width:447,height:515})})})}},29062:(e,t,r)=>{"use strict";function s(e){return JSON.parse(JSON.stringify(e))}r.d(t,{c:()=>s})},4689:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>o,getStaticProps:()=>a.b});var i=r(86090),a=r(70321),c=e([i,a]);[i,a]=c.then?(await c)():c;let o=i.Z;s()}catch(e){s(e)}})},45004:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{D:()=>o});var i=r(9926),a=e([i]);let c=(i=(a.then?(await a)():a)[0]).z.enum(["infrastructure-automation","security-automation"]),o=i.z.object({hero:i.z.object({heading:i.z.string(),description:i.z.string()}),faqHeading:i.z.string(),programSummaryOrder:i.z.array(c)});s()}catch(e){s(e)}})},23563:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{r:()=>l});var i=r(20997),a=r(75917),c=r(22876),o=r(17046),n=r(90755),u=r.n(n),d=e([c,o]);function l({slug:e,heading:t,description:r,exams:s}){return(0,i.jsxs)(c.KN,{theme:e,children:[i.jsx(c.wu,{className:u().splitSection,startContent:i.jsx("h3",{className:u().heading,dangerouslySetInnerHTML:{__html:t}}),endContent:(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:u().description,children:r}),i.jsx(c.Sz,{className:u().buttonGroup,children:i.jsx(a.Z,{text:"Overview",href:`/certifications/${e}`})})]})}),i.jsx("div",{className:u().examCards,children:s.map(({title:e,prepareUrl:t,registerUrl:r,examCode:s,examTier:a,productSlug:c})=>{let n=e+(s?` (${s})`:"");return t?i.jsx(o.Sl,{title:n,url:t,examTier:a,productSlug:c,showComingSoon:"string"!=typeof r},n):i.jsx(o.YE,{title:n,examTier:a,productSlug:c},n)})})]})}[c,o]=d.then?(await d)():d,s()}catch(e){s(e)}})},41036:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{L:()=>u});var i=r(20997),a=r(22876),c=r(57514),o=r.n(c),n=e([a]);function u({title:e,eyebrow:t,productSlug:r,examTier:s}){return(0,i.jsxs)("div",{className:o().root,children:[i.jsx(a.hj,{productSlug:r,examTier:s}),(0,i.jsxs)("div",{className:o().text,children:[i.jsx("div",{className:o().eyebrow,children:t}),i.jsx("div",{className:o().title,children:e})]})]})}a=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})},50135:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{S:()=>h,Y:()=>g});var i=r(20997),a=r(22876),c=r(17046),o=r(47986),n=r(36594),u=r.n(n),d=r(46509),l=r(16231),p=e([a,c]);function m({children:e}){return i.jsx("div",{className:u().contents,children:e})}function x(){return i.jsx(l.Z,{text:"Coming Soon",color:"highlight",type:"outlined"})}function g({title:e,productSlug:t,examTier:r}){return i.jsx(d.Z,{className:u().comingSoonCard,children:(0,i.jsxs)(m,{children:[i.jsx(c.LG,{title:e,eyebrow:"HashiCorp Certified:",productSlug:t,examTier:r}),i.jsx(x,{})]})})}function h({title:e,productSlug:t,url:r,showComingSoon:s,examTier:n}){return i.jsx(o.Z,{className:u().examCard,href:r,ariaLabel:e,children:(0,i.jsxs)(m,{children:[i.jsx(c.LG,{title:e,eyebrow:"HashiCorp Certified:",productSlug:t,examTier:n}),(0,i.jsxs)(a.Sz,{children:[s?i.jsx(x,{}):null,i.jsx(a.Ct,{text:"Prepare for the exam"})]})]})})}[a,c]=p.then?(await p)():p,s()}catch(e){s(e)}})},17046:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{LG:()=>a.L,Sl:()=>c.S,YE:()=>c.Y,r4:()=>i.r});var i=r(23563),a=r(41036),c=r(50135),o=e([i,a,c]);[i,a,c]=o.then?(await o)():o,s()}catch(e){s(e)}})},86090:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>m});var i=r(20997),a=r(32884),c=r(30007),o=r(22876),n=r(17046),u=r(3387),d=r.n(u),l=r(85192),p=e([a,c,o,n]);[a,c,o,n]=p.then?(await p)():p;let m=function({pageContent:e,programSummaries:t,faqItems:r}){let{hero:s}=e;return i.jsx(a.Z,{mobileMenuSlot:i.jsx(c.Z,{}),children:(0,i.jsxs)("div",{className:d().root,children:[i.jsx(l.Z,{heading:s.heading,description:s.description}),i.jsx("div",{className:d().programsSection,children:t.map(e=>{let{slug:t,heading:r,description:s,exams:a}=e;return i.jsx(o.u0,{children:i.jsx(n.r4,{slug:t,heading:r,description:s,exams:a})},t)})}),i.jsx("div",{className:d().faqSignupSection,children:(0,i.jsxs)(o.u0,{children:[i.jsx("h2",{className:d().faqHeading,children:e.faqHeading}),i.jsx(o.bx,{items:r}),i.jsx("div",{className:d().signupForm,children:i.jsx(o.yv,{})})]})})]})})};s()}catch(e){s(e)}})},70321:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{b:()=>l});var i=r(71017),a=r.n(i),c=r(10142),o=r(15150),n=r(45004),u=r(20384),d=e([o,n]);[o,n]=d.then?(await d)():d;let p="src/content/certifications";async function l(){let e=(0,c.a)(a().join(p,"landing.json")),t=n.D.parse(JSON.parse(e)),r=(0,o.o9)(),s=(0,u.z)(r,t.programSummaryOrder),i=(0,c.a)(a().join(p,"landing-faq.mdx")),d=await (0,o.m1)(i);return{props:{pageContent:t,programSummaries:s,faqItems:d,metadata:{title:"Certifications",localOgImage:"certifications.jpg"}}}}s()}catch(e){s(e)}})},20384:(e,t,r)=>{"use strict";r.d(t,{z:()=>i});var s=r(29062);function i(e,t){return t.map(t=>{let r=e.find(e=>e.slug===t);if(!r)throw Error(`formatProgramSummaries: could not find Certification program with slug "${t}". Please ensure all slugs in "" reference existing Certification programs in "src/content/certifications/programs".`);return{slug:r.slug,heading:r.pageContent.summary.heading,description:r.pageContent.summary.description,exams:r.pageContent.exams.map(e=>(0,s.c)({title:e.title,examCode:e.examCode,examTier:e.examTier,productSlug:e.productSlug,prepareUrl:e.links?.prepare,registerUrl:e.links?.register}))}})}},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},22170:e=>{"use strict";e.exports=require("@mdx-js/mdx")},57425:e=>{"use strict";e.exports=require("@mdx-js/react")},74691:e=>{"use strict";e.exports=require("@opentelemetry/api")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},9991:e=>{"use strict";e.exports=require("@swc/core")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},38970:e=>{"use strict";e.exports=require("algoliasearch")},59003:e=>{"use strict";e.exports=require("classnames")},68103:e=>{"use strict";e.exports=require("clsx")},71239:e=>{"use strict";e.exports=require("events")},79316:e=>{"use strict";e.exports=require("fathom-client")},56734:e=>{"use strict";e.exports=require("js-cookie")},87645:e=>{"use strict";e.exports=require("mdast-util-to-string")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},91283:e=>{"use strict";e.exports=require("remark")},73673:e=>{"use strict";e.exports=require("slugify")},32711:e=>{"use strict";e.exports=require("unist-util-remove")},43057:e=>{"use strict";e.exports=require("unist-util-visit-children")},48858:e=>{"use strict";e.exports=require("use-query-params")},17451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},66197:e=>{"use strict";e.exports=import("framer-motion")},45641:e=>{"use strict";e.exports=import("react-hook-form")},64675:e=>{"use strict";e.exports=import("react-instantsearch")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1107,1840,6859,2631,1965,1306,2362,3893,8534,8460,1825,1930,2876,3146],()=>r(84566));module.exports=s})();