import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import SystemCard from "@/components/cards/SystemCard";
import ExploredBadge from "@/components/common/ExploredBadge";
import { systems } from "@/data/systems";

const Sistemi = () => {
  return (
    <>
      <ExploredBadge topic="sistemi" />
      <PageHero
        eyebrow="I sistemi ADAS"
        title="I sistemi che assistono il conducente"
        description="Ogni sistema ha un compito specifico: avvisare, correggere o intervenire. Scegli una card per approfondire come funziona, quali sensori utilizza e quali sono i suoi limiti."
      />
      <Section className="pt-0 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system, i) => (
            <SystemCard key={system.id} system={system} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Sistemi;
