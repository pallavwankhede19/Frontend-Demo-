import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServicesGridProps {
  services: Service[];
  title?: string;
  intro?: string;
  id?: string;
  light?: boolean;
}

/** Three-column grid of service cards. */
export function ServicesGrid({
  services,
  title = "What we do",
  intro = "End-to-end engineering, from strategy to support.",
  id = "services",
  light = true,
}: ServicesGridProps) {
  return (
    <section
      className={cn("x-band", light && "x-band--light")}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="x-wrap">
        <SectionHeading id={`${id}-title`} title={title} intro={intro} />
        <div className="x-grid3">
          {services.map((service) => (
            <Card
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.summary}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
