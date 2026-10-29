// Dados do cardápio. Futuramente: schema `menuCategory` + `menuItem` no Sanity
// (menuItem com `destaque` + `foto` alimenta HIGHLIGHTS).

export type Highlight = {
  name: string;
  desc: string;
  price: string;
  photo: string;
  tag?: string;
};

// "Os Irresistíveis" — itens em destaque (CMS: destaque=true + foto).
export const HIGHLIGHTS: Highlight[] = [
  {
    name: "Pastel de Carne com Queijo",
    desc: "O clássico bem recheado: carne e queijo derretido.",
    price: "R$ 16",
    photo: "/fotos/carne-queijo.jpg",
    tag: "Pastel",
  },
  {
    name: "Panqueca de Costela Premium",
    desc: "Costela desfiada, catupiry e cream cheese numa panqueca generosa.",
    price: "R$ 26",
    photo: "/fotos/panqueca-costela.jpg",
    tag: "Panqueca",
  },
  {
    name: "Rondelli de Brócolis, Queijo e Bacon",
    desc: "Massa fresca recheada de brócolis, queijo e bacon.",
    price: "R$ 24",
    photo: "/fotos/rondelli-brocolis.jpg",
    tag: "Rondelli",
  },
  {
    name: "Nhoque de Queijo",
    desc: "Nhoque macio da casa, no capricho do queijo.",
    price: "R$ 18",
    photo: "/fotos/nhoque-queijo.jpg",
    tag: "Nhoque",
  },
];

export const HERO_PHOTO = "/fotos/hero.png";
export const SOBRE_PHOTO = "/fotos/familia.jpg";

// Prévia do cardápio na home (cards de texto → levam à página completa)
export type TeaserRow = { n: string; p: string };
export type TeaserCat = { title: string; rows: TeaserRow[]; more: string };

export const HOME_CATS: TeaserCat[] = [
  {
    title: "Pastéis salgados",
    rows: [
      { n: "Carne", p: "R$ 14" },
      { n: "Carne c/ Catupiry", p: "R$ 16" },
      { n: "Costela Premium", p: "R$ 22" },
      { n: "Camarão especial", p: "R$ 18" },
    ],
    more: "+60 sabores no cardápio",
  },
  {
    title: "Pastéis doces",
    rows: [
      { n: "Romeu e Julieta", p: "R$ 12" },
      { n: "Chocolate", p: "R$ 14" },
      { n: "Nutella Top", p: "R$ 18" },
      { n: "Kinder Bueno", p: "R$ 18" },
    ],
    more: "+25 sabores no cardápio",
  },
  {
    title: "E tem muito mais",
    rows: [
      { n: "Açaí 300ml", p: "R$ 16" },
      { n: "Caldo de cana", p: "R$ 6" },
      { n: "Panquecas", p: "R$ 20" },
      { n: "Cappuccino", p: "R$ 14" },
    ],
    more: "Ver tudo no cardápio",
  },
];

