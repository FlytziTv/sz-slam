import BtsCard from "@/components/card/BtsCard";
import BtsOptionCard from "@/components/card/BtsOptionCard";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";
import { bts_data, bts_option_data } from "@/data/stud";

export default function Bts() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="Mon Bts" />

      <main className="flex flex-col gap-8 max-w-340 mx-auto items-center justify-center">
        <div className="grid grid-cols-2 gap-6 ">
          <BtsCard
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
          ))}
        </div>
      </main>
    </div>
  );
}
