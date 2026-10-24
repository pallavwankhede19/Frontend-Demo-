import Image from "next/image";
import { Button, ButtonGroup } from "@/components/ui/Button";

interface CareersBannerProps {
  title?: string;
  text?: string;
  image?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  id?: string;
}

/** Full-width photo band with a flat navy overlay. */
export function CareersBanner({
  title = "Build what matters. Grow with us.",
  text = "Engineering roles and internships across AI, software, IoT and cloud.",
  image = "/images/careers-team-whiteboard.jpg",
  primary = { label: "Explore careers", href: "/careers" },
  secondary = { label: "Internships", href: "/careers/internships" },
  id = "careers",
}: CareersBannerProps) {
  return (
    <section className="x-photoband x-dark" id={id} aria-labelledby={`${id}-title`}>
      <Image src={image} alt="" fill sizes="100vw" />
      <div className="x-wrap">
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{text}</p>
        <ButtonGroup>
          <Button variant="white" href={primary.href} arrow>
            {primary.label}
          </Button>
          <Button variant="ghost" href={secondary.href}>
            {secondary.label}
          </Button>
        </ButtonGroup>
      </div>
    </section>
  );
}
