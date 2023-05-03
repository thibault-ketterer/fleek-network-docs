"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,k=u["".concat(s,".").concat(c)]||u[c]||h[c]||a;return n?i.createElement(k,r(r({ref:t},d),{},{components:n})):i.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var i=n(7462),o=(n(7294),n(3905)),a=n(1026),r=n(3872);const l={template:"post",draft:!1,hide_title:!0,title:"Fleek Network: Managing the key store",slug:"fleek-network-managing-the-key-store",image:"./assets/fleek-network-managing-the-keystore.png?202301021625",date:new Date("2023-01-02T23:00:00.000Z"),canonical:"",description:"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any supported system you\u2019re migrating to.",category:"Tutorial",tags:["DCDN","Guide","Getting Started","Fleek Network","Keystore"]},s=void 0,p={unversionedId:"Network nodes/fleek-network-managing-the-key-store",id:"Network nodes/fleek-network-managing-the-key-store",title:"Fleek Network: Managing the key store",description:"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any supported system you\u2019re migrating to.",source:"@site/guides/Network nodes/fleek-network-managing-the-key-store.md",sourceDirName:"Network nodes",slug:"/Network nodes/fleek-network-managing-the-key-store",permalink:"/guides/Network nodes/fleek-network-managing-the-key-store",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Network nodes/fleek-network-managing-the-key-store.md",tags:[{label:"DCDN",permalink:"/guides/tags/dcdn"},{label:"Guide",permalink:"/guides/tags/guide"},{label:"Getting Started",permalink:"/guides/tags/getting-started"},{label:"Fleek Network",permalink:"/guides/tags/fleek-network"},{label:"Keystore",permalink:"/guides/tags/keystore"}],version:"current",lastUpdatedAt:1683108601,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"Fleek Network: Managing the key store",slug:"fleek-network-managing-the-key-store",image:"./assets/fleek-network-managing-the-keystore.png?202301021625",date:"2023-01-02T23:00:00.000Z",canonical:"",description:"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any supported system you\u2019re migrating to.",category:"Tutorial",tags:["DCDN","Guide","Getting Started","Fleek Network","Keystore"]},sidebar:"defaultSidebar",previous:{title:"How to migrate to Ursa proxy from NGINX",permalink:"/guides/Network nodes/how-to-migrate-to-ursa-proxy-from-nginx"},next:{title:"Node Health Check guide",permalink:"/guides/Network nodes/fleek-network-node-health-check-guide"}},d={image:n(9575).Z},u=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Locating the file",id:"locating-the-file",level:3},{value:"Configuration sections",id:"configuration-sections",level:3},{value:"Identity selection",id:"identity-selection",level:3},{value:"Identity",id:"identity",level:2},{value:"Type of keys",id:"type-of-keys",level:3},{value:"Key privacy",id:"key-privacy",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:u};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,i.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9575).Z,width:"2400",height:"1256"})),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Fleek Network incentivizes participation by rewarding its node providers. A node is identifiable by an identity, which the reward mechanism uses to identify the node to reward it! "),(0,o.kt)("p",null,"We'll use the term identity to describe the key store declared in the configuration file, in our case a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail"},"PEM"),". Remember to keep this file secret \ud83d\ude4f!"),(0,o.kt)("p",null,"The key store is in the file system and the location is defined in the Fleek Network\n",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml"),", as a private key stored in an identity named PEM file (by default ",(0,o.kt)("inlineCode",{parentName:"p"},"default.pem"),")."),(0,o.kt)("p",null,"This is interesting, as you may want to move to a new server setup and persist the identity you had originally from another server, let's say!"),(0,o.kt)("p",null,"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any supported system you're migrating to."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"To follow the guide, you will need the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Familiarity with the command-line interface")),(0,o.kt)(a.ZP,{mdxType:"CheckoutCommitWarning"}),(0,o.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,o.kt)("h3",{id:"locating-the-file"},"Locating the file"),(0,o.kt)("p",null,"The Ursa CLI has a configuration file in the home directory of the user, which is located in the path ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.ursa")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ursa")," under the name ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml"),". "),(0,o.kt)("p",null,"\ud83d\udca1 The Tilda in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ursa")," represents ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME")," which is simpler, but we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME")," to make it easy to follow."),(0,o.kt)("p",null,"If you log in with ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," user that'll be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/root/.ursa\n")),(0,o.kt)("p",null,"If you log in with another user, let's say ",(0,o.kt)("inlineCode",{parentName:"p"},"fleek")," this means:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/fleek/.ursa\n")),(0,o.kt)("p",null,"At any time, you can check which user you are logged in with by running the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"whoami\n")),(0,o.kt)("p",null,"Here's an example of our user ",(0,o.kt)("inlineCode",{parentName:"p"},"fleek"),", which for the command above outputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fleek\n")),(0,o.kt)("p",null,"Now that you know where to locate the configuration file for any given user you are logged in with, learn about the ",(0,o.kt)("a",{parentName:"p",href:"#configuration-sections"},"Configuration sections"),"."),(0,o.kt)("h3",{id:"configuration-sections"},"Configuration sections"),(0,o.kt)("p",null,"The Fleek Network node configuration settings are located in the path ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.ursa/config.toml"),", and it's organized by configuration sections."),(0,o.kt)("p",null,"At the time of writing, we have the following sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Network config"),(0,o.kt)("li",{parentName:"ul"},"Provider config"),(0,o.kt)("li",{parentName:"ul"},"Server config")),(0,o.kt)("p",null,"Each of the sections holds several property names and values. If you are accustomed to the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON")," or ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML")," formats, you'll find the TOML format a bit similar (if you'd like to learn more about the TOML file format, read about it ",(0,o.kt)("a",{parentName:"p",href:"https://toml.io/en/"},"here"),")."),(0,o.kt)("p",null,"By default, the Ursa CLI configuration file (config.toml) is similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'[network_config]\nmdns = false\nrelay_server = true\nautonat = true\nrelay_client = true\nbootstrapper = false\nswarm_addr = "/ip4/0.0.0.0/tcp/6009"\nbootstrap_nodes = ["/ip4/159.223.211.234/tcp/6009/p2p/xxxx", "/ip4/146.190.232.131/tcp/6009/p2p/yyyyy"]\ndatabase_path = "/root/.ursa/data/ursa_db"\nidentity = "default"\nkeystore_path = "/root/.ursa/keystore"\n\n[provider_config]\nlocal_address = "0.0.0.0"\nport = 8070\ndomain = ""\nindexer_url = "https://dev.cid.contact"\ndatabase_path = "/root/.ursa/data/index_provider_db"\n\n[server_config]\nport = 4069\naddr = "0.0.0.0"\n')),(0,o.kt)("p",null,"\u26a0\ufe0f Beware that the configuration file might look a bit different depending on the version you're running and the current development features in place by the Fleek Network dev team."),(0,o.kt)("p",null,"Some advanced use cases might require dealing with the host and port number binding, depending on the service provider's needs and customization. We'll keep things simple and assume the default settings!"),(0,o.kt)("p",null,"In this guide, we are interested in the ",(0,o.kt)("inlineCode",{parentName:"p"},"network_config")," section settings for the ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore_path")," which defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/.ursa/keystore"),"."),(0,o.kt)("p",null,"\ud83d\udca1 The identity is a text description for the Keystore and at the time of writing we have not yet implemented multiple identity management via the CLI. Thereupon, the identity value serves to find the filename match in the ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore_path"),". This might change as we progress with development. Check the ",(0,o.kt)("a",{parentName:"p",href:"#identity-selection"},"Identity selection")," to learn more about it!"),(0,o.kt)("h3",{id:"identity-selection"},"Identity selection"),(0,o.kt)("p",null,"Multiple identity management is yet to be implemented but in any case, some users might find it trivial to keep multiple identities and switch between them referencing them by name."),(0,o.kt)("p",null,"Let's suppose that we've recently moved to a new server setup and copied our previous server keystore as ",(0,o.kt)("inlineCode",{parentName:"p"},"old-server-keystore.pem")," and renamed the ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.ursa/keystore/default.pem")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"new-server-keystore.pem"),"."),(0,o.kt)("p",null,"Here's an example of how our ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.ursa/keystore")," directory would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},".\n\u251c\u2500\u2500 new-server-keystore.pem\n\u2514\u2500\u2500 old-server-keystore.pem\n\n0 directories, 2 file\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"old-server-keystore.pem")," is the original Keystore and ",(0,o.kt)("inlineCode",{parentName:"p"},"new-server-keystore.pem")," a brand new identity we got when completed setting up the node in the new system."),(0,o.kt)("p",null,"As we have our ",(0,o.kt)("inlineCode",{parentName:"p"},"network_config")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"identity")," set as ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"network_config")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore_path")," defined as ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/.ursa/keystore"),", we have to change it! We can switch to an existing identity by providing the filename before the node initialization! "),(0,o.kt)("p",null,"Set the identity name in the ",(0,o.kt)("inlineCode",{parentName:"p"},"network_config")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"identity")," to a matching PEM file that exists in the ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore_path"),". For our example, that'd be ",(0,o.kt)("inlineCode",{parentName:"p"},"new-server-keystore")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"old-server-keystore"),"."),(0,o.kt)("p",null,"\ud83d\udca1 Name the PEM files as you wish, we have used the naming above to make it as clear as possible."),(0,o.kt)("h2",{id:"identity"},"Identity"),(0,o.kt)("p",null,"When you run a node, there's a private key that is used to compute a public key that your node is identified with. "),(0,o.kt)("p",null,"If another party holds the private key, they can control the identity, e.g. have access to the rewards. For this reason, it's important to have at the very least a basic understanding of how identity works in Fleek Network."),(0,o.kt)("h3",{id:"type-of-keys"},"Type of keys"),(0,o.kt)("p",null,"There are two types of keys related to the identity your node is configured to run with, the private and public keys! "),(0,o.kt)("p",null,"\ud83d\udca1 The public-key cryptography curve used for our key store is the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EdDSA"},"ed25519")),(0,o.kt)("p",null,"The public key is open to anybody to see and it represents a unique node in the Fleek Network, a bit like a bank account number. On the other hand, the private key is secret and the operator is responsible to store it privately!"),(0,o.kt)("p",null,"The Fleek Network relies on cryptography, thus the Fleek Network team can't access, compromise or manipulate the secrets of an identity. On the other hand, the public key can be used by anyone, Fleek Network included, to identify a node or send rewards to the address without jeopardizing identity security!"),(0,o.kt)("h3",{id:"key-privacy"},"Key privacy"),(0,o.kt)("p",null,"If you don\u2019t keep your private key a secret, you have your node compromised."),(0,o.kt)("p",null,"Here are a few examples of what you should not do:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Share your ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.ursa/keystore")," directory files publicly"),(0,o.kt)("li",{parentName:"ul"},"Track the ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.ursa/keystore")," directory files in a version control repository e.g. git"),(0,o.kt)("li",{parentName:"ul"},'Have poor "rights" permissions in UNIX systems e.g. everyone can read, delete, modify ',(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.ursa"),", etc"),(0,o.kt)("li",{parentName:"ul"},"Allow anyone to access the node provider physically without any access control to the operating and file systems"),(0,o.kt)("li",{parentName:"ul"},"Get rid of a hard drive unformatted or blind erased by selling to somebody or dumping in the bin, which contains ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.ursa/keystore"))),(0,o.kt)("p",null,"There are many other ways of getting compromised, but hopefully, the ones put above give you a good starting idea!"),(0,o.kt)("p",null,"Remember, the node provider is the only one responsible when managing the key store! Neither Fleek Network nor the most sophisticated AI system presently can compromise the cryptography in use to help you out."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We've walked through most basics of where the configuration file is located, the configuration settings we use to set up and run the node, the different configuration sections we have, and most importantly the identity section."),(0,o.kt)("p",null,"Additionally, a brief guide on the ",(0,o.kt)("a",{parentName:"p",href:"#identity"},"identity"),", more specifically an introduction to the ",(0,o.kt)("a",{parentName:"p",href:"#type-of-keys"},"type of keys")," and ",(0,o.kt)("a",{parentName:"p",href:"#key-privacy"},"key privacy"),", which we find important to understand for anyone seriously interested in running a node by hinting into some system administration and security principles."),(0,o.kt)("p",null,"In the future, we'll introduce more advanced topics that will help you improve the knowledge you get from this, but we are glad that you followed this guide and got some comprehension to help you manage the key store."),(0,o.kt)("p",null,"While we do our best to provide the clearest instructions, there's always space for improvement, therefore feel free to make any contributions by messaging us on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"Discord")," or by opening a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network"},"PR")," in any of our repositories \ud83d\ude4f."),(0,o.kt)("p",null,"Discover more about the project by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa"},"watching/contributing on Github"),", following us on ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for all the best updates!"),(0,o.kt)(r.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}c.isMDXComponent=!0},1026:(e,t,n)=>{n.d(t,{ZP:()=>r});var i=n(7462),o=(n(7294),n(3905));const a={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83e\udd16 As Fleek Network's repositories are in constant development and change, you should consider that the following guide was ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-checkout"},"checked in")," to commit ",(0,o.kt)("inlineCode",{parentName:"p"},"5a33b7"),". While we try our best to update documentation and guides during development, there might be breaking changes that might take some time to reflect in our docs. To avoid disappointment, feel free to check into commit ",(0,o.kt)("inlineCode",{parentName:"p"},"5a33b7")," or contribute by getting in touch with us, or sending a PR in the relevant context. Learn how to checkout a commit in our repository history ",(0,o.kt)("a",{parentName:"p",href:"../../reference/Git/how-to-checkout-a-commit-in-project-history"},"here")," \ud83d\ude4f.")))}r.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294);const o=e=>{let{image:t,name:n,title:o,url:a}=e;return i.createElement("section",{className:"author_card"},i.createElement("div",null,i.createElement("span",{className:"avatar"},i.createElement("a",{href:a,target:"_blank",alt:n},i.createElement("img",{src:t,alt:n}))),i.createElement("div",null,i.createElement("span",{className:"name"},i.createElement("a",{href:a,target:"_blank",alt:n},n)),i.createElement("span",{className:"title"},o),i.createElement("span",{className:"discord"},"Got questions? Find us on ",i.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"Discord!")))))}},9575:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fleek-network-managing-the-keystore-aeb71d225bfb5af4261a86fffaaa0201.png"}}]);