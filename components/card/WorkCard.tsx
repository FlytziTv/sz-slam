import { search_data } from "@/data/about";

import { SquareArrowOutUpRight } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

export default function WorkCard() {
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
          {search_data[0].title}
        </h6>
        <div className="w-full grid grid-cols-2 gap-6">
          <MinInfos title="Rytme" value={search_data[0].rythme} />
          <MinInfos
            title="Disponibilite"
            value={search_data[0].disponibilite}
          />
        </div>
        <MinInfos title="Durée" value={search_data[0].durée} />
        <MinInfos title="Objectif" value={search_data[0].objectif} />
      </div>

      <div className="flex flex-col gap-4 p-4 border-b border-border">
        <h6 className="text-base text-foreground font-medium">
          {search_data[1].title}
        </h6>
        <div className="w-full grid grid-cols-2 gap-6">
          <MinInfos title="Période" value={search_data[1].periode} />
          <MinInfos title="Durée" value={search_data[1].durée} />
        </div>

        <div>
          <h4 className="text-sm text-muted-foreground">Mission</h4>
          {search_data[1].mission?.map((task, index) => (
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
            className="text-(--text-link) underline hover:text-(--text-link)/80 transition-colors duration-150"
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

export function MinInfos({
  title,
  value,
}: {
  title: string;
  value: string | undefined;
}) {
  return (
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      <p className="text-sm text-foreground font-medium">{value}</p>
    </div>
  );
}

export function MinInfosLink({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  const displayValue = value
    .replace(/^https?:\/\//, "") // Supprime http:// ou https://
    .replace(/^\/files\/certif\//, ""); // Supprime le chemin du dossier

  return (
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      <Link
        href={value}
        target="_blank"
        className="text-sm text-foreground font-medium line-clamp-2 hover:underline cursor-pointer"
      >
        {displayValue}
        <SquareArrowOutUpRight size={12} className="inline ml-1" />
      </Link>
    </div>
  );
}
