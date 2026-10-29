import type { Metadata } from "next";
import { Anton, Barlow, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";

const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = Barlow({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const label = Barlow_Semi_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Pastelaria em Caraguatatuba (Indaiá): pastéis fresquinhos feitos na hora, bem recheados, com produtos frescos e preço honesto. Salgados, doces, açaí, caldo de cana e mais. Peça pelo WhatsApp — com delivery em Caraguá.",
  keywords: [
    "pastel Caraguatatuba",
    "pastelaria Caraguatatuba",
    "melhor pastel de Caraguá",
    "pastel delivery Caraguatatuba",
    "açaí Caraguatatuba",
    "caldo de cana Caraguatatuba",
    "pastel Indaiá",
    "La Casa de Pastel",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Pastéis fresquinhos feitos na hora, bem recheados, em Caraguatatuba. Peça pelo WhatsApp, com delivery.",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Pastéis fresquinhos feitos na hora, bem recheados, em Caraguatatuba. Peça pelo WhatsApp.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} ${label.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
