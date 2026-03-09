"use client";

import AboutMe from "@/components/card/AboutMe";
import AboutMore from "@/components/card/AboutMore";
import AboutStud from "@/components/card/AboutStud";
import Footer from "@/components/sz/footer";
import { about_study } from "@/data/about";

export default function About() {
  return (
    <>
      <main className="flex flex-col lg:flex-row gap-4 mx-auto justify-center my-6 px-6 ">
        <AboutMe className="" />
        <div className="flex flex-col gap-4">
          <AboutMore className="col-span-2" />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {/* Commence par l'id le plus récent */}
            {[...about_study].reverse().map((study) => (
              <AboutStud
                className="col-span-1"
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
        </div>
      </main>
      <Footer />
    </>
  );
}
