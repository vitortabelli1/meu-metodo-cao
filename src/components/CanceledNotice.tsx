"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function Notice() {
  const params = useSearchParams();
  if (params.get("canceled") !== "1") return null;
  return (
    <div className="mx-auto mb-8 flex max-w-xl flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl border border-orange-200 bg-orange-50 px-5 py-4 text-sm font-medium text-orange-800 dark:border-orange-900 dark:bg-orange-950 dark:text-orange-300">
      <span className="min-w-0">Pagamento cancelado. Quando estiver pronto, tente novamente.</span>
      <button
        type="button"
        onClick={() => {
          window.history.replaceState({}, "", "/");
        }}
        className="text-orange-600 hover:text-orange-800"
      >
        ×
      </button>
    </div>
  );
}

export function CanceledNotice() {
  return (
    <Suspense fallback={null}>
      <Notice />
    </Suspense>
  );
}