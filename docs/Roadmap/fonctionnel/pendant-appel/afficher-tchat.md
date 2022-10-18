---
sidebar_position: 1
---

# Afficher Tchat

Afficher/Masquer la fenêtre de tchat du meeting sur l'écran principal via la tablette. Voici un exemple des boutons possibles:

![image](https://user-images.githubusercontent.com/30130845/185937466-6ac01f4f-5211-4346-97e9-c5c0aead1241.png)


Le bouton durant un appel:

![image](./images/afficher-tchat-1.png "Afficher le tchat")

La fenêtre du tchat sur l'écran:

![image](./images/afficher-tchat-2.png "Afficher le tchat")

## API & Commands
**Iframe API Events** : pour avoir le statut
- mis à jour du tchat
    - Est ouvert : boolean
    - Compte non lu : nombre des messages non lus
    - Message entrant (de, surnom, privée, message)


**Iframe API commands** : pour afficher ou masquer
`api.executeCommand('toggleChat’);`

**Configuration disabledNotifications** : affiche les notificatsion de tchat
`disabledNotifications: ['notify.chatMessages'];`
