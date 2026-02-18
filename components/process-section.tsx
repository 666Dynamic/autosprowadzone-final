"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  MonitorCheck,
  FileSignature,
  Wallet,
  Gavel,
  Truck,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Określ Potrzeby",
    description:
      "Kontaktujesz się z nami i precyzujesz wymagania: marka, model, rocznik, budżet.",
    icon: Search,
  },
  {
    id: "02",
    title: "Otrzymaj Oferty",
    description:
      "Przeszukujemy zamknięte aukcje B2B (BCA, Auto1) i wysyłamy Ci wyselekcjonowane auta z raportami.",
    icon: MonitorCheck,
  },
  {
    id: "03",
    title: "Wybór i Umowa",
    description:
      "Wybierasz najlepszą ofertę. Podpisujemy umowę pośrednictwa, która zabezpiecza Twoje interesy.",
    icon: FileSignature,
  },
  {
    id: "04",
    title: "Wpłać Depozyt",
    description:
      "Wpłacasz depozyt zabezpieczający licytację. Jest on w 100% zwrotny, jeśli nie wygramy aukcji.",
    icon: Wallet,
  },
  {
    id: "05",
    title: "Licytacja",
    description:
      "Licytujemy auto w Twoim imieniu do ustalonego limitu. Negocjujemy najlepszą możliwą cenę.",
    icon: Gavel,
  },
  {
    id: "06",
    title: "Dostawa",
    description:
      "Po wygranej aukcji organizujemy płatność i bezpieczny transport pod Twój dom.",
    icon: Truck,
  },
];

export function ProcessSection() {
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 ||
        (navigator.maxTouchPoints !== undefined &&
          navigator.maxTouchPoints > 0));
    setIsMobile(Boolean(mobile));

    function onResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const reduceMotion = prefersReduced || isMobile;

  return (
    <section
      id="process-section"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Smooth fade transitions top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto [will-change:transform,opacity]"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-black uppercase tracking-widest bg-background/50 backdrop-blur-sm">
            Proces Zakupu
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-foreground tracking-tighter uppercase leading-none">
            Twój Import <br />
            <span className="text-primary italic">Krok po Kroku</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto">
            Zdejmujemy z Twoich barków cały ciężar importu. Transparentny proces
            od pierwszej konsultacji po dostawę pod dom.
          </p>
        </motion.div>

        {/* Grid Layout - Clean & Consistent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => {
            const itemInitial = reduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 0 };
            const itemTransition = reduceMotion
              ? undefined
              : {
                  delay: idx * 0.05,
                  duration: 0.5,
                  ease: [0.21, 0.47, 0.32, 0.98] as const,
                };

            return (
              <motion.div
                key={idx}
                initial={itemInitial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...itemTransition, delay: idx * 0.025 }}
                className="bg-card/95 md:bg-card/80 md:backdrop-blur-sm border border-border p-5 sm:p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] hover:border-primary/50 md:hover:border-primary hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden min-h-[180px] sm:min-h-[220px] md:min-h-[280px]"
                style={{ backfaceVisibility: "hidden" }}
              >
                {/* Background Number */}
                <div className="absolute -top-2 -right-2 text-6xl md:text-9xl font-black text-primary/5 select-none md:group-hover:text-primary/10 transition-colors pointer-events-none">
                  {step.id}
                </div>

                <div className="relative z-10 transition-colors duration-300 md:group-hover:text-primary">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-8 text-primary md:group-hover:bg-primary md:group-hover:text-white transition-colors duration-300 shadow-sm">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-foreground mb-3 md:mb-4 md:group-hover:text-primary transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
