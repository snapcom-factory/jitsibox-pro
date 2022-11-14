---
sidebar_position: 1
---

# Code de conférence 


ette fonctionnalité améliore l’expérience utilisateur en lui permettant de rejoindre une conférence en saississant son code de préférence à son nom.

Sa mise en place dépend d'un conf. Mapper pour gérer la correspondance entre le numéro et le nom, qi est le seul identifiant de la conférence dans le système.

Elle est à retravailler pour être intégrée comme un plugin et non comme une fonctionnalité de base.


![image](./images/call-via-conf-number-1.png "Code de conference")


## API & Commands

Convertir le code en nom via l'api du confmapper : <br></br><br></br>
Requêtes GET sur un URL avec le paramètre code
  -	Authentification par API Key (cf. mail suivant), dans le header Authorization
    (ex: `curl [...] -H 'Authorization: Api-Key XXXXXXX'` )
  -	Résultat en JSON
    (ex: `{ "name": "webconfconfmapper2022", "code": "0123456789" }` )