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

      <main className="flex-1 flex flex-col w-full items-center justify-center px-6 relative">
        {/* Changement : On passe de absolute à relative/static sur mobile pour que le contenu ne disparaisse pas, puis absolute sur LG */}
        <div className="relative mt-auto mb-6 lg:mb-0 lg:absolute lg:bottom-6 lg:right-0 lg:left-0 lg:px-6 w-full flex flex-col items-start gap-4 lg:gap-0 lg:flex-row lg:justify-between lg:items-end">
          {/* Bloc Titres */}
          <div className="flex flex-col w-full lg:w-150 gap-4">
            <p className="text-muted-foreground text-[15px] lg:text-[17px] font-light">
              Paris, France
            </p>
            <div className="flex flex-col items-start gap-1 lg:gap-2">
              <h1 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl italic text-foreground/70 leading-tight">
                Developpeur Full Stack
              </h1>
              <h1 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl italic text-foreground/70 leading-tight">
                Étudiant en BTS SIO SLAM
              </h1>
            </div>
          </div>

          {/* Bloc Description & Boutons */}
          <div className="flex flex-col gap-6 w-full lg:w-125">
            <p className="font-light text-[15px] lg:text-[17px] text-foreground/70 leading-relaxed max-w-prose">
              Développeur Full Stack et étudiant en BTS SIO (SLAM) à Paris, je
              conçois avec rigueur des solutions web performantes et intuitives,
              alliant code robuste et expérience utilisateur fluide.
            </p>

            {/* Boutons : Wrap automatique si l'écran est trop petit */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={page[1].url}
                className="flex items-center justify-center py-2 px-6 border border-border bg-card hover:bg-border/60 rounded-[20px] text-sm lg:text-base transition-colors"
              >
                À propos
              </Link>
              <Link
                href={page[6].url}
                className="flex items-center justify-center py-2 px-6 border border-border bg-card hover:bg-border/60 rounded-[20px] text-sm lg:text-base transition-colors"
              >
                Projets
              </Link>
              <Link
                href={page[9].url}
                className="flex items-center justify-center py-2 px-6 border border-border bg-card hover:bg-border/60 rounded-[20px] text-sm lg:text-base transition-colors"
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
