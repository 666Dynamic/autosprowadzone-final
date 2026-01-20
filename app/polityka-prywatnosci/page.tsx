import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Polityka Prywatności i Impressum | autosprowadzone.pl",
    description: "Informacje o administratorze danych, polityce prywatności i danych firmy Miami Autocenter GmbH (Impressum).",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="container mx-auto px-4 py-32 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">
                Polityka <span className="text-primary">Prywatności</span>
            </h1>

            <div className="space-y-8">
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
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">Impressum</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            <strong>Angaben gemäß § 5 TMG</strong> <br />
                            Miami Autocenter GmbH <br />
                            Bremer Heerstraße 7A <br />
                            27711 Osterholz-Scharmbeck <br />
                        </p>
                        <p>
                            <strong>Vertreten durch:</strong> <br />
                            Lukas Kaminski & Damian Kierzek
                        </p>
                        <p>
                            <strong>Kontakt:</strong> <br />
                            Telefon: 0156 79264391 <br />
                            E-Mail: info@miamiauto.de
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
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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
