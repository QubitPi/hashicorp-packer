"use strict";(()=>{var e={};e.id=544,e.ids=[544,2888],e.modules={78483:(e,r,t)=>{t.a(e,async(e,o)=>{try{t.r(r),t.d(r,{config:()=>d,default:()=>m,getServerSideProps:()=>h,getStaticPaths:()=>x,getStaticProps:()=>l,reportWebVitals:()=>q,routeModule:()=>k,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>g});var s=t(87093),i=t(35244),a=t(1323),p=t(11070),c=t(33893),u=t(58416),n=e([c,u]);[c,u]=n.then?(await n)():n;let m=(0,a.l)(u,"default"),l=(0,a.l)(u,"getStaticProps"),x=(0,a.l)(u,"getStaticPaths"),h=(0,a.l)(u,"getServerSideProps"),d=(0,a.l)(u,"config"),q=(0,a.l)(u,"reportWebVitals"),g=(0,a.l)(u,"unstable_getStaticProps"),f=(0,a.l)(u,"unstable_getStaticPaths"),y=(0,a.l)(u,"unstable_getStaticParams"),b=(0,a.l)(u,"unstable_getServerProps"),v=(0,a.l)(u,"unstable_getServerSideProps"),k=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/hcp/api-docs/vault-secrets/[[...page]]",pathname:"/hcp/api-docs/vault-secrets/[[...page]]",bundlePath:"",filename:""},components:{App:c.default,Document:p.default},userland:u});o()}catch(e){o(e)}})},58416:(e,r,t)=>{t.a(e,async(e,o)=>{try{t.r(r),t.d(r,{default:()=>x,getStaticPaths:()=>a.F,getStaticProps:()=>l});var s=t(46558),i=t(41378),a=t(53586),p=t(83409),c=t(51240),u=t(99771),n=e([i,a]);[i,a]=n.then?(await n)():n;let m={productSlug:"hcp",serviceProductSlug:"vault",basePath:"/hcp/api-docs/vault-secrets",githubSourceDirectory:{owner:"hashicorp",repo:"hcp-specs",path:"specs/cloud-vault-secrets",ref:"main"},groupOperationsByPath:!0,statusIndicatorConfig:{pageUrl:"https://status.hashicorp.com",endpointUrl:"https://status.hashicorp.com/api/v2/components/hk67zg2j2rkd.json"},navResourceItems:[{title:"Tutorial Library",href:"/tutorials/library?product=vault&edition=hcp"},{title:"Certifications",href:"/certifications/security-automation"},{title:"Community",href:"https://discuss.hashicorp.com/"},{title:"Support",href:"https://www.hashicorp.com/customer-success"}],massageSchemaForClient:e=>{let r=(0,p.Q)(e);return(0,c.h)(r,"protobufAny",u.p)}},l=async({params:e})=>{let r=await (0,s.Y)(m.githubSourceDirectory);return await (0,a.b)({...m,context:{params:e},versionData:r})},x=i.Z;o()}catch(e){o(e)}})},51240:(e,r,t)=>{t.d(r,{h:()=>o});function o(e,r,t){let o=e.components?.schemas[r];if(!o)throw Error(`Reference "${r}" not found in schema.`);if("$ref"in o)throw Error(`Target schema ${r} is itself a reference, this is unexpected.`);{let s=t(o),i={...e.components.schemas,[r]:s};return{...e,components:{...e.components,schemas:i}}}}},99771:(e,r,t)=>{function o(e){var r,t;let o={...e};if("description"in o&&(o.description=(r=o.description).length>400?"An arbitrary serialized message. Visit the [protobufAny documentation](https://protobuf.dev/reference/protobuf/google.protobuf/#any) for more information.":r),"properties"in o&&"object"==typeof o.properties){let e={...o.properties["@type"]};"description"in e&&(e.description=(t=e.description).length>400?"A URL that describes the type of the serialized message.":t,o.properties={...o.properties,"@type":e})}return o}t.d(r,{p:()=>o})},94970:e=>{e.exports=require("@happykit/flags/client")},67922:e=>{e.exports=require("@happykit/flags/context")},22170:e=>{e.exports=require("@mdx-js/mdx")},57425:e=>{e.exports=require("@mdx-js/react")},16142:e=>{e.exports=require("@octokit/core")},74691:e=>{e.exports=require("@opentelemetry/api")},48827:e=>{e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{e.exports=require("@reach/dialog")},9677:e=>{e.exports=require("@reach/portal")},80395:e=>{e.exports=require("@reach/tooltip")},78896:e=>{e.exports=require("@react-aria/ssr")},76278:e=>{e.exports=require("@react-aria/utils")},9991:e=>{e.exports=require("@swc/core")},18910:e=>{e.exports=require("@tanstack/react-query")},46310:e=>{e.exports=require("@tanstack/react-query-devtools")},38970:e=>{e.exports=require("algoliasearch")},59003:e=>{e.exports=require("classnames")},71239:e=>{e.exports=require("events")},10950:e=>{e.exports=require("extend")},79316:e=>{e.exports=require("fathom-client")},22493:e=>{e.exports=require("hast-util-to-string")},48010:e=>{e.exports=require("http-status-codes")},93715:e=>{e.exports=require("is-buffer")},56734:e=>{e.exports=require("js-cookie")},52591:e=>{e.exports=require("moize")},23231:e=>{e.exports=require("ms")},41649:e=>{e.exports=require("next-auth/react")},74091:e=>{e.exports=require("next-query-params")},51162:e=>{e.exports=require("next-themes")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},45235:e=>{e.exports=require("oas-normalize")},39369:e=>{e.exports=require("process")},79103:e=>{e.exports=require("query-string")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},65184:e=>{e.exports=require("react-error-boundary")},48922:e=>{e.exports=require("react-hot-toast")},19785:e=>{e.exports=require("react-intersection-observer")},20997:e=>{e.exports=require("react/jsx-runtime")},62555:e=>{e.exports=require("refractor")},64545:e=>{e.exports=require("rehype-stringify")},50934:e=>{e.exports=require("shellwords")},73673:e=>{e.exports=require("slugify")},32711:e=>{e.exports=require("unist-util-remove")},84269:e=>{e.exports=require("url")},48858:e=>{e.exports=require("use-query-params")},17451:e=>{e.exports=import("@vercel/speed-insights/next")},87586:e=>{e.exports=import("decode-named-character-reference")},66197:e=>{e.exports=import("framer-motion")},90684:e=>{e.exports=import("mdast-util-mdx")},19282:e=>{e.exports=import("mdast-util-phrasing")},23985:e=>{e.exports=import("micromark-core-commonmark")},95723:e=>{e.exports=import("micromark-extension-mdxjs")},84678:e=>{e.exports=import("micromark-factory-space")},60718:e=>{e.exports=import("micromark-util-character")},43471:e=>{e.exports=import("micromark-util-chunked")},36243:e=>{e.exports=import("micromark-util-combine-extensions")},62687:e=>{e.exports=import("micromark-util-decode-numeric-character-reference")},22732:e=>{e.exports=import("micromark-util-decode-string")},96997:e=>{e.exports=import("micromark-util-normalize-identifier")},45566:e=>{e.exports=import("micromark-util-resolve-all")},94980:e=>{e.exports=import("micromark-util-subtokenize")},64675:e=>{e.exports=import("react-instantsearch")},23135:e=>{e.exports=import("react-markdown")},89521:e=>{e.exports=import("rehype-katex")},66809:e=>{e.exports=import("remark-gfm")},19832:e=>{e.exports=import("remark-math")},2509:e=>{e.exports=import("remark-rehype")},9926:e=>{e.exports=import("zod")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[1107,1840,6859,2631,1965,3098,1717,9826,3893,8534,8460,9325,1825,1930,1378,1198],()=>t(78483));module.exports=o})();