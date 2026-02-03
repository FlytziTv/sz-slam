"use client";

import { useState } from "react";
import Image from "next/image";
import { MinInfosLinkExtension, SZInfos } from "../sz/SZInfos";

export default function ExCard({
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <div
      className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-row transition-colors duration-150 hover:border-[--certif-color]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Calque de l'effet de lumière (Cursor Effect) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle 160px at ${pos.x}px ${pos.y}px, ${color}25, transparent 80%)`,
        }}
      />
      <div className="flex flex-col gap-4 items-start w-full">
        <Image
          src={image}
          alt={titre}
          width={60}
          height={60}
          className="absolute shrink-0 right-2.5 top-2.5"
        />
        <div className="flex flex-col gap-4 items-start w-full">
          <SZInfos title="Nom" value={titre} />

          <MinInfosLinkExtension title="En savoir plus" value={url} />
        </div>
      </div>
    </div>
  );
}
