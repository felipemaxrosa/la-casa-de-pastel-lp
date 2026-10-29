import { defineType, defineField } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Foto da galeria",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título / legenda", type: "string" }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Texto alternativo (acessibilidade/SEO)", type: "string" }],
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Ordem", type: "number" }),
  ],
  orderings: [
    { name: "orderAsc", title: "Ordem", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "title", media: "image" } },
});
