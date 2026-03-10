import Image from "next/image";
import { ChevronRight } from "lucide-react";

const data_stud = {
  titre: "BTS SIO SLAM",
  name: "Ynov Campus",
  loc: "Nanterre",
  image: "/img/icons/ynov.svg",
  dates: [
    {
      name: "Début",
      value: "Sept 2025",
      color: "border-green-500 bg-green-500/10",
    },
    { name: "Fin", value: "Juin 2027" },
    { name: "Durée", value: "2 ans" },
  ],
  slogan: "Le digital s'apprend par la pratique.",
  desc: "Paris Ynov Campus est une institution dédiée à la formation aux métiers de demain. L'école se distingue par une pédagogie active centrée sur la réalisation de projets réels, favorisant l'interdisciplinarité (YDAYS) et l'insertion professionnelle immédiate grâce à l'alternance.",
  formation: [
    "Informatique & Développement (Full Stack, Mobile, Cloud)",
    "Cybersécurité & Réseaux",
    "Intelligence Artificielle & Data Science",
    "Création & Digital Design (UX/UI, Direction Artistique)",
    "3D, Animation & Jeux Vidéo",
    "Marketing & Communication Digitale",
    "Audiovisuel & Son",
    "Architecture d’Intérieur & Bâtiment Numérique",
  ],
};

export const search_data = [
  {
    id: 1,
    title: "Recherche d'alternance",
    rythme: "3 jours en entreprise / 2 jours à l'école",
    disponibilite: "Septembre 2026",
    dates: [
      {
        name: "Début",
        value: "Sept 2026",
      },
      {
        name: "Fin",
        value: "Juin 2027",
      },
      { name: "Durée", value: "1 ans", color: "border-sztatus bg-sztatus/10" },
    ],
    objectif:
      "Intégrer une équipe technique pour participer au cycle de vie des applications (analyse, développement, tests).",
  },
  {
    id: 2,
    title: "Recherche de stage",
    periode: "Juillet 2026",
    durée: "5 semaines",
    dates: [
      {
        name: "Début",
        value: "6 Juillet 2026",
      },
      {
        name: "Fin",
        value: "7 Août 2026",
      },
      {
        name: "Durée",
        value: "5 semaines",
      },
    ],
    mission: [
      "Développement Front-end (HTML/CSS, JavaScript).",
      "Maintenance évolutive d'applications existantes.",
      "Gestion de bases de données (SQL).",
      "Participation à la rédaction de documentations techniques.",
    ],
  },
];

export default function Works() {
  return (
    <>
      <main className="flex-1 w-full max-w-340 mx-auto items-start justify-center my-6 px-6">
        <div className=" grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
          <div className="flex-1 flex flex-col gap-6 bg-[#0A0A0A] border border-[#252525] rounded-xl p-4">
            <div className="flex flex-row gap-4 items-center justify-start">
              <div className="shrink-0 aspect-square w-17.5 h-17.5 rounded-sm overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={data_stud.image}
                  alt={data_stud.name}
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex flex-col ">
                <h2 className="text-xl font-bold">{data_stud.titre}</h2>
                <p className="text-sm text-white/70">{data_stud.name}</p>
                <p className="text-sm text-white/40">{data_stud.loc}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {data_stud.dates.map((date, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-1 border border-sztatus/50 bg-sztatus/5 rounded-lg p-3 items-center justify-center w-full`}
                >
                  <p className="text-sm text-white/70">{date.name}</p>
                  <p className="font-bold">{date.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-base">Slogant</h4>
              <p className="text-white/80 text-sm">
                &quot; {data_stud.slogan} &quot;
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-base">Description</h4>
              <p className="text-white/80 text-sm">{data_stud.desc}</p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-4 flex flex-col gap-2">
              <h5 className="text-base font-medium text-[#ffff]">
                Formations proposées
              </h5>

              <ul className="grid grid-cols-1 gap-2">
                {data_stud.formation.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm inline-flex items-center gap-1"
                  >
                    <span className="text-sztatus">
                      <ChevronRight size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex-1 flex flex-col gap-6 bg-[#0A0A0A] border border-[#252525] rounded-xl p-4">
              <div className="flex flex-row gap-4 items-center justify-start">
                <div className="shrink-0 aspect-square w-17.5 h-17.5 rounded-sm overflow-hidden bg-white flex items-center justify-center">
                  <p className="text-4xl text-black font-bold">?</p>
                </div>
                <div className="flex flex-col ">
                  <h2 className="text-xl font-bold">{search_data[0].title}</h2>
                  <p className="text-sm text-white/70">
                    {search_data[0].rythme}
                  </p>
                  <p className="text-sm text-white/40">
                    {search_data[0].disponibilite}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {search_data[0].dates.map((date, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-1 border border-sztatus/50 bg-sztatus/5 rounded-lg p-3 items-center justify-center w-full`}
                  >
                    <p className="text-sm text-white/70">{date.name}</p>
                    <p className="font-bold">{date.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-base">Objectif</h4>
                <p className="text-white/80 text-sm">
                  {search_data[0].objectif}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4 w-full">
              <div className="h-px w-full bg-[#252525]" />
              <p className="text-white">ou</p>
              <div className="h-px w-full bg-[#252525]" />
            </div>

            <div className="flex-1 flex flex-col gap-6 bg-[#0A0A0A] border border-[#252525] rounded-xl p-4">
              <div className="flex flex-row gap-4 items-center justify-start">
                <div className="shrink-0 aspect-square w-17.5 h-17.5 rounded-sm overflow-hidden bg-white flex items-center justify-center">
                  <p className="text-4xl text-black font-bold">?</p>
                </div>
                <div className="flex flex-col ">
                  <h2 className="text-xl font-bold">{search_data[1].title}</h2>
                  <p className="text-sm text-white/70">
                    {search_data[1].durée}
                  </p>
                  <p className="text-sm text-white/40">
                    {search_data[1].periode}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {search_data[1].dates.map((date, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-1 border border-sztatus/50 bg-sztatus/5 rounded-lg p-3 items-center justify-center w-full`}
                  >
                    <p className="text-sm text-white/70">{date.name}</p>
                    <p className="font-bold">{date.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1a1a1a] rounded-lg p-4 flex flex-col gap-2">
                <h5 className="text-base font-medium text-[#ffff]">
                  Missions proposées
                </h5>

                <ul className="grid grid-cols-1 gap-2">
                  {search_data[1].mission.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm inline-flex items-center gap-1"
                    >
                      <span className="text-sztatus">
                        <ChevronRight size={14} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
