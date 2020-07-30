// Service worker

// Cache name
const pwaCache = 'pwa-cache-1';

// Static assets to cache on install
const staticCache = [
	'/index4-4.html',
	'/page2.html',
	'/style.css',
	'/main4-4.js',
	'/thumb.png',
];

// SW install and cache static assets
self.addEventListener( 'install', (e) => {
  e.waitUntil(
    caches.open(pwaCache)
      .then( cache => cache.addAll( staticCache ) )
  );
});

// SW Activate and cache cleanup
self.addEventListener( 'activate', (e) => {
  let cacheCleaned = caches.keys().then( (keys) => {
    keys.forEach( (key) => {
      if (key !== pwaCache ) return caches.delete(key);
    } );    
  });

  e.waitUntil(cacheCleaned);
} );

// SW fetch handler with different caching strategies
self.addEventListener('fetch', (e) => {

  // Cache with Network Fallback
  let res = caches.match(e.request).then((res) => {

    // Check cache has response
    if (res) return res;

    // Fallback to Network
    return fetch(e.request).then((fetches) => {

      // Cache fetched response
      caches.open(pwaCache).then(cache => cache.pull(e.request, fetchRes.clone());

      // Return clone of fetched response
      return fetchRes;
    });

    e.respondWith(res);
  });
});