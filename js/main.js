/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Portfolio - Richard NGOUBADJAMBO                              ║
 * ║  Ingénieur Fullstack & Mobile | Chef de Projet IT             ║
 * ║  M.G.N CodeWave - Solutions Digitales                          ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * @author Richard NGOUBADJAMBO
 * @company M.G.N CodeWave
 * @version 1.0.0
 * @description Portfolio interactif avec i18n, thème dark/light, GitHub dashboard
 * @license MIT
 * @updated 2024
 *
 * Modules:
 * - i18n: Internationalisation (FR/EN)
 * - Theme: Gestion thème sombre/clair
 * - GitHub Dashboard: Intégration API GitHub en temps réel
 * - Animations: Scroll reveal et interactions Intersection Observer
 * - Contact: Formulaire avec validation
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
    "nav.mobile": "Mobile",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.dashboard": "GitHub",
    "hero.label": "✦ Disponible pour de nouveaux projets",
    "hero.title1": "Ingénieur",
    "hero.title2": "Fullstack & Mobile",
    "hero.title3": "Fondateur MGN CodeWave",
    "hero.subtitle":
      "Je conçois et livre des solutions digitales complètes — du backend robuste aux interfaces mobiles élégantes. Ingénieur d'État avec une vision produit et une passion pour l'impact.",
    "hero.cta1": "Me contacter",
    "hero.cta2": "Voir mes projets →",
    "hero.cta3": "Télécharger CV",
    "hero.lastmission": "Dernière mission : Chef de Projet IT & Fullstack — Gabon Connect SARLU",
    "hero.float.org": "Gabon Connect SARLU",
    "hero.float.role": "Chef de Projet IT & Fullstack",
    "stats.exp": "Ans d'expérience",
    "stats.projects": "Projets livrés",
    "stats.stack": "Stacks maîtrisés",
    "stats.agency": "Agence fondée",
    "about.tag": "À PROPOS",
    "about.title": "Ingénieur. Entrepreneur.\nBâtisseur digital.",
    "about.p1":
      "Diplômé Ingénieur d'État en Informatique & Réseaux de l'EMSI (Rabat), j'ai bâti ma carrière à l'intersection du code et du management de projet — un profil rare qui me permet de comprendre autant les enjeux techniques que business.",
    "about.p2":
      "De LEBONWAZ à Gabon Connect SARLU, je pilote les produits de bout en bout : cahier des charges, wireframing UX, développement, tests, déploiement et suivi de performance. C'est cette maîtrise du cycle complet qui fait ma valeur ajoutée.",
    "about.p3":
      "Je travaille en relation client directe — recueil du besoin, arbitrages, reporting — et je coordonne équipes techniques et parties prenantes autour d'un plan de sprint clair et d'indicateurs suivis.",
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
    "proj.desc":
      "Des projets concrets livrés — applications mobiles, plateformes web, systèmes backend et solutions de marque.",
    "filter.all": "Tous",
    "filter.mobile": "Mobile",
    "filter.web": "Web",
    "filter.client": "Mission client",
    "filter.branding": "Branding",
    "cat.mobile": "Application Mobile",
    "cat.web": "Plateforme Web",
    "cat.client": "Mission client · Gabon Connect",
    "cat.frontend": "Frontend React",
    "cat.fullstack": "Fullstack",
    "cat.brand": "Branding",
    "p1.name": "App Mobile Flutter — LEBONWAZ",
    "p1.desc":
      "Application multiplateforme iOS & Android développée de A à Z. Architecture Firebase Firestore, authentification, gestion d'état Provider.",
    "p2.name": "Plateforme Web Drupal — Agence Digitale",
    "p2.desc":
      "Développement et maintenance de plateformes web entreprises sous Drupal. Nouvelles fonctionnalités, optimisation SEO et relation client.",
    "p3.name": "Interface React.js — Dashboard Analytics",
    "p3.desc": "Design system component-driven avec React.js et Tailwind CSS.",
    "p4.name": "API Node.js + MongoDB",
    "p4.desc":
      "Backend RESTful avec Node.js et MongoDB. Architecture modulaire, authentification JWT.",
    "p5.name": "M.G.N CodeWave — Identité de Marque",
    "p5.desc":
      "Création complète de l'identité visuelle et digitale de l'agence.",
    "p6.name": "Portfolio Mobile — MGN",
    "p6.desc":
      "Application de présentation interactive des services MGN CodeWave.",
    "p7.name": "Gabonova — Plateforme immobilière",
    "p7.desc":
      "Plateforme de mise en relation immobilière. Campagnes de tests fonctionnels documentées, rapports d'anomalies itératifs, supports vidéo de présentation et d'installation, et proposition de stratégie marketing de lancement.",
    "p8.name": "AHPAM AssetView — Gestion locative bilingue",
    "p8.desc":
      "Application de gestion locative bilingue FR/EN. Rédaction du plan et des cas de test, conduite des recettes fonctionnelles et formalisation des retours client pour alimenter les itérations produit.",
    "p9.name": "Delta Manga Sécurité — Site vitrine & pilotage",
    "p9.desc":
      "Contribution au site vitrine de DMS, reporting mensuel d'avancement, analyse comparative de 5 solutions de gestion du gardiennage et rédaction du cahier des charges du projet DMS 360°.",
    "show.tag": "MOBILE SHOWCASE",
    "show.title": "Flutter de A à Z.\nPiloté et livré.",
    "show.desc":
      "Chez LEBONWAZ, j'ai été à la fois chef de projet et développeur principal — une combinaison rare.",
    "feat1.title": "Architecture & Spécifications",
    "feat1.desc":
      "Rédaction des exigences fonctionnelles, wireframes UX, choix d'architecture MVC/Provider.",
    "feat2.title": "Performance & Optimisation",
    "feat2.desc":
      "Animations fluides 60fps, gestion mémoire et latence Firebase Firestore réduite.",
    "feat3.title": "Firebase Full Stack",
    "feat3.desc":
      "Firestore (données temps réel), Firebase Auth (authentification), Firebase Storage (médias).",
    "feat4.title": "Tests & Mise en production",
    "feat4.desc":
      "Coordination des tests utilisateurs, iterations sur feedbacks, déploiement iOS & Android.",
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
    "mgn.title": "M.G.N CodeWave — Solutions Digitales",
    "mgn.desc":
      "Votre partenaire pour des projets digitaux ambitieux en Afrique et à l'international. Qualité ingénieur, rapidité startup.",
    "mgn.cta": "Travailler avec nous →",
    "testi.tag": "RECOMMANDATION",
    "testi.title": "Ce qu'en dit\nun client.",
    "testi.quote":
      "Rigueur du reporting, capacité à formaliser un besoin client encore flou en un cahier des charges exploitable, et esprit de proposition constant.",
    "testi.source":
      "Extrait d'une lettre de recommandation — direction, Gabon Connect SARLU",
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
    "form.send": "Envoyer le message",
    "form.opt1": "Projet Mobile Flutter",
    "form.opt2": "Application Web React/Next.js",
    "form.opt3": "Gestion de Projet IT",
    "form.opt4": "Backend Node.js",
    "form.opt5": "Autre demande",
    "footer.rights": "Tous droits réservés",
    "footer.top": "Haut de page",
    "photo.tag": "QUI SUIS-JE",
    "photo.title": "Ingénieur d'État.\nBâtisseur de produits.",
    "photo.desc":
      "Né au Gabon, formé au Maroc, je suis un ingénieur informatique passionné par la création de solutions digitales qui ont un impact réel. Mon approche combine rigueur technique, vision produit et sens du leadership.",
    "photo.cta1": "Me contacter",
    "photo.cta2": "Voir mes projets →",
    "mgn.link.title": "M.G.N CodeWave — Solutions Digitales",
    "mgn.link.sub": "Visiter l'agence · Web · Mobile · Branding",
    "nav.agency": "Mon Agence",
    "detail.btn": "Voir les détails →",
    "gh.tag": "GITHUB DASHBOARD",
    "gh.title": "Tableau de bord de mon activité GitHub",
    "gh.desc":
      "Indicateurs clés, tendances et dépôts récents pour visualiser ma progression technique en temps réel.",
    "gh.loading": "Chargement des données GitHub...",
    "gh.profile": "Voir le profil GitHub →",
    "gh.lastSync": "Dernière synchro :",
    "gh.kpi.followers": "Followers",
    "gh.kpi.repos": "Repositories publics",
    "gh.kpi.stars": "Total stars",
    "gh.kpi.forks": "Total forks",
    "gh.kpi.active30": "Repos actifs (30j)",
    "gh.kpi.events14": "Evenements (14j)",
    "gh.languages": "Top langages",
    "gh.activity": "Activite recente (14 jours)",
    "gh.topRepos": "Depots recents mis a jour",
    "gh.empty.languages": "Aucune repartition de langages disponible.",
    "gh.empty.activity": "Pas d'activite publique recente detectee.",
    "gh.empty.repos": "Aucun depot public exploitable actuellement.",
    "gh.empty.tools": "Aucun outil detecte.",
    "gh.empty.features": "Aucune fonctionnalite detectee.",
    "gh.unknown": "Inconnu",
    "gh.unavailable": "GitHub indisponible pour le moment.",
    "gh.refresh": "Actualiser les donnees",
    "gh.tools": "Fonctionnalites et outils detectes",
    "gh.features": "Fonctionnalites construites",
    "gh.allRepos": "Tous les projets GitHub",
    "gh.search": "Rechercher un projet, langage, outil...",
    "gh.sort.updated": "Plus recents",
    "gh.sort.stars": "Plus de stars",
    "gh.sort.name": "A-Z",
    "gh.proxy.server": "Proxy serveur actif",
    "gh.repoCount": "projets",
    "gh.page.prev": "Precedent",
    "gh.page.next": "Suivant",
    "gh.page.info": "Page {current} / {total}",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.mobile": "Mobile",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.dashboard": "GitHub",
    "hero.label": "✦ Available for new projects",
    "hero.title1": "Software",
    "hero.title2": "Fullstack & Mobile Engineer",
    "hero.title3": "Founder of MGN CodeWave",
    "hero.subtitle":
      "I design and deliver complete digital solutions — from robust backends to elegant mobile interfaces. State Engineer with a product vision and a passion for impact.",
    "hero.cta1": "Contact me",
    "hero.cta2": "View my projects →",
    "hero.cta3": "Download CV",
    "hero.lastmission": "Latest mission: IT Project Manager & Fullstack — Gabon Connect SARLU",
    "hero.float.org": "Gabon Connect SARLU",
    "hero.float.role": "IT Project Manager & Fullstack",
    "stats.exp": "Years experience",
    "stats.projects": "Projects delivered",
    "stats.stack": "Stacks mastered",
    "stats.agency": "Agency founded",
    "about.tag": "ABOUT",
    "about.title": "Engineer. Entrepreneur.\nDigital Builder.",
    "about.p1":
      "A State-certified Engineer in Computer Science & Networks from EMSI (Rabat), I built my career at the intersection of code and project management — a rare profile that lets me understand both technical and business challenges.",
    "about.p2":
      "From LEBONWAZ to Gabon Connect SARLU, I manage products end to end: requirements, UX wireframing, development, testing, deployment and performance monitoring. This mastery of the full cycle is my core added value.",
    "about.p3":
      "I work in a direct client relationship — gathering needs, making trade-offs, reporting — and I coordinate technical teams and stakeholders around a clear sprint plan and tracked indicators.",
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
    "proj.desc":
      "Concrete delivered projects — mobile apps, web platforms, backend systems and branding solutions.",
    "filter.all": "All",
    "filter.mobile": "Mobile",
    "filter.web": "Web",
    "filter.client": "Client mission",
    "filter.branding": "Branding",
    "cat.mobile": "Mobile App",
    "cat.web": "Web Platform",
    "cat.client": "Client mission · Gabon Connect",
    "cat.frontend": "React Frontend",
    "cat.fullstack": "Fullstack",
    "cat.brand": "Branding",
    "p1.name": "Flutter Mobile App — LEBONWAZ",
    "p1.desc":
      "Cross-platform iOS & Android app built end-to-end. Firebase Firestore architecture, authentication, Provider state management.",
    "p2.name": "Drupal Web Platform — Digital Agency",
    "p2.desc":
      "Development and maintenance of enterprise web platforms under Drupal. New features, SEO optimisation and client management.",
    "p3.name": "React.js Interface — Analytics Dashboard",
    "p3.desc": "Component-driven design system with React.js and Tailwind CSS.",
    "p4.name": "Node.js API + MongoDB",
    "p4.desc":
      "RESTful backend with Node.js and MongoDB. Modular architecture, JWT authentication.",
    "p5.name": "M.G.N CodeWave — Brand Identity",
    "p5.desc":
      "Complete visual and digital identity creation for the MGN CodeWave agency.",
    "p6.name": "Mobile Portfolio — MGN",
    "p6.desc": "Interactive presentation app for MGN CodeWave services.",
    "p7.name": "Gabonova — Real estate platform",
    "p7.desc":
      "Real estate matching platform. Documented functional testing campaigns, iterative issue reports, video support for demos and installation, plus a go-to-market strategy proposal.",
    "p8.name": "AHPAM AssetView — Bilingual rental management",
    "p8.desc":
      "Bilingual FR/EN rental management app. Writing the test plan and test cases, running functional acceptance reviews and formalising client feedback to feed product iterations.",
    "p9.name": "Delta Manga Sécurité — Showcase site & delivery",
    "p9.desc":
      "Contribution to DMS's showcase website, monthly progress reporting, comparative analysis of 5 guard-management solutions and writing the requirements spec for the DMS 360° project.",
    "show.tag": "MOBILE SHOWCASE",
    "show.title": "Flutter end-to-end.\nManaged and shipped.",
    "show.desc":
      "At LEBONWAZ, I was both project manager and lead developer — a rare combination.",
    "feat1.title": "Architecture & Specifications",
    "feat1.desc":
      "Writing functional requirements, UX wireframes, MVC/Provider architecture choices.",
    "feat2.title": "Performance & Optimisation",
    "feat2.desc":
      "Smooth 60fps animations, memory management and reduced Firebase Firestore latency.",
    "feat3.title": "Firebase Full Stack",
    "feat3.desc":
      "Firestore (real-time data), Firebase Auth (authentication), Firebase Storage (media).",
    "feat4.title": "Testing & Production Deployment",
    "feat4.desc":
      "User testing coordination, feedback iterations, iOS & Android deployment.",
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
    "mgn.title": "M.G.N CodeWave — Digital Solutions",
    "mgn.desc":
      "Your partner for ambitious digital projects in Africa and internationally. Engineer quality, startup speed.",
    "mgn.cta": "Work with us →",
    "testi.tag": "RECOMMENDATION",
    "testi.title": "What a client\nsays about me.",
    "testi.quote":
      "Reporting rigour, the ability to turn a still-vague client need into an actionable specification, and a constant spirit of initiative.",
    "testi.source":
      "Excerpt from a recommendation letter — management, Gabon Connect SARLU",
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
    "form.send": "Send message",
    "form.opt1": "Flutter Mobile Project",
    "form.opt2": "React/Next.js Web App",
    "form.opt3": "IT Project Management",
    "form.opt4": "Node.js Backend",
    "form.opt5": "Other request",
    "footer.rights": "All rights reserved",
    "footer.top": "Back to top",
    "photo.tag": "WHO I AM",
    "photo.title": "State Engineer.\nProduct Builder.",
    "photo.desc":
      "Born in Gabon, trained in Morocco, I'm a software engineer passionate about creating digital solutions with real impact. My approach combines technical rigour, product vision and leadership.",
    "photo.cta1": "Contact me",
    "photo.cta2": "View my projects →",
    "mgn.link.title": "M.G.N CodeWave — Digital Solutions",
    "mgn.link.sub": "Visit the agency · Web · Mobile · Branding",
    "nav.agency": "My Agency",
    "detail.btn": "View details →",
    "gh.tag": "GITHUB DASHBOARD",
    "gh.title": "GitHub activity dashboard",
    "gh.desc":
      "Key indicators, trends and recent repositories to visualize my technical progression in real time.",
    "gh.loading": "Loading GitHub data...",
    "gh.profile": "View GitHub profile →",
    "gh.lastSync": "Last sync:",
    "gh.kpi.followers": "Followers",
    "gh.kpi.repos": "Public repositories",
    "gh.kpi.stars": "Total stars",
    "gh.kpi.forks": "Total forks",
    "gh.kpi.active30": "Active repos (30d)",
    "gh.kpi.events14": "Events (14d)",
    "gh.languages": "Top languages",
    "gh.activity": "Recent activity (14 days)",
    "gh.topRepos": "Recently updated repositories",
    "gh.empty.languages": "No language distribution available.",
    "gh.empty.activity": "No recent public activity found.",
    "gh.empty.repos": "No public repositories available right now.",
    "gh.empty.tools": "No tools detected.",
    "gh.empty.features": "No features detected.",
    "gh.unknown": "Unknown",
    "gh.unavailable": "GitHub is temporarily unavailable.",
    "gh.refresh": "Refresh data",
    "gh.tools": "Detected tools and technologies",
    "gh.features": "Built features",
    "gh.allRepos": "All GitHub projects",
    "gh.search": "Search a project, language, tool...",
    "gh.sort.updated": "Recently updated",
    "gh.sort.stars": "Most starred",
    "gh.sort.name": "A-Z",
    "gh.proxy.server": "Server proxy active",
    "gh.repoCount": "projects",
    "gh.page.prev": "Previous",
    "gh.page.next": "Next",
    "gh.page.info": "Page {current} / {total}",
  },
};

