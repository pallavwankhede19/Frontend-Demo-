import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { NewsItem } from "@/types";

interface NewsroomListProps {
  items: NewsItem[];
}

/** Dated list of announcements linking to the newsroom. */
export function NewsroomList({ items }: NewsroomListProps) {
  return (
    <section className="x-band x-band--light" id="newsroom" aria-labelledby="news-title">
      <div className="x-wrap">
        <SectionHeading id="news-title" title="Newsroom" />
        <ul className="x-news">
          {items.map((item) => (
            <li key={item.id}>
              {item.date ? (
                <time dateTime={item.date}>{item.dateLabel}</time>
              ) : (
                <span className="x-news__date">{item.dateLabel}</span>
              )}
              <Link href={item.placeholder ? "/newsroom" : `/newsroom#${item.id}`}>
                {item.title}
              </Link>
              <Icon name="arrow" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
