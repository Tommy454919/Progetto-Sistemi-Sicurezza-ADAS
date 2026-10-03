import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveCard = ({ to, icon: Icon, title, description, index = 0, testid }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Link
        to={to}
        data-testid={testid}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-gray/12 bg-brand-dark/50 p-7 transition-all duration-500",
          "hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-glow",
        )}
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-cyan/10 blur-3xl" />
        </div>

        <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-brand-black">
          <Icon className="h-7 w-7" strokeWidth={1.6} />
        </div>

        <h3 className="relative font-display text-2xl font-semibold text-brand-white">
          {title}
        </h3>
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-brand-gray">
          {description}
        </p>

        <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-cyan opacity-70 transition-all duration-300 group-hover:gap-3 group-hover:opacity-100">
          Scopri di più
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
};

export default InteractiveCard;
