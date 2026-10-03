import { Link } from "react-router-dom";
import { navLinks } from "@/data/nav";

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-brand-gray/10 bg-brand-dark/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-cyan shadow-glow" />
            </span>
            <span className="font-display text-2xl font-bold tracking-tight text-brand-white">
              ADAS
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-lg font-display text-brand-white">
            La sicurezza che vede oltre.
          </p>
          <p className="mt-6 text-sm text-brand-gray">
            Progetto scolastico — Sistemi di sicurezza dei veicoli
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
            Esplora
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  to={link.to}
                  data-testid={`footer-${link.key}`}
                  className="text-sm text-brand-gray transition-colors hover:text-brand-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-gray/10 py-6">
        <p className="mx-auto max-w-7xl px-5 text-center text-xs text-brand-gray/70 sm:px-8">
          A scopo didattico. Gli ADAS assistono il conducente e non sostituiscono
          attenzione, responsabilità e controllo del veicolo.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
