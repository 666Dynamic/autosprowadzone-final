"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"
import { getAllPosts } from "@/lib/mdx"

interface FeaturedArticlesProps {
    limit?: number
}

export async function FeaturedArticles({ limit = 3 }: FeaturedArticlesProps) {
    const posts = await getAllPosts()
    const featured = posts.slice(0, limit)

    if (featured.length === 0) {
        return null
    }

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            
            {/* Smooth fade transitions top and bottom */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-0" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                        <BookOpen className="w-4 h-4" /> Artykuły & Poradniki
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-foreground">
                        Naucz się <span className="text-primary italic">Importu</span>
                    </h2>
                    <p className="text-base text-muted-foreground font-medium max-w-xl mx-auto">
                        Porady, kalkulacje, strategie. Wszystko co musisz wiedzieć o sprowadzaniu aut z Niemiec.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
                            <Card className="h-full border border-border/50 rounded-xl md:rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10 bg-card/50">
                                <CardHeader className="pb-3">
                                    <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{post.date}</div>
                                    <CardTitle className="text-lg md:text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <CardDescription className="text-sm text-muted-foreground font-medium leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </CardDescription>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                                        Czytaj więcej <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/blog">
                        <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                            Przejdź do Bloga
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
