import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  Search,
  Send,
  TvMinimal,
  UserRound,
} from "lucide-react";

const dash = "/dashboard/";
const about = "/dashboard/about";

export const data_sidebar = {
  About: [
    {
      id_group: 1,
      title_group: "À propos",
      group: [
        {
          title: "A Propos",
          url: `${about}`,
          icon: UserRound,
        },
        {
          title: "Mon BTS",
          url: `${about}/bts`,
          icon: BookOpen,
        },
        {
          title: "Mon Ecole & Entreprise",
          url: `${about}/formation`,
          icon: GraduationCap,
        },
        {
          title: "Mes Certifications",
          url: `${about}/certifications`,
          icon: BadgeCheck,
        },
        {
          title: "Mon Écosystème",
          url: `${about}/ecosysteme`,
          icon: TvMinimal,
        },
      ],
    },
  ],
  Projets: [
    {
      id_group: 2,
      title_group: "Projets",
      group: [
        {
          title: "Missions E5",
          url: `${dash}missions`,
          icon: Briefcase,
        },
        {
          title: "Projets E6",
          url: `${dash}projets`,
          icon: Code2,
        },
        {
          title: "Veilles",
          url: `${dash}veilles`,
          icon: Search,
        },
      ],
    },
  ],
  Contact: [
    {
      id_group: 3,
      title_group: "Contact",
      group: [
        {
          title: "Contacts",
          url: `${dash}contacts`,
          icon: Send,
        },
      ],
    },
  ],
};
