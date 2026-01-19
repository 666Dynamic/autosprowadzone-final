"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 md:pt-24 pb-24 lg:pt-32 lg:pb-32 min-h-[80vh] flex items-center">
            {/* Background Video - Only video, no images */}
            <div className="absolute inset-0 z-0 bg-transparent dark:bg-transparent">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 [&.loaded]:opacity-15 dark:[&.loaded]:opacity-20"
                    aria-hidden="true"
                    onLoadedData={(e) => e.currentTarget.classList.add('loaded')}
                    onError={(e) => {
                        // Hide video if it fails to load on mobile
                        e.currentTarget.style.display = 'none'
                    }}
                >
                    <source src="/13164895_3840_2160_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 md:space-y-10 -mt-8 md:-mt-20">

                    <div className="inline-flex items-center rounded-full border-2 border-primary/30 bg-background/80 px-4 py-2 text-xs md:text-sm font-bold text-primary backdrop-blur-md shadow-sm">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Zaufany Pośrednik
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic">
                        Sprowadzamy Auta na <br className="hidden sm:inline" />
                        <span className="text-primary not-italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">Indywidualne Zamówienie</span>
                    </h1>

                    <p className="text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed px-2 md:px-0">
                        Twój osobisty broker w Niemczech. Pozyskujemy auta z pewnych źródeł: licytacje B2B, floty bankowe oraz sprawdzeni dealerzy. Pełna weryfikacja i dostawa pod dom.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-4 w-full sm:w-auto px-4 md:px-0">
                        <Link href="#request-section">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all w-full sm:w-auto h-14 md:h-14 px-8 font-bold rounded-lg shadow-lg [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] min-h-[56px] touch-manipulation">
                                Zamów bezpłatną wycenę
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="#process-section">
                            <Button size="lg" variant="outline" className="bg-accent/10 text-accent hover:bg-accent/20 transition-all border border-accent w-full sm:w-auto h-14 md:h-14 px-8 font-bold rounded-lg min-h-[56px] touch-manipulation">
                                Zobacz jak to działa
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-col min-[420px]:flex-row flex-wrap items-center justify-center gap-y-4 gap-x-6 md:gap-8 pt-6 md:pt-8 text-xs md:text-sm text-foreground font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                            <span>Pełna Weryfikacja</span>
                        </div>
                        <div className="flex items-center gap-2 border-t min-[420px]:border-t-0 border-border/20 pt-4 min-[420px]:pt-0 w-full min-[420px]:w-auto justify-center">
                            <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                            <span>Transport Ubezpieczony</span>
                        </div>
                        <div className="flex items-center gap-2 border-t min-[420px]:border-t-0 border-border/20 pt-4 min-[420px]:pt-0 w-full min-[420px]:w-auto justify-center">
                            <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                            <span>Pomoc w Rejestracji</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
