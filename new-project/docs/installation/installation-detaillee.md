# Installation détaillée

## Depuis le compte admin

### Etape : Creation compte "Jitsi-Box-Pro"

- Cliquer sur le bouton `Windows`. <p>![image](https://user-images.githubusercontent.com/110535664/187230954-50f10bcb-51f4-481f-aa52-a3c23811d80a.png)
- Puis sur `Admin`. <p>![image](https://user-images.githubusercontent.com/110535664/187231239-00a19a03-26ae-4139-9146-ca889c8af93c.png)
- Cliquer ensuite sur  `Modifier les parametres de compte`. (image Modifier les parametres de compte)
- Puis sur `Famille et autres utilisateurs`. <p>![image](https://user-images.githubusercontent.com/110535664/187231993-53bd2928-395e-475a-bfa3-61a407a462a5.png)
- Cliquer sur `Ajouter un autre utilisateur sur ce PC`. <p>![image](https://user-images.githubusercontent.com/110535664/187232447-7147abeb-5b62-46c9-8a9c-a8efed0be799.png)
- Cliquer ensuite sur `Je ne dispose pas des informations de connexion de cette personne.`<p>![image](https://user-images.githubusercontent.com/110535664/187233013-8e0eaee8-d541-45ae-b118-787b0dff11eb.png)
- Enfin cliquer sur `Ajouter un utilisateur sans compte Microsoft`. <p>![image](https://user-images.githubusercontent.com/110535664/187233114-a121fc68-ef03-4be9-a8ed-976d5cb37bd8.png)

- Remplir le formulaire Jitsi-Box-Pro. <p>![image](https://user-images.githubusercontent.com/110535664/187233352-64d6f299-32b3-4d09-87ba-f6f0f1cc5a58.png)
- Cliquez sur `Suivant`. <p>![image](https://user-images.githubusercontent.com/110535664/187233704-5e160e9c-eb34-4ef4-b4b0-f6b010d62785.png)
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
- Cliquer sur `Next & Install`.

### Etape : Configuration & Ajout écran touch

- Aller dans `Panneau de configuration`. <p>![image](https://user-images.githubusercontent.com/110535664/187390041-fe4662a9-e23a-47ff-9adf-302d263a45ce.png)
- Selectionnez l'option Afficher par : `Grandes icônes`. <p>![image](https://user-images.githubusercontent.com/110535664/187390452-604bfca3-6b10-43f4-997c-8200746e4ca8.png)
- Cliquer sur `Paramètres du Tablet PC` (ou le chercher dans la barre de recherche s'il n'apparaît pas)<p>![image](https://user-images.githubusercontent.com/110535664/187391033-a4fe154a-e8e2-4331-93a4-03009915f6fe.png)
- Puis cliquer sur `Configurer`. <p>![image](https://user-images.githubusercontent.com/110535664/187391059-35ad9637-55ef-43e6-9e5a-8b553bca70e2.png)
- Un message `Appuyez sur cet écran...` apparaît. Cliquer sur l'écran touch.

### (Etape : Startup)

### Etape : Get Project

- Ouvrir `Git Bash`. <p>![image](https://user-images.githubusercontent.com/110535664/187235305-a79347c1-d0b5-4e86-960b-97a4360ce885.png)
- Exécuter les commandes suivantes :
    ```js
    cd C:\
    ```
    ```js
    git clone https://github.com/snapcom-factory/jitsibox-pro.git
    ```
- Fermer Git Bash.

### Etape : Configure & Run Project

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

- Ouvrir `Node.js command prompt`. <p>![image](https://user-images.githubusercontent.com/110535664/187236978-da226428-8c42-42be-a1c4-d6400d4b92ba.png)
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
