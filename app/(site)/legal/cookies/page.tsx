import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookiebeleid | Max Motion",
  description: "Het cookiebeleid van Max Motion B.V. - Informatie over het gebruik van cookies op onze website.",
  alternates: {
    canonical: "/legal/cookies",
  },
};

export default function CookiesPage() {
  return (
    <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
              Cookiebeleid
            </h1>
            <div className="mt-4 space-y-1 text-sm text-[#4A4A4A]">
              <p>Max Motion B.V.</p>
              <p>Versie: 1.0</p>
              <p>Datum: 10 januari 2026</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
            <div className="space-y-3 text-sm text-[#4A4A4A] mb-8">
              <p><strong className="text-[#1A1F2E]">Bedrijf:</strong> Max Motion B.V.</p>
              <p><strong className="text-[#1A1F2E]">Adres:</strong> Nijenrodestraat 16, 3223 VG Hellevoetsluis</p>
              <p><strong className="text-[#1A1F2E]">KvK:</strong> 24332660</p>
              <p><strong className="text-[#1A1F2E]">E-mail:</strong> <a href="mailto:info@maxmotion.nl" className="text-[#FF6B35] hover:text-[#F7931E] transition-colors">info@maxmotion.nl</a></p>
              <p><strong className="text-[#1A1F2E]">Website:</strong> <a href="https://www.maxmotion.nl" className="text-[#FF6B35] hover:text-[#F7931E] transition-colors">www.maxmotion.nl</a></p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1F2E] border-b border-gray-200 pb-3">1. Wat zijn cookies?</h2>
                <p className="mt-4 text-[#4A4A4A]">
                  Cookies zijn kleine tekstbestanden die op uw computer, tablet of smartphone worden opgeslagen wanneer u onze website bezoekt. Ze helpen ons om uw voorkeuren te onthouden, de website te laten functioneren en uw gebruikservaring te verbeteren.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1A1F2E] border-b border-gray-200 pb-3">2. Welke cookies gebruiken wij?</h2>
                <p className="mt-4 text-[#4A4A4A]">Wij gebruiken de volgende soorten cookies:</p>
                
                <h3 className="text-xl font-semibold text-[#1A1F2E] mt-6">Noodzakelijke cookies</h3>
                <p className="mt-2 text-[#4A4A4A]">
                  Deze cookies zijn essentieel voor het functioneren van de website. Zonder deze cookies kunnen bepaalde functies niet werken. Deze cookies verzamelen geen persoonlijke informatie.
                </p>
                <ul className="mt-3 space-y-2 text-[#4A4A4A]">
                  <li>Sessie-cookies voor het onthouden van uw voorkeuren tijdens uw bezoek</li>
                  <li>Cookie-toestemmingscookie om uw cookievoorkeuren op te slaan</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1A1F2E] mt-6">Analytische cookies</h3>
                <p className="mt-2 text-[#4A4A4A]">
                  Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken. De informatie wordt geanonimiseerd verzameld.
                </p>
                <ul className="mt-3 space-y-2 text-[#4A4A4A]">
                  <li>Google Analytics - voor het analyseren van websiteverkeer en gebruikersgedrag</li>
                  <li>Vercel Analytics - voor prestatiemetingen van de website</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1A1F2E] mt-6">Functionele cookies</h3>
                <p className="mt-2 text-[#4A4A4A]">
                  Deze cookies onthouden uw voorkeuren en keuzes om uw ervaring te personaliseren.
                </p>
                <ul className="mt-3 space-y-2 text-[#4A4A4A]">
                  <li>Taalvoorkeuren</li>
                  <li>Formuliergegevens (indien u dit toestaat)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1A1F2E] border-b border-gray-200 pb-3">3. Bewaartermijn</h2>
                <p className="mt-4 text-[#4A4A4A]">
                  De bewaartermijn van cookies varieert:
                </p>
                <ul className="mt-3 space-y-2 text-[#4A4A4A]">
                  <li><strong className="text-[#1A1F2E]">Sessie-cookies:</strong> Worden verwijderd wanneer u uw browser sluit</li>
                  <li><strong className="text-[#1A1F2E]">Permanente cookies:</strong> Blijven maximaal 2 jaar bewaard</li>
                  <li><strong className="text-[#1A1F2E]">Analytische cookies:</strong> Maximaal 26 maanden</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1A1F2E] border-b border-gray-200 pb-3">4. Cookies beheren</h2>
                <p className="mt-4 text-[#4A4A4A]">
                  U kunt zelf bepalen welke cookies u accepteert. Bij uw eerste bezoek aan onze website kunt u via de cookiebanner uw voorkeuren aangeven.
                </p>
                <p className="mt-3 text-[#4A4A4A]">
                  Daarnaast kunt u cookies beheren of verwijderen via uw browserinstellingen:
                </p>
                <ul className="mt-3 space-y-2 text-[#4A4A4A]">
                  <li><strong className="text-[#1A1F2E]">Chrome:</strong> Instellingen → Privacy en beveiliging → Cookies</li>
                  <li><strong className="text-[#1A1F2E]">Firefox:</strong> Opties → Privacy & Beveiliging → Cookies</li>
                  <li><strong className="text-[#1A1F2E]">Safari:</strong> Voorkeuren → Privacy → Cookies</li>
                  <li><strong className="text-[#1A1F2E]">Edge:</strong> Instellingen → Cookies en sitemachtigingen</li>
                </ul>
                <p className="mt-3 text-[#4A4A4A]">
                  Let op: het uitschakelen van cookies kan de functionaliteit van onze website beperken.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1A1F2E] border-b border-gray-200 pb-3">5. Cookies van derden</h2>
                <p className="mt-4 text-[#4A4A4A]">
                  Onze website kan cookies van derden bevatten, zoals:
                </p>
                <ul className="mt-3 space-y-2 text-[#4A4A4A]">
                  <li><strong className="text-[#1A1F2E]">Google Analytics:</strong> Voor websiteanalyse</li>
                  <li><strong className="text-[#1A1F2E]">LinkedIn:</strong> Voor het tonen van LinkedIn-content</li>
                </ul>
                <p className="mt-3 text-[#4A4A4A]">
                  Deze partijen hebben hun eigen privacybeleid. Wij raden u aan deze te raadplegen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1A1F2E] border-b border-gray-200 pb-3">6. Wijzigingen</h2>
                <p className="mt-4 text-[#4A4A4A]">
                  Wij kunnen dit cookiebeleid van tijd tot tijd aanpassen. De meest recente versie is altijd beschikbaar op onze website. Bij belangrijke wijzigingen informeren wij u via de website.
                </p>
              </div>

              <div className="mt-12 rounded-xl border border-gray-200 bg-gradient-to-br from-orange-50 to-white p-6">
                <h2 className="mt-0 text-2xl font-bold text-[#1A1F2E]">7. Contact</h2>
                <p className="mt-4 text-[#4A4A4A]">
                  Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op:
                </p>
                <div className="mt-3 space-y-1 text-[#4A4A4A]">
                  <p><strong className="text-[#1A1F2E]">E-mail:</strong> <a href="mailto:info@maxmotion.nl" className="text-[#FF6B35] hover:text-[#F7931E] transition-colors">info@maxmotion.nl</a></p>
                  <p><strong className="text-[#1A1F2E]">Adres:</strong> Nijenrodestraat 16, 3223 VG Hellevoetsluis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
