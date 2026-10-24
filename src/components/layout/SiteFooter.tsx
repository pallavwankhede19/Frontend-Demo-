import Image from "next/image";
import Link from "next/link";
import { footerColumns, legalLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";

function FooterLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
        <span className="x-sr"> (opens in a new tab)</span>
      </a>
    );
  }
  if (href.endsWith(".xml")) {
    return <a href={href}>{label}</a>;
  }
  return <Link href={href}>{label}</Link>;
}

/** Five-column navy footer with the legal bar. */
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="x-foot x-dark">
      <div className="x-wrap x-foot__grid">
        <div>
          <Link className="x-foot__logo" href="/" aria-label={`${siteConfig.name} home`}>
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={450}
              height={170}
              sizes="96px"
            />
          </Link>
          <p className="x-foot__name">{siteConfig.fullName}</p>
          <address>
            {siteConfig.address.line}, {siteConfig.address.region}, {siteConfig.address.country}
            <br />
            <span>{siteConfig.phone}</span>
            <br />
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </address>
        </div>
        {footerColumns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h2>{column.heading}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="x-foot__bar">
        <div className="x-wrap">
          <p>
            © {year} {siteConfig.legalName}
          </p>
          <nav aria-label="Legal">
            <ul>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