let currentLang = "fr";
let currentTheme = "dark";

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
  document.getElementById("langToggle").textContent =
    lang === "fr" ? "EN" : "FR";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = i18n[lang][key];
    if (value === undefined) return;
    setLocalizedText(el, value);
  });
  const searchInput = document.getElementById("ghRepoSearch");
  if (searchInput) searchInput.placeholder = t("gh.search");
  if (githubDashboardState) renderGithubDashboard(githubDashboardState);
}

function applyTheme(theme) {
  currentTheme = theme;
  const root = document.documentElement;
  // Coupe les transitions pendant le basculement puis les rétablit à la frame
  // suivante : le thème change d'un coup au lieu de fondre pendant 300 ms.
  root.classList.add("theme-switching");
  root.setAttribute("data-theme", theme);
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

// PROJECT CARDS KEYBOARD ACCESS (Enter / Space)
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const id = card.getAttribute("onclick").match(/openModal\('(\w+)'\)/)?.[1];
      if (id && projectData[id]) openModal(id);
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
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent =
    currentLang === "fr" ? "✓ Message envoyé !" : "✓ Message sent!";
  btn.style.background = "#10b981";
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = "";
    e.target.reset();
  }, 3000);
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
  p3: {
    icon: "code",
    cat: { fr: "Frontend React", en: "React Frontend" },
    title: {
      fr: "Interface React.js — Dashboard Analytics",
      en: "React.js Interface — Analytics Dashboard",
    },
    desc: {
      fr: "Développement d'une interface web moderne et performante avec React.js et Next.js. Approche component-driven pour un design system cohérent, intégration d'APIs REST et optimisation des Core Web Vitals.",
      en: "Development of a modern, performant web interface with React.js and Next.js. Component-driven approach for a cohesive design system, REST API integration and Core Web Vitals optimisation.",
    },
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Axios",
      "Git",
    ],
    highlights: {
      fr: [
        "Architecture component-driven pour un design system réutilisable",
        "Intégration d'APIs REST avec Axios et gestion des états asynchrones",
        "Responsive mobile-first irréprochable sur tous les breakpoints",
        "Optimisation des performances frontend (Core Web Vitals, lazy loading)",
        "Accessibilité web et bonnes pratiques WCAG",
      ],
      en: [
        "Component-driven architecture for a reusable design system",
        "REST API integration with Axios and async state management",
        "Flawless mobile-first responsive on all breakpoints",
        "Frontend performance optimisation (Core Web Vitals, lazy loading)",
        "Web accessibility and WCAG best practices",
      ],
    },
  },
  p4: {
    icon: "server",
    cat: { fr: "Fullstack", en: "Fullstack" },
    title: { fr: "API Node.js + MongoDB", en: "Node.js API + MongoDB" },
    desc: {
      fr: "Conception et développement d'une API RESTful robuste avec Node.js et MongoDB. Architecture modulaire, sécurisée avec JWT, documentée et déployée en production.",
      en: "Design and development of a robust RESTful API with Node.js and MongoDB. Modular architecture, secured with JWT, documented and deployed to production.",
    },
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "JWT",
      "REST API",
      "Git",
    ],
    highlights: {
      fr: [
        "Architecture modulaire et maintenable avec Express.js",
        "Authentification sécurisée via JWT et hachage des mots de passe",
        "Base de données MongoDB avec Mongoose pour la modélisation des données",
        "Documentation API complète et tests des endpoints",
        "Déploiement cloud et gestion des variables d'environnement",
      ],
      en: [
        "Modular and maintainable architecture with Express.js",
        "Secure authentication via JWT and password hashing",
        "MongoDB database with Mongoose for data modelling",
        "Full API documentation and endpoint testing",
        "Cloud deployment and environment variable management",
      ],
    },
  },
  p5: {
    icon: "sparkle",
    cat: { fr: "Branding", en: "Branding" },
    title: {
      fr: "M.G.N CodeWave — Identité de Marque",
      en: "M.G.N CodeWave — Brand Identity",
    },
    desc: {
      fr: "Création complète de l'identité visuelle et digitale de M.G.N CodeWave, mon agence de solutions digitales. Du naming à la charte graphique, en passant par le logo et la présence en ligne.",
      en: "Complete creation of the visual and digital identity of M.G.N CodeWave, my digital solutions agency. From naming to graphic guidelines, including the logo and online presence.",
    },
    tags: [
      "Branding",
      "Design System",
      "Figma",
      "Logo Design",
      "Charte graphique",
      "UI/UX",
    ],
    highlights: {
      fr: [
        "Conception du logo NR avec identité bicolore (graphite & bleu)",
        "Définition de la charte graphique (typographies, couleurs, espacements)",
        "Création du design system pour tous les supports de communication",
        'Stratégie de positionnement : "Qualité ingénieur, rapidité startup"',
        "Identité cohérente appliquée sur le web, le mobile et les supports print",
      ],
      en: [
        "NR logo design with two-tone identity (graphite & blue)",
        "Graphic guidelines definition (typography, colours, spacing)",
        "Design system creation for all communication materials",
        'Positioning strategy: "Engineer quality, startup speed"',
        "Consistent identity applied across web, mobile and print materials",
      ],
    },
  },
  p6: {
    icon: "layers",
    cat: { fr: "Application Mobile", en: "Mobile App" },
    title: {
      fr: "Portfolio Mobile — MGN CodeWave",
      en: "Mobile Portfolio — MGN CodeWave",
    },
    desc: {
      fr: "Application mobile Flutter conçue pour présenter les services de M.G.N CodeWave de façon interactive et élégante. Navigation fluide, animations soignées et expérience utilisateur optimale sur iOS & Android.",
      en: "Flutter mobile app designed to present M.G.N CodeWave services in an interactive and elegant way. Smooth navigation, polished animations and optimal user experience on iOS & Android.",
    },
    tags: ["Flutter", "Dart", "UI/UX", "Animations", "iOS", "Android"],
    highlights: {
      fr: [
        "Animations de navigation fluides (transitions, micro-interactions)",
        "Design épuré et professionnel aligné sur la charte MGN",
        "Architecture optimisée pour la performance sur iOS & Android",
        "Sections : Services, Projets, À propos, Contact",
        "Expérience utilisateur testée et itérée sur feedbacks réels",
      ],
      en: [
        "Smooth navigation animations (transitions, micro-interactions)",
        "Clean and professional design aligned with MGN brand guidelines",
        "Performance-optimised architecture for iOS & Android",
        "Sections: Services, Projects, About, Contact",
        "User experience tested and iterated on real feedback",
      ],
    },
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
  document.getElementById("modalLink").textContent =
    lang === "fr" ? "Voir le portfolio →" : "View portfolio →";
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

// ===================== GITHUB DASHBOARD =====================
const portfolioConfig = window.__PORTFOLIO_CONFIG__ || {};
const GITHUB_USER = portfolioConfig.githubUser || "NGOUBADJAMBO-Richard";
const API_BASE_URL = portfolioConfig.apiBaseUrl || "";
const GITHUB_TOKEN = "";
let githubDashboardState = null;
let ghRepoPage = 1;
const GH_REPOS_PER_PAGE = 12;

function t(key) {
  return i18n[currentLang][key] || key;
}

function formatNumber(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "-";
  return value.toLocaleString(currentLang === "fr" ? "fr-FR" : "en-US");
}

function safeText(value, fallback = "-") {
  if (value === null || value === undefined || value === "") return fallback;
  return String(value);
}

async function fetchJson(url) {
  const headers = { Accept: "application/vnd.github+json" };
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`GitHub API error ${res.status}`);
  return res.json();
}

