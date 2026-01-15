"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Send, Search, Car, CheckCircle2 } from "lucide-react"

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
            <Card className={`w-full bg-card backdrop-blur-sm border-2 border-emerald-500/50 shadow-2xl rounded-2xl overflow-hidden ${className}`}>
                <CardContent className="p-6 md:p-8 text-center space-y-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Wiadomość wysłana!</h3>
                    <p className="text-sm md:text-muted-foreground font-medium">Dziękujemy za kontakt. Nasz ekspert odezwie się do Ciebie w ciągu 24 godzin.</p>
                    <Button
                        onClick={() => setIsSuccess(false)}
                        variant="outline"
                        className="rounded-xl font-bold uppercase tracking-widest text-xs"
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
        <Card className={`w-full max-w-2xl mx-auto bg-card backdrop-blur-2xl border-2 border-primary/20 shadow-xl rounded-3xl overflow-hidden ${className}`}>
            <CardHeader className="bg-primary px-4 py-4 sm:px-6 sm:py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 rotate-12 bg-white rounded-full translate-x-8 sm:translate-x-12 -translate-y-8 sm:-translate-y-12 w-32 sm:w-48 h-32 sm:h-48 pointer-events-none" />
                <CardTitle className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter flex items-center gap-2 sm:gap-3 relative z-10 drop-shadow-md">
                    {mode === "search" ? <Search className="w-6 h-6 sm:w-8 sm:h-8" /> : (mode === "weryfikacja" ? <Car className="w-6 h-6 sm:w-8 sm:h-8" /> : <Send className="w-6 h-6 sm:w-8 sm:h-8" />)}
                    {title || defaultTitles[mode]}
                </CardTitle>
                <CardDescription className="text-white/80 font-bold text-xs md:text-sm uppercase tracking-widest mt-2 relative z-10 drop-shadow-md">
                    {description || defaultDescriptions[mode]}
                </CardDescription>
            </CardHeader>
            <CardContent className="px-4 py-4 sm:px-6 sm:py-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            {showLabels && <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Imię i Nazwisko</Label>}
                            <Input id="name" placeholder="Jan Kowalski" required className="h-12 md:h-11 px-4 rounded-lg border-2 border-border bg-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all touch-manipulation" />
                        </div>
                        <div className="space-y-2">
                            {showLabels && <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</Label>}
                            <Input id="email" type="email" placeholder="jan@kowalski.pl" required className="h-12 md:h-11 px-4 rounded-lg border-2 border-border bg-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all touch-manipulation" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        {showLabels && <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Telefon (opcjonalnie)</Label>}
                        <Input id="phone" type="tel" placeholder="+48 123 456 789" className="h-12 md:h-11 px-4 rounded-lg border-2 border-border bg-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all touch-manipulation" />
                    </div>
                    <div className="space-y-2">
                        {showLabels && <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                            {mode === "search" ? "Szczegóły pojazdu" : mode === "weryfikacja" ? "Link do ogłoszenia" : "Wiadomość"}
                        </Label>}
                        <Textarea 
                            id="message" 
                            placeholder={
                                mode === "search" 
                                    ? "Mercedes GLC, od 2020, Budżet do 250 000 PLN&#10;Wyposażenie: AMG, Panorama, Hak..."
                                    : mode === "weryfikacja" 
                                        ? "mobile.de/autoscout24 link + dodatkowe informacje..."
                                        : "Dzień dobry, proszę o kontakt w sprawie..."
                            }
                            className="min-h-[120px] px-4 py-3 rounded-lg border-2 border-border bg-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all resize-none touch-manipulation text-sm leading-relaxed"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-12 min-h-[48px] touch-manipulation rounded-lg font-bold shadow-md group"
                    >
                        {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                        {!isSubmitting && <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground font-bold uppercase tracking-tighter">
                        Wysyłając zgłoszenie akceptujesz politykę prywatności. Dane są przetwarzane wyłącznie w celu obsługi zapytania.
                    </p>
                </form>
            </CardContent>
        </Card>
    )
}
