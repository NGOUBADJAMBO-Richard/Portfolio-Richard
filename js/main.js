(() => {
  const STORAGE_PREFIX = "portfolio_richard_";
  const THEME_KEY = `${STORAGE_PREFIX}theme`;
  const THEME_DARK = "dark";
  const THEME_LIGHT = "light";
  const MOTION_QUERY = window.matchMedia("(prefers-reduced-motion: reduce)");

  const getTranslator = () =>
    window.i18n && typeof window.i18n.t === "function"
      ? window.i18n.t
      : (key) => key;

  const setThemeUI = (theme) => {
    const isDark = theme === THEME_DARK;
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");
    document.body.classList.toggle("dark-mode", isDark);
    document.body.dataset.theme = theme;

    if (icon) {
      icon.classList.toggle("fa-moon", !isDark);
      icon.classList.toggle("fa-sun", isDark);
    }

    const t = getTranslator();
    const label = isDark ? t("theme.enableLight") : t("theme.enableDark");
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  };

  const applySavedTheme = () => {
    const fallback = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? THEME_DARK
      : THEME_LIGHT;
    const savedTheme = localStorage.getItem(THEME_KEY) || fallback;
    setThemeUI(savedTheme);
  };

  const initThemeToggle = () => {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;

    themeToggle.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("dark-mode")
        ? THEME_LIGHT
        : THEME_DARK;

      document.body.classList.add("theme-transition");
      setThemeUI(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
      window.setTimeout(() => {
        document.body.classList.remove("theme-transition");
      }, 350);
    });

    window.addEventListener("portfolio:language-changed", () => {
      const activeTheme = document.body.classList.contains("dark-mode")
        ? THEME_DARK
        : THEME_LIGHT;
      setThemeUI(activeTheme);
    });
  };

  const initMenu = () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  };

  const initStickyNavbar = () => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  };

  const initPortfolioFilter = () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    if (!filterBtns.length || !portfolioItems.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        filterBtns.forEach((item) => {
          item.classList.remove("active");
          item.setAttribute("aria-pressed", "false");
        });

        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");

        portfolioItems.forEach((card) => {
          const shouldShow =
            filter === "all" || card.dataset.category === filter;
          card.style.display = shouldShow ? "block" : "none";
          card.toggleAttribute("hidden", !shouldShow);
        });
      });
    });
  };

  const initBackToTop = () => {
    const backToTop = document.getElementById("backToTop");
    if (!backToTop) return;

    const onScroll = () => {
      backToTop.classList.toggle("show", window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const initSmoothAnchors = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const href = anchor.getAttribute("href");
        if (!href || href.length < 2) return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        const offset = 80;
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      });
    });
  };

  const initScrollReveal = () => {
    const revealItems = document.querySelectorAll(".reveal-on-scroll");
    if (!revealItems.length) return;

    if (MOTION_QUERY.matches || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealItems.forEach((item) => observer.observe(item));
  };

  const generateCSRFToken = () =>
    Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

  const initContactFormValidation = () => {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    const csrfField = contactForm.querySelector('input[name="_csrf"]');
    if (csrfField) {
      csrfField.value = generateCSRFToken();
    }

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const t = getTranslator();

      try {
        const data = Object.fromEntries(new FormData(contactForm));
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,100}$/;
        const emailRegex = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,6}$/;

        if (!data.name || data.name.trim().length < 2) {
          alert(t("error.nameMin"));
          return;
        }
        if (data.name.length > 100) {
          alert(t("error.nameMax"));
          return;
        }
        if (!nameRegex.test(String(data.name || "").trim())) {
          alert(t("error.namePattern"));
          return;
        }
        if (!emailRegex.test(String(data.email || ""))) {
          alert(t("error.emailInvalid"));
          return;
        }
        if (String(data.email || "").length > 255) {
          alert(t("error.emailMax"));
          return;
        }
        if (!data.message || String(data.message).trim().length < 10) {
          alert(t("error.messageMin"));
          return;
        }
        if (String(data.message).length > 5000) {
          alert(t("error.messageMax"));
          return;
        }

        alert(t("contact.success", { name: data.name || "" }));
        contactForm.reset();
        if (csrfField) {
          csrfField.value = generateCSRFToken();
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert(getTranslator()("error.generic"));
      }
    });
  };

  const initPageLoader = () => {
    const pageLoader = document.getElementById("pageLoader");
    if (!pageLoader) return;

    window.addEventListener("load", () => {
      window.setTimeout(() => {
        pageLoader.classList.add("hidden");
      }, 500);
    });
  };

  const initServiceWorker = () => {
    if (
      !("serviceWorker" in navigator) ||
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1"
    ) {
      return;
    }

    navigator.serviceWorker
      .register("/service-worker.js", { scope: "/" })
      .then((registration) => {
        registration.onupdatefound = () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.onstatechange = () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              newWorker.postMessage({ type: "SKIP_WAITING" });
            }
          };
        };
      })
      .catch((error) => {
        console.warn("Service Worker registration failed:", error);
      });
  };

  document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme();
    initThemeToggle();
    initMenu();
    initStickyNavbar();
    initPortfolioFilter();
    initBackToTop();
    initSmoothAnchors();
    initScrollReveal();
    initContactFormValidation();
    initPageLoader();
    initServiceWorker();
  });
})();
