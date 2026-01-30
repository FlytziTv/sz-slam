import { personal_data } from "@/data/about";
import { SZInfos } from "../sz/SZInfos";

export default function AboutMore() {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md flex flex-col p-4 gap-4">
      <SZInfos title="Présentation" value={personal_data.presentation} />
    </div>
  );
}
