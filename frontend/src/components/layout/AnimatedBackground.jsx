// Sfondo globale animato: sottile, elegante e non invasivo.
export const AnimatedBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-brand-black"
    >
      {/* griglia tenue */}
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />

      {/* blob luminosi in deriva lenta */}
      <div
        className="bg-blob"
        style={{
          top: "-10%",
          left: "-8%",
          width: "42vw",
          height: "42vw",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.14), transparent 70%)",
          animation: "bg-drift-a 26s ease-in-out infinite",
        }}
      />
      <div
        className="bg-blob"
        style={{
          bottom: "-12%",
          right: "-10%",
          width: "46vw",
          height: "46vw",
          background:
            "radial-gradient(circle, rgba(77,124,254,0.13), transparent 70%)",
          animation: "bg-drift-b 32s ease-in-out infinite",
        }}
      />
      <div
        className="bg-blob"
        style={{
          top: "30%",
          left: "55%",
          width: "32vw",
          height: "32vw",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.08), transparent 70%)",
          animation: "bg-drift-c 38s ease-in-out infinite",
        }}
      />

      {/* leggera scia verticale che attraversa lo schermo */}
      <div
        className="absolute left-0 top-0 h-[40%] w-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0,212,255,0.04), transparent)",
          animation: "bg-sheen 18s ease-in-out infinite",
        }}
      />

      {/* vignettatura per mantenere i bordi profondi */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(5,7,10,0.65))]" />
    </div>
  );
};

export default AnimatedBackground;
