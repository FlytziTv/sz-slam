"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen w-full p-5 items-center justify-center font-sans bg-[#0A0A0A] overflow-hidden">
      <main className="relative flex flex-col items-center justify-center w-full h-full border border-zinc-800/50 rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            className="object-cover opacity-40 grayscale"
            src="/img/background/bg.png"
            alt="Background"
            fill
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-2 bg-zinc-900/80 border border-zinc-700/50 rounded-full backdrop-blur-md"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-szcolor shadow-[0_0_8px_#1DBAA9] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              System_Ready / v2.0
            </span>
          </motion.div>

          <div className="flex flex-col items-center gap-4 text-center">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white"
            >
              Alexis <span className="text-szcolor">De Jesus</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base font-medium uppercase tracking-[0.3em] text-zinc-300"
            >
              _Futur développeur interface
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/dashboard/about">
              <Button
                size={"lg"}
                variant={"secondary"}
                className="px-8 py-4 rounded-2xl group flex items-center gap-4 "
              >
                Lancer l&apos;expérience
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Footer info style "About" stats */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end z-10">
          <div className="hidden md:block">
            <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">
              Localisation
            </p>
            <p className="text-sm font-bold text-white uppercase italic">
              Paris / FR
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-2">
              <div className="h-1 w-8 bg-szcolor/50 rounded-full" />
              <div className="h-1 w-2 bg-zinc-700 rounded-full" />
              <div className="h-1 w-2 bg-zinc-700 rounded-full" />
            </div>
            <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">
              Creative_Terminal.exe
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
