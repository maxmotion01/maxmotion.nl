"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "AI Ontwikkeling", href: "/diensten/ai-automation" },
  { name: "AI Advies", href: "/diensten/ai-advies" },
];

const trainingSubmenu = [
  { name: "Alle Trainingen", href: "/diensten/ai-training" },
  { name: "AI Inspiratie", href: "/diensten/ai-inspiratie" },
  { name: "ChatGPT Training", href: "/diensten/ai-training/chatgpt" },
  { name: "Copilot Training", href: "/diensten/ai-training/copilot" },
  { name: "Gemini Training", href: "/diensten/ai-training/gemini" },
  { name: "EU AI Act Training", href: "/diensten/ai-training/eu-ai-act" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTrainingMenuOpen, setIsTrainingMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Max Motion" 
                width={200} 
                height={54}
                className="h-8 sm:h-10 md:h-[54px] w-auto"
                priority
              />
            </Link>
            
            <nav className="hidden lg:flex ml-12">
              <ul className="flex space-x-8">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-[#4A4A4A] hover:text-[#FF6B35] font-medium transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li 
                  className="relative"
                  onMouseEnter={() => setIsTrainingMenuOpen(true)}
                  onMouseLeave={() => setIsTrainingMenuOpen(false)}
                >
                  <Link 
                    href="/diensten/ai-training"
                    className="flex items-center text-[#4A4A4A] hover:text-[#FF6B35] font-medium transition"
                  >
                    AI Training
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  {isTrainingMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      {trainingSubmenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-[#4A4A4A] hover:text-[#FF6B35] hover:bg-orange-50 transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link 
              href="/contact"
              className="hidden md:block text-[#1A1F2E] hover:text-[#FF6B35] font-semibold transition"
            >
              Plan Afspraak
            </Link>
            
            {/* Mobile: Compact button */}
            <Link href="/#ai-scan" className="sm:hidden">
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white shadow-lg text-xs px-2 py-1.5 h-8">
                AI Scan
              </Button>
            </Link>
            
            {/* Tablet+: Full button */}
            <Link href="/#ai-scan" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white shadow-lg text-sm md:text-base px-3 md:px-4">
                Gratis AI Scan
              </Button>
            </Link>
            
            <button
              type="button"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-[#1A1F2E]" />
              ) : (
                <Menu className="h-6 w-6 text-[#1A1F2E]" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="mt-4 lg:hidden">
            <ul className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="block text-[#4A4A4A] hover:text-[#FF6B35] font-medium transition py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <span className="block text-[#1A1F2E] font-semibold py-2">AI Training</span>
                <ul className="pl-4 space-y-2">
                  {trainingSubmenu.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="block text-[#4A4A4A] hover:text-[#FF6B35] font-medium transition py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
