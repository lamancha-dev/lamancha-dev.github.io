// Service worker mínimo — existe apenas para que o telemóvel aceite instalar
// a Estante como aplicação (é um requisito técnico do Chrome/Android).
// Não guarda nada em cache nem funciona offline: todos os pedidos vão
// sempre diretamente à rede, normalmente.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
