import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, X, ArrowLeftRight, Repeat } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import { systems, getSystem } from "@/data/systems";
import { cn } from "@/lib/utils";

const SystemSelect = ({ value, onChange, exclude, side }) => {
  const Icon = getSystem(value).icon;
  return (
    <div className="relative">
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
        {side}
      </label>
      <div className="relative flex items-center gap-3 rounded-2xl border border-brand-cyan/25 bg-brand-dark/60 px-4 py-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          data-testid={`compare-select-${side.toLowerCase().includes("primo") ? "a" : "b"}`}
          className="w-full cursor-pointer appearance-none bg-transparent pr-6 text-base font-medium text-brand-white focus:outline-none"
        >
          {systems.map((s) => (
            <option
              key={s.id}
              value={s.id}
              disabled={s.id === exclude}
              className="bg-brand-dark text-brand-white"
            >
              {s.acronym} — {s.name}
            </option>
          ))}
        </select>
        <ArrowRight className="pointer-events-none absolute right-4 h-4 w-4 rotate-90 text-brand-gray" />
      </div>
    </div>
  );
};

const Column = ({ system }) => {
  const Icon = system.icon;
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-3xl border border-brand-gray/12 bg-brand-dark/50 p-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan">
          <Icon className="h-8 w-8" strokeWidth={1.5} />
        </div>
        <div className="mt-4 font-display text-4xl font-bold text-gradient-cyan">
          {system.acronym}
        </div>
        <div className="mt-1 text-sm font-medium text-brand-white">{system.name}</div>
        <p className="mt-3 text-sm italic text-brand-gray">{system.tagline}</p>
      </div>
    </div>
  );
};

const Row = ({ title, children }) => (
  <Reveal>
    <div className="grid gap-4 border-t border-brand-gray/10 py-6 md:grid-cols-[160px_1fr_1fr] md:gap-6">
      <div className="text-sm font-semibold uppercase tracking-wide text-brand-cyan">
        {title}
      </div>
      {children}
    </div>
  </Reveal>
);

const SensorList = ({ sensors, shared }) => (
  <div className="flex flex-wrap gap-2">
    {sensors.map((s) => {
      const isShared = shared.includes(s);
      return (
        <span
          key={s}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium",
            isShared
              ? "border-brand-cyan/50 bg-brand-cyan/10 text-brand-cyan"
              : "border-brand-gray/20 bg-white/[0.03] text-brand-white/80",
          )}
        >
          {s}
          {isShared && " ✓"}
        </span>
      );
    })}
  </div>
);

const Confronto = () => {
  const [a, setA] = useState("aeb");
  const [b, setB] = useState("acc");

  const sysA = getSystem(a);
  const sysB = getSystem(b);

  const shared = useMemo(
    () => sysA.sensors.filter((s) => sysB.sensors.includes(s)),
    [sysA, sysB],
  );

  const handleA = (val) => {
    if (val === b) setB(a);
    setA(val);
  };
  const handleB = (val) => {
    if (val === a) setA(b);
    setB(val);
  };
  const swap = () => {
    setA(b);
    setB(a);
  };

  return (
    <>
      <PageHero
        eyebrow="Confronto sistemi"
        title="Confronta due sistemi ADAS"
        description="Scegli due sistemi e mettili a confronto fianco a fianco: sensori utilizzati, funzionamento, vantaggi e limiti. I sensori condivisi sono evidenziati."
      />

      <Section className="pt-0 pb-24">
        {/* selectors */}
        <Reveal>
          <div className="rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-6 sm:p-7">
            <div className="grid items-end gap-5 md:grid-cols-[1fr_auto_1fr]">
              <SystemSelect value={a} onChange={handleA} exclude={b} side="Primo sistema" />
              <button
                onClick={swap}
                data-testid="compare-swap"
                className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-brand-cyan/30 text-brand-cyan transition-all hover:bg-brand-cyan/10 hover:shadow-glow"
                aria-label="Inverti i sistemi"
                title="Inverti"
              >
                <Repeat className="h-5 w-5" />
              </button>
              <SystemSelect value={b} onChange={handleB} exclude={a} side="Secondo sistema" />
            </div>
          </div>
        </Reveal>

        {/* columns header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${a}-${b}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8"
            data-testid="compare-result"
          >
            <div className="grid gap-5 md:grid-cols-[160px_1fr_1fr] md:gap-6">
              <div className="hidden md:block" />
              <Column system={sysA} />
              <Column system={sysB} />
            </div>

            {/* differences banner */}
            <Reveal>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-blue/20 bg-brand-blue/[0.05] p-5">
                <ArrowLeftRight className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                <p className="text-sm leading-relaxed text-brand-white/90">
                  {shared.length > 0 ? (
                    <>
                      <span className="font-semibold text-brand-white">Sensori in comune:</span>{" "}
                      {shared.join(", ")}. I due sistemi condividono parte della «percezione»
                      ma la usano per scopi diversi.
                    </>
                  ) : (
                    <>
                      <span className="font-semibold text-brand-white">Nessun sensore in comune:</span>{" "}
                      {sysA.acronym} e {sysB.acronym} si basano su tecnologie di percezione
                      differenti.
                    </>
                  )}
                </p>
              </div>
            </Reveal>

            {/* comparison rows */}
            <div className="mt-4">
              <Row title="Sensori utilizzati">
                <SensorList sensors={sysA.sensors} shared={shared} />
                <SensorList sensors={sysB.sensors} shared={shared} />
              </Row>

              <Row title="Come interviene">
                <p className="text-sm leading-relaxed text-brand-gray">{sysA.intervention}</p>
                <p className="text-sm leading-relaxed text-brand-gray">{sysB.intervention}</p>
              </Row>

              <Row title="Come funziona">
                {[sysA, sysB].map((s) => (
                  <ol key={s.id} className="space-y-2">
                    {s.howItWorks.map((step, i) => (
                      <li key={i} className="flex gap-2 text-sm text-brand-gray">
                        <span className="font-display text-xs font-bold text-brand-cyan">
                          {i + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                ))}
              </Row>

              <Row title="Vantaggi">
                {[sysA, sysB].map((s) => (
                  <ul key={s.id} className="space-y-2">
                    {s.benefits.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-sm text-brand-gray">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        {x}
                      </li>
                    ))}
                  </ul>
                ))}
              </Row>

              <Row title="Limiti">
                {[sysA, sysB].map((s) => (
                  <ul key={s.id} className="space-y-2">
                    {s.limitations.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-sm text-brand-gray">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                        {x}
                      </li>
                    ))}
                  </ul>
                ))}
              </Row>
            </div>

            {/* deep links */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={`/sistemi/${sysA.id}`} variant="outline" size="sm" data-testid="compare-link-a">
                Approfondisci {sysA.acronym} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to={`/sistemi/${sysB.id}`} variant="outline" size="sm" data-testid="compare-link-b">
                Approfondisci {sysB.acronym} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </Section>
    </>
  );
};

export default Confronto;
