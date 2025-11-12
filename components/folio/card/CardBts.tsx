"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardBts({
  items,
}: {
  items: {
    titre: string;
    option: string;
    img: string;
    description: string;
    debouchés: string | string[];
    link: string;
    my_option: boolean;
  }[];
}) {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.titre}
          className="flex flex-col p-2 border-border border-2 rounded-2xl hover:border-foreground/50 transition-all duration-300"
        >
          <div className="w-full relative h-full rounded-lg overflow-hidden flex flex-col bg-card p-2 gap-3">
            <div className="w-full h-30 relative rounded-sm overflow-hidden flex flex-row items-center justify-center">
              <Image
                src={item.img}
                alt={item.titre}
                fill
                className="object-cover dark:brightness-[0.2] dark:grayscale"
              />
              <h2 className="absolute text-foreground/90 font-semibold text-4xl">
                {item.option}
              </h2>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-semibold text-xl">
                {item.titre}
                <span className="text-sm font-light text-foreground/60">
                  {item.my_option ? " C'est ma spécialité" : ""}
                </span>
              </h2>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" aria-label="Open menu" size="icon-sm">
                    <MoreHorizontalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                  <DropdownMenuGroup>
                    <Link target="_blank" href={item.link}>
                      <DropdownMenuItem>{item.titre} Ynov</DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-sm">{item.description}</p>
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium">Débouchés</p>
              <ul className="list-disc list-inside">
                {(Array.isArray(item.debouchés)
                  ? item.debouchés
                  : item.debouchés.split(",")
                ).map((debouche) => (
                  <li key={debouche.trim()} className="text-sm">
                    {debouche.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
