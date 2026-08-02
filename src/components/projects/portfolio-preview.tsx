const categories = ["Branding", "Motion", "Web"] as const;

const portfolioItems = [
  {
    label: "Rebrand 2024",
    className: "bg-[#1A1D2E]",
  },
  {
    label: "Motion Reel",
    className: "bg-cyan-400/[0.08]",
  },
] as const;

export function PortfolioPreview() {
  return (
    <div className="overflow-hidden bg-[#0A0E14]">
      <div className="relative flex h-16 items-center justify-center bg-linear-to-br from-[#6D5EF5]/15 to-[#00C2FF]/8">
        <div className="text-center">
          <div className="font-heading text-xs font-bold text-white">
            Sarah Chen
          </div>

          <div className="text-[9px] text-white/40">
            Product Designer & Developer
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#6D5EF5]/40 to-transparent" />
      </div>

      <div className="space-y-2 p-3">
        <div className="grid grid-cols-3 gap-1.5">
          {categories.map((category, index) => (
            <div
              key={category}
              className={
                index === 0
                  ? "rounded-lg border border-[#6D5EF5]/30 bg-[#6D5EF5]/10 p-2 text-center"
                  : "rounded-lg border border-white/5 bg-[#111827] p-2 text-center"
              }
            >
              <span
                className={
                  index === 0
                    ? "text-[9px] font-medium text-[#8B7FF8]"
                    : "text-[9px] font-medium text-white/40"
                }
              >
                {category}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {portfolioItems.map((item) => (
            <div
              key={item.label}
              className={`flex h-12 items-end rounded-lg border border-white/5 p-2 ${item.className}`}
            >
              <span className="text-[8px] text-white/50">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
