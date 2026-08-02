import type { TechCategory } from "@/src/types/technology";

interface TechStackCardProps {
  category: TechCategory;
}

export function TechStackCard({ category }: TechStackCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1"
      style={
        {
          "--accent": category.accent,
        } as React.CSSProperties
      }
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-15"
        style={{
          backgroundColor: category.accent,
        }}
      />

      <div className="relative">
        <div className="mb-5 flex items-center gap-2">
          <span
            className="size-2 rounded-full"
            style={{
              backgroundColor: category.accent,
              boxShadow: `0 0 12px ${category.accent}`,
            }}
          />

          <h3 className="font-heading text-[14px] font-semibold text-white">
            {category.title}
          </h3>
        </div>

        <ul className="space-y-2.5">
          {category.technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <li
                key={technology.name}
                className="flex items-center gap-2.5 text-[13px] text-white/40 transition-colors duration-200 group-hover:text-white/55"
              >
                <Icon size={15} className="shrink-0 text-white/35" />

                <span>{technology.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
