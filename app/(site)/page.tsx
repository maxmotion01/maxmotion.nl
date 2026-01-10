import Link from "next/link";
import Image from "next/image";
import { Sparkles, Rocket, Calendar, Star, Cog, Lightbulb, GraduationCap, Compass, ArrowRight, Gift, Search, FileText, MessageSquare, Shield } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { AIScanForm } from "@/components/ai-scan-form";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF6B35] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F7931E] opacity-10 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white px-4 py-2 rounded-full shadow-md mb-6">
                <span className="text-[#FF6B35] font-semibold text-sm">
                  <Sparkles className="inline h-4 w-4 mr-2" />
                  AI Transformatie Begint Hier
                </span>
              </div>
              
              <h1 className="text-6xl font-bold text-[#1A1F2E] leading-tight mb-6">
                Breng <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#F7931E]">AI</span> tot leven in uw bedrijf
              </h1>
              
              <p className="text-xl text-[#4A4A4A] mb-8 leading-relaxed">
                Van slimme automatisering tot strategisch advies. Max Motion helpt bedrijven met praktische AI-toepassingen, inspirerende trainingen en expert begeleiding.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white shadow-xl">
                    <Rocket className="mr-2 h-5 w-5" />
                    Start met Gratis AI Scan
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="border-2">
                    <Calendar className="mr-2 h-5 w-5" />
                    Plan Kennismaking
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop"
                      alt="Tevreden klant"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
                      alt="Tevreden klant"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
                      alt="Tevreden klant"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="flex text-[#FF6B35] text-sm">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <p className="text-sm text-[#4A4A4A] font-medium">150+ tevreden klanten</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                    alt="Blije mensen werken samen op kantoor"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                
                              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1F2E] mb-4">Slimme AI-oplossingen die jouw organisatie vooruit helpen</h2>
            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">Bij Max Motion leveren we innovatieve AI-oplossingen op maat die jouw processen optimaliseren, productiviteit verhogen en nieuwe kansen creëren. Van AI-advies tot trainingen en implementatie – wij zorgen dat jouw organisatie klaar is voor de toekomst.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Cog className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1F2E] mb-4">AI Automation</h3>
              <p className="text-[#4A4A4A] mb-6">Automatiseer repetitieve taken en verhoog efficiency met slimme AI-oplossingen.</p>
              <Link href="/diensten/ai-automation" className="text-[#FF6B35] font-semibold hover:text-[#F7931E] transition">
                Meer info <ArrowRight className="inline h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1F2E] mb-4">AI Inspiratie</h3>
              <p className="text-[#4A4A4A] mb-6">Ontdek nieuwe mogelijkheden en krijg inspiratie voor AI in uw organisatie.</p>
              <Link href="/diensten/ai-inspiratie" className="text-[#FF6B35] font-semibold hover:text-[#F7931E] transition">
                Meer info <ArrowRight className="inline h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1F2E] mb-4">AI Training</h3>
              <p className="text-[#4A4A4A] mb-6">Praktische trainingen om uw team AI-ready te maken voor de toekomst.</p>
              <Link href="/diensten/ai-training" className="text-[#FF6B35] font-semibold hover:text-[#F7931E] transition">
                Meer info <ArrowRight className="inline h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1F2E] mb-4">AI Advies</h3>
              <p className="text-[#4A4A4A] mb-6">Strategisch advies voor succesvolle AI-implementatie in uw bedrijf.</p>
              <Link href="/diensten/ai-advies" className="text-[#FF6B35] font-semibold hover:text-[#F7931E] transition">
                Meer info <ArrowRight className="inline h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* AI Scan CTA */}
      <section className="py-24 bg-gradient-to-br from-[#FF6B35] via-[#F7931E] to-[#C1121F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm mb-6">
              <Gift className="inline h-4 w-4 mr-2" />
              GRATIS & VRIJBLIJVEND
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6">Ontdek uw AI-potentieel met een gratis scan</h2>
            <p className="text-xl text-white text-opacity-90 mb-12 leading-relaxed">
              Krijg inzicht in de AI-kansen voor uw bedrijf. Onze experts analyseren uw processen en geven concrete aanbevelingen voor AI-implementatie.
            </p>
            
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Search className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <h4 className="font-bold text-[#1A1F2E] mb-1">Analyse</h4>
                  <p className="text-[#4A4A4A] text-sm">Diepgaande scan van uw processen</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <h4 className="font-bold text-[#1A1F2E] mb-1">Rapport</h4>
                  <p className="text-[#4A4A4A] text-sm">Persoonlijk adviesrapport</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <h4 className="font-bold text-[#1A1F2E] mb-1">Bespreking</h4>
                  <p className="text-[#4A4A4A] text-sm">30 min. gesprek met expert</p>
                </div>
              </div>
              
              <AIScanForm />
              
              <p className="text-[#4A4A4A] text-sm mt-4">
                <Shield className="inline h-4 w-4 mr-1" />
                Uw gegevens worden vertrouwelijk behandeld
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1F2E] mb-4">Wat onze klanten zeggen</h2>
            <p className="text-xl text-[#4A4A4A]">Succesverhalen van bedrijven die AI omarmen</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex text-[#FF6B35] mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-[#4A4A4A] mb-6 italic">"Max Motion heeft ons geholpen om AI succesvol te implementeren. Hun praktische aanpak en expertise hebben ons 30% tijdwinst opgeleverd."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mr-4"></div>
                <div>
                  <p className="font-bold text-[#1A1F2E]">Mark van der Berg</p>
                  <p className="text-[#4A4A4A] text-sm">CEO, TechStart BV</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex text-[#FF6B35] mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-[#4A4A4A] mb-6 italic">"De AI training was oog-openend voor ons team. Nu gebruiken we dagelijks AI-tools en zijn we veel productiever geworden."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 mr-4"></div>
                <div>
                  <p className="font-bold text-[#1A1F2E]">Lisa Jansen</p>
                  <p className="text-[#4A4A4A] text-sm">Marketing Manager, CreativeHub</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex text-[#FF6B35] mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-[#4A4A4A] mb-6 italic">"Uitstekend advies en begeleiding. Max Motion denkt oprecht mee en levert oplossingen die echt werken voor ons bedrijf."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 mr-4"></div>
                <div>
                  <p className="font-bold text-[#1A1F2E]">Peter Smit</p>
                  <p className="text-[#4A4A4A] text-sm">Directeur, Innovate Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
