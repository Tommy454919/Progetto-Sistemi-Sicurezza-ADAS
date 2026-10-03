import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export const PageHero = ({ eyebrow, title, tagline, description, children, className }) => {
  return (
    <section className={cn("relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20", className)}>
      <div className="absolute inset-0 -z-10 radial-glow" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        {eyebrow && (
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              {eyebrow}
            </div>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-brand-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {tagline && (
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-3xl text-xl font-display text-gradient sm:text-2xl">
              {tagline}
            </p>
          </Reveal>
        )}
        {description && (
          <Reveal delay={0.18}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-gray sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.24}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default PageHero;
