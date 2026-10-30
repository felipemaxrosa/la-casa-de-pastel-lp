import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { waLink } from '@/lib/site';
import { CATEGORIES, type Block } from '@/lib/menu';

export const metadata: Metadata = {
  title: 'Cardápio',
  description:
    'Cardápio completo da La Casa de Pastel Caraguá: pastéis salgados e doces, panquecas, nhoque, rondelli, açaí, caldo de cana, lanches e bebidas — com preços. Peça pelo WhatsApp.',
  alternates: { canonical: '/cardapio' },
};

function BlockView({ block, inCols }: { block: Block; inCols: boolean }) {
  return (
    <div className={inCols ? 'blk' : undefined}>
      {block.sub ? <div className="sub">{block.sub}</div> : null}
      {block.variants ? (
        <div className="price-variants">
          {block.variants.map((v) => (
            <span key={v.size}>
              {v.size} <b>{v.price}</b>
            </span>
          ))}
        </div>
      ) : null}
      {block.rows?.map((r) => (
        <div className="mi" key={r.n}>
          <span className="n">
            {r.n}
            {r.d ? <small>{r.d}</small> : null}
          </span>
          <span className="dots" />
          <span className="p">{r.p}</span>
        </div>
      ))}
    </div>
  );
}

export default function Cardapio() {
  return (
    <>
      <Header active="cardapio" />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <div className="eyebrow">O dossiê do sabor</div>
            <h1>
              Cardápio <span className="hl">completo</span>
            </h1>
            <p>
              Mais de 100 opções feitas na hora, com produtos fresquinhos do
              dia. Escolha o seu e peça pelo WhatsApp — a gente prepara e manda
              o flagrante.
            </p>
            <div>
              <span className="menu-intro-note">
                Não substituímos ingredientes · Não aceitamos cheques
              </span>
            </div>
            <div style={{ marginTop: '1.4rem' }}>
              <a
                className="btn btn-gold"
                href={waLink('Olá! Quero fazer um pedido 😋')}
                target="_blank"
                rel="noopener"
              >
                Fazer meu pedido
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap menu-wrap">
            {CATEGORIES.map((cat) => (
              <div
                className={`mcat reveal${cat.span2 ? ' span2' : ''}`}
                key={cat.id}
              >
                <h2>{cat.title}</h2>
                {cat.cols ? (
                  <div className="cols">
                    {cat.blocks.map((b, i) => (
                      <BlockView block={b} inCols key={i} />
                    ))}
                  </div>
                ) : (
                  cat.blocks.map((b, i) => (
                    <BlockView block={b} inCols={false} key={i} />
                  ))
                )}
                {cat.note ? <div className="note">{cat.note}</div> : null}
              </div>
            ))}
          </div>
          <div
            className="wrap"
            style={{ textAlign: 'center', marginTop: '2.5rem' }}
          >
            <a
              className="btn btn-gold"
              href={waLink('Olá! Quero montar meu pedido 😋')}
              target="_blank"
              rel="noopener"
            >
              Montar meu pedido no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
