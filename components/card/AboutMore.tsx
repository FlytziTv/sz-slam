import { personal_data } from "@/data/about";
import { SZInfosMore } from "../sz/SZInfos";
import { cn } from "@/lib/utils";

export default function AboutMore({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative bg-card w-full border border-border rounded-md flex flex-col p-4 gap-4",
        className,
      )}
    >
      <SZInfosMore title="Présentation" value={personal_data.presentation} />
    </div>
  );
}
