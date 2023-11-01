"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2564],{5468:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=i(5893),s=i(1151),o=i(3872);const a={title:"Lightning CLI",slug:"lightning-cli",hide_title:!0,tags:["command line interface","cli","lightning","lgtn"]},l=void 0,c={id:"node/lightning-cli",title:"Lightning CLI",description:"With the Lightning CLI, you can execute various tasks such as running the node, accessing key management utilities, and printing the loaded configuration. The interface is user-friendly and provides detailed information about each sub-command through the help command.",source:"@site/docs/node/lightning-cli.md",sourceDirName:"node",slug:"/node/lightning-cli",permalink:"/docs/node/lightning-cli",draft:!1,unlisted:!1,tags:[{label:"command line interface",permalink:"/docs/tags/command-line-interface"},{label:"cli",permalink:"/docs/tags/cli"},{label:"lightning",permalink:"/docs/tags/lightning"},{label:"lgtn",permalink:"/docs/tags/lgtn"}],version:"current",frontMatter:{title:"Lightning CLI",slug:"lightning-cli",hide_title:!0,tags:["command line interface","cli","lightning","lgtn"]},sidebar:"docs",previous:{title:"Systemd Service",permalink:"/docs/node/systemd-service"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},r={},h=[{value:"Show the Lightning CLI help",id:"show-the-lightning-cli-help",level:2},{value:"Finding help for a specific option",id:"finding-help-for-a-specific-option",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"With the Lightning CLI, you can execute various tasks such as running the node, accessing key management utilities, and printing the loaded configuration. The interface is user-friendly and provides detailed information about each sub-command through the help command."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["A quick reference of frequently used commands are available for ",(0,t.jsx)(n.a,{href:"/references/Lightning%20CLI/frequently-used-commands-for-native-setup",children:"native"})," and ",(0,t.jsx)(n.a,{href:"/references/Docker/frequently-used-commands-for-docker-setup",children:"docker"})," setups."]})}),"\n",(0,t.jsx)(n.h2,{id:"show-the-lightning-cli-help",children:"Show the Lightning CLI help"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"lgtn help\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Usage: lgtn [OPTIONS] <COMMAND>\n\nCommands:\n  run           Run the full node\n  keys          Key management utilities\n  print-config  Print the loaded configuration\n  help          Print this message or the help of the given subcommand(s)\n\nOptions:\n  -c, --config <CONFIG>      Path to the toml configuration file [default: ~/.lightning/config.toml]\n      --with-mock-consensus  Determines that we should be using the mock consensus backend\n      --with-console         Enable the Tokio Console asynchronous debugger\n      --with-log-locations   Enable code locations when printing logs\n  -v...                      Increases the level of verbosity (the max level is -vvv)\n  -h, --help                 Print help\n  -V, --version              Print version\n"})}),"\n",(0,t.jsx)(n.h2,{id:"finding-help-for-a-specific-option",children:"Finding help for a specific option"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"lgtn keys help\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Key management utilities\n\nUsage: lgtn keys [OPTIONS] <COMMAND>\n\nCommands:\n  show      Print the node's public keys\n  generate  Generate new private keys. This command will fail if the keys already exist\n  help      Print this message or the help of the given subcommand(s)\n\nOptions:\n  -c, --config <CONFIG>      Path to the toml configuration file [default: ~/.lightning/config.toml]\n      --with-mock-consensus  Determines that we should be using the mock consensus backend\n      --with-console         Enable the Tokio Console asynchronous debugger\n      --with-log-locations   Enable code locations when printing logs\n  -v...                      Increases the level of verbosity (the max level is -vvv)\n  -h, --help                 Print help\n"})}),"\n",(0,t.jsx)(o.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3872:(e,n,i)=>{i.d(n,{Z:()=>s});i(7294);var t=i(5893);const s=e=>{let{image:n,name:i,title:s,url:o,communityMember:a=!1}=e;return(0,t.jsx)("section",{className:"author_card",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"avatar",children:(0,t.jsx)("a",{href:o,target:"_blank",alt:i,children:(0,t.jsx)("img",{src:n,alt:i})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"name",children:(0,t.jsx)("a",{href:o,target:"_blank",alt:i,children:i})}),(0,t.jsx)("span",{className:"title",children:s}),(0,t.jsxs)("span",{className:"discord",children:[a?"Join our community on":"Got questions? Find us on"," ",(0,t.jsx)("a",{href:"https://discord.gg/fleekxyz",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>a});var t=i(7294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);