import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import type { Faq } from "@/types";

interface FaqListProps {
  faqs: Faq[];
}

/** Native disclosure FAQ list (keyboard accessible by default) with FAQPage structured data. */
export function FaqList({ faqs }: FaqListProps) {
  return (
    <div className="x-faq">
      {faqs.map((faq) => (
        <details key={faq.question}>
          <summary>
            {faq.question}
            <Icon name="chevron" />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
    </div>
  );
}
