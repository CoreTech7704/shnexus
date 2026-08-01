import { FeatureCard } from "@/src/components/ui/feature-card";
import { Container } from "@/src/components/ui/container";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { features } from "@/src/data/features";

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,94,245,0.055),transparent_68%)]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why sh Nexus"
          title={
            <>
              Built for Speed.{" "}
              <span className="gradient-text">
                Designed for Growth.
              </span>
            </>
          }
          description="We combine modern technology, thoughtful design, and a straightforward development process to build digital products that perform."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}