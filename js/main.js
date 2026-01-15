// Page Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("pageLoader").classList.add("hidden");
  }, 1000);
});

// Menu Toggle with Accessibility
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Navbar scroll - Use classList instead of inline styles
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Portfolio Filter with Accessibility
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");

    const filter = btn.dataset.filter;

    portfolioItems.forEach((item) => {
      if (filter === "all" || item.dataset.category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Back to Top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme Toggle with localStorage prefix
const STORAGE_PREFIX = "portfolio_richard_";
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

const currentTheme = localStorage.getItem(STORAGE_PREFIX + "theme") || "light";
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem(STORAGE_PREFIX + "theme", "dark");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem(STORAGE_PREFIX + "theme", "light");
  }
});

// Generate CSRF Token
function generateCSRFToken() {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Contact Form with Enhanced Security & Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  // Set CSRF token
  const csrfField = contactForm.querySelector('input[name="_csrf"]');
  if (csrfField) {
    csrfField.value = generateCSRFToken();
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      // Get form data
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      // Validation - Name
      if (!data.name || data.name.trim().length < 2) {
        showError("Le nom doit avoir au moins 2 caractères");
        return;
      }
      if (data.name.length > 100) {
        showError("Le nom ne peut pas dépasser 100 caractères");
        return;
      }

      // Validation - Email (stronger regex)
      const emailRegex = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,6}$/;
      if (!emailRegex.test(data.email)) {
        showError("Veuillez entrer une adresse email valide");
        return;
      }
      if (data.email.length > 255) {
        showError("Email trop long (max 255 caractères)");
        return;
      }

      // Validation - Message
      if (!data.message || data.message.trim().length < 10) {
        showError("Le message doit contenir au moins 10 caractères");
        return;
      }
      if (data.message.length > 5000) {
        showError("Le message ne peut pas dépasser 5000 caractères");
        return;
      }

      // All validations passed
      showSuccess(`Merci ${data.name} ! Votre message a été envoyé.`);
      e.target.reset();
      csrfField.value = generateCSRFToken(); // Reset CSRF token
    } catch (error) {
      console.error("Form submission error:", error);
      showError("Une erreur est survenue. Veuillez réessayer.");
    }
  });
}

function showError(message) {
  alert(message);
}

function showSuccess(message) {
  alert(message);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  });
});

// Service Worker Registration
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/js/service-worker.js")
    .then(() => console.log("Service Worker registered"))
    .catch((err) => console.log("Service Worker registration failed:", err));
}

// Console Easter Egg
console.log(
  "%c👋 Hello Developer!",
  "font-size: 20px; color: #667eea; font-weight: bold;"
);
console.log(
  "%cPortfolio par Richard NGOUBADJAMBO",
  "font-size: 14px; color: #764ba2;"
);
