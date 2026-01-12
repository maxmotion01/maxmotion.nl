import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const chatContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = chatContactSchema.parse(body);

    // Send email to Max Motion
    await resend.emails.send({
      from: "Lynn Chat Assistent <noreply@maxmotion.nl>",
      to: "k.philips@maxmotion.nl",
      subject: `Chat bericht van ${data.name}`,
      html: `
        <h2>Nieuw Bericht via Chat (Lynn)</h2>
        <p>Er is een nieuw bericht binnengekomen via de chat assistent.</p>
        
        <h3>Contactgegevens:</h3>
        <ul>
          <li><strong>Naam:</strong> ${data.name}</li>
          <li><strong>E-mail:</strong> ${data.email}</li>
          <li><strong>Telefoon:</strong> ${data.phone}</li>
        </ul>
        
        <h3>Bericht:</h3>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">Dit bericht is verstuurd via de Lynn chat assistent op maxmotion.nl</p>
      `,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "Lynn - Max Motion <noreply@maxmotion.nl>",
      to: data.email,
      subject: "Bedankt voor je bericht - Max Motion",
      html: `
        <h2>Bedankt voor je bericht, ${data.name}!</h2>
        <p>Ik heb je bericht doorgestuurd naar het Max Motion team. Ze nemen zo snel mogelijk contact met je op.</p>
        
        <p>Met vriendelijke groet,<br>
        Lynn<br>
        AI-assistent Max Motion</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("[Chat Contact Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
