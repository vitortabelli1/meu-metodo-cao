"use client";

import { useState } from "react";
import { CircleCheck, PawPrint, ShieldCheck } from "lucide-react";
import { type PlanId } from "@/lib/plans";
import { PaymentView } from "@/components/payment/PaymentView";
import { QualifyFunnel } from "@/components/landing/QualifyFunnel";
import { EbookSuccess } from "@/components/payment/EbookSuccess";

type View = "funnel" | "payment" | "success";

export default function Home() {
  const [view, setView] = useState<View>("funnel");
  const [planId, setPlanId] = useState<PlanId>("ebook");

  const handleBuy = () => {
    setPlanId("ebook");
    setView("payment");
  };

  return (
    <>
      {view === "funnel" && (
        <div className="flex min-h-screen flex-col bg-white">
          <header className="border-b border-[#111111]/10 bg-white/85 backdrop-blur-[12px]">
            <div className="mx-auto flex max-w-[880px] items-center justify-between px-6 py-4">
              <span className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white shadow-[0_6px_18px_rgba(249,115,22,.45)]">
                  <PawPrint className="h-5 w-5" />
                </span>
                <span className="text-lg font-extrabold tracking-tight text-[#111111]">
                  MEU MÉTODO{" "}
                  <span className="text-[#C2410C]">CÃO</span>
                </span>
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-[#737373]">
                <ShieldCheck className="h-4 w-4 text-[#C2410C]" />
                <span className="hidden sm:inline">Pagamento 100% seguro</span>
                <span className="sm:hidden">Seguro</span>
              </span>
            </div>
          </header>

          <main className="flex-1">
            <QualifyFunnel onBuy={handleBuy} />
          </main>

          <footer className="border-t border-[#111111]/10 bg-[#FFF7ED] py-8">
            <div className="mx-auto flex max-w-[880px] flex-col items-center justify-between gap-3 px-6 text-sm text-[#737373] sm:flex-row">
              <span className="flex items-center gap-2">
                <PawPrint className="h-4 w-4 text-[#F97316]" />
                <strong className="text-[#111111]">MEU MÉTODO CÃO</strong>
              </span>
              <span className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-[#C2410C]" />
                Ebook em PDF, acesso imediato
              </span>
              <span>© {new Date().getFullYear()} Todos os direitos reservados.</span>
            </div>
          </footer>
        </div>
      )}

      {view !== "funnel" && (
        <div className="min-h-screen bg-[#FFF7ED]">
          <header className="border-b border-[#FED7AA] bg-white/85 backdrop-blur-[12px]">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <button
                type="button"
                onClick={() => setView("funnel")}
                className="flex cursor-pointer items-center gap-2 rounded-lg transition-opacity hover:opacity-80"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#F97316] to-[#111111] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="4" r="2" />
                    <circle cx="18" cy="8" r="2" />
                    <circle cx="20" cy="16" r="2" />
                    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                  </svg>
                </span>
                <span className="text-lg font-bold tracking-tight text-[#111111]">
                  MEU MÉTODO CÃO
                </span>
              </button>
            </div>
          </header>

          <main className="mx-auto max-w-[1240px] px-4 py-10 sm:py-14">
            {view === "payment" && (
              <PaymentView
                planId={planId}
                onBack={() => setView("funnel")}
                onSuccess={() => setView("success")}
              />
            )}

            {view === "success" && <EbookSuccess />}
          </main>
        </div>
      )}
    </>
  );
}