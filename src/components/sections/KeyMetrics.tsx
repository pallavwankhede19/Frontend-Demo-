import { CountUp } from "@/components/motion/CountUp";
import type { Metric } from "@/types";

interface KeyMetricsProps {
  metrics: Metric[];
  note?: string;
}

/** Frosted strip of headline figures that overlaps the foot of the home hero. */
export function KeyMetrics({ metrics, note }: KeyMetricsProps) {
  return (
    <section className="x-nums" aria-label="Key numbers">
      <div className="x-wrap">
        <ul>
          {metrics.map((m) => (
            <li key={m.label}>
              <b>
                <CountUp value={m.value} />
              </b>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
        {note ? <p className="x-note">{note}</p> : null}
      </div>
    </section>
  );
}
