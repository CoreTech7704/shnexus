import {
  Gauge,
  Layers3,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import type { Feature } from "@/src/types/feature";

export const features: Feature[] = [
  {
    title: "Fast Performance",
    description:
      "Optimized experiences built for speed, smooth interactions, and strong Core Web Vitals.",
    icon: Gauge,
  },
  {
    title: "Secure Development",
    description:
      "Modern development practices with security considered throughout the application.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive Design",
    description:
      "Interfaces designed to work beautifully across desktop, tablet, and mobile devices.",
    icon: Smartphone,
  },
  {
    title: "SEO Optimized",
    description:
      "Search-friendly structure, metadata, performance, and semantic markup from the start.",
    icon: Rocket,
  },
  {
    title: "Scalable Architecture",
    description:
      "Clean, maintainable foundations designed to evolve as your product and business grow.",
    icon: Layers3,
  },
  {
    title: "Direct Communication",
    description:
      "Clear communication throughout the project without unnecessary layers between you and the team.",
    icon: MessageCircle,
  },
];