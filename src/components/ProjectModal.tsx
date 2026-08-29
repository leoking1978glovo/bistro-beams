import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, X } from "lucide-react";
import type { Restaurant } from "@/data";
import { BrowserMockup } from "./BrowserMockup";

export function ProjectModal({
  restaurante,
  onClose,
}: {
  restaurante: Restaurant | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {restaurante && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[rgba(0,0,0,0.85)] p-4 py-10 backdrop-blur-[8px]"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={restaurante.nombre}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-3 top-3 z-10 rounded-lg bg-background/80 p-2 text-ink-muted transition-colors hover:text-ink"
            >
              <X className="size-4" />
            </button>

            <BrowserMockup url={restaurante.url} />

            <img
              src={restaurante.imagen}
              alt={`Vista del sitio web de ${restaurante.nombre}`}
              loading="lazy"
              className="h-[320px] w-full object-cover"
            />

            <div className="space-y-6 p-6 sm:p-8">
              <div>
                <span className="rounded bg-coral px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
                  {restaurante.categoria}
                </span>
                <h2 className="mt-3 text-[1.6rem] font-bold tracking-[-0.5px] text-ink">
                  {restaurante.nombre}
                </h2>
                <p className="mt-2 text-sm leading-[1.6] text-ink-muted">
                  {restaurante.descripcion}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { label: "Tecnología", value: restaurante.tecnologia },
                  { label: "Ubicación", value: restaurante.ubicacion },
                  { label: "Cocina", value: restaurante.cocina },
                  { label: "Año", value: restaurante.anio },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-[10px] border border-border bg-background p-3.5"
                  >
                    <p className="text-[0.75rem] uppercase tracking-wide text-ink-muted">
                      {spec.label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-ink">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {restaurante.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[rgba(255,107,53,0.09)] px-2.5 py-1 text-[0.72rem] font-semibold text-coral"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`https://${restaurante.url}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-[10px] bg-coral px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Visitar sitio web <ExternalLink className="size-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
