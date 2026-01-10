import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, Target, Zap, Lightbulb, BookOpen, Brain, Sparkles, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { CourseSchema } from "@/components/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Copilot Training - Werk Slimmer met AI",
  description:
    "Leer hoe je Microsoft Copilot effectief inzet in Word, Excel, PowerPoint en Teams. Praktische training voor maximale productiviteit.",
  keywords: ["Copilot training", "Microsoft Copilot", "Microsoft 365 AI", "Copilot cursus"],
  alternates: {
    canonical: "/diensten/ai-training/copilot",
  },
};

function CopilotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );
}

const expectations = [
  "Hoe Microsoft Copilot werkt binnen Microsoft 365.",
  "Automatiseren van repetitieve taken in Word, Excel en PowerPoint.",
  "Slimme manieren om data te analyseren en rapporten te maken.",
  "Effectief samenwerken met Copilot in Teams en Outlook.",
];

const outcomes = [
  { icon: Brain, text: "Diepgaande kennis van Copilot functionaliteiten" },
  { icon: Sparkles, text: "Vaardigheden om documenten sneller te maken" },
  { icon: Zap, text: "Technieken voor data-analyse in Excel" },
  { icon: Lightbulb, text: "Methoden voor effectieve e-mail en vergaderingen" },
  { icon: Target, text: "Strategieën voor workflow automatisering" },
  { icon: BookOpen, text: "Best practices voor veilig Copilot gebruik" },
  { icon: Users, text: "Tips voor team-brede Copilot adoptie" },
];

const challenges = [
  { before: "Uren besteden aan handmatige documenten", after: "Documenten in minuten met Copilot" },
  { before: "Complexe Excel formules uitzoeken", after: "Copilot schrijft je formules en analyseert data" },
  { before: "Lange e-mails en samenvattingen schrijven", after: "Copilot maakt samenvattingen en concepten" },
  { before: "Vergaderingen zonder duidelijke actiepunten", after: "Automatische notulen en follow-ups" },
  { before: "Presentaties maken kost veel tijd", after: "PowerPoint slides in enkele klikken" },
];

const whyMaxMotion = [
  {
    icon: Users,
    title: "Praktisch en interactief",
    description: "Hands-on oefeningen met jouw eigen Microsoft 365 omgeving.",
  },
  {
    icon: Target,
    title: "Op maat gemaakt",
    description: "Training afgestemd op jouw sector en werkprocessen.",
  },
  {
    icon: Zap,
    title: "Direct toepasbaar",
    description: "Je gaat naar huis met concrete skills en workflows.",
  },
];

export default function CopilotTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0078d4] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#005a9e] opacity-10 rounded-full blur-3xl"></div>
        
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
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#0078d4] to-[#005a9e]">
                <CopilotIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-[#0078d4] font-semibold text-sm">
                <Clock className="inline h-4 w-4 mr-1" />
                Één dagdeel
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
              Microsoft Copilot Training – Werk slimmer met AI in Microsoft 365
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#4A4A4A]">
              Ontdek hoe Microsoft Copilot jouw werkprocessen kan transformeren. Leer hoe je AI inzet 
              in Word, Excel, PowerPoint, Outlook en Teams om sneller en effectiever te werken. 
              In één inspirerend dagdeel krijg je alle kennis en vaardigheden om Copilot optimaal te benutten.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#0078d4] to-[#005a9e] hover:from-[#005a9e] hover:to-[#0078d4] text-white shadow-xl">
                <Link href="/contact">
                  Boek jouw Copilot Training
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
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#0078d4]" />
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0078d4] to-[#005a9e] flex-shrink-0">
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
                <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-blue-50 border border-gray-200 shadow-sm">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-[#4A4A4A]">
                      <span className="text-gray-400 line-through text-sm">{item.before}</span>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#0078d4] to-[#005a9e] flex-shrink-0">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0078d4] flex-shrink-0" />
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
                    De Copilot Training kan plaatsvinden <strong>op locatie bij jouw organisatie</strong>. 
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
                    className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0078d4] to-[#005a9e] shadow-lg mx-auto mb-4">
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
      <section className="py-16 bg-gradient-to-br from-[#0078d4] via-[#005a9e] to-[#004578] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om productiever te werken met Copilot?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Boek jouw Copilot Training vandaag of neem contact op voor een vrijblijvend adviesgesprek.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0078d4] hover:bg-white/90 shadow-xl"
              >
                <Link href="/contact">Boek jouw Copilot Training</Link>
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
        name="Microsoft Copilot Training"
        description="Leer hoe je Microsoft Copilot effectief inzet in Word, Excel, PowerPoint en Teams. Praktische training voor maximale productiviteit."
        url="https://maxmotion.nl/diensten/ai-training/copilot"
        duration="PT4H"
      />
    </>
  );
}
