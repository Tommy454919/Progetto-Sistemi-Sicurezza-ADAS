import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X, Lightbulb, ArrowRight, ArrowLeft, Cpu, Radio } from "lucide-react";
import { getSystem } from "@/data/systems";
import Section from "@/components/common/Section";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import Simulation from "@/components/common/Simulation";
import ExploredBadge from "@/components/common/ExploredBadge";

const SystemDetail = () => {
  const { id } = useParams();
  const system = getSystem(id);

  if (!system) return <Navigate to="/sistemi" replace />;

  const Icon = system.icon;
  const related = system.related.map(getSystem).filter(Boolean);

  return (
    <>
      <ExploredBadge topic="sistemi" />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44">
        <div className="absolute inset-0 -z-10 radial-glow" />
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <Link
              to="/sistemi"
              className="inline-flex items-center gap-2 text-sm text-brand-gray transition-colors hover:text-brand-cyan"
              data-testid="back-to-systems"
            >
              <ArrowLeft className="h-4 w-4" /> Tutti i sistemi
            </Link>
          </Reveal>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Reveal>
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan">
                <Icon className="h-10 w-10" strokeWidth={1.5} />
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.05}>
                <div className="font-display text-6xl font-bold text-gradient-cyan sm:text-7xl">
                  {system.acronym}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-1 font-display text-2xl font-semibold text-brand-white sm:text-3xl">
                  {system.name}
                </h1>
                <p className="text-sm text-brand-gray">{system.english}</p>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-3xl text-lg font-display text-gradient">{system.tagline}</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-gray">
              {system.short}
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS + SENSORS */}
      <Section className="pt-6">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-7 sm:p-9">
              <div className="flex items-center gap-2 text-brand-cyan">
                <Cpu className="h-5 w-5" />
                <h2 className="font-display text-xl font-semibold text-brand-white">
                  Come funziona
                </h2>
              </div>
              <ol className="mt-6 space-y-5">
                {system.howItWorks.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-cyan/30 bg-brand-cyan/10 font-display text-sm font-bold text-brand-cyan">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-brand-gray">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-7">
                <div className="flex items-center gap-2 text-brand-cyan">
                  <Radio className="h-5 w-5" />
                  <h2 className="font-display text-lg font-semibold text-brand-white">
                    Quali sensori utilizza
                  </h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {system.sensors.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-brand-cyan/25 bg-brand-cyan/[0.06] px-4 py-2 text-sm text-brand-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 rounded-3xl border border-brand-blue/20 bg-brand-blue/[0.05] p-7">
                <h2 className="font-display text-lg font-semibold text-brand-white">
                  Come interviene
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  {system.intervention}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SIMULATION */}
      <Section className="pt-0">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-brand-white">
            Esempio reale
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-gray">
            Avvia la simulazione per vedere, passo dopo passo, come il sistema reagisce alla
            situazione.
          </p>
        </Reveal>
        <div className="mt-6">
          <Simulation type={system.simulation} />
        </div>
      </Section>

      {/* BENEFITS + LIMITS */}
      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.04] p-7">
              <h2 className="font-display text-xl font-semibold text-emerald-400">Vantaggi</h2>
              <ul className="mt-5 space-y-3">
                {system.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-brand-gray">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-red-500/15 bg-red-500/[0.04] p-7">
              <h2 className="font-display text-xl font-semibold text-red-400">Limiti</h2>
              <ul className="mt-5 space-y-3">
                {system.limitations.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-sm text-brand-gray">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CURIOSITY */}
      <Section className="pt-0">
        <Reveal>
          <div className="flex items-start gap-5 rounded-3xl glass-strong p-7 sm:p-9">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-cyan/15 text-brand-cyan">
              <Lightbulb className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-brand-white">Curiosità</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray">{system.curiosity}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CONTINUE EXPLORING */}
      <Section className="pt-0 pb-24">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-brand-white">
            Continua a esplorare
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {related.map((r, i) => {
            const RIcon = r.icon;
            return (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/sistemi/${r.id}`}
                  data-testid={`related-${r.id}`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-brand-gray/12 bg-brand-dark/40 p-5 transition-all hover:-translate-y-1 hover:border-brand-cyan/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan transition-colors group-hover:bg-brand-cyan group-hover:text-brand-black">
                    <RIcon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-lg font-bold text-brand-white">{r.acronym}</div>
                    <div className="truncate text-xs text-brand-gray">{r.name}</div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-brand-cyan opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-8">
          <Button to="/sensori" variant="outline">
            Scopri come vede un'automobile <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
};

export default SystemDetail;
