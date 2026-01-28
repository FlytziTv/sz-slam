import { SZLogo } from "@/components/icons/logo";
import Header from "@/components/sz/header";
// import TitleHeader from "@/components/sz/TitleHeader";
import { questions_data, choises_data } from "@/data/contact";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      {/* <TitleHeader title="Me Contacter" /> */}

      <main className="flex flex-col gap-8 min-w-340 m-auto items-center justify-center">
        <div className="w-full border border-border rounded-md flex flex-col">
          <div className="w-full flex flex-col p-6 border-b border-border">
            <h2 className="text-3xl font-semibold">Contactez-moi</h2>
            <p className="text-muted-foreground">
              Vous avez un projet en tête ou souhaitez simplement discuter ?
            </p>
          </div>
          <form className="flex flex-col p-6 gap-6 w-full">
            <Message message={questions_data[0].question}>
              <input
                type="text"
                className="w-full p-2 border border-input rounded-md bg-background text-foreground text-sm py-2 px-2.5 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none"
                placeholder="Votre nom complet"
                required
              />
            </Message>

            <Message message={questions_data[1].question}>
              <input
                type="text"
                className="w-full p-2 border border-input rounded-md bg-background text-foreground text-sm py-2 px-2.5 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none"
                placeholder="Votre adresse email"
                required
              />
            </Message>

            <Message message={questions_data[2].question}>
              <select className="w-full p-2 border border-input rounded-md bg-background text-foreground text-sm py-2 px-2.5 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none ">
                {choises_data.map((choice, index) => (
                  <option key={index} value={choice.choice}>
                    {choice.choice}
                  </option>
                ))}
              </select>
            </Message>

            <Message message={questions_data[3].question}>
              <textarea
                className=" w-full p-2 border border-input rounded-md min-h-24 max-h-63 bg-background text-foreground text-sm py-2 px-2.5 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none"
                placeholder="Écrivez votre message ici..."
                required
              />
              <button
                type="submit"
                className="absolute text-sm font-medium bottom-0 right-0 mb-2 mr-2 px-2.5 py-1.5 bg-primary text-background rounded-md hover:bg-primary/90 transition"
              >
                Envoyer
              </button>
            </Message>
          </form>
          <div className="w-full flex flex-col p-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Vous recevrez une réponse dans les plus brefs délais. Ou
              n&apos;hésitez pas à me contacter directement via{" "}
              <a
                className="font-semibold hover:underline"
                href="https://www.linkedin.com/in/alexis-dejesus/"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export function Message({
  message,
  children,
}: {
  message: string | React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className=" flex flex-row gap-4 items-start w-full ">
      <div className="h-7.5 w-7.5 flex items-center justify-center rounded-full ">
        <SZLogo size={20} />
      </div>
      <div className="flex flex-col gap-2 mt-0.75 w-full relative">
        <p>{message}</p>
        {children}
      </div>
    </div>
  );
}
