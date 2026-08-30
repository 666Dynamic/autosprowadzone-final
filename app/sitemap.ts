import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// WYMUSZAMY Node.js runtime (fs nie działa w Edge)
export const runtime = 'nodejs'

export const revalidate = 3600

function getBlogSlugs() {
    try {
        const postsDir = path.join(process.cwd(), 'content', 'blog')
        if (!fs.existsSync(postsDir)) {
            console.error('Sitemap: content/blog not found at', postsDir)
            return []
        }
        const files = fs.readdirSync(postsDir)
        return files
            .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
            .map(f => f.replace(/\.(mdx|md)$/, ''))
    } catch (e) {
        console.error('Sitemap error:', e)
        return []
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://sprowadzoneauto.pl'
    const slugs = getBlogSlugs()
    
    console.log(`Sitemap: ${slugs.length} blog posts found`)
    console.log('Slugs:', slugs) // Zobaczysz w logach Vercel

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

    const articles: MetadataRoute.Sitemap = slugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))
    
    return [...mainPages, ...articles]
}