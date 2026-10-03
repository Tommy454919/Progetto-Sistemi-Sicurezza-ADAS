import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Check, Circle } from "lucide-react";
import {
  HelpCircle,
  Layers3,
  Radar,
  GaugeCircle,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import Button from "@/components/common/Button";
import HeroCar from "@/components/home/HeroCar";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import InteractiveCard from "@/components/cards/InteractiveCard";
import Reveal from "@/components/common/Reveal";
import { explorationSteps } from "@/data/nav";
import { useExploration } from "@/context/ExplorationContext";

const stats = [
  { value: 8, suffix: "+", label: "Sistemi ADAS" },
  { value: 4, suffix: "", label: "Tipologie di sensori" },
  { value: 6, suffix: "", label: "Livelli di automazione" },
];

const cards = [
  { to: "/adas", icon: HelpCircle, title: "Cosa sono gli ADAS?", description: "Capisci cosa significa davvero questa sigla e perché questi sistemi sono importanti." },
  { to: "/sistemi", icon: Layers3, title: "I sistemi", description: "Scopri AEB, ACC, LKA, BSM e gli altri sistemi." },
  { to: "/sensori", icon: Radar, title: "I sensori", description: "Scopri come un'automobile percepisce ciò che la circonda." },
  { to: "/automazione", icon: GaugeCircle, title: "L'automazione", description: "Da livello 0 a livello 5." },
  { to: "/sicurezza", icon: ShieldCheck, title: "La sicurezza", description: "Scopri cosa possono fare gli ADAS e quali sono i loro limiti." },
  { to: "/futuro", icon: Rocket, title: "Il futuro", description: "Scopri come stanno evolvendo le tecnologie di assistenza alla guida." },
];

const Home = () => {
  const { isExplored } = useExploration();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[60vh] radial-glow" />
        <div className="absolute -left-40 top-40 -z-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-brand-cyan/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              Advanced Driver Assistance Systems
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 font-display text-[clamp(3.5rem,12vw,8rem)] font-bold leading-none tracking-tighter text-gradient"
            >
              ADAS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-4 font-display text-3xl font-semibold leading-tight text-brand-white sm:text-4xl lg:text-5xl"
            >
              La sicurezza che vede oltre.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-brand-gray sm:text-lg"
            >
              Scopri come radar, telecamere e sistemi intelligenti aiutano il conducente a
              comprendere ciò che accade sulla strada e a reagire più rapidamente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button to="/sistemi" size="lg" data-testid="hero-cta-explore">
                Esplora gli ADAS
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/adas" variant="outline" size="lg" data-testid="hero-cta-how">
                <PlayCircle className="h-4 w-4" />
                Come funziona?
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroCar />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <Section className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-8 text-center">
                <div className="font-display text-5xl font-bold text-gradient-cyan sm:text-6xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wide text-brand-gray">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-brand-gray/60">
          Indicatori della struttura didattica di questo sito.
        </p>
      </Section>

      {/* EXPLORE */}
      <Section>
        <SectionHeader
          eyebrow="Esplora il mondo ADAS"
          title="Da dove vuoi iniziare?"
          subtitle="Sei percorsi per capire come un'automobile moderna percepisce la strada, decide e assiste chi guida."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <InteractiveCard
              key={c.to}
              {...c}
              index={i}
              testid={`explore-card-${c.to.replace("/", "")}`}
            />
          ))}
        </div>
      </Section>

      {/* EXPLORATION PATH (gamification) */}
      <Section className="py-12 sm:py-16">
        <Reveal>
          <div className="rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-7 sm:p-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-brand-white">
                  Percorso di esplorazione
                </h3>
                <p className="mt-1 text-sm text-brand-gray">
                  Segui le tappe e completa il tuo viaggio tra i sistemi di assistenza.
                </p>
              </div>
              <span className="text-sm text-brand-cyan">
                {explorationSteps.filter((s) => isExplored(s.key)).length} / {explorationSteps.length} completate
              </span>
            </div>

            <div className="no-scrollbar mt-7 flex gap-3 overflow-x-auto pb-1">
              {explorationSteps.map((step) => {
                const done = isExplored(step.key);
                return (
                  <Link
                    key={step.key}
                    to={step.to}
                    data-testid={`path-${step.key}`}
                    className={`flex min-w-[130px] flex-1 items-center gap-3 rounded-2xl border px-4 py-3 transition-all ${
                      done
                        ? "border-brand-cyan/40 bg-brand-cyan/5"
                        : "border-brand-gray/12 bg-white/[0.02] hover:border-brand-cyan/25"
                    }`}
                  >
                    {done ? (
                      <Check className="h-5 w-5 shrink-0 text-brand-cyan" />
                    ) : (
                      <Circle className="h-5 w-5 shrink-0 text-brand-gray/40" />
                    )}
                    <span className={`text-sm font-medium ${done ? "text-brand-white" : "text-brand-gray"}`}>
                      {step.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section className="pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-brand-cyan/20 bg-gradient-to-br from-brand-dark to-brand-black p-10 text-center sm:p-16">
            <div className="absolute inset-0 -z-10 opacity-40 grid-bg" />
            <div className="absolute left-1/2 top-0 -z-10 h-40 w-[80%] -translate-x-1/2 bg-brand-cyan/10 blur-[80px]" />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-brand-white sm:text-4xl">
              Pronto a mettere alla prova le tue conoscenze?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-gray">
              Affronta 10 domande sugli ADAS e scopri quanto hai imparato.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/quiz" size="lg" data-testid="cta-quiz">
                Vai al quiz
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/sensori" variant="ghost" size="lg">
                Scopri i sensori
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default Home;
