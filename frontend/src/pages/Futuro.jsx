import { Layers, BrainCircuit, ScanSearch, RadioTower, Gauge, ArrowRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import ExploredBadge from "@/components/common/ExploredBadge";

const topics = [
  {
    icon: Layers,
    title: "Sensor Fusion",
    text: "Combinare sempre meglio i dati di telecamere, radar, LiDAR e ultrasuoni per una percezione più ricca e coerente dell'ambiente.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligenza artificiale",
    text: "Algoritmi capaci di interpretare scenari complessi e distinguere situazioni che oggi risultano ancora difficili da gestire.",
  },
  {
    icon: ScanSearch,
    title: "Computer Vision",
    text: "Una comprensione visiva sempre più fine della scena stradale: oggetti, intenzioni di pedoni e dinamiche del traffico.",
  },
  {
    icon: RadioTower,
    title: "Comunicazione tra veicoli",
    text: "Veicoli e infrastrutture che potrebbero scambiarsi informazioni per anticipare pericoli oltre il campo visivo dei sensori.",
  },
  {
    icon: Gauge,
    title: "Automazione avanzata",
    text: "Sistemi in grado di gestire la guida in contesti via via più ampi, sempre con grande attenzione alla sicurezza.",
  },
];

const timeline = [
  { tag: "Oggi", text: "Sistemi ADAS di assistenza diffusi: frenata d'emergenza, mantenimento di corsia, cruise control adattivo." },
  { tag: "Sviluppi attuali", text: "Migliore sensor fusion e algoritmi più raffinati per interpretare scenari complessi." },
  { tag: "Prossimi sviluppi", text: "Comunicazione tra veicoli e infrastrutture e assistenza in un numero crescente di situazioni." },
  { tag: "Futuro", text: "Possibili forme di automazione più ampie: una direzione di sviluppo, non una certezza." },
];

const Futuro = () => {
  return (
    <>
      <ExploredBadge topic="futuro" />
      <PageHero
        eyebrow="Il futuro"
        title="Il futuro della sicurezza è già iniziato."
        description="Le tecnologie di assistenza alla guida continuano a evolversi. Qui le presentiamo come direzioni di sviluppo e possibilità, non come previsioni certe."
      />

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-7 transition-all hover:-translate-y-1.5 hover:border-brand-cyan/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-brand-white">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray">{t.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* VERTICAL TIMELINE */}
      <Section className="pt-0">
        <SectionHeader
          eyebrow="Una direzione di sviluppo"
          title="Dove stiamo andando"
        />
        <div className="relative mt-12 ml-3">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-brand-cyan via-brand-blue to-transparent" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.tag} delay={i * 0.08}>
                <div className="relative pl-8">
                  <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand-cyan bg-brand-black shadow-glow" />
                  <div className="rounded-2xl border border-brand-gray/12 bg-brand-dark/40 p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                      {t.tag}
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-brand-white/90">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0 pb-24">
        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-10 text-center">
            <h3 className="font-display text-2xl font-semibold text-brand-white">
              Hai esplorato tutto il percorso. Mettiti alla prova!
            </h3>
            <Button to="/quiz" size="lg">
              Vai al quiz <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default Futuro;
