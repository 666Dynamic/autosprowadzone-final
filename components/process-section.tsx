"use client"

import { motion } from "framer-motion"
import { Search, MonitorCheck, FileSignature, Wallet, Gavel, Truck } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
    {
        id: "01",
        title: "Określ Potrzeby",
        description: "Kontaktujesz się z nami i precyzujesz wymagania: marka, model, rocznik, budżet.",
        icon: Search,
    },
    {
        id: "02",
        title: "Otrzymaj Oferty",
        description: "Przeszukujemy zamknięte aukcje B2B (BCA, Auto1) i wysyłamy Ci wyselekcjonowane auta z raportami.",
        icon: MonitorCheck,
    },
    {
        id: "03",
        title: "Wybór i Umowa",
        description: "Wybierasz najlepszą ofertę. Podpisujemy umowę pośrednictwa, która zabezpiecza Twoje interesy.",
        icon: FileSignature,
    },
    {
        id: "04",
        title: "Wpłać Depozyt",
        description: "Wpłacasz depozyt zabezpieczający licytację. Jest on w 100% zwrotny, jeśli nie wygramy aukcji.",
        icon: Wallet,
    },
    {
        id: "05",
        title: "Licytacja",
        description: "Licytujemy auto w Twoim imieniu do ustalonego limitu. Negocjujemy najlepszą możliwą cenę.",
        icon: Gavel,
    },
    {
        id: "06",
        title: "Dostawa",
        description: "Po wygranej aukcji organizujemy płatność i bezpieczny transport pod Twój dom.",
        icon: Truck,
    },
]

export function ProcessSection() {
    return (
        <section id="process-section" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-black uppercase tracking-widest">
                        Proces Zakupu
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black mb-6 text-foreground tracking-tighter uppercase leading-none">
                        Twój Import <br />
                        <span className="text-primary italic">Krok po Kroku</span>
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto">
                        Zdejmujemy z Twoich barków cały ciężar importu.
                        Transparentny proces od pierwszej konsultacji po dostawę pod dom.
                    </p>
                </motion.div>

                {/* Grid Layout - Clean & Consistent */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card border-2 border-border p-10 rounded-[2.5rem] hover:border-primary hover:shadow-xl transition-all group relative overflow-hidden"
                        >
                            {/* Background Number */}
                            <div className="absolute -top-4 -right-4 text-9xl font-black text-primary/5 select-none group-hover:text-primary/10 transition-colors pointer-events-none">
                                {step.id}
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
