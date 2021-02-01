const dataMapper = require("../dataMapper.js");

// On va gérer nos route en faisant appel à la BDD et au dataMapper pour récupérer les infos qu'il nous faut sur nos différentes routes

const mainController = {
  // homePage renvoi la view pokemonList qui va afficher tous les pokémons : leur noms/leur image/leur numéro...
  homePage: (req, res) => {
    const typePage = false;
    dataMapper.getAllPokemon((err, results) => {
      if (err) {
        console.trace(err);
        return res.status(500).send("Désolé erreur système");
      }
      res.render("pokemonList", {
        pokemons: results.rows,
        typePage: typePage
      });
    });
  },

  // La page de détail d'un pokémon renvoi toutes les informations d'un pokémon grâce à son ID
  detailPage: (req, res) => {
    const reqPokemon = parseInt(req.params.id, 10);
    dataMapper.getPokemon(reqPokemon, (err, results) => {
      if (err) {
        console.trace(err);
        return res.status(500).send("Désolé erreur système");
      }
      res.render("pokemonDetail", {
        pokemons: results.rows,
        pokemon: results.rows[0],
      });
    });
  },

  // La méthode typePage renvoi tous les types de pokémon grâce à la table "type"
  typePage: (req, res) => {
    dataMapper.getAllType((err, results) => {
      if (err) {
        console.trace(err);
        return res.status(500).send("Désolé erreur système");
      }
      res.render("typeList", {
        typeList: results.rows,
      });
    });
  },

  // La méthode PokemonTypePage renvoi tous les pokémon qui ont le type d'ID corréspondant

  pokemonTypePage: (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const typePage = true;

    dataMapper.getPokemonByTypeId(id, (err, results) => {
        if (err) {
        console.trace(err);
        return res.status(500).send("Désolé erreur système");
      }
      if (!results.rows) {
        next();
      }
      // On va réutiliser le template de la page d'acceuil, mais cette fois-ci seulement avec les pokémons du type demandé, on va rajouter le type à la page grâce a EJS
      res.render("pokemonList", { pokemons: results.rows, typePage: typePage });
    });
  },

  // On a une méthode qui gère les 404
  notFound: (req, res) => {
    console.debug("mainController notFound");
    res
      .status(404)
      .render("error", { error: 404, message: "Page introuvable" });
  },
};


module.exports = mainController;
