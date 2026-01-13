"use client"

import { ShieldCheck, Gavel, Search, Euro, Truck, FileCheck } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        icon: Gavel,
        title: "Dostęp do Aukcji B2B",
        description: "Jako zarejestrowana niemiecka firma (GmbH) mamy dostęp do zamkniętych platform: BCA, Auto1, Autobid.de, Openlane. Kupujesz auto bez marży pośredników komisowych.",
    },
    {
        icon: ShieldCheck,
        title: "Pełna Transparentność",
        description: "Działamy jako Twój agent. Widzisz realną cenę zakupu auta na aukcji. Nasze wynagrodzenie to stała prowizja. Depozyt jest w 100% zwrotny w przypadku braku zakupu.",
    },
    {
        icon: FileCheck,
        title: "Raporty Rzeczoznawców",
        description: "Licytujemy tylko auta ze szczegółowymi raportami technicznymi (często DEKRA/TÜV). Znasz każdą rysę i historię serwisową przed postawieniem złotówki.",
    },
]

export function FeaturesSection() {
    return (
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground uppercase tracking-tighter italic">Dlaczego warto <span className="text-primary not-italic">nam zaufać?</span></h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Nie jesteśmy typowym handlarzem. Jesteśmy Twoim przedstawicielem w Niemczech.
                        Zamiast ukrywać wady, prześwietlamy auto dla Ciebie.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-foreground">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-background p-8 rounded-2xl border-2 border-primary/20 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:scale-105 hover:border-primary/40 transition-all duration-300"
                        >
                            <div className="h-12 w-12 bg-primary/20 border-2 border-primary/30 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
