// Service Worker para TRUEQUE JOVEN
const CACHE_NAME = 'trueque-joven-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/styles.css',
  '/manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('🛍️ Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker: Archivos en caché');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('✅ Service Worker: Activado');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Eliminando caché antigua', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar requests y servir desde caché
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devolver desde caché si existe
        if (response) {
          return response;
        }
        
        // Si no está en caché, hacer request normal
        return fetch(event.request).then(response => {
          // Verificar si es una respuesta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar la respuesta
          const responseToCache = response.clone();

          // Agregar al caché
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      }
    )
  );
});

// Manejo de notificaciones push (preparado para futuro)
self.addEventListener('push', event => {
  console.log('📱 Push notification recibida');
  
  const options = {
    body: event.data ? event.data.text() : '¡Tienes un nuevo mensaje en TruequeJoven!',
    icon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=192&h=192&fit=crop',
    badge: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=72&h=72&fit=crop',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver mensaje',
        icon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=128&h=128&fit=crop'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=128&h=128&fit=crop'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('🛍️ TruequeJoven', options)
  );
});

// Manejo de clicks en notificaciones
self.addEventListener('notificationclick', event => {
  console.log('🔔 Notification click recibido');
  
  event.notification.close();

  if (event.action === 'explore') {
    // Abrir la app en la sección de chat
    event.waitUntil(
      clients.openWindow('/?view=chat')
    );
  } else if (event.action === 'close') {
    // Solo cerrar la notificación
    event.notification.close();
  } else {
    // Click por defecto - abrir la app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Sincronización en background (preparado para futuro)
self.addEventListener('sync', event => {
  console.log('🔄 Background sync:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log('🔄 Ejecutando sincronización en background...');
  // Aquí se podría sincronizar datos pendientes cuando hay conexión
  try {
    // Simular sincronización de mensajes pendientes
    const pendingMessages = await getStoredPendingMessages();
    if (pendingMessages.length > 0) {
      console.log(`📤 Enviando ${pendingMessages.length} mensajes pendientes`);
      // Enviar mensajes cuando hay conexión
      await sendPendingMessages(pendingMessages);
    }
  } catch (error) {
    console.error('❌ Error en sincronización:', error);
  }
}

// Funciones auxiliares para sincronización
async function getStoredPendingMessages() {
  // Simular obtención de mensajes pendientes del localStorage
  const stored = localStorage.getItem('pendingMessages');
  return stored ? JSON.parse(stored) : [];
}

async function sendPendingMessages(messages) {
  // Simular envío de mensajes pendientes
  console.log('📤 Enviando mensajes:', messages);
  // Limpiar mensajes pendientes después del envío
  localStorage.removeItem('pendingMessages');
}

// Manejo de actualizaciones de la app
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('⚡ Service Worker: Actualizando inmediatamente');
    self.skipWaiting();
  }
});

// Logging para debugging
console.log('🛍️ TruequeJoven Service Worker cargado correctamente');