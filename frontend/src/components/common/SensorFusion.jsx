import { motion, useReducedMotion } from "framer-motion";
import { Camera, RadioTower, Radar, Waves, Layers, Boxes } from "lucide-react";

const inputs = [
  { label: "Telecamera", icon: Camera, color: "#00D4FF" },
  { label: "Radar", icon: RadioTower, color: "#4D7CFE" },
  { label: "LiDAR", icon: Radar, color: "#7CF9C7" },
  { label: "Ultrasuoni", icon: Waves, color: "#F6C85A" },
];

export const SensorFusion = () => {
  const reduce = useReducedMotion();
  return (
    <div className="rounded-3xl border border-brand-gray/12 bg-brand-dark/40 p-6 sm:p-10">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
        {/* inputs */}
        <div className="grid grid-cols-2 gap-4">
          {inputs.map((inp, i) => {
            const Icon = inp.icon;
            return (
              <motion.div
                key={inp.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 rounded-2xl border border-brand-gray/12 bg-white/[0.02] p-4"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${inp.color}1a`, color: inp.color }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-brand-white">{inp.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* flows + fusion core */}
        <div className="flex flex-col items-center gap-4">
          <svg viewBox="0 0 80 40" className="h-10 w-20 rotate-90 md:rotate-0" aria-hidden="true">
            {[8, 20, 32].map((y, i) => (
              <line
                key={i}
                x1="0"
                y1={y + 4}
                x2="80"
                y2="20"
                stroke="url(#fusionGrad)"
                strokeWidth="1"
                strokeDasharray="4 4"
                className={reduce ? "" : "animate-flow-dash"}
              />
            ))}
            <defs>
              <linearGradient id="fusionGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#4D7CFE" />
              </linearGradient>
            </defs>
          </svg>
          <motion.div
            animate={reduce ? {} : { boxShadow: ["0 0 20px rgba(0,212,255,0.3)", "0 0 40px rgba(0,212,255,0.6)", "0 0 20px rgba(0,212,255,0.3)"] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-brand-cyan/40 bg-brand-cyan/10 text-center"
          >
            <Layers className="h-6 w-6 text-brand-cyan" />
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-brand-white">
              Sensor Fusion
            </span>
          </motion.div>
        </div>

        {/* output */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-3 rounded-2xl border border-brand-blue/25 bg-brand-blue/[0.06] p-6 text-center"
        >
          <Boxes className="h-8 w-8 text-brand-blue" />
          <span className="font-display text-base font-semibold text-brand-white">
            Rappresentazione dell'ambiente
          </span>
          <span className="text-xs text-brand-gray">
            Una visione più completa e affidabile di ciò che circonda il veicolo.
          </span>
        </motion.div>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-brand-gray">
        Utilizzare informazioni provenienti da più sensori permette al sistema di ottenere
        una percezione più completa dell'ambiente: i punti di forza di una tecnologia
        compensano i limiti delle altre.
      </p>
    </div>
  );
};

export default SensorFusion;
