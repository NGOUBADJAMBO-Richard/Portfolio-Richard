/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Portfolio - Richard NGOUBADJAMBO                              ║
 * ║  Ingénieur Fullstack & Mobile | Chef de Projet IT             ║
 * ║  M.G.N CodeWave - Solutions Digitales                          ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * @author Richard NGOUBADJAMBO
 * @company M.G.N CodeWave
 * @license MIT
 *
 * Modules, dans l'ordre du fichier :
 *   - i18n            dictionnaires FR/EN et application au markup
 *   - Preferences      thème et langue, persistés dans localStorage
 *   - Projets          filtres de la grille et données des modales
 *   - Formulaire       composition du mailto et repli WhatsApp
 *   - Decoratif        réseau de nœuds, progression, révélations, compteurs
 *
 * Aucune dépendance, aucun appel réseau : tout est local à la page.
 */

// ===================== I18N =====================
/**
 * Système d'internationalisation (FR/EN)
 * Gère la traduction dynamique des contenus via attributs data-i18n
 * @type {Object}
 */
const i18n = {
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.label": "Freelance — disponible immédiatement",
    "hero.title1": "Ingénieur",
    "hero.title2": "Fullstack & Mobile",
    "hero.title3": "Fondateur MGN CodeWave",
    "hero.subtitle": "Ingénieur Informatique & Réseaux, je pilote des solutions digitales de l'analyse des besoins à la mise en production — web, mobile et PWA. Un profil hybride : je code, et je conduis le projet.",
    "hero.cta1": "Me contacter",
    "hero.cta2": "Voir mes projets →",
    "hero.cta3": "Demander mon CV",
    "hero.lastmission": "Dernière mission : Chef de Projet IT & Fullstack — Gabon Connect SARLU",
    "hero.avail": "Missions ponctuelles, CDD ou CDI · Libreville, Gabon et à distance",
    "hero.float.org": "Gabon Connect SARLU",
    "hero.float.role": "Chef de Projet IT & Fullstack",
    "stats.exp": "Ans dans le digital",
    "stats.projects": "Projets livrés",
    "stats.stack": "Domaines maîtrisés",
    "stats.agency": "Agence fondée",
    "about.tag": "À PROPOS",
    "about.title": "Ingénieur. Entrepreneur.\nBâtisseur digital.",
    "about.p1":
      "Diplômé Ingénieur d'État en Informatique & Réseaux de l'EMSI (Rabat), j'ai bâti ma carrière à l'intersection du code et du management de projet — un profil rare qui me permet de comprendre autant les enjeux techniques que business.",
    "about.p2":
      "De LEBONWAZ à Gabon Connect SARLU, je pilote les produits de bout en bout : cahier des charges, wireframing UX, développement, tests, déploiement et suivi de performance. C'est cette maîtrise du cycle complet qui fait ma valeur ajoutée.",
    "about.p3": "Je travaille en relation client directe — recueil du besoin, arbitrages, reporting. Comptes rendus d'avancement et rapports de test sont écrits, structurés et remis sans relance : c'est ce qui permet d'arbitrer vite quand un livrable dévie.",
    "about.p4":
      "Aujourd'hui, à travers M.G.N CodeWave, je propose des solutions digitales complètes aux entreprises et startups africaines qui veulent passer à l'ère numérique.",
    "val.speed": "Livraison rapide",
    "val.speed.desc": "Sprints agiles bihebdomadaires, MVP et itérations continues",
    "val.quality": "Qualité orientée impact",
    "val.quality.desc": "Code propre, UX testée, qualité mesurée sur l'usage",
    "val.comm": "Communication claire",
    "val.comm.desc": "Relation client directe, reporting et arbitrages tracés",
    "val.africa": "Vision Afrique",
    "val.africa.desc": "Solutions adaptées aux marchés émergents",
    "about.exp.tag": "PARCOURS",
    "about.edu.tag": "FORMATION",
    "edu1.title": "Certification Web Fullstack",
    "edu2.title": "Formation Web Fullstack",
    "edu3.title": "Diplôme d'Ingénieur d'État — Informatique & Réseaux",
    "tl1.title": "Chef de Projet IT & Développeur Fullstack",
    "tl1.date": "Mai 2026 – Août 2026",
    "tl1.desc":
      "Pilotage de bout en bout d'une application PWA pour un client majeur — analyse des besoins, spécifications, wireframes UX, sprints agiles et mise en production. Stack React / Node.js / PostgreSQL, Firebase Firestore temps réel et authentification JWT.",
    "tl.badge": "Récent",
    "tl2.title": "Consultant Digital & Entrepreneur Freelance",
    "tl2.date": "Novembre 2025 – aujourd'hui",
    "tl2.desc":
      "Conception digitale complète — web, mobile et PWA — pour PME et startups gabonaises. Audits techniques, conseil en transformation digitale et gestion autonome du cycle projet.",
    "tl3.title": "Développeur Mobile & Chef de Projet",
    "tl3.date": "Janvier 2025 – Novembre 2025 · 10 mois",
    "tl3.desc":
      "Conception et livraison d'une application mobile Flutter iOS & Android. Clean Architecture / MVC avec Provider, Firebase, optimisation du temps de démarrage, des animations et de la consommation mémoire-batterie.",
    "tl4.title": "Développeur Frontend & Web Designer",
    "tl4.date": "Mars 2024 – Juin 2024 · 3 mois",
    "tl4.desc":
      "Interfaces web en approche component-driven adossée à un style guide partagé. Intégration d'APIs REST, plateformes Drupal, optimisation UX et performance sur iOS & Android.",
    "skills.tag": "COMPÉTENCES TECHNIQUES",
    "skills.title": "Stack complet.\nDu mobile au cloud.",
    "skills.desc":
      "Un profil polyvalent qui couvre l'ensemble du cycle de développement — de la base de données à l'interface utilisateur, du web au mobile natif.",
    "sk.mobile": "Mobile Flutter",
    "sk.frontend": "Frontend Web",
    "sk.backend": "Backend & BDD",
    "sk.tools": "Outils & DevOps",
    "sk.pm": "Gestion de Projet",
    "sk.lang": "Langues & Soft Skills",
    "proj.tag": "PROJETS",
    "proj.title": "Ce que je construis.",
    "proj.desc": "Seize projets livrés : missions client en production, applications mobiles Flutter, plateformes e-commerce et SaaS, sites éditoriaux et documentation technique.",
    "filter.all": "Tous",
    "filter.mobile": "Mobile",
    "filter.web": "Web & plateformes",
    "filter.client": "Mission client",
    "filter.branding": "Design & branding",
    "cat.mobile": "Application Mobile",
    "cat.web": "Plateforme Web",
    "cat.client": "Mission client · Gabon Connect",
    "cat.brand": "Studio & Branding",
    "cat.superapp": "Super-app Mobile",
    "cat.ecommerce": "E-commerce",
    "cat.saas": "Plateforme SaaS",
    "cat.ecosystem": "Écosystème digital",
    "cat.elearning": "E-learning",
    "cat.webapp": "Application Web",
    "cat.editorial": "Site éditorial",
    "cat.community": "Site communautaire",
    "cat.integration": "Intégration Web",
    "cat.doc": "Documentation technique",
    "live.btn": "Voir en ligne ↗",
    "p10.name": "Waz'UP — Super-app Flutter",
    "p10.desc": "Super-application mobile réunissant e-commerce, livraison à la demande et location de biens. Une base de code Flutter unique pour iOS et Android.",
    "p11.name": "Le Bon Waz — Plateforme e-commerce",
    "p11.desc": "Vente en ligne avec catalogue dynamique, paiement Stripe et back-office de gestion des commandes et des stocks.",
    "p12.name": "LMS Platform — Gestion des prospects",
    "p12.desc": "Leads Management System React / Firebase : pipeline commercial, scoring automatique des prospects et automatisation des campagnes.",
    "p13.name": "H2P Group — Écosystème digital",
    "p13.desc": "Trois phases pour un cabinet de coaching : identité visuelle, site vitrine, puis tunnel de prise de rendez-vous connecté au CRM.",
    "p14.name": "English Fun Club — E-learning gamifié",
    "p14.desc": "Plateforme d'apprentissage de l'anglais pour adolescents : parcours progressifs, exercices à correction immédiate, points et badges.",
    "p15.name": "Découvre qui tu es — Tests de personnalité",
    "p15.desc": "Questionnaires interactifs et algorithme de pondération des réponses, restituant un profil de personnalité sous forme de graphiques.",
    "p16.name": "Lampe À Mes Pieds — Site éditorial",
    "p16.desc": "Présentation de collections littéraires avec module de téléchargement et espace presse. Lecture confortable et conformité WCAG 2.1.",
    "p17.name": "Grâce Déployée — Site communautaire",
    "p17.desc": "Site d'église locale : agenda, bibliothèque de sermons audio et vidéo, espace bénévoles et demandes de prière.",
    "p18.name": "Booki — Réservation d'hébergements",
    "p18.desc": "Prototype d'interface de réservation touristique. Intégration pure, sans framework : sémantique HTML et maîtrise de Flexbox.",
    "p19.name": "API Airtel Money — Documentation",
    "p19.desc": "Documentation d'intégration de l'API de paiement mobile : authentification OAuth2, endpoints, webhooks et codes d'erreur.",
    "p1.name": "App Mobile Flutter — LEBONWAZ",
    "p1.desc":
      "Application multiplateforme iOS & Android développée de A à Z. Architecture Firebase Firestore, authentification, gestion d'état Provider.",
    "p2.name": "Plateforme Web Drupal — Agence Digitale",
    "p2.desc":
      "Développement et maintenance de plateformes web entreprises sous Drupal. Nouvelles fonctionnalités, optimisation SEO et relation client.",
    "p5.name": "M.G.N CodeWave — Studio digital",
    "p5.desc": "Identité de marque, design system et delivery produit pour PME et institutions. J'en ai conçu l'identité complète puis la plateforme qui porte l'offre.",
    "p7.name": "Gabonova — Plateforme immobilière",
    "p7.desc":
      "Plateforme de mise en relation immobilière. Campagnes de tests fonctionnels documentées, rapports d'anomalies itératifs, supports vidéo de présentation et d'installation, et proposition de stratégie marketing de lancement.",
    "p8.name": "AHPAM AssetView — Gestion locative bilingue",
    "p8.desc":
      "Application de gestion locative bilingue FR/EN. Rédaction du plan et des cas de test, conduite des recettes fonctionnelles et formalisation des retours client pour alimenter les itérations produit.",
    "p9.name": "Delta Manga Sécurité — Site vitrine & pilotage",
    "p9.desc":
      "Contribution au site vitrine de DMS, reporting mensuel d'avancement, analyse comparative de 5 solutions de gestion du gardiennage et rédaction du cahier des charges du projet DMS 360°.",
    "serv.tag": "SERVICES — MGN CODEWAVE",
    "serv.title": "Des solutions digitales\ncomplètes.",
    "serv.desc":
      "Via M.G.N CodeWave, j'accompagne entreprises et startups dans leur transformation numérique.",
    "s1.name": "Développement Mobile Flutter",
    "s1.desc":
      "Applications iOS & Android performantes, développées avec Flutter. De l'idée à l'App Store.",
    "s1.f1": "Architecture scalable (Provider/Clean)",
    "s1.f2": "Intégration Firebase complète",
    "s1.f3": "Optimisation des performances",
    "s1.f4": "Déploiement App Store / Play Store",
    "s2.name": "Applications Web React / Next.js",
    "s2.desc":
      "Interfaces web modernes, rapides et accessibles. Dashboards, landing pages et plateformes SaaS.",
    "s2.f1": "React.js / Next.js / Tailwind",
    "s2.f2": "Responsive mobile-first",
    "s2.f3": "Intégration API REST",
    "s2.f4": "Optimisation SEO & Core Web Vitals",
    "s3.name": "Backend & API Node.js",
    "s3.desc":
      "Architectures backend robustes, APIs RESTful documentées, bases de données SQL et NoSQL.",
    "s3.f1": "Node.js / Express.js",
    "s3.f2": "MongoDB & MySQL",
    "s3.f3": "Firebase Firestore",
    "s3.f4": "Authentification JWT / Firebase Auth",
    "s4.name": "Sites Web CMS (Drupal / WordPress)",
    "s4.desc":
      "Sites corporate, e-commerce et blogs sur mesure. Optimisés pour le SEO et la performance.",
    "s4.f1": "Drupal entreprise",
    "s4.f2": "WordPress sur mesure",
    "s4.f3": "SEO technique avancé",
    "s4.f4": "Maintenance et évolution",
    "s5.name": "Consulting & Gestion de Projet IT",
    "s5.desc":
      "Cadrage de projet, spécifications fonctionnelles, coordination d'équipes tech.",
    "s5.f1": "Cahier des charges & specs",
    "s5.f2": "Gestion Agile / Scrum",
    "s5.f3": "Coordination équipe dev",
    "s5.f4": "Reporting et relation client",
    "s6.name": "UI/UX & Branding Digital",
    "s6.desc":
      "Identité visuelle, wireframes, prototypes interactifs et design systems cohérents.",
    "s6.f1": "Wireframes & maquettes",
    "s6.f2": "Design system",
    "s6.f3": "Identité de marque",
    "s6.f4": "Optimisation UX",
    "testi.tag": "RECOMMANDATION",
    "testi.title": "Ce qu'en dit\nun client.",
    "testi.quote":
      "Rigueur du reporting, capacité à formaliser un besoin client encore flou en un cahier des charges exploitable, et esprit de proposition constant.",
    "testi.source":
      "Extrait d'une lettre de recommandation — direction, Gabon Connect SARLU",
    "method.tag": "MÉTHODE",
    "method.title": "Comment je travaille.",
    "method.desc": "Quatre temps, dans cet ordre. Chacun se termine par un livrable écrit que vous pouvez relire, contester et valider avant qu'on passe au suivant.",
    "m1.name": "Cadrage",
    "m1.desc": "On part du problème, pas de la solution. Entretiens, analyse de l'existant, arbitrage du périmètre.",
    "m1.out": "Livrable : cahier des charges et périmètre chiffré",
    "m2.name": "Design system",
    "m2.desc": "Wireframes puis composants réutilisables. L'interface est décidée avant d'être codée, ce qui évite de la refaire trois fois.",
    "m2.out": "Livrable : maquettes et bibliothèque de composants",
    "m3.name": "Delivery agile",
    "m3.desc": "Sprints de deux semaines, démo à chaque fin de sprint, suivi burn-down. Vous voyez le produit avancer, pas un pourcentage.",
    "m3.out": "Livrable : incrément testable toutes les deux semaines",
    "m4.name": "Recette & support",
    "m4.desc": "Plan de test écrit, conduite de la recette avec vous, mise en production, puis accompagnement sur les évolutions.",
    "m4.out": "Livrable : rapport de recette et documentation d'exploitation",
    "faq.tag": "QUESTIONS FRÉQUENTES",
    "faq.title": "Ce qu'on me demande\navant de signer.",
    "q1.q": "Êtes-vous disponible en ce moment ?",
    "q1.a": "Oui, immédiatement. Je suis en freelance depuis novembre 2025 et j'accepte aussi bien les missions ponctuelles que les contrats CDD ou CDI.",
    "q2.q": "Travaillez-vous à distance, hors du Gabon ?",
    "q2.a": "Oui. Je suis basé à Libreville et je travaille à distance pour des clients en Afrique comme à l'international. Mes missions chez Gabon Connect et l'agence de Rabat se sont déroulées en grande partie en distanciel coordonné.",
    "q3.q": "Quelles technologies utilisez-vous ?",
    "q3.a": "React et Next.js côté web, Flutter pour le mobile iOS et Android, Node.js et Express côté serveur, Firebase Firestore, PostgreSQL, MySQL ou MongoDB selon le besoin. Le choix se fait au cadrage, en fonction de ce que vous pourrez maintenir après moi.",
    "q4.q": "Combien de temps prend un projet ?",
    "q4.a": "Un site vitrine tient en deux à trois semaines. Un MVP web ou mobile se situe généralement entre six et dix semaines selon le périmètre. Je ne donne de délai ferme qu'après le cadrage : avant, ce serait un chiffre inventé.",
    "q5.q": "Comment suivez-vous l'avancement ?",
    "q5.a": "Sprints de deux semaines avec démo en fin de sprint, compte rendu écrit remis sans que vous ayez à le demander, et suivi burn-down. Si un livrable dérive, vous le voyez au sprint suivant, pas à la livraison finale.",
    "q6.q": "Pouvez-vous reprendre un projet déjà commencé ?",
    "q6.a": "Oui. Je commence par un audit technique — état du code, dette, risques — puis je vous remets un plan de modernisation chiffré et priorisé. Vous décidez ensuite si vous voulez que je l'exécute.",
    "q7.q": "Avez-vous des références vérifiables ?",
    "q7.a": "Oui. Un certificat de travail et une lettre de recommandation émis par Gabon Connect SARLU sont disponibles sur demande, ainsi que les coordonnées de mes référents.",
    "cont.tag": "CONTACT",
    "cont.title": "Parlons de votre\nprochain projet.",
    "cont.desc":
      "Vous avez un projet web, mobile ou une mission de chef de projet ? Je suis disponible pour des collaborations en Afrique et à l'international.",
    "cont.portfolio": "Portfolio actuel",
    "cont.loc": "Localisation",
    "cont.phone": "Téléphone",
    "form.name": "Nom complet",
    "form.email": "Email",
    "form.subject": "Sujet",
    "form.msg": "Message",
    "form.send": "Ouvrir mon client mail",
    "form.hint": "Le message est préparé dans votre logiciel de messagerie — rien n'est envoyé à votre insu.",
    "form.status": "Votre client mail devrait s'ouvrir avec le message prérempli. S'il ne s'ouvre pas, écrivez directement à mbouandagnanga18@gmail.com ou passez par WhatsApp.",
    "form.wa": "Envoyer plutôt par WhatsApp ↗",
    "form.opt1": "Projet Mobile Flutter",
    "form.opt2": "Application Web React/Next.js",
    "form.opt3": "Gestion de Projet IT",
    "form.opt4": "Backend Node.js",
    "form.opt5": "Autre demande",
    "footer.rights": "Tous droits réservés",
    "footer.top": "Haut de page",
    "photo.tag": "QUI SUIS-JE",
    "photo.tile": "Projets livrés",
    "photo.title": "Ingénieur d'État.\nBâtisseur de produits.",
    "photo.desc":
      "Né au Gabon, formé au Maroc, je suis un ingénieur informatique passionné par la création de solutions digitales qui ont un impact réel. Mon approche combine rigueur technique, vision produit et sens du leadership.",
    "photo.cta1": "Me contacter",
    "photo.cta2": "Voir mes projets →",
    "nav.agency": "Mon Agence",
    "agency.tag": "MON AGENCE",
    "agency.title": "M.G.N CodeWave.\nLe studio derrière les projets.",
    "agency.desc": "Quand un projet dépasse ce qu'une personne seule peut porter, il passe par mon studio. Même méthode, mêmes exigences, une capacité de livraison élargie.",
    "agency.pitch": "Studio digital qui conçoit et opère des écosystèmes web et mobile complets : design system, MVP sur mesure et accélération produit pour PME et institutions.",
    "agency.cta1": "Visiter le studio ↗",
    "agency.cta2": "Démarrer un projet",
    "ag1.name": "Plateformes e-commerce",
    "ag1.desc": "Catalogue, panier, paiement et back-office de gestion des commandes et des stocks.",
    "ag1.price": "à partir de 300 000 FCFA",
    "ag2.name": "Applications mobiles Flutter",
    "ag2.desc": "iOS et Android depuis une base de code unique, du cadrage au dépôt sur les stores.",
    "ag2.price": "sur devis",
    "ag3.name": "Sites vitrines, blogs et portfolios",
    "ag3.desc": "Présence en ligne soignée, optimisée pour le référencement et tenue par vos équipes.",
    "ag3.price": "à partir de 80 000 FCFA",
    "ag4.name": "Consulting et accompagnement",
    "ag4.desc": "Audit technique, choix d'architecture, plan de modernisation priorisé et chiffré.",
    "ag4.price": "sur devis",
    "wa.fab": "Discutons sur WhatsApp",
    "nav.method": "Méthode",
    "nav.faq": "FAQ",
    "a11y.skip": "Aller au contenu principal",
    "detail.btn": "Voir les détails →",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.label": "Freelance — available immediately",
    "hero.title1": "Software",
    "hero.title2": "Fullstack & Mobile Engineer",
    "hero.title3": "Founder of MGN CodeWave",
    "hero.subtitle": "Computer & Networks Engineer. I steer digital solutions from requirements analysis to production — web, mobile and PWA. A hybrid profile: I write the code, and I run the project.",
    "hero.cta1": "Contact me",
    "hero.cta2": "View my projects →",
    "hero.cta3": "Request my CV",
    "hero.lastmission": "Latest mission: IT Project Manager & Fullstack — Gabon Connect SARLU",
    "hero.avail": "Short missions, fixed-term or permanent · Libreville, Gabon and remote",
    "hero.float.org": "Gabon Connect SARLU",
    "hero.float.role": "IT Project Manager & Fullstack",
    "stats.exp": "Years in tech",
    "stats.projects": "Projects delivered",
    "stats.stack": "Domains mastered",
    "stats.agency": "Agency founded",
    "about.tag": "ABOUT",
    "about.title": "Engineer. Entrepreneur.\nDigital Builder.",
    "about.p1":
      "A State-certified Engineer in Computer Science & Networks from EMSI (Rabat), I built my career at the intersection of code and project management — a rare profile that lets me understand both technical and business challenges.",
    "about.p2":
      "From LEBONWAZ to Gabon Connect SARLU, I manage products end to end: requirements, UX wireframing, development, testing, deployment and performance monitoring. This mastery of the full cycle is my core added value.",
    "about.p3": "I work in direct client contact — requirements gathering, trade-offs, reporting. Progress reports and test reports are written, structured and delivered without chasing: that is what makes it possible to decide quickly when a deliverable drifts.",
    "about.p4":
      "Today, through M.G.N CodeWave, I offer complete digital solutions to companies and African startups ready to enter the digital era.",
    "val.speed": "Fast delivery",
    "val.speed.desc": "Biweekly agile sprints, MVPs and continuous iterations",
    "val.quality": "Impact-driven quality",
    "val.quality.desc": "Clean code, tested UX, quality measured on real usage",
    "val.comm": "Clear communication",
    "val.comm.desc": "Direct client relationship, tracked reporting and decisions",
    "val.africa": "Africa vision",
    "val.africa.desc": "Solutions tailored to emerging markets",
    "about.exp.tag": "EXPERIENCE",
    "about.edu.tag": "EDUCATION",
    "edu1.title": "Web Fullstack Certification",
    "edu2.title": "Web Fullstack Training",
    "edu3.title": "State Engineering Degree — Computer Science & Networks",
    "tl1.title": "IT Project Manager & Fullstack Developer",
    "tl1.date": "May 2026 – August 2026",
    "tl1.desc":
      "End-to-end delivery of a PWA for a major client — needs analysis, specifications, UX wireframes, agile sprints and production deployment. Stack React / Node.js / PostgreSQL, real-time Firebase Firestore and JWT authentication.",
    "tl.badge": "Recent",
    "tl2.title": "Digital Consultant & Freelance Entrepreneur",
    "tl2.date": "November 2025 – present",
    "tl2.desc":
      "Full digital design — web, mobile and PWA — for Gabonese SMEs and startups. Technical audits, digital transformation consulting and autonomous project cycle management.",
    "tl3.title": "Mobile Developer & Project Manager",
    "tl3.date": "January 2025 – November 2025 · 10 months",
    "tl3.desc":
      "Design and delivery of a Flutter iOS & Android mobile app. Clean Architecture / MVC with Provider, Firebase, and optimisation of startup time, animations and battery-memory usage.",
    "tl4.title": "Frontend Developer & Web Designer",
    "tl4.date": "March 2024 – June 2024 · 3 months",
    "tl4.desc":
      "Web interfaces built with a component-driven approach backed by a shared style guide. REST API integration, Drupal platforms, UX and performance optimisation on iOS & Android.",
    "skills.tag": "TECHNICAL SKILLS",
    "skills.title": "Full stack.\nFrom mobile to cloud.",
    "skills.desc":
      "A versatile profile covering the entire development lifecycle — from database to user interface, from web to native mobile.",
    "sk.mobile": "Flutter Mobile",
    "sk.frontend": "Frontend Web",
    "sk.backend": "Backend & DB",
    "sk.tools": "Tools & DevOps",
    "sk.pm": "Project Management",
    "sk.lang": "Languages & Soft Skills",
    "proj.tag": "PROJECTS",
    "proj.title": "What I build.",
    "proj.desc": "Sixteen delivered projects: client missions in production, Flutter mobile apps, e-commerce and SaaS platforms, editorial sites and technical documentation.",
    "filter.all": "All",
    "filter.mobile": "Mobile",
    "filter.web": "Web & platforms",
    "filter.client": "Client mission",
    "filter.branding": "Design & branding",
    "cat.mobile": "Mobile App",
    "cat.web": "Web Platform",
    "cat.client": "Client mission · Gabon Connect",
    "cat.brand": "Studio & Branding",
    "cat.superapp": "Mobile Super-app",
    "cat.ecommerce": "E-commerce",
    "cat.saas": "SaaS platform",
    "cat.ecosystem": "Digital ecosystem",
    "cat.elearning": "E-learning",
    "cat.webapp": "Web App",
    "cat.editorial": "Editorial site",
    "cat.community": "Community site",
    "cat.integration": "Web integration",
    "cat.doc": "Technical documentation",
    "live.btn": "View live ↗",
    "p10.name": "Waz'UP — Flutter Super-app",
    "p10.desc": "Mobile super-app combining e-commerce, on-demand delivery and goods rental. A single Flutter codebase for iOS and Android.",
    "p11.name": "Le Bon Waz — E-commerce platform",
    "p11.desc": "Online sales with a dynamic catalogue, Stripe payment and a back-office for orders and stock management.",
    "p12.name": "LMS Platform — Leads management",
    "p12.desc": "React / Firebase Leads Management System: sales pipeline, automatic lead scoring and campaign automation.",
    "p13.name": "H2P Group — Digital ecosystem",
    "p13.desc": "Three phases for a coaching firm: visual identity, brochure site, then a booking funnel wired into the CRM.",
    "p14.name": "English Fun Club — Gamified e-learning",
    "p14.desc": "English learning platform for teenagers: progressive tracks, immediately corrected exercises, points and badges.",
    "p15.name": "Découvre qui tu es — Personality tests",
    "p15.desc": "Interactive questionnaires and an answer-weighting algorithm, returning a personality profile as charts.",
    "p16.name": "Lampe À Mes Pieds — Editorial site",
    "p16.desc": "Literary collection showcase with a download module and press area. Comfortable reading and WCAG 2.1 compliance.",
    "p17.name": "Grâce Déployée — Community site",
    "p17.desc": "Local church site: calendar, audio and video sermon library, volunteer area and prayer requests.",
    "p18.name": "Booki — Accommodation booking",
    "p18.desc": "Prototype tourist booking interface. Pure integration, no framework: HTML semantics and Flexbox mastery.",
    "p19.name": "Airtel Money API — Documentation",
    "p19.desc": "Integration documentation for the mobile payment API: OAuth2 authentication, endpoints, webhooks and error codes.",
    "p1.name": "Flutter Mobile App — LEBONWAZ",
    "p1.desc":
      "Cross-platform iOS & Android app built end-to-end. Firebase Firestore architecture, authentication, Provider state management.",
    "p2.name": "Drupal Web Platform — Digital Agency",
    "p2.desc":
      "Development and maintenance of enterprise web platforms under Drupal. New features, SEO optimisation and client management.",
    "p5.name": "M.G.N CodeWave — Digital studio",
    "p5.desc": "Brand identity, design system and product delivery for SMEs and institutions. I designed its full identity and the platform that carries the offer.",
    "p7.name": "Gabonova — Real estate platform",
    "p7.desc":
      "Real estate matching platform. Documented functional testing campaigns, iterative issue reports, video support for demos and installation, plus a go-to-market strategy proposal.",
    "p8.name": "AHPAM AssetView — Bilingual rental management",
    "p8.desc":
      "Bilingual FR/EN rental management app. Writing the test plan and test cases, running functional acceptance reviews and formalising client feedback to feed product iterations.",
    "p9.name": "Delta Manga Sécurité — Showcase site & delivery",
    "p9.desc":
      "Contribution to DMS's showcase website, monthly progress reporting, comparative analysis of 5 guard-management solutions and writing the requirements spec for the DMS 360° project.",
    "serv.tag": "SERVICES — MGN CODEWAVE",
    "serv.title": "Complete digital\nsolutions.",
    "serv.desc":
      "Through M.G.N CodeWave, I support companies and startups in their digital transformation.",
    "s1.name": "Flutter Mobile Development",
    "s1.desc":
      "Performant iOS & Android apps built with Flutter. From idea to App Store.",
    "s1.f1": "Scalable architecture (Provider/Clean)",
    "s1.f2": "Full Firebase integration",
    "s1.f3": "Performance optimisation",
    "s1.f4": "App Store / Play Store deployment",
    "s2.name": "React / Next.js Web Apps",
    "s2.desc":
      "Modern, fast and accessible web interfaces. Dashboards, landing pages and SaaS platforms.",
    "s2.f1": "React.js / Next.js / Tailwind",
    "s2.f2": "Mobile-first responsive",
    "s2.f3": "REST API integration",
    "s2.f4": "SEO & Core Web Vitals optimisation",
    "s3.name": "Node.js Backend & API",
    "s3.desc":
      "Robust backend architectures, documented RESTful APIs, SQL and NoSQL databases.",
    "s3.f1": "Node.js / Express.js",
    "s3.f2": "MongoDB & MySQL",
    "s3.f3": "Firebase Firestore",
    "s3.f4": "JWT / Firebase Auth authentication",
    "s4.name": "CMS Websites (Drupal / WordPress)",
    "s4.desc":
      "Corporate, e-commerce and blog sites. SEO and performance optimised.",
    "s4.f1": "Enterprise Drupal",
    "s4.f2": "Custom WordPress",
    "s4.f3": "Advanced technical SEO",
    "s4.f4": "Maintenance and evolution",
    "s5.name": "IT Project Management Consulting",
    "s5.desc":
      "Project scoping, functional specs, tech team coordination and delivery tracking.",
    "s5.f1": "Requirements & specs",
    "s5.f2": "Agile / Scrum management",
    "s5.f3": "Dev team coordination",
    "s5.f4": "Reporting and client relations",
    "s6.name": "UI/UX & Digital Branding",
    "s6.desc":
      "Visual identity, wireframes, interactive prototypes and cohesive design systems.",
    "s6.f1": "Wireframes & mockups",
    "s6.f2": "Design system",
    "s6.f3": "Brand identity",
    "s6.f4": "UX optimisation",
    "testi.tag": "RECOMMENDATION",
    "testi.title": "What a client\nsays about me.",
    "testi.quote":
      "Reporting rigour, the ability to turn a still-vague client need into an actionable specification, and a constant spirit of initiative.",
    "testi.source":
      "Excerpt from a recommendation letter — management, Gabon Connect SARLU",
    "method.tag": "METHOD",
    "method.title": "How I work.",
    "method.desc": "Four stages, in this order. Each ends with a written deliverable you can read, challenge and approve before we move on.",
    "m1.name": "Framing",
    "m1.desc": "We start from the problem, not the solution. Interviews, review of what exists, scope trade-offs.",
    "m1.out": "Deliverable: specification and costed scope",
    "m2.name": "Design system",
    "m2.desc": "Wireframes, then reusable components. The interface is decided before it is coded, which avoids building it three times.",
    "m2.out": "Deliverable: mockups and component library",
    "m3.name": "Agile delivery",
    "m3.desc": "Two-week sprints, a demo at the end of each one, burn-down tracking. You watch the product move, not a percentage.",
    "m3.out": "Deliverable: a testable increment every two weeks",
    "m4.name": "Acceptance & support",
    "m4.desc": "Written test plan, acceptance run with you, production release, then support on further changes.",
    "m4.out": "Deliverable: acceptance report and operations documentation",
    "faq.tag": "FREQUENTLY ASKED",
    "faq.title": "What people ask me\nbefore signing.",
    "q1.q": "Are you available right now?",
    "q1.a": "Yes, immediately. I have been freelancing since November 2025 and I take on one-off missions as well as fixed-term or permanent contracts.",
    "q2.q": "Do you work remotely, outside Gabon?",
    "q2.a": "Yes. I am based in Libreville and work remotely for clients in Africa and internationally. My missions at Gabon Connect and the Rabat agency were largely run as coordinated remote work.",
    "q3.q": "Which technologies do you use?",
    "q3.a": "React and Next.js on the web, Flutter for iOS and Android, Node.js and Express on the server, Firebase Firestore, PostgreSQL, MySQL or MongoDB depending on the need. The choice is made during framing, based on what you will be able to maintain after me.",
    "q4.q": "How long does a project take?",
    "q4.a": "A brochure site takes two to three weeks. A web or mobile MVP usually falls between six and ten weeks depending on scope. I only commit to a firm deadline after framing: before that, it would be a made-up number.",
    "q5.q": "How do you track progress?",
    "q5.a": "Two-week sprints with a demo at the end of each, a written report delivered without you having to ask, and burn-down tracking. If a deliverable drifts, you see it at the next sprint, not at final delivery.",
    "q6.q": "Can you take over a project already under way?",
    "q6.a": "Yes. I start with a technical audit — state of the code, debt, risks — then hand you a costed, prioritised modernisation plan. You then decide whether you want me to carry it out.",
    "q7.q": "Do you have verifiable references?",
    "q7.a": "Yes. A work certificate and a letter of recommendation issued by Gabon Connect SARLU are available on request, along with my referees' contact details.",
    "cont.tag": "CONTACT",
    "cont.title": "Let's talk about your\nnext project.",
    "cont.desc":
      "Have a web, mobile project or an IT project management mission? I'm available for collaborations in Africa and internationally.",
    "cont.portfolio": "Current portfolio",
    "cont.loc": "Location",
    "cont.phone": "Phone",
    "form.name": "Full name",
    "form.email": "Email",
    "form.subject": "Subject",
    "form.msg": "Message",
    "form.send": "Open my mail client",
    "form.hint": "The message is drafted in your own mail app — nothing is sent without you.",
    "form.status": "Your mail client should open with the message prefilled. If it does not, write directly to mbouandagnanga18@gmail.com or use WhatsApp.",
    "form.wa": "Send via WhatsApp instead ↗",
    "form.opt1": "Flutter Mobile Project",
    "form.opt2": "React/Next.js Web App",
    "form.opt3": "IT Project Management",
    "form.opt4": "Node.js Backend",
    "form.opt5": "Other request",
    "footer.rights": "All rights reserved",
    "footer.top": "Back to top",
    "photo.tag": "WHO I AM",
    "photo.tile": "Projects delivered",
    "photo.title": "State Engineer.\nProduct Builder.",
    "photo.desc":
      "Born in Gabon, trained in Morocco, I'm a software engineer passionate about creating digital solutions with real impact. My approach combines technical rigour, product vision and leadership.",
    "photo.cta1": "Contact me",
    "photo.cta2": "View my projects →",
    "nav.agency": "My Agency",
    "agency.tag": "MY AGENCY",
    "agency.title": "M.G.N CodeWave.\nThe studio behind the projects.",
    "agency.desc": "When a project outgrows what one person can carry, it goes through my studio. Same method, same standards, wider delivery capacity.",
    "agency.pitch": "A digital studio that designs and operates complete web and mobile ecosystems: design system, bespoke MVP and product acceleration for SMEs and institutions.",
    "agency.cta1": "Visit the studio ↗",
    "agency.cta2": "Start a project",
    "ag1.name": "E-commerce platforms",
    "ag1.desc": "Catalogue, cart, payment and a back-office for orders and stock management.",
    "ag1.price": "from 300,000 FCFA",
    "ag2.name": "Flutter mobile apps",
    "ag2.desc": "iOS and Android from a single codebase, from framing to store submission.",
    "ag2.price": "on quotation",
    "ag3.name": "Brochure sites, blogs and portfolios",
    "ag3.desc": "A polished online presence, search-optimised and maintainable by your own team.",
    "ag3.price": "from 80,000 FCFA",
    "ag4.name": "Consulting and support",
    "ag4.desc": "Technical audit, architecture choices, prioritised and costed modernisation plan.",
    "ag4.price": "on quotation",
    "wa.fab": "Let's talk on WhatsApp",
    "nav.method": "Method",
    "nav.faq": "FAQ",
    "a11y.skip": "Skip to main content",
    "detail.btn": "View details →",
  },
};

