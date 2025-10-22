function truequejoven() {
    return {
        // Estado de la aplicación
        currentView: 'home',
        searchQuery: '',
        selectedCategory: '',
        showProductModal: false,
        selectedProduct: null,
        selectedChat: null,
        newMessage: '',

        // Usuario actual
        user: {
            id: 1,
            name: 'María González',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
            location: 'Ciudad de México, Roma Norte',
            rating: 4.8,
            totalRatings: 23,
            stats: {
                published: 12,
                exchanged: 8,
                rating: '4.8'
            }
        },

        // Nuevo producto para publicar
        newProduct: {
            title: '',
            description: '',
            category: '',
            condition: '',
            wantedItems: '',
            location: ''
        },

        // Productos de ejemplo
        products: [
            {
                id: 1,
                title: 'Auriculares Sony WH-1000XM4',
                description: 'Auriculares inalámbricos con cancelación de ruido. Funcionan perfectamente, solo tienen algunos rayones menores.',
                category: 'tecnologia',
                condition: 'usado',
                location: 'Ciudad de México, Polanco',
                wantedItems: 'Libros de programación, ropa deportiva',
                image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
                user: {
                    id: 2,
                    name: 'Carlos Ruiz',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
                    rating: 4.9
                },
                createdAt: '2024-01-15'
            },
            {
                id: 2,
                title: 'Colección de libros Harry Potter',
                description: 'Los 7 libros de Harry Potter en español, en excelente estado. Perfectos para cualquier fan de la saga.',
                category: 'libros',
                condition: 'usado',
                location: 'Guadalajara, Centro',
                wantedItems: 'Manga, cómics, libros de ciencia ficción',
                image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
                user: {
                    id: 3,
                    name: 'Ana Martínez',
                    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
                    rating: 5.0
                },
                createdAt: '2024-01-14'
            },
            {
                id: 3,
                title: 'Mochila escolar Nike',
                description: 'Mochila deportiva Nike en color negro, muy cómoda y con varios compartimentos. Ideal para la escuela.',
                category: 'utiles',
                condition: 'usado',
                location: 'Monterrey, San Pedro',
                wantedItems: 'Útiles escolares, calculadora científica',
                image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
                user: {
                    id: 4,
                    name: 'Diego López',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
                    rating: 4.7
                },
                createdAt: '2024-01-13'
            },
            {
                id: 4,
                title: 'Sudadera Adidas talla M',
                description: 'Sudadera Adidas original en color gris, talla M. Muy cómoda y en buen estado, solo usada pocas veces.',
                category: 'ropa',
                condition: 'usado',
                location: 'Ciudad de México, Coyoacán',
                wantedItems: 'Ropa talla M, zapatos deportivos',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
                user: {
                    id: 5,
                    name: 'Sofía Hernández',
                    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
                    rating: 4.6
                },
                createdAt: '2024-01-12'
            },
            {
                id: 5,
                title: 'Nintendo Switch Lite',
                description: 'Nintendo Switch Lite en color turquesa, incluye cargador y funda protectora. Funciona perfectamente.',
                category: 'tecnologia',
                condition: 'usado',
                location: 'Puebla, Centro',
                wantedItems: 'Tablet, auriculares gaming, libros',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
                user: {
                    id: 6,
                    name: 'Alejandro Torres',
                    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
                    rating: 4.8
                },
                createdAt: '2024-01-11'
            },
            {
                id: 6,
                title: 'Balón de fútbol Adidas',
                description: 'Balón oficial Adidas en excelente estado, perfecto para jugar en el parque o entrenamientos.',
                category: 'deportes',
                condition: 'usado',
                location: 'Tijuana, Zona Centro',
                wantedItems: 'Ropa deportiva, tenis, accesorios gym',
                image: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?w=400&h=400&fit=crop',
                user: {
                    id: 7,
                    name: 'Roberto Silva',
                    avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
                    rating: 4.5
                },
                createdAt: '2024-01-10'
            }
        ],

        // Chats de ejemplo
        chats: [
            {
                id: 1,
                user: {
                    id: 2,
                    name: 'Carlos Ruiz',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
                },
                lastMessage: 'Perfecto, nos vemos mañana a las 3pm',
                time: '14:30',
                messages: [
                    {
                        id: 1,
                        text: 'Hola! Me interesan tus auriculares Sony',
                        time: '14:20',
                        own: false
                    },
                    {
                        id: 2,
                        text: 'Hola Carlos! Perfecto, ¿qué tienes para intercambiar?',
                        time: '14:22',
                        own: true
                    },
                    {
                        id: 3,
                        text: 'Tengo varios libros de programación, ¿te interesan?',
                        time: '14:25',
                        own: false
                    },
                    {
                        id: 4,
                        text: 'Sí! Me encantan. ¿Podríamos vernos mañana?',
                        time: '14:28',
                        own: true
                    },
                    {
                        id: 5,
                        text: 'Perfecto, nos vemos mañana a las 3pm',
                        time: '14:30',
                        own: false
                    }
                ]
            },
            {
                id: 2,
                user: {
                    id: 3,
                    name: 'Ana Martínez',
                    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
                },
                lastMessage: '¿Los libros están en buen estado?',
                time: '12:15',
                messages: [
                    {
                        id: 1,
                        text: 'Hola Ana! Vi tu colección de Harry Potter',
                        time: '12:10',
                        own: true
                    },
                    {
                        id: 2,
                        text: 'Hola! Sí, están disponibles. ¿Qué ofreces?',
                        time: '12:12',
                        own: false
                    },
                    {
                        id: 3,
                        text: 'Tengo varios mangas en japonés, ¿te interesan?',
                        time: '12:14',
                        own: true
                    },
                    {
                        id: 4,
                        text: '¿Los libros están en buen estado?',
                        time: '12:15',
                        own: false
                    }
                ]
            }
        ],

        // Productos del usuario actual
        userProducts: [
            {
                id: 101,
                title: 'Calculadora Científica Casio',
                category: 'utiles',
                image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=150&fit=crop',
                status: 'Activo - 3 interesados'
            },
            {
                id: 102,
                title: 'Libro "Cien años de soledad"',
                category: 'libros',
                image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=150&fit=crop',
                status: 'Intercambiado ✅'
            }
        ],

        // Productos filtrados
        filteredProducts: [],

        // Inicialización
        init() {
            this.filteredProducts = [...this.products];
        },

        // Funciones de filtrado
        filterProducts() {
            this.filteredProducts = this.products.filter(product => {
                const matchesSearch = this.searchQuery === '' || 
                    product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    product.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    product.wantedItems.toLowerCase().includes(this.searchQuery.toLowerCase());
                
                const matchesCategory = this.selectedCategory === '' || 
                    product.category === this.selectedCategory;
                
                return matchesSearch && matchesCategory;
            });
        },

        // Obtener icono de categoría
        getCategoryIcon(category) {
            const icons = {
                'ropa': '👕',
                'libros': '📚',
                'tecnologia': '📱',
                'utiles': '✏️',
                'deportes': '⚽',
                'otros': '🎁'
            };
            return icons[category] || '🎁';
        },

        // Ver producto en modal
        viewProduct(product) {
            this.selectedProduct = product;
            this.showProductModal = true;
        },

        // Iniciar chat con usuario
        startChat(product) {
            // Verificar si ya existe un chat con este usuario
            let existingChat = this.chats.find(chat => chat.user.id === product.user.id);
            
            if (!existingChat) {
                // Crear nuevo chat
                existingChat = {
                    id: this.chats.length + 1,
                    user: product.user,
                    lastMessage: 'Nueva conversación',
                    time: new Date().toLocaleTimeString('es-ES', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                    }),
                    messages: []
                };
                this.chats.unshift(existingChat);
            }
            
            this.selectedChat = existingChat;
            this.currentView = 'chat';
            this.showProductModal = false;
        },

        // Enviar mensaje
        sendMessage() {
            if (this.newMessage.trim() === '' || !this.selectedChat) return;
            
            const message = {
                id: Date.now(),
                text: this.newMessage,
                time: new Date().toLocaleTimeString('es-ES', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                }),
                own: true
            };
            
            this.selectedChat.messages.push(message);
            this.selectedChat.lastMessage = this.newMessage;
            this.selectedChat.time = message.time;
            this.newMessage = '';
            
            // Simular respuesta automática después de 2 segundos
            setTimeout(() => {
                if (this.selectedChat) {
                    const responses = [
                        '¡Perfecto! Me parece una buena propuesta',
                        '¿Podríamos vernos este fin de semana?',
                        'Excelente, ¿dónde te queda más cómodo encontrarnos?',
                        'Me parece justo el intercambio',
                        '¿El producto está en las condiciones que describes?'
                    ];
                    
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    const responseMessage = {
                        id: Date.now(),
                        text: randomResponse,
                        time: new Date().toLocaleTimeString('es-ES', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                        }),
                        own: false
                    };
                    
                    this.selectedChat.messages.push(responseMessage);
                    this.selectedChat.lastMessage = randomResponse;
                    this.selectedChat.time = responseMessage.time;
                }
            }, 2000);
        },

        // Publicar producto
        publishProduct() {
            if (!this.newProduct.title || !this.newProduct.description || 
                !this.newProduct.category || !this.newProduct.condition || 
                !this.newProduct.wantedItems || !this.newProduct.location) {
                alert('Por favor, completa todos los campos');
                return;
            }
            
            const newProduct = {
                id: this.products.length + 1,
                title: this.newProduct.title,
                description: this.newProduct.description,
                category: this.newProduct.category,
                condition: this.newProduct.condition,
                location: this.newProduct.location,
                wantedItems: this.newProduct.wantedItems,
                image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
                user: {
                    id: this.user.id,
                    name: this.user.name,
                    avatar: this.user.avatar,
                    rating: this.user.rating
                },
                createdAt: new Date().toISOString().split('T')[0]
            };
            
            this.products.unshift(newProduct);
            this.filteredProducts = [...this.products];
            
            // Agregar a productos del usuario
            this.userProducts.unshift({
                id: newProduct.id,
                title: newProduct.title,
                category: newProduct.category,
                image: newProduct.image,
                status: 'Activo - Recién publicado'
            });
            
            // Actualizar estadísticas del usuario
            this.user.stats.published++;
            
            // Resetear formulario
            this.newProduct = {
                title: '',
                description: '',
                category: '',
                condition: '',
                wantedItems: '',
                location: ''
            };
            
            // Cambiar a vista principal
            this.currentView = 'home';
            
            // Mostrar mensaje de éxito
            this.showSuccessMessage('¡Producto publicado exitosamente!');
        },

        // Mostrar mensaje de éxito
        showSuccessMessage(message) {
            // Crear elemento de notificación
            const notification = document.createElement('div');
            notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
            notification.innerHTML = `
                <div class="flex items-center space-x-2">
                    <i class="fas fa-check-circle"></i>
                    <span>${message}</span>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Mostrar notificación
            setTimeout(() => {
                notification.classList.remove('translate-x-full');
            }, 100);
            
            // Ocultar después de 3 segundos
            setTimeout(() => {
                notification.classList.add('translate-x-full');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        },

        // Formatear fecha
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },

        // Obtener productos por categoría
        getProductsByCategory(category) {
            return this.products.filter(product => product.category === category);
        },

        // Obtener productos recientes
        getRecentProducts(limit = 4) {
            return this.products
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, limit);
        }
    };
}

// Funciones auxiliares para el manejo de imágenes
document.addEventListener('DOMContentLoaded', function() {
    // Manejo de carga de imágenes
    const imageUpload = document.getElementById('imageUpload');
    if (imageUpload) {
        imageUpload.addEventListener('change', function(e) {
            const files = e.target.files;
            if (files.length > 0) {
                // Aquí podrías implementar la lógica para mostrar preview de imágenes
                console.log('Archivos seleccionados:', files.length);
                
                // Simular carga exitosa
                const uploadArea = e.target.closest('.border-dashed');
                uploadArea.innerHTML = `
                    <div class="text-center">
                        <i class="fas fa-check-circle text-4xl text-green-500 mb-2"></i>
                        <p class="text-green-600">${files.length} imagen(es) seleccionada(s)</p>
                        <button type="button" onclick="document.getElementById('imageUpload').click()" class="mt-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                            Cambiar fotos
                        </button>
                    </div>
                `;
            }
        });
    }
});

// Funciones de utilidad
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

// Simular conexión en tiempo real para el chat
function simulateRealTimeChat() {
    // Esta función podría conectarse a un servicio real como Firebase
    console.log('Simulando conexión en tiempo real para chat...');
}

// Registrar Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('✅ Service Worker registrado correctamente:', registration.scope);
            })
            .catch(function(error) {
                console.log('❌ Error al registrar Service Worker:', error);
            });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    simulateRealTimeChat();
    console.log('🛍️ TRUEQUE JOVEN - App inicializada correctamente');
    
    // Mostrar banner de instalación PWA
    showInstallPrompt();
});

// Mostrar prompt de instalación PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('💾 PWA: Prompt de instalación disponible');
    e.preventDefault();
    deferredPrompt = e;
    showInstallBanner();
});

function showInstallBanner() {
    // Crear banner de instalación
    const installBanner = document.createElement('div');
    installBanner.id = 'installBanner';
    installBanner.className = 'fixed bottom-20 md:bottom-6 left-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-40 transform translate-y-full transition-transform duration-300';
    installBanner.innerHTML = `
        <div class="flex items-center justify-between">
            <div class="flex-1">
                <h3 class="font-semibold text-sm">📱 Instalar TruequeJoven</h3>
                <p class="text-xs opacity-90 mt-1">Accede más rápido desde tu pantalla de inicio</p>
            </div>
            <div class="flex space-x-2 ml-4">
                <button onclick="installPWA()" class="bg-white text-purple-600 px-3 py-1 rounded text-xs font-semibold">
                    Instalar
                </button>
                <button onclick="dismissInstallBanner()" class="text-white opacity-70 hover:opacity-100">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(installBanner);
    
    // Mostrar banner con animación
    setTimeout(() => {
        installBanner.classList.remove('translate-y-full');
    }, 1000);
}

