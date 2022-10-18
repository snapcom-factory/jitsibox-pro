---
sidebar_position: 1
---

# Gestion du volume

Afficher une barre permettant de gérer le volume du meeting.
Voici un exemple de la barre:

![image](./images/gestion-volume-1.png "Gestion du volume")


Le gestion du volume durant un appel:

![image](./images/gestion-volume-2.png "Gestion du volume")


## API & Commands
**Iframe API Commands** : `setParticipantVolume`

```javascript
api.setParticipantVolume()
const api = new JitsiMeetExternalAPI(domain, options); ... api.
executeCommand('setParticipantVolume', participantId, volume);

```
