import { ArrowRight, CheckCircle2 } from "lucide-react";

import { HeroVisual } from "@/src/components/hero/hero-visual";

const trustPoints = [
  "Fast Delivery",
  "Clean Code",
  "Responsive Design",
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-14"
    >
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />

        <div className="hero-glow-violet absolute left-[-5%] top-[-15%] size-175 rounded-full" />

        <div className="hero-glow-cyan absolute bottom-[-10%] right-[5%] size-125 rounded-full" />

        <div className="hero-glow-center absolute left-[40%] top-[30%] size-100 rounded-full" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 px-6 py-24 lg:grid-cols-2">
        <div className="relative z-10">
          {/* Availability */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/[0.07] px-3 py-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-green-400" />

            <span className="text-xs font-medium text-green-400/80">
              Open to new projects
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading mb-6 text-5xl font-bold leading-[1.06] tracking-tight text-white md:text-6xl xl:text-[68px]">
            Building <span className="gradient-text">Modern Digital</span>{" "}
            Experiences That Scale.
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-120 text-base leading-relaxed text-white/50 md:text-[17px]">
            We design and build fast, scalable websites and web applications
            that help startups, businesses, and creators grow online using
            modern technologies like React, Next.js, and Node.js.
          </p>

          {/* Actions */}
          <div className="mb-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Start Your Project
              <ArrowRight size={15} />
            </a>

            <a href="#projects" className="btn-secondary">
              Explore Our Work
            </a>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center gap-5">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="shrink-0 text-green-400" />

                <span className="text-xs text-white/40">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
