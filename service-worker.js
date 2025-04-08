self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
    // Cache static assets if needed
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activated.');
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
    // You can intercept requests and serve cached responses here
  });
  