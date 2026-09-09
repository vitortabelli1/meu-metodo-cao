"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bone,
  BookOpen,
  CircleCheck,
  Cookie,
  Dog,
  HeartPulse,
  Package,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  Zap,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const IMG = {
  hero: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=70",
  duo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=70",
  corgi: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1200&q=70",
  puppy: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=70",
  happy: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=70",
};

const PAWS = [
  "left-[4%] top-[14%] -rotate-12",
  "right-[6%] top-[22%] rotate-45",
  "left-[10%] bottom-[18%] rotate-12",
  "right-[14%] bottom-[12%] -rotate-45",
];

function PawField({ className = "text-white/5" }: { className?: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PAWS.map((pos, i) => (
        <PawPrint key={i} className={`absolute h-24 w-24 ${pos} ${className}`} />
      ))}
    </div>
  );
}

const KIBBLES = [
  { pos: "left-[5%] top-[12%]", size: "h-4 w-4", rot: "-rotate-12" },
  { pos: "right-[8%] top-[18%]", size: "h-3 w-3", rot: "rotate-45" },
  { pos: "left-[12%] bottom-[20%]", size: "h-5 w-5", rot: "rotate-12" },
  { pos: "right-[14%] bottom-[14%]", size: "h-4 w-4", rot: "-rotate-45" },
  { pos: "left-[20%] top-[42%]", size: "h-7 w-4", rot: "rotate-[25deg]" },
  { pos: "right-[22%] top-[55%]", size: "h-6 w-3.5", rot: "-rotate-[30deg]" },
  { pos: "left-[32%] bottom-[30%]", size: "h-3.5 w-3.5", rot: "rotate-90" },
  { pos: "right-[6%] bottom-[45%]", size: "h-6 w-4", rot: "rotate-[15deg]" },
];

function KibbleField({ tone = "light" }: { tone?: "light" | "dark" }) {
  const pill =
    tone === "dark"
      ? "bg-gradient-to-br from-[#F97316] to-[#FDBA74] opacity-40 ring-white/25"
      : "bg-gradient-to-br from-[#F97316] to-[#C2410C] opacity-25 ring-[#111111]/10";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {KIBBLES.map((k, i) => (
        <span
          key={i}
          className={`absolute rounded-full ring-2 ${k.size} ${k.pos} ${k.rot} ${pill}`}
        />
      ))}
    </div>
  );
}

