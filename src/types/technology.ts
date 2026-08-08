import type { IconType } from "react-icons";

export interface Technology {
  name: string;
  color?: string;
  icon: IconType;
}

export interface TechCategory {
  title: string;
  icon: IconType;
  technologies: Technology[];
  accent: string;
}
