import Link from "next/link";
import { CheckCircle2, FileText, MessageSquare, Wrench, ArrowRight, Database, Cpu, Target, Clock, Package } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Ontwikkeling - Automatiseer Bedrijfsprocessen | Microsoft Fabric & Foundry",
  description:
    "AI Ontwikkeling helpt je processen te vereenvoudigen, systemen naadloos te koppelen en repetitieve taken te automatiseren. Microsoft Fabric & Foundry implementatie door Max Motion.",
  keywords: ["AI ontwikkeling", "AI automation", "proces automatisering", "Microsoft Fabric", "Microsoft Foundry", "AI integratie"],
  alternates: {
    canonical: "/diensten/ai-automation",
  },
};

const whyAutomation = [
  {
    title: "Kostenbesparing",
    description: "Minder handmatige fouten en lagere operationele kosten.",
  },
  {
    title: "Schaalbaarheid",
    description: "Groeien zonder extra personeelsdruk.",
  },
  {
    title: "Realtime inzichten",
    description: "Snelle en nauwkeurige data-analyse voor betere beslissingen.",
  },
  {
    title: "Wendbaarheid",
    description: "Met AI pas je sneller aan op veranderingen in de markt, klantbehoeften of interne processen.",
  },
];

const solutions = [
  {
    icon: FileText,
    title: "Automatische factuurverwerking",
    description:
      "Voor een logistiek bedrijf hebben we een AI-oplossing ontwikkeld die inkomende facturen automatisch herkent, valideert en verwerkt. Dit bespaart gemiddeld 40 uur per maand aan handmatig werk.",
  },
  {
    icon: MessageSquare,
    title: "Slimme klantenservice chatbot",
    description:
      "Bij een e-commerce organisatie hebben we een AI-chatbot geïmplementeerd die 80% van de standaardvragen zelfstandig afhandelt. Dit verhoogde klanttevredenheid en verlaagde wachttijden drastisch.",
  },
  {
    icon: Wrench,
    title: "Predictive maintenance in productie",
    description:
      "Voor een productiebedrijf hebben we een AI-model gebouwd dat machineonderhoud voorspelt. Hierdoor daalde het aantal storingen met 30%, wat direct leidde tot hogere productiviteit.",
  },
  {
    icon: Target,
    title: "AI-gestuurde lead generatie",
    description:
      "Voor een B2B-dienstverlener hebben we een AI-systeem ontwikkeld dat automatisch potentiële klanten identificeert, kwalificeert en prioriteert. Dit resulteerde in 50% meer gekwalificeerde leads en een kortere salescyclus.",
  },
  {
    icon: Clock,
    title: "Automatische urenverwerking",
    description:
      "Voor een adviesbureau hebben we een integratie gebouwd tussen hun uren-app en boekhoudsoftware. Uren worden automatisch gevalideerd, gekoppeld aan projecten en doorgestuurd voor facturatie. Dit bespaart wekelijks uren aan administratie.",
  },
  {
    icon: Package,
    title: "Slim voorraad- en asset management",
    description:
      "Voor een retailorganisatie hebben we een AI-gestuurd systeem ontwikkeld dat voorraadniveaus voorspelt, automatisch bestellingen plaatst en assets tracked. Dit reduceerde voorraadtekorten met 60% en verlaagde opslagkosten significant.",
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              AI Automation: de sleutel tot efficiëntie en groei
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Bij Max Motion geloven we dat AI Automation de toekomst is voor bedrijven die slimmer willen werken.
              Door kunstmatige intelligentie te integreren in bedrijfsprocessen, helpen we organisaties om
              efficiënter te werken, processen te vereenvoudigen en systemen naadloos op elkaar aan te sluiten.
              Het resultaat: meer tijd voor strategische beslissingen en minder tijd voor repetitieve taken.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Gratis quick scan aanvragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                We brengen kansen, quick wins en risico’s in kaart—zonder verplichtingen.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Waarom AI Automation?</h2>
            <div className="mt-10 space-y-8">
              {whyAutomation.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A1F2E]">Praktische oplossingen die wij hebben geïmplementeerd</h2>
              <p className="mt-4 text-lg text-[#4A4A4A]">Ontdek hoe wij AI inzetten voor tastbare resultaten</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={solution.title}
                    className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-[#FF6B35]/30 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1F2E]">{solution.title}</h3>
                    </div>
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">{solution.description}</p>
                    <div className="flex items-center text-[#FF6B35] font-semibold text-sm group-hover:text-[#F7931E] transition">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      Geïmplementeerd
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-32 bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1F2E] sm:text-4xl">
                Microsoft Fabric & Foundry Implementatie
              </h2>
              <p className="mt-2 text-xl text-[#FF6B35] font-medium">
                Max Motion maakt jouw data en AI krachtig
              </p>
              <p className="mt-6 text-lg text-[#4A4A4A] max-w-3xl mx-auto">
                De toekomst van data en kunstmatige intelligentie begint hier. Met Microsoft Fabric en Microsoft Foundry 
                zet je jouw organisatie klaar voor een wereld waarin data, AI en innovatie centraal staan.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Microsoft Fabric Card */}
              <Link href="/diensten/ai-automation/microsoft-fabric" className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full hover:shadow-2xl transition hover:border-[#0078d4]/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0078d4] to-[#005a9e] shadow-lg">
                      <Database className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1A1F2E]">Microsoft Fabric</h3>
                      <span className="text-[#0078d4] text-sm font-medium">Data & Analytics Platform</span>
                    </div>
                  </div>
                  <p className="text-[#4A4A4A] mb-6">
                    End-to-end data- en analyticsplatform dat alle data samenbrengt voor integratie, 
                    analyse, business intelligence en AI-modellen.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <CheckCircle2 className="h-4 w-4 text-[#0078d4]" />
                      Één platform voor alle data
                    </li>
                    <li className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <CheckCircle2 className="h-4 w-4 text-[#0078d4]" />
                      Realtime inzichten
                    </li>
                    <li className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <CheckCircle2 className="h-4 w-4 text-[#0078d4]" />
                      AI-ready
                    </li>
                  </ul>
                  <div className="flex items-center text-[#0078d4] font-semibold group-hover:text-[#005a9e] transition">
                    Meer informatie
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Microsoft Foundry Card */}
              <Link href="/diensten/ai-automation/microsoft-foundry" className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full hover:shadow-2xl transition hover:border-[#7719aa]/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#7719aa] to-[#5c0099] shadow-lg">
                      <Cpu className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1A1F2E]">Microsoft Foundry</h3>
                      <span className="text-[#7719aa] text-sm font-medium">AI Innovatie Platform</span>
                    </div>
                  </div>
                  <p className="text-[#4A4A4A] mb-6">
                    AI-innovatieplatform voor het ontwikkelen, testen en veilig uitrollen van 
                    AI-oplossingen met governance en compliance.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <CheckCircle2 className="h-4 w-4 text-[#7719aa]" />
                      Snelle implementatie
                    </li>
                    <li className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <CheckCircle2 className="h-4 w-4 text-[#7719aa]" />
                      Compliance & governance
                    </li>
                    <li className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <CheckCircle2 className="h-4 w-4 text-[#7719aa]" />
                      Schaalbare AI-oplossingen
                    </li>
                  </ul>
                  <div className="flex items-center text-[#7719aa] font-semibold group-hover:text-[#5c0099] transition">
                    Meer informatie
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-primary py-16 text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wil je weten waar AI Automation jouw team direct tijd oplevert?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Vraag een gratis quick scan aan—je krijgt een helder overzicht van kansen en een pragmatische eerste
              roadmap.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/contact">Gratis quick scan aanvragen</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
