// Genere le bloc JSON-LD d'index.html a partir du contenu reel de la page.
// schema.json existait mais contenait des commentaires JS : il n'etait donc
// ni du JSON valide ni charge nulle part. On l'inline, genere, donc toujours
// synchrone avec les projets et la FAQ affiches.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..") + "/";

const html = fs.readFileSync(root + "index.html", "utf8");
const meta = JSON.parse(fs.readFileSync(root + "metadata.json", "utf8"));
const SITE = "https://portfolio-richard.vercel.app";

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/<br\s*\/?>/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

// FAQ : lue dans le markup pour que les deux ne puissent pas diverger.
const faq = [
  ...html.matchAll(
    /<summary class="faq-q"[^>]*>([\s\S]*?)<\/summary>\s*<div class="faq-a"[^>]*>([\s\S]*?)<\/div>/g,
  ),
].map(([, q, a]) => ({
  "@type": "Question",
  name: decode(q),
  acceptedAnswer: { "@type": "Answer", text: decode(a) },
}));

if (faq.length < 5) {
  console.error(`FAQ trop courte (${faq.length}) : extraction suspecte`);
  process.exit(1);
}

const person = {
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Richard NGOUBADJAMBO",
  jobTitle: "Ingénieur Fullstack & Mobile — Chef de Projet IT",
  description:
    "Ingénieur Informatique & Réseaux. Pilotage de solutions digitales de l'analyse des besoins à la mise en production : web, mobile et PWA.",
  url: SITE,
  image: `${SITE}/assets/images/Richard.png`,
  email: `mailto:${meta.contact?.email || "mbouandagnanga18@gmail.com"}`,
  // Volontairement limite a la ville : ni adresse precise, ni date de naissance.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Libreville",
    addressCountry: "GA",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "EMSI — École Marocaine des Sciences de l'Ingénieur",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rabat",
      addressCountry: "MA",
    },
  },
  knowsLanguage: [
    { "@type": "Language", name: "Français" },
    { "@type": "Language", name: "Anglais" },
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Flutter",
    "Dart",
    "Node.js",
    "Express.js",
    "Firebase Firestore",
    "PostgreSQL",
    "MongoDB",
    "Progressive Web Apps",
    "Gestion de projet agile",
    "Scrum",
  ],
  worksFor: {
    "@type": "Organization",
    name: "M.G.N CodeWave",
    url: "https://codewave-psi.vercel.app/",
  },
  sameAs: [
    "https://github.com/NGOUBADJAMBO-Richard",
    "https://www.linkedin.com/in/richard-ngoubadjambo-239244325/",
    "https://ngoubadjambo-richard.github.io/Portfolio-Richard/",
  ],
};

const projects = {
  "@type": "ItemList",
  "@id": `${SITE}/#projects`,
  name: "Projets livrés",
  numberOfItems: meta.projects.length,
  itemListElement: meta.projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.name,
      description: p.description,
      keywords: p.technologies.join(", "),
      creator: { "@id": `${SITE}/#person` },
      ...(p.link ? { url: p.link } : {}),
    },
  })),
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#page`,
      url: SITE,
      name: "Portfolio de Richard NGOUBADJAMBO",
      inLanguage: ["fr-FR", "en-US"],
      mainEntity: { "@id": `${SITE}/#person` },
    },
    projects,
    { "@type": "FAQPage", "@id": `${SITE}/#faq`, mainEntity: faq },
  ],
};

const json = JSON.stringify(graph, null, 2);
if (json.includes("</script")) {
  console.error("Contenu incompatible avec une insertion inline");
  process.exit(1);
}

const block = [
  "",
  "<!-- DONNEES STRUCTUREES — generees depuis metadata.json et la FAQ de la page -->",
  '<script type="application/ld+json">',
  json,
  "</script>",
].join("\n");

let out = fs.readFileSync(root + "index.html", "utf8");
const marker =
  /\n<!-- DONNEES STRUCTUREES[\s\S]*?<script type="application\/ld\+json">[\s\S]*?<\/script>/;
if (marker.test(out)) {
  out = out.replace(marker, block);
  console.log("JSON-LD remplace");
} else {
  out = out.replace("\n</head>", block + "\n</head>");
  console.log("JSON-LD insere");
}
fs.writeFileSync(root + "index.html", out);
console.log(
  `Person + ProfilePage + ${meta.projects.length} projets + ${faq.length} questions`,
);
