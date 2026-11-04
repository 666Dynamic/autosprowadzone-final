# Audyt SEO — sprowadzoneauto.pl (2 listopada 2026)

## 1. Stan wyjściowy

### Widoczność w Google (sprawdzone ręcznie, google.pl, 2.11.2026)

| Fraza | Pozycja | Kto jest na górze |
|-------|---------|-------------------|
| sprowadzoneauto.pl / sprowadzone auto | **#1** | — |
| auta z niemiec aukcje b2b | **#2** | autobid.de |
| koszt sprowadzenia auta z niemiec 2026 | **#3** (/kalkulator) | autogood.pl, otomoto.pl |
| sprowadzanie aut z niemiec | poza TOP 10 | sprowadzamyauta.pl, wise.com, olx.pl |
| sprowadzanie aut z niemiec na zamówienie | poza TOP 10 | sprowadzamyauta.pl, facebook, autogood.pl |
| import aut z niemiec | poza TOP 10 | sprowadzamyauta.pl, importautszuba.pl, bossauto.pl |
| kalkulator akcyzy 2026 | poza TOP 10 | wyborkierowcow.pl, rankomat.pl, auto-akcyza.pl |
| akcyza 2026 stawki samochód | poza TOP 10 | rankomat.pl, podatki.gov.pl, mubi.pl |
| rejestracja auta z niemiec 2026 | poza TOP 10 | mubi.pl, rejestracjapojazdu.pl, rankomat.pl |

Strona jest zaindeksowana (`site:` pokazuje strony główne i artykuły). Problemem nie jest indeksowanie, tylko **trafność i siła stron na frazy ogólne**.

### Wydajność (PageSpeed Insights, mobile)

Performance 94, Accessibility 95, Best Practices 100, SEO 100. LCP 2,6 s, CLS 0, TBT 10 ms. Szybkość **nie jest** przyczyną słabych pozycji.

### Search Console

Konto zalogowane w Chrome (`autosprowadzone@gmail.com`) **nie ma dostępu** do usługi `sprowadzoneauto.pl` (ani domenowej, ani `https://www.`). Dane z GSC (zapytania, CTR, błędy indeksowania) nie były dostępne — patrz punkt 4.

## 2. Znalezione problemy i co poprawiono

