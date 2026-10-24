import Image from "next/image";
import { Button, ButtonGroup } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

interface ProductSpotlightProps {
  label: string;
  title: string;
  line: string;
  points: readonly string[];
  image: string;
  imageAlt: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  id?: string;
  headingLevel?: "h1" | "h2";
}

/** Half-copy, half-photo split used for Portal One. */
export function ProductSpotlight({
  label,
  title,
  line,
  points,
  image,
  imageAlt,
  primary,
  secondary,
  id = "product",
  headingLevel: Heading = "h2",
}: ProductSpotlightProps) {
  return (
    <section className="x-split" id={id} aria-labelledby={`${id}-title`}>
      <div className="x-split__copy">
        <p className="x-label">{label}</p>
        <Heading id={`${id}-title`}>{title}</Heading>
        <p className="x-split__line">{line}</p>
        <ul className="x-checks">
          {points.map((point) => (
            <li key={point}>
              <Icon name="check" />
              {point}
            </li>
          ))}
        </ul>
        <ButtonGroup>
          <Button variant="primary" href={primary.href} arrow>
            {primary.label}
          </Button>
          {secondary ? (
            <Button variant="secondary" href={secondary.href}>
              {secondary.label}
            </Button>
          ) : null}
        </ButtonGroup>
      </div>
      <div className="x-split__media">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
    </section>
  );
}
