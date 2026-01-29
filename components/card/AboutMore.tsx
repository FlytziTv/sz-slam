import { personal_data } from "@/data/about";

export default function AboutMore() {
  return (
    <div className="group relative bg-card w-full border border-border rounded-md flex flex-col p-4 gap-4">
      <MinInfos title="Présentation" value={personal_data.presentation} />
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
    <div className="flex flex-col gap-1">
      <h4 className="text-sm text-muted-foreground">{title}</h4>
      {children}
    </div>
  );
}
