"use client";

import { type LucideProps } from "lucide-react";

import { motion } from "framer-motion";
import { ComponentType } from "react";

export default function HeaderPages({
  icons_sub,
  sub,
  title1,
  title2,
  children,
  description,
}: {
  icons_sub?: ComponentType<LucideProps> | null;
  sub: string;
  title1: string;
  title2: string;
  children: React.ReactNode;
  description?: string;
}) {
  const Icon_sub = icons_sub ?? undefined;
  return (
    <div className="bg-card border border-border rounded-4xl p-8 flex flex-row justify-between items-start">
      <div className="flex flex-col gap-4 shrink-0">
        <div className="flex flex-row items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] font-black uppercase tracking-[0.2em] w-fit">
          {Icon_sub ? (
            <Icon_sub size={10} className="fill-szcolor text-szcolor" />
          ) : null}

          <p>{sub}</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
          {title1} <br />
          <span className="text-zinc-400 font-outline-2">{title2}</span>
        </h1>
        <p className="text-szcolor font-mono text-sm font-bold uppercase tracking-widest">
          {description}
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.02, rotate: 2 }}
        className="w-64 h-full bg-zinc-900 text-white rounded-2xl p-8 flex flex-col justify-between gap-6 shadow-2xl"
      >
        {children}
      </motion.div>
    </div>
  );
}
