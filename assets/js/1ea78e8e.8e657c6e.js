"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[9622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(1026),l=n(3872),s=n(2915);const i={template:"post",draft:!1,hide_title:!0,title:"How to install Rust and the dependencies for Ursa CLI",slug:"fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli",image:"./assets/fleek-network-dependencies-for-ursa-cli.png?202212071243",date:new Date("2022-12-06T23:00:00.000Z"),canonical:"",description:"A Rust installation walkthrough to help compile and run Ursa CLI",category:"Tutorial",tags:["CDN","Guide","Getting Started","Fleek Network","Rust dependencies"]},u=void 0,p={unversionedId:"Network nodes/fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli",id:"Network nodes/fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli",title:"How to install Rust and the dependencies for Ursa CLI",description:"A Rust installation walkthrough to help compile and run Ursa CLI",source:"@site/guides/Network nodes/fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli.md",sourceDirName:"Network nodes",slug:"/Network nodes/fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli",permalink:"/guides/Network nodes/fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Network nodes/fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli.md",tags:[{label:"CDN",permalink:"/guides/tags/cdn"},{label:"Guide",permalink:"/guides/tags/guide"},{label:"Getting Started",permalink:"/guides/tags/getting-started"},{label:"Fleek Network",permalink:"/guides/tags/fleek-network"},{label:"Rust dependencies",permalink:"/guides/tags/rust-dependencies"}],version:"current",lastUpdatedAt:1683108601,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"How to install Rust and the dependencies for Ursa CLI",slug:"fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli",image:"./assets/fleek-network-dependencies-for-ursa-cli.png?202212071243",date:"2022-12-06T23:00:00.000Z",canonical:"",description:"A Rust installation walkthrough to help compile and run Ursa CLI",category:"Tutorial",tags:["CDN","Guide","Getting Started","Fleek Network","Rust dependencies"]},sidebar:"defaultSidebar",previous:{title:"How to install a node easily with the assisted installer",permalink:"/guides/Network nodes/how-to-install-a-node-easily-with-the-assisted-installer"},next:{title:"How to migrate to Ursa proxy from NGINX",permalink:"/guides/Network nodes/how-to-migrate-to-ursa-proxy-from-nginx"}},c={image:n(4128).Z},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Rust with Rustup tool",id:"install-rust-with-rustup-tool",level:2},{value:"Ursa installer rust dependencies",id:"ursa-installer-rust-dependencies",level:2},{value:"Dependencies by operating system",id:"dependencies-by-operating-system",level:2},{value:"MacOS dependencies",id:"macos-dependencies",level:2},{value:"Linux Ubuntu dependencies",id:"linux-ubuntu-dependencies",level:2},{value:"Windows subsystem linux",id:"windows-subsystem-linux",level:2},{value:"Installing Ursa CLI",id:"installing-ursa-cli",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Failed to run custom build command for X?",id:"failed-to-run-custom-build-command-for-x",level:3},{value:"Don&#39;t have cmake, clang, library X installed?",id:"dont-have-cmake-clang-library-x-installed",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:d};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4128).Z,width:"1200",height:"628"})),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The following guide \ud83c\udf93 will walk through the Rust and dependencies installation process for Linux, macOS and Windows WSL: for the Linux guides we'll use Ubuntu as an example. If you're on windows, we recommend to setup ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"Windows Subsystem Linux")," or ",(0,o.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#1-overview"},"Ubuntu tutorial")," and picking a popular distro like Ubuntu. The WSL will let you use Linux applications, utilities and bash command tools you'll find in the tutorial."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow the guide, you will need the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Familiarity with the command-line interface"),(0,o.kt)("li",{parentName:"ul"},"Git")),(0,o.kt)("p",null,"You're required to have some experience with the command-line interface \ud83d\ude3f and have Git installed; Also, you should be happy to troubleshoot, since versions might differ from the time of writing and reading. Most times, a simple web search provides the best answers \ud83d\ude4f!"),(0,o.kt)("p",null,"If you don't have Git installed, learn more about it and the instructions by reading the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2"},"Git documentation"),"."),(0,o.kt)(r.ZP,{mdxType:"CheckoutCommitWarning"}),(0,o.kt)("h2",{id:"install-rust-with-rustup-tool"},"Install Rust with Rustup tool"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust website")," getting started guide, to find, copy and run the ",(0,o.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"Rustup tool")," for installation and version management."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://curl.se/"},"curl")," is an application that is generally available in most OS, if missing install it. Find more ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/"},"here"),".")),(0,o.kt)("p",null,"Alternatively, if you have installed Rust in the past, you may want to update it \ud83d\udc4c."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rustup update\n")),(0,o.kt)("p",null,"During the installation process, if asked about preferences, select the default option!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"You can uninstall at any time with rustup self uninstall and\nthese changes will be reverted.\n\nCurrent installation options:\n\n\n   default host triple: x86_64-unknown-linux-gnu\n     default toolchain: stable (default)\n               profile: default\n  modify PATH variable: yes\n\n1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Once complete \ud83d\udc4d, you'll have to restart your current shell or reload the \"PATH\" environment variable to include Cargo's bin directory ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.cargo/bin"),'. This is required to let you use "cargo" command globally.')),(0,o.kt)("p",null,"To configure your current shell, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'source "$HOME/.cargo/env"\n')),(0,o.kt)("p",null,"From then on, the latest version of Cargo (Rust's build and package manager tool) should be installed. Learn more about Cargo, ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/index.html"},"here"),"."),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," to confirm's working correctly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo --version\n")),(0,o.kt)("p",null,"Here's the output we got (beware that our version might differ to yours, it's expected \ud83d\ude05)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo 1.65.0 (4bc8f24d3 2022-10-20)\n")),(0,o.kt)("h2",{id:"ursa-installer-rust-dependencies"},"Ursa installer rust dependencies"),(0,o.kt)("p",null,"Rustup subcommands deal with ",(0,o.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/concepts/toolchains.html"},"toolchains"),", a collection of programs required to compile a Rust application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rustup toolchain list\n")),(0,o.kt)("p",null,"For example, on Linux Ubuntu we generally have it set to the default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"stable-x86_64-unknown-linux-gnu (default)\n")),(0,o.kt)("p",null,"While on macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"stable-x86_64-apple-darwin (default)\n")),(0,o.kt)("p",null,"Make sure you have Rustup set to the desired toolchain as default if required \ud83d\udc81\u200d\u2640\ufe0f!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rustup default <TOOLCHAIN-LIST-NAME>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rust compillation are long and compiler caching can help speed things up immensively. The Ursa CLI project can use to reduce the perceived compilation times down.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/crate/sccache/latest"},"Sccache")," is a ccache-like compiler caching tool. It is used as a compiler wrapper and avoids compilation when possible. This is optional, but recommended!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install sccache\n")),(0,o.kt)("h2",{id:"dependencies-by-operating-system"},"Dependencies by operating system"),(0,o.kt)("p",null,"Find the most common steps to have all the required dependencies (packages, libraries, etc) for Linux, macOS and Windows WSL. As mentioned earlier, the Linux guides use Ubuntu as an example but should give you a good reference for your distro."),(0,o.kt)("h2",{id:"macos-dependencies"},"MacOS dependencies"),(0,o.kt)("p",null,"Installing the latest version of Xcode Command Line Tools should be enough to build Ursa. Ursa does not require  ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/xcode"},"XCode"),", but ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/xcode"},"XCode")," compiles software and for that reason installs most of the required packages via the Xcode Command Line Tools."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Clang may already be installed on your macOS. To verify that it is, open a terminal and run the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"clang --version\n")),(0,o.kt)("p",null,"If Clang isn't installed, enter the following command to install it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"xcode-select --install\n")),(0,o.kt)("p",null,"To verify that is installed, execute the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"clang --version\n")),(0,o.kt)("p",null,"Here's the output we got (versions might differ from the time of writing and reading, so don't panic \ud83d\ude05)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Apple clang version 13.0.0 (clang-1300.0.27.3)\nTarget: x86_64-apple-darwin21.1.0\nThread model: posix\nInstalledDir: /Library/Developer/CommandLineTools/usr/bin\n")),(0,o.kt)("p",null,"Install the ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"Protocol Buffer Compiler"),", here's an example that uses ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew package manager"),", if you don't have homebrew learn about it ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"here"),". Alternatively, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"Protocol Buffer Compiler")," for other installation options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install protobuf\n")),(0,o.kt)("p",null,"Ensure the compiler version is 3+"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"protoc --version\n")),(0,o.kt)("h2",{id:"linux-ubuntu-dependencies"},"Linux Ubuntu dependencies"),(0,o.kt)("p",null,"On Linux Ubuntu (our choice as the Linux distro example), start by updating the package information in the source list and then upgrade all the installed packages with the latest versions (\u26a0\ufe0f do the equivalent for your Linux distro), as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\nsudo apt-get upgrade\n")),(0,o.kt)("p",null,"\ud83d\udca1 You can optionally pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," flag to skip any user prompts e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt-get update -y")," to any remaining apt-get commands."),(0,o.kt)("p",null,"Install the build-essentials packages, necessary for compiling general software and for our use-case Ursa CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install build-essential\n")),(0,o.kt)("p",null,"Followed by the required tools required to compile the application (",(0,o.kt)("a",{parentName:"p",href:"https://cmake.org/"},"cmake"),", ",(0,o.kt)("a",{parentName:"p",href:"https://clang.llvm.org/"},"clang"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/wiki/Software/pkg-config/"},"pkg-config")," and ",(0,o.kt)("a",{parentName:"p",href:"https://packages.debian.org/sid/libssl-dev"},"libssl-dev "),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install cmake clang pkg-config libssl-dev\n")),(0,o.kt)("p",null,"Now install the ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"Protobufer Compiler"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install protobuf-compiler\n")),(0,o.kt)("p",null,"Ensure the compiler version is 3+"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"protoc --version\n")),(0,o.kt)("h2",{id:"windows-subsystem-linux"},"Windows subsystem linux"),(0,o.kt)("p",null,"The instructions in ",(0,o.kt)("a",{parentName:"p",href:"#linux-ubuntu-dependencies-for-building-ursa"},"Linux Ubuntu dependencies for building Ursa")," apply to WSL users. Check them out!"),(0,o.kt)("p",null,"Once available, run Bash shell instead of Windows powershell \ud83e\udd74."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Bash on Ubuntu on Windows\n")),(0,o.kt)("p",null,"Alternatively, try ",(0,o.kt)("a",{parentName:"p",href:"https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-gb&gl=gb"},"Windows Terminal")," and open a WSL Ubuntu terminal window."),(0,o.kt)("p",null,"Generally, users report issues with commands not being found. \ud83e\uddd0 To avoid frustration verify that your system PATH environment variable is setup correctly and includes all the necessary paths (e.g. the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/commands/cargo-install.html"},"Cargo binary directory"),"). Use the ",(0,o.kt)("a",{parentName:"p",href:"#install-rust-with-rustup-tool"},"Install Rust with Rustup tool"),", if too difficult for you at this time, you might want to use our ",(0,o.kt)("a",{parentName:"p",href:"fleek-network-running-a-node-in-a-docker-container"},"Docker solution"),", which is simpler."),(0,o.kt)("h2",{id:"installing-ursa-cli"},"Installing Ursa CLI"),(0,o.kt)("p",null,"If you haven't already \ud83d\ude44, clone the Fleek Network's Ursa repository to your machine."),(0,o.kt)(s.ZP,{mdxType:"GitCloneOptions"}),(0,o.kt)("p",null,"\ud83d\udca1 Optionally, you can pass a directory name at the end of the commands (as the last argument), otherwise defaults to the repository name and for our case the name is ",(0,o.kt)("inlineCode",{parentName:"p"},"ursa"),". Note that you don't have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"<")," or ",(0,o.kt)("inlineCode",{parentName:"p"},">")," when naming, it's just illustrative."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/fleek-network/ursa.git <DIRECTORY-NAME>\n")),(0,o.kt)("p",null,"When git clone completes \ud83d\udc4d, ",(0,o.kt)("inlineCode",{parentName:"p"},"change directory")," to the project directory e.g. we cloned to the default name ",(0,o.kt)("inlineCode",{parentName:"p"},"ursa"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ursa\n")),(0,o.kt)("p",null,"If you list (",(0,o.kt)("inlineCode",{parentName:"p"},"ls"),") the files in the directory, it should be similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},".\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 crates\n\u251c\u2500\u2500 infra\n\u251c\u2500\u2500 rust-toolchain.toml\n\u2514\u2500\u2500 specs\n")),(0,o.kt)("p",null,"At this point, you should be able to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," command successfully."),(0,o.kt)("p",null,"\ud83d\ude44 If you already had Rust installed, or the project before, and skipped instructions directly here, there might be case where you get errors. So, make sure to clear your work directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo clean\ncargo update\n")),(0,o.kt)("p",null,"Start the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," process by running the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make install\n")),(0,o.kt)("p",null,"The installation process can take some time \ud83e\udd71, as it compiles the application binary for us. This is where ",(0,o.kt)("a",{parentName:"p",href:"#ursa-rust-dependencies"},"sccache")," is useful!"),(0,o.kt)("p",null,"\ud83c\udf08 Here's the output when successful!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"    Finished release [optimized] target(s) in 11m 22s\n  Installing /root/.cargo/bin/ursa\n   Installed package `ursa v0.1.0 (/temp/ursa/crates/ursa)` (executable `ursa`)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Once Rust generates the binary you can find it in the Cargo bin directory.\nOn mac and linux, this is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.cargo/bin")," and on Windows ",(0,o.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%\\.cargo\\bin"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"ursa")," is not available as a command, it's very likely that you need to add the Cargo bin directory to your operating system ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable. \ud83e\udd28 There are plenty of articles explaining how to do it in most operating systems, a matter of using a web search engine.")),(0,o.kt)("p",null,"Run the ursa ",(0,o.kt)("inlineCode",{parentName:"p"},"help")," command as a checkup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ursa 0.1.0\nCLI options\n\nUSAGE:\n    ursa [FLAGS] [OPTIONS] [SUBCOMMAND]\n\nFLAGS:\n    -h, --help       Prints help information\n    -r, --rpc        Allow rpc to be active or not (default = true)\n    -V, --version    Prints version information\n\nOPTIONS:\n    -c, --config <config>        A toml file containing relevant configurations\n    -r, --rpc-port <rpc-port>    Port used for JSON-RPC communication\n\nSUBCOMMANDS:\n    help    Prints this message or the help of the given subcommand(s)\n    rpc     run rpc commands from cli\n")),(0,o.kt)("p",null,"\u26a0\ufe0f Beware that your output might differ a bit, as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa"},"Ursa"),' is in constant development. Note that you\'ll have to "re-install" every time you want to pull updates from the source repository, as the update at the time of writing is done manually and not automatically.'),(0,o.kt)("p",null,"Great \ud83d\udc4c ! You have successfully installed all the required packages, libraries and have compiled and installed Ursa."),(0,o.kt)("p",null,"To learn more about Fleek Network and Ursa, check our ",(0,o.kt)("a",{parentName:"p",href:"fleek-network-getting-started-guide"},"Getting started guide"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"\ud83d\ude08 Applications are constantly updated, and guides can hardly keep up with all the updates, thus being able to do a simple web search can take you a long way..."),(0,o.kt)("h3",{id:"failed-to-run-custom-build-command-for-x"},"Failed to run custom build command for X?"),(0,o.kt)("p",null,"Operating systems are highly customizable and you might be missing some dependencies not described in the guide. An easy way around this is to copy the error message and do a web search to find solutions. E.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"error: failed to run custom build command for librocksdb-sys v6.20.3"),", you'd copy the error message, maybe remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"v6.20.3")," and do a web search. Information is out there, let's use it!"),(0,o.kt)("h3",{id:"dont-have-cmake-clang-library-x-installed"},"Don't have cmake, clang, library X installed?"),(0,o.kt)("p",null,"Follow the guide for your operating system in the ",(0,o.kt)("a",{parentName:"p",href:"#ursa-rust-dependencies"},"Ursa rust dependencies")," topic. It should help most use cases, but depending on how your operating system is set up, you might need to troubleshoot to find what the missing package is and understand how to install the missing package by copying the error and doing a web search."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"A Fleek Network node can be built and run on your local machine."),(0,o.kt)("p",null,"The project is built with Rust, a general-purpose programming language, to have it installed on a machine there are some packages and libraries that are required."),(0,o.kt)("p",null,"We have guided you \ud83e\uddae through the Rust installation process in macOS, Linux Ubuntu and Windows (Windows Subsystem Linx), OS tools to help the Rust toolchain do the compilation and installation work; and also suggest some tips to help troubleshoot."),(0,o.kt)("p",null,"While we do our best to provide the clearest instructions, there's always space for improvement \ud83d\ude4f, therefore feel free to make any contributions by messaging us on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"Discord")," or by opening a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network"},"PR")," in any of our repositories."),(0,o.kt)("p",null,"Discover more about the project by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa"},"watching/contributing on Github"),", following us on ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for all the best updates!"),(0,o.kt)(l.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}m.isMDXComponent=!0},1026:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={toc:[]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83e\udd16 As Fleek Network's repositories are in constant development and change, you should consider that the following guide was ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-checkout"},"checked in")," to commit ",(0,o.kt)("inlineCode",{parentName:"p"},"5a33b7"),". While we try our best to update documentation and guides during development, there might be breaking changes that might take some time to reflect in our docs. To avoid disappointment, feel free to check into commit ",(0,o.kt)("inlineCode",{parentName:"p"},"5a33b7")," or contribute by getting in touch with us, or sending a PR in the relevant context. Learn how to checkout a commit in our repository history ",(0,o.kt)("a",{parentName:"p",href:"../../reference/Git/how-to-checkout-a-commit-in-project-history"},"here")," \ud83d\ude4f.")))}l.isMDXComponent=!0},2915:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={toc:[]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You have several ways of doing this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clone via HTTPS"),(0,o.kt)("li",{parentName:"ul"},"Clone via SSH"),(0,o.kt)("li",{parentName:"ul"},"Download via Github CLI"),(0,o.kt)("li",{parentName:"ul"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/fleek-network/ursa/archive/refs/heads/main.zip"},"zip package")," from the repository")),(0,o.kt)("p",null,"We recommend HTTPS because it is the easiest to set up on the wild, and by users who are new to all this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/fleek-network/ursa.git\n")),(0,o.kt)("p",null,"Although, we strongly recommend using an SSH connection when interacting with GitHub. If you are to this and are interested read more about it ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:fleek-network/ursa.git\n")))}l.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const o=e=>{let{image:t,name:n,title:o,url:r}=e;return a.createElement("section",{className:"author_card"},a.createElement("div",null,a.createElement("span",{className:"avatar"},a.createElement("a",{href:r,target:"_blank",alt:n},a.createElement("img",{src:t,alt:n}))),a.createElement("div",null,a.createElement("span",{className:"name"},a.createElement("a",{href:r,target:"_blank",alt:n},n)),a.createElement("span",{className:"title"},o),a.createElement("span",{className:"discord"},"Got questions? Find us on ",a.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"Discord!")))))}},4128:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-dependencies-for-ursa-cli-5b835e476f40d067bc4ddedef75f8af2.png"}}]);