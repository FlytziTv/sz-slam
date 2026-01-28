import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ExCard({
  url,
  image,
  titre,
  color,
}: {
  url: string;
  image: string;
  titre: string;
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
  // On nettoie le lien pour n'afficher qu'une version courte
  // Par exemple : marketplace.visualstudio.com/.../esbenp.prettier-vscode -> prettier-vscode
  const displayLink = value
    .replace(/^https?:\/\//, "")
    .split(".")
    .pop(); // Récupère le dernier mot après le point (souvent le nom de l'extension)

  return (
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      <Link
        href={value}
        target="_blank"
        className="text-sm text-foreground font-medium line-clamp-2 hover:underline cursor-pointer"
      >
        {displayLink}
        <SquareArrowOutUpRight size={12} className="inline ml-1" />
      </Link>
    </div>
  );
}
