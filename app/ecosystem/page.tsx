import Footer from "@/components/sz/footer";
import SZSkillsCard from "@/components/SZ2026/SZSkillsCard";
import { tools_data } from "@/data/ecosystem";

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
    <>
      <main className="flex-1 w-full flex flex-col gap-8 mx-auto items-center justify-center my-6 px-6">
        {Object.entries(groupedByCategory).map(([category, tools]) => (
          <div key={category} className="flex flex-col w-full gap-4">
            <h2 className="text-xl font-semibold">
              <span>{tools.length}</span> {category}
            </h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {tools.map((tool) => (
                <SZSkillsCard
                  key={tool.id}
                  url={tool.link}
                  image={tool.image}
                  titre={tool.name}
                  color={tool.color}
                />
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
