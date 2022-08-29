# Installation détaillée

## Depuis le compte admin

### Etape : Creation compte "Jitsi-Box-Pro"

- Cliquer sur le bouton `Windows`. ![image](https://user-images.githubusercontent.com/110535664/187230954-50f10bcb-51f4-481f-aa52-a3c23811d80a.png)
- Puis sur `Admin`. ![image](https://user-images.githubusercontent.com/110535664/187231239-00a19a03-26ae-4139-9146-ca889c8af93c.png)
- Cliquer ensuite sur  `Modifier les parametres de compte`. (image Modifier les parametres de compte)
- Puis sur `Famille et autres utilisateurs`. ![image](https://user-images.githubusercontent.com/110535664/187231993-53bd2928-395e-475a-bfa3-61a407a462a5.png)
- Cliquer sur `Ajouter un autre utilisateur sur ce PC`. ![image](https://user-images.githubusercontent.com/110535664/187232447-7147abeb-5b62-46c9-8a9c-a8efed0be799.png)
- Cliquer ensuite sur `Je ne dispose pas des informations de connexion de cette personne.`![image](https://user-images.githubusercontent.com/110535664/187233013-8e0eaee8-d541-45ae-b118-787b0dff11eb.png)
- Enfin cliquer sur `Ajouter un utilisateur sans compte Microsoft`. ![image](https://user-images.githubusercontent.com/110535664/187233114-a121fc68-ef03-4be9-a8ed-976d5cb37bd8.png)

- Remplir le formulaire Jitsi-Box-Pro. ![image](https://user-images.githubusercontent.com/110535664/187233352-64d6f299-32b3-4d09-87ba-f6f0f1cc5a58.png)
- Cliquez sur `Suivant`. ![image](https://user-images.githubusercontent.com/110535664/187233704-5e160e9c-eb34-4ef4-b4b0-f6b010d62785.png)
- Répondre `Non` à toutes les questions micrisift.



## Depuis le compte "Jitsi-Box-Pro" 

### Etape : Installation Chromium

- Aller sur https://download-chromium.appspot.com et télécharger le fichier .zip.
- Extraire le fichier en C.

### Etape : Installation Git

- Télécharger le fichier suivant : https://github.com/git-for-windows/git/releases/download/v2.37.2.windows.2/Git-2.37.2.2-64-bit.exe
- Cliquer sur `Next` à chaque étape.
- Cliquer sur `Finish`.

### Etape : Installation Node js

- Télécharger le fichier suivant : https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi
- Cliquer sur `Newt & Install`.

Etape : Configuration & ajout ecran touch

(Etape : Startup)

### Etape : Get Project

- Ouvrir `Git Bash`. ![image](https://user-images.githubusercontent.com/110535664/187235305-a79347c1-d0b5-4e86-960b-97a4360ce885.png)
- Exécuter les commandes suivantes :
    ```js
    cd C:\
    ```
    ```js
    git clone https://github.com/snapcom-factory/jitsibox-pro.git
    ```
- Fermer Git Bash.

### Etape : Configure Project

- Dans `C:\jitsibox-pro\apps\controller`, créer un fichier `.env`
- Insérer dans ce fichier : 
    ```js
    VITE_WEBCONF_TOKEN =
    ```

- Dans `C:\jitsibox-pro\apps\main-screen`, créer un fichier `.env`
- Insérer dans ce fichier : 
    ```js
    VITE_WEBCONF_TOKEN =
    VITE_DOMAIN = 
    ```
- Aller dans `C:\jitsibox-pro\packages\model\src`
- Ouvrir le fichier `constants`.
- Remplacer toutes les occurence de `localhost` par votre adresse IP.

- Ouvrir `Node.js command prompt`. ![image](https://user-images.githubusercontent.com/110535664/187236978-da226428-8c42-42be-a1c4-d6400d4b92ba.png)
- Exécuter les commandes suivantes :
    ```js
    cd C:\jitsibox-pro
    ```
    ```js
    npm i concurrently --save
    ```
    ```js
    npm run install-packages
    ```
    ```js
    npm run dev
    ```
    ```js
    C:\
    ```
    ```js
    git clone https://github.com/snapcom-factory/jitsibox-pro.git
    ```
- Fermer `Node.js command prompt`.

### Etape : Create Chromium "Jitsi-Box-Pro user"

- Ouvrir `chrome.exe` depuis `C:\chrome-win`.
- Cliquer sur ![image](https://user-images.githubusercontent.com/110535664/187238172-bc7776d8-1b06-4620-84fe-8f5b7f94f6a1.png)
- Cliquer sur `Ajouter`.![image](https://user-images.githubusercontent.com/110535664/187240623-632bcf59-1f02-400d-b6cf-ae351d0cb5a6.png)
- Remplir comme suit : ![image](https://user-images.githubusercontent.com/110535664/187240773-897d9838-afab-4517-832f-eba3901476d4.png)
- Vérifier que la case `Créer un raccourci sur le bureau` est bien cochée. ![image](https://user-images.githubusercontent.com/110535664/187240907-92a069a6-40aa-4d22-b5cf-1019cacf7777.png)
- Puis cliquer sur `OK`. ![image](https://user-images.githubusercontent.com/110535664/187240988-869654eb-fb7f-4142-acde-ae4c614ccaaa.png)
- Fermer la fenêtre Chrome.

- Chercher  le raccourci sur bureau 
- Dupliquer le raccourci
- Changer le nom des raccourcis: 
1: Jitsi Box Pro - Controller
2: Jitsi Box Pro - Main Screen
- Faire un clic droit sur le raccourci `Controller`.
- Dans la partie cible, ajouter apres la partie "Profile" :
**Remplacer par la bonne adresse IP.**
    ```js
    --window-position=0,0 --kiosk http://IP:3000 --user-data-dir=c:/monitor1
    ```
- Cliquer sur `OK` pour sauvegarder.

- Faire un clic droit sur le raccourci `Main Screen`.
- Dans la partie cible, ajouter apres la partie "Profile" :
    ```js
    --window-position=1680,0 --kiosk http://IP:3002 --user-data-dir=c:/monitor2 --unsafely-treat-insecure-origin-as-secure=http://IP:3002
    ```
- Cliquer sur `OK` pour sauvegarder.


### Etape : Startup Chrome

### Etape : Boot Serveur

### Etape : Nettoyage Windows

