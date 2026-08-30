import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Building2, Trophy } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "O Nas — Miami Autocenter GmbH | SprowadzoneAuto.pl",
    description: "Poznaj Miami Autocenter GmbH. Zaufany partner w imporcie aut z Niemiec od 2023. HRB 211101, Osterholz-Scharmbeck. Dostęp do aukcji BCA, AUTO1 i 40+ platform B2B.",
    keywords: ["Miami Autocenter", "import aut z niemiec", "firma sprowadzająca auta", "GmbH Niemcy"],
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
    },
    alternates: {
        canonical: "https://sprowadzoneauto.pl/o-nas",
    },
    openGraph: {
        title: "O Nas — Miami Autocenter GmbH | SprowadzoneAuto.pl",
        description: "Poznaj Miami Autocenter GmbH. Zaufany partner w imporcie aut z Niemiec od 2023. HRB 211101, Osterholz-Scharmbeck.",
        url: "https://sprowadzoneauto.pl/o-nas",
        type: "website",
        images: [{
            url: 'https://sprowadzoneauto.pl/opengraph-image',
            width: 1200,
            height: 630,
            alt: 'Miami Autocenter GmbH - Import Aut z Niemiec',
        }],
    },
}

export default function AboutPage() {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-8">

                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        <Building2 className="w-4 h-4" />
                        <span>Miami Autocenter GmbH</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                        Niemiecka Jakość, <br /><span className="text-primary not-italic">Polska Obsługa</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Jesteśmy legalnie działającą niemiecką firmą <strong>Miami Autocenter GmbH</strong> z siedzibą w Osterholz-Scharmbeck.
                        Specjalizujemy się w profesjonalnym imporcie samochodów z aukcji B2B dla klientów indywidualnych.
                    </p>
                </div>

                {/* Stats / Trust Markers */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
                    {[
                        { icon: Building2, label: "Niemiecka Spółka GmbH", value: "HRB 211101" },
                        { icon: Trophy, label: "Dostęp do Platform B2B", value: "40+" },
                        { icon: CheckCircle2, label: "Stała Prowizja", value: "2500 PLN" },
                    ].map((stat, i) => (
                        <div key={i} className="p-6 bg-card border border-border rounded-3xl text-center">
                            <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                            <div className="text-2xl md:text-3xl font-black text-foreground mb-1">{stat.value}</div>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Main Content - Founders & Mission */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black uppercase tracking-tight">Kto za tym stoi?</h2>
                        <div className="prose dark:prose-invert text-muted-foreground">
                            <p>
                                Za sukcesem <strong>SprowadzoneAuto.pl</strong> stoją <strong>Lukas</strong> oraz <strong>Damian</strong>.
                                Połączyliśmy naszą pasję do motoryzacji z wiedzą na temat niemieckiego rynku, aby stworzyć usługę, której sami brakowało nam na rynku.
                            </p>
                            <p>
                                Działamy w pełni transparentnie. Jako niemiecka spółka GmbH (odpowiednik polskiego Sp. z o.o.) podlegamy rygorystycznym niemieckim przepisom, co gwarantuje Ci pełne bezpieczeństwo transakcji.
                            </p>
                            <ul className="space-y-2 mt-4 font-medium text-foreground">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Bezpośredni dostęp do BCA, Manheim, Auto1</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Pełna weryfikacja techniczna przed zakupem</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Pomoc w rejestracji w Polsce</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                        <Card className="relative border-2 border-border bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="uppercase tracking-widest text-sm font-black text-primary">Nasza Misja</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-xl font-bold leading-relaxed italic">
                                    "Chcemy, aby każdy Polak mógł kupić pewne auto z Niemiec w cenie hurtowej, bez pośredników i ukrytych marż handlarzy."
                                </p>
                                <div className="flex gap-4 pt-4 border-t border-border/50">
                                    <div>
                                        <div className="font-black text-foreground">Lukas</div>
                                        <div className="text-xs text-muted-foreground uppercase">Co-Founder</div>
                                    </div>
                                    <div>
                                        <div className="font-black text-foreground">Damian</div>
                                        <div className="text-xs text-muted-foreground uppercase">Co-Founder</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-[3rem] p-8 md:p-16 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Gotowy na swoje <br />nowe auto?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Nie przepłacaj u handlarza. Zleć nam import i oszczędź 20-30% wartości pojazdu w porównaniu do polskich portali.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/kontakt">
                            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full font-bold shadow-xl shadow-primary/20">
                                Skontaktuj się z nami
                            </Button>
                        </Link>
                        <Link href="/kalkulator">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full font-bold bg-background">
                                Sprawdź koszty
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
