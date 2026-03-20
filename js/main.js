// ===================== I18N =====================
const i18n = {
  fr: {
    "nav.about":"À propos","nav.skills":"Compétences","nav.projects":"Projets",
    "nav.mobile":"Mobile","nav.services":"Services","nav.contact":"Contact",
    "hero.label":"✦ Disponible pour de nouveaux projets",
    "hero.title1":"Ingénieur","hero.title2":"Fullstack & Mobile","hero.title3":"Fondateur MGN CodeWave",
    "hero.subtitle":"Je conçois et livre des solutions digitales complètes — du backend robuste aux interfaces mobiles élégantes. Ingénieur d'État avec une vision produit et une passion pour l'impact.",
    "hero.cta1":"✉ Me contacter","hero.cta2":"Voir mes projets →","hero.cta3":"⬇ Télécharger CV",
    "stats.exp":"Ans d'expérience","stats.projects":"Projets livrés","stats.stack":"Stacks maîtrisés","stats.agency":"Agence fondée",
    "about.tag":"À PROPOS","about.title":"Ingénieur. Entrepreneur.\nBâtisseur digital.",
    "about.p1":"Diplômé Ingénieur d'État en Informatique & Réseaux de l'EMSI (Rabat), j'ai bâti ma carrière à l'intersection du code et du management de projet — un profil rare qui me permet de comprendre autant les enjeux techniques que business.",
    "about.p2":"Chez Akanda Tech, j'ai piloté de A à Z le développement d'une application mobile Flutter — des spécifications aux tests utilisateurs, en passant par l'architecture Firebase. C'est cette expérience end-to-end qui fait ma valeur ajoutée.",
    "about.p3":"Aujourd'hui, à travers M.G.N CodeWave, je propose des solutions digitales complètes aux entreprises et startups africaines qui veulent passer à l'ère numérique.",
    "val.speed":"Livraison rapide","val.speed.desc":"Sprints, MVP et iterations continues",
    "val.quality":"Qualité orientée impact","val.quality.desc":"Code propre, UX pensée pour l'utilisateur",
    "val.comm":"Communication claire","val.comm.desc":"Relation client transparente et régulière",
    "val.africa":"Vision Afrique","val.africa.desc":"Solutions adaptées aux marchés émergents",
    "about.exp.tag":"PARCOURS","about.edu.tag":"FORMATION",
    "tl1.title":"Chef de Projet IT / Dev Mobile Flutter","tl1.desc":"Pilotage complet d'une application mobile iOS & Android. Spécifications, wireframes, Firebase, sprints, tests et mise en production.",
    "tl2.title":"Développeur Web Drupal","tl2.desc":"Développement de plateformes web, nouvelles fonctionnalités, relation client, gestion de projet.",
    "tl3.title":"Chargé de Clientèle","tl3.desc":"Gestion et développement d'un portefeuille clients.",
    "tl4.title":"Créateur de Contenu / Freelance WordPress","tl4.desc":"Création de sites WordPress optimisés SEO pour des clients entreprises.",
    "skills.tag":"COMPÉTENCES TECHNIQUES","skills.title":"Stack complet.\nDu mobile au cloud.","skills.desc":"Un profil polyvalent qui couvre l'ensemble du cycle de développement.",
    "sk.mobile":"Mobile Flutter","sk.frontend":"Frontend Web","sk.backend":"Backend & BDD",
    "sk.tools":"CMS & Outils","sk.pm":"Gestion de Projet","sk.lang":"Langues & Soft Skills",
    "proj.tag":"PROJETS","proj.title":"Ce que je construis.","proj.desc":"Des projets concrets livrés — applications mobiles, plateformes web, systèmes backend et solutions de marque.",
    "filter.all":"Tous","filter.mobile":"📱 Mobile","filter.web":"🌐 Web","filter.branding":"✨ Branding",
    "cat.mobile":"Application Mobile","cat.web":"Plateforme Web","cat.frontend":"Frontend React","cat.fullstack":"Fullstack","cat.brand":"Branding",
    "p1.name":"App Mobile Flutter — Akanda Tech","p1.desc":"Application multiplateforme iOS & Android développée de A à Z. Architecture Firebase Firestore, authentification, gestion d'état Provider.",
    "p2.name":"Plateforme Web Drupal","p2.desc":"Développement et maintenance de plateformes web entreprises sous Drupal. Nouvelles fonctionnalités, optimisation SEO et relation client.",
    "p3.name":"Interface React.js — Dashboard Analytics","p3.desc":"Design system component-driven avec React.js et Tailwind CSS.",
    "p4.name":"API Node.js + MongoDB","p4.desc":"Backend RESTful avec Node.js et MongoDB. Architecture modulaire, authentification JWT.",
    "p5.name":"M.G.N CodeWave — Identité de Marque","p5.desc":"Création complète de l'identité visuelle et digitale de l'agence.",
    "p6.name":"Portfolio Mobile — MGN","p6.desc":"Application de présentation interactive des services MGN CodeWave.",
    "show.tag":"MOBILE SHOWCASE","show.title":"Flutter de A à Z.\nPiloté et livré.","show.desc":"Chez Akanda Tech, j'ai été à la fois chef de projet et développeur principal — une combinaison rare.",
    "feat1.title":"Architecture & Spécifications","feat1.desc":"Rédaction des exigences fonctionnelles, wireframes UX, choix d'architecture MVC/Provider.",
    "feat2.title":"Performance & Optimisation","feat2.desc":"Animations fluides 60fps, gestion mémoire et latence Firebase Firestore réduite.",
    "feat3.title":"Firebase Full Stack","feat3.desc":"Firestore (données temps réel), Firebase Auth (authentification), Firebase Storage (médias).",
    "feat4.title":"Tests & Mise en production","feat4.desc":"Coordination des tests utilisateurs, iterations sur feedbacks, déploiement iOS & Android.",
    "serv.tag":"SERVICES — MGN CODEWAVE","serv.title":"Des solutions digitales\ncomplètes.","serv.desc":"Via M.G.N CodeWave, j'accompagne entreprises et startups dans leur transformation numérique.",
    "s1.name":"Développement Mobile Flutter","s1.desc":"Applications iOS & Android performantes, développées avec Flutter. De l'idée à l'App Store.",
    "s1.f1":"Architecture scalable (Provider/Clean)","s1.f2":"Intégration Firebase complète","s1.f3":"Optimisation des performances","s1.f4":"Déploiement App Store / Play Store",
    "s2.name":"Applications Web React / Next.js","s2.desc":"Interfaces web modernes, rapides et accessibles. Dashboards, landing pages et plateformes SaaS.",
    "s2.f1":"React.js / Next.js / Tailwind","s2.f2":"Responsive mobile-first","s2.f3":"Intégration API REST","s2.f4":"Optimisation SEO & Core Web Vitals",
    "s3.name":"Backend & API Node.js","s3.desc":"Architectures backend robustes, APIs RESTful documentées, bases de données SQL et NoSQL.",
    "s3.f1":"Node.js / Express.js","s3.f2":"MongoDB & MySQL","s3.f3":"Firebase Firestore","s3.f4":"Authentification JWT / Firebase Auth",
    "s4.name":"Sites Web CMS (Drupal / WordPress)","s4.desc":"Sites corporate, e-commerce et blogs sur mesure. Optimisés pour le SEO et la performance.",
    "s4.f1":"Drupal entreprise","s4.f2":"WordPress sur mesure","s4.f3":"SEO technique avancé","s4.f4":"Maintenance et évolution",
    "s5.name":"Consulting & Gestion de Projet IT","s5.desc":"Cadrage de projet, spécifications fonctionnelles, coordination d'équipes tech.",
    "s5.f1":"Cahier des charges & specs","s5.f2":"Gestion Agile / Scrum","s5.f3":"Coordination équipe dev","s5.f4":"Reporting et relation client",
    "s6.name":"UI/UX & Branding Digital","s6.desc":"Identité visuelle, wireframes, prototypes interactifs et design systems cohérents.",
    "s6.f1":"Wireframes & maquettes","s6.f2":"Design system","s6.f3":"Identité de marque","s6.f4":"Optimisation UX",
    "mgn.title":"M.G.N CodeWave — Solutions Digitales","mgn.desc":"Votre partenaire pour des projets digitaux ambitieux en Afrique et à l'international. Qualité ingénieur, rapidité startup.","mgn.cta":"Travailler avec nous →",
    "cont.tag":"CONTACT","cont.title":"Parlons de votre\nprochain projet.","cont.desc":"Vous avez un projet web, mobile ou une mission de chef de projet ? Je suis disponible pour des collaborations en Afrique et à l'international.",
    "cont.portfolio":"Portfolio actuel","cont.loc":"Localisation",
    "form.name":"Nom complet","form.email":"Email","form.subject":"Sujet","form.msg":"Message","form.send":"✉ Envoyer le message",
    "form.opt1":"Projet Mobile Flutter","form.opt2":"Application Web React/Next.js","form.opt3":"Gestion de Projet IT","form.opt4":"Backend Node.js","form.opt5":"Autre demande",
    "footer.rights":"Tous droits réservés","footer.top":"Haut de page",
    "photo.tag":"QUI SUIS-JE","photo.title":"Ingénieur d'État.\nBâtisseur de produits.",
    "photo.desc":"Né au Gabon, formé au Maroc, je suis un ingénieur informatique passionné par la création de solutions digitales qui ont un impact réel. Mon approche combine rigueur technique, vision produit et sens du leadership.",
    "photo.cta1":"✉ Me contacter","photo.cta2":"Voir mes projets →",
    "mgn.link.title":"M.G.N CodeWave — Solutions Digitales","mgn.link.sub":"Visiter l'agence · Web · Mobile · Branding",
    "nav.agency":"🚀 Mon Agence","detail.btn":"Voir les détails →",
  },
  en: {
    "nav.about":"About","nav.skills":"Skills","nav.projects":"Projects",
    "nav.mobile":"Mobile","nav.services":"Services","nav.contact":"Contact",
    "hero.label":"✦ Available for new projects",
    "hero.title1":"Software","hero.title2":"Fullstack & Mobile Engineer","hero.title3":"Founder of MGN CodeWave",
    "hero.subtitle":"I design and deliver complete digital solutions — from robust backends to elegant mobile interfaces. State Engineer with a product vision and a passion for impact.",
    "hero.cta1":"✉ Contact me","hero.cta2":"View my projects →","hero.cta3":"⬇ Download CV",
    "stats.exp":"Years experience","stats.projects":"Projects delivered","stats.stack":"Stacks mastered","stats.agency":"Agency founded",
    "about.tag":"ABOUT","about.title":"Engineer. Entrepreneur.\nDigital Builder.",
    "about.p1":"A State-certified Engineer in Computer Science & Networks from EMSI (Rabat), I built my career at the intersection of code and project management — a rare profile that lets me understand both technical and business challenges.",
    "about.p2":"At Akanda Tech, I drove a Flutter mobile app from A to Z — from specs and wireframes to Firebase architecture and user testing. This end-to-end ownership is my core differentiator.",
    "about.p3":"Today, through M.G.N CodeWave, I offer complete digital solutions to companies and African startups ready to enter the digital era.",
    "val.speed":"Fast delivery","val.speed.desc":"Sprints, MVPs and continuous iterations",
    "val.quality":"Impact-driven quality","val.quality.desc":"Clean code, UX built for real users",
    "val.comm":"Clear communication","val.comm.desc":"Transparent, regular client relationship",
    "val.africa":"Africa vision","val.africa.desc":"Solutions tailored to emerging markets",
    "about.exp.tag":"EXPERIENCE","about.edu.tag":"EDUCATION",
    "tl1.title":"IT Project Manager / Flutter Mobile Dev","tl1.desc":"Full ownership of iOS & Android mobile app. Specs, wireframes, Firebase, sprints, testing and deployment.",
    "tl2.title":"Drupal Web Developer","tl2.desc":"Web platform development, new features, client management, project coordination.",
    "tl3.title":"Account Manager","tl3.desc":"Management and growth of a client portfolio.",
    "tl4.title":"Content Creator / WordPress Freelancer","tl4.desc":"SEO-optimised WordPress websites for business clients.",
    "skills.tag":"TECHNICAL SKILLS","skills.title":"Full stack.\nFrom mobile to cloud.","skills.desc":"A versatile profile covering the entire development lifecycle.",
    "sk.mobile":"Flutter Mobile","sk.frontend":"Frontend Web","sk.backend":"Backend & DB",
    "sk.tools":"CMS & Tools","sk.pm":"Project Management","sk.lang":"Languages & Soft Skills",
    "proj.tag":"PROJECTS","proj.title":"What I build.","proj.desc":"Concrete delivered projects — mobile apps, web platforms, backend systems and branding solutions.",
    "filter.all":"All","filter.mobile":"📱 Mobile","filter.web":"🌐 Web","filter.branding":"✨ Branding",
    "cat.mobile":"Mobile App","cat.web":"Web Platform","cat.frontend":"React Frontend","cat.fullstack":"Fullstack","cat.brand":"Branding",
    "p1.name":"Flutter Mobile App — Akanda Tech","p1.desc":"Cross-platform iOS & Android app built end-to-end. Firebase Firestore architecture, authentication, Provider state management.",
    "p2.name":"Drupal Web Platform","p2.desc":"Development and maintenance of enterprise web platforms under Drupal. New features, SEO optimisation and client management.",
    "p3.name":"React.js Interface — Analytics Dashboard","p3.desc":"Component-driven design system with React.js and Tailwind CSS.",
    "p4.name":"Node.js API + MongoDB","p4.desc":"RESTful backend with Node.js and MongoDB. Modular architecture, JWT authentication.",
    "p5.name":"M.G.N CodeWave — Brand Identity","p5.desc":"Complete visual and digital identity creation for the MGN CodeWave agency.",
    "p6.name":"Mobile Portfolio — MGN","p6.desc":"Interactive presentation app for MGN CodeWave services.",
    "show.tag":"MOBILE SHOWCASE","show.title":"Flutter end-to-end.\nManaged and shipped.","show.desc":"At Akanda Tech, I was both project manager and lead developer — a rare combination.",
    "feat1.title":"Architecture & Specifications","feat1.desc":"Writing functional requirements, UX wireframes, MVC/Provider architecture choices.",
    "feat2.title":"Performance & Optimisation","feat2.desc":"Smooth 60fps animations, memory management and reduced Firebase Firestore latency.",
    "feat3.title":"Firebase Full Stack","feat3.desc":"Firestore (real-time data), Firebase Auth (authentication), Firebase Storage (media).",
    "feat4.title":"Testing & Production Deployment","feat4.desc":"User testing coordination, feedback iterations, iOS & Android deployment.",
    "serv.tag":"SERVICES — MGN CODEWAVE","serv.title":"Complete digital\nsolutions.","serv.desc":"Through M.G.N CodeWave, I support companies and startups in their digital transformation.",
    "s1.name":"Flutter Mobile Development","s1.desc":"Performant iOS & Android apps built with Flutter. From idea to App Store.",
    "s1.f1":"Scalable architecture (Provider/Clean)","s1.f2":"Full Firebase integration","s1.f3":"Performance optimisation","s1.f4":"App Store / Play Store deployment",
    "s2.name":"React / Next.js Web Apps","s2.desc":"Modern, fast and accessible web interfaces. Dashboards, landing pages and SaaS platforms.",
    "s2.f1":"React.js / Next.js / Tailwind","s2.f2":"Mobile-first responsive","s2.f3":"REST API integration","s2.f4":"SEO & Core Web Vitals optimisation",
    "s3.name":"Node.js Backend & API","s3.desc":"Robust backend architectures, documented RESTful APIs, SQL and NoSQL databases.",
    "s3.f1":"Node.js / Express.js","s3.f2":"MongoDB & MySQL","s3.f3":"Firebase Firestore","s3.f4":"JWT / Firebase Auth authentication",
    "s4.name":"CMS Websites (Drupal / WordPress)","s4.desc":"Corporate, e-commerce and blog sites. SEO and performance optimised.",
    "s4.f1":"Enterprise Drupal","s4.f2":"Custom WordPress","s4.f3":"Advanced technical SEO","s4.f4":"Maintenance and evolution",
    "s5.name":"IT Project Management Consulting","s5.desc":"Project scoping, functional specs, tech team coordination and delivery tracking.",
    "s5.f1":"Requirements & specs","s5.f2":"Agile / Scrum management","s5.f3":"Dev team coordination","s5.f4":"Reporting and client relations",
    "s6.name":"UI/UX & Digital Branding","s6.desc":"Visual identity, wireframes, interactive prototypes and cohesive design systems.",
    "s6.f1":"Wireframes & mockups","s6.f2":"Design system","s6.f3":"Brand identity","s6.f4":"UX optimisation",
    "mgn.title":"M.G.N CodeWave — Digital Solutions","mgn.desc":"Your partner for ambitious digital projects in Africa and internationally. Engineer quality, startup speed.","mgn.cta":"Work with us →",
    "cont.tag":"CONTACT","cont.title":"Let's talk about your\nnext project.","cont.desc":"Have a web, mobile project or an IT project management mission? I'm available for collaborations in Africa and internationally.",
    "cont.portfolio":"Current portfolio","cont.loc":"Location",
    "form.name":"Full name","form.email":"Email","form.subject":"Subject","form.msg":"Message","form.send":"✉ Send message",
    "form.opt1":"Flutter Mobile Project","form.opt2":"React/Next.js Web App","form.opt3":"IT Project Management","form.opt4":"Node.js Backend","form.opt5":"Other request",
    "footer.rights":"All rights reserved","footer.top":"Back to top",
    "photo.tag":"WHO I AM","photo.title":"State Engineer.\nProduct Builder.",
    "photo.desc":"Born in Gabon, trained in Morocco, I'm a software engineer passionate about creating digital solutions with real impact. My approach combines technical rigour, product vision and leadership.",
    "photo.cta1":"✉ Contact me","photo.cta2":"View my projects →",
    "mgn.link.title":"M.G.N CodeWave — Digital Solutions","mgn.link.sub":"Visit the agency · Web · Mobile · Branding",
    "nav.agency":"🚀 My Agency","detail.btn":"View details →",
  }
};

