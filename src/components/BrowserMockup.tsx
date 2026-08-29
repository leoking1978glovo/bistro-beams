export function BrowserMockup({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
      <span className="size-3 rounded-full bg-[#ff5f57]" />
      <span className="size-3 rounded-full bg-[#febc2e]" />
      <span className="size-3 rounded-full bg-[#28c840]" />
      <div className="ml-3 truncate rounded-md bg-background px-3 py-1 text-[0.72rem] text-ink-muted">
        {url}
      </div>
    </div>
  );
}
