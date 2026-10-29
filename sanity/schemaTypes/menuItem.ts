import { defineType, defineField } from "sanity";

export default defineType({
  name: "menuItem",
  title: "Item do cardápio",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Descrição", type: "string" }),
    defineField({ name: "price", title: "Preço (ex: R$ 16)", type: "string" }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "reference",
      to: [{ type: "menuCategory" }],
    }),
    defineField({
      name: "destaque",
      title: '⭐ Destaque (aparece em "Os Irresistíveis" na home)',
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "tag", title: "Etiqueta (ex: Pastel, Panqueca, Doce)", type: "string" }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Texto alternativo", type: "string" }],
    }),
    defineField({ name: "order", title: "Ordem", type: "number" }),
  ],
  orderings: [
    { name: "orderAsc", title: "Ordem", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "name", subtitle: "price", media: "foto" } },
});
