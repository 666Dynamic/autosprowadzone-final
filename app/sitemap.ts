import { MetadataRoute } from 'next'
import { posts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sprowadzoneauto.pl'

    return [
        {
            url: baseUrl,
            lastModified: new Date('2026-02-08'),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/aukcje`,
            lastModified: new Date('2026-02-01'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kalkulator`,
            lastModified: new Date('2026-01-20'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/weryfikacja`,
            lastModified: new Date('2026-02-01'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kontakt`,
            lastModified: new Date('2026-01-20'),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date('2026-01-20'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/polityka-prywatnosci`,
            lastModified: new Date('2026-01-20'),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${baseUrl}/regulamin`,
            lastModified: new Date('2026-01-20'),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${baseUrl}/datenschutz`,
            lastModified: new Date('2026-01-20'),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date('2026-02-08'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
    ]
}
