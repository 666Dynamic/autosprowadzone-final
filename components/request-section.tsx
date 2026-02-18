"use client";

import { ContactForm } from "@/components/contact-form";
import { Sparkles } from "lucide-react";

export function RequestSection() {
  return (
    <section
      id="zlecenie"
      className="py-16 md:py-24 relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />

      {/* Smooth fade transitions top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-0" />

      <div className="container px-4 md:px-8 relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side: Text & Process */}
          <div className="lg:w-5/12 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Twoje Auto Czeka
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black leading-none uppercase tracking-tighter text-foreground italic">
                Czego dokładnie <br />
                <span className="text-primary not-italic">szukasz?</span>
              </h2>
              <p className="text-base text-muted-foreground font-medium leading-relaxed max-w-xl">
                Twoje zlecenie trafia bezpośrednio do eksperta na rynku DE.
                Przeszukujemy systemy pod kątem aut ze sprawdzoną historią i
                wysyłamy Ci propozycje godne zakupu.
              </p>
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                <a
                  href="/kalkulator"
                  className="underline decoration-primary/30 underline-offset-4 hover:text-primary"
                >
                  Sprawdź koszty w kalkulatorze
                </a>
                <span className="mx-2 opacity-40">•</span>
                <a
                  href="/faq"
                  className="underline decoration-primary/30 underline-offset-4 hover:text-primary"
                >
                  Najczęstsze pytania (FAQ)
                </a>
              </div>
            </div>

            <div className="space-y-8 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block" />

              {[
                {
                  title: "Określasz budżet i wymagania",
                  subtitle: "Budżet, marka i model",
                },
                {
                  title: "My weryfikujemy rynek",
                  subtitle: "Sprawdzamy historię i dostępność",
                },
                {
                  title: "Otrzymujesz propozycje",
                  subtitle: "Tylko egzemplarze godne zakupu",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 group relative"
                >
                  <div className="h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-xl shadow-[0_10px_20px_-5px_rgba(245,158,11,0.5)] border border-primary/20 shrink-0 z-10 transition-transform group-hover:scale-110">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-foreground uppercase tracking-tight text-lg group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      {step.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Unified Contact Form */}
          <div className="lg:w-7/12 w-full relative">
            {/* Shadow Glow */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-[4rem] pointer-events-none -z-10" />
            <ContactForm mode="search" className="border-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
