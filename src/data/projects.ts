import { DashboardPreview } from "@/src/components/hero/dashboard-preview";
import { EcommercePreview } from "@/src/components/projects/ecommerce-preview";
import { PortfolioPreview } from "@/src/components/projects/portfolio-preview";
import type { Project } from "@/src/types/project";

export const projects: Project[] = [
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Full-stack analytics platform with real-time data visualisation, user management, and role-based access control.",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    preview: DashboardPreview,
    url: "dashboard.shnexus.dev",
  },
  {
    title: "Developer Portfolio",
    description:
      "High-impact personal portfolio site with case study pages, animated transitions, and integrated contact flow.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    preview: PortfolioPreview,
    url: "portfolio.shnexus.dev",
  },
  {
    title: "Modern Business Website",
    description:
      "Conversion-focused business website with headless CMS, SEO optimisation, and Stripe-powered payments.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Stripe"],
    preview: EcommercePreview,
    url: "business.shnexus.dev",
  },
];
