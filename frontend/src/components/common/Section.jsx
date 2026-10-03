import { cn } from "@/lib/utils";

export const Section = ({ children, className, container = true, id }) => (
  <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
    {container ? (
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    ) : (
      children
    )}
  </section>
);

export default Section;
