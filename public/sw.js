const CACHE_NAME = 'booking-app-cache';
const urlsToCache = ['/hotels.json', '/manifest.json', '/favicon.ico'];
const sw = this;

sw.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

sw.addEventListener('fetch', (event) => {
  event.respondWith(
    // this method analyze request and
    // trying to find cached results for the request in any cache created by service worker
    caches.match(event.request).then((response) => {
      // if we have found in cache what we need we just return response
      if (response) {
        return response;
      }

      // Cloning request beacuse of object of request is stream and we call it just once
      // one time we handle it for caching and second time it handling by browser for resources
      // so we need to clone it
      const fetchRequest = event.request.clone();

      // At cache find nothing so we need to load data
      // what means we need to do network  and return data if we have something from network of course
      return fetch(fetchRequest).then((response) => {
        // check is it wright response??
        // response.type = basic => it means this request from our domen
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clonning object of respponse because it stream as well
        // beacause we need to response was handled by browser and by cache
        // so at the end we will have 2 streams
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          // Add response to cache for following usage
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

sw.addEventListener('activate', (event) => {
  const cacheWhitelist = ['page-1', 'page-2'];

  event.waitUntil(
    // get all keys from cache
    caches.keys().then((cacheNames) => {
      return Promise.all(
        // Iterate all cached files
        cacheNames.map((cacheName) => {
          // If file doesn't exist at white list, we shoulr remove it
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
