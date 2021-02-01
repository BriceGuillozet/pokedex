const database = require("./database");

// Le dataMapper nous permet d'envoyer nos requêtes SQL pour récupérer les infos qu'on va vouloir utiliser dans les views

const dataMapper = {

  // On va d'abord récupérer tous les pokémons pour la page d'acceuil
  getAllPokemon: (callback) => {
    const query = {
      text: `SELECT * 
            FROM "pokemon" 
            ORDER BY numero ASC;
            `,
    };
    database.query(query, callback);
  },

  // Puis on récupère toutes les information d'un pokémon, séléctionné par son ID, pour la page détail
  getPokemon: (id, callback) => {
    const query = {
      text: `
            SELECT pokemon.*,
            type.name AS type_name, 
            type.color AS type_color,
            type.id AS type_id
            FROM pokemon 
            JOIN pokemon_type 
            ON pokemon.numero = pokemon_type.pokemon_numero 
            JOIN type 
            ON type.id = pokemon_type.type_id 
            WHERE pokemon.id = $1;
            `,

      values: [id],
    };
    database.query(query, callback);
  },

  // On a aussi besoin de tous les types de pokémon pour la page "Types"
  getAllType: (callback) => {
    const query = {
      text: `
            SELECT *
            FROM type
            `
    };
    database.query(query, callback);
  },

  // On va également avoir besoin de trouver tous les pokémon en fonction de leur type, on utilisera donc l'id du type
  getPokemonByTypeId: (id, callback) => {
    const query = {
      text: `
            SELECT pokemon.*
            FROM pokemon
            JOIN pokemon_type ON pokemon_type.pokemon_numero = pokemon.numero
            WHERE type_id = $1;
            `,
      values: [id],
    };
    database.query(query, callback);
  },
};

module.exports = dataMapper;
