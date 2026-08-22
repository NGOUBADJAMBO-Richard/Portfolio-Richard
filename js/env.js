// Configuration automatique selon l'environnement
const isProduction =
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1";
const isGithubPages = window.location.hostname.includes("github.io");
const githubUser =
  typeof GITHUB_USERNAME !== "undefined"
    ? GITHUB_USERNAME
    : "NGOUBADJAMBO-Richard";

window.__PORTFOLIO_CONFIG__ = {
  githubUser: githubUser,

  // Production sur GitHub Pages → API Vercel
  // Local (localhost) → API Express local
  apiBaseUrl: isProduction
    ? "https://portfolio-richard.vercel.app" // Remplacer par ton vrai domaine Vercel
    : "", // Vide = localhost:PORT/api/github/dashboard

  environment: isProduction ? "production" : "development",
  isGithubPages: isGithubPages,
};
