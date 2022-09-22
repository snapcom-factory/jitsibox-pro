
# Installation détaillée

Ubuntu 22.04

### Etape 1: Mise a jour & telechargement des packages

    sudo apt-get update
    sudo apt-get install dkms libc6-dev git npm wget unzip xinit unclutter xorg openbox pulseaudio apt-transport-https plymouth-themes plymouth-label 

### Etape 2: Creation des dossiers

```bash
root-directory
├── opt
│   └── jitsi (dossier globale du projet)
│       ├── display-link-driver (installation driver de l\'ecran touch)
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


    sudo install -d -m 0755 -o jitsi-box-pro -g jitsi-box-pro /opt/jitsi/display-link-driver /opt/jitsi/nodejs /opt/jitsi/kiosk /opt/jitsi/monitor1 /opt/jitsi/monitor2 /usr/share/plymouth/themes/jitsi-box-pro /home/jitsi-box-pro/.config/openbox


### Etape 3: Installation Edge


    wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main"
    sudo apt update && sudo apt install microsoft-edge-stable -y


### Etape 4: Display Link Driver 

    sudo curl https://www.synaptics.com/sites/default/files/exe_files/2022-08/DisplayLink%20USB%20Graphics%20Software%20for%20Ubuntu5.6.1-EXE.zip --output /opt/jitsi/display-link-driver/driver.zip
