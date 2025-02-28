const CACHE_NAME = 'portfolio-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
];

const ASSET_CACHE_NAME = 'portfolio-assets-v1';
const DYNAMIC_CACHE_NAME = 'portfolio-dynamic-v1';

// Cache static assets during installation
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

// Cache-first strategy for static assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Handle asset requests
  if (event.request.url.includes('/assets/')) {
    event.respondWith(
      caches.open(ASSET_CACHE_NAME)
        .then(cache => 
          cache.match(event.request)
            .then(response => response || 
              fetch(event.request)
                .then(networkResponse => {
                  cache.put(event.request, networkResponse.clone());
                  return networkResponse;
                })
            )
        )
    );
    return;
  }

  // Network-first strategy for other requests
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const responseClone = response.clone();
        caches.open(DYNAMIC_CACHE_NAME)
          .then(cache => cache.put(event.request, responseClone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// Clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME, ASSET_CACHE_NAME, DYNAMIC_CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
