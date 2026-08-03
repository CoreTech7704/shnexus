import { ArrowRight, Handshake, MessageSquare, RefreshCw } from "lucide-react";

import { Container } from "@/src/components/ui/container";
import { SectionHeading } from "@/src/components/ui/section-heading";

const partnershipValues = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Direct conversations, transparent updates, and no unnecessary layers.",
  },
  {
    icon: Handshake,
    title: "Collaborative Approach",
    description:
      "We work closely with clients to turn ideas and requirements into practical solutions.",
  },
  {
    icon: RefreshCw,
    title: "Long-Term Support",
    description:
      "Our goal is to build relationships that continue beyond the initial launch.",
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(109,94,245,0.045),transparent_68%)]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Partnerships"
          title={
            <>
              Building Long-Term{" "}
              <span className="gradient-text">Partnerships.</span>
            </>
          }
          description="We're focused on earning trust through good work, clear communication, and reliable delivery."
        />

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111827]">
          <div className="grid md:grid-cols-3">
            {partnershipValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className={`group p-6 sm:p-7 ${
                    index !== partnershipValues.length - 1
                      ? "border-b border-white/6 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-[#6D5EF5]/15 bg-[#6D5EF5]/10 transition-all duration-300 group-hover:border-[#6D5EF5]/30 group-hover:shadow-[0_0_20px_rgba(109,94,245,0.12)]">
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="text-[#8B7FF8]"
                    />
                  </div>

                  <h3 className="font-heading mb-2 text-[15px] font-semibold text-white">
                    {value.title}
                  </h3>

                  <p className="text-[13px] leading-relaxed text-white/35">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="border-t border-white/6 bg-white/1.5 px-6 py-5 sm:px-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-[13px] leading-relaxed text-white/35">
                We&apos;re growing our portfolio and looking forward to helping
                more businesses turn their ideas into modern digital products.
              </p>

              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-white/60 transition-colors hover:text-white"
              >
                Work with us
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
