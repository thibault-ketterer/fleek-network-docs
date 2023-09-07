"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3872:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{image:t,name:n,title:r,url:l}=e;return a.createElement("section",{className:"author_card"},a.createElement("div",null,a.createElement("span",{className:"avatar"},a.createElement("a",{href:l,target:"_blank",alt:n},a.createElement("img",{src:t,alt:n}))),a.createElement("div",null,a.createElement("span",{className:"name"},a.createElement("a",{href:l,target:"_blank",alt:n},n)),a.createElement("span",{className:"title"},r),a.createElement("span",{className:"discord"},"Got questions? Find us on ",a.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"Discord!")))))}},3941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=n(7462),r=(n(7294),n(3905)),l=n(3872);const o={title:"Health check",slug:"health-check",hide_title:!0,tags:["healthcheck","verification","node status"]},c=void 0,i={unversionedId:"node/health-check",id:"node/health-check",title:"Health check",description:"\x3c!--",source:"@site/docs/node/health-check.md",sourceDirName:"node",slug:"/node/health-check",permalink:"/docs/node/health-check",draft:!1,tags:[{label:"healthcheck",permalink:"/docs/tags/healthcheck"},{label:"verification",permalink:"/docs/tags/verification"},{label:"node status",permalink:"/docs/tags/node-status"}],version:"current",frontMatter:{title:"Health check",slug:"health-check",hide_title:!0,tags:["healthcheck","verification","node status"]},sidebar:"docs",previous:{title:"Install",permalink:"/docs/node/Install"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},s={},h=[{value:"Overview",id:"overview",level:2},{value:"Quick health check",id:"quick-health-check",level:2},{value:"JSON-RPC Health check",id:"json-rpc-health-check",level:2}],p={toc:h};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In network applications, a health check is a process of verifying the overall health and availability of a service. It usually involves sending a request to a specific endpoint of a service and receiving a response indicating the status. The response includes information about the status of the service, node or any errors or warnings if not healthy. This helps developers, node operators, and system administrators identify and resolve issues that may affect the network, node performance and availability."),(0,r.kt)("h2",{id:"quick-health-check"},"Quick health check"),(0,r.kt)("p",null,"Run a quick health check by sending a GET request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/health")," endpoint of RPC on ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/ports"},"port")," 4069."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -w "\\p" localhost:4069/health\n')),(0,r.kt)("p",null,"If successful, you should get the response ",(0,r.kt)("inlineCode",{parentName:"p"},"OK"),", as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"OK\n")),(0,r.kt)("p",null,"If you get an error, then it means that your node is not healthy."),(0,r.kt)("h2",{id:"json-rpc-health-check"},"JSON-RPC Health check"),(0,r.kt)("p",null,"We'll send a request to the JSON RPC ",(0,r.kt)("inlineCode",{parentName:"p"},"flk_ping")," method. Execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -X POST -H "Content-Type: application/json" -d \'{\n      "jsonrpc": "2.0",\n      "method": "flk_ping",\n      "params": [],\n      "id": 1\n    }\' http://127.0.0.1:4069/rpc/v0\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We're using cURL, make sure that you have it installed otherwise install it in your operating system.")),(0,r.kt)("p",null,"If the request is successful, you should get the result ",(0,r.kt)("inlineCode",{parentName:"p"},"pong")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'{\n  "jsonrpc": "2.0",\n  "result": "pong",\n  "id": 1\n}\n')),(0,r.kt)("p",null,"Any other response, such as errors determine that the node is not healthy."),(0,r.kt)(l.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}u.isMDXComponent=!0}}]);