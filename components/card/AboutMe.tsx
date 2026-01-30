import { personal_data } from "@/data/about";
import { SZInfos, SZInfosLink } from "../sz/SZInfos";

export default function AboutMe() {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md grid grid-cols-1 md:grid-cols-3">
      <div className="flex flex-col gap-4 items-start p-4 border-b md:border-r border-border">
        <SZInfos title="Prénom" value={personal_data.prenom} />
        <SZInfos title="Nom" value={personal_data.name} />
        <SZInfos title="Âge" value={personal_data.age} />
        <SZInfos title="Nationalité" value={personal_data.nationalite} />
      </div>
      <div className="flex flex-col gap-4 p-4 border-b md:border-r border-border">
        <SZInfos title="Localisation" value={personal_data.location} />
        <SZInfos title="Disponibilité" value={personal_data.disponibilite} />
        <SZInfos title="Permis" value={personal_data.permis} />
      </div>
      <div className="flex flex-col gap-4 items-start p-4">
        {personal_data.link.map((link) => (
          <SZInfosLink key={link.title} title={link.title} value={link.value} />
        ))}

        <SZInfosLink
          title={personal_data.cv.title}
          value={personal_data.cv.value}
        />
      </div>
    </div>
  );
}
