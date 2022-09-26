
# Installation détaillée

Hardware:

- [x] Ecran Principale - Ecran `1920x1080`
- [x] Ecran touch - Polycom GC8 `1280x800`
- [x] Camera/Microphone - Polycom Studio
- [x] PC - NUC
    - [x] CPU - Xeon E3-1200 v6 (7eme generation)
    - [x] GPU - Iris Plus Graphics 640
    - [x] RAM - 8 GB

Software:
- [x] Ubuntu `22.04`
- [x] Microsoft Edge `105.0.1343.27`
- [x] Display Link Driver `5.6.1-59.184`
- [x] NodeJS `18.8.0`


## Arborescence du projet
```bash
root-directory
├── opt
│   ├── display-link-driver (installation driver de l\'ecran touch)
│   ├── microsoft (installation msedge)
│   └── jitsi (dossier globale du projet)
│       ├── nodejs (installation NodeJS)
│       ├── monitor1 (configuration de l\'ecran TV)
│       ├── monitor2 (configuration de l\'ecran touch)
│       └── jitsi-box-pro (projet git)
└── usr
│   └── share
│       └── plymouth
│           └── themes
│               └── jitsi-box-pro (pour afficher les logos au boot)
└── home
│   └── jitsi-box-pro
│       └── .config
│           └── openbox (scripts de demarrage)
└── etc
    └── systemd
        └── system
            └── x11-autologin.service (service de autologin)

```

### Etape 1: Mise à jour & téléchargement des packages

Installation des packages nécessaire:

    sudo apt-get update && sudo apt-get install dkms libc6-dev git npm wget unzip xinit unclutter xorg openbox pulseaudio apt-transport-https plymouth-themes plymouth-label -y

Sélectionnez tous les services et cliquez sur OK

### Etape 2: Création des dossiers

Création des dossiers du projet:

    mkdir -p /opt/{display-link-driver,microsoft} /opt/jitsi/{nodejs,kiosk,monitor1,monitor2} /usr/share/plymouth/themes/jitsi-box-pro /home/jitsi-box-pro/.config/openbox

### Etape 3: Installation Microsoft Edge

Récupération du repo Microsoft Edge pour l'installer:

    sudo curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg &&
    sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/ &&
    sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-dev.list' &&
    sudo rm microsoft.gpg &&
    sudo apt update && sudo apt install microsoft-edge-stable -y

Vérification de la version: `105.0.1343.27`

    microsoft-edge --version
### Etape 4: Display Link Driver 

Téléchargement du fichier ZIP, extraction et exécution du script pour installer le driver:

    sudo curl https://www.synaptics.com/sites/default/files/exe_files/2022-08/DisplayLink%20USB%20Graphics%20Software%20for%20Ubuntu5.6.1-EXE.zip --output /opt/display-link-driver/driver.zip &&

    sudo unzip /opt/display-link-driver/driver.zip -d /opt/display-link-driver/ &&

    sudo /opt/display-link-driver/displaylink-driver-5.6.1-59.184.run

Choisissez `oui` pour exécuter le script.

### Etape 5: Installation NodeJS


Téléchargement du NodeJS extraction et exécution du script pour installer la version 18.8.0:

    sudo curl https://nodejs.org/dist/v18.8.0/node-v18.8.0-linux-x64.tar.xz --output /opt/jitsi/nodejs/node-v18.8.0-linux-x64.tar.xz &&

    sudo tar -xf /opt/jitsi/nodejs/node-v18.8.0-linux-x64.tar.xz -C /opt/jitsi/nodejs/ &&

    sudo cp -r /opt/jitsi/nodejs/node-v18.8.0-linux-x64/{bin,lib,share,include} /usr

Vérification de la version: `(18.8.0)`

    node -v

### Etape 6: Installation & configuration du projet Jitsi Box Pro

Récupération du projet depuis github:

    sudo git clone https://github.com/snapcom-factory/jitsibox-pro.git /opt/jitsi/jitsi-box-pro && sudo chown 

Création du fichier ``.ENV`` pour la configuration du contrôleur:
:::caution
Veuillez remplacer les valeurs dans le valiables!
:::

    cat << 'EOF' > /opt/jitsi/jitsi-box-pro/apps/controller/.env
    VITE_DOMAIN = meet.jit.si
    VITE_COMPANY_NAME = COMPANY
    VITE_COMPANY_NAME2 = NAME
    EOF

