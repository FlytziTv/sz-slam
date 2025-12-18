"use client";

import CardCertif from "@/components/sz/certif/card-certif";
import CardStats from "@/components/sz/pages/card-stats";
import HeaderPages from "@/components/sz/pages/header";
import { certif_data } from "@/data/about";
import { BadgeCheck } from "lucide-react";

export default function Certifications() {
  return (
    <div className="p-4 flex flex-col gap-6 font-sans">
      <HeaderPages
        icons_sub={BadgeCheck}
        sub="Mes Diplômes & Certifications"
        title1="Mes"
        title2="Certifications"
      >
        <CardStats
          icons_sub={BadgeCheck}
          title="Certifications_Obtenues"
          value={certif_data.length}
          unit="Certif"
        />
      </HeaderPages>
      <div className="grid grid-cols-4 gap-6">
        {certif_data.map((switchItem) => (
          <CardCertif
            key={switchItem.id}
            img={switchItem.img}
            titre={switchItem.titre}
            description={switchItem.description}
            pdf={switchItem.pdf}
            link={switchItem.link}
            date={switchItem.date}
          />
        ))}
      </div>
    </div>
  );
}
