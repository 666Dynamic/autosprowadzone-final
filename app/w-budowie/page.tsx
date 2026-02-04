import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Strona w budowie | SprowadzoneAuto.pl",
    robots: { index: false, follow: false },
}

export default function UnderConstruction() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
            <div className="mb-8 p-6 bg-primary/10 rounded-full animate-pulse">
                <Clock className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Strona w budowie</h1>
            <p className="text-muted-foreground text-lg max-w-md mb-8">
                Pracujemy nad tą sekcją, aby dostarczyć Ci najwyższej jakości treści. Wróć do nas wkrótce!
            </p>
            <Link href="/">
                <Button size="lg" className="rounded-full font-bold">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Powrót na Stronę Główną
                </Button>
            </Link>
        </div>
    )
}