| # | Problem | Waga | Poprawka |
|---|---------|------|----------|
| 1 | **Odpowiedzi FAQ nie było w HTML.** Akordeon Radix nie renderuje zamkniętej treści, więc Google widział same pytania (na stronie głównej i /faq). Dane FAQPage w JSON-LD nie zgadzały się z treścią widoczną dla robota. | wysoka | `components/faq-section.tsx` na natywnym `<details>` (komponent serwerowy); wspólne źródło pytań w `lib/faq.ts` dla HTML i JSON-LD; dodane pytania o koszt, akcyzę i aukcje dla osób prywatnych. |
| 2 | **Nagłówek H1 strony głównej bez frazy głównej** („Sprowadzamy Auta na Indywidualne Zamówienie”). | wysoka | H1: **„Sprowadzanie Aut z Niemiec na Zamówienie”**. |
| 3 | **Za mało treści na stronie głównej** dla frazy „sprowadzanie aut z Niemiec” (~1000 słów razem z menu i stopką, prawie bez tekstu merytorycznego). Lider (sprowadzamyauta.pl) ma ~1700 słów merytorycznych. | wysoka | Nowa sekcja `components/import-guide-section.tsx` (~900 słów): źródła aut, tabela kosztów, proces krok po kroku, samemu czy przez pośrednika, weryfikacja, akcyza i rejestracja, jakie auta się opłaca sprowadzić, obsługiwane miasta. Ponad 20 linków kontekstowych do artykułów z bloga. |
| 4 | **Błędy merytoryczne w artykule o akcyzie** (strona celująca w „akcyza 2026”): stawka PHEV „zależna od zasięgu”, nieistniejące zwolnienie aut starszych niż 10 lat, „decyzja urzędu” z kwotą, BEV zwolnione „do końca 2026”. W tematach finansowych (YMYL) Google mocno ocenia wiarygodność. | wysoka | Artykuł przepisany: aktualne stawki (3,1 / 18,6 / HEV 1,55 / 9,3 / PHEV ≤2.0 zwolnienie do 2029 / BEV 0%), poprawne przykłady, terminy AKC-U/S, mini-FAQ. `dateModified` dodane. |
| 5 | **„Kalkulator akcyzy” nie liczył akcyzy dla hybryd ani elektryków.** Konkurencja (auto-akcyza.pl, rankomat) ma to od dawna. | średnia | Wybór napędu (spalinowy / hybryda / plug-in / elektryk) w `components/calculator.tsx`, stawki w `lib/calculator-constants.ts`. |
| 6 | **/kalkulator: słaby H1 i mało tekstu** („Kalkulator Kosztów Importu”). | średnia | H1 „Kalkulator akcyzy 2026 i kosztów importu auta z Niemiec”, nowy tytuł i opis, sekcja „Akcyza 2026 — stawki i przykład” z tabelą, przykładem wyliczenia i terminami. Kafelki stawek poprawione (PHEV). |
| 7 | **Zdublowana marka w tytułach** (np. „… \| Blog SprowadzoneAuto.pl \| SprowadzoneAuto.pl”, tytuły do 127 znaków) na 20 artykułach, /blog i /o-nas. | średnia | Szablon tytułu dodaje markę tylko raz. |
| 8 | **Recenzje i AggregateRating 5.0 w schema na każdej podstronie** (samodzielnie wystawione opinie o własnej firmie). Google ich nie pokazuje i może to potraktować jako spam w danych strukturalnych. | średnia | Usunięte. Dane uporządkowane w jeden `@graph`: Organization + AutoDealer (z `@id`, NIP, adresem, godzinami), **WebSite** (nazwa witryny w wynikach), Service. |
| 9 | **Canonical i hreflang strony głównej dziedziczone przez wszystkie podstrony** z `layout.tsx` (ryzyko przy każdej nowej stronie bez własnego canonical). | średnia | Canonical przeniesiony do `app/page.tsx`; zbędny hreflang usunięty. |
| 10 | **Sitemap: `lastmod` = „teraz” przy każdym zapytaniu, ręczna lista slugów.** Google ignoruje lastmod, który zawsze się zmienia, a nowe artykuły trzeba było dopisywać ręcznie. | średnia | `app/sitemap.ts` buduje listę z `content/blog`, `lastmod` = data publikacji/aktualizacji artykułu; stałe daty dla stron statycznych. |
| 11 | **robots.txt blokował `/opengraph-image`** (Google nie mógł pobrać miniatury) oraz strony z `noindex` (robot nie widział `noindex`). | niska | Usunięte z `disallow`. |
| 12 | **Artykuły: jeden wspólny obrazek OG, w schema Article obrazek `icon.svg`** (SVG nie kwalifikuje się do wyników rozszerzonych). | niska | Obrazek OG generowany dla każdego artykułu z tytułem (`app/blog/[slug]/opengraph-image.tsx`, font z polskimi znakami). Schema `BlogPosting` z `dateModified`, autorem/wydawcą jako organizacją, breadcrumb od strony głównej. Usunięte `articleBody` (surowy MDX, niepotrzebnie ciężki). |
| 13 | **Logo w schema to SVG.** | niska | `public/logo.png` 512×512. |
| 14 | **Słabe linkowanie wewnętrzne do strony głównej**: żaden artykuł nie linkował do strony głównej frazą „sprowadzanie aut z Niemiec”; „powiązane” to po prostu 2 najnowsze wpisy; linki w stopce SEO o mylących anchorach (np. „Auta poleasingowe” → /aukcje). | średnia | Ramka „O autorze” pod każdym artykułem (E-E-A-T + linki do /, /aukcje, /kalkulator). Powiązane artykuły dobierane po wspólnych słowach kluczowych (3 zamiast 2). Anchory w stopce SEO kierują do pasujących artykułów; nagłówki `h4` w stopce zamienione na `p` (kolejność nagłówków). |
| 15 | **H1 na /aukcje („AUKCJE EUROPEJSKIE”), /weryfikacja („Weryfikacja Zanim Kupisz”), /blog („Blog Importeria”), brak H1 na /faq.** | niska | „Aukcje samochodowe B2B w Niemczech i Europie”, „Weryfikacja auta w Niemczech zanim kupisz”, „Blog o sprowadzaniu aut z Niemiec”, H1 na /faq. |
| 16 | Widoczne daty artykułów bez `<time>`. | niska | `<time datetime>` + data aktualizacji, jeśli jest. |

