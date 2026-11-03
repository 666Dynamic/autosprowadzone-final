import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { faqItems } from "@/lib/faq"

interface FaqSectionProps {
    limit?: number
    /** Na stronie /faq sekcja jest głównym nagłówkiem strony. */
    asPageHeading?: boolean
}

// Natywne <details> zamiast akordeonu Radix: odpowiedzi są w HTML-u od razu
// (Radix nie renderuje zamkniętej treści, więc Google jej nie widział).
export function FaqSection({ limit, asPageHeading = false }: FaqSectionProps) {
    const Heading = asPageHeading ? "h1" : "h2"

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0%,transparent_70%)] pointer-events-none" />

            {/* Smooth fade transitions top and bottom */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-0" />

            <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                        FAQ
                    </div>
                    <Heading className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-foreground">
                        {asPageHeading ? (
                            <>Sprowadzanie aut z Niemiec — <span className="text-primary italic">pytania i odpowiedzi</span></>
                        ) : (
                            <>Częste <span className="text-primary italic">Pytania</span></>
                        )}
                    </Heading>
                    <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
                        Odpowiedzi na najczęściej zadawane pytania dotyczące importu.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqItems.slice(0, limit || faqItems.length).map((item, idx) => (
                        <details
                            key={idx}
                            className="group border border-border/50 rounded-2xl mb-3 px-6 bg-card/50 hover:border-primary/30 transition-all overflow-hidden"
                        >
                            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-left font-black uppercase tracking-tight text-sm py-6 min-h-[60px] touch-manipulation [&::-webkit-details-marker]:hidden">
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-black opacity-40 text-base">{String(idx + 1).padStart(2, "0")}</span>
                                    <h3 className="text-left leading-tight">{item.question}</h3>
                                </div>
                                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                            </summary>
                            <div className="text-muted-foreground leading-relaxed text-sm font-medium pb-6 pt-2 border-t border-border/50">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>

                {limit && limit < faqItems.length && (
                    <div className="mt-8 text-center">
                        <Link href="/faq">
                            <Button className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all h-12 px-8 rounded-xl font-bold border-2 border-primary/20 hover:border-primary shadow-lg">
                                Zobacz więcej FAQ
                            </Button>
                        </Link>
                    </div>
                )}

                <div className="mt-16 text-center pt-8 border-t border-border/30">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-muted/50 p-6 rounded-[2rem] border border-border">
                        <p className="text-sm font-bold text-muted-foreground px-2">Nie znalazłeś tego, czego szukasz?</p>
                        <Link href="/kontakt">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-12 px-6 rounded-lg font-bold shadow-lg">
                                Napisz do nas
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
