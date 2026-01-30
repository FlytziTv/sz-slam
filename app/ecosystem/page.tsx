import ExCard from "@/components/card/ExCard";
import SkillsCard from "@/components/card/SkillsCard";
import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";
import { tools_data, additional_tools } from "@/data/ecosystem";

export default function Ecosysteme() {
  const groupedByCategory = tools_data.reduce(
    (acc, tool) => {
      if (!acc[tool.categorie]) {
        acc[tool.categorie] = [];
      }
      acc[tool.categorie].push(tool);
      return acc;
    },
    {} as Record<string, typeof tools_data>,
  );

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="Mon Écosystème" />

      <main className="flex flex-col gap-8 min-w-340 mx-auto items-center justify-center my-6">
        {Object.entries(groupedByCategory).map(([category, tools]) => (
          <div key={category} className="flex flex-col w-full gap-4">
            <h2 className="text-xl font-semibold">
              <span>{tools.length}</span> {category}
            </h2>

            <div className="w-full grid grid-cols-3 gap-4">
              {tools.map((tool) => (
                <SkillsCard
                  key={tool.id}
                  url={tool.link}
                  image={tool.image}
                  titre={tool.name}
                  status={tool.status}
                  color={tool.color}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-xl font-semibold">
            <span>{additional_tools.length}</span> Extensions
          </h2>

          <div className="w-full grid grid-cols-3 gap-4">
            {additional_tools.map((tools) => (
              <ExCard
                key={tools.id}
                url={tools.link}
                image={tools.image}
                titre={tools.name}
                color={tools.color}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
