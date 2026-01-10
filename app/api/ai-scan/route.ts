import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, company } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in" },
        { status: 400 }
      );
    }

    // Send email to Max Motion
    await resend.emails.send({
      from: "Max Motion Aanvraag <noreply@maxmotion.nl>",
      to: "k.philips@maxmotion.nl",
      subject: `Nieuwe AI Scan aanvraag van ${firstName} ${lastName}`,
      html: `
        <h2>Nieuwe AI Scan Aanvraag</h2>
        <p>Er is een nieuwe aanvraag voor een gratis AI Scan binnengekomen via de website.</p>
        
        <h3>Contactgegevens:</h3>
        <ul>
          <li><strong>Naam:</strong> ${firstName} ${lastName}</li>
          <li><strong>E-mail:</strong> ${email}</li>
          <li><strong>Telefoon:</strong> ${phone || "Niet opgegeven"}</li>
          <li><strong>Bedrijf:</strong> ${company}</li>
        </ul>
        
        <p>Neem zo snel mogelijk contact op met deze potentiële klant.</p>
      `,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "Max Motion Aanvraag <noreply@maxmotion.nl>",
      to: email,
      subject: "Bedankt voor je aanvraag voor de AI Quick Scan!",
      html: `
        <p>Beste ${firstName},</p>
        
        <p>Bedankt voor je aanvraag! We hebben jouw verzoek voor een gratis AI Quick Scan succesvol ontvangen.</p>
        
        <p>Een van onze AI-experts neemt binnen 24 uur contact met je op om samen de mogelijkheden${company ? ` voor ${company}` : ""} te bespreken.</p>
        
        <p>In de tussentijd kun je alvast ontdekken hoe wij organisaties helpen slimmer te werken met AI. Bezoek <a href="https://maxmotion.nl">onze website</a> voor meer informatie over onze AI-oplossingen, trainingen en advies.</p>
        
        <p>Heb je nog vragen? Neem gerust contact met ons op via <a href="tel:+31683969593">+31 6 83969593</a> of <a href="mailto:contact@maxmotion.nl">contact@maxmotion.nl</a>.</p>
        
        <p>Met vriendelijke groet,<br><br>Het Max Motion Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Er is iets misgegaan bij het verzenden" },
      { status: 500 }
    );
  }
}