function buildApiUrl(path) {
  const base = API_BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}

async function fetchAllUserRepos() {
  const allRepos = [];
  let page = 1;
  const perPage = 100;

  while (page <= 10) {
    const chunk = await fetchJson(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=${perPage}&sort=updated&type=owner&page=${page}`,
    );
    if (!Array.isArray(chunk) || !chunk.length) break;
    allRepos.push(...chunk);
    if (chunk.length < perPage) break;
    page += 1;
  }

  return allRepos;
}

function computeActivitySeries(events) {
  const map = new Map();
  const today = new Date();
  const days = 14;

  for (let i = days - 1; i >= 0; i -= 1) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    map.set(d.toISOString().slice(0, 10), 0);
  }

  events.forEach((event) => {
    const key = String(event.created_at || "").slice(0, 10);
    if (map.has(key)) map.set(key, map.get(key) + 1);
  });

  return Array.from(map.entries()).map(([date, value]) => ({ date, value }));
}

async function computeGlobalLanguages(repos) {
  const buckets = {};
  const sample = GITHUB_TOKEN ? repos : repos.slice(0, 20);

  const results = await Promise.all(
    sample.map((repo) =>
      fetchJson(repo.languages_url)
        .then((obj) => ({ ok: true, obj }))
        .catch(() => ({ ok: false, obj: {} })),
    ),
  );

  results.forEach((entry) => {
    if (!entry.ok) return;
    Object.entries(entry.obj).forEach(([lang, bytes]) => {
      buckets[lang] = (buckets[lang] || 0) + bytes;
    });
  });

  const total = Object.values(buckets).reduce((sum, n) => sum + n, 0);
  if (!total) {
    const fallback = {};
    repos.forEach((repo) => {
      if (!repo.language) return;
      fallback[repo.language] = (fallback[repo.language] || 0) + 1;
    });
    const fallbackTotal = Object.values(fallback).reduce(
      (sum, n) => sum + n,
      0,
    );
    return Object.entries(fallback)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, count]) => ({
        name,
        pct: Math.round((count / Math.max(fallbackTotal, 1)) * 100),
      }));
  }

  return Object.entries(buckets)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, bytes]) => ({ name, pct: Math.round((bytes / total) * 100) }));
}

function detectTaxonomy(repos) {
  const toolKeywords = [
    "react",
    "next",
    "flutter",
    "firebase",
    "node",
    "express",
    "mongodb",
    "mysql",
    "typescript",
    "javascript",
    "tailwind",
    "bootstrap",
    "drupal",
    "wordpress",
    "docker",
    "python",
    "api",
    "jwt",
    "sql",
  ];
  const featureKeywords = [
    "dashboard",
    "auth",
    "authentication",
    "chat",
    "ecommerce",
    "portfolio",
    "cms",
    "analytics",
    "mobile",
    "web",
    "api",
    "payment",
    "admin",
    "seo",
    "automation",
    "realtime",
  ];

  const tools = {};
  const features = {};

  repos.forEach((repo) => {
    const bag =
      `${repo.name || ""} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
    toolKeywords.forEach((k) => {
      if (bag.includes(k)) tools[k] = (tools[k] || 0) + 1;
    });
    featureKeywords.forEach((k) => {
      if (bag.includes(k)) features[k] = (features[k] || 0) + 1;
    });
  });

  const toList = (obj) =>
    Object.entries(obj)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 14)
      .map(([name, count]) => ({ name, count }));

  return { tools: toList(tools), features: toList(features) };
}

