// Service worker disabled to clear caching issues
console.log('Service worker disabled for cache clearing');

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

// Do not handle fetch events - let everything go to network
self.addEventListener('fetch', (event) => {
  // Let all requests go through to network
  return;
});