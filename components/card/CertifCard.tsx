import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CertifCard({
  status,
  categorie,
  name,
  image,
  pdf,
  description,
  url,
  date,
}: {
  status: string;
  categorie: string;
  name: string;
  image: string;
  pdf: string;
  description: string;
  url: string;
  date: number;
}) {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-row">
      <div className="h-71 relative aspect-9/16 bg-white rounded-sm shrink-0 flex items-center justify-center ">
        <Image src={image} alt={name} width={150} height={150} />
      </div>
      <div className="flex flex-col gap-4 items-start ">
        <MinInfos title="Nom" value={name} />
        <MinInfos title="Categorie" value={categorie} />
        <div className="w-full flex flex-row gap-6">
          <MinInfos title="Obtenu en" value={status} />
          <MinInfos title="Date" value={date.toString()} />
        </div>
        <MinInfos title="Description" value={description} />
        <div className="w-full flex flex-row gap-6">
          <MinInfosLink title="Source" value={url} />
          <MinInfosLink title="Certification" value={pdf} />
        </div>
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
