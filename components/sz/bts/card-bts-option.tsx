"use client";

import { type LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import { Terminal } from "lucide-react";

export default function CardBtsOption({
  titre,
  option_name,
  icons,
  description,
  jobs,
}: {
  titre: string;
  option_name: string;
  color: string;
  icons?: ComponentType<LucideProps> | null;
  description: string;
  jobs: string[];
}) {
  const Icon = icons ?? undefined;

  return (
    <div className="bg-white border border-border rounded-4xl p-8 flex flex-col gap-4 group transition-all duration-500 hover:border-szcolor/30">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-2xl font-black uppercase italic tracking-tighter transition-colors">
            Option{" "}
            <span className="text-szcolor transition-colors">{titre}</span>
          </h2>
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
            {option_name}
          </p>
        </div>
        {Icon && (
          <div className="text-zinc-200 group-hover:text-szcolor transition-colors pt-1">
            <Icon size={24} strokeWidth={2.5} />
          </div>
        )}
      </div>

      <p className="text-zinc-500 text-sm leading-relaxed italic">
        {description}
      </p>

      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-szcolor" />
          <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
            Débouchés_possibles
          </span>
        </div>
        <ul className="grid grid-cols-1 gap-2 border-l border-zinc-100 pl-4">
          {jobs.map((job, index) => (
            <li
              key={index}
              className="text-[11px] font-bold text-zinc-500 uppercase italic tracking-tight hover:text-szcolor transition-colors cursor-default"
            >
              {"//"} {job}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
