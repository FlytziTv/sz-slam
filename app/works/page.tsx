import StudCard from "@/components/card/StudCard";
import WorkCard from "@/components/card/WorkCard";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";
import { formation_data, work_data } from "@/data/about";

export default function Works() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="Mon école et mon alternance / stage" />

      <main className="flex flex-col gap-8 max-w-340 mx-auto items-center justify-center">
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="flex flex-col w-full gap-4">
            <h2 className="text-xl font-semibold">Mon école</h2>
            <StudCard
              image={formation_data.image}
              name={formation_data.name}
              type={formation_data.type}
              loc={formation_data.loc}
              slogan={formation_data.slogan}
              description={formation_data.desc}
              formation={formation_data.formation}
              tel={formation_data.tel}
              email={formation_data.email}
              url={formation_data.url}
            />
          </div>

          <div className="flex flex-col w-full gap-4">
            <h2 className="text-xl font-semibold">Mon alternance / stage</h2>
            <WorkCard />
          </div>
        </div>
      </main>
    </div>
  );
}
