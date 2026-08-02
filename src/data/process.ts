import {
  Compass,
  LayoutList,
  Palette,
  Code2,
  FlaskConical,
  Rocket,
} from "lucide-react";

import type { ProcessStep } from "@/src/types/process";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your goals, audience, requirements, and vision for the project.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define the structure, technology, features, and development roadmap.",
    icon: LayoutList,
  },
  {
    number: "03",
    title: "UI Design",
    description:
      "We shape the visual experience with clean, intuitive, and responsive interfaces.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Development",
    description:
      "We turn the approved direction into a fast, scalable, production-ready product.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We test functionality, responsiveness, performance, and overall user experience.",
    icon: FlaskConical,
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy your product and make sure everything is ready for real users.",
    icon: Rocket,
  },
];
