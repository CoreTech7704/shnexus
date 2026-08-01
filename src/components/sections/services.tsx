import { Card } from "@/src/components/ui/card";
import { Container } from "@/src/components/ui/container";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { services } from "@/src/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="Everything You Need to Build Better."
          description="From idea to deployment, we build modern digital experiences designed around your business."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title} hover className="group p-6 sm:p-7">
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl border border-[#6D5EF5]/15 bg-[#6D5EF5]/10 transition-all duration-300 group-hover:border-[#6D5EF5]/30 group-hover:bg-[#6D5EF5]/15 group-hover:drop-shadow-[0_0_8px_rgba(109,94,245,0.45)]">
                  <Icon
                    size={20}
                    strokeWidth={1.7}
                    className="text-[#8B7FF8]"
                  />
                </div>

                <h3 className="font-heading mb-2.5 text-lg font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-white/40">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono rounded-md border border-white/6 bg-white/3 px-2 py-1 text-[10px] text-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
