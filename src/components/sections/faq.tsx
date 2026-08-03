import { FAQItem } from "@/src/components/faq/faq-item";
import { Container } from "@/src/components/ui/container";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { faqs } from "@/src/data/faq";

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-50 top-1/2 size-137.5 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.045),transparent_68%)]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <span className="gradient-text">Questions.</span>
            </>
          }
          description="A few quick answers about working with sh Nexus."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
