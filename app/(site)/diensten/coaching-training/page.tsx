import { CheckCircle2, Users, Target, BookOpen, Award } from "lucide-react";
import Image from "next/image";
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
  title: "Coaching & Training | Max Motion",
  description: "Hands-on AI coaching die teams transformeert van sceptici naar power users. Van strategie tot implementatie, met governance ingebouwd.",
};

const whatYouGet = [
  "AI-strategiesessies voor executives",
  "Team enablement en hands-on training",
  "Frameworks voor verantwoorde AI-adoptie",
  "Change management en communicatie-ondersteuning",
  "Op maat gemaakte trainingsmaterialen en playbooks",
  "Doorlopende coaching en office hours",
];

const process = [
  {
    icon: Target,
    title: "Beoordelen & Afstemmen",
    description:
      "Begrijp de AI-volwassenheid, doelen en uitdagingen van jouw organisatie. Stem leiderschap af op visie en prioriteiten.",
  },
  {
    icon: BookOpen,
    title: "Trainingsprogramma Ontwerpen",
    description:
      "Creëer een op maat gemaakt curriculum gebaseerd op de rollen, technisch niveau en use cases van jouw team. Mix van workshops, hands-on labs en zelfstudie.",
  },
  {
    icon: Users,
    title: "Leveren & Enablen",
    description:
      "Verzorg interactieve sessies met echte voorbeelden uit jouw domein. Geef teams de tools om AI-tools zelfverzekerd en verantwoord te gebruiken.",
  },
  {
    icon: Award,
    title: "Meten & Borgen",
    description:
      "Track adoptie-metrics, verzamel feedback en bied doorlopende ondersteuning. Bouw interne champions om momentum te behouden.",
  },
];

const faqs = [
  {
    question: "Wie moeten de training volgen?",
    answer:
      "We maken programma's op maat voor verschillende doelgroepen: strategiesessies voor executives, hands-on enablement voor practitioners, en bewustzijnssessies voor bredere teams. De meeste organisaties beginnen met afstemming op leiderschapsniveau, daarna uitrol naar teams.",
  },
  {
    question: "Hoe lang duurt een typisch programma?",
    answer:
      "Executive workshops duren meestal 1-2 dagen. Team enablement-programma's lopen 4-8 weken met wekelijkse sessies en hands-on oefeningen. We passen de tijdlijn aan aan het tempo en de beschikbaarheid van jouw organisatie.",
  },
  {
    question: "Bieden jullie doorlopende ondersteuning na de training?",
    answer:
      "Ja. We bieden office hours, coachingssessies en toegang tot bijgewerkte materialen. Veel klanten schakelen ons in voor kwartaal-refreshers naarmate AI-tools en best practices evolueren.",
  },
];

export default function AICoachingTrainingPage() {
  return (
    <>
      {/* Hero Section with Curved Gradient Background */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-32">
        {/* Curved gradient background - inspired by Profico Academy */}
        <div className="absolute inset-0 -z-10">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20" />
          
          {/* Curved gradient overlay - creates the arc effect */}
          <div className="absolute inset-0">
            <svg className="absolute h-full w-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
              <defs>
                <linearGradient id="curvedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.4" />
                  <stop offset="25%" stopColor="#F06292" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="#BA68C8" stopOpacity="0.3" />
                  <stop offset="75%" stopColor="#4FC3F7" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {/* Curved shape */}
              <path
                d="M0,400 Q360,200 720,400 T1440,400 L1440,800 L0,800 Z"
                fill="url(#curvedGradient)"
              />
            </svg>
          </div>
          
          {/* Additional gradient blobs for depth */}
          <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-orange-500/30 to-pink-500/30 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-3xl" />
        </div>

        <Container>
          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Van AI-scepticus naar power user
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
                Hands-on coaching die teams transformeert. Van executive strategiesessies tot praktische enablement—met governance en AI Act-bewustzijn ingebouwd.
              </p>
              <div className="mt-8">
                <CTAButton source="coaching_training_hero" size="lg" />
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-2xl backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                  alt="Team training en coaching sessie"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover opacity-80"
                  priority
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-gray-900/80 backdrop-blur-md p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Teams getraind</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-gray-900/30 py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white">Wat je krijgt</h2>
            <ul className="mt-8 space-y-4">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-lg text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-background py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white">Onze aanpak</h2>
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
                      <h3 className="text-xl font-semibold text-white">
                        {idx + 1}. {step.title}
                      </h3>
                      <p className="mt-2 text-gray-300">
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
            <h2 className="text-3xl font-bold">Verantwoorde AI-adoptie</h2>
            <div className="mt-8 space-y-4 text-lg text-muted-foreground">
              <p>
                We benadrukken verantwoorde AI-praktijken in elk trainingsprogramma:
                dataprivacy, bias-bewustzijn, transparantie en governance.
              </p>
              <p>
                Teams leren niet alleen hoe ze AI-tools moeten gebruiken, maar wanneer ze deze moeten gebruiken,
                hoe ze outputs moeten valideren en hoe ze AI-ondersteund werk
                moeten communiceren naar stakeholders.
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
              Plan een meeting om jouw trainingsprogramma te bespreken.
            </p>
            <div className="mt-10">
              <CTAButton
                source="coaching_training_final"
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
