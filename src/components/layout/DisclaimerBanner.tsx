import { TriangleAlert } from "lucide-react";

export function DisclaimerBanner() {
  return (
    <div
      role="note"
      className="border-b border-amber-300/60 bg-amber-50 text-amber-900 dark:border-amber-700/50 dark:bg-amber-950/40 dark:text-amber-200"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2 text-xs font-medium sm:px-6 lg:px-8">
        <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden />
        <span>
          For laboratory and research use only — not for human consumption. All content is educational.
        </span>
      </div>
    </div>
  );
}
