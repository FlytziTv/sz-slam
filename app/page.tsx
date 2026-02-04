import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";
import { SZMessage } from "@/components/sz/SZMessage";
import Link from "next/link";

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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />

      <main className="flex-1 flex flex-col gap-8 w-full max-w-340 mx-auto items-center justify-center my-6 px-6">
        <div className="w-full bg-card border border-border rounded-md flex flex-col shadow-sm">
          {/* Header de la carte */}
          <div className="w-full flex flex-col p-6 border-b border-border bg-muted/20">
            <h2 className="text-3xl font-semibold tracking-tight">Bienvenue</h2>
            <p className="text-muted-foreground mt-1">
              Explorez mon univers à travers ce terminal interactif.
            </p>
          </div>

          {/* Corps de la discussion */}
          <div className="flex flex-col p-6 gap-8 w-full">
            <SZMessage message="Salut, je suis Alexis. Développeur de 19 ans passionné par l'architecture logicielle & le développement web. Je cherche toujours à être meilleur qu'hier.">
              <SZHomeButton link={page[1].url} text="À Propos de moi" />
            </SZMessage>

            <SZMessage message="Je suis actuellement en BTS SIO SLAM à Ynov Campus de Paris, en recherche de stage ou d'une alternance pour m'apporter des compétences.">
              <div className="flex flex-wrap gap-2">
                <SZHomeButton link={page[2].url} text="Mon BTS" />
                <SZHomeButton
                  link={page[3].url}
                  text="Mon École & Alternance"
                />
              </div>
            </SZMessage>

            <SZMessage message="Comme dit auparavant, je cherche toujours à être meilleur qu'hier et pour cela j'ai passé plusieurs certifications et j'apprends beaucoup de choses en autodidacte.">
              <div className="flex flex-wrap gap-2">
                <SZHomeButton link={page[4].url} text="Mes Certifications" />
                <SZHomeButton link={page[5].url} text="Mon Écosystème" />
              </div>
            </SZMessage>

            <SZMessage message="Dans le cadre de mon BTS, j'ai réalisé plusieurs projets pour les différentes missions E5 et E6, ainsi que des veilles sur des sujets liés à l'informatique.">
              <div className="flex flex-wrap gap-2">
                <SZHomeButton link={page[6].url} text="Projets E5" />
                <SZHomeButton link={page[7].url} text="Projets E6" />
                <SZHomeButton link={page[8].url} text="Mes Veilles" />
              </div>
            </SZMessage>

            <SZMessage message="N'hésitez pas à me contacter pour discuter de votre projet ou simplement pour échanger sur l'informatique et le développement web.">
              <SZHomeButton link={page[9].url} text="Me Contacter" />
            </SZMessage>
          </div>

          {/* Footer de la carte */}
          <div className="w-full flex flex-col p-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Directement disponible sur{" "}
              <a
                className="font-semibold hover:underline"
                href="https://www.linkedin.com/in/alexis-dejesus/"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function SZHomeButton({ text, link }: { text: string; link: string }) {
  return (
    <Link
      href={link}
      className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md text-[13px] hover:bg-primary/20 hover:text-primary border border-primary transition-all w-fit "
    >
      {text}
    </Link>
  );
}
