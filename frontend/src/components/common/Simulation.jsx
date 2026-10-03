import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, RotateCcw, Car, AlertTriangle, User, SquareParking } from "lucide-react";

// Definizione delle fasi per ogni tipo di simulazione.
const SIM = {
  aeb: {
    stages: [
      { label: "Rilevamento", tone: "cyan" },
      { label: "Pericolo", tone: "amber" },
      { label: "Avviso", tone: "amber" },
      { label: "Frenata", tone: "red" },
    ],
    scene: "road-obstacle",
  },
  acc: {
    stages: [
      { label: "Veicolo rilevato", tone: "cyan" },
      { label: "Distanza calcolata", tone: "cyan" },
      { label: "Velocità adeguata", tone: "blue" },
      { label: "Distanza mantenuta", tone: "green" },
    ],
    scene: "road-follow",
  },
  lka: {
    stages: [
      { label: "Corsia rilevata", tone: "cyan" },
      { label: "Scostamento", tone: "amber" },
      { label: "Correzione sterzo", tone: "blue" },
      { label: "Veicolo centrato", tone: "green" },
    ],
    scene: "lane",
  },
  ldw: {
    stages: [
      { label: "Corsia rilevata", tone: "cyan" },
      { label: "Scostamento", tone: "amber" },
      { label: "Avviso", tone: "red" },
    ],
    scene: "lane",
  },
  bsm: {
    stages: [
      { label: "Veicolo laterale", tone: "cyan" },
      { label: "Entra nell'angolo cieco", tone: "amber" },
      { label: "Avviso", tone: "red" },
    ],
    scene: "blindspot",
  },
  tsr: {
    stages: [
      { label: "Cartello inquadrato", tone: "cyan" },
      { label: "Riconoscimento", tone: "blue" },
      { label: "Mostrato al conducente", tone: "green" },
    ],
    scene: "sign",
  },
  dms: {
    stages: [
      { label: "Sguardo monitorato", tone: "cyan" },
      { label: "Distrazione rilevata", tone: "amber" },
      { label: "Avviso al conducente", tone: "red" },
    ],
    scene: "driver",
  },
  apa: {
    stages: [
      { label: "Spazio rilevato", tone: "cyan" },
      { label: "Traiettoria calcolata", tone: "blue" },
      { label: "Manovra in corso", tone: "blue" },
      { label: "Parcheggiato", tone: "green" },
    ],
    scene: "parking",
  },
};

const toneMap = {
  cyan: { text: "text-brand-cyan", bg: "bg-brand-cyan", ring: "ring-brand-cyan/40", glow: "rgba(0,212,255,0.5)" },
  blue: { text: "text-brand-blue", bg: "bg-brand-blue", ring: "ring-brand-blue/40", glow: "rgba(77,124,254,0.5)" },
  amber: { text: "text-amber-400", bg: "bg-amber-400", ring: "ring-amber-400/40", glow: "rgba(251,191,36,0.5)" },
  red: { text: "text-red-500", bg: "bg-red-500", ring: "ring-red-500/40", glow: "rgba(239,68,68,0.55)" },
  green: { text: "text-emerald-400", bg: "bg-emerald-400", ring: "ring-emerald-400/40", glow: "rgba(52,211,153,0.5)" },
};

