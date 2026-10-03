import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export const SensorCard = ({ sensor, active, onSelect, index = 0 }) => {
  const Icon = sensor.icon;
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(sensor.id)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
      data-testid={`sensor-card-${sensor.id}`}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border p-6 text-left transition-all duration-400 ${
        active
          ? "border-transparent bg-brand-dark/70 shadow-glow"
          : "border-brand-gray/12 bg-brand-dark/40 hover:-translate-y-1 hover:border-brand-cyan/30"
      }`}
      style={active ? { boxShadow: `0 0 0 1px ${sensor.color}66, 0 0 40px -10px ${sensor.color}` } : {}}
    >
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-400 group-hover:scale-110"
        style={{
          backgroundColor: `${sensor.color}1a`,
          color: sensor.color,
          border: `1px solid ${sensor.color}40`,
        }}
      >
        <Icon className="h-7 w-7" strokeWidth={1.6} />
      </div>
      <h3 className="font-display text-xl font-semibold text-brand-white">{sensor.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-gray">{sensor.tagline}</p>
      <span
        className="mt-4 text-xs font-medium"
        style={{ color: active ? sensor.color : undefined }}
      >
        {active ? "Selezionato" : "Seleziona per i dettagli"}
      </span>
    </motion.button>
  );
};

export const SensorDetail = ({ sensor }) => {
  const Icon = sensor.icon;
  return (
    <motion.div
      key={sensor.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl glass-strong p-6 sm:p-8"
      data-testid="sensor-detail"
    >
      <div className="flex flex-wrap items-center gap-4">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${sensor.color}1a`, color: sensor.color, border: `1px solid ${sensor.color}40` }}
        >
          <Icon className="h-8 w-8" strokeWidth={1.6} />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-brand-white">{sensor.name}</h3>
          <p className="text-sm" style={{ color: sensor.color }}>
            {sensor.range}
          </p>
        </div>
      </div>

      <p className="mt-5 text-base leading-relaxed text-brand-gray">{sensor.description}</p>

      <div className="mt-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
          Cosa può rilevare
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {sensor.detects.map((d) => (
            <span
              key={d}
              className="rounded-full border border-brand-gray/15 bg-white/[0.03] px-3 py-1.5 text-xs text-brand-white/90"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5">
          <div className="mb-3 text-sm font-semibold text-emerald-400">Vantaggi</div>
          <ul className="space-y-2">
            {sensor.advantages.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm text-brand-gray">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-red-500/15 bg-red-500/[0.04] p-5">
          <div className="mb-3 text-sm font-semibold text-red-400">Limiti</div>
          <ul className="space-y-2">
            {sensor.limitations.map((l) => (
              <li key={l} className="flex items-start gap-2 text-sm text-brand-gray">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray">
          Applicazioni
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {sensor.applications.map((app) => (
            <span
              key={app}
              className="rounded-full px-3 py-1.5 text-xs font-medium"
              style={{ backgroundColor: `${sensor.color}14`, color: sensor.color }}
            >
              {app}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SensorCard;
