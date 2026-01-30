import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export function SZInfos({
  title,
  value,
}: {
  title: string;
  value: string | undefined;
}) {
  return (
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      <p className="text-sm text-foreground font-medium line-clamp-3">
        {value}
      </p>
    </div>
  );
}

export function SZInfosMore({
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

export function SZInfosChildren({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      {children}
    </div>
  );
}

export function SZInfosLink({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  const displayValue = value
    .replace(/^https?:\/\//, "") // Supprime http:// ou https://
    .replace(/^\/files\/certif\//, "") // Supprime /files/certif/ au début
    .replace(/^\/files\//, "") // Supprime /files/ au début
    .replace(/^\/files\/certif\//, "") // Supprime /files/certif/ au début
    .replace(/^\/files\/projets\/mission\//, ""); // Supprime /files/projets/mission/ au début

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

export function MinInfosLinkExtension({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  // On nettoie le lien pour n'afficher qu'une version courte
  // Par exemple : marketplace.visualstudio.com/.../esbenp.prettier-vscode -> prettier-vscode
  const displayLink = value
    .replace(/^https?:\/\//, "") // Supprime http:// ou https://
    .split(".") // Divise la chaîne par les points
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
