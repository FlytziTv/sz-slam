import { SZLogo } from "@/components/icons/logo";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  // script qui calcule l'âge à partir de la date de naissance
  const birthDate = new Date("2006-11-10");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="À propos" />

      <main className="flex flex-row gap-4 max-w-340 mx-auto justify-center">
        <div className="flex-1 flex flex-col gap-4">
          <div className="aspect-video w-full bg-card border border-border rounded-md flex flex-col items-center justify-center gap-4 p-4">
            <SZLogo size={150} />
          </div>
          <div className="bg-card w-full border border-border rounded-md flex flex-col">
            <div className="flex flex-col gap-4 p-4 border-b border-border">
              <h6 className="text-base text-foreground font-medium">
                Informations
              </h6>
              <MinInfos title="Nom" value="Alexis DE JESUS" />
              <MinInfos title="Âge" value={`${age} ans`} />
              <MinInfos title="Localisation" value="Île-de-France, France" />
              <MinInfos
                title="Nationalité"
                value="Française, Portugaise (en cours)"
              />
              <MinInfos title="Disponibilité" value="Immédiate" />
            </div>
            <div className="flex flex-col gap-4 p-4 ">
              <MinInfosLink
                title="LinkedIn"
                value="https://www.linkedin.com/in/alexis-dejesus"
              />
              <MinInfosLink
                title="GitHub"
                value="https://www.github.com/FlytziTv"
              />
            </div>
          </div>
        </div>
        <div className="flex-3 flex flex-col gap-4">
          <div className="bg-card h-full w-full border border-border rounded-md flex flex-col gap-4 p-4">
            <h6 className="text-base text-foreground font-medium">
              Présentation
            </h6>
            <MinInfos
              title="À propos moi"
              value="Passionné par le développement web et mobile, je suis un jeune
              développeur de {age} ans basé en Île-de-France. Actuellement en
              formation en BTS SIO (Services Informatiques aux Organisations) à
              Paris Ynov Campus, je me spécialise dans le développement
              full-stack et mobile. J'ai acquis des compétences solides en
              JavaScript, TypeScript, React, Next.js, et Flutter à travers mes
              projets personnels et académiques. Curieux et motivé, je suis
              constamment à la recherche de nouvelles technologies et de défis
              pour améliorer mes compétences. Je suis ouvert à des opportunités
              de stage ou d'alternance pour mettre en pratique mes
              connaissances et contribuer à des projets innovants."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export function MinInfos({
  title,
  value,
}: {
  title: string;
  value: string | undefined;
}) {
  return (
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      <p className="text-sm text-foreground font-medium">{value}</p>
    </div>
  );
}

export function MinInfosLink({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  const displayValue = value
    .replace(/^https?:\/\//, "") // Supprime http:// ou https://
    .replace(/^\/files\/certif\//, ""); // Supprime le chemin du dossier

  return (
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      <Link
        href={value}
        target="_blank"
        className="text-sm text-foreground font-medium line-clamp-2 hover:underline cursor-pointer"
      >
        {displayValue}
        <SquareArrowOutUpRight size={12} className="inline ml-1" />
      </Link>
    </div>
  );
}
