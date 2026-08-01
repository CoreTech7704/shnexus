interface BrowserMockupProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

export function BrowserMockup({
  children,
  className = "",
  url = "shnexus.dev",
}: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0D1117] shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-[#0A0E14] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-500/60" />
        <span className="size-2.5 rounded-full bg-yellow-500/60" />
        <span className="size-2.5 rounded-full bg-green-500/60" />

        <div className="ml-2 flex h-5 flex-1 items-center gap-2 rounded-md bg-white/5 px-3">
          <span className="size-1.5 rounded-full bg-green-400/60" />

          <span className="font-mono text-[10px] text-white/30">
            {url}
          </span>
        </div>
      </div>

      {children}
    </div>
  );
}