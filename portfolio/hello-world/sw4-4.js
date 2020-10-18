// Service worker

// Cache name
const pwaCache = 'pwa-cache-1';

// Static assets to cache on install
const staticCache = [
	'/index4-4.html',
	'/style.css',
	'/main4-4.js',
	'/thumb.png',
	'/placeholder.png'
];

// SW fetch handler with different caching strategies
self.addEventListener( 'fetch', (e) => {

  // 5. Cache & Network Race
  // Most advanced and covers the most circumstances
  // Variant of [04] but emphasizes 
  let firstResponse = new Promise( (resolve, reject) => {

    // Track rejection
    let firstRejectionReceived = false;
    let rejectOnce = () => {
      if (firstRejectionReceived) {
        if (e.request.url.match('thumb.png')) {
          resolve(caches.match('/placeholder.png'));
        } else {
          reject('No response received.');
        }
      } else {
        firstRejectionReceived = true;
      }
    };

    // Try Network
    fetch(e.request).then( (res) => {
      // Check res ok
      res.ok ? resolve(res) : rejectOnce();
    } ).catch( rejectOnce );

    // Try Cache
    caches.match(e.request).then( (res) => {
      // Check cache found
      res ? resolve(res) : rejectOnce();
    } ).catch( rejectOnce );
  });
  e.respondWith(firstResponse);

  // 4. Cache with Network update
  // Doesn't work well with live data - but great for performance
  // Most elegant - but isn't sensitive to data calls
  // Most of the time, there are better choices
  /*
  e.respondWith(
    caches.open(pwaCache).then( (cache) => {
      // Return from cache
      return cache.match(e.request).then( (res) => {
        // Update
        let updatedRes = fetch(e.request).then( (newRes) => {
          // Cache new response
           cache.put(e.request, newRes.clone());
           return newRes;
        } );

        // returns whichever resolves first
        return res || updatedRes;
      } )
    } )
  );
  //*/

  // 3. Network with cache fallback
  // Try network first; go to cache as fallbak
  // Good for displaying data if older value still has value
  // One caveat - can be less than ideal when dealing with poor network conditions
  // If the network fails, it displays whatever the most latest copy it had
  /*
  e.respondWith( fetch(e.request)
    // Cache latest version + respond with network call
    .then( (res) => {
      caches.open(pwaCache).then( cache => cache.put(e.request, res) );
      return res.clone();
    })

    // falled network call, respond with cached copy
    .catch( err => caches.match(e.request) )
  );
  //*/

  // 2. Cache with Network Fallback
  // Same as [01] - but goes to network if the cache request fails
  // Good for static assets
  /*
  e.respondWith(
    // handle serving up static content from cache
    caches.match(e.request).then( (res) => {

      // if we found, do nothing extra - return the response
      if (res) return res;

      // if not found, fetch first, store in cache, then return it
      return fetch(e.request).then( (newRes) => {

        // Cache-fetched response
        caches.open(pwaCache).then( cache => cache.put(e.request, newRes) );
        return newRes.clone();

      })
    })
  );
  //*/
  
  // 1. Cache only. Static assets - App Shell
  // PRO: Fast and makes content available online
  // CON: Should a request get removed from the cache - it fails
  // Good if we've already cached everything (which it likely would if we populated on install)
  //e.respondWith(caches.match(e.request)); // caches everything in staticCache
});

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