"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1955],{6410:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var t=s(5893),r=s(1151),a=s(3872);const l={title:"Frequently used commands for Docker setup",slug:"frequently-used-commands-for-docker-setup",hide_title:!0,tags:["commands","cli","lightning","docker"]},i=void 0,c={id:"Docker/frequently-used-commands-for-docker-setup",title:"Frequently used commands for Docker setup",description:"TL;DR",source:"@site/references/Docker/frequently-used-commands-for-docker-setup.md",sourceDirName:"Docker",slug:"/Docker/frequently-used-commands-for-docker-setup",permalink:"/references/Docker/frequently-used-commands-for-docker-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Docker/frequently-used-commands-for-docker-setup.md",tags:[{label:"commands",permalink:"/references/tags/commands"},{label:"cli",permalink:"/references/tags/cli"},{label:"lightning",permalink:"/references/tags/lightning"},{label:"docker",permalink:"/references/tags/docker"}],version:"current",lastUpdatedAt:1701449682,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"Frequently used commands for Docker setup",slug:"frequently-used-commands-for-docker-setup",hide_title:!0,tags:["commands","cli","lightning","docker"]},sidebar:"defaultSidebar",previous:{title:"Build and run in Docker",permalink:"/references/Docker/build-and-run-in-docker"},next:{title:"Uninstall Docker Setup",permalink:"/references/Docker/uninstall-docker-setup"}},d={},o=[{value:"TL;DR",id:"tldr",level:2},{value:"Systemctl Service Management",id:"systemctl-service-management",level:2},{value:"Enable",id:"enable",level:3},{value:"Disable",id:"disable",level:3},{value:"Start",id:"start",level:3},{value:"Stop",id:"stop",level:3},{value:"Restart",id:"restart",level:3},{value:"Status",id:"status",level:3},{value:"Lightning CLI via Docker",id:"lightning-cli-via-docker",level:2},{value:"Show keys for user config",id:"show-keys-for-user-config",level:3},{value:"Diagnostic tools",id:"diagnostic-tools",level:2},{value:"Extended verification health check",id:"extended-verification-health-check",level:3},{value:"Health status",id:"health-status",level:3},{value:"Node details",id:"node-details",level:3},{value:"Analyzing Logs",id:"analyzing-logs",level:2},{value:"Standard output",id:"standard-output",level:3},{value:"Standard error",id:"standard-error",level:3},{value:"Docker Container Logs",id:"docker-container-logs",level:3},{value:"Interactive Container",id:"interactive-container",level:2},{value:"Execute Bash",id:"execute-bash",level:3},{value:"Docker",id:"docker",level:2},{value:"List Containers",id:"list-containers",level:3},{value:"Start Container",id:"start-container",level:3},{value:"Stop Container",id:"stop-container",level:3},{value:"Remove Container",id:"remove-container",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,t.jsxs)(n.p,{children:["Most assisted processes are available through the ",(0,t.jsx)(n.code,{children:"get.fleek.network"})," command, where you can select to install, do a health check amongst others."]}),"\n",(0,t.jsx)(n.p,{children:"To access the menu options run the command in the shell prompt:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl https://get.fleek.network | bash\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For Native setup users read the corresponding version in the section ",(0,t.jsx)(n.a,{href:"/references/Lightning%20CLI/frequently-used-commands-for-native-setup",children:"Frequently Used Commands for Native Setup"})]})}),"\n",(0,t.jsx)(n.h2,{id:"systemctl-service-management",children:"Systemctl Service Management"}),"\n",(0,t.jsx)(n.h3,{id:"enable",children:"Enable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl enable docker-lightning\n"})}),"\n",(0,t.jsx)(n.h3,{id:"disable",children:"Disable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl enable docker-lightning\n"})}),"\n",(0,t.jsx)(n.h3,{id:"start",children:"Start"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl start docker-lightning\n"})}),"\n",(0,t.jsx)(n.h3,{id:"stop",children:"Stop"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl stop docker-lightning\n"})}),"\n",(0,t.jsx)(n.h3,{id:"restart",children:"Restart"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl restart docker-lightning\n"})}),"\n",(0,t.jsx)(n.h3,{id:"status",children:"Status"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl status docker-lightning\n"})}),"\n",(0,t.jsx)(n.h2,{id:"lightning-cli-via-docker",children:"Lightning CLI via Docker"}),"\n",(0,t.jsx)(n.h3,{id:"show-keys-for-user-config",children:"Show keys for user config"}),"\n",(0,t.jsxs)(n.p,{children:["Show the keys by running the sub-commands ",(0,t.jsx)(n.code,{children:"keys show"})," and declaring the configuration file location (in-docker pathname):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo docker exec -it lightning-node lgtn -c /home/lgtn/.lightning/config.toml keys show\n"})}),"\n",(0,t.jsx)(n.h2,{id:"diagnostic-tools",children:"Diagnostic tools"}),"\n",(0,t.jsx)(n.h3,{id:"extended-verification-health-check",children:"Extended verification health check"}),"\n",(0,t.jsx)(n.p,{children:"The command show be executed from host and not in-Docker container."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -sS https://get.fleek.network/healthcheck | bash\n"})}),"\n",(0,t.jsx)(n.h3,{id:"health-status",children:"Health status"}),"\n",(0,t.jsx)(n.p,{children:"The command show be executed from host and not in-Docker container."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'curl -w "\\n" localhost:4230/health\n'})}),"\n",(0,t.jsx)(n.h3,{id:"node-details",children:"Node details"}),"\n",(0,t.jsx)(n.p,{children:"The command show be executed from host and not in-Docker container."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -sS https://get.fleek.network/node_details | bash\n"})}),"\n",(0,t.jsx)(n.h2,{id:"analyzing-logs",children:"Analyzing Logs"}),"\n",(0,t.jsx)(n.h3,{id:"standard-output",children:"Standard output"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"tail -f /var/log/lightning/output.log\n"})}),"\n",(0,t.jsx)(n.h3,{id:"standard-error",children:"Standard error"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"tail -f /var/log/lightning/diagnostic.log\n"})}),"\n",(0,t.jsx)(n.h3,{id:"docker-container-logs",children:"Docker Container Logs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo docker logs -f lightning-node\n"})}),"\n",(0,t.jsx)(n.h2,{id:"interactive-container",children:"Interactive Container"}),"\n",(0,t.jsx)(n.h3,{id:"execute-bash",children:"Execute Bash"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo docker exec -it lightning-node bash\n"})}),"\n",(0,t.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,t.jsx)(n.h3,{id:"list-containers",children:"List Containers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo docker ps -a\n"})}),"\n",(0,t.jsx)(n.h3,{id:"start-container",children:"Start Container"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo docker start <CONTAINER ID or CONTAINER NAME>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"stop-container",children:"Stop Container"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo docker stop <CONTAINER ID or CONTAINER NAME>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"remove-container",children:"Remove Container"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo docker rm <CONTAINER ID or CONTAINER NAME>\n"})}),"\n",(0,t.jsx)(a.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3872:(e,n,s)=>{s.d(n,{Z:()=>r});s(7294);var t=s(5893);const r=e=>{let{image:n,name:s,title:r,url:a,communityMember:l=!1}=e;return(0,t.jsx)("section",{className:"author_card",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"avatar",children:(0,t.jsx)("a",{href:a,target:"_blank",alt:s,children:(0,t.jsx)("img",{src:n,alt:s})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"name",children:(0,t.jsx)("a",{href:a,target:"_blank",alt:s,children:s})}),(0,t.jsx)("span",{className:"title",children:r}),(0,t.jsxs)("span",{className:"discord",children:[l?"Join our community on":"Got questions? Find us on"," ",(0,t.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(7294);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);