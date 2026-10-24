import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Industry } from "@/types";
import { cn } from "@/lib/utils";

interface IndustryTilesProps {
  industries: Industry[];
  title?: string;
  intro?: string;
  id?: string;
  light?: boolean;
}

/** Tall industry tiles: photo tiles with a navy overlay, icon tiles on flat colour. */
export function IndustryTiles({
  industries,
  title = "Industries we serve",
  intro,
  id = "industries",
  light = false,
}: IndustryTilesProps) {
  return (
    <section
      className={cn("x-band", light && "x-band--light")}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="x-wrap">
        <SectionHeading id={`${id}-title`} title={title} intro={intro} />
        <ul className="x-inds">
          {industries.map((industry) => (
            <li key={industry.slug}>
              <Link
                className={cn("x-ind", industry.image && "x-ind--photo")}
                href={`/industries/${industry.slug}`}
              >
                {industry.image ? (
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 20vw"
                  />
                ) : (
                  <Icon name={industry.icon} />
                )}
                <span>
                  {industry.title} <Icon name="arrow" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
