// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {
  // Register the SW
  navigator.serviceWorker.register('/sw4-2.js').then( (registration) => {

  }).catch(console.log);
}