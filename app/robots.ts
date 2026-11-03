import { MetadataRoute } from 'next'

// /w-budowie i /test-logos mają meta noindex — nie blokujemy ich tutaj,
// bo Googlebot musi móc je pobrać, żeby zobaczyć noindex.
// Obrazy OG muszą być dostępne dla Google (miniatury w wynikach / Discover).
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/promo/'],
            },
        ],
        sitemap: 'https://www.sprowadzoneauto.pl/sitemap.xml',
    }
}
