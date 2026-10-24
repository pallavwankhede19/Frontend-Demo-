import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Insight } from "@/types";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  insight: Insight;
  showSummary?: boolean;
}

export function InsightCard({ insight, showSummary = false }: InsightCardProps) {
  return (
    <article className={cn("x-post", `x-post--${insight.type.toLowerCase()}`)}>
      <div className="x-post__band">
        <span>{insight.type}</span>
        <Icon name={insight.icon} />
      </div>
      <div className="x-post__body">
        <h3>{insight.title}</h3>
        {showSummary ? <p className="x-post__sum">{insight.summary}</p> : null}
        <time dateTime={insight.date}>{insight.dateLabel}</time>
        <TextLink href={`/insights/${insight.slug}`}>
          Read more<span className="x-sr">: {insight.title}</span>
        </TextLink>
      </div>
    </article>
  );
}

interface InsightsGridProps {
  insights: Insight[];
  title?: string;
  id?: string;
  showViewAll?: boolean;
  light?: boolean;
}

/** Three insight cards with coloured type bands. */
export function InsightsGrid({
  insights,
  title = "Insights",
  id = "insights",
  showViewAll = true,
  light = false,
}: InsightsGridProps) {
  return (
    <section
      className={cn("x-band", light && "x-band--light")}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="x-wrap">
        <SectionHeading
          id={`${id}-title`}
          title={title}
          action={showViewAll ? <TextLink href="/insights">View all</TextLink> : undefined}
        />
        <div className="x-grid3">
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </div>
    </section>
  );
}
