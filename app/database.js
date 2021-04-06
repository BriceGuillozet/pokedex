const { Client } = require("pg");
// On utilise pg ici, son constructeur va nous permettre de nous connecter à la BDD, on passe le lien psql contenu dans le .env
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { 
        rejectUnauthorized: false
    }
});
// On connecte le client
client.connect();

module.exports = client;
