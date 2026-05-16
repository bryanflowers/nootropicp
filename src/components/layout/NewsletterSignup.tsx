"use client";

import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "ok" | "error";

export function NewsletterSignup({ variant = "card" }: { variant?: "card" | "inline" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("ok");
        setMessage("Subscribed. We'll let you know when new peptide profiles go live.");
        setEmail("");
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(body?.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const containerCls =
    variant === "card"
      ? "rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 dark:border-brand-800/50 dark:from-brand-950/30 dark:to-slate-900"
      : "";

  return (
    <div className={containerCls}>
      <div className="flex items-start gap-3">
        {variant === "card" && (
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white sm:inline-flex">
            <Mail className="h-5 w-5" aria-hidden />
          </div>
        )}
        <div className="flex-1">
          {variant === "card" && (
            <>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Get notified when new peptide profiles go live
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Occasional emails when we publish a new peptide profile or research summary. No
                marketing, no human-use recommendations.
              </p>
            </>
          )}
          <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              disabled={status === "submitting" || status === "ok"}
            />
            <button
              type="submit"
              disabled={status === "submitting" || status === "ok"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-60"
            >
              {status === "ok" ? <Check className="h-4 w-4" /> : null}
              {status === "submitting" ? "Subscribing…" : status === "ok" ? "Subscribed" : "Subscribe"}
            </button>
          </form>
          {message && (
            <p
              className={`mt-2 flex items-center gap-1.5 text-xs ${
                status === "ok"
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-rose-700 dark:text-rose-400"
              }`}
            >
              {status === "error" && <AlertCircle className="h-3.5 w-3.5" aria-hidden />}
              {message}
            </p>
          )}
          {variant === "card" && (
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              We never share your email. Unsubscribe in any message.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
