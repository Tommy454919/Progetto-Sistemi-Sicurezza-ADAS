import { AlertTriangle, ArrowRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import Timeline from "@/components/common/Timeline";
import ExploredBadge from "@/components/common/ExploredBadge";
import { automationLevels } from "@/data/automation";

const Automazione = () => {
  return (
    <>
      <ExploredBadge topic="automazione" />
      <PageHero
        eyebrow="Livelli di automazione"
        title="Quanto può essere autonoma un'auto?"
        description="L'automazione della guida viene descritta su una scala da 0 a 5. Più sale il livello, più compiti il sistema può gestire, ma cambia anche il ruolo del conducente."
      />

      <Section className="pt-0">
        <Reveal>
          <div className="mb-10 flex items-start gap-4 rounded-3xl border border-amber-400/25 bg-amber-400/[0.05] p-6">
            <AlertTriangle className="h-6 w-6 shrink-0 text-amber-400" />
            <p className="text-sm leading-relaxed text-brand-white/90">
              <span className="font-semibold text-brand-white">Importante:</span> avere sistemi
              ADAS non significa automaticamente disporre di guida autonoma. Nella maggior parte
              dei veicoli in circolazione la responsabilità della guida resta del conducente.
            </p>
          </div>
        </Reveal>
        <Timeline items={automationLevels} />
      </Section>

      <Section className="pt-0 pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-brand-cyan/20 bg-brand-cyan/[0.05] p-7">
              <h3 className="font-display text-xl font-semibold text-brand-white">
                Livelli 0 – 2: il conducente guida
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                In questi livelli i sistemi assistono, ma la persona alla guida deve
                sorvegliare sempre e restare pronta a intervenire. È qui che si collocano la
                maggior parte degli ADAS più diffusi.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-brand-blue/20 bg-brand-blue/[0.05] p-7">
              <h3 className="font-display text-xl font-semibold text-brand-white">
                Livelli 3 – 5: il sistema può guidare
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                Da qui in poi il sistema può gestire la guida in condizioni via via più ampie.
                Sono livelli tecnicamente più complessi e oggi disponibili solo in contesti
                limitati o ancora in fase di sviluppo.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/sicurezza" size="lg">
            La tecnologia è davvero infallibile? <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Automazione;
