"use client";

import { useState, FormEvent } from "react";
import { Rocket, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AIScanForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
    };

    try {
      const response = await fetch("/api/ai-scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Er is iets misgegaan");
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er is iets misgegaan");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="bg-green-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#1A1F2E] mb-2">Bedankt voor je aanvraag!</h3>
        <p className="text-[#4A4A4A]">
          We nemen binnen 24 uur contact met je op om de mogelijkheden te bespreken.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="Voornaam"
          required
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6B35] focus:outline-none transition"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Achternaam"
          required
          className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6B35] focus:outline-none transition"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="E-mailadres"
        required
        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6B35] focus:outline-none transition"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefoonnummer"
        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6B35] focus:outline-none transition"
      />
      <input
        type="text"
        name="company"
        placeholder="Bedrijfsnaam (optioneel)"
        className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6B35] focus:outline-none transition"
      />
      
      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}
      
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white shadow-xl text-lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Verzenden...
          </>
        ) : (
          <>
            <Rocket className="mr-2 h-5 w-5" />
            Claim mijn gratis AI Scan
          </>
        )}
      </Button>
    </form>
  );
}
