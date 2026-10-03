import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const SystemCard = ({ system, index = 0 }) => {
  const Icon = system.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
    >
      <Link
        to={`/sistemi/${system.id}`}
        data-testid={`system-card-${system.id}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-gray/12 bg-brand-dark/50 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-glow"
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="font-display text-4xl font-bold text-gradient-cyan">
              {system.acronym}
            </div>
            <div className="mt-1 text-sm font-medium text-brand-white">
              {system.name}
            </div>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-brand-black">
            <Icon className="h-6 w-6" strokeWidth={1.6} />
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-gray">
          {system.short}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {system.sensors.map((s) => (
            <span
              key={s}
              className="rounded-full border border-brand-gray/15 bg-white/[0.03] px-3 py-1 text-[11px] text-brand-gray"
            >
              {s}
            </span>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan opacity-80 transition-all group-hover:gap-2.5 group-hover:opacity-100">
          Approfondisci
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
};

export default SystemCard;
