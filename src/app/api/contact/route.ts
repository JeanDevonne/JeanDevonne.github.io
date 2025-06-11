import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactTemplate } from "@/emails";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2, "El nombre debe contener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe contener almenos 10 caracteres."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = schema.parse(body);

    const { data, error } = await resend.emails.send({
      from: "Jean León Contact <onboarding@resend.dev>",
      to: [process.env.NEXT_PUBLIC_RESEND_CONTACT_EMAIL!],
      subject: "Tu portafolio ha recibido un nuevo mensaje",
      react: ContactTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}