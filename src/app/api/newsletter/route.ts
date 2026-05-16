import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  let email: string | undefined;
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return NextResponse.json({ error: "Newsletter service unavailable" }, { status: 503 });
  }

  try {
    const supabase = createSupabaseAdminClient();
    const ip = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for") ?? null;
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email, ip, source: "site" });

    if (error && !error.message.toLowerCase().includes("duplicate")) {
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }
}
