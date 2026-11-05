export interface FaqItem {
    question: string
    answer: string
}

// Jedno źródło pytań: widoczna sekcja FAQ i dane strukturalne FAQPage muszą mieć identyczną treść.
export const faqItems: FaqItem[] = [
    {
        question: "Ile kosztuje sprowadzenie auta z Niemiec?",
        answer: "Na koszt składa się cena auta, opłaty aukcyjne (Aufgeld ok. 3–4% i opłata eksportowa ok. 120–180 €), transport do Polski (zwykle 1500–3500 zł), akcyza (3,1% lub 18,6% wartości auta), tłumaczenia, badanie techniczne i rejestracja (ok. 400–600 zł) oraz nasza stała prowizja 2470 zł. Dokładną kwotę dla konkretnego auta policzysz w naszym kalkulatorze kosztów importu.",
    },
    {
        question: "Czy depozyt jest zwrotny?",
        answer: "Tak, w 100%. Jeśli nie uda nam się wylicytować wybranego przez Ciebie samochodu lub zrezygnujesz przed licytacją, depozyt wraca na Twoje konto bezzwłocznie. Depozyt wynosi 2470 zł — zatrzymujemy go (jako całą naszą prowizję) tylko w momencie sukcesu - czyli zakupu auta.",
    },
    {
        question: "Ile trwa transport samochodu?",
        answer: "Standardowo transport trwa od 3 do 7 dni roboczych od momentu zaksięgowania wpłaty za samochód u niemieckiego sprzedawcy. Czas ten zależy od lokalizacji auta w Niemczech i dostępności naszych lawet.",
    },
    {
        question: "Czy osoba prywatna może kupić auto na aukcji B2B w Niemczech?",
        answer: "Bezpośrednio nie. Platformy takie jak BCA, AUTO1 czy Autobid są zamknięte dla osób prywatnych i wymagają konta firmowego (dealerskiego). Kupujesz przez nas: licytujemy na naszym koncie firmowym w Niemczech, a Ty dostajesz auto wraz z kompletem dokumentów do rejestracji w Polsce.",
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
    {
        question: "Ile wynosi akcyza na auto z Niemiec w 2026 roku?",
        answer: "Akcyza to 3,1% wartości auta dla silników do 2000 cm³ i 18,6% powyżej 2000 cm³. Hybrydy (HEV) mają stawki obniżone o połowę: 1,55% i 9,3%. Hybrydy plug-in do 2000 cm³ (do końca 2029 r.) oraz samochody elektryczne są zwolnione z akcyzy. Deklarację AKC-U/S składasz i akcyzę płacisz w ciągu 14 dni od powstania obowiązku podatkowego (w praktyce od przywiezienia auta do Polski).",
    },
    {
        question: "Czy mogę zrezygnować z zakupu po wygranej aukcji?",
        answer: "Wygrana aukcja jest prawnie wiążąca. Rezygnacja wiąże się z karami umownymi naliczanymi przez dom aukcyjny (zazwyczaj ok. 10% wartości pojazdu). Dlatego licytujemy tylko sprawdzone samochody, co do których jesteś pewien.",
    },
    {
        question: "Czy pomagacie z akcyzą i rejestracją w Polsce?",
        answer: "Tak. Oferujemy kompleksową obsługę. Przygotowujemy komplet dokumentów do Wydziału Komunikacji, tłumaczenia oraz pomagamy w opłaceniu akcyzy. Możemy dostarczyć auto 'pod dom', gotowe do rejestracji.",
    },
    {
        question: "Jaki jest całkowity czas realizacji zamówienia?",
        answer: "Od momentu wygrania licytacji do dostarczenia auta pod Twój dom mija zazwyczaj od 7 do 14 dni. Zależy to od szybkości księgowania przelewów międzynarodowych oraz dostępności dokumentów wyrejestrowania (Fahrzeugbrief) u niemieckiego sprzedawcy.",
    },
]

export function faqJsonLd(items: FaqItem[] = faqItems) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    }
}
