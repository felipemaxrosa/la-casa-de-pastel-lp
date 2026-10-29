// Semeia os destaques ("Os Irresistíveis") no Sanity.
// Uso: node --env-file=.env.local scripts/seed-highlights.mjs
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const items = [
  { file: "public/fotos/carne-queijo.jpg", name: "Pastel de Carne com Queijo", desc: "O clássico bem recheado: carne e queijo derretido.", price: "R$ 16", tag: "Pastel", order: 1 },
  { file: "public/fotos/panqueca-costela.jpg", name: "Panqueca de Costela Premium", desc: "Costela desfiada, catupiry e cream cheese numa panqueca generosa.", price: "R$ 26", tag: "Panqueca", order: 2 },
  { file: "public/fotos/rondelli-brocolis.jpg", name: "Rondelli de Brócolis, Queijo e Bacon", desc: "Massa fresca recheada de brócolis, queijo e bacon.", price: "R$ 24", tag: "Rondelli", order: 3 },
  { file: "public/fotos/nhoque-queijo.jpg", name: "Nhoque de Queijo", desc: "Nhoque macio da casa, no capricho do queijo.", price: "R$ 18", tag: "Nhoque", order: 4 },
];

if (!client.config().token) {
  console.error("Faltou SANITY_API_WRITE_TOKEN (rode com: node --env-file=.env.local scripts/seed-highlights.mjs)");
  process.exit(1);
}

for (const it of items) {
  const filename = it.file.split("/").pop();
  const asset = await client.assets.upload("image", readFileSync(resolve(it.file)), { filename });
  const _id = `highlight-${it.order}`;
  await client.createOrReplace({
    _id,
    _type: "menuItem",
    name: it.name,
    description: it.desc,
    price: it.price,
    tag: it.tag,
    destaque: true,
    order: it.order,
    foto: { _type: "image", asset: { _type: "reference", _ref: asset._id } },
  });
  console.log(`OK  ${it.name}  (asset ${asset._id})`);
}
console.log("DONE");
