"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";

type Props = { active?: "home" | "cardapio" | "contato" };

export default function MobileNav({ active }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="mobilenav">
      <button
        className="hamburger"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      {open
        ? createPortal(
        <div className="mnav-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mnav-top">
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={168}
              height={80}
              style={{ height: "36px", width: "auto" }}
            />
            <button className="mnav-close" aria-label="Fechar menu" onClick={close}>
              ✕
            </button>
          </div>
          <nav className="mnav-links" aria-label="Principal">
            <Link href="/" className={active === "home" ? "active" : undefined} onClick={close}>
              Início
            </Link>
            <Link
              href="/cardapio"
              className={active === "cardapio" ? "active" : undefined}
              onClick={close}
            >
              Cardápio
            </Link>
            <Link href="/#sobre" onClick={close}>
              Sobre
            </Link>
            <Link
              href="/contato"
              className={active === "contato" ? "active" : undefined}
              onClick={close}
            >
              Contato
            </Link>
          </nav>
          <a
            className="btn btn-gold mnav-cta"
            href={waLink("Olá! Quero fazer um pedido 😋")}
            target="_blank"
            rel="noopener"
            onClick={close}
          >
            Pedir no WhatsApp
          </a>
        </div>,
            document.body,
          )
        : null}
    </div>
  );
}
