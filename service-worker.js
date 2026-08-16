self.addEventListener('install',event=>self.skipWaiting());self.addEventListener('activate',event=>self.clients.claim());self.addEventListener('fetch',event=>{});
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {});
