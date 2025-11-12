import ConfettiFireworks from "@/components/folio/Confetti";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <h1 className="font-bold text-5xl text-center">
        Bienvenue sur mon portfolio! <span className="wave">👋</span>
      </h1>
      <p className="font-light text-lg">Ceci est la page d&apos;accueil.</p>
      <ConfettiFireworks />
    </div>
  );
}