function normalizeDashboardData(profile, repos, events, languages, taxonomy) {
  const now = new Date();
  const limitDate = new Date(now);
  limitDate.setDate(now.getDate() - 30);

  const publicRepos = Array.isArray(repos) ? repos : [];
  const publicEvents = Array.isArray(events) ? events : [];

  const stars = publicRepos.reduce(
    (sum, repo) => sum + (repo.stargazers_count || 0),
    0,
  );
  const forks = publicRepos.reduce(
    (sum, repo) => sum + (repo.forks_count || 0),
    0,
  );
  const activeRepos = publicRepos.filter(
    (repo) => repo?.pushed_at && new Date(repo.pushed_at) >= limitDate,
  ).length;

  const allRepos = [...publicRepos].map((repo) => ({
    name: repo.name,
    url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count || 0,
    forks: repo.forks_count || 0,
    updatedAt: repo.pushed_at,
    topics: Array.isArray(repo.topics) ? repo.topics : [],
    archived: !!repo.archived,
  }));

  const topRepos = [...allRepos]
    .sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0))
    .slice(0, 6);

  return {
    profile: {
      login: profile?.login || GITHUB_USER,
      avatarUrl: profile?.avatar_url || null,
      bio: profile?.bio || "",
      followers: profile?.followers || 0,
      publicReposCount: profile?.public_repos || allRepos.length,
    },
    kpis: {
      stars,
      forks,
      activeRepos,
      events14: publicEvents.filter((event) => !!event?.type).length,
    },
    languages,
    activitySeries: computeActivitySeries(publicEvents),
    tools: taxonomy.tools,
    features: taxonomy.features,
    topRepos,
    allRepos,
    syncedAt: new Date(),
  };
}

