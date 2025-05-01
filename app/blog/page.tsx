"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { getPosts, type WordPressPost } from "@/lib/wordpress";
import { format } from "date-fns";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function BlogPage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[500px] overflow-hidden">
             <Image
               src="/images/banner-3.jpg"
               alt="Our previous initiatives making impact"
               fill
               className="object-cover"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex flex-col justify-end pb-16 px-8 text-white">
               <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 className="max-w-4xl mx-auto text-center"
               >
                 <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
                 <p className="text-xl md:text-2xl mb-8">
                 Stories of impact, hope, and transformation from our community
                 </p>
               </motion.div>
             </div>
           </section>

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading posts...</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {posts.map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20">
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <img 
                      src={post._embedded['wp:featuredmedia'][0].source_url} 
                      alt={post.title.rendered} 
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="text-sm text-primary mb-2">
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </div>
                    <h2 
                      className="text-xl font-bold mb-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div 
                      className="text-muted-foreground mb-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full">Read More</Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
}