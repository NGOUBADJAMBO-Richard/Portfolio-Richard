(() => {
  const STORAGE_KEY = "portfolio_richard_lang";
  const SUPPORTED_LANGS = ["fr", "en"];

  const messages = {
    fr: {
      "error.nameMin": "Le nom doit avoir au moins 2 caractères",
      "error.nameMax": "Le nom ne peut pas dépasser 100 caractères",
      "error.namePattern":
        "Le nom ne doit contenir que des lettres, espaces, apostrophes ou tirets",
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
      "error.namePattern":
        "Name can only contain letters, spaces, apostrophes, or hyphens",
      "error.emailInvalid": "Please enter a valid email address",
      "error.emailMax": "Email too long (max 255 characters)",
      "error.messageMin": "Message must be at least 10 characters",
      "error.messageMax": "Message cannot exceed 5000 characters",
      "contact.success": "Thanks {name}! Your message has been sent.",
      "error.generic": "An error occurred. Please try again.",
    },
  };

  const dictionary = {
    fr: {
      "brand.role": "Développeur",
      "nav.main": "Navigation principale",
      "nav.backHome": "Retour à l'accueil",
      "nav.toggle": "Basculer le menu de navigation",
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.company": "Entreprise",
      "nav.stats": "Statistiques",
      "nav.skills": "Compétences",
      "nav.journey": "Parcours",
      "nav.portfolio": "Portfolio",
      "nav.services": "Services",
      "nav.contact": "Contact",
      "hero.badge": "Créateur de Solutions Digitales",
      "hero.subtitle": "Ingénieur Informatique & Entrepreneur",
      "hero.description":
        "J'imagine, conçois et lance des produits web & mobile orientés impact.",
      "hero.feature.1": "Développement Rapide",
      "hero.feature.2": "Solutions Sur-mesure",
      "hero.feature.3": "Innovation Constante",
      "hero.cta.primary": "Démarrer un projet",
      "hero.cta.primary.title": "Démarrer un projet avec Richard",
      "hero.cta.secondary": "Voir mes réalisations",
      "hero.cta.secondary.title": "Voir le portfolio et réalisations",
      "hero.scroll.group": "Naviguer vers le portfolio",
      "hero.scroll.text": "Explorez mon travail",
      "hero.scroll.link": "Voir le portfolio",
      "hero.scroll.title": "Descendre vers le portfolio",
      "portfolio.title": "Portfolio",
      "portfolio.subtitle": "Impact en 3 points",
      "portfolio.filters": "Filtres de portfolio",
      "portfolio.filter.all": "Tous",
      "portfolio.filter.all.label": "Afficher tous les projets",
      "portfolio.filter.mobile": "Mobile",
      "portfolio.filter.mobile.label": "Afficher les projets mobiles",
      "portfolio.filter.web": "Web",
      "portfolio.filter.web.label": "Afficher les projets web",
      "portfolio.filter.platform": "Plateformes",
      "portfolio.filter.platform.label": "Afficher les plateformes",
      "portfolio.details": "Voir les détails",
      "portfolio.wazup.p1": "Problème : services éclatés.",
      "portfolio.wazup.p2": "Solution : super-app Flutter.",
      "portfolio.wazup.p3": "Résultat : parcours unifié + rapide.",
      "portfolio.h2p.p1": "Problème : outils dispersés.",
      "portfolio.h2p.p2": "Solution : écosystème digital complet.",
      "portfolio.h2p.p3": "Résultat : pilotage centralisé.",
      "portfolio.mgn.p1": "Problème : time-to-market long.",
      "portfolio.mgn.p2": "Solution : design system + MVP.",
      "portfolio.mgn.p3": "Résultat : livraison accélérée.",
      "portfolio.bonwaz.p1": "Problème : vente sans vitrine digitale.",
      "portfolio.bonwaz.p2": "Solution : catalogue e-commerce structuré.",
      "portfolio.bonwaz.p3": "Résultat : conversion en hausse.",
      "portfolio.lampe.p1": "Problème : contenu peu accessible.",
      "portfolio.lampe.p2": "Solution : site éditorial clair.",
      "portfolio.lampe.p3": "Résultat : lecture et download facilités.",
      "portfolio.efc.p1": "Problème : faible engagement apprenant.",
      "portfolio.efc.p2": "Solution : parcours gamifiés.",
      "portfolio.efc.p3": "Résultat : meilleure rétention.",
      "portfolio.decouvre.p1": "Problème : profiling non structuré.",
      "portfolio.decouvre.p2": "Solution : quiz guidés.",
      "portfolio.decouvre.p3": "Résultat : insights actionnables.",
      "portfolio.grace.p1": "Problème : communication fragmentée.",
      "portfolio.grace.p2": "Solution : hub communautaire.",
      "portfolio.grace.p3": "Résultat : interactions renforcées.",
      "portfolio.lms.p1": "Problème : suivi commercial manuel.",
      "portfolio.lms.p2": "Solution : dashboard React/Firebase.",
      "portfolio.lms.p3": "Résultat : pipeline mieux piloté.",
      "theme.enableDark": "Activer le mode sombre",
      "theme.enableLight": "Activer le mode clair",
      "lang.toggle": "Passer en anglais",
      "lang.code": "FR",
    },
    en: {
      "brand.role": "Developer",
      "nav.main": "Main navigation",
      "nav.backHome": "Back to home",
      "nav.toggle": "Toggle navigation menu",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.company": "Company",
      "nav.stats": "Stats",
      "nav.skills": "Skills",
      "nav.journey": "Journey",
      "nav.portfolio": "Portfolio",
      "nav.services": "Services",
      "nav.contact": "Contact",
      "hero.badge": "Digital Product Builder",
      "hero.subtitle": "Software Engineer & Entrepreneur",
      "hero.description":
        "I design and launch impact-driven web & mobile products.",
      "hero.feature.1": "Fast Delivery",
      "hero.feature.2": "Tailored Solutions",
      "hero.feature.3": "Continuous Innovation",
      "hero.cta.primary": "Start a project",
      "hero.cta.primary.title": "Start a project with Richard",
      "hero.cta.secondary": "See my work",
      "hero.cta.secondary.title": "View portfolio projects",
      "hero.scroll.group": "Navigate to portfolio",
      "hero.scroll.text": "Explore my work",
      "hero.scroll.link": "View portfolio",
      "hero.scroll.title": "Scroll to portfolio",
      "portfolio.title": "Portfolio",
      "portfolio.subtitle": "Impact in 3 points",
      "portfolio.filters": "Portfolio filters",
      "portfolio.filter.all": "All",
      "portfolio.filter.all.label": "Show all projects",
      "portfolio.filter.mobile": "Mobile",
      "portfolio.filter.mobile.label": "Show mobile projects",
      "portfolio.filter.web": "Web",
      "portfolio.filter.web.label": "Show web projects",
      "portfolio.filter.platform": "Platforms",
      "portfolio.filter.platform.label": "Show platform projects",
      "portfolio.details": "View details",
      "portfolio.wazup.p1": "Problem: fragmented services.",
      "portfolio.wazup.p2": "Solution: Flutter super-app.",
      "portfolio.wazup.p3": "Result: faster unified flow.",
      "portfolio.h2p.p1": "Problem: scattered tools.",
      "portfolio.h2p.p2": "Solution: full digital ecosystem.",
      "portfolio.h2p.p3": "Result: centralized operations.",
      "portfolio.mgn.p1": "Problem: long time-to-market.",
      "portfolio.mgn.p2": "Solution: design system + MVP.",
      "portfolio.mgn.p3": "Result: faster releases.",
      "portfolio.bonwaz.p1": "Problem: no digital storefront.",
      "portfolio.bonwaz.p2": "Solution: structured e-commerce catalog.",
      "portfolio.bonwaz.p3": "Result: higher conversion.",
      "portfolio.lampe.p1": "Problem: low content accessibility.",
      "portfolio.lampe.p2": "Solution: clear editorial website.",
      "portfolio.lampe.p3": "Result: smoother reading & downloads.",
      "portfolio.efc.p1": "Problem: low learner engagement.",
      "portfolio.efc.p2": "Solution: gamified learning paths.",
      "portfolio.efc.p3": "Result: better retention.",
      "portfolio.decouvre.p1": "Problem: unstructured profiling.",
      "portfolio.decouvre.p2": "Solution: guided quizzes.",
      "portfolio.decouvre.p3": "Result: actionable insights.",
      "portfolio.grace.p1": "Problem: fragmented community communication.",
      "portfolio.grace.p2": "Solution: community hub.",
      "portfolio.grace.p3": "Result: stronger interactions.",
      "portfolio.lms.p1": "Problem: manual lead tracking.",
      "portfolio.lms.p2": "Solution: React/Firebase dashboard.",
      "portfolio.lms.p3": "Result: clearer pipeline management.",
      "theme.enableDark": "Enable dark mode",
      "theme.enableLight": "Enable light mode",
      "lang.toggle": "Switch to French",
      "lang.code": "EN",
    },
  };

  const safeTranslate = (lang, key) =>
    dictionary[lang]?.[key] ?? dictionary.fr?.[key] ?? key;

  const updateLanguageButton = (lang) => {
    const toggle = document.getElementById("languageToggle");
    if (!toggle) return;

    const nextLang = lang === "fr" ? "en" : "fr";
    toggle.textContent = dictionary[lang]["lang.code"];
    toggle.setAttribute("aria-label", dictionary[nextLang]["lang.toggle"]);
    toggle.setAttribute("title", dictionary[nextLang]["lang.toggle"]);
    toggle.setAttribute("data-no-translate", "true");
  };

  const applyTextTranslations = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (!key) return;
      node.textContent = safeTranslate(lang, key);
    });
  };

  const applyAttributeTranslations = (lang) => {
    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      const definition = node.getAttribute("data-i18n-attr") || "";
      definition
        .split(";")
        .map((chunk) => chunk.trim())
        .filter(Boolean)
        .forEach((mapping) => {
          const [attr, key] = mapping.split(":");
          if (!attr || !key) return;
          node.setAttribute(attr.trim(), safeTranslate(lang, key.trim()));
        });
    });
  };

  const setLanguage = (lang) => {
    const selected = SUPPORTED_LANGS.includes(lang) ? lang : "fr";
    localStorage.setItem(STORAGE_KEY, selected);
    document.documentElement.setAttribute("lang", selected);
    applyTextTranslations(selected);
    applyAttributeTranslations(selected);
    updateLanguageButton(selected);
    window.dispatchEvent(
      new CustomEvent("portfolio:language-changed", {
        detail: { lang: selected },
      }),
    );
  };

  const getLanguage = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

    const htmlLang = document.documentElement.getAttribute("lang");
    if (htmlLang && SUPPORTED_LANGS.includes(htmlLang)) return htmlLang;

    return "fr";
  };

  const t = (key, params = {}) => {
    const lang = getLanguage();
    const template = messages[lang]?.[key] ?? messages.fr?.[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (_, token) =>
      params[token] !== undefined ? String(params[token]) : `{${token}}`,
    );
  };

  window.i18n = {
    t,
    setLanguage,
    getLanguage,
    refresh: () => setLanguage(getLanguage()),
  };

  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(getLanguage());

    const toggle = document.getElementById("languageToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const next = getLanguage() === "fr" ? "en" : "fr";
        setLanguage(next);
      });
    }
  });
})();
