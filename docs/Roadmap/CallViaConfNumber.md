---
sidebar_position: 1
---

# Code de conférence 

Entrer dans une conference via son code plutot que via son nom


Convertrir le code en nom via l'api du confmapper : <br></br><br></br>
Requêtes GET sur un URL avec le paramètre code
  -	Authentification par API Key (cf. mail suivant), dans le header Authorization
    (ex: curl [...] -H 'Authorization: Api-Key XXXXXXX' )
  -	Résultat en JSON
    (ex: { "name": "webconfconfmapper2022", "code": "0123456789" } )
