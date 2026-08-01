import {
  Code2,
  Gauge,
  Layers3,
  MonitorSmartphone,
  Server,
  Wrench,
} from "lucide-react";

import type { Service } from "@/src/types/service";

export const services: Service[] = [
  {
    title: "Full Stack Development",
    description:
      "Modern, scalable web applications built from frontend to backend.",
    tags: ["React", "Next.js", "Node.js"],
    icon: Layers3,
  },
  {
    title: "Business Websites",
    description:
      "Professional, responsive websites designed to strengthen your brand and turn visitors into customers.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    icon: MonitorSmartphone,
  },
  {
    title: "UI Implementation",
    description:
      "Pixel-perfect implementation of modern designs into fast, responsive web experiences.",
    tags: ["Figma", "React", "TypeScript"],
    icon: Code2,
  },
  {
    title: "REST API Development",
    description:
      "Secure and scalable APIs with authentication, database integration, and clean architecture.",
    tags: ["Node.js", "Express", "MongoDB"],
    icon: Server,
  },
  {
    title: "Website Optimization",
    description:
      "Improve performance, SEO, responsiveness, accessibility, and overall user experience.",
    tags: ["Performance", "SEO", "Core Web Vitals"],
    icon: Gauge,
  },
  {
    title: "Maintenance & Support",
    description:
      "Reliable bug fixes, feature updates, deployment assistance, and ongoing technical support.",
    tags: ["Updates", "Bug Fixes", "Support"],
    icon: Wrench,
  },
];