// Cardápio completo (página /cardapio)
export type Row = { n: string; d?: string; p: string };
export type Variant = { size: string; price: string };
export type Block = { sub?: string; rows?: Row[]; variants?: Variant[] };
export type Category = {
  id: string;
  title: string;
  span2?: boolean;
  cols?: boolean;
  blocks: Block[];
  note?: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "salgados",
    title: "🥟 Pastéis Salgados",
    span2: true,
    cols: true,
    note: "🧀 Turbine: bacon, ovo, milho, azeitona, batata palha, catupiry, cheddar e mais. Borda recheada (cream cheese / catupiry / cheddar) + R$ 6.",
    blocks: [
      {
        sub: "Tradicionais",
        rows: [
          { n: "Queijo", p: "R$ 12" },
          { n: "Carne", p: "R$ 14" },
          { n: "Frango", p: "R$ 10" },
          { n: "Brócolis", p: "R$ 10" },
          { n: "Escarola", p: "R$ 9" },
          { n: "Presunto e Queijo", p: "R$ 12" },
          { n: "Calabresa", d: "calabresa processada", p: "R$ 10" },
          { n: "Bauru", d: "presunto, queijo e tomate", p: "R$ 14" },
          { n: "Pizza", d: "presunto, queijo, tomate e orégano", p: "R$ 14" },
        ],
      },
      {
        sub: "Especiais com Carne / Calabresa / Frango",
        rows: [
          { n: "Carne com Queijo / Catupiry / Cheddar", p: "R$ 16" },
          { n: "Calabresa com Queijo / Catupiry / Cheddar", p: "R$ 12" },
          { n: "Frango com Queijo / Catupiry / Cheddar", p: "R$ 15" },
          { n: "Linguiça com Queijo / Catupiry / Cheddar", p: "R$ 12" },
          { n: "Brócolis com Queijo / Catupiry / Cheddar", p: "R$ 15" },
        ],
      },
      {
        sub: "Queijo / Pernil / Catupiry",
        rows: [
          { n: "Queijo com Tomate", p: "R$ 12" },
          { n: "Queijo com Alho Frito", p: "R$ 12" },
          { n: "Pernil", p: "R$ 16" },
          { n: "Pernil Premium", p: "R$ 18" },
          { n: "Catupiry", p: "R$ 16" },
          { n: "Catupiry com Milho", p: "R$ 18" },
          { n: "Catupiry com Bacon", p: "R$ 16" },
        ],
      },
      {
        sub: "Palmito / Carne Seca",
        rows: [
          { n: "Palmito", p: "R$ 14" },
          { n: "Palmito com Bacon / Cheddar", p: "R$ 16" },
          { n: "Palmito com Carne", p: "R$ 18" },
          { n: "Carne Seca", p: "R$ 18" },
          { n: "Carne Seca com Queijo / Catupiry / Cheddar", p: "R$ 21" },
        ],
      },
      {
        sub: "TOP Especiais",
        rows: [
          { n: "Strogonoff de Carne / Frango", d: "c/ mussarela e batata palha", p: "R$ 18" },
          { n: "Napolitano", d: "presunto, queijo, bacon e tomate", p: "R$ 16" },
          { n: "Portuguesa", d: "presunto, queijo, ovo, ervilha, cebola", p: "R$ 17" },
          { n: "Siciliana", d: "mussarela, bacon, cebola e azeitonas", p: "R$ 17" },
          { n: "Costela", d: "desfiada com tempero da casa", p: "R$ 18" },
          { n: "Costela Premium", d: "catupiry e cream cheese", p: "R$ 22" },
          { n: "Caipira", d: "frango, milho, catupiry e batata palha", p: "R$ 18" },
          { n: "Especial", d: "carne moída, ovo, mussarela e azeitonas", p: "R$ 20" },
          { n: "02 / 03 / 04 Queijos", p: "R$ 16–20" },
          { n: "Camarão", p: "R$ 18" },
          { n: "Camarão Premium", d: "milho e cream cheese", p: "R$ 22" },
          { n: "De Vento", p: "R$ 4" },
        ],
      },
    ],
  },
  {
    id: "doces",
    title: "🍫 Pastéis Doces",
    span2: true,
    cols: true,
    blocks: [
      {
        sub: "Especiais",
        rows: [
          { n: "Doce de Leite · Banana · Romeu e Julieta · Maracujá · Morango", p: "R$ 12" },
          { n: "Chocolate · Paçoca · Prestígio · Galak · Goiabada c/ Cream Cheese", p: "R$ 14" },
          { n: "Avelã", p: "R$ 15" },
          { n: "Churros · Suflair · Banoffe", p: "R$ 16" },
          { n: "Galak com Morango", p: "R$ 17" },
          { n: "Suflair c/ Morango · Chocolate c/ Pistache", p: "R$ 18" },
        ],
      },
      {
        sub: "TOP Especiais & Supreme",
        rows: [
          { n: "Ovomaltine · Chantininho · Banana Real", p: "R$ 14" },
          { n: "Chocolate com Banana · Doce de Leite Premium", p: "R$ 16" },
          { n: "Morango Premium · Banana Premium", p: "R$ 17" },
          { n: "Kinder Bueno · Avelã com Banana · Nutella Top", p: "R$ 18" },
          { n: "Maracujá Premium", d: "chantinho com maracujá", p: "R$ 16" },
          { n: "Banana Especial", d: "banana, leite condensado e mussarela", p: "R$ 17" },
        ],
      },
    ],
  },
  {
    id: "panquecas",
    title: "🥞 Panquecas",
    blocks: [
      {
        sub: "Com 01 recheio · aprox. 450g",
        rows: [
          { n: "Frango · Bauru · Pizza · Brócolis · Calabresa · Linguiça", p: "R$ 20" },
          { n: "Queijo · Carne · Palmito · Carne Seca", p: "R$ 22" },
          { n: "Costela", p: "R$ 24" },
          { n: "Costela Premium", p: "R$ 26" },
        ],
      },
      {
        sub: "Especiais (recheio + queijo)",
        rows: [
          { n: "Carne", p: "R$ 23" },
          { n: "Calabresa · Linguiça · Brócolis · Frango", p: "R$ 22" },
          { n: "Carne Seca", p: "R$ 26" },
        ],
      },
      {
        sub: "Da casa",
        rows: [
          { n: "Caipira · Strogonoff", p: "R$ 24" },
          { n: "Camarão com Queijo", p: "R$ 30" },
        ],
      },
    ],
  },
  {
    id: "massas",
    title: "🍝 Nhoque & Rondelli",
    note: "Adicionais: molho bolonhesa R$ 2 · molho branco R$ 3 · arroz 200g R$ 6.",
    blocks: [
      {
        sub: "Nhoque · aprox. 450g",
        rows: [
          { n: "Recheado", d: "calabresa/carne/frango/brócolis c/ queijo", p: "R$ 18" },
          { n: "Sem recheio", d: "tradicional ou batata doce", p: "R$ 16" },
        ],
      },
      {
        sub: "Rondelli",
        rows: [
          { n: "Carne · Frango · Presunto e Queijo · Calabresa · Brócolis", p: "R$ 20" },
          { n: "Costela c/ Queijo · Costela Premium · Brócolis c/ Bacon", p: "R$ 24" },
          { n: "4 Queijos", p: "R$ 26" },
        ],
      },
    ],
  },
  {
    id: "cafe",
    title: "☕ Café da Manhã & Lanches",
    blocks: [
      {
        sub: "Café da manhã",
        rows: [
          { n: "Pão na Chapa", p: "R$ 4,50" },
          { n: "Pão com Ovo", p: "R$ 8" },
          { n: "Pão com Requeijão", p: "R$ 10" },
          { n: "Pão com Linguiça", p: "R$ 15" },
          { n: "Café Preto · Café com Leite", p: "R$ 4" },
          { n: "Cappuccino Tradicional", p: "R$ 14" },
          { n: "Cappuccino Especial", d: "Nutella ou doce de leite", p: "R$ 18" },
        ],
      },
      {
        sub: "Lanches rápidos",
        rows: [
          { n: "Queijo Quente", p: "R$ 12" },
          { n: "Misto Quente · Lanche Natural", p: "R$ 15" },
          { n: "Lanche de Pernil", p: "R$ 18" },
          { n: "Lanche de Costela", p: "R$ 22" },
        ],
      },
    ],
  },
  {
    id: "salgados-assados",
    title: "🧆 Salgados & Fitness",
    blocks: [
      {
        sub: "Salgados",
        rows: [
          { n: "Enrolados · Esfihas · Empadas · Risole · Pão de Queijo", p: "R$ 8" },
          { n: "Hamburgão Artesanal", p: "R$ 8" },
          { n: "Coxinha · Coxinha c/ Catupiry · Croissant · Kibe", p: "R$ 8,50" },
        ],
      },
      {
        sub: "Cuscuz (consulte disponibilidade)",
        rows: [
          { n: "Pedaço (aprox. 350g)", p: "R$ 8" },
          { n: "Inteiro (aprox. 2,5kg)", p: "R$ 50" },
        ],
      },
      {
        sub: 'Prato Fitness — "La Casa Fit"',
        rows: [
          { n: "Carne moída, frango, ovo, milho, brócolis, bacon", p: "R$ 16" },
        ],
      },
    ],
  },
  {
    id: "acai",
    title: "🍧 Açaí & Caldo de Cana",
    blocks: [
      {
        sub: "Açaí com 2 adicionais",
        variants: [
          { size: "300ml", price: "R$ 16" },
          { size: "500ml", price: "R$ 18" },
          { size: "700ml", price: "R$ 20" },
        ],
        rows: [
          { n: "Turbinar", d: "granola, banana, leite condensado, calda…", p: "+ R$ 4" },
          { n: "Premium", d: "chantininho, nutella, amarena, kit kat", p: "+ R$ 6" },
        ],
      },
      {
        sub: "Caldo de Cana",
        variants: [
          { size: "300ml", price: "R$ 6" },
          { size: "500ml", price: "R$ 8" },
          { size: "1L", price: "R$ 15" },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    title: "🥤 Bebidas & Sucos",
    note: "Águas, água de coco, isotônicos e refrigerantes variados no balcão.",
    blocks: [
      {
        sub: "Refrigerantes",
        rows: [
          { n: "Lata 350ml", p: "R$ 6" },
          { n: "600ml · 1 Litro", p: "R$ 9–11" },
        ],
      },
      {
        sub: "Sucos Naturais",
        variants: [
          { size: "300ml", price: "R$ 14" },
          { size: "500ml", price: "R$ 17" },
          { size: "1L", price: "R$ 20" },
        ],
      },
      {
        sub: "Sucos de Polpa",
        variants: [
          { size: "300ml", price: "R$ 15" },
          { size: "500ml", price: "R$ 18" },
          { size: "1L", price: "R$ 20" },
        ],
      },
    ],
  },
];
