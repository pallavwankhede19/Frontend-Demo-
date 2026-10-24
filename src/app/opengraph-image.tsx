import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";

export const alt = `${siteConfig.fullName}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default Open Graph image: flat navy card with the logo, matching the site design. */
export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/images/brand/pravahax-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#061a33",
        padding: "72px 80px",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{ display: "flex", background: "#ffffff", borderRadius: 4, padding: "12px 18px" }}
        >
          <img src={logoSrc} width={212} height={80} alt="" />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ width: 64, height: 6, background: "#ffffff", marginBottom: 32 }} />
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 940 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#c3cdd9" }}>
          Software · AI & Automation · Hardware & IoT · Cloud, Data & Security
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#c3cdd9" }}>pravahax.com</div>
    </div>,
    size,
  );
}
