import CertifCard from "@/components/card/CertifCard";
import Footer from "@/components/sz/footer";
import Header from "@/components/sz/header";
import TitleHeader from "@/components/sz/TitleHeader";
import { certif_data } from "@/data/certifs";

export default function Certifs() {
  const groupedByCategory = certif_data.reduce(
    (acc, certif) => {
      if (!acc[certif.categorie]) {
        acc[certif.categorie] = [];
      }
      acc[certif.categorie].push(certif);
      return acc;
    },
    {} as Record<string, typeof certif_data>,
  );

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <TitleHeader title="Mes Certifications" />

      <main className="flex flex-col gap-8 max-w-340 mx-auto items-center justify-center my-6">
        {Object.entries(groupedByCategory).map(([category, certifs]) => (
          <div key={category} className="flex flex-col w-full gap-4">
            <h2 className="text-xl font-semibold">
              <span>{certifs.length}</span> {category}
            </h2>

            <div className="w-full grid grid-cols-2 gap-4">
              {certifs.map((certif) => (
                <CertifCard
                  key={certif.id}
                  status={certif.status}
                  categorie={certif.categorie}
                  name={certif.name}
                  image={certif.image}
                  pdf={certif.pdf}
                  description={certif.description}
                  url={certif.link}
                  date={certif.date}
                />
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
