"use client";

import Header from "@/components/sz/header";
import Link from "next/link";

const page = [
  { id: 1, title: "Accueil", url: "/" },
  { id: 2, title: "A Propos", url: "/about" },
  { id: 3, title: "Mon Bts", url: "/bts" },
  { id: 4, title: "École & Entreprise", url: "/works" },
  { id: 5, title: "Certifications", url: "/certifs" },
  { id: 6, title: "Écosystème", url: "/ecosystem" },
  { id: 7, title: "Mission E5", url: "/e5" },
  { id: 8, title: "Projets E6", url: "/e6" },
  { id: 9, title: "Veilles", url: "/veilles" },
  { id: 10, title: "Contact", url: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/img/background/logo.svg')] bg-cover bg-center font-sans">
      <Header />

      <main className="flex-1 flex flex-col gap-8 w-full items-center justify-center my-6 px-6">
        <div className="absolute bottom-6 right-0 left-0 px-6 w-full flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:justify-between lg:items-end">
          <div className="flex flex-col w-150 gap-4">
            <p className="text-muted-foreground text-[17px] font-light">
              Paris, France
            </p>
            <div className="flex flex-col items-start gap-2">
              <h1 className="uppercase font-bold text-4xl italic text-foreground/70">
                Developpeur Full Stack
              </h1>
              <h1 className="uppercase font-bold text-4xl italic text-foreground/70">
                Étudiant en BTS SIO SLAM
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-150">
            {/* modifie lespace entre les ligne */}
            <p className="font-light text-[17px] text-foreground/70 leading-relaxed">
              Développeur Full Stack et étudiant en BTS SIO (SLAM) à Paris, je
              conçois avec rigueur des solutions web performantes et intuitives,
              alliant code robuste et expérience utilisateur fluide.
            </p>
            <div className="flex flex-row gap-2">
              <Link
                href={page[1].url}
                className="flex items-center justify-center py-1.5 px-5 border border-border bg-card hover:bg-border/60 rounded-[20px]"
              >
                À propos
              </Link>
              <Link
                href={page[6].url}
                className="flex items-center justify-center py-1.5 px-5 border border-border bg-card hover:bg-border/60 rounded-[20px]"
              >
                Projets
              </Link>
              <Link
                href={page[9].url}
                className="flex items-center justify-center py-1.5 px-5 border border-border bg-card hover:bg-border/60 rounded-[20px]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
