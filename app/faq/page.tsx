import { FaqSection } from "@/components/faq-section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "FAQ — Najczęściej Zadawane Pytania o Imporcie Aut",
    description: "Odpowiedzi na pytania o import aut z Niemiec: koszty sprowadzenia, stawki akcyzy 2026, czas transportu, procedury rejestracji, gwarancja i depozyt. Wszystko w jednym miejscu.",
    alternates: {
        canonical: "https://sprowadzoneauto.pl/faq",
    },
    openGraph: {
        title: "FAQ — Najczęściej Zadawane Pytania o Imporcie Aut",
        description: "Odpowiedzi na pytania o import aut z Niemiec: koszty, akcyza, transport, rejestracja.",
        url: "https://sprowadzoneauto.pl/faq",
    },
}

export default function FaqPage() {
    return (
        <div className="pt-0 pb-12 md:pt-0 md:pb-20">
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
                                    "text": "Tak, w 100%. Jeśli nie uda nam się wylicytować wybranego przez Ciebie samochodu lub zrezygnujesz przed licytacją, depozyt wraca na Twoje konto bezzwłocznie. Zatrzymujemy go (jako prowizję) tylko w momencie sukcesu - czyli zakupu auta."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Ile trwa transport samochodu?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Standardowo transport trwa od 3 do 7 dni roboczych od momentu zaksięgowania wpłaty za samochód u niemieckiego sprzedawcy. Czas ten zależy od lokalizacji auta w Niemczech i dostępności naszych lawet."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Czy udzielacie gwarancji na samochody?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Jesteśmy agencją pośredniczącą w zakupie, a nie sprzedawcą (komisem), więc sami nie udzielamy gwarancji. Kupujesz auto bezpośrednio od niemieckiego dostawcy. Jednakże, dzięki dokładnym raportom rzeczoznawców, ryzyko wady jest minimalne. Istnieje możliwość wykupienia zewnętrznej gwarancji (np. Defend Insurance) po rejestracji w Polsce."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Czy samochody są sprawdzone przed zakupem?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Tak. Licytujemy głównie na platformach (BCA, Auto1), które dostarczają szczegółowe raporty rzeczoznawców (często DEKRA/TÜV/SGS). Raport zawiera zdjęcia każdej rysy, pomiar lakieru i ocenę techniczną. Dodatkowo, na życzenie, wykonujemy własną weryfikację fizyczną na terenie Niemiec."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Dlaczego warto kupować na aukcjach dealerskich, a nie na mobile.de?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Aukcje B2B to rynek hurtowy, niedostępny dla osób prywatnych. Auta pochodzą bezpośrednio z defleetu bankowego, leasingów i od autoryzowanych dealerów. Ceny są zazwyczaj o 10-15% niższe niż na popularnych portalach ogłoszeniowych, a opis stanu technicznego jest znacznie bardziej rygorystyczny i obiektywny."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Jakie są dodatkowe koszty przy zakupie na aukcji?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Do wylicytowanej kwoty netto należy doliczyć tzw. Aufgeld (prowizję domu aukcyjnego - ok. 3.5%) oraz Exportaufgeld (opłatę za dokumenty eksportowe - ok. 140€). Wszystkie te koszty są jawne i przedstawiamy je przed licytacją."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Czy mogę zrezygnować z zakupu po wygranej aukcji?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Wygrana aukcja jest prawnie wiążąca. Rezygnacja wiąże się z karami umownymi naliczanymi przez dom aukcyjny (zazwyczaj ok. 10% wartości pojazdu). Dlatego licytujemy tylko sprawdzone samochody, co do których jesteś pewien."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Czy pomagacie z akcyzą i rejestracją w Polsce?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Tak. Oferujemy kompleksową obsługę. Przygotowujemy komplet dokumentów do Wydziału Komunikacji, tłumaczenia oraz pomagamy w opłaceniu akcyzy. Możemy dostarczyć auto 'pod dom', gotowe do rejestracji."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Jaki jest całkowity czas realizacji zamówienia?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Od momentu wygrania licytacji do dostarczenia auta pod Twój dom mija zazwyczaj od 7 do 14 dni. Zależy to od szybkości księgowania przelewów międzynarodowych oraz dostępności dokumentów wyrejestrowania (Fahrzeugbrief) u niemieckiego sprzedawcy."
                                }
                            }
                        ]
                    })
                }}
            />
            <FaqSection />
        </div>
    )
}
