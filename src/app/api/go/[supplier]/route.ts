import { NextResponse } from "next/server";
import { peptides } from "@/data/peptides";
import { SITE } from "@/lib/site";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import { clientIp, hashIp, refererPath, uaShort } from "@/lib/tracking";

const SUPPLIERS = {
  peptidebarn: { url: SITE.partners.peptideBarn },
  peptideauthority: { url: SITE.partners.peptideAuthority },
} as const;

type SupplierKey = keyof typeof SUPPLIERS;

function isSupplier(s: string): s is SupplierKey {
  return s in SUPPLIERS;
}

function buildDestination(supplier: SupplierKey, ref: string | null): string {
  const base = SUPPLIERS[supplier].url;
  const params = new URLSearchParams({
    utm_source: "nootropicpeptides",
    utm_medium: "peptide-page",
    utm_campaign: "supplier-cta",
  });
  if (ref) params.set("utm_content", ref);
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}${params.toString()}`;
}

export async function GET(request: Request, { params }: { params: Promise<{ supplier: string }> }) {
  const { supplier } = await params;
  if (!isSupplier(supplier)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const refRaw = searchParams.get("ref");
  const slugList = peptides.map((p) => p.slug);
  const ref = refRaw && slugList.includes(refRaw) ? refRaw : null;

  // Fire-and-forget DB log; never block the redirect on it.
  if (process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.NEXT_PUBLIC_SUPABASE_URL) {
    try {
      const supabase = createSupabaseAdminClient();
      const referer = request.headers.get("referer");
      const ua = request.headers.get("user-agent");
      void supabase
        .from("supplier_clicks")
        .insert({
          supplier,
          peptide_slug: ref,
          page_path: refererPath(referer),
          ua_short: uaShort(ua),
          ip_hash: hashIp(clientIp(request.headers)),
        })
        .then(() => undefined);
    } catch {
      // never block on logging failure
    }
  }

  return NextResponse.redirect(buildDestination(supplier, ref), { status: 302 });
}
