"use client";

import { GithubIcon } from "@/components/Icons/github";
import { LinkedInIcon } from "@/components/Icons/linkedin";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { personal_data } from "@/data/about";

import { ArrowUpRight, User, Zap } from "lucide-react";
import Link from "next/link";
import HeaderPages from "@/components/sz/pages/header";
import LedLive from "@/components/sz/pages/led-live";

const socials = [
  {
    Icon: GithubIcon,
    name: "GitHub",
    href: "https://github.com/FlytziTv",
  },
  {
    Icon: LinkedInIcon,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexis-dejesus/",
  },
];

export default function About() {
  return (
    <div className="p-4 flex flex-col gap-6">
      <HeaderPages
        icons_sub={Zap}
        sub="Développeur informatique / étudiant"
        title1="Alexis"
        title2="De Jesus"
        description="_Futur développeur interface @ Paris Ynov Campus"
      >
        <div className="flex justify-between items-start">
          <div className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700">
            <User size={24} className="text-szcolor" />
          </div>
          <LedLive />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
            Disponibilité
          </p>
          <p className="text-sm font-bold uppercase flex items-center gap-2">
            Prêt à être embauché
            <ArrowUpRight size={14} className="text-zinc-500" />
          </p>
        </div>
        <Link href="/files/cv_alexis_dejesus-2026.pdf" target="_blank">
          <Button variant={"secondary"} size={"lg"} className="rounded-xl">
            Télécharger mon CV
          </Button>
        </Link>
      </HeaderPages>

      <div className="flex flex-row gap-6">
        <div className="flex-1 flex flex-col gap-4 bg-white border border-border rounded-4xl p-8 ">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-zinc-400" /> Biography /
            Core
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed italic border-l-3 border-szcolor/30 pl-4">
            Développeur passionné par les{" "}
            <span className="text-important">interfaces web</span> et les{" "}
            <span className="text-important">dashboards dynamiques</span>, je
            m’attache à rendre les données compréhensibles et agréables à
            utiliser.
          </p>
        </div>

        <div className="bg-white border border-border rounded-4xl p-8 flex flex-col gap-4 justify-between">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            Connect_Terminal
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {socials.map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target="_blank"
                className="flex items-center w-30 justify-center aspect-square rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-szcolor hover:bg-szcolor/20 transition-all group duration-500"
              >
                <social.Icon
                  size={24}
                  className="group-hover:text-szcolor transition-colors"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {personal_data.stats.map(({ id, link_page, label, val, unit, sub }) => (
          <Link
            key={id}
            href={link_page}
            className="flex flex-col items-center justify-center gap-2 bg-border/30 backdrop-blur-xl border border-border/40 rounded-4xl p-8 text-center hover:border-szcolor hover:bg-szcolor/20 transition-all duration-500"
          >
            <span className="block text-[9px] font-black text-zinc-400 uppercase tracking-widest ">
              {label}
            </span>
            <span className="text-2xl font-black tracking-tighter italic uppercase">
              {val}
              <span className="text-szcolor">{unit}</span>
            </span>
            <p className="text-[9px] text-zinc-500 uppercase font-bold">
              {sub}
            </p>
          </Link>
        ))}

        <div className="flex flex-col items-center justify-between gap-2 bg-zinc-900 backdrop-blur-xl border border-border/40 rounded-4xl p-8 text-center">
          <span className="block text-[9px] font-black text-zinc-400 uppercase tracking-widest">
            {personal_data.location.label}
          </span>
          <div className="flex flex-row gap-2 items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-szcolor shadow-[0_0_10px_#1DBAA9]"
            />

            <span className="text-2xl font-black tracking-tighter text-white italic uppercase">
              {personal_data.location.val} {" / "}
              <span className="text-szcolor">
                {personal_data.location.unit}
              </span>
            </span>
          </div>
          <p className="text-[9px] text-zinc-500 uppercase font-bold">
            {personal_data.location.sub}
          </p>
        </div>
      </div>

      <div className="bg-white/20 dark:bg-white/5 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-[2.5rem] p-6 flex flex-col md:flex-row justify-between items-center gap-6 px-12">
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400 italic">
          Stack_Technique_v1.2
        </span>
        <div className="flex flex-wrap justify-center gap-3 text-[10px] font-mono font-bold uppercase">
          {personal_data.stack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-xl cursor-default bg-white/50 hover:border-szcolor hover:bg-szcolor/20 transition-all duration-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
