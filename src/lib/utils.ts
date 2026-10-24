/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Finds items by slug, preserving the order of the slugs given. */
export function pickBySlug<T extends { slug: string }>(
  items: readonly T[],
  slugs: readonly string[],
): T[] {
  return slugs
    .map((slug) => items.find((item) => item.slug === slug))
    .filter((item): item is T => Boolean(item));
}

/** Absolute URL for a site path, using the configured site URL. */
export function absoluteUrl(path = "/"): string {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://pravahax.com").replace(/\/$/, "");
  return path === "/" ? base : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
