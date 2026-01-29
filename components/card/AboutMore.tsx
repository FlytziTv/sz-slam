import { personal_data, about_study } from "@/data/about";
import AboutStud from "./AboutStud";

export default function AboutMore() {
  return (
    <div className="col-span-2 group relative bg-card w-full border border-border rounded-md flex flex-col p-4 gap-4">
      <MinInfos title="Présentation" value={personal_data.presentation} />
      {/* <MinInfosChildren title="Expériences professionnelles">
        {about_study.map((study) => (
          <AboutStud
            key={study.id}
            image={study.image}
            title={study.title}
            entreprise={study.entreprise}
            date={study.date}
            link={study.link}
          />
        ))}
      </MinInfosChildren> */}
    </div>
  );
}

export function MinInfos({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      <p className="text-sm text-foreground font-medium">{value}</p>
    </div>
  );
}

export function MinInfosChildren({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      {children}
    </div>
  );
}
