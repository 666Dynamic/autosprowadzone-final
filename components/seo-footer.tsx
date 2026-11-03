import Link from "next/link"


export function SeoFooter() {
    return (
        <section className="bg-background py-12 relative border-t border-border">
            {/* Smooth fade transition top */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-0" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <p className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Lokalizacje Importu</p>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Sprowadzanie aut z Niemiec</Link></li>
                            <li><Link href="/blog/sprowadzanie-aut-z-europy" className="hover:text-primary transition-colors">Sprowadzanie aut z Europy</Link></li>
                            <li><Link href="/aukcje" className="hover:text-primary transition-colors">Aukcje B2B Europa</Link></li>
                            <li><Link href="/weryfikacja" className="hover:text-primary transition-colors">Weryfikacja w Niemczech</Link></li>
                            <li><Link href="/blog/koszt-sprowadzenia-auta-z-niemiec-2026" className="hover:text-primary transition-colors">Koszt sprowadzenia auta 2026</Link></li>
                            <li><Link href="/blog/firma-sprowadzajaca-auta-z-niemiec-jak-wybrac" className="hover:text-primary transition-colors">Jak wybrać firmę importującą</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Rodzaje Pojazdów</p>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                            <li><Link href="/blog/auta-poleasingowe-z-niemiec-czy-warto" className="hover:text-primary transition-colors">Auta poleasingowe z Niemiec</Link></li>
                            <li><Link href="/aukcje" className="hover:text-primary transition-colors">Samochody z defleetu</Link></li>
                            <li><Link href="/blog/auta-flotowe-z-niemiec-jak-rozpoznac-dobry-egzemplarz" className="hover:text-primary transition-colors">Auta flotowe z Niemiec</Link></li>
                            <li><Link href="/blog/czy-warto-sprowadzic-hybryde-z-niemiec" className="hover:text-primary transition-colors">Hybrydy z Niemiec</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Partnerzy Aukcyjni</p>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                            <li><Link href="/blog/bca-europe-przewodnik" className="hover:text-primary transition-colors">BCA Auctions</Link></li>
                            <li><Link href="/blog/auto1-jak-licytowac" className="hover:text-primary transition-colors">AUTO1.com</Link></li>
                            <li><Link href="/blog/caronsale-aukcje-b2b-jak-kupic-auto" className="hover:text-primary transition-colors">CarOnSale</Link></li>
                            <li><Link href="/blog/openlane-adesa-jak-kupowac-auto" className="hover:text-primary transition-colors">Adesa / Openlane</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Wiedza</p>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                            <li><Link href="/kalkulator" className="hover:text-primary transition-colors">Kalkulator Akcyzy 2026</Link></li>
                            <li><Link href="/blog/transport-auta-z-niemiec-koszt" className="hover:text-primary transition-colors">Transport auta z Niemiec</Link></li>
                            <li><Link href="/blog/dokumenty-przy-zakupie-auta-w-niemczech" className="hover:text-primary transition-colors">Dokumenty z Niemiec</Link></li>
                            <li><Link href="/blog/akcyza-2026-stawki" className="hover:text-primary transition-colors">Akcyza 2026 — stawki</Link></li>
                            <li><Link href="/blog/rejestracja-auta-z-niemiec-2026" className="hover:text-primary transition-colors">Rejestracja auta z Niemiec</Link></li>
                            <li><Link href="/blog/jak-sprawdzic-auto-z-niemiec-przed-zakupem" className="hover:text-primary transition-colors">Jak sprawdzić auto z Niemiec</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Poradnik Importera</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-8 text-center">
                    <p className="text-xs text-muted-foreground">
                        Obsługujemy klientów z całej Polski: Warszawa, Kraków, Wrocław, Poznań, Gdańsk, Szczecin.
                    </p>
                </div>
            </div>
        </section>
    )
}
