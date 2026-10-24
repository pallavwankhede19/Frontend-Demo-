import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Leader } from "@/types";

interface LeadershipGridProps {
  leaders: Leader[];
  showBio?: boolean;
  showHeading?: boolean;
}

/** Four-column leadership grid with portrait placeholders. */
export function LeadershipGrid({
  leaders,
  showBio = false,
  showHeading = true,
}: LeadershipGridProps) {
  return (
    <section className="x-band" id="leadership" aria-labelledby="lead-title">
      <div className="x-wrap">
        {showHeading ? (
          <SectionHeading
            id="lead-title"
            title="Leadership"
            action={<TextLink href="/about/leadership">Meet the team</TextLink>}
          />
        ) : (
          <h2 id="lead-title" className="x-sr">
            Leadership team
          </h2>
        )}
        <ul className="x-grid4">
          {leaders.map((leader, index) => (
            <li className="x-person" key={`${leader.name}-${index}`}>
              <div className="x-person__ph">
                <Icon name="person" />
              </div>
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
              {showBio ? <p className="x-person__bio">{leader.bio}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
