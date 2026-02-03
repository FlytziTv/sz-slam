import { cn } from "@/lib/utils";
import { SZInfos, SZInfosMore } from "../sz/SZInfos";

export default function BtsCard({
  name,
  designation,
  time,
  description,
  option,
  className,
}: {
  name: string;
  designation: string;
  time: string;
  description: string;
  option: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-col sm:flex-row",
        className,
      )}
    >
      <div className="sm:h-full relative aspect-16/6 sm:aspect-9/16 bg-white rounded-sm shrink-0 flex items-center justify-center ">
        {/* <Image src={image} alt={name} width={150} height={150} /> */}
        <h4 className="text-background text-6xl font-bold inline-block sm:-rotate-90">
          {name}
        </h4>
      </div>
      <div className="flex flex-col gap-4 items-start ">
        <SZInfos title="Nom" value={name} />
        <SZInfos title="Désignation" value={designation} />

        <SZInfos title="Durée" value={time} />
        <SZInfosMore title="Description" value={description} />

        <div>
          <h4 className="text-sm text-muted-foreground">Options</h4>
          {option.map((form, index) => (
            <p key={index} className="text-sm text-foreground font-medium">
              - {form}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