## 3. Wymaga działania poza kodem

1. **Search Console — dostęp.** Dodaj `autosprowadzone@gmail.com` jako użytkownika w obecnej usłudze albo zweryfikuj usługę domenową `sprowadzoneauto.pl` (rekord DNS TXT). Potem: wyślij `https://www.sprowadzoneauto.pl/sitemap.xml` i poproś o ponowne zaindeksowanie `/`, `/kalkulator`, `/faq`, `/blog/akcyza-2026-stawki`.
2. **Przekierowanie `sprowadzoneauto.pl` → `www` jest tymczasowe (307).** Google zaindeksował już jeden adres bez `www` (`sprowadzoneauto.pl/blog/jak-sprawdzic-auto-z-niemiec-przed-zakupem`). W Vercel → Settings → Domains ustaw dla domeny bez www przekierowanie **308 (permanent)**.
3. **Profil Firmy w Google (Google Business Profile).** W wynikach na zapytania o markę nie pojawił się panel firmy ani mapka — jeśli profilu nie ma, załóż go dla Miami Autocenter GmbH / SprowadzoneAuto.pl i zbieraj prawdziwe opinie od klientów. Dopiero prawdziwe opinie z zewnętrznej platformy mogą wrócić na stronę.
4. **Opinie na stronie.** Sekcja z opiniami (Marek K., Tomasz W., Anna S.) ma na sztywno wpisane daty typu „2 tygodnie temu”. Jeśli to nie są prawdziwe opinie, usuń je lub zastąp prawdziwymi (z imieniem, autem, datą, zdjęciem) — Google ocenia wiarygodność (E-E-A-T).
5. **Linki zewnętrzne (autorytet domeny).** To największa różnica względem liderów (sprowadzamyauta.pl, mkmobile.pl — starsze domeny z linkami). Plan:
   - wpisy w katalogach firm: Panorama Firm, pkt.pl, Aleo, Firmy.net, Oferteo (NAP identyczny jak na stronie);
   - profil Facebook — regularne posty z linkami do artykułów, realizacje (auto + koszt + oszczędność);
   - artykuły gościnne / wypowiedzi eksperckie na portalach motoryzacyjnych (np. jako źródło danych o aukcjach B2B);
   - grupy FB „Auta z Niemiec” — merytoryczne odpowiedzi z linkiem do konkretnego poradnika, nie spam.
6. **Realizacje (case studies).** Strona z prawdziwymi sprowadzonymi autami (zdjęcia z `public/audi/…`, cena aukcji vs portal, czas realizacji) — najlepszy sygnał doświadczenia i treść, której konkurencja nie skopiuje.

## 4. Treść — zrobione w etapie 2 (3.11.2026)

- **Rozbudowane artykuły** (wcześniej 350–410 słów, teraz ok. 900–1100 słów treści): auta flotowe, auto po szkodzie, import samemu czy przez pośrednika, jak czytać raport aukcyjny. Dodane: niemieckie oznaczenia (Unfallfrei, Vorschaden, Nachlackiert, Zustandsbericht), tabele, pomiar lakieru, checklisty, porównanie kosztów.
- **Nowe artykuły** pod frazy, na które strona nie miała treści:
  - `/blog/tablice-wywozowe-z-niemiec-ausfuhrkennzeichen` — tablice wywozowe, koszty, warunki, porównanie z lawetą,
  - `/blog/dokumenty-przy-zakupie-auta-w-niemczech` — Fahrzeugbrief/Teil II, Teil I, Kaufvertrag, checklista,
  - `/blog/transport-auta-z-niemiec-koszt` — ceny lawety, solo vs autotransporter, ubezpieczenie,
  - `/blog/jak-kupic-auto-na-mobile-de` — filtry, skróty, oszustwa, mobile.de vs aukcja B2B.
