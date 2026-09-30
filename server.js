/**
 * Serveur de developpement du portfolio.
 *
 * Sert les fichiers statiques et renvoie index.html pour toute autre route,
 * afin que les liens d'ancrage fonctionnent en rechargement direct.
 *
 * Le proxy GitHub a ete retire avec la section "Dashboard GitHub" : plus
 * aucune cle d'API n'est necessaire pour lancer le site.
 */
const path = require("path");
const express = require("express");

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 3000;

app.use(express.static(__dirname));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/**
 * Demarre le serveur en cherchant un port libre.
 * Utile en developpement : un rechargement laisse parfois le port occupe
 * quelques secondes, et echouer la-dessus n'apporte rien.
 */
function listen(port, remainingAttempts = 10) {
  const server = app.listen(port, () => {
    console.log(`Portfolio servi sur http://localhost:${port}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE" && remainingAttempts > 0) {
      console.warn(`Port ${port} occupe, tentative sur ${port + 1}`);
      listen(port + 1, remainingAttempts - 1);
      return;
    }
    console.error("Demarrage impossible :", error.message);
    process.exit(1);
  });
}

listen(DEFAULT_PORT);
