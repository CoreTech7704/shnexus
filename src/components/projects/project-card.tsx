import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

import { BrowserMockup } from "@/src/components/ui/browser-mockup";
import type { Project } from "@/src/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Preview = project.preview;

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111827] shadow-[0_1px_3px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
      <BrowserMockup
        className="rounded-none border-0 border-b border-white/[0.07]"
        url={project.url}
      >
        <Preview />
      </BrowserMockup>

      <div className="p-5">
        <h3 className="font-heading mb-2 text-[15px] font-bold text-white">
          {project.title}
        </h3>

        <p className="mb-4 text-[13px] leading-relaxed text-white/40">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono rounded-lg border border-white/[0.07] bg-white/3 px-2 py-1 text-[10px] text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-white/50 transition-colors hover:text-white"
              >
                <ExternalLink size={12} />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-white/50 transition-colors hover:text-white"
              >
                <FiGithub size={12} />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
