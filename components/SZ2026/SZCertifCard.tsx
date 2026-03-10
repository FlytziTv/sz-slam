import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function SZCertifCard({
  categorie,
  name,
  image,
  pdf,
  description,
  url,
}: {
  categorie: string;
  name: string;
  image: string;
  pdf: string;
  description: string;
  url: string;
}) {
  return (
    <div className="group bg-[#0A0A0A] border border-[#252525] transition-all duration-300 rounded-lg p-3 gap-3 flex flex-col cursor-pointer">
      <div className="aspect-video w-full relative overflow-hidden rounded-sm sticky-0 bg-white/10 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="rounded-sm group-hover:scale-105 transition-transform duration-600"
        />

        <span className="absolute bottom-2 right-2 bg-[#1a1a1a] text-[#a1a1a1] text-xs font-medium px-2 py-1 rounded-sm">
          {categorie}
        </span>
      </div>
      <div className="flex flex-col justify-between w-full flex-1 gap-4 min-h-24">
        <div className="flex flex-col gap-1 items-start w-full ">
          <h2 className="text-base font-semibold text-[#FFFFFF]">{name}</h2>
          <p className="text-sm text-[#cccccc]">{description}</p>
        </div>
        <div className="flex flex-row items-center gap-2 ">
          {pdf !== "/" && (
            <Link
              href={pdf}
              target="_blank"
              className="text-sm px-3 py-1.5 rounded-sm bg-[#1a1a1a] text-[#a1a1a1] hover:text-[#FFFFFF] transition-colors duration-300 flex items-center gap-2"
            >
              Certification
              <ArrowRight size={16} />
            </Link>
          )}
          {url !== "/" && (
            <Link
              href={url}
              target="_blank"
              className="text-sm px-3 py-1.5 rounded-sm bg-[#1a1a1a] text-[#a1a1a1] hover:text-[#FFFFFF] transition-colors duration-300 flex items-center gap-2"
            >
              Site Web
              <ExternalLink size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
