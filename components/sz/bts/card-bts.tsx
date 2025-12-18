"use client";

import { type LucideProps } from "lucide-react";
import type { ComponentType } from "react";

export default function CardBts({
  titre,
  bts_name,
  icons,
  description,
}: {
  titre: string;
  bts_name: string;
  color: string;
  icons?: ComponentType<LucideProps> | null;
  description: string;
}) {
  const Icon = icons ?? undefined;

  return (
    <div className="col-span-full bg-white border border-border rounded-4xl p-8 flex flex-col gap-4">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter transition-colors">
            {titre}
          </h2>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
            {bts_name}
          </p>
        </div>

        {Icon && (
          <div className="text-zinc-200 transition-colors pt-1">
            <Icon size={28} strokeWidth={2.5} />
          </div>
        )}
      </div>

      <p className="text-zinc-500 text-base leading-relaxed italic max-w-4xl">
        {description}
      </p>
    </div>
  );
}
