// // Install service worker

// const CACHE_NAME =  'DevReach'
// self.addEventListener('install', e => {
//     console.log('installing service woker!!')
//     const timeStamp = Date.now();
//     e.waitUntil(
//         caches.open(CACHE_NAME).then(cache => {
//             return cache.addAll([
//                 `/`,
//                 `index.html`,
//             ])
//             .then(() => self.skipWaiting());
//         })
//     )
// })

// // Activation
// self.addEventListener('activate', event => {
//     console.log('activating service worker');
//     // Remove unwanted caches
//   event.waitUntil(
//       caches.keys().then(cacheNames => {
//           return Promise.all(
//               cacheNames.map(cache => {
//                   if(cache !== CACHE_NAME){
//                   console.log('Service Worker: Clearing Old Cache')
//                   return caches.delete(cache)
//               }})
//           )
//       })
//   );
// });

// // Intercepting fetch funtion
// self.addEventListener('fetch', function(event) {
//     // console.log(`fetching ${event.request.url}`)
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }

//         // IMPORTANT: Clone the request. A request is a stream and
//         // can only be consumed once. Since we are consuming this
//         // once by cache and once by the browser for fetch, we need
//         // to clone the response.
//         var fetchRequest = event.request.clone();

//         return fetch(fetchRequest).then(
//           function(response) {
//             // Check if we received a valid response
//             if(!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }

//             // IMPORTANT: Clone the response. A response is a stream
//             // and because we want the browser to consume the response
//             // as well as the cache consuming the response, we need
//             // to clone it so we have two streams.
//             var responseToCache = response.clone();

//             caches.open(CACHE_NAME)
//               .then(function(cache) {
//                 cache.put(event.request, responseToCache);
//               });

//             return response;
//           }).catch(err => caches.match(event.request).then(res => res))
//       })
//     );
// });

