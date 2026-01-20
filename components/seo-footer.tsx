import Link from "next/link"


export function SeoFooter() {
    return (
        <section className="bg-background py-12 relative border-t border-border">
            {/* Smooth fade transition top */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-0" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Lokalizacje Importu</h4>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Sprowadzanie aut z Niemiec</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Import aut z Belgii</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Auta z Holandii</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Licytacje Szwajcaria</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Rodzaje Pojazdów</h4>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Auta poleasingowe</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Samochody uszkodzone</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Dostawcze z Niemiec</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Auta elektryczne (bez akcyzy)</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Partnerzy Aukcyjni</h4>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">BCA Auctions</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">AUTO1.com</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Autorola</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Adesa / Openlane</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Wiedza</h4>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                            <li><Link href="/kalkulator" className="hover:text-primary transition-colors">Kalkulator Akcyzy 2026</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">Procedura Rejestracji</Link></li>
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