- Linki do nowych artykułów ze strony głównej, ze stopki i z powiązanych starszych artykułów („Zobacz też”).

**Do sprawdzenia przez właściciela:** widełki cen transportu dla poszczególnych tras w artykule o transporcie są szacunkowe (w granicach 1500–3500 zł, jak w kalkulatorze) — dopasuj je do swoich realnych stawek.

## 5. Rekomendacje na kolejne tygodnie (treść)

- Kolejne artykuły: „tłumaczenie dokumentów auta z Niemiec” (najpierw potwierdzić w wydziale komunikacji, które dokumenty wymagają tłumaczenia), „auto z Niemiec a ubezpieczenie OC”, „VAT przy zakupie auta w Niemczech (Differenzbesteuerung vs faktura VAT)”.
- Rozbudować pozostałe krótsze artykuły (ok. 500 słów): Openlane/Adesa, opłaty aukcyjne, diesel/benzyna/hybryda, hybrydy.
- Strony usług pod modele: „sprowadzenie Audi / BMW / Mercedesa z Niemiec” (realne przykłady z aukcji, ceny, typowe usterki) — tylko z unikalną treścią, bez kopiowania szablonu.
- Przy każdej zmianie przepisów (akcyza, rejestracja) aktualizować artykuł i `dateModified` we frontmatterze.

## 6. Jak mierzyć efekt

Po wdrożeniu i ponownym zaindeksowaniu (zwykle 2–6 tygodni) sprawdzić w GSC → Skuteczność: pozycje i CTR dla „sprowadzanie aut z niemiec”, „kalkulator akcyzy 2026”, „akcyza 2026”, „koszt sprowadzenia auta z niemiec”. Raport „Ulepszenia” → Dane strukturalne: brak błędów w Organization/BlogPosting/FAQPage.

Uczciwie: zmiany w kodzie usuwają to, co strona robiła źle, i dają Google powód, żeby traktować stronę główną jako odpowiedź na „sprowadzanie aut z Niemiec”. Na pierwsze miejsce przy ogólnych frazach, gdzie konkurują wise.com, otomoto.pl i olx.pl, potrzebny jest jeszcze autorytet z zewnątrz (punkt 3.5) i czas. Nikt nie zagwarantuje stałego #1 w Google.

## 7. Dane z Search Console (3.11.2026, konto `/u/1/`)

Okres 7.02–31.10.2026: **179 kliknięć, 14,8 tys. wyświetleń, CTR 1,2%, średnia pozycja 25,3**.

**Zapytania** — dwie wyraźne grupy:
- frazy „narzędziowe” są blisko top 10: `kalkulator sprowadzenia auta z niemiec` (275 wyśw., poz. 10,7), `aukcje b2b` (251, 9,1), `adesa` (483, 7,3), `caronsale polska` (83, 6,5), `openlane pl` (35, 5,2), `kalkulator akcyzy za samochód z niemiec` (31, 8,9);
- główne frazy usługowe są daleko: `sprowadzanie aut z niemiec` (211, poz. 49,9), `sprowadzanie aut` (335, 64), `auta sprowadzane z niemiec` (175, 42), `firmy sprowadzające auta z niemiec` (122, 46), `sprowadzanie samochodów na zamówienie` (222, 66,5). To właśnie te frazy ma podnieść nowa treść strony głównej.

