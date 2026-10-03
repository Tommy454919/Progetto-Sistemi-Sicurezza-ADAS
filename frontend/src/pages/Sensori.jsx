import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import SensorCard, { SensorDetail } from "@/components/cards/SensorCard";
import SensorFusion from "@/components/common/SensorFusion";
import ExploredBadge from "@/components/common/ExploredBadge";
import { sensors } from "@/data/sensors";

const Sensori = () => {
  const [active, setActive] = useState("telecamere");
  const current = sensors.find((s) => s.id === active);

  return (
    <>
      <ExploredBadge topic="sensori" />
      <PageHero
        eyebrow="I sensori"
        title="Come vede un'automobile?"
        description="Un veicolo moderno percepisce l'ambiente grazie a diverse tecnologie, ognuna con punti di forza e limiti. Seleziona un sensore per scoprirne i dettagli."
      />

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sensors.map((s, i) => (
            <SensorCard
              key={s.id}
              sensor={s}
              active={active === s.id}
              onSelect={setActive}
              index={i}
            />
          ))}
        </div>
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <SensorDetail key={current.id} sensor={current} />
          </AnimatePresence>
        </div>
      </Section>

      {/* SENSOR FUSION */}
      <Section className="pt-0">
        <SectionHeader
          eyebrow="Sensor Fusion"
          title="Quando i sensori collaborano"
          subtitle="Nessun sensore è perfetto da solo. Combinando i loro dati il sistema costruisce una percezione più ricca e affidabile dell'ambiente."
        />
        <div className="mt-10">
          <SensorFusion />
        </div>
      </Section>

      <Section className="pt-0 pb-24">
        <Reveal>
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-10 text-center">
            <h3 className="font-display text-2xl font-semibold text-brand-white">
              E quanto può essere autonoma un'auto?
            </h3>
            <Button to="/automazione" size="lg">
              Scopri i livelli di automazione <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default Sensori;
