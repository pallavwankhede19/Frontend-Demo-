import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility",
  description:
    "PRAVAHAx is committed to making its website accessible to everyone, targeting WCAG 2.1 Level AA.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      summary="We want everyone to be able to use this website, whatever their device, ability or assistive technology."
      updated="24 October 2026"
    >
      <h2>Our commitment</h2>
      <p>
        {siteConfig.legalName} aims to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at
        Level AA, and to follow the accessibility principles of India&rsquo;s Guidelines for Indian
        Government Websites (GIGW) where they apply to our work.
      </p>
      <h2>What we have done</h2>
      <ul>
        <li>
          Semantic page structure with landmarks, headings and a &ldquo;Skip to content&rdquo; link.
        </li>
        <li>
          Full keyboard operation of menus, search, tabs and forms, with a visible focus indicator.
        </li>
        <li>Text and interface colours that meet AA contrast ratios.</li>
        <li>
          Text alternatives for meaningful images; decorative images are hidden from screen readers.
        </li>
        <li>Forms with visible labels, clear error messages and status announcements.</li>
        <li>Layouts that adapt to small screens and to text zoom up to 200%.</li>
        <li>Respect for the &ldquo;reduce motion&rdquo; setting in your operating system.</li>
      </ul>
      <h2>Known limitations</h2>
      <p>
        Some documents published by third parties and linked from this website may not be fully
        accessible. We are reviewing our content regularly and fixing issues as we find them.
      </p>
      <h2>Feedback</h2>
      <p>
        If you have difficulty using any part of this website, or need information in a different
        format, please email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with the
        page address and a description of the problem. We aim to respond within five business days.
      </p>
    </LegalPage>
  );
}
