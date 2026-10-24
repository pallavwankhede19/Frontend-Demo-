import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Statement",
  description:
    "How PRAVAHAx Systems Engineering collects, uses and protects personal data, in line with India's Digital Personal Data Protection Act, 2023.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Statement"
      summary="How we collect, use and protect personal data when you use this website or contact us."
      updated="24 October 2026"
    >
      <p>
        {siteConfig.legalName} (&ldquo;PRAVAHAx&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects
        your privacy. This statement explains how we process personal data as a Data Fiduciary under
        India&rsquo;s Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;) and the
        rules made under it.
      </p>
      <h2>1. Personal data we collect</h2>
      <ul>
        <li>
          <strong>Information you give us:</strong> your name, email address, phone number,
          organisation and the content of your message when you use our contact, demo or careers
          forms, or write to us.
        </li>
        <li>
          <strong>Careers information:</strong> details you share about your education, experience
          and interests when you apply for a role or internship.
        </li>
        <li>
          <strong>Technical information:</strong> limited device and usage data such as browser
          type, pages visited and approximate location derived from your IP address, collected
          through strictly necessary cookies and, with your consent, analytics.
        </li>
      </ul>
      <h2>2. Why we use it</h2>
      <ul>
        <li>To respond to your enquiry and provide the information or services you request.</li>
        <li>To assess applications for employment and internships.</li>
        <li>To operate, secure and improve this website.</li>
        <li>To meet legal, regulatory and accounting obligations.</li>
      </ul>
      <p>
        We process personal data on the basis of your consent, which you give when you submit a
        form, or for legitimate uses permitted by the DPDP Act. We do not sell personal data.
      </p>
      <h2>3. Sharing</h2>
      <p>
        We share personal data only with service providers who process it on our behalf (for example
        hosting, email and analytics providers), under contracts that require them to protect it, or
        where required by law. Some providers may store data outside India; where they do, we
        transfer data only as permitted under the DPDP Act.
      </p>
      <h2>4. Retention</h2>
      <p>
        We keep enquiry data for as long as needed to respond and maintain our business
        relationship, and careers data for up to [12] months after a hiring decision unless you ask
        us to delete it sooner. We then delete or anonymise it.
      </p>
      <h2>5. Your rights</h2>
      <p>Subject to the DPDP Act, you have the right to:</p>
      <ul>
        <li>access a summary of the personal data we process about you;</li>
        <li>correct, complete, update or erase your personal data;</li>
        <li>withdraw consent at any time, without affecting processing before withdrawal;</li>
        <li>
          nominate another person to exercise your rights in the event of death or incapacity; and
        </li>
        <li>
          have your grievances addressed by us, and, if unresolved, by the Data Protection Board of
          India.
        </li>
      </ul>
      <h2>6. Security</h2>
      <p>
        We use reasonable technical and organisational safeguards, including encryption in transit,
        access controls and logging, to protect personal data against unauthorised access, loss or
        misuse. In the event of a personal data breach, we will notify affected persons and the Data
        Protection Board as required by law.
      </p>
      <h2>7. Children</h2>
      <p>
        This website is not directed at children. We do not knowingly collect personal data from
        anyone under 18 without verifiable parental consent.
      </p>
      <h2>8. Cookies</h2>
      <p>
        See our <Link href="/cookie-policy">Cookie Policy</Link> for details of the cookies we use
        and how to control them.
      </p>
      <h2>9. Grievance Officer and contact</h2>
      <p>
        For questions, requests or complaints, contact our Grievance Officer, [Name], at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or write to{" "}
        {siteConfig.legalName}, {siteConfig.address.line}, {siteConfig.address.region},{" "}
        {siteConfig.address.country}. We aim to respond within the time required by law.
      </p>
      <h2>10. Changes</h2>
      <p>
        We may update this statement from time to time. The &ldquo;Last updated&rdquo; date above
        shows when it was last revised.
      </p>
    </LegalPage>
  );
}
