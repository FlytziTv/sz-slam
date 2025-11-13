"use client";

import Image from "next/image";
import { useState } from "react";
import { UserItems, HackerItems } from "@/data/user";
import { Laptop, MapPinned, ShieldCheck } from "lucide-react";
import AboutText from "@/components/folio/AboutText";
import { Button } from "@/components/ui/button";

export default function CardAbout() {
  const [hackerMode, setHackerMode] = useState(false);
  const data = hackerMode ? HackerItems : UserItems;

  return (
    <div className="flex flex-col p-2 w-xl border-border border-2 rounded-2xl hover:border-foreground/50 transition-all duration-300">
      <div className="relative w-full h-full rounded-lg overflow-hidden flex flex-col gap-3 bg-card p-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setHackerMode(!hackerMode)}
          className="absolute top-3 right-3 z-20 text-xs rounded-xs"
        >
          {hackerMode ? "Mode normal" : "Mode hacker"}
        </Button>

        <div className="object-cover w-full h-45 relative">
          <Image
            src={data.banner}
            alt="Banner"
            fill
            className={`object-cover rounded-sm transition duration-300 ${
              hackerMode ? "opacity-80 saturate-0" : ""
            }`}
          />

          <div className="absolute -bottom-[70px] px-4 z-10">
            <Image
              src={data.image}
              alt="Avatar"
              width={140}
              height={140}
              className={`rounded-full border-4 border-card transition duration-300 ${
                hackerMode ? "grayscale" : ""
              }`}
            />
          </div>
        </div>

        <div className="mt-[70px] mx-4 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{data.name}</h1>

          {!hackerMode ? (
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row gap-1 items-center">
                <MapPinned size={17} />
                <p className="text-sm font-medium">{UserItems.location}</p>
              </div>

              <div className="h-3.5 w-0.5 bg-ring rounded-full" />

              <div className="flex flex-row gap-1 items-center">
                <Laptop size={17} />
                <p className="text-sm font-medium">{UserItems.role}</p>
              </div>
            </div>
          ) : (
            <div className="flex h-5 gap-2 items-center text-primary">
              <ShieldCheck size={17} />
              <p className="text-sm font-medium uppercase tracking-wide">
                Surveillance active
              </p>
            </div>
          )}

          {!hackerMode ? (
            <AboutText />
          ) : (
            <p className="text-muted-foreground text-sm italic">
              {HackerItems.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
