// const CACHE_NAME = "my-site-cache-v1";
// const urlsToCache = [
//   "/",
//   "/index.html",
//   "/css/app.css",
//   "/js/app.js",
//   "/img/tetris-site.webp",
//   "/img/spotify-stats.webp",
//   "/img/nnwebsite.webp",
// ];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       if (process.env.NODE_ENV === "development") {
//         console.log("Opened cache");
//       }
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             if (process.env.NODE_ENV === "development") {
//               console.log(`Deleting cache: ${cacheName}`);
//             }
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
