import { CardSetup } from "@/components/folio/card/CardSetup";
import CardToolbox from "@/components/folio/card/CardToolbox";
import { PcItems, SetupItems } from "@/data/user";
import { ChevronRight } from "lucide-react";

import { ToolItems } from "@/data/user";
import ZoomImage from "@/components/folio/Image";

export default function Ecosysteme() {
  return (
    <div className="h-full m-auto w-full px-8 gap-10 flex flex-col ">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Mon Setup</h1>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-row w-full gap-4 h-90">
            <CardSetup size="flex-1">
              <ZoomImage
                src="/img/background/setup.jpg"
                alt="Mon Setup"
                fill
                className="object-cover"
              />
            </CardSetup>

            <CardSetup size="sm" className="gap-2 p-4">
              <h1 className="font-medium text-lg w-full text-center">
                Mon Setup
              </h1>
              <ul className="flex flex-col gap-2">
                {SetupItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-md flex flex-row gap-2 items-center hover:text-foreground/80 transition-all duration-300"
                    >
                      {item.categorie} : {item.title}
                      <ChevronRight className="hidden group-hover:block transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </CardSetup>
          </div>
          <div className="flex flex-row w-1/2 gap-4 h-90">
            <CardSetup size="flex-1">
              <ZoomImage
                src="/img/background/pc.jpg"
                alt="Mon Pc"
                fill
                className="object-cover"
              />
            </CardSetup>

            <CardSetup size="sm" className="gap-2 p-4">
              <h1 className="font-medium text-lg w-full text-center">Mon Pc</h1>
              <ul className="flex flex-col h-full gap-2">
                {PcItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-md flex flex-row gap-2 items-center hover:text-foreground/80 transition-all duration-300"
                    >
                      {item.categorie} : {item.title}
                      <ChevronRight className="hidden group-hover:block transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </CardSetup>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Ma Toolbox</h1>
        <div className="flex flex-col gap-4">
          <CardToolbox items={ToolItems} />
          {/* <CardToolbox items={SoftItems} titre="Logiciels" /> */}
        </div>
      </div>
    </div>
  );
}
