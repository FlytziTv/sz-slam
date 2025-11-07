import { SocialItems } from "@/data/user";
import Link from "next/link";

export default function IconsSocial() {
  return (
    <div className="flex gap-2">
      {SocialItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-2 px-3 py-1 rounded-full border border-border w-fit hover:bg-accent/50"
          >
            <Icon size={16} className="text-primary hover:text-primary/80" />
            <span className="font-light text-sm">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
