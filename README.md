# NootropicPeptides.co.uk

High-authority educational micro-site covering research peptides for cognitive enhancement, neuroprotection, focus, mood, and brain health.

**For laboratory / research use only — not for human consumption.**

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript + Tailwind CSS
- Supabase (eu-west-2) for newsletter + future auth
- Deployed on Coolify / Hetzner via GitHub auto-deploy

## Local development

```bash
npm install
cp .env.example .env.local   # fill in Supabase keys
npm run dev
```

Build: `npm run build`. Typecheck: `npm run typecheck`.

## Structure

- `src/app/` — App Router pages (peptides, compare, stacks, research, legal)
- `src/components/` — layout, peptide, ui, seo
- `src/data/peptides.ts` — single source of truth for all peptide entries
- `src/lib/` — supabase clients, seo helpers

## Deploy

Push to `main` → Coolify webhook triggers a rebuild → live within ~2 min.
