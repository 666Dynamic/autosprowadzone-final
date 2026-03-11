import fs from 'fs/promises';
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
        const files = await fs.readdir(contentDirectory);
        
        const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

        const postsPromises = mdxFiles.map(async (file) => {
            const slug = file.replace('.mdx', '');
            const filePath = path.join(contentDirectory, file);
            const fileContents = await fs.readFile(filePath, 'utf8');
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
        });

        const posts = await Promise.all(postsPromises);
        
        return posts.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error reading blog posts:', errorMessage);
        return [];
    }
}

// Pobierz pojedynczy post
export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const filePath = path.join(contentDirectory, `${slug}.mdx`);
        
        // Use direct file read to save an existence check (ENOENT handled in catch)
        const fileContents = await fs.readFile(filePath, 'utf8');
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
    } catch (error: unknown) {
        if (typeof error === 'object' && error !== null && 'code' in error && (error as { code: unknown }).code === 'ENOENT') {
            return null; // File not found
        }
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error(`Error reading post ${slug}:`, errorMessage);
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
        const files = await fs.readdir(contentDirectory);
        return files
            .filter((file) => file.endsWith('.mdx'))
            .map((file) => file.replace('.mdx', ''));
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error reading post slugs:', errorMessage);
        return [];
    }
}
