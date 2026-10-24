import type { Step } from "@/types";
import { cn } from "@/lib/utils";

interface StepsListProps {
  steps: Step[];
  className?: string;
}

/** Numbered process steps (01, 02 ...) with a blue top rule. */
export function StepsList({ steps, className }: StepsListProps) {
  return (
    <ol className={cn("x-steps", steps.length === 3 && "x-steps--3", className)}>
      {steps.map((step) => (
        <li key={step.title}>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
