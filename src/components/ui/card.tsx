import type { HTMLAttributes } from "react";

import { cn } from "@/src/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = false, ...props }: CardProps) {
  return (
    <div className={cn("card", hover && "card-hover", className)} {...props} />
  );
}
