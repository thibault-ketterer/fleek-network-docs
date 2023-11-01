"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[9854],{884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>h,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>g});var s=t(5893),i=t(1151),r=t(3872),o=t(8432),l=t(1586);const a={template:"post",draft:!1,hide_title:!0,title:"Transfering setup ownership",slug:"transfering-setup-ownership",image:"./assets/transfering-setup-ownership.png?202311181223",date:new Date("2023-09-12T23:00:00.000Z"),description:"A step-by-step guide to transfer the ownership of the Fleek Network Lightning CLI and service setup",category:"Tutorial",tags:["transfer","ownership","guide","setup","configuration"]},h=void 0,d={id:"Node Operators/transfering-setup-ownership",title:"Transfering setup ownership",description:"A step-by-step guide to transfer the ownership of the Fleek Network Lightning CLI and service setup",source:"@site/guides/Node Operators/transfering-setup-ownership.md",sourceDirName:"Node Operators",slug:"/Node Operators/transfering-setup-ownership",permalink:"/guides/Node Operators/transfering-setup-ownership",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Node Operators/transfering-setup-ownership.md",tags:[{label:"transfer",permalink:"/guides/tags/transfer"},{label:"ownership",permalink:"/guides/tags/ownership"},{label:"guide",permalink:"/guides/tags/guide"},{label:"setup",permalink:"/guides/tags/setup"},{label:"configuration",permalink:"/guides/tags/configuration"}],version:"current",lastUpdatedAt:1698861793,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"Transfering setup ownership",slug:"transfering-setup-ownership",image:"./assets/transfering-setup-ownership.png?202311181223",date:"2023-09-12T23:00:00.000Z",description:"A step-by-step guide to transfer the ownership of the Fleek Network Lightning CLI and service setup",category:"Tutorial",tags:["transfer","ownership","guide","setup","configuration"]},sidebar:"defaultSidebar",previous:{title:"Running a node in Docker",permalink:"/guides/Node Operators/running-a-node-in-docker"},next:{title:"Updating Lightning",permalink:"/guides/Node Operators/updating-lightning"}},c={image:t(9548).Z},g=[{value:"TL;DR",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Ownership of Lightning CLI files",id:"ownership-of-lightning-cli-files",level:2},{value:"Systemd Service",id:"systemd-service",level:2},{value:"Stop the service",id:"stop-the-service",level:2},{value:"Clear the .lightning data",id:"clear-the-lightning-data",level:2},{value:"Create a user",id:"create-a-user",level:2},{value:"Move lightning system and source code directory to user&#39;s home",id:"move-lightning-system-and-source-code-directory-to-users-home",level:2},{value:"1) Move the <code>/root/.lightning</code> directory from one user to the other",id:"1-move-the-rootlightning-directory-from-one-user-to-the-other",level:3},{value:"2) Move the <code>/root/fleek-network</code> directory from one user to the other",id:"2-move-the-rootfleek-network-directory-from-one-user-to-the-other",level:3},{value:"3) Confirm move by finding both directories",id:"3-confirm-move-by-finding-both-directories",level:3},{value:"Change ownership of files",id:"change-ownership-of-files",level:2},{value:"The lgtn symbolic link (symlink)",id:"the-lgtn-symbolic-link-symlink",level:2},{value:"Update the Systemd service unit",id:"update-the-systemd-service-unit",level:2},{value:"Update the config.toml with user-preferred file locations",id:"update-the-configtoml-with-user-preferred-file-locations",level:2},{value:"Start the service",id:"start-the-service",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Transfering setup ownership",src:t(2867).Z+"",width:"1450",height:"816"})}),"\n","\n","\n",(0,s.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["The step-by-step instructions provided in the guide should be simple to follow, but the process is also available as an automated script from our familiar ",(0,s.jsx)(n.a,{href:"https://github.com/fleek-network/get.fleek.network",children:"get.fleek.network"})," tool."]}),(0,s.jsx)(n.p,{children:"To use the automated script execute the following command in your server terminal and follow the instructions:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -sS https://get.fleek.network/transfer_system_user_setup_ownership | bash\n"})}),(0,s.jsxs)(n.p,{children:["We try to make the auomated scripts as useful as possible, but it's impossible to fit every single use-case. So, if you find any isses or have feedback to help us improve ",(0,s.jsx)(n.a,{href:"https://discord.gg/fleekxyz",children:"message us through our Discord"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Our Lightning CLI and Node process is run by a user, that has some sort of permissions\u2013some users run it as a super user (root) which is questionable as root privileges are not a necessary good. We'll look into how to create a user to manage and control the Fleek Network Lightning CLI and Systemd unit service. Also, presents the concept of file permissions and ownership which is crucial in preventing private or sensitive data from being exposed to dodgy actors."}),"\n",(0,s.jsx)(n.p,{children:"Let's discuss the topic and open up a few ideas to help us improve the security of our server."}),"\n",(0,s.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,s.jsx)(n.p,{children:"To follow the guide, you will need the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Familiarity with the command-line interface"}),"\n",(0,s.jsx)(n.li,{children:"Have installed and set up the Lightning CLI and service"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ownership-of-lightning-cli-files",children:"Ownership of Lightning CLI files"}),"\n",(0,s.jsx)(n.p,{children:"The user who installs the Lightning CLI and sets the Service takes an important role that determines the location of the configuration files, the setup, and how the Systemd service is managed or controlled."}),"\n",(0,s.jsxs)(n.p,{children:["Our ",(0,s.jsx)(n.a,{href:"/docs/node/install",children:"install"})," document recommends creating a user and switching to the user to set up the service. You shouldn't want installed applications to run with elevated privileges. Applications are meant to be run with non-administrative privileges. If an application requires higher privileges, the administrator, such as a ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Sudo",children:"sudoer"})," should be able to elevate it. An application that has full access and control of a system can modify it in harmful ways, e.g. compromise the private keys."]}),"\n",(0,s.jsx)(n.p,{children:"For our guide, we'll illustrate the process of migration from a super user (root) to another user (sudo). The knowledge should be easily appliable for any other user-to-user migration. We stick with root user for simplicity and because that's the most common use case."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["A reference document about ",(0,s.jsx)(n.a,{href:"/references/Lightning%20CLI/file-permissions-and-ownership",children:"File permissions and ownership"})," is available that explains how it works practically, by showcasing how the process can be started, how the node process locates the Keystore, etc."]})}),"\n",(0,s.jsx)(n.h2,{id:"systemd-service",children:"Systemd Service"}),"\n",(0,s.jsx)(n.p,{children:"In systemd, a unit refers to any resource that the system knows how to operate on and manage. This is the primary object that the systemd tools know how to deal with. These resources are defined using configuration files called unit files."}),"\n",(0,s.jsxs)(n.p,{children:["The recommended installation process features a ",(0,s.jsx)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/systemd.service.html",children:"systemd.service"})," which is a resource that the system knows how to operate and manage by an administrator user."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"When using a Systemd service to run a process, it operates comparably to running it directly. The key difference is that Systemd keeps track of all the processes and threads that are spawned. This means that when a service is stopped using systemctl, such as the Fleek Network Lightning Node service, all the child processes that were started by the service are also terminated. Additionally, by utilizing Systemd, a user can run the process in the background and configure it to start automatically on system startup."})}),"\n",(0,s.jsxs)(n.p,{children:["If you have followed the installation recommendations, find the systemd service unit in the location ",(0,s.jsx)(n.code,{children:"/etc/systemd/system/lightning.service"})," (we are using Ubuntu Linux as an example to keep it short)."]}),"\n",(0,s.jsxs)(n.p,{children:["Make sure that you have set up a ",(0,s.jsx)(n.a,{href:"/docs/node/install#systemd-service-setup",children:"Systemd unit service"}),", as recommended during the installation as this guide assumes you have one setup."]}),"\n",(0,s.jsx)(n.h2,{id:"stop-the-service",children:"Stop the service"}),"\n",(0,s.jsxs)(n.p,{children:["Before we proceed with any changes required for the migration, you'll have to stop the ",(0,s.jsx)(n.code,{children:"lightning.service"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"systemctl stop lightning\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For this guide, we are assuming that you are migrating ownership from ",(0,s.jsx)(n.strong,{children:"root"})," to a ",(0,s.jsx)(n.strong,{children:"sudoer"})," user. If not, you might be required to elevate privileges as ",(0,s.jsx)(n.strong,{children:"sudo"}),"** where required. For example, ",(0,s.jsx)(n.code,{children:"sudo systemctl stop lightning"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"clear-the-lightning-data",children:"Clear the .lightning data"}),"\n",(0,s.jsxs)(n.p,{children:["Run the following command to clear the ",(0,s.jsx)(n.code,{children:"/root/.lightning/data"}),", as it can be quite large, and we don't need to move it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo rm -rf /root/.lightning/data\n"})}),"\n",(0,s.jsx)(n.h2,{id:"create-a-user",children:"Create a user"}),"\n",(0,s.jsx)(o.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"move-lightning-system-and-source-code-directory-to-users-home",children:"Move lightning system and source code directory to user's home"}),"\n",(0,s.jsx)(n.p,{children:"A user should've been created, added the user to the sudo group, switched to the user, and changed the directory to the user's home."}),"\n",(0,s.jsxs)(n.p,{children:["Run the command ",(0,s.jsx)(n.code,{children:"pwd"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"pwd\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output would look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"/home/<USERNAME>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Given the username ",(0,s.jsx)(n.strong,{children:"lgtn"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"/home/lgtn\n"})}),"\n",(0,s.jsx)(n.p,{children:"You'll then move two directories:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"/root/.lightning"})]}),"\n",(0,s.jsxs)(n.li,{children:["The source code under the parent ",(0,s.jsx)(n.code,{children:"/root/fleek-network"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"1-move-the-rootlightning-directory-from-one-user-to-the-other",children:["1) Move the ",(0,s.jsx)(n.code,{children:"/root/.lightning"})," directory from one user to the other"]}),"\n",(0,s.jsxs)(n.p,{children:["For our demo, we have assumed ",(0,s.jsx)(n.strong,{children:"root"})," user to ",(0,s.jsx)(n.strong,{children:"sudoer"})," user named ",(0,s.jsx)(n.strong,{children:"lgtn"}),", thus that'll look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo mv /root/.lightning /home/lgtn/\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"2-move-the-rootfleek-network-directory-from-one-user-to-the-other",children:["2) Move the ",(0,s.jsx)(n.code,{children:"/root/fleek-network"})," directory from one user to the other"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo mv /root/fleek-network /home/lgtn/\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-confirm-move-by-finding-both-directories",children:"3) Confirm move by finding both directories"}),"\n",(0,s.jsxs)(n.p,{children:["In the user $HOME directory, you should be able to list the content of the directory and find the ",(0,s.jsx)(n.code,{children:".lightning"})," and ",(0,s.jsx)(n.code,{children:"fleek-network"})," directory."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"ls -la\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output should be similar to the following."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"drwxr-x--- 6 lgtn lgtn  4096 Sep 12 13:51 .\ndrwxr-xr-x 3 root root  4096 Sep 11 12:28 ..\ndrwxrwxr-x 5 root root  4096 Sep 11 15:25 .lightning\ndrwxrwxr-x 3 root root  4096 Sep 11 12:28 fleek-network\n"})}),"\n",(0,s.jsx)(n.h2,{id:"change-ownership-of-files",children:"Change ownership of files"}),"\n",(0,s.jsxs)(n.p,{children:["Once the directories and files are moved, they should have the wrong ownership, which should be set to ",(0,s.jsxs)(n.strong,{children:["root",":root"]}),". We'll now have to change the ownership of the directories and files recursively."]}),"\n",(0,s.jsxs)(n.p,{children:["Change the ownership of ",(0,s.jsx)(n.code,{children:"/home/lgtn/.lightning"})," to the user ",(0,s.jsx)(n.strong,{children:"lgtn"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo chown -R lgtn:lgtn .lightning\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Make sure that you use the ",(0,s.jsx)(n.code,{children:"-R"})," flag to have the ownership changes applied to the parent, the child directories and all the files."]})}),"\n",(0,s.jsxs)(n.p,{children:["Change the ownership of ",(0,s.jsx)(n.code,{children:"/home/lgtn/fleek-network"})," to the user ",(0,s.jsx)(n.strong,{children:"lgtn"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo chown -R lgtn:lgtn fleek-network\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once completed, if you list the content of the directory the ownership should have changed from ",(0,s.jsx)(n.code,{children:"root:root"})," to ",(0,s.jsx)(n.code,{children:"lgtn:lgtn"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"ls -la\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output should be similar to the following."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"drwxr-x--- 6 lgtn lgtn  4096 Sep 12 13:51 .\ndrwxr-xr-x 3 root root  4096 Sep 11 12:28 ..\ndrwxrwxr-x 5 lgtn lgtn  4096 Sep 11 15:25 .lightning\ndrwxrwxr-x 3 lgtn lgtn  4096 Sep 11 12:28 fleek-network\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Remember that we are using ",(0,s.jsx)(n.strong,{children:"lgtn"})," for our demo. If you have opted for a different username, make sure you use the correct username. To find the username you are logged in with run the command:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"whoami\n"})}),(0,s.jsxs)(n.p,{children:["For our demo, we'll assume that you understand that ",(0,s.jsx)(n.strong,{children:"lgtn"})," is the user we opted in for our demo."]})]}),"\n",(0,s.jsx)(n.h2,{id:"the-lgtn-symbolic-link-symlink",children:"The lgtn symbolic link (symlink)"}),"\n",(0,s.jsxs)(n.p,{children:["We have the symbolic link that links the binary built from the source code, to the alias ",(0,s.jsx)(n.strong,{children:"lgtn"})," that's set under the ",(0,s.jsx)(n.code,{children:"/usr/local/bin/lgtn"})," pathname."]}),"\n",(0,s.jsx)(n.p,{children:"For example, you can find where that is linked to by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"ls -la $(which lgtn)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["On the output below, we can see that the ",(0,s.jsx)(n.code,{children:"/usr/local/bin/lgtn"})," points to ",(0,s.jsx)(n.code,{children:"/root/fleek-network/lightning/target/release/lightning-node"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"lrwxrwxrwx 1 root root 64 Sep 11 15:48 /usr/local/bin/lgtn -> /root/fleek-network/lightning/target/release/lightning-node\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The target base path is ",(0,s.jsx)(n.code,{children:"/root"}),", and we know that we've moved the source code directory to the user home ",(0,s.jsx)(n.code,{children:"/home/lgtn"}),". For this reason, we need to create a new symlink with the updated location of the binary file."]}),"\n",(0,s.jsx)(n.p,{children:"Unlink the symlink:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo unlink /usr/local/bin/lgtn\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create the symlink:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'sudo ln -s "/home/lgtn/fleek-network/lightning/target/release/lightning-node" /usr/local/bin/lgtn\n'})}),"\n",(0,s.jsx)(n.p,{children:"If successful, you should be able to execute the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"lgtn help\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output should look similar to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"Usage: lgtn [OPTIONS] <COMMAND>\n\nCommands:\n  run           Start the node\n  keys          Handle keys\n  print-config  Print the loaded configuration\n  help          Print this message or the help of the given subcommand(s)\n\nOptions:\n  -c, --config <CONFIG>      Path to the toml configuration file [default: ~/.lightning/config.toml]\n      --with-mock-consensus  Determines that we should be using the mock consensus backend\n  -v...                      Increases the level of verbosity (the max level is -vvv)\n      --log-location         Print code location on console logs\n  -h, --help                 Print help\n  -V, --version              Print version\n"})}),"\n",(0,s.jsx)(n.h2,{id:"update-the-systemd-service-unit",children:"Update the Systemd service unit"}),"\n",(0,s.jsx)(n.p,{children:"Open the file, its settings should be similar to the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"[Unit]\nDescription=Fleek Network Node lightning service\n\n[Service]\nType=simple\nMemoryHigh=32G\nRestartSec=15s\nRestart=always\nExecStart=lgtn -c /home/<USERNAME>/.lightning/config.toml run\nExecStop=killall -9 lgtn\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\nEnvironment=TMPDIR=/var/tmp\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Since we opted in for the username ",(0,s.jsx)(n.strong,{children:"lgtn"})," for our demo, replaced ",(0,s.jsx)(n.code,{children:"<USERNAME>"})," with ",(0,s.jsx)(n.code,{children:"lgtn"}),", and it would look like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"[Unit]\nDescription=Fleek Network Node lightning service\n\n[Service]\nType=simple\nMemoryHigh=32G\nRestartSec=15s\nRestart=always\nExecStart=lgtn -c /home/lgtn/.lightning/config.toml run\nExecStop=killall -9 lgtn\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\nEnvironment=TMPDIR=/var/tmp\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Notice the ",(0,s.jsx)(n.code,{children:"ExecStart="})," which includes the flag ",(0,s.jsx)(n.code,{children:"-c"})," where the location of the user files is declared. Learn how to ",(0,s.jsx)(n.a,{href:"#update-the-configtoml-with-user-preferred-file-locations",children:"update the config.toml"})," to include the user-preferred file paths, e.g. declare the keystore pathname."]})}),"\n",(0,s.jsx)(n.p,{children:"Complete the step by reloading the daemon, to apply the newly created changes. You can do this by executing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,s.jsx)(n.h2,{id:"update-the-configtoml-with-user-preferred-file-locations",children:"Update the config.toml with user-preferred file locations"}),"\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"/home/lgtn/.lightning/config.toml"})," file in your favorite text editor."]}),"\n",(0,s.jsxs)(n.p,{children:["Replace every instance of ",(0,s.jsx)(n.code,{children:"~"})," (tilde) with the user's home path. We do this to ensure that every time we control the service via systemctl, the configuration file that tells which keystore to use is declared upfront regardless of running it as user or delegating to root with ",(0,s.jsx)(n.strong,{children:"sudo"}),". Learn more about ",(0,s.jsx)(n.a,{href:"/references/Lightning%20CLI/file-permissions-and-ownership",children:"file permissions and ownership"})," by reading the reference document."]}),"\n",(0,s.jsx)(l.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"start-the-service",children:"Start the service"}),"\n",(0,s.jsx)(n.p,{children:"At this stage, you should have migrated the essential files to the user   home."}),"\n",(0,s.jsxs)(n.p,{children:["Ideally, you would now manage the service as the ",(0,s.jsx)(n.code,{children:"user"})," (as described in the ",(0,s.jsx)(n.a,{href:"/references/Systemd/user-service/",children:"user service reference"}),"). To keep our guide wider to all users, we'll prefix the commands with ",(0,s.jsx)(n.strong,{children:"sudo"}),", which elevates the permissions to ",(0,s.jsx)(n.strong,{children:"root"}),". But since we have provided the configuration file the ",(0,s.jsx)(n.code,{children:"-c"})," in our ",(0,s.jsx)(n.a,{href:"#systemd-service",children:"systemd service"}),", we'll have the user-preferred configuration options ruling."]}),"\n",(0,s.jsx)(n.p,{children:"Start the service by running the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo systemctl start lightning.service\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Find the timeline of events for the Lightning service by checking the log files. Learn about it in the section ",(0,s.jsx)(n.a,{href:"/docs/node/install#analyzing-log-messages",children:"Log Messages"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["To learn more, visit the section ",(0,s.jsx)(n.a,{href:"/docs/node/install#use-systemctl-to-manage-systemd-service",children:"Use Systemctl to manage the Lightning Service"})]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"We started by giving a brief introduction to ownership of the Lightning CLI files."}),"\n",(0,s.jsx)(n.p,{children:"Jumped through topics of Systemd service that helps the user manage the service in the Linux environment, which helps keep track of all the processes and threads that are spawned."}),"\n",(0,s.jsxs)(n.p,{children:["We've gone through the step-by-step process to migrate the Fleek Network CLI and Systemd service setup from one user to the other. To keep it short, we decided to go with the use-case of where the migration happens between a ",(0,s.jsx)(n.strong,{children:"root"})," user and a ",(0,s.jsx)(n.strong,{children:"sudoer"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Discover more about the project by ",(0,s.jsx)(n.a,{href:"https://github.com/fleek-network/lightning",children:"watching/contributing on GitHub"}),", following us on ",(0,s.jsx)(n.a,{href:"https://twitter.com/fleek_net",children:"Twitter"}),", and joining ",(0,s.jsx)(n.a,{href:"https://discord.gg/fleekxyz",children:"our community Discord"})," for any updates."]}),"\n",(0,s.jsx)(r.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8432:(e,n,t)=>{t.d(n,{ZP:()=>o});var s=t(5893),i=t(1151);function r(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["We recommend creating a ",(0,s.jsx)(n.code,{children:"non-root"})," user with administrative privileges. It'll allow us to install any system requirements."]}),"\n",(0,s.jsxs)(n.p,{children:["You can create a new user and add to the ",(0,s.jsx)(n.strong,{children:"sudo"})," group by running:"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For our example, we'll be using the name ",(0,s.jsx)(n.code,{children:"lgtn"})," but you can pick whichever you'd like. If you already have a ",(0,s.jsx)(n.strong,{children:"sudoer"})," account, you can skip this step."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo adduser lgtn\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After completing the ",(0,s.jsx)(n.code,{children:"adduser"})," steps, execute the ",(0,s.jsx)(n.code,{children:"usermod"})," to add the ",(0,s.jsx)(n.code,{children:"user"})," to the ",(0,s.jsx)(n.strong,{children:"sudo"})," group, as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo usermod -aG sudo lgtn\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Switch to the new ",(0,s.jsx)(n.strong,{children:"user"})," by using the command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"su lgtn\n"})}),"\n",(0,s.jsx)(n.p,{children:"Change the directory to the new user's home, as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cd /home/lgtn\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},1586:(e,n,t)=>{t.d(n,{ZP:()=>o});var s=t(5893),i=t(1151);function r(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"/home/<USERNAME>/.lightning/config.toml"})," you'll find some and more of the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The configuration properties and values presented above are a shorter version of what you'll find on your ",(0,s.jsx)(n.strong,{children:"configuration.toml"}),". We keep it short to make it easier to follow, do not copy and paste."]})}),"\n",(0,s.jsxs)(n.p,{children:["Find and replace all instances of ~ in the config file ",(0,s.jsx)(n.code,{children:"/home/<USERNAME>/.lightning/config.toml"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Here's an example of how to do it using ",(0,s.jsx)(n.strong,{children:"sed"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'sed -i "s|~/.lightning|/home/<USERNAME>/.lightning|g" "/home/<USERNAME>/.lightning/config.toml"\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Replace the ",(0,s.jsx)(n.code,{children:"<USERNAME>"})," with your username. For example, if you have followed the recommendation to ",(0,s.jsx)(n.a,{href:"/docs/node/install#create-a-user",children:"create a user"})," it would look like ",(0,s.jsx)(n.code,{children:"/home/lgtn/.lightning/config.toml"})," for the username ",(0,s.jsx)(n.strong,{children:"lgtn"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["For example, if your username is ",(0,s.jsx)(n.code,{children:"lgtn"})," that'd look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'sed -i "s|~/.lightning|/home/lgtn/.lightning|g" "/home/lgtn/.lightning/config.toml"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Once modified, you can run a ",(0,s.jsx)(n.code,{children:"cat"})," to see the content of the files to confirm it has been updated."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cat /home/lgtn/.lightning/config.toml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For our example where we opted in for the username ",(0,s.jsx)(n.code,{children:"lgtn"})," that would look like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,s.jsx)(n.p,{children:"Bear in mind that we are keeping the content of the file short to make it easier to read and follow. The content of your configuration file should look slightly different, amongst these it should contain other properties and values. You should not copy and replace the content of your files with the ones presented here."})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},3872:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var s=t(5893);const i=e=>{let{image:n,name:t,title:i,url:r,communityMember:o=!1}=e;return(0,s.jsx)("section",{className:"author_card",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"avatar",children:(0,s.jsx)("a",{href:r,target:"_blank",alt:t,children:(0,s.jsx)("img",{src:n,alt:t})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"name",children:(0,s.jsx)("a",{href:r,target:"_blank",alt:t,children:t})}),(0,s.jsx)("span",{className:"title",children:i}),(0,s.jsxs)("span",{className:"discord",children:[o?"Join our community on":"Got questions? Find us on"," ",(0,s.jsx)("a",{href:"https://discord.gg/fleekxyz",target:"_blank",children:"discord!"})]})]})]})})}},9548:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/transfering-setup-ownership-e59591d6c2b6023384e94dfa4873964a.png"},2867:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/transfering-setup-ownership-e59591d6c2b6023384e94dfa4873964a.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);