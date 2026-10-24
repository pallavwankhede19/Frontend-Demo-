export const siteConfig = {
  name: "PRAVAHAx",
  legalName: "PRAVAHAx Systems Engineering Pvt. Ltd.",
  fullName: "PRAVAHAx Systems Engineering",
  tagline: "Engineering the next generation of Indian enterprise",
  description:
    "PRAVAHAx Systems Engineering builds software, AI and connected systems that run manufacturing plants, farms, campuses and operations. Designed, built and supported by one accountable team.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pravahax.com",
  locale: "en_IN",
  email: "hello@pravahax.com",
  /** Placeholder until the public number is confirmed. Rendered as text, not a link. */
  phone: "+91 [phone]",
  address: {
    line: "[Office address]",
    region: "Maharashtra",
    country: "India",
    countryCode: "IN",
  },
  logo: "/images/brand/pravahax-logo.png",
  founder: "Pallav Wankhede",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/pravahax" },
    { label: "X", href: "https://x.com/pravahax" },
    { label: "Instagram", href: "https://www.instagram.com/pravahax" },
  ],
  responseTime: "Our team responds within one business day.",
} as const;

export type SiteConfig = typeof siteConfig;
