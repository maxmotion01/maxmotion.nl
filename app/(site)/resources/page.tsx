import Link from "next/link";
import { BookOpen, FileText, Video } from "lucide-react";
import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bronnen | Max Motion",
  description: "Artikelen, gidsen en talks over AI-adoptie, productontwikkeling en enterprise-uitrol.",
};

const resources = [
  {
    type: "Artikel",
    icon: FileText,
    title: "Het AI-Adoptie Playbook: Een Praktische Gids voor Leiderschap",
    description:
      "Een stap-voor-stap framework voor executives die de AI-reis van hun organisatie plannen.",
    date: "2024-01-15",
    href: "#",
  },
  {
    type: "Gids",
    icon: BookOpen,
    title: "Enterprise AI Beveiligen: ChatGPT, Copilot & Gemini",
    description:
      "Best practices voor het implementeren van AI-tools met juiste governance en databegrenzing.",
    date: "2024-01-10",
    href: "#",
  },
  {
    type: "Talk",
    icon: Video,
    title: "AI-Producten Bouwen Die Daadwerkelijk Werken",
    description:
      "Lessen uit 50+ AI-productlanceringen: wat werkt, wat niet, en waarom.",
    date: "2023-12-20",
    href: "#",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Bronnen
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Artikelen, gidsen en talks over AI-adoptie, productontwikkeling
              en enterprise-uitrol.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group block rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-primary">
                          {resource.type}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(resource.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h2 className="mt-2 text-xl font-semibold group-hover:text-primary">
                        {resource.title}
                      </h2>
                      <p className="mt-3 text-muted-foreground">
                        {resource.description}
                      </p>
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
