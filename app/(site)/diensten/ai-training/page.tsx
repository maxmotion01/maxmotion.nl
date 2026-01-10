import Link from "next/link";
import { CheckCircle2, GraduationCap, ArrowRight, Users, Target, Zap, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Training | Max Motion",
  description:
    "Praktische AI trainingen voor bedrijven, non-profits en overheden. Leer werken met ChatGPT, Copilot, Gemini en andere AI-tools.",
};

function ChatGPTIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  );
}

function CopilotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );
}

function GeminiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c1.66 0 3.14-.69 4.22-1.78L12 12V6z"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}

function AIBrainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"/>
      <path d="m15.7 10.4-.9.4"/>
      <path d="m9.2 13.2-.9.4"/>
      <path d="m13.6 15.7-.4-.9"/>
      <path d="m10.8 9.2-.4-.9"/>
      <path d="m15.7 13.5-.9-.4"/>
      <path d="m9.2 10.9-.9-.4"/>
      <path d="m10.4 15.7.4-.9"/>
      <path d="m13.1 9.2.4-.9"/>
    </svg>
  );
}

function AIActIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12h6"/>
      <path d="M12 9v6"/>
    </svg>
  );
}

const trainings = [
  {
    icon: ChatGPTIcon,
    title: "ChatGPT Training",
    intro: "Ontdek hoe je ChatGPT kunt gebruiken om productiviteit te verhogen en creatieve processen te ondersteunen.",
    learns: [
      "Hoe ChatGPT werkt en wat de mogelijkheden zijn.",
      "Praktische toepassingen: van contentcreatie tot klantenservice.",
      "Tips voor het schrijven van effectieve prompts.",
    ],
    result: "Je kunt ChatGPT inzetten als een slimme assistent voor dagelijkse taken en strategische projecten.",
    bgColor: "from-[#10a37f] to-[#0d8a6a]",
    href: "/diensten/ai-training/chatgpt",
  },
  {
    icon: CopilotIcon,
    title: "Copilot Training",
    intro: "Leer hoe Microsoft Copilot jouw werkprocessen kan automatiseren en integreren in tools zoals Word, Excel en Teams.",
    learns: [
      "Hoe Copilot werkt binnen Microsoft 365.",
      "Automatiseren van repetitieve taken.",
      "Slimme manieren om data te analyseren en rapporten te maken.",
    ],
    result: "Je bespaart tijd en verhoogt efficiëntie door AI direct in jouw vertrouwde Microsoft-omgeving.",
    bgColor: "from-[#0078d4] to-[#005a9e]",
  },
  {
    icon: GeminiIcon,
    title: "Gemini Training",
    intro: "Maak kennis met Google Gemini, het krachtige AI-model van Google.",
    learns: [
      "Hoe Gemini verschilt van andere LLM-modellen.",
      "Toepassingen in zoekoptimalisatie, data-analyse en contentcreatie.",
      "Integratie van Gemini in jouw workflows.",
    ],
    result: "Je benut de kracht van Google's AI om innovatie en groei te stimuleren.",
    bgColor: "from-[#4285f4] to-[#ea4335]",
  },
  {
    icon: AIBrainIcon,
    title: "AI Tools voor Jouw Organisatie",
    intro: "Ontdek welke AI-tools het beste passen bij jouw organisatie en leer hoe je ze implementeert.",
    learns: [
      "Overzicht van de meest gebruikte AI-tools.",
      "Hoe je AI inzet voor marketing, HR, operations en meer.",
      "Strategieën voor veilige en effectieve implementatie.",
    ],
    result: "Je hebt een duidelijk plan om AI-tools te integreren en maximaal rendement te behalen.",
    bgColor: "from-[#FF6B35] to-[#F7931E]",
  },
  {
    icon: AIActIcon,
    title: "AI Act Training",
    intro: "De EU AI Act brengt nieuwe regels en verplichtingen voor het gebruik van kunstmatige intelligentie. Overheden, bedrijven en non-profitorganisaties moeten zich voorbereiden op deze wetgeving om compliant te blijven en risico's te beperken.",
    learnsIntro: "Onze training is volledig gericht op het praktisch toepassen van de EU AI Act binnen jouw organisatie. Na deze sessie weet je niet alleen wat er nodig is, maar kun je het ook direct implementeren.",
    learnsDetailed: [
      { title: "Compliance in de praktijk", description: "Je leert hoe je jouw processen en systemen inricht zodat ze voldoen aan de eisen van de AI Act. Denk aan documentatie, transparantie en verantwoord gebruik van AI." },
      { title: "Risicobeoordeling en beheersing", description: "We laten zien hoe je risico's identificeert, beoordeelt en beheerst. Je krijgt tools en methodieken om AI-toepassingen veilig en betrouwbaar te maken." },
      { title: "Governance en interne richtlijnen", description: "Je leert hoe je een governance-structuur opzet die aansluit bij de wetgeving. Inclusief rollen, verantwoordelijkheden en interne controles." },
      { title: "Implementatieplan", description: "We helpen je een concreet stappenplan op te stellen: van beleid tot uitvoering. Zo kun je direct aan de slag om compliant te worden." },
      { title: "Praktische templates en best practices", description: "Je krijgt toegang tot checklists, voorbeeldbeleid en praktische formats die je kunt gebruiken om jouw organisatie klaar te maken voor de AI Act." },
    ],
    result: "Je bent voorbereid op de Europese AI-wetgeving en weet hoe je AI compliant en verantwoord inzet binnen jouw organisatie.",
    bgColor: "from-[#003399] to-[#FFCC00]",
  },
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
    description: "Training afgestemd op jouw sector en behoeften.",
  },
  {
    icon: Zap,
    title: "Direct toepasbaar",
    description: "Je gaat naar huis met concrete kennis en tools.",
  },
];

