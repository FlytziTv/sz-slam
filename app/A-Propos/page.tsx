import Image from "next/image";

import { UserItems } from "@/data/user";
import IconsSocial from "@/components/folio/IconsSocial";

export default function A_Propos() {
  return (
    <div className="h-full m-auto w-full px-8 gap-8 flex flex-col ">
      <div className="w-full flex flex-row items-center gap-4">
        <div className="flex flex-row relative">
          <Image
            src={UserItems.image}
            alt={UserItems.name}
            width={500}
            height={200}
            className="rounded-xl h-40 object-cover border border-border"
          />
          <p className="absolute px-2 py-1 h-fit bg-accent/70 rounded-lg border text-sm right-2 top-2">
            C&apos;est moi !
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-3xl font-bold ">{UserItems.name}</h1>
          <p className="text-base text-muted-foreground font-medium">
            {UserItems.role}
          </p>
          <p className="font-light text-sm">{UserItems.location}</p>
          <IconsSocial />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">Présentation</h2>
        <p className="font-light text-base text-justify">
          {UserItems.description}
        </p>
      </div>
    </div>
  );
}
