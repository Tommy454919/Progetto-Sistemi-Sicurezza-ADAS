import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const PageTransition = ({ children }) => {
  const reduce = useReducedMotion();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
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
