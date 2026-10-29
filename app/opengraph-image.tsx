import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "La Casa de Pastel Caragua — O melhor pastel de Caraguatatuba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const cwd = process.cwd();
  const [bg, logo] = await Promise.all([
    readFile(join(cwd, "public/fotos/carne-queijo.jpg")),
    readFile(join(cwd, "public/logo.png")),
  ]);
  const bgUri = `data:image/jpeg;base64,${bg.toString("base64")}`;
  const logoUri = `data:image/png;base64,${logo.toString("base64")}`;

  let fonts:
    | { name: string; data: ArrayBuffer; style: "normal"; weight: 400 }[]
    | undefined;
  try {
    const anton = await fetch(
      "https://raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf",
    ).then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error("font"))));
    fonts = [{ name: "Anton", data: anton, style: "normal", weight: 400 }];
  } catch {
    fonts = undefined;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#140a0b",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgUri}
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(18,10,11,0.95) 0%, rgba(18,10,11,0.78) 42%, rgba(18,10,11,0.12) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
            padding: "0 72px",
            width: "72%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUri}
            width={440}
            height={211}
            style={{ width: 440, height: 211, objectFit: "contain" }}
          />
          {fonts ? (
            <div
              style={{
                display: "flex",
                fontFamily: "Anton",
                fontSize: 60,
                color: "#f7ece2",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              O melhor pastel de Caraguá
            </div>
          ) : null}
          {fonts ? (
            <div
              style={{
                display: "flex",
                fontFamily: "Anton",
                fontSize: 28,
                color: "#e6a52c",
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              Fresquinho · Bem recheado · Caraguatatuba/SP
            </div>
          ) : null}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
