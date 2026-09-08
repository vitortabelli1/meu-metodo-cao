# CÃO COMPORTADO — Ebook para eliminar mordidas e destruição de objetos

Página de vendas do ebook **CÃO COMPORTADO** (guia definitivo para eliminar
mordidas e destruição de objetos), com pagamento único via **Mercado Pago** e
entrega do PDF após a confirmação.

## Funcionalidades

- Landing page responsiva (mobile-first) com tema **azul claro** e fotos de cachorro
- Checkout único de **R$ 39,90** com Mercado Pago (PIX, cartão de crédito/débito e boleto via Payment Brick)
- Tela de confirmação com botão de download do ebook (PDF) e suporte via WhatsApp
- PWA instalável no celular
- Dark mode automático (mantido)

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4
- Mercado Pago (Payment Brick + Status Screen)
- framer-motion (animações da landing)

## Configuração

### 1. Instalar dependências

```bash
npm install
```

### 2. Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Descrição |
| --- | --- |
| `MERCADOPAGO_ACCESS_TOKEN` | Access token do Mercado Pago (server-side) |
| `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY` | Chave pública do Mercado Pago |
| `NEXT_PUBLIC_APP_URL` | URL do app (ex.: `http://localhost:3000` em dev) |

### 3. Entregar o ebook

Coloque o arquivo PDF do ebook em `public/ebooks/cao-comportado.pdf`. O botão
"Baixar meu ebook (PDF)" da tela de confirmação baixa exatamente esse arquivo.

### 4. Rodar em desenvolvimento

```bash
npm run dev
```

### 5. Cartões de teste (Mercado Pago)

No modo teste do Mercado Pago, use os cartões de teste fornecidos pelo
[Mercado Pago Developers](https://www.mercadopago.com.br/developers/pt/docs/checkout-bricks/payment-brick/test-cards).

## Fluxo do usuário

1. Acessa a landing do **CÃO COMPORTADO**
2. Clica em **Quero eliminar por R$ 39,90**
3. Finaliza o pagamento no Payment Brick do Mercado Pago (PIX, cartão ou boleto)
4. Ao ser aprovado, vê a tela de confirmação e faz o **download do ebook** em PDF
5. Suporte ao cliente pelo WhatsApp (número em `EbookSuccess.tsx`)

## Deploy (Vercel / Netlify)

1. Suba o repositório para o GitHub
2. Importe na plataforma de preferência (o projeto já usa o padrão Next.js)
3. Configure as variáveis de ambiente (chaves de produção do Mercado Pago)
4. Defina `NEXT_PUBLIC_APP_URL` = URL final do deploy, com `https://`

## Segurança

- O **valor pago é definido somente no servidor** (`/api/mercadopago/pay`), a partir do `PLANS` em `src/lib/plans.ts` — o valor enviado pelo cliente é ignorado
- O access token do Mercado Pago fica apenas no servidor (env vars)
- O webhook opcional de confirmação fica em `/api/webhooks/mercadopago`