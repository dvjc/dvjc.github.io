// Progressive Enhancement (SW supported)
// if ( 'serviceWorker' in navigator ) {
if ( navigator.serviceWorker ) {

  // Register the SW
  navigator.serviceWorker.register('./sw3.js')
  
    .then(function(registration){
      console.log(registration);
    })

    .catch(console.log);
}
