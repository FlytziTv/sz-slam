  "use client";

  import { useState } from "react";

  export default function Contact() {
    // Gestion de l'état du formulaire
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setLoading(true);
      setStatus("idle");

      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        motif: formData.get("motif"),
        message: formData.get("message"),
        company: formData.get("company"), // Le pot de miel (honeypot) = champ caché pour détecter les bots
      };

      // Vérification honeypot côté client (optionnel, la vraie vérif est côté serveur)
      if (data.company) {
        setLoading(false);
        setStatus("success"); // On fait croire au bot que ça a marché
        return;
      }

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setStatus("success");
          (e.target as HTMLFormElement).reset();
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire :", error); // ✅ log pour debug
        setStatus("error");
      } finally {
        setLoading(false);
      }
    }

    return (
      <>
        <main className="flex-1 flex flex-col gap-8 w-full max-w-340 mx-auto items-center justify-center my-6 px-6">
          <div className="w-full flex flex-col items-center gap-8 max-w-160 ">
            <div className=" flex flex-col items-center jusity-center gap-2">
              <h2 className="text-2xl font-semibold">Contactez-moi</h2>
              <p className="text-sm text-[#cccccc] text-center">
                Vous avez une question, une proposition de projet ou souhaitez simplement discuter ?
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              {/* ✅ Honeypot — caché visuellement, invisible pour les humains */}
              <div aria-hidden="true" style={{ display: "none" }}>
                <label htmlFor="company">Ne pas remplir</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                <GroupInput name="name" label="Nom" placeholder="Votre nom de famille" type="text" />
                <GroupInput name="motif" label="Motif" placeholder="Motif du contact" type="text" />
              </div>
              <GroupInput name="email" label="Adresse mail" placeholder="Votre adresse mail" type="email" />
              <GroupText name="message" label="Message" placeholder="Votre message" />

              <div className="flex flex-col items-start justify-start gap-1 w-full">
                <button type="submit" disabled={loading} className="bg-white px-4 py-2 rounded-md text-black font-semibold hover:bg-white/80 transition-colors duration-300 w-full">
                  {loading ? "Envoi..." : "Envoyer"}
                </button>
                {status === "success" && (
                  <p className="text-green-500 text-sm">C&apos;est tout bon ! Ton message a été envoyé avec succès. Je te réponds dès que possible.</p>
                )}

                {status === "error" && (
                  <p className="text-red-500 text-sm">Oups, il y a eu un petit problème technique. Peux-tu réessayer ou passer par LinkedIn ?</p>
                )}
              </div>
            
            </form>
          </div>
        </main>
      </>
    );
  }


  export function GroupInput({ name, label, placeholder, type }: { name: string; label: string; placeholder: string; type: string }) {
    return (
      <div className="flex flex-col gap-2 items-start w-full ">
        <label htmlFor={name} className="text-sm text-[#ffffff]">
          {label} <span className="text-red-500">*</span>
        </label>
        <input
          type= {type}
          name={name}
          id={name}
          placeholder={placeholder}
          required
          className="w-full rounded-md bg-[#0A0A0A] border border-[#252525] px-3 py-2 text-sm text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#333333] transition-colors duration-300"
        />
      </div>
    )
  }

  export function GroupText({ name, label, placeholder, }: { name: string; label: string; placeholder: string; }) {
    return (
      <div className="flex flex-col gap-2 items-start w-full ">
        <label htmlFor={name} className="text-sm text-[#ffffff]">
          {label} <span className="text-red-500">*</span>
        </label>
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          required
          className="w-full rounded-md bg-[#0A0A0A] border border-[#252525] px-3 py-2 text-sm text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#333333] transition-colors duration-300 min-h-14.5 max-h-43"
        />
      </div>
    )
  }