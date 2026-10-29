import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Depoimento",
  type: "document",
  fields: [
    defineField({ name: "text", title: "Depoimento", type: "text", validation: (r) => r.required() }),
    defineField({ name: "author", title: "Autor", type: "string", validation: (r) => r.required() }),
    defineField({ name: "source", title: "Origem (ex: Facebook)", type: "string" }),
    defineField({
      name: "stars",
      title: "Estrelas",
      type: "number",
      initialValue: 5,
      validation: (r) => r.min(1).max(5),
    }),
    defineField({ name: "order", title: "Ordem", type: "number" }),
  ],
  orderings: [
    { name: "orderAsc", title: "Ordem", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "author", subtitle: "text" } },
});
