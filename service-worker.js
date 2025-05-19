const cacheName = "gratitude-v1";
const filesToCache = [
  "/gratitude-journal/",
  "/gratitude-journal/index.html",
  "/gratitude-journal/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
