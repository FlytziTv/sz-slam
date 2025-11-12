import CardCertif from "@/components/folio/card/CardCertif";
import { CertifItems } from "@/data/user";

export default function Certifications() {
  return (
    <div className="h-full m-auto w-full px-8 gap-4 flex flex-col ">
      <h1 className="font-semibold text-4xl">Certification</h1>
      <CardCertif items={CertifItems} />
    </div>
  );
}
