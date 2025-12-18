"use client";

import { tools_data } from "@/data/about";
import CardSkills from "@/components/sz/skills/card-skills";
import { Terminal, Monitor } from "lucide-react";
import HeaderPages from "@/components/sz/pages/header";
import CardStats from "@/components/sz/pages/card-stats";

export default function Ecosysteme() {
  const groupedByCategory = tools_data.reduce((acc, tool) => {
    if (!acc[tool.categorie]) {
      acc[tool.categorie] = [];
    }
    acc[tool.categorie].push(tool);
    return acc;
  }, {} as Record<string, typeof tools_data>);

  return (
    <div className="p-4 flex flex-col gap-8 font-sans">
      <HeaderPages
        icons_sub={Monitor}
        title1="Mon"
        title2="Ecosystème"
        sub="Outils & Technologies"
      >
        <CardStats
          icons_sub={Terminal}
          title="System_Stack"
          value={tools_data.length}
          unit="Tools"
        />
      </HeaderPages>

      <div className="flex flex-col gap-12 mt-4">
        {Object.entries(groupedByCategory).map(([category, tools]) => (
          <div key={category} className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap">
                {category}
                {" // logs.0"}
                {tools.length}
              </h2>
              <div className="h-px w-full bg-border/50" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {tools.map((tool) => (
                <CardSkills
                  key={tool.id}
                  categorie={tool.categorie}
                  name={tool.name}
                  img={tool.img}
                  link={tool.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
