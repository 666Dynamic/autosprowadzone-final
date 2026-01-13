import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Blog - Poradnik Importera | autosprowadzone.pl",
    description: "Artykuły i porady dotyczące sprowadzania samochodów z Niemiec, Belgii i Holandii.",
}

import { posts } from "@/lib/blog"

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
            <div className="max-w-4xl mx-auto mb-20 space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                    Baza Wiedzy & Newsy
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none italic text-foreground">
                    Blog <br /><span className="text-primary not-italic">Importeria</span>
                </h1>
                <p className="text-base text-muted-foreground font-medium leading-relaxed">
                    Najnowsze informacje ze świata motoryzacji, poradniki i kulisy importu aut z Niemiec.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                        <Card className="h-full border-2 border-border rounded-[2rem] md:rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5 bg-card">
                            <CardHeader className="p-6 md:p-8 pb-4">
                                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-4">{post.date}</div>
                                <CardTitle className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 md:p-8 pt-0 space-y-4 md:space-y-6">
                                <CardDescription className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                                    {post.excerpt}
                                </CardDescription>
                                <div className="pt-2 md:pt-4 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                                    Czytaj więcej <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
