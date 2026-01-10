import Link from "next/link";
import { CheckCircle2, Lightbulb, Settings, Wrench, GraduationCap, ArrowRight, Sparkles, Target, Rocket } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Advies | Max Motion",
  description:
    "Deskundig AI-advies voor jouw organisatie. Max Motion helpt bij het implementeren van ChatGPT, Microsoft Copilot, Google Gemini en andere AI-tools.",
};

const services = [
  {
    icon: Target,
    title: "Strategisch AI-advies",
    description:
      "Wij analyseren jouw bedrijfsprocessen en adviseren welke AI-oplossingen het meeste rendement opleveren.",
  },
  {
    icon: Settings,
    title: "Implementatiebegeleiding",
    description:
      "Van planning tot uitvoering – wij zorgen dat AI naadloos aansluit op jouw bestaande systemen.",
  },
  {
    icon: Lightbulb,
    title: "Toolselectie op maat",
    description:
      "We helpen je kiezen uit de beste AI-tools die passen bij jouw sector en doelen.",
  },
  {
    icon: GraduationCap,
    title: "Training en adoptie",
    description:
      "We zorgen dat jouw team begrijpt hoe AI werkt en hoe het optimaal ingezet kan worden.",
  },
];

const whyMaxMotion = [
  {
    icon: Sparkles,
    title: "Expertise in toonaangevende AI-technologieën",
    description: "ChatGPT, Copilot, Gemini en meer.",
  },
  {
    icon: Wrench,
    title: "Praktische aanpak",
    description: "Geen theoretische verhalen, maar concrete oplossingen.",
  },
  {
    icon: Rocket,
    title: "Toekomstbestendig",
    description: "Wij helpen je niet alleen vandaag, maar bereiden je voor op de AI van morgen.",
  },
];

export default function AIAdviesPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              AI Advies voor Bedrijven
            </h1>
            <p className="mt-2 text-xl font-medium text-[#FF6B35]">
              Max Motion helpt jou vooruit
            </p>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              De wereld van kunstmatige intelligentie ontwikkelt zich razendsnel. Voor veel 
              organisaties is het een uitdaging om de juiste keuzes te maken en AI effectief 
              te integreren in hun processen. Max Motion biedt deskundig AI-advies om jouw 
              bedrijf te helpen bij het implementeren van slimme oplossingen zoals ChatGPT, 
              Microsoft Copilot, Google Gemini en andere AI-tools die jouw organisatie een 
              stap verder brengen.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Plan een gratis AI-adviesgesprek
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Wat doen wij voor jouw organisatie?</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Waarom AI-advies van Max Motion?</h2>
            <div className="mt-10 space-y-8">
              {whyMaxMotion.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#FF6B35]/10">
                      <Icon className="h-5 w-5 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-primary py-16 text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Klaar om jouw organisatie slimmer te maken?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Plan een gratis AI-adviesgesprek of neem contact op voor meer informatie.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/contact">Plan een gratis AI-adviesgesprek</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="border border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/contact">Neem contact op</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
