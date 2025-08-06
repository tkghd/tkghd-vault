self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('vault-cache').then(cache => {
      return cache.addAll([
        '/index.html',
        '/manifest.json',
        '/vault-ai.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});