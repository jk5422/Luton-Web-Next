import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Your Name <noreply@resend.dev>",
      to: ["lutonceramic@gmail.com"],
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json(
      { success: "Email sent successfully!", data },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error sending email";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