**Indeksowanie:** tylko **13 stron w indeksie, 29 poza nim**:
- 18 × „Strona wykryta – obecnie niezindeksowana” — prawie cały blog (akcyza, poleasingowe, AUTO1, BCA, koszt, ile trwa…). Google zna adresy, ale ich nie pobrał.
- 6 × „Błąd przekierowania” — adresy bez www (`sprowadzoneauto.pl/faq`, `/aukcje`, `/blog`, `/o-nas`, dwa artykuły), zarejestrowane 30.08.2026. Dziś przekierowanie działa (307 → www), więc po zmianie na 308 wystarczy kliknąć „Sprawdź poprawkę”.
- Google wyświetla równolegle wersje z www i bez www (strona główna bez www: 6 995 wyświetleń, z www: 902). Kanoniczny adres strony głównej Google przyjął z www.

**Mapy witryn:** przesłane dwie (`www` i bez `www`), obie 31 adresów. Mapę bez www można usunąć — przekierowuje na www.

**Fragmenty opinii:** Google wykrywa 4 elementy „Review” na stronie głównej (stary schemat z ocenami). Po wdrożeniu znikną — to dobrze, bo oceny wystawione samemu sobie łamią wytyczne Google.

**Wykonane 3.11.2026:**
- Wdrożenie na produkcję (commity `341a478`, `c6a5a49`).
- Vercel: `sprowadzoneauto.pl` → `www` zmienione z **307 na 308** (sprawdzone curl-em).
- `autosprowadzone-final.vercel.app` (pełny duplikat strony z kodem 200) przekierowuje teraz 308 na www — w middleware (`VERCEL_ENV=production`).
- GSC: ponownie przesłana mapa `https://www.sprowadzoneauto.pl/sitemap.xml`, usunięta mapa bez www.
- GSC: „Poproś o zindeksowanie” dla 11 adresów: `/`, `/kalkulator`, `/blog/akcyza-2026-stawki`, `/blog/koszt-sprowadzenia-auta-z-niemiec-2026`, `/blog/transport-auta-z-niemiec-koszt`, `/blog/rejestracja-auta-z-niemiec-2026`, `/blog/auta-poleasingowe-z-niemiec-czy-warto`, `/blog/ile-trwa-sprowadzenie-auta-z-niemiec`, `/blog/dokumenty-przy-zakupie-auta-w-niemczech`, `/blog/tablice-wywozowe-z-niemiec-ausfuhrkennzeichen`, `/blog/jak-kupic-auto-na-mobile-de`. Potem Google zgłosił dzienny limit.
- Walidacja „Błąd przekierowania” i „Strona wykryta – niezindeksowana” była już w toku („Rozpoczęto”).
- Treść pod frazy z GSC: `/aukcje` z nowym tytułem (aukcje b2b, Adesa, CarOnSale), nowy tytuł artykułu o Adesa/Openlane, nowe artykuły: `/blog/caronsale-aukcje-b2b-jak-kupic-auto`, `/blog/sprowadzanie-aut-z-europy`, `/blog/firma-sprowadzajaca-auta-z-niemiec-jak-wybrac`.

**Wykonane 4.11.2026:**
- GSC: „Poproś o zindeksowanie” dla 10 adresów (wszystkie z potwierdzeniem „Przesłano prośbę o zindeksowanie”, bez limitu): `/blog/caronsale-aukcje-b2b-jak-kupic-auto`, `/blog/sprowadzanie-aut-z-europy`, `/blog/firma-sprowadzajaca-auta-z-niemiec-jak-wybrac`, `/aukcje`, `/faq`, `/blog/akcyza-za-samochod-online-puesc`, `/blog/aukcje-samochodowe-dla-osob-prywatnych`, `/blog/podatki-auto-z-niemiec-pcc-vat-clo`, `/blog/ubezpieczenie-oc-auto-z-niemiec`, `/kalkulator`. `/aukcje`, `/faq` i `/kalkulator` były już w indeksie; pozostałe 7 — „Adres URL nie jest Google znany”.
- GSC → Strony: **zindeksowano 13, nie zindeksowano 29** (wykryta – niezindeksowana 18, błąd przekierowania 6, przekierowanie 3, alternatywna z kanonicznym 1, zeskanowana – niezindeksowana 1).

