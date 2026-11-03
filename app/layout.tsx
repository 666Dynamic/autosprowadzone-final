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
  metadataBase: new URL('https://www.sprowadzoneauto.pl'),
  title: {
    default: "Sprowadzanie Aut z Niemiec na Zamówienie – Aukcje B2B",
    template: "%s | SprowadzoneAuto.pl",
  },
  description: "Sprowadzamy auta z Niemiec na zamówienie z aukcji B2B (BCA, AUTO1). Polska obsługa, stała prowizja 2500 zł, weryfikacja i transport pod dom.",
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
    url: "https://www.sprowadzoneauto.pl",
    title: "Sprowadzanie Aut z Niemiec na Zamówienie — Aukcje B2B | SprowadzoneAuto.pl",
    description: "Sprowadzamy auta z Niemiec z aukcji B2B (BCA, AUTO1). Dostęp do zamkniętych platform. Polska obsługa, stała prowizja 2500 zł. Weryfikacja i transport.",
    siteName: "SprowadzoneAuto.pl",
    images: [{
      url: 'https://www.sprowadzoneauto.pl/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'SprowadzoneAuto.pl - Import Aut z Niemiec, Aukcje B2B',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprowadzanie Aut z Niemiec na Zamówienie — Aukcje B2B | SprowadzoneAuto.pl",
    description: "Sprowadzamy auta z Niemiec z aukcji B2B (BCA, AUTO1). Dostęp do zamkniętych platform. Polska obsługa, stała prowizja 2500 zł.",
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

const siteUrl = "https://www.sprowadzoneauto.pl"

// Jeden graf encji: organizacja (AutoDealer), serwis WWW i usługa.
// Bez AggregateRating/Review — Google nie pokazuje (i może karać) opinii wystawionych sobie samemu.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "AutoDealer"],
      "@id": `${siteUrl}/#organization`,
      "name": "SprowadzoneAuto.pl",
      "legalName": "Miami Autocenter GmbH",
      "alternateName": ["Sprowadzone Auto", "SprowadzoneAuto"],
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`,
        "width": 512,
        "height": 512
      },
      "image": `${siteUrl}/opengraph-image`,
      "description": "Sprowadzanie aut z Niemiec na zamówienie: zakup na aukcjach B2B (BCA, AUTO1, Autobid), weryfikacja pojazdu w Niemczech, transport i pomoc w rejestracji w Polsce.",
      "email": "kontakt@sprowadzoneauto.pl",
      "telephone": "+49 156 79264391",
      "vatID": "DE361829942",
      "foundingDate": "2023",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bremer Heerstraße 7A",
        "addressLocality": "Osterholz-Scharmbeck",
        "postalCode": "27711",
        "addressCountry": "DE"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "22:00"
      },
      "areaServed": [
        { "@type": "Country", "name": "Polska" },
        { "@type": "Country", "name": "Niemcy" }
      ],
      "knowsLanguage": ["pl", "de"],
      "priceRange": "$$",
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
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "SprowadzoneAuto.pl",
      "alternateName": "Sprowadzone Auto",
      "inLanguage": "pl-PL",
      "publisher": { "@id": `${siteUrl}/#organization` }
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      "name": "Sprowadzanie aut z Niemiec na zamówienie",
      "serviceType": "Import samochodów z Niemiec, zakup na aukcjach B2B, weryfikacja pojazdu, transport",
      "provider": { "@id": `${siteUrl}/#organization` },
      "areaServed": { "@type": "Country", "name": "Polska" },
      "offers": {
        "@type": "Offer",
        "price": "2500",
        "priceCurrency": "PLN",
        "description": "Stała prowizja za pośrednictwo w zakupie auta z Niemiec",
        "url": `${siteUrl}/kontakt`
      }
    }
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="manifest" href="/manifest.json" />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined' && localStorage.getItem('cookie-consent') === 'accepted') {
              try {
                var s = document.createElement('script');
                s.src = 'https://www.googletagmanager.com/gtag/js?id=G-VPZB549MMW';
                s.async = true;
                s.onerror = function() {
                  console.warn('Google Analytics script failed to load');
                };
                document.head.appendChild(s);
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VPZB549MMW');
              } catch (e) {
                console.warn('Google Analytics initialization failed:', e);
              }
            }
          `}
        </Script>
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
            <SeoFooter />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
