import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid | Max Motion",
  description: "Het privacybeleid en data-verwerkingspraktijken van Max Motion B.V.",
};

export default function PrivacyPage() {
  return (
    <section className="relative bg-background py-20 sm:py-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />
      </div>
      
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Privacybeleid
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

            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3">1. Inleiding</h2>
                <p className="mt-4 text-gray-300">
                  Max Motion B.V. respecteert uw privacy en verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG). In dit beleid leggen wij uit welke gegevens wij verzamelen, waarom wij deze verwerken en welke rechten u heeft.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3">2. Welke gegevens verzamelen wij?</h2>
                <p className="mt-4 text-gray-300">Wij kunnen de volgende persoonsgegevens verwerken:</p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li>Naam, adres, woonplaats (NAW-gegevens)</li>
                  <li>Contactgegevens (e-mail, telefoonnummer)</li>
                  <li>Bedrijfsgegevens (KvK, BTW-nummer)</li>
                  <li>Betaal- en factuurgegevens</li>
                  <li>Gegevens die u verstrekt via formulieren, e-mails of tijdens trainingen</li>
                  <li>Technische gegevens (IP-adres, browserinformatie) bij gebruik van onze website</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3">3. Doeleinden van verwerking</h2>
                <p className="mt-4 text-gray-300">Wij verwerken uw gegevens voor:</p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li>Het uitvoeren van overeenkomsten (levering van software, trainingen, consultancy)</li>
                  <li>Facturatie en administratie</li>
                  <li>Klantenservice en communicatie</li>
                  <li>Verbetering van onze diensten en website</li>
                  <li>Wettelijke verplichtingen (bijvoorbeeld fiscale bewaarplicht)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3">4. Rechtsgrond</h2>
                <p className="mt-4 text-gray-300">Wij verwerken persoonsgegevens op basis van:</p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li>Uitvoering van een overeenkomst</li>
                  <li>Wettelijke verplichting</li>
                  <li>Gerechtvaardigd belang (bijvoorbeeld marketing aan bestaande klanten)</li>
                  <li>Uw toestemming (bij inschrijving voor nieuwsbrief of events)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3">5. Bewaartermijn</h2>
                <p className="mt-4 text-gray-300">
                  Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor ze zijn verzameld, tenzij een wettelijke bewaarplicht geldt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3">6. Delen van gegevens</h2>
                <p className="mt-4 text-gray-300">Wij delen uw gegevens alleen met:</p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li>Betrouwbare partners die diensten namens ons uitvoeren (hosting, IT-support)</li>
                  <li>Overheidsinstanties indien wettelijk verplicht</li>
                </ul>
                <p className="mt-3 text-gray-300">Wij verkopen uw gegevens nooit aan derden.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3">7. Beveiliging</h2>
                <p className="mt-4 text-gray-300">
                  Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies, misbruik en ongeautoriseerde toegang.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3">8. Uw rechten</h2>
                <p className="mt-4 text-gray-300">U heeft het recht om:</p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li>Uw gegevens in te zien, te corrigeren of te verwijderen</li>
                  <li>Bezwaar te maken tegen verwerking</li>
                  <li>Gegevensoverdraagbaarheid aan te vragen</li>
                  <li>Uw toestemming in te trekken</li>
                </ul>
                <p className="mt-3 text-gray-300">
                  Stuur uw verzoek naar <a href="mailto:info@maxmotion.nl" className="text-primary hover:text-primary/80 transition-colors">info@maxmotion.nl</a>. Wij reageren binnen 30 dagen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3">9. Cookies</h2>
                <p className="mt-4 text-gray-300">
                  Onze website gebruikt cookies om functionaliteit en gebruikservaring te verbeteren. U kunt cookies beheren via uw browserinstellingen.
                </p>
              </div>

              <div className="mt-12 rounded-xl border border-white/10 bg-gray-900/50 p-6">
                <h2 className="mt-0 text-2xl font-bold text-white">10. Contact</h2>
                <p className="mt-4 text-gray-300">
                  Voor vragen over dit privacybeleid kunt u contact opnemen via:
                </p>
                <div className="mt-3 space-y-1 text-gray-300">
                  <p><strong className="text-white">E-mail:</strong> <a href="mailto:info@maxmotion.nl" className="text-primary hover:text-primary/80 transition-colors">info@maxmotion.nl</a></p>
                  <p><strong className="text-white">Adres:</strong> Nijenrodestraat 16, 3223 VG Hellevoetsluis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