**Do zgłoszenia w kolejnych dniach (limit ok. 10 dziennie):** `/blog/licytacje-komornicze-samochodow`, `/blog/autobid-de-aukcje-jak-kupic-auto`, `/blog/autorola-aukcje-b2b`, `/blog`, `/blog/auto1-jak-licytowac`, `/blog/bca-europe-przewodnik`, `/blog/czy-warto-sprowadzic-hybryde-z-niemiec`, `/blog/auto-z-niemiec-od-osoby-prywatnej-czy-z-aukcji`, `/blog/import-samemu-czy-przez-posrednika`, `/blog/oplaty-aukcyjne-wyjasnienie`, `/blog/jak-czytac-raport-szkod-i-raport-aukcyjny`, `/blog/auta-flotowe-z-niemiec-jak-rozpoznac-dobry-egzemplarz`, `/blog/diesel-benzyna-czy-hybryda-z-niemiec`.

**Co obserwować:** za 1–2 tygodnie w GSC → Strony liczba zindeksowanych powinna rosnąć z 13 w stronę 35+; w Skuteczności — pozycja fraz „sprowadzanie aut z niemiec”, „firmy sprowadzające auta z niemiec”, „import aut z europy”.

## 8. Etap 4 (3.11.2026) — analiza konkurencji i kolejne wdrożenia

**Dlaczego strona jest daleko na „sprowadzanie aut z niemiec”:**
- Domena zarejestrowana **4.02.2026** — ma 9 miesięcy. Top 10 to w większości starsze serwisy małych firm (sprowadzamyauta.pl, auta-z-niemiec.com, autazniemiec.com, bartek-auta.pl), plus OLX, otomoto, wise.com, grupa na Facebooku.
- **Na stronie wygrywamy:** strona główna ma ok. 2000 słów, 8 sekcji H2 i pełne dane strukturalne; bartek-auta.pl ma ok. 400 słów i brak H1, autazniemiec.com nie ma H2. Różnicę robią **wiek domeny, linki przychodzące i sygnały marki** — tego nie da się nadrobić w kodzie.

**Grupy zapytań z GSC (16 mies.):**

| Grupa | Zapytania | Wyświetlenia | Śr. pozycja |
|---|---|---|---|
| Frazy usługowe („sprowadzanie…”, „import…”) | 93 | 2 865 | 55 |
| Aukcje i platformy (b2b, Adesa, Openlane, CarOnSale, Autorola…) | 86 | 1 437 | **14,8** |
| Kalkulator | 106 | 1 205 | **18,1** |
| Europa / UE / zagranica | 26 | 917 | 69 |
| Koszty i opłaty | 68 | 307 | 25,6 |
| Firmy / pośrednicy | 12 | 238 | 46 |

Najbliżej top 10 są aukcje i kalkulator — tam skierowaliśmy pracę w tym etapie.

**Wdrożone:**
- Nowe artykuły: `/blog/autobid-de-aukcje-jak-kupic-auto`, `/blog/autorola-aukcje-b2b`; w artykule o Openlane sekcja o nazwach Adesa / CarsOnTheWeb / Openlane (CarsOnTheWeb kupione przez KAR w 2019 i przemianowane na ADESA Europe).
- `/aukcje`: karty platform linkują do poradników.
- `/kalkulator`: tytuł „Kalkulator Sprowadzenia Auta z Niemiec 2026 — Akcyza i Opłaty”, sekcja „Jak policzyć koszt — wzór” (wartości z `CALCULATOR_CONFIG`), 4 pytania FAQ, schema WebApplication + FAQPage. Test wyników rozszerzonych Google: 4 prawidłowe elementy.
- **IndexNow**: plik klucza w `public/`, skrypt `npm run indexnow` — wysłano 40 adresów (Bing, Yandex, Seznam, Naver), odpowiedź 202. Uruchamiać po każdym wdrożeniu z nowymi stronami.

## 9. Czego nie da się zrobić w kodzie — a co najbardziej podniesie pozycje

Kolejność według wpływu:

