import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export const metadata = {
    title: "Kontakt | autosprowadzone.pl",
    description: "Skontaktuj się z nami. Import aut z Niemiec, weryfikacja, aukcje B2B.",
}

export default function ContactPage() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">Skontaktuj się <span className="text-primary not-italic">z nami</span></h1>
                    <p className="text-xl text-muted-foreground font-medium">
                        Masz pytania? Chcesz sprowadzić auto? Jesteśmy do Twojej dyspozycji.
                    </p>
                </div>

                {/* Contact Info Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {[
                        { icon: Phone, title: "Zadzwoń", content: ["+49 156 79264391 (DE)", "+48 780 010 848 (PL)"], sub: "Pn-Pt: 9:00 - 18:00" },
                        { icon: Mail, title: "Napisz", content: ["autosprowadzone@gmail.com"], sub: "Odpisujemy w 24h" },
                        { icon: MapPin, title: "Lokalizacja", content: ["Miami Autocenter GmbH", "Bremer Heerstraße 7A", "27711 OHZ, Niemcy"], sub: "" },
                        { icon: Clock, title: "Godziny pracy", content: ["Poniedziałek - Piątek", "9:00 - 18:00"], sub: "Soboty: Po ustaleniu" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-8 bg-card border-2 border-border rounded-[2.5rem] shadow-sm hover:border-primary/30 transition-all group">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-black uppercase tracking-tight mb-3 text-foreground">{item.title}</h3>
                            <div className="space-y-1 mb-3">
                                {item.content.map((line, j) => (
                                    <p key={j} className="text-muted-foreground text-sm font-bold">{line}</p>
                                ))}
                            </div>
                            {item.sub && <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">{item.sub}</p>}
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
