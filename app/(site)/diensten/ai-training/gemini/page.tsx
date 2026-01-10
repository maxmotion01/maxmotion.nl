import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, Target, Zap, Lightbulb, BookOpen, Brain, Sparkles, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { CourseSchema } from "@/components/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Gemini Training - AI van Google Leren Gebruiken",
  description:
    "Leer hoe je Google Gemini effectief inzet voor zoekoptimalisatie, data-analyse en contentcreatie. Praktische training voor professionals.",
  keywords: ["Gemini training", "Google Gemini", "Google AI", "Gemini cursus", "AI training"],
  alternates: {
    canonical: "/diensten/ai-training/gemini",
  },
};

function GeminiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );
}

const expectations = [
  "Hoe Google Gemini werkt en verschilt van andere AI-modellen.",
  "Toepassingen in zoekoptimalisatie en data-analyse.",
  "Effectieve contentcreatie met Gemini.",
  "Integratie van Gemini in jouw dagelijkse workflows.",
];

const outcomes = [
  { icon: Brain, text: "Kennis van Google's AI ecosysteem" },
  { icon: Sparkles, text: "Vaardigheden in multimodale AI" },
  { icon: Zap, text: "Technieken voor snelle content generatie" },
  { icon: Lightbulb, text: "Methoden voor creatieve probleemoplossing" },
  { icon: Target, text: "Strategieën voor zoekoptimalisatie met AI" },
  { icon: BookOpen, text: "Best practices voor Google Workspace integratie" },
  { icon: Users, text: "Tips voor team-brede Gemini adoptie" },
];

const challenges = [
  { before: "Onbekend met Google's AI mogelijkheden", after: "Je kent alle Gemini functies en toepassingen" },
  { before: "Moeite met het kiezen tussen AI-tools", after: "Je weet wanneer Gemini de beste keuze is" },
  { before: "Handmatig zoeken en analyseren", after: "Gemini doet het zware werk voor je" },
  { before: "Tijdrovende contentcreatie", after: "Snelle, kwalitatieve content met AI" },
  { before: "Geen integratie met Google tools", after: "Naadloze workflow in Google Workspace" },
];

const whyMaxMotion = [
  {
    icon: Users,
    title: "Praktisch en interactief",
    description: "Hands-on oefeningen met echte use cases.",
  },
  {
    icon: Target,
    title: "Op maat gemaakt",
    description: "Training afgestemd op jouw sector en behoeften.",
  },
  {
    icon: Zap,
    title: "Direct toepasbaar",
    description: "Je gaat naar huis met concrete skills en workflows.",
  },
];

export default function GeminiTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#4285f4] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#ea4335] opacity-10 rounded-full blur-3xl"></div>
        
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
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4285f4] to-[#ea4335]">
                <GeminiIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-[#4285f4] font-semibold text-sm">
                <Clock className="inline h-4 w-4 mr-1" />
                Één dagdeel
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
              Google Gemini Training – Ontdek de kracht van Google AI
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#4A4A4A]">
              Maak kennis met Google Gemini, het krachtige multimodale AI-model van Google. 
              Leer hoe je Gemini inzet voor zoekoptimalisatie, data-analyse, contentcreatie en meer. 
              In één inspirerend dagdeel krijg je alle kennis om Google's AI optimaal te benutten.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#4285f4] to-[#ea4335] hover:from-[#ea4335] hover:to-[#4285f4] text-white shadow-xl">
                <Link href="/contact">
                  Boek jouw Gemini Training
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E]">Wat kun je verwachten van deze training?</h2>
            <p className="mt-4 text-lg text-[#4A4A4A]">Tijdens deze interactieve sessie leer je:</p>
            <div className="mt-8 space-y-4">
              {expectations.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#4285f4]" />
                  <span className="text-lg text-[#4A4A4A]">{item}</span>
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#4285f4] to-[#ea4335] flex-shrink-0">
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

      {/* Transformation Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center">Jouw transformatie met deze training</h2>
            <p className="mt-4 text-lg text-[#4A4A4A] text-center">Van uitdaging naar oplossing – dit is wat je kunt verwachten:</p>
            <div className="mt-10 space-y-4">
              {challenges.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-red-50 border border-gray-200 shadow-sm">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-[#4A4A4A]">
                      <span className="text-gray-400 line-through text-sm">{item.before}</span>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4285f4] to-[#ea4335] flex-shrink-0">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#4285f4] flex-shrink-0" />
                      <span className="text-[#1A1F2E] font-medium">{item.after}</span>
                    </div>
                  </div>
                </div>
              ))}
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
                    De Gemini Training kan plaatsvinden <strong>op locatie bij jouw organisatie</strong>. 
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
                    className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-red-50 to-white p-6 shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#4285f4] to-[#ea4335] shadow-lg mx-auto mb-4">
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
      <section className="py-16 bg-gradient-to-br from-[#4285f4] via-[#9b59b6] to-[#ea4335] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om Google AI te benutten?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Boek jouw Gemini Training vandaag of neem contact op voor een vrijblijvend adviesgesprek.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#4285f4] hover:bg-white/90 shadow-xl"
              >
                <Link href="/contact">Boek jouw Gemini Training</Link>
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
        name="Google Gemini Training"
        description="Leer hoe je Google Gemini effectief inzet voor zoekoptimalisatie, data-analyse en contentcreatie. Praktische training voor professionals."
        url="https://maxmotion.nl/diensten/ai-training/gemini"
        duration="PT4H"
      />
    </>
  );
}
