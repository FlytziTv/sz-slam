"use client";

import { Button } from "@/components/ui/button";
import ZoomImage from "../Image";
import Link from "next/link";

export default function CardProjet({
  items,
}: {
  items: {
    categorie: string;
    titre: string;
    img: string;
    pdf: string;
    description: string;
    link: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.titre}
          className="flex flex-col p-2 border-border border-2 rounded-2xl hover:border-foreground/50 transition-all duration-300"
        >
          <div className="w-full relative h-full rounded-lg overflow-hidden flex flex-col gap-3 bg-card p-2">
            <ZoomImage
              src={item.img}
              alt={item.titre}
              width={500}
              height={500}
              className="rounded-lg"
            />

            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-xl font-bold">{item.titre}</p>
              <p className="text-xs rounded-full bg-muted px-3 py-1">
                {item.categorie}
              </p>
            </div>
            <p className="text-sm">{item.description}</p>
            <div className="w-full flex gap-2 items-stretch">
              <Link href={item.pdf} target="_blank" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  Documentation
                </Button>
              </Link>
              <Link href={item.link} target="_blank" className="flex-1">
                <Button size="sm" className="w-full">
                  Voir sur Github
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
