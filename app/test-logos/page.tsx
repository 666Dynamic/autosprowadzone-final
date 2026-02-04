import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Podgląd logo (test) | SprowadzoneAuto.pl",
    robots: { index: false, follow: false },
}

function LogoVariant1() {
    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M20 50 L35 50 C37 50 38 49 39 47 L45 35 C47 30 55 30 57 35 L63 47 C64 49 65 50 67 50 L85 50" stroke="white" strokeWidth="6" strokeLinecap="round" />
                    <path d="M25 60 L75 60" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
                    <circle cx="35" cy="65" r="5" fill="white" />
                    <circle cx="65" cy="65" r="5" fill="white" />
                </svg>
            </div>
            <div className="flex items-baseline tracking-tighter uppercase font-extrabold">
                <span className="text-2xl italic text-foreground">auto</span>
                <span className="text-2xl text-primary font-black">sprowadzone</span>
                <span className="text-muted-foreground/30 text-xs ml-0.5 font-bold">.pl</span>
            </div>
        </div>
    )
}

function LogoVariant2() {
    return (
        <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-12 h-12">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                    <path d="M50 5 L15 25 V55 C15 75 50 95 50 95 C50 95 85 75 85 55 V25 L50 5Z" fill="#F59E0B" />
                    <path d="M35 50 L45 60 L65 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="flex flex-col -gap-1">
                <span className="text-xl font-black tracking-tight text-foreground uppercase leading-none">Auto</span>
                <span className="text-xl font-black tracking-tight text-primary uppercase leading-none">Sprowadzone</span>
            </div>
        </div>
    )
}

function LogoVariant3() {
    return (
        <div className="flex items-center gap-0">
            <div className="bg-foreground text-background px-3 py-1.5 rounded-l-lg font-black text-2xl italic tracking-tighter uppercase">
                AUTO
            </div>
            <div className="bg-primary text-white px-3 py-1.5 rounded-r-lg font-black text-2xl italic tracking-tighter uppercase shadow-[4px_0_15px_rgba(245,158,11,0.5)]">
                SPROWADZONE
            </div>
            <span className="ml-2 text-muted-foreground font-bold italic">.pl</span>
        </div>
    )
}

export default function LogosPreview() {
    return (
        <div className="min-h-screen bg-background p-10 font-sans">
            <div className="max-w-4xl mx-auto space-y-20">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Propozycje Logo dla SprowadzoneAuto.pl</h1>
                    <p className="text-muted-foreground text-lg">Wybierz wersję, która najlepiej oddaje charakter Twojej marki.</p>
                </div>

                <div className="grid gap-16">
                    {/* Variant 1 */}
                    <section className="space-y-6 p-8 border border-border rounded-3xl bg-card/50 backdrop-blur">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold opacity-50">#1 Minimalistyczna Linia (Sleek Modern)</h2>
                            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase">Polecane</span>
                        </div>
                        <div className="py-10 flex justify-center scale-125">
                            <LogoVariant1 />
                        </div>
                        <p className="text-sm text-muted-foreground italic text-center">
                            Skupienie na czystości formy i nowoczesnym druku. Agresywna, ale elegancka linia dachu.
                        </p>
                    </section>

                    {/* Variant 2 */}
                    <section className="space-y-6 p-8 border border-border rounded-3xl bg-card/50 backdrop-blur">
                        <h2 className="text-xl font-semibold opacity-50">#2 Tarcza Bezpieczeństwa (Corporate Trust)</h2>
                        <div className="py-10 flex justify-center scale-125">
                            <LogoVariant2 />
                        </div>
                        <p className="text-sm text-muted-foreground italic text-center">
                            Symbol tarczy buduje natychmiastowe zaufanie. Sugeruje, że każde auto jest zweryfikowane i bezpieczne.
                        </p>
                    </section>

                    {/* Variant 3 */}
                    <section className="space-y-6 p-8 border border-border rounded-3xl bg-card/50 backdrop-blur">
                        <h2 className="text-xl font-semibold opacity-50">#3 Blokowy Dynamiczny (Bold Action)</h2>
                        <div className="py-10 flex justify-center scale-125">
                            <LogoVariant3 />
                        </div>
                        <p className="text-sm text-muted-foreground italic text-center">
                            Bardzo silna obecność wizualna. Idealne dla marki, która chce dominować i być zapamiętana.
                        </p>
                    </section>
                </div>

                <div className="flex justify-center pt-10">
                    <Link href="/">
                        <Button variant="outline" size="lg">Powrót do strony głównej</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
