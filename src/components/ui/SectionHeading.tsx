import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  title: string;
  intro?: ReactNode;
  /** Optional element aligned to the right, e.g. a "View all" link. */
  action?: ReactNode;
  as?: "h2" | "h3";
  className?: string;
}

/** Section title with the 40px blue rule above it, as used across the site. */
export function SectionHeading({
  id,
  title,
  intro,
  action,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("x-head", className)}>
      <div>
        <Tag className="x-title" id={id}>
          {title}
        </Tag>
        {intro ? <p className="x-intro">{intro}</p> : null}
      </div>
      {action}
    </div>
  );
}
