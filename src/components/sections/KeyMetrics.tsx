import type { Metric } from "@/types";

interface KeyMetricsProps {
  metrics: Metric[];
  note?: string;
}

/** Row of large headline figures separated by thin rules. */
export function KeyMetrics({ metrics, note }: KeyMetricsProps) {
  return (
    <section className="x-nums" aria-label="Key numbers">
      <div className="x-wrap">
        <ul>
          {metrics.map((m) => (
            <li key={m.label}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
        {note ? <p className="x-note">{note}</p> : null}
      </div>
    </section>
  );
}
