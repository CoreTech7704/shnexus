import { ArrowRight } from "lucide-react";

import { StatCard } from "@/src/components/about/stat-card";
import { Container } from "@/src/components/ui/container";
import { stats } from "@/src/data/stats";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/2 size-150 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,94,245,0.06),transparent_68%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          
          {/* Content */}
          <div>
            <p className="font-mono mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#6D5EF5]">
              About sh Nexus
            </p>

            <h2 className="font-heading mb-6 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Small Team.{" "}
              <span className="gradient-text">
                Serious About Quality.
              </span>
            </h2>

            <div className="max-w-xl space-y-4 text-sm leading-relaxed text-white/40 sm:text-[15px]">
              <p>
                sh Nexus is a modern web development studio focused on
                building fast, scalable, and thoughtfully designed digital
                experiences.
              </p>

              <p>
                We combine modern frontend and backend technologies with
                practical development decisions to create websites and web
                applications that are clean, maintainable, and built around
                real business needs.
              </p>

              <p>
                As a small team, we keep communication direct and stay closely
                involved throughout the entire project — from the first idea
                to deployment.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors duration-200 hover:text-white"
            >
              Work with us

              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                stat={stat}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}