export function HomeLanding({ onBuy }: { onBuy: () => void }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#111111]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 h-20 border-b border-[#F97316]/30 bg-[#FFF7ED]/80 backdrop-blur-[18px]">
        <div className="mx-auto flex h-full max-w-[1080px] items-center justify-between px-6">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex cursor-pointer items-center gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white shadow-[0_6px_18px_rgba(249,115,22,.45)]">
              <PawPrint className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-[#111111]">
              MEU MÉTODO{" "}
              <span className="text-[#C2410C]">
                CÃO
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 text-base font-medium text-[#737373] md:flex">
            <button type="button" onClick={() => scrollTo("conteudo")} className="cursor-pointer transition-colors hover:text-[#C2410C]">
              Conteúdo
            </button>
            <button type="button" onClick={() => scrollTo("beneficios")} className="cursor-pointer transition-colors hover:text-[#C2410C]">
              Benefícios
            </button>
            <button type="button" onClick={() => scrollTo("depoimentos")} className="cursor-pointer transition-colors hover:text-[#C2410C]">
              Depoimentos
            </button>
            <button type="button" onClick={() => scrollTo("preco")} className="cursor-pointer transition-colors hover:text-[#C2410C]">
              Preço
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo("preco")}
              className="group hidden h-11 cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[#C2410C] to-[#111111] px-6 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(194,65,12,.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(194,65,12,.6)] md:inline-flex"
            >
              Quero o ebook
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </header>

      {/* FAIXA AMBIENTAL */}
      <div className="border-b border-[#111111]/10 bg-gradient-to-r from-[#F97316] via-[#EA580C] to-[#C2410C] py-2.5">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-center gap-x-8 gap-y-1 px-6 text-sm font-semibold text-white">
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Acesso imediato</span>
          <span className="flex items-center gap-1.5"><Zap className="h-4 w-4" /> Entrega via PDF</span>
          <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4" /> +7.000 tutores</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C2410C] via-[#111111] to-[#080808]">
        <div
          className="pointer-events-none absolute -left-20 -top-24 h-[30rem] w-[30rem] rounded-full bg-[#F97316]/15 blur-3xl"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#F97316]/10 blur-3xl"
        />
        <PawField className="text-white/10" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(249,115,22,.9) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto grid max-w-[1080px] items-center gap-12 px-6 pb-14 pt-14 sm:gap-12 sm:pb-[80px] sm:pt-[80px] lg:grid-cols-2">
          <motion.div {...fadeUp} className="text-center sm:text-left">
            <h1 className="mx-auto mt-6 max-w-xl text-[30px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:mx-0 sm:text-[40px] sm:leading-[1.05] lg:text-[48px]">
              Aprenda a linguagem do seu{" "}
              <span className="bg-gradient-to-r from-[#FDBA74] to-[#F97316] bg-clip-text text-transparent">
                cachorro
              </span>{" "}
              e transforme a convivência.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-[#D6D3D1] sm:mx-0 sm:mt-6 sm:text-base">
              Entenda os sinais, emoções e necessidades que influenciam o
              comportamento canino e descubra como orientar seu pet de forma
              positiva, sem gritos ou punições.
            </p>
            <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:mx-0 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                type="button"
                onClick={() => scrollTo("preco")}
                className="group inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#C2410C] px-8 text-base font-extrabold text-white shadow-[0_14px_40px_rgba(249,115,22,.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(249,115,22,.55)] sm:w-auto"
              >
                Quero o ebook
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("conteudo")}
                className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#111111]/15 bg-white/70 px-8 text-base font-bold text-[#111111] shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                Ver o que tem dentro
              </button>
            </div>
            <div className="mt-8 flex flex-col items-center gap-2 text-sm font-medium text-[#D6D3D1] sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:justify-start">
              <span className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-[#C2410C]" /> Pagamento 100% seguro</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-white/10 blur-xl" />
            <div className="animate-float relative mx-auto w-full max-w-md overflow-hidden rounded-[32px] border border-white/80 bg-white p-3 shadow-[0_40px_100px_rgba(0,0,0,.5)]">
              <div className="relative overflow-hidden rounded-[24px]">
                <img
                  src={IMG.hero}
                  alt="Cachorro feliz deitado na grama"
                  className="h-80 w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#C2410C]/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-1.5 text-xs font-bold text-[#111111] backdrop-blur">
                  <HeartPulse className="h-3.5 w-3.5 text-[#C2410C]" /> Cão calmo e feliz
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F97316] to-[#C2410C] text-white shadow-[0_8px_20px_rgba(249,115,22,.45)]">
                      <BookOpen className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-base font-bold leading-snug text-[#111111]">Aprenda a linguagem do seu cachorro e transforme a convivência.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-xl bg-orange-50 px-2.5 py-1.5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#111111]/10 bg-white p-4 shadow-sm">
                  <div>
                    <div className="text-xs font-medium text-[#C2410C]">Cães transformados</div>
                    <div className="text-3xl font-extrabold text-[#111111]">+7.000</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[#FFF7ED] px-4 py-2 text-xs font-bold text-[#C2410C]">
                    <Package className="h-4 w-4" /> Conteúdo Premium
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section id="conteudo" className="relative mx-auto max-w-[1080px] px-6 py-14 sm:py-[80px]">
        <PawField className="text-[#111111]/[0.04]" />
        <KibbleField />
        <motion.div {...fadeUp} className="relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/40 bg-[#FFF7ED] px-4 py-1.5 text-sm font-bold text-[#C2410C]">
            <Sparkles className="h-4 w-4" /> Método prático
          </span>
          <h2 className="mt-5 text-[24px] font-bold tracking-tight text-[#111111] sm:text-[34px]">
            O que você vai aprender
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-[#737373]">
            O passo a passo para acabar com mordidas e destruição em casa.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            { icon: Bone, t: "Por que ele morde e destrói", d: "Dentição, tédio, ansiedade e excesso de energia: entenda a causa raiz do problema." },
            { icon: Stethoscope, t: "Filhotes e troca de dentes", d: "Como aliviar o incômodo da dentição e proteger o que importa na sua casa." },
            { icon: Dog, t: "Adestramento sem gritos", d: "Ensinar comandos como “solta” e “larga” com reforço positivo, sem punições." },
            { icon: HeartPulse, t: "Ansiedade de separação", d: "Reduza o estresse de ficar sozinho e acabe com a destruição enquanto você sai." },
            { icon: Cookie, t: "Brinquedos e distrações", d: "Enriquecimento ambiental que canaliza a mordida para o lugar certo." },
            { icon: Zap, t: "Rotina e limites", d: "Exercício, sono e regras claras que transformam o comportamento do pet." },
          ].map((s) => (
            <div
              key={s.t}
              className="group relative overflow-hidden rounded-3xl border border-[#111111]/10 bg-white/80 p-8 shadow-[0_14px_44px_rgba(17,17,17,.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(249,115,22,.25)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F97316] to-[#C2410C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F97316] to-[#C2410C] text-[#FFFFFF] shadow-[0_8px_20px_rgba(249,115,22,.4)]">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#111111]">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#737373]">{s.d}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="relative overflow-hidden border-y border-[#111111]/10 bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA] py-14 sm:py-[80px]">
        <PawField className="text-[#111111]/[0.05]" />
        <KibbleField />
        <div className="relative mx-auto max-w-[1080px] px-6">
          <motion.div {...fadeUp} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#111111]/15 bg-white/70 px-4 py-1.5 text-sm font-bold text-[#C2410C] shadow-sm backdrop-blur-md">
              <BadgeCheck className="h-4 w-4" /> Por que os tutores amam
            </span>
            <h2 className="mt-5 text-[24px] font-bold tracking-tight text-[#111111] sm:text-[34px]">
              Você aplica hoje e nota a diferença
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { icon: Users, t: "Para toda a família", d: "Todos aprendem a agir igual, com regras claras e simples." },
              { icon: Zap, t: "Protocolo dos 7 dias", d: "Passo a passo inicial para ver resultados rápidos." },
              { icon: BookOpen, t: "Mais de 50 páginas", d: "Guia denso, direto e ilustrado, em PDF." },
              { icon: HeartPulse, t: "Sem punições", d: "Métodos gentis baseados em reforço positivo." },
              { icon: Package, t: "Feito como ração premium", d: "Capítulos ricos em conteúdo, sem passar vontade." },
            ].map((b) => (
              <div
                key={b.t}
                className="group rounded-3xl border border-white/60 bg-white/70 p-8 shadow-[0_14px_44px_rgba(17,17,17,.1)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(249,115,22,.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F97316] to-[#C2410C] text-[#FFFFFF] shadow-[0_8px_20px_rgba(249,115,22,.4)]">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#111111]">{b.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#737373]">{b.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DENTRO DO EBOOK */}
      <section className="relative mx-auto max-w-[1080px] px-6 py-14 sm:py-[80px]">
        <PawField className="text-[#111111]/[0.04]" />
        <KibbleField />
        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/40 bg-[#FFF7ED] px-4 py-1.5 text-sm font-bold text-[#C2410C]">
              <BookOpen className="h-4 w-4" />
              Dentro do ebook
            </span>
            <h2 className="mt-6 text-[32px] font-bold tracking-tight text-[#111111] sm:text-[48px]">
              Do diagnóstico ao adestramento, passo a passo
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#737373]">
              Cada capítulo apresenta a causa do problema e técnicas práticas
              para aplicar no mesmo dia — sem gritos, sem punições e sem culpa.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Diagnóstico da causa das mordidas e destruição",
                "Checklists para proteger a casa e os objetos",
                "Técnicas de redirecionamento para filhotes e adultos",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] font-medium text-[#111111]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F97316] to-[#C2410C] text-[#FFFFFF]">
                    <CircleCheck className="h-4 w-4" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="relative grid gap-4 sm:grid-cols-2">
            <div className="pointer-events-none absolute -inset-8 rounded-[48px] bg-gradient-to-br from-[#F97316] via-[#FB923C] to-[#C2410C] opacity-40 blur-3xl" />
            <img
              src={IMG.corgi}
              alt="Cachorro peludo pronto para o treinamento"
              className="relative h-64 w-full rounded-3xl border border-white/70 object-cover shadow-[0_28px_60px_rgba(17,17,17,.3)]"
              loading="lazy"
            />
            <img
              src={IMG.puppy}
              alt="Filhote durante sessão de adestramento"
              className="relative mt-6 hidden h-64 w-full rounded-3xl border border-white/70 object-cover shadow-[0_28px_60px_rgba(17,17,17,.3)] sm:block"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="relative overflow-hidden border-y border-[#111111]/10 bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA] py-14 sm:py-[80px]">
        <PawField className="text-[#111111]/[0.05]" />
        <KibbleField />
        <div className="relative mx-auto max-w-[1080px] px-6">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-[24px] font-bold tracking-tight text-[#111111] sm:text-[34px]">
              Quem leu, aprovou
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-[#737373]">
              Resultados reais de tutores que aplicaram o guia.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Meu sofá parou de ser destruído em duas semanas. Incrível!",
              "Ele finalmente parou de morder o controle remoto e os sapatos.",
              "O método sem gritos mudou a convivência lá em casa.",
              "Simples, direto e funcionou com meu filhote em poucos dias.",
            ].map((text, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/70 bg-white/70 p-7 shadow-[0_14px_44px_rgba(17,17,17,.1)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(249,115,22,.35)]"
              >
                <div className="flex gap-0.5 text-orange-400">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[#111111]">“{text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F97316] to-[#111111] text-sm font-bold text-white">
                    {["A", "M", "J", "C"][i]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#111111]">Tutor verificado</div>
                    <div className="flex items-center gap-1 text-xs text-[#737373]">
                      <BadgeCheck className="h-3.5 w-3.5 text-[#C2410C]" />
                      MEU MÉTODO CÃO
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PREÇO */}
      <section id="preco" className="relative overflow-hidden bg-gradient-to-br from-[#C2410C] via-[#111111] to-[#080808] py-14 sm:py-[80px]">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#F97316]/20 blur-3xl"
        />
        <PawField className="text-white/10" />
        <KibbleField tone="dark" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(249,115,22,.9) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <motion.div {...fadeUp} className="relative mx-auto max-w-[1080px] px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/40 bg-[#111111]/70 px-4 py-1.5 text-sm font-bold text-[#FDBA74]">
            <Zap className="h-4 w-4" /> Oferta por tempo limitado
          </span>
          <div className="mt-5 text-center">
            <span className="inline-flex items-center rounded-full bg-red-500/25 px-4 py-1 text-xl font-extrabold text-white line-through decoration-red-300 decoration-[3px] sm:text-2xl">
              R$ 79,90
            </span>
            <h2 className="mt-3 text-[20px] font-bold tracking-tight text-white sm:text-[26px]">
              Por apenas
            </h2>
            <div className="mt-1 bg-gradient-to-r from-[#FDBA74] to-[#F97316] bg-clip-text text-5xl font-extrabold leading-none tracking-tight text-transparent sm:text-6xl">
              R$ 39,90
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-[#D6D3D1]">
            Pagamento único. Acesso liberado na hora.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="relative mx-auto mt-12 flex max-w-[1080px] justify-center px-6">
          <div className="w-full max-w-md">
            <div className="pointer-events-none absolute -inset-3 rounded-[40px] bg-gradient-to-r from-[#F97316] via-[#C2410C] to-[#111111] opacity-50 blur-2xl" />
            <div className="relative rounded-[32px] bg-gradient-to-br from-[#F97316] via-[#C2410C] to-[#111111] p-[2px] shadow-[0_30px_80px_rgba(0,0,0,.45)]">
              <div className="rounded-[30px] bg-gradient-to-br from-[#111111] via-[#111111] to-[#080808] p-7 text-center">
                <div className="mt-2">
                  <div className="bg-gradient-to-r from-[#FDBA74] to-[#F97316] bg-clip-text text-3xl font-extrabold uppercase tracking-tight text-transparent">
                    Ebook
                  </div>
                  <div className="mt-1 text-base font-bold uppercase leading-snug text-white">
                    Aprenda a linguagem do seu cachorro e transforme a convivência.
                  </div>
                </div>
                <div className="mt-1 text-sm text-[#FDBA74]">Mordidas e destruição · PDF · Acesso imediato</div>
                <div className="mt-4 flex flex-col items-center gap-1.5">
                  <span className="inline-flex items-center rounded-full bg-red-500/25 px-4 py-1.5 text-xl font-extrabold text-white/90 line-through decoration-red-400 decoration-[3px]">
                    R$ 79,90
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-[#FDBA74]">R$</span>
                    <span className="bg-gradient-to-r from-[#FDBA74] to-[#F97316] bg-clip-text text-6xl font-extrabold leading-none tracking-tight text-transparent">
                      39<span className="text-3xl">,90</span>
                    </span>
                  </div>
                </div>
                <div className="mt-7 border-t border-white/10 pt-7 text-left">
                  <ul className="space-y-3 text-sm font-medium text-white/90">
                    {[
                      "Passo a passo para eliminar mordidas e destruição",
                      "Técnicas sem gritos nem punições",
                      "Protocolo dos primeiros 7 dias",
                      "Brinquedos e enriquecimento ambiental",
                      "Acesso imediato após a compra (PDF)",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F97316]/15 text-[#FDBA74]">
                          <CircleCheck className="h-3.5 w-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={onBuy}
                    className="group mt-7 inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#C2410C] px-8 text-base font-extrabold text-[#111111] shadow-[0_14px_40px_rgba(249,115,22,.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(249,115,22,.5)]"
                  >
                    Quero o meu agora
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="mt-4 text-center text-xs text-white/50">
                    Pagamento seguro via Mercado Pago (cartão de crédito)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div aria-hidden className="mx-auto mt-24 max-w-2xl border-t border-white/10" />
        <motion.div {...fadeUp} className="relative mx-auto mt-12 max-w-[1080px] px-6 text-center">
          <h2 className="mx-auto max-w-3xl text-[24px] font-bold tracking-tight text-white sm:text-[36px]">
            Recupere os seus objetos e a sua paz em casa
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Aplique o guia e veja seu cachorro parar de morder e destruir o que você ama.
          </p>
          <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,.45)]">
            <img
              src={IMG.happy}
              alt="Cachorro feliz correndo ao ar livre"
              className="h-56 w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#080808] py-10">
        <div className="mx-auto flex max-w-[1080px] flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#F97316] to-[#111111] text-white">
              <PawPrint className="h-4 w-4" />
            </span>
            <span className="font-bold text-white">MEU MÉTODO CÃO</span>
          </div>
          <p>© {new Date().getFullYear()} MEU MÉTODO CÃO. Todos os direitos reservados.</p>
          <img
            src={IMG.duo}
            alt="Dois cachorros juntos na grama"
            className="h-12 w-12 rounded-full border-2 border-[#F97316]/40 object-cover"
            loading="lazy"
          />
        </div>
      </footer>
    </div>
  );
}