const CACHE_NAME = 'loveweb-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/carta.html',
  '/assets/img/corazon.ico',
  // Agrega aquí tus imágenes y recursos importantes
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});