import fs from "fs";
import path from "path";
import { Resend } from "resend";

// Anexa o PDF que fica em public/ebooks/cao-comportado.pdf (o mesmo usado no
// download pela página de sucesso). Configure no .env:
//   RESEND_API_KEY=re_...
//   EMAIL_FROM="MEU MÉTODO CÃO <seu@dominioverificado.com>"
const EBOOK_PATH = path.join(process.cwd(), "public", "ebooks", "cao-comportado.pdf");
const SENDER = process.env.EMAIL_FROM ?? "MEU MÉTODO CÃO <onboarding@resend.dev>";

function emailHtml(firstName: string): string {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#FFF7ED;padding:32px 16px;">
      <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;border:1px solid #FED7AA;">
        <div style="background:linear-gradient(90deg,#F97316,#111111);padding:24px;text-align:center;">
          <div style="font-size:22px;font-weight:800;color:#fff;">MEU MÉTODO CÃO</div>
          <div style="color:#FDBA74;font-size:14px;margin-top:4px;">Elimine mordidas e destruição de objetos de vez</div>
        </div>
        <div style="padding:28px;">
          <div style="font-size:18px;font-weight:700;color:#111111;">Olá${firstName ? `, ${firstName}` : ""}! Muito obrigado pela sua compra. 🐾</div>
          <p style="color:#44403C;line-height:1.6;margin:14px 0;">
            Pagamento aprovado com sucesso. Em anexo está o seu ebook
            <strong>MEU MÉTODO CÃO</strong> em PDF — baixe, salve e aplique as
            técnicas ainda hoje.
          </p>
          <p style="color:#44403C;line-height:1.6;margin:14px 0;">
            Precisa de ajuda? Chame a gente no suporte e teremos prazer em ajudar.
          </p>
        </div>
        <div style="background:#111111;color:#FDBA74;font-size:12px;padding:14px;text-align:center;">
          © ${new Date().getFullYear()} MEU MÉTODO CÃO — Todos os direitos reservados.
        </div>
      </div>
    </div>
  `;
}

export type EbookSendResult =
  | { ok: true }
  | { ok: false; reason: "no_api_key" | "no_recipient" | "missing_pdf" | "send_error" | "exception" };

export async function sendEbookEmail(to: string, firstName?: string): Promise<EbookSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[ebook-email] RESEND_API_KEY não configurada — pulando envio.");
    return { ok: false, reason: "no_api_key" };
  }
  if (!to) {
    console.error("[ebook-email] E-mail do comprador ausente — pulando envio.");
    return { ok: false, reason: "no_recipient" };
  }

  let pdf: Buffer;
  try {
    pdf = fs.readFileSync(EBOOK_PATH);
  } catch (error) {
    console.error("[ebook-email] PDF não encontrado em", EBOOK_PATH, error);
    return { ok: false, reason: "missing_pdf" };
  }

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from: SENDER,
      to: [to],
      subject: "Obrigado pela compra! Seu ebook MEU MÉTODO CÃO chegou 🐾",
      html: emailHtml((firstName ?? "").trim()),
      attachments: [{ filename: "cao-comportado.pdf", content: pdf }],
    });
    if (error) {
      console.error("[ebook-email] Erro ao enviar via Resend:", error);
      return { ok: false, reason: "send_error" };
    }
    console.log("[ebook-email] Ebook enviado para", to);
    return { ok: true };
  } catch (error) {
    console.error("[ebook-email] Exceção ao enviar:", error);
    return { ok: false, reason: "exception" };
  }
}