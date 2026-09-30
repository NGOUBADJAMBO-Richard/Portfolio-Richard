# Portfolio — Richard NGOUBADJAMBO

Site vitrine bilingue (FR/EN) d'un ingénieur fullstack et mobile. Page unique,
sans framework : HTML, CSS et JavaScript natifs, servis par un petit serveur
Express en développement.

- **En ligne** : https://portfolio-richard.vercel.app
- **Auteur** : Richard NGOUBADJAMBO — Fondateur M.G.N CodeWave
- **Licence** : MIT

---

## Démarrage

```bash
npm install && npm start
```

Le site est alors servi sur http://localhost:3000. Si le port est occupé, le
serveur en essaie un autre et l'annonce dans la console. Aucune clé d'API ni
variable d'environnement n'est nécessaire.

## Scripts

| Commande                | Effet                                                                     |
| ----------------------- | ------------------------------------------------------------------------- |
| `npm start`             | Sert le site en local                                                     |
| `npm run check`         | Vérifie la cohérence interne, puis valide le HTML                         |
| `npm run sync:metadata` | Régénère projets et statistiques de `metadata.json` depuis `index.html`   |
| `npm run build:jsonld`  | Régénère le bloc JSON-LD depuis `metadata.json` et la FAQ de la page      |
| `npm run sync:all`      | Les trois précédents, dans l'ordre. **À lancer avant chaque livraison.**  |

`npm run check` sort en code 1 si une clé de traduction manque d'un côté, si une
fiche projet n'a pas de données, ou si une icône référencée est absente du
sprite. Utilisable tel quel en CI.

## Arborescence

```
Portfolio-Richard/
├── index.html            Page unique, bilingue, avec le sprite d'icônes
├── server.js             Serveur statique de développement
├── css/styles.css        Toute la mise en forme (design system compris)
├── js/
│   ├── main.js           i18n, thème, filtres, modales, animations
│   └── env.js            Détection d'environnement côté client
├── tools/
│   ├── check.js          Contrôles de cohérence
│   ├── sync-metadata.js  metadata.json ← index.html
│   └── build-jsonld.js   JSON-LD ← metadata.json + FAQ
├── assets/images/        Portrait, logos, favicon
├── metadata.json         Fiche descriptive du site (non chargée à l'exécution)
├── sitemap.xml           Onze URLs d'ancrage
└── vercel.json           Réécriture de toutes les routes vers index.html
```

## Sections de la page

Ordre réel dans `index.html`. Source de vérité : `metadata.json`, champ
`sections`, régénéré par `npm run sync:metadata`.

| Section        | Contenu                                                       |
| -------------- | ------------------------------------------------------------- |
| Hero           | Présentation, statut freelance, dernière mission, CTA CV       |
| Stats          | Quatre indicateurs, compteurs animés au premier passage        |
| À propos       | Bio, timeline du parcours, formation                           |
| Identité       | Portrait, étiquettes de profil, lien vers M.G.N CodeWave       |
| Compétences    | Six groupes de stacks techniques                               |
| Projets        | Seize fiches filtrables, modales détaillées bilingues          |
| Services       | Six offres M.G.N CodeWave                                      |
| Méthode        | Cadrage → design system → delivery agile → recette et support  |
| Recommandation | Extrait de lettre de recommandation                            |
| FAQ            | Sept questions, balisées `FAQPage` en JSON-LD                  |
| Contact        | Coordonnées et formulaire                                      |

## Design

Direction éditoriale, claire et aérée.

- **Typographie** : Newsreader (serif) pour les titres, Space Grotesk pour le
  texte courant et l'interface. Les deux viennent d'une seule requête Google
  Fonts.
- **Couleur** : un seul accent. Pas de dégradé décoratif, pas d'ombre portée
  hors de la modale. La hiérarchie vient de l'espace et de la typographie.
- **Thème** : clair par défaut. Le thème sombre s'applique si le système le
  demande, et le choix explicite de l'utilisateur est mémorisé dans
  `localStorage` sous la clé `portfolio-richard:prefs`.
- **Contraste** : toutes les paires texte/fond sont à 4,5:1 minimum (WCAG AA).
  `--ink-3` est la limite basse à 4,8:1 et ne sert qu'aux métadonnées : ne pas
  l'éclaircir.
### Arrière-plan animé

Trois calques superposés, tous décoratifs :

| Calque      | Technique                                                 | Coupé sous 768 px |
| ----------- | --------------------------------------------------------- | ----------------- |
| `.aurora`   | Trois disques flous, dérive sur 37/43/53 s (CSS)          | non, flou réduit  |
| `.grid-bg`  | Trame technique en parallaxe (CSS + `--grid-shift`)       | oui               |
| `#bgCanvas` | Pistes de circuit parcourues par des impulsions (canvas)   | oui               |

