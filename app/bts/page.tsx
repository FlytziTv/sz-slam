// import BtsCard from "@/components/card/BtsCard";
// import BtsOptionCard from "@/components/card/BtsOptionCard";
// import { bts_data, bts_option_data } from "@/data/stud";
import Footer from "@/components/sz/footer";
import { ChevronRight, Hourglass, BookOpen, Award, GlobeLock, ChevronsLeftRight } from "lucide-react";

const presentation = [
  {
    titre: "Organisation",
    description: "2 ans de formation",
    icon: Hourglass,
    stats: [
      "1850 heures de formation",
      "10 semaines de stage minimum",
      "Alternance possible",
    ],
  },
  {
    titre: "Programme",
    description: "Formation complète",
    icon: BookOpen,
    stats: [
      "Culture générale et expression",
      "Culture Economique Juridique et Managérial",
      "Anglais technique",
      "Mathématiques pour l'informatique",
    ],
  },
  {
    titre: "Validation",
    description: "Diplôme d'État",
    icon: Award,
    stats: [
      "Niveau 5 (Bac+2)",
      "120 crédits ECTS (60/an)",
      "Certification professionnelle",
    ],
  },
];

const competences_communes = {
  "Support et assistance": [
    "Gestion du patrimoine informatique",
    "Réponse aux incidents",
    "Développement de la présence en ligne",
  ],
  "Cybersécurité": [
    "Protection des données",
    "Sécurisation des équipements",
    "Politique de sécurité",
  ],
  "Gestion de projet": [
    "Analyse des besoins",
    "Documentation technique",
    "Travail en équipe",
  ],
};

const options = [
  
  {
    name: "SLAM",
    icon: ChevronsLeftRight,
    myoptions: true,
    description: "Solutions Logicielles et Applications Métiers",
    infos: {
      "Compétences techniques": ["Développement Web", "Applications mobiles", "Base de données", "Programmation objet"],
      "Technologies": ["Java, C#, Python", "HTML, CSS, JavaScript", "React, Angular", "SQL, NoSQL"],
      "Débouchés professionnels": ["Développeur d'applications", "Développeur Web", "Analyste programmeur", "Chef de projet junior"],
    }

  },
  {
    name: "SISR",
    icon: GlobeLock,
    myoptions: false,
    description: "Solutions d'Infrastructure, Systèmes et Réseaux",
    infos: {
      "Compétences techniques": ["Administration Windows", "Administration Linux", "Virtualisation", "Réseaux TCP/IP"],
      "Services et sécurité": ["Active Directory", "Pare-feu", "VPN", "Supervision"],
      "Débouchés professionnels": ["Administrateur réseaux", "Technicien support", "Responsable infrastructure", "Consultant cybersécurité"],
    },
  }
]

export default function Bts() {
  return (
    <>
      <main className="flex flex-col gap-8 max-w-340 mx-auto items-center justify-center my-6 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-300 max-w-full">
          {/* <BtsCard
            className="col-span-1 lg:col-span-2 "
            name={bts_data.name}
            designation={bts_data.designation}
            time={bts_data.time}
            description={bts_data.description}
            option={bts_data.options}
          />

          {bts_option_data.map((option) => (
            <BtsOptionCard
              key={option.id}
              name={option.name}
              designation={option.designation}
              description={option.description}
              debouche={option.jobs}
              url={option.url}
            />
          ))} */}

          <div className="flex flex-col gap-4 p-4 bg-[#0A0A0A] border border-[#252525] rounded-xl col-span-2">
            <h1 className="text-2xl font-bold uppercase">Bts sio <span className="text-lg"> (Services Informatiques aux Organisations)</span></h1>
            <div className="grid grid-cols-3 gap-4">
              {presentation.map((item) => (
                <div
                  key={item.titre}
                  className="col-span-1 bg-[#1a1a1a] min-h-32 rounded-lg p-4 flex flex-col gap-4"
                >
                  <div className="flex flex-row gap-4">
                    <div className="aspect-square bg-sztatus/20 rounded-sm h-11 flex items-center justify-center">
                      <item.icon size={20} className="text-sztatus" />
                    </div>
                    <div className="flex flex-col justify-between items-start w-full ">
                      <h2 className="font-medium text-base text-[#ffff]">
                        {item.titre}
                      </h2>
                      <p className="text-sm text-[#cccccc]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ul className="list-inside flex flex-col gap-2">
                    {item.stats.map((stat, index) => (
                      <li
                        key={index}
                        className="text-sm inline-flex items-center gap-1 "
                      >
                        <span className="text-sztatus">
                          <ChevronRight size={14} />
                        </span>{" "}
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="col-span-3 bg-[#1a1a1a] rounded-lg p-4 flex flex-col gap-2">
                <h4 className="text-lg font-semibold">Compétences Communes</h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(competences_communes).map(
                    ([category, skills]) => (
                      <div
                        key={category}
                        className="bg-[#0A0A0A] border border-[#252525] min-h-20 rounded-lg p-4"
                      >
                        <h5 className="font-medium text-base text-sztatus mb-1">
                          {category}
                        </h5>
                        <ul className="list-inside flex flex-col">
                          {skills.map((skill, index) => (
                            <li
                              key={index}
                              className="text-sm inline-flex items-center gap-1 "
                            >
                              <span className="text-sztatus">
                                <ChevronRight size={14} />
                              </span>{" "}
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {options.map((item) => (
          <div key={item.name} className="flex flex-col gap-4 p-4 bg-[#0A0A0A] border border-[#252525] rounded-xl col-span-1">
            <div className="flex flex-row gap-4">
              <div className="flex items-center justify-center aspect-square h-15 rounded-sm">
                  <item.icon size={36} className="text-sztatus" />
              </div>
              <div className="flex flex-col items-start gap-2 justify-center">
                <h2 className="font-medium text-base text-[#ffff]">
                  Option {item.name} { item.myoptions && <span className="text-xs ml-0.5 text-sztatus/80">(Ma spécialité)</span> }
                </h2>
                <p className="text-sm text-[#888888]">
                  {item.description}
                </p>
              </div>
            </div>

            {Object.entries(item.infos).map(([name, data]) => (
            <div key={name} className="bg-[#1a1a1a] rounded-lg p-4 flex flex-col gap-2">
              <h5 className="text-base font-medium text-[#ffff]">{name}</h5>

              {Array.isArray(data) ? (
              <ul className="grid grid-cols-2 gap-2">
                {data.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm inline-flex items-center gap-1 "
                  >
                    <span className="text-sztatus">
                      <ChevronRight size={14} />
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              ) : (
              <p className="text-sm text-[#888888]">{data}</p>
              )}
            </div>
            ))}
            


          </div>
          ))}


        </div>
      </main>
      <Footer />
    </>
  );
}
