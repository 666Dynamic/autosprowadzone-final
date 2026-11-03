import { FaqSection } from "@/components/faq-section"
import { breadcrumbJsonLd } from "@/lib/breadcrumbs"
import { faqJsonLd } from "@/lib/faq"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "FAQ — Sprowadzanie Aut z Niemiec: Koszty, Akcyza, Transport",
    description: "Odpowiedzi na pytania o sprowadzanie aut z Niemiec: ile kosztuje import, akcyza 2026, czas transportu, aukcje B2B dla osób prywatnych, rejestracja, gwarancja i depozyt.",
    alternates: {
        canonical: "https://www.sprowadzoneauto.pl/faq",
    },
    openGraph: {
        title: "FAQ — Sprowadzanie Aut z Niemiec",
        description: "Odpowiedzi na pytania o import aut z Niemiec: koszty, akcyza, transport, rejestracja.",
        url: "https://www.sprowadzoneauto.pl/faq",
        images: ["https://www.sprowadzoneauto.pl/opengraph-image"],
    },
}

export default function FaqPage() {
    return (
        <div className="pt-0 pb-12 md:pt-0 md:pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("FAQ", "/faq")) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
            />
            <FaqSection asPageHeading />
        </div>
    )
}
