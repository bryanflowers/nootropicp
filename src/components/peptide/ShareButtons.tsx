"use client";

import { useState } from "react";
import { Copy, Check, Printer, Share2, Twitter, Linkedin } from "lucide-react";

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  function getUrl() {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  async function nativeShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: getUrl() });
      } catch {
        // user cancelled
      }
    } else {
      await copyLink();
    }
  }

  function printPage() {
    if (typeof window !== "undefined") window.print();
  }

  const url = typeof window === "undefined" ? "" : encodeURIComponent(window.location.href);
  const encodedTitle = encodeURIComponent(title);
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${url}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;

  const baseBtn =
    "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-700 dark:hover:text-brand-300";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Share:</span>
      <button type="button" aria-label="Native share" onClick={nativeShare} className={baseBtn}>
        <Share2 className="h-4 w-4" aria-hidden />
      </button>
      <a href={twitterHref} target="_blank" rel="noopener" aria-label="Share on Twitter" className={baseBtn}>
        <Twitter className="h-4 w-4" aria-hidden />
      </a>
      <a href={linkedinHref} target="_blank" rel="noopener" aria-label="Share on LinkedIn" className={baseBtn}>
        <Linkedin className="h-4 w-4" aria-hidden />
      </a>
      <button type="button" aria-label="Copy link" onClick={copyLink} className={baseBtn}>
        {copied ? <Check className="h-4 w-4 text-emerald-600" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
      </button>
      <button type="button" aria-label="Print" onClick={printPage} className={baseBtn}>
        <Printer className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
