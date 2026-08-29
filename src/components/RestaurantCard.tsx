import { motion } from "motion/react";
import { MapPin, UtensilsCrossed } from "lucide-react";
import type { Restaurant } from "@/data";

export function RestaurantCard({
  restaurante,
  onOpen,
}: {
  restaurante: Restaurant;
  onOpen: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      onClick={onOpen}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:border-[#3a3a44] hover:shadow-card-hover"
    >
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={restaurante.imagen}
          alt={`Diseño web para ${restaurante.nombre}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded bg-coral px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
          {restaurante.categoria}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-[1.15rem] font-bold text-ink">{restaurante.nombre}</h3>
          <p className="mt-0.5 text-[0.78rem] text-coral">{restaurante.url}</p>
        </div>

        <div className="space-y-1 text-[0.84rem] text-ink-subtle">
          <p className="flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {restaurante.ubicacion}
          </p>
          <p className="flex items-center gap-1.5">
            <UtensilsCrossed className="size-3.5" />
            {restaurante.cocina}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {restaurante.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-[rgba(255,107,53,0.09)] px-2.5 py-1 text-[0.72rem] font-semibold text-coral"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
