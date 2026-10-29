import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/cardapio`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/contato`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
