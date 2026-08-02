import { Container } from "@/src/components/ui/container";
import { ProcessStep } from "@/src/components/ui/process-step";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { processSteps } from "@/src/data/process";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              From Idea to <span className="gradient-text">Launch.</span>
            </>
          }
          description="A transparent workflow from idea to launch."
        />

        <div className="relative">
          {/* Desktop connector */}
          <div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-[linear-gradient(90deg,transparent_0%,#6D5EF5_18%,#00C2FF_50%,#6D5EF5_82%,transparent_100%)] opacity-50 lg:block"
          />

          {/* Mobile connector */}
          <div
            aria-hidden="true"
            className="absolute bottom-7 left-7 top-7 w-px bg-[linear-gradient(180deg,transparent_0%,#6D5EF5_18%,#00C2FF_50%,#6D5EF5_82%,transparent_100%)] opacity-40 lg:hidden"
          />

          <div className="relative grid gap-10 lg:grid-cols-6 lg:gap-4">
            {processSteps.map((step) => (
              <ProcessStep key={step.number} step={step} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
