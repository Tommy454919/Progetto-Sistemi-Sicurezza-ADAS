import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User, Cpu } from "lucide-react";

export const Timeline = ({ items }) => {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div>
      {/* track */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-6 h-0.5 bg-brand-gray/15" />
        <motion.div
          className="absolute left-0 top-6 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-blue"
          animate={{ width: `${(active / (items.length - 1)) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
        <div className="no-scrollbar relative flex gap-2 overflow-x-auto pb-2">
          {items.map((item, i) => (
            <button
              key={item.level ?? i}
              onClick={() => setActive(i)}
              data-testid={`timeline-node-${i}`}
              className="flex min-w-[64px] flex-1 flex-col items-center gap-3 focus:outline-none"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-display text-lg font-bold transition-all ${
                  i <= active
                    ? "border-brand-cyan bg-brand-cyan text-brand-black shadow-glow"
                    : "border-brand-gray/30 bg-brand-dark text-brand-gray"
                } ${i === active ? "scale-110" : ""}`}
              >
                {item.level ?? i}
              </span>
              <span
                className={`max-w-[80px] text-center text-[10px] font-medium uppercase leading-tight tracking-wide transition-colors ${
                  i === active ? "text-brand-white" : "text-brand-gray/60"
                }`}
              >
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-8 rounded-3xl glass-strong p-6 sm:p-8"
          data-testid="timeline-detail"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-cyan/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-cyan">
              Livello {current.level}
            </span>
            <h3 className="font-display text-2xl font-semibold text-brand-white">
              {current.title}
            </h3>
          </div>
          <p className="mt-2 text-base text-brand-cyan/90">{current.summary}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-gray/12 bg-white/[0.02] p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-white">
                <Cpu className="h-4 w-4 text-brand-cyan" /> Cosa fa il sistema
              </div>
              <p className="text-sm leading-relaxed text-brand-gray">{current.system}</p>
            </div>
            <div className="rounded-2xl border border-brand-gray/12 bg-white/[0.02] p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-white">
                <User className="h-4 w-4 text-brand-blue" /> Cosa deve fare il conducente
              </div>
              <p className="text-sm leading-relaxed text-brand-gray">{current.driver}</p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray">
                Esempio
              </div>
              <p className="mt-1 text-sm text-brand-white/90">{current.example}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray">
                Responsabilità del conducente
              </div>
              <p className="mt-1 text-sm text-brand-white/90">{current.responsibility}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Timeline;
