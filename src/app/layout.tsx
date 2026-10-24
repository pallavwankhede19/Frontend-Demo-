import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteTop } from "@/components/layout/SiteTop";
import { RevealRoot } from "@/components/motion/RevealRoot";
import { JsonLd } from "@/components/ui/JsonLd";
import { searchIndex } from "@/content/search-index";
import { siteConfig } from "@/content/site-config";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

// No canonical here on purpose: each page sets its own through buildMetadata(),
// so every route renders exactly one <link rel="canonical">.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.fullName,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.legalName,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    siteName: siteConfig.fullName,
    locale: siteConfig.locale,
  },
  twitter: { card: "summary_large_image", site: "@pravahax" },
};

const JS_FLAG = "document.documentElement.classList.add('x-js')";

export const viewport: Viewport = {
  themeColor: "#061a33",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Flags that JavaScript runs before first paint, so motion and the clear header
            only apply when they can complete. Without it every surface is static and solid. */}
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body>
        <a className="x-skip" href="#main">
          Skip to content
        </a>
        <SiteTop>
          <UtilityBar searchIndex={searchIndex} />
          <SiteHeader />
        </SiteTop>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={organizationJsonLd()} />
        <RevealRoot />
      </body>
    </html>
  );
}
