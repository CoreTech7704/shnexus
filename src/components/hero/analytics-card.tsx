import { TrendingUp } from "lucide-react";

const bars = [
  55, 40, 72, 58, 85, 63, 90, 68, 95, 78, 88, 98,
];

export function AnalyticsCard() {
  return (
    <div className="rounded-xl border border-white/9 bg-[#111827] p-3.5 shadow-xl">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="text-[10px] font-medium text-white/50">
          Perf Score
        </span>

        <span className="font-mono text-[10px] font-bold text-green-400">
          98 / 100
        </span>
      </div>

      <div className="flex h-12 items-end gap-0.75">
        {bars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className={
              index === bars.length - 1
                ? "flex-1 rounded-xs bg-linear-to-t from-[#6D5EF5] to-[#00C2FF]"
                : index >= bars.length - 3
                  ? "flex-1 rounded-xs bg-[#6D5EF5]/45"
                  : "flex-1 rounded-xs bg-[#6D5EF5]/20"
            }
            style={{
              height: `${height}%`,
            }}
          />
        ))}
      </div>

      <div className="mt-2 flex items-center gap-1">
        <TrendingUp
          size={9}
          className="text-green-400"
        />

        <span className="text-[9px] text-green-400">
          +12% this month
        </span>
      </div>
    </div>
  );
}