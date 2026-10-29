import { sanityClient, hasSanity } from "./sanity/client";
import { highlightsQuery, testimonialsQuery, galleryQuery } from "./sanity/queries";
import { HIGHLIGHTS, type Highlight } from "./menu";
import { TESTIMONIALS, type Testimonial } from "./testimonials";

export type GalleryItem = { url: string; alt: string };

// Lê do Sanity quando houver conteúdo; senão cai no conteúdo estático.
// 'use cache' torna os dados cacheáveis (compatível com cacheComponents).

export async function getHighlights(): Promise<Highlight[]> {
  "use cache";
  if (!hasSanity) return HIGHLIGHTS;
  try {
    const data = await sanityClient.fetch<Highlight[]>(highlightsQuery);
    return data && data.length ? data : HIGHLIGHTS;
  } catch {
    return HIGHLIGHTS;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  "use cache";
  if (!hasSanity) return TESTIMONIALS;
  try {
    const data = await sanityClient.fetch<Testimonial[]>(testimonialsQuery);
    return data && data.length ? data : TESTIMONIALS;
  } catch {
    return TESTIMONIALS;
  }
}

export async function getGallery(): Promise<GalleryItem[]> {
  "use cache";
  if (!hasSanity) return [];
  try {
    const data = await sanityClient.fetch<GalleryItem[]>(galleryQuery);
    return (data ?? []).filter((g) => g.url);
  } catch {
    return [];
  }
}
