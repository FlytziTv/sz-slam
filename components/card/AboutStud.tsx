import Image from "next/image";
import Link from "next/link";

export default function AboutStud({
  image,
  title,
  entreprise,
  date,
  link,
}: {
  image: string;
  title: string;
  entreprise: string;
  date: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="bg-card w-full border border-border rounded-md flex flex-row p-4 gap-4 items-center"
    >
      <div className="h-17 w-17 relative shrink-0">
        <Image src={image} alt={title} fill className="object-contain p-2" />
      </div>

      <div className="flex flex-col items-between justify-start h-full">
        <h4 className="text-md text-foreground font-medium truncate w-full">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground">{entreprise}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </Link>
  );
}
