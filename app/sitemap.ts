import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export const revalidate = 3600

const baseUrl = 'https://www.sprowadzoneauto.pl'

// Data ostatniej istotnej zmiany treści stron statycznych.
// Aktualizuj przy realnej zmianie treści — Google ignoruje lastmod, który zmienia się przy każdym requeście.
const PAGES_UPDATED = '2026-11-02'
const LEGAL_UPDATED = '2026-01-20'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPosts()
    const latestPost = posts[0]?.dateModified ?? PAGES_UPDATED

    const mainPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: PAGES_UPDATED },
        { url: `${baseUrl}/kalkulator`, lastModified: PAGES_UPDATED },
        { url: `${baseUrl}/aukcje`, lastModified: PAGES_UPDATED },
        { url: `${baseUrl}/weryfikacja`, lastModified: PAGES_UPDATED },
        { url: `${baseUrl}/blog`, lastModified: latestPost },
        { url: `${baseUrl}/faq`, lastModified: PAGES_UPDATED },
        { url: `${baseUrl}/o-nas`, lastModified: PAGES_UPDATED },
        { url: `${baseUrl}/kontakt`, lastModified: PAGES_UPDATED },
        { url: `${baseUrl}/polityka-prywatnosci`, lastModified: LEGAL_UPDATED },
        { url: `${baseUrl}/regulamin`, lastModified: LEGAL_UPDATED },
        { url: `${baseUrl}/datenschutz`, lastModified: LEGAL_UPDATED },
    ]

    const articles: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.dateModified,
    }))

    return [...mainPages, ...articles]
}
