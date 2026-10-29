import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = imageUrlBuilder(sanityClient);

// Tipo derivado do próprio builder (evita depender de caminho interno de tipos).
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
