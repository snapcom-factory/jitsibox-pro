---
sidebar_position: 3
---

# Call with conference code
Entrer dans une conference avec son code plutot que son nom

<img width="1512" alt="jitsibox-callviaNumber" src="https://user-images.githubusercontent.com/30130845/186022539-e4a98f15-f664-489b-8aab-b4175d4f20cf.png">

Convertrir le code en nom via l"api du confmapper : 
Requêtes GET sur https://voxapi.joona.fr/api/v1/conn/external/conference/info avec le paramètre code
(ex: https://voxapi.joona.fr/api/v1/conn/external/conference/info?code=6236410473)
  •	Authentification par API Key (cf. mail suivant), dans le header Authorization
    (ex: curl [...] -H 'Authorization: Api-Key XXXXXXX' )
  •	Résultat en JSON
    (ex: { "name": "webconfconfmapper2022", "code": "6236410473" } )
