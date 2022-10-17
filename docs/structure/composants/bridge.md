---
sidebar_position: 3
---

# Bridge

# Arborescence du dossier Bridge


```bash

jitsibox-pro/services/bridge/
├── src
│   ├── controllers.ts 
│   ├── index.ts
│   ├── mainScreens.ts 
│   ├── model.ts
│   └── status.ts
├── package-lock.json 
├── package.json
└── tsconfig.json

```

# Services

Le backend est le cœur de l'application. Il agit comme un pont entre les contrôleurs et l'écran principal.

Le code est écrit en [ExpressJS](https://expressjs.com/en/api.html), et est divisé en quatre parties qui seront décrites ci-dessous :
- [Statut global](#statut-global)
- [Fichier principal](#fichier-principal--indexts)
- [Contrôleurs](#controllers)
- [Écran principal](#main-screen)

## Mise à jour

Aucune mise à jour à chaud n'a encore été implémentée, il faut donc redémarrer le serveur pour mettre à jour le code.

## Statut global

L'état global est actuellement stocké dans un dictionnaire, et vise à garder une trace de l'état actuel de l'application. Son objectif principal est d'éviter les bogues liés à d'éventuelles déconnexions de sockets. En fait, à chaque connexion d'un client, le serveur envoie ce dictionnaire afin que le client s'adapte à l'état actuel de l'application.

## Fichier principal : `index.ts`

Ce fichier initie la connexion entre le serveur de socket et ses clients. Il démarre le serveur Express, et lance le serveur de socket. Les contrôleurs enverront ensuite des requêtes au serveur socker sur l'espace de noms `"/controllers"`, tandis que l'écran principal le fera sur l'espace de noms `"/mainScreens"`.

Deux middlewares ont été ajoutés (en fait deux fois le même, mais pour les deux espaces de noms) afin d'implémenter une certaine authentification. Chaque fois qu'un client se connecte au serveur de socket, il doit fournir deux choses :
- Un jeton d'authentification, actuellement stocké dans `packages/model`, mais qui devrait être une variable d'environnement.
- Le nom (ou l'identifiant) de la pièce physique dans laquelle se trouve le client (pour faciliter l'implémentation d'un serveur central, voir les étapes suivantes pour plus de détails).
Le middleware vérifie alors simplement si le jeton est valide, et bloque la connexion si ce n'est pas le cas.

Ensuite, lors de la connexion du client, le pont envoie le dictionnaire `globalStatus` au client, et ajoute le client au socket room correspondant au nom du room physique fourni par le client.

## Controllers

Ce fichier décrit le comportement du backend pour chaque événement émis par les contrôleurs. Le comportement est assez simple et toujours le même :
- Mettre à jour certaines données dans `globalStatus` si nécessaire.
- Notifier l'écran principal que quelque chose a changé
- Avertir les contrôleurs que quelque chose a changé si l'accusé de réception de l'écran principal n'est pas nécessaire

Le comportement précis des contrôleurs est décrit sur [ce lien](https://miro.com/app/board/uXjVOsD0w74=/?share_link_id=145031442760).

## Main screen

Ce fichier décrit le comportement du backend pour chaque événement émis par l'écran principal. Le comportement est assez simple et toujours le même :
- Mettre à jour certaines données dans `globalStatus` si nécessaire.
- Notifier les contrôleurs que quelque chose a changé

Nous ne notifions pas l'écran principal à nouveau, car un seul écran principal est supposé être connecté à la fois (et il a déjà l'information).

Le comportement précis des contrôleurs est décrit sur [ce lien](https://miro.com/app/board/uXjVOsD0w74=/?share_link_id=145031442760).


