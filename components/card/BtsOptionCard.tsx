// import Image from "next/image";
import { cn } from "@/lib/utils";
import { SZInfos, SZInfosLink } from "../sz/SZInfos";

export default function BtsOptionCard({
  name,
  designation,
  description,
  debouche,
  url,
  className,
}: {
  name: string;
  designation: string;
  description: string;
  debouche: string[];
  url: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-col",
        className,
      )}
    >
      {/* <div className="h-71 relative aspect-9/16 bg-white rounded-sm shrink-0 flex items-center justify-center ">
        <Image src={image} alt={name} width={250} height={250} />
      </div> */}
      <div className="flex flex-col gap-4 items-start ">
        <SZInfos title="Nom" value={name} />
        <SZInfos title="Désignation" value={designation} />
        <SZInfos title="Description" value={description} />
        <div>
          <h4 className="text-sm text-muted-foreground">Débouchés</h4>
          {debouche.map((form, index) => (
            <p key={index} className="text-sm text-foreground font-medium">
              - {form}
            </p>
          ))}
        </div>
        <SZInfosLink title="En savoir plus" value={url} />
      </div>
    </div>
  );
}