let currentLang = 'fr';
let currentTheme = 'dark';

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.getElementById('langToggle').textContent = lang === 'fr' ? 'EN' : 'FR';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'fr' ? 'en' : 'fr');
});
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// PROJECT FILTERS
document.getElementById('filterTabs').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-tab')) return;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  const filter = e.target.getAttribute('data-filter');
  document.querySelectorAll('.project-card').forEach(card => {
    if (filter === 'all' || card.getAttribute('data-cat') === filter) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
});

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// SCROLL TO TOP
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  btn.classList.toggle('visible', window.scrollY > 500);
});

// MOBILE MENU
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// FORM
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = currentLang === 'fr' ? '✓ Message envoyé !' : '✓ Message sent!';
  btn.style.background = '#10b981';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; e.target.reset(); }, 3000);
}

// SMOOTH NAV CLOSE ON LINK
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open'));
});

// PROJECT DETAIL MODAL DATA
const projectData = {
  p1: {
    thumb: '📱',
    cat: { fr: 'Application Mobile', en: 'Mobile App' },
    title: { fr: 'App Mobile Flutter — Akanda Tech', en: 'Flutter Mobile App — Akanda Tech' },
    desc: { fr: "Projet phare de 10 mois chez Akanda Tech (Libreville, Gabon). Chef de Projet IT et Développeur principal, j'ai conçu et livré une application mobile multiplateforme iOS & Android avec Flutter, de l'analyse des besoins jusqu'à la mise en production.", en: "10-month flagship project at Akanda Tech (Libreville, Gabon). As IT Project Manager and Lead Developer, I designed and delivered a cross-platform iOS & Android mobile app with Flutter, from requirements analysis through to production deployment." },
    tags: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'Provider', 'MVC', 'iOS', 'Android'],
    highlights: { fr: ['Analyse des besoins et rédaction des spécifications fonctionnelles & techniques', 'Conception des wireframes et maquettes UX pour valider les flux utilisateurs', 'Implémentation Firebase Firestore (données temps réel) et Firebase Auth', 'Architecture MVC / Provider pour une base de code maintenable et scalable', 'Optimisation des performances : animations fluides, gestion mémoire, temps de démarrage', 'Coordination des tests utilisateurs et iterations selon les feedbacks'], en: ['Requirements analysis and writing functional & technical specifications', 'UX wireframes and mockups to validate user flows before development', 'Firebase Firestore (real-time data) and Firebase Auth implementation', 'MVC / Provider architecture for a maintainable and scalable codebase', 'Performance optimisation: smooth animations, memory management, startup time', 'User testing coordination and feature iterations based on feedback'] }
  },
  p2: {
    thumb: '🌐',
    cat: { fr: 'Plateforme Web', en: 'Web Platform' },
    title: { fr: 'Plateforme Web Drupal — Agence Digitale', en: 'Drupal Web Platform — Digital Agency' },
    desc: { fr: "Mission de 3 mois dans une agence digitale à Rabat (Maroc). Développement et maintenance de plateformes web enterprise sous Drupal pour plusieurs clients. Gestion de la relation client et coordination des livraisons.", en: "3-month mission at a digital agency in Rabat (Morocco). Development and maintenance of enterprise web platforms under Drupal for multiple clients. Client relationship management and delivery coordination." },
    tags: ['Drupal', 'HTML5', 'CSS3', 'JavaScript', 'SEO', 'PHP'],
    highlights: { fr: ['Développement de nouvelles fonctionnalités sur des plateformes Drupal multi-clients', 'Intégration de maquettes responsive en HTML5/CSS3 avec structure sémantique', 'Optimisation SEO technique des sites existants', 'Gestion de la relation client, recueil des besoins et suivi des livraisons', "Coordination des plannings de maintenance et d'évolution"], en: ['Development of new features on multi-client Drupal platforms', 'Responsive mockup integration in HTML5/CSS3 with semantic structure', 'Technical SEO optimisation of existing sites', 'Client relationship management, requirements gathering and delivery tracking', 'Maintenance and evolution schedule coordination'] }
  },
  p3: {
    thumb: '⚛️',
    cat: { fr: 'Frontend React', en: 'React Frontend' },
    title: { fr: 'Interface React.js — Dashboard Analytics', en: 'React.js Interface — Analytics Dashboard' },
    desc: { fr: "Développement d'une interface web moderne et performante avec React.js et Next.js. Approche component-driven pour un design system cohérent, intégration d'APIs REST et optimisation des Core Web Vitals.", en: "Development of a modern, performant web interface with React.js and Next.js. Component-driven approach for a cohesive design system, REST API integration and Core Web Vitals optimisation." },
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'Axios', 'Git'],
    highlights: { fr: ['Architecture component-driven pour un design system réutilisable', "Intégration d'APIs REST avec Axios et gestion des états asynchrones", 'Responsive mobile-first irréprochable sur tous les breakpoints', 'Optimisation des performances frontend (Core Web Vitals, lazy loading)', 'Accessibilité web et bonnes pratiques WCAG'], en: ['Component-driven architecture for a reusable design system', 'REST API integration with Axios and async state management', 'Flawless mobile-first responsive on all breakpoints', 'Frontend performance optimisation (Core Web Vitals, lazy loading)', 'Web accessibility and WCAG best practices'] }
  },
  p4: {
    thumb: '🔧',
    cat: { fr: 'Fullstack', en: 'Fullstack' },
    title: { fr: 'API Node.js + MongoDB', en: 'Node.js API + MongoDB' },
    desc: { fr: "Conception et développement d'une API RESTful robuste avec Node.js et MongoDB. Architecture modulaire, sécurisée avec JWT, documentée et déployée en production.", en: "Design and development of a robust RESTful API with Node.js and MongoDB. Modular architecture, secured with JWT, documented and deployed to production." },
    tags: ['Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'JWT', 'REST API', 'Git'],
    highlights: { fr: ['Architecture modulaire et maintenable avec Express.js', 'Authentification sécurisée via JWT et hachage des mots de passe', 'Base de données MongoDB avec Mongoose pour la modélisation des données', 'Documentation API complète et tests des endpoints', "Déploiement cloud et gestion des variables d'environnement"], en: ['Modular and maintainable architecture with Express.js', 'Secure authentication via JWT and password hashing', 'MongoDB database with Mongoose for data modelling', 'Full API documentation and endpoint testing', 'Cloud deployment and environment variable management'] }
  },
  p5: {
    thumb: '✨',
    cat: { fr: 'Branding', en: 'Branding' },
    title: { fr: 'M.G.N CodeWave — Identité de Marque', en: 'M.G.N CodeWave — Brand Identity' },
    desc: { fr: "Création complète de l'identité visuelle et digitale de M.G.N CodeWave, mon agence de solutions digitales. Du naming à la charte graphique, en passant par le logo et la présence en ligne.", en: "Complete creation of the visual and digital identity of M.G.N CodeWave, my digital solutions agency. From naming to graphic guidelines, including the logo and online presence." },
    tags: ['Branding', 'Design System', 'Figma', 'Logo Design', 'Charte graphique', 'UI/UX'],
    highlights: { fr: ['Conception du logo NR avec identité bicolore (graphite & bleu)', 'Définition de la charte graphique (typographies, couleurs, espacements)', 'Création du design system pour tous les supports de communication', 'Stratégie de positionnement : "Qualité ingénieur, rapidité startup"', 'Identité cohérente appliquée sur le web, le mobile et les supports print'], en: ['NR logo design with two-tone identity (graphite & blue)', 'Graphic guidelines definition (typography, colours, spacing)', 'Design system creation for all communication materials', 'Positioning strategy: "Engineer quality, startup speed"', 'Consistent identity applied across web, mobile and print materials'] }
  },
  p6: {
    thumb: '🚀',
    cat: { fr: 'Application Mobile', en: 'Mobile App' },
    title: { fr: 'Portfolio Mobile — MGN CodeWave', en: 'Mobile Portfolio — MGN CodeWave' },
    desc: { fr: "Application mobile Flutter conçue pour présenter les services de M.G.N CodeWave de façon interactive et élégante. Navigation fluide, animations soignées et expérience utilisateur optimale sur iOS & Android.", en: "Flutter mobile app designed to present M.G.N CodeWave services in an interactive and elegant way. Smooth navigation, polished animations and optimal user experience on iOS & Android." },
    tags: ['Flutter', 'Dart', 'UI/UX', 'Animations', 'iOS', 'Android'],
    highlights: { fr: ['Animations de navigation fluides (transitions, micro-interactions)', 'Design épuré et professionnel aligné sur la charte MGN', 'Architecture optimisée pour la performance sur iOS & Android', 'Sections : Services, Projets, À propos, Contact', 'Expérience utilisateur testée et itérée sur feedbacks réels'], en: ['Smooth navigation animations (transitions, micro-interactions)', 'Clean and professional design aligned with MGN brand guidelines', 'Performance-optimised architecture for iOS & Android', 'Sections: Services, Projects, About, Contact', 'User experience tested and iterated on real feedback'] }
  }
};

function openModal(id) {
  const d = projectData[id];
  const lang = currentLang;
  document.getElementById('modalThumb').textContent = d.thumb;
  document.getElementById('modalCat').textContent = d.cat[lang];
  document.getElementById('modalTitle').textContent = d.title[lang];
  document.getElementById('modalDesc').textContent = d.desc[lang];
  document.getElementById('modalTags').innerHTML = d.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('modalHighlights').innerHTML = d.highlights[lang].map(h => `<li>${h}</li>`).join('');
  document.getElementById('lblDesc').textContent = 'Description';
  document.getElementById('lblStack').textContent = lang === 'fr' ? 'Stack technique' : 'Tech stack';
  document.getElementById('lblHighlights').textContent = lang === 'fr' ? 'Points clés' : 'Key highlights';
  document.getElementById('modalCta').textContent = lang === 'fr' ? '✉ Discuter de ce projet' : '✉ Discuss this project';
  document.getElementById('modalLink').textContent = lang === 'fr' ? 'Voir le portfolio →' : 'View portfolio →';
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

