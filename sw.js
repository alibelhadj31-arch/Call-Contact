// Service worker minimal — juste ce qu'il faut pour que Chrome/Android propose
// "Installer l'application". Ne met rien en cache : l'appli a besoin d'une
// connexion internet pour parler à la base de données de toute façon.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
