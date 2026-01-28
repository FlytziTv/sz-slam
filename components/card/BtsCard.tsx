import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function BtsCard({
  name,
  designation,
  time,
  description,
  option,
}: {
  name: string;
  designation: string;
  time: string;
  description: string;
  option: string[];
}) {
  return (
    <div className="col-span-2 group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-row">
      <div className="h-full relative aspect-9/16 bg-white rounded-sm shrink-0 flex items-center justify-center ">
        {/* <Image src={image} alt={name} width={150} height={150} /> */}
        <h4 className="text-background text-6xl font-bold inline-block -rotate-90">
          {name}
        </h4>
      </div>
      <div className="flex flex-col gap-4 items-start ">
        <MinInfos title="Nom" value={name} />
        <MinInfos title="Désignation" value={designation} />

        <MinInfos title="Durée" value={time} />
        <MinInfos title="Description" value={description} />

        <div>
          <h4 className="text-sm text-muted-foreground">Débouchés</h4>
          {option.map((form, index) => (
            <p key={index} className="text-sm text-foreground font-medium">
              - {form}
            </p>
          ))}
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
