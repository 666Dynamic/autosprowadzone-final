import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://sprowadzoneauto.pl'
    const posts = await getAllPosts()

    const currentDate = new Date()
    
    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/aukcje`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kalkulator`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/weryfikacja`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kontakt`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/polityka-prywatnosci`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${baseUrl}/regulamin`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${baseUrl}/datenschutz`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.dateISO),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
    ]
}
