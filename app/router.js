// On récupère la config router de express
const express = require("express");
// On déclare notre router avec express
const router = express.Router();
// On va chercher notre controller pour la route principale
const mainController = require("./controllers/mainController");

// On déclare la route pour "/" qui va utiliser la méthode homePage dans le mainController
router.get("/", mainController.homePage);

// La route id nous permet de récupérer les détails d'un pokémon
router.get("/pokemon/:id", mainController.detailPage);

// La route /type affiche tous les types de pokémon et permet de filtrer par type
router.get("/types", mainController.typePage);

// La route /type/id affiche tous les pokémon d'un type, en fonction de l'id du type
router.get("/types/:id", mainController.pokemonTypePage);

// On utilise une méthode pour les cas d'erreur 404
router.use(mainController.notFound);

// Ainsi qu'un middleware pour les cas d'erreur 500
router.use(function(err, req, res, next) {
    return res.status(500).render("error", { error: 500, message: "Page introuvable" });
  });

module.exports = router;
