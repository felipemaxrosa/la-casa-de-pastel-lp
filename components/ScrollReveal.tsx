"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Revela elementos .reveal no scroll. Re-observa a cada mudança de rota
// (navegação SPA não dispara `load`). Na carga inicial, adia para o evento
// `load` para não disputar com a hidratação em streaming do Next.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;
    let raf = 0;

    const run = () => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal:not(.in)"),
      );
      if (!els.length) return;
      const vh = window.innerHeight || document.documentElement.clientHeight || 0;
      const pending: HTMLElement[] = [];
      // Revela imediatamente o que já está (quase) visível na carga; só o que
      // está abaixo da dobra é animado no scroll.
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.88) {
          el.classList.add("in");
        } else {
          pending.push(el);
        }
      });
      if (!pending.length) return;
      if (!("IntersectionObserver" in window)) {
        pending.forEach((e) => e.classList.add("in"));
        return;
      }
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 },
      );
      pending.forEach((e) => io!.observe(e));
    };

    if (document.readyState === "complete") {
      // Navegação SPA ou página já carregada: roda no próximo frame.
      raf = requestAnimationFrame(run);
    } else {
      // Carga inicial: espera o load (hidratação já concluída).
      window.addEventListener("load", run, { once: true });
    }

    return () => {
      io?.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("load", run);
    };
  }, [pathname]);

  return null;
}
