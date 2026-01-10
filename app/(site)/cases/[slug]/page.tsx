import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { CTAButton } from "@/components/cta-button";

const caseStudies = ["fintech-ai-automation", "enterprise-copilot-rollout", "ai-coaching-transformation"];

export async function generateStaticParams() {
  return caseStudies.map((slug) => ({
    slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  if (!caseStudies.includes(params.slug)) {
    notFound();
  }

  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <p className="text-sm font-medium text-muted-foreground">Case Study</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                {params.slug === "fintech-ai-automation" && "FinTech AI Automatisering"}
                {params.slug === "enterprise-copilot-rollout" && "Enterprise Copilot Uitrol"}
                {params.slug === "ai-coaching-transformation" && "AI Coaching Transformatie"}
              </h1>

              {params.slug === "fintech-ai-automation" && (
                <>
                  <p className="lead">
                    Een toonaangevend financial services bedrijf verminderde handmatige dataverwerkingstijd met 70% door op maat gemaakte AI-workflows.
                  </p>

                  <h2>Uitdaging</h2>
                  <p>
                    Het bedrijf besteedde 40+ uur per week aan handmatige verwerking van transactiedata, reconciliatie van accounts en het genereren van compliance-rapporten. Het proces was foutgevoelig en verhinderde het team zich te focussen op strategisch werk.
                  </p>

                  <h2>Oplossing</h2>
                  <p>Max Motion bouwde een op maat gemaakte AI-workflow die:</p>
                  <ul>
                    <li>Data-extractie uit meerdere bronnen automatiseerde</li>
                    <li>Intelligente reconciliatie uitvoerde met anomaliedetectie</li>
                    <li>Compliance-ready rapporten genereerde met audit trails</li>
                    <li>Naadloos integreerde met bestaande systemen</li>
                  </ul>

                  <h2>Resultaten</h2>
                  <div className="not-prose my-8 grid gap-6 sm:grid-cols-3">
                    <div className="rounded-lg border border-border bg-card p-6">
                      <p className="text-3xl font-bold text-primary">70%</p>
                      <p className="mt-2 text-sm text-muted-foreground">Tijd bespaard</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-6">
                      <p className="text-3xl font-bold text-primary">85%</p>
                      <p className="mt-2 text-sm text-muted-foreground">Foutreductie</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-6">
                      <p className="text-3xl font-bold text-primary">3 maanden</p>
                      <p className="mt-2 text-sm text-muted-foreground">ROI-tijdlijn</p>
                    </div>
                  </div>

                  <blockquote>
                    <p>
                      Max Motion bouwde niet alleen een tool voor ons—ze transformeerden onze workflow. De AI-automatisering is zo betrouwbaar dat we het naar drie extra afdelingen hebben uitgebreid.
                    </p>
                    <footer>— VP of Operations</footer>
                  </blockquote>
                </>
              )}

              {params.slug === "enterprise-copilot-rollout" && (
                <>
                  <p className="lead">
                    Wereldwijde productieorganisatie rolde Microsoft Copilot uit naar 5.000+ gebruikers met 92% adoptie.
                  </p>

                  <h2>Uitdaging</h2>
                  <p>
                    De organisatie wilde Microsoft Copilot uitrollen naar 5.000+ medewerkers maar had zorgen over beveiliging, governance en gebruikersadoptie.
                  </p>

                  <h2>Oplossing</h2>
                  <p>Max Motion ontwierp en voerde een uitgebreide uitrol uit:</p>
                  <ul>
                    <li>Beveiliging en compliance configuratie</li>
                    <li>Gefaseerde implementatie met pilotgroepen</li>
                    <li>Op maat gemaakte trainingsprogramma's voor verschillende rollen</li>
                    <li>Gebruiksmonitoring en optimalisatie</li>
                  </ul>

                  <h2>Resultaten</h2>
                  <div className="not-prose my-8 grid gap-6 sm:grid-cols-3">
                    <div className="rounded-lg border border-border bg-card p-6">
                      <p className="text-3xl font-bold text-primary">5.000+</p>
                      <p className="mt-2 text-sm text-muted-foreground">Gebruikers enabled</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-6">
                      <p className="text-3xl font-bold text-primary">92%</p>
                      <p className="mt-2 text-sm text-muted-foreground">Adoptiepercentage</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-6">
                      <p className="text-3xl font-bold text-primary">25%</p>
                      <p className="mt-2 text-sm text-muted-foreground">Productiviteitswinst</p>
                    </div>
                  </div>

                  <blockquote>
                    <p>
                      De uitrol verliep naadloos. Max Motion regelde alles van beveiliging tot training, en onze teams adopteerden Copilot sneller dan welke tool dan ook.
                    </p>
                    <footer>— CTO</footer>
                  </blockquote>
                </>
              )}

              {params.slug === "ai-coaching-transformation" && (
                <>
                  <p className="lead">
                    Tech startup transformeerde 50-koppig engineering team van AI-sceptici tot power users in 8 weken.
                  </p>

                  <h2>Uitdaging</h2>
                  <p>
                    Een snelgroeiende tech startup wilde dat hun engineering team AI-tools zou inzetten, maar stuitte op scepticisme en gebrek aan praktische kennis.
                  </p>

                  <h2>Oplossing</h2>
                  <p>Max Motion ontwierp een hands-on trainingsprogramma:</p>
                  <ul>
                    <li>Wekelijkse workshops met echte codevoorbeelden</li>
                    <li>Pair programming sessies met AI-tools</li>
                    <li>Best practices voor code review en validatie</li>
                    <li>Office hours voor doorlopende ondersteuning</li>
                  </ul>

                  <h2>Resultaten</h2>
                  <div className="not-prose my-8 grid gap-6 sm:grid-cols-3">
                    <div className="rounded-lg border border-border bg-card p-6">
                      <p className="text-3xl font-bold text-primary">50</p>
                      <p className="mt-2 text-sm text-muted-foreground">Team getraind</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-6">
                      <p className="text-3xl font-bold text-primary">4.2/5</p>
                      <p className="mt-2 text-sm text-muted-foreground">Vertrouwenstoename</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-6">
                      <p className="text-3xl font-bold text-primary">88%</p>
                      <p className="mt-2 text-sm text-muted-foreground">Tool-adoptie</p>
                    </div>
                  </div>

                  <blockquote>
                    <p>
                      Max Motion veranderde ons team van AI-sceptici in believers. De hands-on aanpak maakte het verschil—we leveren nu sneller features met hogere kwaliteit.
                    </p>
                    <footer>— VP of Engineering</footer>
                  </blockquote>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-primary py-16 text-primary-foreground">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Klaar voor vergelijkbare resultaten?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Laten we bespreken hoe Max Motion jouw organisatie kan helpen.
            </p>
            <div className="mt-10">
              <CTAButton
                source={`case_study_${params.slug}`}
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
