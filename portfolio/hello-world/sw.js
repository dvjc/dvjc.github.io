// perhaps no registration event?
self.addEventListener('register', (e) => {
  console.log("SW: Register Event");
});

self.addEventListener('install', (e) => {
  console.log("SW: Install Event");
});

self.addEventListener('activate', (e) => {
  console.log("SW: Activate Event");
});
