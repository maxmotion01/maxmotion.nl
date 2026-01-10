import Link from "next/link";
import { ArrowRight, Code, GraduationCap, Settings, Workflow, Lightbulb, MessageSquare } from "lucide-react";
import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diensten | Max Motion",
  description: "AI-productontwikkeling, coaching & training, en enterprise setup voor Copilot, ChatGPT en Gemini.",
};

const services = [
  {
    icon: Code,
    title: "AI-producten",
    description:
      "Bouw op maat gemaakte AI-producten en interne tools die echte problemen oplossen en naadloos integreren met jouw stack.",
    href: "/diensten/ai-producten",
    features: [
      "Op maat gemaakte AI-oplossingen voor jouw workflows",
      "Integratie met bestaande systemen",
      "Snelle prototyping en iteratie",
      "Productie-klare implementatie",
    ],
  },
  {
    icon: GraduationCap,
    title: "Coaching & Training",
    description:
      "Hands-on coaching voor leiderschap en teams—van strategiesessies tot praktische enablement-programma's.",
    href: "/diensten/coaching-training",
    features: [
      "AI-strategiesessies voor executives",
      "Team enablement programma's",
      "Frameworks voor verantwoorde AI-adoptie",
      "Ondersteuning bij change management",
    ],
  },
  {
    icon: Settings,
    title: "Copilot, ChatGPT & Gemini",
    description:
      "Veilige, conforme uitrol van Microsoft Copilot, OpenAI ChatGPT en Google Gemini binnen jouw organisatie.",
    href: "/diensten/copilot-chatgpt-gemini",
    features: [
      "Enterprise-grade beveiligingssetup",
      "Governance en compliance",
      "Gebruikerstraining en adoptie",
      "ROI-tracking en optimalisatie",
    ],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Automatiseer repetitieve processen, koppel systemen naadloos en creëer realtime inzichten—zodat teams tijd winnen voor strategie.",
    href: "/diensten/ai-automation",
    features: [
      "End-to-end procesautomatisering met AI",
      "Integraties tussen tools en databronnen",
      "Minder fouten en hogere doorlooptijd",
      "Meetbare impact en schaalbare oplossingen",
    ],
  },
  {
    icon: Lightbulb,
    title: "AI Inspiratie",
    description:
      "Inspirerende sessies voor bijeenkomsten, events en workshops—ontdek wat AI écht kan betekenen voor jouw organisatie.",
    href: "/diensten/ai-inspiratie",
    features: [
      "Interactieve presentaties met live demo's",
      "Toegespitst op jouw branche en uitdagingen",
      "Laatste AI-trends en ontwikkelingen",
      "Direct toepasbare inzichten",
    ],
  },
  {
    icon: GraduationCap,
    title: "AI Training",
    description:
      "Praktische trainingen voor ChatGPT, Copilot, Gemini en andere AI-tools—leer slim werken met LLM-modellen.",
    href: "/diensten/ai-training",
    features: [
      "Hands-on trainingen met directe toepassing",
      "ChatGPT, Copilot en Gemini modules",
      "Op maat gemaakt voor jouw sector",
      "Van beginner tot gevorderd niveau",
    ],
  },
  {
    icon: MessageSquare,
    title: "AI Advies",
    description:
      "Deskundig AI-advies om jouw bedrijf te helpen bij het implementeren van slimme oplossingen zoals ChatGPT, Copilot en Gemini.",
    href: "/diensten/ai-advies",
    features: [
      "Strategisch AI-advies op maat",
      "Implementatiebegeleiding van A tot Z",
      "Toolselectie passend bij jouw sector",
      "Training en adoptie voor jouw team",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Complete AI-adoptie
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Van het bouwen van op maat gemaakte AI-producten tot het enablen van jouw teams en
              het implementeren van enterprise-tools—we helpen organisaties AI veilig
              en snel te adopteren.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md lg:p-12"
                >
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold group-hover:text-primary">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Meer info
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-primary py-16 text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Laten we jouw AI-adoptietraject bespreken
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Plan een afspraak om te verkennen hoe Max Motion jouw
              organisatie kan helpen.
            </p>
            <div className="mt-10">
              <CTAButton
                source="services_page"
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
