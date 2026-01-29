"use client";

import { useState } from "react";
import { SZLogo } from "@/components/icons/logo";
import Header from "@/components/sz/header";
// import TitleHeader from "@/components/sz/TitleHeader";
import { questions_data, choises_data } from "@/data/contact";

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
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />

      <main className="flex flex-col gap-8 min-w-340 m-auto items-center justify-center">
        <div className="w-full bg-card border border-border rounded-md flex flex-col">
          <div className="w-full flex flex-col p-6 border-b border-border">
            <h2 className="text-3xl font-semibold">Contactez-moi</h2>
            <p className="text-muted-foreground">
              Vous avez un projet en tête ou souhaitez simplement discuter ?
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-6 gap-6 w-full"
          >
            {/* Champ Honeypot caché (Anti-bot) */}
            <input
              type="text"
              name="company"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <Message message={questions_data[0].question}>
              <input
                name="name"
                type="text"
                className="w-full p-2 border border-input rounded-md bg-background text-foreground text-sm py-2 px-2.5 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none"
                placeholder="Votre nom complet"
                required
              />
            </Message>

            <Message message={questions_data[1].question}>
              <input
                name="email"
                type="email"
                className="w-full p-2 border border-input rounded-md bg-background text-foreground text-sm py-2 px-2.5 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none"
                placeholder="Votre adresse email"
                required
              />
            </Message>

            <Message message={questions_data[2].question}>
              <select
                name="motif"
                className="w-full p-2 border border-input rounded-md bg-background text-foreground text-sm py-2 px-2.5 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none "
                required
              >
                <option value="" disabled selected>
                  Choisir un motif
                </option>
                {choises_data.map((choice, index) => (
                  <option key={index} value={choice.choice}>
                    {choice.choice}
                  </option>
                ))}
              </select>
            </Message>

            <Message message={questions_data[3].question}>
              <textarea
                name="message"
                className=" w-full p-2 border border-input rounded-md min-h-24 max-h-63 bg-background text-foreground text-sm py-2 px-2.5 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none"
                placeholder="Écrivez votre message ici..."
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute text-sm font-medium bottom-0 right-0 mb-2 mr-2 px-2.5 py-1.5 bg-primary text-background rounded-md hover:bg-primary/90 transition"
              >
                {loading ? "Envoi..." : "Envoyer"}
              </button>
            </Message>

            {status === "success" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <Message
                  message={
                    <span className="text-green-500">
                      C&apos;est tout bon ! Ton message a été envoyé avec
                      succès. Je te réponds dès que possible.
                    </span>
                  }
                />
              </div>
            )}

            {status === "error" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <Message
                  message={
                    <span className="text-red-500">
                      Oups, il y a eu un petit problème technique. Peux-tu
                      réessayer ou passer par LinkedIn ?
                    </span>
                  }
                />
              </div>
            )}
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
