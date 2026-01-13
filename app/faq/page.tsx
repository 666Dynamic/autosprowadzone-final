import { FaqSection } from "@/components/faq-section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Najczęściej Zadawane Pytania (FAQ) | autosprowadzone.pl",
    description: "Odpowiedzi na pytania o import aut z Niemiec. Koszty, akcyza, czas transportu, procedury.",
}

export default function FaqPage() {
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 text-center mb-12">
                <h1 className="text-2xl md:text-4xl font-bold mb-6">Baza Wiedzy</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Wszystko co musisz wiedzieć o sprowadzaniu samochodów z zagranicy.
                </p>
            </div>
            <FaqSection />
        </div>
    )
}
