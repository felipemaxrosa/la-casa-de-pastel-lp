import { defineType, defineField } from "sanity";

export default defineType({
  name: "menuCategory",
  title: "Categoria do cardápio",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (r) => r.required() }),
    defineField({ name: "order", title: "Ordem", type: "number" }),
  ],
  orderings: [
    { name: "orderAsc", title: "Ordem", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "title" } },
});
