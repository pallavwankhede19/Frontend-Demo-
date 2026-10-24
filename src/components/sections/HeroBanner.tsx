import Image from "next/image";
import Link from "next/link";
import { HeroMedia } from "@/components/motion/HeroMedia";
import { Button, ButtonGroup } from "@/components/ui/Button";

interface FeaturedLink {
  kicker: string;
  label: string;
  href: string;
}

interface HeroBannerProps {
  kicker: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  featured: FeaturedLink[];
}

/**
 * Full-bleed photo hero. The copy panel and the three featured cards sit on dark glass
 * over the photo; the photo slowly zooms and drifts with scroll (see HeroMedia).
 */
export function HeroBanner({
  kicker,
  title,
  subtitle,
  image,
  imageAlt,
  primary,
  secondary,
  featured,
}: HeroBannerProps) {
  return (
    <section className="x-hero x-dark" aria-labelledby="hero-title">
      <HeroMedia>
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
      </HeroMedia>
      <div className="x-wrap">
        <div className="x-hero__copy x-glass">
          <p className="x-kicker">{kicker}</p>
          <h1 id="hero-title">{title}</h1>
          <p className="x-hero__sub">{subtitle}</p>
          <ButtonGroup>
            <Button variant="white" href={primary.href} arrow>
              {primary.label}
            </Button>
            <Button variant="ghost" href={secondary.href}>
              {secondary.label}
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <nav className="x-feature" aria-label="Featured">
        <div className="x-wrap">
          <ul>
            {featured.map((item) => (
              <li key={item.href}>
                <Link className="x-glass" href={item.href}>
                  <small>{item.kicker}</small>
                  <span>
                    {item.label}{" "}
                    <span className="x-arr" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}
