import Image from "next/image";
import { Button, ButtonGroup } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";

interface ContactCtaProps {
  title?: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
  image?: string;
}

/** Photo call-to-action band above the footer, with the copy on a dark glass panel. */
export function ContactCta({
  title = "Let\u2019s talk about your next system",
  text = `Tell us what you are building. ${siteConfig.responseTime}`,
  buttonLabel = "Contact us",
  buttonHref = "/contact",
  image = "/images/contact-office-banner.jpg",
}: ContactCtaProps) {
  return (
    <section className="x-cta x-dark" id="contact" aria-labelledby="cta-title">
      <Image src={image} alt="" fill sizes="100vw" />
      <div className="x-wrap">
        <div className="x-panel x-glass">
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
      </div>
    </section>
  );
}
