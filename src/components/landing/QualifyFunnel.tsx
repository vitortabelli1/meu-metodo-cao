"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CircleCheck, RotateCcw, Stethoscope } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type Option = { value: string; label: string };

type Question = {
  id: string;
  title: string;
  helper: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "problema",
    title: "Qual é o maior problema do seu cachorro hoje?",
    helper: "Escolha o que mais atrapalha a sua rotina.",
    options: [
      { value: "mordidas", label: "Morde as mãos, os móveis e os sapatos" },
      { value: "destruicao", label: "Destrói objetos, brinquedos e chinelos" },
      { value: "passeio", label: "Puxa no passeio e não obedece comandos" },
      { value: "ansiedade", label: "Fica ansioso e destrói a casa quando fica sozinho" },
    ],
  },
  {
    id: "tempo",
    title: "Há quanto tempo você enfrenta isso?",
    helper: "Saber há quanto tempo muda a estratégia.",
    options: [
      { value: "recem", label: "Começou há menos de 3 meses" },
      { value: "ano", label: "Está assim há mais de 6 meses" },
      { value: "anos", label: "É um problema antigo (mais de 1 ano)" },
      { value: "filhote", label: "Começou quando trouxe o filhote" },
    ],
  },
  {
    id: "fase",
    title: "Qual é a fase do seu cachorro?",
    helper: "Filhote, adulto e idoso exigem abordagens diferentes.",
    options: [
      { value: "filhote", label: "Filhote (até 1 ano)" },
      { value: "adulto", label: "Adulto (de 1 a 7 anos)" },
      { value: "idoso", label: "Idoso (acima de 7 anos)" },
      { value: "varios", label: "Tenho mais de um cachorro em casa" },
    ],
  },
  {
    id: "tentativas",
    title: "O que você já tentou para resolver?",
    helper: "A maioria dos tutores já tentou algo, mas quase nunca resolve.",
    options: [
      { value: "nada", label: "Nada ainda" },
      { value: "gritar", label: "Gritar, brigar ou punir" },
      { value: "brinquedos", label: "Dar brinquedos e ossos" },
      { value: "adestrador", label: "Treinei com adestrador" },
    ],
  },
];

const FOCO: Record<string, string[]> = {
  mordidas: [
    "A causa real das mordidas e por que os métodos comuns falham",
    "O protocolo dos 7 dias para redirecionar o comportamento",
    "Os comandos “solta” e “larga”, sem gritos nem punições",
    "Brinquedos e enriquecimento que ocupam a energia do seu pet",
  ],
  destruicao: [
    "Por que o cão destrói objetos quando fica sozinho",
    "Checklists para proteger a casa sem prender o cachorro",
    "Técnicas de redirecionamento para o dia a dia",
    "Brinquedos e enriquecimento que ocupam a energia do seu pet",
  ],
  passeio: [
    "Como canalizar a excitação antes e durante o passeio",
    "Os comandos “solta” e “larga”, sem gritos nem punições",
    "Rotina, exercício e sono para equilibrar o pet",
    "Protocolo dos 7 dias para ver resultados rápido",
  ],
  ansiedade: [
    "Como reduzir o estresse quando você sai de casa",
    "Preparação do ambiente antes de ele ficar sozinho",
    "Rotina, exercício e sono para equilibrar o pet",
    "Quando procurar ajuda profissional de verdade",
  ],
};

function buildDiagnosis(answers: Record<string, string>) {
  return {
    foco: FOCO[answers.problema] ?? FOCO.mordidas,
  };
}

