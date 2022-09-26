---
sidebar_position: 2
---

# Main-screen



## Caractéristiques à noter


- `services/mediaDevices` définit les fonctions qui nous permettent d'utiliser facilement les MediaDevices dans l'application. La façon dont ils sont choisis est faite par le fichier `services/config.ts`.
- La SharePage essaie d'obtenir un périphérique de partage qu'elle affiche à l'écran : pour l'instant, le périphérique de partage est le flux vidéo provenant de ce qui est branché sur le port d'entrée HDMI du Poly GC8.
- Le MeetingPage utilise le Jitsi React SDK, qui est sous le capot l'API Jitsi IFrame. Ainsi, nous sommes pour l'instant limités par ce que l'API IFrame propose. Cela limite la fonctionnalité de partage à l'intérieur d'une réunion : il n'y a actuellement aucun moyen de sélectionner un dispositif de partage lorsque l'on active le partage d'écran.