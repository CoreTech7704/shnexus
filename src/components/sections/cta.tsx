import { ArrowRight, Mail } from "lucide-react";

import { Container } from "@/src/components/ui/container";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#111827] px-6 py-16 text-center shadow-[0_0_80px_rgba(109,94,245,0.1)] sm:px-10 sm:py-20 lg:px-16">
          {/* Background effects */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            {/* Violet bloom */}
            <div className="absolute left-1/2 top-1/2 size-187.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,94,245,0.14),transparent_65%)]" />

            {/* Cyan bloom */}
            <div className="absolute -bottom-48 -right-25 size-112.5 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.09),transparent_65%)]" />

            {/* Top highlight */}
            <div className="absolute inset-x-[15%] top-0 h-px bg-linear-to-r from-transparent via-[#6D5EF5]/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="font-mono mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B7FF8]">
              Let&apos;s Build Something Great
            </p>

            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have an Idea?{" "}
              <span className="gradient-text">
                Let&apos;s Turn It Into Reality.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/40 sm:text-base">
              Tell us what you&apos;re building and we&apos;ll help you turn the
              idea into a fast, modern, and scalable digital product.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@shnexus.dev" className="btn-primary">
                Start Your Project
                <ArrowRight size={15} />
              </a>

              <a
                href="mailto:sarvampatel456@gmail.com"
                className="btn-secondary"
              >
                <Mail size={15} />
                sarvampatel456@gmail.com
              </a>
            </div>

            <p className="mt-6 text-[11px] text-white/20">
              Tell us about your project — no commitment required.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
