import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ChevronRight, Gavel, MonitorCheck, TrendingUp, ShieldCheck, Globe, Zap, Search, Euro, Activity, ShieldEllipsis, Building2, Truck, AlertTriangle, Scale, Handshake } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Aukcje Samochodowe z Europy B2B | Tanie Auta Poleasingowe | autosprowadzone.pl",
    description: "Zyskaj dostęp do BCA, AUTO1 i 40+ zamkniętych platform aukcyjnych w całej Europie. Sprawdź, jak kupić auto poleasingowe 20% taniej niż na portalach. Ekspercka weryfikacja i transport.",
}

const mainPlatforms = [
    {
        name: "BCA Auction",
        description: "Eurolider remarketingu. Auta poflotowe, bankowe i największy w UE wybór aut dostawczych (LCV). Rygorystyczne raporty BCA 1-5.",
        stats: "1.3m+ aut rocznie",
        fees: "Ok. 3.9% (min. ~500€) + opłata eksportowa",
        color: "bg-[#002f5f]"
    },
    {
        name: "AUTO1.com",
        description: "Największa cyfrowa giełda w Europie. 30k+ nowych ofert dziennie. Transparentny proces i własna logistyka.",
        stats: "600k+ aut rocznie",
        fees: "Cennik dynamiczny (ok. 300-400€)",
        color: "bg-[#f59e0b]"
    },
    {
        name: "Autobid.de",
        description: "Niemiecka precyzja. Bezpośrednie aukcje od producentów (BMW, Ford, VW) i dużych grup dealerskich. 17 centrów w DE.",
        stats: "4.5k aut tygodniowo",
        fees: "Ok. 3% (min. 300-450€) + opłata eksportowa",
        color: "bg-[#e10613]"
    }
]

const partners = [
    { name: "CarOnSale", desc: "Premium stock od autoryzowanych dealerów z raportem 'COS Check'." },
    { name: "Autorola", desc: "Globalna platforma z silną pozycją w segmencie aut luksusowych i flotowych." },
    { name: "AutoProff", desc: "Model C2B/B2B z Danii, coraz silniejszy w Niemczech. Niskie prowizje." },
    { name: "Adesa / Openlane", desc: "Eksperci od aukcji transgranicznych z pełną obsługą dokumentacji." },
    { name: "Auktion & Markt", desc: "Dedykowane aukcje bankowe i leasingowe z pewną historią." },
    { name: "Manheim", desc: "Specjalizacja w autach młodych i pofarmaceutycznych." }
]

