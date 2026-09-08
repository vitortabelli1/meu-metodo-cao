export type PlanId = "ebook";

export interface PlanInfo {
  id: PlanId;
  name: string;
  amount: number;
  reference: string;
  description: string;
}

export const PLANS: Record<PlanId, PlanInfo> = {
  ebook: {
    id: "ebook",
    name: "Ebook",
    amount: 39.9,
    reference: "cao-comportado-ebook",
    description: "Ebook MEU MÉTODO CÃO — Guia definitivo para eliminar mordidas e destruição",
  },
};

export function getPlan(id: PlanId): PlanInfo {
  return PLANS[id];
}