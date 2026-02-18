import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Poradnik Importera Aut z Niemiec",
  description:
    "Artykuły i porady dotyczące sprowadzania samochodów z Niemiec, Belgii i Holandii. Przewodniki po aukcjach BCA i AUTO1, koszty importu, procedury rejestracji.",
  alternates: {
    canonical: "https://sprowadzoneauto.pl/blog",
  },
  openGraph: {
    title: "Blog — Poradnik Importera Aut z Niemiec",
    description:
      "Artykuły i porady: aukcje BCA, AUTO1, koszty importu, procedury rejestracji aut z zagranicy.",
    url: "https://sprowadzoneauto.pl/blog",
  },
};

import { getAllPosts } from "@/lib/mdx";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-24">
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
          Baza Wiedzy & Newsy
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none italic text-foreground">
          Blog <br />
          <span className="text-primary not-italic">Importeria</span>
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
          Najnowsze informacje ze świata motoryzacji, poradniki i kulisy importu
          aut z Niemiec.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="h-full border border-border rounded-xl sm:rounded-2xl lg:rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5 bg-card">
              <CardHeader className="p-5 sm:p-6 md:p-7 lg:p-8 pb-3 sm:pb-4">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary mb-2 sm:mb-3">
                  {post.date}
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 sm:px-6 md:px-7 lg:px-8 pb-5 sm:pb-6 md:pb-7 lg:pb-8 pt-0 space-y-3 sm:space-y-4">
                <CardDescription className="text-sm sm:text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                <div className="pt-1 sm:pt-2 md:pt-3 flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                  Czytaj więcej{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
