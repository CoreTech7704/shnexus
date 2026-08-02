import { ProjectCard } from "@/src/components/projects/project-card";
import { Container } from "@/src/components/ui/container";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { projects } from "@/src/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects"
          description="A selection of products we've designed, engineered, and shipped."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
