import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RegisterSW } from "@/components/RegisterSW";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transforme o Comportamento do seu cão — Ebook em PDF por R$ 19,90",
  description:
    "Responda 4 perguntas e descubra por que o seu cachorro age assim. Ebook em PDF com técnicas sem gritos nem punições, por R$ 19,90.",
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