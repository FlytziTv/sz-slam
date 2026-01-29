import { personal_data } from "@/data/about";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="col-span-1 group relative bg-card w-full border border-border rounded-md flex flex-col">
      {/* <div className="h-full relative aspect-9/16 bg-white rounded-sm shrink-0 flex items-center justify-center ">
        <Image src={image} alt={name} width={150} height={150} /> 
        <h4 className="text-background text-6xl font-bold inline-block -rotate-90">
          {personal_data.name}
        </h4>
      </div> */}
      <div className="flex flex-col gap-4 items-start p-4 border-b border-border">
        <MinInfos title="Nom" value={personal_data.name} />
        <MinInfos title="Âge" value={personal_data.age} />
        <MinInfos title="Localisation" value={personal_data.location} />
        <MinInfos title="Nationalité" value={personal_data.nationalite} />
        <MinInfos title="Disponibilité" value={personal_data.disponibilite} />
      </div>
      <div className="flex flex-col gap-4 items-start p-4">
        {personal_data.link.map((link) => (
          <MinInfosLink
            key={link.title}
            title={link.title}
            value={link.value}
          />
        ))}

        <MinInfosLink
          title={personal_data.cv.title}
          value={personal_data.cv.value}
        />
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
    .replace(/^\/files\//, ""); // Supprime le chemin du dossier

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
