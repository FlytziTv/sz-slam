import AboutMe from "@/components/card/AboutMe";
import AboutMore from "@/components/card/AboutMore";
import AboutStud from "@/components/card/AboutStud";
import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";
import { about_study } from "@/data/about";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="À propos" />

      <main className="flex flex-col gap-4 max-w-340 mx-auto justify-center my-6 px-6">
        <AboutMe />
        <AboutMore />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {/* Commence par l'id le plus récent */}
          {[...about_study].reverse().map((study) => (
            <AboutStud
              key={study.id}
              color={study.color}
              url={study.link}
              image={study.image}
              titre={study.title}
              entreprise={study.entreprise}
              type={study.type}
              date={study.date}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
