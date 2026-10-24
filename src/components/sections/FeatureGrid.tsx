import { Card } from "@/components/ui/Card";
import type { IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface FeatureItem {
  title: string;
  description: string;
  icon?: IconName;
  href?: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

/** Grid of static cards for capabilities, challenges, modules and similar lists. */
export function FeatureGrid({ items, columns = 3, className }: FeatureGridProps) {
  return (
    <div className={cn(`x-grid${columns}`, className)}>
      {items.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </div>
  );
}
