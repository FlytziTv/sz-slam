import { SZInfos, SZInfosLink } from "../sz/SZInfos";

export default function ProjectCard({
  name,
  categorie,
  url,
  pdf,
  description,
}: {
  name: string;
  categorie: string;
  url: string;
  pdf: string;
  description: string;
}) {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-row">
      <div className="flex flex-col gap-4 items-start ">
        <div className="w-full grid grid-cols-2 gap-4">
          <SZInfos title="Nom" value={name} />
          <SZInfos title="Categorie" value={categorie} />
        </div>
        <SZInfos title="Description" value={description} />
        <div className="w-full flex flex-row gap-6">
          {url !== "/" && <SZInfosLink title="Site Web" value={url} />}
          {pdf !== "/" && <SZInfosLink title="Documentation" value={pdf} />}
        </div>
      </div>
    </div>
  );
}
