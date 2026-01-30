import ProjectCard from "@/components/card/ProjectCard";
import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";
import { projects_list } from "@/data/e5";

export default function E5() {
  const groupedByCategory = projects_list.reduce(
    (acc, project) => {
      if (!acc[project.categorie]) {
        acc[project.categorie] = [];
      }
      acc[project.categorie].push(project);
      return acc;
    },
    {} as Record<string, typeof projects_list>,
  );

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="Mes projets E5" />

      <main className="flex flex-col gap-8 max-w-340 mx-auto items-center justify-center my-6 px-6">
        {Object.entries(groupedByCategory).map(([category, projects]) => (
          <div key={category} className="flex flex-col w-full gap-4">
            <h2 className="text-xl font-semibold">
              <span>{projects.length}</span> {category}
            </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  name={project.title}
                  categorie={project.status}
                  url={project.url}
                  pdf={project.pdf}
                  description={project.desc}
                />
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
