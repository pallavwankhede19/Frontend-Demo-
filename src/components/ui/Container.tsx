import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Centred 1280px content column with responsive side padding. */
export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return <Tag className={cn("x-wrap", className)}>{children}</Tag>;
}