function renderChipList(targetId, data, emptyKey) {
  const target = document.getElementById(targetId);
  if (!target) return;
  if (!data.length) {
    target.innerHTML = `<div class="gh-empty">${t(emptyKey)}</div>`;
    return;
  }
  target.innerHTML = data
    .map(
      (item) =>
        `<span class="gh-chip">${safeText(item.name, t("gh.unknown"))} · ${item.count}</span>`,
    )
    .join("");
}

function renderLanguages(languages) {
  const target = document.getElementById("ghLanguages");
  if (!target) return;

  if (!languages.length) {
    target.innerHTML = `<div class="gh-empty">${t("gh.empty.languages")}</div>`;
    return;
  }

  target.innerHTML = languages
    .map(
      (item) => `
      <div class="gh-lang-row">
        <div class="gh-lang-name">${safeText(item.name, t("gh.unknown"))}</div>
        <div class="gh-lang-bar"><div class="gh-lang-fill" style="width:${item.pct}%"></div></div>
        <div class="gh-lang-pct">${item.pct}%</div>
      </div>
    `,
    )
    .join("");
}

function renderActivity(series) {
  const target = document.getElementById("ghActivity");
  if (!target) return;
  const max = Math.max(...series.map((d) => d.value), 0);
  if (!max) {
    target.innerHTML = `<div class="gh-empty">${t("gh.empty.activity")}</div>`;
    return;
  }
  target.innerHTML = `
    <div class="gh-chart-grid">
      ${series
        .map(
          (d) =>
            `<div class="gh-chart-col" style="height:${Math.max(6, Math.round((d.value / max) * 100))}%" title="${d.value}"></div>`,
        )
        .join("")}
    </div>
    <div class="gh-chart-labels"><span>${series[0].date.slice(5)}</span><span>${series[series.length - 1].date.slice(5)}</span></div>
  `;
}

