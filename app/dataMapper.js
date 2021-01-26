const database = require('./database');

// Le dataMapper nous permet d'envoyer nos requêtes SQL pour récupérer les infos qu'on va vouloir utiliser dans les views

const dataMapper = {

    // On va d'abord récupérer tous les pokémons pour la page d'acceuil

    getAllPokemon: function (callback) {
        const query = {
            text: 
            `SELECT * 
            FROM "pokemon" 
            ORDER BY numero ASC;`
        };
        database.query(query, callback);
    },

};


module.exports = dataMapper;