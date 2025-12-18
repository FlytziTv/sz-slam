import { Code2 } from "lucide-react";

export default function CardNoProjects() {
  return (
    <div className="bg-zinc-900 border border-border rounded-4xl p-8 flex flex-col items-center justify-center gap-4 text-center">
      <div className="h-14 w-14 rounded-2xl bg-zinc-800 flex items-center justify-center border border-zinc-700 animate-pulse">
        <Code2 size={24} className="text-szcolor" />
      </div>
      <div className="space-y-1">
        <p className="text-white font-black uppercase tracking-tighter italic">
          Projets à venir
        </p>
        <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest">
          En cours de développement...
        </p>
      </div>
    </div>
  );
}
