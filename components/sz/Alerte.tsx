import { Code } from "lucide-react";

export default function Alerte() {
  return (
    <div className="mt-11.75 ">
      <div className="py-2 border-b border-destructive/40 bg-destructive/10">
        <div className="max-w-340 mx-auto h-full flex items-center justify-center gap-2 text-destructive/90">
          <Code size={16} />
          <h1 className="text-sm ">
            Le site est en développement, certaines sections peuvent être
            incomplètes ou bugguées.
          </h1>
        </div>
      </div>

      <div className="mb-6 h-25 border-b border-border">
        <div className="max-w-340 mx-auto h-full flex items-center">
          <h1 className="text-3xl font-medium">Accueil</h1>
        </div>
      </div>
    </div>
  );
}
