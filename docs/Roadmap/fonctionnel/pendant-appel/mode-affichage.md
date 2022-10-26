# Changer le mode d'affichage

Cette fonctionnalité permet de facilement changer l'affichage de votre écran (Main-Screen).

Voici un exemple du bouton:

![image](./images/bouton-affichage.png)

Le bouton durant un appel:

![image](./images/changer-affichage-1.png "Changer le mode d'affichage")


Voici un exemple d'affichage sur l'écran:


![image](./images/affichage-ecran.png)

## API & Commands

### Commands

**SET** : Entrer ou sortir du mode de disposition de la vue en mosaïque. Aucun argument n'est requis. [(Lien)](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe-commands/#toggletileview)

    api.executeCommand('toggleTileView');

### Events

**Event** : Fournit des notifications d'événements concernant l'entrée ou la sortie du mode de disposition de la vue en mosaïque. [(Lien)](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe-events/#tileviewchanged) 

L'écouteur reçoit un objet ayant la structure suivante :


    {
        enabled: boolean, // si la vue des tuiles n'est pas affichée ou non
    }