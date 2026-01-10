import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Max Motion",
  description: "Algemene voorwaarden en gebruiksbeleid van Max Motion B.V.",
};

export default function TermsPage() {
  return (
    <section className="relative bg-background py-20 sm:py-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />
      </div>
      
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Algemene Voorwaarden
            </h1>
            <div className="mt-4 space-y-1 text-sm text-gray-400">
              <p>Max Motion B.V.</p>
              <p>Versie: 1.0</p>
              <p>Datum: 9 januari 2026</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gray-800/50 backdrop-blur-sm p-8 shadow-xl">
            <div className="space-y-3 text-sm text-gray-300 mb-8">
              <p><strong className="text-white">Bedrijf:</strong> Max Motion B.V.</p>
              <p><strong className="text-white">Adres:</strong> Nijenrodestraat 16, 3223 VG Hellevoetsluis</p>
              <p><strong className="text-white">KvK:</strong> 24332660</p>
              <p><strong className="text-white">E-mail:</strong> <a href="mailto:info@maxmotion.nl" className="text-primary hover:text-primary/80 transition-colors">info@maxmotion.nl</a></p>
              <p><strong className="text-white">Website:</strong> <a href="https://www.maxmotion.nl" className="text-primary hover:text-primary/80 transition-colors">www.maxmotion.nl</a></p>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* Table of Contents */}
              <div className="mb-12 rounded-xl border border-white/10 bg-gray-900/50 p-6">
                <h2 className="mt-0 text-xl font-bold text-white">Inhoud</h2>
                <div className="grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <h3 className="mt-4 text-base font-semibold text-white">Algemene bepalingen</h3>
                    <ul className="mt-2 space-y-1 text-gray-300">
                      <li>Artikel 1 – Algemeen</li>
                      <li>Artikel 2.a – Dienstverlening / verplichtingen Max Motion</li>
                      <li>Artikel 2.b – Verplichtingen klant</li>
                      <li>Artikel 3 – Prijs / betaling</li>
                      <li>Artikel 4 – Meerwerk / wijziging</li>
                      <li>Artikel 5 – Tussentijdse beëindiging</li>
                      <li>Artikel 6 – Aansprakelijkheid</li>
                      <li>Artikel 7 – Overmacht</li>
                      <li>Artikel 8 – Toepasselijk recht en geschillen</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mt-4 text-base font-semibold text-white">Hosting</h3>
                    <ul className="mt-2 space-y-1 text-gray-300">
                      <li>Artikel 9 – Duur</li>
                      <li>Artikel 10 – Onderhoud / garantie</li>
                      <li>Artikel 11 – Vrijwaring door klant</li>
                    </ul>
                    <h3 className="mt-4 text-base font-semibold text-white">Softwareontwikkeling</h3>
                    <ul className="mt-2 space-y-1 text-gray-300">
                      <li>Artikel 12 – Ontwikkeling van programmatuur</li>
                      <li>Artikel 13 – Aflevering, installatie en acceptatie</li>
                      <li>Artikel 14 – (Intellectuele) eigendomsrechten</li>
                      <li>Artikel 15 – Annulering</li>
                      <li>Artikel 16 – Vindplaats en wijziging voorwaarden</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* General Terms */}
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3">Algemene Bepalingen</h2>
              
              <h3 className="text-xl font-semibold text-white mt-8">Artikel 1 – Algemeen</h3>
              <ol className="text-gray-300 space-y-2">
                <li>1.1 "Max Motion": leverancier van softwarediensten, AI-trainingen en consultancy.</li>
                <li>1.2 Deze voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en rechtsverhoudingen.</li>
                <li>1.3 Afwijkingen alleen schriftelijk geldig.</li>
                <li>1.4 Alle aanbiedingen zijn vrijblijvend, tenzij anders vermeld.</li>
                <li>1.5 Nietigheid van een bepaling tast overige bepalingen niet aan.</li>
                <li>1.6 Bij strijdigheid prevaleert de overeenkomst.</li>
              </ol>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 2.a – Dienstverlening / verplichtingen Max Motion</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Max Motion voert opdrachten zorgvuldig en vakbekwaam uit.</li>
                <li>Persoonsgegevens worden uitsluitend gebruikt voor administratieve doeleinden en niet gedeeld met derden, tenzij wettelijk verplicht.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 2.b – Verplichtingen klant</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Klant verstrekt tijdig alle benodigde informatie.</li>
                <li>Geen overdracht van inloggegevens of diensten aan derden zonder toestemming.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 3 – Prijs / betaling</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Alle prijzen exclusief BTW.</li>
                <li>Betaling binnen 14 dagen na factuurdatum.</li>
                <li>Bij niet-tijdige betaling: wettelijke handelsrente + incassokosten (minimaal 15%).</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 4 – Meerwerk / wijziging</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Wijzigingen worden doorbelast tegen gebruikelijk tarief.</li>
                <li>Meerwerk kan oplevertermijnen beïnvloeden.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 5 – Tussentijdse beëindiging</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Max Motion kan bij wanprestatie verplichtingen opschorten of beëindigen.</li>
                <li>Klant kan beëindigen na ingebrekestelling en een hersteltermijn van 14 dagen.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 6 – Aansprakelijkheid</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Geen aansprakelijkheid voor gevolgschade of winstderving.</li>
                <li>Maximale aansprakelijkheid: € 25.000 per gebeurtenis.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 7 – Overmacht</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Geen verplichting tot nakoming bij overmacht.</li>
                <li>Bij overmacht langer dan 90 dagen: recht op ontbinding zonder schadevergoeding.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 8 – Toepasselijk recht en geschillen</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Nederlands recht van toepassing.</li>
                <li>Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement van Max Motion.</li>
              </ul>

              {/* Hosting */}
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3 mt-12">Hosting</h2>
              
              <h3 className="text-xl font-semibold text-white mt-8">Artikel 9 – Duur</h3>
              <p className="text-gray-300">Standaardduur: 1 jaar, stilzwijgende verlenging tenzij opzegging 2 maanden vooraf.</p>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 10 – Onderhoud / garantie</h3>
              <p className="text-gray-300">Max Motion zorgt voor onderhoud en capaciteit, maar geeft geen garantie op ononderbroken beschikbaarheid.</p>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 11 – Vrijwaring door klant</h3>
              <p className="text-gray-300">Klant vrijwaart Max Motion voor aanspraken van derden bij onjuist gebruik, onrechtmatige content of beveiligingsinbreuken.</p>

              {/* Software Development */}
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3 mt-12">Softwareontwikkeling</h2>
              
              <h3 className="text-xl font-semibold text-white mt-8">Artikel 12 – Ontwikkeling van programmatuur</h3>
              <p className="text-gray-300">Specificaties schriftelijk vastgelegd; klant staat in voor juistheid en volledigheid.</p>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 13 – Aflevering, installatie en acceptatie</h3>
              <p className="text-gray-300">Acceptatietest: 14 dagen; bij gebruik vóór acceptatie geldt programmatuur als geaccepteerd.</p>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 14 – (Intellectuele) eigendomsrechten</h3>
              <p className="text-gray-300">Alle IE-rechten blijven bij Max Motion; klant krijgt uitsluitend gebruiksrechten.</p>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 15 – Annulering</h3>
              <p className="text-gray-300">Bij annulering: vergoeding van gemaakte kosten + winstderving.</p>

              <h3 className="text-xl font-semibold text-white mt-8">Artikel 16 – Vindplaats en wijziging voorwaarden</h3>
              <p className="text-gray-300">Laatste versie staat op www.maxmotion.nl; Nederlandse tekst is leidend.</p>

              <div className="mt-12 rounded-xl border border-white/10 bg-gray-900/50 p-6">
                <h3 className="mt-0 text-lg font-semibold text-white">Contact</h3>
                <p className="text-gray-300">
                  Voor vragen over deze Algemene Voorwaarden, neem contact met ons op via{" "}
                  <a href="mailto:info@maxmotion.nl" className="text-primary hover:text-primary/80 transition-colors">
                    info@maxmotion.nl
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
