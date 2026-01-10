import Link from "next/link";
import { CheckCircle2, FileText, MessageSquare, Wrench, ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation - Automatiseer Bedrijfsprocessen",
  description:
    "AI Automation helpt je processen te vereenvoudigen, systemen naadloos te koppelen en repetitieve taken te automatiseren. Bespaar tijd en kosten met slimme AI-oplossingen.",
  keywords: ["AI automation", "proces automatisering", "workflow automatisering", "AI integratie", "bedrijfsprocessen"],
  alternates: {
    canonical: "/diensten/ai-automation",
  },
};

const whyAutomation = [
  {
    title: "Kostenbesparing",
    description: "Minder handmatige fouten en lagere operationele kosten.",
  },
  {
    title: "Schaalbaarheid",
    description: "Groeien zonder extra personeelsdruk.",
  },
  {
    title: "Realtime inzichten",
    description: "Snelle en nauwkeurige data-analyse voor betere beslissingen.",
  },
];

const solutions = [
  {
    icon: FileText,
    title: "Automatische factuurverwerking",
    description:
      "Voor een logistiek bedrijf hebben we een AI-oplossing ontwikkeld die inkomende facturen automatisch herkent, valideert en verwerkt. Dit bespaart gemiddeld 40 uur per maand aan handmatig werk.",
  },
  {
    icon: MessageSquare,
    title: "Slimme klantenservice chatbot",
    description:
      "Bij een e-commerce organisatie hebben we een AI-chatbot geïmplementeerd die 80% van de standaardvragen zelfstandig afhandelt. Dit verhoogde klanttevredenheid en verlaagde wachttijden drastisch.",
  },
  {
    icon: Wrench,
    title: "Predictive maintenance in productie",
    description:
      "Voor een productiebedrijf hebben we een AI-model gebouwd dat machineonderhoud voorspelt. Hierdoor daalde het aantal storingen met 30%, wat direct leidde tot hogere productiviteit.",
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              AI Automation: de sleutel tot efficiëntie en groei
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Bij Max Motion geloven we dat AI Automation de toekomst is voor bedrijven die slimmer willen werken.
              Door kunstmatige intelligentie te integreren in bedrijfsprocessen, helpen we organisaties om
              efficiënter te werken, processen te vereenvoudigen en systemen naadloos op elkaar aan te sluiten.
              Het resultaat: meer tijd voor strategische beslissingen en minder tijd voor repetitieve taken.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Gratis quick scan aanvragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                We brengen kansen, quick wins en risico’s in kaart—zonder verplichtingen.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Waarom AI Automation?</h2>
            <div className="mt-10 space-y-8">
              {whyAutomation.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Drie praktische oplossingen die wij hebben geïmplementeerd</h2>
            <div className="mt-10 space-y-6">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={solution.title}
                    className="rounded-2xl border border-border bg-card p-8 shadow-sm"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{solution.title}</h3>
                        <p className="mt-2 text-muted-foreground">{solution.description}</p>
                      </div>
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
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <p className="text-lg leading-8">
                “Dankzij Max Motion hebben we onze processen volledig geautomatiseerd. De AI-oplossingen besparen ons
                niet alleen tijd, maar geven ons ook realtime inzichten die cruciaal zijn voor onze groei. Het team
                van Max Motion denkt mee en levert maatwerk dat écht werkt.”
              </p>
              <p className="mt-6 font-semibold">
                — Koen van Lierop, Sales and Brand Manager bij Reedge
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-primary py-16 text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wil je weten waar AI Automation jouw team direct tijd oplevert?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Vraag een gratis quick scan aan—je krijgt een helder overzicht van kansen en een pragmatische eerste
              roadmap.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/contact">Gratis quick scan aanvragen</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
