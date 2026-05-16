import Link from "next/link";
import { cn } from "@/lib/utils";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500",
  secondary: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200",
  ghost: "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
  outline:
    "border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & CommonProps) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  external,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps & { href: string; external?: boolean }) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props} />
    );
  }
  return <Link href={href} className={classes} {...(props as Record<string, unknown>)} />;
}
