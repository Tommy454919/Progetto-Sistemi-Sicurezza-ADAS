import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Radio, Eye, Cpu, GitBranch, Zap } from "lucide-react";

const steps = [
  {
    id: "sensore",
    label: "Sensore",
    icon: Radio,
    text: "Telecamere, radar e altri sensori raccolgono informazioni sull'ambiente.",
  },
  {
    id: "percezione",
    label: "Percezione",
    icon: Eye,
    text: "Il sistema identifica veicoli, pedoni, corsie e ostacoli.",
  },
  {
    id: "elaborazione",
    label: "Elaborazione",
    icon: Cpu,
    text: "Il computer analizza i dati.",
  },
  {
    id: "decisione",
    label: "Decisione",
    icon: GitBranch,
    text: "Il sistema valuta quale azione può essere necessaria.",
  },
  {
    id: "intervento",
    label: "Intervento",
    icon: Zap,
    text: "Il veicolo può avvisare il conducente o, in determinati sistemi, intervenire.",
  },
];

export const ProcessDiagram = () => {
  const [active, setActive] = useState("sensore");
  const reduce = useReducedMotion();
  const current = steps.find((s) => s.id === active);

  return (
    <div className="w-full">
      <div className="relative">
        {/* flowing connector */}
        <div className="absolute left-0 right-0 top-9 hidden h-px md:block">
          <div className="h-px w-full bg-gradient-to-r from-brand-cyan/10 via-brand-cyan/40 to-brand-cyan/10" />
          {!reduce && (
            <motion.div
              className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-cyan shadow-glow"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>

        <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                data-testid={`process-step-${s.id}`}
                className="group flex flex-col items-center gap-3 focus:outline-none"
              >
                <span
                  className={`flex h-[72px] w-[72px] items-center justify-center rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-brand-cyan bg-brand-cyan text-brand-black shadow-glow scale-105"
                      : "border-brand-gray/20 bg-brand-dark/60 text-brand-cyan group-hover:border-brand-cyan/50"
                  }`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <span
                  className={`text-xs font-semibold uppercase tracking-wide transition-colors ${
                    isActive ? "text-brand-white" : "text-brand-gray"
                  }`}
                >
                  {s.label}
                </span>
                <span className="text-[10px] text-brand-gray/60">0{i + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-8 max-w-2xl rounded-2xl glass border-glow p-6 text-center"
          data-testid="process-detail"
        >
          <h4 className="font-display text-lg font-semibold text-brand-cyan">
            {current.label}
          </h4>
          <p className="mt-2 text-base leading-relaxed text-brand-white/90">
            {current.text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProcessDiagram;
