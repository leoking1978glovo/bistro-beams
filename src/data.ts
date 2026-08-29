export type Restaurant = {
  id: string;
  nombre: string;
  categoria: string;
  tecnologia: string;
  url: string;
  ubicacion: string;
  cocina: string;
  tags: string[];
  descripcion: string;
  imagen: string;
  anio: string;
};

export const CATEGORIAS = [
  "Todos",
  "Fine Dining",
  "Casual",
  "Mexicano",
  "Café",
  "Bar",
  "Food Truck",
] as const;

export const RESTAURANTES: Restaurant[] = [
  {
    id: "taqueria-el-sol",
    nombre: "Taquería El Sol",
    categoria: "Mexicano",
    tecnologia: "Next.js + Tailwind",
    url: "www.taqueriaelsol.mx",
    ubicacion: "CDMX, México",
    cocina: "Cocina mexicana",
    tags: ["Responsive", "Pedidos Online", "Menú Digital"],
    descripcion:
      "Diseño vibrante que captura la esencia de la taquería mexicana con pedidos online integrados y menú digital animado.",
    imagen:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    anio: "2025",
  },
  {
    id: "bistro-lumiere",
    nombre: "Bistro Lumière",
    categoria: "Fine Dining",
    tecnologia: "React + GSAP",
    url: "www.bistrolumiere.fr",
    ubicacion: "París, Francia",
    cocina: "Alta cocina francesa",
    tags: ["Animaciones", "Reservas", "Galería"],
    descripcion:
      "Elegancia parisina en cada píxel. Sistema de reservas fluido con animaciones GSAP y galería fotográfica inmersiva.",
    imagen:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    anio: "2025",
  },
  {
    id: "cafe-nomada",
    nombre: "Café Nómada",
    categoria: "Café",
    tecnologia: "Astro",
    url: "www.cafenomada.es",
    ubicacion: "Barcelona, España",
    cocina: "Cafetería de especialidad",
    tags: ["Blog", "E-commerce", "Rápido"],
    descripcion:
      "Web ultrarrápida con blog integrado y tienda de productos de café. Diseño minimalista con toques mediterráneos.",
    imagen:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    anio: "2024",
  },
  {
    id: "smoke-and-fire-bbq",
    nombre: "Smoke & Fire BBQ",
    categoria: "Casual",
    tecnologia: "WordPress",
    url: "www.smokeandfirebbq.com",
    ubicacion: "Austin, USA",
    cocina: "Barbacoa texana",
    tags: ["CMS", "Eventos", "Delivery"],
    descripcion:
      "Presencia web robusta con gestión de eventos y sistema de delivery. Fotografía de primer plano que despierta el apetito.",
    imagen:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    anio: "2024",
  },
  {
    id: "sakura-sushi-bar",
    nombre: "Sakura Sushi Bar",
    categoria: "Fine Dining",
    tecnologia: "React",
    url: "www.sakurasushibar.jp",
    ubicacion: "Tokio, Japón",
    cocina: "Sushi tradicional",
    tags: ["Japonés", "Reservas", "Dark Mode"],
    descripcion:
      "Estética japonesa minimalista con sistema de reservas exclusivo y experiencia visual que honra la tradición del sushi.",
    imagen:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    anio: "2025",
  },
];
