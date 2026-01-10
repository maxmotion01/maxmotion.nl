import Link from "next/link";
import { CheckCircle2, ArrowRight, Cpu, Zap, Shield, TrendingUp, MessageSquare, BarChart, Users, Target, Settings } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Foundry Implementatie - AI Innovatie Platform",
  description:
    "Microsoft Foundry is een AI-innovatieplatform voor het ontwikkelen, testen en uitrollen van AI-oplossingen. Max Motion helpt bij veilige en compliant AI-implementatie.",
  keywords: ["Microsoft Foundry", "AI platform", "AI development", "AI governance", "AI compliance", "AI Act"],
  alternates: {
    canonical: "/diensten/ai-automation/microsoft-foundry",
  },
};

const benefits = [
  { icon: Zap, title: "Snelle implementatie", description: "Minder tijd kwijt aan complexe AI-ontwikkeling dankzij kant-en-klare frameworks." },
  { icon: Shield, title: "Compliance & governance", description: "Voldoe eenvoudig aan wetgeving zoals de EU AI Act met ingebouwde tools." },
  { icon: TrendingUp, title: "Schaalbare AI-oplossingen", description: "Groeit mee met jouw organisatie van pilot tot enterprise-schaal." },
];

const useCases = [
  { 
    icon: MessageSquare, 
    sector: "Klantenservice", 
    title: "AI Chatbots",
    description: "Ontwikkel AI-chatbots die 80% van standaardvragen afhandelen en klanttevredenheid verhogen." 
  },
  { 
    icon: BarChart, 
    sector: "Marketing", 
    title: "Personalisatie",
    description: "Gebruik AI-modellen om campagnes te personaliseren en conversies te verhogen." 
  },
  { 
    icon: Users, 
    sector: "HR & Recruitment", 
    title: "Slimme Matching",
    description: "Automatiseer CV-screening en match kandidaten sneller met vacatures." 
  },
];

const features = [
  "Kant-en-klare AI frameworks",
  "Governance en compliance tools",
  "Veilige model deployment",
  "Monitoring en logging",
  "Role-based access control",
  "Integratie met Azure services",
];

const whyMaxMotion = [
  { icon: Target, title: "Use-case identificatie", description: "We helpen de juiste AI-toepassingen te vinden met de hoogste impact." },
  { icon: Settings, title: "Technische implementatie", description: "Van model ontwikkeling tot productie-ready deployment." },
  { icon: Shield, title: "Governance & Compliance", description: "Zorg dat je AI voldoet aan de EU AI Act en interne richtlijnen." },
];

export default function MicrosoftFoundryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#7719aa] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#5c0099] opacity-10 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-3xl">
            <Link 
              href="/diensten/ai-automation" 
              className="inline-flex items-center text-[#4A4A4A] hover:text-[#FF6B35] transition mb-6"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Terug naar AI Automation
            </Link>
            
            <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7719aa] to-[#5c0099]">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <span className="text-[#7719aa] font-semibold text-sm">Microsoft Foundry</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
              Microsoft Foundry Implementatie
            </h1>
            <p className="mt-2 text-xl text-[#FF6B35] font-medium">
              AI-innovatie met governance en compliance
            </p>
            <p className="mt-6 text-xl leading-8 text-[#4A4A4A]">
              Microsoft Foundry is een AI-innovatieplatform dat organisaties helpt om AI-oplossingen te ontwikkelen, 
              testen en veilig uit te rollen. Het biedt kant-en-klare frameworks, governance-tools en 
              compliance-functionaliteiten, zodat AI niet alleen krachtig, maar ook verantwoord wordt toegepast.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#7719aa] to-[#5c0099] hover:from-[#5c0099] hover:to-[#7719aa] text-white shadow-xl">
                <Link href="/contact">
                  Plan een gesprek
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-12">Waarom kiezen voor Foundry?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#7719aa] to-[#5c0099] shadow-lg mx-auto mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1F2E]">{benefit.title}</h3>
                    <p className="mt-2 text-[#4A4A4A] text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-4">Praktische use-cases</h2>
            <p className="text-center text-[#4A4A4A] mb-12">Hoe organisaties Microsoft Foundry inzetten</p>
            <div className="grid gap-6 md:grid-cols-3">
              {useCases.map((useCase) => {
                const Icon = useCase.icon;
                return (
                  <div key={useCase.sector} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7719aa] to-[#5c0099] shadow-lg mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[#7719aa] font-semibold text-sm">{useCase.sector}</span>
                    <h3 className="text-lg font-semibold text-[#1A1F2E] mt-1">{useCase.title}</h3>
                    <p className="mt-2 text-[#4A4A4A] text-sm">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-12">Wat biedt Microsoft Foundry?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-purple-50 rounded-xl p-4">
                  <CheckCircle2 className="h-5 w-5 text-[#7719aa] flex-shrink-0" />
                  <span className="text-[#1A1F2E] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Max Motion Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-12">Hoe Max Motion helpt</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {whyMaxMotion.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] shadow-lg mx-auto mb-4">
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
      <section className="py-16 bg-gradient-to-br from-[#7719aa] via-[#5c0099] to-[#4a0080] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om AI verantwoord in te zetten?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Plan een vrijblijvend gesprek om de mogelijkheden van Microsoft Foundry voor jouw organisatie te bespreken.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#7719aa] hover:bg-white/90 shadow-xl"
              >
                <Link href="/contact">Plan een gesprek</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-2 border-white text-white bg-transparent hover:bg-white/10"
              >
                <Link href="/#ai-scan">Gratis AI Scan</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
