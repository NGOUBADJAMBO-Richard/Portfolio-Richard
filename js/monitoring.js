// Performance Monitoring & Analytics
// This script monitors page performance and user interactions

class PortfolioMonitoring {
  constructor() {
    this.initPerformanceMetrics();
    this.initAnalytics();
    this.initErrorTracking();
  }

  // Initialize Core Web Vitals monitoring
  initPerformanceMetrics() {
    // Check if Web Vitals API is available
    if ("web-vital" in window) {
      // Largest Contentful Paint (LCP)
      if ("PerformanceObserver" in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
          });
          observer.observe({ entryTypes: ["largest-contentful-paint"] });
        } catch (e) {
          console.warn("LCP observation not supported");
        }
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsScore = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsScore += entry.value;
              console.log("CLS:", clsScore);
            }
          }
        });
        observer.observe({ entryTypes: ["layout-shift"] });
      } catch (e) {
        console.warn("CLS observation not supported");
      }

      // First Input Delay (FID) / Interaction to Next Paint (INP)
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log("FID/INP:", entry.processingDuration);
          }
        });
        observer.observe({ entryTypes: ["first-input", "interaction"] });
      } catch (e) {
        console.warn("FID/INP observation not supported");
      }
    }

    // Page Load Time
    window.addEventListener("load", () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log("Page Load Time:", pageLoadTime, "ms");
      this.sendMetric("page_load_time", pageLoadTime);
    });
  }

  // Initialize Event Tracking
  initAnalytics() {
    // Track form submissions
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        this.trackEvent("contact_form_submission", {
          timestamp: new Date().toISOString(),
        });
      });
    }

    // Track external link clicks
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      link.addEventListener("click", () => {
        this.trackEvent("external_link_click", {
          url: link.href,
          text: link.textContent,
        });
      });
    });

    // Track portfolio clicks
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      item.addEventListener("click", () => {
        this.trackEvent("portfolio_project_click", {
          project: item.getAttribute("data-category"),
        });
      });
    });

    // Track section views (scroll depth)
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.trackEvent("section_viewed", {
              section: entry.target.id,
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    // Track theme toggle
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const isDarkMode = document.body.classList.contains("dark-mode");
        this.trackEvent("theme_changed", {
          theme: isDarkMode ? "dark" : "light",
        });
      });
    }
  }

  // Initialize Error Tracking
  initErrorTracking() {
    // Global error handler
    window.addEventListener("error", (event) => {
      console.error("Error:", event.error);
      this.trackError({
        type: "javascript_error",
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    });

    // Unhandled promise rejection
    window.addEventListener("unhandledrejection", (event) => {
      console.error("Unhandled Rejection:", event.reason);
      this.trackError({
        type: "unhandled_rejection",
        message: event.reason ? event.reason.toString() : "Unknown",
      });
    });

    // Network errors
    document.addEventListener(
      "error",
      (event) => {
        if (event.target !== window) {
          this.trackError({
            type: "resource_error",
            resource: event.target.src || event.target.href,
          });
        }
      },
      true
    );
  }

  // Send metric to analytics
  sendMetric(name, value) {
    if (window.gtag) {
      gtag("event", name, {
        value: value,
      });
    }
    console.log(`Metric: ${name} = ${value}`);
  }

  // Track custom event
  trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
      gtag("event", eventName, eventData);
    }
    console.log(`Event: ${eventName}`, eventData);
  }

  // Track error
  trackError(errorData) {
    if (window.gtag) {
      gtag("event", "exception", {
        description: JSON.stringify(errorData),
        fatal: false,
      });
    }
    console.error(`Tracked Error:`, errorData);
  }

  // Check if resource is cached
  checkResourceCache() {
    if (window.performance && window.performance.getEntriesByType) {
      const resources = window.performance.getEntriesByType("resource");
      resources.forEach((resource) => {
        const transferSize = resource.transferSize || 0;
        const encodedBodySize = resource.encodedBodySize || 0;

        if (transferSize === 0 && encodedBodySize > 0) {
          console.log(`Cached: ${resource.name}`);
        }
      });
    }
  }

  // Get performance summary
  getPerformanceSummary() {
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      return {
        dns: timing.domainLookupEnd - timing.domainLookupStart,
        tcp: timing.connectEnd - timing.connectStart,
        ttfb: timing.responseStart - timing.requestStart,
        pageLoad: timing.loadEventEnd - timing.navigationStart,
        domReady: timing.domContentLoadedEventEnd - timing.navigationStart,
      };
    }
    return null;
  }
}

// Initialize monitoring when page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.portfolioMonitoring = new PortfolioMonitoring();
  });
} else {
  window.portfolioMonitoring = new PortfolioMonitoring();
}
