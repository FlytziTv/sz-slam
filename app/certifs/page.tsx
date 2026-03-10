import Footer from "@/components/sz/footer";
import SZCertifCard from "@/components/SZ2026/SZCertifCard";
import { certif_data } from "@/data/certifs";

export default function Certifs() {


  return (
    <>
      <main className="flex flex-col gap-8 mx-auto items-center justify-center my-6 px-6">
          <div className="flex flex-col w-full gap-4">
            <h2 className="text-xl font-semibold">
              Mes Certification <span>({certif_data.length})</span>
            </h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {certif_data.map((certif) => (
                <SZCertifCard
                  key={certif.id}
                  categorie={certif.categorie}
                  name={certif.name}
                  image={certif.image}
                  pdf={certif.pdf}
                  description={certif.description}
                  url={certif.link}
                />
              ))}
            </div>
          </div>
      </main>
      <Footer />
    </>
  );
}
