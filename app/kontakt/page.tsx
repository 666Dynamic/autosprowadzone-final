import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kontakt — Zapytaj o Import Auta z Niemiec",
    description: "Skontaktuj się z nami w sprawie importu aut z Niemiec, weryfikacji pojazdu lub dostępu do aukcji B2B. Odpowiadamy 7 dni w tygodniu, 7:00–22:00. Telefon PL/DE, WhatsApp, e-mail.",
    alternates: {
        canonical: "https://sprowadzoneauto.pl/kontakt",
    },
    openGraph: {
        title: "Kontakt — Zapytaj o Import Auta z Niemiec",
        description: "Skontaktuj się w sprawie importu, weryfikacji auta lub aukcji B2B. Odpowiadamy 7:00–22:00.",
        url: "https://sprowadzoneauto.pl/kontakt",
    },
}

export default function ContactPage() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic line-clamp-2">Skontaktuj się <span className="text-primary not-italic">z nami</span></h1>
                    <p className="text-lg text-muted-foreground font-medium">
                        Masz pytania? Chcesz sprowadzić auto? Jesteśmy do Twojej dyspozycji telefonicznie, na WhatsAppie oraz w naszej społeczności na Facebooku.
                    </p>
                </div>

                {/* Contact Info Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {[
                        {
                            icon: Phone,
                            title: "Tel / WhatsApp",
                            content: ["+49 156 79264391 (DE)", "+48 780 010 848 (PL)"],
                            sub: "Szybki kontakt 7:00–22:00",
                            color: "text-emerald-500",
                            bg: "bg-emerald-500/10",
                            border: "group-hover:border-emerald-500/50"
                        },
                        {
                            icon: Mail,
                            title: "Napisz do nas",
                            content: ["kontakt@sprowadzoneauto.pl"],
                            sub: "Odpisujemy w 24h",
                            color: "text-blue-500",
                            bg: "bg-blue-500/10",
                            border: "group-hover:border-blue-500/50"
                        },
                        {
                            icon: MapPin,
                            title: "Adres Firmy",
                            content: ["Miami Autocenter GmbH", "Osterholz-Scharmbeck", "Niemcy"],
                            sub: "Wizyta po umówieniu",
                            color: "text-purple-500",
                            bg: "bg-purple-500/10",
                            border: "group-hover:border-purple-500/50"
                        },
                        {
                            icon: Clock,
                            title: "Godziny pracy",
                            content: ["Codziennie", "7:00 - 22:00"],
                            sub: "Poza tymi godzinami zostaw wiadomość",
                            color: "text-amber-500",
                            bg: "bg-amber-500/10",
                            border: "group-hover:border-amber-500/50"
                        }
                    ].map((item, i) => (
                        <div key={i} className={`flex flex-col items-center text-center p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-border rounded-[2rem] shadow-lg transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl ${item.border}`}>
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.bg} ${item.color}`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-black uppercase tracking-tight mb-3 text-foreground text-lg">{item.title}</h3>
                            <div className="space-y-1 mb-3">
                                {item.content.map((line, j) => (
                                    <p key={j} className="text-muted-foreground font-bold text-sm">{line}</p>
                                ))}
                            </div>
                            {item.sub && <p className={`text-xs font-black uppercase tracking-widest opacity-80 ${item.color}`}>{item.sub}</p>}
                        </div>
                    ))}
                </div>

                {/* Unified Contact Form */}
                <div className="max-w-4xl mx-auto">
                    <ContactForm mode="simple" />
                </div>

            </div>
        </div>
    )
}