Création du fichier``.ENV`` pour la configuration de la main-screen:
:::caution
Veuillez remplacer les valeurs dans le valiables!
:::

    cat << 'EOF' > /opt/jitsi/jitsi-box-pro/apps/main-screen/.env
    VITE_WEBCONF_TOKEN =
    VITE_DOMAIN = meet.jit.si
    VITE_COMPANY_NAME = COMPANY
    VITE_COMPANY_NAME2 = NAME
    VITE_ROOM_NAME = MY_ROOM
    VITE_API_KEY =
    VITE_API_UR = 
    EOF


### Etape 7: Installation NPM packages

Installation des packages pour l'exécution du projet :

    npm install --prefix /opt/jitsi/jitsi-box-pro/ concurrently --save && npm run --prefix /opt/jitsi/jitsi-box-pro/ install-packages

### Etape 8: Autologin

Création du service ``Autologin`` pour entrer automatiquement intimement dans l Jitsi-Box-Pro sans entrer le mot de passe :

    sudo vi /etc/systemd/system/x11-autologin.service

Collez dans le fichier :

    [Unit]
    Description=X11 session for Jitsi-box-pro
    After=graphical.target systemd-user-sessions.service

    [Service]
    User=jitsi-box-pro
    WorkingDirectory=~

    PAMName=login
    Environment=XDG_SESSION_TYPE=x11
    TTYPath=/dev/tty8
    StandardInput=tty
    UnsetEnvironment=TERM

    UtmpIdentifier=tty8
    UtmpMode=user

    StandardOutput=journal
    ExecStartPre=/usr/bin/chvt 8
    ExecStart=/usr/bin/startx -- vt8 -keeptty -verbose 3 -logfile /dev/null
    Restart=no

    [Install]
    WantedBy=graphical.target


Activation du service au redémarrage:

    sudo systemctl enable x11-autologin.service && sudo cp /etc/X11/xinit/xinitrc /opt/xinitrc


 ### Etape 9: Script au demarrage

Création du script au démarrage pour qu'il exécute la liaison hardware et le projet:

:::caution
Veuillez vérifier que la résolution et les noms des sorties sont corrects sur votre machine en exécutant ``xrandr -q``
:::

    cat << 'EOF' > /home/jitsi-box-pro/.config/openbox/autostart
    
    # Masquer la souris à l'écran
    unclutter &

    # Désactiver le port tactile (pour déboguer l'écran tactile)
    xrandr --output DVI-I-1-1 --off && sleep 1 &&

    # Créer un affichage 1920x1080 (écran principal) (DP-1 est le nom de la sortie)
    xrandr --auto --output DP-1 --mode 1920x1080 --left-of DVI-I-1-1 &&

    # Créer un affichage 1280x800 (tactile) (DVI-I-1-1 est le nom de la sortie)
    xrandr --auto --output DVI-I-1-1 --mode 1280x800 --right-of DP-1 &&

    #  Mapper l'écran tactile poly à DVI-I-1-1 (pour que le toucher puisse fonctionner sur l'écran tactile)
    xinput map-to-output "Poly, Inc. Poly ULCC" DVI-I-1-1 &

    # Définir la sortie par défaut à Poly Studio
    pactl set-default-sink alsa_output.usb-Polycom__Inc._Polycom_Studio_8G212864AD4CF9-03.analog-stereo &

    # Définir le défaut inpuit à Poly Studio
    pactl set-default-source alsa_input.usb-Polycom__Inc._Polycom_Studio_8G212864AD4CF9-03.analog-stereo &

    # Empêcher les écrans de s'endormir
    xset s off && xset -dpms &

    # Exécuter le projet et ouvrir les fenêtres du navigateur
    cd /home/jitsi-box-pro/.config/openbox/ && ./server.sh &
    cd /home/jitsi-box-pro/.config/openbox/ && ./main-screen.sh &
    cd /home/jitsi-box-pro/.config/openbox/ && ./controller.sh &


    EOF

    sudo chmod +x /home/jitsi-box-pro/.config/openbox/autostart



 ### Etape 10: Script Serveur

