import type { ElementType, ReactNode } from "react";

interface RevealProps {
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  className?: string;
  /** Extra delay before this element fades in, in milliseconds. */
  delay?: number;
  id?: string;
  children: ReactNode;
}

/**
 * Marks its content to fade up 20px when it scrolls into view. The work is done by
 * <RevealRoot />, which also picks up cards across the site by class name. Server
 * rendered markup is always visible: the hidden state is only applied in the browser,
 * to elements still below the fold, and never under prefers-reduced-motion.
 */
export function Reveal({ as: Tag = "div", className, delay, id, children }: RevealProps) {
  return (
    <Tag className={className} id={id} data-reveal={delay ? String(delay) : ""}>
      {children}
    </Tag>
  );
}
