const CACHE_NAME = 'pingpong-cache-v1';

const urlsToCache = [
  '/wdd131/pingpong/',
  '/wdd131/pingpong/index.html',
  '/wdd131/pingpong/score.v1.css',
  '/wdd131/pingpong/mobile.v1.css',
  '/wdd131/pingpong/score.v1.js',
  '/wdd131/pingpong/manifest.json',
  '/wdd131/pingpong/icons/icon-192.png',
  '/wdd131/pingpong/icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache.map(url =>
          fetch(url).then(response => {
            if (!response.ok) {
              throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            }
            return cache.put(url, response);
          })
        )
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
