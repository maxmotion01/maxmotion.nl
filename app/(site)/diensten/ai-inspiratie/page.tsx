import Link from "next/link";
import { CheckCircle2, Lightbulb, TrendingUp, History, Target, Sparkles, Users, Zap, BarChart, Megaphone, Cog, Database, ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Inspiratie - Interactieve AI Sessies voor Teams",
  description:
    "AI Inspiratie Sessies voor bedrijven en organisaties. Ontdek wat AI écht kan betekenen met praktische voorbeelden, live demo's en hands-on workshops.",
  keywords: ["AI inspiratie", "AI workshop", "AI demo", "AI presentatie", "AI mogelijkheden", "AI voor bedrijven"],
  alternates: {
    canonical: "/diensten/ai-inspiratie",
  },
};

const expectations = [
  {
    icon: Zap,
    title: "Werken met AI in de praktijk",
    description: "Hoe AI jouw dagelijkse processen kan verbeteren.",
  },
  {
    icon: TrendingUp,
    title: "Laatste ontwikkelingen",
    description: "Ontdek de nieuwste trends en technologieën.",
  },
  {
    icon: History,
    title: "Geschiedenis van AI",
    description: "Van de eerste algoritmes tot de huidige revolutie.",
  },
  {
    icon: Target,
    title: "Kansen voor jouw organisatie",
    description: "Hoe AI kan bijdragen aan groei, efficiëntie en innovatie.",
  },
];

const whyMaxMotion = [
  {
    title: "Interactief en inspirerend",
    description: "Geen saaie presentaties, maar praktische voorbeelden en live demo's.",
  },
  {
    title: "Toegespitst op jouw branche",
    description: "Wij stemmen de inhoud af op jouw sector en uitdagingen.",
  },
  {
    title: "Direct toepasbare inzichten",
    description: "Je gaat naar huis met concrete ideeën om AI in te zetten.",
  },
];

const topics = [
  {
    icon: Megaphone,
    title: "AI in Marketing",
    description: "Hoe AI campagnes slimmer maakt.",
  },
  {
    icon: Cog,
    title: "AI in Operations",
    description: "Automatisering van processen en kostenbesparing.",
  },
  {
    icon: Database,
    title: "AI en Data",
    description: "Hoe je data omzet in waardevolle inzichten.",
  },
];

export default function AIInspiratiePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF6B35] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F7931E] opacity-10 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="inline-block bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <span className="text-[#FF6B35] font-semibold text-sm">
                <Lightbulb className="inline h-4 w-4 mr-2" />
                Inspiratie & Kennis
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
              AI Inspiratie: ontdek de kracht van kunstmatige intelligentie
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#4A4A4A]">
              Bij Max Motion geloven we dat kennis de sleutel is tot innovatie. Daarom bieden wij AI Inspiratie Sessies 
              aan voor bedrijven en organisaties die willen begrijpen wat AI écht kan betekenen. Deze sessies zijn ideaal 
              voor bijeenkomsten, events en interne workshops en geven deelnemers een helder beeld van de mogelijkheden van AI.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white shadow-xl">
                <Link href="/contact">
                  Plan een inspiratiesessie
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
            <h2 className="text-3xl font-bold text-[#1A1F2E]">Wat kun je verwachten van een AI Inspiratie Sessie?</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {expectations.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg hover:shadow-xl transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1A1F2E]">{item.title}</h3>
                        <p className="mt-1 text-[#4A4A4A]">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Max Motion Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E]">Waarom een AI Inspiratie Sessie van Max Motion?</h2>
            <div className="mt-10 space-y-6">
              {whyMaxMotion.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[#FF6B35]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1F2E]">{item.title}</h3>
                    <p className="mt-1 text-[#4A4A4A]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1F2E]">Locatie</h2>
                  <p className="mt-3 text-[#4A4A4A]">
                    Onze AI Inspiratie Sessies kunnen plaatsvinden <strong>op locatie bij jouw organisatie</strong>. 
                    Wil je liever een inspirerende omgeving buiten kantoor? In overleg zoekt Max Motion een 
                    <strong> unieke trainingslocatie</strong> die perfect past bij jouw organisatie en het karakter van de sessie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E]">Voorbeeldonderwerpen tijdens een sessie</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {topics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={topic.title}
                    className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] shadow-lg mx-auto mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1F2E]">{topic.title}</h3>
                    <p className="mt-2 text-[#4A4A4A] text-sm">{topic.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#FF6B35] via-[#F7931E] to-[#C1121F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om je team te inspireren?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Plan een AI Inspiratie Sessie en ontdek hoe kunstmatige intelligentie jouw organisatie kan transformeren.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#FF6B35] hover:bg-white/90 shadow-xl"
              >
                <Link href="/contact">Plan een sessie</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