function renderRepoList(targetId, repos) {
  const target = document.getElementById(targetId);
  if (!target) return;
  if (!repos.length) {
    target.innerHTML = `<div class="gh-empty">${t("gh.empty.repos")}</div>`;
    return;
  }
  target.innerHTML = repos
    .map((repo) => {
      const updatedLabel = new Date(repo.updatedAt).toLocaleDateString(
        currentLang === "fr" ? "fr-FR" : "en-US",
      );
      const topics = repo.topics?.length
        ? ` · ${repo.topics.slice(0, 3).join(" / ")}`
        : "";
      return `
        <div class="gh-repo-item">
          <div>
            <a class="gh-repo-name" href="${repo.url}" target="_blank" rel="noreferrer">${safeText(repo.name, t("gh.unknown"))}</a>
            <div class="gh-repo-desc">${safeText(repo.description, t("gh.empty.repos"))}</div>
            <div class="gh-repo-meta">
              <span>${safeText(repo.language, t("gh.unknown"))}${topics}</span>
              <span>★ ${formatNumber(repo.stars)}</span>
              <span>⑂ ${formatNumber(repo.forks)}</span>
              <span>${updatedLabel}</span>
            </div>
          </div>
          <div class="gh-repo-trend">${repo.archived ? "Archived" : "+" + formatNumber(repo.stars) + " ★"}</div>
        </div>
      `;
    })
    .join("");
}

