import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
}

export function Section({
  className,
  id,
  title,
  eyebrow,
  description,
  children,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-10 lg:py-14", className)} {...props}>
      {(eyebrow || title || description) && (
        <header className="mb-6 max-w-3xl">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-4xl">
              {title}
            </h2>
          )}
          {description && <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
