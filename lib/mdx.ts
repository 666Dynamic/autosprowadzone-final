import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface PostMetadata {
    title: string;
    excerpt: string;
    seoTitle?: string;
    metaDescription?: string;
    date: string;
    dateISO: string;
    dateModified: string;
    slug: string;
    keywords?: string[];
    author?: string;
    readTime?: string;
}

export interface Post extends PostMetadata {
    content: string;
}

function isPublished(dateISO: string): boolean {
    return new Date(dateISO).getTime() <= Date.now();
}

// Pobierz wszystkie posty
export async function getAllPosts(): Promise<PostMetadata[]> {
    try {
        const files = fs.readdirSync(contentDirectory);
        
        const posts = files
            .filter((file) => file.endsWith('.mdx'))
            .map((file) => {
                const slug = file.replace('.mdx', '');
                const filePath = path.join(contentDirectory, file);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data } = matter(fileContents);
                
                return {
                    slug,
                    title: data.title,
                    excerpt: data.excerpt,
                    date: data.date,
                    dateISO: data.dateISO,
                    dateModified: data.dateModified || data.dateISO,
                    keywords: data.keywords || [],
                    author: data.author || 'SprowadzoneAuto.pl',
                    readTime: data.readTime || '5 min',
                } as PostMetadata;
            })
            .filter((post) => isPublished(post.dateISO))
            .sort((a, b) => (b.dateISO > a.dateISO ? 1 : b.dateISO < a.dateISO ? -1 : 0));

        return posts;
    } catch (error) {
        console.error('Error reading blog posts:', error);
        return [];
    }
}

// Pobierz pojedynczy post
export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const filePath = path.join(contentDirectory, `${slug}.mdx`);
        
        if (!fs.existsSync(filePath)) {
            return null;
        }
        
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        if (!isPublished(data.dateISO)) {
            return null;
        }
        
        return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            seoTitle: data.seoTitle,
            metaDescription: data.metaDescription,
            date: data.date,
            dateISO: data.dateISO,
            dateModified: data.dateModified || data.dateISO,
            keywords: data.keywords || [],
            author: data.author || 'SprowadzoneAuto.pl',
            readTime: data.readTime || '5 min',
            content,
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}

const STOPWORDS = new Set(['z', 'w', 'i', 'na', 'do', 'czy', 'jak', 'się', 'co', 'to', 'auta', 'auto', 'aut', 'niemiec', 'roku', '2026', 'a', 'o', 'po', 'przy', 'od', 'nie']);

function topicTokens(post: PostMetadata): Set<string> {
    const text = [post.title, ...(post.keywords || [])].join(' ').toLowerCase();
    return new Set(text.split(/[^a-ząćęłńóśźż0-9]+/).filter((w) => w.length > 2 && !STOPWORDS.has(w)));
}

// Powiązane artykuły po wspólnych słowach kluczowych (zamiast "dwóch najnowszych"),
// żeby linkowanie wewnętrzne łączyło artykuły o tym samym temacie.
export function getRelatedPosts(post: PostMetadata, allPosts: PostMetadata[], limit = 3): PostMetadata[] {
    const tokens = topicTokens(post);
    return allPosts
        .filter((p) => p.slug !== post.slug)
        .map((p) => {
            let score = 0;
            topicTokens(p).forEach((t) => { if (tokens.has(t)) score++; });
            return { p, score };
        })
        .sort((a, b) => b.score - a.score || new Date(b.p.dateISO).getTime() - new Date(a.p.dateISO).getTime())
        .slice(0, limit)
        .map(({ p }) => p);
}

// Serializuj MDX do renderowania
export async function serializeMDX(content: string) {
    return await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
        },
    });
}

// Pobierz wszystkie slugi (dla generateStaticParams)
export async function getAllPostSlugs(): Promise<string[]> {
    try {
        const files = fs.readdirSync(contentDirectory);
        return files
            .filter((file) => file.endsWith('.mdx'))
            .map((file) => {
                const slug = file.replace('.mdx', '');
                const filePath = path.join(contentDirectory, file);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data } = matter(fileContents);

                return {
                    slug,
                    dateISO: data.dateISO,
                };
            })
            .filter((post) => isPublished(post.dateISO))
            .map((post) => post.slug);
    } catch (error) {
        console.error('Error reading post slugs:', error);
        return [];
    }
}