1. **Profil firmy w Google (Google Business Profile)** — wpis z kategorią „Pośrednik w sprzedaży samochodów”, adresem, telefonem, godzinami i linkiem do strony. Zdjęcia aut przekazanych klientom. Poproś każdego klienta o opinię w Google — to najsilniejszy sygnał zaufania dla firmy usługowej.
2. **Katalogi firm (cytowania NAP)** — identyczna nazwa, adres i telefon wszędzie: panoramafirm.pl, pkt.pl, aleo.com, firmy.net, cylex-polska.pl, zumi / oferteo.pl, Gelbe Seiten (DE). Każdy wpis = link i potwierdzenie danych firmy.
3. **Bing Webmaster Tools** — zaloguj się na bing.com/webmasters kontem Google i wybierz „Importuj z Google Search Console” (2 kliknięcia). IndexNow już działa, to doda raporty.
4. **Linki z treścią** — artykuły gościnne lub wywiady na portalach motoryzacyjnych (autokult, moto.pl, autoświat — sekcje poradnikowe), lokalne media, fora (forum.autoswiat, motocaina), grupy na Facebooku o imporcie aut — wartościowe odpowiedzi z linkiem do poradnika, nie spam.
5. **Prawdziwe realizacje i opinie** — podstrona „Realizacje” z autami sprowadzonymi dla klientów (model, rocznik, cena aukcji vs cena w Polsce, zdjęcia przy odbiorze). To też dobry materiał do social media.
6. **YouTube / Facebook** — krótkie filmy „ile kosztowało sprowadzenie X”, linkujące do kalkulatora i artykułów. Wyniki z wideo i grup FB już są w top 10 na główną frazę.

## 10. Etap 5 (3.11.2026) — jakość treści i aktualność danych

- **Nieaktualne ceny badania technicznego** — od 19.09.2025 (Dz.U. 2025 poz. 1223) badanie osobówki kosztuje **149 zł** (było 98 zł), dopłata LPG **96 zł** (było 63 zł), po wypadku **143 zł** (było 94 zł). Poprawione w kalkulatorze (`CALCULATOR_CONFIG`) i we wszystkich artykułach.
- **Rejestracja auta z Niemiec** — przepisana na instrukcję krok po kroku: terminy (14 dni akcyza, 30 dni rejestracja), komplet dokumentów, obowiązkowe badanie przed pierwszą rejestracją (wcześniej artykuł mylnie sugerował, że „może być potrzebne”), koszty, checklista.
- **Opłaty aukcyjne** — przepisane; usunięte sprzeczności z resztą strony (stawki BCA, transport 600–800 € vs 1500–3500 zł, zbędne „świadectwo pochodzenia” przy zakupie w UE). Przykład wyliczenia spójny z kalkulatorem, dodany VAT (procedura marży vs faktura z VAT) i postój.
- **Diesel / benzyna / hybryda** — tabela akcyzy dla każdego napędu na przykładzie auta za 20 000 €, ryzyka techniczne napędów, uwaga o miękkich hybrydach.
- **Hybrydy** — tabela stawek HEV / PHEV / MHEV i lista popularnych modeli z ich stawką akcyzy.
- **BreadcrumbList** na `/faq`, `/o-nas`, `/blog` (pozostałe podstrony już miały).
- **PageSpeed (mobile):** Performance 96, Accessibility 95, Best Practices 100, SEO 100; LCP 2,6 s, CLS 0 — wydajność nie jest problemem.
- IndexNow wysłany ponownie po wdrożeniu (40 adresów).

## 11. Etap 6 (3.11.2026) — narzędzia agencyjne: Keyword Planner, audyt on-page, podpowiedzi Google

**Google Ads Keyword Planner (Polska, język polski, paź 2025 – wrz 2026), średnio miesięcznie:**

