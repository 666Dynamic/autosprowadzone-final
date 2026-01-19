import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://autosprowadzone.pl'),
  title: {
    default: "Auta z Niemiec - Aukcje B2B, Import, Weryfikacja | autosprowadzone.pl",
    template: "%s | autosprowadzone.pl",
  },
  description: "Sprowadzamy auta z Niemiec z aukcji B2B i od dealerów. Niemiecka spółka, pewna historia, transport door-to-door. Sprawdź naszą ofertę weryfikacji i importu!",
  keywords: [
    "sprowadzanie aut z niemiec", "auta z niemiec aukcje", "licytacje samochodowe niemcy", "auto import niemcy", "sprowadzanie aut na zamówienie",
    "aukcje b2b auta", "weryfikacja aut niemcy", "inspekcja auta niemcy", "auta poleasingowe niemcy", "import aut z niemiec procedura",
    "kalkulator akcyzy 2026", "bca auctions niemcy", "auto1 opinie", "transport aut z niemiec", "rejestracja auta z niemiec koszt",
    "licytacje komornicze niemcy", "aukcje samochodowe online", "bezpieczny import aut", "sprowadzanie aut z niemiec olx", "auta uszkodzone niemcy",
    "import aut z zagranicy", "firma sprowadzająca auta", "opłaty celne auto z niemiec", "samochody z niemiec na zamówienie"
  ],
  authors: [{ name: "autosprowadzone.pl" }],
  creator: "autosprowadzone.pl",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://autosprowadzone.pl",
    title: "Auta z Niemiec - Aukcje B2B, Import, Weryfikacja | autosprowadzone.pl",
    description: "Bezpieczny import aut z Niemiec. Dostęp do aukcji B2B (BCA, Auto1). Weryfikacja techniczna na miejscu.",
    siteName: "autosprowadzone.pl",
  },

};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "autosprowadzone.pl",
  "url": "https://autosprowadzone.pl",
  "logo": "https://autosprowadzone.pl/logo.png", // Placeholder
  "description": "Profesjonalny import samochodów z Niemiec oraz weryfikacja stanu technicznego pojazdów na terenie Niemiec.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DE",
    // Placeholder details, can be updated by user later or if I find them in other files
    "addressLocality": "Bremen",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+48 000 000 000", // Placeholder
    "contactType": "customer service",
    "areaServed": ["PL", "DE"],
    "availableLanguage": ["Polish", "German"]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#f59e0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <CookieBanner />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
