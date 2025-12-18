import { Briefcase, Code2, Search, Send, UserRound } from "lucide-react";

export const sidebar_data = {
  navMain: [
    {
      title: "A Propos",
      url: "/dashboard/about",
      icon: UserRound,
      isActive: true,
      items: [
        {
          title: "Mon BTS",
          url: "/dashboard/about/bts",
        },
        {
          title: "Ma Formation",
          url: "/dashboard/about/formation",
        },
        {
          title: "Mes Certifications",
          url: "/dashboard/about/certifications",
        },
        {
          title: "Mon Écosystème",
          url: "/dashboard/about/ecosysteme",
        },
      ],
    },
  ],
  navProjects: [
    {
      title: "Missions E5",
      url: "/dashboard/missions",
      icon: Briefcase,
      isActive: false,
    },
    {
      title: "Projets E6",
      url: "/dashboard/projets",
      icon: Code2,
      isActive: false,
    },
    {
      title: "Veilles",
      url: "/dashboard/veilles",
      icon: Search,
    },
  ],

  navSecondary: [
    {
      title: "Contacts",
      url: "/dashboard/contacts",
      icon: Send,
    },
  ],
};
