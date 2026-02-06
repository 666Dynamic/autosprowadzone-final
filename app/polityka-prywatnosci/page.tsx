import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Polityka Prywatności i Impressum | SprowadzoneAuto.pl",
    description: "Informacje o administratorze danych, polityce prywatności i danych firmy Miami Autocenter GmbH (Impressum).",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="container mx-auto px-4 py-32 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">
                Polityka <span className="text-primary">Prywatności</span>
            </h1>

            <div className="space-y-8">
                <Card className="border-2 border-primary/20 bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-primary">Handelsname</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Die Miami Autocenter GmbH betreibt ihre Geschäftstätigkeit im Bereich Import von Fahrzeugen unter der Marke:<br />
                            <strong className="text-foreground text-xl">SprowadzoneAuto.pl</strong>
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">Administrator Danych</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Administratorem Twoich danych osobowych jest: <br />
                            <strong>Miami Autocenter GmbH</strong> <br />
                            Bremer Heerstraße 7A <br />
                            27711 Osterholz-Scharmbeck, Niemcy <br />
                            E-mail: info@miamiauto.de <br />
                            Tel: 0156 79264391 / +48 780 010 848
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">Impressum (Angaben gemäß § 5 TMG)</CardTitle>
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
                        <p>
                            <strong>Kontakt:</strong> <br />
                            Telefon (DE): <a href="tel:+4915679264391" className="text-primary hover:underline">+49 156 79264391</a> <br />
                            Telefon (PL): <a href="tel:+48780010848" className="text-primary hover:underline">+48 780 010 848</a> <br />
                            E-Mail: <a href="mailto:info@miamiauto.de" className="text-primary hover:underline">info@miamiauto.de</a>
                        </p>
                        <p>
                            <strong>Registereintrag:</strong> <br />
                            Eintragung im Registergericht: Walsrode <br />
                            Registernummer: HRB 211101
                        </p>
                        <p>
                            <strong>Umsatzsteuer-ID:</strong> <br />
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE361829942
                        </p>
                        <p>
                            <strong>Streitschlichtung:</strong> <br />
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ec.europa.eu/consumers/odr</a>. <br />
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                        <p className="pt-4 border-t border-border text-xs">
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
                        </p>
                    </CardContent>
                </Card>

                <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                    <h3>1. Ochrona Danych</h3>
                    <p>
                        Zależy nam na ochronie Twoich danych. Niniejsza polityka wyjaśnia, w jaki sposób gromadzimy, wykorzystujemy i chronimy Twoje dane osobowe.
                    </p>

                    <h3>2. Gromadzenie Danych</h3>
                    <p>
                        Gromadzimy dane, które nam dobrowolnie podajesz, np. poprzez formularz kontaktowy (imię, e-mail, telefon, preferencje dotyczące samochodu).
                        Dane te są wykorzystywane wyłącznie w celu przygotowania oferty i kontaktu w sprawie importu pojazdu.
                    </p>

                    <h3>3. Cookies</h3>
                    <p>
                        Nasza strona może wykorzystywać pliki cookies w celu poprawy działania serwisu i analizy ruchu. Możesz wyłączyć cookies w ustawieniach swojej przeglądarki.
                    </p>

                    <h3>4. Twoje Prawa</h3>
                    <p>
                        Masz prawo do wglądu, poprawiania, usuwania oraz ograniczenia przetwarzania swoich danych. W tym celu skontaktuj się z nami na podany adres e-mail.
                    </p>
                </div>
            </div>
        </main>
    )
}
