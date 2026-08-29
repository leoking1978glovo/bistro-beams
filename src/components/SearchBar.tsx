import { Search } from "lucide-react";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-muted" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar restaurante..."
        aria-label="Buscar restaurante"
        className="w-full rounded-full border border-border bg-surface-2 py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-coral focus:outline-none"
      />
    </div>
  );
}
