import { z } from "zod";

// Schema for WordPress post
const postSchema = z.object({
  id: z.number(),
  date: z.string(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  excerpt: z.object({
    rendered: z.string(),
  }),
  featured_media: z.number().optional(),
  _embedded: z.object({
    'wp:featuredmedia': z.array(
      z.object({
        source_url: z.string(),
      })
    ).optional(),
  }).optional(),
  slug: z.string(),
});

export type WordPressPost = z.infer<typeof postSchema>;

const WORDPRESS_API_URL = 'https://admin.aashakiekkiran.org/wp-json/wp/v2';

export async function getPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?_embed`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return z.array(postSchema).parse(data);
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?_embed&slug=${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const data = await response.json();
    const posts = z.array(postSchema).parse(data);
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}

export async function getPost(id: number): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts/${id}?_embed`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const data = await response.json();
    return postSchema.parse(data);
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}
// Schema for WordPress category
const categorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
});

export type WordPressCategory = z.infer<typeof categorySchema>;

// Get latest 5 posts (you can change count)
export async function getLatestPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?_embed&per_page=5`);
    if (!response.ok) {
      throw new Error('Failed to fetch latest posts');
    }
    const data = await response.json();
    return z.array(postSchema).parse(data);
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }
}

// Get all categories
export async function getCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return z.array(categorySchema).parse(data);
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
}
