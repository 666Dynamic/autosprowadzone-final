import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung und Informationen zur Datenverarbeitung gemäß DSGVO. Miami Autocenter GmbH, Osterholz-Scharmbeck.",
    alternates: {
        canonical: "https://sprowadzoneauto.pl/datenschutz",
    },
}

export default function DatenschutzPage() {
    return (
        <div lang="de" className="container mx-auto px-4 py-32 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">
                <span className="text-primary">Datenschutzerklärung</span>
            </h1>

            <div className="space-y-8">
                {/* 1. Datenschutz auf einen Blick */}
                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">1. Datenschutz auf einen Blick</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Allgemeine Hinweise</h4>
                            <p>
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                            <p>
                                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Wie erfassen wir Ihre Daten?</h4>
                            <p>
                                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                            </p>
                            <p className="mt-2">
                                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                            <p>
                                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* 2. Hosting */}
                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">2. Hosting</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Vercel Inc.</h4>
                            <p>
                                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                            </p>
                            <p className="mt-2">
                                <strong className="text-foreground">Vercel Inc.</strong><br />
                                440 N Barranca Ave #4133<br />
                                Covina, CA 91723, USA<br />
                                Website: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a>
                            </p>
                            <p className="mt-2">
                                Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com/legal/privacy-policy</a>.
                            </p>
                            <p className="mt-2">
                                Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* 3. Verantwortliche Stelle */}
                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">3. Hinweis zur verantwortlichen Stelle</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                        </p>
                        <p>
                            <strong className="text-foreground">Miami Autocenter GmbH</strong><br />
                            Bremer Heerstraße 7A<br />
                            27711 Osterholz-Scharmbeck<br />
                            Deutschland
                        </p>
                        <p>
                            <strong>Geschäftsführung:</strong> Lukas Kaminski & Damian Kierzek<br />
                            <strong>Telefon (DE):</strong> <a href="tel:+4915679264391" className="text-primary hover:underline">+49 156 79264391</a><br />
                            <strong>Telefon (PL):</strong> <a href="tel:+48780010848" className="text-primary hover:underline">+48 780 010 848</a><br />
                            <strong>E-Mail:</strong> <a href="mailto:info@miamiauto.de" className="text-primary hover:underline">info@miamiauto.de</a>
                        </p>
                        <p>
                            <strong>Registergericht:</strong> Amtsgericht Walsrode<br />
                            <strong>Registernummer:</strong> HRB 211101<br />
                            <strong>USt-IdNr.:</strong> DE361829942
                        </p>
                        <p className="mt-4">
                            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                        </p>
                    </CardContent>
                </Card>

                {/* 4. Datenerfassung */}
                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">4. Datenerfassung auf dieser Website</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Cookies</h4>
                            <p>
                                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                            </p>
                            <p className="mt-2">
                                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Kontaktformular</h4>
                            <p>
                                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                            </p>
                            <p className="mt-2">
                                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Anfrage per E-Mail oder Telefon</h4>
                            <p>
                                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* 5. Webanalyse */}
                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">5. Webanalyse (Google Analytics & Vercel Analytics)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Google Analytics (gtag.js)</h4>
                            <p>
                                Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland).
                                Google Analytics verwendet Technologien (z. B. Cookies oder ähnliche Identifikatoren), um die Nutzung der Website zu analysieren.
                                Die dadurch erzeugten Informationen können an Server von Google in den USA übertragen und dort gespeichert werden.
                            </p>
                            <p className="mt-2">
                                Wir setzen Google Analytics ein, um die Nutzung unserer Website auszuwerten und unser Angebot zu verbessern.
                                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                            </p>
                            <p className="mt-2">
                                Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a>.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground mb-2">Vercel Analytics</h4>
                            <p>
                                Zusätzlich nutzen wir Vercel Analytics zur Messung von Seitenaufrufen und Performance. Anbieter ist Vercel Inc. (USA).
                                Die Verarbeitung erfolgt zur Auswertung der Website-Nutzung und Stabilität.
                            </p>
                            <p className="mt-2">
                                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                                Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com/legal/privacy-policy</a>.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* 6. E-Mail-Versand */}
                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">6. E-Mail-Versand (Resend)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            Für den Versand von E-Mails nutzen wir den Dienst <strong className="text-foreground">Resend</strong>:
                        </p>
                        <p>
                            <strong className="text-foreground">Resend, Inc.</strong><br />
                            San Francisco, CA, USA<br />
                            Website: <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">resend.com</a>
                        </p>
                        <p className="mt-2">
                            Wenn Sie uns eine Anfrage über unser Kontaktformular senden, werden Ihre Daten (Name, E-Mail-Adresse, Nachricht) über Resend versendet. Resend verarbeitet diese Daten ausschließlich in unserem Auftrag und darf sie nicht für eigene Zwecke nutzen.
                        </p>
                        <p className="mt-2">
                            Details zur Datenverarbeitung durch Resend finden Sie hier: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">resend.com/legal/privacy-policy</a>
                        </p>
                        <p className="mt-2">
                            Die Nutzung von Resend erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
                        </p>
                    </CardContent>
                </Card>

                {/* 7. Ihre Rechte */}
                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">7. Ihre Rechte nach DSGVO</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>Sie haben folgende Rechte:</p>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li><strong className="text-foreground">Auskunftsrecht (Art. 15 DSGVO):</strong> Recht auf Auskunft über Ihre gespeicherten Daten</li>
                            <li><strong className="text-foreground">Berichtigungsrecht (Art. 16 DSGVO):</strong> Recht auf Korrektur falscher Daten</li>
                            <li><strong className="text-foreground">Löschungsrecht (Art. 17 DSGVO):</strong> Recht auf Löschung Ihrer Daten</li>
                            <li><strong className="text-foreground">Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Recht auf Einschränkung der Verarbeitung</li>
                            <li><strong className="text-foreground">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Recht auf Datenübertragung an Dritte</li>
                            <li><strong className="text-foreground">Widerspruchsrecht (Art. 21 DSGVO):</strong> Recht auf Widerspruch gegen die Verarbeitung</li>
                            <li><strong className="text-foreground">Beschwerderecht:</strong> Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
                        </ul>
                        <p className="mt-4">
                            Für die Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@miamiauto.de" className="text-primary hover:underline">info@miamiauto.de</a>
                        </p>
                    </CardContent>
                </Card>

                {/* 8. SSL-Verschlüsselung */}
                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">8. SSL- bzw. TLS-Verschlüsselung</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                        </p>
                        <p className="mt-2">
                            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                        </p>
                    </CardContent>
                </Card>

                {/* 9. Streitschlichtung */}
                <Card className="border-2 border-border bg-card">
                    <CardHeader>
                        <CardTitle className="uppercase tracking-widest text-lg font-black text-muted-foreground">9. Streitschlichtung</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ec.europa.eu/consumers/odr</a>
                        </p>
                        <p className="mt-2">
                            Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </CardContent>
                </Card>

                <div className="text-center pt-8 space-y-4">
                    <p className="text-xs text-muted-foreground">Stand: {new Date().toLocaleDateString('de-DE')}</p>
                    <Link href="/" className="text-primary hover:underline font-bold text-sm inline-block">
                        ← Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    )
}
