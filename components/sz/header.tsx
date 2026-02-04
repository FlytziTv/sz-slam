"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { SZLogo } from "../icons/logo";

const page = [
  { id: 1, title: "Accueil", url: "/" },
  { id: 2, title: "A Propos", url: "/about" },
  { id: 3, title: "Mon Bts", url: "/bts" },
  { id: 4, title: "École & Entreprise", url: "/works" },
  { id: 5, title: "Certifications", url: "/certifs" },
  { id: 6, title: "Écosystème", url: "/ecosystem" },
  { id: 7, title: "Mission E5", url: "/e5" },
  { id: 8, title: "Projets E6", url: "/e6" },
  { id: 9, title: "Veilles", url: "/veilles" },
  { id: 10, title: "Contact", url: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border flex flex-row items-center justify-start gap-2 px-2 fixed top-0 left-0 right-0 bg-background z-50">
      <Link href="/" className="shrink-0 z-10">
        <SZLogo size={30} />
      </Link>
      <nav className="flex flex-row gap-1 overflow-x-auto scrollbar-none w-full h-full">
        {page.map((item) => {
          const isActive = pathname === item.url;
          return (
            <Link
              key={item.id}
              href={item.url}
              className={`group py-1.5 flex items-center justify-center text-foreground border-b transition-colors duration-150 ${
                isActive ? "border-foreground" : "border-transparent"
              }`}
            >
              <p
                className={`group flex leading-none px-4 py-2 group-hover:bg-accent transition-colors duration-150 rounded-sm text-sm font-medium shrink-0 whitespace-nowrap group-hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`}
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
