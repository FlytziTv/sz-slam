/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { Send } from "lucide-react";

import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { SocialItems } from "@/data/about";
import { Separator } from "../ui/separator";
import Link from "next/link";

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
      className={cn(
        "flex flex-col gap-6 w-full bg-card border border-border rounded-4xl p-8",
        className
      )}
      {...props}
    >
      <form onSubmit={handleSubmit}>
        <FieldGroup className="gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Field className="flex-1">
              <FieldLabel htmlFor="name" className="text-zinc-500">
                // Nom
              </FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Nom & Prénom"
                required
              />
            </Field>

            <Field className="flex-1">
              <FieldLabel htmlFor="email" className="text-zinc-500">
                // Email
              </FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="message" className="text-zinc-500">
              // Message
            </FieldLabel>
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

          <Field>
            <Button
              type="submit"
              variant={"default"}
              size={"lg"}
              className="w-full sm:w-fit font-black uppercase italic tracking-widest rounded-xl transition-all hover:scale-102 active:scale-98"
            >
              Envoyer_Message <Send size={16} className="ml-2 text-szcolor" />
            </Button>
          </Field>

          <Separator />

          <div className=" flex flex-row items-center justify-between gap-4">
            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest italic">
              Retrouvez-moi sur:
            </span>
            <div className="flex flex-wrap justify-center gap-3 text-[10px] font-mono font-bold uppercase">
              {SocialItems.filter((s) =>
                ["GitHub", "LinkedIn"].includes(s.name)
              ).map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  className="px-4 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-xl cursor-default bg-white/50 hover:border-szcolor hover:bg-szcolor/20 transition-all duration-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}
