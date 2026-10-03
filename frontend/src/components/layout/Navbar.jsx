import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/utils";

const Logo = ({ compact }) => (
  <Link to="/" className="flex items-center gap-3" data-testid="navbar-logo">
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-70" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-cyan shadow-glow" />
    </span>
    <span className="flex flex-col leading-none">
      <span
        className={cn(
          "font-display font-bold tracking-tight text-brand-white transition-all",
          compact ? "text-lg" : "text-xl",
        )}
      >
        ADAS
      </span>
      <AnimatePresence initial={false}>
        {!compact && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-brand-gray"
          >
            Advanced Driver Assistance Systems
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  </Link>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong border-b border-brand-cyan/10"
          : "border-b border-transparent bg-transparent",
      )}
      data-testid="navbar"
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <Logo compact={scrolled} />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              end={link.to === "/"}
              data-testid={`nav-${link.key}`}
              className={({ isActive }) =>
                cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-brand-white"
                    : "text-brand-gray hover:text-brand-white",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-cyan/12 ring-1 ring-brand-cyan/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gray/20 text-brand-white transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan lg:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          data-testid="nav-mobile-toggle"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-brand-cyan/10 glass-strong lg:hidden"
            data-testid="nav-mobile-menu"
          >
            <nav className="flex flex-col gap-1 px-5 py-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    data-testid={`nav-mobile-${link.key}`}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-brand-cyan/12 text-brand-white ring-1 ring-brand-cyan/30"
                          : "text-brand-gray hover:bg-white/5 hover:text-brand-white",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
