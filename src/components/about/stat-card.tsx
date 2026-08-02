import type { Stat } from "@/src/types/stat";

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon;

  return (
    <article className="group rounded-2xl border border-white/[0.07] bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6D5EF5]/25">
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-[#6D5EF5]/15 bg-[#6D5EF5]/10 transition-all duration-300 group-hover:border-[#6D5EF5]/30 group-hover:shadow-[0_0_20px_rgba(109,94,245,0.12)]">
        <Icon
          size={18}
          strokeWidth={1.7}
          className="text-[#8B7FF8]"
        />
      </div>

      <h3 className="font-heading mb-1.5 text-[15px] font-semibold text-white">
        {stat.label}
      </h3>

      <p className="text-[12px] leading-relaxed text-white/35">
        {stat.description}
      </p>
    </article>
  );
}