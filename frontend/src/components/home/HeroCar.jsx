import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

const sensorsData = [
  {
    id: "cam-front",
    label: "Telecamera anteriore",
    x: 50,
    y: 19,
    detects: "Linee di corsia, segnali, veicoli e pedoni davanti al veicolo.",
    where: "Dietro il parabrezza, in alto al centro.",
    example: "Riconoscimento della segnaletica e mantenimento di corsia.",
    cone: { rotate: 0, from: 19 },
  },
  {
    id: "radar-front",
    label: "Radar anteriore",
    x: 50,
    y: 12,
    detects: "Distanza e velocità dei veicoli che precedono.",
    where: "Nella zona della calandra anteriore.",
    example: "Cruise Control adattivo e frenata d'emergenza.",
    cone: { rotate: 0, from: 12 },
  },
  {
    id: "radar-left",
    label: "Radar laterale sinistro",
    x: 30,
    y: 68,
    detects: "Veicoli nell'angolo cieco sul lato sinistro.",
    where: "Nel paraurti posteriore, lato sinistro.",
    example: "Monitoraggio dell'angolo cieco.",
    cone: { rotate: -120, from: 68 },
  },
  {
    id: "radar-right",
    label: "Radar laterale destro",
    x: 70,
    y: 68,
    detects: "Veicoli nell'angolo cieco sul lato destro.",
    where: "Nel paraurti posteriore, lato destro.",
    example: "Monitoraggio dell'angolo cieco.",
    cone: { rotate: 120, from: 68 },
  },
  {
    id: "rear",
    label: "Sensori posteriori",
    x: 50,
    y: 88,
    detects: "Ostacoli e traffico trasversale dietro al veicolo.",
    where: "Nel paraurti posteriore.",
    example: "Avviso di traffico trasversale in retromarcia.",
    cone: { rotate: 180, from: 88 },
  },
  {
    id: "park",
    label: "Sensori di parcheggio",
    x: 38,
    y: 90,
    detects: "Ostacoli molto vicini durante le manovre.",
    where: "Distribuiti nei paraurti anteriore e posteriore.",
    example: "Parcheggio assistito e avvisi di prossimità.",
    cone: null,
  },
];

const SensorDot = ({ s, active, onClick, reduce }) => (
  <button
    type="button"
    onClick={() => onClick(s)}
    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
    style={{ left: `${s.x}%`, top: `${s.y}%` }}
    aria-label={s.label}
    data-testid={`hero-sensor-${s.id}`}
  >
    <span className="relative flex h-5 w-5 items-center justify-center">
      {!reduce && (
        <span
          className={`absolute inline-flex h-5 w-5 rounded-full ${
            active ? "bg-brand-cyan" : "bg-brand-cyan/70"
          } animate-pulse-ring`}
        />
      )}
      <span
        className={`relative inline-flex h-3 w-3 rounded-full border transition-all ${
          active
            ? "scale-125 border-white bg-white shadow-glow"
            : "border-brand-cyan bg-brand-cyan"
        }`}
      />
    </span>
  </button>
);

export const HeroCar = () => {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] sm:max-w-[440px]">
        {/* glow backdrop */}
        <div className="absolute inset-0 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_40%,rgba(0,212,255,0.16),transparent_65%)]" />

        {/* radar cones */}
        {sensorsData
          .filter((s) => s.cone)
          .map((s) => (
            <div
              key={`cone-${s.id}`}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] origin-top -translate-x-1/2"
              style={{
                top: `${s.cone.from}%`,
                transform: `translateX(-50%) rotate(${s.cone.rotate}deg)`,
                opacity: active?.id === s.id ? 0.9 : 0.25,
                transition: "opacity .3s",
              }}
            >
              <div
                className="mx-auto h-full w-full"
                style={{
                  background:
                    "conic-gradient(from -20deg at 50% 0%, transparent 0deg, rgba(0,212,255,0.28) 20deg, transparent 40deg)",
                  clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          ))}

        {/* car SVG (top view) */}
        <svg
          viewBox="0 0 100 130"
          className="absolute inset-0 h-full w-full drop-shadow-[0_0_30px_rgba(77,124,254,0.25)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#12203a" />
              <stop offset="50%" stopColor="#0c1627" />
              <stop offset="100%" stopColor="#0a1322" />
            </linearGradient>
          </defs>
          <rect
            x="24"
            y="10"
            width="52"
            height="112"
            rx="22"
            fill="url(#carBody)"
            stroke="rgba(0,212,255,0.35)"
            strokeWidth="0.8"
          />
          {/* windshield / roof */}
          <rect x="31" y="34" width="38" height="26" rx="10" fill="#0e1b30" stroke="rgba(77,124,254,0.4)" strokeWidth="0.6" />
          <rect x="31" y="66" width="38" height="30" rx="8" fill="#0b1526" stroke="rgba(77,124,254,0.25)" strokeWidth="0.5" />
          {/* center line */}
          <line x1="50" y1="36" x2="50" y2="94" stroke="rgba(139,152,165,0.2)" strokeWidth="0.5" strokeDasharray="2 3" />
          {/* headlights */}
          <circle cx="33" cy="16" r="2.4" fill="rgba(0,212,255,0.7)" />
          <circle cx="67" cy="16" r="2.4" fill="rgba(0,212,255,0.7)" />
          {/* taillights */}
          <rect x="30" y="114" width="10" height="3" rx="1.5" fill="rgba(255,80,80,0.6)" />
          <rect x="60" y="114" width="10" height="3" rx="1.5" fill="rgba(255,80,80,0.6)" />
        </svg>

        {/* sensor dots */}
        {sensorsData.map((s) => (
          <SensorDot
            key={s.id}
            s={s}
            active={active?.id === s.id}
            onClick={setActive}
            reduce={reduce}
          />
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-brand-gray">
        Tocca un sensore per scoprire cosa rileva
      </p>

      {/* info panel */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-4 max-w-md rounded-2xl glass-strong p-5 text-left shadow-glow"
            data-testid="hero-sensor-panel"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-brand-white">
                {active.label}
              </h3>
              <button
                onClick={() => setActive(null)}
                className="rounded-full p-1 text-brand-gray transition-colors hover:text-brand-white"
                aria-label="Chiudi"
                data-testid="hero-sensor-close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-cyan">
                  Cosa rileva
                </dt>
                <dd className="mt-1 text-brand-gray">{active.detects}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-cyan">
                  Dove viene utilizzato
                </dt>
                <dd className="mt-1 text-brand-gray">{active.where}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-cyan">
                  Esempio
                </dt>
                <dd className="mt-1 text-brand-gray">{active.example}</dd>
              </div>
            </dl>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroCar;
