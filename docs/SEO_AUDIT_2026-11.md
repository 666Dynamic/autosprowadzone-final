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

**Kolejność działań po wdrożeniu:**
1. Vercel → Domains → `sprowadzoneauto.pl` → przekierowanie na www jako **308**.
2. GSC → „Sprawdzenie adresu URL” → „Poproś o zindeksowanie” dla: `/`, `/kalkulator`, `/aukcje`, `/faq`, `/blog/akcyza-2026-stawki`, `/blog/koszt-sprowadzenia-auta-z-niemiec-2026`, nowych artykułów (limit ok. 10 dziennie).
3. GSC → Strony → „Błąd przekierowania” → „Sprawdź poprawkę”.
4. GSC → Mapy witryn → ponownie przesłać `https://www.sprowadzoneauto.pl/sitemap.xml`.
