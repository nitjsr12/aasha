// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getPostBySlug, getLatestPosts, getCategories } from "@/lib/wordpress";
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };

  const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160);
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const absoluteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`;

  return {
    title: post.title.rendered,
    description: cleanExcerpt,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: post.title.rendered,
      description: cleanExcerpt,
      url: absoluteUrl,
      type: 'article',
      publishedTime: post.date,
      images: featuredImage ? [{
        url: new URL(featuredImage, process.env.NEXT_PUBLIC_SITE_URL).toString(),
        width: 1200,
        height: 630,
        alt: post.title.rendered,
      }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.rendered,
      description: cleanExcerpt,
      images: featuredImage ? [new URL(featuredImage, process.env.NEXT_PUBLIC_SITE_URL).toString()] : [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);
  const latestPosts = await getLatestPosts();
  const categories = await getCategories();

  if (!post) return notFound();

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const absoluteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`;
  const shareTitle = `Check out: ${post.title.rendered}`;
  const readingTime = Math.ceil(post.content.rendered.split(' ').length / 200);

  return (
    <>
      {/* Full-width Hero Banner */}
      {featuredImage && (
        <div className="w-full relative h-[60vh] max-h-[800px]">
          <Image
            src={featuredImage}
            alt={post.title.rendered}
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
        </div>
      )}

      {/* Main Content Container */}
      <div className="w-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article Content */}
            <div className="lg:w-2/3">
              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm mb-6">
                <span className="text-primary font-medium">
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </span>
                
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                {post.title.rendered}
              </h1>

              {/* Author and Share Section */}
              <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="flex items-center gap-3">
                    
                    <div>
                      
                      <p className="text-sm text-muted-foreground">
                        {readingTime} min read
                      </p>
                    </div>
                  </div>

                  <ShareButtons 
                    url={absoluteUrl} 
                    title={post.title.rendered}
                    shareTitle={shareTitle}
                  />
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-8 lg:sticky lg:top-8 lg:h-fit">
              {/* Latest Posts */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
                <ul className="space-y-4">
                  {latestPosts.map((latestPost) => (
                    <li key={latestPost.id}>
                      <Link href={`/blog/${latestPost.slug}`} className="group">
                        <div className="flex items-start gap-3">
                          {latestPost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                            <div className="relative w-16 h-16 flex-shrink-0">
                              <Image
                                src={latestPost._embedded['wp:featuredmedia'][0].source_url}
                                alt=""
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="text-sm font-medium group-hover:text-primary transition">
                              {latestPost.title.rendered}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">
                              {format(new Date(latestPost.date), "MMM d, yyyy")}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link 
                        href={`/category/${category.slug}`} 
                        className="flex justify-between items-center py-2 hover:text-primary transition"
                      >
                        <span>{category.name}</span>
                       
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}