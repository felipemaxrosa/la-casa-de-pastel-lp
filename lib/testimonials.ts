// Depoimentos. Futuramente virão do schema `testimonial` no Sanity.
export type Testimonial = {
  stars: number;
  text: string;
  who: string;
  sub?: string;
  example?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    text:
      "Os pastéis estavam deliciosos! É a segunda vez que pedimos e continua a mesma qualidade de sempre. O melhor pastel de Caraguatatuba, sem sombra de dúvidas — e o atendimento é ímpar!",
    who: "Cliente",
    sub: "avaliação no Facebook",
  },
  {
    stars: 5,
    text: "Hummm! Que delícia 🙏",
    who: "Marisa R.",
    sub: "cliente no Facebook",
  },
  {
    stars: 5,
    text:
      "Massa crocante, recheio generoso e tudo fresquinho. Virei cliente fiel — recomendo demais!",
    who: "Depoimento exemplo",
    sub: "substituir por review real",
    example: true,
  },
];
