"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { NewsletterSignup } from "./NewsletterSignup";

const COOKIE_NAME = "np_exit_dismissed_at";
const THROTTLE_DAYS = 30;

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

export function ExitIntentNewsletter() {
  const [open, setOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const dismissedAt = readCookie(COOKIE_NAME);
    if (dismissedAt) return;

    const minDelayMs = 15000; // don't fire in the first 15s of the visit
    const startedAt = Date.now();

    function onMouseLeave(e: MouseEvent) {
      if (hasTriggered) return;
      if (e.clientY > 0) return;
      if (Date.now() - startedAt < minDelayMs) return;
      setHasTriggered(true);
      setOpen(true);
    }

    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [hasTriggered]);

  function close() {
    setOpen(false);
    writeCookie(COOKIE_NAME, String(Date.now()), THROTTLE_DAYS);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Newsletter signup"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 rounded p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Before you go — get notified when new peptide profiles publish
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Occasional updates when we add a peptide, ship a study deep dive, or revise a regulatory
          guide. No marketing, no human-use recommendations.
        </p>
        <div className="mt-4">
          <NewsletterSignup variant="inline" />
        </div>
        <button
          type="button"
          onClick={close}
          className="mt-3 text-xs text-slate-500 underline-offset-4 hover:underline dark:text-slate-400"
        >
          No thanks — don't show this again
        </button>
      </div>
    </div>
  );
}
