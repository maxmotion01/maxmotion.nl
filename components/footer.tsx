import Link from "next/link";
import { Brain, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#1A1F2E] text-white py-16">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-lg p-2">
                <Brain className="text-white h-6 w-6" />
              </div>
              <span className="ml-3 text-2xl font-bold">Max Motion</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-oplossingen die uw bedrijf vooruit brengen. Van automatisering tot advies.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-3 transition"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-3 transition"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-3 transition"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Diensten</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/diensten/ai-automation" className="text-gray-400 hover:text-[#FF6B35] transition">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/diensten/ai-inspiratie" className="text-gray-400 hover:text-[#FF6B35] transition">
                  AI Inspiratie
                </Link>
              </li>
              <li>
                <Link href="/diensten/ai-training" className="text-gray-400 hover:text-[#FF6B35] transition">
                  AI Training
                </Link>
              </li>
              <li>
                <Link href="/diensten/ai-advies" className="text-gray-400 hover:text-[#FF6B35] transition">
                  AI Advies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Bedrijf</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/over-ons" className="text-gray-400 hover:text-[#FF6B35] transition">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-[#FF6B35] transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#FF6B35] transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF6B35] transition">
                  Carrière
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Direct aan de slag?</h4>
            <p className="text-gray-400 mb-6">Ontdek wat AI voor jouw organisatie kan betekenen</p>
            <div className="space-y-3">
              <Link 
                href="/diensten/ai-training"
                className="flex items-center gap-3 text-gray-300 hover:text-[#FF6B35] transition group"
              >
                <ArrowRight className="h-4 w-4 text-[#FF6B35] group-hover:translate-x-1 transition-transform" />
                Boek een AI Training
              </Link>
              <Link 
                href="/contact"
                className="flex items-center gap-3 text-gray-300 hover:text-[#FF6B35] transition group"
              >
                <ArrowRight className="h-4 w-4 text-[#FF6B35] group-hover:translate-x-1 transition-transform" />
                Plan een afspraak
              </Link>
              <Link 
                href="/contact"
                className="flex items-center gap-3 text-gray-300 hover:text-[#FF6B35] transition group"
              >
                <ArrowRight className="h-4 w-4 text-[#FF6B35] group-hover:translate-x-1 transition-transform" />
                Gratis AI Scan aanvragen
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Max Motion. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6">
              <Link href="/legal/privacy" className="text-gray-400 hover:text-[#FF6B35] text-sm transition">
                Privacybeleid
              </Link>
              <Link href="/legal/terms" className="text-gray-400 hover:text-[#FF6B35] text-sm transition">
                Algemene voorwaarden
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF6B35] text-sm transition">
                Cookiebeleid
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
