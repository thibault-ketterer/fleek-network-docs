"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[8489],{8816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(5893),i=n(1151),s=n(3872);const r={title:"How to manage log files",hide_title:!0,slug:"how-to-manage-log-files",date:new Date("2023-10-27T12:00:00.000Z"),image:"./assets/managing-the-keystore.png?202311181211",description:"Learn how to rotate, compress the log files",category:"Tutorial",tags:["guide","logs"]},l=void 0,a={id:"Node Operators/how-to-manage-logfiles",title:"How to manage log files",description:"Learn how to rotate, compress the log files",source:"@site/guides/Node Operators/how-to-manage-logfiles.md",sourceDirName:"Node Operators",slug:"/Node Operators/how-to-manage-log-files",permalink:"/guides/Node Operators/how-to-manage-log-files",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Node Operators/how-to-manage-logfiles.md",tags:[{label:"guide",permalink:"/guides/tags/guide"},{label:"logs",permalink:"/guides/tags/logs"}],version:"current",lastUpdatedAt:1701449682,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"How to manage log files",hide_title:!0,slug:"how-to-manage-log-files",date:"2023-10-27T12:00:00.000Z",image:"./assets/managing-the-keystore.png?202311181211",description:"Learn how to rotate, compress the log files",category:"Tutorial",tags:["guide","logs"]},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/guides/Node Operators/getting-started"},next:{title:"Managing the keystore",permalink:"/guides/Node Operators/managing-the-keystore"}},c={image:n(4110).Z},d=[{value:"Introduction",id:"introduction",level:2},{value:"Journal",id:"journal",level:2},{value:"Commands",id:"commands",level:3},{value:"Disk utilization checkup",id:"disk-utilization-checkup",level:4},{value:"Clearing logs manually",id:"clearing-logs-manually",level:4},{value:"Follow or tail logs of service",id:"follow-or-tail-logs-of-service",level:4},{value:"Show all service entries",id:"show-all-service-entries",level:4},{value:"Configuration file",id:"configuration-file",level:3},{value:"Create the directory and config file",id:"create-the-directory-and-config-file",level:3},{value:"Configuration settings",id:"configuration-settings",level:3},{value:"Logrotate",id:"logrotate",level:2},{value:"Prerequesite",id:"prerequesite",level:3},{value:"Explore the Configuration files",id:"explore-the-configuration-files",level:3},{value:"Create the Lightning logrotate configuration file",id:"create-the-lightning-logrotate-configuration-file",level:3},{value:"Lightning Configuration Settings",id:"lightning-configuration-settings",level:3},{value:"Cron job",id:"cron-job",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"How to manage log files",src:n(5407).Z+"",width:"1450",height:"816"})}),"\n","\n","\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"The Fleek Network node streams text messages to the standard output and error in Linux. Given that disk space is a limited resource for most systems, the number of text data can be a cause of concern. Managing the file sizes by means of rotation and compression can help."}),"\n",(0,o.jsx)(t.p,{children:"A conventional Fleek Network Service setup (as per the documentation and tool recommendations), have the text data stored in a special directory for storing logs called /var/log. The /var/log directory contains logs from various applications running on the operating system, the operating system itself, and others."}),"\n",(0,o.jsx)(t.p,{children:"For the purpose of storing network node operation logs, it defaults to the /var/log/lightning directory where the files output.log (stdout) and diagnostic.log (stderr) is located and accumulated. As the node runs, the size of the files increase, as it aggregates all the output generated by the Fleek Network service operations, such as info, errors, etc."}),"\n",(0,o.jsx)(t.p,{children:"A Node Operator can configure the system to rotate, compress, and set maximum size of these files to safeguard any concerns or issues that can get out of control, such as causing disk space to become full quickly."}),"\n",(0,o.jsxs)(t.p,{children:["In this guide, we'll look into some options available to manage the logs. First, we'll look into journald.conf which controls where to store journal data (the journal is a component of systemd that handles all the messages in a Systemd enabled system). Afterwards, we'll look into ",(0,o.jsx)(t.a,{href:"https://linux.die.net/man/8/logrotate",children:"Logrotate"})," an application to help us manage automatic rotation and compression of log files."]}),"\n",(0,o.jsx)(t.p,{children:"In essence, the journal and the logs duplicate the same information, and we want to make sure that we set measures to control it."}),"\n",(0,o.jsx)(t.h2,{id:"journal",children:"Journal"}),"\n",(0,o.jsxs)(t.p,{children:["Journal is a component of Systemd, a centralized location for all messages logged by different components in a systemd-enabled Linux system. The systemd journal will happily run in parallel with the standard type log files in ",(0,o.jsx)(t.code,{children:"/var/log/*"})," where the Fleek Network Systemd Unit Service outputs Standard Output and Standard Error in the location ",(0,o.jsx)(t.code,{children:"/var/log/lightning/*.log"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Here, we are going to learn how to configure the ",(0,o.jsx)(t.code,{children:"journald.conf"})," service configuration file for the system-wide settings (meaning that it applies to all services), but firstly we're going to learn some commands to help us troubleshoot when necessary."]}),"\n",(0,o.jsx)(t.h3,{id:"commands",children:"Commands"}),"\n",(0,o.jsx)(t.h4,{id:"disk-utilization-checkup",children:"Disk utilization checkup"}),"\n",(0,o.jsx)(t.p,{children:"To check how much disk space is used by Systemd log files, run the command below:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo journalctl --disk-usage\n"})}),"\n",(0,o.jsx)(t.p,{children:"It provides information of how much disk space is utilized by the log files in your system."}),"\n",(0,o.jsx)(t.h4,{id:"clearing-logs-manually",children:"Clearing logs manually"}),"\n",(0,o.jsxs)(t.p,{children:["The best way to clear log files is done automatically by the ",(0,o.jsx)(t.code,{children:"journald.conf"})," configuration file, discussed in ",(0,o.jsx)(t.a,{href:"#configuration-file",children:"Configuration file"}),". In the ideal world, you shouldn't have to manually delete the log files, but this can be useful to know about when troubleshooting."]}),"\n",(0,o.jsxs)(t.p,{children:["To ",(0,o.jsx)(t.code,{children:"flush"})," the log files run the command below:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo journalctl --flush --rotate\nsudo journalctl --vacuum-time=1s\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsx)(t.p,{children:"The flush and rotate flag is used, as vaccum-time only clears archived logs and not active ones. It'll flush:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Move /run/log/journal to /var/log/journal"}),"\n",(0,o.jsx)(t.li,{children:"Rotate (this flag archives logs and retains it)"}),"\n"]}),(0,o.jsx)(t.p,{children:"Since it'll only keep the past 1-second-long files, it'll effectively clear everything."})]}),"\n",(0,o.jsx)(t.h4,{id:"follow-or-tail-logs-of-service",children:"Follow or tail logs of service"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo journalctl -u <SERVICE-NAME>.service -f\n"})}),"\n",(0,o.jsx)(t.p,{children:"For example, for a conventional native install (if you haven't followed the conventions, make the appropriate tweaks to fit your needs)."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo journalctl -u lightning.service -f\n"})}),"\n",(0,o.jsx)(t.p,{children:"The Docker service"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo journalctl -u docker-lightning.service -f\n"})}),"\n",(0,o.jsx)(t.h4,{id:"show-all-service-entries",children:"Show all service entries"}),"\n",(0,o.jsx)(t.p,{children:"Show all journal entries, which can be fairly long:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo journalctl\n"})}),"\n",(0,o.jsx)(t.h3,{id:"configuration-file",children:"Configuration file"}),"\n",(0,o.jsxs)(t.p,{children:["The default configuration file is located at ",(0,o.jsx)(t.code,{children:"/etc/systemd/journald.conf"}),". This is the main file that journal reads the configuration from, for the system instances that are controlled by root."]}),"\n",(0,o.jsxs)(t.p,{children:["In addition to the main configuration file there are a few other locations that take higher precedence and override the main configuration file. To learn more about journald read ",(0,o.jsx)(t.a,{href:"https://www.freedesktop.org/software/systemd/man/latest/journald.conf.html#Options",children:"here"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["To keep the guide short we are going to use the main location ",(0,o.jsx)(t.code,{children:"/etc/systemd/journald.conf"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"create-the-directory-and-config-file",children:"Create the directory and config file"}),"\n",(0,o.jsxs)(t.p,{children:["If the ",(0,o.jsx)(t.code,{children:"/etc/systemd/journald.conf"})," file doesn't exist, create it by:"]}),"\n",(0,o.jsxs)(t.p,{children:["Create the ",(0,o.jsx)(t.code,{children:"journald.conf"})," file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo touch /etc/systemd/journald.conf\n"})}),"\n",(0,o.jsx)(t.h3,{id:"configuration-settings",children:"Configuration settings"}),"\n",(0,o.jsx)(t.p,{children:"The Systemd provides many options for you to manage the log files and by combining these parameters you can limit the disk space used by the journal files."}),"\n",(0,o.jsxs)(t.p,{children:["A list of the available options are ",(0,o.jsx)(t.a,{href:"https://www.freedesktop.org/software/systemd/man/latest/journald.conf.html#Options",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Here is a quick description of the options we're going to use for our example:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Storage"}),", controls where to store journal data"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"SystemMaxUse"}),", specifies the maximum disk space that can be used by the journal in persistent storage"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"SystemMaxFileSize"}),", controls how large individual journal files can grow to in persistent storage before being rotated"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"RuntimeMaxUse"}),", control how much disk space the journal may use up at most"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["You should open the ",(0,o.jsx)(t.code,{children:"/etc/systemd/journald.conf"})," file in your favorite text editor and put:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-toml",children:"[Journal]\nStorage=persistent\nSystemMaxUse=1G\nSystemMaxFileSize=100M\nRuntimeMaxUse=100M\n"})}),"\n",(0,o.jsx)(t.p,{children:"Here, we set 1G and 100M, which means 1 Gigabyte and 100 Megabytes. You can also use K for Kbytes, amongst others."}),"\n",(0,o.jsx)(t.p,{children:"After the changes, you have to restart the journald after updating the file. To restart use the command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo systemctl restart systemd-journald\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can verify the integrity of the log files by running:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo journalctl --verify\n"})}),"\n",(0,o.jsx)(t.h2,{id:"logrotate",children:"Logrotate"}),"\n",(0,o.jsx)(t.p,{children:"Logrotate is a tool to manage the log files created by a system processes. It can automatically compress, rename, remove logs and more for your convenience and save your system's resources. Log files can be handled timely, or when it grows too large."}),"\n",(0,o.jsx)(t.h3,{id:"prerequesite",children:"Prerequesite"}),"\n",(0,o.jsx)(t.p,{children:"The logrotate tools is available by default on Ubuntu."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"We're using Ubuntu for our guide to keep it simple. If you are using a different and support operating system make sure you install Logrotate before proceeding."})}),"\n",(0,o.jsx)(t.p,{children:"You can check if logrotate is installed by executing:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"logrotate --version\n"})}),"\n",(0,o.jsx)(t.p,{children:"At the time this guide was written, we got the following output:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"logrotate 3.21.0\n\n    Default mail command:       /usr/bin/mail\n    Default compress command:   /bin/gzip\n    Default uncompress command: /bin/gunzip\n    Default compress extension: .gz\n    Default state file path:    /var/lib/logrotate/status\n    ACL support:                yes\n    SELinux support:            yes\n"})}),"\n",(0,o.jsx)(t.p,{children:"If you run an earlier or older version, changes or tweaks might apply."}),"\n",(0,o.jsx)(t.h3,{id:"explore-the-configuration-files",children:"Explore the Configuration files"}),"\n",(0,o.jsx)(t.p,{children:"The configuration files we'll be exploring today are found in the following locations in Ubuntu:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"/etc/logrotate.conf"}),", is the main configuration settings file. It includes the statement to pull in configuration files from other directories, e.g. the ",(0,o.jsx)(t.code,{children:"/etc/logrotate.d"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"/etc/logrotate.d/"}),", a directory where packages drop log rotation information"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"We use Ubuntu for our guide, if you are on a different distro, you have to determine the file configuration file locations"})}),"\n",(0,o.jsxs)(t.p,{children:["The content of the file ",(0,o.jsx)(t.code,{children:"/etc/logrotate.conf"})," should be similar to:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'# see "man logrotate" for details\n\n# global options do not affect preceding include directives\n\n# rotate log files weekly\nweekly\n\n# use the adm group by default, since this is the owning group\n# of /var/log/.\nsu root adm\n\n# keep 4 weeks worth of backlogs\nrotate 4\n\n# create new (empty) log files after rotating old ones\ncreate\n\n# use date as a suffix of the rotated file\n#dateext\n\n# uncomment this if you want your log files compressed\n#compress\n\n# packages drop log rotation information into this directory\ninclude /etc/logrotate.d\n\n# system-specific logs may also be configured here.\n'})}),"\n",(0,o.jsx)(t.p,{children:"The configuration settings if anything like the above, tell us that the rotation happens weekly, keeping 4 weeks worth of backlogs, etc."}),"\n",(0,o.jsxs)(t.p,{children:["To learn more about other configuration options consult the ",(0,o.jsx)(t.a,{href:"https://linux.die.net/man/8/logrotate",children:"logrotate manual page"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"create-the-lightning-logrotate-configuration-file",children:"Create the Lightning logrotate configuration file"}),"\n",(0,o.jsx)(t.p,{children:"Let's create a Logrotate configuration file for Fleek Network Lightning Service. Create the file by running the command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo touch /etc/logrotate.d/lightning\n"})}),"\n",(0,o.jsx)(t.h3,{id:"lightning-configuration-settings",children:"Lightning Configuration Settings"}),"\n",(0,o.jsxs)(t.p,{children:["Open the recently created file ",(0,o.jsx)(t.code,{children:"/etc/logrotate.d/lightning"})," in your favorite text editor."]}),"\n",(0,o.jsx)(t.p,{children:"Add the following lines to the file:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"/var/log/lightning/*.log {\n    rotate 5\n    daily\n    size 50M\n    notifempty\n    compress\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Remember to save the file before exiting the text editor. You can test the configuration file by running the command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sudo logrotate /etc/logrotate.conf --debug\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The configuration file above declares that for the log files in the ",(0,o.jsx)(t.code,{children:"/var/log/lightning"})," directory, the log files are rotated 5 times daily before being removed, as long they grow bigger than 50 megabytes in file size or empty. Old versions of log files are compressed with gzip."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Bear in mind that this configuration file also inherit the default behavior, e.g. the ",(0,o.jsx)(t.code,{children:"create"})," as set in the main configuration file ",(0,o.jsx)(t.code,{children:"/etc/logrotate.conf"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["Feel free to customize the settings to your liking by checking the documentation in the ",(0,o.jsx)(t.a,{href:"https://linux.die.net/man/8/logrotate",children:"logrotate manual page"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"cron-job",children:"Cron job"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Depending on the operating system, you have to set up a cron job to execute logrotate with the configuration file daily. Since we are using Ubuntu for our example, a daily cron job runner is already set up for us. If you are on a different Distro/OS make the required amends."})}),"\n",(0,o.jsxs)(t.p,{children:["Verify that the ",(0,o.jsx)(t.code,{children:"/etc/cron.daily/logrotate"})," exists and includes the execution of ",(0,o.jsx)(t.code,{children:"logrotate"})," with the configuration argument ",(0,o.jsx)(t.code,{children:"/etc/logrotate.conf"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"/usr/sbin/logrotate /etc/logrotate.conf\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"If you have modified the location of the binary or main configuration file, make sure this is set correctly to your custom locations."})}),"\n",(0,o.jsxs)(t.p,{children:["To summarize, the ",(0,o.jsx)(t.code,{children:"logrotate /etc/logrotate.conf"})," is executed and as logrotate.conf goes through its list of commands, it calls ",(0,o.jsx)(t.code,{children:"include /etc/logrotate.d"}),". It means that any scripts in ",(0,o.jsx)(t.code,{children:"/etc/logrotate.d"})," are executed, such as the ",(0,o.jsx)(t.a,{href:"#lightning-configuration-settings",children:"Lightning Configuration Settings"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(t.p,{children:"The guide starts by warning us about the stream text messages that the Fleek Network emits by default. As the text data is aggregated and stored in the file system it can lead to fill up the limited available disk space quickly, causing issues to the operation of the system."}),"\n",(0,o.jsx)(t.p,{children:"To help control it, the journald is introduced, by explaining its role as a centralized message system, that runs alongside the application logs. Then, have it configured to limit the maximum file size, amongst other system-wide settings."}),"\n",(0,o.jsx)(t.p,{children:"Finally, logrotate is discussed in helping us manage the Fleek Network Lightning application log files by setting it to automatically compress, rename, remove logs for the system admin convenience and saving system's resources."}),"\n",(0,o.jsx)(s.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function g(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},3872:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var o=n(5893);const i=e=>{let{image:t,name:n,title:i,url:s,communityMember:r=!1}=e;return(0,o.jsx)("section",{className:"author_card",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"avatar",children:(0,o.jsx)("a",{href:s,target:"_blank",alt:n,children:(0,o.jsx)("img",{src:t,alt:n})})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"name",children:(0,o.jsx)("a",{href:s,target:"_blank",alt:n,children:n})}),(0,o.jsx)("span",{className:"title",children:i}),(0,o.jsxs)("span",{className:"discord",children:[r?"Join our community on":"Got questions? Find us on"," ",(0,o.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},4110:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/managing-the-keystore-fe4cdb19d2f59c54bcf864b0e069b535.png"},5407:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/how-to-manage-log-files-be3f38ea329523fb5ec346ee98946dbe.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var o=n(7294);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);