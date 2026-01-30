import Link from "next/link";
import { SZLogo } from "../icons/logo";

const footerlink = [
  { id: 1, title: "Accueil", url: "/" },
  { id: 3, title: "Contact", url: "/contact" },
  { id: 4, title: "Mentions Légales", url: "/legal" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background mt-auto">
      <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Link href="/" className="p-2">
            <SZLogo size={30} />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {footerlink.map((item) => {
              return (
                <Link
                  href={item.url}
                  key={item.id}
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-2 text-sztatus rounded-sm px-4 py-2 hover:bg-accent">
          <div className="h-2 w-2 rounded-full bg-sztatus"></div>
          <span className="text-sm">Disponnible.</span>
        </div>
      </div>
    </footer>
  );
}
