const dataMapper = require('../dataMapper.js');

// On va gérer nos route en faisant appel à la BDD et au dataMapper pour récupérer les infos qu'il nous faut sur nos différentes routes

const mainController = {
    // homePage renvoi la view pokemonList qui va afficher tous les pokémons : leur noms/leur image/leur numéro...
    homePage: (req, res) => {
    
        dataMapper.getAllPokemon((err, results) => {
            if (err) {
                console.trace(err);
                return res.status(500).send('Désolé erreur système');
            }
            res.render('pokemonList', {
                pokemons: results.rows
            })
        });
    },

};

module.exports = mainController;