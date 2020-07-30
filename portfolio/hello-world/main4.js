// Progressive Enhancement (SW supported)
// if ( 'serviceWorker' in navigator ) {
if ( navigator.serviceWorker ) {

  // Convert key to Uint8Array
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
    
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  // Register the SW
  navigator.serviceWorker.register('/sw4.js').then(function(registration){

    // Server public key
    let pubKey = 'BMjbJjStl_OPQwgvR0s1KTFgZlzF9_aHWsVXJqBWadvAPhp8tNRZMsWBNHOouKyeShndYmcAK-3Lj7r0h-6M_8g';

    registration.pushManager.getSubscription().then( (sub) => {
      // If subscription found, return
      if (sub) return sub;

      let applicationServerKey = urlBase64ToUint8Array(pubKey);

      // Subscribe
      return registration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey});
    }).then( sub => sub.toJSON() )
      .then(console.log)
      .catch(console.log);
  }).catch(console.log);
}

/*
// Notification support
if (window.Notification) {

  function showNotification(){
    let notificationOpts = {
      body: 'Some notification information.',
      icon: 'icon.png'
    };
    let n = new Notification('My new Notification', notificationOpts);
    n.onclick = () => {
      console.log('Notification clicked');
    };
  };

  // Manage permission - granted | denied | default
  if (Notification.permision === 'granted') { // have permission
    showNotification();
  } else if (Notification.permision !== 'denied') { // ask 4 permission
    Notification.requestPermission( (permission) => {
      if (permission === 'granted' ){
        showNotification();
      }
    });
  }
}
//*/