import Link from "next/link"


export function SeoFooter() {
    return (
        <section className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Lokalizacje Importu</h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Sprowadzanie aut z Niemiec</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Import aut z Belgii</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Auta z Holandii</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Licytacje Szwajcaria</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Rodzaje Pojazdów</h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Auta poleasingowe</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Samochody uszkodzone</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Dostawcze z Niemiec</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Auta elektryczne (bez akcyzy)</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Partnerzy Aukcyjni</h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">BCA Auctions</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">AUTO1.com</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Autorola</Link></li>
                            <li><Link href="/w-budowie" className="hover:text-primary transition-colors">Adesa / Openlane</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Wiedza</h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link href="/kalkulator" className="hover:text-primary transition-colors">Kalkulator Akcyzy 2026</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">Procedura Rejestracji</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Poradnik Importera</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 text-center">
                    <p className="text-xs text-slate-500">
                        Obsługujemy klientów z całej Polski: Warszawa, Kraków, Wrocław, Poznań, Gdańsk, Szczecin.
                    </p>
                </div>
            </div>
        </section>
    )
}
