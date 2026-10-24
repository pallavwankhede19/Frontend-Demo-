import { Button, ButtonGroup } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";

interface ContactCtaProps {
  title?: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

/** Navy call-to-action band placed directly above the footer. */
export function ContactCta({
  title = "Let\u2019s talk about your next system",
  text = `Tell us what you are building. ${siteConfig.responseTime}`,
  buttonLabel = "Contact us",
  buttonHref = "/contact",
}: ContactCtaProps) {
  return (
    <section className="x-cta x-dark" id="contact" aria-labelledby="cta-title">
      <div className="x-wrap">
        <h2 id="cta-title">{title}</h2>
        <p>{text}</p>
        <ButtonGroup>
          <Button variant="white" href={buttonHref} arrow>
            {buttonLabel}
          </Button>
          <Button variant="ghost" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </Button>
        </ButtonGroup>
      </div>
    </section>
  );
}
