# Pokédex

Ceci est un projet de formation où on se propose de créer un pokédex à partir d'une BDD pré-rempli. Nous allons donc travailler en back-end pour renvoyer de l'information en front-end et peupler notre page web.

## Les dev tools en action

- NodeJS
- PostGreSQL
- HTML et CSS
- npm
- express - ejs - dotenv

## Installation

1/ Copier le repository sur votre machine local, en utilisant votre moyen préféré :

```bash
git clone git@github.com:BriceGuillozet/pokedex.git // 'example for SSH'
```
ou
```bash
git clone https://github.com/BriceGuillozet/pokedex.git // 'example for https'
```

2/ Installer les dépendances du projets :

```bash
npm i
```
3/ Créer la database à partir du fichier ```pokedex.sql``` dans le répertoire : ```/data```

Un exemple avec PostGreSQL : https://docs.postgresql.fr/9.5/manage-ag-createdb.html

4/ Copier-Coller le .env.example et le renommer .env (vous pouvez affecter les variables d'environnement à votre guise en fonction du port voulu et de votre BDD ici l'example donné est pour un chemin de BDD psql)

5/ Lancer le server avec node
```bash
node index.js
```