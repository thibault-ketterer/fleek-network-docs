"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(r),p=n,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),o=r(1026),i=r(3872);const s={template:"post",draft:!1,hide_title:!0,title:"How to get the latest updates for Ursa CLI from the source repository",slug:"fleek-network-how-to-get-the-latest-updates-for-ursa-cli-from-the-source-repository",image:"./assets/fleek-network-how-update-ursa-cli-from-git-repo.png?202301261543",date:new Date("2022-12-09T13:00:00.000Z"),canonical:"",description:"How to get the latest updates for Ursa CLI from the source repository",category:"Tutorial",tags:["CDN","Guide","Getting Started","Fleek Network","GIT"]},l=void 0,u={unversionedId:"Network nodes/fleek-network-how-to-get-the-latest-updates-for-ursa-cli-from-the-source-repository",id:"Network nodes/fleek-network-how-to-get-the-latest-updates-for-ursa-cli-from-the-source-repository",title:"How to get the latest updates for Ursa CLI from the source repository",description:"How to get the latest updates for Ursa CLI from the source repository",source:"@site/guides/Network nodes/fleek-network-how-to-get-the-latest-updates-for-ursa-cli-from-the-source-repository.mdx",sourceDirName:"Network nodes",slug:"/Network nodes/fleek-network-how-to-get-the-latest-updates-for-ursa-cli-from-the-source-repository",permalink:"/guides/Network nodes/fleek-network-how-to-get-the-latest-updates-for-ursa-cli-from-the-source-repository",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Network nodes/fleek-network-how-to-get-the-latest-updates-for-ursa-cli-from-the-source-repository.mdx",tags:[{label:"CDN",permalink:"/guides/tags/cdn"},{label:"Guide",permalink:"/guides/tags/guide"},{label:"Getting Started",permalink:"/guides/tags/getting-started"},{label:"Fleek Network",permalink:"/guides/tags/fleek-network"},{label:"GIT",permalink:"/guides/tags/git"}],version:"current",lastUpdatedAt:1683108601,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"How to get the latest updates for Ursa CLI from the source repository",slug:"fleek-network-how-to-get-the-latest-updates-for-ursa-cli-from-the-source-repository",image:"./assets/fleek-network-how-update-ursa-cli-from-git-repo.png?202301261543",date:"2022-12-09T13:00:00.000Z",canonical:"",description:"How to get the latest updates for Ursa CLI from the source repository",category:"Tutorial",tags:["CDN","Guide","Getting Started","Fleek Network","GIT"]},sidebar:"defaultSidebar",previous:{title:"Getting Started Guide",permalink:"/guides/Network nodes/fleek-network-getting-started-guide"},next:{title:"How to install a node easily with the assisted installer",permalink:"/guides/Network nodes/how-to-install-a-node-easily-with-the-assisted-installer"}},d={image:r(5934).Z},c=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Pulling the latest changes",id:"pulling-the-latest-changes",level:2},{value:"How to rebuild Ursa CLI?",id:"how-to-rebuild-ursa-cli",level:2},{value:"Native build",id:"native-build",level:3},{value:"Docker build",id:"docker-build",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Tried to docker build but says ursa-cli is already in use by a container?",id:"tried-to-docker-build-but-says-ursa-cli-is-already-in-use-by-a-container",level:3},{value:"After upgrading the Ursa CLI, the CLI version is the same?",id:"after-upgrading-the-ursa-cli-the-cli-version-is-the-same",level:3},{value:"When running make install, there are some warning messages, why?",id:"when-running-make-install-there-are-some-warning-messages-why",level:3},{value:"After pulling the latest changes, make install throws an error. What should I do?",id:"after-pulling-the-latest-changes-make-install-throws-an-error-what-should-i-do",level:3},{value:"Final Thoughts",id:"final-thoughts",level:2}],h={toc:c};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(5934).Z,width:"1200",height:"628"})),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Fleek Network's Ursa CLI source code \ud83e\udd16 is updated frequently and thus keeping up with changes can be a bit of a chore and especially difficult for users who are trying to have it compiled for the first time, or updating the Ursa CLI binary for their operating systems. While we should have stable releases in the future at the current phase of development, there's a requirement to follow the contributions directly in the repository: checking in and out, the commits you're interested in \ud83e\uddd0."),(0,n.kt)("p",null,"In this guide, we\u2019ll have a simple look into how to pull changes and update the Ursa CLI binary for Linux, macOS and Windows (WSL): for the Linux guides, we\u2019ll use Ubuntu as an example. "),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.kt)("p",null,"To follow this guide, you will need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some experience running the command-line interface"),(0,n.kt)("li",{parentName:"ul"},"Have Git installed correctly"),(0,n.kt)("li",{parentName:"ul"},"Bit of experience with Git version control"),(0,n.kt)("li",{parentName:"ul"},"Docker (if you're following that path)")),(0,n.kt)("p",null,"We're also assuming that you have followed our initial ",(0,n.kt)("a",{parentName:"p",href:"fleek-network-getting-started-guide"},"getting started guide"),". If you haven't already \ud83d\ude05, read it ",(0,n.kt)("a",{parentName:"p",href:"fleek-network-getting-started-guide"},"here"),"."),(0,n.kt)(o.ZP,{mdxType:"CheckoutCommitWarning"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"pulling-the-latest-changes"},"Pulling the latest changes"),(0,n.kt)("p",null,"Check the latest contributions pushed to the Ursa CLI ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/commits/main"},"main branch"),", it'll give you clarity on what's been committed into the source code, how and when. Therefore, find out about new features, fixes, improvements, etc."),(0,n.kt)("p",null,"First, ",(0,n.kt)("inlineCode",{parentName:"p"},"change directory")," to the Ursa directory in your file system:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd <PATH-TO_URSA>\n")),(0,n.kt)("p",null,"Pull the latest commits by:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git pull origin main\n")),(0,n.kt)("p",null,"Here we're pulling from remote named ",(0,n.kt)("inlineCode",{parentName:"p"},"origin")," and branch ",(0,n.kt)("inlineCode",{parentName:"p"},"main"),". You can check yourself, as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git remote -v\n")),(0,n.kt)("p",null,"Our output clearly describes what ",(0,n.kt)("inlineCode",{parentName:"p"},"origin")," is tracking."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"origin  git@github.com:fleek-network/ursa.git (fetch)\norigin  git@github.com:fleek-network/ursa.git (push)\n")),(0,n.kt)("p",null,"\ud83d\udca1 With ",(0,n.kt)("inlineCode",{parentName:"p"},"git")," you can point to any point in the repository history, there might be lots of reasons you'd want to check into a certain commit or branch, e.g. if you encounter bugs and need to revert to a previous commit or version. That being said, we welcome all kinds of contributions, such as reporting bugs. Why not report issues in our repository ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/issues"},"here")," to help us improve?"),(0,n.kt)("p",null,"Here's the output we got after the git pull:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"From https://github.com/fleek-network/ursa\n * branch            main       -> FETCH_HEAD\nUpdating dbafe8f..9dcbf3e\nFast-forward\n .gitignore                            |   1 +\n Dockerfile                            |   3 +-\n Makefile                              |   5 +-\n README.md                             |   1 +\n crates/ursa-index-provider/Cargo.toml |   2 +-\n crates/ursa-network/Cargo.toml        |  20 +++----\n crates/ursa-network/src/behaviour.rs  | 335 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++---------------------------------------------\n crates/ursa-network/src/discovery.rs  |   9 +--\n crates/ursa-rpc-client/Cargo.toml     |   2 +-\n crates/ursa-rpc-server/Cargo.toml     |   4 +-\n crates/ursa-store/Cargo.toml          |   8 +--\n crates/ursa/Cargo.toml                |   2 +-\n 12 files changed, 215 insertions(+), 177 deletions(-)\n")),(0,n.kt)("p",null,"When your local version of the repository, is up-to-date with the remote repository, you'd get:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"From https://github.com/fleek-network/ursa\n * branch            main       -> FETCH_HEAD\nAlready up to date.\n")),(0,n.kt)("p",null,"At this point, you have the latest version of the source code \ud83d\udc4c and can re-install (rust compile, setup, etc), which overrides the ",(0,n.kt)("inlineCode",{parentName:"p"},"Ursa CLI")," build version you're on."),(0,n.kt)("h2",{id:"how-to-rebuild-ursa-cli"},"How to rebuild Ursa CLI?"),(0,n.kt)("p",null,"After you have successfully pulled the latest changes, or checked into a particular commit in history, you're ready to build it!"),(0,n.kt)("p",null,"To kick things out, we're going to discuss the installation process in a host OS. Keep reading to understand how to trigger these for the Docker container runtimes. ",(0,n.kt)("a",{parentName:"p",href:"#docker-notes"},"Docker notes"),"."),(0,n.kt)("h3",{id:"native-build"},"Native build"),(0,n.kt)("p",null,"\ud83d\udc81\u200d\u2640\ufe0f We are assuming that your system setup hasn't changed, either Rust toolchain is still installed correctly or if you opted to run via Docker have the Docker application). If you have made changes to your system and need to revisit our getting started guide find it ",(0,n.kt)("a",{parentName:"p",href:"fleek-network-getting-started-guide"},"here"),"."),(0,n.kt)("p",null,"First, ",(0,n.kt)("inlineCode",{parentName:"p"},"change directory")," to the Ursa directory in your file system:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd <PATH-TO_URSA>\n")),(0,n.kt)("p",null,"Start the install process by running the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make install\n")),(0,n.kt)("p",null,"Recall this command from our getting started guide? As you probably guessed, the installation process is the way to go. It takes care of everything for us by running Rust compiler, etc."),(0,n.kt)("p",null,"\ud83c\udf08 Here\u2019s the output when successful!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"Finished release [optimized] target(s) in 11m 22s\nInstalling /root/.cargo/bin/ursa\nInstalled package `ursa vX.X.X (/temp/ursa/crates/ursa)` (executable `ursa`)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rust creates the binary and stores it in the Cargo bin directory. On mac and linux, this is located at $HOME/.cargo/bin and on Windows %USERPROFILE%",".","cargo\\bin. If ursa is not available as a command, it\u2019s very likely that your OS Rust setup is unhealthy, thus as recommended above, revisit the ",(0,n.kt)("a",{parentName:"p",href:"fleek-network-getting-started-guide"},"Getting started guide"),".")),(0,n.kt)("h3",{id:"docker-build"},"Docker build"),(0,n.kt)("p",null,"If you have opted for Docker \ud83d\udc2c, there are a few things you need to do first. "),(0,n.kt)("p",null,"Firstly, should know that the Docker image needs to be rebuilt, this because the source code has\nchanged, thus we need to change the Docker image content. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker build -t ursa -f ./Dockerfile .\n")),(0,n.kt)("p",null,"\ud83e\udd16 The output should be similar to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"[+] Building 16.1s (8/16)                                                                                                                           \n => [internal] load build context                                                                                                              0.2s\n => => transferring context: 12.95MB                                                                                                           0.2s\n => [builder 1/6] FROM docker.io/library/rust:latest@sha256:6d44ed87fe759752c89d1f68596f84a23493d3d3395ed843d3a1c104866e5d9e                  13.5s\n => => resolve docker.io/library/rust:latest@sha256:6d44ed87fe759752c89d1f68596f84a23493d3d3395ed843d3a1c104866e5d9e                           0.0s\n => => sha256:6d44ed87fe759752c89d1f68596f84a23493d3d3395ed843d3a1c104866e5d9e 988B / 988B                                                     0.0s\n => => sha256:6c20d87766142d058f3e21874fe1db426c49ce3e1575c8c300fdc27d06db92a9 1.59kB / 1.59kB                                                 0.0s\n => => sha256:c85a0be79bfba309d1f05dc40b447aa82b604593531fed1e7e12e4bef63483a5 10.88MB / 10.88MB                                              10.1s\n => => sha256:c7bf205db148c9f9202dbece143e86487c678d108c3936897cfd9bcd7915dd3c 6.42kB / 6.42kB                                                 0.0s\n")),(0,n.kt)("p",null,"Second, we'll remove the existing Docker container that we created with the prior version of the source code. "),(0,n.kt)("p",null,"\ud83e\udd96 Bear in mind that some users prefer to keep different containers, to jump between versions, etc; that'll be up to the end user to decide how to manage these, but here we're explaining how to remove an existing Docker container that'll be replaced by a new one with the same name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker rm ursa-cli\n")),(0,n.kt)("p",null,"\u26a0\ufe0f You might have opted for a different Docker container name. Here, we're using the getting started guide suggested name ",(0,n.kt)("inlineCode",{parentName:"p"},"ursa-cli"),", if you have opted for a different name change the command to the corresponding one. "),(0,n.kt)("p",null,"Thirdly, we run the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker run")," with any necessary flags, such as exposing ports that from than one can simply do ",(0,n.kt)("inlineCode",{parentName:"p"},"docker start")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"docker stop"),". "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -p 4069:4069 -p 4070:4070 -p 6009:6009 -p 8070:8070 --name ursa-cli -it ursa\n")),(0,n.kt)("p",null,"\ud83d\ude05 We have utility methods for your convenience to run docker easily and not have to remember these long commands, check ",(0,n.kt)("a",{parentName:"p",href:"fleek-network-running-a-node-in-a-docker-container"},"Running a node in Docker")," for more details. Hints:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make docker-build\n\nmake docker-run\n")),(0,n.kt)("p",null,"Learn more about Docker by checking our guide into ",(0,n.kt)("a",{parentName:"p",href:"fleek-network-running-a-node-in-a-docker-container"},"Running a node in Docker")," from our getting started guides."),(0,n.kt)("p",null,"Great \ud83d\udc4c ! You have successfully reinstalled the Ursa CLI."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h3",{id:"tried-to-docker-build-but-says-ursa-cli-is-already-in-use-by-a-container"},"Tried to docker build but says ursa-cli is already in use by a container?"),(0,n.kt)("p",null,"Make sure you read the documentation above, which explains this in more detail and provides you with the commands to mitigate this issue and other considerations as a system administrator, or other similar use-cases when maintaining containers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'docker: Error response from daemon: Conflict. The container name "/ursa-cli" is already in use by container "a141f50ca75ab000576a07078b7cccab26a669b265de08ca6d6efe3d577406fc". You have to remove (or rename) that container to be able to reuse that name.\nSee \'docker run --help\'.\n')),(0,n.kt)("h3",{id:"after-upgrading-the-ursa-cli-the-cli-version-is-the-same"},"After upgrading the Ursa CLI, the CLI version is the same?"),(0,n.kt)("p",null,"The Ursa CLI repository has yet to include a proper release system through our CI/CD engine. At time of writing versioning the CLI is done manually, so it's common to persist under a certain version for a while, e.g.:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"> ursa --version \n\nursa 0.1.0\n")),(0,n.kt)("p",null,"We should have this improved shortly!"),(0,n.kt)("h3",{id:"when-running-make-install-there-are-some-warning-messages-why"},"When running make install, there are some warning messages, why?"),(0,n.kt)("p",null,"Some of these messages are ",(0,n.kt)("inlineCode",{parentName:"p"},"warning")," messages to help the development team. You can ignore it! If you do find something interesting, feel free to share your thoughts or report issues in our repository ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/issues"},"here")," to help us improve."),(0,n.kt)("p",null,"Here's an example of some output showing some warning messages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"warning: fields `peer_id` and `addresses` are never read\n  --\x3e crates/ursa-network/src/discovery.rs:36:5\n   |\n35 | pub struct PeerInfo {\n   |            -------- fields in this struct\n36 |     peer_id: PeerId,\n   |     ^^^^^^^\n37 |     addresses: Vec<Multiaddr>,\n   |     ^^^^^^^^^\n\nwarning: field `event_receiver` is never read\n   --\x3e crates/ursa-network/src/service.rs:151:5\n")),(0,n.kt)("p",null,"If you read the error message, you'll see that is hinting to the developer about what to do!"),(0,n.kt)("h3",{id:"after-pulling-the-latest-changes-make-install-throws-an-error-what-should-i-do"},"After pulling the latest changes, make install throws an error. What should I do?"),(0,n.kt)("p",null,"When a developer puts a new contribution into the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/"},"source-code"),", this might have included new package dependencies or dependencies which rely on libraries that you have not yet installed. This is quite normal \ud83d\ude05 but we understand the pain, therefore should provide stable versions in the near future. Since you are building these yourself and keeping up with the daily development, is not as trivial!"),(0,n.kt)("p",null,"For example, on the commit ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/commit/57473fd7a329bce130d5efdbf0f604c20df5a31e"},"57473fd7")," of the repository main branch ",(0,n.kt)("inlineCode",{parentName:"p"},"Upgrade to libp2p v0.50"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"protobuf-compiler")," is introduced among other tweaks or changes."),(0,n.kt)("p",null,"After you pull the remote changes to your local repository and run the ",(0,n.kt)("inlineCode",{parentName:"p"},"make install")," command, you'd get an error similar to this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"error: failed to run custom build command for `libp2p-core v0.38.0`\n\nCaused by:\n  process didn't exit successfully: `/Users/punkbit/www/fleek/ursa/target/release/build/libp2p-core-51edaceeae6020e3/build-script-build` (exit status: 101)\n  --- stderr\n  thread 'main' panicked at 'Could not find `protoc` installation and this build crate cannot proceed without\n      this knowledge. If `protoc` is installed and this crate had trouble finding\n      it, you can set the `PROTOC` environment variable with the specific path to your\n      installed `protoc` binary.You could try running `brew install protobuf` or downloading it from https://github.com/protocolbuffers/protobuf/releases\n\n  For more information: https://docs.rs/prost-build/#sourcing-protoc\n  ', /Users/punkbit/.cargo/registry/src/github.com-1ecc6299db9ec823/prost-build-0.11.3/src/lib.rs:1296:10\n  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\nwarning: build failed, waiting for other jobs to finish...\nerror: failed to run custom build command for `libp2p-gossipsub v0.43.0`\n")),(0,n.kt)("p",null,"The reason why this happens is that the ",(0,n.kt)("inlineCode",{parentName:"p"},"Upgrade to libp2p v0.50")," introduces changes that require you to add a new library to your operating system, called ",(0,n.kt)("inlineCode",{parentName:"p"},"protobuf-compiler"),".\nThe documentation is updated to reflect this, but there are times that the documentation takes a bit of time to reflect the changes we get frequently in the source repository. On other hand, a quick check in the commit message would hint to you what to do, or what to add! For example, here it'd be solved by running the command in macOS:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"brew install protobuf\n")),(0,n.kt)("p",null,"You'd of course check the documentation updates to find what to do for your operating system. Although, if you have a troubleshooter mentality you'd go a very long way with the answers you'd find by a simple web search with the error message as keywords."),(0,n.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,n.kt)("p",null,"The Fleek Network's Ursa CLI is in constant development \ud83d\udc77\ud83c\udffb\u200d\u2640\ufe0f, there are frequent changes that can introduce features, fixes, and performance improvements, but also breaking changes that in some cases require you to add, including new libraries or packages in your operating system."),(0,n.kt)("p",null,"In the current phase of development, a proper software release cycle for the updates is still in development, thus we pick changes from the source repository to build our Ursa CLI application \ud83e\udd96."),(0,n.kt)("p",null,"We have looked into how to pull the changes via Git, and discussed that contributions can introduce new requirements to the host operating system that leads to updates or changes in the documentation - mentioning how hard it is to keep in synch \ud83d\ude31. Thus, explained how to look into the contribution to understand the nature of the change and get hints about new requirements. Where also hinting about future processes that are in development, which will help us provide stable versions to the end users."),(0,n.kt)("p",null,"Discover more about the project by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa"},"watching/contributing on Github"),", following us on ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for all the best updates!"),(0,n.kt)(i.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}p.isMDXComponent=!0},1026:(e,t,r)=>{r.d(t,{ZP:()=>i});var a=r(7462),n=(r(7294),r(3905));const o={toc:[]};function i(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83e\udd16 As Fleek Network's repositories are in constant development and change, you should consider that the following guide was ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-checkout"},"checked in")," to commit ",(0,n.kt)("inlineCode",{parentName:"p"},"5a33b7"),". While we try our best to update documentation and guides during development, there might be breaking changes that might take some time to reflect in our docs. To avoid disappointment, feel free to check into commit ",(0,n.kt)("inlineCode",{parentName:"p"},"5a33b7")," or contribute by getting in touch with us, or sending a PR in the relevant context. Learn how to checkout a commit in our repository history ",(0,n.kt)("a",{parentName:"p",href:"../../reference/Git/how-to-checkout-a-commit-in-project-history"},"here")," \ud83d\ude4f.")))}i.isMDXComponent=!0},3872:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=e=>{let{image:t,name:r,title:n,url:o}=e;return a.createElement("section",{className:"author_card"},a.createElement("div",null,a.createElement("span",{className:"avatar"},a.createElement("a",{href:o,target:"_blank",alt:r},a.createElement("img",{src:t,alt:r}))),a.createElement("div",null,a.createElement("span",{className:"name"},a.createElement("a",{href:o,target:"_blank",alt:r},r)),a.createElement("span",{className:"title"},n),a.createElement("span",{className:"discord"},"Got questions? Find us on ",a.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"Discord!")))))}},5934:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/fleek-network-how-update-ursa-cli-from-git-repo-fb79e91cccfca2a20fef368f6a5a1550.png"}}]);