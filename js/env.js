/**
 * Configuration cote client.
 *
 * Le portfolio n'appelle plus aucune API externe depuis le navigateur depuis
 * le retrait du dashboard GitHub. Ce fichier ne sert plus qu'a exposer
 * l'environnement, utile si un futur script doit distinguer local et
 * production. Aucune valeur sensible ne doit y figurer : il est servi au
 * navigateur en clair.
 */
window.__PORTFOLIO_CONFIG__ = {
  environment:
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "development"
      : "production",
};
