/**
 * Verifie la coherence interne du portfolio avant livraison :
 *  - chaque cle data-i18n du HTML existe en francais ET en anglais ;
 *  - les deux dictionnaires ont exactement les memes cles ;
 *  - chaque carte projet a une entree correspondante dans projectData ;
 *  - chaque icone referencee existe dans le sprite SVG.
 *
 * Sort en code 1 des qu'une incoherence est trouvee, pour etre utilisable en CI.
 * Usage : npm run check
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..") + "/";
const html = fs.readFileSync(root + "index.html", "utf8");
const js = fs.readFileSync(root + "js/main.js", "utf8");

// --- Cles i18n ---
const used = [
  ...[...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]),
  ...[...html.matchAll(/data-i18n-label="([^"]+)"/g)].map((m) => m[1]),
];
const frBlock = js.slice(js.indexOf("  fr: {"), js.indexOf("  en: {"));
const enBlock = js.slice(js.indexOf("  en: {"), js.indexOf("\n};"));
const keysOf = (block) =>
  new Set([...block.matchAll(/^ {4}"([^"]+)":/gm)].map((m) => m[1]));
const fr = keysOf(frBlock);
const en = keysOf(enBlock);

/**
 * Cles utilisees depuis le JS et non depuis le HTML. Tout le dashboard
 * GitHub fonctionne ainsi : soit t("cle") directement, soit une cle passee
 * en argument puis resolue plus loin (renderChipList(..., "gh.empty.tools")).
 *
 * On cherche donc la cle entre guillemets dans le code situe APRES le
 * dictionnaire — sinon chaque cle se trouverait elle-meme dans sa propre
 * definition et aucune ne serait jamais signalee comme morte.
 */
const codeAfterDict = js.slice(js.indexOf("\n};", js.indexOf("  en: {")));

function isReferencedInCode(key) {
  return codeAfterDict.includes(`"${key}"`);
}

const viaCode = [...fr].filter(isReferencedInCode);
const reachable = new Set([...used, ...viaCode]);

const missingFr = [...new Set(used)].filter((k) => !fr.has(k));
const missingEn = [...new Set(used)].filter((k) => !en.has(k));
const onlyFr = [...fr].filter((k) => !en.has(k));
const onlyEn = [...en].filter((k) => !fr.has(k));
const orphans = [...fr].filter((k) => !reachable.has(k));

console.log(`Cles utilisees dans le HTML : ${new Set(used).size}`);
console.log(`Cles resolues depuis le JS : ${viaCode.length}`);
console.log(`Cles fr : ${fr.size}   Cles en : ${en.size}`);
console.log(`Manquantes en fr : ${missingFr.length}`, missingFr);
console.log(`Manquantes en en : ${missingEn.length}`, missingEn);
console.log(`Presentes en fr seulement : ${onlyFr.length}`, onlyFr);
console.log(`Presentes en en seulement : ${onlyEn.length}`, onlyEn);
console.log(`Cles jamais atteignables : ${orphans.length}`, orphans);

// --- Projets : chaque openModal doit avoir une entree projectData ---
const called = new Set(
  [...html.matchAll(/openModal\('(p\d+)'\)/g)].map((m) => m[1]),
);
const defined = new Set([...js.matchAll(/^ {2}(p\d+): \{$/gm)].map((m) => m[1]));
const noData = [...called].filter((id) => !defined.has(id));
const unused = [...defined].filter((id) => !called.has(id));
console.log(`\nCartes appelant openModal : ${called.size}`);
console.log(`Entrees projectData : ${defined.size}`);
console.log(`Sans donnees : ${noData.length}`, noData);
console.log(`Donnees orphelines : ${unused.length}`, unused);

// --- Icones : chaque reference doit exister dans le sprite ---
const symbols = new Set(
  [...html.matchAll(/<symbol id="(i-[a-z0-9-]+)"/g)].map((m) => m[1]),
);
const refsHtml = [...html.matchAll(/<use href="#(i-[a-z0-9-]+)"/g)].map(
  (m) => m[1],
);
const refsJs = [...js.matchAll(/icon: "([a-z0-9-]+)"/g)].map((m) => "i-" + m[1]);
const badIcons = [...new Set([...refsHtml, ...refsJs])].filter(
  (r) => !symbols.has(r),
);
console.log(`\nSymboles du sprite : ${symbols.size}`);
console.log(`References d'icone invalides : ${badIcons.length}`, badIcons);

const problemes =
  missingFr.length +
  missingEn.length +
  onlyFr.length +
  onlyEn.length +
  orphans.length +
  noData.length +
  unused.length +
  badIcons.length;

console.log(
  problemes === 0
    ? "\nAucune incoherence."
    : `\n${problemes} incoherence(s) a corriger.`,
);
process.exit(problemes ? 1 : 0);
