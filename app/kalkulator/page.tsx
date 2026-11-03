import { Calculator } from "@/components/calculator"
import { CALCULATOR_CONFIG } from "@/lib/calculator-constants"
import { faqJsonLd, type FaqItem } from "@/lib/faq"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kalkulator Akcyzy za Samochód z Niemiec 2026",
    description: "Kalkulator akcyzy 2026 i kosztów sprowadzenia auta z Niemiec: stawki 3,1% / 18,6%, hybrydy, elektryki 0%. Policz transport, rejestrację i pełny koszt.",
    alternates: {
        canonical: "https://www.sprowadzoneauto.pl/kalkulator",
    },
    openGraph: {
        title: "Kalkulator Sprowadzenia Auta z Niemiec 2026 — Akcyza i Opłaty",
        description: "Oblicz całkowity koszt sprowadzenia auta z Niemiec. Aktualne stawki akcyzy, koszty rejestracji i transportu.",
        url: "https://www.sprowadzoneauto.pl/kalkulator",
        images: ["https://www.sprowadzoneauto.pl/opengraph-image"],
    },
}

import { ContactForm } from "@/components/contact-form"
import { ArrowRight, AlertTriangle } from "lucide-react"
import Link from "next/link"

const calculatorFaq: FaqItem[] = [
    {
        question: "Ile kosztuje sprowadzenie auta z Niemiec w 2026 roku?",
        answer: "Do ceny auta doliczasz akcyzę (3,1% dla silników do 2000 cm³, 18,6% powyżej; hybrydy 1,55% lub 9,3%; elektryki 0%), transport lawetą (zwykle 1500–3500 zł), tłumaczenia (ok. 250 zł), badanie techniczne (149 zł) i rejestrację (ok. 160 zł). Przy zakupie przez pośrednika dochodzi jego prowizja. Przy aucie za 20 000 € z silnikiem do 2.0 łączne opłaty razem z prowizją pośrednika to zwykle ok. 7–9 tys. zł.",
    },
    {
        question: "Jak obliczyć akcyzę za auto z Niemiec?",
        answer: "Kwotę z faktury lub umowy w euro przelicz na złote po średnim kursie NBP z dnia poprzedzającego powstanie obowiązku podatkowego i pomnóż przez stawkę: 3,1% (silnik do 2000 cm³) albo 18,6% (powyżej 2000 cm³). Dla hybryd HEV stawki wynoszą 1,55% i 9,3%, plug-in do 2000 cm³ i elektryki są zwolnione.",
    },
    {
        question: "Jakie opłaty trzeba zapłacić za auto z Niemiec po przyjeździe do Polski?",
        answer: "Akcyzę (deklaracja AKC-U/S w ciągu 14 dni od przywozu), tłumaczenia przysięgłe dokumentów, badanie techniczne w Polsce oraz opłaty rejestracyjne w wydziale komunikacji (tablice, dowód, nalepka). Rejestracji trzeba dokonać w ciągu 30 dni od przywozu.",
    },
    {
        question: "Czy kalkulator uwzględnia cło i VAT?",
        answer: "Przy imporcie auta z Niemiec i innych krajów UE nie płaci się cła. VAT jest zawarty w cenie auta z faktury (lub auto jest sprzedawane w procedurze marży). Osobne zasady dotyczą firm kupujących nowe auta oraz aut spoza UE — wtedy dochodzi odprawa celna, cło i VAT.",
    },
]

const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Kalkulator sprowadzenia auta z Niemiec",
    "url": "https://www.sprowadzoneauto.pl/kalkulator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "inLanguage": "pl-PL",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PLN" },
    "publisher": { "@id": "https://www.sprowadzoneauto.pl/#organization" },
}

