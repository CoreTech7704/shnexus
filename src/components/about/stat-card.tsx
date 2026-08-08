import type { Stat } from "@/src/types/stat";

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/12">
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-15"
        style={{
          backgroundColor: stat.accent,
        }}
      />

      <div className="relative">
        {/* Icon */}
        <div
          className="mb-4 flex size-10 items-center justify-center rounded-xl border transition-all duration-300 group-hover:shadow-[0_0_18px_var(--accent)]"
          style={
            {
              "--accent": stat.accent,
              backgroundColor: `${stat.accent}12`,
              borderColor: `${stat.accent}25`,
            } as React.CSSProperties
          }
        >
          <Icon
            size={18}
            strokeWidth={1.7}
            style={{
              color: stat.accent,
            }}
          />
        </div>

        {/* Content */}
        <h3 className="font-heading mb-1.5 text-[15px] font-semibold text-white">
          {stat.label}
        </h3>

        <p className="text-[12px] leading-relaxed text-white/40">
          {stat.description}
        </p>
      </div>
    </article>
  );
}
