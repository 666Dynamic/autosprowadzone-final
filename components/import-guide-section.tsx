import Link from "next/link"
import { CALCULATOR_CONFIG, formatNumber } from "@/lib/calculator-constants"

const costRows = [
    { item: "Cena auta na aukcji B2B lub u dealera", value: "wg licytacji / oferty" },
    { item: "Opłata aukcyjna (Aufgeld) + dokumenty eksportowe", value: "ok. 3–4% + 120–180 €" },
    { item: "Transport lawetą do Polski", value: `${formatNumber(CALCULATOR_CONFIG.TRANSPORT_MIN)}–${formatNumber(CALCULATOR_CONFIG.TRANSPORT_MAX)} zł` },
    { item: "Akcyza (silnik do 2.0 l / powyżej 2.0 l)", value: "3,1% / 18,6% wartości" },
    { item: "Tłumaczenia, badanie techniczne, rejestracja", value: "ok. 500 zł" },
    { item: "Prowizja SprowadzoneAuto.pl", value: `${formatNumber(CALCULATOR_CONFIG.COMMISSION)} zł (stała)` },
]

export function ImportGuideSection() {
    return (
        <section id="sprowadzanie-aut-z-niemiec" className="py-16 md:py-24 relative overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        Poradnik
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-foreground mb-8">
                        Sprowadzanie aut z Niemiec — <span className="text-primary italic">jak to działa i ile kosztuje?</span>
                    </h2>

                    <div className="prose prose-slate dark:prose-invert max-w-none
                        prose-headings:font-black prose-headings:text-foreground prose-headings:tracking-tight
                        prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                        prose-p:text-muted-foreground prose-p:leading-relaxed
                        prose-li:text-muted-foreground prose-strong:text-foreground
                        prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline">
                        <p>
                            Niemcy to największy rynek używanych samochodów w Europie i najczęstszy kierunek importu aut do Polski.
                            Sprowadzanie auta z Niemiec opłaca się przede wszystkim wtedy, gdy kupujesz młody samochód z udokumentowaną
                            historią — poleasingowy, flotowy albo od autoryzowanego dealera — i robisz to tam, gdzie kupują sami handlarze:
                            na <strong>zamkniętych aukcjach B2B</strong>. Właśnie tak działamy: wyszukujemy, sprawdzamy, licytujemy i sprowadzamy
                            auto z Niemiec na Twoje indywidualne zamówienie, a Ty odbierasz je pod domem z kompletem dokumentów do rejestracji.
                        </p>

                        <h3>Skąd pochodzą auta, które sprowadzamy z Niemiec?</h3>
                        <p>
                            Większość samochodów kupujemy na platformach dealerskich, do których osoba prywatna nie ma dostępu:
                            {" "}<Link href="/blog/bca-europe-przewodnik">BCA</Link>, <Link href="/blog/auto1-jak-licytowac">AUTO1</Link>, Autobid,
                            {" "}<Link href="/blog/openlane-adesa-jak-kupowac-auto">Openlane (dawna Adesa)</Link>, <Link href="/blog/caronsale-aukcje-b2b-jak-kupic-auto">CarOnSale</Link> i ponad 30 innych serwisów.
                            Trafiają tam auta z wygasłych kontraktów leasingowych, z flot firmowych, z banków i od dealerów, którzy nie chcą
                            ich sprzedawać detalicznie. Każde auto ma raport stanu (Zustandsbericht) z pomiarem lakieru i zdjęciami uszkodzeń.
                            Więcej o tym rynku przeczytasz na stronie <Link href="/aukcje">aukcje samochodowe B2B</Link>, a o autach z Belgii,
                            Holandii czy Francji w artykule <Link href="/blog/sprowadzanie-aut-z-europy">sprowadzanie aut z Europy</Link>.
                        </p>

                        <h3>Ile kosztuje sprowadzenie auta z Niemiec w 2026 roku?</h3>
                        <p>
                            Całkowity koszt to nie tylko cena na fakturze. Przy imporcie z Niemiec trzeba policzyć:
                        </p>
                        <div className="not-prose overflow-x-auto my-6 rounded-2xl border border-border">
                            <table className="w-full text-sm">
                                <thead className="bg-muted">
                                    <tr>
                                        <th className="text-left p-3 font-black text-foreground">Pozycja</th>
                                        <th className="text-left p-3 font-black text-foreground">Orientacyjny koszt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {costRows.map((row) => (
                                        <tr key={row.item} className="border-t border-border">
                                            <td className="p-3 text-muted-foreground">{row.item}</td>
                                            <td className="p-3 font-bold text-foreground whitespace-nowrap">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Dokładną kwotę dla konkretnego auta policzysz w naszym <Link href="/kalkulator">kalkulatorze akcyzy i kosztów importu</Link>,
                            a pełne wyliczenie z przykładami znajdziesz w artykule
                            {" "}<Link href="/blog/koszt-sprowadzenia-auta-z-niemiec-2026">koszt sprowadzenia auta z Niemiec w 2026 roku</Link>.
                            Mimo tych opłat auto kupione na aukcji B2B jest zwykle o 15–30% tańsze niż ten sam egzemplarz wystawiony na polskim portalu.
                        </p>

                        <h3>Jak wygląda import auta z Niemiec krok po kroku?</h3>
                        <ol>
                            <li><strong>Zlecenie</strong> — określasz markę, model, rocznik, wyposażenie i budżet.</li>
                            <li><strong>Selekcja</strong> — przeglądamy aukcje i oferty dealerów, odrzucamy auta z czerwonymi flagami i wysyłamy Ci wybrane egzemplarze z raportami.</li>
                            <li><strong>Umowa i depozyt</strong> — podpisujemy <a href="/umowa-posrednictwa.pdf" target="_blank" rel="noopener noreferrer">umowę pośrednictwa</a>; depozyt jest w 100% zwrotny, jeśli nie wygramy aukcji.</li>
                            <li><strong>Licytacja</strong> — licytujemy na naszym niemieckim koncie firmowym do ustalonego z Tobą limitu.</li>
                            <li><strong>Transport</strong> — organizujemy ubezpieczony transport lawetą pod wskazany adres w Polsce (<Link href="/blog/transport-auta-z-niemiec-koszt">ile kosztuje transport auta z Niemiec</Link>).</li>
                            <li><strong>Rejestracja</strong> — przekazujemy komplet dokumentów i pomagamy z akcyzą, tłumaczeniami i rejestracją.</li>
                        </ol>
                        <p>
                            Cały proces trwa zwykle 7–14 dni od wygranej aukcji. Od czego zależy termin, opisaliśmy w poradniku
                            {" "}<Link href="/blog/ile-trwa-sprowadzenie-auta-z-niemiec">ile trwa sprowadzenie auta z Niemiec</Link>.
                        </p>

                        <h3>Samodzielny import czy sprowadzenie auta przez pośrednika?</h3>
                        <p>
                            Samemu możesz kupić auto na <Link href="/blog/jak-kupic-auto-na-mobile-de">mobile.de</Link> czy od osoby prywatnej i wrócić na <Link href="/blog/tablice-wywozowe-z-niemiec-ausfuhrkennzeichen">tablicach wywozowych</Link>, ale nie wejdziesz na aukcje B2B, musisz sam
                            ocenić stan auta z odległości kilkuset kilometrów, zorganizować transport i dokumenty eksportowe.
                            Pośrednik kosztuje, ale daje dostęp do tańszego rynku hurtowego i bierze na siebie ryzyko logistyczne.
                            Obie drogi porównujemy uczciwie w artykule
                            {" "}<Link href="/blog/import-samemu-czy-przez-posrednika">samodzielny import czy przez pośrednika</Link>
                            {" "}oraz <Link href="/blog/auto-z-niemiec-od-osoby-prywatnej-czy-z-aukcji">od osoby prywatnej czy z aukcji</Link>.
                            Jeśli wybierasz pośrednika, skorzystaj z naszej listy pytań:
                            {" "}<Link href="/blog/firma-sprowadzajaca-auta-z-niemiec-jak-wybrac">jak wybrać firmę sprowadzającą auta z Niemiec</Link>.
                        </p>

                        <h3>Jak nie kupić złego auta z Niemiec?</h3>
                        <p>
                            Największe ryzyka przy imporcie to cofnięty licznik, ukryta szkoda i nieuczciwy sprzedawca. Dlatego każde auto
                            analizujemy pod kątem historii serwisowej, VIN i raportu rzeczoznawcy, a na życzenie wykonujemy
                            {" "}<Link href="/weryfikacja">fizyczną weryfikację auta w Niemczech</Link> przed zakupem. Przydatne poradniki:
                            {" "}<Link href="/blog/jak-sprawdzic-auto-z-niemiec-przed-zakupem">jak sprawdzić auto z Niemiec przed zakupem</Link>,
                            {" "}<Link href="/blog/jak-sprawdzic-przebieg-auta-z-niemiec">jak sprawdzić przebieg</Link> i
                            {" "}<Link href="/blog/oszustwa-przy-sprowadzaniu-aut-z-niemiec">najczęstsze oszustwa przy sprowadzaniu aut</Link>.
                        </p>

                        <h3>Formalności po sprowadzeniu: akcyza i rejestracja</h3>
                        <p>
                            Po przywiezieniu auta masz 14 dni na złożenie deklaracji akcyzowej AKC-U/S i zapłatę akcyzy oraz 30 dni na rejestrację w wydziale
                            komunikacji. Potrzebne będą: umowa lub faktura, niemieckie dowody rejestracyjne (Teil I i Teil II),
                            tłumaczenia przysięgłe, potwierdzenie zapłaty akcyzy i badanie techniczne. Co odebrać od sprzedawcy, opisaliśmy w liście <Link href="/blog/dokumenty-przy-zakupie-auta-w-niemczech">dokumenty przy zakupie auta w Niemczech</Link>. Szczegóły formalności w artykułach
                            {" "}<Link href="/blog/akcyza-2026-stawki">akcyza 2026 — stawki</Link> i
                            {" "}<Link href="/blog/rejestracja-auta-z-niemiec-2026">rejestracja auta z Niemiec w 2026 roku</Link>.
                        </p>

                        <h3>Jakie auta najbardziej opłaca się sprowadzić z Niemiec?</h3>
                        <p>
                            Najlepszy stosunek ceny do pewności dają 2–5-letnie <Link href="/blog/auta-poleasingowe-z-niemiec-czy-warto">auta poleasingowe</Link>
                            {" "}i <Link href="/blog/auta-flotowe-z-niemiec-jak-rozpoznac-dobry-egzemplarz">auta flotowe</Link> marek premium
                            (Audi, BMW, Mercedes, Volvo, Skoda, VW) z pełną historią serwisową w ASO. Coraz częściej sprowadzamy też
                            {" "}<Link href="/blog/czy-warto-sprowadzic-hybryde-z-niemiec">hybrydy</Link>, które mają o połowę niższą akcyzę.
                            Nie wiesz, jaki napęd wybrać? Zobacz porównanie <Link href="/blog/diesel-benzyna-czy-hybryda-z-niemiec">diesel, benzyna czy hybryda</Link>.
                        </p>

                        <h3>Sprowadzamy auta z Niemiec do całej Polski</h3>
                        <p>
                            Działamy jako Miami Autocenter GmbH z siedzibą w Osterholz-Scharmbeck pod Bremą, z polskojęzyczną obsługą.
                            Dostarczamy samochody do klientów z całej Polski — m.in. Warszawy, Krakowa, Wrocławia, Poznania, Gdańska,
                            Szczecina, Łodzi i Katowic. <Link href="/#zlecenie">Wyślij zapytanie</Link> — bezpłatnie ocenimy,
                            czy auto, którego szukasz, opłaca się sprowadzić z Niemiec.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
