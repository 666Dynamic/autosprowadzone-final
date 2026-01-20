"use client"

import { ShieldCheck, Gavel, FileCheck } from "lucide-react"
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
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            
            {/* Smooth fade transitions top and bottom */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-0" />
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
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.025, duration: 0.25 }}
                            className="bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary/20 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300" style={{ backfaceVisibility: 'hidden' }}
                        >
                            <div className="h-12 w-12 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center mb-5 text-primary">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight mb-3">{feature.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                
            </div>
        </section>
    )
}
