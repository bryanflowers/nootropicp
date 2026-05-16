import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

type Variant = "default" | "info" | "warn" | "danger" | "muted" | "brand";

const variants: Record<Variant, string> = {
  default: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
  info: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200",
  warn: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
  danger: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200",
  muted: "bg-slate-50 text-slate-600 dark:bg-slate-800/60 dark:text-slate-300",
  brand: "bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
