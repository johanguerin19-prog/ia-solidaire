import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: false;
};

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  asChild: true;
};

const variants = {
  primary:
    "bg-ink text-white shadow-card hover:-translate-y-0.5 hover:bg-primary focus-visible:outline-ess",
  secondary:
    "border border-primary/20 bg-white text-ink shadow-sm hover:-translate-y-0.5 hover:border-secondary hover:bg-cream focus-visible:outline-ess",
  ghost:
    "text-ink hover:bg-white/70 focus-visible:outline-ess"
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition";

export function Button(props: ButtonProps | ButtonLinkProps) {
  const variant = props.variant ?? "primary";
  const className = `${base} ${variants[variant]} ${props.className ?? ""}`;

  if (props.asChild) {
    const { asChild, variant: _variant, className: _className, ...linkProps } = props;
    void asChild;
    void _variant;
    void _className;
    return <Link className={className} {...linkProps} />;
  }

  const { variant: _variant, className: _className, ...buttonProps } = props;
  void _variant;
  void _className;
  return <button className={className} {...buttonProps} />;
}
