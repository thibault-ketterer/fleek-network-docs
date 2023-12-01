"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2517],{6739:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(5893),r=n(1151),o=n(3872);const i={title:"Shutting down persistance",slug:"shutting-down-persistance",hide_title:!0,tags:["reference","shutdown","frozen","idle","service error","systemctl","systemd"]},c=void 0,l={id:"Systemd/shutting-down-persistance",title:"Shutting down persistance",description:"Systemd Service as frozen or idle",source:"@site/references/Systemd/shutting-down-persistance.md",sourceDirName:"Systemd",slug:"/Systemd/shutting-down-persistance",permalink:"/references/Systemd/shutting-down-persistance",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Systemd/shutting-down-persistance.md",tags:[{label:"reference",permalink:"/references/tags/reference"},{label:"shutdown",permalink:"/references/tags/shutdown"},{label:"frozen",permalink:"/references/tags/frozen"},{label:"idle",permalink:"/references/tags/idle"},{label:"service error",permalink:"/references/tags/service-error"},{label:"systemctl",permalink:"/references/tags/systemctl"},{label:"systemd",permalink:"/references/tags/systemd"}],version:"current",lastUpdatedAt:1701449682,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"Shutting down persistance",slug:"shutting-down-persistance",hide_title:!0,tags:["reference","shutdown","frozen","idle","service error","systemctl","systemd"]},sidebar:"defaultSidebar",previous:{title:"Service keeps running after shutdown",permalink:"/references/Systemd/service-keeps-running-after-shutdown"},next:{title:"User service",permalink:"/references/Systemd/user-service"}},a={},d=[{value:"Systemd Service as frozen or idle",id:"systemd-service-as-frozen-or-idle",level:2}];function h(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"systemd-service-as-frozen-or-idle",children:"Systemd Service as frozen or idle"}),"\n",(0,t.jsxs)(s.p,{children:["If you have a ",(0,t.jsx)(s.code,{children:"Shutting node down"})," message on the service log, the process is likely failing to respond to Systemd shut down command by failing to terminate all the child processes that were started by the service."]}),"\n",(0,t.jsx)(s.p,{children:"The logs should be similar to the following:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"2023-09-11 18:02:07 | ERROR | lightning_consensus::consensus - core/consensus/src/consensus.rs:371 - node: XsE9KtedDRUGv22MLHvy8qcc52QsWGWJYY1LBnWhglg=\n2023-09-11 18:02:07 | ERROR | lightning_consensus::consensus - core/consensus/src/consensus.rs:371 - node: zBmZaycvQsdFRfe0p5Rig/KgyYPD4yNKQTPDo7JrugM=\n2023-09-11 18:02:07 | WARN  | lightning_consensus::consensus - core/consensus/src/consensus.rs:373 - ##################\n2023-09-11 18:02:07 | WARN  | lightning_consensus::consensus - core/consensus/src/consensus.rs:374 - ********************************\nRPC server starting up\nlistening on 0.0.0.0:4230\nShutting node down.\nShutting node down.\nShutting node down.\nShutting node down.\nShutting node down.\n"})}),"\n",(0,t.jsxs)(s.p,{children:["To resolve this issue, start by executing a new ",(0,t.jsx)(s.code,{children:"shutdown"})," command as follows:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"systemctl stop lightning\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you need to delegate to root, then use the ",(0,t.jsx)(s.strong,{children:"sudo"})," keyword, as follows:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo systemctl stop lightning\n"})}),"\n",(0,t.jsx)(s.p,{children:"Once completed, clear the logs to avoid confusion as the log aggregates messages past and current."}),"\n",(0,t.jsx)(s.p,{children:"Delete all the log files (output.log and diagnostic.log) by running:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo rm -f /var/log/lightning/*.log\n"})}),"\n",(0,t.jsx)(s.p,{children:"Launch the service:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"systemctl start lightning\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you need to delegate to root, then use the ",(0,t.jsx)(s.strong,{children:"sudo"})," keyword, as follows:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo systemctl start lightning\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can watch the log output of the service by running:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"tail -f /var/log/lightning/output.log\n"})}),"\n",(0,t.jsx)(s.p,{children:"The output should be similar to:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"2023-09-12 13:53:51 | WARN  | lightning_consensus::consensus - core/consensus/src/consensus.rs:373 - ##################\n2023-09-12 13:53:51 | WARN  | lightning_consensus::consensus - core/consensus/src/consensus.rs:374 - ********************************\n"})}),"\n",(0,t.jsx)(s.p,{children:"Alternatively, you can watch the diagnostic.log"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"tail -f /var/log/lightning/diagnostic.log\n"})}),"\n",(0,t.jsx)(o.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3872:(e,s,n)=>{n.d(s,{Z:()=>r});n(7294);var t=n(5893);const r=e=>{let{image:s,name:n,title:r,url:o,communityMember:i=!1}=e;return(0,t.jsx)("section",{className:"author_card",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"avatar",children:(0,t.jsx)("a",{href:o,target:"_blank",alt:n,children:(0,t.jsx)("img",{src:s,alt:n})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"name",children:(0,t.jsx)("a",{href:o,target:"_blank",alt:n,children:n})}),(0,t.jsx)("span",{className:"title",children:r}),(0,t.jsxs)("span",{className:"discord",children:[i?"Join our community on":"Got questions? Find us on"," ",(0,t.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>i});var t=n(7294);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);