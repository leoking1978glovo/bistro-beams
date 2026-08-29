# Restaurant Showcase

Crea una Single Page Application moderna y elegante: una galería de "Páginas Web de Restaurantes" que muestre mis propios proyectos/diseños de sitios web para restaurantes.

ESTILO VISUAL (Dark & Bold):

- Tema oscuro dominante: fondo #0f0f13, superficies de tarjetas #18181f, bordes #2a2a32

- Acento naranja coral #ff6b35 para badges, botones activos, URLs y tags

- Tipografía Inter (o similar sans-serif), pesos 400-800

- Diseño limpio pero con impacto visual fuerte, sofisticación y modernidad

- Bordes redondeados de 12-16px, sombras sutiles en hover

- Animaciones fluidas con Framer Motion: fade-in stagger en carga, hover lift (-6px), zoom sutil en imágenes (scale 1.05), transiciones de filtro con layout animation

ESTRUCTURA:

1. HEADER: Título "Mi Galería de Restaurantes" con subtítulo descriptivo. Centrado, tipografía grande (2.5rem), bold, letter-spacing -1.5px. El subtítulo en color #8888a0 (texto muted).

2. FILTROS: Barra de filtros por categoría con pills redondeadas (border-radius 999px):

   - Todos, Fine Dining, Casual, Mexicano, Café, Bar, Food Truck

   - Estado inactivo: fondo #1a1a22, texto #8888a0, borde #2a2a32

   - Estado activo: fondo #ff6b35, texto blanco, borde #ff6b35, sombra naranja suave

   - Al hacer clic, filtra las tarjetas con animación de reordenamiento (Framer Motion layout)

3. GRID DE TARJETAS: Layout responsive con grid auto-fill, minmax 320px, 1fr, gap 24px. Cada tarjeta debe contener:

   - Imagen/screenshot del proyecto (aspecto 16:10, object-fit cover, altura ~200px)

   - Badge de categoría en esquina superior izquierda: fondo #ff6b35, texto blanco, mayúsculas, font-size 0.65rem, font-weight 700, padding 4px 10px, border-radius 4px

   - Nombre del restaurante: font-size 1.15rem, font-weight 700, color #f0f0f5

   - URL del sitio: font-size 0.78rem, color #ff6b35, debajo del nombre

   - Ubicación y tipo de cocina: font-size 0.84rem, color #66667a, con iconos (📍 y 🍽️)

   - Tags de tecnologías: pills con fondo #ff6b3515 (naranja 8% opacidad), color #ff6b35, font-size 0.72rem, font-weight 600, padding 4px 10px, border-radius 6px

   - Efecto hover: tarjeta se eleva -6px, imagen hace scale 1.05, sombra se intensifica a 0 8px 32px rgba(255,107,53,0.15), borde cambia a #3a3a44

4. MODAL/VISTA DETALLE: Al hacer clic en una tarjeta, abrir un modal centrado con:

   - Barra de navegador mockup arriba: 3 dots (rojo #ff5f57, amarillo #febc2e, verde #28c840) alineados a la izquierda, simulando ventana de navegador

   - Imagen grande del proyecto (altura 320px, object-fit cover)

   - Nombre del restaurante: font-size 1.6rem, bold

   - Descripción del proyecto: 2-3 líneas, color #8888a0, line-height 1.6

   - Grid de especificaciones: 4 columnas en desktop, 2 en móvil. Cada spec es una caja con fondo #0f0f13, borde #2a2a32, border-radius 10px, padding 14px. Label en mayúsculas color #8888a0 font-size 0.75rem, value en bold color #f0f0f5

   - Botón "Visitar sitio web →": fondo #ff6b35, color blanco, padding 12px 28px, border-radius 10px, font-weight 600

   - Botón de cerrar (X) en esquina superior derecha del modal

   - Cerrar al hacer clic fuera del modal o presionar Escape

   - Animación de entrada: escala de 0.92 a 1 + fade in, backdrop blur 8px, fondo overlay rgba(0,0,0,0.85)

DATOS DE EJEMPLO (usa estos como placeholder, yo los reemplazaré):

- "Taquería El Sol" | Categoría: Mexicano | Tecnología: Next.js + Tailwind | Ubicación: CDMX, México | Tags: ["Responsive", "Pedidos Online", "Menú Digital"] | Descripción: "Diseño vibrante que captura la esencia de la taquería mexicana con pedidos online integrados y menú digital animado."

- "Bistro Lumière" | Categoría: Fine Dining | Tecnología: React + GSAP | Ubicación: París, Francia | Tags: ["Animaciones", "Reservas", "Galería"] | Descripción: "Elegancia parisina en cada píxel. Sistema de reservas fluido con animaciones GSAP y galería fotográfica inmersiva."

- "Café Nómada" | Categoría: Café | Tecnología: Astro | Ubicación: Barcelona, España | Tags: ["Blog", "E-commerce", "Rápido"] | Descripción: "Web ultrarrápida con blog integrado y tienda de productos de café. Diseño minimalista con toques mediterráneos."

- "Smoke & Fire BBQ" | Categoría: Casual | Tecnología: WordPress | Ubicación: Austin, USA | Tags: ["CMS", "Eventos", "Delivery"] | Descripción: "Presencia web robusta con gestión de eventos y sistema de delivery. Fotografía de primer plano que despierta el apetito."

- "Sakura Sushi Bar" | Categoría: Fine Dining | Tecnología: React | Ubicación: Tokio, Japón | Tags: ["Japonés", "Reservas", "Dark Mode"] | Descripción: "Estética japonesa minimalista con sistema de reservas exclusivo y experiencia visual que honra la tradición del sushi."

FUNCIONALIDADES:

- Filtrado por categoría con animación de layout (Framer Motion layout prop)

- Búsqueda por nombre (input de búsqueda sobre el grid, placeholder "Buscar restaurante...")

- Responsive: móvil 1 columna, tablet 2, desktop 3

- Lazy loading de imágenes con loading="lazy"

- Estados vacíos: si no hay resultados, mostrar mensaje amigable con icono y texto "No se encontraron proyectos. Intenta con otra búsqueda."

- Scroll suave en toda la página

TECNOLOGÍA:

- React + TypeScript

- Tailwind CSS para estilos (usa las clases con los colores exactos proporcionados)

- Framer Motion para animaciones (AnimatePresence, motion.div, layout)

- Lucide React para iconos (Search, X, ExternalLink, MapPin, UtensilsCrossed)

- Componentes reutilizables: RestaurantCard, FilterBar, SearchBar, ProjectModal, BrowserMockup

REQUISITOS ADICIONALES:

- El código debe estar bien estructurado en componentes separados

- Usar un array de objetos para los datos (fácil de editar, exportado desde un archivo data.ts)

- Las imágenes deben usar URLs de placeholder (https://images.unsplash.com o https://via.placeholder.com) que yo pueda reemplazar

- Todo el texto debe estar en español

- El modal debe tener el diseño de "browser mockup" (barra de navegador con dots rojo/amarillo/verde arriba de la imagen) para dar contexto de "sitio web"

- Añade un favicon genérico y meta tags básicos de SEO

- Incluye un footer sencillo con copyright y un enlace a mi portfolio (placeholder)

"Genera el código completo, listo para deploy en Vercel."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6a8770e0-bdbb-41e9-9520-e6fbda4adc72).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
