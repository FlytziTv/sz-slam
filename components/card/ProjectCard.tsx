import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

// export default function ProjectCard({
//   title,
//   categorie,
//   links,
//   description,
// }: {
//   title: string;
//   categorie: string;
//   links: { name: string; url: string }[];
//   description: string;
// }) {
//   return (
//     <div className="bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-col">
//       <div className="flex flex-row gap-4 items-center">
//         <div className="h-10 w-10 bg-destructive/10 rounded-full shrink-0" />
//         <div>
//           <h2 className="text-sm font-medium text-foreground">{title}</h2>
//           <p className="text-sm text-muted-foreground">{categorie}</p>
//         </div>
//       </div>

//       <div className="flex flex-row gap-1">
//         {links.map((link, index) => (
//           <Link
//             key={index}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-row gap-1.5 px-2 py-0.5 items-center justify-center text-xs rounded-full bg-secondary hover:bg-secondary/40 transition-colors font-medium border border-border text-foreground"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>

//       <p className="text-sm text-foreground line-clamp-2">{description}</p>
//     </div>
//   );
// }

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
          <MinInfos title="Nom" value={name} />
          <MinInfos title="Categorie" value={categorie} />
        </div>
        <MinInfos title="Description" value={description} />
        <div className="w-full flex flex-row gap-6">
          {url !== "/" && <MinInfosLink title="Site Web" value={url} />}{" "}
          {pdf !== "/" && <MinInfosLink title="Documentation" value={pdf} />}
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
    .replace(/^\/files\/projets\/mission\//, ""); // Supprime le chemin du dossier

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
