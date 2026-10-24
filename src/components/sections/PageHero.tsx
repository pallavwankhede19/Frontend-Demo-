import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  kicker?: string;
  subtitle?: ReactNode;
  breadcrumbs: Crumb[];
  image?: string;
  imageAlt?: string;
  /** Extra content under the subtitle, such as buttons or article meta. */
  children?: ReactNode;
}

/** Navy inner-page hero with breadcrumbs; optional photo under a flat navy overlay. */
export function PageHero({
  title,
  kicker,
  subtitle,
  breadcrumbs,
  image,
  imageAlt = "",
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn("x-pagehero x-dark", image && "x-pagehero--photo")}
      aria-labelledby="page-title"
    >
      {image ? <Image src={image} alt={imageAlt} fill priority sizes="100vw" /> : null}
      <div className="x-wrap">
        <Breadcrumbs items={breadcrumbs} />
        <div className="x-pagehero__copy">
          {kicker ? <p className="x-kicker">{kicker}</p> : null}
          <h1 id="page-title">{title}</h1>
          {subtitle ? <p className="x-pagehero__sub">{subtitle}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
