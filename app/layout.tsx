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
  alternates: {
    canonical: "https://autosprowadzone.pl",
    languages: {
      'pl': "https://autosprowadzone.pl",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "autosprowadzone.pl",
  "url": "https://autosprowadzone.pl",
  "logo": "https://autosprowadzone.pl/logo.svg",
  "description": "Profesjonalny import samochodów z Niemiec oraz weryfikacja stanu technicznego pojazdów na terenie Niemiec.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DE",
    "addressLocality": "Osterholz-Scharmbeck",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+49 156 79264391",
      "contactType": "customer service",
      "areaServed": ["PL", "DE"],
      "availableLanguage": ["Polish", "German"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+48 780 010 848",
      "contactType": "customer service",
      "areaServed": "PL",
      "availableLanguage": "Polish"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/autosprowadzone/"
  ]
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
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
          <div className="flex min-h-screen flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1 overflow-x-hidden pt-16">{children}</main>
            <CookieBanner />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
