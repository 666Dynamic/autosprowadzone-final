import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regulamin Świadczenia Usług",
  description: "Warunki świadczenia usług pośrednictwa w zakupie samochodów, weryfikacji pojazdu i organizacji transportu przez SprowadzoneAuto.pl (Miami Autocenter GmbH).",
  alternates: {
    canonical: "https://sprowadzoneauto.pl/regulamin",
  },
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24 max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-10">
        Regulamin <span className="text-primary not-italic">Świadczenia Usług</span>
      </h1>

      <p className="text-sm text-muted-foreground font-medium mb-8">
        Obowiązuje od: 20.01.2026 — Podmiot: Miami Autocenter GmbH, Osterholz‑Scharmbeck (DE), USt‑IdNr. DE361829942.
      </p>

      <section className="prose dark:prose-invert max-w-none text-muted-foreground">
        <h2>1. Zakres usług</h2>
        <p>
          Świadczymy usługi pośrednictwa w zakupie pojazdów na aukcjach B2B i u dealerów, weryfikacji pojazdów na terenie Niemiec oraz organizacji transportu i dokumentów eksportowych.
        </p>

        <h2>2. Charakter usługi</h2>
        <p>
          Działamy jako pośrednik/agencja na rzecz Klienta. Nie jesteśmy sprzedawcą końcowym pojazdu. Sprzedawcą jest dom aukcyjny lub dealer, od którego Klient nabywa pojazd bezpośrednio.
        </p>

        <h2>3. Wynagrodzenie</h2>
        <p>
          Prowizja pośrednictwa wynosi 2500 zł (PLN) brutto. Prowizja jest należna wyłącznie w przypadku skutecznego zakupu pojazdu.
        </p>

        <h2>4. Depozyt i rozliczenia</h2>
        <p>
          Przed licytacją Klient wpłaca depozyt zabezpieczający. Depozyt jest w 100% zwrotny, jeśli nie dojdzie do zakupu. W przypadku wygranej aukcji depozyt zaliczany jest na poczet wynagrodzenia.
        </p>

        <h2>5. Odpowiedzialność i raporty</h2>
        <p>
          Weryfikacja opiera się na raportach rzeczoznawców (np. DEKRA/TÜV/SGS) oraz dostępnej dokumentacji. Dokładamy należytej staranności, jednak nie odpowiadamy za wady ukryte powstałe po oględzinach ani za informacje zewnętrznych dostawców danych.
        </p>

        <h2>6. Rezygnacja po wygranej aukcji</h2>
        <p>
          Wygrana aukcja jest wiążąca w świetle regulaminów domów aukcyjnych. Rezygnacja może skutkować karami umownymi naliczanymi przez wystawcę (zwykle ok. 10% wartości pojazdu). Klient ponosi te koszty.
        </p>

        <h2>7. Terminy</h2>
        <p>
          Standardowy termin logistyki wynosi 3–7 dni roboczych od księgowania środków u sprzedawcy. Terminy mogą ulec zmianie z przyczyn niezależnych (np. dokumenty wyrejestrowania, warunki pogodowe).
        </p>

        <h2>8. Reklamacje</h2>
        <p>
          W przypadku rozbieżności stanu pojazdu z opisem aukcyjnym pomagamy w zgłoszeniu reklamacji zgodnie z procedurą domu aukcyjnego. Decyzję podejmuje instytucja prowadząca sprzedaż.
        </p>

        <h2>9. Prawo właściwe i sąd</h2>
        <p>
          Do Regulaminu stosuje się prawo niemieckie. Właściwy jest sąd według siedziby Miami Autocenter GmbH, o ile bezwzględnie obowiązujące przepisy nie stanowią inaczej.
        </p>

        <h2>10. Kontakt</h2>
        <p>
          Kontakt: kontakt@sprowadzoneauto.pl | +49 156 79264391 | +48 780 010 848
        </p>
      </section>
    </div>
  )
}
