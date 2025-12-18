import Link from "next/link";
import { GithubIcon } from "@/components/Icons/github";
import { Button } from "@/components/ui/button";

export default function CardProjects({
  title,
  desc,
  tags,
  github,
  status,
  size,
}: {
  title: string;
  desc: string;
  tags: string[];
  github: string;
  status: string;
  size: string;
}) {
  return (
    <div
      className={`bg-white border border-border rounded-4xl p-8 flex flex-col justify-between gap-6 shadow-sm ${
        size === "large" ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-black text-szcolor uppercase tracking-widest italic flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-szcolor" /> {status}
          </span>
          <Link href={github} target="_blank">
            <Button size={"icon"} variant={"ghost"} className="rounded-full">
              <GithubIcon
                size={20}
                className="text-zinc-300 hover:text-zinc-900 transition-colors"
              />
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3
            className={`font-black tracking-tighter uppercase italic leading-[0.85] ${
              size === "large" ? "text-4xl md:text-5xl" : "text-2xl"
            }`}
          >
            {title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed border-l-3 border-zinc-100 pl-4">
            {desc}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-zinc-50 border border-zinc-100 hover:text-szcolor transition-colors duration-75 cursor-pointer hover:bg-szcolor/20 rounded-lg text-[9px] font-mono font-bold text-zinc-400 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
