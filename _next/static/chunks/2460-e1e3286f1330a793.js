(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2460],{38248:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(85893),i=n(93967),a=n.n(i),o=n(62023),s=n(59441),l=n(60348),c=n(86628),u=n.n(c),d=n(67294);let p=(0,d.createContext)(!1);p.displayName="AccordionDisclosureContext";let m=()=>(0,d.useContext)(p);var h=function(){let[e,t]=(0,d.useState)(!1),n=(0,d.useRef)(null),r=()=>t(!0),i=()=>t(!1);return(0,d.useEffect)(()=>{let e=n.current;if(e&&e instanceof HTMLElement)return e.addEventListener("mouseover",r),e.addEventListener("mouseout",i),()=>{e.removeEventListener("mouseover",r),e.removeEventListener("mouseout",i)}}),[n,e]},g=e=>{let{children:t,className:n,description:i,initialOpen:c,title:d,groupData:g}=e,[f,x]=h(),_=m(),b=void 0!==g,j=(null==g?void 0:g.currentIndex)===0,v=(null==g?void 0:g.currentIndex)===(null==g?void 0:g.numItems)-1;return(0,r.jsx)(p.Provider,{value:!0,children:(0,r.jsxs)(s.ZP,{containerClassName:e=>a()(u().root,{[u().isOpen]:e,[u().isHovered]:x,[u().isNested]:_,[u().isFirstItem]:j,[u().isLastItem]:v,[u().isGroupedItem]:b}),initialOpen:c,children:[(0,r.jsxs)(s.e8,{className:a()(u().button,n),ref:f,children:[(0,r.jsxs)("span",{className:u().labelContainer,children:["string"==typeof d?(0,r.jsx)(l.Z,{asElement:"span",className:u().title,weight:"semibold",children:d}):d,i&&(0,r.jsx)(l.Z,{asElement:"span",className:u().description,size:200,children:i})]}),(0,r.jsx)(o.Z,{})]}),(0,r.jsx)(s.k_,{className:u().content,children:t})]})})}},49423:function(e,t,n){"use strict";n.d(t,{nu:function(){return J},EZ:function(){return s},N2:function(){return p},No:function(){return m.No},kw:function(){return m.kw},NM:function(){return v},e2:function(){return k},Uw:function(){return y},RC:function(){return S},xh:function(){return w},Je:function(){return N},FZ:function(){return eo},yf:function(){return Y},l2:function(){return E},z9:function(){return es},P8:function(){return P},im:function(){return V},cb:function(){return m.cb},mn:function(){return A.O},pf:function(){return B},Nk:function(){return I},au:function(){return ea},BO:function(){return ee},u$:function(){return q},am:function(){return el}});var r=n(85893),i=n(38248),a=n(61886),o=n.n(a);let s=e=>{let{children:t,collapse:n,heading:a}=e;return(0,r.jsx)(i.Z,{title:a,className:o().accordionWrapper,initialOpen:!n,children:t})};var l=n(93967),c=n.n(l),u=n(22808),d=n.n(u);function p(e){let{className:t,...n}=e;return(0,r.jsx)("blockquote",{...n,className:c()(d().blockquote,t)})}var m=n(93630),h=n(67294),g=n(89168),f=n(17085),x=n(92380),_=n.n(x);let b={1:{size:600,weight:"bold"},2:{size:500,weight:"bold"},3:{size:400,weight:"bold"},4:{size:300,weight:"semibold"},5:{size:300,weight:"semibold"},6:{size:300,weight:"semibold"}};function j(e){let t=c()(_().heading,_()["h".concat(e)]),{size:n,weight:i}=b[e];return function(a){let o,s,{children:l,"data-text-content":c,id:u,...d}=a,p=[];for(let e of h.Children.toArray(l))("string"!=typeof e&&"number"!=typeof e&&"props"in e&&"className"in e.props?"__permalink-h"!==e.props.className:1)?p.push(e):o=e;c?s="".concat(c," permalink"):(null==o?void 0:o.props["aria-label"])&&(s=null==o?void 0:o.props["aria-label"]);let m=u&&s&&1!==e;return(0,r.jsxs)(g.Z,{...d,id:u,level:e,className:t,size:n,weight:i,children:[m?(0,r.jsx)(f.Z,{ariaLabel:s,href:"#".concat(u.replace(/^user-content-/,"")),level:e}):null,p]})}}let v=j(1),k=j(2),y=j(3),S=j(4),w=j(5),N=j(6);var L=n(74940),C=n.n(L);function P(e){let{children:t}=e;return(0,r.jsx)("ol",{className:C().listRoot,children:t})}function q(e){let{children:t}=e;return(0,r.jsx)("ul",{className:C().listRoot,children:t})}function E(e){let{children:t}=e;return(0,r.jsx)("li",{className:C().listItem,children:t})}var A=n(14945),M=n(6160),T=n.n(M);function I(e){let{children:t}=e;return(0,r.jsx)("div",{className:T().tabsWrapper,children:(0,r.jsx)(A.Z,{allowNestedStyles:!0,children:t})})}let z=e=>{let{element:t,thresholds:n={}}=e,{clientWidth:r,scrollLeft:i,scrollWidth:a}=t,{isScrollable:o=10,isAtStart:s=10,isAtEnd:l=10}=n,c=a-r;return{isScrollable:c>=o,isAtStart:i<=s,isAtEnd:c-i<=l}};var R=n(2955),F=n.n(R);function B(e){let t=(0,h.useRef)(),[{isScrollable:n,isAtStart:i,isAtEnd:a},o]=(0,h.useState)({isScrollable:!1,isAtStart:null,isAtEnd:null}),s=n&&!i,l=n&&!a;(0,h.useEffect)(()=>{let e=t.current,n=()=>{o(z({element:t.current}))};return o(z({element:t.current})),window.addEventListener("resize",n),e.addEventListener("scroll",n),()=>{window.removeEventListener("resize",n),e.removeEventListener("scroll",n)}},[]);let u=n?0:void 0;return(0,r.jsxs)("div",{className:F().root,children:[(0,r.jsx)("div",{className:c()(F().tableWrapper),ref:t,tabIndex:u,children:(0,r.jsx)("table",{...e})}),(0,r.jsx)("div",{className:F().tableFocusRing}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:c()(F().leftScrim,s&&F().showScrim)}),(0,r.jsx)("div",{className:c()(F().rightScrim,l&&F().showScrim)})]})]})}var O=n(17267),H=n(98344),Z=n.n(H);function J(e){let{children:t,className:n,href:i,...a}=e;if("string"==typeof t&&"\xbb"==t)return(0,r.jsx)("a",{...a,className:c()(n,Z().hiddenPermalink),href:i,children:t});let o=i||"#";return(0,r.jsx)(O.Z,{...a,className:n,href:o,tabIndex:"__target-lic"===n?-1:void 0,children:t})}var W=n(60348),D=n(32616),G=n.n(D);function V(e){return(0,r.jsx)(W.Z,{...e,className:G().p})}var X=n(48320),Q=n.n(X);function Y(e){let{className:t,size:n=200,...i}=e;return(0,r.jsx)("code",{...i,className:c()(Q().inlineCode,Q()["size-".concat(n)],t)})}n(90297);var U=n(23439),K=n(98274),$=n.n(K);function ee(e){let{product:t}=e;return(0,r.jsx)("div",{className:$().spacing,children:(0,r.jsx)(U.x4,{productSlug:t})})}var et=n(8855),en=n(69313),er=n(56676),ei=n(50524);function ea(e){return(0,r.jsx)(ep,{...e,type:"tip"})}function eo(e){return(0,r.jsx)(ep,{...e,type:"highlight"})}function es(e){return(0,r.jsx)(ep,{...e,type:"note"})}function el(e){return(0,r.jsx)(ep,{...e,type:"warning"})}var ec=n(6586),eu=n.n(ec);let ed={tip:{title:"Tip",icon:(0,r.jsx)(en.w,{}),color:"neutral"},highlight:{title:"Tip",icon:(0,r.jsx)(en.w,{}),color:"highlight"},note:{title:"Note",icon:(0,r.jsx)(er.a,{}),color:"warning"},warning:{title:"Warning",icon:(0,r.jsx)(ei.v,{}),color:"critical"}};function ep(e){let{children:t,title:n,type:i="tip"}=e,a=ed[i];if(!t)throw Error("[MdxInlineAlert]: No `children` found, please pass a description body");if(!a)throw Error("[MdxInlineAlert]: Invalid alert type passed, '".concat(i,"'. Please pass one of: ").concat(Object.keys(ed).join(" | ")));return(0,r.jsx)("div",{className:eu().spacing,children:(0,r.jsx)(et.Z,{icon:a.icon,title:null!=n?n:a.title,description:t,color:a.color,className:eu().typographyOverride})})}},93630:function(e,t,n){"use strict";n.d(t,{No:function(){return h},kw:function(){return g},cb:function(){return f}});var r=n(85893),i=n(67294),a=n(93967),o=n.n(a),s=n(31965),l=n(14945),c=n(60348),u=JSON.parse('{"abap":"ABAP","abnf":"ABNF","actionscript":"ActionScript","ada":"Ada","agda":"Agda","al":"AL","antlr4":"ANTLR4","apacheconf":"ApacheConf","apex":"Apex","apl":"APL","applescript":"AppleScript","aql":"AQL","arduino":"Arduino","arff":"ARFF","asciidoc":"AsciiDoc","asm6502":"ASM6502","aspnet":"ASP.NET","autohotkey":"AutoHotkey","autoit":"AutoIt","shell":"Shell","bash":"Bash","basic":"Basic","batch":"Batch","shortcode":"Shortcode","bbcode":"BBCode","birb":"Birb","bison":"Bison","rbnf":"RBNF","bnf":"BNF","brainfuck":"Brainfuck","brightscript":"Brightscript","bro":"Bro","oscript":"Oscript","bsl":"BSL","c":"C","cil":"CIL","clike":"C-like","clojure":"Clojure","cmake":"CMake","coffeescript":"CoffeeScript","concurnas":"Concurnas","cpp":"C++","crystal":"Crystal","dotnet":".NET","csharp":"C#","csp":"CSP","css":"CSS","cypher":"Cypher","d":"D","dart":"Dart","dataweave":"DataWeave","dax":"DAX","dhall":"Dhall","diff":"Diff","jinja2":"Jinja2","django":"Django","dns-zone-file":"DNS Zone","docker":"Docker","ebnf":"EBNF","editorconfig":"EditorConfig","eiffel":"Eiffel","eta":"Eta","ejs":"EJS","elixir":"Elixir","elm":"Elm","erb":"ERB","erlang":"Erlang","etlua":"Lua","excel-formula":"Excel","factor":"Factor","firestore-security-rules":"Firestore Security Rules","flow":"Flow","fortran":"Fortran","fsharp":"F#","ftl":"FTL","gcode":"gcode","gdscript":"GDscript","gedcom":"GEDCOM","gherkin":"Gherkin","git":"Git","glsl":"GLSL","gml":"GameMaker","go":"Go","graphql":"GraphQL","groovy":"Groovy","haml":"Haml","handlebars":"Handlebars","haskell":"Haskell","haxe":"Haxe","hcl":"HCL","hlsl":"HLSL","hpkp":"HPKP","hsts":"HSTS","http":"HTTP","ichigojam":"IchigoJam","icon":"Icon","iecst":"IEC Structured Text","gitignore":".gitignore","hgignore":".hgignore","npmignore":".npmignore","ignore":".ignore","inform7":"Inform 7","ini":"INI","io":"Io","j":"J","java":"Java","javadoc":"Javadoc","javadoclike":"Javadoc-like","javascript":"JavaScript","javastacktrace":"Java Stack Trace","jolie":"Jolie","jq":"jq","jsdoc":"JSDoc","webmanifest":"Web Manifest","json":"JSON","json5":"JSON5","jsonp":"JSONP","jsstacktrace":"JavaScript Stack Trace","jsx":"JSX","julia":"Julia","keyman":"Keyman","kotlin":"Kotlin","context":"ConTeXt","tex":"Tex","latex":"LaTeX","latte":"Latte","less":"LESS","lilypond":"LilyPond","liquid":"Liquid","elisp":"Emacs Lisp","emacs":"Emacs","emacs-lisp":"Emacs Lisp","lisp":"Lisp","livescript":"LiveScript","llvm":"LLVM","lolcode":"LOLCODE","lua":"Lua","makefile":"Makefile","markdown":"Markdown","atom":"Atom","html":"HTML","mathml":"MathML","rss":"RSS","ssml":"SSML","svg":"SVG","xml":"XML","markup":"XML","markup-templating":"Markup Templating","matlab":"MATLAB","mel":"MEL","mizar":"Mizar","mongodb":"MongoDB","monkey":"Monkey","moonscript":"MoonScript","n1ql":"N1QL","n4js":"N4JS","nand2tetris-hdl":"Nand2Tetris HDL","naniscript":"NaniScript","nasm":"NASM","neon":"Neon","nginx":"nginx","nim":"Nim","nix":"Nix","nsis":"NSIS","objectivec":"Objective-C","ocaml":"OCaml","opencl":"OpenCL","oz":"Oz","parigp":"PARI/GP","parser":"Parser","objectpascal":"Object Pascal","pascal":"Pascal","pascaligo":"Pascaligo","px":"px","pcaxis":"PC-Axis","peoplecode":"PeopleCode","perl":"Perl","php":"PHP","phpdoc":"PHPDoc","plsql":"PL/SQL","powerquery":"Power Query M","powershell":"PowerShell","processing":"Processing","prolog":"Prolog","promql":"PromQL","properties":"Properties","protobuf":"Protobuf","pug":"Pug","puppet":"Puppet","pure":"Pure","purebasic":"Pure Basic","purescript":"PureScript","python":"Python","q":"Q","qml":"QML","qore":"Qore","r":"R","racket":"Racket","reason":"Reason","regex":"Regex","renpy":"Ren\'Py","rest":"REST","rip":"Rip","roboconf":"Roboconf","robotframework":"Robot Framework","ruby":"Ruby","rust":"Rust","sas":"SAS","sass":"SASS","scala":"Scala","scheme":"Scheme","scss":"SCSS","sentinel":"Sentinel","shell-session":"Shell","smali":"Smali","smalltalk":"Smalltalk","smarty":"Smarty","sml":"Standard ML","solidity":"Solidity","solution-file":"Solution File","soy":"Soy","sparql":"SPARQL","splunk-spl":"Splunk SPL","sqf":"SQF","sql":"SQL","stan":"Stan","stylus":"Stylus","swift":"Swift","t4-cs":"T4","t4-templating":"T4 Templating","t4-vb":"T4 Visual Basic","tap":"TAP","tcl":"Tcl","textile":"Textile","toml":"TOML","tsx":"TSX","tt2":"TT2","trig":"TriG","turtle":"Turtle","twig":"Twig","typescript":"TypeScript","tsconfig":"TSConfig","typoscript":"TypoScript","unrealscript":"UnrealScript","vala":"Vala","vbnet":"VB.NET","velocity":"Velocity","verilog":"Verilog","vhdl":"VHDL","vim":"Vim","visual-basic":"Visual Basic","warpscript":"WarpScript","wasm":"WebAssembly","wiki":"Wiki","xeoracube":"XeoraCube","xeora":"Xeora","xojo":"Xojo","xquery":"XQuery","yaml":"YAML","yang":"YANG","zig":"zig"}'),d=JSON.parse('{"abap":[],"abnf":[],"actionscript":[],"ada":[],"agda":[],"al":[],"antlr4":["g4"],"apacheconf":[],"apex":[],"apl":[],"applescript":[],"aql":[],"arduino":[],"arff":[],"asciidoc":["adoc"],"asm6502":[],"aspnet":[],"autohotkey":[],"autoit":[],"bash":["shell"],"basic":[],"batch":[],"bbcode":["shortcode"],"birb":[],"bison":[],"bnf":["rbnf"],"brainfuck":[],"brightscript":[],"bro":[],"bsl":["oscript"],"c":[],"cfscript":["cfc"],"chaiscript":[],"cil":[],"clike":[],"clojure":[],"cmake":[],"cobol":[],"coffeescript":["coffee"],"concurnas":["conc"],"coq":[],"cpp":[],"crystal":[],"csharp":["cs","dotnet"],"csp":[],"css":[],"csv":[],"cypher":[],"d":[],"dart":[],"dataweave":[],"dax":[],"dhall":[],"diff":[],"django":["jinja2"],"dns-zone-file":["dns-zone"],"docker":["dockerfile"],"dot":["gv"],"ebnf":[],"editorconfig":[],"eiffel":[],"ejs":["eta"],"elixir":[],"elm":[],"erb":[],"erlang":[],"etlua":[],"excel-formula":["xls","xlsx"],"factor":[],"false":[],"firestore-security-rules":[],"flow":[],"fortran":[],"fsharp":[],"ftl":[],"gcode":[],"gdscript":[],"gedcom":[],"gherkin":[],"git":[],"glsl":[],"gml":["gamemakerlanguage"],"go":[],"graphql":[],"groovy":[],"haml":[],"handlebars":["hbs"],"haskell":["hs"],"haxe":[],"hcl":[],"hlsl":[],"hpkp":[],"hsts":[],"http":[],"ichigojam":[],"icon":[],"icu-message-format":[],"idris":["idr"],"iecst":[],"ignore":["gitignore","hgignore","npmignore"],"inform7":[],"ini":[],"io":[],"j":[],"java":[],"javadoc":[],"javadoclike":[],"javascript":["js"],"javastacktrace":[],"jexl":[],"jolie":[],"jq":[],"jsdoc":[],"json":["webmanifest"],"json5":[],"jsonp":[],"jsstacktrace":[],"jsx":[],"julia":[],"keyman":[],"kotlin":["kt","kts"],"kumir":["kum"],"latex":["context","tex"],"latte":[],"less":[],"lilypond":["ly"],"liquid":[],"lisp":["elisp","emacs","emacs-lisp"],"livescript":[],"llvm":[],"log":[],"lolcode":[],"lua":[],"makefile":[],"markdown":["md"],"markup":["atom","html","mathml","rss","ssml","svg","xml"],"markup-templating":[],"matlab":[],"mel":[],"mizar":[],"mongodb":[],"monkey":[],"moonscript":["moon"],"n1ql":[],"n4js":["n4jsd"],"nand2tetris-hdl":[],"naniscript":["nani"],"nasm":[],"neon":[],"nevod":[],"nginx":[],"nim":[],"nix":[],"nsis":[],"objectivec":["objc"],"ocaml":[],"opencl":[],"openqasm":["qasm"],"oz":[],"parigp":[],"parser":[],"pascal":["objectpascal"],"pascaligo":[],"pcaxis":["px"],"peoplecode":["pcode"],"perl":[],"php":[],"phpdoc":[],"plsql":[],"powerquery":["mscript","pq"],"powershell":[],"processing":[],"prolog":[],"promql":[],"properties":[],"protobuf":[],"psl":[],"pug":[],"puppet":[],"pure":[],"purebasic":["pbfasm"],"purescript":["purs"],"python":["py"],"q":[],"qml":[],"qore":[],"qsharp":["qs"],"r":[],"racket":["rkt"],"reason":[],"regex":[],"rego":[],"renpy":["rpy"],"rest":[],"rip":[],"roboconf":[],"robotframework":["robot"],"ruby":["rb"],"rust":[],"sas":[],"sass":[],"scala":[],"scheme":[],"scss":[],"shell-session":["sh-session","shellsession"],"smali":[],"smalltalk":[],"smarty":[],"sml":["smlnj"],"solidity":["sol"],"solution-file":["sln"],"soy":[],"sparql":["rq"],"splunk-spl":[],"sqf":[],"sql":[],"squirrel":[],"stan":[],"stylus":[],"swift":[],"t4-cs":["t4"],"t4-templating":[],"t4-vb":[],"tap":[],"tcl":[],"textile":[],"toml":[],"tsx":[],"tt2":[],"turtle":["trig"],"twig":[],"typescript":["ts"],"typoscript":["tsconfig"],"unrealscript":["uc","uscript"],"uri":["url"],"v":[],"vala":[],"vbnet":[],"velocity":[],"verilog":[],"vhdl":[],"vim":[],"visual-basic":["vb","vba"],"warpscript":[],"wasm":[],"wiki":[],"wolfram":["mathematica","nb","wl"],"xeora":["xeoracube"],"xojo":[],"xquery":[],"yaml":["yml"],"yang":[],"zig":[]}'),p=n(66403),m=n.n(p);let h=function(e){var t;let{className:n,children:a,hasBarAbove:o,heading:l,filename:c,highlight:u,lineNumbers:d,hideClipboard:p}=e,m=function(e){let t=i.Children.toArray(e)[0];return t&&"object"==typeof t&&"props"in t?t.props:null}(a);return(0,r.jsx)(s.Z,{className:n,language:null==m?void 0:m.language,value:x(x(a)),isStandalone:!o,title:null!==(t=null!=l?l:c)&&void 0!==t?t:"",highlightLines:u,hasLineNumbers:null!=d&&d,hasCopyButton:!p})};function g(e){let{children:t,heading:n,tabs:a}=e,o=i.Children.toArray(t);return(0,r.jsxs)("div",{children:[n&&(0,r.jsx)(c.Z,{weight:"medium",className:m().codeBlockMargin,children:n}),(0,r.jsx)(l.Z,{children:o.map((e,t)=>{var n;if(!("object"==typeof e&&"props"in e))return null;let{mdxType:i,...o}=e.props,s=(["pre","CodeBlockConfig"].includes(i)?o.children.props.className:"language-".concat(o.language)).split("-")[1],c=a?a[t]:null!==(n=function(e){let t=u[e];return t?t:u[Object.keys(d).reduce((t,n)=>t||(n==e||-1!==d[n].indexOf(e)?n:t),null)]||null}(s))&&void 0!==n?n:s;return(0,r.jsx)(l.O,{heading:c,group:s,children:e},s)})})]})}function f(e){var t;let{children:n,className:i,...a}=e;return(0,r.jsx)(s.Z,{...a,className:o()(i,{[m().codeBlockMargin]:!a.hasBarAbove}),value:"string"!=typeof(t=x(n)||n)?t:t.replace(/\n$/,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),hasLineNumbers:!1,hasCopyButton:!0})}function x(e){let t=i.Children.toArray(e)[0];return t&&"object"==typeof t&&"props"in t?t.props.children:null}},90297:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(85893),i=n(89755),a=n.n(i),o=n(91121),s=n(28222),l=n(60348),c=n(42950),u=n(68172),d=n(7523),p=n.n(d);let m={applications:["waypoint"],infrastructure:["packer"],networking:["consul"],security:["boundary","vault","vault-secrets"]},h={applications:{gradient:"--wpl-gradient-applications-horizontal",image:{src:"/_next/static/media/applications.1a9e9628.svg",height:272,width:335,blurWidth:0,blurHeight:0}},infrastructure:{gradient:"--wpl-gradient-infrastructure-horizontal",image:{src:"/_next/static/media/infrastructure.3ffa97e9.svg",height:255,width:325,blurWidth:0,blurHeight:0}},networking:{gradient:"--wpl-gradient-networking-horizontal",image:{src:"/_next/static/media/networking.c7f429b3.svg",height:254,width:324,blurWidth:0,blurHeight:0}},security:{gradient:"--wpl-gradient-security-horizontal",image:{src:"/_next/static/media/security.23cb446c.svg",height:280,width:335,blurWidth:0,blurHeight:0}}},g="HCP Vault Secrets";function f(e){let{product:t}=e,n="vault-secrets"===t?g:u.tC[t],{gradient:i,image:d}=h[Object.keys(m).find(e=>m[e].includes(t))];return(0,r.jsxs)("div",{className:p().root,style:{"--gradient":"var(".concat(i,")")},children:[(0,r.jsxs)("div",{className:p().textContainer,children:[(0,r.jsx)(r.Fragment,{children:n===g?(0,r.jsx)(l.Z,{asElement:"p",weight:"bold",className:p().heading,children:(0,r.jsx)("span",{className:p().solutionGradient,children:n})}):(0,r.jsxs)(l.Z,{asElement:"p",weight:"bold",className:p().heading,children:["Looking for ",(0,r.jsx)("span",{className:p().solutionGradient,children:n})," ","fundamentals?"]})}),(0,r.jsx)(r.Fragment,{children:n===g?(0,r.jsx)(l.Z,{asElement:"p",size:200,className:p().subHeading,children:"Centralized secrets lifecycle management for developers."}):(0,r.jsxs)(l.Z,{asElement:"p",size:200,className:p().subHeading,children:["Read core ",n," documentation and tutorials, including self-hosted docs."]})}),(0,r.jsx)(r.Fragment,{children:n===g?(0,r.jsx)(c.Z,{text:"Get Started for Free",href:"https://portal.cloud.hashicorp.com",icon:(0,r.jsx)(s.g,{className:p().ctaIcon}),iconPosition:"trailing",className:p().ctaWrapper,color:"secondary",opensInNewTab:!0}):(0,r.jsx)(c.Z,{text:"Go to ".concat(n),href:"/".concat(t,"/docs"),icon:(0,r.jsx)(o.k,{className:p().ctaIcon}),iconPosition:"trailing",className:p().ctaWrapper,color:"secondary"})})]}),(0,r.jsx)("div",{className:p().solutionPattern,children:(0,r.jsx)(a(),{src:d,alt:"",layout:"fill",objectFit:"cover",objectPosition:"center"})})]})}},17085:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(85893),i=n(41664),a=n.n(i),o=n(93967),s=n.n(o),l=n(11672),c=n(37094),u=n.n(c);function d(e){let{className:t,level:n,href:i,ariaLabel:o}=e;return(0,r.jsx)(a(),{className:s()(u().root,t,u()["h".concat(n)]),"aria-label":o,href:i,children:(0,r.jsx)(l.j,{className:u().icon})})}},23439:function(e,t,n){"use strict";n.d(t,{x4:function(){return o}}),n(56628),n(69565);var r=n(85893),i=n(75789),a=n(54445);function o(e){let{productSlug:t}=e,{ctaText:n,ctaUrl:o,description:s,heading:l,image:c}=a.g[t];return(0,r.jsx)(i.se,{ctaText:n,ctaUrl:o,description:s,heading:l,productSlug:t,image:c})}},88481:function(){window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}},6812:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r=n(85893);n(88481);var i=n(67294),a=n(3905);function o(e){let{compiledSource:t,scope:n,components:o={},lazy:s}=e,[l,c]=(0,i.useState)(!s);(0,i.useEffect)(()=>{if(s){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,i.useMemo)(()=>{let e=Object.assign({mdx:a.kt,React:i},n),r=Object.keys(e),o=Object.values(e),s=Reflect.construct(Function,r.concat("".concat(t,"; return MDXContent;")));return s.apply(s,o)},[n,t]);if(!l)return(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=(0,r.jsx)(a.Zo,{components:o,children:(0,r.jsx)(u,{})});return s?(0,r.jsx)("div",{children:d}):d}},86628:function(e){e.exports={root:"accordion-disclosure_root__jwLFz",isGroupedItem:"accordion-disclosure_isGroupedItem__cHw4P",isFirstItem:"accordion-disclosure_isFirstItem__jSMlf",isLastItem:"accordion-disclosure_isLastItem__vJU94",isOpen:"accordion-disclosure_isOpen__gWBwA",isHovered:"accordion-disclosure_isHovered__oaZUR",isNested:"accordion-disclosure_isNested__uSRMr",button:"accordion-disclosure_button__YnV2i",labelContainer:"accordion-disclosure_labelContainer__ILNJx",title:"accordion-disclosure_title__I2RPo",description:"accordion-disclosure_description__EYJ2F",content:"accordion-disclosure_content__3fmdE"}},98344:function(e){e.exports={hiddenPermalink:"mdx-a_hiddenPermalink__tz95F"}},61886:function(e){e.exports={accordionWrapper:"mdx-accordion_accordionWrapper___AiXL"}},6586:function(e){e.exports={spacing:"mdx-inline-alert_spacing___QlMF",typographyOverride:"mdx-inline-alert_typographyOverride__DHnxV"}},22808:function(e){e.exports={blockquote:"mdx-blockquote_blockquote__h7k9H"}},66403:function(e){e.exports={codeBlockMargin:"mdx-code-blocks_codeBlockMargin__xk4yr"}},7523:function(e){e.exports={root:"mdx-callout_root__FgpBC",ctaIcon:"mdx-callout_ctaIcon__Ro42P",textContainer:"mdx-callout_textContainer__V6AK2",heading:"mdx-callout_heading__Fn1ry",subHeading:"mdx-callout_subHeading__l1M97",ctaWrapper:"mdx-callout_ctaWrapper__jzbPt g-focus-ring-from-box-shadow",solutionGradient:"mdx-callout_solutionGradient__fqrn_",solutionPattern:"mdx-callout_solutionPattern__xdTM0"}},37094:function(e){e.exports={root:"mdx-heading-permalink_root__2oeix g-focus-ring-from-box-shadow",icon:"mdx-heading-permalink_icon__Sz01O",h1:"mdx-heading-permalink_h1__MivCF",h2:"mdx-heading-permalink_h2__CA9g8",h3:"mdx-heading-permalink_h3__SkrrS"}},92380:function(e){e.exports={heading:"mdx-headings_heading__M6qPe g-offset-scroll-margin-top",h1:"mdx-headings_h1__6ezZ4",h2:"mdx-headings_h2__9ZcX_",h3:"mdx-headings_h3__xmS_z",h4:"mdx-headings_h4__v7716",h5:"mdx-headings_h5__d2ufM",h6:"mdx-headings_h6__3BoRu"}},48320:function(e){e.exports={inlineCode:"mdx-inline-code_inlineCode__p_0sy","size-100":"mdx-inline-code_size-100__MRsXU hds-typography-code-100","size-200":"mdx-inline-code_size-200__YiF_7 hds-typography-code-200"}},74940:function(e){e.exports={listRoot:"mdx-lists_listRoot__iVDx9",listItem:"mdx-lists_listItem__nkqhg"}},32616:function(e){e.exports={p:"mdx-p_p__ZTJEA"}},2955:function(e){e.exports={root:"mdx-table_root__adKqa",tableWrapper:"mdx-table_tableWrapper__81O9J",tableFocusRing:"mdx-table_tableFocusRing__qNrYf",scrim:"mdx-table_scrim__VtktE",showScrim:"mdx-table_showScrim__JNwN1",leftScrim:"mdx-table_leftScrim__mYsmq mdx-table_scrim__VtktE",rightScrim:"mdx-table_rightScrim__Ikt63 mdx-table_scrim__VtktE"}},6160:function(e){e.exports={tabsWrapper:"mdx-tabs_tabsWrapper__eBd6p"}},98274:function(e){e.exports={spacing:"mdx-try-hcp-callout_spacing__MTtFm"}}}]);