"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CardSkills({
  name,
  img,
  link,
}: {
  name: string;
  img: string;
  categorie: string;
  link: URL | string;
}) {
  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="block"
    >
      <motion.div
        className="relative flex flex-col items-center justify-center gap-4 rounded-4xl border border-zinc-200/60 bg-transparent p-6 group transition-all duration-500 hover:border-szcolor hover:bg-white hover:shadow-2xl hover:shadow-szcolor/10"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div className="flex size-14 items-center justify-center rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--szcolor-rgb),0.15)] group-hover:scale-110 group-hover:rotate-3">
          <Image
            alt={name}
            src={img}
            width={28}
            height={28}
            className="object-contain transition-transform duration-500"
          />
        </div>

        <p className="font-black text-zinc-400 text-[11px] uppercase italic tracking-tighter transition-colors duration-300 group-hover:text-szcolor">
          {name}
        </p>
      </motion.div>
    </Link>
  );
}
