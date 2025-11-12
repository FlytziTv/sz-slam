"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type ToolboxItem = {
  name: string;
  img: string;
  color?: string;
  link: string;
};

type CardToolboxProps = {
  items: ToolboxItem[];
};

export default function CardToolbox({ items }: CardToolboxProps) {
  return (
    <div className="flex flex-row gap-6 flex-wrap justify-center">
      {items.map((item) => (
        <Link
          href={item.link}
          key={item.name}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div
            className="flex flex-col p-2 border-border border-2 rounded-2xl transition-all duration-300 hover:border-(--hover-color)/50"
            style={
              {
                "--hover-color": item.color || "oklch(0.922 0 0)",
              } as React.CSSProperties
            }
          >
            <div className="w-full relative h-full rounded-lg overflow-hidden flex flex-col bg-card p-4">
              <Image src={item.img} alt={item.name} width={64} height={64} />
            </div>
          </div>
          <p className="mt-3 text-gray-500 text-sm">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
