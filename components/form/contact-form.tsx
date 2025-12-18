"use client";

import { Contact } from "lucide-react";

import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { SocialItems } from "@/data/user";

type ContactFormProps = React.ComponentProps<"div">;

export function ContactForm({ className, ...props }: ContactFormProps) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEl = e.currentTarget;

    const form = new FormData(formEl);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message envoyé", {
          description: "Merci pour ton message, je te réponds très vite.",
        });
        formEl.reset(); // ✅ ça marche maintenant
      } else {
        toast.error("Erreur pendant l’envoi", {
          description: "Une erreur est survenue, réessaie plus tard.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Impossible d’envoyer le message", {
        description: "Vérifie ta connexion ou réessaie plus tard.",
      });
    }
  }

  return (
    <div
      className={cn("flex flex-col gap-6 w-full max-w-2xl", className)}
      {...props}
    >
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          {/* En-tête du formulaire */}
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="flex flex-col items-center gap-2 font-medium">
              <div className="flex size-8 items-center justify-center rounded-md">
                <Contact className="size-6" />
              </div>
              <span className="sr-only">Formulaire de contact</span>
            </span>
            <h1 className="text-xl font-bold">Me contacter</h1>
            <FieldDescription>
              Laissez-moi un message — je vous répondrai au plus vite.
            </FieldDescription>
          </div>

          {/* Champs nom + email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Field className="flex-1">
              <FieldLabel htmlFor="name">Nom</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Alexis De Jesus"
                required
              />
            </Field>

            <Field className="flex-1">
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </Field>
          </div>

          {/* Champ message */}
          <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea
              id="message"
              name="message"
              placeholder="Écris ton message ici…"
              rows={5}
              className="resize-none h-40 max-h-40"
              required
            />
          </Field>

          {/* 👇 Anti-spam honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {/* Bouton d'envoi */}
          <Field>
            <Button type="submit">Envoyer</Button>
          </Field>

          <FieldSeparator>Ou</FieldSeparator>

          {/* Boutons réseaux */}
          <Field className="grid gap-4 sm:grid-cols-2">
            {SocialItems.filter((s) =>
              ["GitHub", "LinkedIn"].includes(s.name)
            ).map((item) => {
              const Icon = item.icon; // Récupération du composant d’icône
              return (
                <Button asChild variant="outline" type="button" key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="flex flex-row items-center gap-2"
                  >
                    <Icon
                      size={16}
                      className="text-primary hover:text-primary/80 transition-colors"
                    />
                    {item.name}
                  </a>
                </Button>
              );
            })}
          </Field>
        </FieldGroup>
      </form>

      <FieldDescription className="px-6 text-center">
        Vos informations ne seront utilisées que pour vous répondre.
      </FieldDescription>
    </div>
  );
}
