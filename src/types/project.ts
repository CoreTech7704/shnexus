import type { ComponentType } from "react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
  preview: ComponentType;
  liveUrl?: string;
  githubUrl?: string;
}
