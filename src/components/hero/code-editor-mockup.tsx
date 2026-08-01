import { Code2 } from "lucide-react";

const codeLines = [
  {
    number: 1,
    tokens: [
      ["import", "#C678DD"],
      [" { useState } ", "#ABB2BF"],
      ["from", "#C678DD"],
      [" 'react'", "#98C379"],
    ],
  },
  {
    number: 2,
    tokens: [],
  },
  {
    number: 3,
    tokens: [
      ["export default ", "#C678DD"],
      ["function", "#61AFEF"],
      [" Hero() {", "#ABB2BF"],
    ],
  },
  {
    number: 4,
    tokens: [
      ["  const ", "#C678DD"],
      ["[active, set] ", "#E06C75"],
      ["= useState(", "#ABB2BF"],
      ["false", "#D19A66"],
      [")", "#ABB2BF"],
    ],
  },
  {
    number: 5,
    tokens: [["  return (", "#ABB2BF"]],
  },
  {
    number: 6,
    tokens: [
      ["    <", "#ABB2BF"],
      ["section", "#E06C75"],
      [" className=", "#ABB2BF"],
      ['"hero"', "#98C379"],
      [">", "#ABB2BF"],
    ],
  },
  {
    number: 7,
    tokens: [
      ["      <", "#ABB2BF"],
      ["h1", "#E06C75"],
      [">Build Fast</", "#ABB2BF"],
      ["h1", "#E06C75"],
      [">", "#ABB2BF"],
    ],
  },
  {
    number: 8,
    tokens: [["  )", "#ABB2BF"]],
  },
  {
    number: 9,
    tokens: [["}", "#ABB2BF"]],
  },
] as const;

export function CodeEditorMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/9 bg-[#0D1117] shadow-xl">
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-[#0A0E14] px-4 py-2">
        <Code2
          size={11}
          className="text-white/30"
        />

        <span className="font-mono text-[10px] text-white/30">
          Hero.tsx
        </span>

        <span className="ml-auto size-1 rounded-full bg-green-400/50" />
      </div>

      <div className="space-y-0.75 p-3.5">
        {codeLines.map((line) => (
          <div
            key={line.number}
            className="flex gap-3 font-mono text-[10px]"
          >
            <span className="w-3 shrink-0 select-none text-right text-white/15">
              {line.number}
            </span>

            <span>
              {line.tokens.map(([text, color], index) => (
                <span
                  key={`${line.number}-${index}`}
                  style={{ color }}
                >
                  {text}
                </span>
              ))}
            </span>
          </div>
        ))}

        <div className="flex gap-3 font-mono text-[10px]">
          <span className="w-3 select-none text-right text-white/15">
            10
          </span>

          <span className="inline-block h-3 w-1.5 translate-y-px animate-pulse rounded-[1px] bg-violet-400/70" />
        </div>
      </div>
    </div>
  );
}