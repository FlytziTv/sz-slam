import Image from "next/image";
import { SZInfos, SZInfosLink, SZInfosMore } from "../sz/SZInfos";

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
    <div className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-col xl:flex-row">
      <div className="h-71 relative aspect-9/16 bg-white rounded-sm shrink-0 flex items-center justify-center ">
        <Image src={image} alt={name} width={150} height={150} />
      </div>
      <div className="flex flex-col gap-4 items-start ">
        <SZInfos title="Nom" value={name} />
        <SZInfos title="Categorie" value={categorie} />
        <div className="w-full flex flex-row gap-6">
          <SZInfos title="Obtenu en" value={status} />
          <SZInfos title="Date" value={date.toString()} />
        </div>
        <SZInfosMore title="Description" value={description} />
        <div className="w-full flex flex-row gap-6">
          <SZInfosLink title="Source" value={url} />
          <SZInfosLink title="Certification" value={pdf} />
        </div>
      </div>
    </div>
  );
}