// Coordonnees utilisees par le formulaire et les CTA. Centralisees ici pour
// qu'un changement de numero ne se fasse pas a six endroits differents.
const CONTACT_EMAIL = "mbouandagnanga18@gmail.com";
const CONTACT_WHATSAPP = "24174676741";

const PREFS_KEY = "portfolio-richard:prefs";

/**
 * Lit les preferences persistees. localStorage leve en navigation privee ou
 * quand les donnees de site sont bloquees : on retombe alors silencieusement
 * sur les valeurs par defaut plutot que de casser tout le script.
 */
function readPrefs() {
  try {
    return JSON.parse(localStorage.getItem(PREFS_KEY) || "{}");
  } catch {
    return {};
  }
}

function writePrefs(patch) {
  try {
    localStorage.setItem(
      PREFS_KEY,
      JSON.stringify({ ...readPrefs(), ...patch }),
    );
  } catch {
    // Stockage indisponible : la preference vaut pour la session, sans plus.
  }
}

const savedPrefs = readPrefs();

// Ordre de priorite : choix explicite deja fait > preference systeme > defaut.
let currentLang =
  savedPrefs.lang === "en" || savedPrefs.lang === "fr"
    ? savedPrefs.lang
    : (navigator.language || "fr").toLowerCase().startsWith("en")
      ? "en"
      : "fr";

