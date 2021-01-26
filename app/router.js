// On récupère la config router de express
const express = require('express');
// On déclare notre router avec express
const router = express.Router();
// On va chercher notre controller pour la route principale
const mainController = require("./controllers/mainController");

// On déclare la route pour "/"
router.get("/", mainController.homePage);

// On pense bien a exporter notre router pour l'utilisation dans les autres fichiers js
module.exports = router;