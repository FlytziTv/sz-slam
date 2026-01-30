import StudCard from "@/components/card/StudCard";
import WorkCard from "@/components/card/WorkCard";
import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";
import { formation_data, search_data } from "@/data/works";

export default function Works() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="Mon école et mon alternance / stage" />

      <main className="flex flex-col gap-8 max-w-340 mx-auto items-center justify-center my-6 px-6">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
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

          <WorkCard
            title_alternance={search_data[0].title}
            rythme_alternance={search_data[0].rythme}
            disponibilite_alternance={search_data[0].disponibilite}
            durée_alternance={search_data[0].durée}
            objectif_alternance={search_data[0].objectif}
            title_stage={search_data[1].title}
            periode_stage={search_data[1].periode}
            durée_stage={search_data[1].durée}
            mission_stage={search_data[1].mission}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
