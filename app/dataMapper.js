const database = require("./database");

// Le dataMapper nous permet d'envoyer nos requêtes SQL pour récupérer les infos qu'on va vouloir utiliser dans les views

const dataMapper = {
  // On va d'abord récupérer tous les pokémons pour la page d'acceuil
  getAllPokemon: (callback) => {
    const query = {
      text: `SELECT * 
            FROM "pokemon" 
            ORDER BY numero ASC;`,
    };
    database.query(query, callback);
  },

  getPokemon: (id, callback) => {
    const query = {
      text: `
            SELECT pokemon.*,
            type.name AS type_name, 
            type.color AS type_color
            FROM pokemon 
            JOIN pokemon_type 
            ON pokemon.numero = pokemon_type.pokemon_numero 
            JOIN type 
            ON type.id = pokemon_type.type_id 
            WHERE pokemon.id = $1;`,

      values: [id],
    };
    database.query(query, callback);
  },
};

module.exports = dataMapper;
