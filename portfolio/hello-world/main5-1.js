// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {
  // Register the SW
  navigator.serviceWorker.register('./sw5-1.js').then( (registration) => {

  }).catch(console.log);
}
