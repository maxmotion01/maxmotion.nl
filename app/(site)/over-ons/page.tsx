import Link from "next/link";
import { Target, Heart, Zap, ArrowRight, Users, Lightbulb, Rocket } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Ons - Wie is Max Motion",
  description: "Max Motion helpt organisaties met AI automatisering, trainingen en advies. Ontdek wie wij zijn en hoe wij jouw bedrijf kunnen helpen groeien met AI.",
  alternates: {
    canonical: "/over-ons",
  },
};

const values = [
  {
    icon: Target,
    title: "Resultaten boven hype",
    description:
      "We focussen op meetbare resultaten—efficiëntiewinst, snellere besluitvorming en veiligere uitrol. Geen buzzwoorden, alleen bedrijfswaarde.",
  },
  {
    icon: Heart,
    title: "Verantwoorde AI-adoptie",
    description:
      "Beveiliging, governance en ethiek zijn ingebouwd in elk project. We helpen organisaties AI op de juiste manier te adopteren.",
  },
  {
    icon: Zap,
    title: "Snelheid met veiligheid",
    description:
      "Snel vooruit zonder dingen te breken. We balanceren snelle iteratie met goede controles en risicomanagement.",
  },
];

const approach = [
  {
    icon: Lightbulb,
    step: "1",
    title: "Kennis & Enthousiasme",
    description: "Directe winst en draagvlak creëren binnen jouw organisatie.",
  },
  {
    icon: Users,
    step: "2",
    title: "Blauwdruk & Use-cases",
    description: "ROI-focus met concrete toepassingen voor jouw bedrijf.",
  },
  {
    icon: Rocket,
    step: "3",
    title: "Automation & Implementatie",
    description: "Eerste werkende automation plus borging voor de toekomst.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF6B35] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F7931E] opacity-10 rounded-full blur-3xl"></div>

        <Container>
          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
                Over Max Motion
              </h1>
              <p className="mt-2 text-xl font-medium text-[#FF6B35]">
                AI die écht verschil maakt
              </p>
              <div className="mt-8 space-y-6 text-lg leading-8 text-[#4A4A4A]">
                <p>
                  Bij Max Motion geloven we dat AI niet alleen technologie is, maar een beweging naar nieuwe mogelijkheden. Onze missie? Iedereen op een persoonlijke en boeiende manier laten ervaren wat AI kan betekenen—niet als hype, maar als een kracht die organisaties vooruit stuwt.
                </p>
                <p>
                  Wij bouwen AI-oplossingen die écht verschil maken: systemen waarmee je omzet kunt vergroten, kosten kunt verlagen en processen slimmer kunt organiseren. Geen abstracte beloftes, maar tastbare resultaten die jouw organisatie sterker en wendbaarder maken.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white shadow-xl">
                    Neem contact op
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                  alt="Max Motion team - AI experts die organisaties helpen"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2E]">Onze Missie</h2>
            <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
              Wij zijn jouw gids in de AI-wereld. We adviseren directieleden, managers en teams over hoe ze AI kunnen inzetten om te groeien, te innoveren en te transformeren. Van strategische keuzes tot praktische toepassingen: wij staan naast je, elke stap van de weg.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#4A4A4A]">
              De toekomst wacht niet. Verandering begint vandaag—en Max Motion helpt jou om die toekomst vorm te geven. Met kennis, creativiteit en een aanpak die inspireert én impact levert.
            </p>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-12">Onze Waarden</h2>
            <div className="space-y-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] shadow-lg">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1F2E]">{value.title}</h3>
                      <p className="mt-2 text-[#4A4A4A]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-4">Onze Aanpak</h2>
            <p className="text-center text-[#4A4A4A] mb-12">We werken in drie fasen om maximale impact te bereiken</p>
            <div className="grid md:grid-cols-3 gap-8">
              {approach.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center">
                    <div className="relative inline-block mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] shadow-lg mx-auto">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1F2E] text-white font-bold text-sm">
                        {item.step}
                      </span>
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
      <section className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#F7931E]">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om te starten?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Plan een vrijblijvend gesprek om jouw AI-traject te bespreken.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#FF6B35] hover:bg-white/90 shadow-xl"
                >
                  Plan een gesprek
                </Button>
              </Link>
              <Link href="/#ai-scan">
                <Button
                  size="lg"
                  variant="ghost"
                  className="border border-white/30 text-white hover:bg-white/10"
                >
                  Gratis AI Scan
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
