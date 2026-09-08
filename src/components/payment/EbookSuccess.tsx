"use client";

import { BookOpen, CircleCheckBig, MessageCircle, PawPrint } from "lucide-react";
import Link from "next/link";

const EBOOK_URL = "/ebooks/Elimine_as_Mordidas_e_a_Destruicao_de_Objetos.pdf";

export function EbookSuccess() {
  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <header className="border-b border-[#FED7AA] bg-white/85 backdrop-blur-[12px]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F97316] text-white">
              <PawPrint className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-[#111111]">
MEU MÉTODO CÃO
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDBA74] text-[#111111]">
          <CircleCheckBig className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#111111]">
          Pagamento confirmado!
        </h1>
        <p className="mt-3 text-zinc-600">
          Obrigado pela compra. O ebook <strong>MEU MÉTODO CÃO</strong> está
          liberado — clique abaixo para baixar o PDF
          <strong> Elimine_as_Mordidas_e_a_Destruicao_de_Objetos</strong> e
          aplicar as técnicas para eliminar as mordidas e a destruição de
          objetos.
        </p>

        <div className="mt-8 w-full space-y-3">
          <a
            href={EBOOK_URL}
            download="Elimine_as_Mordidas_e_a_Destruicao_de_Objetos.pdf"
            className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C2410C] px-8 text-base font-bold text-white shadow-[0_10px_30px_rgba(249,115,22,.35)] transition-all hover:-translate-y-0.5 hover:bg-[#111111]"
          >
            <BookOpen className="h-5 w-5" />
            Clique aqui para baixar o PDF Elimine_as_Mordidas_e_a_Destruicao_de_Objetos
          </a>
          <p className="text-xs font-medium text-zinc-400">
            Salve o arquivo no seu celular ou computador para ler quando quiser.
          </p>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Comprei%20o%20ebook%20MEU%20M%C3%89TODO%20C%C3%83O%20e%20preciso%20de%20ajuda."
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-[#FED7AA] bg-white px-8 text-base font-semibold text-[#111111] transition-all hover:-translate-y-0.5 hover:border-[#C2410C]"
          >
            <MessageCircle className="h-5 w-5" />
            Suporte pelo WhatsApp
          </a>

          <Link
            href="/"
            className="inline-flex items-center justify-center pt-2 text-sm font-medium text-zinc-500 hover:text-zinc-700"
          >
            Voltar ao início
          </Link>
        </div>

        <div className="mt-10 w-full rounded-2xl bg-white p-5 text-left shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wide text-[#C2410C]">
            Como acessar o ebook
          </div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
              Clique em “Clique aqui para baixar o PDF” acima para salvar o arquivo.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
              Abra com qualquer leitor de PDF (Adobe, Google Drive, iBooks).
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
              Precisando de ajuda? Fale com a gente no WhatsApp.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}