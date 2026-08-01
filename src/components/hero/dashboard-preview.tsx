const stats = [
  {
    label: "MRR",
    value: "$12.4K",
    delta: "+18%",
    color: "#22C55E",
  },
  {
    label: "Users",
    value: "2,841",
    delta: "+9%",
    color: "#6D5EF5",
  },
  {
    label: "Uptime",
    value: "99.9%",
    delta: "30d",
    color: "#00C2FF",
  },
] as const;

const sparkline = [
  40, 65, 45, 80, 55, 90, 70, 85, 62, 95, 75, 88,
];

const activity = [
  {
    label: "New signup",
    time: "2m ago",
    color: "#6D5EF5",
  },
  {
    label: "Invoice paid",
    time: "14m ago",
    color: "#22C55E",
  },
  {
    label: "Deploy live",
    time: "1h ago",
    color: "#00C2FF",
  },
] as const;

export function DashboardPreview() {
  return (
    <div className="space-y-2.5 bg-[#0D1117] p-3">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/6 bg-[#111827] p-2.5"
          >
            <p className="mb-1 text-[9px] text-white/30">
              {stat.label}
            </p>

            <p className="font-heading text-sm font-bold text-white">
              {stat.value}
            </p>

            <p
              className="mt-0.5 text-[9px]"
              style={{ color: stat.color }}
            >
              {stat.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="rounded-xl border border-white/6 bg-[#111827] p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[9px] text-white/40">
            Revenue trend
          </span>

          <span className="font-mono text-[9px] text-green-400">
            ↑ 18.4%
          </span>
        </div>

        <div className="flex h-10 items-end gap-0.5">
          {sparkline.map((height, index) => (
            <span
              key={`${height}-${index}`}
              className={
                index >= sparkline.length - 3
                  ? "flex-1 rounded-sm bg-linear-to-t from-[#6D5EF5] to-[#00C2FF]"
                  : "flex-1 rounded-sm bg-[#6D5EF5]/25"
              }
              style={{
                height: `${height}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="rounded-xl border border-white/6 bg-[#111827] p-2.5">
        {activity.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 border-b border-white/4 py-1.5 last:border-0"
          >
            <span
              className="size-1.5 shrink-0 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />

            <span className="flex-1 text-[9px] text-white/60">
              {item.label}
            </span>

            <span className="font-mono text-[9px] text-white/20">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}