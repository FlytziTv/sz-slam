/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { useEffect, useState } from "react";
import { ContactForm } from "@/components/form/contact-form";
import CardStats from "@/components/sz/pages/card-stats";
import HeaderPages from "@/components/sz/pages/header";
import { Mail, Send } from "lucide-react";

export default function Contacts() {
  // Hook pour que l'heure tourne en temps réel sans refresh
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 flex flex-col gap-6 font-sans">
      <HeaderPages
        icons_sub={Send}
        sub="Canaux de communication"
        title1="Entrez"
        title2="En contact"
        description="_Disponible pour mission freelance et alternance"
      >
        <CardStats
          icons_sub={Mail}
          title="Status actuel"
          value={"Disponible"}
          unit=""
        />
      </HeaderPages>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContactForm className="md:col-span-2" />
        <div className="flex flex-col w-full gap-6">
          <div className="bg-zinc-900 rounded-4xl p-8 flex flex-col justify-between text-white border border-zinc-800">
            <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest italic mb-2">
              // Heure_locale
            </span>
            <div className="flex flex-col items-start gap-1">
              <p className="text-3xl font-black italic uppercase tracking-tighter">
                Paris, FR
              </p>
              <p className="text-szcolor font-mono text-xs font-bold tabular-nums">
                {time.toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>
            </div>
          </div>

          <div className="bg-white border border-border rounded-4xl p-8 flex flex-col justify-between group hover:border-szcolor/40 transition-all">
            <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest italic mb-2">
              // Délai_de_réponse
            </span>
            <div className="flex flex-col items-start gap-1">
              <p className="text-3xl font-black italic uppercase tracking-tighter">
                &lt; 24 <span className="text-szcolor">Heures</span>
              </p>
              <p className="text-zinc-400 font-mono text-[10px] font-bold uppercase tracking-tight">
                Priorité_aux_emplois_alternance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