Le motif est choisi pour ce qu'il dit : des pistes orthogonales ponctuées de
nœuds, avec des impulsions lumineuses qui les parcourent, évoquent la
circulation de données entre systèmes — le cœur du métier. La géométrie est
calculée une fois par redimensionnement (longueurs cumulées mémorisées pour
placer une impulsion sans reparcourir la polyligne). Chaque image ne retrace
que les polylignes et les impulsions en cours. Les queues sont dessinées en
neuf segments de plus en plus pâles, plutôt qu'avec un `createLinearGradient`
par impulsion, bien plus coûteux.

### Visibilité contre lisibilité

C'est le vrai arbitrage de ce fond, et il a été mesuré, pas estimé.

Une première version calibrée « éditorial sobre » était **invisible** :
45 833 des 48 397 pixels peints tombaient sous le seuil de perception, et
seulement 5 pixels sur 1,8 million dépassaient une opacité de 80/255.

Le réglage retenu : opacité du canvas à 0,85 (clair) et 0,95 (sombre), mais
sections à 94-95 % d'opacité. Le fond se voit donc franchement dans le hero —
la seule section transparente — dans le bandeau de technologies et dans les
respirations, et reste une présence discrète derrière le texte courant.

Le hero est protégé par un voile en dégradé oblique qui opacifie la colonne de
gauche et s'efface à droite, où il n'y a que le portrait. **Sous 1024 px ce
voile repasse en aplat** : en une seule colonne le texte occupe toute la
largeur et arrivait dans la zone transparente, où le rapport tombait à 3,9:1.

Pire cas vérifié — une impulsion à pleine intensité derrière chaque couleur de
texte, à travers l'opacité de section : **5,03:1 au minimum** en thème clair,
5,17:1 en sombre. AA exige 4,5:1.

**Performance mesurée** : 60 fps au démarrage, au repos et pendant un
défilement continu, dans les deux thèmes. DOM prêt en 211 ms.

### Mouvement du contenu

Apparition ligne à ligne du titre, balayage du portrait puis parallaxe douce,
bandeau de technologies en défilement continu (mis en pause au survol),
numérotation des sections par compteur CSS, filet du parcours qui se remplit au
défilement, inclinaison des cartes projet limitée à 4°, entrée en cascade au
changement de filtre, révélations directionnelles, compteurs, barre de
progression de lecture.

Tout s'efface sous `prefers-reduced-motion`. L'inclinaison est également
désactivée sur `(hover: none)` : il n'y a pas de survol au doigt.

### Bouton WhatsApp flottant

Pilule en bas à gauche, qui apparaît après 1,4 s puis se réduit à son icône
après 5,2 s, et se rouvre au survol. Le libellé reste dans le DOM en
permanence — c'est lui qui donne son nom accessible au lien, y compris replié.
Le vert officiel WhatsApp est conservé : c'est un code reconnu, le remplacer
par l'accent du site nuirait à l'identification immédiate.

## Internationalisation

Un objet `i18n` dans `js/main.js` porte les deux langues, et les éléments
traduits sont marqués par un attribut `data-i18n`. Le basculement est mémorisé
avec le thème. `npm run check` garantit que les deux dictionnaires ont
exactement les mêmes clés.

## Formulaire de contact

Il n'y a **pas de backend d'envoi**. `handleForm()` compose un `mailto:`
prérempli et ouvre le client mail du visiteur, avec un repli WhatsApp affiché
juste après. Si un envoi serveur est ajouté un jour, c'est cette fonction qu'il
faut remplacer — et les textes `form.hint` et `form.status` qu'il faut
réécrire, sinon la page ment au visiteur.

## Données structurées

Le bloc `<script type="application/ld+json">` d'`index.html` est **généré**
(Person, ProfilePage, ItemList des projets, FAQPage) à partir de
`metadata.json` et de la FAQ présente dans la page. Il ne se modifie pas à la
main : lancer `npm run sync:all` après toute modification des projets ou de la
FAQ.

`schema.json`, à la racine, est un ancien fichier qui n'est ni du JSON valide
ni chargé nulle part.

## Déploiement

Hébergé sur Vercel. `vercel.json` réécrit toutes les routes vers `index.html`,
ce qui fait fonctionner les liens d'ancrage au rechargement direct. Le build se
limite à `npm install` : il n'y a ni transpilation ni bundler.

Voir `DEPLOYMENT.md` et `INSTALLATION.md` pour le détail.

## Confidentialité

Le site ne publie volontairement ni le nom légal complet, ni la date ou le lieu
de naissance, ni le numéro CNSS, ni l'adresse précise, ni les références des
documents RH, ni le nom du signataire de la lettre de recommandation. Seule la
ville est mentionnée. Le CV n'est pas téléchargeable en ligne parce qu'il porte
des données personnelles : le bouton « Demander mon CV » ouvre une demande par
courriel.

**Ne pas ajouter ces données au dépôt**, y compris dans `metadata.json`,
`schema.json` ou un PDF placé dans `assets/`.
