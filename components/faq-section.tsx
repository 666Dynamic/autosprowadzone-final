"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqItems = [
    {
        question: "Czy depozyt jest zwrotny?",
        answer: "Tak, w 100%. Jeśli nie uda nam się wylicytować wybranego przez Ciebie samochodu lub zrezygnujesz przed licytacją, depozyt wraca na Twoje konto bezzwłocznie. Zatrzymujemy go (jako prowizję) tylko w momencie sukcesu - czyli zakupu auta.",
    },
    {
        question: "Ile trwa transport samochodu?",
        answer: "Standardowo transport trwa od 3 do 7 dni roboczych od momentu zaksięgowania wpłaty za samochód u niemieckiego sprzedawcy. Czas ten zależy od lokalizacji auta w Niemczech i dostępności naszych lawet.",
    },
    {
        question: "Czy udzielacie gwarancji na samochody?",
        answer: "Jesteśmy agencją pośredniczącą w zakupie, a nie sprzedawcą (komisem), więc sami nie udzielamy gwarancji. Kupujesz auto bezpośrednio od niemieckiego dostawcy. Jednakże, dzięki dokładnym raportom rzeczoznawców, ryzyko wady jest minimalne. Istnieje możliwość wykupienia zewnętrznej gwarancji (np. Defend Insurance) po rejestracji w Polsce.",
    },
    {
        question: "Czy samochody są sprawdzone przed zakupem?",
        answer: "Tak. Licytujemy głównie na platformach (BCA, Auto1), które dostarczają szczegółowe raporty rzeczoznawców (często DEKRA/TÜV/SGS). Raport zawiera zdjęcia każdej rysy, pomiar lakieru i ocenę techniczną. Dodatkowo, na życzenie, wykonujemy własną weryfikację fizyczną na terenie Niemiec.",
    },
    {
        question: "Dlaczego warto kupować na aukcjach dealerskich, a nie na mobile.de?",
        answer: "Aukcje B2B to rynek hurtowy, niedostępny dla osób prywatnych. Auta pochodzą bezpośrednio z defleetu bankowego, leasingów i od autoryzowanych dealerów. Ceny są zazwyczaj o 10-15% niższe niż na popularnych portalach ogłoszeniowych, a opis stanu technicznego jest znacznie bardziej rygorystyczny i obiektywny.",
    },
    {
        question: "Jakie są dodatkowe koszty przy zakupie na aukcji?",
        answer: "Do wylicytowanej kwoty netto należy doliczyć tzw. Aufgeld (prowizję domu aukcyjnego - ok. 3.5%) oraz Exportaufgeld (opłatę za dokumenty eksportowe - ok. 140€). Wszystkie te koszty są jawne i przedstawiamy je przed licytacją.",
    },
]

export function FaqSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                        FAQ
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none text-foreground">
                        Częste <span className="text-primary italic">Pytania</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
                        Odpowiedzi na najczęściej zadawane pytania dotyczące importu.
                    </p>
                </div>

                <div className="space-y-3">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="border-2 border-border/50 rounded-2xl mb-3 px-6 bg-card/50 hover:border-primary/30 transition-all overflow-hidden"
                            >
                                <AccordionTrigger className="text-left font-bold uppercase tracking-tight text-sm hover:no-underline py-5">
                                    <span className="flex items-center gap-4">
                                        <span className="text-primary font-black opacity-40">0{idx + 1}</span>
                                        {item.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed text-sm font-medium pb-6 pt-2 border-t border-border/50">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-16 text-center pt-8 border-t border-border/30">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-muted/50 p-6 rounded-[2rem] border border-border">
                        <p className="text-sm font-bold text-muted-foreground px-2">Nie znalazłeś tego, czego szukasz?</p>
                        <Link href="/kontakt">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-12 px-6 rounded-lg font-semibold shadow-lg">
                                Napisz do nas
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
