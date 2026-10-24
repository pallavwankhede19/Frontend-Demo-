import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { TextLink } from "./Button";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: ReactNode;
  icon?: IconName;
  href?: string;
  linkLabel?: string;
  headingLevel?: "h2" | "h3";
  className?: string;
  children?: ReactNode;
}

/** White card with a 4px top rule that turns blue on hover or focus. */
export function Card({
  title,
  description,
  icon,
  href,
  linkLabel = "Know more",
  headingLevel: Heading = "h3",
  className,
  children,
}: CardProps) {
  return (
    <article className={cn("x-svc", !href && "x-svc--static", className)}>
      {icon ? <Icon name={icon} /> : null}
      <Heading>{title}</Heading>
      <p>{description}</p>
      {children}
      {href ? (
        <TextLink href={href}>
          {linkLabel}
          <span className="x-sr"> about {title}</span>
        </TextLink>
      ) : null}
    </article>
  );
}
