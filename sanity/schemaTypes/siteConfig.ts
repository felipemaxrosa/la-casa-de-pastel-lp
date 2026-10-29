import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteConfig",
  title: "Configurações do site",
  type: "document",
  fields: [
    defineField({ name: "tagline", title: "Slogan", type: "string" }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp (só números, ex: 5512982753022)",
      type: "string",
    }),
    defineField({ name: "whatsappDisplay", title: "WhatsApp (exibição)", type: "string" }),
    defineField({ name: "phone", title: "Telefone fixo", type: "string" }),
    defineField({ name: "email", title: "E-mail", type: "string" }),
    defineField({
      name: "address",
      title: "Endereço",
      type: "object",
      fields: [
        { name: "street", title: "Rua e número", type: "string" },
        { name: "district", title: "Bairro", type: "string" },
        { name: "city", title: "Cidade", type: "string" },
        { name: "state", title: "Estado", type: "string" },
        { name: "zip", title: "CEP", type: "string" },
      ],
    }),
    defineField({
      name: "geo",
      title: "Coordenadas (mapa)",
      type: "object",
      fields: [
        { name: "lat", title: "Latitude", type: "number" },
        { name: "lng", title: "Longitude", type: "number" },
      ],
    }),
    defineField({
      name: "hoursStore",
      title: "Horário da loja",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "days", title: "Dias", type: "string" },
            { name: "time", title: "Horário", type: "string" },
          ],
          preview: { select: { title: "days", subtitle: "time" } },
        },
      ],
    }),
    defineField({
      name: "hoursDelivery",
      title: "Horário do delivery",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "days", title: "Dias", type: "string" },
            { name: "time", title: "Horário", type: "string" },
          ],
          preview: { select: { title: "days", subtitle: "time" } },
        },
      ],
    }),
    defineField({ name: "facebook", title: "Facebook (URL)", type: "url" }),
    defineField({ name: "instagram", title: "Instagram (URL)", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Configurações do site" }) },
});
