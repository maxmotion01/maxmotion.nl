import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases | Max Motion",
  description: "Echte resultaten van organisaties die samenwerken met Max Motion om AI veilig en snel te adopteren.",
};

const caseStudies = [
  {
    slug: "fintech-ai-automation",
    title: "FinTech AI Automatisering",
    client: "Toonaangevend Financial Services Bedrijf",
    description:
      "Handmatige dataverwerkingstijd met 70% verminderd door op maat gemaakte AI-workflows geïntegreerd in bestaande systemen.",
    metrics: [
      { label: "Tijd bespaard", value: "70%" },
      { label: "Foutreductie", value: "85%" },
      { label: "ROI-tijdlijn", value: "3 maanden" },
    ],
    icon: TrendingUp,
  },
  {
    slug: "enterprise-copilot-rollout",
    title: "Enterprise Copilot Uitrol",
    client: "Wereldwijde Productieorganisatie",
    description:
      "Microsoft Copilot uitgerold naar 5.000+ gebruikers met governance, training en adoptie-tracking.",
    metrics: [
      { label: "Gebruikers enabled", value: "5.000+" },
      { label: "Adoptiepercentage", value: "92%" },
      { label: "Productiviteitswinst", value: "25%" },
    ],
    icon: Users,
  },
  {
    slug: "ai-coaching-transformation",
    title: "AI Coaching Transformatie",
    client: "Tech Startup",
    description:
      "50-koppig engineering team in 8 weken van AI-sceptici tot power users getransformeerd.",
    metrics: [
      { label: "Team getraind", value: "50" },
      { label: "Vertrouwenstoename", value: "4.2/5" },
      { label: "Tool-adoptie", value: "88%" },
    ],
    icon: Zap,
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Cases
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Echte resultaten van organisaties die samenwerken met Max Motion om
              AI veilig en snel te adopteren.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8">
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <Link
                  key={study.slug}
                  href={`/cases/${study.slug}`}
                  className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md lg:p-12"
                >
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {study.client}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold group-hover:text-primary">
                        {study.title}
                      </h2>
                      <p className="mt-4 text-lg text-muted-foreground">
                        {study.description}
                      </p>
                      <div className="mt-8 grid grid-cols-3 gap-6">
                        {study.metrics.map((metric) => (
                          <div key={metric.label}>
                            <p className="text-2xl font-bold text-primary">
                              {metric.value}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 flex items-center text-sm font-medium text-primary">
                        Lees case study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
