// Resynchronise metadata.json sur le contenu reel d'index.html.
// metadata.json n'est pas charge a l'execution : c'est une fiche descriptive,
// mais elle doit decrire le site tel qu'il est, pas tel qu'il etait.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..") + "/";

const html = fs.readFileSync(root + "index.html", "utf8");
const main = fs.readFileSync(root + "js/main.js", "utf8");
const meta = JSON.parse(fs.readFileSync(root + "metadata.json", "utf8"));

// Cartes : id, categorie de filtre et tags, lus dans le markup.
const cards = [
  ...html.matchAll(
    /<article class="project-card reveal" data-cat="([a-z]+)" onclick="openModal\('(p\d+)'\)">([\s\S]*?)<\/article>/g,
  ),
].map(([, cat, id, body]) => {
  const tags = [...body.matchAll(/<span class="project-tag">([^<]+)<\/span>/g)]
    .map((m) => m[1].replace(/&amp;/g, "&"))
    .filter(Boolean);
  return { id, cat, tags };
});

// Titres et liens : lus dans projectData (source de verite des modales).
function frField(id, field) {
  const block = main.slice(main.indexOf(`  ${id}: {`));
  const end = block.indexOf("\n  },");
  const scope = block.slice(0, end);
  const re = new RegExp(`${field}: \\{\\s*\\n?\\s*fr: "((?:[^"\\\\]|\\\\.)*)"`);
  const m = scope.match(re);
  return m ? m[1].replace(/\\"/g, '"') : null;
}
function linkOf(id) {
  const block = main.slice(main.indexOf(`  ${id}: {`));
  const scope = block.slice(0, block.indexOf("\n  },"));
  const m = scope.match(/\n    link: "([^"]+)"/);
  return m ? m[1] : null;
}
function repoOf(id) {
  const block = main.slice(main.indexOf(`  ${id}: {`));
  const scope = block.slice(0, block.indexOf("\n  },"));
  const m = scope.match(/\n    repo: "([^"]+)"/);
  return m ? m[1] : null;
}

meta.projects = cards.map(({ id, cat, tags }) => {
  const entry = {
    id,
    name: frField(id, "title"),
    description: frField(id, "desc"),
    category: cat,
    technologies: tags,
  };
  const link = linkOf(id);
  const repo = repoOf(id);
  if (link) entry.link = link;
  if (repo) entry.repository = repo;
  return entry;
});

const statNums = [...html.matchAll(/<div class="stat-num">([^<]+)<\/div>/g)].map(
  (m) => m[1],
);
meta.stats = {
  experience: statNums[0],
  projects: statNums[1],
  domains: statNums[2],
  agency: Number(statNums[3]),
  languagesSpoken: ["Français (natif)", "Anglais (B1)"],
  availability: "Freelance — disponible immédiatement",
};

const today = new Date().toISOString().slice(0, 10);
const next = new Date(Date.now() + 90 * 864e5).toISOString().slice(0, 10);
meta.metadata = {
  ...meta.metadata,
  updated: today,
  lastReviewDate: today,
  nextReviewDate: next,
};

// Le depot melange LF et CRLF. On reecrit metadata.json avec ses propres fins
// de ligne : sinon un changement de quelques champs fait apparaitre le fichier
// entier comme modifie dans le diff.
const brut = fs.readFileSync(root + "metadata.json", "utf8");
const crlfCount = (brut.match(/\r\n/g) || []).length;
const lfCount = (brut.match(/\n/g) || []).length;
const eol = crlfCount > 0 && crlfCount === lfCount ? "\r\n" : "\n";
fs.writeFileSync(
  root + "metadata.json",
  (JSON.stringify(meta, null, 2) + "\n").replace(/\n/g, eol),
);
console.log(`metadata.json : ${meta.projects.length} projets, stats`, meta.stats);
const missing = meta.projects.filter((p) => !p.name || !p.description);
if (missing.length) {
  console.error("Champs manquants :", missing.map((p) => p.id));
  process.exit(1);
}
