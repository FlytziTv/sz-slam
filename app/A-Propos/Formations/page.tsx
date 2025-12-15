export default function Formations() {
  return (
    <div className="h-full m-auto w-full px-8 gap-4 flex flex-col ">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-4xl">Formation</h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col p-2 border-border border-2 rounded-2xl hover:border-foreground/50 transition-all duration-300">
            <div className="w-full relative h-full rounded-lg overflow-hidden flex flex-col gap-3 bg-card p-2">
              <h2 className="text-xl font-bold">
                Paris Ynov Campus, l’école digitale dédiée aux métiers de demain
              </h2>
              <p className="text-sm">
                Paris Ynov Campus, est une institution dédiée à la formation
                dans les domaines du numérique et de l&apos;innovation. Fondé
                pour répondre à la demande croissante de compétences
                spécialisées, le campus offre des programmes allant du Bachelor
                au Mastère dans des secteurs variés tels que
                l&apos;informatique, le digital marketing, et la création 3D.{" "}
                <br></br>
                <br></br>
                Le campus se distingue par son approche pratique, encourageant
                les projets réels et les collaborations avec les entreprises
                pour préparer les étudiants à des carrières réussies. Reconnu
                pour son engagement envers l&apos;innovation et
                l&apos;excellence éducative, Paris Ynov Campus continue
                d&apos;évoluer, intégrant les dernières technologies pour former
                les leaders de demain dans l&apos;industrie numérique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
