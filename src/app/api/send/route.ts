import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { email, name, message } = await req.json();
  try {
    const { data , error } = await resend.emails.send({
      from: "Moatasim's Website <onboarding@resend.dev>",
      to: ['mo32000a@gmail.com'],
      subject: "A message from Moatasim's Website",
      react: EmailTemplate({ firstName: name, userEmail: email, msg: message }) as React.ReactElement,
    }
);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully" });

  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
