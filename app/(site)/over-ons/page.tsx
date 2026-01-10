import { Target, Heart, Zap } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Ons | Max Motion",
  description: "Max Motion werkt samen met leiders en teams om AI om te zetten in meetbare bedrijfswaarde.",
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

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Modern Gradient */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-32">
        {/* Vibrant gradient mesh background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />
          <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-cyan-500/30 to-teal-500/30 blur-3xl" />
        </div>

        <Container>
          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Over Max Motion
              </h1>
              <div className="mt-8 space-y-6 text-lg leading-8 text-gray-300">
                <p>
                  Bij Max Motion geloven we dat AI niet alleen technologie is, maar een beweging naar nieuwe mogelijkheden. Onze missie? Iedereen op een persoonlijke en boeiende manier laten ervaren wat AI kan betekenen—niet als hype, maar als een kracht die organisaties vooruit stuwt.
                </p>
                <p>
                  Wij bouwen AI-oplossingen die écht verschil maken: systemen waarmee je omzet kunt vergroten, kosten kunt verlagen en processen slimmer kunt organiseren. Geen abstracte beloftes, maar tastbare resultaten die jouw organisatie sterker en wendbaarder maken.
                </p>
                <p>
                  Daarnaast zijn wij jouw gids in de AI-wereld. We adviseren directieleden, managers en teams over hoe ze AI kunnen inzetten om te groeien, te innoveren en te transformeren. Van strategische keuzes tot praktische toepassingen: wij staan naast je, elke stap van de weg.
                </p>
                <p>
                  De toekomst wacht niet. Verandering begint vandaag—en Max Motion helpt jou om die toekomst vorm te geven. Met kennis, creativiteit en een aanpak die inspireert én impact levert.
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-2xl backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                  alt="AI innovatie en toekomst - Max Motion helpt organisaties transformeren"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover opacity-80"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-gray-900/30 py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white">Onze waarden</h2>
            <div className="mt-12 space-y-12">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-500 shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                      <p className="mt-2 text-gray-300">
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

      <section className="bg-background py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white">Onze aanpak</h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-300">
              <p>
                We werken in drie fasen: eerst kennis & enthousiasme (directe winst en draagvlak), dan blauwdruk & use-cases (ROI-focus), en tot slot automation & implementatie (eerste werkende automation plus borging).
              </p>
              <p>
                Onze focus ligt op snelheid met veiligheid. We bouwen snel prototypes, testen met echte data en schalen naar productie—altijd met governance, beveiliging en compliance ingebouwd.
              </p>
              <p>
                Elk project levert meetbare resultaten: efficiëntiewinst, tijdsbesparing, foutreductie. We tracken metrics die ertoe doen en zorgen ervoor dat teams zelfstandig verder kunnen na onze samenwerking.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-primary via-blue-600 to-cyan-600 py-16">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-cyan-500/90" />
        
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om te starten?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Plan een meeting om jouw AI-traject te bespreken.
            </p>
            <div className="mt-10">
              <CTAButton
                source="over_ons_final"
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 shadow-xl"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