Création du script serveur pour lancer l'exécution du jitsi-box-pro:

    cat << 'EOF' > /home/jitsi-box-pro/.config/openbox/server.sh
    #!/bin/bash
    cd /opt/jitsi/jitsi-box-pro/ && npm run dev &
    EOF

    chmod +x /home/jitsi-box-pro/.config/openbox/server.sh
 ### Etape 11: Script Main-screen

Création du script main-screen pour lancer l'exécution de la main-screen en ouvrant une page Edge en mode kiosk avec l'adresse prédéfinie:

:::caution
Veuillez changer la partie adresse si vous avez changé cette partie dans la configuration du projet jitsi-box-pro.
:::

    cat << 'EOF' > /home/jitsi-box-pro/.config/openbox/main-screen.sh 
    #!/bin/bash
    /usr/bin/microsoft-edge --profile-directory="Profile 1" --window-position=0,0 --kiosk http://localhost:3002 --user-data-dir=/opt/jitsi/monitor1/ &

    EOF

    chmod +x /home/jitsi-box-pro/.config/openbox/main-screen.sh
 ### Etape 12: Script Controlleur

Création du script controlleur pour lancer l'exécution du controlleur en ouvrant une page Edge en mode kiosk avec l'adresse l'adresse prédéfinie:

:::caution
Veuillez  changer la partie adresse si vous avez changé cette partie dans la configuration du projet jitsi-box-pro.<br></br>
Veuillez  changer la partie ``--window-position`` si la talle de votre écran est different!
:::

    cat << 'EOF' > /home/jitsi-box-pro/.config/openbox/controller.sh
    #!/bin/bash
    /usr/bin/microsoft-edge --profile-directory="Profile 1" --window-position=1920,0 --kiosk http://localhost:3000 --user-data-dir=/opt/jitsi/monitor2/ &

    EOF

    chmod +x /home/jitsi-box-pro/.config/openbox/controller.sh

 ### Etape 13: Logo au redémarrage

Faire en sorte que le processus de démarrage soit silencieux et de ne pas afficher toutes sortes de messages qui perturberaient l'écran d'accueil: 

    sudo sed -i 's/GRUB_CMDLINE_LINUX_DEFAULT=""/GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"/g' /etc/default/grub && sudo update-grub

Creation du theme Jitsi-Box-Pro pour changer l'ecran de demarrage:
 
    cat << 'EOF' > /usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.plymouth
    [Plymouth Theme]
    Name=jitsi-box-pro
    Description=Jitsi Box Pro theme
    ModuleName=script

    [script]
    ImageDir=/usr/share/plymouth/themes/jitsi-box-pro
    ScriptFile=/usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.script
    EOF

    chmod +x /usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.plymouth

Création du script Jitsi-Box-Pro pour utiliser une photo spécifique au démarrage:

    cat << 'EOF' > /usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.script
    wallpaper_image=Image("logo.png");
    screen_width=Window.GetWidth();
    screen_height=Window.GetHeight();
    resized_wallpaper_image=wallpaper_image.Scale(screen_width,screen_height);
    wallpaper_sprite=Sprite(resized_wallpaper_image);
    wallpaper_sprite.SetZ(-100);
    EOF

    chmod +x /usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.script

Déplacer la photo dans le répertoire du thème jitsi-box-pro:

    sudo cp -rp /opt/jitsi/jitsi-box-pro/logo.png /usr/share/plymouth/themes/jitsi-box-pro/logo.png

Mise à jour du thème en donnant la priorité 111:

    sudo update-alternatives --install /usr/share/plymouth/themes/default.plymouth default.plymouth /usr/share/plymouth/themes/jitsi-box-pro/jitsi-box-pro.plymouth 111

Mise à jour du initramfs:

    sudo update-initramfs -u


### Etape 14: Redemarrage

Modification des droits pour l'utilisateur jitsi-box-pro permet à l'exécution des scripts et services:

    sudo chown jitsi-box-pro:jitsi-box-pro /opt/ ~/.config/ -R && sudo reboot

### Etape 15: Apres Redemarrage

Après le redémarrage vous avec l'écran d'accueil du Microsoft Edge, veuillez redémarrer le PC encore une fois pour ne pas avoir cet écran d'accueil.

Créez une conférence, pour la première fois cliquez sur ``accepter les périphériques``.