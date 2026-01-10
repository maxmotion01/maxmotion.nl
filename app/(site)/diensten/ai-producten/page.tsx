import { CheckCircle2, Code, Zap, Shield, TrendingUp } from "lucide-react";
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
  title: "AI-producten | Max Motion",
  description: "Bouw pragmatische AI-producten en interne tools die échte problemen oplossen. Van prototype tot productie in weken, niet maanden.",
};

const whatYouGet = [
  "Discovery-workshops om high-impact use cases te identificeren",
  "Snelle prototyping met echte data en workflows",
  "Productie-klare code met tests en documentatie",
  "Integratie met jouw bestaande tech stack",
  "Beveiligingsreviews en compliance-checks",
  "Doorlopende ondersteuning en iteratie",
];

const process = [
  {
    icon: Code,
    title: "Discovery & Scoping",
    description:
      "We beginnen met het begrijpen van jouw workflows, pijnpunten en technische beperkingen. Samen identificeren we de AI-kansen met de grootste impact.",
  },
  {
    icon: Zap,
    title: "Snelle Prototyping",
    description:
      "Bouw een werkend prototype in weken, niet maanden. Test met echte gebruikers en data om de aanpak te valideren voor opschaling.",
  },
  {
    icon: Shield,
    title: "Productie-implementatie",
    description:
      "Lever productie-klare code met beveiliging, monitoring en compliance ingebouwd. We regelen integratie, testen en uitrol.",
  },
  {
    icon: TrendingUp,
    title: "Meten & Itereren",
    description:
      "Track metrics die ertoe doen—efficiëntiewinst, tijdsbesparing, foutreductie. Continue verbetering gebaseerd op echte gebruiksdata.",
  },
];

const faqs = [
  {
    question: "Hoe lang duurt het om een AI-product te bouwen?",
    answer:
      "De meeste projecten gaan van discovery tot werkend prototype in 4-8 weken. Productie-implementatie voegt meestal nog 2-4 weken toe, afhankelijk van integratiecomplexiteit en beveiligingseisen.",
  },
  {
    question: "Werken jullie met onze bestaande tech stack?",
    answer:
      "Ja. We integreren met jouw huidige systemen, API's en databronnen. Of je nu op AWS, Azure, GCP of on-prem zit, we passen ons aan jouw omgeving aan.",
  },
  {
    question: "Wat gebeurt er na de initiële build?",
    answer:
      "We bieden doorlopende ondersteuning, monitoring en iteratie. Veel klanten beginnen met één AI-product en breiden uit naar extra use cases als ze resultaten zien.",
  },
];

export default function AIProductsPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              AI-producten bouwen die werken
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Van prototype tot productie in weken, niet maanden. We bouwen pragmatische AI-oplossingen die naadloos integreren met jouw stack en échte problemen oplossen.
            </p>
            <div className="mt-8">
              <CTAButton source="ai_products_hero" size="lg" />
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
            <h2 className="text-3xl font-bold">Ons proces</h2>
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
            <h2 className="text-3xl font-bold">Beveiliging & Compliance</h2>
            <div className="mt-8 space-y-4 text-lg text-muted-foreground">
              <p>
                Elk AI-product dat we bouwen bevat beveiligingsreviews, data
                governance en compliance-checks vanaf dag één.
              </p>
              <p>
                We volgen best practices uit de industrie voor dataverwerking, model
                beveiliging en toegangscontrole. SOC 2, AVG en HIPAA compliance
                ondersteuning beschikbaar.
              </p>
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
              Plan een meeting om jouw AI-product use case te bespreken.
            </p>
            <div className="mt-10">
              <CTAButton
                source="ai_products_final"
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