export default function AuctionsPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-4xl text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-8">
                            Verified Broker Access
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-none uppercase tracking-tighter mb-8">
                            AUKCJE <br />
                            <span className="text-primary italic">EUROPEJSKIE</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 leading-relaxed max-w-2xl mx-auto md:mx-0">
                            Omiń pośredników i marże handlarzy. Zapewniamy pełny dostęp do ponad 40 zamkniętych platform B2B, gdzie kupisz sprawdzone auta poleasingowe z całej Europy.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                            <Link href="/#request-section">
                                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-8 h-12 font-semibold rounded-lg shadow-lg">
                                    Darmowa konsultacja <ChevronRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How B2B Auctions Work */}
            <section className="py-24 bg-secondary/10 dark:bg-slate-900/50 overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                                Profesjonalny Rynek
                            </div>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none text-foreground">
                                Czym są <span className="text-primary italic">Aukcje B2B?</span>
                            </h2>
                            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                                To zamknięte platformy remarketingowe (np. BCA, AUTO1, Autobid.de), gdzie rocznie sprzedaje się ponad <span className="text-foreground font-bold">2 miliony pojazdów</span>. Są to źródła, z których korzystają najwięksi dealerzy w Europie. Dzięki nam, Ty również masz tam wstęp.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <h4 className="font-black text-primary uppercase text-sm flex items-center gap-2"><Building2 className="w-4 h-4" /> Stock Dealerski</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Bezpośrednie oferty od producentów (OEM), banków i firm leasingowych. Auta poflotowe i "buy-back" z pewnym pochodzeniem.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black text-primary uppercase text-sm flex items-center gap-2"><Scale className="w-4 h-4" /> Standardy Europejskie</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Każdy pojazd posiada ujednolicony raport stanu (np. standard BCA 1-5), co eliminuje ryzyko zakupu "kota w worku".</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative bg-card border border-border rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl" />
                                <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3 text-foreground">
                                    <Activity className="text-primary" /> Jak to działa?
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 text-foreground">Dostęp do systemów</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">Przeszukujemy dla Ciebie ponad 40 platform z aktualnym stanem ponad 60,000 aut dostępnych "od ręki" każdego dnia.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 text-foreground">Analiza Ekspercka</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">Weryfikujemy historię serwisową w bazach producenta oraz szczegółowe raporty rzeczoznawców z platform aukcyjnych.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 text-foreground">Licytacja i Logistyka</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">Licytujemy w Twoim imieniu do ustalonym budżetu. Po wygranej zajmujemy się dokumentacją eksportową i transportem pod dom.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise: What we check */}
            <section className="py-24 bg-background border-b border-border">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-foreground mb-4">Bezpieczny Zakup: <span className="text-primary italic">Co weryfikujemy?</span></h2>
                        <p className="text-muted-foreground font-medium max-w-3xl mx-auto">
                            Import auta z aukcji wymaga doświadczenia. Nie polegamy tylko na raporcie domu aukcyjnego – weryfikujemy każdy szczegół przed Twoją licytacją.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-secondary/20 rounded-[2.5rem] border border-border/50 space-y-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary"><Search className="w-6 h-6" /></div>
                            <h3 className="font-black uppercase text-xl text-foreground tracking-tight">Dogłębna Weryfikacja</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Kontrola historii w systemach producenta</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Weryfikacja grubości lakieru z raportów</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Analiza dokumentacji technicznej i serwisowej</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Sprawdzenie historii szkód ubezpieczeniowych</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-secondary/20 rounded-[2.5rem] border border-border/50 space-y-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary"><AlertTriangle className="w-6 h-6" /></div>
                            <h3 className="font-black uppercase text-xl text-foreground tracking-tight">Ostrzegamy przed ryzykiem</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">
                                "Kupuj tylko tam, gdzie opis zgadza się ze stanem faktycznym. Odrzucamy 30% ofert na wstępnym etapie."
                            </p>
                            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Unikamy platform bez gwarancji opisu</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Wykrywamy wady ukryte (silnik, skrzynia)</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Sprawdzamy wiarygodność wystawcy</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-secondary/20 rounded-[2.5rem] border border-border/50 space-y-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary"><Handshake className="w-6 h-6" /></div>
                            <h3 className="font-black uppercase text-xl text-foreground tracking-tight">Relacje i Kontakt</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Posiadamy bezpośredni kontakt z opiekunami klienta w BCA, AUTO1 i Autobid. Pomożemy w przypadku problemów z dokumentacją lub spornym stanem auta.
                            </p>
                            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Priorytetowa wysyłka dokumentów</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Pomoc w procesie reklamacyjnym</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Dostosowane warunki transportu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profitability & Risks */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Why it pays off */}
                        <div className="p-10 md:p-16 bg-card rounded-[3.5rem] border border-emerald-500/20 shadow-[0_32px_64px_-12px_rgba(16,185,129,0.1)] space-y-10 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/10 transition-colors" />
                            <div className="w-20 h-20 bg-emerald-500/10 rounded-[2rem] flex items-center justify-center text-emerald-600 dark:text-emerald-400 transform group-hover:rotate-6 transition-transform">
                                <TrendingUp className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground leading-[0.9]">Dlaczego <br /><span className="text-emerald-500 italic">się opłaca?</span></h2>
                            <ul className="space-y-8">
                                <li className="flex gap-5">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                                        <Euro className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-foreground tracking-tight mb-2">Cena Poniżej Rynku (Hurtowa)</h4>
                                        <p className="text-base text-muted-foreground leading-relaxed font-medium">Auta na aukcjach B2B są wystawiane po cenach hurtowych. Omijasz marżę handlarza (zwykle 2,000-5,000 EUR) oraz koszty ekspozycji w salonie. Wylicytowane auto jest często 15-20% tańsze niż na portalu mobile.de.</p>
                                    </div>
                                </li>
                                <li className="flex gap-5">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                                        <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-foreground tracking-tight mb-2">Pewna Historia i Serwis ASO</h4>
                                        <p className="text-base text-muted-foreground leading-relaxed font-medium">Zdecydowana większość ofert to kontrakty leasingowe z regularnym serwisem. Do każdego auta dołączony jest wykaz wizyt w ASO oraz pełna lista wyposażenia zakodowana wg numeru VIN.</p>
                                    </div>
                                </li>
                                <li className="flex gap-5">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                                        <MonitorCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-foreground tracking-tight mb-2">Potężny Wybór (30k+ Ofert Dziennie)</h4>
                                        <p className="text-base text-muted-foreground leading-relaxed font-medium">Nie ograniczasz się do tego, co stoi w komisie. Wybierasz spośród dziesiątek tysięcy aut z całej Europy – w dowolnym kolorze, przebiegu i z konkretnym wyposażeniem.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Risks & Protection */}
                        <div className="p-10 md:p-16 bg-card rounded-[3.5rem] border border-amber-500/20 shadow-[0_32px_64px_-12px_rgba(245,158,11,0.1)] space-y-10 relative overflow-hidden group hover:border-amber-500/40 transition-all">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/5 blur-[80px] rounded-full group-hover:bg-amber-500/10 transition-colors" />
                            <div className="w-20 h-20 bg-amber-500/10 rounded-[2rem] flex items-center justify-center text-amber-600 dark:text-amber-400 transform group-hover:-rotate-6 transition-transform">
                                <ShieldCheck className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground leading-[0.9]">Twoje <br /><span className="text-amber-500 italic">Bezpieczeństwo</span></h2>
                            <ul className="space-y-8">
                                <li className="flex gap-5">
                                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-1">
                                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-foreground tracking-tight mb-2 text-amber-700 dark:text-amber-500">Niezależne Raporty (DEKRA/SGS)</h4>
                                        <p className="text-base text-muted-foreground leading-relaxed font-medium">Aukcje B2B opierają się na raportach zewnętrznych rzeczoznawców. Wykrywają one błędy niewidoczne gołym okiem: malowane elementy, niedziałające systemy czy drobne wgniecenia udokumentowane powiększeniem.</p>
                                    </div>
                                </li>
                                <li className="flex gap-5">
                                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-1">
                                        <Globe className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-foreground tracking-tight mb-2 text-amber-700 dark:text-amber-500">Bezpośrednie Płatności</h4>
                                        <p className="text-base text-muted-foreground leading-relaxed font-medium">Współpracujemy z gigantami rynku jak BCA czy AUTO1. Twoja wpłata idzie bezpośrednio na konto wystawcy lub domu aukcyjnego. Gwarantuje to bezpieczeństwo transakcji i legalność pochodzenia auta.</p>
                                    </div>
                                </li>
                                <li className="flex gap-5">
                                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-1">
                                        <ShieldEllipsis className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-foreground tracking-tight mb-2 text-amber-700 dark:text-amber-500">Obsługa Dokumentacji Eksportowej</h4>
                                        <p className="text-base text-muted-foreground leading-relaxed font-medium">Bierzemy na siebie cały proces przygotowania dokumentów: Zulassungsbescheinigung, CMR, COC oraz procedury wyrejestrowania auta i przygotowania do transportu międzynarodowego.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Platforms with Fees */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-foreground">Główni Partnerzy <span className="text-primary italic">B2B</span></h2>
                        <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
                            Poznaj najpopularniejsze platformy. Jesteśmy zweryfikowanym użytkownikiem na każdej z nich.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mainPlatforms.map((p, idx) => (
                            <Card key={idx} className="border-2 border-border hover:border-primary transition-all rounded-[2.5rem] overflow-hidden group shadow-lg flex flex-col bg-card">
                                <div className={`h-3 ${p.color}`} />
                                <CardContent className="p-10 space-y-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">{p.name}</h3>
                                        <TrendingUp className="text-primary w-6 h-6" />
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium flex-1">{p.description}</p>

                                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-border">
                                        <div>
                                            <div className="text-xs font-black uppercase text-muted-foreground tracking-widest mb-1">Podaż</div>
                                            <div className="text-lg font-black text-foreground tracking-tighter">{p.stats}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-black uppercase text-muted-foreground tracking-widest mb-1">Typowe Opłaty</div>
                                            <div className="text-sm font-bold text-primary leading-tight">{p.fees}</div>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <div className="text-xs font-bold text-emerald-600 flex items-center gap-1 uppercase tracking-widest italic">
                                            <Activity className="w-3 h-3" /> Live Inventory
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* More Platforms List */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">I ponad 30 innych portali</h3>
                        <p className="text-slate-400 mt-2 font-medium">Bierzemy udział w aukcjach wszędzie tam, gdzie pojawia się dobra okazja.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {partners.map((partner, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="text-sm font-black text-primary mb-1">{partner.name}</h4>
                                <p className="text-[10px] text-slate-400 leading-tight">{partner.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Price Transparency Warning */}
            <section className="py-24 bg-secondary/10">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto bg-card border border-border rounded-[3rem] p-10 md:p-16 space-y-8 shadow-2xl">
                        <div className="flex items-center gap-4 text-primary">
                            <Scale className="w-10 h-10" />
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground">Transparentne <span className="italic">Rozliczenie</span></h2>
                        </div>
                        <p className="text-xl text-muted-foreground font-medium">
                            Kupując na aukcji B2B, finalna cena składa się z kilku elementów. Pomożemy Ci skalkulować wszystko przed licytacją, abyś wiedział, czy zakup jest opłacalny.
                        </p>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="p-8 bg-black/5 dark:bg-white/5 rounded-[2.5rem] border-2 border-primary/20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4">
                                        <Zap className="w-5 h-5 text-primary/30 animate-pulse" />
                                    </div>
                                    <div className="text-xs font-black uppercase text-primary mb-6 tracking-[0.2em] flex items-center gap-2">
                                        <span className="w-8 h-1 bg-primary rounded-full" /> Kalkulacja Kosztów
                                    </div>
                                    <ul className="space-y-5 text-sm font-bold text-foreground uppercase tracking-tight">
                                        <li className="flex justify-between items-center border-b border-border/50 pb-3">
                                            <span className="flex items-center gap-2"><Gavel className="w-4 h-4 text-muted-foreground" /> Auto z aukcji</span>
                                            <span className="text-primary font-black tracking-tighter text-base">Cena zakupu</span>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-border/50 pb-3">
                                            <span className="flex items-center gap-2"><Building2 className="w-4 h-4 text-muted-foreground" /> Opłata aukcyjna</span>
                                            <span className="text-foreground font-black tracking-tighter text-base">~300 - 600 €</span>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-border/50 pb-3">
                                            <span className="flex items-center gap-2"><MonitorCheck className="w-4 h-4 text-muted-foreground" /> Dokumentacja</span>
                                            <span className="text-foreground font-black tracking-tighter text-base">~100 - 150 €</span>
                                        </li>
                                        <li className="flex justify-between items-center">
                                            <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-primary" /> Logistyka EU</span>
                                            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">Wycena indywidualna</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl shrink-0"><Euro className="w-6 h-6" /></div>
                                    <div className="space-y-1">
                                        <h4 className="font-black text-sm uppercase text-foreground">Bezpośrednie płatności</h4>
                                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">W większości przypadków płacisz bezpośrednio do domu aukcyjnego. Bezpieczeństwo środków gwarantują giganci branży.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 border-t border-border pt-6">
                                    <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl shrink-0"><Building2 className="w-6 h-6" /></div>
                                    <div className="space-y-1">
                                        <h4 className="font-black text-sm uppercase text-foreground">Pośrednictwo finansowe</h4>
                                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">Jeśli dom aukcyjny nie pozwala na bezpośredni przelew zagraniczny (zależy od ich zasad), przeprowadzamy zakup przez nasze konto – przelewasz środki do nas, a my rozliczamy aukcję.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 border-t border-border pt-6">
                                    <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0"><ShieldCheck className="w-6 h-6" /></div>
                                    <div className="space-y-1">
                                        <h4 className="font-black text-sm uppercase text-foreground">Stała Prowizja</h4>
                                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">Nasza prowizja jest stała i znana przed licytacją. Zero ukrytych kosztów.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary px-4">
                <div className="container mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none drop-shadow-md">
                        Chcesz sprawdzić <br /><span className="italic">aktualne oferty?</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link href="/#request-section">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 hover:scale-[1.02] transition-all h-12 px-8 font-semibold rounded-lg shadow-lg">
                                Zapytaj o dostęp <Zap className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
