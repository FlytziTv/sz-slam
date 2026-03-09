"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SZSkillsCard({
  url,
  image,
  titre,
  color,
}: {
  url: string;
  image: string;
  titre: string;
  color: string;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      href={url}
      className="group relative bg-[#0A0A0A] border border-[#252525] hover:border-[#ffffff]/20 transition-all duration-300 rounded-lg p-3 gap-3 flex flex-col items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Calque de l'effet de lumière (Cursor Effect) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-lg transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle 160px at ${pos.x}px ${pos.y}px, ${color}40, transparent 80%)`,
        }}
      />

      <div
        className="flex flex-row items-center justify-center rounded-full relative shrink-0 border p-1.5 z-10"
        style={{ backgroundColor: `${color}20`, borderColor: color }}
      >
        <Image src={image} alt={titre} width={40} height={40} />
      </div>
      <h2 className="text-sm font-semibold text-[#FFFFFF] z-10">{titre}</h2>
    </Link>
  );
}
