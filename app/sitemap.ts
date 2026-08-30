import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export const revalidate = 3600 // Revalidate hourly instead of daily

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://sprowadzoneauto.pl'
    const posts = await getAllPosts()

    const currentDate = new Date()
    
    // Main pages with higher priority
    const mainPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'daily', // Changed from weekly to daily
            priority: 0.95, // Increased from 0.8 to 0.95
        },
        {
            url: `${baseUrl}/aukcje`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/weryfikacja`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kalkulator`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/kontakt`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/polityka-prywatnosci`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/regulamin`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/datenschutz`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    // Blog articles with high priority for indexing
    const articles: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.dateISO),
        changeFrequency: 'monthly' as const,
        priority: 0.8, // Increased from 0.7 to 0.8 to boost blog crawl priority
    }))
    
    return [...mainPages, ...articles]
}
