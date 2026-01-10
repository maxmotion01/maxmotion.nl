import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, Target, Zap, Lightbulb, BookOpen, Brain, Sparkles, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT Training | Max Motion",
  description:
    "Leer hoe je ChatGPT en andere AI-tools effectief inzet in jouw werk. Praktische training in één dagdeel met hands-on ervaring.",
};

function ChatGPTIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  );
}

const expectations = [
  "Hoe ChatGPT werkt en wat de mogelijkheden zijn.",
  "Praktische toepassingen voor jouw dagelijkse werkzaamheden.",
  "Tips en technieken om prompts te schrijven die écht resultaat opleveren.",
  "Hoe je AI-tools combineert voor maximale efficiëntie.",
];

const outcomes = [
  { icon: Brain, text: "Kennis van AI en Machine Learning" },
  { icon: Sparkles, text: "Vaardigheden in het gebruik van AI-tools" },
  { icon: Zap, text: "Methoden om werkprocessen te optimaliseren" },
  { icon: Lightbulb, text: "Technieken voor creatieve innovatie en probleemoplossing" },
  { icon: Target, text: "Strategieën voor het implementeren van AI in de werkomgeving" },
  { icon: BookOpen, text: "Inzicht in ethiek en maatschappelijke impact van AI" },
  { icon: Users, text: "Motivatie en inspiratie voor levenslang leren" },
];

const challenges = [
  { before: "Moeite met het begrijpen en toepassen van AI", after: "Je begrijpt hoe AI werkt en past het moeiteloos toe" },
  { before: "Overweldigd door de snelheid van AI-ontwikkelingen", after: "Je hebt overzicht en weet welke tools relevant zijn" },
  { before: "Inefficiënte processen die tijd kosten", after: "Je bespaart tijd met geoptimaliseerde workflows" },
  { before: "Worstelen met de juiste AI-tool kiezen", after: "Je kiest zelfverzekerd de beste tool voor elke taak" },
  { before: "AI niet optimaal geïntegreerd in je werk", after: "Je benut AI naadloos voor maximale voordelen" },
];

const whyMaxMotion = [
  {
    icon: Users,
    title: "Praktisch en interactief",
    description: "Geen droge theorie, maar hands-on ervaring.",
  },
  {
    icon: Target,
    title: "Op maat gemaakt",
    description: "Training afgestemd op jouw sector en uitdagingen.",
  },
  {
    icon: Zap,
    title: "Direct toepasbaar",
    description: "Je gaat naar huis met concrete kennis en tools.",
  },
];

export default function ChatGPTTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#10a37f] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#0d8a6a] opacity-10 rounded-full blur-3xl"></div>
        
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
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#10a37f] to-[#0d8a6a]">
                <ChatGPTIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-[#10a37f] font-semibold text-sm">
                <Clock className="inline h-4 w-4 mr-1" />
                Één dagdeel
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
              ChatGPT Training – Ontdek de kracht van AI in één dagdeel
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#4A4A4A]">
              Wil jij leren hoe je ChatGPT en andere AI-tools effectief inzet in jouw werk? De ChatGPT Training 
              van Max Motion is speciaal ontwikkeld voor professionals die slimmer willen werken, processen 
              willen optimaliseren en creativiteit willen stimuleren. In één inspirerend dagdeel krijg je alle 
              kennis en vaardigheden die je nodig hebt om AI praktisch toe te passen.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#10a37f] to-[#0d8a6a] hover:from-[#0d8a6a] hover:to-[#10a37f] text-white shadow-xl">
                <Link href="/contact">
                  Boek jouw ChatGPT Training
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
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#10a37f]" />
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#10a37f] to-[#0d8a6a] flex-shrink-0">
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
                <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-green-50 border border-gray-200 shadow-sm">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-[#4A4A4A]">
                      <span className="text-gray-400 line-through text-sm">{item.before}</span>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#10a37f] to-[#0d8a6a] flex-shrink-0">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#10a37f] flex-shrink-0" />
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
                    De ChatGPT Training kan plaatsvinden <strong>op locatie bij jouw organisatie</strong>. 
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
                    className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#10a37f] to-[#0d8a6a] shadow-lg mx-auto mb-4">
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
      <section className="py-16 bg-gradient-to-br from-[#10a37f] via-[#0d8a6a] to-[#0a7a5a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om jouw werk slimmer te maken?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Boek jouw ChatGPT Training vandaag of neem contact op voor een vrijblijvend adviesgesprek.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#10a37f] hover:bg-white/90 shadow-xl"
              >
                <Link href="/contact">Boek jouw ChatGPT Training</Link>
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
    </>
  );
}
