"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5318],{4798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=t(5893),a=t(1151),c=t(3872);const i={title:"Health check",slug:"health-check",hide_title:!0,tags:["healthcheck","verification","node status"]},l=void 0,o={id:"node/health-check",title:"Health check",description:"TL;DR: Run the command",source:"@site/docs/node/health-check.md",sourceDirName:"node",slug:"/node/health-check",permalink:"/docs/node/health-check",draft:!1,unlisted:!1,tags:[{label:"healthcheck",permalink:"/docs/tags/healthcheck"},{label:"verification",permalink:"/docs/tags/verification"},{label:"node status",permalink:"/docs/tags/node-status"}],version:"current",frontMatter:{title:"Health check",slug:"health-check",hide_title:!0,tags:["healthcheck","verification","node status"]},sidebar:"docs",previous:{title:"Install",permalink:"/docs/node/install"},next:{title:"Analyzing logs",permalink:"/docs/node/analyzing-logs"}},r={},h=[{value:"TL;DR: Run the command",id:"tldr-run-the-command",level:2},{value:"Overview",id:"overview",level:2},{value:"Quick health check",id:"quick-health-check",level:2},{value:"JSON-RPC Health check",id:"json-rpc-health-check",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"tldr-run-the-command",children:"TL;DR: Run the command"}),"\n",(0,s.jsx)(n.p,{children:"A script is available to do and provide a health check overview:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -sS https://get.fleek.network/healthcheck | bash\n"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"In network applications, a health check is a process of verifying the overall health and availability of a service. It usually involves sending a request to a specific endpoint of a service and receiving a response indicating the status. The response includes information about the status of the service, or any errors or warnings if not healthy. This helps developers, node operators, and system administrators identify and resolve issues that may affect the network, node performance and availability."}),"\n",(0,s.jsx)(n.p,{children:"A Node operator or system administrator can communicate with the node to confirm the status at any time."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"We're using cURL, for the examples, thus make sure that you have it installed on your operating system."})}),"\n",(0,s.jsx)(n.h2,{id:"quick-health-check",children:"Quick health check"}),"\n",(0,s.jsxs)(n.p,{children:["Run a quick health check by sending a GET request to ",(0,s.jsx)(n.code,{children:"/health"})," endpoint of RPC on ",(0,s.jsx)(n.a,{href:"/docs/node/requirements#ports",children:"port"})," 4230."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'curl -w "\\n" localhost:4230/health\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If successful, you should get the response ",(0,s.jsx)(n.code,{children:"running and staked"}),", as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"running and staked\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you get an error, then it means that your node is not healthy."}),"\n",(0,s.jsx)(n.h2,{id:"json-rpc-health-check",children:"JSON-RPC Health check"}),"\n",(0,s.jsxs)(n.p,{children:["We'll send a request to the JSON RPC ",(0,s.jsx)(n.code,{children:"flk_ping"})," method. Execute the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n    "jsonrpc": "2.0",\n    "method": "flk_ping",\n    "params": [],\n    "id": 1\n  }\' localhost:4230/rpc/v0\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If the request is successful, you should get the result ",(0,s.jsx)(n.code,{children:"pong"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'{\n  "jsonrpc": "2.0",\n  "result": "pong",\n  "id": 1\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Any other response, such as errors determine that the node is not healthy."}),"\n",(0,s.jsx)(c.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3872:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var s=t(5893);const a=e=>{let{image:n,name:t,title:a,url:c,communityMember:i=!1}=e;return(0,s.jsx)("section",{className:"author_card",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"avatar",children:(0,s.jsx)("a",{href:c,target:"_blank",alt:t,children:(0,s.jsx)("img",{src:n,alt:t})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"name",children:(0,s.jsx)("a",{href:c,target:"_blank",alt:t,children:t})}),(0,s.jsx)("span",{className:"title",children:a}),(0,s.jsxs)("span",{className:"discord",children:[i?"Join our community on":"Got questions? Find us on"," ",(0,s.jsx)("a",{href:"https://discord.gg/fleekxyz",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(7294);const a={},c=s.createContext(a);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);