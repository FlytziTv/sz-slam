import { personal_data } from "@/data/about";
import { SZInfos, SZInfosLink } from "../sz/SZInfos";
import { cn } from "@/lib/utils";

export default function AboutMe({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "min-w-80 border border-border rounded-md bg-card flex flex-col divide-x-0 divide-y divide-border",
        className,
      )}
    >
      {/* Section 1 */}
      <div className="flex flex-col gap-4 p-4">
        <SZInfos title="Prénom" value={personal_data.prenom} />
        <SZInfos title="Nom" value={personal_data.name} />
        <SZInfos title="Âge" value={personal_data.age} />
        <SZInfos title="Nationalité" value={personal_data.nationalite} />
      </div>

      {/* Section 2 */}
      <div className="flex flex-col gap-4 p-4">
        <SZInfos title="Localisation" value={personal_data.location} />
        <SZInfos title="Disponibilité" value={personal_data.disponibilite} />
        <SZInfos title="Permis" value={personal_data.permis} />
      </div>

      {/* Section 3 */}
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