| Fraza | Wyszukania | Konkurencja Ads | Nasza strona docelowa |
|---|---|---|---|
| mobile de | 100 tys. – 1 mln | niska | `/blog/jak-kupic-auto-na-mobile-de` (nawigacyjna — mała szansa) |
| auto1 | 10 – 100 tys. | niska | `/blog/auto1-jak-licytowac` |
| **akcyza za samochód** (+ „z niemiec”, „online”, „urząd skarbowy”) | **1 – 10 tys. każda** | niska | **nowy:** `/blog/akcyza-za-samochod-online-puesc` |
| sprowadzanie aut z niemiec | 1 – 10 tys. | średnia | `/` |
| auta z niemiec / samochody z niemiec | 1 – 10 tys. | średnia | `/` |
| aukcje samochodowe | 1 – 10 tys. | duża | `/aukcje` |
| autobid / autorola / openlane / caronsale | 1 – 10 tys. każda | niska–średnia | poradniki platform |
| licytacje komornicze samochodów | 1 – 10 tys. | — | wzmianka w `/blog/aukcje-samochodowe-dla-osob-prywatnych` |
| kalkulator akcyzy (za samochód) | 100 – 1 tys. | niska | `/kalkulator` (tytuł zmieniony pod tę frazę) |
| puesc akcyza, potwierdzenie zapłaty akcyzy, korekta akcyzy, opłata akcyzy przez internet | 100 – 1 tys. każda | niska | `/blog/akcyza-za-samochod-online-puesc` |
| aukcje samochodowe niemcy, bca aukcje, licytacje samochodowe, import aut z niemiec, rejestracja auta z niemiec, ile kosztuje sprowadzenie auta z niemiec, firma sprowadzająca auta | 100 – 1 tys. | różna | istniejące strony |
| aukcje dla osób prywatnych, poleasingowe, z europy, z belgii/holandii, miasta (warszawa, kraków) | 10 – 100 | duża | nisza — zrobione artykuły, bez stron „miejskich” |

**Wniosek:** największy niewykorzystany wolumen był w klastrze **„akcyza za samochód”** — kilkanaście wariantów po 1–10 tys. wyszukań, niska konkurencja. Mieliśmy tylko artykuł „akcyza na auto z Niemiec”. Frazy miejskie mają po 10–100 wyszukań — nie opłaca się tworzyć osobnych podstron (ryzyko doorway pages).

**Audyt on-page w stylu Yoast** (skrypt sprawdzający wszystkie URL-e z sitemapy: długość title/description, liczba H1, alt obrazków, liczba słów, canonical, robots):
- 30 z 32 artykułów miało **title 75–116 znaków** i **description 175–240 znaków** — Google je ucinał. Dodano pola `seoTitle` i `metaDescription` we frontmatterze MDX (H1 i lead zostają pełne), wszystkie tytuły ≤ 45 znaków + „| SprowadzoneAuto.pl”, opisy 120–160 znaków.
- Skrócono też title/description strony głównej, `/kalkulator`, `/aukcje`, `/weryfikacja`, `/blog`, `/faq`, `/kontakt`, `/o-nas`.
- Wszystkie strony: 1 × H1, obrazki z alt, poprawny canonical; `/test-logos` i `/w-budowie` mają `noindex` (OK). Krótkie zostały tylko strony prawne (bez znaczenia dla SEO).

**Nowe treści w tym etapie:** `/blog/akcyza-za-samochod-online-puesc`, `/blog/podatki-auto-z-niemiec-pcc-vat-clo`, `/blog/ubezpieczenie-oc-auto-z-niemiec`, `/blog/aukcje-samochodowe-dla-osob-prywatnych`, sekcja „PUESC krok po kroku” w artykule o akcyzie; linki ze stopki, kalkulatora, `/aukcje` i powiązanych wpisów.

**Narzędzia sprawdzone i wyniki:** Google Search Console (zapytania, linki: 0 zewnętrznych linków), Ahrefs (DR 0, ok. 1,1 tys. spamowych linków automatycznych — Google je ignoruje, disavow niepotrzebny), PageSpeed Insights (OK), Rich Results Test (OK), podpowiedzi Google (luki tematyczne), Google Ads Keyword Planner (wolumeny powyżej). Wolumeny w Keyword Plannerze są w przedziałach, bo konto nie ma aktywnej kampanii — dokładne liczby pokażą się po uruchomieniu nawet małej kampanii.

