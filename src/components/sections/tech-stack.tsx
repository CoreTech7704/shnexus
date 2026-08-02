import { Container } from "@/src/components/ui/container";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { TechStackCard } from "@/src/components/tech/tech-stack-card";
import { techCategories } from "@/src/data/technologies";

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.035),transparent_65%)]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              Our Tech <span className="gradient-text">Stack.</span>
            </>
          }
          description="Modern tools and technologies chosen for performance, scalability, and maintainability."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {techCategories.map((category) => (
            <TechStackCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
