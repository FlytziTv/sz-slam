import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudCard({
  image,
  name,
  type,
  loc,
  slogan,
  description,
  formation,
  tel,
  email,
  url,
}: {
  image: string;
  name: string;
  type: string;
  loc: string;
  slogan: string;
  description: string;
  formation: string[];
  tel: string;
  email: string;
  url: string;
}) {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-col">
      <div className="h-71 relative aspect-9/16 bg-white rounded-sm shrink-0 flex items-center justify-center ">
        <Image src={image} alt={name} width={250} height={250} />
      </div>
      <div className="flex flex-col gap-4 items-start ">
        <div className="w-full grid grid-cols-2 gap-6">
          <MinInfos title="Nom" value={name} />
          <MinInfos title="Type" value={type} />
        </div>

        <MinInfos title="Localisation" value={loc} />
        <MinInfos title="Slogan" value={slogan} />
        <MinInfos title="Description" value={description} />

        <div>
          <h4 className="text-sm text-muted-foreground">Formation</h4>
          {formation.map((form, index) => (
            <p key={index} className="text-sm text-foreground font-medium">
              - {form}
            </p>
          ))}
        </div>

        <div className="w-full grid grid-cols-2 gap-6">
          <MinInfos title="Téléphone" value={tel} />
          <MinInfos title="Email" value={email} />
        </div>

        <MinInfosLink title="Lien du site" value={url} />
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
