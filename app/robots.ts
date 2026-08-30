import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/w-budowie', '/test-logos', '/promo/', '/opengraph-image', '/*?*', '/page'],
            },
        ],
        sitemap: [
            'https://sprowadzoneauto.pl/sitemap.xml',
        ],
    }
}
