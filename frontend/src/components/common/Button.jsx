import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60 disabled:opacity-50 disabled:pointer-events-none select-none";

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-4",
};

const variants = {
  primary:
    "bg-brand-cyan text-brand-black hover:bg-white hover:shadow-glow hover:-translate-y-0.5",
  blue: "bg-brand-blue text-white hover:brightness-110 hover:shadow-glow-blue hover:-translate-y-0.5",
  outline:
    "border border-brand-cyan/40 text-brand-white hover:border-brand-cyan hover:bg-brand-cyan/10 hover:-translate-y-0.5",
  ghost: "text-brand-gray hover:text-brand-white hover:bg-white/5",
};

export const Button = ({
  as = "button",
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  const Comp = as;
  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
};

export default Button;
