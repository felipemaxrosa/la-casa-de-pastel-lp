import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MaskIcon from "@/components/MaskIcon";
import { SITE, waLink, mapsEmbed } from "@/lib/site";
import { HERO_PHOTO, SOBRE_PHOTO, HOME_CATS } from "@/lib/menu";
import { getHighlights, getTestimonials, getGallery } from "@/lib/content";

const PILLARS = [
  { ic: "🔥", h: "Feito na hora", p: "Fritamos só quando você pede. Crocância garantida." },
  { ic: "🧀", h: "Recheio generoso", p: "Bem recheado do começo ao fim da mordida." },
  { ic: "🥬", h: "Fresco do dia", p: "Ingredientes comprados no dia, das melhores marcas." },
  { ic: "💸", h: "Preço honesto", p: "Muito sabor que cabe no seu bolso." },
];

export default async function Home() {
  const [highlights, testimonials, gallery] = await Promise.all([
    getHighlights(),
    getTestimonials(),
    getGallery(),
  ]);
  return (
    <>
      <Header active="home" />
      <main>
        {/* HERO */}
        <section className="hero">
          <MaskIcon className="hero-mask mask" />
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">Pastelaria em Caraguatatuba · Litoral Norte</div>
              <h1 style={{ marginTop: ".6rem" }}>
                O <span className="hl">melhor pastel</span> de Caraguá, fresquinho e bem recheado
              </h1>
              <p className="lead">
                Massa crocante feita na hora, recheio sem economia e produtos fresquinhos
                comprados no dia. Peça pelo WhatsApp e receba o sabor que já conquistou Caraguá.
              </p>
              <div className="cta-row">
                <a
                  className="btn btn-gold"
                  href={waLink("Olá! Quero fazer um pedido 😋")}
                  target="_blank"
                  rel="noopener"
                >
                  Fazer meu pedido
                </a>
                <Link className="btn btn-ghost" href="/cardapio">
                  Ver o cardápio
                </Link>
              </div>
              <div className="trust">
                <span className="stars">★★★★★</span> 100% recomendam no Facebook
              </div>
            </div>
            <div className="hero-art">
              <div className="badge">
                <small>Desde</small>
                <b>2017</b>
              </div>
              <div className="hero-photo">
                <Image
                  src={HERO_PHOTO}
                  alt="Pastel recém-saído da fritura, bem recheado"
                  fill
                  priority
                  sizes="(max-width: 820px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="section">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="eyebrow">Nosso jeito</div>
              <h2>Pastel de verdade, sem segredo</h2>
            </div>
            <div className="pillars">
              {PILLARS.map((p) => (
                <div className="pillar reveal" key={p.h}>
                  <div className="ic">{p.ic}</div>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OS IRRESISTÍVEIS */}
        <section className="section">
          <div className="wrap">
            <div className="sec-head center reveal">
              <div className="eyebrow">⭐ Os mais pedidos</div>
              <h2>Os Irresistíveis</h2>
              <p>Os queridinhos que não param de sair do balcão. Escolhidos a dedo pela casa.</p>
            </div>
            <div className="fav-grid">
              {highlights.map((h) => (
                <div className="fav reveal" key={h.name}>
                  <div className="ph">
                    {h.tag ? <span className="tag-top">{h.tag}</span> : null}
                    <Image
                      src={h.photo}
                      alt={h.name}
                      fill
                      sizes="(max-width: 820px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="bd">
                    <h3>{h.name}</h3>
                    <p>{h.desc}</p>
                    <div className="fav-price">{h.price}</div>
                    <a
                      className="order"
                      href={waLink(`Quero pedir: ${h.name}`)}
                      target="_blank"
                      rel="noopener"
                    >
                      Pedir no WhatsApp →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARDÁPIO (prévia) */}
        <section className="section band">
          <div className="wrap">
            <div className="sec-head center reveal">
              <div className="eyebrow">Cardápio</div>
              <h2>Um aperitivo do que te espera</h2>
              <p>
                São mais de 100 opções entre pastéis, panquecas, açaí e bebidas. Aqui vão alguns
                destaques.
              </p>
            </div>
            <div className="hl-grid">
              {HOME_CATS.map((c) => (
                <div className="hl-card reveal" key={c.title}>
                  <div className="bd">
                    <h3>{c.title}</h3>
                    {c.rows.map((r) => (
                      <div className="mi" key={r.n}>
                        <span className="n">{r.n}</span>
                        <span className="dots" />
                        <span className="p">{r.p}</span>
                      </div>
                    ))}
                    <Link className="more" href="/cardapio">
                      {c.more} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link className="btn btn-gold" href="/cardapio">
                Ver o cardápio completo
              </Link>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="section" id="sobre">
          <div className="wrap about">
            <div className="media reveal">
              <Image
                src={SOBRE_PHOTO}
                alt="Mural da história da La Casa de Pastel e a família: Roberto e Doroti, Karina e Paulo, Aparecida e Valdir"
                fill
                sizes="(max-width: 820px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="reveal">
              <div className="eyebrow">Bem-vindos ao nosso sonho</div>
              <h2>Uma história de família, feita com carinho</h2>
              <p>
                Em 2017 começamos na garagem da vovó, com fé e muito trabalho. Em 2018 estávamos
                na feira do rolo do Tinga e, em 2019, realizamos o sonho de inaugurar a La Casa de
                Pastel no bairro do Indaiá. Preservamos nossas origens e atendemos cada cliente com
                empatia — porque pastel bom também é feito de afeto.
              </p>
              <div className="years">
                <div className="year">
                  <b>2017</b>
                  <small>o sonho começa</small>
                </div>
                <div className="year">
                  <b>2018</b>
                  <small>feira do Tinga</small>
                </div>
                <div className="year">
                  <b>2019</b>
                  <small>loja no Indaiá</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="section band" id="depoimentos">
          <div className="wrap">
            <div className="sec-head center reveal">
              <div className="eyebrow">Quem prova, volta</div>
              <h2>O que dizem de nós</h2>
            </div>
            <div className="tgrid">
              {testimonials.map((t, i) => (
                <div className="tcard reveal" key={i}>
                  <div className="st">{"★".repeat(t.stars)}</div>
                  <p>{t.text}</p>
                  <div className="who">
                    {t.who}
                    {t.sub ? <small>{t.sub}</small> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA (aparece só quando há fotos no CMS) */}
        {gallery.length > 0 ? (
          <section className="section">
            <div className="wrap">
              <div className="sec-head center reveal">
                <div className="eyebrow">Galeria</div>
                <h2>De dar água na boca</h2>
              </div>
              <div className="gallery-grid">
                {gallery.map((g, i) => (
                  <div className="gal reveal" key={i}>
                    <Image
                      src={g.url}
                      alt={g.alt || "Foto da La Casa de Pastel"}
                      fill
                      sizes="(max-width: 820px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* CONTATO (teaser) */}
        <section className="section">
          <div className="wrap contact">
            <div className="contact-card reveal">
              <div className="eyebrow">Bateu a fome?</div>
              <h2>Peça agora e receba o flagrante de sabor</h2>
              <p style={{ color: "var(--muted)" }}>
                Estamos no bairro do Indaiá, em Caraguatatuba/SP. Faça seu pedido pelo WhatsApp e
                escolha retirada ou delivery.
              </p>
              <div className="info">
                <div>
                  <span className="k">📍</span>
                  <span>{SITE.address.full}</span>
                </div>
                <div>
                  <span className="k">📱</span>
                  <span>WhatsApp {SITE.whatsappDisplay}</span>
                </div>
              </div>
              <div className="cta-row">
                <a
                  className="btn btn-gold"
                  href={waLink("Olá! Quero fazer um pedido 😋")}
                  target="_blank"
                  rel="noopener"
                >
                  Fazer meu pedido
                </a>
                <Link className="btn btn-ghost" href="/contato">
                  Endereço e horários
                </Link>
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
      </main>
      <Footer />
    </>
  );
}