let currentTheme =
  savedPrefs.theme === "light" || savedPrefs.theme === "dark"
    ? savedPrefs.theme
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

/** Resout une cle de traduction dans la langue courante. */
function t(key) {
  return i18n[currentLang][key] || key;
}

/**
 * Ecrit une traduction dans un element en restituant les sauts de ligne ("\n")
 * sous forme de <br>, sans passer par innerHTML.
 * @param {Element} el
 * @param {string} value
 */
function setLocalizedText(el, value) {
  if (!value.includes("\n")) {
    el.textContent = value;
    return;
  }
  el.textContent = "";
  value.split("\n").forEach((line, index) => {
    if (index > 0) el.appendChild(document.createElement("br"));
    el.appendChild(document.createTextNode(line));
  });
}

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute("data-lang", lang);
  // lang= pilote la synthese vocale, la cesure et la langue annoncee aux
  // lecteurs d'ecran : il doit suivre le contenu reellement affiche.
  document.documentElement.setAttribute("lang", lang);
  writePrefs({ lang });
  document.getElementById("langToggle").textContent =
    lang === "fr" ? "EN" : "FR";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = i18n[lang][key];
    if (value === undefined) return;
    setLocalizedText(el, value);
  });
  // Certains libelles ne sont pas du texte visible mais un nom accessible :
  // ils doivent suivre la langue eux aussi.
  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    const value = i18n[lang][el.getAttribute("data-i18n-label")];
    if (value !== undefined) el.setAttribute("aria-label", value);
  });
}

