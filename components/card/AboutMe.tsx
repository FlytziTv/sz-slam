import { personal_data } from "@/data/about";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md grid grid-cols-3">
      <div className="flex flex-col gap-4 items-start p-4 border-r border-border">
        <MinInfos title="Prénom" value={personal_data.prenom} />
        <MinInfos title="Nom" value={personal_data.name} />
        <MinInfos title="Âge" value={personal_data.age} />
        <MinInfos title="Nationalité" value={personal_data.nationalite} />
      </div>
      <div className="flex flex-col gap-4 p-4 border-r border-border">
        <MinInfos title="Localisation" value={personal_data.location} />
        <MinInfos title="Disponibilité" value={personal_data.disponibilite} />
        <MinInfos title="Permis" value={personal_data.permis} />
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
