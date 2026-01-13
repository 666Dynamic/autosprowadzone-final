import Link from "next/link"
import { CarFront } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <CarFront className="h-6 w-6 text-primary" />
                        <span className="font-black text-lg tracking-tight">autosprowadzone.pl</span>
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                        Twój zaufany partner w imporcie samochodów z Europy Zachodniej. Niemiecka jakość obsługi, polska cena.
                    </p>
                </div>

                <div className="flex flex-col space-y-3">
                    <h3 className="font-black">O Nas</h3>
                    <Link href="/o-nas" className="text-sm text-muted-foreground hover:text-primary">O Firmie</Link>
                    <Link href="/weryfikacja" className="text-sm text-muted-foreground hover:text-primary">Weryfikacja Aut</Link>
                    <Link href="/kalkulator" className="text-sm text-muted-foreground hover:text-primary">Kalkulator</Link>
                    <Link href="/polityka-prywatnosci" className="text-sm text-muted-foreground hover:text-primary">Polityka Prywatności</Link>
                </div>

                <div className="flex flex-col space-y-3">
                    <h3 className="font-black">Firma</h3>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Miami Autocenter GmbH</strong><br />
                        Bremer Heerstraße 7A<br />
                        27711 Osterholz-Scharmbeck<br />
                        <span className="text-xs opacity-70">USt-IdNr.: DE361829942</span>
                    </div>
                </div>

                <div className="flex flex-col space-y-3">
                    <h3 className="font-black">Kontakt</h3>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-3">
                            <span className="text-lg leading-none">🇩🇪</span>
                            <span className="font-medium">+49 156 79264391</span>
                        </span>
                        <span className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-3">
                            <span className="text-lg leading-none">🇵🇱</span>
                            <span className="font-medium">+48 780 010 848</span>
                        </span>
                    </div>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors mt-2 block">
                        autosprowadzone@gmail.com
                    </span>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
                <span>© {new Date().getFullYear()} autosprowadzone.pl represented by Miami Autocenter GmbH. Wszelkie prawa zastrzeżone.</span>
                <span>Amtsgericht Walsrode HRB 211101</span>
            </div>
        </footer>
    )
}
