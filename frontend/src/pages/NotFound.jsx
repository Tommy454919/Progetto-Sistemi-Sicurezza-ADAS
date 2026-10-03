import Button from "@/components/common/Button";
import { Home } from "lucide-react";

const NotFound = () => (
  <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-5 text-center">
    <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
    <div className="absolute inset-0 -z-10 radial-glow" />
    <div className="font-display text-7xl font-bold text-gradient-cyan sm:text-8xl">404</div>
    <h1 className="mt-4 font-display text-2xl font-semibold text-brand-white">
      Pagina non trovata
    </h1>
    <p className="mt-3 max-w-md text-brand-gray">
      La strada che cercavi non esiste. Torna alla home e riprendi l'esplorazione.
    </p>
    <Button to="/" className="mt-8">
      <Home className="h-4 w-4" /> Torna alla home
    </Button>
  </section>
);

export default NotFound;
