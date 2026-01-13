import { posts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Share2 } from "lucide-react"

interface BlogPostPageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        return {
            title: "Post nie znalezionY",
        }
    }

    return {
        title: `${post.title} | autosprowadzone.pl`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
        },
    }
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto px-4 md:px-8 py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
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
                            {post.date}
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
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4"
                    dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />

                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
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
                        <Button variant="outline" size="icon">
                            <Share2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    )
}
