import CardToolbox from "@/components/folio/card/CardToolbox";

import { ToolItems } from "@/data/user";

export default function Skills() {
  return (
    <div className="h-full m-auto w-full px-8 gap-10 flex flex-col ">
      <div className="h-full flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Ma Toolbox</h1>
        <div className="h-full flex flex-col justify-center gap-4">
          <CardToolbox items={ToolItems} />
          {/* <CardToolbox items={SoftItems} titre="Logiciels" /> */}
        </div>
      </div>
    </div>
  );
}
