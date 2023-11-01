"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[8668],{1534:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var t=s(5893),l=s(1151),i=s(3872);const a={title:"Frequently used commands for Native setup",slug:"frequently-used-commands-for-native-setup",hide_title:!0,tags:["commands","cli","lightning"]},r=void 0,d={id:"Lightning CLI/frequently-used-commands-for-native-setup",title:"Frequently used commands for Native setup",description:"TL;DR",source:"@site/references/Lightning CLI/frequently-used-commands-for-native-setup.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/frequently-used-commands-for-native-setup",permalink:"/references/Lightning CLI/frequently-used-commands-for-native-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/frequently-used-commands-for-native-setup.md",tags:[{label:"commands",permalink:"/references/tags/commands"},{label:"cli",permalink:"/references/tags/cli"},{label:"lightning",permalink:"/references/tags/lightning"}],version:"current",lastUpdatedAt:1698861793,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{title:"Frequently used commands for Native setup",slug:"frequently-used-commands-for-native-setup",hide_title:!0,tags:["commands","cli","lightning"]},sidebar:"defaultSidebar",previous:{title:"File permissions and Ownership",permalink:"/references/Lightning CLI/file-permissions-and-ownership"},next:{title:"Keys not found",permalink:"/references/Lightning CLI/keys-not-found"}},c={},o=[{value:"TL;DR",id:"tldr",level:2},{value:"Systemctl Service Management",id:"systemctl-service-management",level:2},{value:"Enable",id:"enable",level:3},{value:"Disable",id:"disable",level:3},{value:"Start",id:"start",level:3},{value:"Stop",id:"stop",level:3},{value:"Restart",id:"restart",level:3},{value:"Status",id:"status",level:3},{value:"Lightning CLI",id:"lightning-cli",level:2},{value:"Show keys for user config",id:"show-keys-for-user-config",level:3},{value:"Diagnostic tools",id:"diagnostic-tools",level:2},{value:"Extended verification health check",id:"extended-verification-health-check",level:3},{value:"Health status",id:"health-status",level:3},{value:"Node details",id:"node-details",level:3},{value:"Analyzing Logs",id:"analyzing-logs",level:2},{value:"Standard output",id:"standard-output",level:3},{value:"Standard error",id:"standard-error",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,t.jsxs)(n.p,{children:["Most assisted processes are available through the ",(0,t.jsx)(n.code,{children:"get.fleek.network"})," command, where you can select to install, do a health check amongst others."]}),"\n",(0,t.jsx)(n.p,{children:"To access the menu options run the command in the shell prompt:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl https://get.fleek.network | bash\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For Docker setup users read the corresponding version in the section ",(0,t.jsx)(n.a,{href:"/references/Docker/frequently-used-commands-for-docker-setup",children:"Frequently Used Commands for Docker Setup"})]})}),"\n",(0,t.jsx)(n.h2,{id:"systemctl-service-management",children:"Systemctl Service Management"}),"\n",(0,t.jsx)(n.h3,{id:"enable",children:"Enable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl enable lightning\n"})}),"\n",(0,t.jsx)(n.h3,{id:"disable",children:"Disable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl enable lightning\n"})}),"\n",(0,t.jsx)(n.h3,{id:"start",children:"Start"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl start lightning\n"})}),"\n",(0,t.jsx)(n.h3,{id:"stop",children:"Stop"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl stop lightning\n"})}),"\n",(0,t.jsx)(n.h3,{id:"restart",children:"Restart"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl restart lightning\n"})}),"\n",(0,t.jsx)(n.h3,{id:"status",children:"Status"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl status lightning\n"})}),"\n",(0,t.jsx)(n.h2,{id:"lightning-cli",children:"Lightning CLI"}),"\n",(0,t.jsx)(n.h3,{id:"show-keys-for-user-config",children:"Show keys for user config"}),"\n",(0,t.jsxs)(n.p,{children:["Show the keys by running the sub-commands ",(0,t.jsx)(n.code,{children:"keys show"})," and declaring the configuration file location:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"lgtn -c /home/<USERNAME>/.lightning/config.toml keys show\n"})}),"\n",(0,t.jsx)(n.h2,{id:"diagnostic-tools",children:"Diagnostic tools"}),"\n",(0,t.jsx)(n.h3,{id:"extended-verification-health-check",children:"Extended verification health check"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -sS https://get.fleek.network/healthcheck | bash\n"})}),"\n",(0,t.jsx)(n.h3,{id:"health-status",children:"Health status"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'curl -w "\\n" localhost:4230/health\n'})}),"\n",(0,t.jsx)(n.h3,{id:"node-details",children:"Node details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -sS https://get.fleek.network/node_details | bash\n"})}),"\n",(0,t.jsx)(n.h2,{id:"analyzing-logs",children:"Analyzing Logs"}),"\n",(0,t.jsx)(n.h3,{id:"standard-output",children:"Standard output"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"tail -f /var/log/lightning/output.log\n"})}),"\n",(0,t.jsx)(n.h3,{id:"standard-error",children:"Standard error"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"tail -f /var/log/lightning/diagnostic.log\n"})}),"\n",(0,t.jsx)(i.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3872:(e,n,s)=>{s.d(n,{Z:()=>l});s(7294);var t=s(5893);const l=e=>{let{image:n,name:s,title:l,url:i,communityMember:a=!1}=e;return(0,t.jsx)("section",{className:"author_card",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"avatar",children:(0,t.jsx)("a",{href:i,target:"_blank",alt:s,children:(0,t.jsx)("img",{src:n,alt:s})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"name",children:(0,t.jsx)("a",{href:i,target:"_blank",alt:s,children:s})}),(0,t.jsx)("span",{className:"title",children:l}),(0,t.jsxs)("span",{className:"discord",children:[a?"Join our community on":"Got questions? Find us on"," ",(0,t.jsx)("a",{href:"https://discord.gg/fleekxyz",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var t=s(7294);const l={},i=t.createContext(l);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);