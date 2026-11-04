"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Fuel, Gauge, Calendar, ShieldCheck, Euro, Zap, Activity, Sparkles, Clock, MapPin, Camera } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"

const seededRandomFn = (seed: number) => {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
}

// ⚡ Bolt Performance Optimization:
// Cache Intl.NumberFormat instance outside the component to avoid significant CPU overhead
// from re-instantiating it on every render or price change.
const PLNCurrencyFormatter = new Intl.NumberFormat("pl-PL")

export function AboutAuctions() {
    const [price, setPrice] = useState(18658)
    const [status, setStatus] = useState<"winning" | "outbid">("winning")
    const [timeLeft, setTimeLeft] = useState(25)
    const [mounted, setMounted] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = useMemo(() => [
        "/audi/max-AD55987_01bdb54e3e0af8794c16fffcbf2ca28d.webp",
        "/audi/max-AD55987_2d6cf1cc4d29426a8dc28267a693307d.webp",
        "/audi/max-AD55987_339081aa4a32ad5ea2581b0a9375e908.webp",
        "/audi/max-AD55987_7f553c1a461f10b679137e7a4f991b02.webp",
        "/audi/max-AD55987_ca66144394b467109c133464308a30c5.webp",
        "/audi/max-AD55987_dbedf5b7e4de4bc9977b9c004db8622c.webp",
        "/audi/max-AD55987_dfb80e1c658ec4aaa94a866e2f02f8a7.webp",
        "/audi/max-AD55987_ee56ff1e3170932847ff99740f2fd3f6.webp"
    ], [])

    const imageAlts = useMemo(() => [
        "Audi Q5 2021 - widok z przodu na aukcji BCA",
        "Audi Q5 - wnętrze, deska rozdzielcza i kierownica",
        "Audi Q5 - widok z boku, profil nadwozia",
        "Audi Q5 - tylne siedzenia i przestrzeń pasażerska",
        "Audi Q5 - bagażnik i przestrzeń ładunkowa",
        "Audi Q5 - widok z tyłu, lampy LED",
        "Audi Q5 - detal felg i zawieszenia",
        "Audi Q5 - zbliżenie na raport stanu lakieru"
    ], [])

    const particleConfigs = useMemo(() => (
        [...Array(4)].map((_, i) => ({
            left: `${Math.round(seededRandomFn(i + 1) * 10000) / 100}%`,
            top: `${Math.round(seededRandomFn(i + 11) * 10000) / 100}%`,
            duration: Math.round(seededRandomFn(i + 21) * 500 + 500) / 100,
            delay: Math.round(seededRandomFn(i + 31) * 500) / 100,
        }))
    ), [])

    const confettiConfigs = useMemo(() => (
        [...Array(12)].map((_, i) => ({
            top: `${Math.round(seededRandomFn(i + 41) * 10000) / 100}%`,
            left: `${Math.round(seededRandomFn(i + 51) * 10000) / 100}%`,
            duration: Math.round(seededRandomFn(i + 61) * 200 + 150) / 100,
            repeatDelay: Math.round(seededRandomFn(i + 71) * 200) / 100,
            colorIndex: Math.floor(seededRandomFn(i + 81) * 3),
        }))
    ), [])

    const formattedPrice = useMemo(() => (
        PLNCurrencyFormatter.format(price)
    ), [price])

    useEffect(() => {
        setMounted(true)
    }, [])

    // Image slider logic
    useEffect(() => {
        if (!mounted) return
        const slideInterval = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % images.length)
        }, 3000)
        return () => clearInterval(slideInterval)
    }, [mounted, images.length])

    // Simulate bidding cycle
    useEffect(() => {
        if (!mounted || isFinished) return

        let isActive = true
        const INITIAL_TIME = 15

        // Initial setup
        setPrice(14000)
        setStatus("winning")
        setTimeLeft(INITIAL_TIME)

        const simulateBidding = async () => {
            let currentPrice = 14000

            while (currentPrice < 21000 && isActive) {
                // Wait for a random interval before someone outbids us
                await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 500))
                if (!isActive) break

                // 1. SOMEONE ELSE BIDS (Outbid - Red)
                setStatus("outbid")
                currentPrice += Math.floor(Math.random() * 500) + 300
                if (currentPrice > 20000) currentPrice = 20200 // Don't let others hit the final target
                setPrice(currentPrice)

                // Short "thinking" time for our automatic bid
                await new Promise(resolve => setTimeout(resolve, 800))
                if (!isActive) break

                // 2. WE BID (Winning - Green)
                setStatus("winning")
                currentPrice += Math.floor(Math.random() * 800) + 500
                if (currentPrice >= 20800) currentPrice = 21000
                setPrice(currentPrice)

                if (currentPrice >= 21000) {
                    setIsFinished(true)
                    isActive = false
                    break
                }
            }
        }

        const timer = setInterval(() => {
            if (!isActive) return
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setIsFinished(true)
                    isActive = false
                    setStatus("winning")
                    // Do not force price to 21000 here, let it stay at current
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        simulateBidding()

        return () => {
            isActive = false
            clearInterval(timer)
        }
    }, [mounted, isFinished])

    const carSpecs = [
        { label: "Przebieg", value: "151 357 km", icon: Gauge },
        { label: "Rejestracja", value: "11/2021", icon: Calendar },
        { label: "Moc", value: "150 kW / 204 KM", icon: Zap },
        { label: "Paliwo", value: "Diesel", icon: Fuel },
        { label: "Skrzynia", value: "Dwusprzęgłowa", icon: Activity },
        { label: "Lokalizacja", value: "Niemcy (DE)", icon: MapPin },
    ]

    return (
        <section className="py-16 md:py-32 text-foreground relative overflow-hidden">
            {/* Ambient Background Glows - Optimized Layout & Performance */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                {/* Static blurred blobs instead of animated ones for better mobile perf */}
                <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] opacity-20 -translate-y-1/2 -translate-x-1/2 transform-gpu" />
                <div className="absolute bottom-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px] opacity-20 transform-gpu" />
                
                {/* Smooth fade transitions top and bottom */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent z-0" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent z-0" />

                {/* Floating Particles - Reduced count for mobile via hidden/block classes or JS logic */}
                <div className="hidden md:block">
                    {particleConfigs.map((particle, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/40 rounded-full"
                            animate={{
                                y: [0, -100],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                            }}
                            style={{
                                left: particle.left,
                                top: particle.top,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Victory Fireworks / Confetti - Optimized */}
            <AnimatePresence>
                {isFinished && (
                    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
                        {confettiConfigs.map((confetti, i) => (
                            <motion.div
                                key={i}
                                initial={{ top: "50%", left: "50%", scale: 0, opacity: 1 }}
                                animate={{
                                    top: [`50%`, confetti.top],
                                    left: [`50%`, confetti.left],
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0],
                                    rotate: [0, 180],
                                }}
                                transition={{
                                    duration: confetti.duration,
                                    repeat: Infinity,
                                    repeatDelay: confetti.repeatDelay,
                                    ease: "easeOut",
                                }}
                                className={`absolute w-1.5 h-1.5 rounded-full ${["bg-primary/80", "bg-yellow-400/80", "bg-white/80"][confetti.colorIndex]} blur-[0.5px]`}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                            <Sparkles className="w-3 h-3" /> Ekskluzywny Dostęp B2B
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black leading-tight text-foreground uppercase tracking-tighter">
                            Ekskluzywny <br />
                            <span className="text-primary italic">Dostęp B2B</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                <span className="text-foreground font-bold">Aukcje B2B to serce rynku motoryzacyjnego.</span> To zamknięte systemy transakcyjne, gdzie banki, giganci leasingowi i największe sieci flotowe wystawiają tysiące aut dziennie.
                                <br /><br />
                                Większość aut na polskich portalach pochodzi właśnie stąd – my po prostu <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4">usuwamy pośredników</span> i dajemy Ci klucze do tych samych narzędzi.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl text-primary shrink-0 border shadow-sm bg-muted border-border dark:bg-white/5 dark:border-white/10"><ShieldCheck className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-black text-foreground uppercase tracking-tight text-base">Czysta Historia & Pewność</h4>
                                        <p className="text-sm text-muted-foreground">Zapomnij o niepewności. Każdy pojazd posiada szczegółowy protokół szkód i pomiaru lakieru wykonany przez niezależnych rzeczoznawców.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl text-primary shrink-0 border shadow-sm bg-muted border-border dark:bg-white/5 dark:border-white/10"><Euro className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-black text-foreground uppercase tracking-tight text-base">Ceny bez marży handlarza</h4>
                                        <p className="text-sm text-muted-foreground">Kupujesz w cenach netto/brutto prosto z aukcji. Realne oszczędności sięgają od <span className="text-foreground font-bold italic">20% do nawet 30%</span> w porównaniu do polskich portali.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Updated Stats with matching Screenshot Design - Responsive Theme */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-card p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-[2rem] border border-border shadow-lg sm:shadow-2xl">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-1 tracking-tighter">150k+</div>
                                <div className="text-xs text-muted-foreground font-bold uppercase tracking-[0.15em]">Aut miesięcznie</div>
                            </div>
                            <div className="bg-card p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-[2rem] border border-border shadow-lg sm:shadow-2xl">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-1 tracking-tighter">0%</div>
                                <div className="text-xs text-muted-foreground font-bold uppercase tracking-[0.15em]">Ukrytych marż</div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link href="/aukcje">
                                <Button size="lg" className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-12 px-8 font-bold rounded-lg shadow-lg">
                                    Zobacz jak kupujemy na aukcjach
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Mockup with Live Animation */}
                    <div className="lg:w-1/2 w-full pt-8 lg:pt-0 pl-2 lg:pl-0"> {/* Added padding top/left for mobile floaters */}
                        <div className="relative group">
                            {/* LIVE Badge - Mobile: Inside/Corner, Desktop: Floating Outside */}
                            {!isFinished && (
                                <div className="absolute top-0 left-0 md:-top-4 md:-left-4 z-20 bg-red-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-br-xl md:rounded-full font-bold text-xs flex items-center gap-2 shadow-xl animate-pulse">
                                    <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-white animate-ping" />
                                    ● LIVE BIDDING
                                </div>
                            )}

                            <Card className={`relative overflow-hidden border-2 ${status === "winning" ? "border-green-500 shadow-green-500/20" : "border-red-500 shadow-red-500/20"} ${isFinished ? "border-primary shadow-primary/40" : ""} shadow-[0_20px_50px_rgba(0,0,0,0.25)] bg-white text-slate-800 rounded-[2rem] md:rounded-[2.5rem] transition-colors duration-300`}>
                                <CardContent className="p-0">
                                    {/* Header Mock */}
                                    <div className="bg-slate-950 text-slate-100 border-b border-slate-800 p-5 min-h-[56px] flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ID: B2B-AUDI-Q5-2021</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                                            {isFinished ? (
                                                <span className="text-primary animate-bounce">Aukcja zakończona</span>
                                            ) : (
                                                <>
                                                    <Clock className="w-3 h-3 text-red-500" />
                                                    <span className="text-red-500">Koniec za: {timeLeft}s</span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Image Area */}
                                        <div className="lg:w-[45%] bg-slate-100 relative overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-auto">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={currentImageIndex}
                                                    initial={{ opacity: 0, scale: 1.05 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="absolute inset-0"
                                                >
                                                    <Image
                                                        src={images[currentImageIndex]}
                                                        alt={imageAlts[currentImageIndex]}
                                                        fill
                                                        sizes="(min-width: 1024px) 45vw, 100vw"
                                                        priority={currentImageIndex === 0}
                                                        loading={currentImageIndex === 0 ? "eager" : "lazy"}
                                                        quality={75}
                                                        className="object-cover"
                                                    />
                                                </motion.div>
                                            </AnimatePresence>
                                            <div className="absolute bottom-4 left-4 flex gap-1">
                                                {images.map((_, i) => (
                                                    <div key={i} className={`h-1 w-3 rounded-full transition-all ${i === currentImageIndex ? "bg-primary w-6" : "bg-white/50"}`} />
                                                ))}
                                            </div>
                                            {isFinished && (
                                                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center p-6 text-center">
                                                    <motion.div
                                                        initial={{ scale: 0, rotate: -10 }}
                                                        animate={{ scale: 1, rotate: 0 }}
                                                        className="bg-white p-4 rounded-2xl shadow-2xl border-4 border-primary"
                                                    >
                                                        <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                                                        <div className="text-2xl font-black text-slate-900 uppercase tracking-tighter">WYGRAŁEŚ!</div>
                                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Gratulacje, auto jest Twoje</div>
                                                    </motion.div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Details Area */}
                                        <div className="lg:w-[55%] p-4 sm:p-5 md:p-6 flex flex-col justify-between bg-white">
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="font-black text-base sm:text-lg leading-tight tracking-tight uppercase mb-1">
                                                        Audi Q5 Sportback 40 TDI Mild-Hybrid quattro S line
                                                    </h3>
                                                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                        <div className="flex items-center gap-1"><Camera className="w-3 h-3 text-primary" /> 40 FOTO</div>
                                                        <div className="flex items-center gap-1 text-green-600"><ShieldCheck className="w-3 h-3" /> BEZWYPADKOWY</div>
                                                    </div>
                                                </div>

                                                {/* Specs Grid */}
                                                <div className="grid grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-2 sm:gap-x-4">
                                                    {carSpecs.map((spec, i) => (
                                                        <div key={i} className="flex flex-col">
                                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                                                <spec.icon className="w-2.5 h-2.5" /> {spec.label}
                                                            </div>
                                                            <div className="text-sm font-bold text-slate-900">{spec.value}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Report Section */}
                                                <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-xs font-bold uppercase text-slate-900 tracking-tighter">Pomiar lakieru (DEKRA)</span>
                                                        <span className="text-xs font-bold text-green-600 uppercase">90-110 µm</span>
                                                    </div>
                                                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                                        <div className="h-full bg-green-500 w-[95%]" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-4 border-t border-slate-100">
                                                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 mb-4">
                                                    <div className="space-y-1 min-w-0">
                                                        <div className="text-xs text-slate-400 uppercase font-bold tracking-widest leading-none">Minimalna oferta</div>
                                                        <div className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tighter">18 658 €</div>
                                                    </div>
                                                    <div className="text-right justify-self-end">
                                                        <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Twoja oferta</div>
                                                        <div className={`text-3xl font-black tabular-nums tracking-tighter whitespace-nowrap leading-none ${status === "winning" ? "text-green-600" : "text-red-600"}`}>
                                                            {formattedPrice} €
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`p-4 min-h-[64px] rounded-2xl flex items-center justify-center gap-3 text-center transition-colors ${status === "winning" ? "bg-green-100 border-2 border-green-200" : "bg-red-100 border-2 border-red-200"}`}>
                                                    <div className={`h-2 w-2 rounded-full animate-ping shrink-0 ${status === "winning" ? "bg-green-600" : "bg-red-600"}`} />
                                                    <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-widest leading-snug ${status === "winning" ? "text-green-700" : "text-red-700"}`}>
                                                        {isFinished ? "AUKCJA WYGRANA" : status === "winning" ? "TWOJA OFERTA NAJWYŻSZA" : "KTOŚ CIĘ PRZEBIŁ - LICYTUJ!"}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
