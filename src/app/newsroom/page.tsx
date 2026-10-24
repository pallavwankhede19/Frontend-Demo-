import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { news } from "@/content/news";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Newsroom",
  description:
    "News and announcements from PRAVAHAx Systems Engineering, including the launch of Portal One and 2027 engineering internships.",
  path: "/newsroom",
});

export default function NewsroomPage() {
  return (
    <>
      <PageHero
        kicker="Newsroom"
        title="News and announcements"
        subtitle="The latest from PRAVAHAx Systems Engineering."
        breadcrumbs={[{ label: "Newsroom" }]}
      />
      <section className="x-band" aria-labelledby="releases-title">
        <div className="x-wrap">
          <SectionHeading id="releases-title" title="Latest news" />
          <div>
            {news.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="x-release"
                aria-labelledby={`${item.id}-h`}
              >
                {item.date ? (
                  <time className="x-news__date" dateTime={item.date}>
                    {item.dateLabel}
                  </time>
                ) : (
                  <span className="x-news__date">{item.dateLabel}</span>
                )}
                <h2 id={`${item.id}-h`}>{item.title}</h2>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="x-band x-band--light x-band--tight" aria-labelledby="media-title">
        <div className="x-wrap">
          <SectionHeading
            id="media-title"
            title="Media enquiries"
            intro={
              <>
                For interviews, comment or brand assets, write to{" "}
                <a className="x-link" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                .
              </>
            }
          />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
