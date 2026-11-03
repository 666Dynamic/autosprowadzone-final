const SITE_URL = 'https://www.sprowadzoneauto.pl'

// BreadcrumbList dla podstron pierwszego poziomu: Strona główna → podstrona.
export function breadcrumbJsonLd(name: string, path: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Strona główna', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
        ],
    }
}
