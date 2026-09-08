import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MEU MÉTODO CÃO — Elimine mordidas e destruição de objetos",
    short_name: "MEU MÉTODO CÃO",
    description:
      "Guia definitivo para eliminar mordidas e destruição de objetos. Ebook em PDF por R$ 39,90.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF7ED",
    theme_color: "#080808",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-maskable.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}