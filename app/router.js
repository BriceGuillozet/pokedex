// On récupère la config router de express
const express = require('express');
// On déclare notre router avec express
const router = express.Router();
// On va chercher notre controller pour la route principale
const mainController = require("./controllers/mainController");

// On déclare la route pour "/" qui va utiliser la méthode homePage dans le mainController
router.get("/", mainController.homePage);
router.get('/:id', mainController.detailPage);


module.exports = router;