function renderReposPagination(totalItems, currentPage) {
  const target = document.getElementById("ghRepoPagination");
  if (!target) return;

  const totalPages = Math.max(1, Math.ceil(totalItems / GH_REPOS_PER_PAGE));
  const info = t("gh.page.info")
    .replace("{current}", String(currentPage))
    .replace("{total}", String(totalPages));

  target.innerHTML = `
    <div class="gh-page-info">${info}</div>
    <div class="gh-page-actions">
      <button type="button" class="gh-page-btn" id="ghPagePrev" ${currentPage <= 1 ? "disabled" : ""}>${t("gh.page.prev")}</button>
      <button type="button" class="gh-page-btn" id="ghPageNext" ${currentPage >= totalPages ? "disabled" : ""}>${t("gh.page.next")}</button>
    </div>
  `;

  document.getElementById("ghPagePrev")?.addEventListener("click", () => {
    if (ghRepoPage > 1) {
      ghRepoPage -= 1;
      if (githubDashboardState) renderAllRepos(githubDashboardState);
    }
  });

  document.getElementById("ghPageNext")?.addEventListener("click", () => {
    if (ghRepoPage < totalPages) {
      ghRepoPage += 1;
      if (githubDashboardState) renderAllRepos(githubDashboardState);
    }
  });
}

