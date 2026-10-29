import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  // Ano fixo: evita APIs dinâmicas (new Date) com cacheComponents do Next 16.
  const year = 2026;
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <Image
          src="/logo.png"
          alt={SITE.name}
          width={160}
          height={77}
          style={{ height: "30px", width: "auto" }}
        />
        <div>
          © {year} · {SITE.tagline} ·{" "}
          <a href={SITE.social.facebook} target="_blank" rel="noopener">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
