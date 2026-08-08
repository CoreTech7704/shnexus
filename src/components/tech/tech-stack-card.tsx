import type { TechCategory } from "@/src/types/technology";

interface TechStackCardProps {
  category: TechCategory;
}

export function TechStackCard({ category }: TechStackCardProps) {
  const CategoryIcon = category.icon;

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
        {/* Category heading */}
        <div className="mb-5 flex items-center gap-2">
          <div
            className="flex size-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:shadow-[0_0_18px_var(--accent)]"
            style={{
              backgroundColor: `${category.accent}12`,
              borderColor: `${category.accent}25`,
            }}
          >
            <CategoryIcon
              size={16}
              strokeWidth={1.8}
              style={{
                color: category.accent,
              }}
            />
          </div>

          <h3 className="font-heading text-[14px] font-semibold uppercase tracking-[0.12em] text-white/75">
            {category.title}
          </h3>
        </div>

        {/* Technologies list */}
        <ul className="space-y-2.5">
          {category.technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <li
                key={technology.name}
                className="group/technology flex items-center gap-2.5 text-[13px] text-white/40 transition-colors duration-200 hover:text-white/70"
              >
                <Icon
                  size={15}
                  className="shrink-0 text-white/30 transition-colors duration-200 group-hover/technology:text-white/55"
                />

                <span>{technology.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
