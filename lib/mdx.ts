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
    date: string;
    dateISO: string;
    slug: string;
    keywords?: string[];
    author?: string;
    readTime?: string;
}

export interface Post extends PostMetadata {
    content: string;
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
                    keywords: data.keywords || [],
                    author: data.author || 'SprowadzoneAuto.pl',
                    readTime: data.readTime || '5 min',
                } as PostMetadata;
            })
            // ⚡ Bolt: Optimize date sorting by using string comparison instead of instantiating Date objects
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
        
        return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            dateISO: data.dateISO,
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
            .map((file) => file.replace('.mdx', ''));
    } catch (error) {
        console.error('Error reading post slugs:', error);
        return [];
    }
}
