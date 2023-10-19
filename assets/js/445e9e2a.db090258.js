"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[8578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),s=n(3872);const i={title:"Node secret key does not exist",slug:"node-secret-key-does-not-exist",hide_title:!0,tags:["keystore","lost keys","ownership","file permissions"]},a=void 0,l={unversionedId:"Lightning CLI/node-secret-key-does-not-exist",id:"Lightning CLI/node-secret-key-does-not-exist",title:"Node secret key does not exist",description:"Node secret key does not exist",source:"@site/references/Lightning CLI/node-secret-key-does-not-exist.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/node-secret-key-does-not-exist",permalink:"/references/Lightning CLI/node-secret-key-does-not-exist",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/node-secret-key-does-not-exist.md",tags:[{label:"keystore",permalink:"/references/tags/keystore"},{label:"lost keys",permalink:"/references/tags/lost-keys"},{label:"ownership",permalink:"/references/tags/ownership"},{label:"file permissions",permalink:"/references/tags/file-permissions"}],version:"current",lastUpdatedAt:1697737186,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{title:"Node secret key does not exist",slug:"node-secret-key-does-not-exist",hide_title:!0,tags:["keystore","lost keys","ownership","file permissions"]},sidebar:"defaultSidebar",previous:{title:"Backing up the keystore",permalink:"/references/Lightning CLI/backing-up-the-keystore"},next:{title:"Permission denied (os error 13)",permalink:"/references/Lightning CLI/permission-denied-os-error-13"}},c={},d=[{value:"Node secret key does not exist",id:"node-secret-key-does-not-exist",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"node-secret-key-does-not-exist"},"Node secret key does not exist"),(0,o.kt)("p",null,'When watching the Fleek Network Lightning service log output, you find the "Node secret key does not exist" message as follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Error: Could not start the node.\n\nCaused by:\n    Node Initialization failed: InitializationFailed(Tag<lightning_signer::Signer<lightning_node::FinalTypes> as SignerInterface>, Node secret key does not exist. Use the CLI to generate keys.)\n")),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.lightning/config.toml")," to include the full location for the PEM files. For example, let's say that it's located under ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/skywalker")," that'd look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[signer]\nconsensus_key_path = "/home/skywalker/.lightning/keystore/consensus.pem"\nnode_key_path = "/home/skywalker/.lightning/keystore/node.pem"\n')),(0,o.kt)("p",null,"To learn more about how file permissions and ownership work, you're advised to read the reference document ",(0,o.kt)("a",{parentName:"p",href:"/references/Lightning%20CLI/file-permissions-and-ownership"},"here"),"."),(0,o.kt)(s.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}u.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=e=>{let{image:t,name:n,title:o,url:s,communityMember:i=!1}=e;return r.createElement("section",{className:"author_card"},r.createElement("div",null,r.createElement("span",{className:"avatar"},r.createElement("a",{href:s,target:"_blank",alt:n},r.createElement("img",{src:t,alt:n}))),r.createElement("div",null,r.createElement("span",{className:"name"},r.createElement("a",{href:s,target:"_blank",alt:n},n)),r.createElement("span",{className:"title"},o),r.createElement("span",{className:"discord"},i?"Join our community on":"Got questions? Find us on"," ",r.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}}}]);