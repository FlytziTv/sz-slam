import Image from "next/image";
import { SZInfos, SZInfosLink } from "../sz/SZInfos";

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
          <SZInfos title="Nom" value={name} />
          <SZInfos title="Type" value={type} />
        </div>

        <SZInfos title="Localisation" value={loc} />
        <SZInfos title="Slogan" value={slogan} />
        <SZInfos title="Description" value={description} />

        <div>
          <h4 className="text-sm text-muted-foreground">Formation</h4>
          {formation.map((form, index) => (
            <p key={index} className="text-sm text-foreground font-medium">
              - {form}
            </p>
          ))}
        </div>

        <div className="w-full grid grid-cols-2 gap-6">
          <SZInfos title="Téléphone" value={tel} />
          <SZInfos title="Email" value={email} />
        </div>

        <SZInfosLink title="Lien du site" value={url} />
      </div>
    </div>
  );
}
