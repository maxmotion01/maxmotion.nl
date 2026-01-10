"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Calendar, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";

const contactSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 tekens bevatten"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  company: z.string().optional(),
  message: z.string().min(10, "Bericht moet minimaal 10 tekens bevatten"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] via-orange-50 to-white py-20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF6B35] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F7931E] opacity-10 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2E] sm:text-5xl">
              Neem contact op
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
              Heb je een vraag of ben je klaar om jouw AI-adoptietraject te bespreken?
              We horen graag van je.
            </p>
          </div>
        </Container>
      </section>

      {/* Booking Scheduler Section */}
      {env.NEXT_PUBLIC_BOOKING_URL && (
        <section className="py-16 bg-white">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-orange-50 to-white p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] shadow-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A1F2E]">Plan een meeting</h2>
                    <p className="text-sm text-[#4A4A4A]">
                      Kies een tijd die jou uitkomt
                    </p>
                  </div>
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border-2 border-gray-200">
                  <iframe
                    src={env.NEXT_PUBLIC_BOOKING_URL}
                    className="h-full w-full"
                    frameBorder="0"
                    title="Boek een afspraak"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#1A1F2E]">Of neem direct contact op</h2>
              <p className="mt-2 text-[#4A4A4A]">
                Stuur ons een bericht of gebruik de contactgegevens hieronder
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-[#1A1F2E]">Contactinformatie</h3>
              <p className="mt-4 text-[#4A4A4A]">
                Liever direct contact? Gebruik een van de onderstaande methoden.
              </p>

              <dl className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] shadow-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <dt className="font-semibold text-[#1A1F2E]">E-mail</dt>
                    <dd className="mt-1 text-[#4A4A4A]">
                      <a
                        href="mailto:contact@maxmotion.nl"
                        className="hover:text-[#FF6B35] transition-colors"
                      >
                        contact@maxmotion.nl
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] shadow-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <dt className="font-semibold text-[#1A1F2E]">Adres</dt>
                    <dd className="mt-1 text-[#4A4A4A]">
                      Nijenrodestraat 16
                      <br />
                      3223VG Hellevoetsluis
                      <br />
                      Nederland
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-orange-50 to-white p-8 shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A1F2E]">
                    Naam *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#1A1F2E] placeholder-gray-400 focus:border-[#FF6B35] focus:outline-none transition"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1F2E]">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#1A1F2E] placeholder-gray-400 focus:border-[#FF6B35] focus:outline-none transition"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#1A1F2E]">
                    Bedrijf
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    id="company"
                    className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#1A1F2E] placeholder-gray-400 focus:border-[#FF6B35] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A1F2E]">
                    Bericht *
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-[#1A1F2E] placeholder-gray-400 focus:border-[#FF6B35] focus:outline-none transition"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div className="rounded-lg bg-green-100 p-4 text-sm text-green-800">
                    Bedankt voor je bericht! We nemen snel contact met je op.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-lg bg-red-100 p-4 text-sm text-red-800">
                    Er ging iets mis. Probeer het opnieuw of mail ons direct.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35] text-white shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
