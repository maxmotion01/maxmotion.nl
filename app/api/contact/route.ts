import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels: Record<string, string> = {
  "ai-automation": "AI Automation",
  "ai-software": "AI Software",
  "ai-inspiratie": "AI Inspiratie",
  "chatgpt-training": "ChatGPT Training",
  "copilot-training": "Microsoft Copilot Training",
  "gemini-training": "Google Gemini Training",
  "ai-act-training": "EU AI Act Training",
  "ai-advies": "AI Advies",
};

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
});

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60000 });
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const selectedServicesHtml = data.services && data.services.length > 0
      ? `<li><strong>Interesse in:</strong> ${data.services.map(s => serviceLabels[s] || s).join(", ")}</li>`
      : "";

    // Send email to Max Motion
    await resend.emails.send({
      from: "Max Motion Aanvraag <noreply@maxmotion.nl>",
      to: "k.philips@maxmotion.nl",
      subject: `Nieuw contactbericht van ${data.name}`,
      html: `
        <h2>Nieuw Contactbericht</h2>
        <p>Er is een nieuw bericht binnengekomen via het contactformulier.</p>
        
        <h3>Contactgegevens:</h3>
        <ul>
          <li><strong>Naam:</strong> ${data.name}</li>
          <li><strong>E-mail:</strong> ${data.email}</li>
          <li><strong>Bedrijf:</strong> ${data.company || "Niet opgegeven"}</li>
          ${selectedServicesHtml}
        </ul>
        
        ${data.message ? `<h3>Bericht:</h3>
        <p>${data.message.replace(/\n/g, "<br>")}</p>` : ""}
      `,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "Max Motion Aanvraag <noreply@maxmotion.nl>",
      to: data.email,
      subject: "Bedankt voor je bericht - Max Motion",
      html: `
        <h2>Bedankt voor je bericht, ${data.name}!</h2>
        <p>We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
        
        <p>Met vriendelijke groet,<br>Het Max Motion Team</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("[Contact Form Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
