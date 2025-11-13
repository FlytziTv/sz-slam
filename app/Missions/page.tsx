export default function Missions() {
  return (
    <div className="h-full m-auto w-full px-8 gap-4 flex flex-col ">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-4xl">Mes petits Projets</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col p-2 border-border border-2 rounded-2xl hover:border-foreground/50 transition-all duration-300">
            <div className="w-full relative h-full rounded-lg overflow-hidden flex flex-col gap-3 bg-card p-2"></div>
          </div>
          <div className="flex flex-col p-2 border-border border-2 rounded-2xl hover:border-foreground/50 transition-all duration-300">
            <div className="w-full relative h-full rounded-lg overflow-hidden flex flex-col gap-3 bg-card p-2"></div>
          </div>
          <div className="flex flex-col p-2 border-border border-2 rounded-2xl hover:border-foreground/50 transition-all duration-300">
            <div className="w-full relative h-full rounded-lg overflow-hidden flex flex-col gap-3 bg-card p-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