export default function AITrainingPage() {
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
                <GraduationCap className="inline h-4 w-4 mr-2" />
                Praktische AI Trainingen
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
              AI Training: leer slim werken met AI en LLM-modellen
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#4A4A4A]">
              Bij Max Motion bieden we inspirerende en praktische AI trainingen voor bedrijven, non-profitorganisaties 
              en overheden. Onze trainingen zijn ontworpen om jouw team te helpen begrijpen hoe Large Language Models (LLM) 
              en AI-tools werken, en hoe je ze effectief kunt inzetten in jouw organisatie.
            </p>
            <p className="mt-4 text-lg text-[#4A4A4A]">
              Of je nu wilt leren werken met ChatGPT, Copilot, Gemini, of andere AI-tools, wij zorgen voor een 
              interactieve en leerzame ervaring.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white shadow-xl">
                <Link href="/contact">
                  Boek jouw AI Training
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trainings Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-12">Onze AI Trainingen</h2>
            
            <div className="space-y-8">
              {trainings.map((training, idx) => {
                const Icon = training.icon;
                const cardContent = (
                  <div className="flex items-start gap-5">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${training.bgColor} shadow-lg flex-shrink-0`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold text-[#1A1F2E] ${training.href ? "group-hover:text-[#FF6B35] transition" : ""}`}>
                        {idx + 1}. {training.title}
                        {training.href && <ArrowRight className="inline h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transition" />}
                      </h3>
                      <p className="mt-2 text-[#4A4A4A]">{training.intro}</p>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold text-[#1A1F2E] mb-3">
                          {training.learnsDetailed ? "Wat leer je tijdens de AI Act Training?" : "Wat leer je?"}
                        </h4>
                        {training.learnsIntro && (
                          <p className="text-[#4A4A4A] mb-4">{training.learnsIntro}</p>
                        )}
                        {training.learnsDetailed ? (
                          <div className="space-y-4">
                            {training.learnsDetailed.map((item, i) => (
                              <div key={item.title} className="flex items-start gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003399] text-white text-sm font-bold flex-shrink-0 mt-0.5">
                                  {i + 1}
                                </div>
                                <div>
                                  <span className="font-semibold text-[#1A1F2E]">{item.title}</span>
                                  <p className="text-[#4A4A4A] text-sm mt-1">{item.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : training.learns ? (
                          <ul className="space-y-2">
                            {training.learns.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                <span className="text-[#4A4A4A]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                      
                      <div className="mt-6 p-4 bg-green-100 rounded-xl">
                        <p className="text-[#1A1F2E]">
                          <span className="font-semibold">Resultaat:</span> {training.result}
                        </p>
                      </div>
                      
                      {training.href && (
                        <div className="mt-4 text-[#FF6B35] font-semibold group-hover:underline">
                          Meer informatie →
                        </div>
                      )}
                    </div>
                  </div>
                );

                return training.href ? (
                  <Link
                    key={training.title}
                    href={training.href}
                    className="block rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-gray-300 transition cursor-pointer group"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div
                    key={training.title}
                    className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg"
                  >
                    {cardContent}
                  </div>
                );
              })}
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
                    Onze AI Trainingen kunnen plaatsvinden <strong>op locatie bij jouw organisatie</strong>. 
                    Wil je liever een inspirerende omgeving buiten kantoor? In overleg zoekt Max Motion een 
                    <strong> unieke trainingslocatie</strong> die perfect past bij jouw organisatie en de doelstellingen van de training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Max Motion Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1A1F2E] text-center mb-12">Waarom kiezen voor Max Motion?</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {whyMaxMotion.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1"
                  >
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
      <section className="py-16 bg-gradient-to-br from-[#FF6B35] via-[#F7931E] to-[#C1121F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om jouw organisatie slimmer te maken?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Boek jouw AI Training vandaag of neem contact op voor een vrijblijvend adviesgesprek.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#FF6B35] hover:bg-white/90 shadow-xl"
              >
                <Link href="/contact">Boek jouw AI Training</Link>
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
