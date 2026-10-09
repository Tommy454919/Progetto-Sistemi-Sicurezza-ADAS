import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const titles = {
  "/": "ADAS — La sicurezza che vede oltre",
  "/adas": "Cosa sono gli ADAS — ADAS",
  "/sistemi": "Sistemi ADAS — ADAS",
  "/confronto": "Confronto sistemi — ADAS",
  "/sensori": "Sensori — ADAS",
  "/automazione": "Livelli di automazione — ADAS",
  "/sicurezza": "Sicurezza e limiti — ADAS",
  "/futuro": "Il futuro — ADAS",
  "/quiz": "Quiz — ADAS",
};

export const PageTransition = ({ children }) => {
  const reduce = useReducedMotion();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    const base = pathname.startsWith("/sistemi/")
      ? "Sistema ADAS — ADAS"
      : titles[pathname] || "ADAS";
    document.title = base;
  }, [pathname]);

  return (
    <motion.main
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
