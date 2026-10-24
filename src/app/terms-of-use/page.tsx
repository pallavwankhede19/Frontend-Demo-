import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "The terms that apply when you use the PRAVAHAx Systems Engineering website.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      summary="The terms that apply when you access or use this website."
      updated="24 October 2026"
    >
      <p>
        This website is operated by {siteConfig.legalName}. By accessing or using it, you agree to
        these Terms of Use. If you do not agree, please do not use the website.
      </p>
      <h2>1. Use of the website</h2>
      <p>
        You may use this website for lawful purposes only. You must not attempt to gain unauthorised
        access to it, interfere with its operation, introduce malicious code, or use automated means
        to scrape content in a way that places an unreasonable load on our systems.
      </p>
      <h2>2. Intellectual property</h2>
      <p>
        All content on this website, including text, graphics, logos, images and software, is owned
        by or licensed to PRAVAHAx and protected by applicable intellectual property laws. You may
        view and print pages for your personal, non-commercial use. Any other use requires our prior
        written permission. &ldquo;PRAVAHAx&rdquo; and &ldquo;Portal One&rdquo; are trade names of
        PRAVAHAx.
      </p>
      <h2>3. Information on this website</h2>
      <p>
        Content is provided for general information only and does not constitute professional advice
        or an offer to contract. Figures shown in brackets are illustrative placeholders pending
        confirmation. While we try to keep information accurate and current, we make no warranty as
        to its completeness or accuracy.
      </p>
      <h2>4. Third-party links</h2>
      <p>
        This website may link to third-party websites, including social media. We are not
        responsible for their content or privacy practices.
      </p>
      <h2>5. Limitation of liability</h2>
      <p>
        To the extent permitted by law, PRAVAHAx is not liable for any indirect, incidental or
        consequential loss arising from your use of, or inability to use, this website.
      </p>
      <h2>6. Privacy</h2>
      <p>
        Our use of personal data is described in our{" "}
        <Link href="/privacy-policy">Privacy Statement</Link>.
      </p>
      <h2>7. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Courts in [City], Maharashtra have exclusive
        jurisdiction over any dispute arising from them.
      </p>
      <h2>8. Changes and contact</h2>
      <p>
        We may revise these terms at any time by updating this page. Questions? Write to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
