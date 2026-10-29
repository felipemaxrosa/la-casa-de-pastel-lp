import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.listItem()
        .title("Configurações do site")
        .id("siteConfig")
        .child(S.document().schemaType("siteConfig").documentId("siteConfig")),
      S.divider(),
      S.documentTypeListItem("menuItem").title("Itens do cardápio"),
      S.documentTypeListItem("menuCategory").title("Categorias"),
      S.documentTypeListItem("testimonial").title("Depoimentos"),
      S.documentTypeListItem("galleryImage").title("Galeria"),
    ]);