function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('✅ PWA: Usuario aceptó la instalación');
            } else {
                console.log('❌ PWA: Usuario rechazó la instalación');
            }
            deferredPrompt = null;
            dismissInstallBanner();
        });
    }
}

function dismissInstallBanner() {
    const banner = document.getElementById('installBanner');
    if (banner) {
        banner.classList.add('translate-y-full');
        setTimeout(() => {
            banner.remove();
        }, 300);
    }
}

function showInstallPrompt() {
    // Verificar si ya está instalada
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('📱 PWA: App ya está instalada');
        return;
    }
    
    // Mostrar hint después de 5 segundos si no se ha mostrado antes
    const hasShownHint = localStorage.getItem('pwa-hint-shown');
    if (!hasShownHint) {
        setTimeout(() => {
            showPWAHint();
            localStorage.setItem('pwa-hint-shown', 'true');
        }, 5000);
    }
}

function showPWAHint() {
    const hint = document.createElement('div');
    hint.className = 'fixed top-20 right-4 bg-white border border-purple-200 rounded-lg p-3 shadow-lg z-50 max-w-xs animate-fade-in-up';
    hint.innerHTML = `
        <div class="flex items-start space-x-2">
            <div class="text-purple-600">
                <i class="fas fa-lightbulb"></i>
            </div>
            <div class="flex-1">
                <p class="text-sm font-medium text-gray-800">💡 Tip</p>
                <p class="text-xs text-gray-600 mt-1">Puedes instalar TruequeJoven en tu dispositivo para acceso más rápido</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-times text-xs"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(hint);
    
    // Auto-remover después de 8 segundos
    setTimeout(() => {
        if (hint.parentNode) {
            hint.remove();
        }
    }, 8000);
}