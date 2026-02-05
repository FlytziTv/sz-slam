import Image from "next/image";
import { SZInfos, SZInfosLink, SZInfosMore } from "../sz/SZInfos";

export default function ProjectCard({
  name,
  categorie,
  url,
  pdf,
  description,
  image,
}: {
  name: string;
  categorie: string;
  url: string;
  pdf: string;
  description: string;
  image: string;
}) {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-col ">
      <div className="relative w-full h-60 rounded-sm ">
        <Image
          src={image}
          alt={name}
          fill
          className="absolute rounded-sm object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 items-start w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SZInfos title="Nom" value={name} />
          <SZInfos title="Categorie" value={categorie} />
        </div>
        <SZInfosMore title="Description" value={description} />
        {url !== "/" && <SZInfosLink title="Site Web" value={url} />}
        {pdf !== "/" && <SZInfosLink title="Documentation" value={pdf} />}
      </div>
    </div>
  );
}
