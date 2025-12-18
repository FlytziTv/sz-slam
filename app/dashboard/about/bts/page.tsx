"use client";
import CardBts from "@/components/sz/bts/card-bts";
import CardBtsOption from "@/components/sz/bts/card-bts-option";
import CardStats from "@/components/sz/pages/card-stats";
import HeaderPages from "@/components/sz/pages/header";
import { bts_data, bts_option_data } from "@/data/about";
import { GraduationCap, BookOpen } from "lucide-react";

export default function BTS() {
  return (
    <div className="p-4 flex flex-col gap-6 font-sans">
      <HeaderPages
        icons_sub={GraduationCap}
        sub="Formation / Curriculum"
        title1="Diplôme"
        title2="Informatique"
      >
        <CardStats
          icons_sub={BookOpen}
          title="Status"
          value={"En cours"}
          unit=""
        />
      </HeaderPages>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bts_data.map((item) => (
          <CardBts
            key={item.id}
            titre={item.title}
            bts_name={item.bts_name}
            color={item.color}
            icons={item.icons}
            description={item.Description}
          />
        ))}

        {bts_option_data.map((item) => (
          <CardBtsOption
            key={item.id}
            titre={item.title}
            option_name={item.option_name}
            color={item.color}
            icons={item.icons}
            description={item.Description}
            jobs={item.jobs}
          />
        ))}
      </div>
    </div>
  );
}
