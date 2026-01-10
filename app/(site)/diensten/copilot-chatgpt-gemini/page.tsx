import { CheckCircle2, Shield, Settings, Users, BarChart } from "lucide-react";
import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copilot, ChatGPT & Gemini | Max Motion",
  description: "Verantwoorde uitrol van Microsoft Copilot, OpenAI ChatGPT en Google Gemini. Enterprise setup met governance, databegrenzing en compliance vanaf dag één.",
};

const whatYouGet = [
  "Enterprise beveiliging en compliance setup",
  "Data governance en boundary-configuratie",
  "Gebruikersprovisioning en toegangsbeheer",
  "Training en adoptieprogramma's",
  "Gebruiksmonitoring en ROI-tracking",
  "Doorlopende optimalisatie en ondersteuning",
];

const process = [
  {
    icon: Shield,
    title: "Beveiliging & Compliance Assessment",
    description:
      "Review jouw beveiligingseisen, databeleid en compliance-behoeften. Configureer tools om aan jouw governance-standaarden te voldoen.",
  },
  {
    icon: Settings,
    title: "Enterprise Configuratie",
    description:
      "Stel Microsoft Copilot, ChatGPT Enterprise of Google Gemini in met juiste databegrenzing, toegangscontroles en integraties.",
  },
  {
    icon: Users,
    title: "Uitrol & Training",
    description:
      "Gefaseerde implementatie met gebruikerstraining, best practices en change management. Bouw interne champions om adoptie te stimuleren.",
  },
  {
    icon: BarChart,
    title: "Monitoren & Optimaliseren",
    description:
      "Track gebruik, meet productiviteitswinst en optimaliseer op basis van echte data. Continue verbetering en governance-reviews.",
  },
];

const platforms = [
  {
    name: "Microsoft Copilot",
    description:
      "Microsoft 365 Copilot, GitHub Copilot en Copilot Studio. Enterprise-grade beveiliging met Microsoft's compliance-framework.",
  },
  {
    name: "OpenAI ChatGPT",
    description:
      "ChatGPT Enterprise en Team-abonnementen. Custom data retention, SSO en admin-controles voor organisatiegebruik.",
  },
  {
    name: "Google Gemini",
    description:
      "Gemini for Google Workspace. Geïntegreerd met Google's beveiligings- en compliance-infrastructuur.",
  },
];

const faqs = [
  {
    question: "Hoe lang duurt een typische uitrol?",
    answer:
      "De meeste enterprise-uitrollen duren 4-8 weken van initiële setup tot volledige implementatie. Dit omvat beveiligingsconfiguratie, pilot-testing, training en gefaseerde uitrol. Tijdlijn varieert op basis van organisatiegrootte en complexiteit.",
  },
  {
    question: "Kunnen we meerdere platforms gebruiken?",
    answer:
      "Ja. Veel organisaties gebruiken verschillende tools voor verschillende use cases—bijv. Microsoft Copilot voor productiviteit, GitHub Copilot voor development en ChatGPT voor research. We helpen je de juiste mix te kiezen en governance over platforms te beheren.",
  },
  {
    question: "Hoe zit het met dataprivacy en compliance?",
    answer:
      "We configureren elk platform om aan jouw data governance-eisen te voldoen. Dit omvat data residency, retentiebeleid, toegangscontroles en audit logging. Alle platforms bieden enterprise-features voor AVG, SOC 2 en branchespecifieke compliance.",
  },
];

export default function CopilotChatGPTGeminiPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Copilot, ChatGPT & Gemini verantwoord uitrollen
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Enterprise setup van Microsoft Copilot, OpenAI ChatGPT en Google Gemini met governance, databegrenzing en compliance vanaf dag één. Van configuratie tot adoptie in weken.
            </p>
            <div className="mt-8">
              <CTAButton source="copilot_hero" size="lg" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Wat je krijgt</h2>
            <ul className="mt-8 space-y-4">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Ons uitrolproces</h2>
            <div className="mt-12 space-y-12">
              {process.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {idx + 1}. {step.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Platforms die we ondersteunen</h2>
            <div className="mt-8 space-y-6">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <h3 className="text-lg font-semibold">{platform.name}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Veelgestelde vragen</h2>
            <Accordion type="single" collapsible className="mt-12">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-primary py-16 text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Klaar om te starten?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Plan een meeting om jouw enterprise AI-setup te bespreken.
            </p>
            <div className="mt-10">
              <CTAButton
                source="copilot_final"
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
