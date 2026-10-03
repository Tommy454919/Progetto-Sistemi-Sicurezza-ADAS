import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useExploration } from "@/context/ExplorationContext";

// Marca un argomento come esplorato al montaggio e mostra un badge elegante.
export const ExploredBadge = ({ topic }) => {
  const { markExplored, isExplored } = useExploration();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const already = isExplored(topic);
    markExplored(topic);
    if (!already) {
      setShow(true);
      const t = setTimeout(() => setShow(false), 3200);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, x: 24 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full glass-strong px-5 py-3 shadow-glow"
          role="status"
        >
          <CheckCircle2 className="h-5 w-5 text-brand-cyan" />
          <span className="text-sm font-medium text-brand-white">
            Argomento esplorato
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExploredBadge;