function Scene({ scene, step, total, tone }) {
  const p = total > 1 ? step / (total - 1) : 0;
  const glow = toneMap[tone].glow;

  if (scene === "road-obstacle" || scene === "road-follow") {
    const carLeft = scene === "road-obstacle" ? 8 + p * 58 : 6 + p * 20;
    return (
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#060b14]">
        <div className="absolute left-0 right-0 top-1/2 h-16 -translate-y-1/2 bg-[#0b1322]" />
        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-around">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="h-1 w-6 rounded-full bg-brand-gray/25" />
          ))}
        </div>
        {scene === "road-follow" && (
          <div className="absolute top-1/2 -translate-y-1/2" style={{ left: "72%" }}>
            <Car className="h-9 w-9 text-brand-gray" strokeWidth={1.5} />
          </div>
        )}
        {scene === "road-obstacle" && (
          <div className="absolute top-1/2 -translate-y-1/2" style={{ left: "78%" }}>
            <AlertTriangle className="h-9 w-9 text-red-500" strokeWidth={1.6} />
          </div>
        )}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          animate={{ left: `${carLeft}%` }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
          style={{ filter: `drop-shadow(0 0 10px ${glow})` }}
        >
          <Car className={`h-10 w-10 ${toneMap[tone].text}`} strokeWidth={1.6} />
        </motion.div>
        {/* scan waves */}
        <motion.span
          key={step}
          className="absolute top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
          style={{ left: `${carLeft + 6}%`, border: `1px solid ${glow}` }}
          initial={{ scale: 0.4, opacity: 0.8 }}
          animate={{ scale: 2.4, opacity: 0 }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </div>
    );
  }

  if (scene === "lane") {
    const offset = step === 0 ? 0 : step === 1 ? -26 : step === 2 ? -10 : 0;
    const departed = step === 2 && scene === "lane";
    return (
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#060b14]">
        <div className="absolute inset-y-0 left-1/4 w-0.5 bg-brand-cyan/30" />
        <div className="absolute inset-y-0 right-1/4 w-0.5 bg-brand-cyan/30" />
        <div className="absolute inset-y-0 left-1/2 flex -translate-x-1/2 flex-col justify-around">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="mx-auto h-5 w-1 rounded bg-brand-gray/25" />
          ))}
        </div>
        <motion.div
          className="absolute left-1/2 top-1/2"
          animate={{ x: offset - 20, y: -20 }}
          transition={{ type: "spring", stiffness: 70, damping: 15 }}
          style={{ filter: `drop-shadow(0 0 10px ${glow})` }}
        >
          <Car className={`h-10 w-10 ${toneMap[tone].text}`} strokeWidth={1.6} />
        </motion.div>
        {departed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="absolute left-4 top-4"
          >
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </motion.div>
        )}
      </div>
    );
  }

  if (scene === "blindspot") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#060b14]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Car className="h-10 w-10 text-brand-gray" strokeWidth={1.6} />
        </div>
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          animate={{ left: `${70 - p * 30}%` }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
          style={{ filter: step >= 2 ? `drop-shadow(0 0 10px ${glow})` : "none" }}
        >
          <Car className={`h-9 w-9 ${step >= 1 ? toneMap[tone].text : "text-brand-gray"}`} strokeWidth={1.6} />
        </motion.div>
        {step >= 2 && (
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="absolute right-6 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md ring-2 ring-red-500/60"
          >
            <Car className="h-5 w-5 text-red-500" />
          </motion.div>
        )}
      </div>
    );
  }

  if (scene === "sign") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-[#060b14]">
        <motion.div
          animate={{ scale: step >= 1 ? 1 : 0.8, opacity: step >= 0 ? 1 : 0.4 }}
          className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-red-500 bg-[#0b1322]"
        >
          <span className="font-display text-2xl font-bold text-brand-white">50</span>
          {step >= 1 && (
            <motion.span
              className="absolute inset-0 rounded-full ring-2 ring-brand-cyan"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.25, opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          )}
        </motion.div>
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 rounded-lg glass px-3 py-1.5 text-sm text-emerald-400"
          >
            Limite 50 km/h sul cruscotto
          </motion.div>
        )}
      </div>
    );
  }

  if (scene === "driver") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-[#060b14]">
        <motion.div
          animate={step >= 2 ? { x: [-3, 3, -3] } : {}}
          transition={{ duration: 0.4, repeat: Infinity }}
          className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${
            step >= 1 ? "border-amber-400" : "border-brand-cyan/50"
          } bg-[#0b1322]`}
        >
          <User className={`h-12 w-12 ${step >= 2 ? "text-red-500" : toneMap[tone].text}`} strokeWidth={1.5} />
        </motion.div>
        {step >= 1 && (
          <motion.span
            className="absolute h-24 w-24 rounded-full ring-2 ring-amber-400/50"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.4, opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        )}
      </div>
    );
  }

  if (scene === "parking") {
    const x = -30 + p * 30;
    const y = p * 24;
    return (
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#060b14]">
        <div className="absolute bottom-6 right-6 h-16 w-14 rounded-md border-2 border-dashed border-brand-cyan/40" />
        <div className="absolute bottom-6 right-24 top-6 w-14 rounded-md bg-[#0b1322]" />
        <motion.div
          className="absolute left-6 top-6"
          animate={{ x: Math.max(x, -30) + 60, y, rotate: step >= 2 ? 12 : 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
          style={{ filter: `drop-shadow(0 0 8px ${glow})` }}
        >
          <SquareParking className={`h-10 w-10 ${toneMap[tone].text}`} strokeWidth={1.5} />
        </motion.div>
      </div>
    );
  }

  return null;
}

export const Simulation = ({ type }) => {
  const config = SIM[type] || SIM.aeb;
  const stages = config.stages;
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reduce = useReducedMotion();
  const timer = useRef(null);

  useEffect(() => {
    if (!playing) return;
    if (step >= stages.length - 1) {
      setPlaying(false);
      return;
    }
    timer.current = setTimeout(() => setStep((s) => s + 1), reduce ? 400 : 1400);
    return () => clearTimeout(timer.current);
  }, [playing, step, stages.length, reduce]);

  const play = () => {
    setStep(0);
    setPlaying(true);
  };

  const tone = stages[step].tone;

  return (
    <div className="rounded-3xl border border-brand-gray/12 bg-brand-dark/50 p-5 sm:p-6" data-testid="simulation">
      <div className="h-44 w-full sm:h-52">
        <Scene scene={config.scene} step={step} total={stages.length} tone={tone} />
      </div>

      {/* stage badges */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {stages.map((s, i) => {
          const tm = toneMap[s.tone];
          const reached = i <= step;
          return (
            <div key={s.label} className="flex items-center gap-2">
              <motion.span
                animate={{ scale: i === step ? 1.04 : 1 }}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                  reached
                    ? `${tm.text} ring-1 ${tm.ring} bg-white/[0.04]`
                    : "text-brand-gray/40 ring-1 ring-white/5"
                }`}
                data-testid={`sim-stage-${i}`}
              >
                {s.label}
              </motion.span>
              {i < stages.length - 1 && (
                <span className="text-brand-gray/30">→</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={play}
          className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-2.5 text-sm font-medium text-brand-black transition-all hover:bg-white hover:shadow-glow"
          data-testid="sim-play"
        >
          {step === 0 && !playing ? (
            <>
              <Play className="h-4 w-4" /> Avvia simulazione
            </>
          ) : (
            <>
              <RotateCcw className="h-4 w-4" /> Riprova
            </>
          )}
        </button>
        <span className="text-xs text-brand-gray">
          Fase {step + 1} di {stages.length}
        </span>
      </div>
    </div>
  );
};

export default Simulation;
