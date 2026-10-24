import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/Button";
import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  study: CaseStudy;
  showQuote?: boolean;
}

/** Story card with a photo, or a navy panel showing the headline metric. */
export function CaseStudyCard({ study, showQuote = true }: CaseStudyCardProps) {
  return (
    <article className="x-sc">
      {study.image ? (
        <div className="x-sc__media">
          <Image
            src={study.image}
            alt={study.imageAlt ?? ""}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="x-sc__panel">
          {study.panelMetric ? (
            <div>
              <b>{study.panelMetric.value}</b>
              <br />
              <span>{study.panelMetric.label}</span>
            </div>
          ) : (
            <div />
          )}
          <Icon name="trend" />
        </div>
      )}
      <div className="x-sc__body">
        <Badge>{study.tag}</Badge>
        <h3>{study.title}</h3>
        <p>{study.summary}</p>
        {showQuote && study.quote ? (
          <blockquote className="x-quote">
            <p>“{study.quote.text}”</p>
            <footer>
              <b>{study.quote.name}</b>, {study.quote.role}, {study.quote.organisation}
            </footer>
          </blockquote>
        ) : null}
        <TextLink href={`/case-studies/${study.slug}`}>
          Read the story<span className="x-sr">: {study.title}</span>
        </TextLink>
      </div>
    </article>
  );
}
