import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export const SectionHeader = ({ eyebrow, title, subtitle, align = "left", className }) => {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-brand-cyan/50" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-semibold leading-tight text-brand-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-brand-gray sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeader;
