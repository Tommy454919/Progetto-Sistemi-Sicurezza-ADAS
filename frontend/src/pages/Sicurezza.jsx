import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CloudRain,
  Snowflake,
  CloudFog,
  EyeOff,
  Droplets,
  SignpostBig,
  Shuffle,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import ExploredBadge from "@/components/common/ExploredBadge";

const scenarios = [
  {
    id: "pedone",
    text: "Un pedone attraversa improvvisamente.",
    system: "AEB — Frenata automatica d'emergenza",
    answer:
      "La telecamera e il radar anteriori possono rilevare il pedone e, se il conducente non reagisce in tempo, il sistema può frenare per evitare o attenuare l'urto.",
    to: "/sistemi/aeb",
  },
  {
    id: "angolo",
    text: "Un veicolo entra nell'angolo cieco.",
    system: "BSM — Monitoraggio dell'angolo cieco",
    answer:
      "I sensori laterali rilevano il veicolo nella zona non visibile dagli specchietti e avvisano il conducente, soprattutto prima di un cambio di corsia.",
    to: "/sistemi/bsm",
  },
  {
    id: "frenata",
    text: "Il veicolo davanti frena improvvisamente.",
    system: "ACC + AEB",
    answer:
      "Il Cruise Control adattivo riduce l'andatura per mantenere la distanza; se il rischio diventa concreto, la frenata d'emergenza può intervenire per evitare il tamponamento.",
    to: "/sistemi/acc",
  },
  {
    id: "corsia",
    text: "Il veicolo attraversa involontariamente la linea di corsia.",
    system: "LKA / LDW — Corsia",
    answer:
      "L'avviso di uscita dalla corsia segnala lo scostamento; il mantenimento di corsia può correggere dolcemente lo sterzo per riportare il veicolo verso il centro.",
    to: "/sistemi/lka",
  },
];

const limits = [
  { icon: CloudRain, label: "Pioggia" },
  { icon: Snowflake, label: "Neve" },
  { icon: CloudFog, label: "Nebbia" },
  { icon: EyeOff, label: "Scarsa visibilità" },
  { icon: Droplets, label: "Sensori sporchi" },
  { icon: SignpostBig, label: "Segnaletica poco visibile" },
  { icon: Shuffle, label: "Situazioni imprevedibili" },
];

const Sicurezza = () => {
  const [selected, setSelected] = useState(null);
  const current = scenarios.find((s) => s.id === selected);

  return (
    <>
      <ExploredBadge topic="sicurezza" />
      <PageHero
        eyebrow="Sicurezza e limiti"
        title="La tecnologia non è infallibile."
        description="Gli ADAS sono un aiuto prezioso, ma hanno dei limiti. Capire quando possono aiutare — e quando invece non bastano — è parte essenziale di una guida sicura."
      />

      {/* INTERACTIVE SCENARIOS */}
      <Section className="pt-0">
        <SectionHeader
          eyebrow="Metti alla prova il sistema"
          title="Quale sistema potrebbe aiutare?"
          subtitle="Scegli uno scenario e scopri quali ADAS potrebbero intervenire."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {scenarios.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <button
                onClick={() => setSelected(s.id)}
                data-testid={`scenario-${s.id}`}
                className={`w-full rounded-3xl border p-6 text-left transition-all ${
                  selected === s.id
                    ? "border-brand-cyan/50 bg-brand-cyan/[0.07] shadow-glow"
                    : "border-brand-gray/12 bg-brand-dark/40 hover:-translate-y-1 hover:border-brand-cyan/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-brand-cyan">
                    Scenario {i + 1}
                  </span>
                </div>
                <p className="mt-2 text-lg font-medium text-brand-white">{s.text}</p>
              </button>
            </Reveal>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="mt-6 rounded-3xl glass-strong p-7 sm:p-9"
              data-testid="scenario-answer"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                <ShieldAlert className="h-4 w-4" /> Sistema suggerito
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-brand-white">
                {current.system}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-gray">{current.answer}</p>
              <Button to={current.to} variant="outline" size="sm" className="mt-5">
                Approfondisci questo sistema <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>

      {/* LIMITS */}
      <Section className="pt-0">
        <SectionHeader
          eyebrow="I limiti"
          title="Quando gli ADAS faticano"
          subtitle="Alcune condizioni possono ridurre l'efficacia dei sensori e dei sistemi. In questi casi l'attenzione del conducente è ancora più importante."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {limits.map((l, i) => {
            const Icon = l.icon;
            return (
              <Reveal key={l.label} delay={i * 0.05}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-brand-gray/12 bg-brand-dark/40 p-6 text-center transition-colors hover:border-brand-cyan/25">
                  <Icon className="h-8 w-8 text-brand-cyan" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-brand-white">{l.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* HIGHLIGHT */}
      <Section className="pt-0 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-brand-cyan/25 bg-gradient-to-br from-brand-dark to-brand-black p-10 text-center sm:p-14">
            <div className="absolute left-1/2 top-0 -z-10 h-40 w-[70%] -translate-x-1/2 bg-brand-cyan/10 blur-[80px]" />
            <p className="mx-auto max-w-3xl font-display text-2xl font-semibold leading-snug text-brand-white sm:text-3xl">
              «Gli ADAS assistono il conducente. Non sostituiscono attenzione, responsabilità e
              controllo del veicolo.»
            </p>
            <div className="mt-8">
              <Button to="/futuro" size="lg">
                Scopri il futuro della sicurezza <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default Sicurezza;
