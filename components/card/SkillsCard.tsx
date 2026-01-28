import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SkillsCard({
  url,
  image,
  titre,
  status,
  color,
}: {
  url: string;
  image: string;
  titre: string;
  status: string;
  color: string;
}) {
  return (
    <div
      className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-row transition-colors duration-150 hover:border-(--certif-color)"
      style={{ "--certif-color": color } as React.CSSProperties}
    >
      <Image
        src={image}
        alt={titre}
        width={60}
        height={60}
        className="absolute shrink-0 right-2.5 top-2.5"
      />
      <div className="flex flex-col gap-4 items-start w-full">
        <MinInfos title="Nom" value={titre} />
        <MinInfos title="Appris en" value={status}></MinInfos>

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
        target="_blank"
        className="text-sm text-foreground font-medium line-clamp-2 hover:underline cursor-pointer"
      >
        {displayValue}
        <SquareArrowOutUpRight size={12} className="inline ml-1" />
      </Link>
    </div>
  );
}
