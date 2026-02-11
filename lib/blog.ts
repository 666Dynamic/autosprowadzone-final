export interface Post {
    title: string;
    excerpt: string;
    date: string;
    dateISO: string;
    slug: string;
    content?: string;
}

export const posts: Post[] = [
    {
        title: "BCA Europe – Największy wybór aut w UE",
        excerpt: "Ponad 1.3 mln pojazdów rocznie. Dowiedz się, dlaczego system EuroShop to rewolucja w zakupach B2B.",
        date: "11.01.2026",
        dateISO: "2026-01-11",
        slug: "bca-europe-przewodnik",
        content: `
            <p>BCA Europe to niekwestionowany lider na rynku aukcji samochodów używanych w Europie. Obsługując ponad <strong>1.3 miliona pojazdów rocznie</strong>, platforma ta stała się kluczowym punktem dla profesjonalnych dealerów, importerów oraz klientów indywidualnych korzystających z pośrednictwa.</p>
            
            <h3>Czym jest BCA Europe?</h3>
            <p>BCA (British Car Auctions) działa od 1946 roku i jest największą firmą aukcyjną w Europie specjalizującą się w pojazdach używanych. W przeciwieństwie do publicznych portali ogłoszeniowych jak mobile.de czy Otomoto, <strong>BCA prowadzi aukcje B2B</strong> – dostęp mają tylko weryfikowani handlarze i licencjonowani pośrednicy.</p>
            
            <p>To właśnie tu trafiają pojazdy z:</p>
            <ul>
                <li><strong>Kontraktów leasingowych</strong> – samochody z pełną historią serwisową ASO, po 2-3 latach użytkowania</li>
                <li><strong>Flot firmowych</strong> – Mercedes, BMW, Audi z firm logistycznych i korporacji</li>
                <li><strong>Wypożyczalni</strong> – młode auta (6-18 miesięcy) z dużym przebiegiem ale znaną historią</li>
                <li><strong>Banków i towarzystw leasingowych</strong> – pojazdy po wygaśnięciu umowy, często z opcją wykupu niewykorzystaną przez najemcę</li>
            </ul>

            <h3>Dlaczego BCA to najlepszy wybór dla importera?</h3>
            
            <h4>1. Ogromna skala i wybór</h4>
            <p>BCA prowadzi aukcje w <strong>14 krajach Europy</strong> jednocześnie. Dzięki systemowi <strong>EuroShop</strong> możesz przeglądać oferty z Niemiec, Holandii, Belgii, Francji czy Wielkiej Brytanii w jednym miejscu. Nie musisz logować się do lokalnych platform – wszystko w jednym panelu.</p>
            
            <p><strong>Przykładowa dostępność w styczniu 2026:</strong></p>
            <ul>
                <li>Niemcy: ~25,000 aut tygodniowo</li>
                <li>Holandia: ~8,000 aut tygodniowo</li>
                <li>Belgia: ~4,500 aut tygodniowo</li>
                <li>UK: ~15,000 aut tygodniowo (uwaga na Brexit – dodatkowe formalności)</li>
            </ul>

            <h4>2. Transparentność i raporty techniczne</h4>
            <p>Każdy pojazd na BCA posiada:</p>
            <ul>
                <li><strong>Zustandsbericht</strong> (raport stanu technicznego) – sporządzany przez niezależnych rzeczoznawców DEKRA, TÜV lub DAT</li>
                <li><strong>Galeria zdjęć</strong> – minimum 30 zdjęć wysokiej rozdzielczości (karoseria, wnętrze, silnik, podwozie)</li>
                <li><strong>Historia serwisowa</strong> – wypis z systemu producenta (np. Audi Historie, BMW Service History)</li>
                <li><strong>Raport Carfax/Carvertical</strong> – dla aut z zagranicy potwierdzenie braku kolizji</li>
            </ul>

            <h4>3. Ceny hurtowe bez marży dealera</h4>
            <p>To tutaj największa oszczędność. Dealer kupujący na BCA płaci cenę hurtową + <strong>Buyer Fee (ok. 3.5%)</strong>. Kiedy sprzedaje auto na mobile.de, dolicza swoją marżę <strong>2,000-5,000 EUR</strong> plus koszty salonu, reklamy, prowizji dla sprzedawcy.</p>
            
            <p><strong>Przykład rzeczywisty – Audi Q5 45 TFSI (2022, 45,000 km):</strong></p>
            <ul>
                <li>Cena BCA: 36,500 EUR</li>
                <li>Buyer Fee (3.5%): 1,278 EUR</li>
                <li>Razem: 37,778 EUR</li>
                <li>Cena mobile.de (dealer): 42,900 EUR</li>
                <li><strong>Oszczędność: 5,122 EUR (~22,000 PLN)</strong></li>
            </ul>

            <h3>Jak wygląda proces licytacji na BCA?</h3>
            
            <h4>Krok 1: Wyszukiwanie i filtrowanie</h4>
            <p>System EuroShop pozwala filtrować po marce, modelu, roku, przebiegu, typie paliwa, kraju pochodzenia, dacie aukcji. Możesz ustawić <strong>powiadomienia push</strong> – np. "powiadom mnie gdy pojawi się BMW 530d xDrive, 2020-2023, przebieg do 100k km".</p>

            <h4>Krok 2: Analiza raportu i zdjęć</h4>
            <p>To kluczowy moment. Sprawdź:</p>
            <ul>
                <li>Czy w raporcie są informacje o "Nachlackiert" (przemalowane elementy) – to nie musi być wada, ale warto wiedzieć</li>
                <li>Stan opon – czy będą wymagały wymiany od razu?</li>
                <li>Wnętrze – stan tapicerki, ślady palenia tytoniu</li>
                <li>Serwis – czy ostatnia inspekcja była niedawno?</li>
            </ul>

            <h4>Krok 3: Licytacja</h4>
            <p>Aukcje na BCA to tzw. <strong>"timed auctions"</strong> – każda ma czas zakończenia, ale jeśli w ostatnich 2 minutach ktoś przebije, licznik się resetuje (jak na Allegro). Licytacja trwa, dopóki nikt nie przebije przez 2 minuty.</p>
            
            <p><strong>Cena wywoławcza vs Reserve Price:</strong> Niektóre auta mają "reserve" (cenę minimalną ukrytą). Jeśli licytacja nie osiągnie reserve, sprzedający może odmówić sprzedaży. Wtedy auto wraca na następną aukcję lub możesz negocjować "after auction".</p>

            <h4>Krok 4: Opłacenie i odbiór</h4>
            <p>Wygrałeś licytację? Masz <strong>24-48h na wpłatę</strong> pełnej kwoty (cena + Buyer Fee). BCA akceptuje przelewy SEPA. Auto możesz odebrać osobiście lub zamówić transport przez ich partnera (ok. 500-800 EUR do Polski, zależnie od lokalizacji).</p>

            <h3>Jakie są opłaty na BCA?</h3>
            <table>
                <thead>
                    <tr>
                        <th>Pozycja</th>
                        <th>Koszt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Buyer Fee (prowizja aukcyjna)</td>
                        <td>3.5% ceny zakupu (min. 200 EUR)</td>
                    </tr>
                    <tr>
                        <td>Export Fee (dokumenty wywozowe)</td>
                        <td>120-180 EUR</td>
                    </tr>
                    <tr>
                        <td>Transport (Niemcy → Polska)</td>
                        <td>500-800 EUR (zależnie od trasy)</td>
                    </tr>
                    <tr>
                        <td>Prowizja pośrednictwa (nasza)</td>
                        <td>2,500 PLN brutto</td>
                    </tr>
                </tbody>
            </table>

            <h3>Czy są jakieś ryzyka?</h3>
            <p><strong>Tak, jak przy każdym zakupie zdalnym:</strong></p>
            <ul>
                <li><strong>Ukryte wady mechaniczne</strong> – raport pokazuje stan wizualny, ale nie testuje silnika pod obciążeniem. Dlatego polecamy auta z gwarancją resztkową producenta lub młode (do 3 lat).</li>
                <li><strong>Niższa cena = większe ryzyko</strong> – jeśli auto jest 30% taniej niż rynek, prawdopodobnie ma poważniejszy defekt. "Grade 4" na BCA to auto powypadkowe.</li>
                <li><strong>Reserve Price nieujawnione</strong> – możesz stracić czas licytując na auto, które i tak nie zostanie sprzedane.</li>
            </ul>

            <p><strong>Jak minimalizujemy ryzyko dla naszych klientów?</strong></p>
            <ul>
                <li>Licytujemy tylko auta <strong>Grade 1-2</strong> (najwyższa kategoria stanu)</li>
                <li>Każde auto analizujemy z raportem DEKRA/TÜV przed licytacją</li>
                <li>Odrzucamy ok. 30% ofert na wstępnym etapie (czerwone flagi: brak serwisu, nieujawnione przemalowania, etc.)</li>
                <li>Opcjonalnie: inspekcja fizyczna na miejscu przed licytacją (250 EUR)</li>
            </ul>

            <h3>BCA vs AUTO1 vs Manheim – co wybrać?</h3>
            <p>Każda platforma ma swoją specyfikę:</p>
            <ul>
                <li><strong>BCA</strong> – najszerszy wybór aut premium (Audi, BMW, Mercedes) z leasingu długoterminowego. Najlepsze raporty techniczne.</li>
                <li><strong>AUTO1</strong> – więcej ofert tanich aut miejskich (VW Golf, Opel Astra) i młodszych roczników. Aukcje szybkie (24h), duża rotacja.</li>
                <li><strong>Manheim</strong> – dużo aut z USA, specjalizacja w pickupach i SUV-ach. Mniej popularne w Europie.</li>
            </ul>

            <p><strong>Dla większości klientów BCA to najbezpieczniejszy wybór</strong> – stabilne aukcje, wiarygodne raporty, sprawdzona logistyka.</p>

            <h3>Podsumowanie: Czy warto?</h3>
            <p>BCA Europe to <strong>najlepsza platforma B2B dla importu aut premium z pewną historią</strong>. Jeśli szukasz Audi, BMW, Mercedesa lub Volvo po leasingu firmowym – nie ma lepszej opcji. Oszczędzasz 20-30% w porównaniu do portali ogłoszeniowych, przy zachowaniu wysokiego standardu jakości.</p>

            <p><strong>Nie możesz sam licytować?</strong> Skontaktuj się z nami – znajdziemy dla Ciebie idealne auto na BCA, przejdziemy proces licytacji i dostarczymy pod dom. <a href="/kontakt">Bezpłatna konsultacja →</a></p>
        `
    },
    {
        title: "AUTO1.com – Cyfrowe aukcje bez tajemnic",
        excerpt: "Jak licytować wśród 30 000 nowych ofert dziennie? Sprawdzamy model biznesowy największego gracza online.",
        date: "10.01.2026",
        dateISO: "2026-01-10",
        slug: "auto1-jak-licytowac",
        content: `
            <p>AUTO1.com zrewolucjonizowało sposób, w jaki handlarze kupują i sprzedają samochody w Europie. Jako <strong>największa platforma B2B w Europie</strong>, oferuje dostęp do ponad <strong>30,000 nowych ofert dziennie</strong> z 30 krajów. To cyfrowy marketplace, który eliminuje pośredników i łączy sprzedających bezpośrednio z kupującymi.</p>
            
            <h3>Czym AUTO1 różni się od BCA czy tradycyjnych aukcji?</h3>
            
            <h4>1. Model biznesowy "Buy Now" + aukcje czasowe</h4>
            <p>AUTO1 łączy dwa sposoby zakupu:</p>
            <ul>
                <li><strong>"Buy Now"</strong> – ustalona cena, kup natychmiast bez licytacji (jak Allegro "Kup Teraz")</li>
                <li><strong>"Auction"</strong> – klasyczna licytacja z czasem zakończenia, ale <strong>trwa tylko 24-48h</strong> (BCA często ma aukcje tygodniowe)</li>
            </ul>
            <p>Przewaga? <strong>Szybkość</strong>. Na AUTO1 auto może być kupione i odebrane w ciągu 3 dni roboczych. BCA wymaga zazwyczaj 7-10 dni.</p>

            <h4>2. Własna sieć logistyczna</h4>
            <p>AUTO1 Group posiada <strong>Autohero</strong> (sieć showroomów) oraz własne centra logistyczne w 11 krajach. Oznacza to:</p>
            <ul>
                <li>Przewidywalne koszty transportu (fixed-price shipping)</li>
                <li>Szybsze dostawy (3-5 dni zamiast 10-14 dni)</li>
                <li>Ubezpieczenie w cenie – auto dociera pod wskazany adres "door-to-door"</li>
            </ul>

            <p><strong>Ważne:</strong> AUTO1 pobiera <a href="https://content.auto1.com/static/car_images/price_list_de_2026-01-01.pdf" target="_blank" rel="noopener">opłatę administracyjną (Buyer Fee)</a> która wynosi od 249 EUR do 399 EUR w zależności od wartości auta. Nie jest to dużo w porównaniu do BCA (3.5%), ale należy to uwzględnić w kalkulacji.</p>

            <h4>3. Aplikacja mobilna – licytuj z każdego miejsca</h4>
            <p>AUTO1 ma <strong>dedykowaną aplikację na iOS i Android</strong>. Możesz:</p>
            <ul>
                <li>Przeglądać oferty i licytować z telefonu (push notifications gdy ktoś przebije twoją ofertę)</li>
                <li>Skanować VIN i od razu zobaczyć historię auta + wycenę rynkową</li>
                <li>Zapisywać wyszukiwania – np. "BMW 320d xDrive, 2019-2022, do 80k km, automatic" i dostawać powiadomienia</li>
            </ul>

            <h3>Jak wygląda zakup na AUTO1?</h3>

            <h4>Krok 1: Rejestracja i weryfikacja</h4>
            <p>AUTO1 wymaga <strong>licencji dealera</strong> lub współpracy z licencjonowanym pośrednikiem (jak my). Rejestracja indywidualna jest niemożliwa – to platforma stricte B2B. Weryfikacja trwa 1-2 dni robocze (przesyłasz skan NIPu, zaświadczenie o działalności gospodarczej).</p>

            <h4>Krok 2: Wyszukiwanie – filtry zaawansowane</h4>
            <p>AUTO1 ma <strong>najlepszy system filtrowania</strong> w branży:</p>
            <ul>
                <li>Kraj pochodzenia (Niemcy, Holandia, Francja, Włochy, etc.)</li>
                <li>Stan techniczny ("Grade A/B/C" – A to idealne, C to powypadkowe)</li>
                <li>Typ sprzedającego: dealer, osoba prywatna, leasing, flota</li>
                <li>Wyposażenie: "tylko quattro", "tylko skóra", "tylko panorama"</li>
                <li>Lokalizacja centrum AUTO1 (ważne dla kosztów transportu)</li>
            </ul>

            <h4>Krok 3: Analiza oferty – co sprawdzić?</h4>
            <p>Każde auto na AUTO1 ma:</p>
            <ul>
                <li><strong>Vehicle Report</strong> – raport 150-punktowy (stan mechaniczny, elektryka, karoseria, wnętrze)</li>
                <li><strong>Video walkthrough</strong> – krótki film (2-3 min) obchodzący auto dookoła, odpala silnik, pokazuje wnętrze</li>
                <li><strong>Price Indicator</strong> – algorytm pokazuje czy cena jest "good deal", "fair" czy "overpriced" w porównaniu do rynku</li>
            </ul>

            <p><strong>Red flags na które zwracamy uwagę:</strong></p>
            <ul>
                <li>"Grade C" lub "Damage: Severe" – to auta powypadkowe, unikaj jeśli nie jesteś mechanikiem</li>
                <li>Brak service history – AUTO1 często wystawia auta od osób prywatnych bez dokumentacji</li>
                <li>"Export restrictions" – niektóre auta mają ograniczenia wywozowe (np. UK po Brexicie)</li>
            </ul>

            <h4>Krok 4: Licytacja lub "Buy Now"</h4>
            <p><strong>Buy Now (60% ofert):</strong> Widzisz cenę, klikasz "Buy", płacisz w 24h. Proste.</p>
            
            <p><strong>Auction (40% ofert):</strong></p>
            <ul>
                <li>Aukcja trwa <strong>24-48h</strong></li>
                <li>Cena wywoławcza (starting bid) zazwyczaj 80-85% wartości rynkowej</li>
                <li>Minimalne przebicie: 50 EUR</li>
                <li><strong>"Auto-bid" (proxy bidding)</strong> – ustawiasz max kwotę, system licytuje za Ciebie automatycznie do tego limitu</li>
            </ul>

            <p><strong>Wskazówka od profesjonalistów:</strong> Ustawiaj auto-bid w dziwnych kwotach (np. 23,147 EUR zamiast 23,000 EUR). Przebijasz konkurencję minimalnie i często wygrywasz o 50-100 EUR różnicy.</p>

            <h4>Krok 5: Płatność i transport</h4>
            <p>AUTO1 wymaga płatności w ciągu <strong>24 godzin od wygrania aukcji</strong>. Akceptują:</p>
            <ul>
                <li>Przelew SEPA (najpopularniejsze, 0% prowizji)</li>
                <li>Karta kredytowa (prowizja 1.5%)</li>
                <li>Finansowanie AUTO1 Finance (leasing dla dealerów)</li>
            </ul>

            <p><strong>Transport:</strong></p>
            <ul>
                <li>Self-pickup: Odbierasz osobiście z centrum AUTO1 (gratis)</li>
                <li>Delivery: AUTO1 dostarcza pod wskazany adres (500-900 EUR do Polski, w zależności od lokalizacji)</li>
                <li>Express (3 dni): +200 EUR do standardowego transportu</li>
            </ul>

            <h3>Jakie są rzeczywiste koszty na AUTO1?</h3>
            
            <p><strong>Przykład: Audi A4 S-Line 2.0 TDI Quattro (2020, 125,000 km, Niemcy):</strong></p>
            <table>
                <thead>
                    <tr>
                        <th>Pozycja</th>
                        <th>Koszt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cena zakupu (auction win)</td>
                        <td>19,800 EUR</td>
                    </tr>
                    <tr>
                        <td>Buyer Fee AUTO1 (<a href="https://content.auto1.com/static/car_images/price_list_de_2026-01-01.pdf" target="_blank" rel="noopener">cennik 2026</a>)</td>
                        <td>249 EUR</td>
                    </tr>
                    <tr>
                        <td>Transport (Hamburg → Warszawa)</td>
                        <td>600 EUR</td>
                    </tr>
                    <tr>
                        <td>Export documents</td>
                        <td>120 EUR</td>
                    </tr>
                    <tr>
                        <td><strong>SUMA (EUR)</strong></td>
                        <td><strong>20,769 EUR (~89,300 PLN)</strong></td>
                    </tr>
                    <tr>
                        <td>Akcyza (silnik 2.0L = 3.1%)</td>
                        <td>2,768 PLN</td>
                    </tr>
                    <tr>
                        <td>Rejestracja + tłumaczenia</td>
                        <td>1,200 PLN</td>
                    </tr>
                    <tr>
                        <td>Prowizja pośrednictwa (nasza)</td>
                        <td>2,500 PLN</td>
                    </tr>
                    <tr>
                        <td><strong>CAŁKOWITY KOSZT (PLN)</strong></td>
                        <td><strong>95,768 PLN</strong></td>
                    </tr>
                    <tr>
                        <td>Cena Otomoto (dealer PL)</td>
                        <td>125,000 PLN</td>
                    </tr>
                    <tr>
                        <td><strong>OSZCZĘDNOŚĆ</strong></td>
                        <td><strong>29,232 PLN (23%)</strong></td>
                    </tr>
                </tbody>
            </table>

            <h3>AUTO1 vs BCA – która platforma dla Ciebie?</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Kryterium</th>
                        <th>AUTO1</th>
                        <th>BCA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Liczba ofert dziennie</td>
                        <td>30,000+</td>
                        <td>15,000+</td>
                    </tr>
                    <tr>
                        <td>Czas aukcji</td>
                        <td>24-48h</td>
                        <td>3-7 dni</td>
                    </tr>
                    <tr>
                        <td>Buyer Fee</td>
                        <td>249-399 EUR (degresywnie)</td>
                        <td>3.5% (~1,000-2,000 EUR)</td>
                    </tr>
                    <tr>
                        <td>Typ aut</td>
                        <td>Szerokie spektrum (dużo tanich)</td>
                        <td>Premium leasing (Audi, BMW, Mercedes)</td>
                    </tr>
                    <tr>
                        <td>Transport</td>
                        <td>Własna sieć, szybko</td>
                        <td>Zewnętrzni przewoźnicy</td>
                    </tr>
                    <tr>
                        <td>App mobilna</td>
                        <td>Tak ✅</td>
                        <td>Tylko web</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Rekomendacja:</strong></p>Audi/Skoda w niższych cenach</li>
                <li>Wybierz BCA jeśli: szukasz premium (Audi/BMW/Mercedes) po leasingu z pełnym serwisem ASO, masz więcej czasu, cenisz szczegółowe raporty DEKRA</li>
            </ul>

            <p><strong>Uwaga:</strong> Opłaty AUTO1 zmieniają się - zawsze sprawdź aktualny <a href="https://content.auto1.com/static/car_images/price_list_de_2026-01-01.pdf" target="_blank" rel="noopener">cennik opłat</a> przed licytacją.</p<li>Wybierz AUTO1 jeśli: szukasz młodszego auta (2020+), potrzebujesz szybko (do tygodnia), interesują Cię VW/Opel/Seat/Skoda</li>
                <li>Wybierz BCA jeśli: szukasz premium (Audi/BMW/Mercedes) po leasingu z pełnym serwisem ASO, masz więcej czasu, cenisz szczegółowe raporty DEKRA</li>
            </ul>

            <h3>Najczęstsze pytania o AUTO1</h3>

            <h4>Czy mogę sam licytować na AUTO1?</h4>
            <p><strong>Nie.</strong> AUTO1 wymaga licencji dealera (NIP firmowy + KRS lub CEIDG). Dla osób prywatnych jedyna opcja to pośrednik (jak SprowadzoneAuto.pl). Nasza prowizja: <strong>2,500 PLN</strong> – zajmujemy się licytacją, transportem, dokumentami i dostawą pod dom.</p>

            <h4>Czy auta z AUTO1 są pewne?</h4>
            <p>To zależy od <strong>Grade</strong>:</p>
            <ul>
                <li><strong>Grade A:</strong> Stan idealny, pełna historia serwisowa – <strong>polecamy</strong></li>
                <li><strong>Grade B:</strong> Drobne ślady użytkowania, wszystko działa – OK dla oszczędnych</li>
                <li><strong>Grade C:</strong> Uszkodzenia, brak dokumentacji – <strong>tylko dla mechaników</strong></li>
            </ul>

            <p>My licytujemy <strong>wyłącznie Grade A i B z pełną historią serwisową</strong>.</p>

            <h4>Czy AUTO1 daje gwarancję?</h4>
            <p>AUTO1 oferuje <strong>opcjonalną gwarancję 12 miesięcy</strong> (koszt: ~500-800 EUR). Pokrywa układ napędowy, elektronikę, klimatyzację. Ale uwaga: gwarancja działa tylko w krajach UE gdzie AUTO1 ma serwis – w Polsce ograniczone możliwości.</p>

            <p><strong>Lepsze rozwiązanie:</strong> Kupuj młode auto (do 3 lat) z resztkową gwarancją producenta. Wtedy masz serwis ASO w Polsce bez problemu.</p>

            <h3>Podsumowanie: Czy AUTO1 to dobry wybór w 2026?</h3>
            <p><strong>Tak, jeśli cenisz szybkość i wygodę.</strong> AUTO1 to najszybszy sposób na import auta z Niemiec – od licytacji do dostawy mija 5-7 dni. Brak Buyer Fee to oszczędność 1,000-2,000 EUR w porównaniu do BCA. Aplikacja mobilna daje elastyczność.</p>

            <p><strong>Minusy:</strong> Mniej aut premium niż na BCA, krótkie aukcje (24h) wymagają szybkich decyzji, quality control słabszy niż u BCA (zdarzają się "Grade A" które są realnie "Grade B").</p>

            <p><strong>Dla kogo najlepsze?</strong> Klienci szukający VW, Skoda, Seat, Opel w rocznikach 2019-2023, którzy chcą auto "na wczoraj" i nie mają czasu na 2-tygodniowy proces BCA.</p>

            <p><strong>Chcesz kupić na AUTO1?</strong> Napisz do nas – przeszukamy platformę pod kątem Twoich wymagań, wylicytujemy i dostarczymy auto w 7 dni. <a href="/kontakt">Kontakt →</a></p>
        `
    },
    {
        title: "Opłaty Aukcyjne (Aufgeld) – Ile naprawdę płacisz?",
        excerpt: " Szczegółowe zestawienie kosztów dodatkowych: prowizje B2B, opłaty eksportowe i przygotowanie dokumentów.",
        date: "08.01.2026",
        dateISO: "2026-01-08",
        slug: "oplaty-aukcyjne-wyjasnienie",
        content: `
            <p>Zrozumienie struktury opłat na aukcjach zagranicznych jest kluczowe dla prawidłowego wyliczenia opłacalności zakupu. Cena, którą widzisz na ekranie, to tylko początek.</p>
            <h3>Na co idą Twoje pieniądze?</h3>
            <ul>
                <li><strong>Buyer Fee (Aufgeld):</strong> Prowizja domu aukcyjnego, zazwyczaj zależna od ceny pojazdu.</li>
                <li><strong>Export Fee:</strong> Opłata za przygotowanie dokumentów do wywozu z kraju zakupu.</li>
                <li><strong>Transport:</strong> Koszt fizycznego sprowadzenia auta pod Twój dom lub do naszego biura.</li>
            </ul>
        `
    },
    {
        title: "Zustandsbericht – Czy można wierzyć raportom?",
        excerpt: "Analiza standardów rzeczoznawców DEKRA i TÜV SÜD. Na co zwrócić uwagę w opisie uszkodzeń (Delle/Kratzer).",
        date: "05.01.2026",
        dateISO: "2026-01-05",
        slug: "raporty-rzeczoznawcow-standardy",
        content: `
            <p>Raport stanu technicznego (Zustandsbericht) to Biblia dla kupującego online. Standardy rzeczoznawców takich jak DEKRA czy TÜV SÜD są bardzo wysokie, ale trzeba umieć je czytać.</p>
            <h3>Słowniczek rzeczoznawcy:</h3>
            <ul>
                <li><strong>Delle:</strong> Małe wgniecenie, zazwyczaj bez uszkodzenia lakieru.</li>
                <li><strong>Kratzer:</strong> Zarysowanie – ważne czy głębokie, czy tylko powierzchowne.</li>
                <li><strong>Nachlackiert:</strong> Element był powtórnie lakierowany.</li>
            </ul>
        `
    },
    {
        title: "Akcyza 2026 - co się zmieniło?",
        excerpt: "Analiza aktualnych stawek akcyzowych dla silników powyżej 2.0L oraz aut hybrydowych.",
        date: "03.01.2026",
        dateISO: "2026-01-03",
        slug: "akcyza-2026-stawki",
        content: `
            <p>Akcyza to <strong>największy ukryty koszt przy imporcie auta z zagranicy</strong>. Dla silnika powyżej 2.0L może wynieść nawet 20,000-30,000 PLN. W 2026 roku stawki pozostają bez zmian, ale pojawiły się <strong>nowe interpretacje ulg dla hybryd plug-in</strong> oraz <strong>podwyższony próg dla aut starszych</strong>. Sprawdź, ile faktycznie zapłacisz.</p>
            
            <h3>Podstawowe stawki akcyzy w 2026 roku</h3>
            
            <p>Akcyza jest <strong>podatkiem od wartości samochodu</strong> i zależy od pojemności silnika:</p>
            <table>
                <thead>
                    <tr>
                        <th>Pojemność silnika</th>
                        <th>Stawka akcyzy</th>
                        <th>Przykład (auto 100k PLN)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Do 2000 cm³</td>
                        <td><strong>3.1%</strong></td>
                        <td>3,100 PLN</td>
                    </tr>
                    <tr>
                        <td>Powyżej 2000 cm³</td>
                        <td><strong>18.6%</strong></td>
                        <td>18,600 PLN ⚠️</td>
                    </tr>
                    <tr>
                        <td>Elektryczne (BEV)</td>
                        <td><strong>0%</strong> (zwolnione)</td>
                        <td>0 PLN ✅</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Kluczowa informacja:</strong> Akcyza liczona jest od <strong>podstawy opodatkowania</strong>, którą stanowi:</p>
            <ul>
                <li>Cena zakupu pojazdu (z faktury)</li>
                <li>+ Koszty transportu</li>
                <li>+ Opłaty aukcyjne (Buyer Fee, Export Fee)</li>
                <li>+ Ubezpieczenie transportu</li>
            </ul>

            <h3>Jak obliczyć akcyzę krok po kroku?</h3>

            <p><strong>Przykład 1: BMW 530d xDrive (silnik 2993 cm³, 2021):</strong></p>
            <table>
                <tbody>
                    <tr>
                        <td>Cena zakupu na aukcji BCA</td>
                        <td>42,000 EUR</td>
                    </tr>
                    <tr>
                        <td>Buyer Fee (3.5%)</td>
                        <td>1,470 EUR</td>
                    </tr>
                    <tr>
                        <td>Transport + ubezpieczenie</td>
                        <td>750 EUR</td>
                    </tr>
                    <tr>
                        <td><strong>Podstawa opodatkowania (suma EUR)</strong></td>
                        <td><strong>44,220 EUR</strong></td>
                    </tr>
                    <tr>
                        <td>Przelicznik (kurs NBP w dniu rejestracji)</td>
                        <td>1 EUR = 4.30 PLN</td>
                    </tr>
                    <tr>
                        <td><strong>Podstawa opodatkowania (PLN)</strong></td>
                        <td><strong>190,146 PLN</strong></td>
                    </tr>
                    <tr>
                        <td>Stawka akcyzy (silnik > 2.0L)</td>
                        <td>18.6%</td>
                    </tr>
                    <tr>
                        <td><strong>AKCYZA DO ZAPŁATY</strong></td>
                        <td><strong>35,367 PLN</strong></td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Przykład 2: Audi A4 40 TDI (silnik 1968 cm³, 2022):</strong></p>
            <table>
                <tbody>
                    <tr>
                        <td>Podstawa opodatkowania (PLN)</td>
                        <td>145,000 PLN</td>
                    </tr>
                    <tr>
                        <td>Stawka akcyzy (silnik ≤ 2.0L)</td>
                        <td>3.1%</td>
                    </tr>
                    <tr>
                        <td><strong>AKCYZA DO ZAPŁATY</strong></td>
                        <td><strong>4,495 PLN ✅</strong></td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Różnica: 30,872 PLN!</strong> Dlatego silniki 2.0L i mniej są absolutnym hitem przy imporcie.</p>

            <h3>Hybrydy Plug-in – ile płacisz akcyzy?</h3>

            <p>Od 2022 roku hybrydy plug-in (PHEV) mają <strong>ulgę w akcyzie</strong>, ale nie są całkowicie zwolnione. Stawka zależy od <strong>zasięgu elektrycznego</strong>:</p>

            <table>
                <thead>
                    <tr>
                        <th>Zasięg elektryczny (WLTP)</th>
                        <th>Stawka akcyzy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Poniżej 50 km</td>
                        <td>18.6% (standardowa, brak ulgi)</td>
                    </tr>
                    <tr>
                        <td>50-100 km</td>
                        <td>9.3% (ulga 50%)</td>
                    </tr>
                    <tr>
                        <td>Powyżej 100 km</td>
                        <td>3.1% (jak silnik ≤2.0L)</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Przykład: BMW 330e (2021, silnik 2.0L + elektryczny, zasięg 60 km):</strong></p>
            <ul>
                <li>Podstawa opodatkowania: 160,000 PLN</li>
                <li>Stawka: 9.3% (ulga 50%)</li>
                <li><strong>Akcyza: 14,880 PLN</strong> (zamiast 29,760 PLN bez ulgi)</li>
                <li><strong>Oszczędność: 14,880 PLN</strong></li>
            </ul>

            <p><strong>Uwaga:</strong> Ulga dotyczy <strong>tylko pierwszej rejestracji w Polsce</strong>. Jeśli auto było już zarejestrowane w PL i chcesz je ponownie zarejestrować (np. po wyprowadzeniu), ulga nie obowiązuje.</p>

            <h3>Auta elektryczne (BEV) – 0% akcyzy</h3>

            <p>Samochody <strong>w pełni elektryczne (BEV)</strong> są <strong>całkowicie zwolnione z akcyzy</strong> do końca 2026 roku. To ogromna oszczędność:</p>

            <p><strong>Przykład: Tesla Model 3 Long Range (2023):</strong></p>
            <ul>
                <li>Cena zakupu z Niemiec: 38,000 EUR (~163,000 PLN)</li>
                <li>Akcyza: <strong>0 PLN</strong></li>
                <li>Gdyby to był diesel 2.0L+: 30,318 PLN akcyzy</li>
            </ul>

            <p><strong>Boom na elektryki w 2025-2026:</strong> Dzięki zwolnieniu z akcyzy, import Tesli, VW ID.4, Audi e-tron stał się mega opłacalny. Oszczędzasz nie tylko na paliwie, ale przede wszystkim na akcyzie przy rejestracji.</p>

            <h3>Zwolnienia i ulgi – kiedy nie płacisz akcyzy?</h3>

            <h4>1. Auto starsze niż 10 lat</h4>
            <p>Jeśli auto ma więcej niż 10 lat (licząc od roku produkcji do roku rejestracji), <strong>nie płacisz akcyzy wcale</strong>.</p>
            <ul>
                <li>Przykład: BMW X5 3.0d (2015) rejestrowane w 2026 = 11 lat → <strong>0 PLN akcyzy</strong></li>
            </ul>

            <h4>2. Auto dla osoby niepełnosprawnej</h4>
            <p>Pojazdy nabywane przez osoby z orzeczeniem o niepełnosprawności (I lub II grupa) są <strong>zwolnione z akcyzy</strong> do wartości 115,000 PLN (limit ulgi).</p>

            <h4>3. Samochody zabytkowe (oldtimery)</h4>
            <p>Auto starsze niż 25 lat z <strong>"żółtymi tablicami"</strong> (kartą pojazdu zabytkowego) – zwolnione z akcyzy.</p>

            <h3>Kiedy płacisz akcyzę? Terminy i formalności</h3>

            <p>Akcyzę należy zapłacić <strong>przed rejestracją pojazdu</strong> w Wydziale Komunikacji. Proces wygląda tak:</p>

            <ol>
                <li><strong>Zgłoszenie AKC-U/S</strong> – składasz w Urzędzie Celno-Skarbowym w ciągu 14 dni od sprowadzenia auta do Polski</li>
                <li><strong>Wycena podstawy opodatkowania</strong> – dołączasz faktury (zakup, transport, opłaty aukcyjne)</li>
                <li><strong>Otrzymujesz decyzję</strong> – Urząd wylicza kwotę akcyzy (zazwyczaj 7-14 dni)</li>
                <li><strong>Wpłacasz akcyzę</strong> – przelew na konto US (14 dni od otrzymania decyzji)</li>
                <li><strong>Otrzymujesz zaświadczenie AKC-U/E</strong> – dokument potwierdzający zapłatę</li>
                <li><strong>Rejestrujesz auto</strong> – w Wydziale Komunikacji (potrzebny AKC-U/E)</li>
            </ol>

            <p><strong>Uwaga:</strong> Nie możesz jeździć autem przed zapłatą akcyzy i rejestracją (nawet na niemieckich tablicach). Grozi mandat + cofnięcie ulg.</p>

            <h3>Jak legalnie obniżyć akcyzę?</h3>

            <h4>Strategia 1: Wybieraj silniki ≤ 2.0L</h4>
            <p>Najprostsza metoda – różnica w akcyzie między 2.0L a 3.0L to często <strong>20,000-30,000 PLN</strong>. Auta 2.0L mają identyczną moc jak większe (dzięki turbo):</p>
            <ul>
                <li><strong>Audi A6 45 TDI</strong> (2.0L, 231 KM) zamiast 50 TDI (3.0L, 286 KM) – oszczędzasz ~25k PLN akcyzy</li>
                <li><strong>BMW 520d</strong> (2.0L, 190 KM) zamiast 530d (3.0L, 286 KM) – oszczędzasz ~22k PLN akcyzy</li>
            </ul>

            <h4>Strategia 2: Hybryd Plug-in z zasięgiem >50 km</h4>
            <p>Jeśli potrzebujesz mocy (np. BMW X5), wybierz wersję PHEV:</p>
            <ul>
                <li><strong>BMW X5 xDrive45e</strong> (3.0L + elektryczny, 60 km zasięgu) → akcyza 9.3% zamiast 18.6%</li>
                <li>Oszczędność: ~15,000-20,000 PLN na aucie wartym 180k PLN</li>
            </ul>

            <h4>Strategia 3: Elektryki do końca 2026</h4>
            <p>Jeśli masz ładowarkę w domu/pracy, BEV to <strong>najlepsza inwestycja w 2026</strong>:</p>
            <ul>
                <li>0 PLN akcyzy</li>
                <li>0 PLN opłaty eksploatacyjnej (w PL brak podatku drogowego dla EV)</li>
                <li>Niskie koszty serwisu (brak oleju, sprzęgła, rozrządu)</li>
            </ul>

            <h4>Strategia 4: Auta 10+ lat</h4>
            <p>Młodszy użytkownik szukający taniego auta premium? BMW 5 (2014-2015) nie ma akcyzy i kosztuje 40-50k PLN. Akcyza zaoszczędzona: ~8,000 PLN.</p>

            <h3>Błędy które kosztują – czego unikać?</h3>

            <h4>Błąd 1: Zaniżanie wartości na fakturze</h4>
            <p><strong>Nie rób tego.</strong> Urząd Celno-Skarbowy ma dostęp do baz wartości rynkowych (Eurotax, DAT). Jeśli faktura jest podejrzanie niska, mogą:</p>
            <ul>
                <li>Zażądać wyceny rzeczoznawcy (koszt 500-1000 PLN)</li>
                <li>Naliczyć akcyzę od wartości rynkowej zamiast faktury</li>
                <li>Nałożyć karę 100% akcyzy (nawet 50,000 PLN dodatkowej kary!)</li>
            </ul>

            <h4>Błąd 2: Nie dołączanie kosztów transportu</h4>
            <p>Transport i opłaty aukcyjne <strong>muszą być wliczone</strong> do podstawy opodatkowania. Jeśli ich nie dołączysz, US i tak je policzy na podstawie rynkowych stawek przewozu.</p>

            <h4>Błąd 3: Rejestracja przed zapłatą akcyzy</h4>
            <p>Niektórzy próbują "przeskoczyć" akcyzę i od razu zarejestrować auto. Skutek:</p>
            <ul>
                <li>Odmowa rejestracji</li>
                <li>Naliczenie odsetek za zwłokę (od dnia sprowadzenia auta)</li>
                <li>Stracony termin na ulgi (np. dla PHEV)</li>
            </ul>

            <h3>Narzędzie: Kalkulator Akcyzy 2026</h3>

            <p>Chcesz dokładnie policzyć ile zapłacisz? Użyj naszego <strong>kalkulatora akcyzy</strong>:</p>
            <ul>
                <li>Wpisujesz cenę auta, pojemność silnika, koszty transportu</li>
                <li>Kalkulator uwzględnia kurs EUR/PLN z NBP</li>
                <li>Pokazuje całkowity koszt rejestracji (akcyza + tłumaczenia + tablice)</li>
            </ul>

            <p><a href="/kalkulator">Przejdź do kalkulatora →</a></p>

            <h3>Zmiany w akcyzie – co dalej po 2026?</h3>

            <p>Ministerstwo Finansów zapowiedziało <strong>reformę akcyzy w 2027</strong>:</p>
            <ul>
                <li><strong>Elektryki:</strong> Zwolnienie zostanie skrócone do aut do 150k PLN (drogie Tesle i Porsche będą opodatkowane)</li>
                <li><strong>Hybrydy:</strong> Ulga tylko dla PHEV z zasięgiem >80 km (eliminacja starszych modeli)</li>
                <li><strong>Diesel:</strong> Rozważane podwyższenie stawki z 18.6% do 22% dla silników >2.5L (walka z emisją CO₂)</li>
            </ul>

            <p><strong>Wniosek: 2026 to ostatni dobry rok</strong> na import drogiej Tesli czy BMW iX bez akcyzy. Od 2027 koszty mogą wzrosnąć o 20-30k PLN.</p>

            <h3>Podsumowanie: Ile faktycznie zapłacisz?</h3>

            <table>
                <thead>
                    <tr>
                        <th>Typ auta</th>
                        <th>Przykład</th>
                        <th>Wartość auta</th>
                        <th>Akcyza</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Silnik ≤2.0L</td>
                        <td>Audi A4 40 TDI</td>
                        <td>140,000 PLN</td>
                        <td>4,340 PLN ✅</td>
                    </tr>
                    <tr>
                        <td>Silnik >2.0L</td>
                        <td>BMW 530d</td>
                        <td>180,000 PLN</td>
                        <td>33,480 PLN ⚠️</td>
                    </tr>
                    <tr>
                        <td>PHEV (50-100km)</td>
                        <td>BMW X5 xDrive45e</td>
                        <td>200,000 PLN</td>
                        <td>18,600 PLN</td>
                    </tr>
                    <tr>
                        <td>Elektryczne (BEV)</td>
                        <td>Tesla Model Y</td>
                        <td>170,000 PLN</td>
                        <td>0 PLN ✅✅</td>
                    </tr>
                    <tr>
                        <td>Auto >10 lat</td>
                        <td>BMW X5 (2014)</td>
                        <td>55,000 PLN</td>
                        <td>0 PLN ✅</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Najważniejsze wnioski:</strong></p>
            <ul>
                <li>Silniki ≤2.0L to <strong>wielokrotnie niższa akcyza</strong> (3.1% vs 18.6%)</li>
                <li>Hybrydy PHEV z dobrym zasięgiem = ulga 50%</li>
                <li>Elektryki = 0 PLN akcyzy (do końca 2026)</li>
                <li>Auta >10 lat = 0 PLN akcyzy (bez zmian)</li>
                <li><strong>Zaniżanie wartości = gigantyczne kary</strong>, nie ryzykuj</li>
            </ul>

            <p><strong>Potrzebujesz pomocy z akcyzą?</strong> Przygotowujemy komplet dokumentów, rozliczamy z Urzędem Celno-Skarbowym i doprowadzamy auto do rejestracji. <a href="/kontakt">Skontaktuj się →</a></p>
        `
    }
];
