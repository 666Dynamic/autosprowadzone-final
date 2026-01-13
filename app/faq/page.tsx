import { FaqSection } from "@/components/faq-section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Najczęściej Zadawane Pytania (FAQ) | autosprowadzone.pl",
    description: "Odpowiedzi na pytania o import aut z Niemiec. Koszty, akcyza, czas transportu, procedury.",
}

export default function FaqPage() {
    return (
        <div className="py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-8 text-center mb-20">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter leading-none italic">
                    Baza <br /><span className="text-primary not-italic">Wiedzy</span>
                </h1>
                <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                    Wszystko co musisz wiedzieć o sprowadzaniu samochodów z zagranicy.
                </p>
            </div>
            <FaqSection />
        </div>
    )
}
