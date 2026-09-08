import { redirect } from "next/navigation";

export const metadata = {
  title: "Pagamento confirmado — MEU MÉTODO CÃO",
};

export default async function SuccessPage() {
  redirect("/");
}