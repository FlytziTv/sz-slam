import CardProjet from "@/components/folio/card/CardProjet";
import { MissionsItems } from "@/data/projets";

export default function Missions() {
  return (
    <div className="h-full m-auto w-full px-8 gap-4 flex flex-col ">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-4xl">Mes petits Projets</h1>
        <CardProjet items={MissionsItems} />
      </div>
    </div>
  );
}
