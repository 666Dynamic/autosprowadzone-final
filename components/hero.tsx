"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-[85vh] flex items-center">
            {/* Background Video - Only video, no images */}
            <div className="absolute inset-0 z-0 bg-slate-950">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 [&.loaded]:opacity-30 dark:[&.loaded]:opacity-20"
                    aria-hidden="true"
                    onLoadedData={(e) => e.currentTarget.classList.add('loaded')}
                >
                    <source src="/13164895_3840_2160_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 md:space-y-10">

                    <div className="inline-flex items-center rounded-full border-2 border-primary/30 bg-background/80 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-md shadow-sm">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Zaufany Pośrednik
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                        Sprowadzamy Auta na <br />
                        <span className="text-primary">Indywidualne Zamówienie</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Twój osobisty broker w Niemczech. Pozyskujemy auta z pewnych źródeł: licytacje B2B, floty bankowe oraz sprawdzeni dealerzy. Pełna weryfikacja i dostawa pod dom.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="#request-section">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 w-full sm:w-auto group font-semibold h-12 px-6">
                                Zamów bezpłatną wycenę
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="#process-section">
                            <Button size="lg" variant="outline" className="bg-accent/10 text-accent hover:bg-accent/20 hover:scale-105 border-2 border-accent w-full sm:w-auto font-bold uppercase tracking-wider">
                                Zobacz jak to działa
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-8 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>Pełna Weryfikacja</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>Transport Ubezpieczony</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>Pomoc w Rejestracji</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
