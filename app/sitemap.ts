import { MetadataRoute } from 'next'

export const revalidate = 3600

const blogSlugs = [
    'akcyza-2026-stawki',
    'auta-flotowe-z-niemiec-jak-rozpoznac-dobry-egzemplarz',
    'auta-poleasingowe-z-niemiec-czy-warto',
    'auto-po-szkodzie-z-niemiec-czy-warto',
    'auto-z-niemiec-od-osoby-prywatnej-czy-z-aukcji',
    'auto1-jak-licytowac',
    'bca-europe-przewodnik',
    'czy-warto-sprowadzic-hybryde-z-niemiec',
    'diesel-benzyna-czy-hybryda-z-niemiec',
    'ile-trwa-sprowadzenie-auta-z-niemiec',
    'import-samemu-czy-przez-posrednika',
    'jak-czytac-raport-szkod-i-raport-aukcyjny',
    'jak-sprawdzic-auto-z-niemiec-przed-zakupem',
    'jak-sprawdzic-przebieg-auta-z-niemiec',
    'koszt-sprowadzenia-auta-z-niemiec-2026',
    'openlane-adesa-jak-kupowac-auto',
    'oplaty-aukcyjne-wyjasnienie',
    'oszustwa-przy-sprowadzaniu-aut-z-niemiec',
    'raporty-rzeczoznawcow-standardy',
    'rejestracja-auta-z-niemiec-2026',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.sprowadzoneauto.pl'
    const currentDate = new Date()

    const mainPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.95 },
        { url: `${baseUrl}/aukcje`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/weryfikacja`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/kalkulator`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/o-nas`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/kontakt`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/polityka-prywatnosci`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${baseUrl}/regulamin`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${baseUrl}/datenschutz`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    ]

    const articles: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))
    
    return [...mainPages, ...articles]
}