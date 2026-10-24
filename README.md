# PRAVAHAx Systems Engineering: corporate website

The corporate website for **PRAVAHAx Systems Engineering**, built with Next.js (App Router),
TypeScript and Tailwind CSS. It follows the approved corporate design: deep blue `#0A4D8C`, navy
`#061A33`, light band `#F2F5F9`, accent `#0077C8`, Inter, a 4px radius, flat surfaces and large
photo bands under a flat navy overlay.

## Stack

| Area       | Choice                                                        |
| ---------- | ------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, React 19, Turbopack)                  |
| Language   | TypeScript (strict, `noUncheckedIndexedAccess`)               |
| Styling    | Tailwind CSS 4 with design tokens in `@theme` (`globals.css`) |
| Fonts      | Inter via `next/font/google` (self-hosted at build time)      |
| Images     | `next/image` (AVIF/WebP, responsive `sizes`)                  |
| Validation | zod (shared by the contact form and the `/api/contact` route) |
| Quality    | ESLint (`eslint-config-next`), Prettier, GitHub Actions CI    |

## Getting started

Requires Node.js 22 (see `.nvmrc`; 20.9+ works).

```bash
nvm use
npm install
cp .env.example .env.local   # optional; defaults to https://pravahax.com
npm run dev                  # http://localhost:3000
```

## Scripts

| Script                 | What it does                              |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the development server              |
| `npm run build`        | Production build (pre-renders every page) |
| `npm run start`        | Serve the production build                |
| `npm run lint`         | ESLint across the project                 |
| `npm run typecheck`    | Generate route types, then `tsc --noEmit` |
| `npm run format`       | Format with Prettier                      |
| `npm run format:check` | Check formatting (used in CI)             |

## Folder structure

```
public/images/            Photography and brand assets (kebab-case names)
src/
  app/                    Routes (App Router), metadata routes and the API route
    api/contact/          POST handler stub for the contact and demo forms
    services/[slug]/      Service detail pages (generated from content)
    industries/[slug]/    Industry detail pages
    case-studies/[slug]/  Client stories
    insights/[slug]/      Articles, whitepapers and research
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.png ...
  components/
    layout/               UtilityBar, SiteHeader, MegaMenu, MobileNav, SiteFooter
    sections/             HeroBanner, KeyMetrics, ServicesGrid, IndustryTiles, ClientStories,
                          ProductSpotlight, InsightsGrid, NewsroomList, CareersBanner,
                          LeadershipGrid, ContactCta, PageHero, Breadcrumbs, ContactForm, ...
    ui/                   Button, Card, SectionHeading, Icon, Badge, Container, JsonLd
  content/                Typed content: services, industries, case studies, insights, news,
                          leadership, careers, Portal One, navigation, site config
  lib/                    seo.ts (metadata + JSON-LD helpers), utils.ts, search.ts,
                          contact-schema.ts
  types/                  Shared TypeScript types
```

Conventions: PascalCase for components, kebab-case for routes and assets, camelCase for
functions.

## Editing content

All copy lives in typed files under `src/content/`, so most edits need no component changes.

- **Company details** (email, phone, address, socials): `src/content/site-config.ts`.
- **Services**: `src/content/services.ts`. Adding an entry creates `/services/<slug>`, a menu
  link, a footer link and a sitemap entry automatically.
- **Industries**: `src/content/industries.ts` (same behaviour under `/industries/<slug>`).
- **Case studies**: `src/content/case-studies.ts`. Metric placeholders such as `[XX]%` are
  intentional until the client approves final figures.
- **Insights**: `src/content/insights.ts`. Each article body is a list of sections with an
  optional heading and paragraphs.
- **News, leadership, careers, Portal One, home metrics**: `news.ts`, `leadership.ts`,
  `careers.ts`, `portal-one.ts`, `metrics.ts`.
- **Navigation** (mega menu, footer, legal links): `src/content/navigation.ts`.
- **Site search index**: `src/content/search-index.ts`.

Brand tokens are defined once in the `@theme` block of `src/app/globals.css`; use them as
Tailwind utilities (`bg-brand-navy`, `text-brand-blue`, `rounded-brand`) or CSS variables.

## SEO

- Every page calls `buildMetadata()` from `src/lib/seo.ts`, which sets a unique title,
  description, Open Graph and Twitter tags and **exactly one** canonical URL pointing at the
  page itself. The root layout deliberately sets no canonical.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, a generated Open Graph image and
  JSON-LD (Organization, BreadcrumbList, FAQPage, Article, SoftwareApplication).
- Set `NEXT_PUBLIC_SITE_URL` per environment so absolute URLs are correct.

## Contact form

`src/components/sections/ContactForm.tsx` validates on the client with the zod schema in
`src/lib/contact-schema.ts` and POSTs JSON to `/api/contact`. The route handler validates again
and returns `{ ok: true }`. It is a **stub**: connect it to your CRM or an email provider (for
example Resend or Amazon SES) before launch.

## Accessibility

Semantic landmarks, a skip link, a keyboard-operable mega menu and mobile menu (`aria-expanded`,
Escape closes and returns focus), tabs with arrow-key support, visible focus outlines, alt text,
AA colour contrast, and `prefers-reduced-motion` support.

## Deploying to Vercel

1. Import the repository in Vercel; the Next.js preset is detected automatically.
2. Set `NEXT_PUBLIC_SITE_URL=https://pravahax.com` for Production (and the preview URL for
   Preview if you want correct canonicals there).
3. Deploy. Every page is pre-rendered; only `/api/contact` runs as a serverless function.
4. Point the `pravahax.com` domain at the project in **Settings → Domains**.

A fully static export (`output: "export"`) is possible if the contact form is pointed at an
external form endpoint, because route handlers that accept POST requests need a server.

## Licence

MIT. See `LICENSE`.
