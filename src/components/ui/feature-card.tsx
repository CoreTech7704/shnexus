import type { Feature } from "@/src/types/feature";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="group flex gap-4 rounded-2xl border border-white/6 bg-white/1.5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6D5EF5]/20 hover:bg-white/2.5">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#6D5EF5]/15 bg-[#6D5EF5]/10 transition-all duration-300 group-hover:border-[#6D5EF5]/30 group-hover:shadow-[0_0_20px_rgba(109,94,245,0.12)]">
        <Icon size={18} strokeWidth={1.7} className="text-[#8B7FF8]" />
      </div>

      <div>
        <h3 className="font-heading mb-1.5 text-[15px] font-semibold text-white">
          {feature.title}
        </h3>

        <p className="text-[13px] leading-relaxed text-white/35">
          {feature.description}
        </p>
      </div>
    </article>
  );
}
