import Image from "next/image";
import { SZInfos, SZInfosLink } from "../sz/SZInfos";
import { cn } from "@/lib/utils";

export default function AboutStud({
  url,
  image,
  titre,
  entreprise,
  type,
  date,
  color,
  className,
}: {
  url: string;
  image: string;
  titre: string;
  entreprise: string;
  type: string;
  date: string;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-row transition-colors duration-150 hover:border-(--certif-color)",
        className,
      )}
      style={{ "--certif-color": color } as React.CSSProperties}
    >
      <div className="flex p-4 rounded-md items-center justify-center bg-(--certif-color)/20">
        <Image
          src={image}
          alt={titre}
          width={50}
          height={50}
          className=" shrink-0"
        />
      </div>
      <div className="flex flex-col gap-4 items-start w-full">
        <div className="grid grid-cols-2 w-full gap-4">
          <SZInfos title="Nom" value={titre} />
          <SZInfos title="Entreprise" value={entreprise} />
        </div>
        <SZInfos title="Type" value={type} />
        <SZInfos title="Date" value={date} />

        <SZInfosLink title="En savoir plus" value={url} />
      </div>
    </div>
  );
}
