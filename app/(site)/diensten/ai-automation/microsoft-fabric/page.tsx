import Link from "next/link";
import { CheckCircle2, ArrowRight, Database, Zap, Cpu, ShoppingCart, Building2, Factory, Users, Target, TrendingUp } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Fabric Implementatie - Data & Analytics Platform",
  description:
    "Microsoft Fabric is een end-to-end data- en analyticsplatform. Max Motion helpt bij implementatie voor data-integratie, analyse, BI en AI-modellen.",
  keywords: ["Microsoft Fabric", "data platform", "analytics", "business intelligence", "AI data", "data integratie"],
  alternates: {
    canonical: "/diensten/ai-automation/microsoft-fabric",
  },
};

const benefits = [
  { icon: Database, title: "Één platform voor alle data", description: "Geen versnipperde systemen meer. Al je data op één plek." },
  { icon: Zap, title: "Realtime inzichten", description: "Sneller reageren op marktveranderingen met live data." },
  { icon: Cpu, title: "AI-ready", description: "Direct AI-modellen toepassen op jouw data zonder complexe integraties." },
];

const useCases = [
  { 
    icon: ShoppingCart, 
    sector: "Retail", 
    title: "Voorraadoptimalisatie",
    description: "Combineer verkoopdata en klantgedrag om voorraadtekorten te voorkomen en overstock te minimaliseren." 
  },
  { 
    icon: Building2, 
    sector: "Financiële sector", 
    title: "Risico & Compliance",
    description: "Integreer data uit meerdere bronnen voor risicobeoordeling en compliance-rapportages." 
  },
  { 
    icon: Factory, 
    sector: "Productie", 
    title: "Predictive Maintenance",
    description: "Analyseer sensordata om onderhoud te voorspellen en stilstand te minimaliseren." 
  },
];

const features = [
  "Data-integratie vanuit alle bronnen",
  "Real-time analytics en dashboards",
  "Power BI integratie voor rapportages",
  "Data lakehouse architectuur",
  "Machine learning pipelines",
  "Governance en beveiliging ingebouwd",
];

const whyMaxMotion = [
  { icon: Target, title: "Strategie & Roadmap", description: "We analyseren je huidige data-landschap en maken een implementatieplan." },
  { icon: Users, title: "Implementatie & Training", description: "Van technische setup tot gebruikerstraining voor je team." },
  { icon: TrendingUp, title: "Optimalisatie & Support", description: "Continue verbetering en ondersteuning na go-live." },
];

export default function MicrosoftFabricPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0078d4] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#005a9e] opacity-10 rounded-full blur-3xl"></div>
        
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
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#0078d4] to-[#005a9e]">
                <Database className="h-5 w-5 text-white" />
              </div>
              <span className="text-[#0078d4] font-semibold text-sm">Microsoft Fabric</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
              Microsoft Fabric Implementatie
            </h1>
            <p className="mt-2 text-xl text-[#FF6B35] font-medium">
              Jouw data en AI op één krachtig platform
            </p>
            <p className="mt-6 text-xl leading-8 text-[#4A4A4A]">
              Microsoft Fabric is een end-to-end data- en analyticsplatform dat alle data in jouw organisatie 
              samenbrengt in één uniforme omgeving. Het biedt alles wat je nodig hebt voor data-integratie, 
              analyse, business intelligence en AI-modellen. Max Motion helpt je bij de implementatie.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#0078d4] to-[#005a9e] hover:from-[#005a9e] hover:to-[#0078d4] text-white shadow-xl">
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
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-12">Waarom kiezen voor Fabric?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0078d4] to-[#005a9e] shadow-lg mx-auto mb-4">
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
            <p className="text-center text-[#4A4A4A] mb-12">Hoe organisaties Microsoft Fabric inzetten</p>
            <div className="grid gap-6 md:grid-cols-3">
              {useCases.map((useCase) => {
                const Icon = useCase.icon;
                return (
                  <div key={useCase.sector} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0078d4] to-[#005a9e] shadow-lg mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[#0078d4] font-semibold text-sm">{useCase.sector}</span>
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
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-12">Wat biedt Microsoft Fabric?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-blue-50 rounded-xl p-4">
                  <CheckCircle2 className="h-5 w-5 text-[#0078d4] flex-shrink-0" />
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
      <section className="py-16 bg-gradient-to-br from-[#0078d4] via-[#005a9e] to-[#004578] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om je data te transformeren?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Plan een vrijblijvend gesprek om de mogelijkheden van Microsoft Fabric voor jouw organisatie te bespreken.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0078d4] hover:bg-white/90 shadow-xl"
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
