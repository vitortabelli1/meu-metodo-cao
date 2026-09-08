import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RegisterSW } from "@/components/RegisterSW";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Método Cão — O guia definitivo para eliminar mordidas e destruição de objetos",
  description:
    "Método prático sem gritos para o seu cachorro parar de morder móveis e destruir objetos. Ebook em PDF por R$ 39,90.",
  manifest: "/manifest.ts",
  appleWebApp: {
    capable: true,
    title: "MEU MÉTODO CÃO",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
