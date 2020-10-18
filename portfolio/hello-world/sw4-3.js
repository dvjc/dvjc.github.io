// Service worker

const pwaCache = 'pwa-cache-2';

// send notification on push
self.addEventListener( 'install', (e) => {
  let cacheReady = caches.open(pwaCache).then( (cache) => {
    console.log('New cache ready.');
    return cache.addAll([
      '/index4-2.html',
      '/style.css',
      '/thumb.png',
      '/main4-2.js',
    ]);
  });

  e.waitUntil( cacheReady );
});

self.addEventListener( 'activate', (e) => {
  let cacheCleaned =
  caches.keys().then( (keys) => {
    keys.forEach( (key) => {
      if (key !== pwaCache ) return caches.delete(key);
    } );    
  });

  e.waitUntil(cacheCleaned);
} );

self.addEventListener( 'fetch', (e) => {

  // Skip for remote fetch
  if ( !e.request.url.match(location.origin) ) return;

  // Serve local fetch from cache
  let newRes = caches.open(pwaCache).then( (cache) => {

    // if missing from cache, ensure it is added; return what's in the cache
    return cache.match(e.request).then( (res) => {

      // Check request was found in cache
      if (res) {
        console.log(`Serving ${res.url} from cache.`);
        return res;
      }

      // Fetch on behalf of the client and cache
      return fetch(e.request).then( (fetchRes) => {
        cache.put(e.request, fetchRes.clone());
        return fetchRes;
      });
    });
  });
  e.respondWith(newRes);
});