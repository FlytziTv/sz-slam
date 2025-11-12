"use client";

import { useState } from "react";
import Image from "next/image";

export function CardSkills({
  items,
}: {
  items: {
    categorie: string;
    color: string;
    img: string;
    name: string;
    description: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-4 border-t border-l">
      {items.map((item) => (
        <GridItem key={item.name} item={item} />
      ))}
    </div>
  );
}

function GridItem({
  item,
}: {
  item: {
    categorie: string;
    color: string;
    img: string;
    name: string;
    description: string;
  };
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
      className="w-full border-r border-b p-2 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, ${item.color}40, transparent 80%)`
          : "transparent",
        transition: "background 0.2s ease-out",
      }}
    >
      <div className="absolute flex flex-row items-start">
        <p className="font-light px-2 py-1 text-xs bg-card rounded-full">
          {item.categorie}
        </p>
      </div>

      <div className="flex flex-col items-center text-center gap-1 p-3">
        <div
          className="flex flex-row p-3 border rounded-full"
          style={{
            backgroundColor: `${item.color}20`,
            borderColor: `${item.color}40`,
          }}
        >
          <Image
            src={item.img}
            width={40}
            height={40}
            alt={item.name}
            className="rounded-full"
          />
        </div>
        <h3 className="font-semibold text-xl">{item.name}</h3>
        {/* <p className="font-light text-sm text-muted-foreground">
          {item.description}
        </p> */}
      </div>
    </div>
  );
}
