// Configuração central do site. Quando o Sanity estiver conectado,
// estes valores virão do schema `siteConfig` (com estes como fallback).

export const SITE = {
  name: "La Casa de Pastel Caragua",
  shortName: "La Casa de Pastel",
  tagline: "O melhor pastel de Caraguatatuba",
  // Ajustar para o domínio próprio quando registrado:
  url: "https://lacasadepastelcaragua.com.br",
  whatsapp: "5512982753022",
  whatsappDisplay: "(12) 98275-3022",
  phone: "(12) 2101-3022",
  email: "adm.lacasadepastel@gmail.com",
  address: {
    street: "Av. Acre, 307",
    district: "Indaiá",
    city: "Caraguatatuba",
    state: "SP",
    zip: "11665-305",
    full: "Av. Acre, 307 — Indaiá, Caraguatatuba/SP",
  },
  geo: { lat: -23.626853, lng: -45.427039 },
  areaServed: "Caraguatatuba",
  delivery: true,
  hours: {
    store: [
      { days: "Segunda a Sexta", time: "7h às 19h" },
      { days: "Sábado", time: "7h às 14h" },
      { days: "Domingo", time: "Fechado" },
    ],
    delivery: [
      { days: "Segunda a Sexta", time: "10h30 às 18h30" },
      { days: "Sábado", time: "10h30 às 13h30" },
    ],
  },
  social: {
    facebook: "https://www.facebook.com/lacasadepastelcaragua",
  },
} as const;

export function waLink(text?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function mapsEmbed(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(
    SITE.address.full,
  )}&output=embed`;
}

export function mapsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE.address.full,
  )}`;
}
