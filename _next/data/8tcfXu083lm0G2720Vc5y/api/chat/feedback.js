(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{67:e=>{"use strict";e.exports=require("node:async_hooks")},195:e=>{"use strict";e.exports=require("node:buffer")},562:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d}),s(639);var a=s(458),n=s(161),r=s(278),o=s(254);let i=o.z.object({conversationId:o.z.string(),messageId:o.z.string(),text:o.z.string().transform(e=>e.trim()).optional(),rating:o.z.number().min(-1).max(1).optional()});async function c(e,t){console.log(`[${e.method}] ${e.url}`);let s=e.headers.get("authorization");if(!s)return new Response("Not found",{status:404});let a=s.split(" ")[1];if("POST"===e.method){let t=await e.json(),s=i.safeParse(t);if(!s.success)return new Response("Bad Request",{status:400});let{conversationId:n,messageId:r,rating:o,text:c}=s.data,d=await u({conversationId:n,messageId:r,accessToken:a},{rating:o,text:c});return new Response(await d.json(),{status:d.status})}}async function u({conversationId:e,messageId:t,accessToken:s},{rating:a,text:n}){let r=new Headers;return r.set("Authorization",`Bearer ${s}`),r.set("Content-Type","application/json"),fetch(new URL(`/v1/conversations/${e}/messages/${t}/feedback`,process.env.EXPERIMENTAL_CHAT_API_BASE_URL).toString(),{body:JSON.stringify({rating:a,text:n}),method:"POST",headers:r})}function d(e){return(0,a.C)({...e,IncrementalCache:n.k,page:"/api/chat/feedback",handler:(0,r.fd)("/api/chat/feedback",c)})}}},e=>{var t=t=>e(e.s=t);e.O(0,[458,773],()=>t(562));var s=e.O();(_ENTRIES="undefined"==typeof _ENTRIES?{}:_ENTRIES)["middleware_pages/api/chat/feedback"]=s}]);
//# sourceMappingURL=feedback.js.map