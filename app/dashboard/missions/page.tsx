"use client";

import { FolderCode, Terminal } from "lucide-react";
import { projects_list } from "@/data/projects";
import CardProjects from "@/components/sz/projects/card-projects";
import CardNoProjects from "@/components/sz/projects/card-no-projects";
import HeaderPages from "@/components/sz/pages/header";
import CardStats from "@/components/sz/pages/card-stats";

export default function Projects() {
  return (
    <div className="p-4 flex flex-col gap-6 font-sans">
      <HeaderPages
        icons_sub={Terminal}
        sub="Portfolio / Travaux récents"
        title1="Mes"
        title2="Projets"
      >
        <CardStats
          icons_sub={FolderCode}
          title="Database_Status"
          value={projects_list.length}
          unit="Items"
        />
      </HeaderPages>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects_list.map((project) => (
          <CardProjects
            key={project.id}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
            github={project.github}
            status={project.status}
            size={project.size}
          />
        ))}

        <CardNoProjects />
      </div>
    </div>
  );
}
