import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SeoFooter } from "@/components/seo-footer";
import { CookieBanner } from "@/components/cookie-banner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sprowadzoneauto.pl'),
  title: {
    default: "Auta z Niemiec - Aukcje B2B, Import, Weryfikacja | SprowadzoneAuto.pl",
    template: "%s | SprowadzoneAuto.pl",
  },
  description: "Sprowadzamy auta z Niemiec z aukcji B2B i od dealerów. Niemiecka spółka, pewna historia, transport door-to-door. Sprawdź naszą ofertę weryfikacji i importu!",
  keywords: [
    "sprowadzanie aut z niemiec", "auta z niemiec aukcje", "licytacje samochodowe niemcy", "auto import niemcy", "sprowadzanie aut na zamówienie",
    "aukcje b2b auta", "weryfikacja aut niemcy", "inspekcja auta niemcy", "auta poleasingowe niemcy", "import aut z niemiec procedura",
    "kalkulator akcyzy 2026", "bca auctions niemcy", "auto1 opinie", "transport aut z niemiec", "rejestracja auta z niemiec koszt",
    "licytacje komornicze niemcy", "aukcje samochodowe online", "bezpieczny import aut", "sprowadzanie aut z niemiec olx", "auta uszkodzone niemcy",
    "import aut z zagranicy", "firma sprowadzająca auta", "opłaty celne auto z niemiec", "samochody z niemiec na zamówienie"
  ],
  authors: [{ name: "SprowadzoneAuto.pl" }],
  creator: "SprowadzoneAuto.pl",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://sprowadzoneauto.pl",
    title: "Auta z Niemiec - Aukcje B2B, Import, Weryfikacja | SprowadzoneAuto.pl",
    description: "Bezpieczny import aut z Niemiec. Dostęp do aukcji B2B (BCA, Auto1). Weryfikacja techniczna na miejscu.",
    siteName: "SprowadzoneAuto.pl",
    images: [
      {
        url: "https://sprowadzoneauto.pl/og-image.png",
        width: 1200,
        height: 630,
        alt: "SprowadzoneAuto.pl - Import aut z Niemiec, aukcje B2B, weryfikacja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auta z Niemiec - Aukcje B2B, Import, Weryfikacja | SprowadzoneAuto.pl",
    description: "Bezpieczny import aut z Niemiec. Dostęp do aukcji B2B (BCA, Auto1). Weryfikacja techniczna na miejscu.",
    images: ["https://sprowadzoneauto.pl/og-image.png"],
  },
  alternates: {
    canonical: "https://sprowadzoneauto.pl",
    languages: {
      'pl': "https://sprowadzoneauto.pl",
      'x-default': "https://sprowadzoneauto.pl",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SprowadzoneAuto.pl",
  "url": "https://sprowadzoneauto.pl",
  "logo": "https://sprowadzoneauto.pl/icon.svg",
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
    "https://www.facebook.com/sprowadzoneauto/"
  ]
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "SprowadzoneAuto.pl (Miami Autocenter GmbH)",
  "image": "https://sprowadzoneauto.pl/og-image.png",
  "url": "https://sprowadzoneauto.pl",
  "telephone": "+49 156 79264391",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bremer Heerstraße 7A",
    "addressLocality": "Osterholz-Scharmbeck",
    "postalCode": "27711",
    "addressCountry": "DE"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "07:00",
    "closes": "22:00"
  },
  "areaServed": ["PL", "DE"],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Marek K." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Cały proces importu przebiegł wzorowo. Auto sprawdzone na miejscu w Bremie, raport był bardzo szczegółowy."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Tomasz W." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Dzięki dostępowi do aukcji BCA udało się kupić 3-letnie Audi A4 w cenie, o której w Polsce można tylko pomarzyć."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Anna S." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Bardzo profesjonalne podejście. Auto pod domem po 5 dniach."
    }
  ]
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Import aut z Niemiec i aukcje B2B",
  "provider": {
    "@type": "Organization",
    "name": "SprowadzoneAuto.pl"
  },
  "areaServed": ["PL"],
  "serviceType": "Sprowadzanie samochodów z Niemiec, weryfikacja pojazdu, logistyka",
  "offers": {
    "@type": "Offer",
    "price": "2500",
    "priceCurrency": "PLN",
    "url": "https://sprowadzoneauto.pl/kontakt",
    "availability": "https://schema.org/InStock"
  }
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-192.svg" />
        <link rel="manifest" href="/manifest.json" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VPZB549MMW" />
        <Script id="gtag-init" strategy="afterInteractive">
          {"window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-VPZB549MMW');"}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
            <SeoFooter />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
