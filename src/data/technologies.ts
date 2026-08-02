import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

import type { TechCategory } from "@/src/types/technology";

export const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    accent: "#6D5EF5",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    accent: "#00C2FF",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    title: "Database",
    accent: "#22C55E",
    technologies: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "Deployment",
    accent: "#F59E0B",
    technologies: [
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    title: "Tools & Design",
    accent: "#EC4899",
    technologies: [
      { name: "Figma", icon: SiFigma },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];
