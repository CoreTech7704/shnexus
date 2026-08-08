import { BriefcaseBusiness, Code2, Handshake, Zap } from "lucide-react";

import type { Stat } from "@/src/types/stat";

export const stats: Stat[] = [
  {
    label: "Growing Portfolio",
    description: "Projects built across modern web technologies.",
    icon: BriefcaseBusiness,
    accent: "#8B7FF8",
  },
  {
    label: "Modern Tech Stack",
    description: "Current tools chosen for performance and scalability.",
    icon: Code2,
    accent: "#00C2FF",
  },
  {
    label: "Client Focused",
    description: "Solutions shaped around real business requirements.",
    icon: Handshake,
    accent: "#22C55E",
  },
  {
    label: "Fast Delivery",
    description: "Efficient development without compromising quality.",
    icon: Zap,
    accent: "#F59E0B",
  },
];
