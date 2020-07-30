// Progressive Enhancement (SW supported)
if (window.caches) {
  ['test1','test2','test3'].map( (cache) => {
    caches.delete(cache).then(console.log)
  });
  /*
  caches.open('pwa-v1.1').then( (cache) => {
    cache.addAll([
      '/index4-1.html',
      '/main4-1.js',
      '/style.css',
    ]);
  });
  //*/
  /*
  caches.open('pwa-v1.1').then( (cache) => {
    //cache.delete('/style.css');
    cache.match('/index4-1.html').then( (res) => {
      res.text().then(console.log);
    });
  });
  //*/
  /*
  caches.open('pwa-v1.1').then( (cache) => {
    cache.put('index4-1.html', new Response('My own HTML'));
  });
  //*/
  /*
  caches.open('pwa-v1.1').then( (cache) => {
    cache.match('/index4-1.html').then( (res) => {
      res.text().then(console.log);
    });
  });
  //*/
  caches.open('pwa-v1.1').then( (cache) => {
    cache.keys().then(console.log);
  });

} else {
  console.log('caches not supported ...');
}