import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Impressum | SprowadzoneAuto.pl",
    description: "Impressum und rechtliche Angaben der Miami Autocenter GmbH",
}

export default function ImpressumPage() {
    return (
        <main className="container mx-auto px-4 py-32 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">
                <span className="text-primary">Impressum</span>
            </h1>

            <div className="space-y-8">
                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">Handelsname</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Die Miami Autocenter GmbH betreibt ihre Geschäftstätigkeit im Bereich Import von Fahrzeugen unter der Marke:<br />
                            <strong className="text-foreground text-lg">SprowadzoneAuto.pl</strong>
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">Angaben gemäß § 5 TMG</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            <strong className="text-foreground">Miami Autocenter GmbH</strong> <br />
                            Bremer Heerstraße 7A <br />
                            27711 Osterholz-Scharmbeck <br />
                            Deutschland
                        </p>
                        <p>
                            <strong>Geschäftsführung:</strong> <br />
                            Lukas Kaminski & Damian Kierzek
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">Kontakt</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            <strong>Telefon (DE):</strong> <a href="tel:+4915679264391" className="text-primary hover:underline">+49 156 79264391</a> <br />
                            <strong>Telefon (PL):</strong> <a href="tel:+48780010848" className="text-primary hover:underline">+48 780 010 848</a> <br />
                            <strong>E-Mail:</strong> <a href="mailto:info@miamiauto.de" className="text-primary hover:underline">info@miamiauto.de</a>
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">Registereintrag</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            <strong>Eintragung im Registergericht:</strong> Walsrode <br />
                            <strong>Registernummer:</strong> HRB 211101
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">Umsatzsteuer-ID</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: <br />
                            <strong className="text-foreground">DE361829942</strong>
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">Verbraucherstreitbeilegung</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            Die Europäische Kommission stellt zur außergerichtlichen Online-Streitbeilegung eine Plattform (sog. OS-Plattform) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ec.europa.eu/consumers/odr</a>.
                        </p>
                        <p>
                            Wir sind jedoch weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">Haftungsausschluss</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                        </p>
                    </CardContent>
                </Card>

                <div className="text-center pt-4">
                    <Link href="/" className="text-primary hover:underline font-bold text-sm">
                        ← Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </main>
    )
}