export default function CalculatorPage() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Strona Główna",
                "item": "https://www.sprowadzoneauto.pl"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Kalkulator",
                "item": "https://www.sprowadzoneauto.pl/kalkulator"
            }
        ]
    }

    return (
        <div className="w-full overflow-x-hidden">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(calculatorFaq)) }}
        />
        <div className="w-full mx-auto max-w-6xl px-4 md:px-8 py-12 md:py-20">
            <div className="max-w-4xl mx-auto mb-12 text-center">
                <h1 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter italic">Kalkulator akcyzy 2026 <span className="text-primary not-italic">i kosztów importu auta z Niemiec</span></h1>
                <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                    Skorzystaj z naszego precyzyjnego narzędzia, aby oszacować całkowity koszt sprowadzenia samochodu "pod dom".
                    Uwzględniamy wszystkie opłaty urzędowe obowiązujące w 2026 roku.
                </p>
            </div>

            <Calculator />

            <div className="mt-32 max-w-6xl mx-auto relative px-4">
                {/* Decorative background elements (hide on mobile; unify color) */}
                <div className="hidden md:block absolute top-0 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                <div className="hidden md:block absolute bottom-0 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start text-foreground">
                    <div className="space-y-12 bg-transparent">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic leading-none">
                            Koszt sprowadzenia <br />
                            <span className="text-primary not-italic">Niemcy / UE</span>
                        </h2>

                        <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
                            Całkowity koszt importu to nie tylko cena na fakturze. W 2026 roku musisz uwzględnić szereg opłat urzędowych oraz logistycznych.
                        </p>

                        <div className="space-y-10">
                            <div className="group transition-all">
                                <h3 className="text-xl font-black mb-6 flex items-center gap-4 text-foreground uppercase tracking-tight">
                                    <span className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary text-sm font-black italic border border-primary/20">01</span>
                                    Podatek Akcyzowy (AKC-U/S)
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
                                    To największy koszt dodatkowy. Stawka zależy od pojemności silnika i rodzaju napędu:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
                                    {[
                                        { rate: "3.1%", desc: "do 2000 cm³" },
                                        { rate: "18.6%", desc: "powyżej 2000 cm³" },
                                        { rate: "1.55% / 9.3%", desc: "hybrydy HEV (do / pow. 2000 cm³)" },
                                        { rate: "0%", desc: "elektryczne i PHEV do 2000 cm³" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="bg-card border border-border p-5 rounded-3xl flex flex-col group-hover:border-primary/40 transition-all shadow-sm">
                                            <span className="text-primary font-black text-2xl">{item.rate}</span>
                                            <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-1">{item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="group transition-all">
                                <h3 className="text-xl font-black mb-6 flex items-center gap-4 text-foreground uppercase tracking-tight">
                                    <span className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground text-sm font-black italic border border-border">02</span>
                                    Transport i Logistyka
                                </h3>
                                <div className="bg-muted border border-border p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] group-hover:border-primary/20 transition-all">
                                    <p className="text-base text-muted-foreground leading-relaxed m-0 italic font-medium">
                                        Transport wyceniamy indywidualnie w zależności od odległości. Koszt zazwyczaj mieści się w granicach <span className="text-foreground font-bold not-italic underline decoration-primary/30 underline-offset-4">1500 - 3500 zł</span>. Przy powrocie "na kołach" dolicz tablice zjazdowe (ok. 150-250 EUR).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-5 md:p-6 rounded-2xl md:rounded-2xl border border-border shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12" />

                        <h2 className="text-xl md:text-2xl font-black mb-8 text-foreground uppercase tracking-tight flex items-center justify-between">
                            <span>Procedura i Dokumenty</span>
                            <ArrowRight className="w-5 h-5 text-primary animate-pulse shrink-0" />
                        </h2>

                        <div className="space-y-8 relative">
                            <div className="absolute left-[3px] top-2 bottom-2 w-0.5 bg-border -z-0" />

                            {[
                                {
                                    step: "Krok 1: Zakup",
                                    desc: "Otrzymujesz: Umowę (Kaufvertrag) lub Fakturę oraz oba dowody rejestracyjne (Teil I i Teil II).",
                                    active: true
                                },
                                {
                                    step: "Krok 2: Akcyza i Tłumaczenia",
                                    desc: "Masz 14 dni na deklarację AKC-U/S i zapłatę akcyzy. Wymagane są również tłumaczenia przysięgłe dokumentów.",
                                    active: false
                                },
                                {
                                    step: "Krok 3: Rejestracja",
                                    desc: "Pierwsze badanie techniczne w kraju (149 zł) oraz rejestracja w Twoim Wydziale Komunikacji (161.50 zł).",
                                    active: false
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="relative pl-10 group/item">
                                    <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 transition-all ${item.active ? "bg-primary border-primary scale-150 shadow-[0_0_10px_rgba(245,158,11,0.5)]" : "bg-card border-muted-foreground/30 group-hover/item:border-primary"}`} />
                                    <h4 className={`font-black text-xs uppercase tracking-[0.2em] mb-3 transition-colors ${item.active ? "text-primary" : "text-muted-foreground group-hover/item:text-primary"}`}>
                                        {item.step}
                                    </h4>
                                    <p className="text-sm text-foreground/80 leading-relaxed font-bold">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-border flex items-start gap-3 px-2 p-5 bg-muted/30 rounded-lg">
                            <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                <AlertTriangle className="w-4 h-4 text-orange-500" />
                            </div>
                            <p className="text-xs font-bold text-muted-foreground italic leading-relaxed m-0 uppercase tracking-wider">
                                Uwaga: Import z poza UE (np. Szwajcaria, USA) to dodatkowe <span className="text-foreground font-black">Cło (10%)</span> oraz <span className="text-foreground font-black">Podatek VAT (23%)</span>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-primary text-primary-foreground p-6 md:p-10 rounded-2xl md:rounded-3xl border-2 border-primary/20 mt-32 relative overflow-hidden group shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-0 p-8 transform group-hover:scale-110 transition-transform duration-500">
                        <ArrowRight className="w-48 h-48 text-white opacity-10 -rotate-45" />
                    </div>

                    <div className="max-w-2xl relative z-10">
                        <h3 className="text-primary-foreground text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter italic drop-shadow-md">Kompleksowa Obsługa</h3>
                        <p className="text-primary-foreground/90 text-base leading-relaxed mb-0 font-bold italic drop-shadow-md">
                            Przejmujemy na siebie cały proces: od wyszukania auta na aukcjach i weryfikacji na miejscu u dealera, przez negocjacje, po przygotowanie kompletu dokumentów do rejestracji. Ty tylko odbierasz samochód pod domem.
                        </p>
                    </div>
                </div>
            </div>

            <section className="mt-32 max-w-3xl mx-auto px-4" aria-labelledby="jak-liczyc">
                <h2 id="jak-liczyc" className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tighter italic text-foreground">
                    Jak policzyć koszt sprowadzenia auta z Niemiec? <span className="text-primary not-italic">Wzór</span>
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-headings:text-foreground prose-headings:font-black prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline">
                    <p>
                        Kalkulator liczy całkowity koszt auta „pod dom” według prostego wzoru:
                        <strong> cena auta + akcyza + transport + tłumaczenia + przegląd + rejestracja + prowizja</strong>.
                        Przyjmowane wartości:
                    </p>
                    <ul>
                        <li><strong>Cena auta</strong> — kwota z faktury lub umowy w euro, przeliczona po kursie (domyślnie {CALCULATOR_CONFIG.DEFAULT_EXCHANGE_RATE.toFixed(2).replace(".", ",")} zł/€ — możesz go zmienić).</li>
                        <li><strong>Akcyza</strong> — procent od ceny w złotych, zależnie od pojemności i napędu (tabela poniżej).</li>
                        <li><strong>Transport lawetą</strong> — {CALCULATOR_CONFIG.TRANSPORT_MIN} – {CALCULATOR_CONFIG.TRANSPORT_MAX} zł, zależnie od odległości (<Link href="/blog/transport-auta-z-niemiec-koszt">ile kosztuje transport auta z Niemiec</Link>).</li>
                        <li><strong>Tłumaczenia przysięgłe</strong> — ok. {CALCULATOR_CONFIG.TRANSLATION} zł.</li>
                        <li><strong>Badanie techniczne</strong> — od {CALCULATOR_CONFIG.INSPECTION_BASE} zł (więcej przy LPG lub po szkodzie).</li>
                        <li><strong>Rejestracja</strong> — {CALCULATOR_CONFIG.REGISTRATION_STANDARD.toFixed(2).replace(".", ",")} zł (tablice indywidualne {CALCULATOR_CONFIG.REGISTRATION_INDIVIDUAL} zł).</li>
                        <li><strong>Prowizja</strong> — przy sprowadzeniu auta przez nas stała: {CALCULATOR_CONFIG.COMMISSION} zł.</li>
                    </ul>
                    <h3>Najczęstsze pytania o koszty</h3>
                </div>
                <div className="mt-4 space-y-3">
                    {calculatorFaq.map((item) => (
                        <details key={item.question} className="group rounded-2xl border border-border bg-card p-5">
                            <summary className="cursor-pointer list-none font-bold text-foreground flex justify-between gap-4">
                                <h3 className="text-base">{item.question}</h3>
                                <span className="text-primary transition-transform group-open:rotate-45" aria-hidden>+</span>
                            </summary>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            <section className="mt-32 max-w-3xl mx-auto px-4" aria-labelledby="akcyza-2026">
                <h2 id="akcyza-2026" className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tighter italic text-foreground">
                    Akcyza 2026 na auto z Niemiec — <span className="text-primary not-italic">stawki i przykład</span>
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-headings:text-foreground prose-headings:font-black prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline">
                    <p>
                        Akcyzę płaci się od samochodu osobowego sprowadzonego do Polski z innego kraju UE, w tym z Niemiec.
                        Podstawą opodatkowania jest kwota zapłacona za auto (z faktury lub umowy), przeliczona na złote po kursie
                        średnim NBP z dnia poprzedzającego powstanie obowiązku podatkowego. Stawka zależy od pojemności silnika i rodzaju napędu:
                    </p>
                    <div className="not-prose overflow-x-auto my-6 rounded-2xl border border-border">
                        <table className="w-full text-sm">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="text-left p-3 font-black text-foreground">Rodzaj auta</th>
                                    <th className="text-left p-3 font-black text-foreground">Pojemność silnika</th>
                                    <th className="text-left p-3 font-black text-foreground">Akcyza 2026</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Benzyna / diesel / LPG", "do 2000 cm³", "3,1%"],
                                    ["Benzyna / diesel / LPG", "powyżej 2000 cm³", "18,6%"],
                                    ["Hybryda (HEV)", "do 2000 cm³", "1,55%"],
                                    ["Hybryda (HEV)", "2001–3500 cm³", "9,3%"],
                                    ["Hybryda plug-in (PHEV)", "do 2000 cm³", "0% (zwolnienie do końca 2029 r.)"],
                                    ["Hybryda plug-in (PHEV)", "2001–3500 cm³", "9,3%"],
                                    ["Elektryczny (BEV) / wodorowy", "—", "0%"],
                                ].map(([type, cc, rate]) => (
                                    <tr key={type + cc} className="border-t border-border">
                                        <td className="p-3 text-muted-foreground">{type}</td>
                                        <td className="p-3 text-muted-foreground whitespace-nowrap">{cc}</td>
                                        <td className="p-3 font-bold text-foreground">{rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h3>Przykład: ile wyniesie akcyza i całkowity koszt?</h3>
                    <p>
                        Kupujesz na aukcji Audi A4 2.0 TDI za <strong>20 000 €</strong>. Przy kursie 4,21 zł podstawa to 84 200 zł,
                        więc akcyza (3,1%) wynosi <strong>ok. 2 610 zł</strong>. Gdyby to był silnik 3.0 TDI (18,6%), akcyza
                        wzrosłaby do <strong>ok. 15 660 zł</strong> — dlatego pojemność silnika ma tak duże znaczenie przy wyborze auta do importu.
                        Do tego dochodzą: transport (1500–3500 zł), tłumaczenia (ok. 250 zł), badanie techniczne (149 zł),
                        rejestracja (161,50 zł) i nasza prowizja (2500 zł).
                    </p>
                    <h3>Terminy i formalności</h3>
                    <ul>
                        <li>Deklarację <strong>AKC-U/S</strong> składasz i akcyzę płacisz w ciągu 14 dni od powstania obowiązku podatkowego (w praktyce od przywiezienia auta do Polski) — w urzędzie skarbowym lub online przez PUESC.</li>
                        <li>Potwierdzenie zapłaty akcyzy (lub zwolnienia) jest potrzebne do rejestracji auta w wydziale komunikacji.</li>
                        <li>Na rejestrację auta sprowadzonego z UE masz 30 dni od dnia przywozu do Polski.</li>
                    </ul>
                    <p>
                        Więcej szczegółów: <Link href="/blog/akcyza-2026-stawki">akcyza 2026 — stawki i ulgi</Link>,
                        {" "}<Link href="/blog/akcyza-za-samochod-online-puesc">jak zapłacić akcyzę za samochód online</Link>,
                        {" "}<Link href="/blog/koszt-sprowadzenia-auta-z-niemiec-2026">pełne wyliczenie kosztu sprowadzenia auta z Niemiec</Link>
                        {" "}oraz <Link href="/blog/rejestracja-auta-z-niemiec-2026">rejestracja auta z Niemiec krok po kroku</Link>.
                        Jeśli chcesz, żebyśmy znaleźli i sprowadzili auto za Ciebie, zobacz jak działa
                        {" "}<Link href="/">sprowadzanie aut z Niemiec na zamówienie</Link>.
                    </p>
                </div>
            </section>

            <div className="mt-32 max-w-4xl mx-auto px-4 pb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-6 uppercase tracking-tight italic text-foreground">Masz pytania co do wyceny?</h2>
                    <p className="text-muted-foreground font-bold uppercase tracking-[0.2em]">Skontaktuj się bezpośrednio z naszym ekspertem.</p>
                </div>
                <ContactForm mode="simple" title="Zapytaj o wycenę" description="Nasz ekspert pomoże Ci skalkulować opłacalność sprowadzenia danego egzemplarza." />
            </div>
        </div>
        </div>
    )
}
