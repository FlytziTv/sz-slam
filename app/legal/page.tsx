import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";
import { SZInfos, SZInfosLink } from "@/components/sz/SZInfos";

export default function MentionsLegales() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="Mentions Légales" />

      <main className="flex flex-col gap-8 max-w-340 mx-auto w-full my-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Section Éditeur */}
          <section className="bg-card border border-border rounded-md p-6 flex flex-col gap-4">
            <h2 className="text-lg font-bold text-foreground mb-2 underline underline-offset-8 decoration-border">
              Édition du site
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <SZInfos title="Éditeur" value="Alexis De Jesus" />
              <SZInfos title="Pseudo" value="Flytzi" />
            </div>
            <SZInfos title="Rôle" value="Développeur Fullstack & Étudiant" />
            <SZInfosLink title="Contact" value="/contact" />
            {/* À vérifier si c'est le bon email */}
          </section>

          {/* Section Hébergement & Infra */}
          <section className="bg-card border border-border rounded-md p-6 flex flex-col gap-4">
            <h2 className="text-lg font-bold text-foreground mb-2 underline underline-offset-8 decoration-border">
              Hébergement & Infra
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <SZInfos title="Hébergeur" value="Vercel Inc." />
              <SZInfos title="Nom de domaine" value="OVH Cloud" />
            </div>
            <SZInfos title="Source" value="GitHub (Private Repository)" />
            <SZInfosLink
              title="Site de l'hébergeur"
              value="https://vercel.com"
            />
          </section>

          {/* Section Stack Technique */}
          <section className="bg-card border border-border rounded-md p-6 flex flex-col gap-4 md:col-span-2">
            <h2 className="text-lg font-bold text-foreground mb-2 underline underline-offset-8 decoration-border">
              Propriété & Stack Technique
            </h2>
            <p className="text-sm text-foreground leading-relaxed">
              Ce portfolio a été conçu et développé intégralement par Alexis De
              Jesus. Tous les contenus, code source et designs sont protégés par
              le droit d&apos;auteur.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-2">
              <SZInfos title="Framework" value="Next.js 16" />
              <SZInfos title="Librairie" value="React 19" />
              <SZInfos title="Styling" value="Tailwind CSS 4" />
              <SZInfos title="Icons" value="Lucide React" />
            </div>
          </section>

          {/* Section RGPD */}
          <section className="bg-card border border-border rounded-md p-6 flex flex-col gap-4 md:col-span-2">
            <h2 className="text-lg font-bold text-foreground mb-2 underline underline-offset-8 decoration-border">
              Données personnelles
            </h2>
            <p className="text-sm text-foreground">
              Conformément au RGPD, ce site ne collecte aucune donnée
              personnelle à votre insu. Aucun traceur publicitaire n&apos;est
              utilisé. Les seules données traitées sont les logs techniques
              anonymes de Vercel pour le bon fonctionnement du serveur.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
