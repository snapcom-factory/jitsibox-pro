"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a="Installation d\xe9taill\xe9e",l={unversionedId:"installation/linux/linux",id:"installation/linux/linux",title:"Installation d\xe9taill\xe9e",description:"- [x] Ubuntu 22.04",source:"@site/docs/installation/linux/linux.md",sourceDirName:"installation/linux",slug:"/installation/linux/",permalink:"/jitsibox-pro/en/docs/installation/linux/",draft:!1,editUrl:"https://github.com/snapcom-factory/jitsibox-pro/tree/wiki/i18n/en/docusaurus-plugin-content-docs/current/installation/linux/linux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Branchement du materiel",permalink:"/jitsibox-pro/en/docs/installation/branchement/"},next:{title:"Installation d\xe9taill\xe9e",permalink:"/jitsibox-pro/en/docs/installation/windows/"}},s={},p=[{value:"Arborescence du projet",id:"arborescence-du-projet",level:2},{value:"Etape 1: Mise \xe0 jour &amp; t\xe9l\xe9chargement des packages",id:"etape-1-mise-\xe0-jour--t\xe9l\xe9chargement-des-packages",level:3},{value:"Etape 2: Cr\xe9ation des dossiers",id:"etape-2-cr\xe9ation-des-dossiers",level:3},{value:"Etape 3: Installation Microsoft Edge",id:"etape-3-installation-microsoft-edge",level:3},{value:"Etape 4: Display Link Driver",id:"etape-4-display-link-driver",level:3},{value:"Etape 5: Installation NodeJS",id:"etape-5-installation-nodejs",level:3},{value:"Etape 5: Installation &amp; configuration du projet Jitsi Box Pro",id:"etape-5-installation--configuration-du-projet-jitsi-box-pro",level:3},{value:"Etape 5: Installation NPM packages",id:"etape-5-installation-npm-packages",level:3},{value:"Etape 5: Autologin",id:"etape-5-autologin",level:3},{value:"Etape 6: Script au demarrage",id:"etape-6-script-au-demarrage",level:3},{value:"Etape 7: Script Serveur",id:"etape-7-script-serveur",level:3},{value:"Etape 8: Script Main-screen",id:"etape-8-script-main-screen",level:3},{value:"Etape 9: Script Controlleur",id:"etape-9-script-controlleur",level:3},{value:"Etape 10: Logo au red\xe9marrage",id:"etape-10-logo-au-red\xe9marrage",level:3},{value:"Etape 11: Redemarrage",id:"etape-11-redemarrage",level:3},{value:"Etape 12: Apres Redemarrage",id:"etape-12-apres-redemarrage",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-d\xe9taill\xe9e"},"Installation d\xe9taill\xe9e"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Ubuntu ",(0,i.kt)("inlineCode",{parentName:"li"},"22.04")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Microsoft Edge ",(0,i.kt)("inlineCode",{parentName:"li"},"105.0.1343.27")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Display Link Driver ",(0,i.kt)("inlineCode",{parentName:"li"},"5.6.1-59.184")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","NodeJS ",(0,i.kt)("inlineCode",{parentName:"li"},"18.8.0"))),(0,i.kt)("h2",{id:"arborescence-du-projet"},"Arborescence du projet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"root-directory\n\u251c\u2500\u2500 opt\n\u2502   \u251c\u2500\u2500 display-link-driver (installation driver de l\\'ecran touch)\n\u2502   \u251c\u2500\u2500 microsoft (installation msedge)\n\u2502   \u2514\u2500\u2500 jitsi (dossier globale du projet)\n\u2502       \u251c\u2500\u2500 nodejs (installation NodeJS)\n\u2502       \u251c\u2500\u2500 monitor1 (configuration de l\\'ecran TV)\n\u2502       \u251c\u2500\u2500 monitor2 (configuration de l\\'ecran touch)\n\u2502       \u2514\u2500\u2500 jitsi-box-pro (projet git)\n\u2514\u2500\u2500 usr\n\u2502   \u2514\u2500\u2500 share\n\u2502       \u2514\u2500\u2500 plymouth\n\u2502           \u2514\u2500\u2500 themes\n\u2502               \u2514\u2500\u2500 jitsi-box-pro (pour afficher les logos au boot)\n\u2514\u2500\u2500 home\n\u2502   \u2514\u2500\u2500 jitsi-box-pro\n\u2502       \u2514\u2500\u2500 .config\n\u2502           \u2514\u2500\u2500 openbox (scripts de demarrage)\n\u2514\u2500\u2500 etc\n    \u2514\u2500\u2500 systemd\n        \u2514\u2500\u2500 system\n            \u2514\u2500\u2500 x11-autologin.service (service de autologin)\n\n")),(0,i.kt)("h3",{id:"etape-1-mise-\xe0-jour--t\xe9l\xe9chargement-des-packages"},"Etape 1: Mise \xe0 jour & t\xe9l\xe9chargement des packages"),(0,i.kt)("p",null,"Installation des packages n\xe9cessaire:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get update && sudo apt-get install dkms libc6-dev git npm wget unzip xinit unclutter xorg openbox pulseaudio apt-transport-https plymouth-themes plymouth-label -y\n")),(0,i.kt)("p",null,"S\xe9lectionnez tous les services et cliquez sur OK"),(0,i.kt)("h3",{id:"etape-2-cr\xe9ation-des-dossiers"},"Etape 2: Cr\xe9ation des dossiers"),(0,i.kt)("p",null,"Cr\xe9ation des dossiers du projet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir -p /opt/{display-link-driver,microsoft} /opt/jitsi/{nodejs,kiosk,monitor1,monitor2} /usr/share/plymouth/themes/jitsi-box-pro /home/jitsi-box-pro/.config/openbox\n")),(0,i.kt)("h3",{id:"etape-3-installation-microsoft-edge"},"Etape 3: Installation Microsoft Edge"),(0,i.kt)("p",null,"R\xe9cup\xe9ration du repo Microsoft Edge pour l'installer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg &&\nsudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/ &&\nsudo sh -c 'echo \"deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main\" > /etc/apt/sources.list.d/microsoft-edge-dev.list' &&\nsudo rm microsoft.gpg &&\nsudo apt update && sudo apt install microsoft-edge-stable -y\n")),(0,i.kt)("p",null,"V\xe9rification de la version: ",(0,i.kt)("inlineCode",{parentName:"p"},"105.0.1343.27")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"microsoft-edge --version\n")),(0,i.kt)("h3",{id:"etape-4-display-link-driver"},"Etape 4: Display Link Driver"),(0,i.kt)("p",null,"T\xe9l\xe9chargement du fichier ZIP, extraction et ex\xe9cution du script pour installer le driver:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo curl https://www.synaptics.com/sites/default/files/exe_files/2022-08/DisplayLink%20USB%20Graphics%20Software%20for%20Ubuntu5.6.1-EXE.zip --output /opt/display-link-driver/driver.zip &&\n\nsudo unzip /opt/display-link-driver/driver.zip -d /opt/display-link-driver/ &&\n\nsudo /opt/display-link-driver/displaylink-driver-5.6.1-59.184.run\n")),(0,i.kt)("p",null,"Choisissez ",(0,i.kt)("inlineCode",{parentName:"p"},"oui")," pour ex\xe9cuter le script."),(0,i.kt)("h3",{id:"etape-5-installation-nodejs"},"Etape 5: Installation NodeJS"),(0,i.kt)("p",null,"T\xe9l\xe9chargement du NodeJS extraction et ex\xe9cution du script pour installer la version 18.8.0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo curl https://nodejs.org/dist/v18.8.0/node-v18.8.0-linux-x64.tar.xz --output /opt/jitsi/nodejs/node-v18.8.0-linux-x64.tar.xz &&\n\nsudo tar -xf /opt/jitsi/nodejs/node-v18.8.0-linux-x64.tar.xz -C /opt/jitsi/nodejs/ &&\n\nsudo cp -r /opt/jitsi/nodejs/node-v18.8.0-linux-x64/{bin,lib,share,include} /usr\n")),(0,i.kt)("p",null,"V\xe9rification de la version: ",(0,i.kt)("inlineCode",{parentName:"p"},"(18.8.0)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"node -v\n")),(0,i.kt)("h3",{id:"etape-5-installation--configuration-du-projet-jitsi-box-pro"},"Etape 5: Installation & configuration du projet Jitsi Box Pro"),(0,i.kt)("p",null,"R\xe9cup\xe9ration du projet depuis github:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo git clone https://github.com/snapcom-factory/jitsibox-pro.git /opt/jitsi/jitsi-box-pro && sudo chown \n")),(0,i.kt)("p",null,"Cr\xe9ation du fichier ",(0,i.kt)("inlineCode",{parentName:"p"},".ENV")," pour la configuration du contr\xf4leur:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Veuillez remplacer les valeurs dans le valiables!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat << 'EOF' > /opt/jitsi/jitsi-box-pro/apps/controller/.env\nVITE_DOMAIN = meet.jit.si\nVITE_COMPANY_NAME = COMPANY\nVITE_COMPANY_NAME2 = NAME\nEOF\n")),(0,i.kt)("p",null,"Cr\xe9ation du fichier",(0,i.kt)("inlineCode",{parentName:"p"},".ENV")," pour la configuration de la main-screen:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Veuillez remplacer les valeurs dans le valiables!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat << 'EOF' > /opt/jitsi/jitsi-box-pro/apps/main-screen/.env\nVITE_WEBCONF_TOKEN =\nVITE_DOMAIN = meet.jit.si\nVITE_COMPANY_NAME = COMPANY\nVITE_COMPANY_NAME2 = NAME\nVITE_ROOM_NAME = MY_ROOM\nVITE_API_KEY =\nVITE_API_UR = \nEOF\n")),(0,i.kt)("h3",{id:"etape-5-installation-npm-packages"},"Etape 5: Installation NPM packages"),(0,i.kt)("p",null,"Installation des packages pour l'ex\xe9cution du projet :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --prefix /opt/jitsi/jitsi-box-pro/ concurrently --save && npm run --prefix /opt/jitsi/jitsi-box-pro/ install-packages\n")),(0,i.kt)("h3",{id:"etape-5-autologin"},"Etape 5: Autologin"),(0,i.kt)("p",null,"Cr\xe9ation du service ",(0,i.kt)("inlineCode",{parentName:"p"},"Autologin")," pour entrer automatiquement intimement dans l Jitsi-Box-Pro sans entrer le mot de passe :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo vi /etc/systemd/system/x11-autologin.service\n")),(0,i.kt)("p",null,"Collez dans le fichier :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[Unit]\nDescription=X11 session for Jitsi-box-pro\nAfter=graphical.target systemd-user-sessions.service\n\n[Service]\nUser=jitsi-box-pro\nWorkingDirectory=~\n\nPAMName=login\nEnvironment=XDG_SESSION_TYPE=x11\nTTYPath=/dev/tty8\nStandardInput=tty\nUnsetEnvironment=TERM\n\nUtmpIdentifier=tty8\nUtmpMode=user\n\nStandardOutput=journal\nExecStartPre=/usr/bin/chvt 8\nExecStart=/usr/bin/startx -- vt8 -keeptty -verbose 3 -logfile /dev/null\nRestart=no\n\n[Install]\nWantedBy=graphical.target\n")),(0,i.kt)("p",null,"Activation du service au red\xe9marrage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo systemctl enable x11-autologin.service && sudo cp /etc/X11/xinit/xinitrc /opt/xinitrc\n")),(0,i.kt)("h3",{id:"etape-6-script-au-demarrage"},"Etape 6: Script au demarrage"),(0,i.kt)("p",null,"Cr\xe9ation du script au d\xe9marrage pour qu'il ex\xe9cute la liaison hardware et le projet:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Veuillez v\xe9rifier que la r\xe9solution et les noms des sorties sont corrects sur votre machine en ex\xe9cutant ",(0,i.kt)("inlineCode",{parentName:"p"},"xrandr -q"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat << 'EOF' > /home/jitsi-box-pro/.config/openbox/autostart\n\n# Masquer la souris \xe0 l'\xe9cran\nunclutter &\n\n# D\xe9sactiver le port tactile (pour d\xe9boguer l'\xe9cran tactile)\nxrandr --output DVI-I-1-1 --off && sleep 1 &&\n\n# Cr\xe9er un affichage 1920x1080 (\xe9cran principal) (DP-1 est le nom de la sortie)\nxrandr --auto --output DP-1 --mode 1920x1080 --left-of DVI-I-1-1 &&\n\n# Cr\xe9er un affichage 1280x800 (tactile) (DVI-I-1-1 est le nom de la sortie)\nxrandr --auto --output DVI-I-1-1 --mode 1280x800 --right-of DP-1 &&\n\n#  Mapper l'\xe9cran tactile poly \xe0 DVI-I-1-1 (pour que le toucher puisse fonctionner sur l'\xe9cran tactile)\nxinput map-to-output \"Poly, Inc. Poly ULCC\" DVI-I-1-1 &\n\n# D\xe9finir la sortie par d\xe9faut \xe0 Poly Studio\npactl set-default-sink alsa_output.usb-Polycom__Inc._Polycom_Studio_8G212864AD4CF9-03.analog-stereo &\n\n# D\xe9finir le d\xe9faut inpuit \xe0 Poly Studio\npactl set-default-source alsa_input.usb-Polycom__Inc._Polycom_Studio_8G212864AD4CF9-03.analog-stereo &\n\n# Emp\xeacher les \xe9crans de s'endormir\nxset s off && xset -dpms &\n\n# Ex\xe9cuter le projet et ouvrir les fen\xeatres du navigateur\ncd /home/jitsi-box-pro/.config/openbox/ && ./server.sh &\ncd /home/jitsi-box-pro/.config/openbox/ && ./main-screen.sh &\ncd /home/jitsi-box-pro/.config/openbox/ && ./controller.sh &\n\n\nEOF\n\nsudo chmod +x /home/jitsi-box-pro/.config/openbox/autostart\n")),(0,i.kt)("h3",{id:"etape-7-script-serveur"},"Etape 7: Script Serveur"),(0,i.kt)("p",null,"Cr\xe9ation du script serveur pour lancer l'ex\xe9cution du jitsi-box-pro:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat << 'EOF' > /home/jitsi-box-pro/.config/openbox/server.sh\n#!/bin/bash\ncd /opt/jitsi/jitsi-box-pro/ && npm run dev &\nEOF\n\nchmod +x /home/jitsi-box-pro/.config/openbox/server.sh\n")),(0,i.kt)("h3",{id:"etape-8-script-main-screen"},"Etape 8: Script Main-screen"),(0,i.kt)("p",null,"Cr\xe9ation du script main-screen pour lancer l'ex\xe9cution de la main-screen en oeuvrant une page Edge en mode kiosk avec l'adresse pr\xe9d\xe9finie:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Veuillez changer la partie adresse si vous avez chang\xe9 cette partie dans la configuration du projet jitsi-box-pro.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat << 'EOF' > /home/jitsi-box-pro/.config/openbox/main-screen.sh \n#!/bin/bash\n/usr/bin/microsoft-edge --profile-directory=\"Profile 1\" --window-position=0,0 --kiosk http://localhost:3002 --user-data-dir=/opt/jitsi/monitor1/ &\n\nEOF\n\nchmod +x /home/jitsi-box-pro/.config/openbox/main-screen.sh\n")),(0,i.kt)("h3",{id:"etape-9-script-controlleur"},"Etape 9: Script Controlleur"),(0,i.kt)("p",null,"Cr\xe9ation du script controlleur pour lancer l'ex\xe9cution du controlleur en oeuvrant une page Edge en mode kiosk avec l'adresse l'adresse pr\xe9d\xe9finie:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Veuillez  changer la partie adresse si vous avez chang\xe9 cette partie dans la configuration du projet jitsi-box-pro.",(0,i.kt)("br",null),"\nVeuillez  changer la partie ",(0,i.kt)("inlineCode",{parentName:"p"},"--window-position")," si la talle de votre \xe9cran est different!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat << 'EOF' > /home/jitsi-box-pro/.config/openbox/controller.sh\n#!/bin/bash\n/usr/bin/microsoft-edge --profile-directory=\"Profile 1\" --window-position=1920,0 --kiosk http://localhost:3000 --user-data-dir=/opt/jitsi/monitor2/ &\n\nEOF\n\nchmod +x /home/jitsi-box-pro/.config/openbox/controller.sh\n")),(0,i.kt)("h3",{id:"etape-10-logo-au-red\xe9marrage"},"Etape 10: Logo au red\xe9marrage"),(0,i.kt)("p",null,"Faire en sorte que le processus de d\xe9marrage soit silencieux et de ne pas afficher toutes sortes de messages qui perturberaient l'\xe9cran d'accueil: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'sudo sed -i \'s/GRUB_CMDLINE_LINUX_DEFAULT=""/GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"/g\' /etc/default/grub && sudo update-grub\n')),(0,i.kt)("p",null,"Creation de la theme Jitsi-Box-Pro pour changer l'ecran de demarrage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat << 'EOF' > /usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.plymouth\n[Plymouth Theme]\nName=jitsi-box-pro\nDescription=Jitsi Box Pro theme\nModuleName=script\n\n[script]\nImageDir=/usr/share/plymouth/themes/jitsi-box-pro\nScriptFile=/usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.script\nEOF\n\nchmod +x /usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.plymouth\n")),(0,i.kt)("p",null,"Cr\xe9ation du script Jitsi-Box-Pro pour utiliser une photo sp\xe9cifique au d\xe9marrage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat << 'EOF' > /usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.script\nwallpaper_image=Image(\"logo.png\");\nscreen_width=Window.GetWidth();\nscreen_height=Window.GetHeight();\nresized_wallpaper_image=wallpaper_image.Scale(screen_width,screen_height);\nwallpaper_sprite=Sprite(resized_wallpaper_image);\nwallpaper_sprite.SetZ(-100);\nEOF\n\nchmod +x /usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.script\n")),(0,i.kt)("p",null,"D\xe9placer la photo dans le r\xe9pertoire du th\xe8me jitsi-box-pro:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo cp -rp /opt/jitsi/jitsi-box-pro/logo.png /usr/share/plymouth/themes/jitsi-box-pro/logo.png\n")),(0,i.kt)("p",null,"Mise \xe0 jour du th\xe8me en donnant la priorit\xe9 111:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo update-alternatives --install /usr/share/plymouth/themes/default.plymouth default.plymouth /usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.plymouth 111\n")),(0,i.kt)("p",null,"Mise \xe0 jour du initramfs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo update-initramfs -u\n")),(0,i.kt)("h3",{id:"etape-11-redemarrage"},"Etape 11: Redemarrage"),(0,i.kt)("p",null,"Modification des droits pour l'utilisateur jitsi-box-pro permet \xe0 l'ex\xe9cution des scripts et services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo chown jitsi-box-pro:jitsi-box-pro /opt/ ~/.config/ -R && sudo reboot\n")),(0,i.kt)("h3",{id:"etape-12-apres-redemarrage"},"Etape 12: Apres Redemarrage"),(0,i.kt)("p",null,"Apr\xe8s le red\xe9marrage vous avec l'\xe9cran d'accueil du Microsoft Edge, veuillez red\xe9marrer le PC encore une fois pour ne pas avoir cet \xe9cran d'accueil."),(0,i.kt)("p",null,"Cr\xe9ez une conf\xe9rence, pour la premi\xe8re fois cliquez sur ",(0,i.kt)("inlineCode",{parentName:"p"},"accepter les p\xe9riph\xe9riques"),"."))}c.isMDXComponent=!0}}]);