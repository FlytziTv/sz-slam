"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CardCertif({
  titre,
  description,
  pdf,
  link,
  img,
  date,
}: {
  titre: string;
  description: string;
  pdf: URL | string;
  img: string;
  link: URL | string;
  date: string;
}) {
  return (
    <div className="bg-white border border-border rounded-4xl p-8 flex flex-col justify-between gap-8 shadow-sm group relative overflow-hidden transition-all duration-500 hover:border-szcolor/40">
      {/* L'IMAGE EN FILIGRANE (Background technique) */}
      <div className="absolute -right-6 -bottom-6 size-44 opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 grayscale pointer-events-none">
        <Image src={img} alt="" fill className="object-contain rotate-12" />
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        {/* STATUS BAR */}
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-black text-szcolor uppercase tracking-[0.2em] italic flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-szcolor animate-pulse" />
            Cert_Verified
          </span>
          <span className="text-[10px] font-black text-zinc-300 uppercase italic tracking-widest">
            v.{date}
          </span>
        </div>

        {/* CONTENU (Style Projets) */}
        <div className="flex flex-col gap-4">
          <h3 className="font-black tracking-tighter uppercase italic leading-[0.85] text-4xl md:text-5xl  transition-colors">
            {titre}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed border-l-3 border-zinc-100 pl-4 italic max-w-[90%]">
            {description}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex gap-2 items-center w-full">
        <Link href={pdf} target="_blank" className="flex-1">
          <Button
            variant={"ghost"}
            size={"sm"}
            className="w-full border border-transparent hover:bg-szcolor/10 transition-all hover:border-szcolor/20"
          >
            Voir le pdf
          </Button>
        </Link>

        <Link href={link} target="_blank" className="flex-1">
          <Button
            variant={"ghost"}
            size={"sm"}
            className="w-full border border-transparent hover:bg-szcolor/10 transition-all hover:border-szcolor/20"
          >
            Aller sur le site
          </Button>
        </Link>
      </div>
    </div>
  );
}
