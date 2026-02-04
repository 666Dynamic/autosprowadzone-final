import { FaqSection } from "@/components/faq-section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Najczęściej Zadawane Pytania (FAQ) | SprowadzoneAuto.pl",
    description: "Odpowiedzi na pytania o import aut z Niemiec. Koszty, akcyza, czas transportu, procedury.",
}

export default function FaqPage() {
    return (
        <div className="py-12 md:py-20">
            {/* FAQPage JSON-LD for rich results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Czy depozyt jest zwrotny?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Tak, w 100%. Jeśli nie uda się wylicytować samochodu lub zrezygnujesz przed licytacją, depozyt zwracamy bezzwłocznie."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Ile trwa transport samochodu?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Z reguły 3–7 dni roboczych od zaksięgowania wpłaty u sprzedawcy w Niemczech."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Czy samochody są sprawdzone przed zakupem?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Tak. Licytujemy głównie auta z raportami rzeczoznawców (DEKRA/TÜV/SGS), a na życzenie wykonujemy też własną inspekcję w DE."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Jakie są dodatkowe koszty przy zakupie na aukcji?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Do ceny dochodzi prowizja domu aukcyjnego (ok. 3.5%), opłata eksportowa (~140€) i transport. Wszystko prezentujemy przed licytacją."
                                }
                            }
                        ]
                    })
                }}
            />
            <div className="container mx-auto px-4 md:px-8 text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter italic">Baza <span className="text-primary not-italic">Wiedzy</span></h1>
                <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                    Wszystko co musisz wiedzieć o sprowadzaniu samochodów z zagranicy.
                </p>
            </div>
            <FaqSection />
        </div>
    )
}
