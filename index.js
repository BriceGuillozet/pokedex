// On va utiliser dotenv pour passer les variables d'environnement 
require('dotenv').config();
// Notre serveur fonctionne dans app
const server = require('./app/server');
// On lance le server
server.start();