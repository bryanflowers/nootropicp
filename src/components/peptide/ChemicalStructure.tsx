import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MoleculeCard } from "./MoleculeCard";
import type { Peptide } from "@/types/peptide";

export function ChemicalStructure({ peptide }: { peptide: Peptide }) {
  if (!peptide.pubchemCid) {
    return <MoleculeCard peptide={peptide} />;
  }

  const cid = peptide.pubchemCid;
  const imgUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/PNG?image_size=600x600`;
  const compoundUrl = `https://pubchem.ncbi.nlm.nih.gov/compound/${cid}`;

  return (
    <Card className="overflow-hidden">
      <CardBody className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="order-2 md:order-1">
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge variant="brand">{peptide.category}</Badge>
            <Badge variant="muted">Chemical structure</Badge>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {peptide.name}
          </h2>
          <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {peptide.molecularFormula && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Formula
                </dt>
                <dd className="font-mono text-slate-900 dark:text-slate-100">
                  {peptide.molecularFormula}
                </dd>
              </div>
            )}
            {peptide.molecularWeight && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Weight
                </dt>
                <dd className="text-slate-900 dark:text-slate-100">{peptide.molecularWeight}</dd>
              </div>
            )}
            {peptide.sequence && (
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Sequence
                </dt>
                <dd className="font-mono text-sm text-slate-900 dark:text-slate-100">
                  {peptide.sequence}
                </dd>
              </div>
            )}
          </dl>
          {peptide.pubchemNote && (
            <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {peptide.pubchemNote}
            </p>
          )}
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Source:{" "}
            <a
              href={compoundUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 font-medium text-brand-600 hover:underline dark:text-brand-400"
            >
              PubChem · CID {cid} <ExternalLink className="h-3 w-3" aria-hidden />
            </a>
          </p>
        </div>
        <div className="order-1 mx-auto rounded-xl bg-white p-2 ring-1 ring-slate-200 md:order-2 dark:bg-slate-100 dark:ring-slate-700">
          <Image
            src={imgUrl}
            alt={`2D chemical structure of ${peptide.name} (PubChem CID ${cid})`}
            width={300}
            height={300}
            className="h-[240px] w-[240px] object-contain"
            unoptimized={false}
          />
        </div>
      </CardBody>
    </Card>
  );
}
