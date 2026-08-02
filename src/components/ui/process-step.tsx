import type { ProcessStep as ProcessStepType } from "@/src/types/process";

interface ProcessStepProps {
  step: ProcessStepType;
}

export function ProcessStep({ step }: ProcessStepProps) {
  const Icon = step.icon;

  return (
    <article className="group relative flex gap-5 lg:block lg:text-center">
      {/* Step bubble */}
      <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#6D5EF5]/25 bg-[#0D0D12] shadow-[0_0_25px_rgba(109,94,245,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#6D5EF5]/50 group-hover:shadow-[0_0_30px_rgba(109,94,245,0.16)] lg:mx-auto lg:mb-6">
        <Icon size={20} strokeWidth={1.6} className="text-[#8B7FF8]" />

        <span className="font-mono absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-[8px] text-white/40">
          {step.number}
        </span>
      </div>

      <div>
        <h3 className="font-heading mb-2 text-[15px] font-semibold text-white">
          {step.title}
        </h3>

        <p className="mx-auto max-w-45 text-[12px] leading-relaxed text-white/35 lg:max-w-40">
          {step.description}
        </p>
      </div>
    </article>
  );
}