function applyTheme(theme) {
  currentTheme = theme;
  const root = document.documentElement;
  // Coupe les transitions pendant le basculement puis les rétablit à la frame
  // suivante : le thème change d'un coup au lieu de fondre pendant 300 ms.
  root.classList.add("theme-switching");
  root.setAttribute("data-theme", theme);
  writePrefs({ theme });
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#101114" : "#fcfcfa");
  }
  requestAnimationFrame(() => {
    requestAnimationFrame(() => root.classList.remove("theme-switching"));
  });
  // Les icones soleil/lune sont dans le sprite : le CSS affiche la bonne
  // selon data-theme. Ecrire ici en textContent les effacerait.
  const toggle = document.getElementById("themeToggle");
  toggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre",
  );
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(currentLang === "fr" ? "en" : "fr");
});
document.getElementById("themeToggle").addEventListener("click", () => {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

// PROJECT FILTERS
document.getElementById("filterTabs").addEventListener("click", (e) => {
  if (!e.target.classList.contains("filter-tab")) return;
  document
    .querySelectorAll(".filter-tab")
    .forEach((t) => t.classList.remove("active"));
  e.target.classList.add("active");
  const filter = e.target.getAttribute("data-filter");
  document.querySelectorAll(".project-card").forEach((card) => {
    if (filter === "all" || card.getAttribute("data-cat") === filter) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

// SCROLL REVEAL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/**
 * Filet de securite des revelations.
 *
 * Une animation decorative ne doit jamais pouvoir masquer du contenu de
 * facon definitive. Ce cas s'est produit : un clip-path pose sur un element
 * observe le reduisait a une aire nulle, IntersectionObserver rapportait
 * intersectionRatio 0 en plein ecran, .visible n'arrivait jamais et le clip
 * n'etait jamais leve. Le portrait de la galerie est reste invisible.
 *
 * La cause est corrigee (le balayage porte sur l'image, pas sur le cadre),
 * mais le controle reste : il s'appuie sur la geometrie, que ni un clip ni
 * une opacite n'influencent.
 */
function filetDeSecuriteRevelations() {
  const revele = () => {
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("visible");
      }
    });
  };
  let attente = 0;
  const differe = () => {
    clearTimeout(attente);
    attente = setTimeout(revele, 200);
  };
  window.addEventListener("load", differe, { once: true });
  window.addEventListener("scroll", differe, { passive: true });
}
filetDeSecuriteRevelations();

// SCROLL TO TOP
window.addEventListener("scroll", () => {
  const btn = document.getElementById("scrollTop");
  btn.classList.toggle("visible", window.scrollY > 500);
});

// MOBILE MENU
function toggleMenu() {
  const open = document.getElementById("mobileMenu").classList.toggle("open");
  const burger = document.getElementById("hamburger");
  if (burger) burger.setAttribute("aria-expanded", String(open));
}

// FORM
/**
 * Soumission du formulaire de contact.
 *
 * Il n'y a pas de backend d'envoi : la version precedente affichait
 * "Message envoye" sans rien envoyer, ce qui faisait perdre le message et
 * laissait croire au visiteur qu'il avait ete recu. On compose donc un
 * mailto pre-rempli et on ouvre le client mail de l'utilisateur, puis on
 * affiche un repli explicite (email direct + WhatsApp) car certains
 * navigateurs bloquent silencieusement l'ouverture d'un mailto.
 */
function handleForm(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const subject = String(data.get("subject") || "").trim();
  const message = String(data.get("message") || "").trim();

  const mailSubject =
    currentLang === "fr"
      ? `Demande projet — ${subject}`
      : `Project enquiry — ${subject}`;
  const mailBody =
    currentLang === "fr"
      ? `Nom : ${name}\nEmail : ${email}\nSujet : ${subject}\n\n${message}`
      : `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`;

  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}` +
    `&body=${encodeURIComponent(mailBody)}`;

  const status = document.getElementById("formStatus");
  if (status) {
    setLocalizedText(status, t("form.status"));
    status.hidden = false;
  }

  const wa = document.getElementById("formWhatsapp");
  if (wa) {
    const waText =
      currentLang === "fr"
        ? `Bonjour Richard, je suis ${name}. Sujet : ${subject}.\n\n${message}`
        : `Hello Richard, I am ${name}. Subject: ${subject}.\n\n${message}`;
    wa.href = `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(waText)}`;
  }
}

// SMOOTH NAV CLOSE ON LINK
document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () =>
    document.getElementById("mobileMenu").classList.remove("open"),
  );
});

// PROJECT DETAIL MODAL DATA
const projectData = {
  p1: {
    icon: "smartphone",
    cat: { fr: "Application Mobile", en: "Mobile App" },
    title: {
      fr: "App Mobile Flutter — LEBONWAZ",
      en: "Flutter Mobile App — LEBONWAZ",
    },
    desc: {
      fr: "Projet phare de 10 mois chez LEBONWAZ (Libreville, Gabon). Chef de Projet IT et Développeur principal, j'ai conçu et livré une application mobile multiplateforme iOS & Android avec Flutter, de l'analyse des besoins jusqu'à la mise en production.",
      en: "10-month flagship project at LEBONWAZ (Libreville, Gabon). As IT Project Manager and Lead Developer, I designed and delivered a cross-platform iOS & Android mobile app with Flutter, from requirements analysis through to production deployment.",
    },
    tags: [
      "Flutter",
      "Dart",
      "Firebase Firestore",
      "Firebase Auth",
      "Provider",
      "MVC",
      "iOS",
      "Android",
    ],
    highlights: {
      fr: [
        "Analyse des besoins et rédaction des spécifications fonctionnelles & techniques",
        "Conception des wireframes et maquettes UX pour valider les flux utilisateurs",
        "Implémentation Firebase Firestore (données temps réel) et Firebase Auth",
        "Architecture MVC / Provider pour une base de code maintenable et scalable",
        "Optimisation des performances : animations fluides, gestion mémoire, temps de démarrage",
        "Coordination des tests utilisateurs et iterations selon les feedbacks",
      ],
      en: [
        "Requirements analysis and writing functional & technical specifications",
        "UX wireframes and mockups to validate user flows before development",
        "Firebase Firestore (real-time data) and Firebase Auth implementation",
        "MVC / Provider architecture for a maintainable and scalable codebase",
        "Performance optimisation: smooth animations, memory management, startup time",
        "User testing coordination and feature iterations based on feedback",
      ],
    },
  },
  p2: {
    icon: "globe",
    cat: { fr: "Plateforme Web", en: "Web Platform" },
    title: {
      fr: "Plateforme Web Drupal — Agence Digitale",
      en: "Drupal Web Platform — Digital Agency",
    },
    desc: {
      fr: "Mission de 3 mois dans une agence digitale à Rabat (Maroc). Développement et maintenance de plateformes web enterprise sous Drupal pour plusieurs clients. Gestion de la relation client et coordination des livraisons.",
      en: "3-month mission at a digital agency in Rabat (Morocco). Development and maintenance of enterprise web platforms under Drupal for multiple clients. Client relationship management and delivery coordination.",
    },
    tags: ["Drupal", "HTML5", "CSS3", "JavaScript", "SEO", "PHP"],
    highlights: {
      fr: [
        "Développement de nouvelles fonctionnalités sur des plateformes Drupal multi-clients",
        "Intégration de maquettes responsive en HTML5/CSS3 avec structure sémantique",
        "Optimisation SEO technique des sites existants",
        "Gestion de la relation client, recueil des besoins et suivi des livraisons",
        "Coordination des plannings de maintenance et d'évolution",
      ],
      en: [
        "Development of new features on multi-client Drupal platforms",
        "Responsive mockup integration in HTML5/CSS3 with semantic structure",
        "Technical SEO optimisation of existing sites",
        "Client relationship management, requirements gathering and delivery tracking",
        "Maintenance and evolution schedule coordination",
      ],
    },
  },
  p5: {
    icon: "sparkle",
    cat: { fr: "Branding", en: "Branding" },
    title: {
      fr: "M.G.N CodeWave — Studio digital",
      en: "M.G.N CodeWave — Digital studio",
    },
    desc: {
      fr: "Mon studio digital : identité de marque, design system et delivery produit pour PME et institutions. J'en ai conçu l'identité complète puis la plateforme qui porte l'offre, du naming à la mise en ligne.",
      en: "My digital studio: brand identity, design system and product delivery for SMEs and institutions. I designed its full identity and then the platform that carries the offer, from naming to launch.",
    },
    tags: [
      "Branding",
      "Design System",
      "Figma",
      "Product Ops",
      "React",
      "Flutter",
      "Node.js",
      "Firebase",
    ],
    highlights: {
      fr: [
        "Conception du logo NR avec identité bicolore (graphite & bleu)",
        "Charte graphique et design system appliqués au web, au mobile et au print",
        "Méthode en quatre temps : discovery, design system, delivery agile, support",
        "Offre structurée : plateformes e-commerce, sites vitrines, apps Flutter, consulting",
        'Positionnement assumé : "Qualité ingénieur, rapidité startup"',
      ],
      en: [
        "NR logo design with two-tone identity (graphite & blue)",
        "Graphic guidelines and design system applied to web, mobile and print",
        "Four-step method: discovery, design system, agile delivery, support",
        "Structured offer: e-commerce platforms, brochure sites, Flutter apps, consulting",
        'Deliberate positioning: "Engineer quality, startup speed"',
      ],
    },
    link: "https://codewave-psi.vercel.app/",
  },
  p7: {
    icon: "building",
    cat: { fr: "Mission client · Gabon Connect", en: "Client mission · Gabon Connect" },
    title: {
      fr: "Gabonova — Plateforme immobilière",
      en: "Gabonova — Real estate platform",
    },
    desc: {
      fr: "Mission menée chez Gabon Connect SARLU pour Gabonova, plateforme de mise en relation immobilière. Orchestration de campagnes de tests fonctionnels documentées, production de rapports d'anomalies itératifs, réalisation de supports vidéo de présentation et d'installation, et proposition d'une stratégie marketing de lancement.",
      en: "Mission carried out at Gabon Connect SARLU for Gabonova, a real estate matching platform. Orchestration of documented functional testing campaigns, delivery of iterative issue reports, production of video support for demo and installation, and proposal of a go-to-market strategy.",
    },
    tags: ["React", "Node.js", "PostgreSQL", "Tests fonctionnels", "Go-to-market"],
    highlights: {
      fr: [
        "Campagnes de tests fonctionnels documentées sur l'ensemble du parcours utilisateur",
        "Rapports d'anomalies itératifs transmis à l'équipe de développement",
        "Supports vidéo de présentation produit et d'installation",
        "Proposition de stratégie marketing de lancement",
        "Suivi des corrections et validation des itérations",
      ],
      en: [
        "Documented functional testing campaigns across the whole user journey",
        "Iterative issue reports delivered to the development team",
        "Video support for product demo and installation",
        "Go-to-market strategy proposal",
        "Fix tracking and validation of iterations",
      ],
    },
  },
  p8: {
    icon: "key",
    cat: { fr: "Mission client · Gabon Connect", en: "Client mission · Gabon Connect" },
    title: {
      fr: "AHPAM AssetView — Gestion locative bilingue",
      en: "AHPAM AssetView — Bilingual rental management",
    },
    desc: {
      fr: "Intervention chez Gabon Connect SARLU sur AHPAM AssetView, application de gestion locative bilingue FR/EN. Rédaction du plan et des cas de test, conduite des recettes fonctionnelles et formalisation des retours client pour alimenter les itérations produit.",
      en: "Assignment at Gabon Connect SARLU on AHPAM AssetView, a bilingual FR/EN rental management app. Writing the test plan and test cases, running functional acceptance reviews and formalising client feedback to feed product iterations.",
    },
    tags: ["PWA", "i18n FR/EN", "Plan de test", "Recette", "Firestore"],
    highlights: {
      fr: [
        "Rédaction d'un plan de test structuré (périmètre, critères, cas nominaux et limites)",
        "Conduite des recettes fonctionnelles avec le client",
        "Formalisation des retours client en backlog produit",
        "Suivi des corrections et re-test avant livraison",
        "Interface bilingue FR/EN validée sur les deux langues",
      ],
      en: [
        "Structured test plan (scope, criteria, nominal and edge cases)",
        "Functional acceptance reviews run with the client",
        "Client feedback formalised into a product backlog",
        "Fix tracking and re-testing before delivery",
        "Bilingual FR/EN interface validated in both languages",
      ],
    },
  },
  p9: {
    icon: "shield",
    cat: { fr: "Mission client · Gabon Connect", en: "Client mission · Gabon Connect" },
    title: {
      fr: "Delta Manga Sécurité — Site vitrine & pilotage",
      en: "Delta Manga Sécurité — Showcase site & delivery",
    },
    desc: {
      fr: "Accompagnement de Delta Manga Sécurité (DMS) via Gabon Connect SARLU : contribution au site vitrine, reporting mensuel d'avancement, analyse comparative de 5 solutions de gestion du gardiennage et rédaction du cahier des charges du projet DMS 360°.",
      en: "Support for Delta Manga Sécurité (DMS) through Gabon Connect SARLU: contribution to the showcase website, monthly progress reporting, comparative analysis of 5 guard-management solutions and writing the requirements spec for the DMS 360° project.",
    },
    tags: ["Site vitrine", "Benchmark", "Cahier des charges", "Reporting"],
    highlights: {
      fr: [
        "Contribution au site vitrine de DMS",
        "Reporting mensuel d'avancement auprès de la direction",
        "Analyse comparative de 5 solutions de gestion du gardiennage",
        "Rédaction du cahier des charges du projet DMS 360°",
        "Cadrage des besoins et recommandations de déploiement",
      ],
      en: [
        "Contribution to DMS's showcase website",
        "Monthly progress reporting to management",
        "Comparative analysis of 5 guard-management solutions",
        "Requirements spec for the DMS 360° project",
        "Need-framing and deployment recommendations",
      ],
    },
  },
  p10: {
    icon: "flutter",
    cat: { fr: "Super-app Mobile", en: "Mobile Super-app" },
    title: {
      fr: "Waz'UP — Super-app Flutter",
      en: "Waz'UP — Flutter Super-app",
    },
    desc: {
      fr: "Super-application mobile Flutter réunissant trois services en une seule plateforme : e-commerce, livraison à la demande et location de biens et services. Une base de code unique pour iOS et Android.",
      en: "Flutter mobile super-app combining three services in a single platform: e-commerce, on-demand delivery and rental of goods and services. One codebase for both iOS and Android.",
    },
    tags: [
      "Flutter 3.x",
      "Dart",
      "Riverpod",
      "GoRouter",
      "Firebase",
      "Node.js",
      "PostgreSQL",
      "Google Maps API",
      "Stripe",
      "Material Design 3",
    ],
    highlights: {
      fr: [
        "Module e-commerce : catalogue, panier, paiement multi-méthodes (Mobile Money et cartes)",
        "Module livraison : géolocalisation GPS, suivi du livreur sur carte et chat temps réel",
        "Module location : réservation de biens et de services avec calendrier de disponibilité",
        "Notifications push FCM et suivi de commande en temps réel",
        "100 % de code partagé entre iOS et Android",
      ],
      en: [
        "E-commerce module: catalogue, cart, multi-method payment (Mobile Money and cards)",
        "Delivery module: GPS geolocation, live courier tracking on a map and real-time chat",
        "Rental module: booking of goods and services with an availability calendar",
        "FCM push notifications and real-time order tracking",
        "100% shared code between iOS and Android",
      ],
    },
    repo: "https://github.com/NGOUBADJAMBO-Richard/flutter_wazup",
  },
  p11: {
    icon: "cart",
    cat: { fr: "E-commerce", en: "E-commerce" },
    title: {
      fr: "Le Bon Waz — Plateforme e-commerce",
      en: "Le Bon Waz — E-commerce platform",
    },
    desc: {
      fr: "Plateforme de vente en ligne avec catalogue dynamique et back-office de gestion des commandes, pensée pour que des commerçants puissent tenir leur boutique sans compétence technique.",
      en: "Online sales platform with a dynamic catalogue and an order-management back-office, designed so that merchants can run their shop without technical skills.",
    },
    tags: ["HTML5", "CSS3", "Bootstrap", "PHP", "MySQL", "Stripe"],
    highlights: {
      fr: [
        "Catalogue produits avec recherche et filtres avancés",
        "Panier d'achat et gestion des quantités",
        "Paiement sécurisé via la passerelle Stripe",
        "Back-office de gestion des commandes et des stocks en temps réel",
        "UI kit maison pour un design cohérent sur tout le parcours",
      ],
      en: [
        "Product catalogue with search and advanced filters",
        "Shopping cart with quantity management",
        "Secure payment through the Stripe gateway",
        "Back-office for orders and real-time stock management",
        "In-house UI kit for a consistent design across the whole journey",
      ],
    },
  },
  p12: {
    icon: "chart",
    cat: { fr: "Plateforme SaaS", en: "SaaS platform" },
    title: {
      fr: "LMS Platform — Gestion des prospects",
      en: "LMS Platform — Leads management",
    },
    desc: {
      fr: "Leads Management System complet : tableau de bord analytique, suivi du pipeline commercial et automatisation des campagnes marketing, construit en React et Firebase.",
      en: "Complete Leads Management System: analytics dashboard, sales pipeline tracking and marketing campaign automation, built with React and Firebase.",
    },
    tags: ["React.js", "Firebase", "Analytics", "CRM", "Webhooks"],
    highlights: {
      fr: [
        "Gestion complète du pipeline commercial par étape",
        "Scoring automatique des prospects selon leur activité",
        "Historique des interactions et notifications temps réel",
        "Automatisation des campagnes email",
        "Rapports analytiques et intégration de formulaires via webhooks",
      ],
      en: [
        "Full sales pipeline management, stage by stage",
        "Automatic lead scoring based on activity",
        "Interaction history and real-time notifications",
        "Email campaign automation",
        "Analytics reports and form integration through webhooks",
      ],
    },
    link: "https://gestion-des-prospects.vercel.app/dashboard",
  },
  p13: {
    icon: "target",
    cat: { fr: "Écosystème digital", en: "Digital ecosystem" },
    title: {
      fr: "H2P Group — Écosystème digital complet",
      en: "H2P Group — Complete digital ecosystem",
    },
    desc: {
      fr: "Projet en trois phases pour un cabinet de coaching : création de l'identité visuelle, développement du site vitrine, puis mise en place d'un tunnel de prise de rendez-vous connecté au CRM.",
      en: "Three-phase project for a coaching firm: visual identity creation, brochure site development, then an appointment-booking funnel connected to the CRM.",
    },
    tags: [
      "Brand Design",
      "Figma",
      "HTML5",
      "CSS3",
      "JavaScript",
      "GSAP",
      "Node.js",
      "MongoDB",
      "HubSpot CRM",
    ],
    highlights: {
      fr: [
        "Phase 1 — Identité : logo et déclinaisons, charte graphique et brand book",
        "Phase 2 — Site vitrine 6 pages, responsive, optimisé SEO et accessible WCAG 2.1 AA",
        "Phase 3 — Tunnel de réservation en 5 étapes avec calendrier de disponibilités",
        "Synchronisation automatique des rendez-vous vers le CRM et emails de confirmation",
        "Prévention des doubles réservations et intégration Google Calendar des coachs",
      ],
      en: [
        "Phase 1 — Identity: logo and variants, graphic guidelines and brand book",
        "Phase 2 — Six-page responsive brochure site, SEO-optimised and WCAG 2.1 AA accessible",
        "Phase 3 — Five-step booking funnel with an availability calendar",
        "Automatic appointment sync to the CRM and confirmation emails",
        "Double-booking prevention and Google Calendar integration for coaches",
      ],
    },
  },
  p14: {
    icon: "book",
    cat: { fr: "E-learning", en: "E-learning" },
    title: {
      fr: "English Fun Club — Plateforme gamifiée",
      en: "English Fun Club — Gamified platform",
    },
    desc: {
      fr: "Plateforme e-learning destinée aux adolescents pour apprendre l'anglais. Le parti pris : maintenir l'engagement par le jeu plutôt que par la contrainte, avec des parcours progressifs et un feedback immédiat.",
      en: "E-learning platform for teenagers learning English. The bet: sustain engagement through play rather than constraint, with progressive tracks and immediate feedback.",
    },
    tags: ["HTML5", "CSS3", "JavaScript", "E-Learning", "Gamification"],
    highlights: {
      fr: [
        "Parcours d'apprentissage progressif découpé par niveau",
        "Exercices interactifs avec correction immédiate",
        "Système de points et de badges pour entretenir la motivation",
        "Quiz et jeux éducatifs variés",
        "Suivi de progression personnalisé par apprenant",
      ],
      en: [
        "Progressive learning path broken down by level",
        "Interactive exercises with immediate correction",
        "Points and badges system to sustain motivation",
        "Varied quizzes and educational games",
        "Personalised progress tracking for each learner",
      ],
    },
    link: "https://justin-patoki-site.vercel.app/",
    repo: "https://github.com/NGOUBADJAMBO-Richard/englishfunclub.club",
  },
  p15: {
    icon: "user",
    cat: { fr: "Application Web", en: "Web App" },
    title: {
      fr: "Découvre qui tu es — Tests de personnalité",
      en: "Découvre qui tu es — Personality tests",
    },
    desc: {
      fr: "Application de questionnaires interactifs qui restitue un profil de personnalité détaillé. Tout l'enjeu était l'algorithme de pondération des réponses et la lisibilité du résultat.",
      en: "Interactive questionnaire app that returns a detailed personality profile. The whole challenge lay in the answer-weighting algorithm and in making the result readable.",
    },
    tags: ["HTML5", "CSS3", "JavaScript", "Data viz"],
    highlights: {
      fr: [
        "Questionnaires personnalisés à choix multiples",
        "Algorithme d'analyse et de pondération des réponses",
        "Résultats détaillés restitués sous forme de graphiques",
        "Partage des résultats sur les réseaux sociaux",
        "Base de profils psychologiques exploitée par le moteur d'analyse",
      ],
      en: [
        "Personalised multiple-choice questionnaires",
        "Answer analysis and weighting algorithm",
        "Detailed results rendered as charts",
        "Result sharing on social networks",
        "Psychological profile database powering the analysis engine",
      ],
    },
    link: "https://decouvre-qui-tu-es.vercel.app/",
    repo: "https://github.com/NGOUBADJAMBO-Richard/Decouvre-qui-tu-es",
  },
  p16: {
    icon: "layers",
    cat: { fr: "Site éditorial", en: "Editorial site" },
    title: {
      fr: "Lampe À Mes Pieds — Site éditorial",
      en: "Lampe À Mes Pieds — Editorial site",
    },
    desc: {
      fr: "Site de présentation de collections littéraires avec modules de téléchargement et espace presse. Priorité donnée au confort de lecture et à l'accessibilité.",
      en: "Site presenting literary collections with download modules and a press area. Priority given to reading comfort and accessibility.",
    },
    tags: ["HTML5", "CSS3", "JavaScript", "Accessibilité", "WCAG 2.1"],
    highlights: {
      fr: [
        "Module de téléchargement de contenus numériques",
        "Espace presse avec kit média téléchargeable",
        "Mise en page responsive pensée pour la lecture longue",
        "Conformité accessibilité WCAG 2.1",
        "Système de newsletter intégré",
      ],
      en: [
        "Digital content download module",
        "Press area with a downloadable media kit",
        "Responsive layout designed for long-form reading",
        "WCAG 2.1 accessibility compliance",
        "Built-in newsletter system",
      ],
    },
    link: "https://edition-lampe-a-mes-pieds.vercel.app/",
  },
  p17: {
    icon: "users",
    cat: { fr: "Site communautaire", en: "Community site" },
    title: {
      fr: "Grâce Déployée — Site communautaire",
      en: "Grâce Déployée — Community site",
    },
    desc: {
      fr: "Site d'une église locale : agenda des événements, bibliothèque de sermons en ligne et espace bénévoles. L'objectif était de donner à une communauté non technique un outil qu'elle puisse tenir seule.",
      en: "Local church site: event calendar, online sermon library and volunteer area. The goal was to give a non-technical community a tool they could run on their own.",
    },
    tags: ["HTML5", "CSS3", "CMS", "Community"],
    highlights: {
      fr: [
        "Bibliothèque de sermons audio et vidéo",
        "Espace bénévoles avec inscription en ligne",
        "Agenda des événements et galerie photo des éditions passées",
        "Formulaire de contact et de demandes de prière",
        "Newsletter et notifications des activités",
      ],
      en: [
        "Audio and video sermon library",
        "Volunteer area with online registration",
        "Event calendar and photo gallery of past editions",
        "Contact and prayer-request form",
        "Newsletter and activity notifications",
      ],
    },
    link: "https://grace-deployee.vercel.app/",
  },
  p18: {
    icon: "home",
    cat: { fr: "Intégration Web", en: "Web integration" },
    title: {
      fr: "Booki — Réservation d'hébergements",
      en: "Booki — Accommodation booking",
    },
    desc: {
      fr: "Prototype d'interface de réservation d'hébergements touristiques. Exercice d'intégration pure : aucun framework, tout repose sur la sémantique HTML et la maîtrise de Flexbox.",
      en: "Prototype booking interface for tourist accommodation. A pure integration exercise: no framework, everything rests on HTML semantics and Flexbox mastery.",
    },
    tags: ["HTML5", "CSS3", "Flexbox", "Responsive"],
    highlights: {
      fr: [
        "Interface de recherche d'hébergements avec filtres",
        "Affichage des hébergements populaires et des activités",
        "Responsive complet — mobile, tablette et desktop",
        "Usage avancé de Flexbox pour les mises en page",
        "Code sémantique et accessible, sans dépendance externe",
      ],
      en: [
        "Accommodation search interface with filters",
        "Display of popular accommodation and activities",
        "Fully responsive — mobile, tablet and desktop",
        "Advanced Flexbox usage for layouts",
        "Semantic, accessible code with no external dependency",
      ],
    },
    link: "https://booki-projet.vercel.app/",
  },
  p19: {
    icon: "doc",
    cat: { fr: "Documentation technique", en: "Technical documentation" },
    title: {
      fr: "API Airtel Money — Documentation d'intégration",
      en: "Airtel Money API — Integration documentation",
    },
    desc: {
      fr: "Documentation technique complète pour intégrer l'API de paiement mobile Airtel Money : authentification, endpoints, webhooks et cas d'erreur, avec exemples de requêtes exécutables.",
      en: "Complete technical documentation for integrating the Airtel Money mobile payment API: authentication, endpoints, webhooks and error cases, with runnable request examples.",
    },
    tags: ["API REST", "OAuth2", "Markdown", "Webhooks", "Mobile Money"],
    highlights: {
      fr: [
        "Guide d'authentification OAuth2 pas à pas",
        "Documentation exhaustive des endpoints avec exemples requête/réponse",
        "Gestion des webhooks et des callbacks de transaction",
        "Table des codes d'erreur et guide de dépannage",
        "Bonnes pratiques de sécurité et séparation test / production",
      ],
      en: [
        "Step-by-step OAuth2 authentication guide",
        "Exhaustive endpoint documentation with request/response examples",
        "Webhook and transaction callback handling",
        "Error code table and troubleshooting guide",
        "Security best practices and test/production separation",
      ],
    },
    link: "https://ngoubadjambo-richard.github.io/Documentation-API-Airtel/",
    repo: "https://github.com/NGOUBADJAMBO-Richard/Documentation-API-Airtel",
  },
};

function openModal(id) {
  const d = projectData[id];
  const lang = currentLang;
  document.getElementById("modalThumb").innerHTML =
    '<svg class="icon-lg" aria-hidden="true"><use href="#i' + "-" + d.icon + '"/></svg>';
  document.getElementById("modalCat").textContent = d.cat[lang];
  document.getElementById("modalTitle").textContent = d.title[lang];
  document.getElementById("modalDesc").textContent = d.desc[lang];
  document.getElementById("modalTags").innerHTML = d.tags
    .map((t) => `<span class="modal-tag">${t}</span>`)
    .join("");
  document.getElementById("modalHighlights").innerHTML = d.highlights[lang]
    .map((h) => `<li>${h}</li>`)
    .join("");
  document.getElementById("lblDesc").textContent = "Description";
  document.getElementById("lblStack").textContent =
    lang === "fr" ? "Stack technique" : "Tech stack";
  document.getElementById("lblHighlights").textContent =
    lang === "fr" ? "Points clés" : "Key highlights";
  document.getElementById("modalCta").textContent =
    lang === "fr" ? "Discuter de ce projet" : "Discuss this project";

  // Les liens externes sont propres a chaque projet : on masque ceux qui
  // n'existent pas plutot que de renvoyer vers une page generique.
  const live = document.getElementById("modalLink");
  if (d.link) {
    live.href = d.link;
    live.textContent =
      lang === "fr" ? "Voir le projet en ligne →" : "View live project →";
    live.hidden = false;
  } else {
    live.hidden = true;
  }

  const repo = document.getElementById("modalRepo");
  if (d.repo) {
    repo.href = d.repo;
    repo.textContent = lang === "fr" ? "Code source GitHub" : "GitHub source";
    repo.hidden = false;
  } else {
    repo.hidden = true;
  }

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}
function closeModalOnOverlay(e) {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

applyLang(currentLang);
applyTheme(currentTheme);

// ===================== FOND ANIME & MICRO-INTERACTIONS =====================
// Un seul module pour tout ce qui est decoratif : reseau de noeuds en canvas,
// barre de progression, nav condensee, reveal en cascade, compteurs animes.
// Tout est inhibe si l'utilisateur a demande prefers-reduced-motion.

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

/**
 * Intensite du defilement, entre 0 et 1, alimentee par initScrollMotion et
 * lue par le fond anime : les impulsions accelerent quand on parcourt la
 * page, puis reviennent a leur rythme. Le fond repond a la lecture au lieu
 * de tourner en boucle independamment.
 */
let scrollBoost = 0;

/**
 * Position de defilement, relayee au fond anime. Le champ de pistes est
 * genere sur deux hauteurs d'ecran et translate d'autant : de nouvelles
 * pistes entrent en permanence au lieu de repeter le meme viewport.
 */
let scrollOffset = 0;

/** Barre de progression de lecture + nav condensee, sur une seule boucle rAF. */
function initScrollChrome() {
  const bar = document.querySelector(".scroll-progress");
  const nav = document.querySelector("nav");
  let ticking = false;

  function update() {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    if (bar) bar.style.setProperty("--progress", Math.min(ratio, 1).toFixed(4));
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}

/**
 * Decale l'apparition des elements .reveal qui partagent le meme parent.
 * Le delai est porte par --d, lu par la transition CSS.
 */
function initStaggeredReveal() {
  if (prefersReducedMotion.matches) return;
  const groups = new Map();
  document.querySelectorAll(".reveal").forEach((el) => {
    const parent = el.parentElement;
    if (!parent) return;
    const index = groups.get(parent) ?? 0;
    groups.set(parent, index + 1);
    // Plafond a 240 ms : au-dela l'utilisateur attend au lieu d'etre guide.
    el.style.setProperty("--d", `${Math.min(index * 60, 240)}ms`);
  });
}

/**
 * Anime les chiffres de la barre de stats au premier passage a l'ecran.
 * Le suffixe ("+", "%") est preserve tel quel.
 */
function initCounters() {
  const items = document.querySelectorAll(".stat-num");
  if (!items.length) return;

  if (prefersReducedMotion.matches) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        counterObserver.unobserve(el);

        const raw = el.textContent.trim();
        const match = raw.match(/^(\d+)(.*)$/);
        if (!match) return;
        const target = Number(match[1]);
        const suffix = match[2];
        const duration = 1100;
        const startedAt = performance.now();

        function tick(now) {
          const p = Math.min((now - startedAt) / duration, 1);
          // easeOutCubic : demarre vite, se pose en douceur sur la valeur.
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 },
  );

  items.forEach((el) => counterObserver.observe(el));
}

initScrollChrome();
initStaggeredReveal();
initCounters();

/**
 * Scroll-spy : marque dans la nav la section en cours de lecture.
 *
 * rootMargin ramene la zone de detection a une bande fine au milieu de
 * l'ecran. Sans ca, deux sections sont visibles en meme temps la plupart du
 * temps et le lien actif clignote entre les deux pendant le defilement.
 */
function initScrollSpy() {
  const links = [...document.querySelectorAll('nav a[href^="#"]')].filter(
    (a) => a.getAttribute("href").length > 1,
  );
  if (!links.length) return;

  // Une section peut etre visee par plusieurs liens (nav + menu mobile).
  const byId = new Map();
  for (const a of links) {
    const id = a.getAttribute("href").slice(1);
    if (!document.getElementById(id)) continue;
    if (!byId.has(id)) byId.set(id, []);
    byId.get(id).push(a);
  }
  if (!byId.size) return;

  let active = null;
  function setActive(id) {
    if (id === active) return;
    active = id;
    for (const [sectionId, anchors] of byId) {
      for (const a of anchors) {
        if (sectionId === id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      }
    }
  }

  const spy = new IntersectionObserver(
    (entries) => {
      const hit = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (hit) setActive(hit.target.id);
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
  );

  for (const id of byId.keys()) spy.observe(document.getElementById(id));
}

initScrollSpy();
/**
 * Arriere-plan : pistes de circuit parcourues par des impulsions.
 *
 * Pourquoi ce motif : Richard est ingenieur informatique et reseaux, et
 * l'essentiel de son travail est de faire circuler des donnees entre des
 * systemes. Des pistes orthogonales ponctuees de noeuds, avec des impulsions
 * lumineuses qui les parcourent, dit exactement cela — et se lit au premier
 * coup d'oeil, contrairement au champ de particules qu'il remplace.
 *
 * La version precedente etait invisible : 5 pixels percus sur 1,8 million.
 * Les opacites sont ici calibrees pour etre vues (piste 0,22 / noeud 0,45 /
 * impulsion jusqu'a 1) et le contraste du texte est garanti autrement : les
 * sections restent semi-opaques, et le canvas est atenue par un degrade sur
 * la colonne de texte du hero (voir --canvas-opacity et le masque CSS).
 *
 * Cout : la geometrie est calculee une fois par redimensionnement. Chaque
 * image ne fait que retracer ~28 polylignes et les impulsions en cours.
 */
function initCircuitField() {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas || prefersReducedMotion.matches) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const STEP = 44; // pas de la grille de routage, en pixels CSS
  let traces = [];
  let pulses = [];
  let echoes = [];
  let glyphs = [];
  const GLYPHES = ["{ }", "< / >", "( )", "[ ]", "=>", ";", "#", "&&", "/*", "*/"];
  let width = 0;
  let height = 0;
  let fieldHeight = 0;
  let dpr = 1;
  let rafId = null;
  let running = false;
  let fieldShift = 0;
  const pointer = { x: -9999, y: -9999, active: false };

  function readRgb(name, fallback) {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return /^\d+\s*,\s*\d+\s*,\s*\d+$/.test(raw) ? raw : fallback;
  }

  let rgb = readRgb("--node", "27, 63, 216");
  let rgb2 = readRgb("--node-2", "180, 84, 10");

  /**
   * Construit une piste : depart sur le bord gauche, progression vers la
   * droite par segments horizontaux entrecoupes de decrochages verticaux,
   * comme un routage de carte electronique.
   */
  function buildTrace(y0) {
    const points = [{ x: -STEP, y: y0 }];
    let x = -STEP;
    let y = y0;
    while (x < width + STEP) {
      x += STEP * (2 + Math.floor(Math.random() * 5));
      points.push({ x, y });
      // Un decrochage sur deux environ : sinon la piste est une simple ligne.
      if (Math.random() < 0.62 && x < width) {
        const dir = Math.random() < 0.5 ? -1 : 1;
        y += dir * STEP * (1 + Math.floor(Math.random() * 3));
        y = Math.min(Math.max(y, STEP), fieldHeight - STEP);
        points.push({ x, y });
      }
    }
    // Longueurs cumulees : elles servent a placer une impulsion a une
    // distance donnee sans reparcourir la polyligne a chaque image.
    const lengths = [0];
    let total = 0;
    for (let i = 1; i < points.length; i++) {
      total += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
      lengths.push(total);
    }
    return { points, lengths, total };
  }

  /** Position cartesienne a la distance d du debut de la piste. */
  function pointAt(trace, d) {
    const { points, lengths } = trace;
    let i = 1;
    while (i < lengths.length - 1 && lengths[i] < d) i++;
    const seg = lengths[i] - lengths[i - 1];
    const k = seg > 0 ? (d - lengths[i - 1]) / seg : 0;
    const a = points[i - 1];
    const b = points[i];
    return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
  }

  function spawnPulse() {
    if (!traces.length) return null;
    const trace = traces[Math.floor(Math.random() * traces.length)];
    return {
      trace,
      d: 0,
      // Vitesse en pixels par image : assez lent pour etre suivi de l'oeil.
      speed: 1.1 + Math.random() * 2.2,
      len: 60 + Math.random() * 130,
      // Une impulsion sur cinq prend l'accent chaud : le fond respire.
      warm: Math.random() < 0.2,
    };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Le champ couvre deux ecrans : on peut le translater d'une hauteur
    // complete sans jamais laisser de zone vide en bas.
    fieldHeight = height * 2;
    const lignes = Math.max(16, Math.min(Math.round(fieldHeight / STEP / 1.9), 40));
    traces = [];
    for (let i = 0; i < lignes; i++) {
      const y0 = Math.round(((i + 0.5) / lignes) * fieldHeight);
      traces.push(buildTrace(y0));
    }

    // Ondes concentriques : quelques points d'emission repartis dans la
    // moitie droite, la ou le texte ne passe pas.
    echoes = [];
    const nbEchos = width > 1200 ? 3 : 2;
    for (let i = 0; i < nbEchos; i++) {
      echoes.push({
        x: width * (0.45 + Math.random() * 0.5),
        y: height * (0.15 + Math.random() * 0.7),
        r: Math.random() * 260,
        max: 200 + Math.random() * 180,
        speed: 0.35 + Math.random() * 0.4,
      });
    }

    // Glyphes de code, en derive lente.
    glyphs = [];
    const nbGlyphes = Math.min(Math.max(Math.round(width / 210), 4), 11);
    for (let i = 0; i < nbGlyphes; i++) {
      glyphs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: -0.06 - Math.random() * 0.14,
        size: 12 + Math.random() * 16,
        texte: GLYPHES[Math.floor(Math.random() * GLYPHES.length)],
        alpha: 0.1 + Math.random() * 0.14,
      });
    }

    const nbPulses = Math.min(Math.max(Math.round(lignes * 1.8), 14), 34);
    pulses = [];
    for (let i = 0; i < nbPulses; i++) {
      const p = spawnPulse();
      if (!p) break;
      // Depart echelonne : sinon toutes les impulsions partent de front.
      p.d = Math.random() * p.trace.total;
      pulses.push(p);
    }
  }

  function drawTraces() {
    ctx.lineWidth = 1;
    ctx.lineJoin = "round";
    for (const trace of traces) {
      ctx.strokeStyle = `rgba(${rgb}, 0.34)`;
      ctx.beginPath();
      ctx.moveTo(trace.points[0].x, trace.points[0].y);
      for (let i = 1; i < trace.points.length; i++) {
        ctx.lineTo(trace.points[i].x, trace.points[i].y);
      }
      ctx.stroke();

      // Noeuds aux decrochages : ce sont eux qui donnent la lecture
      // "circuit" plutot que "simples lignes".
      for (let i = 1; i < trace.points.length - 1; i++) {
        const pt = trace.points[i];
        const proche =
          pointer.active &&
          Math.hypot(pt.x - pointer.x, pt.y - (pointer.y - fieldShift)) < 140;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, proche ? 3.4 : 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${proche ? 0.95 : 0.6})`;
        ctx.fill();
      }
    }
  }

  function drawPulses() {
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    for (const p of pulses) {
      p.d += p.speed * (1 + scrollBoost * 2.4);
      if (p.d - p.len > p.trace.total) {
        Object.assign(p, spawnPulse());
        continue;
      }
      const teinte = p.warm ? rgb2 : rgb;
      // La queue est dessinee en segments de plus en plus pales : un
      // createLinearGradient par impulsion couterait bien plus cher.
      const SEGMENTS = 9;
      for (let s = 0; s < SEGMENTS; s++) {
        const d1 = p.d - (p.len * s) / SEGMENTS;
        const d2 = p.d - (p.len * (s + 1)) / SEGMENTS;
        if (d1 < 0) break;
        const a = pointAt(p.trace, Math.min(d1, p.trace.total));
        const b = pointAt(p.trace, Math.max(Math.min(d2, p.trace.total), 0));
        const alpha = (1 - s / SEGMENTS) * 0.95;
        ctx.strokeStyle = `rgba(${teinte}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      // Tete lumineuse.
      const tete = pointAt(p.trace, Math.min(p.d, p.trace.total));
      ctx.beginPath();
      ctx.arc(tete.x, tete.y, 2.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${teinte}, 1)`;
      ctx.fill();
    }
  }

  /** Ondes concentriques : trois cercles decales qui s'eloignent et palissent. */
  function drawEchoes() {
    ctx.lineWidth = 1;
    for (const e of echoes) {
      e.r += e.speed;
      if (e.r > e.max) {
        e.r = 0;
        e.x = width * (0.45 + Math.random() * 0.5);
        e.y = height * (0.15 + Math.random() * 0.7);
      }
      for (let k = 0; k < 3; k++) {
        const r = e.r - k * 46;
        if (r <= 0) continue;
        const alpha = (1 - r / e.max) * 0.3 * (1 - k * 0.3);
        if (alpha <= 0.004) continue;
        ctx.strokeStyle = `rgba(${rgb}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, r, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  /** Glyphes de code en derive, reinjectes par le bas quand ils sortent. */
  function drawGlyphs() {
    ctx.font = "italic 400 16px 'Space Grotesk', system-ui, sans-serif";
    ctx.textBaseline = "middle";
    for (const g of glyphs) {
      g.x += g.vx;
      g.y += g.vy;
      if (g.y < -30) {
        g.y = height + 30;
        g.x = Math.random() * width;
      }
      if (g.x < -40) g.x = width + 40;
      if (g.x > width + 40) g.x = -40;
      ctx.font = `italic 400 ${g.size.toFixed(0)}px 'Space Grotesk', system-ui, sans-serif`;
      ctx.fillStyle = `rgba(${rgb}, ${g.alpha.toFixed(3)})`;
      ctx.fillText(g.texte, g.x, g.y);
    }
  }

  function step() {
    // Ondes et glyphes restent dans le repere de l'ecran : ils accompagnent
    // le regard plutot que la page.
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    drawEchoes();
    drawGlyphs();

    // Les pistes, elles, defilent avec la page.
    fieldShift = -(((scrollOffset * 0.22) % fieldHeight) + fieldHeight) % fieldHeight;
    ctx.setTransform(dpr, 0, 0, dpr, 0, fieldShift * dpr);
    drawTraces();
    drawPulses();

    rafId = requestAnimationFrame(step);
  }

  function start() {
    if (running || window.innerWidth < 768) return;
    running = true;
    rafId = requestAnimationFrame(step);
  }

  function stop() {
    running = false;
    if (rafId !== null) cancelAnimationFrame(rafId);
    rafId = null;
  }

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      if (window.innerWidth < 768) stop();
      else start();
    }, 180);
  });

  window.addEventListener(
    "pointermove",
    (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    },
    { passive: true },
  );
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    requestAnimationFrame(() => {
      rgb = readRgb("--node", rgb);
      rgb2 = readRgb("--node-2", rgb2);
    });
  });

  resize();
  start();
}

/**
 * Mouvements pilotes par le defilement, tous regroupes dans une seule
 * boucle rAF : la trame de fond, la parallaxe du portrait et le
 * remplissage du filet de parcours.
 */
function initScrollMotion() {
  if (prefersReducedMotion.matches) return;

  const grid = document.querySelector(".grid-bg");
  const photo = document.querySelector(".photo-frame");
  const lines = [...document.querySelectorAll(".about-timeline .tl-line")];
  const hero = document.getElementById("hero");
  let ticking = false;

  let lastY = window.scrollY;

  // Positions absolues des filets, mesurees une fois puis au
  // redimensionnement seulement. Les relire a chaque image forcait une
  // synchronisation de mise en page par image de defilement.
  let lineBoxes = [];
  function mesurerFilets() {
    const y = window.scrollY;
    lineBoxes = lines.map((line) => {
      const r = line.getBoundingClientRect();
      return { line, top: r.top + y, height: r.height };
    });
  }

  function update() {
    const y = window.scrollY;

    // Intensite du defilement : normalisee sur 60 px par image, puis lissee
    // a la baisse pour que l'acceleration des impulsions retombe en douceur.
    const delta = Math.abs(y - lastY);
    lastY = y;
    scrollOffset = y;
    scrollBoost = Math.max(Math.min(delta / 60, 1), scrollBoost * 0.88);

    // La trame monte deux fois moins vite que la page.
    if (grid) grid.style.setProperty("--grid-shift", `${-(y * 0.5) % 68}px`);



    // Le portrait ne bouge que tant que le hero est a l'ecran.
    if (photo && hero) {
      const h = hero.offsetHeight;
      const p = Math.min(Math.max(y / h, 0), 1);
      photo.style.setProperty("--par", `${(p * 46).toFixed(1)}px`);
    }

    // Chaque segment de filet se remplit quand son entree traverse le
    // milieu de l'ecran. Le calcul part des positions mises en cache.
    const repere = y + window.innerHeight * 0.55;
    for (const box of lineBoxes) {
      if (box.height === 0) continue;
      const fill = Math.min(Math.max((repere - box.top) / box.height, 0), 1);
      box.line.style.setProperty("--fill", fill.toFixed(3));
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  window.addEventListener(
    "resize",
    () => {
      mesurerFilets();
      update();
    },
    { passive: true },
  );

  // La mise en page bouge encore quand les polices arrivent : on remesure
  // une fois qu'elles sont posees, sinon les filets se remplissent de
  // travers sur le premier defilement.
  mesurerFilets();
  update();
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      mesurerFilets();
      update();
    });
  }
}

/**
 * Inclinaison des cartes projet selon la position du curseur.
 * Amplitude volontairement faible (4 degres) : au-dela, le texte devient
 * penible a lire et l'effet tourne au gadget.
 */
function initCardTilt() {
  if (prefersReducedMotion.matches) return;
  if (!window.matchMedia("(hover: hover)").matches) return;

  const MAX = 4;
  let pending = false;
  let last = null;

  document.addEventListener(
    "pointermove",
    (e) => {
      last = e;
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        const card = last.target.closest?.(".project-card");
        if (!card) return;
        const r = card.getBoundingClientRect();
        const cx = (last.clientX - r.left) / r.width - 0.5;
        const cy = (last.clientY - r.top) / r.height - 0.5;
        card.style.setProperty("--ry", `${(cx * MAX * 2).toFixed(2)}deg`);
        card.style.setProperty("--rx", `${(-cy * MAX * 2).toFixed(2)}deg`);
      });
    },
    { passive: true },
  );

  document.addEventListener(
    "pointerout",
    (e) => {
      const card = e.target.closest?.(".project-card");
      if (!card || card.contains(e.relatedTarget)) return;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    },
    { passive: true },
  );
}

/**
 * Anime le changement de filtre plutot que de basculer display:none.
 * Les cartes sortantes s'effacent, puis les entrantes remontent en
 * cascade. La classe .hidden reste la source de verite de l'affichage.
 */
function initFilterMotion() {
  const grid = document.getElementById("projectsGrid");
  const tabs = document.getElementById("filterTabs");
  if (!grid || !tabs) return;

  tabs.addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter-tab")) return;
    if (prefersReducedMotion.matches) return;

    // Le gestionnaire d'origine a deja pose .hidden au moment ou celui-ci
    // s'execute : on anime donc l'etat final, pas l'etat precedent.
    let index = 0;
    for (const card of grid.querySelectorAll(".project-card")) {
      card.classList.remove("filtering-in");
      if (card.classList.contains("hidden")) continue;
      card.style.setProperty("--fi", String(index++));
      // Forcer un reflow pour que l'animation reparte depuis le debut.
      void card.offsetWidth;
      card.classList.add("filtering-in");
    }
  });
}

/**
 * Revelations directionnelles : le texte arrive de la gauche, les images
 * se devoilent par balayage, le reste monte. La direction est deduite du
 * type d'element, sans classe a poser dans le markup.
 */
function initRevealDirections() {
  if (prefersReducedMotion.matches) return;
  document.querySelectorAll(".about-text .section-header").forEach((el) => {
    el.classList.add("from-left");
  });
  // Ces elements recoivent .reveal apres la creation de l'observateur : il
  // faut les lui donner explicitement, sinon ils restent masques a jamais.
  //
  // .wipe-host et non .wipe : le balayage doit porter sur l'image, pas sur
  // le cadre observe. Un clip-path sur l'element observe le reduit a une
  // aire nulle, IntersectionObserver rapporte alors intersectionRatio 0 et
  // n'ajoute jamais .visible, donc le clip n'est jamais leve. Impasse
  // circulaire mesuree : le portrait restait invisible en permanence.
  document.querySelectorAll(".photo-main").forEach((el) => {
    el.classList.add("reveal", "wipe-host");
    observer.observe(el);
  });
}

/** Fait apparaitre la pilule WhatsApp, puis la replie sur son icone. */
function initWhatsappFab() {
  const fab = document.querySelector(".wa-fab");
  if (!fab) return;

  // Affichage differe : la pilule ne doit pas concurrencer le hero a
  // l'arrivee sur la page.
  setTimeout(() => fab.classList.add("visible"), 1400);
  setTimeout(() => fab.classList.add("collapsed"), 5200);
}

initCircuitField();
initScrollMotion();
initCardTilt();
initFilterMotion();
initRevealDirections();
initWhatsappFab();
