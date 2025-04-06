import { getPostBySlug, getPosts } from "@/lib/wordpress";
import BlogPostContent from "./blog-post-content";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return <BlogPostContent post={post} />;
}