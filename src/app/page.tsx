"use client";

import { useState } from "react";
import { type PlanId } from "@/lib/plans";
import { PaymentView } from "@/components/payment/PaymentView";
import { HomeLanding } from "@/components/landing/HomeLanding";
import { EbookSuccess } from "@/components/payment/EbookSuccess";

type View = "landing" | "payment" | "success";

export default function Home() {
  const [view, setView] = useState<View>("landing");
  const [planId, setPlanId] = useState<PlanId>("ebook");

  const handleBuy = () => {
    setPlanId("ebook");
    setView("payment");
  };

  return (
    <>
      {view === "landing" && <HomeLanding onBuy={handleBuy} />}

      {view !== "landing" && (
        <div className="min-h-screen bg-[#FFF7ED]">
          <header className="border-b border-[#FED7AA] bg-white/85 backdrop-blur-[12px]">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <button
                type="button"
                onClick={() => setView("landing")}
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
                onBack={() => setView("landing")}
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