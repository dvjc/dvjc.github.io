// Progressive Enhancement (SW supported)
if ( navigator.serviceWorker ) {
  // Register the SW
  navigator.serviceWorker.register('./sw2.js')
  .then(function(registration){
    console.log('SW Register');
  })
  .catch(function(error){
    console.log(error);
  });
}

// Get camera feed
fetch('camera_feed.html')
  .then((res) => {
    return res.text();
  })
  .then((html) => {
    document.getElementById('camera').innerHTML = html;
  })
