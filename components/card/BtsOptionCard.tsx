import { SquareArrowOutUpRight } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

export default function BtsOptionCard({
  name,
  designation,
  description,
  debouche,
  url,
}: {
  name: string;
  designation: string;
  description: string;
  debouche: string[];
  url: string;
}) {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-col">
      {/* <div className="h-71 relative aspect-9/16 bg-white rounded-sm shrink-0 flex items-center justify-center ">
        <Image src={image} alt={name} width={250} height={250} />
      </div> */}
      <div className="flex flex-col gap-4 items-start ">
        <MinInfos title="Nom" value={name} />

        <MinInfos title="Désignation" value={designation} />

        <MinInfos title="Description" value={description} />

        <div>
          <h4 className="text-sm text-muted-foreground">Débouchés</h4>
          {debouche.map((form, index) => (
            <p key={index} className="text-sm text-foreground font-medium">
              - {form}
            </p>
          ))}
        </div>

        <MinInfosLink title="En savoir plus" value={url} />
      </div>
    </div>
  );
}

export function MinInfos({ title, value }: { title: string; value: string }) {
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
