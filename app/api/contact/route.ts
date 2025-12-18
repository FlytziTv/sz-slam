// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Quand le formulaire fait un POST sur /api/contact
export async function POST(req: Request) {
  try {
    const { name, email, message, company } = await req.json();

    // 🪤 Si le champ caché est rempli, c'est sûrement un bot
    if (company && company.trim() !== "") {
      console.log("Bot détecté, message ignoré 🚫");
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    // Envoi de l'email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "flytzitv@gmail.com",
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
