import { search_data } from "@/data/about";

export default function SearchCard() {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-col">
      <div className="flex flex-col gap-4">
        <h6 className="text-base text-foreground font-medium">
          {search_data[0].title}
        </h6>
        <div className="w-full grid grid-cols-2 gap-6">
          <MinInfos title="Rytme" value={search_data[0].rythme} />
          <MinInfos title="Période" value={search_data[0].disponibilite} />
        </div>
        <MinInfos title="Durée" value={search_data[0].durée} />
        <MinInfos title="Objectif" value={search_data[0].objectif} />
      </div>
    </div>
  );
}

export function MinInfos({
  title,
  value,
}: {
  title: string;
  value: string | undefined;
}) {
  return (
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      <p className="text-sm text-foreground font-medium">{value}</p>
    </div>
  );
}
