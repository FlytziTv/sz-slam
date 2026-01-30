// import Image from "next/image";

import Link from "next/link";
import { SZInfos } from "../sz/SZInfos";

export default function WorkCard({
  title_alternance,
  rythme_alternance,
  disponibilite_alternance,
  durée_alternance,
  objectif_alternance,
  title_stage,
  periode_stage,
  durée_stage,
  mission_stage,
}: {
  title_alternance: string | undefined;
  rythme_alternance: string | undefined;
  disponibilite_alternance: string | undefined;
  durée_alternance: string | undefined;
  objectif_alternance: string | undefined;
  title_stage: string | undefined;
  periode_stage: string | undefined;
  durée_stage: string | undefined;
  mission_stage: string[] | undefined;
}) {
  return (
    <div className="h-full group relative bg-card w-full border border-border rounded-md flex flex-col">
      <div className="m-4 mb-0 h-71 relative aspect-9/16 bg-white rounded-sm shrink-0 flex flex-col items-center justify-center ">
        {/* <Image src={image} alt={name} width={250} height={250} /> */}
        <h4 className="text-background text-6xl font-bold ">Recherche</h4>
        <p className="text-background text-xl font-semibold">
          Alternance / Stage
        </p>
      </div>
      <div className="flex flex-col gap-4 p-4 border-b border-border">
        <h6 className="text-base text-foreground font-medium">
          {title_alternance}
        </h6>
        <div className="w-full grid grid-cols-2 gap-6">
          <SZInfos title="Rythme" value={rythme_alternance} />
          <SZInfos title="Disponibilité" value={disponibilite_alternance} />
        </div>
        <SZInfos title="Durée" value={durée_alternance} />
        <SZInfos title="Objectif" value={objectif_alternance} />
      </div>

      <div className="flex flex-col gap-4 p-4 border-b border-border">
        <h6 className="text-base text-foreground font-medium">{title_stage}</h6>
        <div className="w-full grid grid-cols-2 gap-6">
          <SZInfos title="Période" value={periode_stage} />
          <SZInfos title="Durée" value={durée_stage} />
        </div>

        <div>
          <h4 className="text-sm text-muted-foreground">Mission</h4>
          {mission_stage?.map((task, index) => (
            <p key={index} className="text-sm text-foreground font-medium">
              - {task}
            </p>
          ))}
        </div>
      </div>
      <div className="h-full flex flex-col gap-2 p-4 items-center justify-end">
        <p className="text-sm">
          Me contacter via{" "}
          <a
            className="text-sz-status underline hover:text-(--text-link)/80 transition-colors duration-150"
            href="https://www.linkedin.com/in/alexis-dejesus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <Link
          className="bg-white w-full text-background font-semibold flex justify-center items-center p-2 rounded-md hover:bg-foreground/80 transition-colors duration-150"
          href={"/contact"}
        >
          Me contacter
        </Link>
      </div>
    </div>
  );
}
