// Service Worker - Pour caching et offline support
// Place à la RACINE du site pour un scope global

const CACHE_VERSION = "portfolio-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/responsive.css",
  "/css/hero-responsive.css",
  "/css/hero-content.css",
  "/js/main.js",
  "/js/monitoring.js",
  "/assets/img/R N.png",
];

// Installation du Service Worker
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");

  // Pré-cacher les assets essentiels
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => {
        console.log("Cache opened, caching assets...");

        // Ajouter les assets de manière sécurisée (ignorer les erreurs)
        return Promise.allSettled(
          ASSETS_TO_CACHE.map((url) =>
            cache.add(url).catch((err) => {
              console.warn("Failed to cache:", url, err);
            })
          )
        ).then(() => console.log("Cache initialization complete"));
      })
      .catch((error) => {
        console.error("Cache installation failed:", error);
      })
  );

  // Forcer l'activation immédiate
  self.skipWaiting();
});

// Activation du Service Worker
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_VERSION) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Fetch event - Network first pour HTML, Cache first pour autres
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") {
    return;
  }

  // Skip external URLs (CDN, APIs, etc.)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const { request } = event;
  const url = new URL(request.url);

  // Network first strategy pour les pages HTML
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Ne pas cacher les réponses d'erreur
          if (!response || response.status !== 200) {
            return response;
          }

          // Cloner la réponse avant de la mettre en cache
          const responseToCache = response.clone();
          caches.open(CACHE_VERSION).then((cache) => {
            cache.put(request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Si le réseau échoue, utiliser le cache
          return caches.match(request).then((response) => {
            return (
              response ||
              new Response("Page not available offline", {
                status: 503,
                statusText: "Service Unavailable",
                headers: new Headers({
                  "Content-Type": "text/plain",
                }),
              })
            );
          });
        })
    );
    return;
  }

  // Cache first strategy pour les assets (CSS, JS, images)
  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        // Mettre à jour le cache en arrière-plan (stale-while-revalidate)
        fetch(request)
          .then((freshResponse) => {
            if (freshResponse && freshResponse.status === 200) {
              caches.open(CACHE_VERSION).then((cache) => {
                cache.put(request, freshResponse);
              });
            }
          })
          .catch(() => {
            // Erreur réseau, utiliser la version en cache
          });

        return response;
      }

      // Asset non en cache, essayer le réseau
      return fetch(request)
        .then((response) => {
          // Ne pas cacher les réponses non-200
          if (!response || response.status !== 200) {
            return response;
          }

          // Cloner et cacher la réponse
          const responseToCache = response.clone();
          caches.open(CACHE_VERSION).then((cache) => {
            cache.put(request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Fallback si l'asset n'est pas disponible
          console.warn("Failed to fetch:", request.url);
          return new Response("Asset not available offline", {
            status: 404,
            statusText: "Not Found",
          });
        });
    })
  );
});

// Message from client
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
