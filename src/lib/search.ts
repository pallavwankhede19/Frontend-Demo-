export interface SearchEntry {
  title: string;
  href: string;
  section: string;
  text: string;
}

/** Returns entries whose title or text contains every word of the query. */
export function searchSite(index: readonly SearchEntry[], query: string, limit = 8): SearchEntry[] {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  return index
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const haystack = `${title} ${entry.section.toLowerCase()} ${entry.text.toLowerCase()}`;
      if (!words.every((w) => haystack.includes(w))) return null;
      const score = words.reduce((acc, w) => acc + (title.includes(w) ? 2 : 1), 0);
      return { entry, score };
    })
    .filter((r): r is { entry: SearchEntry; score: number } => r !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.entry);
}
