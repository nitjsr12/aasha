"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import type { WordPressPost } from "@/lib/wordpress";

// Add this function to generate static paths
export async function generateStaticParams() {
  // Fetch your blog posts from WordPress API
  const response = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed&per_page=100');
  const posts: WordPressPost[] = await response.json();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostContent({ post }: { post: WordPressPost | null }) {
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Banner */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url
            ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${post._embedded['wp:featuredmedia'][0].source_url}")`
            : 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.1")'
        }}
      >
        <motion.div 
          className="text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-5xl font-bold mb-6"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <p className="text-xl mb-4">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          
          <div className="mt-12">
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}