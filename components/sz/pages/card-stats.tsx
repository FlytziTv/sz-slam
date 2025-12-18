"use client";

import { type LucideProps } from "lucide-react";
import { ComponentType } from "react";
import LedLive from "./led-live";

export default function CardStats({
  icons_sub,
  title,
  value,
  unit,
}: {
  icons_sub?: ComponentType<LucideProps> | null;
  title: string;
  value: string | number;
  unit: string;
}) {
  const Icon_sub = icons_sub ?? undefined;

  return (
    <>
      <div className="flex justify-between items-start">
        <div className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700">
          {Icon_sub ? <Icon_sub size={24} className="text-szcolor" /> : null}
        </div>
        <LedLive />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest italic">
          {title}
        </p>
        <p className="text-2xl font-black uppercase italic tracking-tighter">
          {value} <span className="text-szcolor">{unit}</span>
        </p>
      </div>
    </>
  );
}
