import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/** Outlined uppercase tag, used for story categories and content types. */
export function Badge({ children, className }: BadgeProps) {
  return <span className={cn("x-tag", className)}>{children}</span>;
}