export function QualifyFunnel({ onBuy }: { onBuy: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const finished = step >= QUESTIONS.length;
  const question = QUESTIONS[step];
  const diagnosis = buildDiagnosis(answers);

  const choose = (questionId: string, value: string) => {
    setAnswers((current) => ({ ...current, [questionId]: value }));
    setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <section
      id="diagnostico"
      className="relative overflow-hidden border-b border-[#111111]/10 bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA] py-14 sm:py-[80px]"
    >
      <div className="relative mx-auto max-w-[880px] px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#111111]/15 bg-white/70 px-4 py-1.5 text-sm font-bold text-[#C2410C] shadow-sm backdrop-blur-md">
            <Stethoscope className="h-4 w-4" /> Diagnóstico gratuito
          </span>
          <h2 className="mt-5 text-[24px] font-bold tracking-tight text-[#111111] sm:text-[34px]">
            Descubra o caminho em 4 perguntas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-[#737373]">
            Responda rapidinho e veja por que o seu cachorro age assim, e o que
            fazer para mudar.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <div className="pointer-events-none absolute -inset-3 rounded-[40px] bg-gradient-to-r from-[#F97316] via-[#C2410C] to-[#111111] opacity-30 blur-2xl" />
          <div className="relative rounded-[32px] border border-white/70 bg-white/80 p-7 shadow-[0_30px_80px_rgba(17,17,17,.15)] backdrop-blur-md sm:p-10">
            {!finished ? (
              <>
                <div className="flex items-center justify-between text-sm font-bold text-[#C2410C]">
                  <span>
                    Pergunta {step + 1} de {QUESTIONS.length}
                  </span>
                  <span>{Math.round(((step + 1) / QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#111111]/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#F97316] to-[#C2410C]"
                    initial={false}
                    animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <h3 className="mt-8 text-xl font-bold text-[#111111] sm:text-2xl">
                      {question.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-[#737373]">{question.helper}</p>

                    <div className="mt-6 flex flex-col gap-3">
                      {question.options.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => choose(question.id, opt.value)}
                          className="group flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-[#111111]/10 bg-white p-4 text-left text-[15px] font-semibold text-[#111111] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#F97316] hover:bg-[#FFF7ED]"
                        >
                          {opt.label}
                          <ArrowRight className="h-4 w-4 shrink-0 text-[#F97316] transition-transform group-hover:translate-x-0.5" />
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="mt-6 cursor-pointer text-sm font-semibold text-[#737373] underline-offset-4 hover:text-[#C2410C] hover:underline"
                      >
                        Voltar uma pergunta
                      </button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="rounded-2xl border border-[#F97316]/25 bg-[#FFF7ED] p-5">
                  <div className="text-sm font-bold uppercase tracking-wide text-[#C2410C]">
                    O que o ebook resolve no seu caso
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {diagnosis.foco.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[15px] font-medium text-[#111111]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F97316] to-[#C2410C] text-white">
                          <CircleCheck className="h-3.5 w-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-[28px] bg-gradient-to-br from-[#111111] via-[#111111] to-[#080808] p-7 text-center">
                  <div className="bg-gradient-to-r from-[#FDBA74] to-[#F97316] bg-clip-text text-lg font-extrabold uppercase tracking-tight text-transparent">
                    Ebook
                  </div>
                  <div className="mt-1 text-base font-bold uppercase leading-snug text-white">
                    Transforme o Comportamento do seu cão.
                  </div>

                  <div className="mt-6 flex justify-center">
                    <div className="relative w-[96%] max-w-[460px] shrink-0">
                      <div className="pointer-events-none absolute -inset-2 rounded-[20px] bg-gradient-to-r from-[#F97316] to-[#C2410C] opacity-40 blur-xl" />
                      <Image
                        src="/capa-ebook.png"
                        alt="Capa do ebook Transforme o Comportamento do seu cão"
                        width={1024}
                        height={1536}
                        sizes="(max-width: 640px) 210px, 460px"
                        className="relative h-auto w-full rounded-xl shadow-[0_18px_45px_rgba(0,0,0,.55)] ring-1 ring-white/15"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center gap-1">
                    <span className="inline-flex items-center rounded-full bg-red-500/25 px-4 py-1 text-lg font-extrabold text-white/90 line-through decoration-red-400 decoration-[3px]">
                      R$ 39,90
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-bold text-[#FDBA74]">R$</span>
                      <span className="bg-gradient-to-r from-[#FDBA74] to-[#F97316] bg-clip-text text-5xl font-extrabold leading-none tracking-tight text-transparent">
                        19<span className="text-2xl">,90</span>
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={onBuy}
                    className="group mt-6 inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#C2410C] px-8 text-base font-extrabold text-[#111111] shadow-[0_14px_40px_rgba(249,115,22,.35)] transition-all hover:-translate-y-0.5"
                  >
                    Quero o meu agora
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="mt-3 text-xs text-white/50">
                    Pagamento único, acesso imediato em PDF e pagamento seguro
                  </p>
                </div>

                <div className="mt-5 text-center">
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#737373] underline-offset-4 hover:text-[#C2410C] hover:underline"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Refazer o diagnóstico
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}