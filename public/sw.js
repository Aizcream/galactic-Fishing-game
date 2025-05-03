const CACHE_NAME = "galactic-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "src/main.tsx",
  "/src/assets/TitleGame.png",
  "https://api-game.bloque.app/game/leaderboard",
  "https://api-game.bloque.app/game/market"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, clone);
        });
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => cached || Promise.reject('no-match'))
      )
  );
});
  
