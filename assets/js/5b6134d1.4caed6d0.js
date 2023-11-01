"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[9752],{1586:(e,n,s)=>{s.d(n,{ZP:()=>o});var t=s(5893),i=s(1151);function r(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"/home/<USERNAME>/.lightning/config.toml"})," you'll find some and more of the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The configuration properties and values presented above are a shorter version of what you'll find on your ",(0,t.jsx)(n.strong,{children:"configuration.toml"}),". We keep it short to make it easier to follow, do not copy and paste."]})}),"\n",(0,t.jsxs)(n.p,{children:["Find and replace all instances of ~ in the config file ",(0,t.jsx)(n.code,{children:"/home/<USERNAME>/.lightning/config.toml"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Here's an example of how to do it using ",(0,t.jsx)(n.strong,{children:"sed"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'sed -i "s|~/.lightning|/home/<USERNAME>/.lightning|g" "/home/<USERNAME>/.lightning/config.toml"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Replace the ",(0,t.jsx)(n.code,{children:"<USERNAME>"})," with your username. For example, if you have followed the recommendation to ",(0,t.jsx)(n.a,{href:"/docs/node/install#create-a-user",children:"create a user"})," it would look like ",(0,t.jsx)(n.code,{children:"/home/lgtn/.lightning/config.toml"})," for the username ",(0,t.jsx)(n.strong,{children:"lgtn"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["For example, if your username is ",(0,t.jsx)(n.code,{children:"lgtn"})," that'd look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'sed -i "s|~/.lightning|/home/lgtn/.lightning|g" "/home/lgtn/.lightning/config.toml"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Once modified, you can run a ",(0,t.jsx)(n.code,{children:"cat"})," to see the content of the files to confirm it has been updated."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cat /home/lgtn/.lightning/config.toml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For our example where we opted in for the username ",(0,t.jsx)(n.code,{children:"lgtn"})," that would look like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,t.jsx)(n.p,{children:"Bear in mind that we are keeping the content of the file short to make it easier to read and follow. The content of your configuration file should look slightly different, amongst these it should contain other properties and values. You should not copy and replace the content of your files with the ones presented here."})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},2421:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>c});var t=s(5893),i=s(1151),r=s(3872),o=s(1586);const l={title:"File permissions and Ownership",slug:"file-permissions-and-ownership",hide_title:!0,tags:["ownership","file permissions","sudoer","root"]},a=void 0,h={id:"Lightning CLI/file-permissions-and-ownership",title:"File permissions and Ownership",description:"Ownership",source:"@site/references/Lightning CLI/file-permissions-and-ownership.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/file-permissions-and-ownership",permalink:"/references/Lightning CLI/file-permissions-and-ownership",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/file-permissions-and-ownership.md",tags:[{label:"ownership",permalink:"/references/tags/ownership"},{label:"file permissions",permalink:"/references/tags/file-permissions"},{label:"sudoer",permalink:"/references/tags/sudoer"},{label:"root",permalink:"/references/tags/root"}],version:"current",lastUpdatedAt:1698861793,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{title:"File permissions and Ownership",slug:"file-permissions-and-ownership",hide_title:!0,tags:["ownership","file permissions","sudoer","root"]},sidebar:"defaultSidebar",previous:{title:"Error linking with cc",permalink:"/references/Lightning CLI/error-linking-with-cc-failed-exist-status-1"},next:{title:"Frequently used commands for Native setup",permalink:"/references/Lightning CLI/frequently-used-commands-for-native-setup"}},d={},c=[{value:"Ownership",id:"ownership",level:2},{value:"Using sudo to delegate permissions",id:"using-sudo-to-delegate-permissions",level:2},{value:"User $HOME directory",id:"user-home-directory",level:2},{value:"Set the locations of the user paths",id:"set-the-locations-of-the-user-paths",level:2},{value:"Set the configuration flag -c on the service unit file",id:"set-the-configuration-flag--c-on-the-service-unit-file",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"ownership",children:"Ownership"}),"\n",(0,t.jsx)(n.p,{children:"The user who installs the Fleek Network Lightning CLI matters, as it can own or delegate ownership of the dependencies and applications being installed."}),"\n",(0,t.jsx)(n.p,{children:"For example, if you have followed the install document recommendations and have:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Created a user ",(0,t.jsx)(n.strong,{children:"lgtn"})]}),"\n",(0,t.jsxs)(n.li,{children:["Switched to the user ",(0,t.jsx)(n.strong,{children:"lgtn"})]}),"\n",(0,t.jsxs)(n.li,{children:["Executed the installation process as ",(0,t.jsx)(n.strong,{children:"lgtn"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The username can be anything, we are using the term ",(0,t.jsx)(n.strong,{children:"lgtn"})," as the example provided throughout our documentation. Select your username in accordance to your preferences."]})}),"\n",(0,t.jsx)(n.p,{children:"You'll find that it owns the following directories under the user home (/home/lgtn):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"drwxr-x--- 6 lgtn lgtn  4096 Sep 12 10:27 .\ndrwxr-xr-x 3 root root  4096 Sep 11 12:28 ..\ndrwxrwxr-x 5 lgtn lgtn  4096 Sep 11 12:29 .cargo\ndrwxrwxr-x 5 lgtn lgtn  4096 Sep 11 15:25 .lightning\ndrwxrwxr-x 6 lgtn lgtn  4096 Sep 11 12:29 .rustup\ndrwxrwxr-x 3 lgtn lgtn  4096 Sep 11 12:28 fleek-network\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Above, we have the listing properties set as ",(0,t.jsx)(n.strong,{children:"drwxrwxr-x"})," and the ownership  ",(0,t.jsxs)(n.strong,{children:["lgtn",":lgtn"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["On the other hand, if you have done the installation process as ",(0,t.jsx)(n.strong,{children:"root"})," superuser, you'll find that:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The location of the directories and files goes under the ",(0,t.jsx)(n.code,{children:"/root"})," pathname"]}),"\n",(0,t.jsxs)(n.li,{children:["The ownership is set to ",(0,t.jsxs)(n.strong,{children:["root",":root"]})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Learn more about ",(0,t.jsx)(n.a,{href:"https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions",children:"file permissions"})," from the ",(0,t.jsx)(n.a,{href:"https://www.linuxfoundation.org/",children:"Linux Foundation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about file permission on Linux, read the ",(0,t.jsx)(n.a,{href:"https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions",children:"Understanding Linux File Permissions"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"using-sudo-to-delegate-permissions",children:"Using sudo to delegate permissions"}),"\n",(0,t.jsxs)(n.p,{children:["Consider file ownership and permissions to understand where the keystore is located. Take close attention when executing commands as an admin\u2013with or without ",(0,t.jsx)(n.strong,{children:"super user"})," (root) or ",(0,t.jsx)(n.strong,{children:"sudo"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If a command is executed without ",(0,t.jsx)(n.strong,{children:"sudo"})," then the generated output goes onto the ",(0,t.jsx)(n.strong,{children:"user"})," home."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"lgtn keys generate\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Resulting in having the ",(0,t.jsx)(n.strong,{children:"keystore"})," saved onto ",(0,t.jsx)(n.code,{children:"/home/username/.lightning/keystore"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["On the other hand, if a command is executed with ",(0,t.jsx)(n.strong,{children:"sudo"})," then the generated output is delegated to ",(0,t.jsx)(n.strong,{children:"root"})," directory."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo lgtn keys generate\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Resulting in having the ",(0,t.jsx)(n.strong,{children:"keystore"})," saved onto ",(0,t.jsx)(n.code,{children:"/root/.lightning/keystore"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"user-home-directory",children:"User $HOME directory"}),"\n",(0,t.jsxs)(n.p,{children:["The home directory is a directory that contains the personal files of a particular user of the system. On Linux, the ",(0,t.jsx)(n.code,{children:"$HOME"})," environment variable is set by the login program, which sets the user `$HOME`` accordingly. A user's home goes by the username, the user who's logged in."]}),"\n",(0,t.jsx)(n.p,{children:"For this reason, a user can change to the home directory by executing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cd $HOME\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A shorthand allows a user to refer to their home directory simply as ",(0,t.jsx)(n.code,{children:"~"})," (tilde), as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cd ~\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["We can find that the HOME or ~ (tilde) is highly dependent on the user who's logged in. Since we know that the user might delegate to ",(0,t.jsx)(n.strong,{children:"root"})," by the usage of ",(0,t.jsx)(n.strong,{children:"sudo"}),", this can help troubleshoot and explain the location of our files e.g. the keystore. In the section ",(0,t.jsx)(n.a,{href:"#set-the-locations-of-the-user-paths",children:"Set the locations of the user paths"}),", we learn how to define the location of our user configuration paths to avoid confusion. By doing it we ensure that when running the service, the service picks the correct configuration paths for our user."]})}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about the user $HOME directory read the wikipedia ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Home_directory",children:"Home directory"})," document."]}),"\n",(0,t.jsx)(n.h2,{id:"set-the-locations-of-the-user-paths",children:"Set the locations of the user paths"}),"\n",(0,t.jsx)(o.ZP,{}),"\n",(0,t.jsx)(n.h2,{id:"set-the-configuration-flag--c-on-the-service-unit-file",children:"Set the configuration flag -c on the service unit file"}),"\n",(0,t.jsxs)(n.p,{children:["The following section assumes that a System service unit has been declared, and you're using systemctl to control the service, as described in our ",(0,t.jsx)(n.a,{href:"/docs/node/install#systemd-service-setup",children:"Systemd Service Setup"})," install section."]}),"\n",(0,t.jsxs)(n.p,{children:["Open and edit the ",(0,t.jsx)(n.strong,{children:"/etc/systemd/system/lightning.service"})," file."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<USERNAME>"})," with YOUR username. For example, in the documentation we use the username ",(0,t.jsx)(n.strong,{children:"lgtn"}),", which means we'd replace ",(0,t.jsx)(n.code,{children:"<USERNAME>"})," with ",(0,t.jsx)(n.code,{children:"lgtn"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure that the ExecStart is set correctly, including the ",(0,t.jsx)(n.code,{children:"-c"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"[Unit]\nDescription=Fleek Network Node lightning service\n\n[Service]\nType=simple\nMemoryHigh=32G\nRestartSec=15s\nRestart=always\nExecStart=lgtn -c /home/<USERNAME>/.lightning/config.toml run\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\nEnvironment=TMPDIR=/var/tmp\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For our example, as the username ",(0,t.jsx)(n.strong,{children:"lgtn"})," it would look like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"[Unit]\nDescription=Fleek Network Node lightning service\n\n[Service]\nType=simple\nMemoryHigh=32G\nRestartSec=15s\nRestart=always\nExecStart=lgtn -c /home/lgtn/.lightning/config.toml run\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\nEnvironment=/var/tmp\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,t.jsx)(n.p,{children:"When complete make sure the file is saved and the systemctl daemon is reloaded, as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Consequently, when a user manages the service via the systemctl, the Lightning CLI process will read the configuration file settings provided above. It includes the location of the user preferences, such as the keystore location amongst others, preventing confusion regardless of ",(0,t.jsx)(n.strong,{children:"root"})," delegation."]}),"\n",(0,t.jsx)(r.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},3872:(e,n,s)=>{s.d(n,{Z:()=>i});s(7294);var t=s(5893);const i=e=>{let{image:n,name:s,title:i,url:r,communityMember:o=!1}=e;return(0,t.jsx)("section",{className:"author_card",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"avatar",children:(0,t.jsx)("a",{href:r,target:"_blank",alt:s,children:(0,t.jsx)("img",{src:n,alt:s})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"name",children:(0,t.jsx)("a",{href:r,target:"_blank",alt:s,children:s})}),(0,t.jsx)("span",{className:"title",children:i}),(0,t.jsxs)("span",{className:"discord",children:[o?"Join our community on":"Got questions? Find us on"," ",(0,t.jsx)("a",{href:"https://discord.gg/fleekxyz",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);