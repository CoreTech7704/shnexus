"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FAQ } from "@/src/types/faq";
import { cn } from "@/src/lib/utils";

interface FAQItemProps {
  faq: FAQ;
}

export function FAQItem({ faq }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-${faq.question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-[#111827] transition-all duration-300",
        open
          ? "border-[#6D5EF5]/25"
          : "border-white/[0.07] hover:border-white/12",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={answerId}
        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
      >
        <span className="font-heading text-[14px] font-semibold text-white/80 sm:text-[15px]">
          {faq.question}
        </span>

        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
            open
              ? "rotate-180 border-[#6D5EF5]/25 bg-[#6D5EF5]/10 text-[#8B7FF8]"
              : "border-white/[0.07] bg-white/2 text-white/30",
          )}
        >
          <ChevronDown size={15} strokeWidth={1.8} />
        </span>
      </button>

      <div
        id={answerId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pr-16 text-[13px] leading-6 text-white/35 sm:px-6 sm:pb-6 sm:pr-20">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
