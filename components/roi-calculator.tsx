"use client";

import { useState } from "react";
import { Calculator, Clock, Users, TrendingUp, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ROICalculator() {
  const [employees, setEmployees] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [showResults, setShowResults] = useState(false);

  const automationEfficiency = 0.7;
  const weeksPerYear = 48;
  
  const currentCostPerYear = employees * hoursPerWeek * hourlyRate * weeksPerYear;
  const savedHoursPerYear = employees * hoursPerWeek * automationEfficiency * weeksPerYear;
  const savedCostPerYear = savedHoursPerYear * hourlyRate;
  const savedHoursPerWeek = employees * hoursPerWeek * automationEfficiency;

  const handleCalculate = () => {
    setShowResults(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("nl-NL", {
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] shadow-lg">
          <Calculator className="h-7 w-7 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#1A1F2E]">ROI Calculator</h3>
          <p className="text-[#4A4A4A]">Bereken jouw potentiële besparing met AI</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-[#1A1F2E] mb-2">
            <Users className="h-4 w-4 text-[#FF6B35]" />
            Aantal medewerkers
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
          />
          <div className="flex justify-between text-sm text-[#4A4A4A] mt-1">
            <span>1</span>
            <span className="font-bold text-[#FF6B35]">{employees} medewerkers</span>
            <span>100</span>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-[#1A1F2E] mb-2">
            <Clock className="h-4 w-4 text-[#FF6B35]" />
            Uren per week aan repetitieve taken (per medewerker)
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
          />
          <div className="flex justify-between text-sm text-[#4A4A4A] mt-1">
            <span>1 uur</span>
            <span className="font-bold text-[#FF6B35]">{hoursPerWeek} uur/week</span>
            <span>20 uur</span>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-[#1A1F2E] mb-2">
            <Euro className="h-4 w-4 text-[#FF6B35]" />
            Gemiddeld uurtarief (€)
          </label>
          <input
            type="range"
            min="25"
            max="150"
            step="5"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
          />
          <div className="flex justify-between text-sm text-[#4A4A4A] mt-1">
            <span>€25</span>
            <span className="font-bold text-[#FF6B35]">€{hourlyRate}/uur</span>
            <span>€150</span>
          </div>
        </div>

        <Button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white shadow-lg py-6 text-lg"
        >
          Bereken mijn besparing
          <TrendingUp className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {showResults && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-bold text-[#1A1F2E] mb-6">Jouw potentiële besparing met AI Automation:</h4>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100">
              <p className="text-sm text-[#4A4A4A] mb-1">Bespaarde uren per week</p>
              <p className="text-3xl font-bold text-green-600">{formatNumber(savedHoursPerWeek)} uur</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100">
              <p className="text-sm text-[#4A4A4A] mb-1">Bespaarde uren per jaar</p>
              <p className="text-3xl font-bold text-green-600">{formatNumber(savedHoursPerYear)} uur</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#FFF8F0] to-white rounded-2xl p-6 border border-orange-100 sm:col-span-2">
              <p className="text-sm text-[#4A4A4A] mb-1">Potentiële kostenbesparing per jaar</p>
              <p className="text-4xl font-bold text-[#FF6B35]">{formatCurrency(savedCostPerYear)}</p>
            </div>
          </div>

          <p className="text-xs text-[#4A4A4A] mt-4">
            * Gebaseerd op 70% automatisering van repetitieve taken en 48 werkweken per jaar. 
            Werkelijke resultaten kunnen variëren.
          </p>

          <div className="mt-6">
            <Button
              asChild
              className="w-full bg-[#1A1F2E] hover:bg-[#2A2F3E] text-white py-6 text-lg"
            >
              <a href="/contact">
                Vraag een gratis AI Scan aan
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
