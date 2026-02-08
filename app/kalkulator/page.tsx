import { Calculator } from "@/components/calculator"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kalkulator Akcyzy 2026 — Koszt Importu Auta z Niemiec",
    description: "Oblicz całkowity koszt sprowadzenia auta z Niemiec w 2026 roku. Sprawdź aktualne stawki akcyzy (3.1% / 18.6%), koszty rejestracji, transportu i prowizję pośrednika. Precyzyjne wyliczenie online.",
    alternates: {
        canonical: "https://sprowadzoneauto.pl/kalkulator",
    },
    openGraph: {
        title: "Kalkulator Akcyzy 2026 — Koszt Importu Auta",
        description: "Oblicz całkowity koszt sprowadzenia auta z Niemiec. Aktualne stawki akcyzy, koszty rejestracji i transportu.",
        url: "https://sprowadzoneauto.pl/kalkulator",
    },
}

import { ContactForm } from "@/components/contact-form"
import { ArrowRight, AlertTriangle } from "lucide-react"

export default function CalculatorPage() {
    return (
        <div className="w-full overflow-x-hidden">
        <div className="w-full mx-auto max-w-6xl px-4 md:px-8 py-12 md:py-20">
            <div className="max-w-4xl mx-auto mb-12 text-center">
                <h1 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter italic">Kalkulator <span className="text-primary not-italic">Kosztów Importu</span></h1>
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
                                        { rate: "1.55% / 9.3%", desc: "hybrydy (HEV/PHEV)" },
                                        { rate: "0%", desc: "auta elektryczne" },
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
                                        Koszt transportu lawetą zależy od odległości. Średnio z zachodnich Niemiec to ok. <span className="text-foreground font-bold not-italic underline decoration-primary/30 underline-offset-4">2000-3000 zł</span>. Przy powrocie "na kołach" dolicz tablice zjazdowe (ok. 150-250 EUR).
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
                                    desc: "Masz 14 dni na deklarację AKC-U/S i 30 dni na opłatę. Wymagane są również tłumaczenia przysięgłe dokumentów.",
                                    active: false
                                },
                                {
                                    step: "Krok 3: Rejestracja",
                                    desc: "Pierwsze badanie techniczne w kraju (ok. 100 zł) oraz rejestracja w Twoim Wydziale Komunikacji (161.50 zł).",
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
                            Przejmujemy na siebie cały proces: od weryfikacji auta i negocjacji, po przygotowanie kompletu dokumentów do rejestracji. Ty tylko odbierasz kluczyki pod domem.
                        </p>
                    </div>
                </div>
            </div>

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
