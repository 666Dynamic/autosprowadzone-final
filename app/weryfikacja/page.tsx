import { ContactForm } from "@/components/contact-form"
import { ShieldCheck, MapPin, Euro, Search, CheckCircle2, Sparkles, ChevronRight, Globe, Clock } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Weryfikacja Aut w Niemczech | autosprowadzone.pl",
    description: "Sprawdzenie auta przed zakupem w Niemczech. Inspekcja techniczna, pomiar lakieru, diagnostyka komputerowa. Obszar Bremen i całe Niemcy.",
}

export default function VerificationPage() {
    return (
        <div className="bg-transparent">
            <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
                <div className="max-w-6xl mx-auto space-y-24">

                    {/* Header Section */}
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
                            <Sparkles className="w-4 h-4" /> Profesjonalny Audyt Pojazdu
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-none uppercase tracking-tighter text-foreground italic">
                            Weryfikacja <br /><span className="text-primary not-italic">Zanim Kupisz</span>
                        </h1>
                        <p className="text-base text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
                            Nie ryzykuj oszczędności życia. Wyślij naszego eksperta na miejsce, aby sprawdził auto od osoby prywatnej lub dealera w całych Niemczech.
                        </p>
                    </div>

                    {/* GOLD AMBER: Sam znalazłeś auto? */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full scale-75 pointer-events-none group-hover:bg-primary/40 transition-colors" />

                        <div className="relative bg-primary/10 p-1 md:p-3 rounded-[2rem] md:rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(245,158,11,0.2)] overflow-hidden border border-primary/20 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.01]">
                            {/* Decorative Motive / Pattern */}
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/30 rounded-full translate-x-32 -translate-y-32 blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 translate-y-48 blur-3xl pointer-events-none" />

                            <div className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-[1.75rem] md:rounded-[2.5rem] flex flex-col lg:flex-row items-stretch relative overflow-hidden">
                                {/* Subtle Pattern Overlay */}
                                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-grid-white" />

                                {/* Content Area */}
                                <div className="lg:w-3/5 p-6 md:p-14 space-y-6 md:space-y-8 relative z-10 flex flex-col justify-center">
                                    <div className="inline-block px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest drop-shadow-md w-fit">
                                        Import Indywidualny
                                    </div>
                                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] italic drop-shadow-lg">
                                        Sam znalazłeś auto? <br /><span className="not-italic">Sprawdzimy je dla Ciebie</span>
                                    </h2>
                                    <p className="text-sm md:text-lg text-white/95 font-medium leading-relaxed max-w-2xl drop-shadow-sm">
                                        Znalazłeś interesującą ofertę w Niemczech? Nie ryzykuj wyjazdu w ciemno.
                                        Nasi eksperci przeprowadzą dla Ciebie pełną weryfikację sprzedawcy oraz audyt techniczny na miejscu.
                                    </p>
                                    <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
                                        {["Analiza ogłoszenia", "Weryfikacja sprzedawcy", "Inspekcja techniczna", "Negocjacje ceny"].map((tag, i) => (
                                            <div key={i} className="px-3 py-1.5 md:px-5 md:py-2.5 bg-white/10 md:bg-white/20 rounded-lg md:rounded-xl border border-white/20 md:border-white/30 text-white font-bold text-[10px] md:text-xs uppercase tracking-wider drop-shadow-md">
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Image & CTA Area */}
                                <div className="lg:w-2/5 p-4 md:p-8 relative flex flex-col justify-end min-h-[350px] md:min-h-[400px]">
                                    {/* Expert Image Background with mask */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="/expert-inspection.png"
                                            alt="Ekspert autosprowadzone.pl podczas inspekcji"
                                            fill
                                            className="object-cover object-center opacity-90 mix-blend-multiply"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                            priority={false}
                                            quality={70}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/90 via-amber-600/20 to-transparent" />
                                    </div>

                                    <div className="relative z-10 p-5 md:p-6 rounded-2xl shadow-2xl space-y-4 overflow-hidden bg-card text-card-foreground border border-border">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
                                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
                                        <div className="space-y-2 relative z-10">
                                            <div className="text-[10px] font-bold uppercase tracking-widest bg-primary/20 text-primary px-3 py-1 rounded-full w-fit border border-primary/20">Weryfikacja pod Bremen</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl md:text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-none text-foreground dark:text-white font-display italic">250 €</span>
                                            </div>
                                            <p className="font-bold text-[11px] md:text-sm text-muted-foreground leading-relaxed">
                                                Pełna inspekcja techniczna, pomiar lakieru, diagnostyka komputerowa i kompleksowy raport rzeczoznawcy.
                                            </p>
                                        </div>
                                        <div className="space-y-4 relative z-10">
                                            <a href="#form" className="flex items-center justify-center gap-2 md:gap-3 bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all h-11 md:h-12 lg:h-14 rounded-xl font-black uppercase tracking-wide text-xs md:text-sm lg:text-base shadow-lg shadow-primary/30 group/btn [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                                                Zleć Inspekcję
                                                <ChevronRight className="w-4 md:w-5 h-4 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                                            </a>
                                            <p className="text-[10px] text-center text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                                                Dojazd w dowolne miejsce w Niemczech
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New Section: Dealer vs Private */}
                    <section className="py-24 border-y border-border">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="space-y-8 bg-card p-10 rounded-[3rem] border border-primary/30 shadow-lg">
                                <div className="p-3 bg-primary rounded-2xl w-fit text-primary-foreground">
                                    <Search className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-foreground leading-none line-clamp-2">
                                    Dealerzy i Salony <br /><span className="text-primary italic">Mobile.de / AutoScout24</span>
                                </h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    Większość profesjonalnych ogłoszeń pochodzi od Autohausów. Nasza weryfikacja obejmuje:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Sprawdzenie historii i opinii o danym salonie",
                                        "Weryfikacja czy auto nie jest ofertą typu 'tylko na eksport'",
                                        "Sprawdzenie kompletności dokumentacji serwisowej",
                                        "Analiza czy podana cena zawiera podatek VAT (Brutto/Netto)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-bold text-foreground/80 lowercase first-letter:uppercase">
                                            <div className="text-primary mt-1 flex-shrink-0">•</div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-8 bg-card p-10 rounded-[3rem] border border-primary/30 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 opacity-5">
                                    <ShieldCheck className="w-32 h-32 text-primary" />
                                </div>
                                <div className="p-3 bg-primary rounded-2xl w-fit text-primary-foreground">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-foreground leading-none line-clamp-2">
                                    Osoby Prywatne <br /><span className="text-primary italic">eBay Kleinanzeigen</span>
                                </h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    Tu czyha najwięcej pułapek. Kupując od osoby prywatnej, kładziemy szczególny nacisk na:
                                </p>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Potwierdzenie autentyczności ogłoszenia i tożsamości sprzedawcy",
                                        "Wykrywanie prób wyłudzenia zaliczki (popularne oszustwa)",
                                        "Weryfikacja faktycznego stanu prawnego pojazdu",
                                        "Osobista rozmowa ze sprzedawcą przed planowanym wyjazdem"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-bold text-foreground/80 lowercase first-letter:uppercase">
                                            <div className="text-primary mt-1 flex-shrink-0">•</div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Risks & Scope Grid */}
                    <section className="py-24 border-b border-border">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Left: Risks */}
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground leading-none">
                                    Ryzyka zakupu <br /><span className="text-primary italic">na własną rękę</span>
                                </h2>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    Rynek niemiecki, choć uchodzi za wzorowy, pełen jest pułapek zastawianych na kupujących z zagranicy.
                                    Oszustwa na eBay Kleinanzeigen stały się plagą.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { t: "Oszustwa na zaliczkę", d: "Fikcyjne ogłoszenia w super cenach. Sprzedawca prosi o zaliczkę na transport i znika." },
                                        { t: "Ukryta historia wypadkowa", d: "Auta ze szkodą całkowitą naprawiane tanim kosztem i sprzedawane jako bezwypadkowe." },
                                        { t: "Cofnięte liczniki", d: "Proceder ten nadal dotyczy ok. 30% aut eksportowych z Niemiec." },
                                        { t: "Wady ukryte silnika", d: "Sprzedawcy prywatni często pozbywają się aut tuż przed drogimi naprawami (DPF, turbo, rozrząd)." }
                                    ].map((risk, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                                            <div className="mt-1 text-red-500 font-black">!</div>
                                            <div>
                                                <h4 className="font-black uppercase text-xs text-red-600 dark:text-red-300">{risk.t}</h4>
                                                <p className="text-xs text-muted-foreground font-bold leading-relaxed">{risk.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Right: Scope */}
                            <div className="bg-card border-2 border-primary/30 p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5"><Search className="w-32 h-32 text-primary" /></div>
                                <h3 className="text-2xl font-black mb-8 flex items-center uppercase tracking-tight text-foreground">
                                    <Search className="mr-3 h-8 w-8 text-primary" /> Zakres Inspekcji
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    {[
                                        { title: "Lakier i Nadwozie", desc: "Pomiar grubości powłoki na każdym elemencie, wykrywanie napraw blacharskich i szpachli. Sprawdzenie oryginalności szwów i zgrzewów." },
                                        { title: "Diagnostyka & Silnik", desc: "Pełny odczyt błędów (DTC). Analiza parametrów pracy turbiny, wtrysków i filtra DPF w czasie jazdy próbnej." },
                                        { title: "Układ Jezdny i Hamulcowy", desc: "Weryfikacja stanu zawieszenia i układu kierowniczego. Sprawdzenie zużycia tarcz, klocków oraz stanu opon." },
                                        { title: "Weryfikacja Historii & VIN", desc: "Sprawdzenie wpisów w międzynarodowych bazach ASO i autentyczności przebiegu (TÜV/Dekra)." },
                                        { title: "AVILOO (EV/Hybrid)", desc: "Certyfikowany test stanu zdrowia baterii (SoH). Kluczowy przy autach elektrycznych." }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 group/item">
                                            <div className="bg-primary text-white font-black p-1 rounded-lg h-8 w-8 flex items-center justify-center shrink-0 text-xs shadow-md group-hover/item:scale-110 transition-transform font-sans">0{idx + 1}</div>
                                            <div>
                                                <h4 className="font-black text-foreground uppercase tracking-tight mb-1 group-hover/item:text-primary transition-colors text-base">{item.title}</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed font-bold">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Pricing Grid */}
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch pt-12">
                        {/* Package 1 */}
                        <div className="bg-card/80 backdrop-blur-sm text-card-foreground p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-between border border-border min-h-[500px] md:min-h-[450px] lg:min-h-[500px]">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 md:px-6 lg:px-8 py-2 md:py-3 font-black text-[10px] md:text-xs uppercase tracking-widest rounded-bl-2xl md:rounded-bl-3xl z-10 max-w-[60%] text-center leading-tight">Najczęściej wybierany</div>
                            <div className="space-y-4 md:space-y-5 relative z-10 pt-4 md:pt-3">
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-start md:items-center text-foreground flex-col md:flex-row gap-2 md:gap-3">
                                    <MapPin className="h-6 md:h-8 w-6 md:w-8 text-primary shrink-0" />
                                    <span>Region Bremen (Baza)</span>
                                </h3>
                                <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest leading-tight">Obszar do 100km od Osterholz-Scharmbeck</p>

                                <div className="space-y-3 md:space-y-4">
                                    {[
                                        "Pełny audyt mechaniczny i wizualny",
                                        "Pomiar powłoki lakierniczej",
                                        "Diagnostyka komputerowa modułów",
                                        "Raport PDF + min. 50 zdjęć HD",
                                        "Report wideo z pracy silnika i jazdy",
                                        "Negocjacje ceny w cenie"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-xs md:text-sm font-bold uppercase tracking-tight text-foreground leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-10 md:pt-12 flex flex-col gap-4 relative z-10">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                                    <div>
                                        <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Koszt ryczałtowy</div>
                                        <div className="text-2xl md:text-3xl font-black text-foreground tracking-tighter">250 €</div>
                                    </div>
                                    <a href="#form" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg w-full sm:w-auto text-center">Zamów teraz</a>
                                </div>
                            </div>
                        </div>

                        {/* Package 2 */}
                        <div className="bg-card/80 backdrop-blur-sm text-card-foreground p-6 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between border border-border min-h-[500px] md:min-h-[450px] lg:min-h-[500px]">
                            <div className="space-y-8">
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-start md:items-center text-foreground flex-col md:flex-row gap-2 md:gap-3">
                                    <Globe className="h-6 md:h-8 w-6 md:w-8 text-primary shrink-0" />
                                    <span>Pozostałe Regiony DE</span>
                                </h3>
                                <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest leading-tight">Berlin, Hamburg, Monachium i okolice</p>

                                <p className="text-foreground/80 font-bold leading-relaxed text-sm">
                                    Dla aut poza naszym głównym regionem przygotowujemy indywidualną kalkulację kosztów dojazdu.
                                    Współpracujemy z rzeczoznawcami w całych Niemczech, co gwarantuje szybki czas reakcji.
                                </p>

                                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                    <p className="text-xs font-black uppercase text-primary tracking-widest">Procedura wyceny:</p>
                                    <ul className="mt-4 space-y-3">
                                        <li className="text-xs font-bold text-muted-foreground uppercase flex gap-2"><div className="text-primary">•</div> Weryfikacja dostępności rzeczoznawcy</li>
                                        <li className="text-xs font-bold text-muted-foreground uppercase flex gap-2"><div className="text-primary">•</div> Kalkulacja kosztów dojazdu i paliwa</li>
                                        <li className="text-xs font-bold text-muted-foreground uppercase flex gap-2"><div className="text-primary">•</div> Realizacja zazwyczaj w 24-48h</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                                <div>
                                    <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Wycena indywidualna</div>
                                    <div className="text-xl md:text-2xl font-black text-foreground tracking-tighter uppercase whitespace-nowrap">Kontakt</div>
                                </div>
                                <a href="#form" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg w-full sm:w-auto text-center">Zapytaj o cenę</a>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div id="form" className="pt-12 scroll-mt-20 max-w-4xl mx-auto">
                        <ContactForm mode="weryfikacja" />
                    </div>

                    {/* Bottom Features */}
                    <div className="grid md:grid-cols-3 gap-8 pb-12">
                        <div className="bg-secondary/30 p-8 rounded-[2rem] border-2 border-transparent text-center group hover:border-primary transition-all shadow-sm">
                            <Clock className="w-12 h-12 text-primary mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                            <h3 className="font-black uppercase text-sm mb-2 text-foreground">Szybkość</h3>
                            <p className="text-xs text-muted-foreground font-bold leading-relaxed">Wstępna analiza ogłoszenia w 2h. Inspekcja na miejscu zazwyczaj do 24h.</p>
                        </div>
                        <div className="bg-secondary/30 p-8 rounded-[2rem] border-2 border-transparent text-center group hover:border-primary transition-all shadow-sm">
                            <Euro className="w-12 h-12 text-primary mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                            <h3 className="font-black uppercase text-sm mb-2 text-foreground">Oszczędność</h3>
                            <p className="text-xs text-muted-foreground font-bold leading-relaxed">Koszt audytu najczęściej zwraca się kilkukrotnie dzięki skutecznym negocjacjom.</p>
                        </div>
                        <div className="bg-secondary/30 p-8 rounded-[2rem] border-2 border-transparent text-center group hover:border-primary transition-all shadow-sm">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                            <h3 className="font-black uppercase text-sm mb-2 text-foreground">Bezpieczeństwo</h3>
                            <p className="text-xs text-muted-foreground font-bold leading-relaxed">Odrzucamy 7 na 10 sprawdzanych aut. Kupujemy tylko te godne polecenia.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
