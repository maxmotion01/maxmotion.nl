import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, Target, Zap, Shield, FileText, Scale, AlertTriangle, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { CourseSchema } from "@/components/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EU AI Act Training - Compliance en Wetgeving",
  description:
    "Bereid je organisatie voor op de EU AI Act. Leer over compliance, risicobeoordeling en governance voor verantwoord AI-gebruik.",
  keywords: ["EU AI Act", "AI wetgeving", "AI compliance", "AI governance", "AI regelgeving"],
  alternates: {
    canonical: "/diensten/ai-training/eu-ai-act",
  },
};

function AIActIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12h6"/>
      <path d="M12 9v6"/>
    </svg>
  );
}

const learnings = [
  {
    title: "Compliance in de praktijk",
    description: "Je leert hoe je jouw processen en systemen inricht zodat ze voldoen aan de eisen van de AI Act. Denk aan documentatie, transparantie en verantwoord gebruik van AI.",
  },
  {
    title: "Risicobeoordeling en beheersing",
    description: "We laten zien hoe je risico's identificeert, beoordeelt en beheerst. Je krijgt tools en methodieken om AI-toepassingen veilig en betrouwbaar te maken.",
  },
  {
    title: "Governance en interne richtlijnen",
    description: "Je leert hoe je een governance-structuur opzet die aansluit bij de wetgeving. Inclusief rollen, verantwoordelijkheden en interne controles.",
  },
  {
    title: "Implementatieplan",
    description: "We helpen je een concreet stappenplan op te stellen: van beleid tot uitvoering. Zo kun je direct aan de slag om compliant te worden.",
  },
  {
    title: "Praktische templates en best practices",
    description: "Je krijgt toegang tot checklists, voorbeeldbeleid en praktische formats die je kunt gebruiken om jouw organisatie klaar te maken voor de AI Act.",
  },
];

const outcomes = [
  { icon: Shield, text: "Kennis van de EU AI Act vereisten" },
  { icon: Scale, text: "Inzicht in risicocategorieën" },
  { icon: FileText, text: "Documentatie en compliance skills" },
  { icon: AlertTriangle, text: "Risicobeoordeling methodieken" },
  { icon: Target, text: "Governance structuur opzetten" },
  { icon: Users, text: "Rollen en verantwoordelijkheden bepalen" },
];

const whyMaxMotion = [
  {
    icon: Users,
    title: "Praktisch en interactief",
    description: "Geen droge wetgeving, maar concrete toepassing.",
  },
  {
    icon: Target,
    title: "Op maat gemaakt",
    description: "Training afgestemd op jouw sector en AI-gebruik.",
  },
  {
    icon: Zap,
    title: "Direct toepasbaar",
    description: "Je gaat naar huis met templates en een actieplan.",
  },
];

export default function EUAIActTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#003399] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FFCC00] opacity-10 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-3xl">
            <Link 
              href="/diensten/ai-training" 
              className="inline-flex items-center text-[#4A4A4A] hover:text-[#FF6B35] transition mb-6"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Terug naar AI Trainingen
            </Link>
            
            <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#003399] to-[#FFCC00]">
                <AIActIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-[#003399] font-semibold text-sm">
                <Clock className="inline h-4 w-4 mr-1" />
                Één dagdeel
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
              EU AI Act Training – Bereid je voor op de nieuwe AI-wetgeving
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#4A4A4A]">
              De EU AI Act brengt nieuwe regels en verplichtingen voor het gebruik van kunstmatige intelligentie. 
              Overheden, bedrijven en non-profitorganisaties moeten zich voorbereiden op deze wetgeving om 
              compliant te blijven en risico's te beperken. Deze training maakt je klaar voor de toekomst.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#003399] to-[#0055cc] hover:from-[#0055cc] hover:to-[#003399] text-white shadow-xl">
                <Link href="/contact">
                  Boek jouw EU AI Act Training
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E]">Wat leer je in deze training?</h2>
            <p className="mt-4 text-lg text-[#4A4A4A]">
              Onze training is volledig gericht op het praktisch toepassen van de EU AI Act binnen jouw organisatie. 
              Na deze sessie weet je niet alleen wat er nodig is, maar kun je het ook direct implementeren.
            </p>
            <div className="mt-10 space-y-6">
              {learnings.map((item) => (
                <div key={item.title} className="rounded-2xl border-2 border-gray-200 bg-gradient-to-r from-blue-50 to-yellow-50 p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#003399]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A1F2E]">{item.title}</h3>
                      <p className="mt-2 text-[#4A4A4A]">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E]">Na deze training beschik je over:</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 rounded-xl border-2 border-gray-200 bg-white p-4 shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#003399] to-[#FFCC00] flex-shrink-0">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-[#1A1F2E] font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center">Voor wie is deze training?</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#003399] to-[#0055cc] shadow-lg mx-auto mb-4">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1F2E]">Overheden</h3>
                <p className="mt-2 text-[#4A4A4A] text-sm">Gemeenten, provincies en rijksoverheid die AI inzetten.</p>
              </div>
              <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#003399] to-[#0055cc] shadow-lg mx-auto mb-4">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1F2E]">Bedrijven</h3>
                <p className="mt-2 text-[#4A4A4A] text-sm">Organisaties die AI gebruiken of ontwikkelen.</p>
              </div>
              <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#003399] to-[#0055cc] shadow-lg mx-auto mb-4">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1F2E]">Non-profits</h3>
                <p className="mt-2 text-[#4A4A4A] text-sm">Stichtingen en NGO's die verantwoord AI willen inzetten.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1F2E]">Locatie</h2>
                  <p className="mt-3 text-[#4A4A4A]">
                    De EU AI Act Training kan plaatsvinden <strong>op locatie bij jouw organisatie</strong>. 
                    Wil je liever een inspirerende omgeving buiten kantoor? In overleg zoekt Max Motion een 
                    <strong> unieke trainingslocatie</strong> die perfect past bij jouw team en de doelstellingen van de training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Max Motion Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-12">Waarom kiezen voor Max Motion?</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {whyMaxMotion.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-yellow-50 to-white p-6 shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#003399] to-[#FFCC00] shadow-lg mx-auto mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1F2E]">{item.title}</h3>
                    <p className="mt-2 text-[#4A4A4A] text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#003399] via-[#0055cc] to-[#003399] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#FFCC00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om compliant te worden?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Boek jouw EU AI Act Training vandaag of neem contact op voor een vrijblijvend adviesgesprek.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#FFCC00] text-[#003399] hover:bg-[#FFD700] shadow-xl font-semibold"
              >
                <Link href="/contact">Boek jouw EU AI Act Training</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-2 border-white text-white bg-transparent hover:bg-white/10"
              >
                <Link href="/contact">Vrijblijvend adviesgesprek</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CourseSchema
        name="EU AI Act Training"
        description="Bereid je organisatie voor op de EU AI Act. Leer over compliance, risicobeoordeling en governance voor verantwoord AI-gebruik."
        url="https://maxmotion.nl/diensten/ai-training/eu-ai-act"
        duration="PT4H"
      />
    </>
  );
}
