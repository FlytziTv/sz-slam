"use client";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Target, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Formation() {
  return (
    <div className="p-4 flex flex-col gap-6 font-sans">
      <div className="bg-card border border-border rounded-4xl p-8 flex flex-row justify-between items-start">
        <div className="flex flex-col gap-4 shrink-0">
          <div className="flex flex-row items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] font-black uppercase tracking-[0.2em] w-fit">
            <Target size={10} className="fill-szcolor text-szcolor" />
            <p>System_Education_Base</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-[0.9]">
            Paris <br />
            <span className="text-szcolor font-outline-2 ">Ynov</span>{" "}
            <span className="text-zinc-300 font-outline-2  transition-colors duration-500">
              Campus
            </span>
          </h1>
          <p className="text-szcolor font-mono text-sm font-bold uppercase tracking-widest"></p>
        </div>

        <motion.div
          whileHover={{ scale: 1.02, rotate: 2 }}
          // className="w-64 h-full bg-zinc-900 text-white rounded-2xl p-8 flex flex-col justify-between gap-6 shadow-2xl"
          className="w-64 h-full bg-zinc-900 rounded-4xl flex items-center justify-center p-8 group overflow-hidden relative shadow-2xl border border-zinc-800"
        >
          <Image
            src="/img/icons/ynov.svg"
            alt="Logo"
            width={120}
            height={120}
            className="invert brightness-0 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-125 z-10"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        <div className="md:col-span-2 bg-szcolor rounded-4xl p-10 text-white flex flex-col justify-center gap-6 shadow-xl shadow-szcolor/20 group overflow-hidden relative">
          <p className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-[0.9] z-10">
            &quot;L&apos;immersion professionnelle & l&apos;innovation technique
            au cœur de l&apos;apprentissage.&quot;
          </p>
          <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
        </div>

        <div className="md:col-span-1 relative bg-zinc-100 rounded-4xl overflow-hidden min-h-62.5 border border-border group">
          <Image
            src="/img/background/banner_ynov.png"
            alt="Campus"
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900/50 to-transparent" />
        </div>

        <Link
          href={"https://maps.app.goo.gl/teXxx3h1bVumAtD58"}
          target="_blank"
          className="bg-white border border-border rounded-4xl p-8 flex flex-col justify-between group hover:border-szcolor transition-colors"
        >
          <div className="size-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-szcolor/10 transition-colors">
            <MapPin
              size={24}
              className="text-zinc-400 group-hover:text-szcolor transition-colors"
            />
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-black italic uppercase tracking-tighter">
              Nanterre
            </p>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest italic">
              FRANCE // 92800
            </p>
          </div>
        </Link>

        <div className="md:col-span-4 bg-white border border-border rounded-4xl p-10 flex flex-col md:flex-row justify-between items-center gap-10 group transition-all hover:border-szcolor/30">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-szcolor" />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                System_Deployment
              </span>
            </div>
            <p className="text-zinc-500 text-lg md:text-xl italic leading-relaxed max-w-3xl">
              Un écosystème qui me permet de confronter mes apprentissages
              théoriques à des{" "}
              <span className="text-zinc-900 font-bold underline decoration-szcolor/30 underline-offset-4">
                défis réels
              </span>
              , dans un environnement à la pointe du numérique.
            </p>
          </div>

          <Link
            href="https://www.ynov.com/campus/paris"
            target="_blank"
            className="shrink-0 flex items-center gap-6 group/btn"
          >
            <span className="text-2xl font-black uppercase italic tracking-tighter group-hover/btn:text-szcolor transition-colors">
              En savoir plus
            </span>
            <div className="size-16 bg-zinc-900 rounded-full flex items-center justify-center text-white group-hover/btn:bg-szcolor group-hover/btn:rotate-45 transition-all duration-500">
              <ExternalLink size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
