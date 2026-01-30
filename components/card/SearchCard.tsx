import { search_data } from "@/data/works";
import { SZInfos } from "../sz/SZInfos";

export default function SearchCard() {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md p-4 gap-4 flex flex-col">
      <div className="flex flex-col gap-4">
        <h6 className="text-base text-foreground font-medium">
          {search_data[0].title}
        </h6>
        <div className="w-full grid grid-cols-2 gap-6">
          <SZInfos title="Rytme" value={search_data[0].rythme} />
          <SZInfos title="Période" value={search_data[0].disponibilite} />
        </div>
        <SZInfos title="Durée" value={search_data[0].durée} />
        <SZInfos title="Objectif" value={search_data[0].objectif} />
      </div>
    </div>
  );
}
