import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "./CaseStudyCard";
import type { CaseStudy } from "@/types";

interface ClientStoriesProps {
  featured: CaseStudy;
  others: CaseStudy[];
}

/** Featured client story with results and quote, followed by two smaller story cards. */
export function ClientStories({ featured, others }: ClientStoriesProps) {
  return (
    <section className="x-band x-band--light" id="stories" aria-labelledby="stories-title">
      <div className="x-wrap">
        <SectionHeading
          id="stories-title"
          title="Client stories"
          action={<TextLink href="/case-studies">View all case studies</TextLink>}
        />
        <article className="x-story">
          {featured.image ? (
            <div className="x-story__media">
              <Image
                src={featured.image}
                alt={featured.imageAlt ?? ""}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
          ) : null}
          <div className="x-story__body">
            <Badge>{featured.tag}</Badge>
            <h3>{featured.title}</h3>
            <p className="x-story__sum">{featured.summary}</p>
            <div className="x-results">
              {featured.results.map((r) => (
                <div key={r.label}>
                  <b>{r.value}</b>
                  <span>{r.label}</span>
                </div>
              ))}
            </div>
            {featured.quote ? (
              <blockquote className="x-quote">
                <p>“{featured.quote.text}”</p>
                <footer>
                  <b>{featured.quote.name}</b>, {featured.quote.role}, {featured.quote.organisation}
                </footer>
              </blockquote>
            ) : null}
            <TextLink href={`/case-studies/${featured.slug}`} className="mt-4">
              Read the story<span className="x-sr">: {featured.title}</span>
            </TextLink>
          </div>
        </article>
        <div className="x-stories2">
          {others.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
