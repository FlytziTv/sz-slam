import Image from "next/image";

import { UserItems } from "@/data/user";
import { Laptop, MapPinned } from "lucide-react";
import AboutText from "@/components/folio/AboutText";

export default function CardAbout() {
  return (
    <div className="flex flex-col p-2 max-w-xl border-border border-2 rounded-2xl hover:border-foreground/50 transition-all duration-300">
      <div className="w-full relative h-full rounded-lg overflow-hidden flex flex-col gap-3 bg-card p-2">
        <div className="object-cover w-full h-45 relative">
          <Image
            src={UserItems.banner}
            alt="User Banner"
            fill
            className="object-cover rounded-sm"
          />
          <div className="absolute -bottom-[70px] px-4 ">
            <Image
              src={UserItems.image}
              alt="User Icons"
              width={140}
              height={140}
              className="rounded-full border-4 border-card"
            />
          </div>
        </div>
        <div className="mt-[70px] mx-4 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{UserItems.name}</h1>
          <div className="flex flex-row gap-3 items-center">
            <div className="flex flex-row gap-1 items-center">
              <MapPinned size={17} />
              <p className="text-sm font-medium">{UserItems.location}</p>
            </div>

            <div className="h-3.5 w-0.5 bg-ring rounded-full"></div>

            <div className="flex flex-row gap-1 items-center">
              <Laptop size={17} />
              <p className="text-sm font-medium">{UserItems.role}</p>
            </div>
          </div>
          <AboutText />
        </div>
      </div>
    </div>
  );
}
