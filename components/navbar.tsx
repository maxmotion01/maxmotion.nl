"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Brain } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "AI Automation", href: "/diensten/ai-automation" },
  { name: "AI Inspiratie", href: "/diensten/ai-inspiratie" },
  { name: "AI Training", href: "/diensten/ai-training" },
  { name: "AI Advies", href: "/diensten/ai-advies" },
  ];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-lg p-2">
                <Brain className="text-white h-6 w-6" />
              </div>
              <span className="ml-3 text-2xl font-bold text-[#1A1F2E]">Max Motion</span>
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
              </ul>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/contact"
              className="hidden md:block text-[#1A1F2E] hover:text-[#FF6B35] font-semibold transition"
            >
              Plan Afspraak
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white shadow-lg">
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
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
