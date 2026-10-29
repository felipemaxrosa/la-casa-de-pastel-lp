import Link from "next/link";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";
import MobileNav from "@/components/MobileNav";

type Props = { active?: "home" | "cardapio" | "contato" };

export default function Header({ active }: Props) {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label={SITE.name}>
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={209}
            height={100}
            priority
            style={{ height: "40px", width: "auto" }}
          />
        </Link>
        <nav className="nav-links" aria-label="Principal">
          <Link href="/" className={active === "home" ? "active" : undefined}>
            Início
          </Link>
          <Link href="/cardapio" className={active === "cardapio" ? "active" : undefined}>
            Cardápio
          </Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/contato" className={active === "contato" ? "active" : undefined}>
            Contato
          </Link>
        </nav>
        <a
          className="btn btn-gold nav-cta-desktop"
          href={waLink("Olá! Quero fazer um pedido 😋")}
          target="_blank"
          rel="noopener"
        >
          Pedir no WhatsApp
        </a>
        <MobileNav active={active} />
      </div>
    </header>
  );
}
