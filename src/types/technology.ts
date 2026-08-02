import type { IconType } from "react-icons";

export interface Technology {
  name: string;
  icon: IconType;
}

export interface TechCategory {
  title: string;
  technologies: Technology[];
  accent: string;
}
