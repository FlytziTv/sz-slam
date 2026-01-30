import { SZInfos } from "../sz/SZInfos";

export default function BtsCard({
  name,
  designation,
  time,
  description,
  option,
}: {
  name: string;
  designation: string;
  time: string;
  description: string;
  option: string[];
}) {
  return (
    <div className="col-span-2 group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-row">
      <div className="h-full relative aspect-9/16 bg-white rounded-sm shrink-0 flex items-center justify-center ">
        {/* <Image src={image} alt={name} width={150} height={150} /> */}
        <h4 className="text-background text-6xl font-bold inline-block -rotate-90">
          {name}
        </h4>
      </div>
      <div className="flex flex-col gap-4 items-start ">
        <SZInfos title="Nom" value={name} />
        <SZInfos title="Désignation" value={designation} />

        <SZInfos title="Durée" value={time} />
        <SZInfos title="Description" value={description} />

        <div>
          <h4 className="text-sm text-muted-foreground">Débouchés</h4>
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
