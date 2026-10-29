import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE, waLink, mapsEmbed, mapsLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato e Horários",
  description:
    "La Casa de Pastel Caragua — Av. Acre, 307, Indaiá, Caraguatatuba/SP. Horários de loja e delivery, WhatsApp (12) 98275-3022. Peça com retirada ou delivery em Caraguá.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <>
      <Header active="contato" />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <div className="eyebrow">O ponto de encontro</div>
            <h1>
              Venha ou peça pra <span className="hl">entregar</span>
            </h1>
            <p>
              Estamos no bairro do Indaiá, em Caraguatatuba/SP. Bateu a fome? É só chamar no
              WhatsApp — com retirada no balcão ou delivery em Caraguá.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap contact">
            <div className="contact-card reveal">
              <div className="eyebrow">Onde nos achar</div>
              <h2>{SITE.name}</h2>
              <div className="info">
                <div>
                  <span className="k">📍</span>
                  <span>
                    {SITE.address.street} — {SITE.address.district}
                    <br />
                    {SITE.address.city}/{SITE.address.state} · CEP {SITE.address.zip}
                  </span>
                </div>
                <div>
                  <span className="k">📱</span>
                  <span>
                    WhatsApp (pedidos): <b>{SITE.whatsappDisplay}</b>
                  </span>
                </div>
                <div>
                  <span className="k">☎️</span>
                  <span>Fixo: {SITE.phone}</span>
                </div>
                <div>
                  <span className="k">✉️</span>
                  <span>{SITE.email}</span>
                </div>
              </div>
              <div className="cta-row">
                <a
                  className="btn btn-gold"
                  href={waLink("Olá! Quero fazer um pedido 😋")}
                  target="_blank"
                  rel="noopener"
                >
                  Chamar no WhatsApp
                </a>
                <a className="btn btn-ghost" href={mapsLink()} target="_blank" rel="noopener">
                  Como chegar
                </a>
              </div>
            </div>
            <div className="map reveal">
              <iframe
                src={mapsEmbed()}
                title={`Mapa — ${SITE.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="wrap two-col">
            <div className="contact-card reveal">
              <div className="eyebrow">Horário de funcionamento</div>
              <h2 style={{ fontSize: "1.6rem", margin: ".3rem 0 .6rem" }}>Loja</h2>
              <div className="hours">
                {SITE.hours.store.map((h) => (
                  <div className="row" key={h.days}>
                    <span className="d">{h.days}</span>
                    <span className="h">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="eyebrow" style={{ marginTop: "1.3rem" }}>
                🛵 Delivery
              </div>
              <div className="hours" style={{ marginTop: ".5rem" }}>
                {SITE.hours.delivery.map((h) => (
                  <div className="row" key={h.days}>
                    <span className="d">{h.days}</span>
                    <span className="h">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-card reveal">
              <div className="eyebrow">Como pedir</div>
              <h2 style={{ fontSize: "1.6rem", margin: ".3rem 0 .6rem" }}>Rápido e quentinho</h2>
              <p style={{ color: "var(--muted)" }}>
                Atendemos em Caraguatatuba/SP. Faça seu pedido pelo WhatsApp e escolha:
              </p>
              <div className="areas">
                <span>📱 Pedido pelo WhatsApp</span>
                <span>🛵 Delivery em Caraguá</span>
                <span>🏠 Retirada no balcão (Indaiá)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="big-cta reveal">
              <div className="eyebrow">Bateu a fome?</div>
              <h2>Seu pastel fresquinho está a um clique</h2>
              <p style={{ color: "var(--muted)", maxWidth: "50ch", margin: ".6rem auto 1.4rem" }}>
                Monte seu pedido e mande pra gente no WhatsApp. A gente prepara na hora e avisa
                quando estiver pronto.
              </p>
              <a
                className="btn btn-gold"
                href={waLink("Olá! Quero fazer um pedido 😋")}
                target="_blank"
                rel="noopener"
              >
                Fazer meu pedido agora
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
