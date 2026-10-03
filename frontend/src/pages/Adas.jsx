import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, LifeBuoy, ArrowRight, Eye, Cpu, Cog, AlertCircle } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import ProcessDiagram from "@/components/common/ProcessDiagram";
import ExploredBadge from "@/components/common/ExploredBadge";

const whyPoints = [
  { icon: Eye, title: "Percepiscono di più", text: "Sensori come telecamere e radar osservano la strada in continuo, anche dove lo sguardo umano non arriva." },
  { icon: Cpu, title: "Reagiscono in fretta", text: "Il computer analizza i dati in tempi molto brevi, utili nelle situazioni critiche." },
  { icon: Cog, title: "Assistono, non sostituiscono", text: "Supportano il conducente nelle attività di guida, ma la responsabilità resta sempre sua." },
  { icon: AlertCircle, title: "Riducono gli errori", text: "Aiutano a contrastare distrazioni e cali di attenzione, cause frequenti di incidenti." },
];

const activeExamples = {
  AEB: "La frenata automatica d'emergenza può frenare per evitare o attenuare una collisione frontale.",
  LKA: "Il mantenimento di corsia corregge dolcemente lo sterzo per restare nella propria corsia.",
  ACC: "Il Cruise Control adattivo regola la velocità mantenendo la distanza dal veicolo davanti.",
  BSM: "Il monitoraggio dell'angolo cieco avvisa prima di un cambio di corsia rischioso.",
};
const passiveExamples = {
  Airbag: "Gli airbag si gonfiano durante l'urto per attutire il colpo sugli occupanti.",
  Cinture: "Le cinture di sicurezza trattengono gli occupanti riducendo gli spostamenti violenti.",
  "Struttura deformabile": "Le zone deformabili assorbono l'energia dell'urto proteggendo l'abitacolo.",
};

const SafetyPanel = ({ title, desc, icon: Icon, accent, examples, selected, onSelect }) => (
  <div className={`rounded-3xl border p-7 ${accent}`}>
    <div className="flex items-center gap-3">
      <Icon className="h-7 w-7" />
      <h3 className="font-display text-xl font-semibold text-brand-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-brand-gray">{desc}</p>
    <div className="mt-5 flex flex-wrap gap-2">
      {Object.keys(examples).map((key) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          data-testid={`safety-ex-${key}`}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
            selected === key
              ? "border-brand-cyan bg-brand-cyan text-brand-black"
              : "border-brand-gray/20 text-brand-white/90 hover:border-brand-cyan/50"
          }`}
        >
          {key}
        </button>
      ))}
    </div>
    <AnimatePresence mode="wait">
      {selected && examples[selected] && (
        <motion.p
          key={selected}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-4 rounded-2xl bg-white/[0.03] p-4 text-sm text-brand-white/90"
        >
          {examples[selected]}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const Adas = () => {
  const [activeSel, setActiveSel] = useState("AEB");
  const [passiveSel, setPassiveSel] = useState("Airbag");

  return (
    <>
      <ExploredBadge topic="adas" />
      <PageHero
        eyebrow="Cosa sono gli ADAS"
        title="Cosa sono gli ADAS?"
        tagline="Quando l'auto inizia a percepire ciò che tu non vedi."
        description="ADAS significa Advanced Driver Assistance Systems, cioè «sistemi avanzati di assistenza alla guida». Sono tecnologie pensate per aiutare chi guida a comprendere la strada e reagire meglio."
      />

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl glass-strong p-7 sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-brand-white">
                Cosa sono, in breve
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-gray">
                Gli ADAS sono un insieme di sistemi elettronici che usano sensori e software
                per osservare l'ambiente intorno al veicolo. Interpretano ciò che accade sulla
                strada e, a seconda del sistema, avvisano il conducente o intervengono per
                aiutarlo nelle manovre.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray">
                Sono stati sviluppati per rendere la guida più sicura e meno faticosa,
                affiancando il conducente nelle situazioni in cui l'attenzione umana può non
                bastare.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-brand-blue/20 bg-brand-blue/[0.05] p-7 sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-brand-white">
                ADAS ≠ guida autonoma
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-gray">
                È importante chiarire un punto: la presenza di ADAS non significa che l'auto si
                guidi da sola. Questi sistemi <span className="text-brand-white">assistono</span> il
                conducente, ma non lo sostituiscono.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray">
                Attenzione, responsabilità e controllo del veicolo restano sempre nelle mani di
                chi guida. La guida autonoma è un concetto diverso, legato ai livelli di
                automazione più elevati.
              </p>
              <Button to="/automazione" variant="outline" size="sm" className="mt-6">
                Scopri i livelli di automazione <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeader
          eyebrow="Perché sono stati sviluppati"
          title="Un supporto concreto a chi guida"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-semibold text-brand-white">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="pt-0">
        <SectionHeader
          eyebrow="Come funziona un ADAS"
          title="Dal sensore all'intervento"
          subtitle="Clicca ogni fase per capire cosa accade dietro le quinte, passo dopo passo."
        />
        <div className="mt-12">
          <ProcessDiagram />
        </div>
      </Section>

      {/* ACTIVE VS PASSIVE */}
      <Section className="pt-0">
        <SectionHeader
          eyebrow="Due tipi di sicurezza"
          title="Sicurezza attiva e passiva"
          subtitle="Clicca gli esempi per leggere una breve spiegazione di ciascuno."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <SafetyPanel
            title="Sicurezza attiva"
            desc="Serve principalmente a prevenire o ridurre il rischio di un incidente. Molti ADAS appartengono a questa categoria."
            icon={ShieldCheck}
            accent="border-brand-cyan/25 bg-brand-cyan/[0.05] text-brand-cyan"
            examples={activeExamples}
            selected={activeSel}
            onSelect={setActiveSel}
          />
          <SafetyPanel
            title="Sicurezza passiva"
            desc="Serve principalmente a ridurre le conseguenze di un incidente che sta già avvenendo."
            icon={LifeBuoy}
            accent="border-brand-blue/25 bg-brand-blue/[0.05] text-brand-blue"
            examples={passiveExamples}
            selected={passiveSel}
            onSelect={setPassiveSel}
          />
        </div>
      </Section>

      <Section className="pt-0 pb-24">
        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-10 text-center">
            <h3 className="font-display text-2xl font-semibold text-brand-white">
              Vediamo i sistemi uno per uno
            </h3>
            <Button to="/sistemi" size="lg">
              Esplora i sistemi ADAS <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default Adas;