function renderAllRepos(state) {
  const q = (document.getElementById("ghRepoSearch")?.value || "")
    .trim()
    .toLowerCase();
  const sort = document.getElementById("ghRepoSort")?.value || "updated";
  const filtered = state.allRepos.filter((repo) => {
    if (!q) return true;
    const bag =
      `${repo.name || ""} ${repo.description || ""} ${repo.language || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
    return bag.includes(q);
  });

  filtered.sort((a, b) => {
    if (sort === "stars") return b.stars - a.stars;
    if (sort === "name") return (a.name || "").localeCompare(b.name || "");
    return new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0);
  });

  const repoCount = document.getElementById("ghRepoCount");
  if (repoCount)
    repoCount.textContent = `${formatNumber(filtered.length)} ${t("gh.repoCount")}`;

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / GH_REPOS_PER_PAGE),
  );
  if (ghRepoPage > totalPages) ghRepoPage = totalPages;
  const start = (ghRepoPage - 1) * GH_REPOS_PER_PAGE;
  const paginated = filtered.slice(start, start + GH_REPOS_PER_PAGE);

  renderRepoList("ghAllRepos", paginated);
  renderReposPagination(filtered.length, ghRepoPage);
}

function renderGithubDashboard(state) {
  if (!state) return;

  const status = document.getElementById("ghStatus");
  const username = document.getElementById("ghUsername");
  const avatar = document.getElementById("ghAvatar");
  const tokenState = document.getElementById("ghTokenState");
  const lastSync = document.getElementById("ghLastSync");

  if (username)
    username.textContent = `@${safeText(state.profile.login, GITHUB_USER)}`;
  if (status)
    status.textContent = safeText(state.profile.bio, t("gh.unavailable"));
  if (tokenState) tokenState.textContent = t("gh.proxy.server");
  if (avatar) {
    avatar.innerHTML = state.profile.avatarUrl
      ? `<img src="${state.profile.avatarUrl}" alt="GitHub avatar">`
      : "GH";
  }

  document.getElementById("ghFollowers").textContent = formatNumber(
    state.profile.followers,
  );
  document.getElementById("ghPublicRepos").textContent = formatNumber(
    state.profile.publicReposCount,
  );
  document.getElementById("ghStars").textContent = formatNumber(
    state.kpis.stars,
  );
  document.getElementById("ghForks").textContent = formatNumber(
    state.kpis.forks,
  );
  document.getElementById("ghActiveRepos").textContent = formatNumber(
    state.kpis.activeRepos,
  );
  document.getElementById("ghEvents14").textContent = formatNumber(
    state.kpis.events14,
  );

  renderLanguages(state.languages);
  renderActivity(state.activitySeries);
  renderChipList("ghTools", state.tools, "gh.empty.tools");
  renderChipList("ghFeatures", state.features, "gh.empty.features");
  renderRepoList("ghTopRepos", state.topRepos);
  renderAllRepos(state);

  if (lastSync) {
    lastSync.textContent = `${t("gh.lastSync")} ${state.syncedAt.toLocaleTimeString(currentLang === "fr" ? "fr-FR" : "en-US")}`;
  }
}

async function loadGithubData() {
  return fetchJson(
    buildApiUrl(
      `/api/github/dashboard?user=${encodeURIComponent(GITHUB_USER)}`,
    ),
  );
}

async function initGithubDashboard() {
  const status = document.getElementById("ghStatus");
  if (!status) return;

  try {
    status.textContent = t("gh.loading");
    githubDashboardState = await loadGithubData();
  } catch (error) {
    githubDashboardState = {
      profile: {
        login: GITHUB_USER,
        avatarUrl: null,
        bio: "",
        followers: 0,
        publicReposCount: 0,
      },
      kpis: { stars: 0, forks: 0, activeRepos: 0, events14: 0 },
      languages: [],
      activitySeries: [],
      tools: [],
      features: [],
      topRepos: [],
      allRepos: [],
      syncedAt: new Date(),
    };
  }
  renderGithubDashboard(githubDashboardState);
}

document.getElementById("ghRefreshBtn")?.addEventListener("click", () => {
  initGithubDashboard();
});

document.getElementById("ghRepoSearch")?.addEventListener("input", () => {
  ghRepoPage = 1;
  if (githubDashboardState) renderAllRepos(githubDashboardState);
});

document.getElementById("ghRepoSort")?.addEventListener("change", () => {
  ghRepoPage = 1;
  if (githubDashboardState) renderAllRepos(githubDashboardState);
});

applyLang(currentLang);
applyTheme(currentTheme);
initGithubDashboard();
setInterval(
  () => {
    initGithubDashboard();
  },
  10 * 60 * 1000,
);
