import { CATEGORIAS } from "@/data";

export function FilterBar({
  active,
  onChange,
}: {
  active: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      {CATEGORIAS.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={
              "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 " +
              (isActive
                ? "border-coral bg-coral text-white shadow-[0_4px_18px_rgba(255,107,53,0.35)]"
                : "border-border bg-surface-2 text-ink-muted hover:border-ink-subtle hover:text-ink")
            }
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
