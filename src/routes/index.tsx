import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { SearchX } from "lucide-react";
import { RESTAURANTES, type Restaurant } from "@/data";
import { FilterBar } from "@/components/FilterBar";
import { SearchBar } from "@/components/SearchBar";
import { RestaurantCard } from "@/components/RestaurantCard";
import { ProjectModal } from "@/components/ProjectModal";
import ChatBubble from "@/components/ChatBubble";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lab del Chef | Diseño Web Gastronómico" },
      {
        name: "description",
        content:
          "Galería de proyectos de páginas web para restaurantes: fine dining, cafés, food trucks y más, con React, Next.js y Astro.",
      },
      { property: "og:title", content: "Lab del Chef" },
      {
        property: "og:description",
        content:
          "Portfolio de diseños web para restaurantes, bares y cafés con filtros por categoría y detalle de cada proyecto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  const [categoria, setCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState<Restaurant | null>(null);

  const resultados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return RESTAURANTES.filter(
      (r) =>
        (categoria === "Todos" || r.categoria === categoria) &&
        (q === "" || r.nombre.toLowerCase().includes(q)),
    );
  }, [categoria, busqueda]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="mx-auto max-w-6xl px-5 py-16">
        <header className="text-center">
          <h1 className="text-[2.5rem] font-extrabold leading-tight tracking-[-1.5px] text-ink">
            Lab del Chef
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-script text-xl leading-relaxed text-ink-muted italic sm:text-2xl">
            Aquí no exponemos proyectos, los servimos en plato caliente. Cada
            web es una receta digital cocinada a punto para abrirte el apetito,
            diseño que se saborea, funcionalidad que llena y una experiencia que
            deja con hambre de más.
          </p>
        </header>

        <div className="mt-10 space-y-6">
          <FilterBar active={categoria} onChange={setCategoria} />
          <SearchBar value={busqueda} onChange={setBusqueda} />
        </div>

        {resultados.length > 0 ? (
          <motion.div
            layout
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {resultados.map((r) => (
                <RestaurantCard
                  key={r.id}
                  restaurante={r}
                  onOpen={() => setSeleccionado(r)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="mt-20 flex flex-col items-center text-center">
            <SearchX className="size-10 text-ink-subtle" />
            <p className="mt-4 text-sm text-ink-muted">
              No se encontraron proyectos. Intenta con otra búsqueda.
            </p>
          </div>
        )}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-[0.8rem] text-ink-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} Lab del Chef</p>
          <a
            href="https://tu-portfolio.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-coral hover:underline"
          >
            Ver mi portfolio
          </a>
        </div>
      </footer>

      <ProjectModal
        restaurante={seleccionado}
        onClose={() => setSeleccionado(null)}
      />

      