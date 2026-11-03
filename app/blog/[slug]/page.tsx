import { getPostBySlug, getAllPostSlugs, getAllPosts, getRelatedPosts } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Share2 } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

export const revalidate = 86400

interface BlogPostPageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return {
            title: "Post nie znaleziony",
        }
    }

    // Short SERP-friendly variants; the full title/excerpt stay as H1 and lead
    const title = post.seoTitle || post.title
    const description = post.metaDescription || post.excerpt

    return {
        title,
        description,
        keywords: post.keywords || ['sprowadzanie aut z niemiec', 'import aut', 'aukcje b2b'],
        robots: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
        alternates: {
            canonical: `https://www.sprowadzoneauto.pl/blog/${slug}`,
        },
        openGraph: {
            title: `${title} | SprowadzoneAuto.pl`,
            description,
            type: "article",
            publishedTime: post.dateISO,
            modifiedTime: post.dateModified,
            url: `https://www.sprowadzoneauto.pl/blog/${slug}`,
            authors: ['SprowadzoneAuto.pl'],
            tags: post.keywords || [],
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | SprowadzoneAuto.pl`,
            description,
        },
    }
}

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs()
    return slugs.map((slug) => ({
        slug: slug,
    }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const allPosts = await getAllPosts()

    const baseUrl = "https://www.sprowadzoneauto.pl"
    const postUrl = `${baseUrl}/blog/${post.slug}`
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Strona główna",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${baseUrl}/blog`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": postUrl
            }
        ]
    }

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.dateISO,
        "dateModified": post.dateModified,
        "inLanguage": "pl-PL",
        "keywords": post.keywords?.join(", ") || "sprowadzanie aut z niemiec",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": postUrl
        },
        "image": {
            "@type": "ImageObject",
            "url": `${postUrl}/opengraph-image`,
            "width": 1200,
            "height": 630
        },
        "author": {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
            "name": "SprowadzoneAuto.pl",
            "url": `${baseUrl}/o-nas`
        },
        "publisher": { "@id": `${baseUrl}/#organization` },
        "isPartOf": { "@id": `${baseUrl}/#website` }
    }

    const relatedPosts = getRelatedPosts(post, allPosts, 3)

    return (
        <article className="container mx-auto px-4 md:px-8 py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
                <Link href="/blog">
                    <Button variant="ghost" size="sm" className="mb-8 group">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Powrót do bloga
                    </Button>
                </Link>

                <div className="space-y-4 mb-12">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.dateISO}>{post.date}</time>
                            {post.dateModified !== post.dateISO && (
                                <span>· aktualizacja: <time dateTime={post.dateModified}>{new Date(post.dateModified).toLocaleDateString("pl-PL")}</time></span>
                            )}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-border" />
                            Poradnik Importera
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-base text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                        {post.excerpt}
                    </p>
                </div>

                <div
                    className="prose prose-slate dark:prose-invert max-w-none 
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-li:text-muted-foreground
                    prose-strong:text-foreground
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:font-black
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-table:border-collapse prose-table:w-full prose-table:my-6
                    prose-thead:bg-muted
                    prose-th:p-3 prose-th:text-left prose-th:font-bold prose-th:border prose-th:border-border
                    prose-td:p-3 prose-td:border prose-td:border-border
                    prose-tr:border-b prose-tr:border-border"
                >
                    <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
                </div>

                <aside className="mt-16 p-6 md:p-8 rounded-2xl border border-border bg-muted/30">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">O autorze</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Artykuł przygotował zespół <Link href="/o-nas" className="text-foreground font-bold hover:text-primary">SprowadzoneAuto.pl</Link> (Miami
                        Autocenter GmbH, Osterholz-Scharmbeck). Na co dzień zajmujemy się{" "}
                        <Link href="/" className="text-primary font-bold hover:underline">sprowadzaniem aut z Niemiec na zamówienie</Link> —
                        kupujemy samochody na <Link href="/aukcje" className="text-primary font-bold hover:underline">aukcjach B2B</Link>,
                        sprawdzamy je na miejscu i dostarczamy do klientów w całej Polsce. Koszt importu konkretnego auta policzysz w{" "}
                        <Link href="/kalkulator" className="text-primary font-bold hover:underline">kalkulatorze akcyzy i kosztów importu</Link>.
                    </p>
                </aside>

                <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="font-bold mb-1">Masz pytania dotyczące tego tematu?</p>
                        <p className="text-sm text-muted-foreground">Skontaktuj się z naszym ekspertem.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/kontakt">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                Zapytaj eksperta
                            </Button>
                        </Link>
                        <Button variant="outline" size="icon" aria-label="Udostępnij artykuł">
                            <Share2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Powiązane artykuły */}
                <div className="mt-12">
                    <h2 className="text-lg md:text-xl font-black uppercase tracking-tight mb-4">Przeczytaj też</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {relatedPosts.map((rel) => (
                            <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group border border-border rounded-2xl p-4 hover:border-primary/40 transition-colors">
                                <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">{rel.date}</div>
                                <div className="font-black text-foreground group-hover:text-primary transition-colors">{rel.title}</div>
                                <div className="text-sm text-muted-foreground mt-1">{rel.excerpt}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}
