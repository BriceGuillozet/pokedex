// On va utiliser express pour gérer notre serveur
const express = require("express");
// On va implémenter un routeur pour faciliter la lisibilité du code
const router = require("./router");
// Grâce au dotenv on va forcer l'écoute du port sur 5000
const port = process.env.PORT || 5000;

// On déclare notre app et ou lui dit d'utiliser express
const app = express();

// Le fichier static => views html/css/js/img...
app.use(express.static('public'));
// On configure le moteur de view (ici ejs)
app.set("view engine", "ejs");
// Les routes pour les views : par défaut c'est cette route mais on peut la préciser
app.set("views", "app/views");

// On dit à express d'utiliser notre router
app.use(router);

// Quand on lance l'app on transmet un message en console pour récupérer le lien directement, pendant le dev on pourrat utiliser nodemon (npm) pour visualiser en live les changements
const start = () => {
  app.listen(port, () =>
    console.log(`App running on http://localhost:${port}`)
  );
};


module.exports = { start };
