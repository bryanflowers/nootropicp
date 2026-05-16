import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Page not found</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/peptides" variant="outline">Browse peptides</ButtonLink>
      </div>
      <p className="mt-12 text-xs text-slate-500 dark:text-slate-400">
        Or use the <Link href="/" className="underline">site navigation</Link> at the top.
      </p>
    </Container>
  );
}
