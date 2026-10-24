import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Which cookies the PRAVAHAx website uses, why, and how you can control them.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      summary="Which cookies this website uses, why, and how you can control them."
      updated="24 October 2026"
    >
      <p>
        Cookies are small text files stored on your device when you visit a website. This policy
        explains how {siteConfig.legalName} uses cookies and similar technologies on this website.
      </p>
      <h2>1. Cookies we use</h2>
      <ul>
        <li>
          <strong>Strictly necessary:</strong> required for the website to function securely, for
          example to protect forms against abuse. These cannot be switched off.
        </li>
        <li>
          <strong>Analytics (optional):</strong> help us understand which pages are useful so we can
          improve the website. We use these only with your consent and configure them to minimise
          personal data.
        </li>
      </ul>
      <p>We do not use advertising or cross-site tracking cookies.</p>
      <h2>2. Managing cookies</h2>
      <p>
        You can accept or decline optional cookies, and change your choice at any time. You can also
        block or delete cookies in your browser settings; blocking strictly necessary cookies may
        affect how the website works.
      </p>
      <h2>3. More information</h2>
      <p>
        For details of how we handle personal data, see our{" "}
        <Link href="/privacy-policy">Privacy Statement</Link>. Questions? Write to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
