import Image from "next/image";
import { SZInfos, SZInfosLink } from "../sz/SZInfos";

export default function SkillsCard({
  url,
  image,
  titre,
  status,
  color,
}: {
  url: string;
  image: string;
  titre: string;
  status: string;
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
        <SZInfos title="Nom" value={titre} />
        <SZInfos title="Appris en" value={status} />

        <SZInfosLink title="En savoir plus" value={url} />
      </div>
    </div>
  );
}
