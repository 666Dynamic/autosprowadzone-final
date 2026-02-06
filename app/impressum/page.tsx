import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Impressum | SprowadzoneAuto.pl",
    description: "Impressum und rechtliche Angaben der Miami Autocenter GmbH",
}

export default function ImpressumPage() {
    return (
        <div className="min-h-screen py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-foreground">
                    Impressum
                </h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
                        <div className="space-y-2 text-muted-foreground">
                            <p className="font-bold text-foreground text-lg">Miami Autocenter GmbH</p>
                            <p>Bremer Heerstraße 7A</p>
                            <p>27711 Osterholz-Scharmbeck</p>
                            <p className="pt-2"><strong className="text-foreground">Geschäftsführung:</strong> Lukas Kaminski & Damian Kierzek</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">Kontakt</h2>
                        <div className="space-y-2 text-muted-foreground">
                            <p><strong className="text-foreground">Telefon:</strong> <a href="tel:+4915679264391" className="text-primary hover:underline">+49 156 79264391</a></p>
                            <p><strong className="text-foreground">E-Mail:</strong> <a href="mailto:info@miamiauto.de" className="text-primary hover:underline">info@miamiauto.de</a></p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">Umsatzsteuer-ID</h2>
                        <p className="text-muted-foreground">
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            <strong className="text-foreground">DE361829942</strong>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">Registereintrag</h2>
                        <div className="space-y-2 text-muted-foreground">
                            <p><strong className="text-foreground">Eintragung im Registergericht:</strong> Walsrode</p>
                            <p><strong className="text-foreground">Registernummer:</strong> HRB 211101</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Die Europäische Kommission stellt zur außergerichtlichen Online-Streitbeilegung eine Plattform (sog. OS-Plattform) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ec.europa.eu/consumers/odr</a>.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            Wir sind jedoch weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    <section className="border-t border-border pt-8">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                        </p>
                    </section>

                    <div className="pt-8 text-center">
                        <Link href="/" className="text-primary hover:underline font-bold">
                            ← Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
