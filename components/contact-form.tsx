"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Send, Search, Car, Calendar, Wallet, CheckCircle2 } from "lucide-react"

interface ContactFormProps {
    mode?: "simple" | "search" | "weryfikacja"
    title?: string
    description?: string
    showLabels?: boolean
    className?: string
}

export function ContactForm({
    mode = "simple",
    title,
    description,
    showLabels = true,
    className
}: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <Card className={`w-full bg-card dark:bg-slate-950/50 backdrop-blur-sm border-2 border-emerald-500/50 shadow-2xl rounded-[3rem] overflow-hidden ${className}`}>
                <CardContent className="p-12 text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">Wiadomość wysłana!</h3>
                    <p className="text-muted-foreground font-medium">Dziękujemy za kontakt. Nasz ekspert odezwie się do Ciebie w ciągu 24 godzin.</p>
                    <Button
                        onClick={() => setIsSuccess(false)}
                        variant="outline"
                        className="rounded-xl font-bold uppercase tracking-widest"
                    >
                        Wyślij kolejną
                    </Button>
                </CardContent>
            </Card>
        )
    }

    const defaultTitles = {
        simple: "Napisz do nas",
        search: "Zlecenie Wyszukiwania",
        weryfikacja: "Zleć Weryfikację"
    }

    const defaultDescriptions = {
        simple: "Gwarantujemy odpowiedź w ciągu 24 godzin.",
        search: "Bezpłatna weryfikacja rynku • Odpowiedź w 24h",
        weryfikacja: "Pełny audyt mechaniczny i wizualny w całych Niemczech."
    }

    return (
        <Card className={`w-full max-w-2xl mx-auto bg-card dark:bg-slate-950/80 backdrop-blur-2xl border border-border/40 shadow-lg rounded-3xl overflow-hidden ${className}`}>
            <CardHeader className="bg-primary px-6 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 bg-white rounded-full translate-x-12 -translate-y-12 w-48 h-48 pointer-events-none" />
                <CardTitle className="text-2xl md:text-4xl font-black uppercase tracking-tighter flex items-center gap-3 relative z-10">
                    {mode === "search" ? <Search className="w-8 h-8" /> : (mode === "weryfikacja" ? <Car className="w-8 h-8" /> : <Send className="w-8 h-8" />)}
                    {title || defaultTitles[mode]}
                </CardTitle>
                <CardDescription className="text-white/80 font-bold text-xs md:text-sm uppercase tracking-widest mt-2 relative z-10">
                    {description || defaultDescriptions[mode]}
                </CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {mode === "search" ? (
                        <>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="brand" className="text-sm font-medium text-muted-foreground">Marka pojazdu</Label>}
                                    <Input id="brand" placeholder="Mercedes-Benz" required className="h-11 px-4 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="model" className="text-sm font-medium text-muted-foreground">Model / Seria</Label>}
                                    <Input id="model" placeholder="GLC Coupe" required className="h-11 px-4 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="year" className="text-sm font-medium text-muted-foreground">Rok produkcji (od)</Label>}
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                                        <Input id="year" type="number" placeholder="2020" className="h-11 pl-10 pr-4 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="budget" className="text-sm font-medium text-muted-foreground">Budżet</Label>}
                                    <div className="relative">
                                        <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                                        <Input id="budget" placeholder="200 000 PLN" className="h-11 pl-10 pr-4 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {showLabels && <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Telefon Kontaktowy</Label>}
                                <Input id="phone" type="tel" placeholder="+48 123 456 789" required className="h-11 px-4 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all" />
                            </div>
                            <div className="space-y-2">
                                {showLabels && <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">Dodatkowe uwagi</Label>}
                                <Textarea id="message" placeholder="M-Pakiet, Panorama, Hak..." className="min-h-[100px] px-4 py-3 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all resize-none" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Imię i Nazwisko</Label>}
                                    <Input id="name" placeholder="Jan Kowalski" required className="h-11 px-4 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    {showLabels && <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Telefon</Label>}
                                    <Input id="phone" type="tel" placeholder="+48 123 456 789" required className="h-11 px-4 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                {showLabels && <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email (opcjonalnie)</Label>}
                                <Input id="email" type="email" placeholder="jan@kowalski.pl" className="h-11 px-4 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all" />
                            </div>
                            <div className="space-y-2">
                                {showLabels && <Label htmlFor="link" className="text-sm font-medium text-muted-foreground">Link do ogłoszenia</Label>}
                                <Input id="link" placeholder="mobile.de / autoscout24" type="url" className="h-11 px-4 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all" />
                            </div>
                            <div className="space-y-2">
                                {showLabels && <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">Wiadomość</Label>}
                                <Textarea id="message" placeholder="Dzień dobry, proszę o kontakt w sprawie..." className="min-h-[100px] px-4 py-3 rounded-lg border border-border/60 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all resize-none" required />
                            </div>
                        </>
                    )}

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-12 rounded-lg font-semibold shadow-md group"
                    >
                        {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                        {!isSubmitting && <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </Button>
                    <p className="text-center text-[9px] text-muted-foreground font-bold uppercase tracking-tighter">
                        Wysyłając zgłoszenie akceptujesz politykę prywatności. Dane są przetwarzane wyłącznie w celu obsługi zapytania.
                    </p>
                </form>
            </CardContent>
        </Card>
    )
}
