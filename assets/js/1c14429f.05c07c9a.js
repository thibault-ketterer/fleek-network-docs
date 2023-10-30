"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var o=n(7462),a=(n(7294),n(3905)),r=n(3872),i=n(2915);const l={template:"post",draft:!1,hide_title:!0,title:"Getting Started",slug:"getting-started",date:new Date("2023-08-31T23:00:00.000Z"),image:"./assets/getting-started.png?202311181211",canonical:"",description:"A first look at what Fleek Network is, why it's important, and a simple tutorial of running and interacting with a node on your local machine!",category:"Tutorial",tags:["Edge computing","Guide","Getting Started"]},s=void 0,d={unversionedId:"Node Operators/getting-started-guide",id:"Node Operators/getting-started-guide",title:"Getting Started",description:"A first look at what Fleek Network is, why it's important, and a simple tutorial of running and interacting with a node on your local machine!",source:"@site/guides/Node Operators/getting-started-guide.md",sourceDirName:"Node Operators",slug:"/Node Operators/getting-started",permalink:"/guides/Node Operators/getting-started",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Node Operators/getting-started-guide.md",tags:[{label:"Edge computing",permalink:"/guides/tags/edge-computing"},{label:"Guide",permalink:"/guides/tags/guide"},{label:"Getting Started",permalink:"/guides/tags/getting-started"}],version:"current",lastUpdatedAt:1698404817,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"Getting Started",slug:"getting-started",date:"2023-08-31T23:00:00.000Z",image:"./assets/getting-started.png?202311181211",canonical:"",description:"A first look at what Fleek Network is, why it's important, and a simple tutorial of running and interacting with a node on your local machine!",category:"Tutorial",tags:["Edge computing","Guide","Getting Started"]},sidebar:"defaultSidebar",previous:{title:"About guides",permalink:"/guides/"},next:{title:"Managing the keystore",permalink:"/guides/Node Operators/managing-the-keystore"}},c={image:n(7860).Z},u=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Need a quick Fleek Network TL;DR?",id:"need-a-quick-fleek-network-tldr",level:2},{value:"Why is Fleek Network needed?",id:"why-is-fleek-network-needed",level:2},{value:"How Does Fleek Network Work?",id:"how-does-fleek-network-work",level:2},{value:"Running a Node",id:"running-a-node",level:2},{value:"Clone the source code",id:"clone-the-source-code",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Build",id:"build",level:3},{value:"Node Launch",id:"node-launch",level:3},{value:"Health check",id:"health-check",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},h="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(h,(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Getting started guide",src:n(7860).Z,width:"1450",height:"816"})),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"For this guide, we\u2019ll have a simple look into how Fleek Network works in its current development phase and briefly share some of the core concepts like spinning up a node."),(0,a.kt)("p",null,"For those seeking advanced knowledge:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read our ",(0,a.kt)("a",{parentName:"li",href:"/docs/whitepaper"},"whitepaper"),"."),(0,a.kt)("li",{parentName:"ul"},"Check out ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/fleek-network/lightning"},"our open-source code"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you find any typos in our documentation, feel free to ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"provide us feedback")," or contribute by opening a PR in our repository ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/fleek-network-docs/"},"here"),".")),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"To follow the guide, you will need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Familiarity with the command-line interface"),(0,a.kt)("li",{parentName:"ul"},"Git")),(0,a.kt)("h2",{id:"need-a-quick-fleek-network-tldr"},"Need a quick Fleek Network TL;DR?"),(0,a.kt)("p",null,"Fleek Network is an open-source edge computing platform to accelerate the development and execution of the next generation of web services."),(0,a.kt)("p",null,"The system is built on a distributed network of nodes, where services run within a fair and incentivized ecosystem constituted by an open community of developers and operators. It relies on blockchain technology at its core, allowing governance and token rewards as incentives for participation in serving the network."),(0,a.kt)("p",null,"Made by an open community that's free to operate nodes or build services without the need for approvals, permissions, or intermediaries. Or simply, consume Fleek Network resources on demand, from anywhere, provided by services running on the edge."),(0,a.kt)("p",null,"Applications, platforms and protocols build and utilize decentralized services on the Fleek Network to optimize performance and reduce dependency on typical centralized cloud providers and corporate infrastructure."),(0,a.kt)("p",null,"Developers can build faster and launch better products by offloading parts of the development stack to the edge to focus on core features for the value proposition of the services being developed."),(0,a.kt)("p",null,"To get started, install a Network Node in a ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/requirements"},"supported")," Linux server, such as Debian or Ubuntu (latest) by utilizing our simple ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install#assisted-installer"},"assisted installer")," to help onboard as quickly as possible."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Our network is open to everyone, so you're more than welcome to join us anytime without any restrictions, permission or formalities. We'd be happy to have you as part of our community!")),(0,a.kt)("p",null,"Once connected to the server, open a terminal window and execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://get.fleek.network | bash\n")),(0,a.kt)("p",null,"Follow the install assistant recommendations to have the node ready without hassle and as quickly as possible."),(0,a.kt)("h2",{id:"why-is-fleek-network-needed"},"Why is Fleek Network needed?"),(0,a.kt)("p",null,"Web3 products typically rely on centralized cloud infrastructure, which is vulnerable to attacks as computation and data can be easily manipulated to suit business goals. However, blockchain technology has paved the way for a new era of decentralized cloud computing and data storage. The Fleek Network offers a sustainable alternative to traditional centralized architectures, providing a secure, transparent, and accessible decentralized edge computing future for everyone."),(0,a.kt)("h2",{id:"how-does-fleek-network-work"},"How Does Fleek Network Work?"),(0,a.kt)("p",null,"When a client requests a service, the protocol determines the best route to the nodes where the service replicas and workload are allocated."),(0,a.kt)("p",null,"Once the computation is successful, the data streaming routes to the client. On-client request fulfillment, a proof of delivery is generated containing cryptographically secured metadata about the original request, any parts involved and the resources consumed."),(0,a.kt)("p",null,"The Delivery Acknowledgements are stored locally in the participating node memory pools, rolled up to the protocol consensus consistently throughout the Epoch. This agreement is formed by a random committee of any healthy Nodes that use the information provided to reward the Nodes fairly."),(0,a.kt)("h2",{id:"running-a-node"},"Running a Node"),(0,a.kt)("p",null,"A Fleek Network node can be built and run on your machine. It\u2019s an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning"},"open-source project")," and is open for contributions."),(0,a.kt)("p",null,"The project is written with Rust, a general-purpose programming language that you need to have installed in advance to be able to follow the current guide."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To set up Rust, packages and library dependencies can be tricky. The quickest is to visit the ",(0,a.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup.rs"),". Alternatively, if you haven't already, the build section has a ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install#manual-installation"},"manual installation")," document to help.")),(0,a.kt)("h3",{id:"clone-the-source-code"},"Clone the source code"),(0,a.kt)("p",null,"We\u2019ll clone the repository locally, build it and interact with the node through the binary or the HTTP JSON-RPC API with a client like cURL, but you can use a GUI (Postman, Insomnia, amongst others) if you prefer."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ~/fleek-network/lightning or $HOME/fleek-network/lightning directory is the default or recommended location to store the repository. If you like to follow conventions, then is best to stick with the recommendation, to avoid confusion and make it easier to follow our documentation.")),(0,a.kt)("p",null,"Start by cloning the repository located at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning"},"https://github.com/fleek-network/lightning")),(0,a.kt)(i.ZP,{mdxType:"GitCloneOptions"}),(0,a.kt)("p",null,"Once the git clone completes, you\u2019ll have the latest version at the time of cloning. You should use git to fetch or pull the latest versions consequently."),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"Install the required dependencies necessary for compiling general software and for our use-case Lightning CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install \\\n    build-essential \\\n    clang \\\n    pkg-config \\\n    libssl-dev \\\n    gcc-multilib \\\n    protobuf-compiler\n")),(0,a.kt)("h3",{id:"build"},"Build"),(0,a.kt)("p",null,"Start by changing the directory to the project directory where the source code is stored. If you have followed the recommended location that'll be ",(0,a.kt)("inlineCode",{parentName:"p"},"~/fleek-network/lightning"),", as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/fleek-network/lightning\n")),(0,a.kt)("p",null,"Run the Rust package manager clean and update commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo clean\ncargo update\n")),(0,a.kt)("p",null,"Next, execute the build command to compile the Fleek Network Lightning CLI binary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo +stable build --release\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The build command uses the Rust compiler, which might take a while depending on how speedy the host machine is capable.")),(0,a.kt)("p",null,"Once the Rust compiler completes, the generated binary will be available in the source code project directory. If you stick with the default, that'll look like ",(0,a.kt)("inlineCode",{parentName:"p"},"~/fleek-network/lightning/target/debug/lightning-node"),"."),(0,a.kt)("p",null,"To avoid having to specify the pathname every time, create a symbolic link to keep it short. Here we'll name the process as the global ",(0,a.kt)("inlineCode",{parentName:"p"},"lgtn"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo ln -s "~/fleek-network/lightning/target/debug/lightning-node" /usr/local/bin/lgtn\n')),(0,a.kt)("p",null,"Run the CLI with the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," to confirm it's available globally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lgtn --version\n")),(0,a.kt)("p",null,"The output should look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Usage: lgtn [OPTIONS] <COMMAND>\n\nCommands:\n  run             Start the node\n  keys            Handle keys\n  print-config    Print the loaded configuration\n  dev-init-only   Initialize the node without starting it\n  dev-dump-graph  Dump the infusion graph of the node instance\n  help            Print this message or the help of the given subcommand(s)\n\nOptions:\n  -c, --config <CONFIG>      Path to the toml configuration file [default: ~/.lightning/config.toml]\n      --with-mock-consensus  Determines that we should be using the mock consensus backend\n  -v...                      Increases the level of verbosity (the max level is -vvv)\n      --log-location         Print code location on console logs\n  -h, --help                 Print help\n  -V, --version              Print version\n")),(0,a.kt)("h3",{id:"node-launch"},"Node Launch"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"#build"},"building"),", the node can be launched by running the subcommand ",(0,a.kt)("inlineCode",{parentName:"p"},"run"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lgtn run\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It's highly recommend to use systemd to manage the Fleek Network service for node operators. Systemd is a system and service manager for Linux operating systems that provides a consistent way to manage system services across various distributions.")),(0,a.kt)("p",null,"Learn how to create a new Systemd service in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install#manual-installation"},"manual installation")," document."),(0,a.kt)("h3",{id:"health-check"},"Health check"),(0,a.kt)("p",null,"It's important for Node operators to regularly check on the health of their resources to make sure everything is running smoothly. By doing this, they can get helpful feedback and know for sure if their Node is up and running. Some experienced node operators even automate this process using cronjobs and get reports sent to them via email or other custom methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl -w "\\n" localhost:4230/health\n')),(0,a.kt)("p",null,"If everything goes well, the response should be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"OK\n")),(0,a.kt)("p",null,"Alternatively, use the JSON-RPC method ",(0,a.kt)("inlineCode",{parentName:"p"},"flk_ping"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl -s \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n        "jsonrpc": "2.0",\n        "method": "flk_ping",\n        "params": [],\n        "id": 1\n        }\' \\\n    localhost:4230/rpc/v0\n')),(0,a.kt)("p",null,"Which response should return the key ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," with value ",(0,a.kt)("inlineCode",{parentName:"p"},"pong"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'{\n    "jsonrpc": "2.0",\n    "result": "pong",\n    "id": 1\n}\n')),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"While you can run the Network Node as described here, it's required to set up the Network Node correctly and securely! It requires some degree of patience, knowledge and time to go through our guides, but we'll provide some guides and references to help you manage your network node server!"),(0,a.kt)("p",null,"To avoid having to go through all the steps manually, we recommend reading our ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install#assisted-installer"},"assisted installer")," document for quick onboarding."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We introduced Fleek Network as an open-source edge computing platform to help us accelerate the development and execution of the next generation of web services."),(0,a.kt)("p",null,"We have learned a bit about the importance of a decentralized edge computing network to reach and fulfill the future of computation and how the Fleek Network protocol works succinctly."),(0,a.kt)("p",null,"Furthermore, we guide you through a step-by-step installation of the network node process, where we pull the source code, build the binary and launch the service."),(0,a.kt)("p",null,"Finally, we do a quick health check to confirm the status of our node."),(0,a.kt)("p",null,"Discover more about the project by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning"},"watching/contributing on GitHub"),", following us on ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for any updates."),(0,a.kt)(r.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}m.isMDXComponent=!0},2915:(e,t,n)=>{n.d(t,{ZP:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You have several ways of doing this:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Clone via HTTPS"),(0,a.kt)("li",{parentName:"ul"},"Clone via SSH"),(0,a.kt)("li",{parentName:"ul"},"Download via Github CLI"),(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/fleek-network/lightning/archive/refs/heads/main.zip"},"zip package")," from the repository")),(0,a.kt)("p",{parentName:"admonition"},"We recommend HTTPS because it is the easiest to set up in the wild, and by users who are new to all this.\nAlthough, we strongly recommend using an SSH connection when interacting with GitHub. If you are to this and are interested read more about it ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh"},"here"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b testnet-alpha-1 https://github.com/fleek-network/lightning.git <DIRECTORY-NAME>\n")),(0,a.kt)("p",{parentName:"admonition"},"At time of writing, we are checking the branch name ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet-alpha-1")," that corresponds to the testnet phase.\nHere's an example of what it'd look like when sticking to the recommended path location:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b testnet-alpha-1 https://github.com/fleek-network/lightning.git ~/fleek-network/lightning\n"))))}l.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7294);const a=e=>{let{image:t,name:n,title:a,url:r,communityMember:i=!1}=e;return o.createElement("section",{className:"author_card"},o.createElement("div",null,o.createElement("span",{className:"avatar"},o.createElement("a",{href:r,target:"_blank",alt:n},o.createElement("img",{src:t,alt:n}))),o.createElement("div",null,o.createElement("span",{className:"name"},o.createElement("a",{href:r,target:"_blank",alt:n},n)),o.createElement("span",{className:"title"},a),o.createElement("span",{className:"discord"},i?"Join our community on":"Got questions? Find us on"," ",o.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}},7860:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/getting-started-e00548e77105d1efbb6c436314fca278.png"}}]);