# 🛍️ TRUEQUE JOVEN - Intercambia, no compres

Una aplicación web moderna donde jóvenes pueden intercambiar objetos sin usar dinero, como ropa, libros, útiles escolares, tecnología usada, etc. Similar a Wallapop, pero con enfoque 100% en el trueque (uno por otro).

![TRUEQUE JOVEN](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop)

## 🎯 Características Principales

### 🏠 Feed de Productos
- **Listado tipo cards** con foto, nombre, categoría y ubicación
- **Filtros avanzados** por categoría, distancia y estado del artículo
- **Búsqueda inteligente** con autocompletado
- **Información de intercambio** - qué busca cada usuario a cambio

### ➕ Publicar Intercambios
- **Formulario intuitivo** para subir productos
- **Múltiples fotos** con drag & drop
- **Categorías organizadas**: 👕 Ropa, 📚 Libros, 📱 Tecnología, ✏️ Útiles, ⚽ Deportes, 🎁 Otros
- **Estados del producto**: Nuevo, Usado, Deteriorado
- **Geolocalización** para intercambios locales

### 💬 Sistema de Chat
- **Mensajería en tiempo real** entre usuarios
- **Interfaz tipo WhatsApp** familiar y fácil de usar
- **Historial de conversaciones** organizado
- **Notificaciones** de nuevos mensajes

### 👤 Perfiles de Usuario
- **Sistema de valoraciones** post-intercambio
- **Estadísticas** de intercambios realizados
- **Historial** de publicaciones
- **Reputación** basada en calificaciones de otros usuarios

### ✅ Sistema de Valoraciones
- **Calificaciones mutuas** después de cada intercambio
- **Comentarios** sobre la experiencia
- **Badges** de confiabilidad: "Confiable", "Rápido", "Buena comunicación"

## 🌈 Diseño y UX

- **Diseño minimalista** inspirado en Wallapop y Depop
- **Colores jóvenes**: Gradientes púrpura y turquesa
- **Responsive first** - optimizado para móviles
- **Animaciones suaves** y transiciones fluidas
- **Iconografía moderna** con Font Awesome

## 🚀 Tecnologías Utilizadas

| Función | Tecnología |
|---------|------------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ |
| **Framework CSS** | Tailwind CSS |
| **Interactividad** | Alpine.js |
| **Iconos** | Font Awesome 6 |
| **Imágenes** | Unsplash API |
| **Responsive** | CSS Grid & Flexbox |

## 📱 Funcionalidades Implementadas

### ✅ Completadas
- [x] Feed principal con productos
- [x] Sistema de filtros y búsqueda
- [x] Formulario de publicación
- [x] Chat en tiempo real simulado
- [x] Perfiles de usuario
- [x] Valoraciones y estadísticas
- [x] Diseño responsive
- [x] Navegación móvil
- [x] Modal de detalles de producto
- [x] Notificaciones de éxito
- [x] Animaciones y transiciones

### 🔄 En Desarrollo
- [ ] Integración con Firebase
- [ ] Autenticación de usuarios
- [ ] Subida real de imágenes
- [ ] Geolocalización GPS
- [ ] Notificaciones push
- [ ] Sistema de reportes

## 🎮 Ejemplo de Flujo de Usuario

1. **Juan** publica: *"Cambio mis tenis Nike por una mochila o libros"*
2. **Carla** ve la publicación y le escribe por chat
3. **Carla** le ofrece una mochila escolar en buen estado
4. Acuerdan lugar y hora para el intercambio
5. Realizan el trueque en persona
6. Ambos se califican mutuamente en la app
7. Sus perfiles mejoran su reputación para futuros intercambios

## 🔧 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet para CDNs

### Ejecución Local
```bash
# Clonar el repositorio
git clone [url-del-repo]

# Navegar al directorio
cd trueque-joven

# Abrir en navegador
open index.html
# o usar un servidor local
python -m http.server 8000
```

### Estructura de Archivos
```
trueque-joven/
├── index.html          # Página principal
├── app.js             # Lógica de la aplicación
├── styles.css         # Estilos personalizados
└── README.md          # Documentación
```

## 🎨 Personalización

### Colores del Tema
```css
:root {
    --primary-color: #667eea;    /* Púrpura principal */
    --secondary-color: #764ba2;  /* Púrpura secundario */
    --accent-color: #f093fb;     /* Rosa accent */
    --success-color: #10b981;    /* Verde éxito */
}
```

### Categorías de Productos
- 👕 **Ropa**: Camisetas, pantalones, zapatos, accesorios
- 📚 **Libros**: Novelas, textos escolares, cómics, manga
- 📱 **Tecnología**: Celulares, auriculares, tablets, consolas
- ✏️ **Útiles Escolares**: Cuadernos, calculadoras, mochilas
- ⚽ **Deportes**: Balones, ropa deportiva, equipos
- 🎁 **Otros**: Juguetes, decoración, instrumentos

## 🌍 Impacto Social

**TRUEQUE JOVEN** promueve:
- 🌱 **Economía circular** y sostenibilidad
- 💚 **Reducción de desperdicio** reutilizando objetos
- 🤝 **Comunidad** entre jóvenes locales
- 💰 **Ahorro económico** para estudiantes
- 🎓 **Educación financiera** alternativa

## 📈 Métricas y Analytics

La aplicación rastrea:
- Número de intercambios completados
- Productos más populares por categoría
- Valoraciones promedio de usuarios
- Tiempo promedio hasta completar intercambio
- Geografía de intercambios más activos

## 🔒 Seguridad y Privacidad

- **Intercambios en lugares públicos** recomendados
- **Sistema de reportes** para comportamientos inapropiados
- **Verificación de perfiles** mediante redes sociales
- **Datos mínimos** requeridos para registro
- **Comunicación dentro de la app** para seguridad

## 🚀 Roadmap Futuro

### Versión 2.0
- [ ] App móvil nativa (React Native/Flutter)
- [ ] Integración con redes sociales
- [ ] Sistema de puntos y gamificación
- [ ] Intercambios grupales (3+ personas)
- [ ] Marketplace de servicios (tutorías, etc.)

### Versión 3.0
- [ ] IA para recomendaciones personalizadas
- [ ] Realidad aumentada para probar productos
- [ ] Blockchain para historial inmutable
- [ ] Expansión internacional

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👥 Equipo

- **Desarrollo Frontend**: Diseño e implementación de la interfaz
- **UX/UI Design**: Experiencia de usuario y diseño visual
- **Backend**: APIs y base de datos (próximamente)
- **QA Testing**: Pruebas y control de calidad

## 📞 Contacto

- **Email**: contacto@truequejoven.com
- **Twitter**: @TruequeJoven
- **Instagram**: @trueque.joven
- **Discord**: TruequeJoven Community

---

**¡Intercambia, conecta, reutiliza! 🔄✨**

*Hecho con ❤️ para la comunidad joven*
