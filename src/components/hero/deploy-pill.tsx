export function DeployPill() {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/9 bg-[#111827] px-3 py-2 shadow-lg">
      <span className="size-1.5 animate-pulse rounded-full bg-green-400" />

      <span className="font-mono text-[10px] text-white/55">
        Deploy complete ✓
      </span>
    </div>
  );
}