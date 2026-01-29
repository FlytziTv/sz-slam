import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutStud({
  url,
  image,
  titre,
  entreprise,
  type,
  date,
  color,
}: {
  url: string;
  image: string;
  titre: string;
  entreprise: string;
  type: string;
  date: string;
  color: string;
}) {
  return (
    <div
      className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-row transition-colors duration-150 hover:border-(--certif-color)"
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
          <MinInfos title="Nom" value={titre} />
          <MinInfos title="Entreprise" value={entreprise} />
        </div>
        <MinInfos title="Type" value={type} />
        <MinInfos title="Date" value={date} />

        <MinInfosLink title="En savoir plus" value={url} />
      </div>
    </div>
  );
}

export function MinInfos({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      <p className="text-sm text-foreground font-medium line-clamp-2">
        {value}
      </p>
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
        className="text-sm text-foreground font-medium line-clamp-2 hover:underline cursor-pointer"
      >
        {displayValue}
        <SquareArrowOutUpRight size={12} className="inline ml-1" />
      </Link>
    </div>
  );
}
