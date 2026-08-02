import {
  BriefcaseBusiness,
  Code2,
  Handshake,
  Zap,
} from "lucide-react";

import type { Stat } from "@/src/types/stat";

export const stats: Stat[] = [
  {
    label: "Growing Portfolio",
    description: "Projects built across modern web technologies.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Modern Tech Stack",
    description: "Current tools chosen for performance and scalability.",
    icon: Code2,
  },
  {
    label: "Client Focused",
    description: "Solutions shaped around real business requirements.",
    icon: Handshake,
  },
  {
    label: "Fast Delivery",
    description: "Efficient development without compromising quality.",
    icon: Zap,
  },
];