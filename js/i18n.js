(() => {
  const STORAGE_KEY = "portfolio_richard_lang";
  const SUPPORTED_LANGS = ["fr", "en"];

  const normalize = (text) =>
    text
      .replace(/\s*:\s*/g, " : ")
      .replace(/\s+/g, " ")
      .trim();

  const TRANSLATIONS_EN = {
    "NGOUBADJAMBO Richard | Ingénieur Informatique & Entrepreneur":
      "NGOUBADJAMBO Richard | Software Engineer & Entrepreneur",
    "Portfolio professionnel de NGOUBADJAMBO Richard, Ingénieur Informatique & Entrepreneur. Découvrez mes projets, compétences et services de développement Fullstack et Mobile avec M.G.N CodeWave.":
      "Professional portfolio of NGOUBADJAMBO Richard, Software Engineer & Entrepreneur. Discover my projects, skills, and Fullstack & Mobile development services with M.G.N CodeWave.",
    "développeur, ingénieur informatique, fullstack, mobile, web, portfolio, Libreville, Gabon":
      "developer, software engineer, fullstack, mobile, web, portfolio, Libreville, Gabon",
    "Portfolio professionnel - Développement Fullstack et Mobile avec M.G.N CodeWave":
      "Professional portfolio - Fullstack and Mobile development with M.G.N CodeWave",
    "Chargement du contenu": "Loading content",
    "Chargement...": "Loading...",
    "Navigation principale": "Main navigation",
    "Retour à l'accueil": "Back to home",
    Accueil: "Home",
    "À propos": "About",
    Entreprise: "Company",
    Statistiques: "Statistics",
    Compétences: "Skills",
    Parcours: "Journey",
    Portfolio: "Portfolio",
    Services: "Services",
    Contact: "Contact",
    Navigation: "Navigation",
    Email: "Email",
    Développeur: "Developer",
    "Basculer le menu de navigation": "Toggle navigation menu",
    "Créateur de Solutions Digitales": "Digital Solutions Creator",
    "Ingénieur Informatique & Entrepreneur": "Software Engineer & Entrepreneur",
    "Fondateur de M.G.N CodeWave, je conçois des solutions digitales innovantes qui transforment vos idées en réalité. Spécialisé en développement Fullstack et Mobile, avec une passion pour l'excellence et l'innovation technologique.":
      "Founder of M.G.N CodeWave, I design innovative digital solutions that turn your ideas into reality. Specialized in Fullstack and Mobile development, with a passion for excellence and technological innovation.",
    "Fondateur de": "Founder of",
    ", je conçois des": ", I design",
    "solutions digitales innovantes": "innovative digital solutions",
    "qui transforment vos idées en réalité. Spécialisé en développement":
      "that turn your ideas into reality. Specialized in",
    Fullstack: "Fullstack",
    et: "and",
    Mobile: "Mobile",
    ", avec une passion pour l'excellence et l'innovation technologique.":
      ", with a passion for excellence and technological innovation.",
    "Développement Rapide": "Fast Development",
    "Solutions Sur-mesure": "Tailor-made Solutions",
    "Innovation Constante": "Constant Innovation",
    "Démarrer un projet avec Richard": "Start a project with Richard",
    "Démarrer un projet": "Start a project",
    "Voir le portfolio et réalisations": "View portfolio and projects",
    "Voir mes réalisations": "See my work",
    "Naviguer vers le portfolio": "Navigate to the portfolio",
    "Explorez mon travail": "Explore my work",
    "Voir le portfolio": "View the portfolio",
    "Descendre vers le portfolio": "Scroll down to the portfolio",
    "Statistiques professionnelles": "Professional stats",
    "3 plus années": "3 plus years",
    Années: "Years",
    "d'expérience": "of experience",
    "15 plus projets": "15 plus projects",
    Projets: "Projects",
    réalisés: "delivered",
    "10 plus technologies": "10 plus technologies",
    Technologies: "Technologies",
    maîtrisées: "mastered",
    "100 pour cent": "100 percent",
    Satisfaction: "Satisfaction",
    client: "client",
    "Technologies principales": "Core technologies",
    "Stack Principal:": "Main Stack:",
    "À propos de moi": "About me",
    "Découvrez mon parcours et mes valeurs":
      "Discover my background and values",
    Nom: "Name",
    Statut: "Role",
    "Chef d'Entreprise": "Business Owner",
    Entreprise: "Company",
    Localisation: "Location",
    Formation: "Education",
    "Ingénieur d'État": "State Engineer",
    "Chef d'entreprise technique & Expert en développement":
      "Technical founder & Development expert",
    "Fondateur et dirigeant de M.G.N CodeWave, j'allie vision entrepreneuriale et expertise technique pour créer des solutions digitales innovantes. Mon parcours unique me permet de comprendre à la fois les enjeux business et les défis techniques.":
      "Founder and head of M.G.N CodeWave, I combine entrepreneurial vision and technical expertise to create innovative digital solutions. My unique background enables me to understand both business challenges and technical constraints.",
    "Fondateur et dirigeant de": "Founder and head of",
    ", j'allie vision entrepreneuriale et expertise technique pour créer des":
      ", I combine entrepreneurial vision and technical expertise to create",
    "solutions digitales innovantes. Mon parcours unique me permet de comprendre à la fois les enjeux business et les défis techniques.":
      "innovative digital solutions. My unique background enables me to understand both business challenges and technical constraints.",
    "Fort de plus de 3 années d'expérience dans le développement web et mobile, je me spécialise dans la création d'applications performantes utilisant React.js, Node.js, Flutter et les technologies modernes.":
      "With more than 3 years of experience in web and mobile development, I specialize in building high-performance applications using React.js, Node.js, Flutter, and modern technologies.",
    "Ma démarche repose sur trois piliers : l'innovation pour imaginer des solutions créatives, l'excellence technique pour garantir la qualité, et la collaboration pour dépasser les attentes.":
      "My approach is built on three pillars: innovation to imagine creative solutions, technical excellence to ensure quality, and collaboration to exceed expectations.",
    "Ma démarche repose sur trois piliers :":
      "My approach is built on three pillars:",
    "l'innovation": "innovation",
    "pour imaginer des solutions": "to imagine creative solutions",
    "créatives,": "creative,",
    "l'excellence technique": "technical excellence",
    "pour garantir la qualité, et": "to ensure quality, and",
    "la collaboration": "collaboration",
    "pour dépasser les attentes.": "to exceed expectations.",
    "Votre Partenaire Digital de Confiance": "Your Trusted Digital Partner",
    "À Propos de Notre Entreprise": "About Our Company",
    "M.G.N CodeWave est une agence digitale basée à Libreville, Gabon, spécialisée dans la création de solutions web et mobile performantes. Nous transformons vos idées en sites web, applications et plateformes digitales qui génèrent des résultats.":
      "M.G.N CodeWave is a digital agency based in Libreville, Gabon, specializing in high-performance web and mobile solutions. We turn your ideas into websites, applications and digital platforms that deliver results.",
    "est une agence digitale basée à": "is a digital agency based in",
    ", spécialisée dans la création de solutions web et mobile performantes. Nous transformons vos idées en sites web, applications et plateformes digitales qui génèrent des résultats.":
      ", specializing in high-performance web and mobile solutions. We turn your ideas into websites, applications and digital platforms that deliver results.",
    "Notre Mission": "Our Mission",
    "Fournir des solutions digitales modernes, abordables et de haute qualité pour propulser les entreprises vers la transformation digitale. Nous croyons que chaque entreprise mérite un site web professionnel et une présence digitale forte.":
      "Deliver modern, affordable and high-quality digital solutions to drive businesses toward digital transformation. We believe every business deserves a professional website and a strong digital presence.",
    "Nos Valeurs": "Our Values",
    "Qualité Garantie - Designs modernes testés sur tous les appareils":
      "Guaranteed Quality - Modern designs tested on all devices",
    "Qualité Garantie": "Guaranteed Quality",
    "- Designs modernes testés sur tous les appareils":
      "- Modern designs tested on all devices",
    "Livraison Rapide - Votre site prêt en 2-4 semaines":
      "Fast Delivery - Your site ready in 2-4 weeks",
    "Livraison Rapide": "Fast Delivery",
    "- Votre site prêt en 2-4 semaines": "- Your site ready in 2-4 weeks",
    "Support Dédié - Assistance 24/7 par WhatsApp, email ou téléphone":
      "Dedicated Support - 24/7 assistance via WhatsApp, email or phone",
    "Support Dédié": "Dedicated Support",
    "- Assistance 24/7 par WhatsApp, email ou téléphone":
      "- 24/7 assistance via WhatsApp, email or phone",
    "Prix Compétitifs - Les meilleurs tarifs au Gabon avec paiement flexible":
      "Competitive Pricing - Best rates in Gabon with flexible payment",
    "Prix Compétitifs": "Competitive Pricing",
    "- Les meilleurs tarifs au Gabon avec paiement flexible":
      "- Best rates in Gabon with flexible payment",
    "Nos Services": "Our Services",
    "Sites Vitrines": "Showcase Websites",
    "Sites web professionnels pour présenter votre activité":
      "Professional websites to showcase your business",
    "À partir de 100 000 FCFA": "From 100,000 FCFA",
    "E-Commerce": "E-commerce",
    "Boutiques en ligne complètes avec paiement sécurisé":
      "Full online stores with secure payment",
    "À partir de 300 000 FCFA": "From 300,000 FCFA",
    "Blogs & Portfolios": "Blogs & Portfolios",
    "Plateformes pour partager votre passion et réalisations":
      "Platforms to share your passion and work",
    "À partir de 80 000 FCFA": "From 80,000 FCFA",
    "Applications Mobiles": "Mobile Applications",
    "Développement Flutter pour iOS et Android":
      "Flutter development for iOS and Android",
    "Sur devis": "On request",
    "Visiter le Site M.G.N CodeWave": "Visit M.G.N CodeWave Website",
    "Devis Gratuit via WhatsApp": "Free Quote via WhatsApp",
    "Années d'Expérience": "Years of Experience",
    "Expertise en développement web et mobile":
      "Expertise in web and mobile development",
    "Projets Réalisés": "Projects Delivered",
    "Applications, sites et solutions digitales":
      "Apps, websites and digital solutions",
    "React, Node.js, Flutter, et bien d'autres":
      "React, Node.js, Flutter, and more",
    "Satisfaction Client": "Client Satisfaction",
    "Qualité et excellence garanties": "Quality and excellence guaranteed",
    "Mes Compétences": "My Skills",
    "Technologies et expertises que je maîtrise":
      "Technologies and expertise I master",
    "Bases de Données": "Databases",
    "Gestion de Projet": "Project Management",
    "Stratégie Digitale": "Digital Strategy",
    "Résolution Problèmes": "Problem Solving",
    "Travail d'Équipe": "Teamwork",
    "Mon Parcours": "My Journey",
    "Formation et expériences professionnelles":
      "Education and professional experience",
    Formation: "Education",
    "Diplôme d'Ingénieur d'État": "State Engineer Degree",
    "École Marocaine Des Sciences de L'Ingénieur":
      "Moroccan School of Engineering Sciences",
    "Formation complète en Informatique & Réseaux. Base solide pour le développement d'entreprises technologiques et la direction de projets complexes.":
      "Comprehensive training in Computer Science & Networks. A solid foundation for building tech companies and leading complex projects.",
    "Certification Web Fullstack": "Fullstack Web Certification",
    "Certification avancée en développement web moderne (MERN Stack).":
      "Advanced certification in modern web development (MERN Stack).",
    "Formation Web Fullstack": "Fullstack Web Training",
    "Formation pratique sur les technologies web modernes.":
      "Practical training on modern web technologies.",
    "Expériences Professionnelles": "Professional Experience",
    Actuel: "Current",
    "Fondateur & Chef d'Entreprise": "Founder & CEO",
    "Direction stratégique et opérationnelle":
      "Strategic and operational leadership",
    "Développement commercial": "Business development",
    "Supervision technique des projets": "Technical oversight of projects",
    "Innovation et R&D": "Innovation and R&D",
    "Développeur Mobile Flutter / Chef de Projet IT":
      "Flutter Mobile Developer / IT Project Manager",
    "Conception technique (exigences, wireframes)":
      "Technical design (requirements, wireframes)",
    "Développement interfaces Flutter": "Flutter UI development",
    "Gestion fonctionnalités principales": "Management of core features",
    "Développeur Web - Drupal": "Web Developer - Drupal",
    "Conception et programmation de sites web":
      "Website design and development",
    "Création de fonctionnalités": "Feature development",
    "Chargé de Clientèle": "Account Manager",
    "Gestion portefeuille clients": "Client portfolio management",
    "Fidélisation client": "Customer retention",
    "Découvrez mes réalisations": "Discover my work",
    "Filtres de portfolio": "Portfolio filters",
    "Afficher tous les projets": "Show all projects",
    Tous: "All",
    "Afficher les projets mobiles": "Show mobile projects",
    "Afficher les projets web": "Show web projects",
    "Afficher les plateformes": "Show platforms",
    Plateformes: "Platforms",
    "Super-app Flutter combinant e-commerce, livraison et location avec IA embarquée.":
      "Flutter super-app combining e-commerce, delivery and rental with embedded AI.",
    "Écosystème digital complet pour cabinet de coaching.":
      "Complete digital ecosystem for a coaching firm.",
    "Voir les détails": "View details",
    "Studio digital : design system et MVP sur-mesure.":
      "Digital studio: design system and bespoke MVP.",
    "Plateforme e-commerce avec catalogue dynamique.":
      "E-commerce platform with dynamic catalog.",
    "Présentation éditoriale avec téléchargement.":
      "Editorial showcase with downloads.",
    "Plateforme e-learning gamifiée.": "Gamified e-learning platform.",
    "Questionnaires de profils personnalité.":
      "Personality profile questionnaires.",
    "Site communautaire pour église locale.":
      "Community site for a local church.",
    "Plateforme de gestion de prospects.": "Lead management platform.",
    "Waz'UP application mobile de services multi-usage":
      "Waz'UP multi-service mobile application",
    "H2P Group ecosysteme digital pour cabinet de coaching":
      "H2P Group digital ecosystem for a coaching firm",
    "MGN CodeWave studio digital et design system":
      "MGN CodeWave digital studio and design system",
    "Le Bon Waz plateforme e-commerce et catalogue produit":
      "Le Bon Waz e-commerce platform and product catalog",
    "Lampe A Mes Pieds presentation editoriale et livre numerique":
      "Lampe A Mes Pieds editorial showcase and digital book",
    "English Fun Club plateforme e-learning gamifiee":
      "English Fun Club gamified e-learning platform",
    "Decouvre qui tu es questionnaires de profil personalite":
      "Discover Who You Are personality profile questionnaires",
    "Grace Deployee site communautaire pour eglise locale":
      "Grace Deployee community site for local church",
    "LMS Platform tableau de bord gestion de prospects":
      "LMS Platform lead management dashboard",
    "Atelier de conception produit et strategie digitale":
      "Product design and digital strategy workshop",
    "Gestion de projet IT en equipe avec tableaux et planning":
      "IT project management in team with dashboards and planning",
    "Developpement web fullstack sur ordinateur portable":
      "Fullstack web development on laptop",
    "Application mobile moderne pour iOS et Android":
      "Modern mobile application for iOS and Android",
    "Tableau de bord analytics pour performance web":
      "Analytics dashboard for web performance",
    "Innovation technologique et prototypage electronique":
      "Technological innovation and electronic prototyping",
    "Mes Services": "My Services",
    "Solutions digitales complètes": "End-to-end digital solutions",
    "Offre phare orientée stratégie produit : cadrage, UX/UI, développement et lancement d'expériences web & mobile dans des cycles courts.":
      "Flagship offering focused on product strategy: framing, UX/UI, development and launch of web & mobile experiences in short cycles.",
    "Gestion de Projet IT": "IT Project Management",
    "Responsable de la conception technique, des exigences clés, et du développement de fonctionnalités pour garantir le succès de votre projet.":
      "Responsible for technical design, key requirements, and feature development to ensure the success of your project.",
    Exigences: "Requirements",
    Suivi: "Follow-up",
    "Développement Fullstack": "Fullstack Development",
    "Maîtrise complète du développement frontend (React, JavaScript) et backend (Node.js) pour des applications web robustes et performantes.":
      "Full mastery of frontend (React, JavaScript) and backend (Node.js) development for robust, high-performing web applications.",
    "Développement Mobile (Flutter)": "Mobile Development (Flutter)",
    "Conception et développement d'interfaces utilisateur multiplateformes (iOS et Android) pour des applications mobiles de haute qualité.":
      "Design and development of cross-platform user interfaces (iOS and Android) for high-quality mobile applications.",
    "Optimisation Performance": "Performance Optimization",
    "Expertise dans l'amélioration de la vitesse et de l'efficacité des applications web et mobiles pour une expérience utilisateur optimale.":
      "Expertise in improving the speed and efficiency of web and mobile applications for an optimal user experience.",
    Vitesse: "Speed",
    Scalabilité: "Scalability",
    "Innovation & Solutions": "Innovation & Solutions",
    "Capacité à identifier les défis complexes et à proposer des solutions créatives et innovantes pour les surmonter.":
      "Ability to identify complex challenges and propose creative, innovative solutions to overcome them.",
    Créativité: "Creativity",
    Problèmes: "Problems",
    "Me Contacter": "Contact Me",
    "Discutons de votre projet": "Let's discuss your project",
    Informations: "Information",
    Adresse: "Address",
    Téléphone: "Phone",
    "Réseaux Sociaux": "Social Media",
    "Votre Nom *": "Your Name *",
    "2-100 caractères, lettres uniquement": "2-100 characters, letters only",
    "Votre Email *": "Your Email *",
    "Sujet *": "Subject *",
    "Message *": "Message *",
    "10-5000 caractères": "10-5000 characters",
    Envoyer: "Send",
    "Entrepreneur & Ingénieur Informatique": "Entrepreneur & Software Engineer",
    "Fondateur de M.G.N CodeWave": "Founder of M.G.N CodeWave",
    "Tous droits réservés.": "All rights reserved.",

    "Palette de Couleurs - M.G.N CodeWave": "Color Palette - M.G.N CodeWave",
    "🎨 Palette de Couleurs M.G.N CodeWave": "🎨 M.G.N CodeWave Color Palette",
    "☀️ Mode Clair": "☀️ Light Mode",
    Primaire: "Primary",
    "Boutons, textes importants": "Buttons, important text",
    Secondaire: "Secondary",
    "Hover, états actifs": "Hover, active states",
    Accent: "Accent",
    "Animations, dégradés": "Animations, gradients",
    "Texte Principal": "Primary Text",
    "Textes, titres": "Text, headings",
    "Texte Secondaire": "Secondary Text",
    "Descriptions, metadata": "Descriptions, metadata",
    "Fond Clair": "Light Background",
    "Arrière-plans": "Backgrounds",
    "✨ Dégradé Principal": "✨ Primary Gradient",
    "Utilisé pour les boutons, la section Hero, les icônes et les animations":
      "Used for buttons, the Hero section, icons, and animations",
    "🌙 Mode Sombre": "🌙 Dark Mode",
    "Fond Sombre": "Dark Background",
    "Fond Principal": "Main Background",
    "Arrière-plan général": "General background",
    Surface: "Surface",
    "Cartes, conteneurs": "Cards, containers",
    "Surface Alternative": "Alternative Surface",
    "Inputs, tags": "Inputs, tags",
    "Surface Contraste": "Contrast Surface",
    "Sections alternées": "Alternating sections",
    "Texte Clair": "Light Text",
    Surfaces: "Surfaces",
    Bordures: "Borders",
    "Textes lisibles": "Readable text",
    "Accents, bordures": "Accents, borders",
    "Waz'UP - Super-app Flutter | NGOUBADJAMBO Richard":
      "Waz'UP - Flutter Super-app | NGOUBADJAMBO Richard",
    "Super-app Flutter qui combine e-commerce, livraison et location avec une expérience utilisateur unifiée.":
      "Flutter super-app combining e-commerce, delivery and rental with a unified user experience.",
    "Flutter, Super-app, Waz'UP, E-commerce mobile, Application multiservices, Mobile development, NGOUBADJAMBO Richard":
      "Flutter, Super-app, Waz'UP, Mobile e-commerce, Multi-service app, Mobile development, NGOUBADJAMBO Richard",
    "Super-app Flutter combinant e-commerce, livraison et location avec expérience unifiée.":
      "Flutter super-app combining e-commerce, delivery and rental with a unified experience.",
    "Super-app Flutter - E-commerce, Livraison & Location":
      "Flutter Super-app - E-commerce, Delivery & Rental",
    "Retour au portfolio": "Back to portfolio",
    "Vue d'ensemble du projet": "Project overview",
    "Waz'UP est une super-application mobile développée avec Flutter qui révolutionne l'expérience utilisateur en combinant trois services essentiels en une seule plateforme unifiée : e-commerce, livraison à la demande et location de biens et services.":
      "Waz'UP is a mobile super-app built with Flutter that revolutionizes the user experience by combining three essential services into a single unified platform: e-commerce, on-demand delivery, and rental of goods and services.",
    "est une super-application mobile développée avec Flutter qui révolutionne l'expérience utilisateur en combinant trois services essentiels en une seule plateforme unifiée : e-commerce, livraison à la demande et location de biens et services.":
      "is a mobile super-app built with Flutter that revolutionizes the user experience by combining three essential services into a single unified platform: e-commerce, on-demand delivery, and rental of goods and services.",
    "Cette application multiplateforme (iOS et Android) offre une expérience fluide et intuitive, permettant aux utilisateurs de gérer tous leurs besoins quotidiens depuis une interface unique et cohérente.":
      "This cross-platform app (iOS and Android) provides a smooth and intuitive experience, allowing users to manage all their daily needs from a single, consistent interface.",
    "Statistiques du projet": "Project statistics",
    "Services intégrés": "Integrated services",
    "Plateformes (iOS/Android)": "Platforms (iOS/Android)",
    "Code partagé": "Shared code",
    "Intelligence embarquée": "Embedded intelligence",
    "Fonctionnalités principales": "Key features",
    "Module E-commerce": "E-commerce module",
    "Catalogue produits dynamique avec recherche intelligente et filtres avancés":
      "Dynamic product catalog with smart search and advanced filters",
    "Panier d'achat avec gestion des quantités et recommandations personnalisées":
      "Shopping cart with quantity management and personalized recommendations",
    "Système de paiement sécurisé multi-méthodes (Mobile Money, cartes bancaires)":
      "Secure multi-method payment system (Mobile Money, bank cards)",
    "Suivi des commandes en temps réel avec notifications push":
      "Real-time order tracking with push notifications",
    "Historique des achats et réordonnance rapide":
      "Purchase history and quick reordering",
    "Programme de fidélité et système de réductions":
      "Loyalty program and discount system",
    "Module Livraison": "Delivery module",
    "Commande de livraison à la demande avec géolocalisation GPS":
      "On-demand delivery ordering with GPS geolocation",
    "Calcul automatique du prix basé sur la distance et le type de véhicule":
      "Automatic price calculation based on distance and vehicle type",
    "Suivi en direct du livreur sur une carte interactive":
      "Live courier tracking on an interactive map",
    "Chat en temps réel avec le livreur": "Real-time chat with the courier",
    "Système de notation et avis pour les livreurs":
      "Rating and review system for couriers",
    "Planification de livraisons récurrentes": "Recurring delivery scheduling",
    "Module Location": "Rental module",
    "Marketplace de location de biens (véhicules, matériel, logements)":
      "Rental marketplace for goods (vehicles, equipment, housing)",
    "Système de réservation avec calendrier disponibilité":
      "Booking system with availability calendar",
    "Gestion des contrats de location numériques":
      "Management of digital rental contracts",
    "Système de caution et assurance intégrée":
      "Deposit system and integrated insurance",
    "Vérification d'identité et validation des utilisateurs":
      "Identity verification and user validation",
    "Chat sécurisé entre propriétaires et locataires":
      "Secure chat between owners and renters",
    "Intelligence Artificielle embarquée": "Embedded Artificial Intelligence",
    "Waz'UP intègre des algorithmes d'IA avancés pour améliorer l'expérience utilisateur :":
      "Waz'UP integrates advanced AI algorithms to enhance the user experience:",
    "Recommandations personnalisées : Analyse du comportement utilisateur pour suggérer des produits pertinents":
      "Personalized recommendations: Analysis of user behavior to suggest relevant products",
    "Prédiction de demande : Optimisation des stocks basée sur l'apprentissage automatique":
      "Demand prediction: Inventory optimization based on machine learning",
    "Optimisation des itinéraires : Algorithme intelligent pour les livraisons efficaces":
      "Route optimization: Smart algorithm for efficient deliveries",
    "Détection de fraude : Système ML pour identifier les transactions suspectes":
      "Fraud detection: ML system to identify suspicious transactions",
    "Support client automatisé : Chatbot IA pour répondre aux questions courantes":
      "Automated customer support: AI chatbot to answer common questions",
    "Reconnaissance d'image : Recherche visuelle de produits via la caméra":
      "Image recognition: Visual product search via the camera",
    "Architecture technique": "Technical architecture",
    "Frontend Mobile": "Mobile Frontend",
    "Framework : Flutter 3.x avec Dart": "Framework: Flutter 3.x with Dart",
    "State Management : Riverpod pour une gestion d'état réactive et performante":
      "State Management: Riverpod for reactive, high-performance state management",
    "Navigation : GoRouter pour la navigation déclarative":
      "Navigation: GoRouter for declarative navigation",
    "Animations : Animations natives Flutter fluides et performantes":
      "Animations: Smooth, high-performance native Flutter animations",
    "UI/UX : Material Design 3 avec thème personnalisé cohérent":
      "UI/UX: Material Design 3 with a consistent custom theme",
    "Backend & Services": "Backend & Services",
    "BaaS : Firebase (Authentication, Firestore, Cloud Functions, Storage)":
      "BaaS: Firebase (Authentication, Firestore, Cloud Functions, Storage)",
    "API REST : Node.js avec Express pour les services métier":
      "REST API: Node.js with Express for business services",
    "Base de données : Firestore (NoSQL) + PostgreSQL pour les transactions":
      "Database: Firestore (NoSQL) + PostgreSQL for transactions",
    "Paiement : Intégration Stripe et opérateurs Mobile Money locaux":
      "Payments: Stripe integration and local Mobile Money operators",
    "Géolocalisation : Google Maps API avec optimisation d'itinéraires":
      "Geolocation: Google Maps API with route optimization",
    "Notifications : Firebase Cloud Messaging (FCM) multi-plateforme":
      "Notifications: Firebase Cloud Messaging (FCM) cross-platform",
    "Intelligence Artificielle": "Artificial Intelligence",
    "ML Kit : Modèles TensorFlow Lite embarqués pour inférence locale":
      "ML Kit: Embedded TensorFlow Lite models for on-device inference",
    "Cloud ML : Google Cloud AI Platform pour modèles complexes":
      "Cloud ML: Google Cloud AI Platform for complex models",
    "Vision : ML Kit Vision API pour reconnaissance d'images":
      "Vision: ML Kit Vision API for image recognition",
    "Design & Expérience utilisateur": "Design & User Experience",
    "L'interface de Waz'UP a été conçue selon les principes du Product Design moderne :":
      "Waz'UP's interface was designed according to modern Product Design principles:",
    "Design System cohérent : Composants réutilisables avec guidelines strictes":
      "Consistent Design System: Reusable components with strict guidelines",
    "Accessibilité : Conformité WCAG 2.1 Level AA pour tous les utilisateurs":
      "Accessibility: WCAG 2.1 Level AA compliance for all users",
    "Performance : Temps de chargement < 2 secondes, animations à 60 FPS":
      "Performance: Load times < 2 seconds, animations at 60 FPS",
    "Mode sombre : Thème sombre complet pour confort visuel":
      "Dark mode: Complete dark theme for visual comfort",
    "Multilingue : Support français et anglais avec localisation complète":
      "Multilingual: French and English support with full localization",
    "Responsive : Adaptation automatique tablettes et tous formats d'écrans":
      "Responsive: Automatic adaptation for tablets and all screen sizes",
    "Sécurité & Confidentialité": "Security & Privacy",
    "Authentification multi-facteurs (2FA) avec biométrie":
      "Multi-factor authentication (2FA) with biometrics",
    "Chiffrement end-to-end pour les messages et données sensibles":
      "End-to-end encryption for messages and sensitive data",
    "Conformité RGPD avec consentement explicite utilisateur":
      "GDPR compliance with explicit user consent",
    "Système de permissions granulaires pour accès données":
      "Granular permission system for data access",
    "Audit de sécurité régulier et tests de pénétration":
      "Regular security audits and penetration tests",
    "Stockage sécurisé des tokens avec FlutterSecureStorage":
      "Secure token storage with FlutterSecureStorage",
    "Défis techniques relevés": "Technical challenges",
    "Performance : Optimisation pour fonctionnement fluide même sur appareils entrée de gamme":
      "Performance: Optimization for smooth operation even on entry-level devices",
    "Offline-first : Fonctionnement en mode hors ligne avec synchronisation automatique":
      "Offline-first: Offline operation with automatic synchronization",
    "Scalabilité : Architecture microservices pour supporter forte croissance utilisateurs":
      "Scalability: Microservices architecture to support strong user growth",
    "Temps réel : WebSocket et Firebase pour suivi livraison instantané":
      "Real-time: WebSocket and Firebase for instant delivery tracking",
    "Intégration complexe : Coordination de 3 services distincts en une expérience unifiée":
      "Complex integration: Coordination of 3 distinct services into a unified experience",
    "Résultats & Impact": "Results & Impact",
    "Application publiée sur App Store et Google Play Store":
      "App published on the App Store and Google Play Store",
    "Interface utilisateur primée pour sa fluidité et intuitivité":
      "Award-winning user interface for its fluidity and intuitiveness",
    "Taux de satisfaction utilisateur > 4.5/5 étoiles":
      "User satisfaction rate > 4.5/5 stars",
    "Temps de chargement moyen réduit de 60% vs solutions concurrentes":
      "Average load time reduced by 60% vs. competing solutions",
    "Conversion utilisateur augmentée grâce aux recommandations IA":
      "User conversion increased thanks to AI recommendations",
    "Technologies utilisées": "Technologies used",
    "Contact pour ce type de projet": "Contact for this type of project",
    "Intéressé par le développement d'une super-app ou d'une application mobile similaire ? N'hésitez pas à me contacter pour discuter de votre projet.":
      "Interested in developing a super-app or a similar mobile application? Feel free to contact me to discuss your project.",

    "Projet Booki | NGOUBADJAMBO Richard":
      "Booki Project | NGOUBADJAMBO Richard",
    "Booki - Plateforme de réservation d'hébergements et d'activités. Interface responsive, recherche avancée, filtres intégrés et design épuré.":
      "Booki - Accommodation and activities booking platform. Responsive interface, advanced search, built-in filters, and clean design.",
    "Booki, Réservation hébergement, Plateforme touristique, HTML CSS, Responsive design, NGOUBADJAMBO Richard":
      "Booki, Accommodation booking, Tourism platform, HTML CSS, Responsive design, NGOUBADJAMBO Richard",
    "Plateforme de réservation d'hébergements et d'activités avec interface responsive.":
      "Accommodation and activities booking platform with responsive interface.",
    "Projet Booki": "Booki Project",
    "Prototype Responsive de Réservation d'Hôtels":
      "Responsive Hotel Booking Prototype",
    Retour: "Back",
    "Vue d'ensemble": "Overview",
    "Prototype d'interface de réservation d'hébergements touristiques (hôtels et gîtes). Design moderne et 100% responsive pour une expérience utilisateur optimale sur tous les appareils.":
      "Interface prototype for booking tourist accommodations (hotels and guesthouses). Modern and 100% responsive design for an optimal user experience on all devices.",
    Fonctionnalités: "Features",
    "Interface de recherche d'hébergements avec filtres":
      "Accommodation search interface with filters",
    "Affichage des hébergements populaires et activités":
      "Display of popular accommodations and activities",
    "Design 100% responsive (mobile, tablette, desktop)":
      "100% responsive design (mobile, tablet, desktop)",
    "Utilisation avancée de Flexbox pour layouts":
      "Advanced use of Flexbox for layouts",
    "Code sémantique et accessible": "Semantic and accessible code",
    "Optimisé pour la performance": "Optimized for performance",
    "Voir le Projet": "View the Project",
    "Explorez le prototype responsif de réservation d'hébergements Booki.":
      "Explore the responsive Booki accommodation booking prototype.",
    "Visiter Booki": "Visit Booki",
    "Me contacter": "Contact me",

    "M.G.N CodeWave - Studio Digital | NGOUBADJAMBO Richard":
      "M.G.N CodeWave - Digital Studio | NGOUBADJAMBO Richard",
    "M.G.N CodeWave - Studio digital spécialisé dans la création d'écosystèmes web et mobile. Solutions sur mesure avec design moderne et technologie de pointe.":
      "M.G.N CodeWave - Digital studio specialized in creating web and mobile ecosystems. Tailor-made solutions with modern design and cutting-edge technology.",
    "Studio digital, CodeWave, Développement web, Applications mobiles, Écosystèmes digitaux, NGOUBADJAMBO Richard":
      "Digital studio, CodeWave, Web development, Mobile applications, Digital ecosystems, NGOUBADJAMBO Richard",
    "Studio digital créant des écosystèmes web et mobile avec design moderne et technologies de pointe.":
      "Digital studio creating web and mobile ecosystems with modern design and cutting-edge technologies.",
    "Studio Digital - Écosystèmes Web & Mobile":
      "Digital Studio - Web & Mobile Ecosystems",
    "M.G.N CodeWave est un studio digital qui conçoit et opère des écosystèmes web & mobile complets : design system, MVP sur-mesure et accélération produit pour PME et institutions.":
      "M.G.N CodeWave is a digital studio that designs and operates complete web & mobile ecosystems: design systems, bespoke MVPs, and product acceleration for SMEs and institutions.",
    "Services Offerts": "Services Offered",
    "Sites vitrines professionnels (100 000 FCFA)":
      "Professional showcase websites (100,000 FCFA)",
    "Plateformes e-commerce complètes (300 000 FCFA)":
      "Full e-commerce platforms (300,000 FCFA)",
    "Blogs et portfolios (80 000 FCFA)": "Blogs and portfolios (80,000 FCFA)",
    "Applications mobiles Flutter cross-platform":
      "Cross-platform Flutter mobile apps",
    "Consulting technique et accompagnement":
      "Technical consulting and support",
    "Approche Méthodologique": "Methodological Approach",
    "Discovery : Cadrage stratégique et définition du besoin":
      "Discovery: Strategic framing and needs definition",
    "Design System : Création de l'identité visuelle cohérente":
      "Design System: Creation of a consistent visual identity",
    "Delivery Agile : Développement itératif avec feedback continu":
      "Agile Delivery: Iterative development with continuous feedback",
    "Support : Maintenance et évolutions post-lancement":
      "Support: Post-launch maintenance and enhancements",
    "Technologies Maîtrisées": "Mastered Technologies",
    "Découvrez la plateforme de design system et solutions sur-mesure de M.G.N CodeWave.":
      "Discover the design system platform and bespoke solutions from M.G.N CodeWave.",
    "Visiter CodeWave": "Visit CodeWave",
    "Demander un devis": "Request a quote",

    "LMS Platform | NGOUBADJAMBO Richard":
      "LMS Platform | NGOUBADJAMBO Richard",
    "Plateforme LMS complète pour la gestion des prospects. Tableau de bord interactif, suivi détaillé, analyses et rapports pour optimiser les conversions.":
      "Complete LMS platform for lead management. Interactive dashboard, detailed tracking, analytics and reports to optimize conversions.",
    "LMS, Gestion prospects, CRM, Tableau de bord, Analytics, Lead Management, NGOUBADJAMBO Richard":
      "LMS, Lead management, CRM, Dashboard, Analytics, Lead Management, NGOUBADJAMBO Richard",
    "Plateforme LMS pour la gestion des prospects avec tableau de bord interactif et analytics.":
      "LMS platform for lead management with interactive dashboard and analytics.",
    "Plateforme de Gestion des Prospects": "Lead Management Platform",
    "Plateforme complète de gestion des prospects (Leads Management System) avec tableau de bord analytique, suivi du pipeline commercial et automatisation du marketing.":
      "Comprehensive lead management platform (Leads Management System) with analytics dashboard, sales pipeline tracking and marketing automation.",
    "Tableau de bord avec KPIs en temps réel": "Dashboard with real-time KPIs",
    "Gestion complète du pipeline commercial": "Full sales pipeline management",
    "Scoring automatique des prospects": "Automatic lead scoring",
    "Suivi des interactions et historique": "Interaction tracking and history",
    "Automatisation des campagnes email": "Email campaign automation",
    "Rapports et analytics avancés": "Advanced reports and analytics",
    "Intégration formulaires et webhooks": "Forms and webhooks integration",
    "Notifications en temps réel": "Real-time notifications",
    "Accédez au tableau de bord de gestion des prospects LMS Platform.":
      "Access the LMS Platform lead management dashboard.",
    "Accéder au Dashboard": "Access the Dashboard",

    "Le Bon Waz - Plateforme E-commerce | NGOUBADJAMBO Richard":
      "Le Bon Waz - E-commerce Platform | NGOUBADJAMBO Richard",
    "Plateforme e-commerce multi-services : marketplace, livraison rapide, location d'articles. Interface moderne et intuitive avec paiement sécurisé.":
      "Multi-service e-commerce platform: marketplace, fast delivery, item rental. Modern, intuitive interface with secure payment.",
    "E-commerce, Marketplace, Livraison, Location, Le Bon Waz, Plateforme digitale, NGOUBADJAMBO Richard":
      "E-commerce, Marketplace, Delivery, Rental, Le Bon Waz, Digital platform, NGOUBADJAMBO Richard",
    "Plateforme e-commerce multi-services : marketplace, livraison rapide et location d'articles.":
      "Multi-service e-commerce platform: marketplace, fast delivery and item rental.",
    "Plateforme E-commerce avec Catalogue Dynamique":
      "E-commerce Platform with Dynamic Catalog",
    "Le Bon Waz est une plateforme de vente en ligne complète avec un catalogue dynamique de produits et un back-office de gestion des commandes. La solution permet aux commerçants de gérer facilement leur boutique en ligne.":
      "Le Bon Waz is a complete online sales platform with a dynamic product catalog and order management back-office. The solution allows merchants to easily manage their online store.",
    "Catalogue produits avec recherche et filtres avancés":
      "Product catalog with advanced search and filters",
    "Panier d'achat avec gestion des quantités":
      "Shopping cart with quantity management",
    "Système de paiement sécurisé via Stripe":
      "Secure payment system via Stripe",
    "Back-office de gestion des commandes": "Order management back-office",
    "Gestion des stocks en temps réel": "Real-time inventory management",
    "Interface administrateur intuitive": "Intuitive admin interface",
    Technologies: "Technologies",
    "Frontend : HTML5, CSS3, Bootstrap pour le responsive":
      "Frontend: HTML5, CSS3, Bootstrap for responsive design",
    "Paiement : Intégration Stripe Payment Gateway":
      "Payment: Stripe Payment Gateway integration",
    "Backend : PHP avec MySQL pour la gestion données":
      "Backend: PHP with MySQL for data management",
    "UI Kit : Design system cohérent et moderne":
      "UI Kit: Consistent, modern design system",
    "Explorez la plateforme e-commerce Le Bon Waz avec son catalogue complet.":
      "Explore the Le Bon Waz e-commerce platform with its full catalog.",
    "Visiter Le Bon Waz": "Visit Le Bon Waz",

    "Lampe À Mes Pieds | NGOUBADJAMBO Richard":
      "Lampe À Mes Pieds | NGOUBADJAMBO Richard",
    "Site e-commerce moderne pour Édition Lampe À Mes Pieds. Vente de livres spirituels avec panier d'achat, paiement sécurisé et gestion de commandes.":
      "Modern e-commerce site for Édition Lampe À Mes Pieds. Spiritual book sales with shopping cart, secure payment and order management.",
    "E-commerce, Livres spirituels, Lampe À Mes Pieds, Boutique en ligne, Édition religieuse, NGOUBADJAMBO Richard":
      "E-commerce, Spiritual books, Lampe À Mes Pieds, Online store, Religious publishing, NGOUBADJAMBO Richard",
    "Site e-commerce pour Édition Lampe À Mes Pieds - Livres spirituels en ligne.":
      "E-commerce site for Édition Lampe À Mes Pieds - Online spiritual books.",
    "Présentation Éditoriale avec Téléchargement":
      "Editorial Showcase with Downloads",
    "Site éditorial élégant pour présenter des collections littéraires avec modules de téléchargement et espace presse. L'accent est mis sur l'accessibilité et l'expérience de lecture.":
      "Elegant editorial site to present literary collections with download modules and a press area. The focus is on accessibility and the reading experience.",
    "Galerie de collections avec présentations visuelles":
      "Collection gallery with visual presentations",
    "Module de téléchargement de contenu numérique":
      "Digital content download module",
    "Espace presse avec kit média téléchargeable":
      "Press area with downloadable media kit",
    "Design responsive optimisé pour la lecture":
      "Responsive design optimized for reading",
    "Conformité accessibilité WCAG 2.1": "WCAG 2.1 accessibility compliance",
    Accessibilité: "Accessibility",
    "Système de newsletter intégré": "Integrated newsletter system",
    "Découvrez le site éditorial Lampe À Mes Pieds avec accès aux téléchargements.":
      "Discover the Lampe À Mes Pieds editorial site with access to downloads.",
    "Visiter Lampe À Mes Pieds": "Visit Lampe À Mes Pieds",

    "H2P Group - Écosystème Digital Complet | NGOUBADJAMBO Richard":
      "H2P Group - Complete Digital Ecosystem | NGOUBADJAMBO Richard",
    "Ecosystème digital complet pour un cabinet de coaching : branding, site vitrine et tunnel de prise de rendez-vous.":
      "Complete digital ecosystem for a coaching firm: branding, showcase site and appointment funnel.",
    "H2P Group, Écosystème digital, Branding, Site vitrine, Coaching, Calendly, NGOUBADJAMBO Richard":
      "H2P Group, Digital ecosystem, Branding, Showcase site, Coaching, Calendly, NGOUBADJAMBO Richard",
    "Écosystème digital complet : branding, site vitrine, tunnel de rendez-vous pour cabinet de coaching.":
      "Complete digital ecosystem: branding, showcase site, appointment funnel for a coaching firm.",
    "Écosystème Digital Complet - Cabinet de Coaching":
      "Complete Digital Ecosystem - Coaching Firm",
    "H2P Group est un projet d'envergure visant à créer un écosystème digital complet pour un cabinet de coaching professionnel. Ce projet englobe la création d'une identité visuelle forte, le développement d'un site vitrine moderne, et la mise en place d'un tunnel de conversion optimisé pour la prise de rendez-vous.":
      "H2P Group is a large-scale project aiming to create a complete digital ecosystem for a professional coaching firm. It includes creating a strong visual identity, developing a modern showcase site, and setting up an optimized appointment conversion funnel.",
    "est un projet d'envergure visant à créer un écosystème digital complet pour un cabinet de coaching professionnel. Ce projet englobe la création d'une identité visuelle forte, le développement d'un site vitrine moderne, et la mise en place d'un tunnel de conversion optimisé pour la prise de rendez-vous.":
      "is a large-scale project aiming to create a complete digital ecosystem for a professional coaching firm. It includes creating a strong visual identity, developing a modern showcase site, and setting up an optimized appointment conversion funnel.",
    "L'objectif principal était de transformer la présence digitale du cabinet en un outil puissant de génération de leads qualifiés, tout en reflétant les valeurs de professionnalisme et d'excellence du cabinet H2P Group.":
      "The main goal was to transform the firm's digital presence into a powerful qualified-lead generation tool, while reflecting H2P Group's values of professionalism and excellence.",
    "Statistiques du projet": "Project statistics",
    "Phases du projet": "Project phases",
    "Identité complète": "Complete identity",
    Intégration: "Integration",
    "Phase 1 : Identité Visuelle (Branding)":
      "Phase 1: Visual Identity (Branding)",
    "🎨 Création du Logo": "🎨 Logo Creation",
    "Conception d'un logo moderne et professionnel reflétant l'expertise du cabinet":
      "Design of a modern, professional logo reflecting the firm's expertise",
    "Déclinaisons du logo (couleur, noir & blanc, monochrome)":
      "Logo variations (color, black & white, monochrome)",
    "Création d'un guide d'utilisation du logo avec espaces de respiration":
      "Creation of a logo usage guide with clear space",
    "Adaptations pour différents supports (print, web, réseaux sociaux)":
      "Adaptations for different media (print, web, social networks)",
    "🎨 Charte Graphique": "🎨 Brand Guidelines",
    "Palette de couleurs : Sélection de couleurs transmettant confiance et professionnalisme":
      "Color palette: Selection of colors conveying trust and professionalism",
    "Typographie : Choix de polices corporate lisibles et élégantes":
      "Typography: Choice of readable, elegant corporate fonts",
    "Iconographie : Bibliothèque d'icônes cohérente avec l'identité":
      "Iconography: Icon library consistent with the identity",
    "Style photographique : Guidelines pour photos d'équipe et contenus visuels":
      "Photographic style: Guidelines for team photos and visual content",
    "Supports de communication : Templates cartes de visite, présentations, documents":
      "Communication materials: Templates for business cards, presentations, documents",
    "📚 Brand Book": "📚 Brand Book",
    "Document complet regroupant toutes les règles d'utilisation de la marque":
      "Complete document gathering all brand usage rules",
    "Valeurs de la marque et positionnement": "Brand values and positioning",
    "Tone of voice et style éditorial": "Tone of voice and editorial style",
    "Exemples d'applications correctes et incorrectes":
      "Examples of correct and incorrect usage",
    "Phase 2 : Site Vitrine": "Phase 2: Showcase Site",
    "🌐 Architecture & Pages": "🌐 Architecture & Pages",
    "Page d'accueil : Hero section impactante avec proposition de valeur claire":
      "Homepage: Impactful hero section with clear value proposition",
    "À propos : Présentation du cabinet, de l'équipe et des valeurs":
      "About: Presentation of the firm, team, and values",
    "Services : Catalogue détaillé des prestations de coaching":
      "Services: Detailed catalog of coaching services",
    "Témoignages : Section social proof avec avis clients authentiques":
      "Testimonials: Social proof section with authentic client reviews",
    "Blog : Articles d'expertise et ressources pour prospects":
      "Blog: Expert articles and resources for prospects",
    "Contact : Formulaire de contact et informations pratiques":
      "Contact: Contact form and practical information",
    "💡 Fonctionnalités Clés": "💡 Key Features",
    "Design responsive adapté à tous les écrans (mobile, tablette, desktop)":
      "Responsive design adapted to all screens (mobile, tablet, desktop)",
    "Navigation intuitive avec menu sticky pour accès rapide":
      "Intuitive navigation with sticky menu for quick access",
    "Animations subtiles et professionnelles pour l'engagement":
      "Subtle, professional animations for engagement",
    "Optimisation SEO complète (balises meta, structure H1-H6, sitemap)":
      "Complete SEO optimization (meta tags, H1-H6 structure, sitemap)",
    "Performance optimale (temps de chargement < 3 secondes)":
      "Optimal performance (load time < 3 seconds)",
    "Accessibilité WCAG 2.1 Level AA": "WCAG 2.1 Level AA accessibility",
    "🎯 UX/UI Design": "🎯 UX/UI Design",
    "Wireframes et maquettes haute fidélité sur Figma":
      "Wireframes and high-fidelity mockups on Figma",
    "Tests utilisateurs pour valider l'ergonomie":
      "User tests to validate usability",
    "Design system cohérent avec la charte graphique":
      "Design system consistent with the brand guidelines",
    "Call-to-actions stratégiquement placés pour conversions":
      "Strategically placed call-to-actions for conversions",
    "Phase 3 : Tunnel de Prise de Rendez-vous":
      "Phase 3: Appointment Booking Funnel",
    "📅 Système de Réservation": "📅 Booking System",
    "Étape 1 : Sélection du type de coaching (individuel, entreprise, groupe)":
      "Step 1: Select coaching type (individual, corporate, group)",
    "Étape 2 : Choix du coach selon disponibilités et spécialités":
      "Step 2: Choose coach based on availability and specialties",
    "Étape 3 : Sélection date/heure avec calendrier interactif":
      "Step 3: Select date/time with an interactive calendar",
    "Étape 4 : Formulaire d'informations client (nom, email, téléphone, besoin)":
      "Step 4: Client information form (name, email, phone, need)",
    "Étape 5 : Confirmation et récapitulatif du rendez-vous":
      "Step 5: Confirmation and appointment summary",
    "🔗 Intégration CRM": "🔗 CRM Integration",
    "Synchronisation automatique des rendez-vous vers le CRM":
      "Automatic synchronization of appointments to the CRM",
    "Création automatique de fiche prospect dans la base données":
      "Automatic creation of lead records in the database",
    "Envoi d'emails de confirmation automatiques":
      "Automatic confirmation email sending",
    "Rappels par SMS 24h avant le rendez-vous":
      "SMS reminders 24h before the appointment",
    "Workflow d'automatisation pour le suivi post-rendez-vous":
      "Automation workflow for post-appointment follow-up",
    "Tableau de bord pour visualiser les réservations":
      "Dashboard to visualize bookings",
    "⚙️ Fonctionnalités Avancées": "⚙️ Advanced Features",
    "Gestion des disponibilités des coachs en temps réel":
      "Real-time management of coach availability",
    "Prévention des double-réservations": "Prevention of double bookings",
    "Option de rendez-vous en visio ou en présentiel":
      "Option for video or in-person appointments",
    "Système d'annulation/report avec délai configurable":
      "Cancellation/rescheduling system with configurable delay",
    "Intégration Google Calendar pour les coachs":
      "Google Calendar integration for coaches",
    "Technologies & Outils Utilisés": "Technologies & Tools Used",
    "Design & Prototypage": "Design & Prototyping",
    "Figma : Création des maquettes et prototypes interactifs":
      "Figma: Creation of mockups and interactive prototypes",
    "Adobe Illustrator : Design du logo et éléments vectoriels":
      "Adobe Illustrator: Logo design and vector elements",
    "Adobe Photoshop : Retouche photos et assets graphiques":
      "Adobe Photoshop: Photo retouching and graphic assets",
    "Développement Frontend": "Frontend Development",
    "HTML5 : Structure sémantique et accessible":
      "HTML5: Semantic and accessible structure",
    "CSS3 : Styles modernes avec Flexbox et Grid":
      "CSS3: Modern styles with Flexbox and Grid",
    "JavaScript : Interactions dynamiques et validation formulaires":
      "JavaScript: Dynamic interactions and form validation",
    "GSAP : Animations fluides et professionnelles":
      "GSAP: Smooth, professional animations",
    "Backend & CRM": "Backend & CRM",
    "Node.js : API pour gestion des rendez-vous":
      "Node.js: API for appointment management",
    "Express.js : Framework serveur léger et performant":
      "Express.js: Lightweight, high-performance server framework",
    "MongoDB : Base de données NoSQL pour flexibilité":
      "MongoDB: NoSQL database for flexibility",
    "HubSpot CRM : Intégration CRM pour gestion leads":
      "HubSpot CRM: CRM integration for lead management",
    "Twilio : Envoi de SMS automatiques": "Twilio: Automated SMS sending",
    "SendGrid : Service email transactionnel":
      "SendGrid: Transactional email service",
    "Optimisations & Performance": "Optimizations & Performance",
    "🚀 SEO On-Page": "🚀 On-Page SEO",
    "Recherche de mots-clés stratégiques du secteur coaching":
      "Strategic keyword research for the coaching sector",
    "Optimisation des balises title et meta descriptions":
      "Optimization of title tags and meta descriptions",
    "Structure H1-H6 optimisée pour le référencement":
      "H1-H6 structure optimized for SEO",
    "URLs sémantiques et parlantes": "Semantic, readable URLs",
    "Schema.org markup pour rich snippets Google":
      "Schema.org markup for Google rich snippets",
    "Sitemap XML et fichier robots.txt": "XML sitemap and robots.txt file",
    "⚡ Performance Web": "⚡ Web Performance",
    "Compression des images avec WebP et formats adaptatifs":
      "Image compression with WebP and adaptive formats",
    "Minification CSS et JavaScript": "CSS and JavaScript minification",
    "Lazy loading des images hors viewport":
      "Lazy loading of off-viewport images",
    "Mise en cache navigateur et CDN": "Browser caching and CDN",
    "Score Lighthouse > 90/100 sur toutes les métriques":
      "Lighthouse score > 90/100 on all metrics",
    "90/100 sur toutes les métriques": "90/100 on all metrics",
    "📊 Analytics & Tracking": "📊 Analytics & Tracking",
    "Google Analytics 4 pour suivi du trafic":
      "Google Analytics 4 for traffic tracking",
    "Heatmaps Hotjar pour analyser comportements utilisateurs":
      "Hotjar heatmaps to analyze user behavior",
    "Suivi des conversions (rendez-vous pris)":
      "Conversion tracking (appointments booked)",
    "A/B testing sur les CTA pour optimisation continue":
      "A/B testing on CTAs for continuous optimization",
    "Résultats & Impact Business": "Results & Business Impact",
    "+250% d'augmentation du trafic organique en 6 mois":
      "+250% increase in organic traffic in 6 months",
    "+180% de taux de conversion visiteurs → leads qualifiés":
      "+180% visitor-to-qualified-lead conversion rate",
    "70% de réduction du temps de prise de rendez-vous":
      "70% reduction in appointment booking time",
    "95% de satisfaction client sur l'interface de réservation":
      "95% client satisfaction on the booking interface",
    "-60% de charge administrative grâce à l'automatisation":
      "-60% administrative workload thanks to automation",
    "Positionnement dans le top 3 Google pour mots-clés stratégiques":
      "Top 3 Google ranking for strategic keywords",
    "Livrables du Projet": "Project Deliverables",
    "✅ Logo complet avec toutes les déclinaisons":
      "✅ Complete logo with all variations",
    "✅ Charte graphique complète (PDF 50+ pages)":
      "✅ Complete brand guidelines (50+ page PDF)",
    "✅ Brand book avec guidelines d'utilisation":
      "✅ Brand book with usage guidelines",
    "✅ Site vitrine responsive 6 pages": "✅ 6-page responsive showcase site",
    "✅ Système de réservation en ligne fonctionnel":
      "✅ Functional online booking system",
    "✅ Intégration CRM complète et documentée":
      "✅ Complete and documented CRM integration",
    "✅ Documentation technique et guide d'administration":
      "✅ Technical documentation and admin guide",
    "✅ Formation de l'équipe à l'utilisation du back-office":
      "✅ Team training on back-office usage",
    "Contact pour ce type de projet": "Contact for this type of project",
    "Intéressé par la création d'un écosystème digital complet pour votre entreprise ? N'hésitez pas à me contacter pour discuter de votre projet.":
      "Interested in creating a complete digital ecosystem for your company? Feel free to contact me to discuss your project.",

    "Grâce Déployée | NGOUBADJAMBO Richard":
      "Grâce Déployée | NGOUBADJAMBO Richard",
    "Site web moderne pour Grâce Déployée, organisation chrétienne. Design épuré avec présentation des services, événements et moyens de contact pour la communauté.":
      "Modern website for Grâce Déployée, a Christian organization. Clean design presenting services, events and contact channels for the community.",
    "Grâce Déployée, Site religieux, Organisation chrétienne, Événements spirituels, NGOUBADJAMBO Richard":
      "Grâce Déployée, Religious site, Christian organization, Spiritual events, NGOUBADJAMBO Richard",
    "Site web moderne pour organisation chrétienne Grâce Déployée.":
      "Modern website for the Christian organization Grâce Déployée.",
    "Site Communautaire pour Église Locale": "Community Site for Local Church",
    "Site communautaire pour une église locale avec agenda des événements, sermons en ligne et espace bénévoles. Une plateforme complète pour renforcer la communauté.":
      "Community site for a local church with events calendar, online sermons and volunteer area. A complete platform to strengthen the community.",
    "Agenda dynamique des événements et célébrations":
      "Dynamic calendar of events and celebrations",
    "Bibliothèque de sermons audio et vidéo": "Audio and video sermon library",
    "Espace bénévoles avec inscription en ligne":
      "Volunteer area with online registration",
    "Galerie photo des événements passés": "Photo gallery of past events",
    "Formulaire de contact et demandes de prière":
      "Contact form and prayer requests",
    "Newsletter et notifications des activités":
      "Newsletter and activity notifications",
    "Découvrez le site communautaire Grâce Déployée de l'église locale.":
      "Discover the Grâce Déployée community site for the local church.",
    "Visiter Grâce Déployée": "Visit Grâce Déployée",

    "English Fun Club | NGOUBADJAMBO Richard":
      "English Fun Club | NGOUBADJAMBO Richard",
    "Plateforme e-learning gamifiée pour l'apprentissage de l'anglais. Parcours progressifs, exercices interactifs, système de badges et suivi personnalisé pour adolescents.":
      "Gamified e-learning platform for learning English. Progressive paths, interactive exercises, badge system and personalized tracking for teens.",
    "E-learning anglais, Plateforme éducative, Gamification, English Fun Club, Apprentissage interactif, NGOUBADJAMBO Richard":
      "English e-learning, Educational platform, Gamification, English Fun Club, Interactive learning, NGOUBADJAMBO Richard",
    "Plateforme e-learning gamifiée pour l'apprentissage de l'anglais chez les adolescents.":
      "Gamified e-learning platform for English learning among teens.",
    "Plateforme E-learning Gamifiée": "Gamified E-learning Platform",
    "Plateforme e-learning gamifiée pour faciliter l'apprentissage de l'anglais chez les adolescents. L'application combine pédagogie et divertissement pour maintenir l'engagement des apprenants.":
      "Gamified e-learning platform to facilitate English learning among teens. The app combines pedagogy and entertainment to keep learners engaged.",
    "Parcours d'apprentissage progressif par niveau":
      "Progressive learning paths by level",
    "Exercices interactifs avec feedback immédiat":
      "Interactive exercises with immediate feedback",
    "Système de points et badges pour motivation":
      "Points and badges system for motivation",
    "Quiz et jeux éducatifs variés": "Various quizzes and educational games",
    "Suivi de progression personnalisé": "Personalized progress tracking",
    "Interface colorée et attractive pour jeunes":
      "Colorful, attractive interface for young users",
    "Accédez à la plateforme d'apprentissage gamifiée English Fun Club.":
      "Access the English Fun Club gamified learning platform.",
    "Visiter English Fun Club": "Visit English Fun Club",

    "Découvre qui tu es | NGOUBADJAMBO Richard":
      "Discover Who You Are | NGOUBADJAMBO Richard",
    "Application de tests de personnalité interactifs. Découvrez qui vous êtes à travers des questionnaires personnalisés avec analyse détaillée et résultats visuels.":
      "Interactive personality test app. Discover who you are through personalized questionnaires with detailed analysis and visual results.",
    "Test personnalité, Quiz psychologique, Découvre qui tu es, Analyse personnalité, NGOUBADJAMBO Richard":
      "Personality test, Psychological quiz, Discover who you are, Personality analysis, NGOUBADJAMBO Richard",
    "Tests de personnalité interactifs avec analyse détaillée et résultats personnalisés.":
      "Interactive personality tests with detailed analysis and personalized results.",
    "Tests de Personnalité Interactifs": "Interactive Personality Tests",
    "Tests Personnalité": "Personality Tests",
    "Expérience interactive basée sur des questionnaires pour révéler les profils de personnalité. L'application propose une analyse détaillée et personnalisée basée sur les réponses des utilisateurs.":
      "Interactive experience based on questionnaires to reveal personality profiles. The application provides a detailed, personalized analysis based on users' responses.",
    "Questionnaires personnalisés avec choix multiples":
      "Personalized questionnaires with multiple-choice questions",
    "Algorithme d'analyse de personnalité": "Personality analysis algorithm",
    "Résultats détaillés avec graphiques visuels":
      "Detailed results with visual charts",
    "Partage des résultats sur réseaux sociaux":
      "Sharing results on social networks",
    "Base de données de profils psychologiques":
      "Database of psychological profiles",
    "Interface intuitive et engageante": "Intuitive and engaging interface",
    "Explorez les tests de personnalité interactifs Découvre qui tu es.":
      "Explore the interactive personality tests Discover Who You Are.",
    "Visiter Découvre qui tu es": "Visit Discover Who You Are",

    "API Airtel Money | NGOUBADJAMBO Richard":
      "Airtel Money API | NGOUBADJAMBO Richard",
    "Documentation technique complète pour l'intégration de l'API Airtel Money. Guide détaillé avec exemples de code, endpoints, authentification OAuth2 et gestion des transactions.":
      "Complete technical documentation for integrating the Airtel Money API. Detailed guide with code examples, endpoints, OAuth2 authentication and transaction management.",
    "API Airtel Money, Documentation API, OAuth2, Paiement mobile, Intégration, NGOUBADJAMBO Richard":
      "Airtel Money API, API documentation, OAuth2, Mobile payment, Integration, NGOUBADJAMBO Richard",
    "Documentation technique complète pour l'intégration de l'API Airtel Money avec exemples de code et bonnes pratiques.":
      "Complete technical documentation for integrating the Airtel Money API with code examples and best practices.",
    "Documentation Technique Complète": "Complete Technical Documentation",
    "Documentation technique complète pour l'intégration de l'API Airtel Money. Guide détaillé avec exemples de code, endpoints, authentification et gestion des transactions de paiement mobile.":
      "Complete technical documentation for integrating the Airtel Money API. Detailed guide with code examples, endpoints, authentication and mobile payment transaction management.",
    Contenu: "Contents",
    "Guide d'authentification OAuth2": "OAuth2 authentication guide",
    "Documentation complète des endpoints": "Complete endpoints documentation",
    "Exemples de requêtes et réponses": "Request and response examples",
    "Gestion des webhooks et callbacks": "Webhook and callback management",
    "Codes d'erreur et troubleshooting": "Error codes and troubleshooting",
    "Bonnes pratiques de sécurité": "Security best practices",
    "Environnements de test et production": "Test and production environments",
    "Consultez la documentation complète de l'API Airtel Money.":
      "See the complete Airtel Money API documentation.",
    "Voir la Documentation": "View Documentation",
  };

  const normalizedTranslations = Object.fromEntries(
    Object.entries(TRANSLATIONS_EN).map(([key, value]) => [
      normalize(key),
      value,
    ]),
  );

  const reverseTranslations = Object.fromEntries(
    Object.entries(normalizedTranslations).map(([key, value]) => [
      normalize(value),
      key,
    ]),
  );

  const translations = {
    en: normalizedTranslations,
    fr: reverseTranslations,
  };

  const messages = {
    fr: {
      "error.nameMin": "Le nom doit avoir au moins 2 caractères",
      "error.nameMax": "Le nom ne peut pas dépasser 100 caractères",
      "error.emailInvalid": "Veuillez entrer une adresse email valide",
      "error.emailMax": "Email trop long (max 255 caractères)",
      "error.messageMin": "Le message doit contenir au moins 10 caractères",
      "error.messageMax": "Le message ne peut pas dépasser 5000 caractères",
      "contact.success": "Merci {name} ! Votre message a été envoyé.",
      "error.generic": "Une erreur est survenue. Veuillez réessayer.",
    },
    en: {
      "error.nameMin": "Name must be at least 2 characters",
      "error.nameMax": "Name cannot exceed 100 characters",
      "error.emailInvalid": "Please enter a valid email address",
      "error.emailMax": "Email too long (max 255 characters)",
      "error.messageMin": "Message must be at least 10 characters",
      "error.messageMax": "Message cannot exceed 5000 characters",
      "contact.success": "Thanks {name}! Your message has been sent.",
      "error.generic": "An error occurred. Please try again.",
    },
  };

  const EXCLUDED_TAGS = new Set([
    "SCRIPT",
    "STYLE",
    "NOSCRIPT",
    "CODE",
    "PRE",
    "TEXTAREA",
  ]);
  const TRANSLATABLE_ATTRS = [
    "title",
    "aria-label",
    "placeholder",
    "alt",
    "value",
    "content",
  ];

  const shouldSkipNode = (node) => {
    const parent = node.parentElement;
    if (!parent) return true;
    if (EXCLUDED_TAGS.has(parent.tagName)) return true;
    if (parent.closest("[data-no-translate]")) return true;
    return false;
  };

  const translateTextNodes = (dict) => {
    if (!document.body) return;
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
          if (!normalize(node.nodeValue)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      },
    );

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const normalized = normalize(node.nodeValue);
      let translation = dict[normalized];

      if (!translation) {
        const emojiMatch = normalized.match(/^([^\p{L}\p{N}]+)\s*(.+)$/u);
        if (emojiMatch) {
          const [, prefix, rest] = emojiMatch;
          const restTranslation = dict[normalize(rest)];
          if (restTranslation) {
            translation = `${prefix.trim()} ${restTranslation}`.trim();
          }
        }
      }

      if (!translation && node.previousElementSibling) {
        const previousText = normalize(
          node.previousElementSibling.textContent || "",
        );
        if (previousText) {
          const combined = normalize(`${previousText} ${normalized}`);
          const combinedTranslation = dict[combined];
          if (combinedTranslation) {
            if (
              combined.includes(" : ") &&
              combinedTranslation.includes(" : ")
            ) {
              const [translatedPrefix, ...translatedSuffix] =
                combinedTranslation.split(" : ");
              const suffixText = translatedSuffix.join(" : ").trim();
              const previousTranslation =
                dict[previousText] || translatedPrefix.trim();
              node.previousElementSibling.textContent = previousTranslation;
              translation = `: ${suffixText}`;
            } else {
              translation = combinedTranslation;
            }
          }
        }
      }

      if (!translation) continue;
      const leading = node.nodeValue.match(/^\s*/)[0];
      const trailing = node.nodeValue.match(/\s*$/)[0];
      node.nodeValue = `${leading}${translation}${trailing}`;
    }
  };

  const translateAttributes = (dict) => {
    const selector = TRANSLATABLE_ATTRS.map((attr) => `[${attr}]`).join(",");
    document.querySelectorAll(selector).forEach((el) => {
      if (el.closest("[data-no-translate]")) return;
      TRANSLATABLE_ATTRS.forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        const value = el.getAttribute(attr);
        if (!value) return;
        const normalized = normalize(value);
        const translation = dict[normalized];
        if (!translation) return;
        el.setAttribute(attr, translation);
      });
    });
  };

  const updateTitle = (dict) => {
    const normalized = normalize(document.title || "");
    const translation = dict[normalized];
    if (translation) document.title = translation;
  };

  const updateLanguageToggle = (lang) => {
    const toggle = document.getElementById("languageToggle");
    if (!toggle) return;
    toggle.textContent = lang === "fr" ? "FR" : "EN";
    toggle.setAttribute("data-no-translate", "true");
    if (lang === "fr") {
      toggle.setAttribute("aria-label", "Passer en anglais");
      toggle.setAttribute("title", "Passer en anglais");
    } else {
      toggle.setAttribute("aria-label", "Switch to French");
      toggle.setAttribute("title", "Switch to French");
    }
  };

  const applyLanguage = (lang) => {
    const chosen = SUPPORTED_LANGS.includes(lang) ? lang : "fr";
    const dict = translations[chosen] || {};
    document.documentElement.setAttribute("lang", chosen);
    updateTitle(dict);
    translateAttributes(dict);
    translateTextNodes(dict);
    updateLanguageToggle(chosen);
  };

  const getSavedLanguage = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    const htmlLang = document.documentElement.getAttribute("lang");
    if (htmlLang && SUPPORTED_LANGS.includes(htmlLang)) return htmlLang;
    return "fr";
  };

  const setLanguage = (lang) => {
    const chosen = SUPPORTED_LANGS.includes(lang) ? lang : "fr";
    localStorage.setItem(STORAGE_KEY, chosen);
    applyLanguage(chosen);
  };

  const t = (key, params = {}) => {
    const lang = getSavedLanguage();
    const template = messages[lang]?.[key] || messages.fr?.[key] || key;
    return template.replace(/\{(\w+)\}/g, (_, name) =>
      params[name] !== undefined ? params[name] : `{${name}}`,
    );
  };

  window.i18n = {
    t,
    setLanguage,
    getLanguage: getSavedLanguage,
  };

  document.addEventListener("DOMContentLoaded", () => {
    const currentLang = getSavedLanguage();
    applyLanguage(currentLang);

    const toggle = document.getElementById("languageToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const next = getSavedLanguage() === "fr" ? "en" : "fr";
        setLanguage(next);
      });
    }
  });
})();
