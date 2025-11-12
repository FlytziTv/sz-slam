import CardBts from "@/components/folio/card/CardBts";
import { BtsItems, btsSioItems } from "@/data/user";

export default function Bts() {
  return (
    <div className="h-full m-auto w-full px-8 gap-8 flex flex-col ">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-4xl">{btsSioItems.titre}</h1>
        <p className="font-normal text-base">{btsSioItems.description}</p>
      </div>

      <CardBts items={BtsItems} />
    </div>
  );
}
