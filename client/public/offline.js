var CACHE = 'cache-and-update';

// On install, cache some resources
self.addEventListener('install', function(evt) {
    console.log('The service worker is being installed.');

    // Ask the service worker to keep installing until the returning promise resolves.
    evt.waitUntil(precache());
});

// On fetch, use cache only strategy.
self.addEventListener('fetch', function(evt) {
    console.log('The service worker is serving the asset.');
    evt.respondWith(fromCache(evt.request));
    evt.waitUntil(update(evt.request));
});

// Open a cache and use 'addAll()' with an array of assest to add all of them
// to the cache. Return a promise resolving when all the assets are added.

function precache() {
    return caches.open(CACHE).then(function (cache) {
      return cache.addAll([
        './index.html',
      ]);
    });
  }

  function fromCache(request) {
    return caches.open(CACHE).then(function (cache) {
      return cache.match(request).then(function (matching) {
        return matching || Promise.reject('no-match');
      });
    });
  }

  function update(request) {
    return caches.open(CACHE).then(function (cache) {
      return fetch(request).then(function (response) {
        return cache.put(request, response);
      });
    });
  }