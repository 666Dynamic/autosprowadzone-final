"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        name: "Marek K.",
        location: "Kraków",
        text: "Cały proces importu przebiegł wzorowo. Auto sprawdzone na miejscu w Bremie, raport był bardzo szczegółowy. Wiedziałem dokładnie co kupuję. Polecam!",
        date: "2 tygodnie temu",
    },
    {
        name: "Tomasz W.",
        location: "Warszawa",
        text: "Dzięki dostępowi do aukcji BCA udało się kupić 3-letnie Audi A4 w cenie, o której w Polsce można tylko pomarzyć. Pełna faktura VAT, zero problemów z leasingiem.",
        date: "1 miesiąc temu",
    },
    {
        name: "Anna S.",
        location: "Poznań",
        text: "Bardzo profesjonalne podejście. Obawiałam się zakupu auta z zagranicy, ale panowie z autosprowadzone wszystko załatwili. Auto pod domem po 5 dniach.",
        date: "3 tygodnie temu",
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter italic">Co mówią <span className="text-primary not-italic">nasi klienci?</span></h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Setki sprowadzonych aut i zadowolonych kierowców. Dołącz do nich.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border/50 shadow-sm relative flex flex-col"
                        >
                            <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 h-6 w-6 sm:h-8 sm:w-8 text-primary/10" />
                            <div className="flex gap-1 mb-4 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-foreground mb-4 sm:mb-6 flex-grow italic text-sm sm:text-base">"{testimonial.text}"</p>
                            <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
                                <div>
                                    <span className="font-bold text-foreground block">{testimonial.name}</span>
                                    <span>{testimonial.location}</span>
                                </div>
                                <span>{testimonial.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
